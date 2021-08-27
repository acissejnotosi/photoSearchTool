import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import "../scss/main.scss";

const Filter = (): JSX.Element => {
  const [orientation, setOrientation] = useState("Orientation");
  const [color, setColor] = useState("Color");
  const [publishDate, setPublishDate] = useState("Publish Date");
  const [searchBy, setSearchBy] = useState("Search By ...");
  const dispatch = useAppDispatch();

  const handleOnChangeOrientation = (event: any) => {
    setOrientation(event.target.value);
  };

  const handleOnChangeColor = (event: any) => {
    setColor(event.target.value);
  };

  const handleOnChangePublishDate = (event: any) => {
    setPublishDate(event.target.value);
  };

  const HandleFilterButton = (event: any) => {
    // dispatch
  };

  return (
    <div className="filter">
      <form>
        <select onChange={handleOnChangeOrientation}>
          <option value="">None</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <select onChange={handleOnChangeColor}>
          <option value="">None</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <select onChange={handleOnChangePublishDate}>
          <option value="">None</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <button type="button" className="filter__button">
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
