import React, { useMemo } from 'react';
import { Sparkles, Calendar, ExternalLink, Heart } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { DynamicIcon } from './DynamicIcon';
import { Tool } from '../types';

interface ToolOfTheDayProps {
  isFavorite: (toolId: string) => boolean;
  onToggleFavorite: (toolId: string) => void;
  onSelectToolModal: (tool: Tool) => void;
}

export const ToolOfTheDay: React.FC<ToolOfTheDayProps> = ({
  isFavorite,
  onToggleFavorite,
  onSelectToolModal
}) => {
  // Deterministic tool of the day based on day of year
  const toolOfTheDay = useMemo(() => {
    const candidateTools = TOOLS.filter(t => t.toolOfTheDayRationale);
    if (candidateTools.length === 0) return TOOLS[0];
    const now = new Date();
    const dayOfYear = Math.floor(
      (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
    );
    const index = dayOfYear % candidateTools.length;
    return candidateTools[index];
  }, []);

  const isFav = isFavorite(toolOfTheDay.id);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="relative rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/20 p-5 sm:p-6 shadow-xl backdrop-blur-md overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Column: Spotlight details */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[11px] font-semibold">
                <Sparkles className="w-3 h-3 text-blue-400" />
                Tool of the Day
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" /> Daily Spotlight
              </span>
            </div>

            <div className="flex items-start gap-4 mt-3">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/60 shadow-md">
                <DynamicIcon name={toolOfTheDay.icon} className="w-6 h-6 text-cyan-400" />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
                    {toolOfTheDay.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                    {toolOfTheDay.categoryName}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {toolOfTheDay.description}
                </p>

                {toolOfTheDay.toolOfTheDayRationale && (
                  <p className="text-xs text-blue-300/90 bg-blue-950/50 border border-blue-800/40 rounded-lg p-2 mt-2 max-w-2xl">
                    💡 <span className="font-semibold text-white">Why students find it useful:</span>{' '}
                    {toolOfTheDay.toolOfTheDayRationale}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: CTAs */}
          <div className="flex items-center gap-3 self-start lg:self-center">
            <button
              onClick={() => onToggleFavorite(toolOfTheDay.id)}
              className={`p-2.5 rounded-xl border transition-colors ${
                isFav
                  ? 'bg-red-500/10 border-red-500/40 text-red-400'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title={isFav ? 'Favorited' : 'Add to favorites'}
              aria-label="Toggle favorite"
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-red-400' : ''}`} />
            </button>

            <button
              onClick={() => onSelectToolModal(toolOfTheDay)}
              className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition"
            >
              Details
            </button>

            <a
              href={toolOfTheDay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition shadow-lg shadow-blue-600/30 group"
            >
              <span>Launch {toolOfTheDay.name}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
