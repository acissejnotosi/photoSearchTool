/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Basic } from "../types/types";
import { useAppSelector } from "../redux/hooks";
import Photo from "./Photo";

const Photos = (): JSX.Element => {
  const data = useAppSelector((state) => state.data.resp);

  if (data.response !== undefined)
    return (
      <div className="l-grid-photos">
        {data?.response.results.map((photo: Basic) => {
          return <Photo id={photo.id} />;
        })}{" "}
      </div>
    );

  return <div>Ops! You have not searched for photos yet.</div>;
};

export default Photos;
