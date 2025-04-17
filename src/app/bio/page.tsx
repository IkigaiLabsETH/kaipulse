'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BioPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div 
          className={`max-w-5xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="font-boska text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-center">
            LiveTheLifeTV
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
            {/* Profile Image Section */}
            <div 
              className={`relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-800 shadow-2xl shadow-[#FFD700]/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Image
                src="/images/ceo.jpeg"
                alt="LiveTheLifeTV"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <p 
                className={`text-2xl font-epilogue text-gray-200 leading-relaxed ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                LiveTheLifeTV (LTL) has been a pioneering force in online travel and real estate for over two decades. Today, LTL&apos;s focus has evolved to encompass Bitcoin, DeFi, AI, and onchain art curation, bringing the same innovative spirit to the Web3 space. LTL is now a TripleMaxi.
              </p>
              
              <div className={`space-y-6 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h2 className="text-3xl font-boska font-semibold text-[#FFD700]">Current Focus Areas</h2>
                <ul className="space-y-4 font-satoshi">
                  <li className="flex items-center bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-all">
                    <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-4"></span>
                    <span className="text-lg">Bitcoin & DeFi Ecosystems</span>
                  </li>
                  <li className="flex items-center bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-all">
                    <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-4"></span>
                    <span className="text-lg">Generative Art & AI Integration</span>
                  </li>
                  <li className="flex items-center bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-all">
                    <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-4"></span>
                    <span className="text-lg">Onchain Art Curation</span>
                  </li>
                  <li className="flex items-center bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-all">
                    <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-4"></span>
                    <span className="text-lg">Web3 Experience Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Bio Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-[#FFD700]/5 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div
            className={`max-w-5xl mx-auto space-y-12 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-gray-900/80 p-10 rounded-3xl backdrop-blur-lg border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
              <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700]">Vision & Innovation</h2>
              <p className="text-xl font-epilogue text-gray-200 leading-relaxed">
                With a rich background in travel and real estate spanning two decades, LTL now brings its expertise to the Web3 space. The team&apos;s leadership integrates avant-garde art, AI-powered solutions, and decentralized ecosystems to redefine how users engage with digital assets and experiences.
              </p>
            </div>

            <div className="bg-gray-900/80 p-10 rounded-3xl backdrop-blur-lg border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
              <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700]">Expert Synthesis</h2>
              <p className="text-xl font-epilogue text-gray-200 leading-relaxed">
                LTL&apos;s expertise lies in synthesizing diverse realms—Bitcoin, DeFi, generative art, and AI-driven solutions—into innovative, value-driven experiences. The team&apos;s projects elegantly combine cutting-edge technology with artistic vision, enhanced by sophisticated AI agents that personalize experiences and drive meaningful community connections.
              </p>
            </div>

            <div className="bg-gray-900/80 p-10 rounded-3xl backdrop-blur-lg border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
              <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700]">User Experience Focus</h2>
              <p className="text-xl font-epilogue text-gray-200 leading-relaxed">
                Mindful of user experience, LTL continually strives to simplify complex Web3 concepts into intuitive interactions. Recognizing the importance of clarity and accessibility, the team optimizes onboarding processes, crafts compelling narratives, and fosters emotional resonance, ensuring every interaction creates genuine value.
              </p>
            </div>

            <div className="bg-gray-900/80 p-10 rounded-3xl backdrop-blur-lg border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
              <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700]">Operational Excellence</h2>
              <p className="text-xl font-epilogue text-gray-200 leading-relaxed">
                LTL balances AI-driven innovation with strategic oversight, refining workflows to seamlessly deliver consistent excellence. The team&apos;s commitment to continuous evolution positions LiveTheLifeTV at the nexus of Web3, art, and innovation, consistently transforming ambitious ideas into extraordinary realities.
              </p>
            </div>

            {/* AI Insights Section */}
            <div className="bg-gray-900/80 p-10 rounded-3xl backdrop-blur-lg border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
              <h2 className="text-4xl font-boska font-bold mb-8 text-[#FFD700]">AI-Analyzed Growth Areas</h2>
              <p className="text-xl font-epilogue text-gray-200 leading-relaxed mb-8">
                In the spirit of transparency and continuous improvement, here are key insights from our AI agents about areas for growth and development:
              </p>
              
              <div className="space-y-6 font-satoshi">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-[#FFD700] text-xl mb-2">Vision vs. Execution Balance</h3>
                  <p className="text-gray-200">
                    While excelling at idea synthesis and system architecture, there&apos;s a recognized need to focus on ruthless prioritization and establishing a &ldquo;minimum viable mythology&rdquo; to guide execution.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-[#FFD700] text-xl mb-2">Multi-Agent System Complexity</h3>
                  <p className="text-gray-200">
                    The vision for autonomous, collaborative AI systems needs to be balanced with practical considerations around agent trust, memory persistence, and reliable delegation protocols.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-[#FFD700] text-xl mb-2">Token Economics</h3>
                  <p className="text-gray-200">
                    Working to strengthen token utility models with external economic pressures and phased incentive designs to ensure sustainable network effects.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-[#FFD700] text-xl mb-2">Operational Infrastructure</h3>
                  <p className="text-gray-200">
                    Developing a balanced approach between AI delegation and human operations, with a focus on building robust team workflows and completion metrics.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-[#FFD700] text-xl mb-2">User Experience Simplification</h3>
                  <p className="text-gray-200">
                    Committed to making complex systems more accessible through narrative compression and clear entry points, ensuring users can gradually explore deeper functionalities.
                  </p>
                </div>
              </div>

              <p className="text-xl font-epilogue text-gray-200 leading-relaxed mt-8">
                These insights drive our commitment to continuous improvement and transparent leadership, ensuring we build systems that are not just innovative, but also practical and user-centric.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-24">
        <div
          className={`max-w-5xl mx-auto text-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl font-boska font-bold mb-12 text-[#FFD700]">Connect with LiveTheLifeTV</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://twitter.com/livethelifetv" className="group">
              <div className="bg-gray-900/80 p-6 rounded-2xl border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
                <span className="sr-only">Twitter</span>
                <svg className="h-8 w-8 text-gray-400 group-hover:text-[#FFD700] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
            </a>
            <a href="https://instagram.com/livethelife.tv" className="group">
              <div className="bg-gray-900/80 p-6 rounded-2xl border border-[#FFD700]/10 hover:border-[#FFD700]/20 transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="h-8 w-8 text-gray-400 group-hover:text-[#FFD700] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 