'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeslaPage() {
  // Animation variants for staggered animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
      }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section with Tesla 3P Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-yellow-500">Tesla</span> in 2025
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Performance, Innovation, and Bitcoin Strategy
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full h-[65vh] mb-16 overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <Image
            src="/tesla_3P.jpeg"
            alt="Tesla Model 3 Performance"
            fill
            className="object-cover z-0 transition duration-700 transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>
          <div className="absolute bottom-8 left-8 max-w-xl z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black/60 backdrop-blur-sm p-6 rounded-none border border-yellow-500/30"
            >
              <h2 className="text-3xl font-bold mb-2 text-yellow-500">Model 3 Performance</h2>
              <p className="text-white/90">The gateway to Tesla&apos;s performance lineup</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 text-lg"
        >
          <div className="border-l-4 border-yellow-500 pl-6 py-2">
            <p className="text-xl text-white/90 leading-relaxed">
              Tesla&apos;s 2025 narrative is a tug-of-war between brutal market headwinds and audacious bets on AI, autonomy, and Bitcoin — but the company keeps turning plot twists into propulsion, therefore it remains impossible to ignore. Below you&apos;ll find the numbers, products, and strategic moon-shots that matter most to a readership that measures value in both satoshis and seconds-to-sixty.
            </p>
          </div>
        </motion.div>

        {/* The Bitcoin War-Chest Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-yellow-500">The Bitcoin War-Chest</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          <div className="space-y-4 text-white/80 bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <p>
              Tesla still sits on 11,509 BTC, valued at ≈ $951 million at Q1-close and back above the $1 billion mark after Bitcoin&apos;s bounce to ~$93k in late April 2025.
            </p>
            <p>
              The stash survived the earnings miss, but this isn&apos;t Tesla&apos;s first crypto plot twist: in Q2 2022 the firm liquidated about 75% of its original 1.5 billion-dollar purchase to shore up cash during Shanghai lockdowns.
            </p>
            <p>
              That sale hurt hodler street-cred, but the remaining coins give Tesla asymmetric upside if Bitcoin re-rallies, therefore every quarterly report now doubles as a crypto-market signal.
            </p>
          </div>
        </motion.section>

        {/* Model S Interior Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative w-full h-[500px] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <Image
              src="/model-s-interior.jpeg"
              alt="Tesla Model S Interior"
              fill
              className="object-cover z-0 transition duration-700 transform group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>
            <div className="absolute bottom-8 left-8 max-w-xl z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-black/60 backdrop-blur-sm p-6 rounded-none border border-yellow-500/30"
              >
                <h2 className="text-3xl font-bold mb-2 text-yellow-500">Model S Interior</h2>
                <p className="text-white/90">Where luxury meets minimalism in Tesla&apos;s flagship sedan</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Model S & X Upgrade Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Model S & X are now even better
            </h2>
            <h3 className="text-lg font-semibold text-white mb-4">Highlights:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/90 text-lg">
              <li>Up to 410 miles of range (Model S Long Range – our longest range Tesla yet)</li>
              <li>Even quieter inside: less wind + road noise &amp; more effective Active Noise Cancellation</li>
              <li>New wheel designs &amp; improved aerodynamics = more range</li>
              <li>Front fascia camera for better visibility</li>
              <li>Dynamic ambient lighting that brings unique animations along the dash &amp; doors upon entry</li>
              <li>An even smoother ride thanks to new bushings &amp; suspension design</li>
              <li>Adaptive driving beams</li>
              <li>New exterior styling for Model S Plaid, optimized for high-speed stability</li>
              <li>More space for 3rd row occupants &amp; cargo (Model X)</li>
            </ul>
          </div>
        </motion.section>

        {/* Featured Image: Model S & X New */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative w-full h-[500px] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <Image
              src="/models-new.jpeg"
              alt="Tesla Model S & X New Featured"
              fill
              className="object-cover z-0 transition duration-700 transform group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Robots, Robotaxis & the Long-Delayed Roadster Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Robots, Robotaxis & the Long-Delayed Roadster</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Optimus Humanoid",
                  content: [
                    "Elon Musk now targets 5k &quot;Legion 1&quot; Optimus units in 2025, with capacity for 10× that in 2026.",
                    "The bot has progressed from guy-in-a-spandex-suit (2021) to factory-floor pick-and-place demos, but Musk claims it could eclipse vehicle revenues ten-fold in the 2030s, therefore investors treat it like a stealth call option."
                  ],
                  index: 0
                },
                {
                  title: "Robotaxi \"Cybercab\" & Pilot Service",
                  content: [
                    "A June 2025 pilot in Austin launches with 10–20 Model Y vehicles upgraded via software and Dojo-trained vision AI—no steering wheels on the purpose-built two-door cabs due in 2026.",
                    "Success here would turn every parked Tesla into a yield-generating asset, but regulatory gauntlets remain, therefore the pilot is small by design."
                  ],
                  index: 1
                },
                {
                  title: "Next-Gen Roadster",
                  content: [
                    "Officially &quot;aiming to ship in 2025,&quot; after multiple slips since its 2017 teaser. Reuters notes it&apos;s now part of a broader pivot away from cheap EVs toward brand-defining tech showcases.",
                    "Musk teases &lt; 1 s 0-60 mph and even &quot;momentary flight,&quot; but manufacturing priorities keep sliding, therefore fans treat each tweet like Schrödinger&apos;s ETA."
                  ],
                  index: 2
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <div className="p-6 bg-black/50 h-full relative group rounded-none border border-yellow-500/20">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 text-yellow-500">{item.title}</h3>
                      <div className="space-y-4 text-white/80">
                        {item.content.map((paragraph, index) => (
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + (index * 0.1) + (i * 0.1), duration: 0.4 }}
                          >
                            {paragraph.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&apos;/g, "'")}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

                {/* Featured Image: Roadster */}
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative w-full h-[500px] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <Image
              src="/roadster.jpg"
              alt="Tesla Roadster Featured"
              fill
              className="object-cover z-0 transition duration-700 transform group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Dojo, FSD v12 and the AI Flywheel Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Dojo, FSD v12 and the AI Flywheel</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <ul className="list-none space-y-6 text-white/90 text-lg">
              {[
                "Dojo & Cortex superclusters train end-to-end neural nets on billions of miles of camera footage.",
                "FSD v12 is rolling to early testers with full vision-only autonomy; The Verge reports the shift to pure neural control \"from pixels to path.\"",
                "AI spending tops $3 billion this year; analysts say most of Tesla's $845 billion market cap rests on software and robotaxis, not cars."
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + (i * 0.15) }}
                  className="flex items-start"
                >
                  <span className="text-yellow-500 mr-4 text-2xl font-bold">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 border-l-4 border-yellow-500 pl-6 py-2"
            >
              <p className="text-white/90 text-lg">
                Data begets better networks, which power safer drives, which attract more customers whose cars feed back more data—but competition from lidar-heavy rivals looms, therefore Tesla races to lock in regulatory wins before the loop stalls.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Starlink: Internet for Adventurers Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Starlink: Internet for Adventurers</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <div className="relative w-full h-[400px] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <Image
                  src="/starlink.jpg"
                  alt="Starlink Satellite Internet"
                  fill
                  className="object-cover z-0 transition duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full"
            >
              <div className="relative h-full overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <div className="p-8 bg-[#1c1f26] relative z-10 h-full">
                  <div className="space-y-6">
                    <p className="text-white/90 text-lg">
                      Bringing high-speed internet to remote locations and adventurous spirits, Starlink now serves over 2.3 million users across 100+ countries with:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="bg-black/50 p-4 rounded-none border border-yellow-500/20"
                      >
                        <h3 className="text-yellow-500 font-medium mb-2">Performance</h3>
                        <ul className="text-white/80 space-y-1">
                          <li>• 50-150+ Mbps</li>
                          <li>• 20-60ms latency</li>
                          <li>• Global coverage</li>
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="bg-black/50 p-4 rounded-none border border-yellow-500/20"
                      >
                        <h3 className="text-yellow-500 font-medium mb-2">Coverage</h3>
                        <ul className="text-white/80 space-y-1">
                          <li>• 100+ countries</li>
                          <li>• All continents</li>
                          <li>• Maritime support</li>
                        </ul>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="bg-black/50 p-4 rounded-none border border-yellow-500/20"
                    >
                      <h3 className="text-yellow-500 font-medium mb-2">Cutting-Edge Technology</h3>
                      <ul className="text-white/80 space-y-1">
                        <li>• Laser-linked mesh network</li>
                        <li>• Advanced tracking antennas</li>
                        <li>• Continuous constellation expansion</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why This Matters to a Bitcoin Lifestyle Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Why This Matters to a Bitcoin Lifestyle</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <p className="mb-8 text-white/90 text-xl">For readers who live on-chain:</p>
            
            <div className="space-y-10 mb-10">
              {[
                {
                  number: "1.",
                  title: "Self-Custody Ethos",
                  content: "Tesla's refusal to trade its BTC in rough quarters signals conviction that mirrors hardcore hodlers."
                },
                {
                  number: "2.",
                  title: "Energy + Hashpower Symbiosis",
                  content: "Megapacks and Superchargers already stabilize grids; pairing them with off-peak mining could monetize idle renewables."
                },
                {
                  number: "3.",
                  title: "Machine Yield",
                  content: "Robotaxi fleets could become \"physical yield farming,\" turning depreciating cars into cash-flow nodes."
                },
                {
                  number: "4.",
                  title: "Optimus & Proof-of-Work",
                  content: "Humanoids could someday service solar–battery–miner farms in remote locales, automating both the energy and the hashing."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (i * 0.15) }}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-12">
                    <span className="text-yellow-500 text-2xl font-bold">{item.number}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-lg text-white/80">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-8 bg-black/50 border-l-4 border-yellow-500 p-6 rounded-none"
            >
              <p className="text-xl text-white/90">
                Tesla is not just selling cars; it&apos;s building a vertically-integrated, AI-defined compute-energy stack that could underwrite an autonomous, Bitcoin-denominated economy. That&apos;s a portfolio hedge you can park in your driveway—or hand the chores to.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 