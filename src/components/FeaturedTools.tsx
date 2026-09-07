import React from 'react';
import { Sparkles, Heart, ArrowUpRight } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { DynamicIcon } from './DynamicIcon';
import { Tool } from '../types';

interface FeaturedToolsProps {
  isFavorite: (toolId: string) => boolean;
  onToggleFavorite: (toolId: string) => void;
  onSelectToolModal: (tool: Tool) => void;
}

// Exactly the 6 highlighted popular power tools
const FEATURED_IDS = [
  'notebooklm',
  'chatgpt',
  'claude',
  'perplexity',
  'cursor',
  'gemini'
];

export const FeaturedTools: React.FC<FeaturedToolsProps> = ({
  isFavorite,
  onToggleFavorite,
  onSelectToolModal
}) => {
  const featuredTools = FEATURED_IDS
    .map(id => TOOLS.find(t => t.id === id))
    .filter((t): t is Tool => Boolean(t));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            Popular AI Tools
          </h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
            Core Essentials
          </span>
        </div>
        <span className="text-xs text-slate-400 hidden sm:inline">
          Most widely adopted AI workflows
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredTools.map(tool => {
          const isFav = isFavorite(tool.id);
          return (
            <div
              key={tool.id}
              onClick={() => onSelectToolModal(tool)}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 cursor-pointer hover:-translate-y-1"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/40 transition-colors">
                      <DynamicIcon name={tool.icon} className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-400">
                        {tool.categoryName}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(tool.id);
                    }}
                    className={`p-2 rounded-lg border transition-colors ${
                      isFav
                        ? 'bg-red-500/10 border-red-500/30 text-red-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                    title={isFav ? 'Favorited' : 'Add to favorites'}
                    aria-label="Toggle favorite"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-400' : ''}`} />
                  </button>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                  {tool.description}
                </p>

                {/* Best for tags */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold text-slate-400 block mb-1">
                    BEST FOR:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {tool.bestFor.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-900/40 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom / CTA */}
              <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {tool.pricing}
                </span>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition shadow-sm group/link"
                >
                  <span>Open Tool</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
