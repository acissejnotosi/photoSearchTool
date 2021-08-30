import React from "react";
// eslint-disable-next-line max-len
import paneImage from "../resources/images/pane-not-found-without-background.jpg";

const Error = (): JSX.Element => {
  return (
    <div className="error">
      <img src={paneImage} alt="" />
      <div className="error__message">
        Unfortunately, it was not possible to search through the photos due to
        an error or errors.
      </div>
    </div>
  );
};

export default Error;
