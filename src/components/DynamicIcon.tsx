import React from 'react';
import {
  LucideProps,
  Sparkles,
  BookOpen,
  Search,
  Library,
  FileCheck,
  Compass,
  Binary,
  Boxes,
  PenTool,
  Globe,
  Code2,
  GitPullRequest,
  Terminal,
  SquareTerminal,
  FolderGit2,
  CloudLightning,
  Layers,
  Type,
  Palette,
  Image,
  FileVideo,
  Mic,
  Video,
  Clapperboard,
  Film,
  Music2,
  Disc3,
  GraduationCap,
  Heart,
  Atom,
  Award,
  Cpu,
  LineChart,
  BookCheck,
  MessageSquareQuote
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  Sparkles,
  BookOpen,
  Search,
  SearchCheck: Search,
  Library,
  FileCheck,
  Compass,
  Binary,
  Boxes,
  PenTool,
  Globe,
  Code2,
  GitPullRequest,
  Terminal,
  TerminalSquare: SquareTerminal,
  SquareTerminal,
  FolderGit2,
  CloudLightning,
  Layers,
  Type,
  Palette,
  Image,
  FileVideo,
  Mic,
  Video,
  Clapperboard,
  Film,
  Music2,
  Disc3,
  GraduationCap,
  Heart,
  Atom,
  Award,
  Cpu,
  LineChart,
  BookCheck,
  MessageSquareQuote
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = ICON_MAP[name] || Sparkles;
  return <IconComponent {...props} />;
};