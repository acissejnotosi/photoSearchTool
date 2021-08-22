/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Basic } from "../helpers/types";
import Photo from "./Photo";

type PhotosProps = {
  photos: Basic[] | undefined;
};

const Photos = ({ photos }: PhotosProps): JSX.Element => {
  return (
    <div>
      {photos?.map((photo) => (
        <Photo photo={photo} />
      ))}{" "}
    </div>
  );
};

export default Photos;
