import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../resources/images/logo.png";

const Header = (): JSX.Element => {
  return (
    <Router>
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <img className="header__image" src={logo} alt="" />
          </div>
        </Link>
      </header>
    </Router>
  );
};

export default Header;
