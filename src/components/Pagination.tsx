import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updatePage } from "../redux/slices/query";

const Pagination = (): JSX.Element => {
  const query = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();
  const handleOnClickPrevious = () => {
    dispatch(updatePage(query.page - 1));
  };
  const handleOnCLickNext = () => {
    dispatch(updatePage(query.page + 1));
  };

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
};

export default Pagination;
