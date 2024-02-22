import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();

  const [blueColor, setblueColor] = useState(false);

  useEffect(() => {
    setblueColor(location.pathname === "/" ? true : false);
  }, [location]);

  return (
    <header
      style={{ backgroundColor: blueColor ? "#073042" : "#FFFFFF" }}
      className="header"
    >
      <Navigation className="navigation" />
    </header>
  );
}