// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api'; // Import our new API service

// We no longer need the mockLoginAPI function here.
// We will create an async thunk that directly uses the `api` service.

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Use the `api` service to make the POST request
      const response = await api.post('/auth/login', { email, password });
      
      // IMPORTANT: When we have a real backend, the data will be in `response.data`
      // For now, we'll mock the successful response data.
      const mockData = {
        user: { name: 'Test User', email: 'test@example.com' },
        token: 'fake-jwt-token-12345'
      };
      return mockData; // Return the mock data

    } catch (error) {
      // If the backend returns an error, it's usually in `error.response.data`
      // For now, we'll just reject with a generic error message.
      return rejectWithValue('Invalid credentials');
    }
  }
);

// ... (the rest of the authSlice file remains exactly the same) ...
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;