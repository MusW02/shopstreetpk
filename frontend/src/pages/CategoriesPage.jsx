// src/pages/CategoriesPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../features/categories/categoriesSlice';
import CategoryCard from '../components/CategoryCard';
import LoadingSpinner from '../components/LoadingSpinner';

const CategoriesPage = () => {
  const dispatch = useDispatch();

  // Select the categories data and status from the Redux store
  const { items: categories, status } = useSelector((state) => state.categories);

  // useEffect will run once when the component mounts to fetch categories
  useEffect(() => {
    // Only fetch categories if the status is 'idle' (initial state)
    if (status === 'idle') {
      dispatch(getCategories());
    }
  }, [status, dispatch]);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of products, carefully curated to bring you the latest trends from Dubai.
          </p>
        </div>

        {/* Categories Grid */}
        {status === 'loading' ? (
          <LoadingSpinner size="lg" />
        ) : status === 'succeeded' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">Error loading categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;