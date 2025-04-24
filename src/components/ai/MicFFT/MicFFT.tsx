import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../../common/utils";

export default function MicFFT({
  fft,
  className,
}: {
  fft: number[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);

  // Update dimensions on resize
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    };
    
    // Initial size
    updateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div ref={containerRef} className={"relative w-full h-full"}>
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className={cn("absolute inset-0 w-full h-full", className)}
      >
        {Array.from({ length: 24 }).map((_, index) => {
          const value = (fft[index] ?? 0) / 4;
          const barHeight = Math.min(Math.max(height * value, 2), height);
          const yOffset = height * 0.5 - barHeight * 0.5;

          return (
            <motion.rect
              key={`mic-fft-${index}`}
              height={barHeight}
              width={2}
              x={2 + (index * width - 4) / 24}
              y={yOffset}
              rx={1}
              fill="rgb(234 179 8)"
              opacity={0.7}
            />
          );
        })}
      </motion.svg>
    </div>
  );
}
