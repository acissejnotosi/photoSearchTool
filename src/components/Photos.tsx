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
  const data = useAppSelector((state) => state.data.resp);

  useEffect(() => {
    if (term) dispatch(updateQuery(term));
  }, [term, dispatch]);

  if (data.response !== undefined)
    return (
      <div className="l-grid--box l-content__result">
        <div className="l-grid__photos">
          {data?.response.results.map((photo: Basic) => {
            return <Photo id={photo.id} />;
          })}{" "}
        </div>
      </div>
    );

  return <></>;
};

export default Photos;
