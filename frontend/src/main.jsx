// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        {/* REMOVED CartProvider Wrapper */}
          <App />
          <Toaster position="top-right" />
        {/* REMOVED Closing CartProvider */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)