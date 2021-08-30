/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, OrderBy } from "unsplash-js";
import { Data, Query } from "../../shared/types";
import { AppDispatch, RootState } from "../store";

interface MyKnownError {
  errorMessage: string;
}

interface StateType {
  photosByQuery: Data;
  errors: [];
  photosList: Data;
}

interface PhotosListQuery {
  page: number;
  perPage: number;
  orderBy: OrderBy | undefined;
}

const photosByQuery: Data = {} as Data;
const photosList: Data = {} as Data;
const initialState: StateType = { photosByQuery, errors: [], photosList };
const API = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
>("data/fetchSinglePageByQuery", async (query, thunkAPI) => {
  const response = await API.search.getPhotos(query);
  if (response.status === 400) {
    return thunkAPI.rejectWithValue(response as unknown as MyKnownError);
  }
  return response as unknown as Data;
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchAll: any = createAsyncThunk<
  Data,
  PhotosListQuery,
  {
    dispatch: AppDispatch;
    extra: {
      jwt: string;
    };
    rejectValue: MyKnownError;
  }
>("data/fetchSinglePageFromAllPhotos", async (query, thunkAPI) => {
  const response = await API.photos.list(query);
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
      state.photosByQuery = payload;
      state.errors = [];
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      if (action.payload) {
        state.errors = action.payload.errors;
      } else {
        state.errors = action.error.toString();
      }
    });
    builder.addCase(fetchAll.fulfilled, (state, { payload }) => {
      state.photosList = payload;
      state.errors = [];
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      if (action.payload) {
        state.errors = action.payload.errors;
      } else {
        state.errors = action.error.toString();
      }
    });
  },
});

export const selectData = (state: RootState): StateType => state.data;

export default dataSlice.reducer;
