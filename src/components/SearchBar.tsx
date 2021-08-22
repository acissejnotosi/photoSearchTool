import React, { useState } from "react";
import { Query } from "../helpers/types";

interface SearchBarProps {
  query: Query | undefined;
  setDataQuery: (queryToSet: Query) => void;
  searchPhotos: () => void;
}

const SearchBar = ({
  query,
  setDataQuery,
  searchPhotos,
}: SearchBarProps): JSX.Element => {
  const [input, setInput] = useState("");
  const handleSubmitButton = (event: any) => {
    event.preventDefault();
    if (query) {
      setDataQuery({ ...query, query: input });
      searchPhotos();
    }
  };
  const handleChange = (event: any) => {
    setInput(event.target.value);
    console.log(event.target.value);
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
