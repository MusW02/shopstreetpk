import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext'; // ADD THIS

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ADD THIS

  if (!product) {
    return null;
  }

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent any parent link clicks
    addToCart(product);
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={product?.image || 'https://placehold.co/300x400'} 
          alt={product?.name || 'Product'} 
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product?.brand}
        </p>
        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
          {product?.name}
        </h3>
        {/* UPDATED: Add flex layout for price and button */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">PKR {product?.price}</p>
          {/* ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            className="p-2 bg-brand-yellow rounded-full hover:bg-yellow-400 transition-all hover:scale-110"
            aria-label={`Add ${product?.name} to cart`}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;