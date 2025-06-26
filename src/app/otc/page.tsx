import { NextPage } from 'next';
import Head from 'next/head';

// As I couldn't read the italy page, I'm creating a new structure.
// Feel free to ask for changes.

const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
    <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-satoshi">{title}</h2>
    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
      {children}
    </div>
  </div>
);

const OTCPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>OTC Bitcoin Supply Analysis | MSTY</title>
        <meta name="description" content="Analysis of the dwindling OTC Bitcoin supply and its impact on institutional investment in 2025." />
      </Head>

      <div className="min-h-screen bg-black text-white font-satoshi">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="space-y-16">

            <div className="text-center space-y-8">
              <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Market Analysis • Institutional Trends • Supply Shock</p>
              <h1 className="text-center">
                <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                  OTC Supply Analysis
                </span>
              </h1>
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-24 bg-yellow-500/30"></div>
                <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Impending Bitcoin Supply Shock of 2025</p>
                <div className="h-px w-24 bg-yellow-500/30"></div>
              </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Key Points</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
                    <li>Research suggests OTC Bitcoin supply has dropped below 120,000 BTC by May 2025, potentially causing a supply shock.</li>
                    <li>It seems likely that depleted OTC supply will force institutional investors to buy on exchanges, possibly increasing prices.</li>
                    <li>The evidence leans toward higher volatility and price surges, though miner selling could temper this effect.</li>
                    <li>There is controversy around the exact impact, with some predicting significant price increases and others noting miner activity.</li>
                </ul>
            </div>
            
            <SectionCard title="Introduction: The Role of OTC Markets in Bitcoin Trading">
              <p>
                Bitcoin, the world&apos;s leading cryptocurrency, has evolved into a mainstream financial asset, attracting significant interest from institutional investors. A critical mechanism for these large-scale buyers has been the Over-the-Counter (OTC) market, where they can execute massive transactions discreetly without immediately impacting public exchange prices. OTC desks facilitate large, off-exchange trades, allowing institutions like hedge funds, corporations, and wealth funds to accumulate Bitcoin without causing significant market disruptions. However, in 2025, the supply of Bitcoin available on these OTC desks has plummeted, raising concerns about a potential supply shock and its implications for institutional investment strategies.
              </p>
            </SectionCard>

            <SectionCard title="Current State of OTC Bitcoin Supply">
              <p>
                Recent data and analyses indicate a significant decline in the available Bitcoin on OTC markets throughout 2025. As of May 2025, reports from sources like TheMarketPeriodical suggest that OTC desk holdings have dropped below 120,000 BTC, a stark contrast to the 480,000 BTC recorded in September 2021, as noted in TradingView News. Earlier in the year, February 2025 data from CoinEdition and Bitget News estimated OTC balances at around 140,000-146,000 BTC, indicating a consistent downward trend.
              </p>
              <p>
                By June 2025, X posts further corroborate this depletion. For instance, an X post by @Vivek4real_ on June 10, 2025 stated that Bitcoin on OTC desks had reached an all-time low, signaling an imminent supply shock. Similarly, @CarlBMenger on March 9, 2025 noted only ~146,000 BTC left, with major institutional buys expected to hit public exchanges soon. These figures, combined with the lack of more recent specific data, suggest that OTC supply has likely continued to decrease, potentially exacerbating the supply crunch.
              </p>
            </SectionCard>

            <SectionCard title="Implications for Institutional Investors">
              <p>
                The depletion of OTC Bitcoin supply has profound implications for institutional investors, who have historically relied on these markets for their large-scale purchases. With OTC supply dwindling, these investors, including companies like Strategy (formerly MicroStrategy) and sovereign wealth funds, will increasingly turn to public exchanges to acquire Bitcoin. This shift could reshape market dynamics in several ways:
              </p>
              <ul className="list-disc list-inside space-y-4 pl-4 mt-4">
                  <li>
                      <strong className="text-yellow-400">Increased Buying Pressure on Exchanges:</strong> Public exchanges have less liquidity compared to OTC markets, meaning large institutional orders can quickly move the market. For example, Cointelegraph reported in June 2025 that Bitcoin held on centralized exchanges had dropped to 2.5 million BTC, a level last seen in August 2022, indicating limited supply. Large buys on these exchanges could create significant upward pressure on Bitcoin&apos;s price, as noted in Crypto News Flash, which suggested that institutional demand could trigger price surges.
                  </li>
                  <li>
                      <strong className="text-yellow-400">Higher Volatility and Potential Price Surges:</strong> The shift to exchange-based buying could lead to increased volatility, as large transactions become more visible and impactful. Analysts predict that this supply-demand imbalance could drive Bitcoin prices higher, with some forecasting levels around $150,000 or more. For instance, CoinEdition in February 2025 predicted a price surge to $150,000 following OTC depletion, citing the potential for FOMO (fear of missing out) rallies if institutions buy directly from exchanges.
                  </li>
                  <li>
                      <strong className="text-yellow-400">Impact on Strategy and Wealth Funds:</strong> Companies like Strategy, which held 499,096 BTC as of February 2025, may face higher costs if forced to buy on exchanges. Their large orders could inadvertently drive up prices, increasing their cost basis, as highlighted in Blockchain.News. Similarly, wealth funds planning strategic Bitcoin reserves may find it more challenging to secure large quantities without affecting the market, potentially leading to higher premiums.
                  </li>
                  <li>
                      <strong className="text-yellow-400">Market Dynamics Change:</strong> Unlike OTC trades, which are private, transactions on public exchanges are transparent. This transparency could amplify market reactions, as smaller traders and retail investors react to large institutional buys, potentially triggering FOMO rallies or, conversely, FUD (fear, uncertainty, doubt) if there&apos;s a sudden sell-off. AInvest noted in February 2025 that this shift could make the market more dynamic and responsive, with institutional moves increasingly influencing prices.
                  </li>
              </ul>
            </SectionCard>

            <SectionCard title="Counterarguments and Miner Activity">
              <p>
                While the narrative of a supply shock is compelling, potential counterarguments exist, particularly regarding Bitcoin miner selling activity. Miners have been offloading their holdings in response to low hashprices and high operational costs, which could theoretically add supply to the market and mitigate some pressure from depleted OTC reserves. For example, CoinDesk reported in May 2025 that public miners sold more Bitcoin than they mined in April, liquidating 115% of their production, the highest ratio since 2022. Similarly, TheMinerMag in April 2025 noted increased selling as miners leaned on reserves to support operations.
              </p>
              <p>
                However, even with this selling, the overall supply of Bitcoin on exchanges remains low. Cointelegraph in June 2025 showed that exchange reserves had dropped to 2.5 million BTC, indicating that buying activity, particularly from institutions, is outpacing selling. Bitrue in April 2025 also noted that miner selling pressure had dropped to its lowest level since early 2024, historically followed by price rallies, suggesting that miner selling may not be sufficient to prevent potential price increases driven by OTC depletion.
              </p>
            </SectionCard>

            <SectionCard title="Market Outlook and Future Developments">
              <p>
                The depletion of OTC Bitcoin supply, combined with strong institutional demand, is setting the stage for a potential supply shock in 2025. Analysts predict that this could lead to significant price increases, but also increased volatility, as the market adjusts to the new dynamics. Blockchain.News in April 2025 suggested that the tightening liquidity environment could precede bullish momentum, while Crypto News Flash in February 2025 warned of possible price surges as OTC reserves dwindle.
              </p>
              <p>
                The market remains on a knife-edge, with the potential for both bullish rallies and sharp corrections depending on how institutional players navigate this new landscape. Investors and market participants should closely monitor on-chain data, exchange flows, and institutional activity to navigate this evolving situation. The Bitcoin market in 2025 is not just a story of price movements but a testament to the shifting dynamics of supply and demand in a maturing asset class.
              </p>
            </SectionCard>
          </div>
        </main>
      </div>
    </>
  );
};

export default OTCPage;
