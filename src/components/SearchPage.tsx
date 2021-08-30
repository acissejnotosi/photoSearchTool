import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Pagination from "./Pagination";
import Photos from "./Photos";
import Filter from "./Filter";

import Ready from "./ready";

const SearchPage = (): JSX.Element => {
  const query = useAppSelector((state) => state.query);

  return (
    <div className="l-grid">
      <div className="l-grid--box l-grid__header">
        <Header />
      </div>
      {query.query === "" ? (
        <Ready />
      ) : (
        <Switch>
          <Route path="/search/" exact>
            <Photos />
            <div className="l-grid--box l-grid__tool-bar">
              <Filter />
            </div>{" "}
            <div className="l-grid--box l-grid__pagination">
              <Pagination />
            </div>
          </Route>
        </Switch>
      )}
      <div className="l-grid--box l-grid__footer">
        <Footer />
      </div>
    </div>
  );
};
export default SearchPage;
