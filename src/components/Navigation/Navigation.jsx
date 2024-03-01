import accountIcon from "../../images/accountIconn.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation(props) {
  const { loggedIn } = props;

  const location = useLocation();

  return (
    <>
      {loggedIn ? (
        <nav className="navigation">
          <div className="navigation__header-menu">
            {["/movies", "/saved-movies", "/profile"].includes(
              location.pathname
            ) && (
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "link-active" : ""}`
                }
              >
                Фильмы
              </NavLink>
            )}
            {["/movies", "/saved-movies", "/profile"].includes(
              location.pathname
            ) && (
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "link-active" : ""}`
                }
              >
                Сохранённые фильмы
              </NavLink>
            )}
            {["/"].includes(location.pathname) && (
              <NavLink
                to="/movies"
                className="navigation__link navigation__link-main"
              >
                Фильмы
              </NavLink>
            )}
            {["/"].includes(location.pathname) && (
              <NavLink
                to="/saved-movies"
                className="navigation__link navigation__link-main"
              >
                Сохранённые фильмы
              </NavLink>
            )}
          </div>
          {["/movies", "/saved-movies", "/profile"].includes(
            location.pathname
          ) && (
            <NavLink
              className={`navigation__link navigation__link-profile ${location.pathname === "/" ? "" : "navigation__link-profile_active"}`}
              to="/profile"
            >
              <span className="navigation__profile-text">Аккаунт</span>
              <img
                className="navigation__profile-icon"
                src={accountIcon}
                alt="Иконка профиля"
              ></img>
            </NavLink>
          )}
          {["/"].includes(location.pathname) && (
            <NavLink
              className="navigation__link navigation__link-profile"
              to="/profile"
            >
              <span className="navigation__profile-text">Аккаунт</span>
              <img
                src={accountIcon}
                className="navigation__profile-icon"
                alt="Значок профиля"
              ></img>
            </NavLink>
          )}
        </nav>
      ) : (
        <nav className="navigation">
          <div className="navigation__header">
            {["/"].includes(location.pathname) && (
              <NavLink
                to="/signup"
                className={`navigation__link navigation__link-main`}
              >
                Регистрация
              </NavLink>
            )}
            {["/"].includes(location.pathname) && (
              <NavLink
                className={`navigation__link navigation__link-login navigation__link-main`}
                to="/signin"
              >
                Войти
              </NavLink>
            )}
          </div>
        </nav>
      )}
    </>
  );
}