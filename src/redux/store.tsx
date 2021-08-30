import { configureStore } from "@reduxjs/toolkit";
import query from "./slices/query";
import data, { fetchData } from "./slices/data";
// ...

export const store = configureStore({
  reducer: {
    query,
    data,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: fetchData },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// eslint-disable-next-line max-len
export type AppDispatch = typeof store.dispatch;
