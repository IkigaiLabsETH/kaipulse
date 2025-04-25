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
              The Bitcoin Story
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
              A Journey Through Digital Freedom
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
          <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.15)]">
            <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
          </div>
          <div className="relative aspect-video w-full">
            <iframe
              className="w-full h-full rounded-sm"
              src="https://www.youtube.com/embed/oksraL7wN6Q"
              title="Bitcoin Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Video Description */}
        <motion.div 
          className="relative mb-16"
          variants={cardVariants}
        >
          <Card className="p-8 bg-black relative overflow-hidden border-none rounded-sm">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              <div className="absolute inset-0.5 bg-black/90 backdrop-blur-sm rounded-sm"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-yellow-500 tracking-tight uppercase font-satoshi mb-4">
                About This Documentary
              </h2>
              <p className="text-lg text-white/90 leading-relaxed font-satoshi">
                Explore the revolutionary journey of Bitcoin, from its mysterious origins to its current status as a global financial phenomenon. This documentary delves deep into the technology, philosophy, and community that have shaped the world&apos;s first and most influential cryptocurrency.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Origins & Innovation",
              content: "Discover the groundbreaking origins of Bitcoin and how it has revolutionized the concept of money in the digital age."
            },
            {
              title: "Technology Deep Dive",
              content: "Understand the revolutionary blockchain technology that powers Bitcoin and ensures its security and decentralization."
            },
            {
              title: "Global Impact",
              content: "Explore how Bitcoin has influenced economies, challenged traditional financial systems, and created new opportunities worldwide."
            },
            {
              title: "Future Perspectives",
              content: "Gain insights into the potential future of Bitcoin and its role in shaping the next generation of financial technology."
            }
          ].map((point, index) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0.5 bg-black/90 backdrop-blur-sm rounded-sm"></div>
              </div>
              <Card className="p-8 bg-black relative group overflow-hidden border-none z-10 rounded-sm">
                <h3 className="text-xl font-bold mb-4 text-yellow-500 tracking-tight uppercase font-satoshi">
                  {point.title}
                </h3>
                <p className="text-white/90 leading-relaxed font-satoshi">
                  {point.content}
                </p>
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center">
            <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-6"></div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-light font-satoshi">
              BITCOIN DOCUMENTARY • DIGITAL FREEDOM • FINANCIAL REVOLUTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 