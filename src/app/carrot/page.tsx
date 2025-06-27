"use client";
import Image from 'next/image';

export default function CarrotPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">THE PROMISE • THE PRICE • THE PRECEDENT</p>
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              Carrot Turns into a Stick?
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 text-xl text-white/80 font-light">
                <p>
                    A whisper from Brussels suggests a new purpose for your savings. They want to mobilize Europe&apos;s €11 trillion in household deposits—the largest pot of idle cash on the planet. They call it the &apos;EU Savings Standard,&apos; a voluntary fund promising higher returns while financing the continent&apos;s future. A perfect carrot.
                </p>
                <p>
                    But the timing is no accident. A continent is re-arming. The bill will be measured in hundreds of billions. Fiscal rules are bending. And suddenly, that vast pool of private savings looks less like an opportunity and more like a necessity.
                </p>
            </div>
             <div className="flex items-center justify-center pt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light font-satoshi italic">
                History warns us what happens next.
              </p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>

            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <Image
                    src="/model_s_tesla.jpeg"
                    alt="Tesla Model S Quicksilver"
                    fill
                    className="object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Section 2 & Cautionary Tales */}
           <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">The Pattern: Carrot to Stick</h2>
             <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                Economists call it financial repression. Politicians prefer softer words. Either way, the pattern is ruthlessly consistent:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Fiscal squeeze.</li>
                <li>Voluntary sweetener.</li>
                <li>Default-in nudge (keep your perks or lose a benefit).</li>
                <li>Mandatory transfer or outright confiscation.</li>
                </ol>
                <p className="text-lg">
                Below are eight cautionary tales. Watch the carrot mutate.
                </p>
            </div>
            <div className="space-y-8 mt-8">
                <CaseStudy title="Argentina, 2008" subtitle={`The Pitch: "Protect retirees." The Reality: Seizing $30bn.`}>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><span className="font-bold text-yellow-400">Carrot:</span> President Fernández said nationalising private pensions would shield workers from market turmoil.</li>
                    <li><span className="font-bold text-yellow-400">Stick:</span> Congress rubber-stamped the grab. Private funds vanished overnight. Assets worth 13% of GDP were absorbed by the Treasury.</li>
                    <li><span className="font-bold text-yellow-400">After-taste:</span> The Peso collapsed. The purloined $30bn financed current spending, not pensions.</li>
                  </ul>
                </CaseStudy>

                <CaseStudy title="Hungary, 2010" subtitle={`The Pitch: "It's your choice." The Reality: Financial exile.`}>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><span className="font-bold text-yellow-400">Carrot:</span> Keep your private account or switch to the state for a guaranteed benefit.</li>
                    <li><span className="font-bold text-yellow-400">Default-in twist:</span> Those who stayed private forfeited all future state-pension rights.</li>
                    <li><span className="font-bold text-yellow-400">Stick:</span> 97% of savers capitulated, transferring $14bn to the budget.</li>
                    <li><span className="font-bold text-yellow-400">After-taste:</span> Public debt fell 10pp, yet ratings were still downgraded. The private pillar was abolished entirely in 2012.</li>
                  </ul>
                </CaseStudy>

                <CaseStudy title="Poland, 2014" subtitle={`The Pitch: "A portfolio rebalance." The Reality: Half for you, half for us.`}>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><span className="font-bold text-yellow-400">Carrot:</span> A simple &quot;portfolio rebalance&quot; would make pensions safer.</li>
                    <li><span className="font-bold text-yellow-400">Stick:</span> Warsaw ordered pension funds to hand 51.5% of their assets—mostly government bonds—to the state. The bonds were immediately cancelled, trimming debt by 9% of GDP.</li>
                    <li><span className="font-bold text-yellow-400">After-taste:</span> Private savings were halved. Citizens must now re-opt-in every four years or default back to the state.</li>
                  </ul>
                </CaseStudy>

                 <CaseStudy title="Cyprus, 2013" subtitle={`The Pitch: "Financial stability." The Reality: The overnight haircut.`}>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><span className="font-bold text-yellow-400">Carrot:</span> An EU/IMF bailout promised to stabilize the banking system.</li>
                    <li><span className="font-bold text-yellow-400">Stick:</span> Deposits above €100,000 at the Bank of Cyprus took a 47.5% haircut in a depositor &quot;bail-in.&quot;</li>
                    <li><span className="font-bold text-yellow-400">After-taste:</span> Capital controls, angry oligarchs, and trust that evaporated faster than a frappé on Nicosia&apos;s seafront.</li>
                  </ul>
                </CaseStudy>

                <CaseStudy title="Greece, 2015" subtitle={`The Pitch: "Brief and targeted." The Reality: Five years of cash rationing.`}>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><span className="font-bold text-yellow-400">Carrot:</span> Capital controls would be &quot;brief and targeted&quot; during negotiations.</li>
                    <li><span className="font-bold text-yellow-400">Stick:</span> Withdrawals were capped at €60 a day—€420 a week—for five years.</li>
                    <li><span className="font-bold text-yellow-400">After-taste:</span> A starved SME sector and an e-commerce industry that fled abroad. Controls weren&apos;t fully lifted until late 2019.</li>
                  </ul>
                </CaseStudy>

                 <CaseStudy title="Iceland, 2008–2017" subtitle={`The Pitch: "Until markets calm." The Reality: Nine years in a cold bath.`}>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><span className="font-bold text-yellow-400">Carrot:</span> Controls would only last &quot;until markets calm.&quot;</li>
                    <li><span className="font-bold text-yellow-400">Stick:</span> All capital outflows were banned, trapping the krona. Reykjavík didn&apos;t scrap the last restrictions until 2017.</li>
                    <li><span className="font-bold text-yellow-400">After-taste:</span> The economy healed, but international investors demanded higher risk premia for a decade.</li>
                  </ul>
                </CaseStudy>
                
                <CaseStudy title="Malaysia, 1998–2005" subtitle={`The Pitch: "Temporary stability." The Reality: Seven years of capital gates.`}>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        <li><span className="font-bold text-yellow-400">Carrot:</span> A temporary currency peg and a one-year holding period would stabilise markets.</li>
                        <li><span className="font-bold text-yellow-400">Stick:</span> Exit levies and tight capital gates lasted seven years.</li>
                        <li><span className="font-bold text-yellow-400">After-taste:</span> Growth returned swiftly, and some hail it as a success—but foreign ownership of Malaysian assets never fully recovered.</li>
                    </ul>
                </CaseStudy>

                <CaseStudy title="India, 2016" subtitle={`The Pitch: "Eradicate corruption." The Reality: Demonetisation chaos.`}>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        <li><span className="font-bold text-yellow-400">Carrot:</span> A bold move to eradicate &quot;black money&quot; and corruption.</li>
                        <li><span className="font-bold text-yellow-400">Stick:</span> 86% of the country&apos;s cash was voided overnight, leading to queues, chaos, and supply-chain collapse.</li>
                        <li><span className="font-bold text-yellow-400">After-taste:</span> GDP growth dipped and informal jobs vanished. The Supreme Court upheld the legality years later, but not the wisdom.</li>
                    </ul>
                </CaseStudy>
            </div>
          </div>
          
          {/* Section 3 */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">Why Europe Could Follow the Same Script</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-yellow-500 p-4 text-yellow-400">Risk Lever</th>
                            <th className="border-b-2 border-yellow-500 p-4 text-yellow-400">Why It Exists in the EU</th>
                            <th className="border-b-2 border-yellow-500 p-4 text-yellow-400">How It Could Flip</th>
                        </tr>
                    </thead>
                    <tbody className="align-baseline">
                        <tr className="border-t border-gray-800">
                            <td className="p-4 font-semibold">Legal plumbing</td>
                            <td className="p-4 text-gray-400">Article 122 TFEU lets the Council adopt measures &quot;appropriate to the economic situation&quot; without Parliament. It was used for pandemic job-support (SURE) and is now cited for new defence facilities.</td>
                            <td className="p-4 text-gray-400">A future crisis could re-brand deposit-fund flows as a &quot;solidarity contribution&quot;; quotas or levies need only a Council vote.</td>
                        </tr>
                        <tr className="border-t border-gray-800 bg-gray-900/50">
                            <td className="p-4 font-semibold">Custody rails</td>
                            <td className="p-4 text-gray-400">The proposed Savings Standard would centralise KYC, data and fund flows.</td>
                            <td className="p-4 text-gray-400">A single delegated act could add &quot;minimum 10 % allocation to EU Solidarity Bonds.&quot;</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                            <td className="p-4 font-semibold">Fiscal temptation</td>
                            <td className="p-4 text-gray-400">Defence tab + ageing + green subsidies balloon deficits despite the 1.5 pp &quot;flexibility.&quot;</td>
                            <td className="p-4 text-gray-400">Politicians facing bond-market revolt may prefer a domestic cash grab to IMF-style austerity.</td>
                        </tr>
                        <tr className="border-t border-gray-800 bg-gray-900/50">
                            <td className="p-4 font-semibold">Precedent comfort</td>
                            <td className="p-4 text-gray-400">Cyprus bail-in was EU-approved; Greek ATM caps survived court challenges.</td>
                            <td className="p-4 text-gray-400">Voters already saw banks close once; fatigue breeds acceptance of &quot;temporary&quot; controls.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
             <p className="text-lg text-gray-300 pt-4">In other words: infrastructure first, compulsion later. This is the script from the eight stories above. </p>
          </div>

          {/* Section 4 */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">The Escape Hatch: Why Bitcoiners Sleep Better</h2>
            <div className="space-y-4 text-gray-300">
                <p className="text-lg">A 12-word seed phrase doesn&apos;t live in a bank vault. Regulators can license exchanges, but they cannot unilaterally decree that &quot;51% of your cold wallet now belongs to the Treasury.&quot; The asset is trans-jurisdictional, censorship-resistant, and—as Cyprus taught us—a last-resort escape hatch when the local banks lock their doors.</p>
                <p className="text-lg">This isn&apos;t to say Bitcoin is without risk. But in a world of escalating capital controls, portfolio resilience means having optionality. It means owning a slice of wealth that can cross borders at the speed of memory.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">A Practical Playbook for European Savers</h2>
              <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr>
                              <th className="border-b-2 border-yellow-500 p-4 text-yellow-400">Action</th>
                              <th className="border-b-2 border-yellow-500 p-4 text-yellow-400">Why</th>
                              <th className="border-b-2 border-yellow-500 p-4 text-yellow-400">Quick How-To</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="border-t border-gray-800">
                              <td className="p-4 font-semibold">Split custody</td>
                              <td className="p-4 text-gray-400">Reduce confiscation risk.</td>
                              <td className="p-4 text-gray-400">Mix euro-area brokers, foreign brokers, hardware wallets, maybe tokenised T-bill funds.</td>
                          </tr>
                          <tr className="border-t border-gray-800 bg-gray-900/50">
                              <td className="p-4 font-semibold">Check bail-in hierarchy</td>
                              <td className="p-4 text-gray-400">Large uninsured deposits rank below senior debt.</td>
                              <td className="p-4 text-gray-400">Keep operational cash &lt; €100 k per bank; sweep excess to MMFs.</td>
                          </tr>
                          <tr className="border-t border-gray-800">
                              <td className="p-4 font-semibold">Monitor draft language</td>
                              <td className="p-4 text-gray-400">Watch for a shift from tax perk → allocation requirement.</td>
                              <td className="p-4 text-gray-400">Follow ECON committee agendas; search &quot;minimum retail participation&quot; or &quot;solidarity instrument.&quot;</td>
                          </tr>
                          <tr className="border-t border-gray-800 bg-gray-900/50">
                              <td className="p-4 font-semibold">Scenario-test runway</td>
                              <td className="p-4 text-gray-400">Deposit flight hurts bank credit lines.</td>
                              <td className="p-4 text-gray-400">Run &quot;10 %, 25 % outflow&quot; stress on any counterparty that funds you.</td>
                          </tr>
                          <tr className="border-t border-gray-800">
                              <td className="p-4 font-semibold">Voice concerns early</td>
                              <td className="p-4 text-gray-400">Rules are still clay.</td>
                              <td className="p-4 text-gray-400">Comment on consultations, lobby via trade groups, or publish op-eds (feel free to recycle this one!).</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          {/* Section 6 */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">Conclusion: The Anatomy of a Cash Grab</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">The EU Savings Standard is presented as a &apos;win-win&apos;: higher yields for savers, vital funding for the continent. But beneath this optimistic surface lies a familiar pattern, one driven by immense fiscal pressure and historical precedent.</p>
                <p className="text-lg">The real danger isn&apos;t the voluntary plan itself, but the centralized infrastructure it creates. Brussels is already letting member states overshoot deficit rules to fund new defence pledges, a policy projected to swell debt ratios by 8 percentage points by 2029. When the bill for this fiscal room comes due, the temptation to tap into that €17 trillion pool of private savings via &apos;patriotic investments&apos; may prove irresistible.</p>
                <p className="text-lg">History, from Argentina to Poland, teaches us that such financial plumbing is rarely built just for convenience. It&apos;s built for control. The smartest posture is not to wait and see. It&apos;s to recognize that the door to capital freedom closes quietly at first, and then all at once. True portfolio resilience means having an exit strategy before the voluntary carrot reveals itself as the mandatory stick.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CaseStudy = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
    <h3 className="text-2xl font-bold text-yellow-500 mb-1">{title}</h3>
    <p className="text-md text-white/70 italic mb-4">{subtitle}</p>
    {children}
  </div>
);
