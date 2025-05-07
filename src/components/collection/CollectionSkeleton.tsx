'use client';

import { motion } from 'framer-motion';

export function CollectionSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black p-8 md:p-12"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="h-12 w-64 bg-gradient-to-b from-[#F3CC3E]/5 to-transparent mx-auto rounded-lg animate-pulse" />
          <div className="h-6 w-96 bg-gradient-to-b from-[#F3CC3E]/5 to-transparent mx-auto mt-4 rounded-lg animate-pulse" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-gradient-to-b from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 