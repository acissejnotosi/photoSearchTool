/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { Basic, Data } from "../types/types";

type PhotoType = {
  id: string;
};

const Photo = ({ id }: PhotoType): JSX.Element => {
  const [hideOptions, setHideOptions] = useState<boolean>(true);
  const data: Data = useAppSelector((state) => state.data.resp);
  let photo: Basic | undefined;
  if (data.response !== undefined)
    photo = data?.response.results.find((element) => element.id === id);
  const handleMouseOver = () => {
    setHideOptions(false);
  };
  const handleMouseLeave = () => {
    setHideOptions(true);
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleOnFocus = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleOnBlur = () => {};
  if (photo) {
    return (
      <div
        className="photo"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="photo__img "
          src={photo.urls.small}
          alt=""
          style={
            hideOptions ? { filter: "none" } : { filter: "brightness(50%)" }
          }
        />
        <button
          type="button"
          className="photo__button photo__button--download"
          hidden={hideOptions}
        >
          <i className="photo__download-i" />{" "}
        </button>
        <button
          type="button"
          className="photo photo__button photo__button--info"
          hidden={hideOptions}
        >
          <i className="photo__info-i" />{" "}
        </button>
        {photo.user.portfolio_url ? (
          <a
            className="photo__user-link"
            href={photo.user.portfolio_url}
            hidden={hideOptions}
          >
            <span className="photo__user-name">
              Photo by {photo.user.first_name} {photo.user.last_name} on
              Unsplash{" "}
            </span>
          </a>
        ) : (
          <span
            className="photo__user-name"
            style={
              hideOptions ? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            Photo by {photo.user.first_name}
            {photo.user.last_name} on Unsplash{" "}
          </span>
        )}
      </div>
    );
  }
  return <></>;
};

export default Photo;
