import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  sortPhotos,
  updateColor,
  updateOrientation,
} from "../redux/slices/query";
import "../scss/main.scss";
import { Color, Orientation, OrderBy, Query } from "../types/types";

const ORIENTATION = "orientation";
const COLOR = "color";
const SEARCHBY = "searchBy";

const Filter = withRouter((props: RouteComponentProps): JSX.Element => {
  // Params from url path
  const searchParams = new URLSearchParams(props.location.search);
  const orientationParam = searchParams.get(ORIENTATION);
  const colorParam = searchParams.get(COLOR);
  const searchByParam = searchParams.get(SEARCHBY);

  // From redux store
  const dispatch = useAppDispatch();
  const query: Query = useAppSelector((state) => state.query);

  // Local states to control inputs
  const [orientation, setOrientation] = useState<Orientation>(
    (orientationParam as unknown as Orientation) || query.orientation
  );
  const [color, setColor] = useState<Color>(
    (colorParam as unknown as Color) || query.color
  );
  const [searchBy, setSearchBy] = useState<OrderBy | undefined>(
    (searchByParam as unknown as OrderBy) || query.order_by
  );

  // Update search params
  const updateSearchParams = () => {
    props.history.push({
      pathname: props.location.pathname,
      search: searchParams.toString(),
    });
  };

  const handleOrientation = (event: any) => {
    setOrientation(event.target.value);
    if (event.target.value === "All Orientations") {
      dispatch(updateOrientation(undefined));
    } else {
      dispatch(updateOrientation(event.target.value));
    }
    searchParams.set(ORIENTATION, event.target.value);
    updateSearchParams();
  };

  const handleColor = (event: any) => {
    setColor(event.target.value);
    if (event.target.value === "Colorful") {
      dispatch(updateColor(undefined));
    } else {
      dispatch(updateColor(event.target.value));
    }
    searchParams.set(COLOR, event.target.value);
    updateSearchParams();
  };

  const handleSearchBy = (event: any) => {
    setSearchBy(event.target.value);
    dispatch(sortPhotos(event.target.value));
    searchParams.set(SEARCHBY, event.target.value);
    updateSearchParams();
  };

  /*   // watch for query changes
  useEffect(() => {
    async function handleUpdateData() {
      try {
        await dispatch(fetchData(query));
      } catch {
        <Redirect to="/" />;
      }
    }
    handleUpdateData();
  }, [dispatch, query]); */

  // Every time that params change should change path
  useEffect(() => {
    dispatch(updateColor(colorParam as unknown as Color));
    dispatch(sortPhotos(searchByParam as unknown as OrderBy));
    dispatch(updateOrientation(orientationParam as unknown as Orientation));
    updateSearchParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientationParam, colorParam, searchByParam, dispatch]);

  if (query.query === "") {
    return <></>;
  }

  return (
    <div className="filter">
      <div>
        {" "}
        <select
          className="filter__select"
          onChange={handleOrientation}
          value={orientation}
        >
          <option value={undefined}>All Orientations</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
        <select className="filter__select" onChange={handleColor} value={color}>
          <option value={undefined}>Colorful</option>
          <option value="black_and_white">Black and White</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
          <option value="magenta">Magenta</option>
          <option value="green">Green</option>
          <option value="teal">Teal</option>
          <option value="blue">Blue</option>
        </select>
        <select
          className="filter__select"
          onChange={handleSearchBy}
          value={searchBy}
        >
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
      </div>
      <div className="filter__term">
        {query.query.length > 20 ? (
          <> Results for &quot;{query.query.slice(0, 20)}...&quot; </>
        ) : (
          <> Results for&quot;{query.query}&quot; </>
        )}
      </div>
    </div>
  );
});

export default Filter;
