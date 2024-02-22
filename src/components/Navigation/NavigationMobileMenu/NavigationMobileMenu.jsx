import MobileMenu from "../../MobileMenu/MobileMenu";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavigationMobileMenu() {
  const [isNavigationMobileMenuOpen, setIsNavigationMobileMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsNavigationMobileMenuOpen(!isNavigationMobileMenuOpen);
  };

  return (
    <>
      {!isNavigationMobileMenuOpen ? (
        <button className="menu-icon" onClick={toggleMenu} />
      ) : (
        <button className="menu-icon_close" onClick={toggleMenu} />
      )}
      <MobileMenu isMenuOpen={isNavigationMobileMenuOpen} />
      <div className="menu-movies">
        <ul className="menu-movies__links">
          <li>
            <NavLink
              to={"/movies"}
              className={({ isActive }) =>
                `menu-movies__link ${isActive ? "active" : ""}`
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
                `menu-movies__link ${isActive ? "active" : ""}`
              }
              tabIndex={1}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          to={"/profile"}
          className="menu-movies__profile-link"
          tabIndex={1}
        >
          <div className="menu-movies__profile-icon"></div>
          Аккаунт
        </Link>
      </div>
    </>
  );
}