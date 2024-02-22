import { Link, useLocation } from "react-router-dom";

import logo from "../../images/circlelogo.svg";
import NavigationPromo from "./NavigationPromo/NavigationPromo";
import NavigationMovies from "./NavigationMobileMenu/NavigationMobileMenu";

export default function Navigation() {
  const location = useLocation();

  return (
    <section className="navigation">
      <Link to={"/"}>
        <img src={logo} alt="Логотип" className="navigation__logo" />
      </Link>
      {location.pathname === "/" ? <NavigationPromo /> : <NavigationMovies />}
    </section>
  );
}