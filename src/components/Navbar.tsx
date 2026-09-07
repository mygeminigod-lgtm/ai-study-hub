import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Sparkles,
  Heart,
  Search,
  Menu,
  X,
  Compass,
  Binary,
  PenTool,
  Code2,
  Palette,
  Video,
  Sliders,
  SunMoon
} from 'lucide-react';
import { CategoryId } from '../types';

interface NavbarProps {
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  favoritesCount: number;
  onOpenSearch: () => void;
  onOpenAdvisor: () => void;
  onOpenSettings: () => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedCategory,
  onSelectCategory,
  favoritesCount,
  onOpenSearch,
  onOpenAdvisor,
  onOpenSettings,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: CategoryId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'Home', icon: Compass },
    { id: 'research', label: 'Academic Research', icon: GraduationCap },
    { id: 'stem', label: 'STEM & Math', icon: Binary },
    { id: 'writing', label: 'Writing', icon: PenTool },
    { id: 'coding', label: 'Coding', icon: Code2 },
    { id: 'visual', label: 'Visual', icon: Palette },
    { id: 'video-audio', label: 'Video & Audio', icon: Video },
    { id: 'favorites', label: 'Favorites', icon: Heart }
  ];

  const handleNavClick = (id: CategoryId) => {
    onSelectCategory(id);
    setMobileMenuOpen(false);
    const toolsSection = document.getElementById('tools-catalog');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/50 py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('all')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 flex-shrink-0"
            aria-label="AI Study Hub Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-shadow">
              <div className="w-full h-full bg-[#0c1017] rounded-[11px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  AI Study Hub
                </span>
                <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded">
                  SaaS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Academic & Creator Launchpad
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-slate-900/70 p-1 rounded-xl border border-slate-800 text-xs font-medium backdrop-blur-md">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = selectedCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.id === 'favorites' && favoritesCount > 0 ? 'text-red-400 fill-red-400' : ''}`} />
                  <span>{item.label}</span>
                  {item.id === 'favorites' && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ml-0.5 ${
                        isActive
                          ? 'bg-blue-800 text-blue-100'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {favoritesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Advisor Trigger */}
            <button
              onClick={onOpenAdvisor}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-500/30 text-blue-300 transition-all hover:border-blue-400 shadow-sm"
              title="What should I use? Interactive Advisor"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>What To Use?</span>
            </button>

            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-lg transition-all group"
              aria-label="Search AI tools"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.2 text-[10px] font-mono bg-slate-800 border border-slate-700 rounded text-slate-400">
                /
              </kbd>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              title="Toggle ambient accent theme"
              aria-label="Toggle theme"
            >
              <SunMoon className="w-4 h-4" />
            </button>

            {/* Small Settings Icon */}
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              title="Preferences & Shortcuts"
              aria-label="Settings"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#0c1017]/98 border-b border-slate-800 px-4 py-6 shadow-2xl backdrop-blur-xl animate-fade-in z-50">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = selectedCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium text-left ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-900/70 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.id === 'favorites' && favoritesCount > 0 ? 'text-red-400' : ''}`} />
                  <span className="truncate">{item.label}</span>
                  {item.id === 'favorites' && (
                    <span className="ml-auto text-[10px] bg-slate-800 px-1.5 py-0.2 rounded-full border border-slate-700">
                      {favoritesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>28 Official AI Tools Indexed</span>
            <button
              onClick={() => {
                onOpenAdvisor();
                setMobileMenuOpen(false);
              }}
              className="text-blue-400 hover:underline flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" /> What should I use?
            </button>
          </div>
        </div>
      )}
    </header>
  );
};