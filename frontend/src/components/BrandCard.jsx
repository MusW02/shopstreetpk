import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  return (
    <Link 
      to={`/brands/${brand.slug}`} 
      className="group bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300"
    >
      <img 
        src={brand.logoUrl} 
        alt={brand.name} 
        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </Link>
  );
};

export default BrandCard;