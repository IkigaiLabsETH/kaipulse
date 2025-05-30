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
          Bitcoin-backed loans allow Bitcoin holders to borrow cash while keeping their BTC holdings. Instead of selling Bitcoin, users can use it as collateral to access liquidity. This is particularly valuable for Bitcoin maximalists who want to maintain their position while accessing cash for other needs. The loans are overcollateralized, meaning you must deposit more Bitcoin than the cash value you want to borrow, providing a safety margin against price volatility.
        </span>
      ),
    },
    {
      q: "How do Strike and Abra Private differ?",
      a: (
        <span>
          The key differences between Strike and Abra Private include:
          <br /><br />
          • Interest Rates: Strike ~12% APR vs. Abra ~5-6% APR (with rates as low as 3.88% for top-tier clients)
          <br />
          • Loan Term: Strike fixed 12 months vs. Abra open-term (no fixed maturity)
          <br />
          • LTV: Strike up to 50% vs. Abra up to 75%
          <br />
          • Origination Fee: Strike 0% vs. Abra ~2%
          <br />
          • Regulation: Strike partners with lenders vs. Abra SEC-registered advisor
          <br />
          • Loan Size: Strike $75k-$2M vs. Abra (similar range, but can scale higher)
          <br />
          • Custody: Strike uses third-party lenders vs. Abra uses Fireblocks directly
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
          • Margin calls if Bitcoin price drops significantly (especially with higher LTV ratios)
          <br />
          • Counterparty risk (though both platforms mitigate this through segregated accounts)
          <br />
          • No FDIC/SIPC insurance on crypto collateral
          <br />
          • Need to trust a third party with your Bitcoin
          <br />
          • Interest costs over time
          <br />
          • Potential liquidation of collateral if unable to meet margin calls
          <br />
          • Platform operational risk (though mitigated by Abra&apos;s SEC registration)
          <br /><br />
          Both platforms implement safeguards, but users should understand these risks before borrowing. It&apos;s recommended to use conservative LTV ratios and maintain extra Bitcoin for potential margin calls.
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
          <br />
          • Long-term Bitcoin holders who want to avoid capital gains tax
          <br />
          • Businesses accepting Bitcoin as payment
          <br /><br />
          Both platforms require substantial minimum loan amounts and are not currently targeting small retail borrowers. The services are best suited for those who understand the risks and have sufficient Bitcoin holdings to maintain safe LTV ratios.
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
          <br />
          • Professional custody solutions
          <br />
          • Legal protection of client assets
          <br /><br />
          Abra uses Fireblocks for custody while Strike partners with institutional lenders. Both approaches aim to ensure the safety of your Bitcoin collateral, though Abra&apos;s SEC-registered status provides additional regulatory oversight.
        </span>
      ),
    },
    {
      q: "What about regulation and compliance?",
      a: (
        <span>
          The platforms differ significantly in their regulatory approach:
          <br /><br />
          • Abra operates as an SEC-registered investment adviser (RIA)
          <br />
          • Abra must file detailed disclosures (Form ADV)
          <br />
          • Abra acts as a fiduciary to its clients
          <br />
          • Strike operates through lending partnerships
          <br />
          • Strike is currently limited to certain U.S. states
          <br />
          • Strike plans to implement proof-of-reserves auditing
          <br /><br />
          Abra&apos;s regulated structure provides more formal oversight, while Strike takes a more Bitcoin-native approach with voluntary transparency measures.
        </span>
      ),
    },
    {
      q: "How do the interest rates compare?",
      a: (
        <span>
          The interest rate differences are significant:
          <br /><br />
          • Abra: 5-6% APR (variable, can go as low as 3.88% for top clients)
          <br />
          • Strike: 12% APR (fixed)
          <br />
          • Abra charges 2% origination fee
          <br />
          • Strike has no origination fee
          <br /><br />
          For longer-term loans, Abra&apos;s lower interest rate typically outweighs its origination fee. For very short-term loans, Strike&apos;s no-fee structure might be more attractive despite the higher APR.
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

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Introduction
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Bitcoin holders (&quot;HODLers&quot;) often face a dilemma when they need cash: sell a prized Bitcoin stash (and potentially miss out on future gains) or find a way to borrow against it. In 2025, Bitcoin-backed loans have re-emerged as a hot topic, with high-profile figures like Jack Mallers of Strike pushing new borrowing products at major industry events. Meanwhile, veteran crypto company Abra has been quietly offering an alternative lending model to private clients, boasting significantly lower rates and a regulated structure.
              </p>
              <p className="text-lg">
                This comparison takes a neutral, analytical look at Strike&apos;s new Bitcoin-backed borrowing program – as announced by Jack Mallers at the 2025 Bitcoin Conference – versus Abra Private&apos;s Bitcoin-collateralized lending product. We&apos;ll compare their interest rates, loan terms, collateral practices, and regulatory safeguards, fact-check claims against data, and evaluate the trust and risk models of each platform for Bitcoin maximalists who are loath to part with their coins.
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
                  Strike offers 12-month term loans for U.S. customers, with loan sizes ranging from $75,000 up to $2 million. The interest rate is fixed at 12% APR, with no origination fees or prepayment penalties. No credit checks are performed, and loans are not reported to credit bureaus. Borrowers can choose to make monthly interest payments or pay everything at the end of the term.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Collateral & LTV</h4>
                <p className="text-lg mb-4">
                  Loans are overcollateralized with a 50% LTV ratio. Bitcoin collateral is held by vetted third-party institutional lenders, with Strike maintaining legal responsibility. The platform emphasizes no rehypothecation and plans to implement proof-of-reserves auditing. This conservative LTV provides a significant buffer against Bitcoin&apos;s price volatility.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Target Users</h4>
                <p className="text-lg">
                  Focused on high-net-worth and institutional clients, Strike aims to help serious Bitcoin holders unlock value without selling. The platform is currently limited to U.S. customers in certain states, with plans for international expansion. Strike&apos;s vision is to make Bitcoin-backed borrowing mainstream as Bitcoin&apos;s value potentially climbs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Trust & Transparency</h4>
                <p className="text-lg">
                  Strike emphasizes its commitment to transparency and security. The platform plans to implement proof-of-reserves auditing so customers can verify their collateral is accounted for at all times. While not SEC-regulated, Strike maintains legal responsibility for collateral even when using partner lenders, providing an additional layer of security.
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
                  Operating through Abra Capital Management, LP, an SEC-registered investment adviser (RIA). This provides regulatory oversight, fiduciary duty, and comprehensive disclosure requirements. Assets are held in segregated accounts via trusted partners like Fireblocks. The RIA status means Abra must meet regulatory approval and operate as a fiduciary, with added layers of disclosure and oversight.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Loan Terms</h4>
                <p className="text-lg mb-4">
                  Offering significantly lower rates (5-6% APR) with open-term loans and no fixed maturity date. LTV ratios up to 75% are available, though this comes with higher liquidation risk. A 2% origination fee applies, but no ongoing account fees beyond interest. The open-term structure provides flexibility for long-term Bitcoin holders.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Security & Transparency</h4>
                <p className="text-lg mb-4">
                  Assets remain under client names in segregated accounts, with on-chain verification available. The RIA structure ensures client assets are protected even in case of company insolvency. Regular SEC examinations and compliance requirements provide additional oversight. Abra&apos;s track record includes surviving the 2022 crypto winter without any liquidations.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Track Record</h4>
                <p className="text-lg">
                  Abra has processed over $1 billion in loans historically and has navigated multiple market cycles. The company&apos;s pivot to become an SEC-registered advisor demonstrates its commitment to regulatory compliance and client protection. This experience and regulatory status provide a different kind of trust compared to newer entrants in the space.
                </p>
              </div>
            </div>
          </div>

          {/* Risk Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Risk Analysis & Trust Considerations
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Custodial Risk</h4>
                <p className="text-lg mb-4">
                  Both platforms take different approaches to custody. Abra uses Fireblocks directly with segregated on-chain wallets, while Strike partners with institutional lenders. Abra&apos;s RIA status provides additional legal protections, but both platforms avoid rehypothecation and maintain segregated accounts. The key is that neither platform uses your Bitcoin for other purposes.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Margin Call Risk</h4>
                <p className="text-lg mb-4">
                  Strike&apos;s 50% LTV provides more safety margin than Abra&apos;s 75% LTV. With Abra&apos;s higher LTV, a smaller Bitcoin price drop could trigger margin calls. Users should consider their risk tolerance and ability to post additional collateral if needed. Conservative users might choose lower LTV ratios than the maximum allowed.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Regulatory Protection</h4>
                <p className="text-lg">
                  Abra&apos;s SEC registration provides formal oversight and legal protections. Strike relies on voluntary transparency and partner relationships. Neither platform offers FDIC/SIPC insurance on crypto collateral, but Abra&apos;s regulated structure provides additional safeguards in case of company issues.
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
