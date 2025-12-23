import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ADD THIS
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <App />
        <Toaster position="top-right" /> {/* ADD THIS */}
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)