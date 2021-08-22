import React, { useState } from "react";
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
