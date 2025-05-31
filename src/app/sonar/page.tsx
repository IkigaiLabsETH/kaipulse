'use client';

export default function SonarPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Token Sales • Equity Analysis • Market Dynamics</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Sonar
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Analyzing Plasma&apos;s XPL Public Sale</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Sonar Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Understanding Sonar: The New ICO Rail
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Plasma&apos;s upcoming debut on <span className="text-yellow-500 font-semibold">Sonar</span> — the freshly-launched ICO rail from Echo, Cobie&apos;s invite-only angel-investment platform — signals a pivotal evolution in how early-stage crypto projects court capital and community. Sonar promises broader retail access but still roots long-term economic upside in traditional equity, therefore understanding its mechanics, incentives and constraints is essential before aping in.
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">1. What Exactly Is Sonar?</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-yellow-500/90">1.1 Origin and Ownership</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Echo began in 2023 as a private, on-chain cap-table for angels and builders, founded by renowned trader Jordan &quot;Cobie&quot; Fish.</li>
                    <li>In February 2025 Echo teased &quot;Sonar,&quot; a public-sale module designed to let any project spin up an ICO without running custodial order books.</li>
                    <li>The module quietly shipped this week, positioning Echo as a one-stop stack: private rounds on Echo, public rounds on Sonar, all governed by the same identity, KYC and settlement rails.</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-yellow-500/90">1.2 Why &quot;ICO 2.0&quot;?</h5>
                  <p className="text-lg">
                    Sonar eschews the first-come-first-served chaos of 2017 ICOs. Its smart-contract vault model allocates tokens by time-weighted deposits, dampening whale gas-war advantages but still rewarding early conviction.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">2. Mechanics Under the Hood</h4>
                <ol className="list-decimal list-inside space-y-4">
                  <li><span className="font-semibold">Pre-deposit phase</span> – Users stream stable-coins into the vault; each block updates a time-weighted balance.</li>
                  <li><span className="font-semibold">Vault lock</span> – At cut-off, positions freeze; whale last-minute snipes are neutralised.</li>
                  <li><span className="font-semibold">Mainnet-beta event</span> – Vault balances bridge to Plasma; tokens become withdrawable, bridge risk now resides on retail.</li>
                  <li><span className="font-semibold">Secondary markets</span> – Circulating float projected at 25–50% on day 1, implying $125–250M free-float at list.</li>
                </ol>
                <p className="text-lg mt-4">
                  This flow feels fairer than gas-war drops, but the mandatory lock-ups, especially the 12-month U.S. cliff, tilt tradability toward non-U.S. wallets – therefore price discovery may skew global.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">3. Compliance & Jurisdiction</h4>
                <ul className="list-disc list-inside space-y-4">
                  <li>KYC / AML embedded via Echo&apos;s identity layer; UK residents outright blocked due to evolving FCA token-sale rules.</li>
                  <li>U.S.-only year-long vesting is a hedge against SEC scrutiny after the Terraform and Stoner Cats rulings.</li>
                  <li>Sanction screening outsourced to on-chain oracle service Veda Labs, ensuring Sonar doesn&apos;t custody funds from embargoed addresses.</li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">4. Strategic Outlook</h4>
                <p className="text-lg">
                  Sonar represents a middle path between rug-prone decentralized launches and VC-only cap tables. It gives Cobie&apos;s 600k-follower reach a compliant funnel for retail, but still lets founders and VCs keep the fattest pies, therefore it is likely to attract quality projects that want hype without surrendering economics. Expect copy-cat &quot;vault auctions&quot; on other launchpads within months.
                </p>
              </div>
            </div>
          </div>

          {/* TL;DR Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              TL;DR
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <a href="https://app.plasma.to/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition-colors">Plasma</a>&apos;s upcoming XPL public sale on Cobie&apos;s new Sonar platform looks retail-friendly at first glance—pricing 10% of supply at the same $500 million fully-diluted valuation (FDV) as its latest Founders Fund equity round—but the deal actually reinforces a broader &quot;equity-captures-value, token-captures-community&quot; meta that&apos;s been gathering steam since Hyperliquid&apos;s launch last year. Retail may enjoy a short-term pop, but equity holders remain the long-term economic winners, therefore understanding where cash-flow, control, and regulatory risk really sit is critical before you click &quot;deposit.&quot;
              </p>
            </div>
          </div>

          {/* What Plasma Is Selling Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              1 | What Plasma Is Selling
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-4">
                <li><a href="https://www.plasma.to/about" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition-colors">Plasma</a> is building a stable-coin–optimised L1 and just raised an undisclosed amount from Founders Fund at a $500 million equity valuation.</li>
                <li>It now proposes to sell 10% of the XPL token supply—again at a $500 million FDV—via a two-week-long Sonar vault campaign.</li>
                <li>Retail users deposit stablecoins into an Ethereum vault; their time-weighted share of deposits determines allocation when the vault locks just before main-net beta. Tokens bridge to Plasma and become withdrawable on launch.</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">1.1 Why Sonar Matters</h4>
                <p className="text-lg">
                  Sonar is Echo&apos;s new public-sale rails; Plasma will be its first live test, marking a transition from Echo&apos;s private-round focus to a quasi-&quot;ICO 2.0.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* The Hyperliquid Playbook Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              2 | The &quot;Hyperliquid Playbook&quot;
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Hyperliquid showed that you can electrify a user base by giving tokens away or selling them cheaply while keeping economic levers elsewhere:
              </p>
              <ul className="list-disc list-inside space-y-4 mt-4">
                <li>70% of HYPE supply went to the community, driving an 84% price surge during the airdrop period.</li>
                <li>Yet no cash flow is routed to HYPE, and control remains with the core team via burn/buyback funds. This tension is now being copied.</li>
              </ul>
              <p className="text-lg mt-4">
                Plasma adopts a milder version—far lower community allocation but an attractive headline FDV—to generate similar buzz but still protect cap-table economics for equity investors.
              </p>
            </div>
          </div>

          {/* Equity vs Token Value Capture Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              3 | Equity vs. Token Value Capture
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Equity Investors</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Own residual cash flows and IP</li>
                    <li>Future Layer-1 sequencer fees</li>
                    <li>SaaS-like revenue from Plasma</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Token Holders</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Receive governance and utility</li>
                    <li>No guaranteed cash flow</li>
                    <li>Matches &quot;governance token with zero value-accrual&quot; pattern</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg mt-6">
                Legal bloggers note a growing wave of founders &quot;selling VCs equity while retail buys governance tokens that accrue nothing,&quot; and warn it creates mismatched expectations.
              </p>
              <p className="text-lg">
                Outerlands Capital frames the issue starkly: unless a token controls economic parameters, governance alone rarely translates into price appreciation.
              </p>
            </div>
          </div>

          {/* Mechanics of the Sonar Vault Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              4 | Mechanics of the Sonar Vault
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-4">
                <li>Time-weighted deposits mean whales cannot front-run small wallets on the final block.</li>
                <li>Bridging on launch introduces smart-contract and bridge risk that falls entirely on retail, not on the equity investors who will likely receive direct token allocations.</li>
                <li>25–50% circulating supply at launch (per Plasma&apos;s Discord hints) would put float at $125–250 million; a quick 5-10× pop is feasible in a bull tape but also increases downside once hype fades.</li>
              </ul>
            </div>
          </div>

          {/* The Retail Math Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              5 | The Retail Math
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b border-yellow-500/30">
                      <th className="py-4 px-6 text-left">Scenario</th>
                      <th className="py-4 px-6 text-left">Launch FDV</th>
                      <th className="py-4 px-6 text-left">Float</th>
                      <th className="py-4 px-6 text-left">If price 5×</th>
                      <th className="py-4 px-6 text-left">If price -60%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-yellow-500/30">
                      <td className="py-4 px-6">Low float (25%)</td>
                      <td className="py-4 px-6">$500m</td>
                      <td className="py-4 px-6">$125m</td>
                      <td className="py-4 px-6">$625m gain</td>
                      <td className="py-4 px-6">-$75m loss</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">High float (50%)</td>
                      <td className="py-4 px-6">$500m</td>
                      <td className="py-4 px-6">$250m</td>
                      <td className="py-4 px-6">$1.25b gain</td>
                      <td className="py-4 px-6">-$150m loss</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg mt-6">
                Therefore the pop many traders expect is mathematically plausible, but downside is equally magnified once the bridge unlocks.
              </p>
            </div>
          </div>

          {/* Governance Reality Check Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              6 | Governance Reality Check
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                New Fed research shows tokenised platforms often keep shareholder governance, relegating tokens to utility without control.
              </p>
              <p className="text-lg">
                VC-heavy treasuries can entrench this asymmetry by airdropping insiders extra governance tokens post-sale, ensuring de-facto veto power.
              </p>
            </div>
          </div>

          {/* Regulatory Lens Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              7 | Regulatory Lens
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-4">
                <li>The SEC&apos;s crypto task-force continues to treat many public-token launches as securities offerings—Kik&apos;s Kin remains the poster child.</li>
                <li>Chair Paul Atkins signalled new rules are coming but reiterated that investor-protection principles will stay.</li>
                <li>Legal memos to the task-force stress that tokens integral to network functionality might avoid security status, but governance-only tokens face higher risk—exactly Plasma&apos;s current design.</li>
                <li>Founders Fund&apos;s equity buy-in does not shield token buyers from potential enforcement; Hyperliquid&apos;s VC-free model avoids this, illustrating divergent regulatory calculations.</li>
              </ul>
            </div>
          </div>

          {/* My Take Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              8 | My Take—Brutally Honest
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-4">
                <li><span className="text-yellow-500">Good:</span> Retail gets in at the same headline valuation as a top-tier VC, an improvement over 2020-2022 dumping grounds.</li>
                <li><span className="text-yellow-500">Bad:</span> Economic rights still sit with equity; without an explicit fee-share or burn-mechanism, XPL risks becoming a pure &quot;attention token.&quot;</li>
                <li><span className="text-yellow-500">Ugly:</span> Bridge and unlock timing place risk of smart-contract failure squarely on retail shoulders while insiders remain in safer SAFEs/SAsfts.</li>
                <li><span className="text-yellow-500">Therefore:</span> For a short-term momentum trade, the setup is attractive; for a long-term investment, demand hard answers on revenue-sharing, buy-backs, or protocol fee routing—and be ready for SEC clarification that could retroactively classify governance tokens as securities.</li>
              </ul>
            </div>
          </div>

          {/* Key Takeaways Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              9 | Key Takeaways
            </h3>
            <div className="space-y-4 text-gray-300">
              <ol className="list-decimal list-inside space-y-4">
                <li><span className="font-bold">Same FDV ≠ Same Instrument</span> – Equity carries legal ownership and cash-flow rights; the token does not.</li>
                <li><span className="font-bold">Community-First Narrative Works—Until It Doesn&apos;t</span> – Hyperliquid&apos;s surge showed the power of generous allocations, but value capture still depends on tokenomics.</li>
                <li><span className="font-bold">Regulation Is the Wild Card</span> – Any retail-heavy sale at U.S. scale will land on the SEC&apos;s radar.</li>
                <li><span className="font-bold">Ask the Two-Step Question</span> – Where does revenue accrue? Who controls future issuance? If both answers point to the cap table, the token is probably just marketing.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
