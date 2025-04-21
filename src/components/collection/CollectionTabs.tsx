'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CollectionTabsProps {
  defaultTab: string;
  tabs: {
    id: string;
    label: string;
    content: ReactNode;
  }[];
}

export function CollectionTabs({ defaultTab, tabs }: CollectionTabsProps) {
  return (
    <div className="w-full">
      {/* Tab List */}
      <div className="flex gap-4 border-b border-white/10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium transition-colors relative
              ${tab.id === defaultTab ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
          >
            {tab.label}
            {tab.id === defaultTab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7B500]"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={tab.id === defaultTab ? 'block' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
} 