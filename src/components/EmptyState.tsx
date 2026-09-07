import React from 'react';
import { SearchX, Heart, Sparkles, RotateCcw } from 'lucide-react';
import { CategoryId } from '../types';

interface EmptyStateProps {
  searchQuery: string;
  selectedCategory: CategoryId;
  onReset: () => void;
  onSelectSearchTerm: (term: string) => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  searchQuery,
  selectedCategory,
  onReset,
  onSelectSearchTerm
}) => {
  const isFavoritesEmpty = selectedCategory === 'favorites';

  if (isFavoritesEmpty) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4 text-red-400">
          <Heart className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          No favorites yet
        </h3>
        <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
          Save your most-used AI tools here for quick access by clicking the heart icon on any card.
        </p>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>Browse All Tools</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
        <SearchX className="w-8 h-8 text-slate-500" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        No AI tools found
      </h3>

      <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
        {searchQuery ? (
          <>
            No matching tools found for &ldquo;<span className="text-slate-200">{searchQuery}</span>&rdquo;.
          </>
        ) : (
          'There are no tools matching the current filter.'
        )}
      </p>

      {/* Suggested search terms */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
        <p className="text-xs text-slate-400 mb-2 font-medium">Try searching for:</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['research', 'coding', 'math', 'video', 'essays', 'citations'].map(term => (
            <button
              key={term}
              onClick={() => onSelectSearchTerm(term)}
              className="text-xs px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 transition"
            >
              &ldquo;{term}&rdquo;
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filters & Search</span>
      </button>
    </div>
  );
};
