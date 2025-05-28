'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function HX50Page() {
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
        {/* Hero Section with HX50 Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-emerald-500">Hill</span> HX50
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The Future of Personal Helicopter Aviation
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full h-[65vh] mb-16 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
          <Image
            src="/hx50.jpg"
            alt="Hill HX50 Helicopter"
            fill
            className="object-cover rounded-lg z-0 transition duration-700 transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>
          <div className="absolute bottom-8 left-8 max-w-xl z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/30"
            >
              <h2 className="text-3xl font-bold mb-2 text-emerald-500">HX50 Helicopter</h2>
              <p className="text-white/90">Revolutionizing personal rotorcraft aviation</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Feature Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-500">Featured Video</h2>
            <div className="h-px flex-grow bg-emerald-500/20 ml-6"></div>
          </div>
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden group">
            <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
            
            <iframe
              src="https://www.youtube.com/embed/T8PidxZqVg0"
              title="Hill HX50 Helicopter Feature Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg z-0"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <p className="text-white/80 text-lg">
              Watch the HX50 in action - a revolutionary approach to personal helicopter aviation
            </p>
          </motion.div>
        </motion.section>

        {/* Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 text-lg"
        >
          <div className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-xl text-white/90 leading-relaxed">
              The Hill HX50 represents a bold new chapter in personal helicopter aviation, combining cutting-edge technology, luxury, and performance in a package designed specifically for private owners. With its proprietary GT50 turbine engine, carbon-fiber monocoque construction, and revolutionary digital cockpit, the HX50 aims to bring "Elon Musk-style disruption" to the rotorcraft sector.
            </p>
          </div>
        </motion.div>

        {/* Technical Specifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-emerald-500">Technical Specifications</h2>
            <div className="h-px flex-grow bg-emerald-500/20 ml-6"></div>
          </div>
          <div className="space-y-4 text-white/80 bg-zinc-900/40 p-6 rounded-xl border border-emerald-500/10">
            <p>
              The HX50 features a revolutionary design with a carbon-fiber monocoque fuselage, proprietary GT50 turboshaft engine (500 shp), and advanced avionics suite. With a cruise speed of 140 knots and range of 700 nautical miles, it offers unprecedented performance for a light helicopter.
            </p>
            <p>
              The five-seat configuration includes luxury automotive-style interior, digital cockpit with touchscreen interface, and comprehensive safety systems including haptic feedback controls and cloud-based monitoring.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-emerald-500 font-semibold">Engine & Performance</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>GT50 Turbine: 500 shp (440 hp takeoff)</li>
                  <li>Fuel Consumption: ~35 US gallons/hour at MCP</li>
                  <li>Maximum Takeoff Weight: 1,650 kg (3,640 lb)</li>
                  <li>Useful Load: ~800 kg (1,760 lb)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-emerald-500 font-semibold">Rotor System</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>Main Rotor Diameter: 10.1 m (33 ft)</li>
                  <li>High-inertia rotor system for safety</li>
                  <li>Optimized tail rotor for low noise</li>
                  <li>Stable in 35-knot crosswinds</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-500">Key Features</h2>
            <div className="h-px flex-grow bg-emerald-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-emerald-500">Performance</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 text-lg mb-8">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      GT50 Turbine: 500 shp, 440 hp takeoff
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      Cruise: 140 knots, Range: 700 nm
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                    >
                      Max Takeoff Weight: 1,650 kg
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.3 }}
                    >
                      Fuel Consumption: ~35 gph at MCP
                    </motion.li>
                  </ul>
                  <p className="mt-auto text-white/80 text-lg">
                    The HX50 delivers performance previously unseen in the light helicopter category, with range and speed capabilities approaching those of much larger, more expensive aircraft.
                  </p>
                </Card>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-emerald-500">Innovation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 text-lg mb-8">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      Carbon-fiber monocoque construction
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                    >
                      Hill Digital Cockpit with touch interface
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.3 }}
                    >
                      Haptic feedback safety systems
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.3 }}
                    >
                      Cloud-based monitoring (HASM)
                    </motion.li>
                  </ul>
                  <p className="mt-auto text-white/80 text-lg">
                    The HX50 brings modern technology and luxury to personal helicopter aviation, with features previously only found in high-end automotive and aerospace applications.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Market Impact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-emerald-500">Market Impact</h2>
            <div className="h-px flex-grow bg-emerald-500/20 ml-6"></div>
          </div>
          <div className="space-y-4 text-white/80 bg-zinc-900/40 p-6 rounded-xl border border-emerald-500/10">
            <p>
              With over 1,200 pre-orders from customers in 60+ countries, the HX50 has generated unprecedented interest in the personal helicopter market. The base price of £649,000 positions it significantly below competing five-seat turbine helicopters while offering superior performance and features.
            </p>
            <p>
              The HX50's success could revolutionize the light helicopter market, similar to how the Robinson R66 expanded private helicopter ownership in the past. Its innovative approach to design, manufacturing, and customer experience sets a new standard for the industry.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-emerald-500 font-semibold">Orders</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>1,200+ Total Orders</li>
                  <li>945 HX50 (Experimental)</li>
                  <li>376 HC50 (Certified)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-emerald-500 font-semibold">Timeline</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>First Flight: Dec 2025</li>
                  <li>HX50 Deliveries: 2026-27</li>
                  <li>HC50 Certification: 2028</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-emerald-500 font-semibold">Production</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>Initial: 250/year</li>
                  <li>Target: 500/year</li>
                  <li>Long-term: 1,000/year</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
