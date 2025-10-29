import React, { useState } from 'react';
import Header from './components/Header';
import PortfolioGrid from './components/PortfolioGrid';
import GoToTopButton from './components/GoToTopButton';
import ProjectView from './components/ProjectView';
import { portfolioItems } from './data/portfolioData';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleSelectProject = (id: number) => {
    setSelectedProjectId(id);
    window.scrollTo(0, 0); // Scroll to top when a project is opened
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = portfolioItems.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen text-gray-800 antialiased">
      <Header />
      <main className="container mx-auto px-8 sm:px-16 py-12">
        {selectedProject ? (
          <ProjectView project={selectedProject} onClose={handleCloseProject} />
        ) : (
          <PortfolioGrid onImageClick={handleSelectProject} />
        )}
      </main>
      <GoToTopButton />
    </div>
  );
};

export default App;
