import React, { useEffect } from "react";
import { createApi } from "unsplash-js";
import businessPeopleImage from "../resources/images/business-people.jpg";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../scss/main.scss";
import Footer from "./Footer";
import Result from "./Result";
import Pagination from "./Pagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchData } from "../redux/slices/data";

const SearchPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query);

  useEffect(() => {
    console.log("entrou");
    console.log(query);
    async function handleUpdateData() {
      await dispatch(fetchData(query));
    }
    handleUpdateData();
  }, [dispatch, query]);

  return (
    <div className="wrapper">
      <div className="box header">
        <Header />
      </div>
      <div className="box image">
        <div className="image-container" />
      </div>
      <div className="box search">
        <SearchBar />
      </div>
      <div className="box section">
        <Result />
      </div>
      <div className="box pagination">
        <Pagination />
      </div>
      <div className="box footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
