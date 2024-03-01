import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as Auth from "../../utils/Authorization";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { api } from "../../utils/Api";
import { getToken, setToken, deleteToken } from "../../utils/utils";

import {
  INCORRECT_PASSWORD,
  FAILURE_USER_UPDATE_MESSAGE,
  SUCCESSFUL_USER_UPDATE_MESSAGE,
} from "../../utils/constants";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const location = useLocation();
  const navigate = useNavigate();

  const [token, setTokenState] = useState(getToken());
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSuccess, setIsSucces] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMyMovies()])
        .then(([userData, cardData]) => {
          setLoggedIn(true);
          setCurrentUser(userData);
          setSavedMovies(cardData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [loggedIn]);

  function handleAuthProfile(email, password) {
    Auth.login(email, password)
      .then((res) => {
        if (res && res.token) {
          handleLogin(res);
        }
      })
      .catch((err) => {
        if (err.name === "ValidationError") {
          console.log("Введены некорректные данные");
        } else if (err.kind === "ObjectId") {
          console.log("Введены некорректные данные");
        }
        setErrorMessage(INCORRECT_PASSWORD);
      });
  }

  // Log-in
  function handleLogin(userData) {
    setToken(userData.token);
    setTokenState(userData.token);
    setLoggedIn(true);
    navigate("/movies");
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setLoggedIn(false);
      return;
    }
    Auth.getInfo(token)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate]);

  if (loggedIn === undefined) {
    return null;
  }

  // обновление пользователя
  function handleProfileUpdateUser(inputValues) {
    api
      .editProfile(inputValues)
      .then((newUser) => {
        setCurrentUser(newUser);
        setErrorMessage(SUCCESSFUL_USER_UPDATE_MESSAGE);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(FAILURE_USER_UPDATE_MESSAGE);
      });
  }

  // функционал лайка
  function handleSetLike(data) {
    const savedMovieSet = savedMovies.some(
      (movie) => movie.movieId === data.id
    );
    if (!savedMovieSet) {
      api
        .saveNewMovie(data)
        .then((newCard) => {
          setSavedMovies([...savedMovies, newCard]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const likeMovieSet = savedMovies.filter((movie) => {
        return movie.movieId === data.id;
      });
      const movieId = likeMovieSet[0]._id;
      api
        .deleteMyMovie(movieId)
        .then(() => {
          setSavedMovies((state) => state.filter((c) => c._id !== movieId));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  // удаление карточки
  function handleMovieDelete(movie) {
    api
      .deleteMyMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // логаут и сброс
  function handleLogout() {
    setLoggedIn(false);
    deleteToken();
    localStorage.removeItem("moviesList");
    localStorage.removeItem("searchResults");
    localStorage.removeItem("shortFilmsList");
    localStorage.removeItem("shortFilmsListChecked");
    localStorage.removeItem("searchValue");
    navigate("/", { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {["/", "/movies", "/saved-movies", "/profile"].includes(
          location.pathname
        ) && <Header loggedIn={loggedIn}></Header>}
        <Routes>
          {!loggedIn && (
            <Route
              path="/signup"
              element={
                <Register
                  handleAuthProfile={handleAuthProfile}
                  handleLogin={handleLogin}
                  setLoggedIn={setLoggedIn}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  isSuccess={isSuccess}
                  setIsSucces={setIsSucces}
                />
              }
            ></Route>
          )}
          {!loggedIn && (
            <Route
              path="/signin"
              element={
                <Login
                  handleAuthProfile={handleAuthProfile}
                  handleLogin={handleLogin}
                  setLoggedIn={setLoggedIn}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              }
            ></Route>
          )}
          <Route exact path="/" element={<Main />}></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                handleUpdateUser={handleProfileUpdateUser}
                handleLogout={handleLogout}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onMovieLike={handleSetLike}
              />
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onMovieDelete={handleMovieDelete}
              />
            }
          ></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        {["/", "/movies", "/saved-movies"].includes(location.pathname) && (
          <Footer></Footer>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}