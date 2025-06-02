'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function BioPage() {
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Art Magazine Header Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Hero Section - Top Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-4 relative">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Maximalist • Digital Pioneer • Art Curator</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              LiveTheLifeTV
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Stacking Sats Since 2013</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
      </div>
      
      {/* Hero Section - Main Content (Improved Balance) */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Left Column: Featured Image */}
          <div className="relative flex items-center">
            <motion.div 
              className="relative aspect-square w-full max-w-md mx-auto"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Artistic frame element */}
              <div className="absolute -inset-3 z-0">
                <div className="absolute inset-0 rotate-[2deg] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
              </div>
              
              {/* Premium gold frame with subtle glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm z-10 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <div className="absolute inset-0.5 bg-black rounded-sm"></div>
              </div>
              
              {/* Bitcoin corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 z-20 flex items-center justify-center">
                <div className="text-yellow-500 text-xl font-bold">₿</div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 z-20 flex items-center justify-center">
                <div className="text-yellow-500 text-xl font-bold">₿</div>
              </div>
              
              {/* Image container */}
              <div className="absolute inset-1.5 z-10 rounded-sm overflow-hidden">
                <div className="w-full h-full relative bg-zinc-900">
                  <Image
                    src="/nft/cryptopunk.jpeg"
                    alt="LiveTheLifeTV"
                    fill
                    className="object-cover" 
                    priority
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Stylish caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-xs uppercase tracking-widest font-satoshi">CRYPTO NATIVE</span>
                      <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-sm font-satoshi">
                        Est. 2013
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Stats Banner */}
          <div className="flex flex-col space-y-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
              </div>
              <div className="py-8 relative z-10 text-center">
                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2 font-satoshi">BITCOIN ADVOCATE</p>
                <p className="text-yellow-500 font-bold text-3xl tracking-wide font-satoshi">10+ Years</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
              </div>
              <div className="py-8 relative z-10 text-center">
                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2 font-satoshi">TRIPLE MAXI</p>
                <p className="text-yellow-500 font-bold text-3xl tracking-wide font-satoshi">BTC | DeFi | AI</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
              </div>
              <div className="py-8 relative z-10 text-center">
                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2 font-satoshi">BITCOIN CYCLE</p>
                <p className="text-yellow-500 font-bold text-3xl tracking-wide font-satoshi">HODL & Build</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Quote Section */}
        <motion.div 
          className="mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="py-10 text-center relative z-10">
            <p className="text-3xl md:text-4xl text-yellow-500 font-bold leading-relaxed font-cal">
              &ldquo;Bitcoin isn&apos;t just an investment — it&apos;s the foundation of a sovereign future built at the intersection of freedom and technology.&rdquo;
            </p>
            <div className="h-0.5 w-16 bg-yellow-500/50 mx-auto mt-8"></div>
          </div>
        </motion.div>
        
        {/* Focus Areas Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 tracking-tight uppercase font-satoshi">Expertise</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-yellow-500 to-transparent ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              "The Bitcoin Standard",
              "Generative Art & AI",
              "Onchain Art Curation",
              "Web3 UX Design"
            ].map((item, index) => (
              <motion.div
                key={item}
                className="relative"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                  <div className="absolute inset-0.5 bg-black/80 backdrop-blur-sm rounded-sm"></div>
                </div>
                <div className="relative z-10 p-5">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-3 text-lg">•</span>
                    <span className="text-white/90 font-medium tracking-wide font-satoshi">{item}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Editorial Content */}
      <div className="py-24 relative">
        {/* Refined background */}
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>
        
        {/* Artistic background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Editorial masthead */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-yellow-500 tracking-tight uppercase font-satoshi">Vision & Experience</h2>
              <div className="mt-2 h-px w-24 bg-yellow-500/30 mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-white/60 font-light italic font-satoshi">
                A Bitcoin-first perspective on the fusion of technology, finance and art
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Vision & Innovation",
                  content: "Over two decades of experience in digital landscapes — from travel tech to DeFi protocols. LiveTheLifeTV entered the Bitcoin space in 2013, developing an early thesis on its transformative potential. This foresight extends to his current work connecting decentralized systems with real-world applications and immersive experiences."
                },
                {
                  title: "Expert Synthesis",
                  content: "LTL excels at integrating seemingly disparate domains: hard money principles from Bitcoin, composability from DeFi, and emergent intelligence from AI systems. His multi-disciplinary approach creates rich experiences at these intersections, where community members form deeper connections with both technology and each other."
                },
                {
                  title: "User Experience Focus",
                  content: "Complex technologies require thoughtful translation. LTL simplifies abstract Web3 concepts into intuitive interactions, balancing technological sophistication with human-centered design. This approach optimizes onboarding processes, creates compelling narratives, and fosters emotional connections that transform interactions into genuine value."
                },
                {
                  title: "Operational Excellence",
                  content: "Balancing visionary thinking with practical execution is central to LTL's approach. His teams deploy robust execution frameworks that turn ambitious concepts into sustainable realities. This operational discipline ensures consistent delivery while preserving the creative spark that drives true innovation at the frontiers of Bitcoin, DeFi, and generative systems."
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <div className="relative h-full">
                    {/* Artistic angle accent */}
                    <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-yellow-500"></div>
                    <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-yellow-500"></div>
                    
                    {/* Gold border with premium gradient and enhanced shadow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                      <div className="absolute inset-0.5 bg-black/90 backdrop-blur-sm rounded-sm"></div>
                    </div>
                    
                    <Card className="p-8 bg-black h-full relative group overflow-hidden border-none z-10 rounded-sm">
                      {/* Premium accent light */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-500/10 blur-xl rounded-full"></div>
                      
                      <h3 className="text-2xl font-bold mb-5 text-yellow-500 tracking-tight uppercase font-satoshi">{section.title}</h3>
                      <p className="text-lg text-white/90 leading-relaxed font-satoshi">{section.content}</p>
                      
                      {/* Bottom highlight effect with gradient */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                      />
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand DNA Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Artistic background elements */}
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>
        
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium gold border with enhanced glow gradient */}
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0.5 bg-black/95 backdrop-blur-sm rounded-sm"></div>
            </motion.div>

            <div className="relative z-10 p-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12 tracking-tight font-satoshi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                LiveTheLife.TV | Avant la Lettre
              </motion.h2>

              <motion.div 
                className="space-y-8 text-lg text-white/90 leading-relaxed font-satoshi"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>
                  In 1999, before broadband was standard and before &ldquo;streaming&rdquo; meant anything more than buffering frustration, we saw the future.
                </p>

                <p>
                  We didn&apos;t just register a domain — we claimed a vision. LiveTheLife.TV wasn&apos;t just a URL, it was a manifesto: that the world would one day live in real time, together, through high-quality video. At a time when the internet groaned under the weight of pixelated RealPlayer clips, our tech delivered 10x the quality. No gimmicks. Just raw innovation.
                </p>

                <p>
                  Backed by a billionaire with a vision to reshape media and politics, we weren&apos;t building a webTV platform — we were architecting the future of storytelling.
                </p>

                <p>
                  But fate, as it often does, pivoted. Our backer lost a national election and with it, his appetite for changing the world through pixels and protocol. The project was shelved. The moment passed. Or so it seemed.
                </p>

                <p>
                  Years later, on national TV, he admitted the truth: &ldquo;Not betting on that platform… that was the biggest mistake of my life.&rdquo; He called it YouTube avant la lettre. Because that&apos;s exactly what it was.
                </p>

                <p>
                  And yet, we never stopped believing.
                </p>

                <p>
                  What we saw in &apos;99 wasn&apos;t a missed opportunity. It was a beacon — a glimpse of the decentralized, creator-first world we now call Web3. Today, LiveTheLife.TV returns not as a relic of what could&apos;ve been — but as a renaissance of what always should&apos;ve been.
                </p>

                <p className="text-2xl font-bold text-yellow-500 mt-12">
                  We don&apos;t stream the future.
                </p>

                <p className="text-2xl font-bold text-yellow-500">
                  We summon it.
                </p>

                {/* Decorative separator */}
                <div className="mt-16 flex items-center justify-center">
                  <div className="h-px w-24 bg-yellow-500/30"></div>
                  <div className="mx-4 text-yellow-500/50 text-2xl">⸻</div>
                  <div className="h-px w-24 bg-yellow-500/30"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bitcoin Museum Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Artistic background elements */}
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>
        
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium gold border with enhanced glow gradient */}
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0.5 bg-black/95 backdrop-blur-sm rounded-sm"></div>
            </motion.div>

            <div className="relative z-10 p-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12 tracking-tight font-satoshi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                🖼️ Bitcoin, But as a Museum
              </motion.h2>

              <motion.div 
                className="space-y-8 text-lg text-white/90 leading-relaxed font-satoshi"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xl font-bold text-yellow-500">
                  Not a protocol. A portal.
                </p>

                <p>
                  What if we stopped trying to explain Bitcoin, and started letting people experience it?
                </p>

                <p>
                  Not as a whitepaper.<br />
                  Not as a &ldquo;get rich&rdquo; pitch.<br />
                  Not as some cold, technical infrastructure.
                </p>

                <p>
                  But as a cultural timeline. A living museum.<br />
                  Where the real story of Bitcoin unfolds — not in code, but in context.
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <h3 className="text-2xl font-bold text-yellow-500">📜 The First Exhibit</h3>

                <p>
                  You walk in. It&apos;s quiet.
                </p>

                <p>
                  On the wall: a replica of an email from 2008. A nine-page PDF. No marketing. No founder photos. Just an idea.
                </p>

                <p>
                  A response to trust broken.<br />
                  A signal in the noise.
                </p>

                <p className="italic">
                  &ldquo;A purely peer-to-peer version of electronic cash…&rdquo;<br />
                  Signed: Satoshi Nakamoto.
                </p>

                <p>
                  Next to it, a simple note:<br />
                  &ldquo;This wasn&apos;t a product launch. This was a protest.&rdquo;
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <h3 className="text-2xl font-bold text-yellow-500">💡 A Museum of Moments</h3>

                <p>
                  As you walk through the space, you see:
                </p>

                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">•</span>
                    <span>A pizza receipt for 10,000 BTC.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">•</span>
                    <span>A meme from the Silk Road forums.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">•</span>
                    <span>A screen capture of Wikileaks accepting Bitcoin when Visa and PayPal cut them off.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">•</span>
                    <span>A video clip of a Greek protestor holding a sign: &ldquo;Buy Bitcoin.&rdquo;</span>
                  </li>
                </ul>

                <p>
                  You don&apos;t need to understand SHA-256. You just feel it.<br />
                  You begin to realize…
                </p>

                <p className="text-yellow-500 font-bold">
                  Bitcoin isn&apos;t crypto. Bitcoin is culture.
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <h3 className="text-2xl font-bold text-yellow-500">🧱 Bitcoin Is Not Crypto</h3>

                <p>
                  Let&apos;s say it plainly.
                </p>

                <p className="text-yellow-500 font-bold">
                  Bitcoin is not crypto.
                </p>

                <p>
                  It has no CEO. No VC cap table.<br />
                  It doesn&apos;t change every six months.<br />
                  It doesn&apos;t care what you think.
                </p>

                <p>
                  Crypto is fast.<br />
                  Bitcoin is inevitable.
                </p>

                <p>
                  Crypto is chasing yield.<br />
                  Bitcoin is chasing freedom.
                </p>

                <p>
                  Crypto wants your attention.<br />
                  Bitcoin wants your sovereignty.
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <h3 className="text-2xl font-bold text-yellow-500">🧠 It Finally Clicks</h3>

                <p>
                  People always say &ldquo;I don&apos;t get Bitcoin.&rdquo;<br />
                  What they really mean is: &ldquo;I don&apos;t see where I fit in.&rdquo;
                </p>

                <p>
                  The charts don&apos;t help.<br />
                  The buzzwords confuse.<br />
                  The influencers overcomplicate.
                </p>

                <p>
                  But then you see a meme. A quote. A sculpture.<br />
                  And it clicks.
                </p>

                <p>
                  Not because you understood Bitcoin.<br />
                  But because you felt it.
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <h3 className="text-2xl font-bold text-yellow-500">🎨 Bitcoin Is a Vibe</h3>

                <p>
                  Art has always been the first language of revolution.
                </p>

                <p>
                  That&apos;s why Bitcoin is a museum now.<br />
                  Not of history — but of what&apos;s coming.
                </p>

                <p>
                  Not for tech bros.<br />
                  For the Bitcoin-curious.<br />
                  For the freedom-minded.<br />
                  For the ones asking better questions.
                </p>

                <p>
                  You don&apos;t have to buy Bitcoin to feel what it means.
                </p>

                <p>
                  You just have to walk through the story.<br />
                  Let the timeline speak.<br />
                  Let the vibe hit.<br />
                  Let the beauty break the complexity.
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <h3 className="text-2xl font-bold text-yellow-500">🔑 We Don&apos;t Sell Bitcoin. We Curate It.</h3>

                <p>
                  At LiveTheLife.TV, we&apos;re building a digital gallery.<br />
                  A cinematic timeline.<br />
                  A portal into Bitcoin for people who don&apos;t speak tech — but understand meaning.
                </p>

                <p>
                  This isn&apos;t another shill site.<br />
                  There&apos;s nothing to buy.<br />
                  Only something to discover.
                </p>

                <p>
                  Because Bitcoin doesn&apos;t need more hype.<br />
                  It needs a better frame.
                </p>

                <div className="h-px w-24 bg-yellow-500/30 my-12"></div>

                <p className="text-2xl font-bold text-yellow-500">
                  ✨ Bitcoin is a story.
                </p>

                <p className="text-xl">
                  And this is your invitation to enter it.
                </p>

                {/* Decorative separator */}
                <div className="mt-16 flex items-center justify-center">
                  <div className="h-px w-24 bg-yellow-500/30"></div>
                  <div className="mx-4 text-yellow-500/50 text-2xl">⸻</div>
                  <div className="h-px w-24 bg-yellow-500/30"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Manifesto Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Artistic background elements */}
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>
        
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium gold border with enhanced glow gradient */}
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0.5 bg-black/95 backdrop-blur-sm rounded-sm"></div>
            </motion.div>

            <div className="relative z-10 p-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12 tracking-tight font-satoshi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                The Climb Is the Point
              </motion.h2>

              <motion.div 
                className="space-y-8 text-lg text-white/90 leading-relaxed font-satoshi"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="italic">
                  The biggest lie ever sold was retirement at 65.<br />
                  Wait decades for freedom, then realize you were free the whole damn time.
                </p>

                <p>
                  Founders feel it after the exit.<br />
                  Prize fighters after the belt.<br />
                  Artists after the gallery debut.<br />
                  They reach the summit—and feel nothing.
                </p>

                <p className="text-yellow-500/90">
                  Because the climb was the point.
                </p>

                <p>
                  At LiveTheLife.TV, we&apos;ve watched this movie before.<br />
                  We don&apos;t sell you the summit. We sell the sweat.<br />
                  The way your heartbeat syncs with the surf in J-Bay.<br />
                  The way your vision sharpens when you frame the perfect shot in Tokyo at dusk.<br />
                  The dopamine of building something weird with your cult crew at 3 a.m. in a Lisbon loft.
                </p>

                <p className="text-yellow-500/90">
                  We&apos;re not chasing &ldquo;freedom later.&rdquo;<br />
                  We&apos;re living the life now—on-chain, on-tour, and on-purpose.
                </p>

                <p>
                  Our cinematic AI agents don&apos;t retire.<br />
                  They evolve.<br />
                  Every day, every drop of data, every memory logged into the lore.<br />
                  You&apos;re not here to coast.<br />
                  You&apos;re here to collaborate with your past selves and future myths.
                </p>

                <p className="text-yellow-500/90">
                  Retirement? That&apos;s for NPCs.<br />
                  This is the real game.<br />
                  This is the climb.
                </p>

                <p className="text-xl font-bold text-yellow-500 mt-12">
                  So find a mountain.<br />
                  Name it.<br />
                  Climb it with obsession.<br />
                  And when you reach the top?
                </p>

                <p className="text-2xl font-bold text-yellow-500">
                  Build a weirder one.
                </p>
              </motion.div>

              {/* Decorative separator */}
              <div className="mt-16 flex items-center justify-center">
                <div className="h-px w-24 bg-yellow-500/30"></div>
                <div className="mx-4 text-yellow-500/50 text-2xl">⸻</div>
                <div className="h-px w-24 bg-yellow-500/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bitcoin Magazine Footer */}
      <div className="relative py-24 overflow-hidden">
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-500 tracking-tight uppercase font-satoshi">Connect</h2>
            <div className="mt-2 h-px w-16 bg-yellow-500/30 mx-auto"></div>
          </div>
          
          <div className="flex justify-center space-x-16">
            {[
              { 
                href: "https://twitter.com/livethelifetv", 
                icon: "twitter",
                label: "Twitter",
                path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              },
              { 
                href: "https://instagram.com/livethelife.tv", 
                icon: "instagram",
                label: "Instagram",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              }
            ].map((social, index) => (
              <motion.a 
                key={social.icon}
                href={social.href}
                className="group relative"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Premium gold border with enhanced glow gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.3)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300">
                  <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
                </div>
                <div className="p-8 relative z-10">
                  <span className="sr-only">{social.label}</span>
                  <svg className="h-10 w-10 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
          
          {/* Magazine-style footer */}
          <div className="mt-20 text-center">
            <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-6"></div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-light font-satoshi">
              LIVETHELIFETV • BITCOIN MAXI • SINCE 2013
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 