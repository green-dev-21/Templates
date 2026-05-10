import React from 'react';
import Link from 'next/link';

interface CategoryChipProps {
  name: string;
  slug: string;
  isActive?: boolean;
}

const CategoryChip = ({ name, slug, isActive }: CategoryChipProps) => {
  return (
    <Link
      href={`/categories/${slug}`}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${
        isActive
          ? 'bg-primary border-primary text-white'
          : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
      }`}
    >
      {name}
    </Link>
  );
};

export default CategoryChip;
