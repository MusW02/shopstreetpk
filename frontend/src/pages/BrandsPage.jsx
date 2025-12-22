import React, { useState, useMemo } from 'react';
import BrandCard from '../components/BrandCard';

const BrandsPage = () => {
  // Placeholder data for brands
  const allBrands = [
    { name: 'Adidas', slug: 'adidas', logoUrl: 'https://picsum.photos/seed/adidas/200/100' },
    { name: 'Calvin Klein', slug: 'calvin-klein', logoUrl: 'https://picsum.photos/seed/calvinklein/200/100' },
    { name: 'Dior', slug: 'dior', logoUrl: 'https://picsum.photos/seed/dior/200/100' },
    { name: 'Elle', slug: 'elle', logoUrl: 'https://picsum.photos/seed/elle/200/100' },
    { name: 'Fossil', slug: 'fossil', logoUrl: 'https://picsum.photos/seed/fossil/200/100' },
    { name: 'Gucci', slug: 'gucci', logoUrl: 'https://picsum.photos/seed/gucci/200/100' },
    { name: 'H&M', slug: 'hm', logoUrl: 'https://picsum.photos/seed/hm/200/100' },
    { name: 'Inglot', slug: 'inglot', logoUrl: 'https://picsum.photos/seed/inglot/200/100' },
    { name: 'Kylie Cosmetics', slug: 'kylie-cosmetics', logoUrl: 'https://picsum.photos/seed/kylie/200/100' },
    { name: 'L\'Oreal', slug: 'loreal', logoUrl: 'https://picsum.photos/seed/loreal/200/100' },
    { name: 'Mango', slug: 'mango', logoUrl: 'https://picsum.photos/seed/mango/200/100' },
    { name: 'Nike', slug: 'nike', logoUrl: 'https://picsum.photos/seed/nike/200/100' },
    { name: 'Puma', slug: 'puma', logoUrl: 'https://picsum.photos/seed/puma/200/100' },
    { name: 'Ray-Ban', slug: 'rayban', logoUrl: 'https://picsum.photos/seed/rayban/200/100' },
    { name: 'Sephora', slug: 'sephora', logoUrl: 'https://picsum.photos/seed/sephora/200/100' },
    { name: 'The Body Shop', slug: 'the-body-shop', logoUrl: 'https://picsum.photos/seed/bodyshop/200/100' },
    { name: 'Zara', slug: 'zara', logoUrl: 'https://picsum.photos/seed/zara/200/100' },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  // Memoize the alphabet list to prevent re-creation on every render
  const alphabet = useMemo(() => ['All', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))], []);

  // Memoize the filtered brands for performance
  const filteredBrands = useMemo(() => {
    if (activeFilter === 'All') {
      return allBrands;
    }
    return allBrands.filter(brand => brand.name.toUpperCase().startsWith(activeFilter));
  }, [activeFilter, allBrands]);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Brand</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover products from your favorite international and local brands, all in one place.
          </p>
        </div>

        {/* A-Z Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-6 border-b border-gray-200">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveFilter(letter)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                activeFilter === letter
                  ? 'bg-brand-yellow text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No brands found for the letter "{activeFilter}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandsPage;