import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  // GUARD CLAUSE: If product is missing, don't render anything (or render a placeholder)
  if (!product) {
    return null; 
  }

  return (
    <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          // Added fallback image if product.image is missing
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
        {/* ADDED ?. HERE TO PREVENT CRASH */}
        <p className="font-semibold text-lg">PKR {product?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;