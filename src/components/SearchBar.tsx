import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { updateQuery } from "../redux/slices/query";

const TERM = "term";

const SearchBar = (): JSX.Element => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const updateSearchParams = () => {
    history.replace({
      pathname: `/search/`,
      search: searchParams.toString(),
    });
  };

  const handleSubmitButton = (event: any) => {
    event.preventDefault();
    dispatch(updateQuery(input));
    searchParams.set(TERM, input);
    updateSearchParams();
  };

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitButton}>
        <input
          style={{ width: "300px" }}
          type="text"
          name="name"
          placeholder="Enter your search term here"
          autoComplete="on"
          required
          onChange={handleChange}
        />
        <button type="submit" value="submit">
          <i className="icon--search" />
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
