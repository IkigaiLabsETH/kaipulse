'use client';

import { motion } from 'framer-motion';

export default function OneOnOneLoading() {
  return (
    <div className="min-h-screen bg-black px-8 pt-32 pb-8 md:px-12 md:pt-36 md:pb-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header skeleton */}
        <div className="mb-16 relative z-10 text-center">
          <div className="h-4 w-48 bg-yellow-500/20 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-16 w-96 bg-yellow-500/20 rounded mx-auto mb-8 animate-pulse" />
          <div className="h-6 w-64 bg-yellow-500/20 rounded mx-auto animate-pulse" />
        </div>
        
        {/* Grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-yellow-500/10 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
} 