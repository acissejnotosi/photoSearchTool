import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Query } from "../../helpers/types";
import { RootState } from "../store";

const initialState: Query = {
  query: "",
  page: 1,
  perPage: 20,
  orientation: undefined,
  contentFilter: undefined,
  color: undefined,
  SearchOrderBy: undefined,
  collectionIds: undefined,
  Language: undefined,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      // eslint-disable-next-line no-param-reassign
      state.page = initialState.page;
      // eslint-disable-next-line no-param-reassign
      state.query = action.payload;
    },
    updatePage: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      // eslint-disable-next-line no-param-reassign
      state.page = action.payload;
    },
  },
});

export const { updateQuery, updatePage } = querySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;