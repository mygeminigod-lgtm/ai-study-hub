import React from 'react';
import {
  LayoutGrid,
  List,
  ArrowUpDown,
  Tag,
  X
} from 'lucide-react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { DynamicIcon } from './DynamicIcon';

interface CategoryFiltersProps {
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  selectedTag?: string | null;
  onSelectTag?: (tag: string | null) => void;
  favoritesCount: number;
  totalCount: number;
  matchingCount: number;
  sortBy: 'featured' | 'name' | 'category';
  onSortChange: (sort: 'featured' | 'name' | 'category') => void;
  viewMode: 'grid' | 'compact';
  onViewModeChange: (mode: 'grid' | 'compact') => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedTag = null,
  onSelectTag,
  favoritesCount,
  totalCount,
  matchingCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange
}) => {
  return (
    <div id="tools-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 scroll-mt-24">
      {/* Category Chips Carousel/Wrap */}
      <div className="flex items-center justify-between gap-4 mb-3 pb-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 flex-nowrap sm:flex-wrap">
          {CATEGORIES.map(category => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <DynamicIcon
                  name={category.iconName}
                  className={`w-3.5 h-3.5 ${
                    category.id === 'favorites' && favoritesCount > 0 ? 'text-red-400 fill-red-400' : ''
                  }`}
                />
                <span>{category.shortLabel}</span>
                {category.id === 'favorites' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-blue-800 text-white' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {favoritesCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Sub-Tag Pill if active */}
      {selectedTag && onSelectTag && (
        <div className="flex items-center gap-2 mb-4 p-2 px-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-300">
          <Tag className="w-3.5 h-3.5 text-blue-400" />
          <span>Active filter: <strong className="text-white">&ldquo;{selectedTag}&rdquo;</strong></span>
          <button
            onClick={() => onSelectTag(null)}
            className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-900/50 hover:bg-blue-800 text-blue-200 text-[11px] transition"
          >
            <X className="w-3 h-3" />
            <span>Clear Tag</span>
          </button>
        </div>
      )}

      {/* Control Bar: Matching Count, Sorting, and View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
        <div className="text-slate-400">
          Showing <span className="font-semibold text-white">{matchingCount}</span> of{' '}
          <span className="font-semibold text-slate-300">{totalCount}</span> tools
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="bg-transparent text-slate-200 focus:outline-none cursor-pointer text-xs"
            >
              <option value="featured" className="bg-slate-900 text-white">Featured</option>
              <option value="name" className="bg-slate-900 text-white">Name (A-Z)</option>
              <option value="category" className="bg-slate-900 text-white">Category</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-1.5 rounded-md transition ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onViewModeChange('compact')}
              className={`p-1.5 rounded-md transition ${
                viewMode === 'compact'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Compact View"
              aria-label="Compact View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};