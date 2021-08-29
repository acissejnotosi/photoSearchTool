import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Pagination from "./Pagination";
import Photos from "./Photos";
import Filter from "./Filter";

const SearchPage = (): JSX.Element => {
  return (
    <div className="l-grid">
      <div className="l-grid--box l-grid__header">
        <Header />
      </div>
      <div className="l-grid--box l-grid__search">
        <SearchBar />
      </div>
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
      <div className="l-grid--box l-grid__footer">
        <Footer />
      </div>
    </div>
  );
};
export default SearchPage;
