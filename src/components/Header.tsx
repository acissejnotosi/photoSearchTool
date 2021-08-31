import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../resources/images/logo.png";
import SearchBar from "./SearchBar";

const Header = (): JSX.Element => {
  const history = useHistory();
  const handelClick = () => {
    history.push("/home");
  };
  return (
    <header className="header l-grid__header--wrapper">
      <div className="l-grid__header__content">
        <a href="/" onClick={handelClick}>
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
