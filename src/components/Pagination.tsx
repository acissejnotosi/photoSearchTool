import React, { useState } from "react";
import { Query } from "../helpers/types";

interface PaginationProps {
  query: Query;
  setDataQuery: (queryToSet: Query) => void;
}

const Pagination = ({ query, setDataQuery }: PaginationProps): JSX.Element => {
  const handleOnClickPrevious = () => {
    if (query.page) {
      const temp = { ...query };
      temp.page = query.page - 1;
      setDataQuery({ ...temp });
    }
  };
  const handleOnCLickNext = () => {
    if (query.page) {
      const temp = { ...query };
      temp.page = query.page + 1;
      setDataQuery({ ...temp });
    }
  };
  if (query.page)
    return (
      <div className="pagination-button">
        <button
          className="pagination-button--previous"
          type="button"
          hidden={!(query.page > 1)}
          onClick={handleOnClickPrevious}
        >
          Previous
        </button>
        <button
          className="pagination-button--next"
          type="button"
          onClick={handleOnCLickNext}
        >
          Next
        </button>
      </div>
    );

  return <div />;
};

export default Pagination;
