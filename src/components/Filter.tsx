import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  sortPhotos,
  updateColor,
  updateOrientation,
} from "../redux/slices/query";
import "../scss/main.scss";
import { Color, Orientation, OrderBy, Query } from "../shared/types";

const ORIENTATION = "orientation";
const COLOR = "color";
const SEARCHBY = "searchBy";

const Filter = (): JSX.Element => {
  // Params from url path
  const location = useLocation();
  const history = useHistory();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
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
  const updateSearchParams = useCallback(() => {
    history.push({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  }, [history, location.pathname, searchParams]);

  const handleOrientation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrientation(event.target.value as unknown as Orientation);
    if (event.target.value === "All Orientations") {
      dispatch(updateOrientation(undefined));
    } else {
      dispatch(updateOrientation(event.target.value));
    }
    searchParams.set(ORIENTATION, event.target.value);
    updateSearchParams();
  };

  const handleColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value as unknown as Color);
    if (event.target.value === "Colorful") {
      dispatch(updateColor(undefined));
    } else {
      dispatch(updateColor(event.target.value));
    }
    searchParams.set(COLOR, event.target.value);
    updateSearchParams();
  };

  const handleSearchBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchBy(event.target.value as unknown as OrderBy);
    dispatch(sortPhotos(event.target.value as unknown as OrderBy));
    searchParams.set(SEARCHBY, event.target.value);
    updateSearchParams();
  };

  // Every time that params are changed, the path should also changed
  useEffect(() => {
    dispatch(updateColor(colorParam as unknown as Color));
    dispatch(sortPhotos(searchByParam as unknown as OrderBy));
    dispatch(updateOrientation(orientationParam as unknown as Orientation));
    updateSearchParams();
  }, [
    orientationParam,
    colorParam,
    searchByParam,
    dispatch,
    updateSearchParams,
  ]);

  return (
    <div className="filter">
      <div>
        {" "}
        <select
          className="filter__select"
          onChange={(event) => handleOrientation(event)}
          value={orientation}
        >
          <option>All Orientations</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
        <select
          className="filter__select"
          onChange={(event) => handleColor(event)}
          value={color}
        >
          <option>Colorful</option>
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
          onChange={(event) => handleSearchBy(event)}
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
};

export default Filter;
