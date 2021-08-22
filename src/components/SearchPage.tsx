import React, { useState } from "react";
import { Data } from "../helpers/types";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Result from "./Result";
import Navegation from "./Navegation";

const SearchPage = (): JSX.Element => {
  const [data, setPhotosResponse] = useState<Data>();

  const setDataState = (photosReponse: Data) => {
    setPhotosResponse(photosReponse);
  };

  return (
    <div className="wrapper">
      <div className="box header">
        <Header />
      </div>
      <div className="box search">
        <SearchBar setDataState={setDataState} data={data} />
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
