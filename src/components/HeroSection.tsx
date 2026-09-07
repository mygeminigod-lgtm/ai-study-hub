import React, { useRef, useEffect } from 'react';
import { Search, X, Zap } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectExample: (example: string) => void;
  totalToolsCount: number;
}

const SEARCH_EXAMPLES = [
  'AP Physics diagrams & circuits',
  'AP Chemistry equilibrium & titrations',
  'AP Biology pathways & genetics',
  'AP Psychology brain anatomy',
  'AP Environmental data & CED',
  'Find academic papers',
  'Write a literature review',
  'Solve a calculus problem',
  'Code my assignment'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onSelectExample,
  totalToolsCount
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus input on '/' keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClear = () => {
    onSearchChange('');
    searchInputRef.current?.focus();
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Academic verified badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            Curated Directory for University & Research Workflows
          </span>
          <span className="text-[11px] font-mono text-blue-400 font-semibold pl-1 border-l border-slate-700">
            {totalToolsCount} Tools
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
          All the AI tools you need.{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            One workspace.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Research, study, write, code, design, and create faster with the best AI tools in one place.
        </p>

        {/* Global Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-6 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-300 group-focus-within:opacity-75" />
          
          <div className="relative flex items-center bg-[#0c111c] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden transition-all group-focus-within:border-blue-500/80">
            <div className="pl-4 pr-2 text-slate-400">
              <Search className="w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
            </div>

            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              placeholder="What are you trying to do? (e.g. literature review, solve calculus, debug code...)"
              className="w-full py-4 pr-12 text-sm sm:text-base bg-transparent text-white placeholder-slate-400 focus:outline-none"
              aria-label="Search AI tools by task, name, or keyword"
            />

            {searchQuery ? (
              <button
                onClick={handleClear}
                className="p-2 mr-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="pr-4 hidden sm:flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-[11px] font-mono bg-slate-800/80 border border-slate-700 text-slate-400 rounded-md shadow-sm">
                  /
                </kbd>
              </div>
            )}
          </div>
        </div>

        {/* Search Examples Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto text-xs">
          <span className="text-slate-400 text-xs mr-1 font-medium flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400" /> Try:
          </span>
          {SEARCH_EXAMPLES.map((example) => (
            <button
              key={example}
              onClick={() => onSelectExample(example)}
              className="px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-blue-900/30 text-slate-300 hover:text-blue-300 border border-slate-800 hover:border-blue-500/40 transition-all text-[11px] sm:text-xs"
            >
              "{example}"
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
