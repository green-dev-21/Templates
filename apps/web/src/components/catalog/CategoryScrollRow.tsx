import React from 'react';
import CategoryChip from './CategoryChip';

interface CategoryScrollRowProps {
  categories: any[];
  activeSlug?: string;
}

const CategoryScrollRow = ({ categories, activeSlug }: CategoryScrollRowProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
      <CategoryChip name="All" slug="" isActive={!activeSlug} />
      {categories.map((category) => (
        <CategoryChip
          key={category.slug}
          name={category.name}
          slug={category.slug}
          isActive={category.slug === activeSlug}
        />
      ))}
    </div>
  );
};

export default CategoryScrollRow;
