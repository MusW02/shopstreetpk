// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id && item.selectedSize === newItem.selectedSize
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        // Fallback for 'One Size' if selectedSize is missing
        state.cartItems.push({
          ...newItem,
          selectedSize: newItem.selectedSize || 'One Size', 
          quantity: 1,
        });
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    // ADD THIS NEW REDUCER
    decreaseQuantity: (state, action) => {
      const { id, selectedSize } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.selectedSize === selectedSize
      );
      
      if (existingItem.quantity === 1) {
        // If quantity is 1, remove it
        state.cartItems = state.cartItems.filter(
          item => !(item.id === id && item.selectedSize === selectedSize)
        );
      } else {
        existingItem.quantity--;
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      state.cartItems = state.cartItems.filter(
        item => !(item.id === id && item.selectedSize === selectedSize)
      );
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartCount = (state) => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;