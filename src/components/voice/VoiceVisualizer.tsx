'use client';

import { motion } from 'framer-motion';

interface VoiceVisualizerProps {
  isRecording: boolean;
}

export function VoiceVisualizer({ isRecording }: VoiceVisualizerProps) {
  const width = 200;
  const height = 60;
  const bars = 24;

  return (
    <div className="relative w-[200px] h-[60px]">
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full"
      >
        {Array.from({ length: bars }).map((_, index) => {
          const initialHeight = Math.random() * 20 + 10; // Random initial height between 10 and 30
          
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