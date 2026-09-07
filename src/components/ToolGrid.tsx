import React from 'react';
import { Tool, CategoryId } from '../types';
import { ToolCard } from './ToolCard';
import { EmptyState } from './EmptyState';

interface ToolGridProps {
  tools: Tool[];
  isFavorite: (toolId: string) => boolean;
  onToggleFavorite: (toolId: string) => void;
  onOpenModal: (tool: Tool) => void;
  viewMode: 'grid' | 'compact';
  searchQuery: string;
  selectedCategory: CategoryId;
  onResetFilters: () => void;
  onSetSearchQuery: (query: string) => void;
}

export const ToolGrid: React.FC<ToolGridProps> = ({
  tools,
  isFavorite,
  onToggleFavorite,
  onOpenModal,
  viewMode,
  searchQuery,
  selectedCategory,
  onResetFilters,
  onSetSearchQuery
}) => {
  if (tools.length === 0) {
    return (
      <EmptyState
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onReset={onResetFilters}
        onSelectSearchTerm={onSetSearchQuery}
      />
    );
  }

  if (viewMode === 'compact') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col gap-2.5">
          {tools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={isFavorite(tool.id)}
              onToggleFavorite={onToggleFavorite}
              onOpenModal={onOpenModal}
              viewMode="compact"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {tools.map(tool => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isFavorite={isFavorite(tool.id)}
            onToggleFavorite={onToggleFavorite}
            onOpenModal={onOpenModal}
            viewMode="grid"
          />
        ))}
      </div>
    </div>
  );
};
