'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function OtonomosPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Otonomos?",
      a: (
        <span>
          Otonomos is a legal-tech platform specializing in rapid entity formation and governance solutions for tech entrepreneurs, with a focus on blockchain and Web3 ventures. Since 2015, we&apos;ve helped crypto founders and investors form and maintain their companies across major jurisdictions worldwide. Our platform delivers an end-to-end online experience (&quot;Incorporation Kits for Your Trek into Tech&quot;) to set up companies, foundations, trusts, and funds, combining expert structuring advice with automation.
        </span>
      ),
    },
    {
      q: "What makes Otonomos unique for Web3 businesses?",
      a: (
        <span>
          Otonomos is exclusively focused on blockchain-related clients, offering specialized solutions:
          <br /><br />
          • Deep expertise in crypto-specific legal challenges
          <br />
          • DAO structuring and on-chain integration
          <br />
          • Tokenized equity and crypto treasury support
          <br />
          • Guidance on VASP regulations and token offerings
          <br />
          • Integration with emerging DAO-friendly legal frameworks
          <br /><br />
          Our platform helps navigate complex questions about jurisdiction selection, token offerings, and decentralized protocol structuring.
        </span>
      ),
    },
    {
      q: "How does Otonomos handle DAO structuring?",
      a: (
        <span>
          Through our sister platform OtoCo, we offer innovative DAO solutions:
          <br /><br />
          • Instant U.S. LLC formation owned by DAO multi-sig wallets
          <br />
          • Preservation of decentralization through on-chain governance
          <br />
          • Support for Wyoming DAO LLC, UNA frameworks, and more
          <br />
          • Smart contract-based company formation
          <br />
          • Legally valid, crypto-native ownership structures
          <br /><br />
          This allows DAOs to maintain decentralization while gaining legal status and limited liability protection.
        </span>
      ),
    },
    {
      q: "What jurisdictions does Otonomos support?",
      a: (
        <span>
          We support a wide range of crypto-friendly jurisdictions:
          <br /><br />
          • U.S. (Delaware, Wyoming LLCs)
          <br />
          • Singapore Pte Ltd companies
          <br />
          • Swiss associations
          <br />
          • Cayman Islands foundations
          <br />
          • BVI business companies
          <br />
          • UAE foundations (ADGM/DIFC)
          <br />
          • RAK Digital Assets Oasis (RAK DAO)
          <br /><br />
          Our AI-driven chat assistant helps match your project with the optimal jurisdiction.
        </span>
      ),
    },
    {
      q: "How secure and legally sound are Otonomos' solutions?",
      a: (
        <span>
          Otonomos ensures both technical and legal security:
          <br /><br />
          • All entities are properly registered under their jurisdictions
          <br />
          • Secure digital identity verification and encryption
          <br />
          • Blockchain signatures recognized as legally binding
          <br />
          • Thorough KYB/KYC compliance checks
          <br />
          • Future-proofed legal structures
          <br /><br />
          Our platform combines robust legal engineering with cutting-edge security measures.
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Web3 Entity Formation • DAO Structuring • Crypto Treasury</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Otonomos
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Reimagining Corporate Formation for the Web3 Era</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            <a 
              href="https://otonomos.com/order/us-florida-llc/new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-none hover:bg-yellow-400 transition-colors duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              Start Your Web3 Journey
            </a>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌐</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Global Formation
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Crypto-Friendly Jurisdictions
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤖</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  DAO Ready
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                On-Chain Integration
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔒</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Secure
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Legally Sound Structures
              </p>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Core Services & Platform Features
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Global Entity Formation</h4>
                <p className="text-lg mb-4">
                  Fast-track formation of legal entities in numerous jurisdictions, from Delaware LLCs to Singapore Pte Ltd companies, Swiss associations, and more. Our AI-driven chat assistant helps match your project with the optimal jurisdiction based on your specific needs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Streamlined Digital Platform</h4>
                <p className="text-lg mb-4">
                  A user-friendly dashboard that automates traditionally analog corporate services. Order incorporation kits, customize with add-ons, and manage your company&apos;s lifecycle - all through a single interface. Pay via crypto, credit card, or wire.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Compliance & Governance</h4>
                <p className="text-lg">
                  Comprehensive tools for KYC/AML onboarding, annual filings, registered agent services, and other statutory obligations. Our AI-powered system simplifies corporate governance and routine actions.
                </p>
              </div>
            </div>
          </div>

          {/* Web3 Focus Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Tailored for Web3 & Crypto
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">DAO Structuring</h4>
                <p className="text-lg mb-4">
                  Through OtoCo, our sister platform, we enable DAOs to obtain legal status while preserving decentralization. Create U.S. LLCs owned by multi-sig wallets, with on-chain governance and instant formation via smart contracts.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Tokenized Equity</h4>
                <p className="text-lg mb-4">
                  Enable 24/7 peer-to-peer trading, instantaneous settlement, and automated dividend distributions through tokenized company equity. Our smart contract &quot;booster packs&quot; ensure compliance while unlocking liquidity advantages.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Crypto Treasury Support</h4>
                <p className="text-lg">
                  Solutions for managing digital assets, including fiat off-ramps, banking plugins, and jurisdiction-specific tax optimization. We help structure entities to accommodate significant crypto holdings.
                </p>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Security & Legal Robustness
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Legal Soundness</h4>
                <p className="text-lg mb-4">
                  All entities are properly registered under their jurisdictions, with future-proofed legal structures. Our master-series LLC approach ensures each on-chain company remains a legitimate legal person.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Platform Security</h4>
                <p className="text-lg mb-4">
                  Secure digital identity verification, encryption for sensitive data, and wallet-based authentication. Blockchain signatures are recognized as legally binding in our operating agreements.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Industry Reputation</h4>
                <p className="text-lg">
                  Recognized as a pioneer in Web3 legal-tech, with a strong track record of serving prominent crypto projects. Our thought leadership through &quot;The Otonomist&quot; publication and active community engagement.
                </p>
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
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex justify-between items-center w-full py-4 text-left"
                  >
                    <span className="text-lg font-medium">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        open === i ? "transform rotate-180" : ""
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      open === i ? "max-h-96 pb-4" : "max-h-0"
                    )}
                  >
                    <div className="text-gray-300">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
