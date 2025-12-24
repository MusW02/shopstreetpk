import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux'; // Import Redux Hook
import { selectCartCount } from '../features/cart/cartSlice'; // Import Selector
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // USE REDUX SELECTOR
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shop Street PK" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/brands" className="hover:text-brand-yellow transition-colors">Brands</Link>
          <Link to="/categories" className="hover:text-brand-yellow transition-colors">Categories</Link>
          <Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
          
          {/* Cart Link */}
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            {/* Redux Cart Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-brand-yellow text-black text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Keep existing code here) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4">
             <Link to="/brands" className="block py-2">Brands</Link>
             <Link to="/categories" className="block py-2">Categories</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;