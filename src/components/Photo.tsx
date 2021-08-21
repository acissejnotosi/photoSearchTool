import React from "react";
import { Nullable } from "unsplash-js/dist/helpers/typescript";
import { Basic } from "../helpers/types";

const Photo = (photo: Basic): JSX.Element => {
  const { color } = photo;
  return <div> {color}</div>;
};

export default Photo;
