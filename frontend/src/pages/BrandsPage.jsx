// src/pages/BrandsPage.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../features/brands/brandsSlice';
import BrandCard from '../components/BrandCard';
import LoadingSpinner from '../components/LoadingSpinner';

const BrandsPage = () => {
  const dispatch = useDispatch();

  // Select the brands data and status from the Redux store
  const { items: brands, status } = useSelector((state) => state.brands);
  const [activeFilter, setActiveFilter] = useState('All');

  // Memoize the alphabet list to prevent re-creation on every render
  const alphabet = useMemo(() => ['All', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))], []);

  // useEffect will run once when the component mounts to fetch brands
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBrands());
    }
  }, [status, dispatch]);

  // Memoize the filtered brands for performance
  const filteredBrands = useMemo(() => {
    if (activeFilter === 'All') {
      return brands;
    }
    return brands.filter(brand => brand.name.toUpperCase().startsWith(activeFilter));
  }, [activeFilter, brands]);

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
        {status === 'loading' ? (
          <LoadingSpinner size="lg" />
        ) : status === 'succeeded' ? (
          <>
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
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">Error loading brands.</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default BrandsPage;