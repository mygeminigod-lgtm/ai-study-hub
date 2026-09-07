export type CategoryId = 
  | 'all'
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
  pricing?: 'Free' | 'Freemium' | 'Paid' | 'Free Tier' | 'Free for Students' | 'Free / Open Source' | 'Paid / API' | 'Freemium / API' | 'Preview' | string;
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
