import React from "react";
import { Basic } from "../helpers/types";
import Filter from "./Filter";
import Photos from "./Photos";
import RelatedContent from "./RelatedContent";

type ResultProps = {
  data: Basic[] | undefined;
};

const Result = ({ data }: ResultProps): JSX.Element => {
  return (
    <div className="wrapper2">
      <div className="box sidebar">
        <RelatedContent />
      </div>
      <div className="box content">
        <Filter />
        <Photos photos={data} />
      </div>
    </div>
  );
};

export default Result;
