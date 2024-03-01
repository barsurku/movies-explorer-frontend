import { Link, NavLink } from "react-router-dom";

//работоспасобность меню в мобильной версии
export default function MobileMenu({ isMenuOpen }) {
  return (
    <div className={`mobile-menu ${isMenuOpen ? "mobile-menu_active" : ""}`}>
      <div className={`overlay ${isMenuOpen ? "overlay_active" : ""}`}>
        <ul className="overlay__links">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `overlay__link ${isActive ? "overlay-active" : ""}`
              }
              tabIndex={1}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/movies"}
              className={({ isActive }) =>
                `overlay__link ${isActive ? "overlay-active" : ""}`
              }
              tabIndex={1}
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/saved-movies"}
              className={({ isActive }) =>
                `overlay__link ${isActive ? "overlay-active" : ""}`
              }
              tabIndex={1}
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <Link to={"/profile"} className="overlay__profile" tabIndex={1}>
          <div className="overlay__profile-photo"></div>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}