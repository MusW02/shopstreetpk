// src/pages/LandingPage.jsx

import React from 'react';
import Button from '../components/Button';
import ProductCarousel from '../components/ProductCarousel';

function LandingPage() {
  // Placeholder data for demonstration
    const featuredProducts = Array(8).fill(null).map((_, i) => ({
    id: `featured-${i}`, // ADD UNIQUE ID
    image: `https://picsum.photos/seed/product${i}/400/500`,
    brand: 'Trending Brand',
    name: `Stylish Product ${i + 1}`,
    price: parseInt((Math.random() * 5000 + 1500).toFixed(0)) // Make sure it's a number
  }));

  const newArrivals = Array(8).fill(null).map((_, i) => ({
    id: `new-${i}`, // ADD UNIQUE ID
    image: `https://picsum.photos/seed/new${i}/400/500`,
    brand: 'New In',
    name: `New Arrival ${i + 1}`,
    price: parseInt((Math.random() * 5000 + 1500).toFixed(0)) // Make sure it's a number
  }));

  return (
    <>
      {/* Special Offers Banner */}
      <div className="bg-brand-yellow text-black text-center py-2 text-sm font-semibold">
        🎉 Free Shipping on Orders Over PKR 3000! Use Code: FLYSHOP
      </div>

      {/* Enhanced Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Dubai's Finest.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Discover curated trends, now at your doorstep.
          </p>
          <div className="space-x-4">
            <Button variant="primary" className="bg-white text-black hover:bg-gray-200">Shop New Arrivals</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">View Lookbook</Button>
          </div>
        </div>
      </section>

      {/* Interactive Category Banners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg cursor-pointer h-96">
              <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Girlish Collection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm uppercase tracking-widest mb-2">The Edit</p>
                  <h3 className="text-3xl font-bold mb-2">Girlish Collection</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Shop Now</Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer h-96">
              <img src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Unisex Streetwear" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm uppercase tracking-widest mb-2">Trending Now</p>
                  <h3 className="text-3xl font-bold mb-2">Unisex Streetwear</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <ProductCarousel products={featuredProducts} title="Featured Products" />

      {/* "Shop the Look" Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Shop The Look</h2>
          <p className="text-gray-600 mb-8">Get inspired by our curated styles</p>
          <div className="relative max-w-4xl mx-auto">
            <img src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shop the Look" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* New Arrivals Carousel */}
      <ProductCarousel products={newArrivals} title="Just Dropped" />

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">As Seen on Instagram</h2>
          <p className="text-gray-600 mb-8">@shopstreetpk</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group">
                <img src={`https://picsum.photos/seed/insta${item}/400/400`} alt="Instagram" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">View Post</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-8">Follow Us on Instagram</Button>
        </div>
      </section>
    </>
  );
}

export default LandingPage;