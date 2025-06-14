"use client";

const ActSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-[#1c1f26] p-8 md:p-12 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6 font-satoshi tracking-tight">{title}</h2>
        <div className="space-y-6 text-gray-300/90 text-lg font-light leading-relaxed">
            {children}
        </div>
    </div>
);

const Table = ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            {children}
        </table>
    </div>
);

const Th = ({ children }: { children: React.ReactNode }) => (
    <th className="border-b border-yellow-500/20 p-4 text-yellow-500/80 font-semibold uppercase tracking-wider text-sm">{children}</th>
);

const Td = ({ children }: { children: React.ReactNode }) => (
    <td className="border-b border-white/10 p-4">{children}</td>
);

const JournalNote = ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-6 border-l-4 border-yellow-500/60 bg-black/20 p-4 italic text-yellow-500/90 rounded-r-lg text-base">
        {children}
    </blockquote>
);


export default function LovePage() {
    return (
        <div className="min-h-screen bg-black text-white font-satoshi">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="space-y-12 md:space-y-16">
                    {/* Hero Section */}
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                            A Love-Letter to Time, Bitcoin, and Living The Good Life.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto">
                            How one couple turns 25 BTC into ninety million sunsets.
                        </p>
                        <div className="flex items-center justify-center pt-4">
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                            <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                        </div>
                    </div>

                    {/* Intro Section */}
                    <ActSection title="Intro — Biarritz, 2024: The Spark">
                        <p>We met them on a salt-slick terrace above the Grande Plage, two strangers in their late seventies sharing a bottle of 2010 Haut-Brion like it was an inside joke with the Atlantic.</p>
                        <p>Their laughter rolled louder than the surf.</p>
                        <p>When the maître-d&apos; poured three glasses instead of two, we took the invitation.</p>
                        <JournalNote>
                            &ldquo;Bitcoin paid for the wine,&rdquo; the man said, raising his glass, &ldquo;but dreams paid for everything else.&rdquo;
                        </JournalNote>
                        <p>The woman—sea-spray silver in her hair—leaned in, eyes shining.</p>
                        <p>&ldquo;Tell us,&rdquo; we asked.</p>
                        <p>And they did.</p>
                    </ActSection>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    {/* Act I */}
                    <ActSection title="Act I | Age 50: Keys, Dreams, and a Map">
                        <p>
                            It&apos;s the summer of 2025.
                            You&apos;re fifty, your wife is radiant, and together you hold 25 bitcoin—cold-stored, borderless, indestructible.
                            The question isn&apos;t how to make money. Bitcoin is already doing that.
                            The question is how to turn time into memories without torching the asset that buys them.
                        </p>
                        <p className="border-l-4 border-yellow-500 pl-6 italic text-white/90">
                            Two coordinates beckon:<br />
                            1. Monaco at fifty-five: the tax-free, Riviera interlude you&apos;ve fantasised about since college posters of the Côte d&apos;Azur.<br />
                            2. France at sixty: a slower rhythm—mountain thermal spas, Relais & Châteaux pilgrimages, lingering Michelin lunches—because you have no heirs to protect, only each other to spoil.
                        </p>
                        <p>
                            You decide on a five-year Monaco sprint (2030-2035) followed by a long French glide (2035 onward).
                        </p>
                    </ActSection>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    {/* Act II */}
                    <ActSection title="Act II | The Monaco Intermezzo (Age 55 → 60)">
                        <p>They arrived in Monaco on the eve of their fifty-fifth birthdays with nothing but two suitcases and twenty-five cold-stored bitcoin.</p>
                        <JournalNote>
                            &ldquo;It was never about tax,&rdquo; she said. &ldquo;It was about waking up with the yachts each morning and knowing everyone out there believed in impossible things.&rdquo;
                        </JournalNote>
                        <p>They rented a cliff-side flat that smelled of citrus at dawn, joined yacht parties where deals were hatched on napkins, and collected friends the way others collected designer luggage: lightly, delightedly, forever.</p>
                        <p>Every May they watched the Grand Prix from a secret balcony, engines reverberating through their ribs.</p>
                        <p>Every June they threw a dinner on Hôtel de Paris&apos;s rooftop—one coin for a constellation of memories.</p>
                        <p>They called it their Riviera Intermission. Five summers.</p>
                        <p>Enough sunrises to write a book about light.</p>
                        <div className="py-6"><div className="h-px w-full bg-yellow-500/20"></div></div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Assumptions</h3>
                            <ul className="list-disc list-inside space-y-1 pl-4 text-gray-400">
                                <li>Move-in year: 2030</li>
                                <li>Annual lifestyle burn: €250 000 (yacht days, terrace dinners, GP Historique box seats)</li>
                                <li>Tax on BTC gains: 0 %</li>
                            </ul>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <Th>Year</Th>
                                    <Th>BTC Price*</Th>
                                    <Th>BTC Sold</Th>
                                    <Th>BTC Left</Th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><Td>2030</Td><Td>€261 k</Td><Td>0.96 BTC</Td><Td>21.7</Td></tr>
                                <tr><Td>2031</Td><Td>€314 k</Td><Td>0.80 BTC</Td><Td>20.9</Td></tr>
                                <tr><Td>2032</Td><Td>€377 k</Td><Td>0.66 BTC</Td><Td>20.2</Td></tr>
                                <tr><Td>2033</Td><Td>€452 k</Td><Td>0.55 BTC</Td><Td>19.7</Td></tr>
                                <tr><Td>2034</Td><Td>€542 k</Td><Td>0.46 BTC</Td><Td>19.2</Td></tr>
                            </tbody>
                        </Table>
                        <p className="italic text-gray-400 text-center">*Bitcoin grows 20 % per year—conservative by halving-era standards.</p>
                        <p className="font-semibold text-center text-yellow-500/90 text-xl border-t border-b border-yellow-500/20 py-4">
                            Five years, five Monte-Carlo Grands Prix, only 3.4 BTC spent. No tax.
                        </p>
                    </ActSection>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    {/* Act III */}
                    <ActSection title="Act III | La Douce France (Age 60 → 85)">
                        <p>On their sixtieth birthday they sailed west, trailing a wake of Monte-Carlo legends.</p>
                        <p>The plan was simple: trade the roar of engines for the hum of cicadas.</p>
                        <p>France welcomed them like a long exhale.</p>
                        <p>They bought a bastide outside Gordes—stone walls, fig tree, a cellar cool enough for secrets.</p>
                        <p>Mornings were croissants and code reviews under fig-leaf shade; afternoons were road trips to Chardonnay valleys; evenings, rosé that glowed like pixelated sunsets.</p>
                        <p>Without heirs to impress, they spent with intention: spa suites on Wednesdays, truffle lunches on Thursdays, long drives to nowhere every time the mistral shifted.</p>
                        <p>They called it slow luxury—lavish, but unhurried; decadent, yet measured against the ticking of their own hearts.</p>
                        <div className="py-6"><div className="h-px w-full bg-yellow-500/20"></div></div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">New Parameters</h3>
                            <ul className="list-disc list-inside space-y-1 pl-4 text-gray-400">
                                <li>Annual net spend: €150 000—spa suites, Aman flash getaways, Hermitage lunches.</li>
                                <li>Tax on gains: 30 % French flat crypto rate.</li>
                                <li>Gross BTC sold each year: €214 286 / Pₜ.</li>
                                <li>Timeline: 2035-2060 (25 years).</li>
                            </ul>
                        </div>
                        <p>Over twenty-five years you liquidate ≈ 6.8 BTC and hand France about €1.9 million in total tax—annoying, but trivial once Bitcoin goes meteoric.</p>
                        <Table>
                            <thead>
                                <tr>
                                    <Th>Milestone</Th>
                                    <Th>BTC Price</Th>
                                    <Th>BTC Sold to date</Th>
                                    <Th>BTC Remaining</Th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><Td>2040 (Age 65)</Td><Td>€1.62 M</Td><Td>5.3 BTC</Td><Td>14.3 BTC</Td></tr>
                                <tr><Td>2050 (Age 75)</Td><Td>€10 M</Td><Td>9.7 BTC</Td><Td>11.8 BTC</Td></tr>
                                <tr><Td>2060 (Age 85)</Td><Td>€25 M</Td><Td>10.3 BTC</Td><Td>14.7 BTC</Td></tr>
                            </tbody>
                        </Table>
                        <p className="font-semibold text-center text-yellow-500/90 text-xl border-t border-b border-yellow-500/20 py-4">
                            Net worth at 2060: 14.7 BTC × €25 M ≈ €368 million, after a lifetime of first-class living and under €2 million paid to the taxman.
                        </p>
                    </ActSection>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    {/* Lessons from the Ledger */}
                    <ActSection title="Lessons from the Ledger of Life">
                        <p>One December night, the Provençal sky snow-globed with stars, he confessed a quiet epiphany:</p>
                        <blockquote className="my-6 border-l-4 border-yellow-500/60 bg-black/20 p-4 text-white/90 rounded-r-lg text-lg italic space-y-2">
                            <p>&ldquo;I used to think saving bitcoin was the point.</p>
                            <p>Then I thought spending bitcoin was the point.</p>
                            <p>Now I know the point was always the stories between the two.&rdquo;</p>
                        </blockquote>
                        <p>She laughed softly, because she&apos;d known all along.</p>
                        <p>The next morning they planned a route through every Relais &amp; Châteaux in France, &ldquo;before our knees complain,&rdquo; she said.</p>
                        <p>They circled mountains, rivers, and memories, leaving nothing un-lived.</p>
                    </ActSection>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    {/* Act IV */}
                    <ActSection title="Act IV | Why This Works">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-black/20 p-6 rounded-none border border-yellow-500/30">
                                <h3 className="font-semibold text-yellow-500 text-xl mb-2">1. Sequencing beats geography.</h3>
                                <p className="text-gray-400">You monetise BTC early when prices are still &quot;cheap,&quot; tax-free, in Monaco—then let the lion&apos;s share of coins compound undisturbed in France.</p>
                            </div>
                            <div className="bg-black/20 p-6 rounded-none border border-yellow-500/30">
                                <h3 className="font-semibold text-yellow-500 text-xl mb-2">2. Tax fades, BTC compounds.</h3>
                                <p className="text-gray-400">By 2050 one satoshi could buy dinner; paying 30 % on a sliver of a coin no longer matters.</p>
                            </div>
                            <div className="bg-black/20 p-6 rounded-none border border-yellow-500/30">
                                <h3 className="font-semibold text-yellow-500 text-xl mb-2">3. Burn-rate discipline.</h3>
                                <p className="text-gray-400">At €150 k/year in retirement you still sell under half a coin per year once BTC breaks €1 million.</p>
                            </div>
                            <div className="bg-black/20 p-6 rounded-none border border-yellow-500/30">
                                <h3 className="font-semibold text-yellow-500 text-xl mb-2">4. No heirs, no problem.</h3>
                                <p className="text-gray-400">With no children, you can push the safe-withdrawal envelope without guilt. Your estate plan says: &quot;Spend the last bitcoin on the last day.&quot;</p>
                            </div>
                        </div>
                    </ActSection>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    {/* Curtain Call */}
                    <div className="text-center space-y-8 bg-[#1c1f26] p-8 md:p-12 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 tracking-tight font-satoshi">Curtain Call: Time, Fiction, and the Last Satoshi</h2>
                        <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">Years later, with the bastide fireplace glowing low, they tallied nothing—no spreadsheets, no balance sheets—only sunrises witnessed and friends still calling from distant paddocks.</p>
                        <JournalNote>
                            &ldquo;Life is a simulation,&rdquo; he said, sipping the final splash of rosé.
                        </JournalNote>
                        <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">&ldquo;Then let&apos;s keep hacking it,&rdquo; she replied, slipping the last satoshi into the cracks of the stone hearth—a secret bookmark for whoever renovates the house a century from now.</p>
                        <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">They fell asleep to the rustle of olive leaves, certain that reality, at last, had caught up to their fiction.</p>
                        <div className="py-6"><div className="h-px w-full bg-yellow-500/20"></div></div>
                        <ul className="list-none space-y-3 text-xl text-white/90 max-w-2xl mx-auto">
                            <li>Spent the Riviera&apos;s best five summers tax-free.</li>
                            <li>Checked into every Aman and Oetker you fancied.</li>
                            <li>Still finished with ≈ 15 BTC—a fortune even in hyperbitcoinised euros.</li>
                        </ul>
                        <p className="text-xl text-white/80 font-light max-w-3xl mx-auto pt-4 border-t border-yellow-500/20">
                            The lesson is plain: time-weighted BTC preservation matters more than tax perfection. Live large early, live well later, but always let the base layer grow.
                        </p>
                        <p className="text-2xl pt-6">
                            Sovereignty isn&apos;t a passport stamp; it&apos;s how many satoshis you still hold when the final bell rings. 🐻
                        </p>
                    </div>

                    {/* Separator for new section */}
                    <div className="pt-16">
                        <div className="flex items-center justify-center">
                            <div className="h-px w-full bg-yellow-500/30"></div>
                        </div>
                    </div>

                    {/* Sats & Sunsets Journal */}
                    <div className="space-y-12">
                        {/* Journal Hero */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                                &ldquo;Sats & Sunsets&rdquo;
                            </h2>
                            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto">
                                A Travel-Journal of Our Monaco-to-Provence Pivot (2030 – 2060)
                            </p>
                            <p className="text-md text-white/60 italic">
                                written by &ldquo;E.&rdquo; — 55-year-old Bitcoiner; co-authored by my partner-in-crime, &ldquo;M.&rdquo;
                            </p>
                            <div className="flex items-center justify-center pt-4">
                                <div className="h-px w-24 bg-yellow-500/30"></div>
                                <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                                <div className="h-px w-24 bg-yellow-500/30"></div>
                            </div>
                        </div>

                        {/* Prologue */}
                        <ActSection title="Prologue — Winter 2029, Brussels > Riviera">
                            <p>
                                We zip the hardware wallet into the carry-on, glance once more at the apartment we&apos;ve just sold, and board the TGV toward sunshine. Twenty-five bitcoin in cold storage; five empty bullet journals; one shared vow: spend every sat wisely, lavishly, deliberately.
                            </p>
                        </ActSection>

                        <div className="flex items-center justify-center">
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                            <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                        </div>

                        {/* Monaco Years */}
                        <ActSection title="Monaco Years (2030 - 2034) — Five Summers of Tax-Free Decadence">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2030 — &ldquo;The First Coin&rdquo;</h4>
                                    <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €261 k. We sell 0.96 BTC the morning we receive our Monaco residency card.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Base camp: a terraced one-bed on Avenue de la Costa, view of Port Hercule dotted with superyachts that each burn more fuel in a day than we&apos;ll burn bitcoin all year.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Highlight: Grand Prix week. We discover the secret staircase above Bureau de Tabac that delivers you to the Fairmont roof just as the cars light up the tunnel.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Splurge: Joel Robuchon&apos;s 10-course degustation. M. cries at the langoustine ravioli. Totally worth 0.03 BTC.</li>
                                    </ul>
                                    <JournalNote>
                                        &ldquo;The only tax we pay is the 10 % service charge—denominated in fiat, which feels like Monopoly money now.&rdquo;
                                    </JournalNote>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2031 — &ldquo;Terrazzo, Tuna-Tataki & Time Appreciation&rdquo;</h4>
                                    <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €314 k. We sell 0.80 BTC. The euro amount (€250 k) is the same; the coin footprint is already shrink-wrapping.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Routine: Sunrise swims at Larvotto, espresso at Café de Paris, code review for my open-source Lightning tool at 10 a.m., lunch at Maya Bay.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Micro-luxury: ordering a glass of Château d&apos;Yquem by the pool, just because we can convert 30 µBTC to joy on a Tuesday.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2032 — &ldquo;A Yacht Called Time Preference&rdquo;</h4>
                                     <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €377 k. We charter a 45-footer for three weekends. Total cost: 0.20 BTC.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>First mental ledger check: only 20 BTC left. Feels okay.</li>
                                    </ul>
                                    <JournalNote>
                                        &ldquo;Sats per bliss unit = rising.&rdquo;
                                    </JournalNote>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2033 — &ldquo;Shoulder-Season and Second Thoughts&rdquo;</h4>
                                     <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €452 k. We sell 0.55 BTC.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Over lunch at Le Grill, we sketch a map: Provence, Dordogne, Basque Country, back to Paris.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Decision Moment: Five-year Monaco chapter will close after next summer. Not because of money—because of curiosity.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2034 — &ldquo;The Last Monte-Carlo Sunset&rdquo;</h4>
                                     <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €542 k. We sell 0.46 BTC and book an entire top deck at the Hôtel de Paris for a farewell soirée.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Hand back the residency card with a grin; we played the zero-tax game flawlessly.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Remaining stack: ≈ 19.2 BTC.</li>
                                    </ul>
                                </div>
                            </div>
                        </ActSection>

                        <div className="flex items-center justify-center">
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                            <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                        </div>

                        {/* France Years */}
                        <ActSection title="France Years (2035 - 2060) — Provençal Slow Burn">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2035 — &ldquo;Keys to the Bastide&rdquo;</h4>
                                    <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>Move-in: a stone farmhouse outside Gordes, lavender fields like pixel art.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €650 k. France taxes 30 %. To net €150 k luxury-hotel budget we sell 0.33 BTC and pay €32 k in tax. Does not hurt.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Splurge: Check in to Aman Le Mélézin for opening week of ski season. Tax authority still processing our filing while we sip hot saké.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2037 — &ldquo;Relais & Châteaux Grand Tour&rdquo;</h4>
                                    <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>We plot a circuit: Les Prés d&apos;Eugénie → La Chèvre d&apos;Or → Baumanière — stamping the passport of taste.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC crossed €940 k; each room night costs 0.01 BTC now.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Taxes paid to date: still &lt; 1 BTC worth. Stack still &gt; 18 BTC.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2040 — &ldquo;One Coin Buys a Vineyard&rdquo;</h4>
                                     <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €1.62 M. Our annual spend now equals 0.07 BTC after tax.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>We buy a 2-hectare plot in Gigondas for fun, financed by off-loading a single coin.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Officially retire from consulting; open a micro-cellar, bottling &ldquo;Block-Height Rosé.&rdquo;</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2050 — &ldquo;Sat Millionaire, Fiat Relativist&rdquo;</h4>
                                     <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €10 M. Selling 0.012 BTC funds the whole year of Aman & Oetker.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Total tax paid over the past decade and a half: ≈ €1 M – now equal to 0.1 BTC. Laughable.</li>
                                    </ul>
                                    <JournalNote>
                                        &ldquo;Fiat is what we tip in.&rdquo;
                                    </JournalNote>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">2060 — &ldquo;Sats at Sunset&rdquo;</h4>
                                     <ul className="list-none space-y-2 pl-4">
                                        <li><span className="text-yellow-500 mr-3"> • </span>BTC ≈ €25 M. We are 85 and 84.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Remaining coins: ≈ 14.7 BTC → €368 M.</li>
                                        <li><span className="text-yellow-500 mr-3"> • </span>Estate plan: burn the last sat in the fireplace of the bastide on the last night we&apos;re both around.</li>
                                    </ul>
                                </div>
                            </div>
                        </ActSection>

                        <div className="flex items-center justify-center">
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                            <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                        </div>

                        {/* Epilogue */}
                        <ActSection title="Epilogue — Lessons Etched in Ledger">
                            <ol className="list-decimal list-inside space-y-3 text-lg">
                                <li><span className="font-semibold text-white">Sequence beats location</span> — Monaco first, France later.</li>
                                <li><span className="font-semibold text-white">Spend early, preserve late</span> — We front-loaded luxury when coins were &quot;cheap.&quot;</li>
                                <li><span className="font-semibold text-white">Tax becomes irrelevant at scale</span> — France&apos;s euro drag shrank to decimal dust.</li>
                                <li><span className="font-semibold text-white">No heirs, no guilt</span> — Every sat unlocked experience, not inheritance probate.</li>
                            </ol>
                            <p className="mt-6">
                                We traded five Riviera years for thirty Provencal ones and ended richer—in coins, memories, and time together.
                            </p>
                            <blockquote className="mt-8 border-l-4 border-yellow-500 pl-6 text-xl italic text-white/90">
                                &ldquo;The measure of wealth is not how many things you can buy with a bitcoin, but how many sunrises you get to watch before you spend the next one.&rdquo;
                            </blockquote>
                        </ActSection>
                    </div>

                    {/* Final Chapter */}
                    <div className="flex items-center justify-center pt-12">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    <ActSection title="Why Monaco, Why France, Why Dream at All?">
                        <p>
                            We never moved to Monte-Carlo for the tax tables—those were footnotes.
                            We came for the five-year mise-en-scène we&apos;d rehearsed since our twenties:
                        </p>
                        <blockquote className="my-6 border-l-4 border-yellow-500/60 bg-black/20 p-4 text-yellow-500/90 rounded-r-lg text-lg">
                            <span className="text-2xl mr-2">⚓</span> wake to Ligurian light, lunch on tataki with racing engines rumbling below the terrace, watch dusk shimmer off super-yacht hulls, and swap ideas with people who spoke fluent optimism.
                        </blockquote>
                        <p>
                            Monaco was our creative incubator disguised as a principality—a place where nobody apologises for ambition and every second coffee meeting spawns a partnership, a DAO, or a sailing invitation.
                            We left with more than memories: we left with a tribe of likeminded trouble-makers who still ping us from Davos, Vienna, or the paddock at Silverstone.
                        </p>
                        <p>
                            But when the Riviera glitter settled, it was France that stole the long beat of our hearts—the lavender haze at 6 a.m., the church bells in villages whose names never trend, and the quiet knowing that one perfect baguette can outshine a super-car parade. This is where we&apos;ll pour the last rosé, because terroir &gt; tax code.
                        </p>
                        <p className="mt-8 pt-6 border-t border-yellow-500/20 text-center italic text-white/90">
                            And if all of this sounds unreal, good. Life is a simulation anyway—so write bold scripts.<br />
                            Reality may hand you spreadsheets; fiction hands you steering wheels.<br />
                            Choose fiction that outruns the ledger.<br />
                            Dream, pivot, repeat—until the credits roll with your favourite person beside you and just enough sats left for the closing scene.
                        </p>
                    </ActSection>

                    {/* Separator */}
                    <div className="flex items-center justify-center pt-12">
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                        <span className="mx-4 text-yellow-500 text-2xl font-serif">⸻</span>
                        <div className="h-px w-24 bg-yellow-500/30"></div>
                    </div>

                    <ActSection title="Epilogue — Our Turn">
                        <p>
                            Their story became our compass.
                        </p>
                        <p>
                            It wasn&apos;t the zeros saved, or even the zeros spent, but the way each decision irradiated the days that followed.
                        </p>
                        <p>
                            We, still novices with our own 25 BTC and a notebook full of blank pages, decided in that Bordeaux twilight to chase the same equation:
                        </p>
                        <blockquote className="my-6 border-l-4 border-yellow-500/60 bg-black/20 p-4 text-yellow-500/90 rounded-r-lg text-lg italic">
                            Dream big, spend wisely, love audaciously—because the only true currency is the story you get to tell at sunset.
                        </blockquote>
                        <p>
                            And so we raise a glass to them, to the Riviera, to Provence, and to every unreal plan that outshines reality.
                        </p>
                        <p>
                            May your simulations run wild, and may your ledger always reflect more sunrises than withdrawals.
                        </p>
                    </ActSection>

                </div>
            </div>
        </div>
    );
}
