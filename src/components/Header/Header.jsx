import Navigation from "../../components/Navigation/Navigation";
import NavTab from "../../components/main/NavTab/NavTab";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import greenCircle from "../../images/circlelogo.svg";

export default function Header(props) {
  const { loggedIn } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [blueColor, setblueColor] = useState(false);

  useEffect(() => {
    setblueColor(location.pathname === "/" ? true : false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      style={{ backgroundColor: blueColor ? "#073042" : "#FFFFFF" }}
      className="header"
    >
      <div className="header__container">
        <Link className="header__circle" to="/">
          <img
            src={greenCircle}
            alt="Зеленый Круг Логотип"
            className="header__link"
          ></img>
        </Link>
        <Navigation loggedIn={loggedIn}></Navigation>
        {loggedIn && (
          <button
            type="button"
            className={`header__menu-icon ${location.pathname === "/" ? "header__menu-icon_main-page" : ""}`}
            onClick={toggleMobileMenu}
          ></button>
        )}
        <NavTab
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        ></NavTab>
      </div>
    </header>
  );
}