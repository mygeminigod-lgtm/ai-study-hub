import React from 'react';
import { GraduationCap, Heart, ArrowUp } from 'lucide-react';
import { CategoryId } from '../types';

interface FooterProps {
  onSelectCategory: (category: CategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#07090e] pt-12 pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          {/* Brand & Purpose */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                AI Study Hub
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              &ldquo;Your gateway to the best AI tools for studying, research, coding, and creative work.&rdquo;
            </p>
          </div>

          {/* Quick Category Jump Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300">
            <button
              onClick={() => onSelectCategory('all')}
              className="hover:text-blue-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => onSelectCategory('ap-prep')}
              className="hover:text-amber-400 transition"
            >
              AP & Exams
            </button>
            <button
              onClick={() => onSelectCategory('research')}
              className="hover:text-blue-400 transition"
            >
              Research
            </button>
            <button
              onClick={() => onSelectCategory('stem')}
              className="hover:text-blue-400 transition"
            >
              STEM
            </button>
            <button
              onClick={() => onSelectCategory('writing')}
              className="hover:text-blue-400 transition"
            >
              Writing
            </button>
            <button
              onClick={() => onSelectCategory('coding')}
              className="hover:text-blue-400 transition"
            >
              Coding
            </button>
            <button
              onClick={() => onSelectCategory('visual')}
              className="hover:text-blue-400 transition"
            >
              Visual
            </button>
            <button
              onClick={() => onSelectCategory('video-audio')}
              className="hover:text-blue-400 transition"
            >
              Video & Audio
            </button>
            <button
              onClick={() => onSelectCategory('favorites')}
              className="hover:text-red-400 transition flex items-center gap-1"
            >
              <Heart className="w-3 h-3 text-red-400" /> Favorites
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 self-end md:self-auto"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium">Top</span>
          </button>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            AI Study Hub is an independent tool directory and is not affiliated with the listed services.
          </p>
          <p className="flex items-center gap-1">
            Built for students, researchers, and creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
