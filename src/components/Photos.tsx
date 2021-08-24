/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Basic } from "../helpers/types";
import { useAppSelector } from "../redux/hooks";
import Photo from "./Photo";

const Photos = (): JSX.Element => {
  const data = useAppSelector((state) => state.data.resp);
  if (data.response !== undefined)
    return (
      <div>
        {data?.response.results.map((photo: Basic | undefined) => (
          <Photo photo={photo} />
        ))}{" "}
      </div>
    );

  return <div>Ops! You have not searched for photos yet.</div>;
};

export default Photos;
