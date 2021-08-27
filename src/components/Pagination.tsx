import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updatePage } from "../redux/slices/query";

const Pagination = (): JSX.Element => {
  const query = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();

  return <div />;
};

export default Pagination;
