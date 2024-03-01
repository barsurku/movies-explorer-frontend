import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import Preloader from "../../components/Movies/Preloader/Preloader";
import MoviesCardList from "../../components/Movies/MoviesCardList/MoviesCardList";

import { moviesApi } from "../../utils/MoviesApi";
import { MOVIES_TIME } from "../../utils/constants";

import { useCallback, useEffect, useState } from "react";

export default function Movies({ savedMovies, onMovieLike, onMovieDelete }) {
  const [moviesList, setMoviesList] = useState([]);
  const [shortFilmsSwitcher, setShortFilmsSwitcher] = useState(false);
  const [foundedMovies, setFoundedMovies] = useState([]);
  const [searchResultsState, setSearchResultsState] = useState("");
  const [searchValue, setSearchValue] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState("");

  // Получить список фильмов с сервера
  function getMovies(searchResults) {
    if (moviesList.length !== 0) {
      detectMovies(searchResults, shortFilmsSwitcher, moviesList);
      setSearchValue(false);
      localStorage.setItem("searchValue", JSON.stringify(false));
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem("searchValue", JSON.stringify(true));
          setMoviesList(movies);
          detectMovies(searchResults, shortFilmsSwitcher, movies);
          setShortFilmsSwitcher(false);
        })
        .catch(() => {
          setErrors("Произошла ошибка");
        })
        .finally(() => setIsLoading(false));
    }
  }

  const detectMovies = useCallback((searchResults, isFiltred, movies) => {
    setFoundedMovies(
      movies.filter((movie) => {
        const existedMovie =
          movie.nameRU.toLowerCase().includes(searchResults.toLowerCase()) ||
          movie.nameEN
            .toLowerCase()
            .includes(searchResults.toLocaleLowerCase());
        return !isFiltred
          ? existedMovie
          : existedMovie && movie.duration < MOVIES_TIME;
      })
    );

    setSearchResultsState(searchResults);

    localStorage.setItem("moviesList", JSON.stringify(movies));
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
    localStorage.setItem("shortFilmsListChecked", JSON.stringify(isFiltred));
  }, []);

  useEffect(() => {
    if (localStorage.moviesList) {
      const movies = JSON.parse(localStorage.moviesList);
      const switcherCheckboxState = JSON.parse(
        localStorage.shortFilmsListChecked
      );
      const searchResults = JSON.parse(localStorage.searchResults);
      const searchValue = JSON.parse(localStorage.searchValue ?? "");

      setMoviesList(movies);
      setSearchResultsState(searchResults);
      setShortFilmsSwitcher(switcherCheckboxState);
      setSearchValue(searchValue);
      detectMovies(searchResults, switcherCheckboxState, movies);
    }
  }, []);

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          moviesList={moviesList}
          getMovies={getMovies}
          shortFilmsSwitcher={shortFilmsSwitcher}
          setShortFilmsSwitcher={setShortFilmsSwitcher}
          searchResultsState={searchResultsState}
          detectMovies={detectMovies}
        />
        {isLoading && <Preloader></Preloader>}
        <MoviesCardList
          foundedMovies={foundedMovies}
          savedMovies={savedMovies}
          onMovieLike={onMovieLike}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onMovieDelete={onMovieDelete}
        />
      </div>
    </main>
  );
}