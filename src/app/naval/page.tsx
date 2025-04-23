"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

export default function NavalPage() {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <Head>
        <title>Why Builders Choose Bitcoin: A Naval-Inspired Field Guide</title>
        <meta name="description" content="Naval Ravikant's wisdom applied to Bitcoin and wealth creation" />
      </Head>

      {/* Hero Section with Subtle Pattern */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url('/assets/grid-pattern.svg')",
            backgroundSize: "cover",
            mixBlendMode: "luminosity"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Premium Accent Line */}
          <div className="flex items-center mb-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
            <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Knowledge &amp; Wealth</span>
          </div>

          <motion.h1 
            className="text-4xl md:text-7xl font-boska font-bold mb-8 tracking-tight"
            variants={sectionVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Why Builders Choose Bitcoin:
            </span>
            <br />
            <span className="text-white">A Naval-Inspired Field Guide</span>
          </motion.h1>

          <motion.div 
            className="prose prose-xl prose-invert max-w-none mb-12"
            variants={sectionVariants}
          >
            <p className="text-xl md:text-2xl font-satoshi mb-8 leading-relaxed text-zinc-300">
              We grow up told to earn money, but money is only a receipt for value already created. We chase job titles, but status is a zero-sum sport where someone else must lose for you to &ldquo;win.&rdquo; Therefore the real game is wealth—assets that compound while you sleep and free you to think beyond the next paycheck.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-5xl mx-auto px-6 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="prose prose-lg prose-invert max-w-none mb-16"
          variants={sectionVariants}
        >
          <p className="text-xl md:text-2xl font-satoshi mb-8 leading-relaxed">
            That insight detonated across the internet in 2018 when entrepreneur-investor Naval Ravikant posted his legendary tweetstorm and later unpacked it in the podcast episode you&apos;re about to hear. For Bitcoiners, the thread reads like scripture:
          </p>
          
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 my-12">
            <ul className="list-none space-y-6 mb-0 text-xl font-epilogue">
              <li className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mr-4 mt-1 flex-shrink-0">
                  <span className="text-black font-bold">1</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold">Seek wealth, not money or status.</span>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mr-4 mt-1 flex-shrink-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold">Own equity, not hours.</span>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mr-4 mt-1 flex-shrink-0">
                  <span className="text-black font-bold">3</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold">Play long-term games with long-term people.</span>
              </li>
            </ul>
          </div>

          <p className="text-xl md:text-2xl font-satoshi mb-12 leading-relaxed">
            Bitcoin embodies every one of those lines. It&apos;s permissionless leverage: code and cryptography working for you 24/7, compounding trust block after block. You don&apos;t need a gatekeeper&apos;s blessing to stack sats; you need curiosity, conviction, and an address that can&apos;t be debased by anyone&apos;s printing press.
          </p>
        </motion.div>

        {/* Video Card with Premium Shadow */}
        <motion.div variants={sectionVariants} className="mb-24 relative">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-sm opacity-50"></div>
          <Card className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(234,179,8,0.3)]">
            <CardContent className="p-0">
              <div className="relative pt-[56.25%] w-full">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/KyfUysrNaco" 
                  title="Naval Ravikant — How to Get Rich (Without Getting Lucky)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-transparent to-zinc-900">
                <p className="text-center font-epilogue text-lg md:text-xl">
                  <span className="text-yellow-400">🎧</span> Naval Ravikant — &ldquo;How to Get Rich 
                  <span className="text-yellow-400">(Without Getting Lucky)</span>&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Sections with Premium Design */}


        <motion.div variants={sectionVariants} className="mb-20">
          <div className="flex items-center mb-6">
            <div className="h-px w-8 bg-yellow-400 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-boska font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Leverage in a Digital Frontier
            </h2>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8">
            <p className="text-xl font-satoshi leading-relaxed text-zinc-300">
              Capital and labor demand permission, but software and media scale at zero marginal cost. Bitcoin miners, nodes, and smart contracts are armies of silicon that never sleep, never unionize, never ask for Fridays off. If you can code, write code; if you can&apos;t, craft threads, videos, and podcasts—each a worker you release onto the network.
            </p>
          </div>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-16">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/3"></div>
            
            <h2 className="text-3xl md:text-4xl font-boska font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Listen, Then Build
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl font-satoshi mb-8 leading-relaxed text-zinc-300">
                The podcast dives deeper into Naval&apos;s mental models—compounding, iterated games, decentralizing luck. Treat it as a compass, not a map. Absorb the principles, but draft your own playbook in code, sats, and sweat. Therefore:
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mr-4 mt-1 flex-shrink-0">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-epilogue font-semibold text-white">Stack Sats Automatically</h3>
                    <p className="text-lg text-zinc-300">Turn spare change—or excess conviction—into hard money.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mr-4 mt-1 flex-shrink-0">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-epilogue font-semibold text-white">Ship Permissionlessly</h3>
                    <p className="text-lg text-zinc-300">Launch scripts, products, or memes that work while you sleep.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mr-4 mt-1 flex-shrink-0">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-epilogue font-semibold text-white">Compound Trust</h3>
                    <p className="text-lg text-zinc-300">Collaborate with high-integrity allies; reputation is your strongest collateral.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl font-satoshi mb-10 leading-relaxed text-zinc-300">
                Press play, internalize the philosophy, tand turn insight into on-chain freedom.
              </p>
              
              <div className="border-t border-zinc-700 pt-8 mt-8">
                <p className="text-2xl md:text-3xl font-boska font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 text-center">
                  Infinite game. Infinite ledger. Let&apos;s build.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
