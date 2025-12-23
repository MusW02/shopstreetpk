import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { useCart } from '../context/CartContext'; // ADD THIS

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart(); // USE REAL DATA

  const subtotal = cartTotal;
  const shipping = subtotal > 3000 ? 0 : 150;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
            <div className="mt-6 text-right">
              <Link to="/" className="text-brand-yellow hover:underline">Continue Shopping</Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>PKR {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `PKR ${shipping}`}</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold pt-4 border-t mb-6">
                <span>Total</span>
                <span>PKR {total}</span>
              </div>
              <Link to="/checkout">
                <Button variant="primary" className="w-full">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;