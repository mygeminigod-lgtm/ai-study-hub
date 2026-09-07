import React from 'react';
import {
  ArrowUpRight
} from 'lucide-react';
import { CategoryId } from '../types';

interface QuickActionsProps {
  onSelectCategory: (category: CategoryId) => void;
  activeCategory: CategoryId;
}

interface QuickActionItem {
  id: CategoryId;
  label: string;
  emoji: string;
  subtext: string;
  accentColor: string;
  bgGradient: string;
  borderHover: string;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onSelectCategory,
  activeCategory
}) => {
  const actions: QuickActionItem[] = [
    {
      id: 'research',
      label: 'Research a Paper',
      emoji: '📚',
      subtext: 'Find, cite & synthesize',
      accentColor: 'text-cyan-400',
      bgGradient: 'from-cyan-950/40 to-slate-900/40',
      borderHover: 'group-hover:border-cyan-500/50'
    },
    {
      id: 'stem',
      label: 'Study & Solve',
      emoji: '🧠',
      subtext: 'Math, logic & STEM',
      accentColor: 'text-purple-400',
      bgGradient: 'from-purple-950/40 to-slate-900/40',
      borderHover: 'group-hover:border-purple-500/50'
    },
    {
      id: 'writing',
      label: 'Write & Edit',
      emoji: '✍️',
      subtext: 'Essays, thesis & polish',
      accentColor: 'text-pink-400',
      bgGradient: 'from-pink-950/40 to-slate-900/40',
      borderHover: 'group-hover:border-pink-500/50'
    },
    {
      id: 'coding',
      label: 'Code',
      emoji: '💻',
      subtext: 'Build, debug & git',
      accentColor: 'text-emerald-400',
      bgGradient: 'from-emerald-950/40 to-slate-900/40',
      borderHover: 'group-hover:border-emerald-500/50'
    },
    {
      id: 'visual',
      label: 'Create Visuals',
      emoji: '🎨',
      subtext: 'Images & presentations',
      accentColor: 'text-amber-400',
      bgGradient: 'from-amber-950/40 to-slate-900/40',
      borderHover: 'group-hover:border-amber-500/50'
    },
    {
      id: 'video-audio',
      label: 'Create Video & Audio',
      emoji: '🎬',
      subtext: 'Video, voice & music',
      accentColor: 'text-rose-400',
      bgGradient: 'from-rose-950/40 to-slate-900/40',
      borderHover: 'group-hover:border-rose-500/50'
    }
  ];

  const handleActionClick = (id: CategoryId) => {
    onSelectCategory(id);
    const catalog = document.getElementById('tools-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <span>Quick Launch By Intent</span>
        </h2>
        <span className="text-xs text-slate-400">Click to filter dashboard</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map(action => {
          const isSelected = activeCategory === action.id;
          return (
            <button
              key={action.id}
              onClick={() => handleActionClick(action.id)}
              className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-800/90 border-blue-500 ring-1 ring-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl" role="img" aria-label={action.label}>
                  {action.emoji}
                </span>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors ${
                    isSelected ? 'text-blue-400' : ''
                  }`}
                />
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-white transition-colors line-clamp-1">
                  {action.label}
                </h3>
                <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-1 mt-0.5">
                  {action.subtext}
                </p>
              </div>

              {isSelected && (
                <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};
