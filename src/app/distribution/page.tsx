"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, TooltipItem } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const onChainDistributionData = {
  labels: [
    '10k–100k BTC',
    '1k–10k BTC',
    '100–1k BTC',
    '10–100 BTC',
    '1–10 BTC',
    '< 1 BTC',
  ],
  datasets: [
    {
      label: '% of Supply',
      data: [11.3, 22.5, 23.9, 21.7, 10.4, 5.2],
      backgroundColor: [
        '#F7B500',
        '#FBBF24',
        '#FCD34D',
        '#FDE68A',
        '#FEF3C7',
        '#FFFBEB',
      ],
      borderColor: '#1c1f26',
      borderWidth: 2,
    },
  ],
};

const ownershipBySectorData = {
  labels: [
    'Individuals',
    'Lost Coins',
    'Unmined',
    'Satoshi/Patoshi',
    'Funds / ETFs',
    'Businesses',
    'Miners',
    'Governments',
  ],
  datasets: [
    {
      label: '% Share',
      data: [57, 17.6, 6.6, 5.2, 3.9, 3.6, 3.4, 2.7],
      backgroundColor: [
        '#F7B500',
        '#6B7280', // Gray for lost coins
        '#9CA3AF', // Lighter gray for unmined
        '#FBBF24',
        '#FCD34D',
        '#FDE68A',
        '#FEF3C7',
        '#FFFBEB',
      ],
      borderColor: '#1c1f26',
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#D1D5DB', // text-gray-300
        font: {
          family: "'Satoshi', sans-serif",
        },
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<'doughnut'>) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed !== null) {
            label += context.parsed + '%';
          }
          return label;
        },
      },
    },
  },
};

const SectionSeparator = () => (
  <div className="w-full flex justify-center py-8">
    <div className="w-1/2 border-t border-yellow-500/30"></div>
  </div>
);

