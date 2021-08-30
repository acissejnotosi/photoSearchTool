import React from "react";
// eslint-disable-next-line max-len
import paneImage from "../resources/images/pane-not-found-without-background.jpg";

const Error = (): JSX.Element => {
  return (
    <div className="error">
      <img src={paneImage} alt="" />
      <h1 className="error__message">
        Unfortunately, it was not possible to search through the photos due to
        an error or errors.
      </h1>
    </div>
  );
};

export default Error;
