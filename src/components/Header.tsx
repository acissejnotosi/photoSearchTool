import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/images/logo.png";
import SearchBar from "./SearchBar";

const Header = (): JSX.Element => {
  return (
    <header className="header wrapper">
      <div className="l-grid__header__content">
        <Link to="/">
          <div className="header__logo">
            <img className="header__image" src={logo} alt="" />
          </div>
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
