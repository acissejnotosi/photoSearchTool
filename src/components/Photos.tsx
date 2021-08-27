/* eslint-disable react/destructuring-assignment */
import React from "react";
import { userInfo } from "os";
import { Basic } from "../types/types";
import { useAppSelector } from "../redux/hooks";

const Photos = (): JSX.Element => {
  const data = useAppSelector((state) => state.data.resp);

  if (data.response !== undefined)
    return (
      <div className="l-grid-photos">
        {data?.response.results.map((photo: Basic) => {
          return (
            <div className="photo">
              <img className="photo__img" src={photo.urls.small} alt="" />
              <button
                type="button"
                className="photo__button photo__button--download"
              >
                <i className="photo__download-i" />{" "}
              </button>
              <button
                type="button"
                className="photo__button photo__button--info"
              >
                <i className="photo__info-i" />{" "}
              </button>
              {photo.user.portfolio_url ? (
                <a className="photo__user-link" href={photo.user.portfolio_url}>
                  <span className="photo__user-name">
                    Photo by {photo.user.first_name} {photo.user.last_name} on
                    Unsplash{" "}
                  </span>
                </a>
              ) : (
                <span className="photo__user-name">
                  Photo by {photo.user.first_name} {photo.user.last_name} on
                  Unsplash{" "}
                </span>
              )}
            </div>
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
