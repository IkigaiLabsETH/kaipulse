'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, DollarSign, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TwentyOnePage() {
  const [counters, setCounters] = useState({
    btc: 0,
    usd: 0,
    marketCap: 0
  });
  
  useEffect(() => {
    const targetValues = {
      btc: 42000,
      usd: 4200000000,
      marketCap: 420000000000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        btc: Math.floor(targetValues.btc * progress),
        usd: Math.floor(targetValues.usd * progress),
        marketCap: Math.floor(targetValues.marketCap * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Treasury • Bitcoin-Native Finance • Public Markets</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Twenty One
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Bitcoin-native company with 42,000 BTC</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Bitcoin className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Bitcoin Holdings</h3>
              </div>
              <p className="text-center text-3xl font-bold">{counters.btc.toLocaleString()} BTC</p>
              <p className="text-center text-sm text-white/70 mt-2">Third-largest corporate holder</p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <DollarSign className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Capital Raise</h3>
              </div>
              <p className="text-center text-3xl font-bold">$585M</p>
              <p className="text-center text-sm text-white/70 mt-2">Convertible notes & PIPE</p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Market Cap</h3>
              </div>
              <p className="text-center text-3xl font-bold">${counters.marketCap.toLocaleString()}</p>
              <p className="text-center text-sm text-white/70 mt-2">Ticker: XXI</p>
            </div>
          </div>

          {/* Personal Note Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Market Analysis</h3>
            <div className="space-y-6 text-white/90">
              <p className="text-lg">
                Twenty One Capital ($CEP) has the highest chance of coming anywhere close to competing with MSTR for Bitcoin.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-yellow-500">Leadership Comparison</h4>
                  <p>Michael Saylor vs Jack Mallers for PR</p>
                  <p>Larry Fink vs Howard Lutnick for strategy</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-yellow-500">Market Position</h4>
                  <p>Looking forward to this.</p>
                  <p>Everyone else will have their mNAV pumps and dumps - but they have no chance when it comes to actual Bitcoin stack imo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Recent Developments</h3>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-500">Market Context</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Bitcoin surpasses $100K milestone in 2024</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Spot Bitcoin ETF approval driving institutional adoption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Fourth Bitcoin halving completed in April 2024</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-500">Strategic Position</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>42,000 BTC treasury position maintained</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Strong balance sheet with minimal debt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Focus on long-term Bitcoin accumulation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-6 bg-black/30 rounded-lg border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Opportunity</h4>
                <p className="text-white/90">
                  With Bitcoin&apos;s market cap reaching $2 trillion and institutional adoption accelerating, Twenty One Capital is well-positioned to capture significant value. The company&apos;s strategy of maintaining a large Bitcoin treasury while focusing on long-term value creation aligns perfectly with the current market dynamics and institutional demand.
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Genesis of Twenty One Capital</h3>
            <p className="text-white/90 text-lg mb-8">
              Twenty One Capital emerged through a strategic merger with Cantor Equity Partners (CEP), a special-purpose acquisition company (SPAC). This merger facilitates Twenty One&apos;s entry into the public market under the ticker symbol XXI. The company is set to launch with an impressive treasury of over 42,000 Bitcoin, positioning it as the third-largest corporate holder of Bitcoin globally, trailing only behind Strategy (formerly MicroStrategy) and Marathon Digital.
            </p>
          </div>

          {/* Innovation Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Bitcoin-Centric Metrics</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Bitcoin Per Share (BPS)</h4>
                <p className="text-white/90">
                  This metric represents the amount of Bitcoin each fully diluted share holds, offering shareholders a direct stake in the company&apos;s Bitcoin reserves.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Bitcoin Return Rate (BRR)</h4>
                <p className="text-white/90">
                  BRR measures the growth rate of BPS over time, effectively tracking the company&apos;s performance in accumulating Bitcoin.
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Partners Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Strategic Partnerships</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Tether</h4>
                <p className="text-white/90">Providing a substantial portion of the initial Bitcoin treasury</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">SoftBank Group</h4>
                <p className="text-white/90">Acquiring a significant minority stake in Twenty One Capital</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Bitfinex</h4>
                <p className="text-white/90">Contributing to the Bitcoin reserves and providing strategic support</p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Vision for Bitcoin-Native Finance</h3>
            <p className="text-white/90 text-lg mb-6">
              Under Jack Mallers&apos; leadership, Twenty One Capital envisions a future where financial services are inherently Bitcoin-centric. The company plans to develop a suite of Bitcoin-native financial products, including lending models and capital market instruments, to further integrate Bitcoin into the global financial system.
            </p>
            <div className="mt-6 p-6 bg-black/30 rounded-lg border border-yellow-500/20">
              <p className="text-white/90 italic">
                &ldquo;The mission is simple: to become the most successful company in Bitcoin, the most valuable financial opportunity of our time. We&apos;re not here to beat the market; we&apos;re here to build a new one.&rdquo;
              </p>
              <p className="text-white/70 mt-2">- Jack Mallers, Founder</p>
            </div>
          </div>

          {/* Market Outlook Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Market Reception</h3>
            <p className="text-white/90 text-lg mb-6">
              The announcement of Twenty One Capital has generated significant interest in the financial markets. Shares of Cantor Equity Partners surged by up to 462% following the merger news, reflecting investor enthusiasm for Bitcoin-focused ventures.
            </p>
            <p className="text-white/90 text-lg">
              As Bitcoin continues to gain mainstream acceptance, Twenty One Capital&apos;s innovative approach positions it as a potential leader in the Bitcoin-native financial sector. By offering investors direct exposure to Bitcoin through a publicly traded company, it bridges the gap between traditional finance and the burgeoning world of cryptocurrencies.
            </p>
          </div>

          {/* Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">The Strategy</h3>
            <p className="text-white/90 text-lg mb-6">
              The company believes in Bitcoin&apos;s long-term value proposition and is committed to holding its Bitcoin treasury for the long term. The strategy focuses on:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">Long-term Bitcoin accumulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">Secure custody solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">Bitcoin education and adoption</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Join the Bitcoin Revolution</h3>
            <p className="text-white/90 text-lg mb-8">
              Be part of the future of money. Learn more about Bitcoin and how Twenty One is shaping the future of finance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-none font-bold hover:bg-yellow-400 transition-colors duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 