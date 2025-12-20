import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-brand-yellow text-black hover:bg-yellow-400 focus:ring-brand-yellow',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 focus:ring-gray-400',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;