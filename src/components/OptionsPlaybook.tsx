"use client";

import React, { useState } from 'react';
import { Checkbox } from "./ui/checkbox";
import { Label } from "@/components/ui/label";

// Reusable component for each section of the playbook
const PlaybookSection = ({ title, number, children }: { title: string, number: number, children: React.ReactNode }) => (
    <div className="bg-[#1c1f26] p-8 md:p-10 rounded-none border-2 border-yellow-500/80 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.8)] mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue flex items-center">
            <span className="text-4xl mr-4">§{number}</span> {title}
        </h3>
        <div className="space-y-6 text-gray-300 font-satoshi border-t border-yellow-500/20 pt-6 text-base">
            {children}
        </div>
    </div>
);

const TickerTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-yellow-500/30">
                    <th className="p-4">Ticker</th>
                    <th className="p-4">Spot (27 Jun close)</th>
                    <th className="p-4">14-day ATM IV*</th>
                    <th className="p-4">IV-Rank</th>
                    <th className="p-4">Earnings date</th>
                    <th className="p-4">Why it matters</th>
                </tr>
            </thead>
            <tbody className="text-base">
                <tr className="border-b border-yellow-500/20">
                    <td className="p-4 font-bold text-yellow-400">TSLA</td>
                    <td className="p-4">$323.63</td>
                    <td className="p-4">≈ 60 %</td>
                    <td className="p-4">27 %</td>
                    <td className="p-4">23 Jul</td>
                    <td className="p-4">Plenty of juice but not &quot;red-hot&quot;; a Δ≈0.25 strike still pays.</td>
                </tr>
                <tr>
                    <td className="p-4 font-bold text-yellow-400">MSTR</td>
                    <td className="p-4">$383.88</td>
                    <td className="p-4">≈ 48 %</td>
                    <td className="p-4">2 %</td>
                    <td className="p-4">29 Jul</td>
                    <td className="p-4">Low IV-Rank → premiums thin; tighten strike logic to Δ≈0.15.</td>
                </tr>
            </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">*IV pulled from Market-Chameleon front-month skew; spot prices from their live quote page.</p>
    </div>
);

