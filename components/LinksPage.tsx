import React from 'react';

interface LinkItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-52 py-3 px-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-pink-300 hover:-translate-y-1"
    aria-label={`Link to ${text}`}
  >
    <div className="text-gray-600 group-hover:text-[#F06292] transition-colors duration-300 flex-shrink-0">
      {icon}
    </div>
    <span className="ml-3 font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 tracking-wide">{text}</span>
  </a>
);

interface LinksPageProps {
    onNavigate: (view: 'portfolio' | 'links') => void;
}

const LinksPage: React.FC<LinksPageProps> = ({ onNavigate }) => {
  return (
    <div 
      className="animate-fade-in flex flex-col items-center justify-center py-12 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "url('https://raw.githubusercontent.com/diegosanchezmartinez/ViridianaEdali_Portfolio/main/images/viridiana-edali-clouds.jpg')" 
      }}
    >
      <div className="flex flex-col items-center space-y-8 w-full px-4">
        <img
          src="https://raw.githubusercontent.com/diegosanchezmartinez/ViridianaEdali_Portfolio/main/images/viridiana-edali-chinaoax.jpg"
          alt="Viridiana Edali"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <div className="text-center">
            <h1 className="text-5xl font-outfit font-bold text-white tracking-wide drop-shadow-md mb-2">
              Viridiana Edali
            </h1>
            <p className="text-xl font-zilla text-white drop-shadow-md">
              Concept Artist and Children Book Illustrator
            </p>
        </div>
        <div className="flex flex-col items-center space-y-4 w-full pt-4">
            <LinkItem 
                href="https://instagram.com/viridianaedali/"
                icon={<i className="fa-brands fa-instagram text-xl"></i>}
                text="Instagram"
            />
            <LinkItem 
                href="https://www.artstation.com/viridianagarcia"
                icon={<i className="fa-brands fa-artstation text-xl"></i>}
                text="Artstation"
            />
            <LinkItem 
                href="https://www.linkedin.com/in/viridianaedali/"
                icon={<i className="fa-brands fa-linkedin text-xl"></i>}
                text="LinkedIn"
            />
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="group flex items-center justify-center w-52 py-3 px-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-pink-300 hover:-translate-y-1"
              aria-label="Go to Portfolio"
            >
              <div className="text-gray-600 group-hover:text-[#F06292] transition-colors duration-300 flex-shrink-0">
                <i className="fa-solid fa-briefcase text-xl"></i>
              </div>
              <span className="ml-3 font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 tracking-wide">Portfolio</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;