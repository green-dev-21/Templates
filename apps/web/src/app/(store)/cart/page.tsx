'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Trash2 className="w-10 h-10 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some products to your cart to see them here.</p>
        <Link href="/" className="bg-primary text-white px-8 py-3 rounded-xl font-bold">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={`${item.productId}-${item.variant}`} className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.variant}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="font-bold text-primary">₹{item.price * item.quantity}</span>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.productId, item.variant)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 h-fit space-y-6">
          <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-gray-900">₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-600 font-bold">FREE</span>
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-between">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-primary">₹{total}</span>
            </div>
          </div>
          <Link
            href="/order"
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
          >
            Checkout
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
