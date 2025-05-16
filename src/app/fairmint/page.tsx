'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FairmintPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Fairmint?",
      a: (
        <span>
          Fairmint is a full-stack infrastructure bringing equity ownership onchain. By pioneering the Open Cap Table Protocol (OCP), they&apos;ve created the legal and technical backbone for tokenized equity, enabling real-time investor interactions, automated compliance, and DeFi-native financial primitives.
        </span>
      ),
    },
    {
      q: "What is the Open Cap Table Protocol (OCP)?",
      a: (
        <span>
          OCP reimagines cap tables as modular smart contracts, not just static files. It features:
          <br /><br />
          • Immutable Event Log: Every issuance, transfer, or vesting schedule is recorded onchain
          <br />
          • Token-Agnostic: Preserves legal clarity while optionally integrating tokens
          <br />
          • Built-In Privacy: Using RBAC, offchain identity mapping, and privacy-enabled blockchains
          <br /><br />
          It&apos;s chain-agnostic, open-source, and ready to scale across Base, Solana (Rust), and Canton.
        </span>
      ),
    },
    {
      q: "What problems does Fairmint solve?",
      a: (
        <span>
          Fairmint addresses several key issues in traditional equity management:
          <br /><br />
          • Eliminates manual reconciliation
          <br />
          • Enables better liquidity
          <br />
          • Prevents missed financing opportunities
          <br />
          • Makes ownership transparent, fast, and programmable
          <br /><br />
          It transforms equity into programmable, onchain primitives while maintaining legal compliance.
        </span>
      ),
    },
    {
      q: "What is Fairmint's real-world impact?",
      a: (
        <span>
          Fairmint has already achieved significant milestones:
          <br /><br />
          • $1B+ in equity already issued onchain
          <br />
          • Registered Transfer Agent status for direct legal compliance
          <br />
          • Used by both early-stage startups and later-stage companies
          <br /><br />
          Their vision of a distributed network of transfer agents is becoming reality, eliminating middlemen and paperwork.
        </span>
      ),
    },
    {
      q: "Who should use Fairmint?",
      a: (
        <span>
          Fairmint is ideal for:
          <br /><br />
          • Founders and CFOs looking to modernize their cap table
          <br />
          • Transfer agents and regulators seeking compliant solutions
          <br />
          • Web3 developers building extensions
          <br />
          • Companies wanting to raise from users while sharing real equity
          <br />
          • Organizations seeking to enable liquidity without violating SEC regulations
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Onchain Equity • Smart Contracts • DeFi Native</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Fairmint
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Bringing Equity Onchain, One Cap Table at a Time</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            <a 
              href="https://fairmint.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-none hover:bg-yellow-400 transition-colors duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              Explore Fairmint
            </a>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📊</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Open Cap Table
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Programmable Equity Records
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Real-Time
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Automated Compliance
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔗</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  DeFi Native
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Composable Ownership
              </p>
            </div>
          </div>

          {/* Problem Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Problem: Cap Tables Are Stuck in the 20th Century
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Even in 2025, equity records in most startups and private companies live in spreadsheets or closed SaaS platforms. This leads to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Manual reconciliation</li>
                <li>Limited liquidity</li>
                <li>Missed financing opportunities</li>
              </ul>
              <p className="text-lg">
                The worst part? Ownership is opaque, slow, and non-programmable.
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Solution: Fairmint + OCP
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Fairmint&apos;s response was bold: turn equity itself into programmable, onchain primitives. Their brainchild, the Open Cap Table Protocol (OCP), reimagines cap tables as modular smart contracts, not just static files.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">How It Works:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Immutable Event Log: Every issuance, transfer, or vesting schedule is recorded onchain</li>
                  <li>Token-Agnostic: Equity isn&apos;t auto-tokenized; instead, the system preserves legal clarity</li>
                  <li>Built-In Privacy: Using RBAC, offchain identity mapping, and privacy-enabled blockchains</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Real-World Impact
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Fairmint isn&apos;t building in a vacuum—they&apos;re live:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>$1B+ in equity already issued onchain</li>
                <li>Registered Transfer Agent status unlocks direct legal compliance</li>
                <li>Used by both early-stage startups and later-stage companies</li>
              </ul>
              <p className="text-lg mt-4">
                Fairmint&apos;s vision of a distributed network of transfer agents is becoming reality. No middlemen. No paperwork crisis 2.0.
              </p>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Why It Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Legacy System</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Siloed data, spreadsheets</li>
                  <li>Manual compliance checks</li>
                  <li>Shareholder opacity</li>
                  <li>Legal token uncertainty</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">OCP + Fairmint</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Unified, interoperable smart contracts</li>
                  <li>Automated enforcement via smart contracts</li>
                  <li>Real-time stakeholder visibility</li>
                  <li>Legally sound, token-agnostic ownership</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="border-b border-yellow-500/20">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-xl font-medium text-white">{item.q}</span>
                    <ChevronDown
                      className={cn('h-6 w-6 transition-transform text-yellow-500', {
                        '-rotate-180': open === i,
                      })}
                    />
                  </button>
                  {open === i && (
                    <div className="pb-4 text-gray-300">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Want In?
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Fairmint is growing its community of:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Founders and CFOs</li>
                <li>Transfer agents and regulators</li>
                <li>Web3 devs building extensions</li>
              </ul>
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://fairmint.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-none hover:bg-yellow-400 transition-colors duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                >
                  Join the Movement
                </a>
              </div>
            </div>
          </div>

          {/* Final Word Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Final Word
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Fairmint isn&apos;t building the next cap table tool. They&apos;re rebuilding the equity stack for programmable capital markets. If you believe in onchain legitimacy, regulatory alignment, and composable ownership, now&apos;s the time to get involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
