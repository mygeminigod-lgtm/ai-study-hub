import React from 'react';
import {
  ExternalLink,
  Heart,
  ArrowRight
} from 'lucide-react';
import { Tool } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface ToolCardProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (toolId: string) => void;
  onOpenModal: (tool: Tool) => void;
  viewMode?: 'grid' | 'compact';
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  isFavorite,
  onToggleFavorite,
  onOpenModal,
  viewMode = 'grid'
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(tool.id);
  };

  const handleOpenClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents opening modal when clicking launch button
  };

  if (viewMode === 'compact') {
    return (
      <div
        onClick={() => onOpenModal(tool)}
        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900/95 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
      >
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/80 group-hover:border-blue-500/30 transition-colors flex-shrink-0">
            <DynamicIcon name={tool.icon} className="w-4 h-4 text-cyan-400" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors truncate">
                {tool.name}
              </h3>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {tool.categoryName}
              </span>
              {tool.pricing && (
                <span className="text-[10px] text-emerald-400 font-mono hidden md:inline">
                  {tool.pricing}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
              {tool.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-lg border transition-colors ${
              isFavorite
                ? 'bg-red-500/10 border-red-500/40 text-red-400'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isFavorite ? 'Remove favorite' : 'Add favorite'}
            aria-label="Toggle favorite"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-400' : ''}`} />
          </button>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition shadow-sm group/btn"
          >
            <span>Open</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onOpenModal(tool)}
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 hover:bg-[#0f172a]/95 border border-slate-800/90 hover:border-blue-500/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer hover:-translate-y-1.5"
    >
      {/* Top section */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:border-blue-500/40 transition-colors">
              <DynamicIcon name={tool.icon} className="w-5 h-5 text-cyan-400" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                  {tool.name}
                </h3>
              </div>
              <span className="text-[11px] font-medium text-slate-400">
                {tool.categoryName}
              </span>
            </div>
          </div>

          {/* Favorite button */}
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-xl border transition-all ${
              isFavorite
                ? 'bg-red-500/10 border-red-500/30 text-red-400'
                : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            aria-label={`Favorite ${tool.name}`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-400 heart-animated' : ''}`} />
          </button>
        </div>

        {/* Short description */}
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
          {tool.description}
        </p>

        {/* Best for list */}
        <div className="mb-4">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block mb-1">
            Best for:
          </span>
          <p className="text-xs text-slate-300 leading-snug">
            {tool.bestFor.slice(0, 3).join(' • ')}
          </p>
        </div>
      </div>

      {/* Footer / Launch Buttons */}
      <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(tool);
          }}
          className="text-xs font-medium text-slate-400 hover:text-white transition px-2 py-1.5 rounded-lg hover:bg-slate-800/60"
        >
          Learn More
        </button>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenClick}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition shadow-md shadow-blue-600/20 group/btn"
          aria-label={`Open ${tool.name} in new tab`}
        >
          <span>Open {tool.name.split(' ')[0]}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
