import { Link, NavLink } from "react-router-dom";

import accounticon from "../../../images/accounticon.svg";
import menuClose from "../../../images/menuClose.svg";

//меню справа на мобильной версии
export default function NavTab({ isOpen, onClose }) {
  return (
    <div className={`navtab ${isOpen ? "navtab_open" : ""}`}>
      <div className="navtab__list">
        <button type="button" className="navtab__menu-icon" onClick={onClose}>
          <img
            src={menuClose}
            className="navtab__exit"
            alt="Иконка крестика"
          ></img>
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navtab__link ${isActive ? "link-active" : ""}`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `navtab__link ${isActive ? "link-active" : ""}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `navtab__link ${isActive ? "link-active" : ""}`
          }
        >
          Сохранённые фильмы
        </NavLink>
        <Link to="/profile" className="navtab__link navtab__profile-link">
          <span className="navtab__text-profile">Аккаунт</span>
          <img
            src={accounticon}
            className="navtab__icon-profile"
            alt="Иконка профиля"
          ></img>
        </Link>
      </div>
    </div>
  );
}