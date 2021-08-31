import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/images/logo.png";
import SearchBar from "./SearchBar";

const Header = (): JSX.Element => {
  return (
    <header className="header l-grid__header--wrapper">
      <div className="l-grid__header__content">
        <a href="/">
          <div className="header__logo">
            <img className="header__image" src={logo} alt="" />
          </div>
        </a>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
