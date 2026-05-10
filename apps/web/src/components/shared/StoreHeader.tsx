'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, Globe } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

const StoreHeader = () => {
  const { items } = useCart();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="text-xl font-bold text-primary">
            StoreLogo
          </Link>
        </div>

        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600">
              <Globe className="w-5 h-5" />
              <span className="uppercase">{language}</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden hidden group-hover:block">
              <button
                onClick={() => setLanguage('en')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
              >
                Hindi
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
              >
                Arabic
              </button>
            </div>
          </div>

          <button className="lg:hidden">
            <Search className="w-6 h-6" />
          </button>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;
