import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // In a real app, this would come from a global state
  const cartItemCount = 3; 

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shop Street PK" className="h-10 w-auto" />
        </Link>

        {/* Navigation Links */}
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
          {/* Make the cart icon a Link */}
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            {/* Add a badge for the item count */}
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-brand-yellow text-black text-xs font-bold rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;