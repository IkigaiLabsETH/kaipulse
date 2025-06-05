'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DownBadPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the current state of U.S. national debt?",
      a: (
        <span>
          The U.S. national debt is approximately $36.4 trillion as of 2025, with a debt-to-GDP ratio of around 122–125%. This debt has accumulated due to persistent budget deficits, where government spending exceeds revenue, particularly during events like the 2008 financial crisis, the COVID-19 pandemic, and increased military and social spending.
        </span>
      ),
    },
    {
      q: "How does European debt compare to the U.S.?",
      a: (
        <span>
          Europe&apos;s debt varies by country, but for the European Union (EU) as a whole (27 member states), the general government gross debt was approximately €14.5 trillion (~$15.1 trillion USD) in Q3 2024, with an EU-wide debt-to-GDP ratio of 88.2% in the euro area and 81.0% for the EU. This is significantly lower than the U.S.&apos;s debt-to-GDP ratio.
        </span>
      ),
    },
    {
      q: "What are the key differences in taxation between Europe and the U.S.?",
      a: (
        <span>
          The U.S. average combined tax rate is approximately 25.81% of GDP, while EU countries collect around 40–46% of GDP in taxes. Europe&apos;s higher tax rates support extensive healthcare, pension, and social safety net programs, reducing reliance on borrowing compared to the U.S.
        </span>
      ),
    },
    {
      q: "How do corporate tax rates compare?",
      a: (
        <span>
          The U.S. has a federal corporate tax rate of 21%, with state taxes adding 1–12%. European corporate tax rates are generally lower than U.S. statutory rates, with Germany&apos;s nominal rate at ~30% (down from 50% in 2000). However, effective rates are often lower due to deductions in both regions.
        </span>
      ),
    },
    {
      q: "What are the implications of these differences?",
      a: (
        <span>
          The U.S.&apos;s lower tax rates contribute to its reliance on borrowing, exacerbating debt accumulation. Europe&apos;s higher tax rates enable more robust public services but place a heavier tax burden on individuals and businesses. The U.S.&apos;s high debt-to-GDP ratio poses risks to fiscal sustainability, while Europe faces challenges in high-debt countries like Greece and Italy.
        </span>
      ),
    },
    {
      q: "Can AI help address the debt crisis?",
      a: (
        <span>
          AI could potentially help through productivity gains and economic growth, but with limitations:
          <br /><br />
          • McKinsey estimates AI could add $15.7 trillion to global GDP by 2030
          <br />
          • Could increase tax revenues without raising rates
          <br />
          • May reduce government operational costs
          <br />
          • However, benefits may take years to materialize
          <br />
          • Could increase inequality and require significant upfront investment
        </span>
      ),
    },
    {
      q: "What are the inflation risks?",
      a: (
        <span>
          Current inflation context shows:
          <br /><br />
          • U.S. CPI at ~3.0% in mid-2024 (down from 9.1% in 2022)
          <br />
          • EU inflation averaging ~2.5% in 2024
          <br />
          • Housing costs remain high (U.S. median home price ~$412,000)
          <br />
          • Food prices up 25% since 2020
          <br />
          • Money printing could exacerbate inflation
          <br />
          • AI could both reduce and increase inflation through efficiency and resource demand
        </span>
      ),
    },
    {
      q: "Is Bitcoin a good hedge against these risks?",
      a: (
        <span>
          Bitcoin has proven itself as a powerful hedge with several key advantages:
          <br /><br />
          Performance:
          <br />
          • Best performing asset in history
          <br />
          • Outperformed traditional hedges during high inflation
          <br />
          • Growing institutional adoption
          <br /><br />
          Current Developments:
          <br />
          • Banks and governments embracing Bitcoin
          <br />
          • Mining supports renewable energy infrastructure
          <br />
          • Increasing mainstream adoption and market maturity
          <br />
          • Growing market cap and liquidity
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Fiscal Policy • Economic Structures • Global Comparison</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Debt & Taxation
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Comparing Fiscal Policies Across Continents</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Global Fiscal Landscape
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The comparison of national debt and taxation between Europe and the United States reveals significant differences in fiscal policy and economic structures. These differences reflect varying approaches to public services, social welfare, and economic management.
              </p>
            </div>
          </div>

          {/* U.S. Debt Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              U.S. National Debt
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The U.S. national debt stands at approximately $36.4 trillion as of 2025, with a debt-to-GDP ratio of around 122–125%. This debt has accumulated due to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Persistent budget deficits</li>
                <li>2008 financial crisis response</li>
                <li>COVID-19 pandemic spending</li>
                <li>Increased military and social spending</li>
              </ul>
            </div>
          </div>

          {/* European Debt Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              European National Debt
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The EU&apos;s general government gross debt was approximately €14.5 trillion (~$15.1 trillion USD) in Q3 2024, with an EU-wide debt-to-GDP ratio of 88.2% in the euro area and 81.0% for the EU.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">High-Debt Countries</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Greece: 158.2% debt-to-GDP</li>
                    <li>Italy: 136.3% debt-to-GDP</li>
                    <li>France: 113.8% debt-to-GDP</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Low-Debt Countries</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Estonia: 24.0% debt-to-GDP</li>
                    <li>Bulgaria: 24.6% debt-to-GDP</li>
                    <li>Germany: 62.4% debt-to-GDP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Taxation Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Taxation: Europe vs. U.S.
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">U.S. Taxation</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Overall Tax Burden: 25.81% of GDP</li>
                    <li>Federal Income Tax: 10% to 37%</li>
                    <li>Corporate Tax: 21% federal + state</li>
                    <li>No federal VAT</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">European Taxation</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Overall Tax Burden: 40-46% of GDP</li>
                    <li>Higher Personal Income Tax</li>
                    <li>Lower Corporate Tax Rates</li>
                    <li>VAT: 17-27% across EU</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI Solutions Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              AI as a Potential Solution
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                AI-driven productivity gains could help reduce debt burdens by boosting economic growth, but the impact depends on scale, adoption, and distribution.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Potential Benefits</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Could add $15.7T to global GDP by 2030</li>
                    <li>Higher tax revenues without rate increases</li>
                    <li>Reduced government operational costs</li>
                    <li>Innovation in key sectors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Limitations</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Long time lag for impact</li>
                    <li>Potential for increased inequality</li>
                    <li>High implementation costs</li>
                    <li>Job displacement risks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Inflation Risks Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Inflation Risks
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Context</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>U.S. CPI: ~3.0% (down from 9.1% in 2022)</li>
                    <li>EU Inflation: ~2.5% average</li>
                    <li>Housing: Median price ~$412,000</li>
                    <li>Food: +25% since 2020</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Risks</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Money printing effects</li>
                    <li>AI resource demand</li>
                    <li>Supply chain disruptions</li>
                    <li>Labor market changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin Hedge Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bitcoin as a Hedge
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Advantages</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Best performing asset in history</li>
                    <li>Limited supply (21M cap)</li>
                    <li>Decentralized control</li>
                    <li>Institutional adoption growing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Landscape</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Banks and governments embracing Bitcoin</li>
                    <li>Mining supports renewable energy</li>
                    <li>Growing market infrastructure</li>
                    <li>Increasing mainstream adoption</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <p className="text-lg text-yellow-400">
                  Bitcoin mining has evolved to become a solution for renewable energy, using surplus solar power during peak production periods. This innovative approach turns a perceived challenge into an environmental opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              A Personal Strategy: AI + Bitcoin
            </h3>
            <div className="space-y-8 text-gray-300">
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <p className="text-xl font-semibold text-yellow-400 italic mb-4">
                  In a world of rising debt and inflation, personal productivity and value preservation become paramount.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Leveraging AI for Productivity</h4>
                  <div className="space-y-4">
                    <p className="text-lg">
                      AI tools can be your force multiplier in a high-debt economy:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>20-40% productivity boost in key tasks</li>
                      <li>Automation of routine work</li>
                      <li>Access to high-demand skills</li>
                      <li>Income growth outpacing inflation</li>
                    </ul>
                    <div className="mt-4 p-4 bg-black/30 rounded-lg">
                      <p className="text-sm text-yellow-500/80">
                        Start with accessible tools like ChatGPT, Midjourney, or AI-driven IDEs. Focus on skills with high ROI: data analysis, prompt engineering, or automation scripting.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Storing Value in Bitcoin</h4>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Bitcoin offers a hedge against fiat devaluation:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Fixed supply of 21 million</li>
                      <li>Independent of central banks</li>
                      <li>Portfolio diversification</li>
                      <li>Store of your time and energy</li>
                    </ul>
                    <div className="mt-4 p-4 bg-black/30 rounded-lg">
                      <p className="text-sm text-yellow-500/80">
                        Consider allocating 5-10% of savings to Bitcoin, using secure hardware wallets and trusted exchanges. Monitor macro trends for optimal entry/exit points.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/30 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The Path Forward</h4>
                <p className="text-lg">
                  In a world where U.S. debt reaches $36.4 trillion and EU debt stands at $15.1 trillion, personal strategies matter more than ever. By combining AI-driven productivity with Bitcoin as a store of value, you can:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Outpace inflation through enhanced productivity</li>
                  <li>Preserve purchasing power against currency devaluation</li>
                  <li>Build skills that remain valuable in an AI-driven economy</li>
                  <li>Maintain financial sovereignty in a high-debt world</li>
                </ul>
                <p className="text-lg mt-4">
                  Remember: AI is your productivity multiplier, and Bitcoin is your hedge against the system. Together, they form a powerful strategy for navigating the challenges of our current economic landscape.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
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
