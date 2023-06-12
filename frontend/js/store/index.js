import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';

const configureReduxStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  return store;
};

export default configureReduxStore;
