import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps, Sparkles } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

// Normalize name mappings
const ALIAS_MAP: Record<string, string> = {
  SearchCheck: 'Search',
  TerminalSquare: 'SquareTerminal',
  FolderGit2: 'FolderGit2',
  Video: 'Video',
  Sparkles: 'Sparkles'
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const normalizedName = ALIAS_MAP[name] || name;
  const IconComponent = (LucideIcons as any)[normalizedName] || Sparkles;
  return <IconComponent {...props} />;
};
