'use client';

import React, { useState } from 'react';
import { Truck, MapPin, Search } from 'lucide-react';

export default function DeliveryPage() {
  const [pincode, setPincode] = useState('');

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
          <Truck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Delivery Information</h1>
        <p className="text-gray-500">We deliver across major cities with speed and care.</p>
      </div>

      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Check Availability
        </h2>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter your pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary pl-10"
            />
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
            Check
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Delivery Charges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Local Delivery</h3>
            <p className="text-sm text-gray-500 mb-4">Within the city limits</p>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-bold text-primary">₹50</span>
              <span className="text-sm font-medium text-green-600">Free above ₹999</span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Standard Shipping</h3>
            <p className="text-sm text-gray-500 mb-4">Outside the city limits</p>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-bold text-primary">₹100</span>
              <span className="text-sm font-medium text-green-600">Free above ₹1999</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Estimated Delivery Time</h2>
        <ul className="space-y-4">
          <li className="flex gap-4">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">Local Delivery</p>
              <p className="text-gray-500">1-2 working days</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">National Shipping</p>
              <p className="text-gray-500">3-5 working days</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
