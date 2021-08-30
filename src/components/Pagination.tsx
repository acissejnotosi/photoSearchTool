import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { usePagination } from "../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updatePage } from "../redux/slices/query";
import { Data, Query } from "../shared/types";

const PAGE = "page";

const Pagination = (): JSX.Element => {
  // From React Router
  const history = useHistory();
  const location = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  // From Redux Store
  const dispatch = useAppDispatch();
  const data: Data = useAppSelector((state) => state.data.resp);
  const query: Query = useAppSelector((state) => state.query);

  // Constants for pagination rendering
  const totalPages = data?.response?.total_pages;
  const currentPage = query?.page as unknown as number;
  const siblingCount = 0;
  const DOTS = "...";

  // Local State to control page
  const [pageNumber, setPageNumber] = useState<number>(
    Number(searchParams?.get(PAGE)) || currentPage
  );

  // Hook for pagination range calculation
  const paginationRange = usePagination({
    totalPages,
    currentPage,
    siblingCount,
  });

  useEffect(() => {
    const updateSearchParams = () => {
      history.push({
        pathname: location.pathname,
        search: searchParams.toString(),
      });
    };
    if (pageNumber) {
      dispatch(updatePage(pageNumber));
      searchParams.set(PAGE, pageNumber.toString());
      updateSearchParams();
    }
  }, [dispatch, history, location.pathname, pageNumber, searchParams]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return <></>;
  }

  const onPageChange = (newPage: string | number) => {
    window.scrollTo(0, 0);
    setPageNumber(Number(newPage));
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
      <a
        href="#top"
        className={
          currentPage === 1
            ? "pagination__item  pagination__item--disabled"
            : "pagination__item"
        }
        onClick={onPrevious}
      >
        <div className="pagination__arrow pagination__arrow--left" />
      </a>
      {paginationRange.map((number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (number === DOTS) {
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
              number === currentPage
                ? "pagination__item pagination__item--active"
                : "pagination__item"
            }
            onClick={() => onPageChange(number)}
            href="#top"
          >
            {number}
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
        href="#top"
      >
        <div className="pagination__arrow pagination__arrow--right" />
      </a>
    </div>
  );
};
export default Pagination;
