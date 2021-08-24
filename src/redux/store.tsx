import { configureStore } from "@reduxjs/toolkit";
import query from "./slices/query";
import data, { fetchData } from "./slices/data";
// ...

export const store: any = configureStore({
  reducer: {
    query,
    data,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: fetchData } }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// eslint-disable-next-line max-len
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
