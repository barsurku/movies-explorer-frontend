import logo from "../../../images/circlelogo.svg";

import { Link, useLocation } from "react-router-dom";

//привественная надпись для login и register
export default function WelcomeText() {
  const location = useLocation();
  
  return (
    <header className="welcome-text">
      <Link to={"/"} className="welcome-text__logo-container">
        <img src={logo} alt="Логотип" className="welcome-text__logo" />
      </Link>
      <h1 className="welcome-text__title">
        {location.pathname === "/signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h1>
    </header>
  );
}