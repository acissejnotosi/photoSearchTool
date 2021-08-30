/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Basic } from "../shared/types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Photo from "./Photo";
import { updateQuery } from "../redux/slices/query";

const TERM = "term";

const Photos = (): JSX.Element => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const term = searchParams.get(TERM);
  const dispatch = useAppDispatch();
  const photosQuery = useAppSelector((state) => state.data.photosByQuery);
  const photosList = useAppSelector((state) => state.data.photosList);

  useEffect(() => {
    if (term) dispatch(updateQuery(term));
  }, [term, dispatch]);

  if (location.pathname === "/search/") {
    if (photosQuery.response !== undefined)
      return (
        <div className="l-grid__photos">
          {photosQuery?.response.results.map((photo: Basic) => {
            return <Photo photo={photo} />;
          })}{" "}
        </div>
      );
  }

  if (location.pathname === "/") {
    if (photosList.response !== undefined)
      return (
        <div className="l-grid__photos">
          {photosList?.response.results.map((photo: Basic) => {
            return <Photo photo={photo} />;
          })}{" "}
        </div>
      );
  }
  return <></>;
};

export default Photos;
