'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface VoiceVisualizerProps {
  isRecording: boolean;
}

export function VoiceVisualizer({ isRecording }: VoiceVisualizerProps) {
  const width = 200;
  const height = 60;
  const bars = 24;
  
  const [barHeights, setBarHeights] = useState<number[]>([]);

  useEffect(() => {
    // Generate bar heights on client side only to avoid hydration mismatch
    const heights = Array.from({ length: bars }, () => Math.random() * 20 + 10);
    setBarHeights(heights);
  }, [bars]);

  return (
    <div className="relative w-[200px] h-[60px]">
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full"
      >
        {Array.from({ length: bars }).map((_, index) => {
          const initialHeight = barHeights[index] || 15; // Fallback to 15 if not yet generated
          
          return (
            <motion.rect
              key={`wave-bar-${index}`}
              initial={{ height: 2 }}
              animate={isRecording ? {
                height: [initialHeight, initialHeight + 20, initialHeight],
                y: [height/2 - initialHeight/2, height/2 - (initialHeight + 20)/2, height/2 - initialHeight/2]
              } : {
                height: 2,
                y: height/2 - 1
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.05,
                ease: "easeInOut"
              }}
              width={4}
              x={(index * width) / bars}
              fill="rgb(234 179 8)"
              opacity={0.6}
              rx={2}
            />
          );
        })}
      </motion.svg>
    </div>
  );
} 