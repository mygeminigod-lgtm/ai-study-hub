import React, { useEffect } from 'react';
import {
  X,
  Sliders,
  LayoutGrid,
  List,
  Trash2,
  Keyboard,
  Check
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  viewMode: 'grid' | 'compact';
  onViewModeChange: (mode: 'grid' | 'compact') => void;
  themeAccent: 'blue' | 'purple' | 'cyan';
  onThemeAccentChange: (theme: 'blue' | 'purple' | 'cyan') => void;
  favoritesCount: number;
  onClearFavorites: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  viewMode,
  onViewModeChange,
  themeAccent,
  onThemeAccentChange,
  favoritesCount,
  onClearFavorites
}) => {
  const [clearedNotice, setClearedNotice] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClear = () => {
    if (favoritesCount === 0) return;
    if (window.confirm('Are you sure you want to clear all your saved favorites?')) {
      onClearFavorites();
      setClearedNotice(true);
      setTimeout(() => setClearedNotice(false), 2500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div
        className="relative w-full max-w-md bg-[#0d121c] border border-slate-800 rounded-2xl shadow-2xl p-6 overflow-hidden text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
          aria-label="Close settings"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 id="settings-title" className="text-lg font-bold text-white tracking-tight">
              Dashboard Settings
            </h3>
            <p className="text-xs text-slate-400">
              Customize display preferences and stored data
            </p>
          </div>
        </div>

        {/* Setting 1: Default View Mode */}
        <div className="mb-5 pb-5 border-b border-slate-800/80">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Card Layout View
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => onViewModeChange('compact')}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                viewMode === 'compact'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Compact List</span>
            </button>
          </div>
        </div>

        {/* Setting 2: Theme Accent */}
        <div className="mb-5 pb-5 border-b border-slate-800/80">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Ambient Accent Color
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'blue', label: 'Electric Blue', dot: 'bg-blue-500' },
              { id: 'purple', label: 'Deep Purple', dot: 'bg-purple-500' },
              { id: 'cyan', label: 'Cyber Cyan', dot: 'bg-cyan-500' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => onThemeAccentChange(t.id as any)}
                className={`flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                  themeAccent === t.id
                    ? 'bg-slate-800 text-white border-slate-600 shadow-sm ring-1 ring-blue-400'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                <span className="truncate">{t.label.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Setting 3: Favorites Data Management */}
        <div className="mb-5 pb-5 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Saved Favorites
              </span>
              <span className="text-xs text-slate-400">
                {favoritesCount} tool{favoritesCount === 1 ? '' : 's'} stored locally
              </span>
            </div>
            <button
              onClick={handleClear}
              disabled={favoritesCount === 0}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
                favoritesCount > 0
                  ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
          {clearedNotice && (
            <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
              <Check className="w-3 h-3" /> Favorites cleared successfully.
            </p>
          )}
        </div>

        {/* Setting 4: Keyboard Shortcuts & Safe Launch */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
            <Keyboard className="w-3.5 h-3.5 text-slate-400" />
            <span>Shortcuts & Safe Launch</span>
          </label>
          <div className="space-y-1.5 text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
              <span>Focus search bar</span>
              <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-slate-800 rounded border border-slate-700 text-slate-300">
                /
              </kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Close active modal</span>
              <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-slate-800 rounded border border-slate-700 text-slate-300">
                Esc
              </kbd>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
              <span>External link security</span>
              <span className="text-[11px] text-slate-400 font-mono">
                rel="noopener noreferrer"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};