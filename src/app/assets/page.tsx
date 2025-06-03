'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AssetsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What are the key generational asset preferences?",
      a: (
        <span>
          Each generation has shown distinct preferences:
          <br /><br />
          • Silent Generation: Gold during 1970s inflation
          <br />
          • Baby Boomers: S&P 500 and traditional stocks
          <br />
          • Gen X: Tech stocks (QQQ) and digital innovation
          <br />
          • Millennials/Gen Z: Bitcoin and cryptocurrencies
        </span>
      ),
    },
    {
      q: "How has Bitcoin performed historically?",
      a: (
        <span>
          Bitcoin&apos;s journey has been remarkable:
          <br /><br />
          • Launched in 2009, initially worthless
          <br />
          • Reached ~$20,000 in late 2017
          <br />
          • Peaked at ~$46,000 by end-2021
          <br />
          • Fell to ~$30K in 2022
          <br />
          • Recovered to ~$42K by end-2023
        </span>
      ),
    },
    {
      q: "What is the current wealth distribution across generations?",
      a: (
        <span>
          As of 2022, total US assets were ~$156 trillion:
          <br /><br />
          • Baby Boomers: ~50% ($78.1T)
          <br />
          • Gen X: ~29.5% ($46T)
          <br />
          • Silent Generation: ~11.9% ($18.6T)
          <br />
          • Millennials: ~8.5% ($13.3T)
        </span>
      ),
    },
    {
      q: "What is the expected wealth transfer?",
      a: (
        <span>
          Major intergenerational transfer is expected:
          <br /><br />
          • Knight Frank projects up to $90T transfer by 2044
          <br />
          • Merrill/Cerulli estimates $124T by 2048
          <br />
          • Majority going to Gen X/Millennials
          <br />
          • Significant impact on future asset preferences
        </span>
      ),
    },
    {
      q: "What is the outlook for crypto adoption?",
      a: (
        <span>
          Strong growth indicators:
          <br /><br />
          • 49% of Millennials comfortable with crypto
          <br />
          • 72% of young investors seek alternatives to stocks/bonds
          <br />
          • Over half of crypto holders under 44 allocate 33%+ to crypto
          <br />
          • Institutional adoption increasing
          <br />
          • Regulatory changes enabling broader access
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Generational Wealth • Asset Evolution • Market Cycles</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Asset Evolution
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Understanding Generational Asset Preferences</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Historical Performance Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Historical Performance Across Generations
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Across decades, each generation&apos;s favored asset class has seen distinct boom–bust cycles. Gold exploded during 1970s inflation – reaching a record high of about $850/oz in January 1980 – before slumping thereafter. The S&P 500 enjoyed a multi-decade bull market: after the 2008–09 recession it steadily climbed, closing near 3,230 in 2019, briefly plunging in March 2020, then surging to ~4,766 by late 2021. The Nasdaq-100 (QQQ ETF), heavy in tech stocks, rallied from about $100 in 2000 to over $400 by 2023.
              </p>
              <p className="text-lg">
                Bitcoin, launched in 2009, was essentially worthless initially, then skyrocketed to roughly $20,000 in late 2017 and to about $46,000 by end-2021, before falling back (around $30K in 2022) and partially recovering to ~$42K by end-2023.
              </p>
              <p className="text-lg">
                Each asset&apos;s historical peak reflects its generation&apos;s coming-of-age: gold peaked in the Silent Generation&apos;s later years, the S&P 500 crested during Boomers&apos; peak-earning decades, QQQ rallied in Gen X&apos;s mid-career tech boom, and Bitcoin&apos;s highs coincide with Millennials/Gen Z reaching investing age.
              </p>
            </div>
          </div>

          {/* Generational Analysis Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Silent Generation & Baby Boomers
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Silent Generation (born ~1928–1945) valued safe, tangible assets like gold, especially during the inflationary 1970s. Growing up in the Depression and World War II, this cohort valued safe, tangible assets. During the inflationary 1970s their preference for gold paid off: many invested heavily in bullion as a hedge.
                </p>
                <p className="text-lg">
                  Baby Boomers (born ~1946–1964) benefited from postwar growth and financial deregulation, heavily investing in equities and consumer stocks. They poured into equities and consumer stocks, riding 1980s–90s bull markets. By the 2010s–20s, boomers held much of the stock market&apos;s wealth; surveys find boomers overwhelmingly favor stocks and bonds over alternatives.
                </p>
              </div>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Gen X & Millennials
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Gen X (born ~1965–1980) embraced tech stocks during the Internet boom. This tech-savvy generation embraced companies like Microsoft, Apple and Amazon early on. Comfort with new technology and entrepreneurship led many Gen Xers to favor growth-oriented tech stocks, which is reflected in QQQ&apos;s performance.
                </p>
                <p className="text-lg">
                  Millennials (born ~1981–1996) witnessed the 2008 crisis and are digital natives, showing strong affinity for cryptocurrencies and fintech solutions. Bankrate finds 49% of Millennials are &quot;comfortable&quot; with crypto (versus 22% of Boomers). Among crypto holders under 44, over half allocate at least one-third of their portfolio to crypto.
                </p>
              </div>
            </div>
          </div>

          {/* Wealth Distribution Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Wealth Distribution & Future Transfer
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                As of 2022, Americans held roughly $156 trillion in assets, with Baby Boomers controlling about half (~$78.1T or ~50%). The distribution shows Gen X at ~29.5% ($46T), Silent Generation at ~11.9% ($18.6T), and Millennials at only ~8.5% ($13.3T).
              </p>
              <p className="text-lg">
                A massive intergenerational transfer is expected, with Knight Frank projecting up to $90 trillion passing to younger generations by 2044. Merrill/Cerulli estimates total transfer of $124 trillion by 2048, with roughly $106T going to Gen X/Millennials.
              </p>
            </div>
          </div>

          {/* Future Outlook Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Millennials, Bitcoin, and Future Markets
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Millennials&apos; tilt toward cryptocurrency is reshaping markets. Bitwise Asset Management forecasts 2025 as a &quot;Golden Age of Crypto,&quot; with Bitcoin potentially topping $200,000. Regulatory changes and institutional adoption are expected to channel significant new capital into digital assets.
              </p>
              <p className="text-lg">
                Surveys by BlackRock/WEF show millennials are already placing large portfolio shares in crypto, implying continued inflows. If these trends continue, markets may see rising correlations between digital assets and equities, potentially leading to higher asset price volatility but also greater mainstream adoption.
              </p>
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
                      "w-6 h-6 text-yellow-500 transition-transform duration-200",
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
