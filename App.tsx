import React, { useState } from 'react';
import Header from './components/Header';
import PortfolioGrid from './components/PortfolioGrid';
import GoToTopButton from './components/GoToTopButton';
import ProjectView from './components/ProjectView';
import LinksPage from './components/LinksPage';
import { portfolioItems } from './data/portfolioData';

export type View = 'portfolio' | 'links';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [view, setView] = useState<View>('portfolio');

  const handleSelectProject = (id: number) => {
    setSelectedProjectId(id);
    window.scrollTo(0, 0); // Scroll to top when a project is opened
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
    setView('portfolio'); // Ensure we return to the portfolio grid
  };

  const handleNavigate = (newView: View) => {
    if (selectedProjectId) {
      setSelectedProjectId(null);
    }
    setView(newView);
    window.scrollTo(0, 0);
  };

  const selectedProject = portfolioItems.find(p => p.id === selectedProjectId);

  const renderContent = () => {
    if (selectedProject) {
      return <ProjectView project={selectedProject} onClose={handleCloseProject} />;
    }

    switch (view) {
      case 'links':
        return <LinksPage onNavigate={handleNavigate} />;
      case 'portfolio':
      default:
        return <PortfolioGrid onImageClick={handleSelectProject} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 antialiased">
      {view !== 'links' && <Header onNavigate={handleNavigate} />}
      <main className={view === 'links' ? "" : "container mx-auto px-8 sm:px-16 py-12"}>
        {renderContent()}
      </main>
      <GoToTopButton />
    </div>
  );
};

export default App;