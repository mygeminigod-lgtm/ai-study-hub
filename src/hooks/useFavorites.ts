import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'ai_study_hub_favorites_v1';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load favorites from localStorage', e);
    }
    // Default favorite recommendations for new users
    return ['notebooklm', 'consensus', 'cursor', 'claude'];
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.warn('Failed to save favorites to localStorage', e);
    }
  }, [favoriteIds]);

  const toggleFavorite = useCallback((toolId: string) => {
    setFavoriteIds(prev => {
      if (prev.includes(toolId)) {
        return prev.filter(id => id !== toolId);
      } else {
        return [...prev, toolId];
      }
    });
  }, []);

  const isFavorite = useCallback((toolId: string) => {
    return favoriteIds.includes(toolId);
  }, [favoriteIds]);

  const clearAllFavorites = useCallback(() => {
    setFavoriteIds([]);
  }, []);

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoritesCount: favoriteIds.length
  };
}
