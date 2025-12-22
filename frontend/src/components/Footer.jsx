import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">Shop Street PK</h4>
          <p className="text-sm text-gray-400">Bringing Dubai's finest fashion to Pakistan.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Categories</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="/new" className="hover:text-white">New Arrivals</a></li>
            <li><a href="/best-sellers" className="hover:text-white">Best Sellers</a></li>
            <li><a href="/sale" className="hover:text-white">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers and updates</p>
          <input type="email" placeholder="Your email" className="w-full p-2 rounded text-black" />
          <Button variant="primary" className="w-full mt-2">Subscribe</Button>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Shop Street PK. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;