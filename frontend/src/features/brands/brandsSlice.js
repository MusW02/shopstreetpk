// src/features/brands/brandsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBrands } from '../../services/mockAPI';

export const getBrands = createAsyncThunk('brands/getBrands', async () => {
  const data = await fetchBrands();
  return data;
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => { state.status = 'loading'; })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default brandsSlice.reducer;