import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Button from '../components/Button';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow"></textarea>
            </div>
            <Button variant="primary" type="submit">Send Message</Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-brand-yellow" size={24} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Street, Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-brand-yellow" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-brand-yellow" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@shopstreetpk.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Embedded Map Placeholder */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;