export default function DistributionPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          <header className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
              An Analysis of On-Chain Economics
            </p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Bitcoin Distribution
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
                A Data-Driven Tour of Who Holds BTC Today
              </p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </header>

          <section className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <p className="text-lg text-gray-300">
              Bitcoins supply is famously finite, yet its distribution is
              anything but evenly spread—and that asymmetry has profound
              economic and geopolitical consequences. Below is a data-driven
              tour of who holds BTC today, how that stacks up against the
              world&apos;s fiat elite, and what it all portends for the next market
              cycle.
            </p>
          </section>

          <SectionSeparator />

          {/* Section 1: Finite Supply */}
          <section>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              1. 21 Million Coins… Minus the Lost Ones
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Total supply cap: <strong>21 million BTC</strong>.
              </p>
              <p>
                Already mined: <strong>≈ 19 million</strong>.
              </p>
              <p>
                Lost forever:{' '}
                <strong>2.3 – 3.7 million BTC (11 – 18 % of max supply)</strong> due to
                forgotten keys, discard events, or deliberate burns.
              </p>
              <p>
                Yet to be mined:{' '}
                <strong>≈ 1.38 million BTC (6.6 %)</strong> —stretching out to
                ~2140 under current issuance rules.
              </p>
              <p className="mt-4 italic text-yellow-500/80">
                Once we subtract the lost coins, the effective circulating pool
                shrinks to roughly 17 million. Therefore scarcity is even
                tighter than the raw cap implies.
              </p>
            </div>
          </section>

          <SectionSeparator />

          {/* Section 2: On-Chain Distribution */}
          <section>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              2. The On-Chain Distribution: Whales Dominate
            </h2>
            <div className="space-y-8">
              <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] h-96 md:h-[500px] md:w-2/3">
                <Doughnut data={onChainDistributionData} options={chartOptions} />
              </div>
              <div className="text-gray-300 space-y-3">
                <p className="text-lg">
                  A mere 2,085 addresses (holding ≥ 1,000 BTC) command roughly
                  34% of all mined coins.
                </p>
                <p className="text-2xl italic text-yellow-500/80">
                  Decentralized protocol, centralized balances.
                </p>
              </div>
            </div>
          </section>
          
          <SectionSeparator />

          {/* Section 3: Ownership by Sector */}
          <section>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              3. Ownership by Sector
            </h2>
             <div className="space-y-8">
               <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] h-96 md:h-[500px] md:w-2/3">
                 <Doughnut data={ownershipBySectorData} options={chartOptions} />
               </div>
               <div className="text-gray-300 space-y-3">
                 <p className="text-lg">
                   Individuals includes plenty of small (sub-1 BTC) wallets, while ETFs and treasuries keep adding coins.
                 </p>
                 <p className="text-lg italic text-yellow-500/80">
                   Therefore institutional share is structurally set to rise as spot-ETF inflows outpace fresh miner issuance (≈ 450 BTC/day after the 2024 halving).
                 </p>
               </div>
             </div>
          </section>

          <SectionSeparator />
          
          {/* Section 4: BTC vs Global Wealth */}
          <section>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              4. BTC vs. Global Wealth Elites
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                    <CardHeader>
                        <CardTitle className="text-yellow-500 text-2xl">Millionaires (&gt;$1M)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-5xl font-bold text-white">0.30</p>
                        <p className="text-gray-400 mt-2">Max BTC Each*</p>
                        <p className="text-gray-500 text-sm mt-4">(≈ 56 M people)</p>
                    </CardContent>
                </Card>
                <Card className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                    <CardHeader>
                        <CardTitle className="text-yellow-500 text-2xl">Billionaires (&gt;$1B)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-5xl font-bold text-white">6,110</p>
                        <p className="text-gray-400 mt-2">Max BTC Each*</p>
                        <p className="text-gray-500 text-sm mt-4">(2,781 people)</p>
                    </CardContent>
                </Card>
                <Card className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                    <CardHeader>
                        <CardTitle className="text-yellow-500 text-2xl">Top Wallets (≥10 BTC)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-5xl font-bold text-white">0.24%</p>
                        <p className="text-gray-400 mt-2">of Wallets</p>
                        <p className="text-gray-500 text-sm mt-4">(133k addresses)</p>
                    </CardContent>
                </Card>
            </div>
            <p className="text-center mt-6 text-gray-400 text-sm">*Assumes 17 M effective circulating coins.</p>
            <p className="mt-8 text-lg text-center text-gray-300">There are already 4× more millionaires than spendable bitcoins. Wealthy newcomers can only acquire coins from existing holders; they cannot mint new ones. That supply-demand mismatch is turbocharged by ETFs that hoard BTC on behalf of millions of retail accounts.</p>
          </section>

          <SectionSeparator />

          {/* Section 5: Implications */}
          <section>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">5. Implications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: `Price Reflexivity`, text: `Bitcoins float is thin relative to potential demand. As whales hold or move to custodial cold storage, market liquidity tightens, therefore modest net inflows can push price disproportionately higher.` },
                    { title: `Wealth Inequality & Narrative Risk`, text: `Critics argue BTC ownership mirrors fiat wealth gaps. But on-chain transparency exposes concentration openly, therefore regulatory eyes (and taxation debates) intensify as balances consolidate into ETFs and nation-state treasuries.` },
                    { title: `Institutional Game Theory`, text: `Governments own ≈ 565k BTC today, mostly via seizures. But El Salvadors Bitcoin Treasury and the U.S. auction history show sovereigns can be price-makers, therefore policy decisions (custody release vs. hodl) will reverberate through markets.` },
                    { title: `Lost-Coin Scarcity Premium`, text: `The 2.3 – 3.7 M lost BTC are an unspoken burn but they reduce future sell pressure permanently, therefore every incremental demand shock magnifies.` },
                    { title: `ETF & Corporate Treasuries`, text: `Funds hold ~818k BTC; MicroStrategy alone has >592k BTC (2.7% of supply). But U.S. spot-ETFs saw >$12 B in net inflows within months of launch, therefore corporate & fund custody could surpass retail balances this cycle.` },
                    { title: `One-Whole-Coin Psychology`, text: `Only ≈ 950k addresses possess ≥ 1 BTC. But 56 M millionaires now compete for that badge of digital scarcity, therefore social status FOMO becomes a self-reinforcing marketing engine.` }
                ].map((item, index) => (
                    <Card key={index} className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                        <CardHeader>
                            <CardTitle className="text-yellow-500 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">{item.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </section>
          
          <SectionSeparator />

          {/* Section 6: Strategic Takeaways */}
          <section>
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">6. Strategic Takeaways</h2>
              <div className="space-y-4">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr>
                              <th className="border-b-2 border-yellow-500 p-4 text-yellow-500 uppercase">Stakeholder</th>
                              <th className="border-b-2 border-yellow-500 p-4 text-yellow-500 uppercase">Strategic Lens</th>
                          </tr>
                      </thead>
                      <tbody className="text-gray-300">
                          <tr className="border-t border-yellow-500/20">
                              <td className="p-4 font-bold">Retail saver</td>
                              <td className="p-4">Dollar-cost-average while float remains; custody locally to avoid custodial rehypothecation risk.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/20">
                              <td className="p-4 font-bold">Institutional allocator</td>
                              <td className="p-4">Treat BTC as a macro hedge vs. sovereign debt debasement; front-run regulatory green-lights.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/20">
                              <td className="p-4 font-bold">Policy-maker</td>
                              <td className="p-4">Decide whether to accumulate reserves or regulate liquidity drains; early-mover advantage is real.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/20">
                              <td className="p-4 font-bold">Builder / miner</td>
                              <td className="p-4">Layer-2 scaling (Lightning, Fedimints) and renewable-energy mining narratives will drive next adoption wave.</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>

          <SectionSeparator />

          {/* Section 7: Bottom Line */}
          <section className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">7. The Bottom Line: The Great Wealth Collision</h2>
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Bitcoin&apos;s digital scarcity is on a collision course with traditional wealth. While there are approximately <strong>22.8 million HNWIs</strong> (High-Net-Worth Individuals) with over $1 million in liquid assets, the supply of Bitcoin is profoundly limited.
              </p>
              <p>
                Consider the goal of owning 21 BTC—a one-in-a-million share of the total supply. Today, fewer than <strong>0.16%</strong> of Bitcoin addresses hold this amount. For a new investor to acquire 21 BTC with a standard 5% portfolio allocation (at ~$100k/BTC), they would need a net worth of over <strong>$42 million</strong>.
              </p>
              <p>
                Only a tiny fraction of the world&apos;s millionaires—roughly <strong>300,000 UHNWIs</strong> (Ultra-High-Net-Worth Individuals)—are in this bracket. This sets up a classic supply squeeze, where the potential demand from a sliver of the global elite could overwhelm the available float.
              </p>
              <p className="text-xl italic text-yellow-500/80 mt-6">
                The key takeaway is that the race for digital scarcity is intensifying. As institutional and private wealth awakens to this reality, the exclusivity of owning a significant stake in the network is set to increase exponentially.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
