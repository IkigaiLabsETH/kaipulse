'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function DocuPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-4 relative">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
            Bitcoin Documentary
          </p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              God Bless Bitcoin
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
              How do we fix our broken money?
            </p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Featured Video Section */}
        <motion.div 
          className="relative mb-16"
          variants={cardVariants}
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-[0_0_30px_rgba(234,179,8,0.15)]">
            <div className="absolute inset-0.5 bg-black/90 rounded-lg"></div>
          </div>
          <div className="relative aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/oksraL7wN6Q"
              title="God Bless Bitcoin Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Documentary Description */}
        <motion.div 
          className="relative"
          variants={cardVariants}
        >
          <div className="absolute -inset-0.5 bg-yellow-500 rounded-lg opacity-75 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg p-0.5">
            <div className="absolute inset-0 bg-black rounded-lg"></div>
          </div>
          <Card className="relative bg-black/90 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-500/50 shadow-[0_0_25px_rgba(234,179,8,0.3)]">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-500 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-500 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500 rounded-br-lg"></div>
            
            <div className="relative z-10">
              <p className="text-lg text-white/90 leading-relaxed font-satoshi">
                God Bless Bitcoin asks the timely question: How do we fix our broken money? Through in-depth conversations with bitcoin and interfaith religious leaders, the film exposes the broken, unjust, and immoral nature of our current fiat-based monetary system, one that is intimately connected to the military industrial complex and the propagation of war. The film also shows how and why members of the poor and middle class feel a financial squeeze even when they work hard and lead fiscally responsible lives. God Bless Bitcoin ultimately suggests the ways in which Bitcoin can present alternatives to our current system that are more just, equitable, and peaceful.
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Footer Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center">
            <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-6"></div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-light font-satoshi">
              GOD BLESS BITCOIN • A JOURNEY TO MONETARY FREEDOM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 