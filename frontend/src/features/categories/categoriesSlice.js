// src/features/categories/categoriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from '../../services/mockAPI';

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const data = await fetchCategories();
  return data;
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => { state.status = 'loading'; })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;