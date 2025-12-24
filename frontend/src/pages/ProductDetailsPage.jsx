import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../features/cart/cartSlice';
import Button from '../components/Button';
import toast from 'react-hot-toast'; // Assuming you have this installed

// Mock Data for testing
const MOCK_PRODUCTS = [
  { id: 1, name: "Stylish Urban Jacket", price: 4500, image: "https://picsum.photos/seed/jacket/400/500", brand: "Urban Threads" },
  { id: 2, name: "Minimalist Watch", price: 7500, image: "https://picsum.photos/seed/watch/400/500", brand: "Timeless Co." },
  { id: 3, name: "Chic Crossbody Bag", price: 3200, image: "https://picsum.photos/seed/bag/400/500", brand: "Girlish" },
  { id: 4, name: "Classic Sneakers", price: 5800, image: "https://picsum.photos/seed/sneakers/400/500", brand: "StreetWear" },
  { id: 5, name: "Elegant Sunglasses", price: 2100, image: "https://picsum.photos/seed/sunglasses/400/500", brand: "Shade Co." },
  { id: 6, name: "Trendy Backpack", price: 4900, image: "https://picsum.photos/seed/backpack/400/500", brand: "Urban Threads" },
  { id: 7, name: "Leather Wallet", price: 1800, image: "https://picsum.photos/seed/wallet/400/500", brand: "Timeless Co." },
  { id: 8, name: "Silk Scarf", price: 2500, image: "https://picsum.photos/seed/scarf/400/500", brand: "Girlish" },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const found = MOCK_PRODUCTS.find(p => p.id === parseInt(id));
      setProduct(found);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size!');
      return;
    }
    
    dispatch(addToCart({ ...product, selectedSize }));
    toast.success(`${product.name} (Size: ${selectedSize}) added to cart!`);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="space-y-4">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg object-cover max-h-[600px]" />
        </div>

        {/* Right: Details */}
        <div>
          <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-2">{product.brand}</h2>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-brand-yellow">
              {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-gray-500">(24 Reviews)</span>
          </div>

          <p className="text-3xl font-bold text-brand-yellow mb-6">PKR {product.price}</p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience premium quality with our latest collection. Imported directly from Dubai, 
            ensuring the best fabric and durability for your everyday style.
          </p>

          {/* Size Selector */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Select Size</h3>
            <div className="flex space-x-3">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded border flex items-center justify-center font-medium transition-all duration-200
                    ${selectedSize === size 
                      ? 'bg-black text-white border-black scale-110 shadow-md' 
                      : 'hover:border-black hover:bg-gray-50'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleAddToCart} className="w-full md:w-auto flex items-center justify-center gap-2">
            <ShoppingBag size={20} /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;