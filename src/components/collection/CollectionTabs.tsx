'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Grid, Activity, Filter, Info } from 'lucide-react';

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      {/* Gallery Exhibition Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light text-white mb-4 tracking-wide">Curated Exhibition</h2>
        <div className="h-[1px] w-24 bg-yellow-400 mx-auto"></div>
      </div>

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

        {/* Minimalist filter button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 transition-all duration-300",
            isFilterOpen 
              ? "text-yellow-400 border-b border-yellow-400" 
              : "text-white/70 hover:text-white border-b border-transparent"
          )}
        >
          <Filter size={16} />
          <span className="text-sm uppercase tracking-widest font-light">Filter</span>
        </motion.button>
      </div>

      {/* Filters panel - elegant, minimal design */}
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mb-16 pb-6 border-b border-white/10"
        >
          <div className="flex items-start gap-4 mb-8">
            <Info size={16} className="text-yellow-400 mt-1" />
            <p className="text-white/80">Filter options to curate your gallery viewing experience will be available soon.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-sm text-yellow-400 uppercase tracking-widest mb-3">Price Range</p>
              <div className="flex gap-2">
                <div className="w-full h-[1px] bg-white/20"></div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-yellow-400 uppercase tracking-widest mb-3">Artistic Traits</p>
              <div className="flex gap-2">
                <div className="w-full h-[1px] bg-white/20"></div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-yellow-400 uppercase tracking-widest mb-3">Curatorial Order</p>
              <div className="flex gap-2">
                <div className="w-full h-[1px] bg-white/20"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

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