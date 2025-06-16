"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LombardPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Private Wealth Management • Crypto Finance • Tax Optimization</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Finary One
              </span>
              <div className="mt-4">
                <Link 
                  href="https://finary.com/referral/T46XYZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-500/80 hover:text-yellow-500 transition-colors duration-200 text-lg font-light"
                >
                  Visit Finary.com →
                </Link>
              </div>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Premium Lombard Loans & Wealth Management</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Elite Wealth Management
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Finary One is Finary&apos;s premium private wealth management service, offering tailored financial solutions for high-net-worth individuals with investable assets of €250,000 or more. Led by Corentin Hué, former private banker at Oddo, we provide expert guidance in crypto-backed Lombard loans and comprehensive wealth management.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access to top-tier Lombard loans with competitive terms</li>
                  <li>Expert tax optimization to avoid the 30% PFU</li>
                  <li>Personalized wealth management strategies</li>
                  <li>Exclusive Luxembourg-based financial products</li>
                  <li>Network of vetted legal and tax experts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Premium Service
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Dedicated Private Wealth Manager
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌍</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Global Access
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Luxembourg-Based Solutions
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤝</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Expert Network
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Vetted Legal & Tax Partners
              </p>
            </div>
          </div>

          {/* Implementation Options */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Lombard Loan Solutions
            </h3>
            <div className="space-y-8">
              {/* Personal BTC */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Personal BTC Collateral</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    For portfolios under €250,000, we recommend direct application to our partner lenders like Mt Pelerin. This approach offers quick access to liquidity with minimal setup costs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>40% loan-to-value ratio</li>
                        <li>~3% interest rate</li>
                        <li>Quick setup (1-2 weeks)</li>
                        <li>No setup costs</li>
                        <li>Simple management</li>
                        <li>Direct control</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Considerations:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Personal liability</li>
                        <li>Direct tax exposure</li>
                        <li>Asset concentration</li>
                        <li>Limited loan terms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finary One */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Finary One Premium Service</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    For portfolios of €250,000 or more, Finary One provides comprehensive wealth management with enhanced Lombard loan solutions through our network of partner banks and financial institutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Premium Benefits:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Enhanced loan terms</li>
                        <li>Tax optimization</li>
                        <li>Liability protection</li>
                        <li>Asset diversification</li>
                        <li>Business opportunities</li>
                        <li>International options</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Service Details:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Dedicated manager</li>
                        <li>Legal network access</li>
                        <li>Tax specialists</li>
                        <li>Portfolio tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/_L4Ht19gPDM"
                title="Lombard Loans Expert Analysis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-8">
              Optimize Your Wealth Strategy?
            </h3>
            <Link href="https://form.typeform.com/to/sA3Rjz6q?typeform-source=livethelife.tv" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
