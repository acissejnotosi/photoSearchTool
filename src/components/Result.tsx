import React from "react";

import Filter from "./Filter";
import Photos from "./Photos";

const Result = (): JSX.Element => {
  return (
    <div className="wrapper2">
      <div className="box content">
        <Filter />
        <Photos />
      </div>
    </div>
  );
};

export default Result;
