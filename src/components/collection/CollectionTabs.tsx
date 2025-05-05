'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


interface CollectionTabsProps {
  defaultTab: string;
  tabs: {
    id: string;
    label: string;
    content: ReactNode;
    count?: number;
  }[];
}

export function CollectionTabs({ defaultTab, tabs }: CollectionTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabVariants = {
    active: { 
      scale: 1, 
      opacity: 1 
    },
    inactive: { 
      scale: 1, 
      opacity: 0.7 
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Tab controls - minimal, elegant aesthetic */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Tab List - gallery-style tabs */}
        <div className="flex gap-12 mb-8 md:mb-0">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              initial={tab.id === activeTab ? "active" : "inactive"}
              animate={tab.id === activeTab ? "active" : "inactive"}
              variants={tabVariants}
              className={cn(
                "flex flex-col items-center gap-3 transition-all duration-300",
                tab.id === activeTab 
                  ? "text-yellow-400" 
                  : "text-white/60 hover:text-white/80"
              )}
            >
              <span className="text-base uppercase tracking-widest font-light">{tab.label}</span>
              {tab.id === activeTab && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-[1px] w-full bg-yellow-400 origin-left"
                />
              )}
              {tab.count !== undefined && (
                <span className={cn(
                  "text-xs",
                  tab.id === activeTab
                    ? "text-yellow-400"
                    : "text-white/50"
                )}>
                  {tab.count} pieces
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>


      {/* Tab Content - gallery display */}
      <div className="relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            variants={contentVariants}
            initial="hidden"
            animate={tab.id === activeTab ? "visible" : "hidden"}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ 
              display: tab.id === activeTab ? 'block' : 'none',
              position: tab.id === activeTab ? 'relative' : 'absolute'
            }}
            className="w-full"
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 