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
import { Footer } from './components/Footer';
import { useFavorites } from './hooks/useFavorites';
import { useToolFilter } from './hooks/useToolFilter';
import { Tool, CategoryId } from './types';

export function App() {
  const {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    favoritesCount
  } = useFavorites();

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
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

  const handleSelectExample = (example: string) => {
    setSearchQuery(example);
    const catalog = document.getElementById('tools-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: CategoryId) => {
    setSelectedCategory(category);
    // If user clicked favorites or specific category, make sure we show relevant items
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

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Sticky Header */}
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        favoritesCount={favoritesCount}
        onOpenSearch={handleOpenSearch}
        onOpenAdvisor={handleOpenAdvisor}
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

      {/* Footer */}
      <Footer onSelectCategory={handleCategorySelect} />
    </div>
  );
}

export default App;
