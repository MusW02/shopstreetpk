import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // We'll create this now
import LandingPage from './pages/LandingPage'; // We'll move the landing page logic here
import BrandsPage from './pages/BrandsPage'; // To be created
import CategoriesPage from './pages/CategoriesPage'; // To be created
import CheckoutPage from './pages/CheckoutPage'; // To be created
import ContactPage from './pages/ContactPage'; // To be created
import CartPage from './pages/CartPage'; // 1. Import CartPage
import ProductDetailsPage from './pages/ProductDetailsPage';

// A simple layout component that includes the navbar and footer
const PageLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<PageLayout><LandingPage /></PageLayout>} />
        <Route path="/brands" element={<PageLayout><BrandsPage /></PageLayout>} />
        <Route path="/categories" element={<PageLayout><CategoriesPage /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
        <Route path="/cart" element={<PageLayout><CartPage /></PageLayout>} /> {/* 2. Add the route */}
        <Route path="/checkout" element={<PageLayout><CheckoutPage /></PageLayout>} />
        <Route path="/products/:id" element={<PageLayout><ProductDetailsPage /></PageLayout>} />
      </Routes>
    </div>
  );
}

export default App;