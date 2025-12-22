import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 3000 ? 0 : 150; // Example shipping logic
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Order Summary</h3>
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            <div className="flex-1">
              <h4 className="text-sm font-medium">{item.name}</h4>
              <p className="text-xs text-gray-500">PKR {item.price} x {item.quantity}</p>
            </div>
            <p className="font-semibold">PKR {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>PKR {subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `PKR ${shipping}`}</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-2 border-t">
          <span>Total</span>
          <span>PKR {total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;