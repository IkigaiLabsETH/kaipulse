'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function STRDPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is $STRD?",
      a: (
        <span>
          $STRD is MicroStrategy Incorporated&apos;s Series B Perpetual Strife Preferred Stock, listed on NASDAQ. As part of MicroStrategy&apos;s capital raising strategy, this preferred stock was issued to support the company&apos;s Bitcoin acquisition program and general corporate purposes.
        </span>
      ),
    },
    {
      q: "What are the key financial features?",
      a: (
        <span>
          Key financial features include:
          <br /><br />
          • Fixed dividend rate
          <br />
          • Stated amount per share with liquidation preference
          <br />
          • Quarterly cash payments
          <br />
          • Compound rate on missed dividends
          <br />
          • Conversion to Class A common stock (MSTR)
          <br />
          • Redemption terms
        </span>
      ),
    },
    {
      q: "What is the current market performance?",
      a: (
        <span>
          Market performance details:
          <br /><br />
          • Current Price: [Current Price]
          <br />
          • Previous Close: [Previous Close]
          <br />
          • Day&apos;s Range: [Day&apos;s Range]
          <br />
          • 52-Week Range: [52-Week Range]
          <br />
          • Average Daily Volume: [Volume]
          <br />
          • Current Yield: [Yield]
        </span>
      ),
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Preferred Stock • Bitcoin Strategy • Fixed Income</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                $STRD
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">MicroStrategy&apos;s Series B Perpetual Strife Preferred Stock</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Official Link */}
            <div className="mt-4">
              <Link 
                href="https://www.strategy.com/strd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200 rounded-none border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] hover:shadow-[2px_2px_0px_0px_rgba(234,179,8,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                View Official STRD Page
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Featured Analysis
            </h3>
            <div className="relative w-full h-[600px]">
              <iframe
                src="https://www.youtube.com/embed/IMUAcmuORe0?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0"
                title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-none"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-gray-300 text-center text-lg">
              Watch our detailed analysis of STRD&apos;s market performance and future outlook
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-yellow-500/20 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => setOpen(open === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-white">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-yellow-500 transition-transform duration-200",
                        open === index ? "transform rotate-180" : ""
                      )}
                    />
                  </button>
                  {open === index && (
                    <div className="pb-4 text-gray-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
