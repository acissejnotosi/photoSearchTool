import React from "react";
import { usePagination } from "../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updatePage } from "../redux/slices/query";
import { Data, Query } from "../types/types";

const Pagination = (): JSX.Element => {
  const data: Data = useAppSelector((state) => state.data.resp);
  const query: Query = useAppSelector((state) => state.query);
  const totalPages = data?.response?.total_pages;
  const currentPage = query?.page as unknown as number;
  const siblingCount = 0;
  const DOTS = "...";

  const paginationRange = usePagination({
    totalPages,
    currentPage,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return <></>;
  }

  const onPageChange = (newPage: string | number) => {
    return [];
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pagination">
      {/* Left navigation arrow */}
      <a className="pagination__item" onClick={onPrevious} href="/">
        <div className="pagination__arrow pagination__arrow--left" />
      </a>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <span className="pagination__item pagination__item--dots">
              &#8230;
            </span>
          );
        }
        // Render our Page Pills
        return (
          <a
            className={
              pageNumber === currentPage
                ? "pagination__item pagination__item--active"
                : "pagination__item"
            }
            onClick={() => onPageChange(pageNumber)}
            href="/"
          >
            {pageNumber}
          </a>
        );
      })}

      {/*  Right Navigation arrow */}
      <a
        className={
          currentPage === lastPage
            ? "pagination__item  pagination__item--disabled"
            : "pagination__item"
        }
        onClick={onNext}
        href="/"
      >
        <div className="pagination__arrow pagination__arrow--right" />
      </a>
    </div>
  );
};

export default Pagination;
