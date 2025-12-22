// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart, Search, Menu } from 'lucide-react';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   // In a real app, this would come from a global state
//   const cartItemCount = 3; 

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="container mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Shop Street PK" className="h-10 w-auto" />
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-8 font-medium">
//           <Link to="/brands" className="hover:text-brand-yellow transition-colors">Brands</Link>
//           <Link to="/categories" className="hover:text-brand-yellow transition-colors">Categories</Link>
//           <Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4">
//           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <Search size={20} />
//           </button>
//           {/* Make the cart icon a Link */}
//           <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
//             <ShoppingCart size={20} />
//             {/* Add a badge for the item count */}
//             {cartItemCount > 0 && (
//               <span className="absolute -top-1 -right-1 h-5 w-5 bg-brand-yellow text-black text-xs font-bold rounded-full flex items-center justify-center">
//                 {cartItemCount}
//               </span>
//             )}
//           </Link>
//           <button className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors">
//             <Menu size={20} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react'; // Added useState
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react'; // Added X icon
import logo from '../assets/logo.png';

const Navbar = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // In a real app, this would come from a global state
  const cartItemCount = 3; 

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shop Street PK" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
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
            {/* Badge for item count */}
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-brand-yellow text-black text-xs font-bold rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Toggle between Menu (Hamburger) and X (Close) */}
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Only shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 flex flex-col px-6 z-40">
          <Link 
            to="/brands" 
            className="py-3 hover:text-brand-yellow font-medium border-b border-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Brands
          </Link>
          <Link 
            to="/categories" 
            className="py-3 hover:text-brand-yellow font-medium border-b border-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            to="/contact" 
            className="py-3 hover:text-brand-yellow font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;