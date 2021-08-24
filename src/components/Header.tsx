import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../resources/images/logo.png";

const Header = (): JSX.Element => {
  return (
    <Router>
      <header>
        <Link to="/">
          <div className="image-container">
            <img className="image-container--logo" src={logo} alt="" />
          </div>
        </Link>
      </header>
    </Router>
  );
};

export default Header;
