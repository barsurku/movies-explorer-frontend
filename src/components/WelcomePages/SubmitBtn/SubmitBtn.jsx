import { Link, useLocation } from "react-router-dom";

export default function SubmitBtn() {
  const location = useLocation();

  //одинаковая привественная страница для login и register с использованием useLocation
  return (
    <div className="buttons">
      <button type="submit" className="buttons__submit">
        {location.pathname === "/signup" ? "Зарегистрироваться" : "Войти"}
      </button>
      <div className="buttons__link">
        <span className="buttons__link-text">
          {location.pathname === "/signup"
            ? "Уже зарегистрированы?"
            : "Ещё не зарегистрированы?"}
        </span>
        <Link
          to={location.pathname === "/signup" ? "/signin" : "/signup"}
        >
          {location.pathname === "/signup" ? "Войти" : "Регистрация"}
        </Link>
      </div>
    </div>
  );
}