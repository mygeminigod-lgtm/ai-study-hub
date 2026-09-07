import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    label: 'All Tools',
    shortLabel: 'All',
    description: 'Explore the full suite of specialized AI tools for AP courses, sciences, research, and creation.',
    iconName: 'Sparkles',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  {
    id: 'ap-science',
    label: 'AP Sciences (Bio, Chem, Physics & APES)',
    shortLabel: 'AP Sciences',
    description: 'Specialized solvers, molecular simulations, and FRQ lab analyzers for AP Biology, AP Chemistry, AP Physics 1/2/C, and AP Environmental Science.',
    iconName: 'Atom',
    color: '#10b981',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  },
  {
    id: 'ap-prep',
    label: 'AP Humanities, Math & General Exam Prep',
    shortLabel: 'AP & Exams',
    description: 'Grade DBQs/LEQs against College Board rubrics, solve calculus FRQs, and review past exam questions with CED alignment.',
    iconName: 'Award',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
  },
  {
    id: 'research',
    label: 'Academic Research & Paper Writing',
    shortLabel: 'Research',
    description: 'Find papers, analyze research, discover evidence, process massive PDFs, and improve academic writing.',
    iconName: 'GraduationCap',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  },
  {
    id: 'stem',
    label: 'STEM, Math & Logical Reasoning',
    shortLabel: 'STEM & Math',
    description: 'Solve difficult problems, understand concepts, and explore technical subjects with reasoning models.',
    iconName: 'Binary',
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  {
    id: 'writing',
    label: 'Writing, Essays & Humanities',
    shortLabel: 'Writing',
    description: 'Brainstorm, structure, edit, analyze, and synthesize essays and multi-document humanities coursework.',
    iconName: 'PenTool',
    color: '#ec4899',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20'
  },
  {
    id: 'coding',
    label: 'Computer Science & Programming',
    shortLabel: 'Coding',
    description: 'Build software, understand code, debug problems, and accelerate programming coursework.',
    iconName: 'Code2',
    color: '#38bdf8',
    gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20'
  },
  {
    id: 'visual',
    label: 'Presentations, Diagrams & Visual Projects',
    shortLabel: 'Visual',
    description: 'Create images, visual concepts, diagrams, and presentation assets with legible typography.',
    iconName: 'Palette',
    color: '#f97316',
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  },
  {
    id: 'video-audio',
    label: 'Video & Audio',
    shortLabel: 'Video & Audio',
    description: 'Create video, voiceovers, audio, music, and multimedia coursework.',
    iconName: 'Video',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  },
  {
    id: 'favorites',
    label: 'Favorites',
    shortLabel: 'Favorites',
    description: 'Your pinned tools for quick access during coursework and study sessions.',
    iconName: 'Heart',
    color: '#ef4444',
    gradient: 'from-red-500/20 via-rose-500/10 to-transparent',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20'
  }
];
