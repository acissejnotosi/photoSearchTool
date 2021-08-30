import React, { useState } from "react";
import { Basic } from "../shared/types";

type PhotoType = {
  photo: Basic | undefined;
};

const Photo = ({ photo }: PhotoType): JSX.Element => {
  const [hideOptions, setHideOptions] = useState<boolean>(true);
  /*  const data: Data = useAppSelector((state) => state.data.photosByQuery);
  let photo: Basic | undefined;
  if (data.response !== undefined)
    photo = data?.response.results.find((element) => element.id === id); */

  const handleMouseOver = () => {
    setHideOptions(false);
  };
  const handleMouseLeave = () => {
    setHideOptions(true);
  };
  if (photo) {
    return (
      <div className="photo">
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <figure
          className="photo__figure"
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
          <a
            className="photo__button photo__button--download"
            hidden={hideOptions}
            href={`${photo.links.download}?force=true`}
            target=""
            rel="noreferrer"
          >
            <i className="photo__download-i" />{" "}
          </a>
          {photo.user.portfolio_url ? (
            <a
              className="photo__user-link"
              href={photo.user.portfolio_url}
              hidden={hideOptions}
            >
              <figcaption className="photo__user-name">
                Photo by {photo.user.first_name} {photo.user.last_name} on
                Unsplash{" "}
              </figcaption>
            </a>
          ) : (
            <>
              <figcaption
                className="photo__user-name"
                style={
                  hideOptions
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
              >
                Photo by {photo.user.first_name}
                {photo.user.last_name}
                on Unsplash{" "}
              </figcaption>
            </>
          )}
        </figure>
      </div>
    );
  }
  return <></>;
};

export default Photo;
