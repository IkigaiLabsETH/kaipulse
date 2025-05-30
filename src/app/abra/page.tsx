'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AbraPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What are Bitcoin-backed loans?",
      a: (
        <span>
          Bitcoin-backed loans allow Bitcoin holders to borrow cash while keeping their BTC holdings. Instead of selling Bitcoin, users can use it as collateral to access liquidity. This is particularly valuable for Bitcoin maximalists who want to maintain their position while accessing cash for other needs.
        </span>
      ),
    },
    {
      q: "How do Strike and Abra Private differ?",
      a: (
        <span>
          The key differences between Strike and Abra Private include:
          <br /><br />
          • Interest Rates: Strike ~12% APR vs. Abra ~5-6% APR
          <br />
          • Loan Term: Strike fixed 12 months vs. Abra open-term
          <br />
          • LTV: Strike up to 50% vs. Abra up to 75%
          <br />
          • Origination Fee: Strike 0% vs. Abra ~2%
          <br />
          • Regulation: Strike partners with lenders vs. Abra SEC-registered advisor
          <br /><br />
          Both platforms avoid rehypothecation of collateral and maintain segregated accounts.
        </span>
      ),
    },
    {
      q: "What are the risks of Bitcoin-backed loans?",
      a: (
        <span>
          Key risks include:
          <br /><br />
          • Margin calls if Bitcoin price drops significantly
          <br />
          • Counterparty risk (though both platforms mitigate this)
          <br />
          • No FDIC/SIPC insurance on crypto collateral
          <br />
          • Need to trust a third party with your Bitcoin
          <br />
          • Interest costs over time
          <br /><br />
          Both platforms implement safeguards, but users should understand these risks before borrowing.
        </span>
      ),
    },
    {
      q: "Who are these loans best suited for?",
      a: (
        <span>
          These loans are primarily designed for:
          <br /><br />
          • High-net-worth Bitcoin holders
          <br />
          • Institutional investors
          <br />
          • Family offices
          <br />
          • Accredited investors
          <br />
          • Those needing liquidity without selling BTC
          <br /><br />
          Both platforms require substantial minimum loan amounts and are not currently targeting small retail borrowers.
        </span>
      ),
    },
    {
      q: "How do the platforms handle collateral?",
      a: (
        <span>
          Both platforms take security seriously:
          <br /><br />
          • No rehypothecation of Bitcoin collateral
          <br />
          • Segregated accounts for each client
          <br />
          • On-chain verification of collateral
          <br />
          • Regular audits and transparency measures
          <br />
          • Clear margin call procedures
          <br /><br />
          Abra uses Fireblocks for custody while Strike partners with institutional lenders.
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Loans • Strike vs. Abra • 2025 Comparison</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Bitcoin Loans
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Two Ways: Strike vs. Abra Private</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Strike
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                12% APR • 50% LTV • 12-Month Term
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏦</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Abra Private
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                5-6% APR • 75% LTV • Open Term
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔒</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Security
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                No Rehypothecation • Segregated Accounts
              </p>
            </div>
          </div>

          {/* Strike Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Strike Bitcoin-Backed Borrowing
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Product Details</h4>
                <p className="text-lg mb-4">
                  Strike offers 12-month term loans for U.S. customers, with loan sizes ranging from $75,000 up to $2 million. The interest rate is fixed at 12% APR, with no origination fees or prepayment penalties. No credit checks are performed, and loans are not reported to credit bureaus.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Collateral & LTV</h4>
                <p className="text-lg mb-4">
                  Loans are overcollateralized with a 50% LTV ratio. Bitcoin collateral is held by vetted third-party institutional lenders, with Strike maintaining legal responsibility. The platform emphasizes no rehypothecation and plans to implement proof-of-reserves auditing.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Target Users</h4>
                <p className="text-lg">
                  Focused on high-net-worth and institutional clients, Strike aims to help serious Bitcoin holders unlock value without selling. The platform is currently limited to U.S. customers in certain states, with plans for international expansion.
                </p>
              </div>
            </div>
          </div>

          {/* Abra Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Abra Private Bitcoin-Backed Lending
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Regulated Structure</h4>
                <p className="text-lg mb-4">
                  Operating through Abra Capital Management, LP, an SEC-registered investment adviser (RIA). This provides regulatory oversight, fiduciary duty, and comprehensive disclosure requirements. Assets are held in segregated accounts via trusted partners like Fireblocks.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Loan Terms</h4>
                <p className="text-lg mb-4">
                  Offering significantly lower rates (5-6% APR) with open-term loans and no fixed maturity date. LTV ratios up to 75% are available, though this comes with higher liquidation risk. A 2% origination fee applies, but no ongoing account fees beyond interest.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Security & Transparency</h4>
                <p className="text-lg">
                  Assets remain under client names in segregated accounts, with on-chain verification available. The RIA structure ensures client assets are protected even in case of company insolvency. Regular SEC examinations and compliance requirements provide additional oversight.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Head-to-Head Comparison
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Cost & Terms</h4>
                <p className="text-lg mb-4">
                  Abra offers lower rates (5-6% vs 12%) but charges a 2% origination fee. Strike has no fees but higher interest. Abra&apos;s open-term loans provide more flexibility than Strike&apos;s 12-month terms. Both platforms avoid rehypothecation and maintain segregated accounts.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Risk & Security</h4>
                <p className="text-lg mb-4">
                  Strike&apos;s 50% LTV provides more safety margin than Abra&apos;s 75% LTV. Abra&apos;s SEC registration offers regulatory oversight, while Strike relies on partner relationships. Both platforms implement strong security measures and transparency practices.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Trust & Track Record</h4>
                <p className="text-lg">
                  Abra has a longer track record in lending and survived the 2022 crypto winter. Strike brings fresh innovation and Bitcoin-native focus. Both platforms have earned trust in different ways - Abra through regulation and history, Strike through its Bitcoin community presence.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-lg font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
