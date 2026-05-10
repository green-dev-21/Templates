import React from 'react';
import Link from 'next/link';

const StoreFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-24 lg:pb-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">StoreLogo</h3>
          <p className="text-gray-400">
            Premium quality products at your doorstep. Shop now on WhatsApp for the best deals!
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/delivery">Delivery Info</Link></li>
            <li><Link href="/track-order">Track Order</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">
            Email: contact@store.com<br />
            WhatsApp: +91 98765 43210<br />
            Address: 123 Store St, City, Country
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} StoreName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default StoreFooter;
