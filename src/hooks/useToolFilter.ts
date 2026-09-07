import { useMemo, useState } from 'react';
import { CategoryId } from '../types';
import { TOOLS } from '../data/tools';

export function useToolFilter(favoriteIds: string[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'category'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  const filteredTools = useMemo(() => {
    let list = [...TOOLS];

    // 1. Category Filter
    if (selectedCategory === 'favorites') {
      list = list.filter(t => favoriteIds.includes(t.id));
    } else if (selectedCategory !== 'all') {
      list = list.filter(t => t.category === selectedCategory);
    }

    // 2. Specific Tag Filter
    if (selectedTag) {
      const lowerTag = selectedTag.toLowerCase();
      list = list.filter(t => 
        t.tags.some(tag => tag.toLowerCase() === lowerTag)
      );
    }

    // 3. Search Query Filter (multi-field matching)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const terms = query.split(/\s+/).filter(Boolean);

      list = list.filter(tool => {
        const nameMatch = tool.name.toLowerCase();
        const descMatch = tool.description.toLowerCase();
        const catMatch = tool.categoryName.toLowerCase();
        const tagsMatch = tool.tags.map(t => t.toLowerCase());
        const bestForMatch = tool.bestFor.map(b => b.toLowerCase());
        const bonusMatch = (tool.studentBonus || '').toLowerCase();

        // Must match all search terms
        return terms.every(term => {
          return (
            nameMatch.includes(term) ||
            descMatch.includes(term) ||
            catMatch.includes(term) ||
            tagsMatch.some(t => t.includes(term)) ||
            bestForMatch.some(b => b.includes(term)) ||
            bonusMatch.includes(term)
          );
        });
      });
    }

    // 4. Sorting
    list.sort((a, b) => {
      if (sortBy === 'featured') {
        // Featured tools first, then favorites, then alphabetical
        const aFav = favoriteIds.includes(a.id) ? 1 : 0;
        const bFav = favoriteIds.includes(b.id) ? 1 : 0;
        if ((a.featured ? 1 : 0) !== (b.featured ? 1 : 0)) {
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
        if (aFav !== bFav) {
          return bFav - aFav;
        }
        return a.name.localeCompare(b.name);
      }

      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === 'category') {
        return a.categoryName.localeCompare(b.categoryName) || a.name.localeCompare(b.name);
      }

      return 0;
    });

    return list;
  }, [searchQuery, selectedCategory, selectedTag, favoriteIds, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag(null);
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedTag,
    setSelectedTag,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    filteredTools,
    resetFilters,
    totalCount: TOOLS.length,
    matchingCount: filteredTools.length
  };
}
