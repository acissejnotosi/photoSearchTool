import React, { useState } from "react";
import { Query } from "../helpers/types";

interface SearchBarProps {
  query: Query | undefined;
  setDataQuery: (queryToSet: Query) => void;
}

const SearchBar = ({ query, setDataQuery }: SearchBarProps): JSX.Element => {
  const [input, setInput] = useState("");
  const handleSubmitButton = (event: any) => {
    event.preventDefault();
    setDataQuery({ ...query, query: input });
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
