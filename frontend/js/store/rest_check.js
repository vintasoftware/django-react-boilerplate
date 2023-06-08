import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from './api';

// Thunks
export const fetchRestCheck = createAsyncThunk('restCheck/fetch', async () => {
  const res = await api.get('/api/rest/rest-check/');
  return res.data;
});

// Reducer
export const restCheckReducer = createSlice({
  name: 'restCheck',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestCheck.pending, (state) => {
      state.data = {
        isLoading: false,
      };
    });
    builder.addCase(fetchRestCheck.fulfilled, (state, action) => {
      state.data = {
        isLoading: false,
        payload: action.payload,
      };
    });
    builder.addCase(fetchRestCheck.rejected, (state, action) => {
      state.data = {
        isLoading: false,
        error: action.error,
      };
    });
  },
}).reducer;
