export type CategoryId = 
  | 'all'
  | 'ap-prep'
  | 'ap-science'
  | 'research'
  | 'stem'
  | 'writing'
  | 'coding'
  | 'visual'
  | 'video-audio'
  | 'favorites';

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel: string;
  description: string;
  iconName: string;
  color: string;
  gradient: string;
  badgeColor: string;
}

export interface Tool {
  id: string;
  name: string;
  url: string;
  category: CategoryId;
  categoryName: string;
  description: string;
  bestFor: string[];
  tags: string[];
  icon: string; // Lucide icon identifier
  featured?: boolean;
  pricing?: string;
  studentBonus?: string;
  toolOfTheDayRationale?: string;
}

export interface TaskRecommendation {
  id: string;
  taskTitle: string;
  category: CategoryId;
  icon: string;
  recommendedToolIds: string[];
  explanations: Record<string, string>; // toolId -> why it is recommended
}

export interface FilterOptions {
  searchQuery: string;
  selectedCategory: CategoryId;
  selectedTag?: string;
  onlyFavorites: boolean;
  sortBy: 'featured' | 'name' | 'category';
  viewMode: 'grid' | 'compact';
}
