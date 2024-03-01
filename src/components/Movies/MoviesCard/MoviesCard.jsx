//функционал удаления, лайка и дизлайка фильма
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie, type }) {
  const { name, duration, photo, saved } = movie;

  function getCheckTime(duration) {
    const hours = Math.trunc(duration / 3600);
    const minutes = (duration / 60) % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  const setTime = getCheckTime(duration);

  const location = useLocation();
  return (
    <li className="movies">
      <img className="movies__photo" src={photo} alt={name} />
      <div className="movies__info">
        <div className="movies__container">
          <h2 className="movies__title">{name}</h2>
          {(type === "all" && location.pathname === "/movies") ||
          location.pathname === "/movies/" ? (
            saved ? (
              <button
                type="button"
                className="movies__button movies__button_liked"
              ></button>
            ) : (
              <button
                type="button"
                className="movies__button movies__button_unliked"
              ></button>
            )
          ) : (
            <button
              type="button"
              className="movies__button movies__button_delete"
            ></button>
          )}
        </div>
        <p className="movies__duration">{setTime}</p>
      </div>
    </li>
  );
}