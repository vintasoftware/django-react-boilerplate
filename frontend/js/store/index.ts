import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configureReduxStore = (preloadedState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  return store;
};

export default configureReduxStore;

const store = configureReduxStore({});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
