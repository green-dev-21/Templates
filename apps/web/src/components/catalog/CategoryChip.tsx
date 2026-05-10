import React from 'react';
import Link from 'next/link';

interface CategoryChipProps {
  category: {
    name: string;
    slug: string;
  };
  isActive?: boolean;
}

const CategoryChip = ({ category, isActive }: CategoryChipProps) => {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${
        isActive
          ? 'bg-primary border-primary text-white'
          : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
      }`}
    >
      {category.name}
    </Link>
  );
};

export default CategoryChip;
