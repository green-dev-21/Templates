'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { storefrontApi } from '@/lib/api';
import ProductGrid from '@/components/catalog/ProductGrid';
import CategoryScrollRow from '@/components/catalog/CategoryScrollRow';

export default function HomePage() {
  const { data: productsResponse, isLoading: productsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => storefrontApi.getProducts({ featured: true }),
  });

  const { data: categoriesResponse, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => storefrontApi.getCategories(),
  });

  const { data: bannersResponse } = useQuery({
    queryKey: ['banners'],
    queryFn: () => storefrontApi.getBanners(),
  });

  const products = productsResponse?.data?.products || [];
  const categories = categoriesResponse?.data?.data || [];
  const banners = bannersResponse?.data?.data || [];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      {banners.length > 0 ? (
        <div className="w-full aspect-[2/1] md:aspect-[3/1] bg-gray-200 rounded-xl overflow-hidden relative">
          <img
            src={banners[0].imageUrl}
            alt={banners[0].title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full aspect-[2/1] md:aspect-[3/1] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-semibold">
          No Banners Available
        </div>
      )}

      <section>
        <h2 className="text-lg font-bold mb-4">Shop by Category</h2>
        {categoriesLoading ? (
          <div className="h-10 animate-pulse bg-gray-100 rounded"></div>
        ) : (
          <CategoryScrollRow categories={categories} />
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Featured Products</h2>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        {productsLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] animate-pulse bg-gray-100 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </section>
    </div>
  );
}
