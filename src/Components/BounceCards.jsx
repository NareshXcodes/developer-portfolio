import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function BounceCards({
  className = '',
  items = [],
  renderItem,
  containerWidth = 900,
  containerHeight = 460,
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Default spreads and settings for the 3D stack effect
  const spread = 150;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth,
        height: typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight,
      }}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {items.map((item, idx) => {
        // Center index calculation for spreading items left/right
        const centerIdx = Math.floor(items.length / 2);
        const offset = idx - centerIdx; 
        
        let x = offset * spread; 
        let rotate = offset * 5;
        let zIndex = items.length - Math.abs(offset);
        let scale = 1;
        let y = 0;

        if (hoveredIdx !== null) {
          if (idx === hoveredIdx) {
            x = offset * (spread - 40); // slightly pull towards center
            rotate = 0;
            zIndex = 50;
            scale = 1.05;
            y = -20; // lift up
          } else {
            const pushDir = idx < hoveredIdx ? -1 : 1;
            x = offset * spread + (pushDir * 140); // push away
            rotate = offset * 5 + (pushDir * 8);
            zIndex = items.length - Math.abs(idx - hoveredIdx);
          }
        }

        return (
          <motion.div
            key={idx}
            className="absolute origin-bottom cursor-pointer"
            initial={{ opacity: 0, y: 150, scale: 0.8, rotate: offset * 15 }}
            animate={{ 
              x, 
              y,
              rotate, 
              scale,
              opacity: 1,
              zIndex 
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 1,
              delay: hoveredIdx === null ? idx * 0.1 : 0, 
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
          >
            {renderItem ? renderItem(item, idx) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
