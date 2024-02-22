import { Link } from "react-router-dom";

export default function NavigationPromo() {
  return (
    <ul className="navigation-promo">
      <li>
        <Link to={"/signup"} className="navigation-promo__link">
          Регистрация
        </Link>
      </li>
      <li>
        <Link to={"/signin"} className="navigation-promo__button">
          Войти
        </Link>
      </li>
    </ul>
  );
}