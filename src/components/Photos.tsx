/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Basic } from "../types/types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Photo from "./Photo";
import { updateQuery } from "../redux/slices/query";
import { fetchData } from "../redux/slices/data";

const Photos = withRouter(
  (props: RouteComponentProps<{ queryName: string }>): JSX.Element => {
    const data = useAppSelector((state) => state.data.resp);
    const query = useAppSelector((state) => state.query);
    const dispatch = useAppDispatch();
    const { queryName } = props.match.params;

    useEffect(() => {
      async function handleUpdateData() {
        await dispatch(fetchData(query));
      }
      handleUpdateData();
    }, [dispatch, query]);

    useEffect(() => {
      if (queryName) dispatch(updateQuery(queryName));
    }, [dispatch, queryName]);

    if (data.response !== undefined)
      return (
        <div className="l-grid-photos">
          {data?.response.results.map((photo: Basic) => {
            return <Photo id={photo.id} />;
          })}{" "}
        </div>
      );

    return <div>Ops! You have not searched for photos yet.</div>;
  }
);

export default Photos;
