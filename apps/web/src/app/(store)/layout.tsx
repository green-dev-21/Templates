import React from 'react';
import StoreHeader from '@/components/shared/StoreHeader';
import StoreFooter from '@/components/shared/StoreFooter';
import MobileBottomNav from '@/components/shared/MobileBottomNav';
import WhatsAppFAB from '@/components/shared/WhatsAppFAB';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/context/LanguageContext';

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <StoreHeader />
          <main className="flex-1 container mx-auto px-4 py-6">
            {children}
          </main>
          <StoreFooter />
          <MobileBottomNav />
          <WhatsAppFAB />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
