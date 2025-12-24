// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/products/productsSlice';
import brandsReducer from '../features/brands/brandsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import cartReducer from '../features/cart/cartSlice'; // The new Cart Slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});