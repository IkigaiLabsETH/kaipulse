'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
}

const FadeInWhenVisible = ({ children, delay = 0 }: FadeInWhenVisibleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function BioPage() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const imageScale = useTransform(springScrollProgress, [0, 0.5], [1, 1.2]);
  const imageOpacity = useTransform(springScrollProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-24 relative"
        ref={heroRef}
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            className="font-boska text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            LiveTheLifeTV
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
            {/* Profile Image Section */}
            <motion.div 
              className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-800 shadow-2xl shadow-[#FFD700]/10 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
              style={{ scale: imageScale, opacity: imageOpacity }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/cryptopunk.jpeg"
                alt="LiveTheLifeTV"
                fill
                className="object-cover"
                priority
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>

            {/* Bio Content */}
            <motion.div 
              className="space-y-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-2xl font-epilogue text-gray-200 leading-relaxed">
                LiveTheLifeTV (LTL) has pioneered digital innovation in travel and real estate for more than twenty years. Now, LTL embraces Bitcoin, DeFi, AI, and onchain art curation, channeling its visionary approach into the vibrant Web3 ecosystem. LTL stands proudly as a TripleMaxi, committed to redefining the intersections of finance, technology, and culture.
              </p>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-boska font-semibold text-[#FFD700]">Current Focus Areas</h2>
                <motion.ul 
                  className="space-y-4 font-satoshi"
                  variants={{
                    show: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {[
                    "Bitcoin & DeFi Ecosystems",
                    "Generative Art & AI Integration",
                    "Onchain Art Curation",
                    "Web3 Experience Design"
                  ].map((item) => (
                    <motion.li 
                      key={item}
                      className="flex items-center bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-all cursor-pointer"
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        show: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-4"></span>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Detailed Bio Section */}
      <div className="py-24 relative">
        <motion.div 
          className="absolute inset-0 bg-[#FFD700]/5 backdrop-blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "Vision & Innovation",
                content: "With over twenty years of experience in travel and real estate, LTL transitioned into the Web3 domain in 2013. His visionary leadership blends cutting-edge art, AI-driven innovations, and decentralized ecosystems, transforming user interactions with digital assets and immersive experiences."
              },
              {
                title: "Expert Synthesis",
                content: "LTL excels at integrating diverse fields—Bitcoin, DeFi, generative art, and AI technology—into groundbreaking, value-rich experiences. His projects artfully merge advanced technology with creative vision, employing intelligent AI agents to deliver personalized experiences and foster deep, impactful community engagement."
              },
              {
                title: "User Experience Focus",
                content: "Mindful of user experience, LTL continually strives to simplify complex Web3 concepts into intuitive interactions. Recognizing the importance of clarity and accessibility, the team optimizes onboarding processes, crafts compelling narratives, and fosters emotional resonance, ensuring every interaction creates genuine value."
              },
              {
                title: "Operational Excellence",
                content: "LTL balances AI-driven innovation with strategic oversight, refining workflows to seamlessly deliver consistent excellence. His commitment to continuous evolution positions LiveTheLifeTV at the nexus of Web3, art, and innovation, consistently transforming ambitious ideas into extraordinary realities."
              }
            ].map((section, index) => (
              <FadeInWhenVisible key={section.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
                    <div className="p-8">
                      <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700] relative z-10">
                        {section.title}
                      </h2>
                      <p className="text-xl font-epilogue text-gray-200 leading-relaxed relative z-10">
                        {section.content}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </FadeInWhenVisible>
            ))}

            {/* AI Insights Section */}
            <FadeInWhenVisible delay={0.6}>
              <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
                <div className="p-6">
                  <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700]">AI-Analyzed Growth Areas</h2>
                  <p className="text-xl font-epilogue text-gray-200 leading-relaxed mb-8">
                    Our AI systems have conducted a comprehensive analysis of LiveTheLifeTV&apos;s strategic positioning and operational dynamics. Here are the key insights and recommendations for continued growth and innovation:
                  </p>
                  
                  <div className="space-y-6 font-satoshi">
                    {[
                      {
                        title: "Strategic Focus & Execution",
                        content: "While demonstrating exceptional ability in synthesizing complex systems and ideas, the interconnected nature of projects, frameworks, SDKs, personas, and narratives requires careful management. Each concept is valuable, but together they need a unified product thesis or 'minimum viable mythology' to maintain focus and enhance user experience.",
                        recommendations: [
                          "Implement ruthless prioritization frameworks",
                          "Establish clear kill criteria for projects",
                          "Develop a 'flagship loop' that all initiatives feed into",
                          "Create a unified product narrative that ties all elements together"
                        ]
                      },
                      {
                        title: "AI Agent Infrastructure",
                        content: "The vision for autonomous, collaborative AI systems is ambitious and forward-thinking. However, the infrastructure for agent trust, memory persistence, and reliable delegation protocols requires careful development. The gap between autonomous agent ambitions and current practical implementation needs careful bridging.",
                        recommendations: [
                          "Develop hardened protocols for agent intent verification",
                          "Implement weighted trust scoring systems",
                          "Create human-in-the-loop fallback mechanisms",
                          "Build robust memory persistence layers"
                        ]
                      },
                      {
                        title: "Token Economics & Network Effects",
                        content: "While demonstrating strong intuition for token utility, the implementation of complex token systems requires careful consideration of external economic pressures and sustainable network effects. This involves implementing simpler A/B-tested token sinks, phased incentive designs, and fail-safe mechanisms.",
                        recommendations: [
                          "Implement A/B testing for token mechanisms",
                          "Design phased incentive structures",
                          "Create fail-safe caps for token systems",
                          "Develop external economic pressure relief valves"
                        ]
                      },
                      {
                        title: "Operational Excellence",
                        content: "The balance between visionary leadership and operational execution requires careful attention. While AI agents provide valuable support, there's a need for human operators who can effectively translate vision into actionable sprints and maintain rigorous completion metrics.",
                        recommendations: [
                          "Hire key human operators for vision translation",
                          "Implement rigorous completion metrics",
                          "Develop clear sprint planning processes",
                          "Create balanced AI-human workflow systems"
                        ]
                      },
                      {
                        title: "User Experience & Accessibility",
                        content: "The sophisticated nature of AI-native art curators, agent-to-agent payments, and token-gated MPC agents presents significant conceptual barriers for users. Addressing this requires narrative compression—starting with a compelling 'agent experience' that creates FOMO, then gradually introducing users to deeper functionalities.",
                        recommendations: [
                          "Develop clear entry points for new users",
                          "Create compelling initial agent experiences",
                          "Implement gradual complexity introduction",
                          "Focus on emotional engagement and clear value propositions"
                        ]
                      }
                    ].map((area, index) => (
                      <motion.div 
                        key={area.title}
                        className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <h3 className="text-[#FFD700] text-2xl font-bold mb-4">{area.title}</h3>
                        <p className="text-gray-200 text-lg leading-relaxed">{area.content}</p>
                        <div className="mt-6 space-y-3">
                          <p className="text-[#FFD700] font-semibold text-xl">Recommendations:</p>
                          <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {area.recommendations.map((rec, i) => (
                              <motion.li 
                                key={i}
                                className="text-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 + index * 0.1 }}
                                viewport={{ once: true }}
                              >
                                {rec}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p 
                    className="text-xl font-epilogue text-gray-200 leading-relaxed mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    These insights drive our commitment to continuous improvement and transparent leadership. By addressing these areas, we aim to create more sustainable, accessible, and impactful solutions in the Web3 space. Our AI systems will continue to monitor and analyze these growth areas, providing ongoing recommendations for optimization and development.
                  </motion.p>
                </div>
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <motion.div 
        className="container mx-auto px-4 py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-boska font-bold mb-12 text-[#FFD700]">Connect with LiveTheLifeTV</h2>
          <div className="flex justify-center space-x-8">
            {[
              { 
                href: "https://twitter.com/livethelifetv", 
                icon: "twitter",
                path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              },
              { 
                href: "https://instagram.com/livethelife.tv", 
                icon: "instagram",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              }
            ].map((social, index) => (
              <motion.a 
                key={social.icon}
                href={social.href}
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-gray-900/80 p-6 rounded-2xl border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
                  <span className="sr-only">{social.icon}</span>
                  <svg className="h-8 w-8 text-gray-400 group-hover:text-[#FFD700] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 