/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Basic } from "../types/types";
import { useAppSelector } from "../redux/hooks";

const Photos = (): JSX.Element => {
  const data = useAppSelector((state) => state.data.resp);

  if (data.response !== undefined)
    return (
      <div className="wrapper3">
        {data?.response.results.map((photo: Basic) => {
          return (
            <img className="photos--image" src={photo.urls.small} alt="" />
          );
        })}{" "}
      </div>
    );

  return <div>Ops! You have not searched for photos yet.</div>;
};

export default Photos;

/*    if (photo.blur_hash) {
            return (
              <>
                <BlurhashCanvas
                  hash={photo.blur_hash}
                  width={400}
                  height={300}
                />
                <img src={photo.urls.small} alt="" />
              </>
            );
          }
          return <img src={photo.urls.regular} alt="" />; */
