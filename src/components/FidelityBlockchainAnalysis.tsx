'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Brain, Coins, Globe, TrendingUp, Users, Calculator, BarChart3 } from 'lucide-react';

export default function FidelityBlockchainAnalysis() {
  return (
    <Card className="bg-[#18191c] border-[2px] sm:border-[3px] border-yellow-500 w-full max-w-[90rem] mx-auto shadow-[0_0_0_2px_rgba(247,181,0,0.7),0_4px_16px_0_rgba(247,181,0,0.18)] sm:shadow-[0_0_0_4px_rgba(247,181,0,0.7),0_8px_32px_0_rgba(247,181,0,0.18)]">
      <CardContent className="p-4 sm:p-10 md:p-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-epilogue font-bold text-yellow-500 tracking-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
            Fidelity&apos;s Blockchain Analysis Framework
          </h3>
          <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
        </div>

        <div className="space-y-6 sm:space-y-8 text-white/90">
          {/* Thesis Section */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              🧠 Thesis
            </h4>
            <p className="text-lg font-satoshi">
              Fidelity proposes that blockchains should be analyzed as <span className="text-yellow-400 font-bold">digital economies</span>, not merely as software or speculative instruments. This shift offers asset allocators a fundamentals-based framework—similar to analyzing traditional GDP—for evaluating crypto networks and their native currencies.
            </p>
          </div>

          {/* Currencies vs Tokens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-black/30 p-6 rounded-xl">
              <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
                <Coins className="h-6 w-6" />
                🪙 Currencies
              </h4>
              <ul className="text-lg font-satoshi space-y-2">
                <li>• Native to a blockchain (e.g., ETH on Ethereum)</li>
                <li>• Used to pay for core activities like gas fees</li>
                <li>• Functions as unit of account, medium of exchange</li>
                <li>• Potentially store of value</li>
              </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-xl">
              <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
                <Globe className="h-6 w-6" />
                🪙 Tokens
              </h4>
              <ul className="text-lg font-satoshi space-y-2">
                <li>• Built on top of a blockchain</li>
                <li>• May represent utility, governance, or revenue share</li>
                <li>• Often used within dApps</li>
                <li>• Not required to operate the base network</li>
              </ul>
            </div>
          </div>

          {/* Ethereum as Digital Economy */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <Globe className="h-6 w-6" />
              🌐 Ethereum as a Digital Economy
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Traditional Nation-State</h5>
                <ul className="text-base font-satoshi space-y-1">
                  <li>• Currency (e.g. USD)</li>
                  <li>• Central Bank sets monetary policy</li>
                  <li>• GDP measures final goods/services</li>
                  <li>• CPI for inflation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Blockchain</h5>
                <ul className="text-base font-satoshi space-y-1">
                  <li>• Cryptocurrency (e.g. ETH)</li>
                  <li>• Protocol-level issuance rules</li>
                  <li>• Activity = sum of on-chain transactions</li>
                  <li>• Gas price fluctuation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GDP-Like Framework */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              📊 GDP-Like Framework for Blockchains
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">1. Consumption</h5>
                <ul className="text-base font-satoshi space-y-1">
                  <li>• Gas fees (base layer, &quot;sales tax&quot;)</li>
                  <li>• dApp service fees (application layer)</li>
                  <li>• NFT mints and secondary sales</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">2. Government</h5>
                <ul className="text-base font-satoshi space-y-1">
                  <li>• ETH issuance to validators</li>
                  <li>• Grants from the Ethereum Foundation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">3. Investment</h5>
                <ul className="text-base font-satoshi space-y-1">
                  <li>• ETH staked (to secure the network)</li>
                  <li>• Liquidity in DEX pools</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">4. Net Exports</h5>
                <ul className="text-base font-satoshi space-y-1">
                  <li>• Value bridging in/out</li>
                  <li>• Stablecoin mints</li>
                  <li>• DePIN incentives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Demographics */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <Users className="h-6 w-6" />
              👥 Demographics = Wallet Activity
            </h4>
            <p className="text-lg font-satoshi mb-4">
              Like a real economy tracks population/workforce, digital economies profile:
            </p>
            <ul className="text-lg font-satoshi space-y-2">
              <li>• Wallet addresses (individual actors)</li>
              <li>• Roles (e.g., traders, builders, consumers)</li>
              <li>• Growth in active wallets = labor force growth</li>
              <li>• Smart contract creators pay more gas (like entrepreneurs)</li>
            </ul>
          </div>

          {/* Sectoral Diversification */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              🧩 Sectoral Diversification
            </h4>
            <p className="text-lg font-satoshi mb-4">
              Ethereum is economically resilient because it&apos;s not dependent on a single activity. Gas fees are distributed across:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-lg font-satoshi space-y-2">
                <li>• Finance (47%)</li>
                <li>• Trade (25%)</li>
              </ul>
              <ul className="text-lg font-satoshi space-y-2">
                <li>• Arts & Entertainment (6%)</li>
                <li>• Other (22%)</li>
              </ul>
            </div>
          </div>

          {/* ETH as Money */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              🧾 ETH as Money
            </h4>
            <p className="text-lg font-satoshi mb-4">
              Fidelity argues ETH fulfills monetary functions within its own economy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Unit of Account</h5>
                <p className="text-base font-satoshi">Everything priced in ETH</p>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Medium of Exchange</h5>
                <p className="text-base font-satoshi">74% of DEX volume in ETH pairs (2024)</p>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Store of Value</h5>
                <p className="text-base font-satoshi">Scarcity enforced via burn mechanisms</p>
              </div>
            </div>
          </div>

          {/* Important ETH Performance Note */}
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-red-400 font-bold mb-3">⚠️ Important ETH Context</h4>
            <p className="text-lg font-satoshi text-white/90">
              <span className="text-red-400 font-bold">Do not believe that Ethereum is some sort of value buy cause it hasn&apos;t gone up as much as Bitcoin.</span> What they don&apos;t tell you is that it&apos;s already up nearly <span className="text-yellow-400 font-bold">1,000,000% in 10 years</span> from its $0.30 ICO. It can still go up more. But you&apos;re very late to the trade.
            </p>
          </div>

          {/* Key Implication */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              🧠 Key Implication for Investors
            </h4>
            <p className="text-lg font-satoshi">
              Viewing Ethereum as a sovereign digital economy (rather than software) helps:
            </p>
            <ul className="text-lg font-satoshi space-y-2 mt-4">
              <li>• Evaluate ETH like a currency with monetary policy and fiscal activity</li>
              <li>• Build portfolios that factor in growth potential and store-of-value properties</li>
              <li>• Diversify exposures across traditional, commodity, and digital economies</li>
            </ul>
          </div>

          {/* Final Notes */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3">📌 Final Notes</h4>
            <p className="text-lg font-satoshi">
              This paper reframes crypto from a speculative lens to an economic fundamentals-based framework. It sets the stage for a more sophisticated approach to digital asset valuation, bridging macro investing principles with decentralized protocols.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 