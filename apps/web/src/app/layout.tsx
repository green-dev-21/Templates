import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { QueryProvider } from '@/components/shared/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhatsApp Commerce Store',
  description: 'Fast, mobile-first commerce for WhatsApp',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-kickshop`}>
        <QueryProvider>
          {children}
          <Toaster position="bottom-center" />
        </QueryProvider>
      </body>
    </html>
  );
}
