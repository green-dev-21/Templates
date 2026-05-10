import React from 'react';
import ProductGrid from '@/components/catalog/ProductGrid';
import CategoryScrollRow from '@/components/catalog/CategoryScrollRow';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Dummy data
  const dummyCategories = [
    { name: 'Shoes', slug: 'shoes' },
    { name: 'Fashion', slug: 'fashion' },
    { name: 'Electronics', slug: 'electronics' },
    { name: 'Groceries', slug: 'groceries' },
  ];

  const dummyProducts = [
    { slug: 'p1', name: 'Product 1', price: 100, images: [] },
    { slug: 'p2', name: 'Product 2', price: 200, images: [] },
    { slug: 'p3', name: 'Product 3', price: 300, images: [] },
    { slug: 'p4', name: 'Product 4', price: 400, images: [] },
  ];

  const categoryName = dummyCategories.find(c => c.slug === params.slug)?.name || 'Category';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 capitalize">{categoryName}</h1>
        <p className="text-gray-500 mt-1">Explore our collection of {categoryName.toLowerCase()}</p>
      </div>

      <CategoryScrollRow categories={dummyCategories} activeSlug={params.slug} />

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{dummyProducts.length} Products found</span>
        <select className="bg-transparent text-sm font-medium focus:outline-none">
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <ProductGrid products={dummyProducts} />
    </div>
  );
}
