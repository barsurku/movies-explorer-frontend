import MoviesCard from "../MoviesCard/MoviesCard";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

import {
  WINDOW_1280,
  WINDOW_1280_SIZE,
  WINDOW_1280_CARDS,
  WINDOW_768,
  WINDOW_768_SIZE,
  WINDOW_768_CARDS,
  WINDOW_420,
  WINDOW_420_SIZE,
  WINDOW_420_CARDS,
  WINDOW_230_SIZE,
} from "../../../utils/constants";

export default function MoviesCardList({
  savedMovies,
  foundedMovies,
  onMovieLike,
  onMovieDelete,
  searchValue,
}) {
  const location = useLocation();

  const [windowState, setWindowState] = useState(window.innerWidth);
  const [moviesVisible, setMoviesVisible] = useState(0);
  const moviesList = foundedMovies.slice(0, moviesVisible);
  const [message, setMessage] = useState("");

  function allMovies() {
    if (windowState >= WINDOW_1280) {
      setMoviesVisible(WINDOW_1280_SIZE);
    } else if (windowState >= WINDOW_768) {
      setMoviesVisible(WINDOW_768_SIZE);
    } else if (windowState >= WINDOW_420) {
      setMoviesVisible(WINDOW_420_SIZE);
    } else {
      setMoviesVisible(WINDOW_230_SIZE);
    }
  }

  function showMoreMoviesButton() {
    if (windowState >= WINDOW_1280) {
      setMoviesVisible(moviesVisible + WINDOW_1280_CARDS);
    } else if (windowState >= WINDOW_768) {
      setMoviesVisible(moviesVisible + WINDOW_768_CARDS);
    } else {
      setMoviesVisible(moviesVisible + WINDOW_420_CARDS);
    }
  }

  useEffect(() => {
    allMovies();
  }, [foundedMovies, windowState]);

  useEffect(() => {
    if (!searchValue && foundedMovies.length === 0) {
      setMessage("Ничего не найдено");
    } else {
      setMessage("");
    }
  }, [foundedMovies, searchValue]);

  useEffect(() => {
    const screenSize = debounce(() => setWindowState(window.innerWidth), 10);

    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  return (
    <div className="movies__wrapper">
      {foundedMovies.length !== 0 && location.pathname === "/movies" && (
        <ul className="movies__list">
          {moviesList.length !== 0 &&
            moviesList.map((movie) => (
              <li className="movies__card" key={movie.id}>
                <MoviesCard
                  savedMovies={savedMovies}
                  movie={movie}
                  onMovieLike={onMovieLike}
                  onMovieDelete={onMovieDelete}
                ></MoviesCard>
              </li>
            ))}
        </ul>
      )}
      {location.pathname === "/movies" && (
        <span className="movies__not-found">{message}</span>
      )}
      {location.pathname === "/movies" &&
        moviesVisible < foundedMovies.length && (
          <button
            className="movies__button-more"
            type="button"
            onClick={showMoreMoviesButton}
          >
            Ещё
          </button>
        )}
      {location.pathname === "/saved-movies" && (
        <ul className="movies__list">
          {foundedMovies.length !== 0 ? (
            foundedMovies.map((movie) => {
              return (
                <li key={movie.movieId} className="movies__card">
                  <MoviesCard
                    movie={movie}
                    savedMovies={savedMovies}
                    onMovieLike={onMovieLike}
                    onMovieDelete={onMovieDelete}
                  ></MoviesCard>
                </li>
              );
            })
          ) : (
            <span className="movies__empty">Ничего не найдено</span>
          )}
        </ul>
      )}
    </div>
  );
}