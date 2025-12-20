import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import ProductCard from './components/ProductCard';

function App() {
  // Placeholder data for demonstration
  const featuredProducts = Array(4).fill(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Dubai's Finest, <span className="text-brand-yellow">Delivered to Pakistan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover curated, unisex and girlish products with a touch of modern street style. Shop the latest trends from Dubai, now at your doorstep.
          </p>
          <Button variant="primary">Shop New Arrivals</Button>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Replace with actual brand logos */}
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://placehold.co/400x500/FAD114/000000?text=Accessories" alt="Accessories" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Accessories</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://placehold.co/400x500/E5E7EB/000000?text=Apparel" alt="Apparel" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Apparel</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://placehold.co/400x500/FAD114/000000?text=Footwear" alt="Footwear" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Footwear</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://placehold.co/400x500/E5E7EB/000000?text=Lifestyle" alt="Lifestyle" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600 mb-8">@shopstreetpk</p>
          {/* Here you would integrate an Instagram feed widget */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <img src="https://placehold.co/300x300" alt="Instagram" className="w-full h-full object-cover" />
            <img src="https://placehold.co/300x300" alt="Instagram" className="w-full h-full object-cover" />
            <img src="https://placehold.co/300x300" alt="Instagram" className="w-full h-full object-cover" />
            <img src="https://placehold.co/300x300" alt="Instagram" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      
      {/* Simple Footer Placeholder */}
      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Shop Street PK. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;