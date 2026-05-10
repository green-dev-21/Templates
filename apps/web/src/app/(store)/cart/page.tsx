'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ChevronRight, Trash2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { t } = useLanguage();
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="bg-gray-100 p-6 rounded-full">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added anything yet.</p>
        <Link
          href="/"
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">{t('cart')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    {item.variant && <p className="text-sm text-gray-500">{item.variant}</p>}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 text-gray-500 hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-bold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-500 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-primary">₹{item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="font-bold text-gray-900">{t('orderSummary')}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>{t('subtotal')}</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>{t('delivery')}</span>
                <span className="text-green-600 font-bold">{t('free')}</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between text-lg font-bold text-gray-900">
                <span>{t('total')}</span>
                <span>₹{total}</span>
              </div>
            </div>
            <Link
              href="/order"
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors mt-6"
            >
              {t('checkout')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-900">Apply Coupon Code</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
