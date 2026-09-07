import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickActions } from './components/QuickActions';
import { TaskAdvisor } from './components/TaskAdvisor';
import { ToolOfTheDay } from './components/ToolOfTheDay';
import { FeaturedTools } from './components/FeaturedTools';
import { CategoryFilters } from './components/CategoryFilters';
import { ToolGrid } from './components/ToolGrid';
import { ToolDetailModal } from './components/ToolDetailModal';
import { SettingsModal } from './components/SettingsModal';
import { Footer } from './components/Footer';
import { useFavorites } from './hooks/useFavorites';
import { useToolFilter } from './hooks/useToolFilter';
import { Tool, CategoryId } from './types';

export function App() {
  const {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoritesCount
  } = useFavorites();

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedTag,
    setSelectedTag,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    filteredTools,
    resetFilters,
    totalCount,
    matchingCount
  } = useToolFilter(favoriteIds);

  const [modalTool, setModalTool] = useState<Tool | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [themeAccent, setThemeAccent] = useState<'blue' | 'purple' | 'cyan'>('blue');

  const handleSelectExample = (example: string) => {
    setSearchQuery(example);
    const catalog = document.getElementById('tools-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: CategoryId, tagFilter?: string) => {
    setSelectedCategory(category);
    if (tagFilter) {
      setSelectedTag(tagFilter);
    } else {
      setSelectedTag(null);
    }
    const catalog = document.getElementById('tools-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  };

  const handleOpenAdvisor = () => {
    const advisor = document.getElementById('task-advisor');
    if (advisor) {
      advisor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCycleTheme = () => {
    const themes: ('blue' | 'purple' | 'cyan')[] = ['blue', 'purple', 'cyan'];
    const next = themes[(themes.indexOf(themeAccent) + 1) % themes.length];
    setThemeAccent(next);
  };

  // Dynamic ambient glow classes based on selected theme
  const getThemeAmbient = () => {
    if (themeAccent === 'purple') {
      return 'bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-pink-600/15';
    }
    if (themeAccent === 'cyan') {
      return 'bg-gradient-to-tr from-cyan-600/15 via-teal-600/10 to-blue-600/15';
    }
    return 'bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15';
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
      {/* Dynamic Background Ambient Aura */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] ${getThemeAmbient()} blur-[140px] rounded-full pointer-events-none -z-10`} />

      {/* Top Sticky Header */}
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        favoritesCount={favoritesCount}
        onOpenSearch={handleOpenSearch}
        onOpenAdvisor={handleOpenAdvisor}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onToggleTheme={handleCycleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Global Search */}
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectExample={handleSelectExample}
          totalToolsCount={totalCount}
        />

        {/* Quick Launch Buttons */}
        <QuickActions
          onSelectCategory={handleCategorySelect}
          activeCategory={selectedCategory}
        />

        {/* Interactive "What Should I Use?" Recommender */}
        <TaskAdvisor
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onSelectToolModal={setModalTool}
        />

        {/* Only show Tool of the Day and Featured showcase if on 'All' tab with no active search query */}
        {!searchQuery && selectedCategory === 'all' && (
          <>
            <ToolOfTheDay
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              onSelectToolModal={setModalTool}
            />

            <FeaturedTools
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              onSelectToolModal={setModalTool}
            />
          </>
        )}

        {/* Tool Filter Bar */}
        <CategoryFilters
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          favoritesCount={favoritesCount}
          totalCount={totalCount}
          matchingCount={matchingCount}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Tool Grid with cards */}
        <ToolGrid
          tools={filteredTools}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onOpenModal={setModalTool}
          viewMode={viewMode}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onResetFilters={resetFilters}
          onSetSearchQuery={setSearchQuery}
        />
      </main>

      {/* Tool Detail Modal */}
      <ToolDetailModal
        tool={modalTool}
        onClose={() => setModalTool(null)}
        isFavorite={modalTool ? isFavorite(modalTool.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        themeAccent={themeAccent}
        onThemeAccentChange={setThemeAccent}
        favoritesCount={favoritesCount}
        onClearFavorites={clearAllFavorites}
      />

      {/* Footer */}
      <Footer onSelectCategory={handleCategorySelect} />
    </div>
  );
}

export default App;
