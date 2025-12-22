import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 py-4 border-b">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500">{item.brand}</p>
        <p className="font-semibold text-brand-yellow">PKR {item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} className="p-1 border rounded hover:bg-gray-100">
          <Minus size={16} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="p-1 border rounded hover:bg-gray-100">
          <Plus size={16} />
        </button>
      </div>
      <button onClick={() => onRemove(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full">
        <X size={20} />
      </button>
    </div>
  );
};

export default CartItem;