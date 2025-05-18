'use client'

import { motion } from 'framer-motion'
import { Bitcoin, TrendingUp, Users } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { useEffect, useState } from 'react'

// Bitcoin animation component
const AnimatedBitcoin = () => {
  return (
    <motion.div
      className="relative w-20 h-20 md:w-28 md:h-28"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.2 
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-yellow-500/20 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-yellow-500/10 rounded-full"
        animate={{ 
          scale: [1.1, 1.3, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="flex items-center justify-center h-full w-full"
        animate={{ 
          rotate: [0, 10, 0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Bitcoin className="h-14 w-14 md:h-20 md:w-20 text-yellow-400" />
      </motion.div>
    </motion.div>
  )
}

// Shimmer effect for text
const shimmer = {
  hidden: { backgroundPosition: '0% 0%' },
  visible: { 
    backgroundPosition: '200% 0%',
    transition: { 
      repeat: Infinity, 
      duration: 3, 
      ease: "linear"
    }
  }
}

export default function TwentyOnePage() {
  const [counters, setCounters] = useState({
    btc: 0,
    valuation: 0,
    capital: 0
  });
  
  useEffect(() => {
    // Animate counters
    const duration = 2000; // 2 seconds animation
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        btc: Math.floor(progress * 42000),
        valuation: Math.floor(progress * 3.6 * 10) / 10,
        capital: Math.floor(progress * 585)
      });
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <motion.div 
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1), transparent 40%)'
        }}
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1), transparent 40%)',
            'radial-gradient(circle at 20% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(234,179,8,0.1), transparent 40%)',
            'radial-gradient(circle at 80% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1), transparent 40%)'
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10 pointer-events-none"></div>
      
      <div className="bg-gradient-to-b from-yellow-500/10 via-black to-black pt-24 relative">
        {/* Floating Bitcoin particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-400/30"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -150 - 50],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center py-12 md:py-16 relative z-10">
            <div className="flex flex-col items-center justify-center mb-6">
              <AnimatedBitcoin />
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={shimmer}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"
                style={{
                  backgroundSize: '200% 100%',
                  textShadow: '0 0 15px rgba(234, 179, 8, 0.5)'
                }}
              >
                Twenty One
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              A Bitcoin-native company with ≈42,000 BTC (≈$3.6 billion) backed by 
              <motion.span
                className="relative ml-1 text-yellow-400 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Tether
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
              , 
              <motion.span
                className="relative mx-1 text-yellow-400 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                SoftBank
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
              , and 
              <motion.span
                className="relative ml-1 text-yellow-400 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Bitfinex
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
            </motion.p>
          </div>
          
          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
              <div className="relative bg-zinc-900 border-2 border-yellow-500 p-6 rounded-md z-10">
                <h3 className="text-white/70 text-sm font-medium">Bitcoin Holdings</h3>
                <div className="text-3xl font-bold mt-1 text-yellow-400">{`≈${counters.btc.toLocaleString()} BTC`}</div>
                <p className="text-white/60 text-sm mt-1">Ranks #3 among public treasuries</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
              <div className="relative bg-zinc-900 border-2 border-yellow-500 p-6 rounded-md z-10">
                <h3 className="text-white/70 text-sm font-medium">Pro-forma Valuation</h3>
                <div className="text-3xl font-bold mt-1 text-white">{`$${counters.valuation.toFixed(1)} Billion`}</div>
                <p className="text-white/60 text-sm mt-1">Based on initial Bitcoin assets</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
              <div className="relative bg-zinc-900 border-2 border-yellow-500 p-6 rounded-md z-10">
                <h3 className="text-white/70 text-sm font-medium">Additional Capital</h3>
                <div className="text-3xl font-bold mt-1 text-white">{`$${counters.capital} Million`}</div>
                <p className="text-white/60 text-sm mt-1">Convertible note + PIPE funding</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
              <div className="relative bg-zinc-900 border-2 border-yellow-500 p-6 rounded-md z-10">
                <h3 className="text-white/70 text-sm font-medium">Listing Timeline</h3>
                <div className="text-3xl font-bold mt-1 text-white">Q4 2025</div>
                <p className="text-white/60 text-sm mt-1">Expected Nasdaq listing as XXI</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Main Content Sections */}
          <div className="mt-16 space-y-24">
            {/* Deal Anatomy Section */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center"
                whileInView={{ 
                  textShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 10px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <motion.span 
                  className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 15px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  1
                </motion.span>
                <span>Anatomy of the Deal</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 md:p-8 lg:p-10 overflow-hidden z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                    <motion.div 
                      className="space-y-5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="bg-yellow-500/20 p-3 rounded-full mr-4"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(234,179,8,0.3)"
                          }}
                        >
                          <Bitcoin className="h-6 w-6 text-yellow-400" />
                        </motion.div>
                        <h3 className="text-xl font-medium text-white">SPAC + Bitcoin Treasury</h3>
                      </div>
                      
                      <ul className="space-y-4 text-white/80">
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="bg-yellow-500/20 text-yellow-400 min-w-4 h-4 rounded-full flex items-center justify-center mr-3 mt-1.5"
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(234,179,8,0.3)" }}
                          >•</motion.span>
                          <span><strong className="text-yellow-400">Structure:</strong> Cantor Equity Partners provides $200M trust account and merges into Twenty One</span>
                        </motion.li>
                        
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="bg-yellow-500/20 text-yellow-400 min-w-4 h-4 rounded-full flex items-center justify-center mr-3 mt-1.5"
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(234,179,8,0.3)" }}
                          >•</motion.span>
                          <span><strong className="text-yellow-400">Seed Assets:</strong> Tether ($1.6B in BTC), Bitfinex ($600M), SoftBank ($900M)</span>
                        </motion.li>
                        
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="bg-yellow-500/20 text-yellow-400 min-w-4 h-4 rounded-full flex items-center justify-center mr-3 mt-1.5"
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(234,179,8,0.3)" }}
                          >•</motion.span>
                          <span><strong className="text-yellow-400">Additional Firepower:</strong> $385M convertible note and $200M PIPE fully committed</span>
                        </motion.li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="bg-yellow-500/20 p-3 rounded-full mr-4"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(234,179,8,0.3)"
                          }}
                        >
                          <Users className="h-6 w-6 text-yellow-400" />
                        </motion.div>
                        <h3 className="text-xl font-medium text-white">Ownership Split</h3>
                      </div>
                      
                      <p className="text-white/80">Tether + Bitfinex will hold a majority, SoftBank a &quot;significant minority,&quot; and Cantor affiliates retain a strategic stake—mirroring the custody ties already in place between Cantor and Tether&apos;s U.S.-Treasury reserves.</p>
                      
                      <div className="mt-6">
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-yellow-400">Tether + Bitfinex</span>
                          <span className="text-yellow-400">61%</span>
                        </div>
                        <motion.div 
                          className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden"
                          initial={{ opacity: 0.5 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '61%' }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                          />
                        </motion.div>
                        
                        <div className="mt-4 mb-2 flex justify-between text-sm">
                          <span className="text-yellow-400">SoftBank</span>
                          <span className="text-yellow-400">25%</span>
                        </div>
                        <motion.div 
                          className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden"
                          initial={{ opacity: 0.5 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '25%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </motion.div>
                        
                        <div className="mt-4 mb-2 flex justify-between text-sm">
                          <span className="text-yellow-400">Cantor</span>
                          <span className="text-yellow-400">14%</span>
                        </div>
                        <motion.div 
                          className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden"
                          initial={{ opacity: 0.5 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '14%' }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-5"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="bg-yellow-500/20 p-3 rounded-full mr-4"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(234,179,8,0.3)"
                          }}
                        >
                          <TrendingUp className="h-6 w-6 text-yellow-400" />
                        </motion.div>
                        <h3 className="text-xl font-medium text-white">Key Metrics</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                          className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                          whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className="text-sm text-white/60">Pro-forma Value</div>
                          <motion.div 
                            className="text-2xl font-bold text-yellow-400"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            $3.6B
                          </motion.div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                          whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className="text-sm text-white/60">Bitcoin Holdings</div>
                          <motion.div 
                            className="text-2xl font-bold text-yellow-400"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            ≈42,000 BTC
                          </motion.div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                          whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className="text-sm text-white/60">Note Conversion</div>
                          <motion.div 
                            className="text-2xl font-bold text-yellow-400"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            $13/share
                          </motion.div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                          whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className="text-sm text-white/60">Public Float</div>
                          <motion.div 
                            className="text-2xl font-bold text-yellow-400"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            ≈8%
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.section>
            
            {/* Why This Matters Section */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center"
                whileInView={{ 
                  textShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 10px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <motion.span 
                  className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 15px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  2
                </motion.span>
                <span>Why This Matters</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                  <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 flex flex-col h-full overflow-hidden z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                        <Bitcoin className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-xl font-medium text-white">Bitcoin Proxy—But With a Twist</h3>
                    </div>
                    <p className="text-white/80">
                      MicroStrategy minted the modern &quot;public-company-as-BTC-ETF&quot; idea, but it remained essentially a software firm; therefore Twenty One is positioning itself from birth as a pure Bitcoin operating company with a mandate to grow BTC per share, not fiat earnings.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                  <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 flex flex-col h-full overflow-hidden z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-xl font-medium text-white">SoftBank&apos;s Return to Crypto Risk</h3>
                    </div>
                    <p className="text-white/80">
                      SoftBank wrote down billions in speculative Web3 bets during the last bear cycle, but Masayoshi Son&apos;s group now re-enters with a hard-asset strategy anchored by the most liquid crypto collateral.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                  <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 flex flex-col h-full overflow-hidden z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Bitcoin className="h-8 w-8 text-yellow-400" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-medium text-white">Tether&apos;s Vertical Integration</h3>
                    </div>
                    <p className="text-white/80">
                      Custody at Cantor, balance-sheet recycling of USDT reserves into BTC, and a public equity feeder vehicle create a closed loop that could deepen liquidity and legitimacy for both Tether and Bitcoin markets.
                    </p>
                  </Card>
                </motion.div>
              </div>
            </motion.section>
            
            {/* Leadership Section */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center"
                whileInView={{ 
                  textShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 10px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <motion.span 
                  className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 15px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  3
                </motion.span>
                <span>Leadership & Governance</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                  <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 flex flex-col h-full overflow-hidden z-10">
                    <h3 className="text-xl font-medium text-white mb-4">Executive Team</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-yellow-500/10 rounded-lg">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                          <Users className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <div className="font-medium">Jack Mallers</div>
                          <div className="text-sm text-white/60">CEO & Chairman</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-yellow-500/10 rounded-lg">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                          <Users className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <div className="font-medium">Brandon Lutnick</div>
                          <div className="text-sm text-white/60">Cantor Representative, Board Member</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-yellow-500/10 rounded-lg">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                          <Users className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <div className="font-medium">Paolo Ardoino</div>
                          <div className="text-sm text-white/60">Tether Representative, Board Member</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                  <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 flex flex-col h-full overflow-hidden z-10">
                    <h3 className="text-xl font-medium text-white mb-4">Performance Metrics</h3>
                    <p className="text-white/80 mb-4">
                      Strategic committees will track Bitcoin Per Share (BPS) and Bitcoin Return Rate (BRR)—new metrics disclosed in the S-4 filing to denominate performance in sats rather than dollars.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <div className="text-sm text-white/60">Bitcoin Per Share (BPS)</div>
                        <div className="flex items-end gap-2">
                          <div className="text-2xl font-bold text-yellow-400">≈0.21 BTC</div>
                          <div className="text-green-400 text-sm">Initial</div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <div className="text-sm text-white/60">Bitcoin Return Rate (BRR)</div>
                        <div className="flex items-end gap-2">
                          <div className="text-2xl font-bold text-yellow-400">Target: +21%</div>
                          <div className="text-yellow-500 text-sm">Annual</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.section>
            
            {/* Market Backdrop */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center"
                whileInView={{ 
                  textShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 10px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <motion.span 
                  className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 15px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  4
                </motion.span>
                <span>Market Backdrop</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-6 md:p-8 overflow-hidden z-10">
                  <p className="text-white/80 mb-6">
                    Bitcoin trades near $94k amid post-halving scarcity and pro-crypto signals from the Trump administration. ETF inflows (e.g., BlackRock&apos;s IBIT) and Strategy&apos;s 538k BTC hoard have reframed corporate treasuries as macro hedges; Twenty One arrives while that narrative is peaking, but before regulatory clarity is fully locked in.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div 
                      className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="text-sm text-white/60">Current BTC Price</div>
                      <div className="text-2xl font-bold text-yellow-400">$94,000</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="text-sm text-white/60">Post-Halving Era</div>
                      <div className="text-2xl font-bold text-yellow-400">Supply Shock</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20"
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(234,179,8,0.15)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="text-sm text-white/60">Market Sentiment</div>
                      <div className="text-2xl font-bold text-green-400">Bullish</div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.section>
            
            {/* Summary Section - replacing sections 5 & 6 */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center"
                whileInView={{ 
                  textShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 10px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <motion.span 
                  className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 15px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  5
                </motion.span>
                <span>Timeline & Vision</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <motion.h3 
                        className="text-2xl font-medium text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        Timeline & Milestones
                      </motion.h3>
                      
                      <div className="space-y-4 relative">
                        <motion.div 
                          className="absolute left-0 top-[15px] bottom-0 w-[2px] bg-yellow-500/30"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                        />
                        
                        <motion.div 
                          className="pl-6 relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute left-0 top-[7px] w-3 h-3 bg-yellow-400 rounded-full" />
                          <p className="text-yellow-400 font-medium">Q2 2025</p>
                          <p className="text-white/70">Filing & roadshow</p>
                        </motion.div>
                        
                        <motion.div 
                          className="pl-6 relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute left-0 top-[7px] w-3 h-3 bg-yellow-400 rounded-full" />
                          <p className="text-yellow-400 font-medium">Q3 2025</p>
                          <p className="text-white/70">Shareholder vote & funding</p>
                        </motion.div>
                        
                        <motion.div 
                          className="pl-6 relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute left-0 top-[7px] w-3 h-3 bg-yellow-400 rounded-full" />
                          <p className="text-yellow-400 font-medium">Q4 2025</p>
                          <p className="text-white/70">Nasdaq listing as XXI</p>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <motion.h3 
                        className="text-2xl font-medium text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        Twenty One Vision
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/80 mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        Twenty One represents a watershed moment for institutional Bitcoin adoption, combining the financial ingenuity of Cantor Fitzgerald with the Bitcoin-native vision of Jack Mallers and the treasury reserves of major crypto players.
                      </motion.p>
                      
                      <motion.p 
                        className="text-white/80 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        Unlike previous Bitcoin proxies that started as traditional companies, Twenty One is designed from inception to optimize for Bitcoin accumulation and appreciation. The company aims to become the premier publicly-traded Bitcoin treasury vehicle while maintaining operational efficiency and regulatory compliance through its strategic partnerships.
                      </motion.p>
                      
                      <motion.div
                        className="mt-8 flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-yellow-500/20 p-2 rounded-md">
                          <Bitcoin className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div className="font-medium text-yellow-400 text-lg">Expected listing: Q4 2025 (Nasdaq: XXI)</div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.section>
            
            {/* Bitcoin Initiatives - Ultra Condensed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-24 px-2"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <div className="bg-zinc-900 border-2 border-yellow-500 p-4 rounded-md relative z-10 overflow-hidden">
                  <div className="flex items-center">
                    <Bitcoin className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <p className="text-white/90 text-sm md:text-base">
                      <span className="font-medium">Twenty One won&apos;t just hold Bitcoin.</span> 
                      <span className="ml-1 text-white/80">It will build: 
                        <span className="text-yellow-400 mx-1">→</span>Bitcoin-native financial products
                        <span className="text-yellow-400 mx-1">→</span>Bitcoin media
                        <span className="text-yellow-400 mx-1">→</span>BTC-first lending & tools
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Executive Summary Section */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-24"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center"
                whileInView={{ 
                  textShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 10px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <motion.span 
                  className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ['0px 0px 0px rgba(234,179,8,0)', '0px 0px 15px rgba(234,179,8,0.5)', '0px 0px 0px rgba(234,179,8,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  6
                </motion.span>
                <span>Executive Summary</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <p className="text-xl text-white/90 mb-6">
                    Twenty One is a purpose-built, Bitcoin-native operating company that intends to list on Nasdaq via the Cantor Equity Partners SPAC. It launches with ~42,000 BTC on balance sheet, majority backing from Tether/Bitfinex and a strategic minority from SoftBank, with Jack Mallers at the helm. The vehicle is designed to give investors capital-efficient, equity-style exposure to Bitcoin while retaining maximum strategic flexibility.
                  </p>
                  <div className="w-full h-[1px] bg-yellow-500/30 my-8" />
                </Card>
              </motion.div>
              
              {/* Strategy B Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-yellow-500/20 p-3 rounded-full mr-4"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(234,179,8,0.3)"
                      }}
                    >
                      <span className="text-yellow-400 font-bold">1</span>
                    </motion.div>
                    <h3 className="text-xl font-medium text-white">Why Twenty One v. &quot;Strategy B&quot; (MicroStrategy)</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-yellow-500/30">
                          <th className="py-3 pr-4 text-yellow-400">Metric</th>
                          <th className="py-3 px-4 text-yellow-400">Strategy B (MSTR)</th>
                          <th className="py-3 px-4 text-yellow-400">Twenty One</th>
                          <th className="py-3 pl-4 text-yellow-400">Take-away</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Pure-play BTC exposure</td>
                          <td className="py-3 px-4">Diluted by legacy software ops</td>
                          <td className="py-3 px-4 text-yellow-400 font-medium">100%</td>
                          <td className="py-3 pl-4">Cleaner beta to BTC</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Bitcoin-native operations</td>
                          <td className="py-3 px-4">No</td>
                          <td className="py-3 px-4 text-yellow-400 font-medium">Yes</td>
                          <td className="py-3 pl-4">Lower opex, laser focus on BTC KPIs</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Existing debt load</td>
                          <td className="py-3 px-4">&gt;$4B convertibles</td>
                          <td className="py-3 px-4 text-yellow-400 font-medium">None at launch</td>
                          <td className="py-3 pl-4">Headroom for accretive leverage</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Debt collateralization</td>
                          <td className="py-3 px-4">Tied to BTC price covenants</td>
                          <td className="py-3 px-4 text-yellow-400 font-medium">None yet</td>
                          <td className="py-3 pl-4">Less risk of forced liquidation</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Insider ownership</td>
                          <td className="py-3 px-4">Meaningful but diluted</td>
                          <td className="py-3 px-4 text-yellow-400 font-medium">High, via Tether/Bitfinex/Mallers</td>
                          <td className="py-3 pl-4">Strong alignment</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium">Purpose-built KPIs</td>
                          <td className="py-3 px-4">BTC per share only recently adopted</td>
                          <td className="py-3 px-4 text-yellow-400 font-medium">BPS and BRR from day 1</td>
                          <td className="py-3 pl-4">Transparency in sats, not dollars</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="mt-6 text-white/80">
                    But MSTR&apos;s 500k BTC base means incremental buys barely move its BPS needle, therefore Twenty One&apos;s smaller initial stack and unencumbered balance sheet offer a steeper, more capital-efficient growth curve.
                  </p>
                  <div className="w-full h-[1px] bg-yellow-500/30 mt-8" />
                </Card>
              </motion.div>
              
              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-yellow-500/20 p-3 rounded-full mr-4"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(234,179,8,0.3)"
                      }}
                    >
                      <span className="text-yellow-400 font-bold">2</span>
                    </motion.div>
                    <h3 className="text-xl font-medium text-white">Investor Value Proposition</h3>
                  </div>
                  
                  <ol className="space-y-4 mt-4 text-white/80">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >1</motion.span>
                      <span><strong className="text-yellow-400">Bitcoin Exposure</strong> – IPO and follow-on capital earmarked primarily for additional BTC purchases.</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >2</motion.span>
                      <span><strong className="text-yellow-400">Bitcoin-Native Operations</strong> – Lean cost structure and BTC-centric reporting lower the drag on per-share sat growth.</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >3</motion.span>
                      <span><strong className="text-yellow-400">Attractive Entry Valuation</strong> – PIPE priced ~1.0× NAV; upside tracks BTC appreciation plus accretive buybacks/leverage.</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >4</motion.span>
                      <span><strong className="text-yellow-400">Strategic Ownership</strong> – Majority stake held by Tether/Bitfinex, minority by SoftBank—adding deep liquidity, balance-sheet support and global brand reach.</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >5</motion.span>
                      <span><strong className="text-yellow-400">Exchange-Traded Instrument</strong> – Provides spot-like Bitcoin exposure through a regulated equity that can sit inside traditional mandates.</span>
                    </motion.li>
                  </ol>
                  <div className="w-full h-[1px] bg-yellow-500/30 mt-8" />
                </Card>
              </motion.div>
              
              {/* Three-Pillar Operating Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-yellow-500/20 p-3 rounded-full mr-4"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(234,179,8,0.3)"
                      }}
                    >
                      <span className="text-yellow-400 font-bold">3</span>
                    </motion.div>
                    <h3 className="text-xl font-medium text-white">Three-Pillar Operating Plan</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-yellow-500/30">
                          <th className="py-3 pr-4 text-yellow-400">Pillar</th>
                          <th className="py-3 px-4 text-yellow-400">Core Activities</th>
                          <th className="py-3 pl-4 text-yellow-400">Strategic Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium text-yellow-400">BTC Accumulation</td>
                          <td className="py-3 px-4">Acquire BTC, actively manage stack, issue debt/equity for buys</td>
                          <td className="py-3 pl-4">Maximize BTC-per-share while markets reward hard-asset treasuries</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium text-yellow-400">BTC Education & Branding</td>
                          <td className="py-3 px-4">Produce modular content, branded media; partner with conferences, Web3 & fintech firms</td>
                          <td className="py-3 pl-4">Grow Bitcoin literacy → expand addressable investor base & brand authority</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium text-yellow-400">BTC Financing</td>
                          <td className="py-3 px-4">Advisory, structured products, lending</td>
                          <td className="py-3 pl-4">Monetize expertise; generate BTC yield without diluting treasury focus</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="mt-6 text-white/80">
                    These pillars form a flywheel: content drives adoption → financing unlocks yield → yield funds more BTC → higher BPS reinforces the brand.
                  </p>
                  <div className="w-full h-[1px] bg-yellow-500/30 mt-8" />
                </Card>
              </motion.div>
              
              {/* Capital-Efficiency Edge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-yellow-500/20 p-3 rounded-full mr-4"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(234,179,8,0.3)"
                      }}
                    >
                      <span className="text-yellow-400 font-bold">4</span>
                    </motion.div>
                    <h3 className="text-xl font-medium text-white">Capital-Efficiency Edge</h3>
                  </div>
                  
                  <ul className="space-y-4 text-white/80">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-4 h-4 rounded-full flex items-center justify-center mr-3 mt-1.5"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >•</motion.span>
                      <span>Zero legacy business drag and no pre-existing leverage give Twenty One room to ladder in low-cost convertibles or secured notes when market conditions are favorable.</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="bg-yellow-500/20 text-yellow-400 min-w-4 h-4 rounded-full flex items-center justify-center mr-3 mt-1.5"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(234,179,8,0.3)" }}
                      >•</motion.span>
                      <span>Custom KPIs—Bitcoin per Share (BPS) and Bitcoin Return Rate (BRR)—let management communicate performance in sats, not fiat, aligning incentives with hodl-centric investors.</span>
                    </motion.li>
                  </ul>
                  <div className="w-full h-[1px] bg-yellow-500/30 mt-8" />
                </Card>
              </motion.div>
              
              {/* Key Near-Term Catalysts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-yellow-500/20 p-3 rounded-full mr-4"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(234,179,8,0.3)"
                      }}
                    >
                      <span className="text-yellow-400 font-bold">5</span>
                    </motion.div>
                    <h3 className="text-xl font-medium text-white">Key Near-Term Catalysts</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-yellow-500/30">
                          <th className="py-3 pr-4 text-yellow-400">Timeline</th>
                          <th className="py-3 px-4 text-yellow-400">Milestone</th>
                          <th className="py-3 pl-4 text-yellow-400">Impact</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Q2 2025</td>
                          <td className="py-3 px-4">S-4 filing & investor roadshow</td>
                          <td className="py-3 pl-4">Valuation discovery; BPS modeling guidance</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                          <td className="py-3 pr-4 font-medium">Q3 2025</td>
                          <td className="py-3 px-4">SPAC shareholder vote & PIPE close</td>
                          <td className="py-3 pl-4">Confirms cash runway for additional BTC buys</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium">Q4 2025</td>
                          <td className="py-3 px-4">Nasdaq listing as XXI</td>
                          <td className="py-3 pl-4">Opens door to index inclusion & option markets</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full h-[1px] bg-yellow-500/30 mt-8" />
                </Card>
              </motion.div>
              
              {/* Bottom Line */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 bg-yellow-500 translate-x-1 translate-y-1 rounded-md z-0 opacity-90"></div>
                <Card className="relative bg-zinc-900 border-2 border-yellow-500 p-8 md:p-10 overflow-hidden z-10">
                  <p className="text-white/90 text-lg">
                    <strong className="text-yellow-400">Bottom line:</strong> Twenty One promises a cleaner, more lever-agile, and KPI-aligned path to Bitcoin upside than the incumbent corporate-treasury proxy—potentially the next logical evolution in public-market BTC vehicles.
                  </p>
                </Card>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
      {/* Extra padding at bottom */}
      <div className="h-24"></div>
    </div>
  )
} 