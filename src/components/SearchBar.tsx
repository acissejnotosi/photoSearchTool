import React, { ButtonHTMLAttributes, useEffect } from "react";
import { createApi } from "unsplash-js";
import { Data } from "../helpers/types";
import Result from "./Result";

const API = createApi({
  accessKey: "ntQWhYoc7SD4SIE_wjgR-HivgCHodVy85UTVX_YZoB8",
});

interface SearchBarProps {
  setDataState: (photosReponse: Data) => void;
  data: Data | undefined;
}

const SearchBar = ({ setDataState, data }: SearchBarProps): JSX.Element => {
  const handleSubmitButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("entrou");
    API.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then((result) => {
        setDataState(result as unknown as Data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`something went wrong!${error}`);
      });
  };

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form>
        <input
          style={{ width: "300px" }}
          type="text"
          name="name"
          placeholder="Enter your search term here"
          autoComplete="on"
          required
        />
        <button type="submit" value="search" onClick={handleSubmitButton}>
          <i className="icon--search" />
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
