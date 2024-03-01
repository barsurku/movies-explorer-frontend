import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MoviesCard(props) {
  const { movie, onMovieLike, onMovieDelete, savedMovies } = props;

  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  const baseUrl = "https://api.nomoreparties.co/";

  useEffect(() => {
    setIsLiked(savedMovies.some((m) => movie.id === m.movieId));
  }, [savedMovies, movie]);

  function getCheckTime(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  function handleLike() {
    onMovieLike(movie);
  }

  function handleRemove() {
    onMovieDelete(movie);
  }

  return (
    <div className="movie">
      <a href={movie.trailerLink} className="movie__link">
        <img
          alt={movie.nameRU}
          className="movie__photo"
          src={
            location.pathname === "/saved-movies"
              ? movie.image
              : baseUrl + movie.image.url
          }
        ></img>
      </a>
      <div className="movie__container">
        <h2 className="movie__title">{movie.nameRU}</h2>
        {location.pathname === "/movies" && (
          <button
            className={`movie__button ${isLiked && "movie__button_liked"}`}
            type="button"
            onClick={handleLike}
          ></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className="movie__button_delete"
            type="button"
            onClick={handleRemove}
          ></button>
        )}
      </div>
      <p className="movie__duration">{getCheckTime(movie.duration)}</p>
    </div>
  );
}