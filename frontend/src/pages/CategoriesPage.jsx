import React from 'react';
import CategoryCard from '../components/CategoryCard';

const CategoriesPage = () => {
  // Placeholder data for categories
  const categories = [
    {
      name: 'Apparel',
      slug: 'apparel',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 156
    },
    {
      name: 'Accessories',
      slug: 'accessories',
      image: 'https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 89
    },
    {
      name: 'Footwear',
      slug: 'footwear',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 74
    },
    {
      name: 'Bags & Wallets',
      slug: 'bags-wallets',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 62
    },
    {
      name: 'Beauty',
      slug: 'beauty',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 203
    },
    {
      name: 'Lifestyle',
      slug: 'lifestyle',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 45
    },
    {
      name: 'Jewelry',
      slug: 'jewelry',
      image: 'https://images.pexels.com/photos/1647262/pexels-photo-1647262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 98
    },
    {
      name: 'Gadgets',
      slug: 'gadgets',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productCount: 31
    },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;