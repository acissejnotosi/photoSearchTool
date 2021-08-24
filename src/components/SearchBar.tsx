import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { updateQuery } from "../redux/slices/query";

const SearchBar = (): JSX.Element => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmitButton = (event: any) => {
    event.preventDefault();
    dispatch(updateQuery(input));
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
