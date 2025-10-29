import React, { useState, useEffect, useRef, useCallback } from 'react';
import ImageCard from './ImageCard';
import { portfolioItems } from '../data/portfolioData';

const DESKTOP_GAP = 32;
const MOBILE_GAP = 16;
const IDEAL_ROW_HEIGHT = 300;

interface Row {
  items: typeof portfolioItems;
  height: number;
}

interface PortfolioGridProps {
  onImageClick: (id: number) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onImageClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [gap, setGap] = useState(DESKTOP_GAP);

  const calculateLayout = useCallback(() => {
    if (!containerRef.current) return;

    const currentGap = window.innerWidth < 768 ? MOBILE_GAP : DESKTOP_GAP;
    setGap(currentGap);

    const containerWidth = containerRef.current.clientWidth;
    const newRows: Row[] = [];

    const itemChunks = [];
    for (let i = 0; i < portfolioItems.length; i += 2) {
      itemChunks.push(portfolioItems.slice(i, i + 2));
    }

    itemChunks.forEach((chunk, index) => {
      const isLastChunk = index === itemChunks.length - 1;
      let rowHeight;

      if (isLastChunk && chunk.length === 1) {
        rowHeight = IDEAL_ROW_HEIGHT;
      } else {
        const totalAspectRatio = chunk.reduce((acc, currentItem) => acc + (currentItem.width / currentItem.height), 0);
        const availableWidth = containerWidth - (chunk.length - 1) * currentGap;
        rowHeight = availableWidth / totalAspectRatio;
      }
      newRows.push({ items: chunk, height: rowHeight });
    });

    setRows(newRows);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    calculateLayout();
    
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateLayout, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [calculateLayout]);

  return (
    <div ref={containerRef} className="w-full">
      {rows.map((row, rowIndex) => (
        <div 
          key={rowIndex} 
          className="flex" 
          style={{ 
            height: `${row.height}px`, 
            gap: `${gap}px`,
            marginBottom: `${gap}px`
          }}
        >
          {row.items.map((item) => {
             const baseItemDiv = (
                <ImageCard src={item.images[0]} alt={item.alt} />
             );

             if (row.items.length > 1) {
                const flexGrow = item.width / item.height;
                return (
                   <div key={item.id} onClick={() => onImageClick(item.id)} style={{ flex: `${flexGrow} 1 0%` }} className="h-full min-w-0">
                     {baseItemDiv}
                   </div>
                )
             }
             
             const aspectRatio = item.width / item.height;
             const width = row.height * aspectRatio;
             return (
                <div key={item.id} onClick={() => onImageClick(item.id)} style={{ width: `${width}px` }} className="h-full">
                  {baseItemDiv}
                </div>
             )
          })}
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;