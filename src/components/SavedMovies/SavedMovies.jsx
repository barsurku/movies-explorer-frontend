import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { MOVIES_TIME } from "../../utils/constants";

import { useCallback, useEffect, useState } from "react";

export default function SavedMovies({ savedMovies, onMovieDelete }) {
  const [likedMovies, setLikedMovies] = useState(savedMovies);
  const [searchSavedMoviesValue, setSearchSavedMoviesValue] = useState("");
  const [shortSavedMoviesSwitcher, setShortSavedMoviesSwitcher] =
    useState(false);

  // Получить список фильмов
  function getMovies(searchValue) {
    detectMovies(searchValue, shortSavedMoviesSwitcher, savedMovies);
  }

  const detectMovies = useCallback((searchValue, isFiltred, movies) => {
    setLikedMovies(
      movies.filter((movie) => {
        const existedMovie =
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLocaleLowerCase());
        return !isFiltred
          ? existedMovie
          : existedMovie && movie.duration < MOVIES_TIME;
      })
    );
    setSearchSavedMoviesValue(searchValue);
  }, []);

  useEffect(() => {
    detectMovies(searchSavedMoviesValue, shortSavedMoviesSwitcher, savedMovies);
  }, [
    savedMovies,
    shortSavedMoviesSwitcher,
    searchSavedMoviesValue,
    detectMovies,
  ]);

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          moviesList={savedMovies}
          getMovies={getMovies}
          detectMovies={detectMovies}
          searchValue={searchSavedMoviesValue}
          isActiveCheckbox={shortSavedMoviesSwitcher}
          setIsActiveCheckbox={setShortSavedMoviesSwitcher}
        ></SearchForm>
        <MoviesCardList
          savedMovies={likedMovies}
          foundedMovies={likedMovies}
          onMovieDelete={onMovieDelete}
        ></MoviesCardList>
      </div>
    </main>
  );
}