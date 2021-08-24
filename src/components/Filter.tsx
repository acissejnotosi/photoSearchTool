import React, { useState } from "react";
import { Query } from "../helpers/types";
import "../scss/main.scss";

const Filter = (): JSX.Element => {
  const [showSideContainer, setShowSideContainer] = useState<boolean>(false);
  const handleOnClick = () => {
    setShowSideContainer(true);
  };
  const handleCloseButton = () => {
    setShowSideContainer(false);
  };
  if (showSideContainer) {
    return (
      <div className="filter">
        <div id="filter--side-container" style={{ width: "500px" }}>
          <button
            type="button"
            className="close-btn"
            onClick={handleCloseButton}
          >
            &times;
          </button>
          <h1>Color</h1>
          <label className="container">
            One
            <input type="radio" checked name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
            Two
            <input type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
            Three
            <input type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
            Four
            <input type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <div>Orientation</div>
        </div>
      </div>
    );
  }
  return (
    <div className="filter">
      <button className="filter--button" type="button" onClick={handleOnClick}>
        Filters{" "}
      </button>
      <div id="filter--side-container" style={{ width: "0px" }} />
    </div>
  );
};

export default Filter;
