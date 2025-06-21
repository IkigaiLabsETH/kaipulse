"use client";

import PriceTicker from '@/components/Gold';

// Custom component for styled sections
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
    <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
      {title}
    </h3>
    <div className="space-y-4 text-gray-300">
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-4">
        <h4 className="text-xl font-bold text-yellow-500">{title}</h4>
        <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="text-white/80 font-satoshi space-y-4">
                {children}
            </div>
        </div>
    </div>
);

const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-yellow-500/10">
                    <th className="p-4 border border-yellow-500/20">Attribute</th>
                    <th className="p-4 border border-yellow-500/20">Gold</th>
                    <th className="p-4 border border-yellow-500/20">Bitcoin</th>
                </tr>
            </thead>
            <tbody>
                {[
                    { attr: 'Scarcity', gold: 'Scarce, but supply can increase through mining (no fixed limit).', btc: 'Fixed supply of 21 million coins, absolutely scarce.' },
                    { attr: 'Durability', gold: 'Does not corrode, lasts indefinitely as a physical asset.', btc: 'Digital, exists as long as the blockchain network operates.' },
                    { attr: 'Portability', gold: 'Heavy and cumbersome for large quantities, less practical for transport.', btc: 'Digital, can be transferred instantly worldwide via the internet.' },
                    { attr: 'Divisibility', gold: 'Can be divided, but physical division is cumbersome.', btc: 'Highly divisible into satoshis (100 million per bitcoin).' },
                    { attr: 'Fungibility', gold: 'All gold is identical, fully fungible.', btc: 'All bitcoins are identical, though "tainted coins" can affect fungibility.' },
                    { attr: 'Acceptability', gold: 'Widely accepted globally for thousands of years, recognized as valuable.', btc: 'Gaining acceptance, but not yet as widespread as gold.' },
                    { attr: 'Volatility', gold: 'Less volatile, with smaller price swings, suitable for conservative investors.', btc: 'Highly volatile, with large price swings, riskier for investors.' },
                    { attr: 'Regulatory Risk', gold: 'Generally not subject to regulatory risk as a physical asset.', btc: 'Subject to regulatory risk, with potential for government restrictions.' },
                    { attr: 'Industrial Uses', gold: 'Used in electronics, dentistry, and other industries, adding intrinsic value.', btc: 'No industrial uses, value is purely as a digital asset.' },
                    { attr: 'Network Effect', gold: 'Value not dependent on a network, intrinsic to the metal.', btc: 'Value increases with more users, enhancing utility as a medium of exchange.' },
                    { attr: 'Energy Consumption', gold: `Mining requires energy, but less discussed than bitcoin&apos;s energy use.`, btc: 'Mining is energy-intensive, raising environmental concerns.' },
                    { attr: 'Censorship Resistance', gold: 'Physical gold can be confiscated by authorities.', btc: 'Can be held in self-custody, resistant to censorship if properly secured.' },
                ].map((item, index) => (
                    <tr key={index} className="bg-black/20">
                        <td className="p-4 border border-yellow-500/20 font-bold text-yellow-400">{item.attr}</td>
                        <td className="p-4 border border-yellow-500/20">{item.gold}</td>
                        <td className="p-4 border border-yellow-500/20">{item.btc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


export default function GoldPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Hard Money • Store of Value • Digital Gold</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Gold vs Bitcoin
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">An Analysis of Hard Money in the Digital Age</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <PriceTicker />
          </div>

          <Section title="Key Points">
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Research suggests gold and bitcoin both serve as hard money, with gold offering stability and bitcoin showing higher recent growth.</li>
              <li>It seems likely that bitcoin has outperformed gold since 2020, with an 808% increase versus gold&apos;s 65%, though gold has a longer history.</li>
              <li>The evidence leans toward bitcoin being more volatile, while gold is less risky for conservative investors.</li>
              <li>Controversy exists on which is better, depending on risk tolerance and investment goals, with no clear winner for all.</li>
            </ul>
          </Section>

          <Section title="Gold vs Bitcoin Overview">
            <p className="text-lg">
              Gold and bitcoin are both considered hard money assets, meaning they hold intrinsic value and are not easily debased like fiat currencies. Gold has been a store of value for thousands of years, known for its stability and wide acceptance, especially during economic uncertainty. Bitcoin, a newer digital asset, has gained traction as &quot;digital gold&quot; due to its fixed supply and recent price surges, particularly since 2020. The choice between them depends on your risk tolerance, with gold being less volatile and bitcoin offering higher potential returns but with greater risk.
            </p>
          </Section>

          <div className="grid md:grid-cols-2 gap-8">
            <Section title="Performance Since 2020">
              <p>
                Since August 2020, bitcoin has seen a significant rise, with prices increasing by about 808%, from around $11,720 to $106,418.98 as of June 20, 2025. Gold, on the other hand, has increased by approximately 65%, from a peak of $2,067.15 in August 2020 to $3,369.95 currently. This shows bitcoin&apos;s stronger recent performance, though gold&apos;s growth is still notable, especially for those seeking stability.
              </p>
            </Section>
            <Section title="Investment Considerations">
                <p>
                    Gold is favored for its lower volatility and industrial uses, making it suitable for conservative investors. Bitcoin, while offering higher returns, is more volatile and subject to regulatory risks, which might deter risk-averse individuals. The text suggests bitcoin hodlers (long-term holders) have been top performers, but this comes with higher risk compared to gold&apos;s steady track record.
                </p>
            </Section>
          </div>

          <Section title="Survey Note: Deep Research on Gold vs Bitcoin as Hard Money Assets">
            <div className="space-y-8">
                <SubSection title="Introduction">
                    <p>
                        Hard money assets are those with intrinsic value, resistant to inflation and debasement by central authorities. Gold has long been recognized as a traditional hard money asset, while bitcoin, often called &quot;digital gold,&quot; has emerged as a modern contender. The provided text highlights their performance since 2020, suggesting bitcoin&apos;s superiority, but a deeper look reveals nuanced differences. This note will explore their merits, verify claims, and provide a balanced perspective.
                    </p>
                </SubSection>
                <SubSection title="Verifying Claims from the Provided Text">
                    <p>The text makes several claims about performance since 2020, which we will verify using historical data:</p>
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            <strong>Gold&apos;s Performance Since August 2020 (Claim: Up 65%):</strong> Historical data shows gold&apos;s price reached $2,067.15 per ounce on August 6, 2020, and is currently at $3,369.95 as of June 20, 2025. The percentage increase is approximately 63.02%. This is close to the claimed 65%, suggesting the author used the peak price in August 2020 as the starting point, which is reasonable for performance metrics.
                        </li>
                        <li>
                            <strong>Long-Term US Treasuries&apos; Performance Since 2020 (Claim: Lost 42% Value):</strong> Using the iShares 20+ Year Treasury Bond ETF (TLT) as a proxy, the price decreased from $140.65 on January 1, 2020 to $86.50 on June 20, 2025. This is a decrease of approximately 38.51%, close to the 42% claim.
                        </li>
                        <li>
                            <strong>Bitcoin&apos;s Performance Since August 2020 (Claim: Up 808%):</strong> From $11,720 in August 2020 to $106,418.98 on June 20, 2025, the increase is approximately 808%, matching the claim exactly.
                        </li>
                        <li>
                            <strong>Bitcoin&apos;s Performance for COVID Panic Buyers (Claim: Up 1,884%):</strong> Those who bought during the March 2020 panic (low of $3,858) would be up approximately 2,711%. The claim of 1,884% might be based on a specific date or intraday price but appears slightly off.
                        </li>
                    </ul>
                </SubSection>
                <SubSection title="Characteristics of Gold and Bitcoin as Hard Money Assets">
                   <ComparisonTable />
                </SubSection>
                <SubSection title="Performance Analysis Since 2020">
                    <p>The provided text emphasizes bitcoin&apos;s outperformance since 2020, which is supported by data:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Bitcoin:</strong> Up 808% since August 2020, from $11,720 to $106,418.98, showcasing its potential as a high-growth asset.</li>
                        <li><strong>Gold:</strong> Up approximately 63-65% since August 2020, from $2,067.15 to $3,369.95, reflecting steady growth but less dramatic than bitcoin.</li>
                        <li><strong>Long-Term US Treasuries:</strong> A 38.51% decrease since January 2020, aligning with the text&apos;s claim of a 42% loss, indicating poor performance in a rising interest rate environment.</li>
                    </ul>
                    <p className="mt-4">The text also notes that bitcoin hodlers who bought during the COVID panic (March 2020) are up 1,884%, though our calculations suggest a higher figure (around 2,711% from the low of $3,858), indicating possible variation in data sources or dates used.</p>
                </SubSection>
                <SubSection title="Context of Debt Cycles and Fiat Debasement">
                    <p>The text argues that during the conclusion of debt cycles, when fiat currencies are debased through money printing, hard money assets like gold and bitcoin regain prominence. This is because:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Fiat currencies lose purchasing power during inflation, driven by government debt expansion.</li>
                        <li>Gold has historically been a hedge, with prices rising during economic crises (e.g., 2008, COVID-19).</li>
                        <li>Bitcoin, with its fixed supply, is seen as a &quot;digital gold,&quot; potentially offering similar protection but with higher volatility and growth potential.</li>
                    </ul>
                </SubSection>
                <SubSection title="Counterarguments and Balanced View">
                    <p>While the text favors bitcoin, counterarguments highlight:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Gold&apos;s Advantages:</strong> Long history (thousands of years vs. bitcoin&apos;s 15 years), lower volatility, and industrial uses. It is more suitable for risk-averse investors seeking stability.</li>
                        <li><strong>Bitcoin&apos;s Drawbacks:</strong> High volatility (e.g., large price swings), regulatory uncertainty (potential bans or restrictions), and energy-intensive mining, raising environmental concerns.</li>
                        <li><strong>Gold&apos;s Drawbacks:</strong> Less portable and divisible compared to bitcoin, with supply potentially increasing through mining, though at a slow rate.</li>
                        <li><strong>Bitcoin&apos;s Strengths:</strong> Digital scarcity, portability, and censorship resistance, appealing to those seeking modern, decentralized assets.</li>
                    </ul>
                </SubSection>
                <SubSection title="Investment Implications">
                    <p>The choice between gold and bitcoin depends on individual preferences:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Gold</strong> is better for investors valuing stability, a proven track record, and lower risk. It is less volatile and widely accepted, making it a reliable hedge against inflation.</li>
                        <li><strong>Bitcoin</strong> appeals to those prioritizing high growth potential, digital scarcity, and portability. However, its volatility and regulatory risks make it unsuitable for conservative investors.</li>
                    </ul>
                     <p className="mt-4">The text&apos;s claim that bitcoin hodlers are the best investors of the 2010s and 2020s is supported by its price performance, but this comes with higher risk compared to gold&apos;s steady appreciation.</p>
                </SubSection>
                <SubSection title="Conclusion">
                    <p>
                        Both gold and bitcoin can be considered hard money assets, but they cater to different investor needs. Gold offers stability and a long history, while bitcoin provides digital scarcity and higher recent returns. Since 2020, bitcoin has outperformed gold, but its volatility and regulatory risks are significant. Investors should consider their risk tolerance, investment horizon, and economic context when choosing, as both may play roles as fiat systems face increasing scrutiny.
                    </p>
                </SubSection>
            </div>
          </Section>

          <Section title="The Inevitable Conclusion">
            <div className="space-y-6 text-lg text-gray-300">
                <p>
                    Here&apos;s the funny thing about gold...
                </p>
                <p>
                    No one does gold near the end of a big debt cycle. Because by that point, everyone has made so much money on limitless debt expansion, that they completely forget the importance of hard money.
                </p>
                <p>
                    It&apos;s only when the debt bonanza reaches its inevitable conclusion that hard money regains its status as the &quot;must have&quot; asset. We are already at the early stages of that conclusion.
                </p>
                <p>
                    The smart investors figured it out in 2020. Just look at Gold vs. long term US Treasuries. They used to move in lockstep until summer of 2020. That&apos;s when the US debt crisis became a simple matter of time.
                </p>
                <p>
                    Gold is up 65% since then. Meanwhile, long term treasuries have lost 42% of their value vs. the dollar, which itself has been hideously debased in purchasing power terms since 2020.
                </p>
                <p>
                    Bitcoin, the emerging hard money standard, is up 808% since August 2020. And the hodlers who bought the covid panic because they understood where this was headed are up 1,884% on Bitcoin.
                </p>
                <p className="font-bold text-yellow-400 italic">
                    So as hard as it is for the very serious professionals to admit... Bitcoin hodlers are the best investors of the 2010&apos;s and 2020&apos;s.
                </p>
                <p>
                    So maybe it&apos;s a good idea to listen to the ones with an accurate track record of spelling out exactly what&apos;s going to happen. They see that the fiat games are reaching their inevitable conclusion. And that someday soon hard money is the only investment thesis that will matter.
                </p>
                <p className="text-xl font-bold text-white mt-8">
                    So you may not do Bitcoin now... But you will.
                </p>
                <p className="italic">
                    And you don&apos;t need a crystal ball to see that; just a history book.
                </p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

