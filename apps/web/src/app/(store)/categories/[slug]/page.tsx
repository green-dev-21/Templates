'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { storefrontApi } from '@/lib/api';
import ProductGrid from '@/components/catalog/ProductGrid';
import CategoryScrollRow from '@/components/catalog/CategoryScrollRow';

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const { data: categoryResponse, isLoading: categoryLoading } = useQuery({
    queryKey: ['category', params.slug],
    queryFn: () => storefrontApi.getCategoryBySlug(params.slug),
  });

  const { data: productsResponse, isLoading: productsLoading } = useQuery({
    queryKey: ['category-products', params.slug],
    queryFn: () => storefrontApi.getProducts({ category: params.slug }),
  });

  const category = categoryResponse?.data?.data;
  const products = productsResponse?.data?.products || [];

  if (categoryLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!category) {
    return <div className="text-center py-20">Category not found.</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
        <p className="text-gray-500 mt-2">{category.description || `Browse our collection of ${category.name}`}</p>
      </div>

      <section>
        {productsLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map(i => <div key={i} className="aspect-[3/4] animate-pulse bg-gray-100 rounded-xl"></div>)}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
        {!productsLoading && products.length === 0 && (
          <p className="text-center py-10 text-gray-500">No products found in this category.</p>
        )}
      </section>
    </div>
  );
}

function Loader2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  );
}
