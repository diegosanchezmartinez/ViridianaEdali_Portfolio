import React, { useState } from 'react';
import { PortfolioItem } from '../data/portfolioData';
import { ChevronLeftIcon } from './icons';

interface ProjectViewProps {
  project: PortfolioItem;
  onClose: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onClose }) => {
  const [heroImage, ...galleryImages] = project.images;
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500); // Wait for animation to finish
  };

  return (
    <div className={isClosing ? 'animate-fade-out' : 'animate-fade-in'}>
      <div className="mb-8">
        <button
          onClick={handleClose}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium group"
        >
          <ChevronLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-8">
        <div className="lg:col-span-3">
          <img 
            src={heroImage} 
            alt={project.alt} 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-pangolin tracking-wide text-gray-900 mb-4">{project.title}</h1>
          <p className="text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {galleryImages.length > 0 && (
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.alt} - gallery image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectView;