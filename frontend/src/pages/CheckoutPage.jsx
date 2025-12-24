import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Button from '../components/Button';
import OrderSummary from '../components/checkout/OrderSummary';
import ShippingForm from '../components/checkout/ShippingForm';
// Redux Import
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  // Get Cart from Redux
  const { cartItems } = useSelector((state) => state.cart);
  
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const steps = ['Shipping', 'Payment', 'Review'];

  const handleShippingChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };
  
  const handlePaymentChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ShippingForm data={shippingData} onChange={handleShippingChange} />;
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input type="text" name="cardNumber" value={paymentData.cardNumber || ''} onChange={handlePaymentChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input type="text" name="expiry" value={paymentData.expiry || ''} onChange={handlePaymentChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" placeholder="MM/YY" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" name="cvv" value={paymentData.cvv || ''} onChange={handlePaymentChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" placeholder="123" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                <input type="text" name="nameOnCard" value={paymentData.nameOnCard || ''} onChange={handlePaymentChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>
            
            {/* Added Cart Summary to Review Step */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold mb-3">Items ({cartItems.length})</h3>
                {cartItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600">{item.quantity}x {item.name} <span className="text-xs bg-gray-100 px-1 rounded ml-2">{item.selectedSize}</span></span>
                    <span className="font-medium">PKR {item.price * item.quantity}</span>
                </div>
                ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-sm text-gray-600">{`${shippingData.firstName} ${shippingData.lastName}`}</p>
                <p className="text-sm text-gray-600">{shippingData.address}</p>
                <p className="text-sm text-gray-600">{`${shippingData.city}, ${shippingData.province}`}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Payment Method</h3>
                <p className="text-sm text-gray-600">Card ending in •••• {paymentData.cardNumber?.slice(-4)}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${step > i + 1 ? 'bg-brand-yellow text-black' : step === i + 1 ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'}`}>
                {step > i + 1 ? <Check size={20} /> : i + 1}
              </div>
              <span className={`ml-2 hidden sm:inline ${step >= i + 1 ? 'text-black' : 'text-gray-500'}`}>{s}</span>
              {i < steps.length - 1 && <div className={`w-12 sm:w-24 h-1 mx-2 ${step > i + 1 ? 'bg-brand-yellow' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-sm">
            {renderStep()}
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button variant="secondary" onClick={prevStep} className="flex items-center">
                  <ChevronLeft size={20} className="mr-1" /> Back
                </Button>
              )}
              {step < 3 ? (
                <Button variant="primary" onClick={nextStep} className="ml-auto flex items-center">
                  Continue <ChevronRight size={20} className="ml-1" />
                </Button>
              ) : (
                <Button variant="primary" onClick={() => alert('Order Placed!')} className="ml-auto">
                  Place Order
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;