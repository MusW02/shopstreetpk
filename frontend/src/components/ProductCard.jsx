import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useDispatch } from 'react-redux'; // Redux Hook
import { addToCart } from '../features/cart/cartSlice'; // Redux Action
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    // Dispatch action to Redux store
    // Defaulting to "One Size" for quick-add from grid
    dispatch(addToCart({ ...product, selectedSize: 'One Size' }));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/products/${product.id}`} className="relative overflow-hidden bg-gray-50 block">
        <img 
          src={product?.image || 'https://placehold.co/300x400'} 
          alt={product?.name || 'Product'} 
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart size={18} />
        </button>
      </Link>
      
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product?.brand}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
            {product?.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">PKR {product?.price}</p>
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