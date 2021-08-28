import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Pagination from "./Pagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchData } from "../redux/slices/data";
import Photos from "./Photos";
import Filter from "./Filter";

const SearchPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query);
  const history = useHistory();

  useEffect(() => {
    async function handleUpdateData() {
      await dispatch(fetchData(query));
    }
    handleUpdateData();
  }, [dispatch, query]);

  useEffect(() => {
    if (query.query !== "") {
      history.push({
        pathname: `/search/${query.query}/${query.page}`,
      });
    }
  }, [history, query.page, query.query]);

  return (
    <div className="l-grid">
      <div className="l-grid--box l-grid__header">
        <Header />
      </div>
      <div className="l-grid--box l-grid__search">
        <SearchBar />
      </div>
      <div className="l-grid--box l-grid__tool-bar">
        <Filter />
      </div>
      <Route path="/search/:queryName/:page">
        <div className="l-grid--box l-content__result">
          <Photos />
        </div>
        <div className="l-grid--box l-grid__pagination">
          <Pagination />
        </div>
      </Route>
      <div className="l-grid--box l-grid__footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
