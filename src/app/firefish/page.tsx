'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function FirefishBorrowPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Firefish Borrow?",
      a: (
        <span>
          Firefish Borrow is a Bitcoin-backed lending platform that allows you to get cash while letting your Bitcoin grow. It&apos;s a non-custodial solution that keeps your Bitcoin secured by code, not custodians, while providing access to liquidity without triggering taxable events.
        </span>
      ),
    },
    {
      q: "How does the loan process work?",
      a: (
        <span>
          The process is simple and takes just 10 minutes:
          <br /><br />
          • Set your loan terms (amount, interest rate, duration)
          <br />
          • Match with an investor on our marketplace
          <br />
          • Lock your Bitcoin in our secure escrow
          <br />
          • Receive funds directly to your bank account
        </span>
      ),
    },
    {
      q: "What are the loan terms?",
      a: (
        <span>
          Our loans offer flexible terms:
          <br /><br />
          • Loans from €500 to €150,000
          <br />
          • Interest rates starting at 7%
          <br />
          • 3-18 month terms available
          <br />
          • 50% Loan-to-value ratio
        </span>
      ),
    },
    {
      q: "How is my Bitcoin secured?",
      a: (
        <span>
          Your Bitcoin is secured through:
          <br /><br />
          • Non-custodial multi-signature contracts
          <br />
          • On-chain escrow system
          <br />
          • No need to give up private keys
          <br />
          • Bitcoin-native security
        </span>
      ),
    },
    {
      q: "What happens if Bitcoin price drops?",
      a: (
        <span>
          You maintain control of your position:
          <br /><br />
          • Top up collateral to avoid liquidation
          <br />
          • Early repayment available
          <br />
          • Flexible terms to manage risk
          <br />
          • No forced liquidations
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin-Backed Loans • Non-Custodial • Instant Access</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Borrow
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Get cash you need, let your Bitcoin grow</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/firefish.jpg"
                alt="Bitcoin-Backed Lending Platform"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Why Choose Firefish Borrow
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Firefish offers a unique approach to Bitcoin-backed lending, combining security, flexibility, and ease of use:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Non-custodial security with multi-signature contracts</li>
                  <li>Decentralized lending marketplace</li>
                  <li>Bank money support for easy access</li>
                  <li>Bitcoin-native platform</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loan Process Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Simple Loan Process
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Get your loan in four simple steps:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Setup & Match</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Choose loan terms</li>
                    <li>Set amount and duration</li>
                    <li>Match with investor</li>
                    <li>Confirm deal details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Secure & Receive</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Lock Bitcoin in escrow</li>
                    <li>Verify security</li>
                    <li>Receive bank transfer</li>
                    <li>Manage repayment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔒</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Security
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Non-Custodial Protection
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Speed
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                10-Minute Process
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Control
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Full Bitcoin Control
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-yellow-500/20 pb-4">
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpen(open === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-white">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-yellow-500 transition-transform",
                        open === index ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {open === index && (
                    <div className="mt-4 text-gray-300">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-none hover:bg-yellow-400 transition-colors shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              Request Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
