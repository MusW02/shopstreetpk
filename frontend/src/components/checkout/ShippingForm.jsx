import React from 'react';

const ShippingForm = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" name="firstName" value={data.firstName || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" name="lastName" value={data.lastName || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" name="email" value={data.email || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" name="phone" value={data.phone || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input type="text" name="address" value={data.address || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" name="city" value={data.city || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Province</label>
          <select name="province" value={data.province || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required>
            <option value="">Select Province</option>
            <option value="Sindh">Sindh</option>
            <option value="Punjab">Punjab</option>
            <option value="KPK">KPK</option>
            <option value="Balochistan">Balochistan</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input type="text" name="postalCode" value={data.postalCode || ''} onChange={onChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;