import React, { useState } from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className="relative w-full h-full group cursor-pointer overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
        className="block w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
      />
      
      {!isImageLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-2 border-dashed rounded-full animate-spin border-gray-400"></div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
