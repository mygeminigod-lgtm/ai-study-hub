import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Heart,
  Tag,
  GraduationCap,
  Copy,
  CheckCheck
} from 'lucide-react';
import { Tool } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface ToolDetailModalProps {
  tool: Tool | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (toolId: string) => void;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({
  tool,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  const [copied, setCopied] = React.useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!tool) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(tool.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#0d121c] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-md">
            <DynamicIcon name={tool.icon} className="w-7 h-7 text-cyan-400" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {tool.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30 font-medium">
                {tool.categoryName}
              </span>
              {tool.pricing && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {tool.pricing}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <p className="text-sm text-slate-300 leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Student advantage badge if available */}
        {tool.studentBonus && (
          <div className="mb-5 p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-blue-200 block mb-0.5">
                  Academic / Student Advantage:
                </span>
                <p className="text-xs text-blue-300/90 leading-relaxed">
                  {tool.studentBonus}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Best for */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Best Use Cases
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tool.bestFor.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
            <Tag className="w-3 h-3 text-slate-400" />
            <span>Search Tags</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tool.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Official URL display */}
        <div className="mb-6 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
          <span className="text-slate-400 font-mono truncate mr-2">
            {tool.url}
          </span>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition flex-shrink-0"
            title="Copy URL"
          >
            {copied ? (
              <>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={() => onToggleFavorite(tool.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs font-semibold transition ${
              isFavorite
                ? 'bg-red-500/15 border-red-500/40 text-red-300 hover:bg-red-500/25'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-400 text-red-400' : ''}`} />
            <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
          </button>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition group"
          >
            <span>Open {tool.name}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
