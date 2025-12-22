import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.slug}`} className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
        <p className="text-sm opacity-90">{category.productCount} Products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;