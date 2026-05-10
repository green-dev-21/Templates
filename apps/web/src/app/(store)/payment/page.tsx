'use client';

import React from 'react';
import UPIQRDisplay from '@/components/payment/UPIQRDisplay';
import { MessageCircle } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Make Payment</h1>
        <p className="text-gray-500 mt-1">Complete your payment using UPI or Bank Transfer.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900">UPI Payment</h2>
        <UPIQRDisplay upiId="store@upi" />
      </section>

      <section className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
        <h2 className="text-lg font-bold text-gray-900">Bank Transfer</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Account Name</span>
            <span className="font-bold">Store Name Ltd</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Account Number</span>
            <span className="font-bold">1234567890</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">IFSC Code</span>
            <span className="font-bold">ABCD0123456</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bank Name</span>
            <span className="font-bold">HDFC Bank</span>
          </div>
        </div>
      </section>

      <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors">
        <MessageCircle className="w-5 h-5" />
        I have paid - Notify Seller
      </button>
    </div>
  );
}
