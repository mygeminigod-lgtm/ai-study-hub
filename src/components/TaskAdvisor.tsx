import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Heart,
  Zap
} from 'lucide-react';
import { TASK_RECOMMENDATIONS } from '../data/taskRecommendations';
import { TOOLS } from '../data/tools';
import { DynamicIcon } from './DynamicIcon';
import { Tool } from '../types';

interface TaskAdvisorProps {
  isFavorite: (toolId: string) => boolean;
  onToggleFavorite: (toolId: string) => void;
  onSelectToolModal: (tool: Tool) => void;
}

export const TaskAdvisor: React.FC<TaskAdvisorProps> = ({
  isFavorite,
  onToggleFavorite,
  onSelectToolModal
}) => {
  const [activeTaskId, setActiveTaskId] = useState<string>(TASK_RECOMMENDATIONS[0].id); // Default to "Write a literature review"

  const activeTask =
    TASK_RECOMMENDATIONS.find(t => t.id === activeTaskId) || TASK_RECOMMENDATIONS[0];

  const recommendedTools = activeTask.recommendedToolIds
    .map(id => TOOLS.find(t => t.id === id))
    .filter((t): t is Tool => Boolean(t));

  return (
    <section id="task-advisor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c121d]/90 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Glow corner accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Interactive Matchmaker
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What do you need help with?
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Select your immediate assignment or coursework goal below to get top 3 tailored AI tools with contextual rationale.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 self-start md:self-auto bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Deterministic • Zero hallucinations</span>
          </div>
        </div>

        {/* Task Selectors (Horizontal Scrollable / Wrap) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TASK_RECOMMENDATIONS.map(task => {
            const isSelected = task.id === activeTaskId;
            return (
              <button
                key={task.id}
                onClick={() => setActiveTaskId(task.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <DynamicIcon name={task.icon} className="w-3.5 h-3.5" />
                <span>{task.taskTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Recommendations Display */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider text-slate-300">
              Top 3 Recommended Tools for &ldquo;{activeTask.taskTitle}&rdquo;
            </span>
            <span>Direct official links</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedTools.map((tool, index) => {
              const explanation =
                activeTask.explanations[tool.id] || tool.description;
              const isFav = isFavorite(tool.id);

              return (
                <div
                  key={tool.id}
                  className="group relative flex flex-col justify-between rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-blue-500/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  {/* Ranking Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-[11px] font-mono font-bold border border-blue-500/30">
                        #{index + 1}
                      </span>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                        <DynamicIcon name={tool.icon} className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                        {tool.name}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(tool.id);
                      }}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isFav
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                      aria-label="Toggle favorite"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-400' : ''}`} />
                    </button>
                  </div>

                  {/* Why recommended */}
                  <div className="mb-4">
                    <p className="text-xs text-blue-300/90 bg-blue-950/40 border border-blue-900/50 rounded-lg p-2.5 leading-relaxed">
                      <span className="font-semibold text-blue-200 block mb-0.5">
                        Why students use this:
                      </span>
                      {explanation}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tool.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-900">
                    <button
                      onClick={() => onSelectToolModal(tool)}
                      className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition"
                    >
                      Details
                    </button>

                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition shadow-md shadow-blue-600/20 group/btn"
                    >
                      <span>Open {tool.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
