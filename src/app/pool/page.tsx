import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import CostBreakdown from './components/CostBreakdown';
import PergolaInfo from './components/PergolaInfo';

export const metadata: Metadata = {
  title: 'Premium Pool Solutions | Custom Design & Construction',
  description: 'Discover our premium pool solutions featuring custom design, advanced features, and sustainable energy systems. Transform your backyard into a luxury oasis.',
  openGraph: {
    title: 'Premium Pool Solutions | Custom Design & Construction',
    description: 'Discover our premium pool solutions featuring custom design, advanced features, and sustainable energy systems.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: Regenerate every hour

export default function PoolPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
        <HeroSection />
        <OverviewSection />
        <CostBreakdown />
        {/* Pool Maintenance Products */}
        <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Recommended Pool Maintenance</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://aiper.com/us/products/aiper-surfer-s2-cordless-robotic-pool-skimmer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-black/40 p-6 rounded-none border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤖</span>
                <h4 className="text-xl font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors">Aiper Surfer S2</h4>
              </div>
              <p className="text-gray-300 text-center">Cordless Robotic Pool Skimmer with 35+ hour battery life and SolarSeeker™ technology</p>
            </a>
            <a 
              href="https://aiper.com/us/products/aiper-scuba-x1-pro-max-cordless-robotic-pool-cleaner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-black/40 p-6 rounded-none border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🧹</span>
                <h4 className="text-xl font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors">Aiper Scuba X1 Pro Max</h4>
              </div>
              <p className="text-gray-300 text-center">Advanced cordless robotic pool cleaner for comprehensive pool maintenance</p>
            </a>
          </div>
        </div>
        {/* Pergola Information */}
        <PergolaInfo />
        {/* View Details Link */}
        <div className="text-center">
          <Link 
            href="/pool/details" 
            className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-none hover:bg-yellow-400 transition-colors duration-300"
          >
            View Detailed Specifications
          </Link>
        </div>
      </div>
    </div>
  );
}
