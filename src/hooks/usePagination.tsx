/* eslint-disable import/prefer-default-export */
import { useMemo } from "react";

const DOTS = "...";

interface usePaginationProps {
  totalPages: number;
  currentPage: number;
  siblingCount: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalPages,
  currentPage,
  siblingCount = 1,
}: usePaginationProps): (string | number)[] => {
  const paginationRange = useMemo(() => {
    /* 
      totalPageNumbers = siblingCount + firstPage + lastPage +
       currentPage + 2*(...)
     */
    const totalPageNumbers = siblingCount + 5;

    // If the number of pages is less than the number of pages will be shown
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    // Calcualte the left and right siblings
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // No left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    // No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalPages, currentPage, siblingCount]);

  return paginationRange;
};
