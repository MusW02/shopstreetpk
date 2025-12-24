// src/services/mockAPI.js

// --- Mock Data ---
const mockProducts = [
  { id: 1, name: 'Stylish Urban Jacket', brand: 'Urban Threads', price: 4500, image: 'https://picsum.photos/seed/jacket/400/500' },
  { id: 2, name: 'Minimalist Watch', brand: 'Timeless Co.', price: 7500, image: 'https://picsum.photos/seed/watch/400/500' },
  { id: 3, name: 'Chic Crossbody Bag', brand: 'Girlish', price: 3200, image: 'https://picsum.photos/seed/bag/400/500' },
  { id: 4, name: 'Classic Sneakers', brand: 'StreetWear Inc.', price: 5800, image: 'https://picsum.photos/seed/sneakers/400/500' },
  { id: 5, name: 'Elegant Sunglasses', brand: 'Shade Co.', price: 2100, image: 'https://picsum.photos/seed/sunglasses/400/500' },
  { id: 6, name: 'Trendy Backpack', brand: 'Urban Threads', price: 4900, image: 'https://picsum.photos/seed/backpack/400/500' },
  { id: 7, name: 'Leather Wallet', brand: 'Timeless Co.', price: 1800, image: 'https://picsum.photos/seed/wallet/400/500' },
  { id: 8, name: 'Silk Scarf', brand: 'Girlish', price: 2500, image: 'https://picsum.photos/seed/scarf/400/500' },
];

const mockBrands = [
  { id: 1, name: 'Urban Threads', slug: 'urban-threads', logoUrl: 'https://picsum.photos/seed/urban/200/100' },
  { id: 2, name: 'Timeless Co.', slug: 'timeless-co', logoUrl: 'https://picsum.photos/seed/timeless/200/100' },
  { id: 3, name: 'Girlish', slug: 'girlish', logoUrl: 'https://picsum.photos/seed/girlish/200/100' },
  { id: 4, name: 'StreetWear Inc.', slug: 'streetwear-inc', logoUrl: 'https://picsum.photos/seed/streetwear/200/100' },
  { id: 5, name: 'Shade Co.', slug: 'shade-co', logoUrl: 'https://picsum.photos/seed/shade/200/100' },
];

const mockCategories = [
  { id: 1, name: 'Apparel', slug: 'apparel', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', productCount: 156 },
  { id: 2, name: 'Accessories', slug: 'accessories', image: 'https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', productCount: 89 },
  { id: 3, name: 'Footwear', slug: 'footwear', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', productCount: 74 },
  { id: 4, name: 'Bags & Wallets', slug: 'bags-wallets', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', productCount: 62 },
];

// --- Mock API Functions ---
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  await delay(800); // Simulate network delay
  return mockProducts;
};

export const fetchBrands = async () => {
  await delay(600);
  return mockBrands;
};

export const fetchCategories = async () => {
  await delay(700);
  return mockCategories;
};