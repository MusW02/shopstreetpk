// src/services/api.js
import axios from 'axios';
import { store } from '../app/store'; // Import the Redux store to get the token

// Create a base Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Our future backend's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
  (config) => {
    // Get the token from the Redux store
    const token = store.getState().auth.token;
    if (token) {
      // If a token exists, attach it to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors (like 401 Unauthorized)
api.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    if (error.response?.status === 401) {
      // If we get a 401 (Unauthorized), it means the token is invalid or expired.
      // We can dispatch a logout action here to clear the state.
      // This is a more advanced topic, but good to keep in mind.
      console.error('Unauthorized! Logging out.');
      // store.dispatch(logout()); 
    }
    return Promise.reject(error);
  }
);

export default api;