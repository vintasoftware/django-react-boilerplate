import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";

const configureReduxStore = (preloadedState: object) => {
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
