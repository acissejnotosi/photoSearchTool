import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { usePagination } from "../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updatePage } from "../redux/slices/query";
import { fetchData } from "../redux/slices/data";
import { Data, Query } from "../types/types";

const Pagination = withRouter(
  (props: RouteComponentProps<{ page: string }>): JSX.Element => {
    const data: Data = useAppSelector((state) => state.data.resp);
    const query: Query = useAppSelector((state) => state.query);
    const dispatch = useAppDispatch();

    const totalPages = data?.response?.total_pages;
    const currentPage = query?.page as unknown as number;
    const siblingCount = 0;
    const DOTS = "...";
    const [page, setPage] = useState(props.match.params.page);

    useEffect(() => {
      async function handleUpdateData() {
        await dispatch(fetchData(query));
      }
      handleUpdateData();
    }, [dispatch, query]);

    useEffect(() => {
      dispatch(updatePage(Number(page)));
    }, [dispatch, page]);

    const paginationRange = usePagination({
      totalPages,
      currentPage,
      siblingCount,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
      return <></>;
    }

    const onPageChange = (newPage: string | number) => {
      setPage(newPage.toString());
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
        <Link
          className="pagination__item"
          onClick={onPrevious}
          to={`/search/${query.query}/${query.page}`}
        >
          <div className="pagination__arrow pagination__arrow--left" />
        </Link>
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
            <Link
              className={
                pageNumber === currentPage
                  ? "pagination__item pagination__item--active"
                  : "pagination__item"
              }
              onClick={() => onPageChange(pageNumber)}
              to={`/search/${query.query}/${query.page}`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {/*  Right Navigation arrow */}
        <Link
          className={
            currentPage === lastPage
              ? "pagination__item  pagination__item--disabled"
              : "pagination__item"
          }
          onClick={onNext}
          to={`/search/${query.query}/${query.page}`}
        >
          <div className="pagination__arrow pagination__arrow--right" />
        </Link>
      </div>
    );
  }
);

export default Pagination;
