'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { storefrontApi } from '@/lib/api';
import { ShoppingCart, MessageCircle, Share2, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { addItem } = useCart();
  const { data: productResponse, isLoading } = useQuery({
    queryKey: ['product', params.slug],
    queryFn: () => storefrontApi.getProductBySlug(params.slug),
  });

  if (isLoading) {
    return (
      <div className="animate-pulse flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 aspect-square bg-gray-100 rounded-xl"></div>
        <div className="flex-1 space-y-4">
          <div className="h-8 bg-gray-100 rounded w-3/4"></div>
          <div className="h-6 bg-gray-100 rounded w-1/4"></div>
          <div className="h-32 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  const product = productResponse?.data?.data;

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || '',
      quantity: 1,
      variant: ''
    });
    toast.success('Added to cart!');
  };

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative">
          {product.images?.length > 0 ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images?.map((img: string, i: number) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden border">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm font-bold text-gray-700">4.5</span>
            </div>
            <span className="text-gray-400 text-sm">(12 Reviews)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
              <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">
                {discountPercent}% OFF
              </span>
            </>
          )}
        </div>

        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            <ShoppingCart className="w-5 h-5" />
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </button>
        </div>

        <button className="flex items-center justify-center gap-2 text-gray-600 w-full py-2 font-medium">
          <Share2 className="w-4 h-4" />
          Share with friends
        </button>
      </div>
    </div>
  );
}
