import React from 'react';
import Link from 'next/link';
import { Home, Grid, ShoppingCart, MessageCircle } from 'lucide-react';

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex items-center justify-around h-16">
        <Link href="/" className="flex flex-col items-center justify-center gap-1 text-gray-600 active:text-primary">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center justify-center gap-1 text-gray-600 active:text-primary">
          <Grid className="w-6 h-6" />
          <span className="text-xs">Categories</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center justify-center gap-1 text-gray-600 active:text-primary relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs">Cart</span>
          <span className="absolute top-0 right-2 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </Link>
        <Link href="https://wa.me/919876543210" className="flex flex-col items-center justify-center gap-1 text-gray-600 active:text-primary">
          <MessageCircle className="w-6 h-6 text-green-500" />
          <span className="text-xs">WhatsApp</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
