import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust path if needed

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Shop Street PK" className="h-10 w-auto" />
        </a>

        {/* Navigation Links (Hidden on mobile for now) */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="/brands" className="hover:text-brand-yellow transition-colors">Brands</a>
          <a href="/categories" className="hover:text-brand-yellow transition-colors">Categories</a>
          <a href="/contact" className="hover:text-brand-yellow transition-colors">Contact</a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-brand-yellow rounded-full"></span>
          </button>
          <button className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;