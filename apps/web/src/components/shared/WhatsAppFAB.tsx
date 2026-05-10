import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors lg:bottom-10"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFAB;