const StrikeCheatSheet = () => (
    <div className="grid md:grid-cols-2 gap-8">
        <div>
            <h4 className="font-bold text-xl text-yellow-400 mb-2">TSLA (σ ≈ 60 %)</h4>
            <table className="w-full text-left border-collapse text-base">
                 <thead>
                    <tr className="border-b border-yellow-500/30">
                        <th className="p-3">Strike</th>
                        <th className="p-3">Δ</th>
                        <th className="p-3">Premium feel*</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { strike: 335, delta: '0.40', feel: 'Rich but tighter cap' },
                        { strike: 345, delta: '0.31', feel: '' },
                        { strike: 350, delta: '0.27', feel: 'Sweet-spot (Δ≈0.25)' },
                        { strike: 355, delta: '0.23', feel: 'Use if you want more upside room' },
                        { strike: 360, delta: '0.20', feel: '' },
                    ].map(row => (
                         <tr key={row.strike} className="border-b border-yellow-500/20">
                            <td className="p-3">{row.strike}</td>
                            <td className="p-3">{row.delta}</td>
                            <td className="p-3">{row.feel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div>
            <h4 className="font-bold text-xl text-yellow-400 mb-2">MSTR (σ ≈ 48 %)</h4>
            <table className="w-full text-left border-collapse text-base">
                <thead>
                    <tr className="border-b border-yellow-500/30">
                        <th className="p-3">Strike</th>
                        <th className="p-3">Δ</th>
                        <th className="p-3">Premium feel*</th>
                    </tr>
                </thead>
                <tbody>
                     {[
                        { strike: 410, delta: '0.27', feel: '' },
                        { strike: 415, delta: '0.23', feel: '' },
                        { strike: 425, delta: '0.16', feel: 'Target (Δ≈0.15)' },
                        { strike: 430, delta: '0.13', feel: '' },
                    ].map(row => (
                         <tr key={row.strike} className="border-b border-yellow-500/20">
                            <td className="p-3">{row.strike}</td>
                            <td className="p-3">{row.delta}</td>
                            <td className="p-3">{row.feel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="text-xs text-gray-500 mt-2 md:col-span-2">*Mid-price will drift intraday; re-price inside IBKR OptionTrader.</p>
        <div className="md:col-span-2 bg-black/30 p-4 border border-yellow-500/30">
            <h4 className="font-bold text-yellow-400">Recommendation</h4>
            <ul className="list-disc list-inside mt-2">
                <li>Sell TSLA 350 C (or 355 C if you want an extra $500 upside head-room)</li>
                <li>Sell MSTR 425 C — keeps assignment threshold ~ +10 % above spot.</li>
            </ul>
        </div>
    </div>
);

const DecisionTree = () => (
    <pre className="font-mono text-base text-yellow-300 bg-black/20 p-4 overflow-x-auto">
{`┌─ Start Monday
│
├─ Is IVRank ≥ 20 % ?
│      ├─ Yes → use Δ 0.25 strike
│      └─ No  → use Δ 0.15 strike
│
├─ Transmit LMT @ mid
│
├─ Thur PM: has premium → ≤ 20 %?
│      ├─ Yes → buy back, reopen new 14-d call
│      └─ No  → go to Fri
│
└─ Fri: spot > strike – $5 ?
       ├─ Yes → roll up/out 1 cycle
       └─ No  → let expire or close for pennies`}
    </pre>
);

const CycleTracker = () => {
    const [steps, setSteps] = useState({
        ivCheck: false,
        transmit: false,
        thursdayCheck: false,
        fridayCheck: false,
    });

    const handleCheck = (step: keyof typeof steps) => {
        setSteps(prev => ({...prev, [step]: !prev[step]}));
    };
    
    return (
        <div className="bg-black/30 p-4 border border-yellow-500/30 space-y-4">
             <div className="flex items-center space-x-2">
                <Checkbox id="ivCheck" checked={steps.ivCheck} onChange={() => handleCheck('ivCheck')} />
                <Label htmlFor="ivCheck">IVRank ≥ 20%? (Yes/No)</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="transmit" checked={steps.transmit} onChange={() => handleCheck('transmit')} />
                <Label htmlFor="transmit">Transmitted LMT @ mid? (Yes/No)</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="thursdayCheck" checked={steps.thursdayCheck} onChange={() => handleCheck('thursdayCheck')} />
                <Label htmlFor="thursdayCheck">Thursday Premium ≤ 20%? (Yes/No)</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="fridayCheck" checked={steps.fridayCheck} onChange={() => handleCheck('fridayCheck')} />
                <Label htmlFor="fridayCheck">Friday Spot &gt; Strike - $5? (Yes/No)</Label>
            </div>
        </div>
    )
}


export default function OptionsPlaybook() {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 tracking-tight text-center mb-2 font-epilogue">
                🦉 Two-Week Playbook
            </h2>
            <p className="text-center text-white/80 mb-12">(Expiry 12 July 2025) — 1 × TSLA, 1 × MSTR Covered Calls</p>

            <PlaybookSection number={1} title="Fast market snapshot">
                <TickerTable />
            </PlaybookSection>

            <PlaybookSection number={2} title="Δ-by-strike cheat-sheet">
               <StrikeCheatSheet />
            </PlaybookSection>
            
            <PlaybookSection number={3} title="Entry & exit algorithm">
                <ul className="list-disc list-inside space-y-2">
                    <li>When US market opens +20 min on Monday, if IVRank ≥ 20 % use Δ0.25 else Δ0.15.</li>
                    <li>Enter LMT @ mid; choose IBKR Adaptive algo.</li>
                    <li>Monitor:
                        <ul className="list-disc list-inside ml-6">
                            <li>Close if option value ≤ 20 % of credit OR spot &lt; strike –1 SD.</li>
                            <li>Roll-up/out if spot &gt; strike – $5 and extrinsic &lt; 25 % of credit.</li>
                        </ul>
                    </li>
                </ul>
            </PlaybookSection>

            <PlaybookSection number={4} title="One-click IBKR workspace">
                <ol className="list-decimal list-inside space-y-2">
                    <li>Create hotkey: Configure → Hotkeys → Create
                        <ul className="list-disc list-inside ml-6">
                           <li>Name: &quot;14-day CC batch&quot;</li>
                           <li>Action: Order Ticket</li>
                           <li>Params: symbol = %Symbol%, expiry = 2025-07-12, right = CALL, strike = %Strike%, side = SELL, qty = 1.</li>
                        </ul>
                    </li>
                    <li>Global macros (in Settings → Macros): TSLA 350, TSLA 355, MSTR 425</li>
                </ol>
                <p className="text-sm mt-2">Highlight line, hit the hotkey, adjust price, transmit.</p>
            </PlaybookSection>
            
            <PlaybookSection number={5} title="Quick-look decision tree">
                <DecisionTree />
            </PlaybookSection>

            <PlaybookSection number={6} title="Nudges & pitfalls">
                 <ul className="list-disc list-inside space-y-2">
                    <li>But TSLA can gap $20 overnight, therefore keep at least $2 k spare cash to buy back the call in a panic.</li>
                    <li>Therefore don&apos;t run this through earnings; skip the cycle that straddles 23 July (TSLA) and 29 July (MSTR).</li>
                    <li>Track EUR→USD FX: use IBKR FX Convert ticket at fill-time; export Flex Query with &quot;Trades + FX transactions&quot; for French form 2042.</li>
                </ul>
            </PlaybookSection>

            <PlaybookSection number={7} title="Cycle Tracker">
                <p className="mb-4">Push these parameters into a component-style tracker so we only tick &quot;Yes/No&quot; each cycle.</p>
                <CycleTracker />
            </PlaybookSection>

            <PlaybookSection number={8} title="Strategy Analysis & Final Thoughts">
                <PlaybookAnalysis />
            </PlaybookSection>
        </div>
    )
}

const AnalysisSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mt-6">
        <h4 className="text-xl font-bold text-yellow-400 mb-3 font-epilogue">{title}</h4>
        <div className="space-y-3 text-base">{children}</div>
    </div>
);

const PlaybookAnalysis = () => (
    <div className="space-y-6 text-white/90">
        <p className="italic text-lg">
            Here&apos;s a detailed analysis of your Two-Week Covered Call Playbook for TSLA and MSTR (expiry July 12, 2025), including my thoughts, feedback, and ideas for enhancement. This strategy involves selling one covered call each on Tesla (TSLA) and MicroStrategy (MSTR) with a two-week expiration to generate income from option premiums while capping upside potential. Let&apos;s break it down and explore its strengths, potential improvements, and key considerations.
        </p>

        <AnalysisSection title="Overview of the Strategy">
            <p>You&apos;re selling covered calls on TSLA and MSTR, leveraging their volatility to collect premiums while holding the underlying stocks. The playbook provides:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 pl-4">
                <li>Market Snapshot: Current spot prices, implied volatility (IV), IV-Rank, and earnings dates.</li>
                <li>Strike Selection: Based on delta (Δ0.25 for TSLA, Δ0.15 for MSTR) to balance premium and assignment risk.</li>
                <li>Entry/Exit Rules: Specific timing and conditions for entering, monitoring, and closing positions.</li>
                <li>Execution Tools: IBKR setup for efficient order placement.</li>
                <li>Decision Tree: A flowchart for managing the trade.</li>
                <li>Risk Warnings: Pitfalls like price gaps and earnings volatility.</li>
            </ul>
            <p className="mt-2">The goal is to earn consistent income while being prepared to sell the stocks at the chosen strike prices if assigned.</p>
        </AnalysisSection>

        <AnalysisSection title="1. Fast Market Snapshot Analysis">
            <p><span className="font-bold text-white">TSLA:</span> An IV of 60% and IV-Rank of 27% indicate decent volatility—not extreme, but sufficient for attractive premiums. The Δ0.25 strike aligns with a 25% chance of being in-the-money (ITM) at expiration, offering a good premium-to-risk balance.</p>
            <p><span className="font-bold text-white">MSTR:</span> The IV of 48% is moderate, but an IV-Rank of 2% is very low (near the bottom of its 1-year range). This means premiums are thin, justifying the tighter Δ0.15 strike to boost income, though it increases assignment risk slightly.</p>
            <p className="font-semibold text-yellow-500/80 mt-2">Feedback: The snapshot is concise and actionable. Avoiding earnings (post-July 12 expiration) is smart, as volatility spikes could disrupt the strategy.</p>
        </AnalysisSection>
        
        <AnalysisSection title="2. Strike Selection Analysis">
             <p><span className="font-bold text-white">TSLA 350 C:</span> Caps upside at $350 (+8.2% from $323.63), with a Δ0.27 close to the Δ0.25 target. Premiums are solid due to the 60% IV.</p>
             <p><span className="font-bold text-white">TSLA 355 C:</span> Caps upside at $355 (+9.7%), with a Δ0.23, giving an extra $500 potential gain per 100 shares if assigned.</p>
             <p><span className="font-bold text-white">MSTR 425 C:</span> Caps upside at $425 (+10.7% from $383.88). The Δ0.15 target (Δ0.16 actual) compensates for low IV-Rank by staying closer to the spot price.</p>
             <p className="font-semibold text-yellow-500/80 mt-2">Thoughts: The delta-based approach is volatility-aware and practical. MSTR&apos;s low IV-Rank (2%) suggests premiums may not be optimal now. If IV rises later, you could capture higher premiums in future cycles.</p>
        </AnalysisSection>

        <AnalysisSection title="3. Entry & Exit Algorithm Analysis">
            <p><span className="font-semibold text-yellow-500/80">Feedback:</span> Timing (waiting 20 minutes after the open) avoids initial volatility. The Adaptive Algo enhances fill quality. Exit rules are efficient for profit-taking and risk management.</p>
            <p><span className="font-bold text-white">Idea:</span> Add a stop-loss rule (e.g., close if stock drops 10%) to cap downside risk on the stock itself, since covered calls don&apos;t fully protect against declines.</p>
        </AnalysisSection>

        <AnalysisSection title="4. One-Click IBKR Workspace Analysis">
             <p className="font-semibold text-yellow-500/80">Thoughts: This is a time-saver and reduces errors in fast-moving markets. It&apos;s especially useful for TSLA, where prices can shift quickly.</p>
        </AnalysisSection>

        <AnalysisSection title="5. Decision Tree Analysis">
            <p className="font-semibold text-yellow-500/80">Feedback: The tree is clear and disciplined, balancing profit-taking (Thursday check) with assignment avoidance (Friday roll). It&apos;s a practical guide for weekly management.</p>
        </AnalysisSection>

        <AnalysisSection title="6. Nudges & Pitfalls Analysis">
            <p className="font-semibold text-yellow-500/80">Thoughts: The warnings about gap risk, earnings, and FX tracking are critical for success and compliance.</p>
        </AnalysisSection>

        <AnalysisSection title="Strengths of the Strategy">
             <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-bold">Structured:</span> Clear rules for entry, exit, and management reduce emotional decisions.</li>
                <li><span className="font-bold">Volatility-Adjusted:</span> Delta selection adapts to IV-Rank, optimizing premiums.</li>
                <li><span className="font-bold">Efficient Execution:</span> IBKR tools streamline the process.</li>
                <li><span className="font-bold">Risk Awareness:</span> Highlights pitfalls like gaps and earnings.</li>
            </ul>
        </AnalysisSection>

        <AnalysisSection title="Potential Improvements">
             <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-bold">Monitor Bitcoin for MSTR:</span> MSTR correlates with Bitcoin; its price moves could affect MSTR.</li>
                <li><span className="font-bold">Stagger Expirations:</span> Sell a 2-week call on TSLA and a 3-week call on MSTR to diversify timing risk.</li>
                <li><span className="font-bold">Collar Option:</span> Use some premium to buy a protective put, capping downside risk.</li>
                <li><span className="font-bold">Wait for MSTR IV Increase:</span> With IV-Rank at 2%, consider delaying MSTR trades until IV rises for better returns.</li>
            </ul>
        </AnalysisSection>

        <AnalysisSection title="Key Watch-Outs">
             <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-bold">TSLA Volatility:</span> Be ready for gaps; the cash reserve is essential.</li>
                <li><span className="font-bold">MSTR Low IV:</span> Thin premiums mean less income and higher assignment risk.</li>
                <li><span className="font-bold">Assignment:</span> Rolling isn&apos;t guaranteed to avoid assignment.</li>
                <li><span className="font-bold">Position Size:</span> Ensure the position fits your risk tolerance.</li>
            </ul>
        </AnalysisSection>

        <AnalysisSection title="Final Thoughts">
            <p>This is a solid, well-defined covered call strategy tailored to TSLA&apos;s juicier premiums and MSTR&apos;s thinner ones. It&apos;s neutral-to-bullish, ideal for generating income while holding stocks you&apos;re willing to sell at the strikes. Stick to the rules, keep cash reserves, and avoid earnings cycles to maximize success. For next-level refinement, consider MSTR&apos;s Bitcoin link, staggered expirations, or downside protection. With discipline, this playbook can enhance returns on your TSLA and MSTR positions effectively.</p>
        </AnalysisSection>
    </div>
);
