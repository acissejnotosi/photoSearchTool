import React, { useState } from "react";
import { createApi } from "unsplash-js";
import { Data, Query } from "../helpers/types";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Result from "./Result";
import Navegation from "./Navegation";

const API = createApi({
  accessKey: "ntQWhYoc7SD4SIE_wjgR-HivgCHodVy85UTVX_YZoB8",
});

const SearchPage = (): JSX.Element => {
  const [data, setPhotosResponse] = useState<Data>();
  const [query, setQuery] = useState<Query>();

  const setDataState = (photosReponse: Data) => {
    setPhotosResponse(photosReponse);
  };

  const setDataQuery = (queryToSet: Query) => {
    setQuery(queryToSet);
  };

  const searchPhotos = () => {
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

  return (
    <div className="wrapper">
      <div className="box header">
        <Header />
      </div>
      <div className="box search">
        <SearchBar
          setDataQuery={setDataQuery}
          query={query}
          searchPhotos={searchPhotos}
        />
      </div>
      <div className="box section">
        <Result data={data?.response.results} />
      </div>
      <div className="box navegation">
        <Navegation />
      </div>
      <div className="box footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
