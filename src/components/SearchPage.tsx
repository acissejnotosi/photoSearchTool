import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { OrderBy } from "unsplash-js";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Header from "./Header";
import "../scss/main.scss";
import Footer from "./Footer";
import Pagination from "./Pagination";
import Photos from "./Photos";
import Filter from "./Filter";
import Error from "./Error";
import { fetchAll, fetchData } from "../redux/slices/data";

interface PhotosListQuery {
  page: number;
  perPage: number;
  orderBy: OrderBy | undefined;
}

const LATEST = "latest";

const PHOTOS_LIST_QUERY: PhotosListQuery = {
  page: 1,
  perPage: 50,
  orderBy: LATEST as OrderBy,
};

const SearchPage = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query);
  const errors = useAppSelector((state) => state.data.errors);
  const results = useAppSelector((state) => state.data);
  useEffect(() => {
    async function fetschAllData() {
      const response = await dispatch(fetchAll(PHOTOS_LIST_QUERY));
      if (fetchData.rejected.match(response)) {
        history.replace({
          pathname: `/`,
        });
      }
    }
    fetschAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleUpdateData() {
      const response = await dispatch(fetchData(query));
      if (fetchData.rejected.match(response)) {
        history.replace({
          pathname: `/`,
        });
      }
    }
    handleUpdateData();
  }, [dispatch, history, query]);

  if (errors.length > 0) {
    return (
      <div className="l-grid">
        <div className="l-grid--box l-grid__header">
          <Header />
        </div>
        <Error />
        <div className="l-grid--box l-grid__footer">
          <Footer />
        </div>
      </div>
    );
  }

  if (
    results.photosByQuery.response?.results.length <= 0 &&
    query.query !== ""
  ) {
    return (
      <div className="l-grid">
        <div className="l-grid--box l-grid__header">
          <Header />
        </div>
        <div className="l-grid--box l-grid__tool-bar">
          <div className="filter filter--centered">
            <Filter />
          </div>
        </div>
        <div className="l-grid--box l-grid__result">
          <h2 className="l-grid__result-not-found">No photos found</h2>
          <Photos />
        </div>
        <div className="l-grid--box l-grid__footer">
          <Footer />
        </div>
      </div>
    );
  }

  if (query.query === "" && errors.length <= 0) {
    return (
      <div className="l-grid">
        <div className="l-grid--box l-grid__header">
          <Header />
        </div>
        {results.photosList.response?.results.length > 0 ? (
          <>
            <div className="l-grid--box l-grid__tool-bar">
              <div className="filter filter--centered">
                <h1 className="filter__term">Latest Photos</h1>
              </div>
            </div>
            <div className="l-grid--box l-grid__result">
              <Photos />
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="l-grid--box l-grid__footer">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="l-grid">
      <div className="l-grid--box l-grid__header">
        <Header />
      </div>
      <Switch>
        <Route path="/search/" exact>
          {results.photosByQuery.response?.results.length > 0 ? (
            <>
              <div className="l-grid--box l-grid__result">
                <Photos />
              </div>
              <div className="l-grid--box l-grid__tool-bar">
                <Filter />
              </div>{" "}
              <div className="l-grid--box l-grid__pagination">
                <Pagination />
              </div>
              <div className="l-grid--box l-grid__footer">
                <Footer />
              </div>
            </>
          ) : (
            <></>
          )}
        </Route>
      </Switch>
    </div>
  );
};
export default SearchPage;
