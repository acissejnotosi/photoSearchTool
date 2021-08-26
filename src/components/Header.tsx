import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../resources/images/logo.png";

const Header = (): JSX.Element => {
  return (
    <Router>
      <header>
        <Link to="/">
          <div className="logo-container">
            <img className="logo" src={logo} alt="" />
          </div>
        </Link>
      </header>
    </Router>
  );
};

export default Header;
