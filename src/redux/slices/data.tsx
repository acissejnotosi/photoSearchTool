/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from "unsplash-js";
import { Data, Query } from "../../types/types";
import { AppDispatch, RootState } from "../store";

const API = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
});

interface MyKnownError {
  errorMessage: string;
}

const resp: Data = {} as Data;

const initialState = { resp, error: "" };

export const fetchData: any = createAsyncThunk<
  Data,
  Query,
  {
    dispatch: AppDispatch;
    extra: {
      jwt: string;
    };
    rejectValue: MyKnownError;
  }
>("data/fetchByQuery", async (query, thunkAPI) => {
  const response = await API.search.getPhotos(query);
  if (response.status === 400) {
    return thunkAPI.rejectWithValue(response as unknown as MyKnownError);
  }
  return response as unknown as Data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.resp = payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.toString();
      }
    });
  },
});

// export const {} = dataSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectCount = (state: RootState) => state.data;

export default dataSlice.reducer;
