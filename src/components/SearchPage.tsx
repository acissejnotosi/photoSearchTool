import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Header from "./Header";
import "../scss/main.scss";
import Footer from "./Footer";
import Pagination from "./Pagination";
import Photos from "./Photos";
import Filter from "./Filter";
import Error from "./Error";
import { fetchData } from "../redux/slices/data";

const SearchPage = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query);
  const errors = useAppSelector((state) => state.data.errors);

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

  return (
    <div className="l-grid">
      <div className="l-grid--box l-grid__header">
        <Header />
      </div>
      {errors.length > 0 ? <Error /> : <></>}
      {query.query === "" && errors === [] ? (
        <h1 className="ready">
          Search for any term using the search bar above
        </h1>
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
