import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    images: string[];
    discountPercent?: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square">
        <Image
          src={product.images[0] || '/placeholder.png'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discountPercent && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discountPercent}% OFF
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary font-bold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 text-sm line-through">₹{product.originalPrice}</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-1 bg-gray-100 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
          <button className="flex items-center justify-center gap-1 bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:bg-green-600">
            <MessageCircle className="w-4 h-4" />
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
