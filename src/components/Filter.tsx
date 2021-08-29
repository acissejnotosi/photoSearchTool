import React, { useEffect, useState } from "react";
import { RouteComponentProps, useLocation, withRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchData } from "../redux/slices/data";
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
    const { name, value } = event.target;
    console.log(event.target);
    setOrientation(event.target.value);
    dispatch(updateOrientation(event.target.value));
    searchParams.set(ORIENTATION, event.target.value);
    updateSearchParams();
  };

  const handleColor = (event: any) => {
    setColor(event.target.value);
    dispatch(updateColor(event.target.value));
    searchParams.set(COLOR, event.target.value);
    updateSearchParams();
  };

  const handleSearchBy = (event: any) => {
    setSearchBy(event.target.value);
    dispatch(sortPhotos(event.target.value));
    searchParams.set(SEARCHBY, event.target.value);
    updateSearchParams();
  };

  // watch for query changes
  useEffect(() => {
    async function handleUpdateData() {
      await dispatch(fetchData(query));
    }
    handleUpdateData();
  }, [dispatch, query]);

  // Every time that params change should change path
  useEffect(() => {
    dispatch(updateColor(colorParam as unknown as Color));
    dispatch(sortPhotos(searchByParam as unknown as OrderBy));
    dispatch(updateOrientation(orientationParam as unknown as Orientation));
    updateSearchParams();
  }, [orientationParam, colorParam, searchByParam, dispatch]);

  if (query.query === "") {
    return <></>;
  }

  return (
    <div className="filter">
      <form>
        <select onChange={handleOrientation} value={orientation}>
          <option value={undefined}>All Orientations</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
        <select onChange={handleColor} value={color}>
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
        <select onChange={handleSearchBy} value={searchBy}>
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
      </form>
    </div>
  );
});

export default Filter;
