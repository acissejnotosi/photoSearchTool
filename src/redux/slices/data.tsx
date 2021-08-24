import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi } from "unsplash-js";
import { Data, Query } from "../../helpers/types";
import { AppDispatch, RootState } from "../store";

const API = createApi({
  accessKey: "ntQWhYoc7SD4SIE_wjgR-HivgCHodVy85UTVX_YZoB8",
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
    // Return the known error for future handling
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
      // eslint-disable-next-line no-param-reassign
      state.resp = payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      if (action.payload) {
        // eslint-disable-next-line no-param-reassign
        state.error = action.payload.errorMessage;
      } else {
        // eslint-disable-next-line no-param-reassign
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
