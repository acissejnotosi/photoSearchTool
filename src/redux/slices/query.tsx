import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Query } from "../../types/types";
import { RootState } from "../store";

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
      // eslint-disable-next-line no-param-reassign
      state.page = initialState.page;
      // eslint-disable-next-line no-param-reassign
      state.query = action.payload;
    },
    updatePage: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.page = action.payload;
    },
  },
});

export const { updateQuery, updatePage } = querySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
