/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color, OrderBy, Orientation, Query } from "../../types/types";
import { RootState } from "../store";

const initialState: Query = {
  query: "",
  page: 1,
  per_page: 50,
  orientation: undefined,
  content_filter: undefined,
  color: undefined,
  order_by: undefined,
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
    updateOrientation: (
      state,
      action: PayloadAction<Orientation | undefined>
    ) => {
      state.page = initialState.page;
      state.orientation = action.payload;
    },
    updateColor: (state, action: PayloadAction<Color | undefined>) => {
      state.page = initialState.page;
      state.color = action.payload;
    },
    sortPhotos: (state, action: PayloadAction<OrderBy | undefined>) => {
      state.page = initialState.page;
      state.order_by = action.payload;
    },
  },
});

export const {
  updateQuery,
  updatePage,
  updateColor,
  updateOrientation,
  sortPhotos,
} = querySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
