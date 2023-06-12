import { combineReducers } from '@reduxjs/toolkit';

import { restCheckReducer as restCheck } from './rest_check';

export const rootReducer = combineReducers({
  restCheck,
});
