import React from "react";
import { Basic } from "../helpers/types";

type PhotoProps = {
  photo: Basic | undefined;
};

const Photo = ({ photo }: PhotoProps): JSX.Element => {
  return <div> {photo?.id}</div>;
};

export default Photo;
