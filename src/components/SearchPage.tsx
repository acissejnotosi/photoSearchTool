import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Query } from "../helpers/types";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Result from "./Result";
import Pagination from "./Pagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchData } from "../redux/slices/data";

const API = createApi({
  accessKey: "ntQWhYoc7SD4SIE_wjgR-HivgCHodVy85UTVX_YZoB8",
});

const SearchPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.resp);
  const [query, setQuery] = useState<Query>({
    query: "",
    page: 2,
    perPage: 10,
    orientation: "portrait",
    contentFilter: "low",
    color: undefined,
    SearchOrderBy: "high",
    collectionIds: undefined,
    Language: "en",
  });

  const setDataQuery = (queryToSet: Query) => {
    setQuery(queryToSet);
  };

  useEffect(() => {
    async function handleUpdateData() {
      const resultAction = await dispatch(fetchData(query));
      console.log(resultAction.payload);
      console.log(data);
    }
    handleUpdateData();
  }, [query]);

  return (
    <div className="wrapper">
      <div className="box header">
        <Header />
      </div>
      <div className="box search">
        <SearchBar setDataQuery={setDataQuery} query={query} />
      </div>
      <div className="box section">
        <Result />
      </div>
      <div className="box pagination">
        <Pagination setDataQuery={setDataQuery} query={query} />
      </div>
      <div className="box footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
