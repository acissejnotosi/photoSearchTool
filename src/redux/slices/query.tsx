/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color, OrderBy, Query } from "../../types/types";
import { RootState } from "../store";

type filterOptions = {
  orientation: undefined;
  color: Color | undefined;
};

type queryPageFilter = {
  queryName: string;
  pageNumber: number;
};

const initialState: Query = {
  query: "",
  page: 1,
  per_page: 30,
  orientation: undefined,
  content_filter: undefined,
  color: undefined,
  search_order_by: undefined,
  collection_ids: undefined,
  Language: undefined,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.page = initialState.page;
      state.query = action.payload;
    },
    updatePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    updateFilterOptions: (state, action: PayloadAction<filterOptions>) => {
      state.page = initialState.page;
      state.orientation = action.payload.orientation;
      state.color = action.payload.color;
    },
    sortPhotos: (state, action: PayloadAction<OrderBy | undefined>) => {
      state.page = initialState.page;
      state.search_order_by = action.payload;
    },
  },
});

export const { updateQuery, updatePage } = querySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
