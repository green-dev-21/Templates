'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { storefrontApi } from '@/lib/api';
import CategoryChip from '@/components/catalog/CategoryChip';
import { Loader2 } from 'lucide-react';

export default function CategoriesPage() {
  const { data: response, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => storefrontApi.getCategories(),
  });

  const categories = response?.data?.data || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Shop by Category</h1>
        <p className="text-gray-500">Explore our products across different categories</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category: any) => (
            <CategoryChip key={category._id} category={category} />
          ))}
          {categories.length === 0 && (
            <p className="col-span-full text-center py-10 text-gray-500">No categories found.</p>
          )}
        </div>
      )}
    </div>
  );
}
