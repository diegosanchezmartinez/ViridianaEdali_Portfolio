import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons';
import { View } from '../App';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-[#fdfdfc]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-0 pt-20 pb-12 md:pt-28 md:pb-16 px-8 md:px-16">
        {/* Empty div for spacing on larger screens */}
        <div className="hidden md:block" />
        <div
          onClick={() => onNavigate('portfolio')}
          className="text-center text-5xl md:text-6xl font-patrickHand tracking-wider text-gray-900 justify-self-center md:justify-self-auto cursor-pointer hover:text-gray-700 transition-colors"
          role="button"
          aria-label="Back to portfolio"
        >
          Viridiana Edali
        </div>
        <nav className="flex items-center space-x-4 md:space-x-6 justify-self-center md:justify-self-end">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <button
            type="button"
            onClick={() => onNavigate('links')}
            className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors border-l border-gray-300 pl-4 md:pl-6"
          >
            Links
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
