import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Query } from "../../helpers/types";
import { RootState } from "../store";

const initialState: Query = {
  query: "",
  page: undefined,
  perPage: undefined,
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
    updateQuery: (state, action: PayloadAction<Query>) => {
      // eslint-disable-next-line no-param-reassign
      state.query = action.payload.query;
      return state;
    },
  },
});

export const { updateQuery } = querySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
