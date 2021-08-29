/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import {
  RouteComponentProps,
  withRouter,
  useParams,
  useLocation,
} from "react-router-dom";
import { Basic } from "../types/types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Photo from "./Photo";
import { updateQuery } from "../redux/slices/query";
import { fetchData } from "../redux/slices/data";

const TERM = "term";

const Photos = (): JSX.Element => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const term = searchParams.get(TERM);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.resp);
  const query = useAppSelector((state) => state.query);

  useEffect(() => {
    if (term) dispatch(updateQuery(term));
  }, [term, dispatch]);

  useEffect(() => {
    async function handleUpdateData() {
      try {
        await dispatch(fetchData(query));
      } catch (error) {
        console.log(error);
      }
    }
    handleUpdateData();
  }, [dispatch, query]);

  if (data.response !== undefined)
    return (
      <div className="l-grid--box l-content__result">
        <div className="l-grid-photos">
          {data?.response.results.map((photo: Basic) => {
            return <Photo id={photo.id} />;
          })}{" "}
        </div>
      </div>
    );

  return <div>Ops! You have not searched for photos yet.</div>;
};

export default Photos;
