'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function CirrusPage() {
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
        {/* Hero Section with Vision Jet Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-yellow-500">Cirrus</span> Vision Jet & G7+ Series
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Redefining Personal Aviation with Innovation and Safety
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="w-full h-[65vh]">
              <iframe
                src="https://www.youtube.com/embed/v2cPb5Dl_P8"
                title="Cirrus Vision Jet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
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
              If the Vision Jet is the crown jewel of Cirrus&apos;s ecosystem, the SR G7+ is the first intelligent rung of the ladder—the aircraft that builds pilot confidence while embedding jet-level safety from day one. Together, they represent a revolutionary step in personal aviation, combining cutting-edge technology with unparalleled safety features.
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/jN_AUwzCUA4"
                title="Cirrus SR Series G7+ Announcement"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm">
              Watch the revolutionary G7+ announcement featuring Safe Return™ technology
            </p>
          </div>
        </motion.div>

        {/* G7+ Revolution Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-yellow-500">The G7+ Revolution</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          <div className="space-y-4 text-white/80 bg-zinc-900/40 p-6 rounded-xl border border-yellow-500/10">
            <p>
              With nearly 10,000 aircraft delivered since 1999, the SR Series has been the beating heart of personal aviation. The G7+ represents not just a refresh, but a philosophical evolution: the fusion of digital intelligence, luxury design, and intuitive flight systems.
            </p>
            <p>
              The G7+ serves as the perfect gateway to jet ownership, offering a seamless transition path from piston to turbine aircraft. It&apos;s not just about learning to fly—it&apos;s about experiencing the future of aviation today.
            </p>
          </div>
        </motion.section>

        {/* Safe Return™ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">The Game-Changer — Safe Return™</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">World&apos;s First FAA-Approved Autonomous Emergency Landing</h3>
                <div className="space-y-4">
                  <p className="text-white/80">
                    The SR Series G7+ features the world&apos;s first FAA-approved autonomous emergency landing system integrated into a single-engine piston aircraft. Safe Return™ Emergency Autoland provides the pilot and passengers with an automated landing option in an emergency.
                  </p>
                  <div className="bg-zinc-900/40 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">How It Works</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Advanced sensors and sophisticated algorithms</li>
                      <li>Automated flight control systems</li>
                      <li>Automatic ATC communication</li>
                      <li>Terrain and weather avoidance</li>
                      <li>Complete landing sequence to full stop</li>
                      <li>Automatic engine shutdown</li>
                    </ul>
                  </div>
                  <p className="text-white/80">
                    With the push of a button, Safe Return™ Emergency Autoland takes control of the aircraft, communicates with air traffic control, navigates to the nearest airport, performs a terrain- and weather-avoiding landing, comes to a complete stop, and shuts down the engine.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Advanced Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Advanced Performance & Safety</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
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
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Performance Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Engine & Power</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>315-hp Continental TSIO-550-K turbocharged engine</li>
                      <li>Maximum altitude: 25,000 feet</li>
                      <li>Ideal for high-altitude operations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Aerodynamic Improvements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Optimized FIKI panel-to-wing surface seam</li>
                      <li>Redesigned wheel fairings with minimal gaps</li>
                      <li>Optional composite propeller upgrade</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Safety Systems</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Cirrus Airframe Parachute System (CAPS)</h4>
                    <p className="text-white/80 mb-2">
                      Standard on all Cirrus aircraft, CAPS is the first and only FAA-certified full-aircraft parachute system in its class.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Electronic Stability & Protection</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Three-axis digital autopilot</li>
                      <li>Passive flight attitude correction</li>
                      <li>Flap speed protection system</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Avionics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Perspective Touch+™ Avionics</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Display Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Large, high-resolution widescreen displays</li>
                      <li>Split-screen capability (up to 3 windows)</li>
                      <li>Simultaneous map, flight plan, and weather views</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Touchscreen Controls</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Intuitive icon-based interface</li>
                      <li>Quick access to all functions</li>
                      <li>Convenient Home button on every page</li>
                      <li>Comprehensive flight planning tools</li>
                      <li>Audio controls and synoptic pages</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* G7+ Overview Video */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Experience the G7+</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/-4-0nm88j0U"
                title="Cirrus SR Series G7+ Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm">
              Discover how the G7+ revolutionizes personal aviation with its advanced features and safety systems
            </p>
          </div>
        </motion.section>

        {/* Flight Path Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">A Flight Path Engineered for Everyone</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SR G7",
                description: "The foundational training and ownership platform",
                features: [
                  "Perspective Touch+™ avionics",
                  "Standard CAPS system",
                  "Perfect for building experience"
                ]
              },
              {
                title: "SR G7+",
                description: "Intelligent automation and passenger-centric safety",
                features: [
                  "Safe Return™ Emergency Autoland",
                  "Enhanced automation features",
                  "Ideal for families and newer pilots"
                ]
              },
              {
                title: "Vision Jet",
                description: "Full jet performance and capabilities",
                features: [
                  "Integrated autothrottle",
                  "Advanced autoland systems",
                  "Extended range and speed"
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-bold mb-2 text-yellow-500">{tier.title}</h3>
                  <p className="text-white/80 mb-4">{tier.description}</p>
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    {tier.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Performance Specifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Performance Specifications</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
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
                <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">Vision Jet SF50</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 text-lg mb-8">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      Williams FJ33-5A turbofan (1,846 lbs thrust)
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      Max cruise: 300 KTAS, Range: 1,200 nm
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                    >
                      Service ceiling: 31,000 ft, Seats: 7
                    </motion.li>
                  </ul>
                  <p className="mt-auto text-white/80 text-lg">
                    The Vision Jet combines jet performance with single-engine simplicity, making it the most accessible personal jet on the market.
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
                <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">SR Series G7</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 text-lg mb-8">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      Perspective Touch+™ avionics suite
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                    >
                      Dual Garmin Touch Controllers
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.3 }}
                    >
                      Standard CAPS parachute system
                    </motion.li>
                  </ul>
                  <p className="mt-auto text-white/80 text-lg">
                    The G7 brings jet-like technology to piston aircraft, creating a seamless path to jet ownership.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Safety Innovations Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Safety Innovations</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safe Return™ Autoland",
                content: [
                  "The world&apos;s first autonomous emergency landing system in a jet aircraft.",
                  "With a single button press, the system can navigate to a suitable airport, communicate with ATC, and execute a safe landing."
                ],
                index: 0
              },
              {
                title: "Cirrus Airframe Parachute System",
                content: [
                  "Standard on every Cirrus aircraft, CAPS is the only whole-airplane parachute system in its class.",
                  "Has saved hundreds of lives in emergency situations, making Cirrus the safest aircraft in their respective categories."
                ],
                index: 1
              },
              {
                title: "Perspective Touch+™",
                content: [
                  "Advanced avionics suite with dual Garmin Touch Controllers and customizable displays.",
                  "Features 3D SafeTaxi, Taxiway Routing, and CAS-linked checklists for enhanced situational awareness."
                ],
                index: 2
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                custom={item.index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">{item.title}</h3>
                  <ul className="space-y-2 text-white/80">
                    {item.content.map((text, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                        className="text-sm"
                      >
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cabin Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Cabin Experience</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
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
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Vision Jet Interior</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>Pressurized cabin with 5 ft 1 in width and 4 ft 1 in height</li>
                  <li>Five forward-facing leather seats plus two stowable seats</li>
                  <li>Large oval windows for panoramic views</li>
                  <li>Optional 22-inch fold-down entertainment screen</li>
                  <li>USB-C charging ports and climate controls</li>
                  <li>Optional Gogo InFlight Wi-Fi</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">G7 Interior</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>Ambient lighting and push-button start</li>
                  <li>Auto fuel management system</li>
                  <li>Premium leather seats with USB-C ports</li>
                  <li>Re-angled cockpit for better visibility</li>
                  <li>Powered headset jacks and climate control</li>
                  <li>Dual center console storage</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Ownership Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Ownership Experience</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
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
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">JetStream Program</h3>
                <p className="text-white/80 text-lg mb-4">
                  Comprehensive maintenance and support program for Vision Jet owners, covering all scheduled maintenance, preventative replacements, and unscheduled repairs.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>Predictable maintenance costs</li>
                  <li>Factory-direct support</li>
                  <li>Global service network</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Training & Support</h3>
                <p className="text-white/80 text-lg mb-4">
                  Comprehensive training programs at the Cirrus Vision Center in Knoxville, TN, including type rating courses and recurrent training.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>Factory-direct type rating</li>
                  <li>Simulator training</li>
                  <li>Mentor pilot program</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Operating Cost Showdown: G7+ vs Vision Jet</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">SR22T G7+</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Performance</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Engine: Turbocharged TSIO-550-K</li>
                      <li>Cruise Speed: 183-213 KTAS</li>
                      <li>Fuel: 100LL Avgas</li>
                      <li>Fuel Burn: 17-20 gal/hr</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Annual Costs (200 hrs)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Fuel: $22,000-26,000</li>
                      <li>Maintenance + Reserves: $12,000-18,000</li>
                      <li>Insurance: $6,000-12,000</li>
                      <li>Hangar + Subscriptions: $10,000-15,000</li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-yellow-500/20">
                    <p className="text-lg font-semibold text-yellow-500">Total Annual Budget: $50,000-75,000</p>
                    <p className="text-sm text-white/70 mt-1">Most economical autonomous aircraft</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Vision Jet G2+</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Performance</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Engine: Williams FJ33-5A Turbofan</li>
                      <li>Cruise Speed: 305-311 KTAS</li>
                      <li>Fuel: Jet-A</li>
                      <li>Fuel Burn: 65-75 gal/hr</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Annual Costs (200 hrs)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Fuel: $85,000-100,000</li>
                      <li>Maintenance + Reserves: $50,000-80,000</li>
                      <li>Insurance: $25,000-40,000</li>
                      <li>Hangar + Subscriptions: $15,000-20,000</li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-yellow-500/20">
                    <p className="text-lg font-semibold text-yellow-500">Total Annual Budget: $200,000-300,000</p>
                    <p className="text-sm text-white/70 mt-1">Full jet performance and range</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  G7+ gives you 80% of the safety at ~25% of the cost
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Both have CAPS and Safe Return™, but the G7+ sips fuel and is vastly simpler to maintain and insure
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  For owner-pilots flying ~150-200 hrs/year, the G7+ is the most economical aircraft in the world offering full-autonomy landing
                </li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Mission Optimization</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  G7+ is optimized for regional missions (300-800 nm)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Vision Jet excels for faster, longer-range trips
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Both offer the same level of safety innovation with Safe Return™
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* HX50 Comparison Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Cirrus vs Hill HX50: The Future of Personal Aviation</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Cirrus SR22T G7+</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Performance</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Cruise: 180-213 KTAS</li>
                      <li>Range: 1,000+ NM</li>
                      <li>Fuel Burn: 17-20 gal/hr (100LL)</li>
                      <li>Annual Cost: $50,000-75,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Safety Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>CAPS Parachute System</li>
                      <li>Safe Return™ Autoland</li>
                      <li>Perspective Touch+™ Avionics</li>
                      <li>Smart Pitot System</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Hill HX50</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Performance</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Cruise: 140 KTAS</li>
                      <li>Range: 700 NM</li>
                      <li>Fuel Burn: ~35 gal/hr (Jet-A)</li>
                      <li>Base Price: £649,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Innovation</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Carbon-fiber monocoque</li>
                      <li>Hill Digital Cockpit</li>
                      <li>Haptic feedback controls</li>
                      <li>Cloud-based monitoring</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Mission Comparison: 700 NM Trip</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Cirrus: ~3.5-4 hours, no stops needed
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  HX50: ~5 hours, may require refueling
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Cirrus offers 40% faster cruise speed
                </li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Safety & Innovation</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Cirrus: Proven CAPS + Safe Return™
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  HX50: Advanced digital systems
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Both represent cutting-edge aviation
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center"
          >
            <a
              href="https://www.livethelife.tv/hx50"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About the HX50
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.section>

        {/* ICON A5 Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">ICON A5: The Ultimate Recreational Amphibian</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Performance & Specifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Key Metrics</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Engine: 100 hp Rotax 912iS</li>
                      <li>Cruise Speed: 84 knots (97 mph)</li>
                      <li>Range: 427 nautical miles</li>
                      <li>Fuel Capacity: 20 gallons</li>
                      <li>Useful Load: 490 lbs</li>
                      <li>Wingspan: 34 ft 10 in (foldable)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Operating Costs</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Annual Fixed Costs: ~$24,200</li>
                      <li>Base Price: $409,000</li>
                      <li>Optional Garmin G3X Touch</li>
                      <li>Optional Autopilot</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Safety & Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Safety Innovations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>FAA-compliant spin-resistant design</li>
                      <li>Real-time angle of attack indicator</li>
                      <li>Optional ballistic parachute system</li>
                      <li>Carbon fiber composite construction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Unique Capabilities</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Amphibious operation (land/water)</li>
                      <li>Folding wings for storage</li>
                      <li>Removable side windows</li>
                      <li>500 ft takeoff distance</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Pilot Requirements</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Sport Pilot License (minimum 20 hours)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Daytime VFR operations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Uncongested airspace
                </li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Perfect For</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Recreational flying adventures
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Water-based operations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Compact storage solutions
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Smartflyer SF-1 Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Smartflyer SF-1: The Future of Sustainable Aviation</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Development Timeline</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Key Milestones</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>First Flight: Late 2025 (Anticipated)</li>
                      <li>European Certification: 2030 (Target)</li>
                      <li>Current Phase: Prototype & Pre-certification</li>
                      <li>Market Readiness: TBD</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Market Position</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Cost-effective alternative</li>
                      <li>Low-emission design</li>
                      <li>Competitive light aircraft segment</li>
                      <li>Sustainable aviation focus</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Target Market & Applications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Primary Users</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Flight Schools</li>
                      <li>Private Owners</li>
                      <li>Regional Operators</li>
                      <li>Sustainability-focused Organizations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">Key Benefits</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                      <li>Reduced environmental impact</li>
                      <li>Lower operating costs</li>
                      <li>Modern technology integration</li>
                      <li>Future-proof design</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Pricing & Availability</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Purchase price not yet disclosed
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Pricing to be finalized near market readiness
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Expected to be competitive in light aircraft segment
                </li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Stay Updated</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Contact Smartflyer directly for latest information
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Visit official website: smartflyer.ch
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Follow development progress
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-center mt-8"
          >
            <a
              href="https://smartflyer.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Smartflyer
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
