"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/ui/grid';
import Link from 'next/link';
import Image from 'next/image';

export default function EcoFlowPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">Off-Grid & Whole-Home Power</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">DELTA Pro Ultra</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              The most advanced, scalable home backup and off-grid power solution. 6,144 Wh LiFePO₄ battery, 7,200 W inverter, stackable to 90 kWh. Solar, grid, and generator charging. Run your entire home for days.
            </p>
            <Link href="https://www.ecoflow.com/us/delta-pro-ultra" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Shop DELTA Pro Ultra
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sCxg4O3Iczk"
                title="EcoFlow DELTA Pro Ultra Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">EcoFlow Off-Grid & Whole-Home Power Solutions</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            EcoFlow delivers intelligent, scalable energy for every scenario: from full home backup to off-grid adventures. Modular batteries, high-wattage inverters, and rapid solar charging keep you powered through anything.
          </p>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Whole-Home Backup</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Run your entire home—including HVAC, appliances, and essentials—for days. Automatic grid-to-backup switchover in 20 ms with Smart Home Panel 2.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Off-Grid Living</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Power cabins, RVs, or remote sites with multi-day autonomy. Expandable batteries and high solar input for true independence.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Rapid Charging & Multi-Source</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Recharge via grid, solar (up to 5,600 W), or generator/EV. 8.8 kW MultiCharge fills 12 kWh in ~2 h. App control, IP54, and whisper-quiet operation.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Feature Image Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
            <Image
              src="/ecoflow_pro.jpg"
              alt="EcoFlow DELTA Pro Ultra Power Station"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="text-center mt-8">
            <h3 className="text-2xl font-epilogue text-yellow-400 mb-4">DELTA Pro Ultra Power Station</h3>
            <p className="text-lg text-white/80 font-satoshi">
              Experience unmatched power capacity and versatility with the DELTA Pro Ultra.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Product Line Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">EcoFlow Product Lineup</h2>
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">DELTA Pro Ultra</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>6,144 Wh battery, 7,200 W AC inverter</li>
                  <li>Stackable to 90 kWh (15 units), 21.6 kW output</li>
                  <li>Solar input: up to 5,600 W</li>
                  <li>Smart Home Panel 2: 20 ms transfer, 12 circuits, app control</li>
                  <li>5-year warranty, CES 2024 Innovation Award</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">DELTA Pro 3</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>4,096 Wh battery, 4,000 W inverter (6,000 W X-Boost)</li>
                  <li>Expandable to 12 kWh (per unit), up to 48 kWh system</li>
                  <li>Solar input: up to 2,600 W</li>
                  <li>IP65 battery, wheels for mobility, app monitoring</li>
                  <li>5-year warranty</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">DELTA Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>3,600 Wh LFP battery, 4,500 W X-Boost</li>
                  <li>Expandable to 10.8 kWh, 25 kWh system</li>
                  <li>Solar input: up to 1,600 W</li>
                  <li>Plug-and-play home backup, 5-year warranty</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">DELTA 2 Max</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>2,048 Wh LFP battery, 2,400 W inverter (3,400 W X-Boost)</li>
                  <li>Expandable to 6,144 Wh (2 extra batteries)</li>
                  <li>Solar input: up to 1,000 W</li>
                  <li>Lightweight, portable, 5-year warranty</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Smart Generator Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Smart Generator 4000</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Dual-fuel (gas/LPG) generator designed for seamless integration with DELTA Pro systems. 3,200 W AC/DC output, 40% more fuel-efficient, app-enabled, and built for emergencies or remote power.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-satoshi">
            Four auto-start modes, real-time alerts, and up to 9.6 kWh per gallon. 3-year warranty.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Case Study Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Case Study: Off-Grid Home in South-West France</h2>
          
          <div className="space-y-8">
            {/* Overview Card */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">
                  Complete off-grid solution for a home consuming 18,000 kWh annually (≈1,500 kWh monthly) in Morcenx, France.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="text-yellow-400 font-epilogue mb-2">Solar Conditions</h4>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                      <li>3-5 peak-sun-hours daily</li>
                      <li>1,300 kWh/kWp annual yield</li>
                      <li>Optimal for solar generation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-epilogue mb-2">System Requirements</h4>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                      <li>15-16 kWp solar array</li>
                      <li>Multi-day battery backup</li>
                      <li>Winter backup solution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solar Configuration Card */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Solar Array Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-white/80 font-satoshi">
                    <thead>
                      <tr className="border-b border-yellow-500/20">
                        <th className="text-left py-2 px-4">Setup</th>
                        <th className="text-left py-2 px-4">Power</th>
                        <th className="text-left py-2 px-4">Panels</th>
                        <th className="text-left py-2 px-4">Area</th>
                        <th className="text-left py-2 px-4">Summer Output</th>
                        <th className="text-left py-2 px-4">Winter Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4">Recommended</td>
                        <td className="py-2 px-4">16 kWp</td>
                        <td className="py-2 px-4">38 × 420W</td>
                        <td className="py-2 px-4">76 m²</td>
                        <td className="py-2 px-4">70-75 kWh/day</td>
                        <td className="py-2 px-4">30-35 kWh/day</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* EcoFlow Solution Card */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">EcoFlow Hardware Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li>3× DELTA Pro Ultra inverters (handling 5.6 kW PV input each)</li>
                  <li>9× 6.1 kWh battery packs (≈54.9 kWh total capacity)</li>
                  <li>Smart Home Panel 2 for seamless integration</li>
                  <li>EcoFlow Smart Generator 4000 for winter backup</li>
                </ul>
                <div className="mt-6">
                  <h4 className="text-yellow-400 font-epilogue mb-2">Investment Overview</h4>
                  <p className="text-white/80 font-satoshi">
                    Total system cost: ≈48,000€ (before incentives)<br />
                    Net cost after 30% MaPrimeRenov&apos; + VAT relief: ≈34,000€
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Tesla Charging Use Case Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Charging a Tesla Model 3 Performance at Night</h2>
          <Card className="bg-black border-yellow-500">
            <CardHeader>
              <CardTitle className="font-epilogue text-xl text-yellow-400">How many solar panels to add 20% charge (60 → 80%) each night?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1 mb-4">
                <li>Usable battery pack: <span className="text-yellow-400">75 kWh</span></li>
                <li>20% refill: <span className="text-yellow-400">15 kWh</span></li>
                <li>+ ≈10% AC-charging losses → <span className="text-yellow-400">16.5 kWh</span> needed from battery/PV</li>
                <li>Average PV yield near Bordeaux: <span className="text-yellow-400">3.5 kWh kWp⁻¹ day⁻¹</span></li>
                <li>400 W panel = 0.4 kWp → <span className="text-yellow-400">1.4 kWh/panel/day</span> (avg), <span className="text-yellow-400">0.56 kWh/panel/day</span> (mid-winter)</li>
              </ul>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-white/80 font-satoshi">
                  <thead>
                    <tr className="border-b border-yellow-500/20">
                      <th className="text-left py-2 px-4">Scenario</th>
                      <th className="text-left py-2 px-4">Energy Target</th>
                      <th className="text-left py-2 px-4">Panels (400 W)</th>
                      <th className="text-left py-2 px-4">Array Size (kWp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">Fair-weather (spring-autumn)</td>
                      <td className="py-2 px-4">16.5 kWh</td>
                      <td className="py-2 px-4">12</td>
                      <td className="py-2 px-4">4.8</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Year-round (incl. December)</td>
                      <td className="py-2 px-4">16.5 kWh</td>
                      <td className="py-2 px-4">30</td>
                      <td className="py-2 px-4">12</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Practical compromise (≈90% nights)</td>
                      <td className="py-2 px-4">16.5 kWh</td>
                      <td className="py-2 px-4">20</td>
                      <td className="py-2 px-4">8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-4">
                <h4 className="text-yellow-400 font-epilogue mb-2">What this means in practice</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li><span className="text-yellow-400">Battery buffer is mandatory:</span> Your car charges after sunset, so the day&apos;s solar harvest must be stored first. One DELTA Pro Ultra inverter + three 6.1 kWh packs (18 kWh) matches the nightly need with headroom for cloudy days.</li>
                  <li><span className="text-yellow-400">Grid or generator as safety net:</span> Even a 12 kWp array will have a few dark winter days; an EcoFlow Smart Generator or grid connection removes range anxiety.</li>
                  <li><span className="text-yellow-400">Roof area check:</span> 400 W all-black modules are ~1.8 m² each:
                    <ul className="ml-6 list-disc">
                      <li>12 panels → 22 m²</li>
                      <li>20 panels → 36 m²</li>
                      <li>30 panels → 54 m²</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Pool Heating Use Case Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Heating Your Pool Year-Round with EcoFlow Solar</h2>
          <Card className="bg-black border-yellow-500">
            <CardHeader>
              <CardTitle className="font-epilogue text-xl text-yellow-400">Sizing PV for the Pool-Heat-Pump Load</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1 mb-4">
                <li>Pool size: <span className="text-yellow-400">12 m × 6 m</span></li>
                <li>Heat pump daily consumption: <span className="text-yellow-400">25 kWh</span></li>
                <li>+ ≈10% round-trip losses → <span className="text-yellow-400">27.5 kWh</span> required from PV</li>
                <li>Annual specific yield (Morcenx, SW-France): <span className="text-yellow-400">1,200 kWh kWp⁻¹ yr⁻¹</span></li>
                <li>400 W panel = 0.4 kWp → <span className="text-yellow-400">1.3 kWh/panel/day</span> (avg), <span className="text-yellow-400">0.5 kWh/panel/day</span> (mid-winter)</li>
              </ul>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-white/80 font-satoshi">
                  <thead>
                    <tr className="border-b border-yellow-500/20">
                      <th className="text-left py-2 px-4">Scenario</th>
                      <th className="text-left py-2 px-4">Energy Target</th>
                      <th className="text-left py-2 px-4">Panels (400 W)</th>
                      <th className="text-left py-2 px-4">PV Capacity (kWp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">Fair-weather (April–Oct)</td>
                      <td className="py-2 px-4">27.5 kWh</td>
                      <td className="py-2 px-4">22</td>
                      <td className="py-2 px-4">8.8</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">All-season (incl. December)</td>
                      <td className="py-2 px-4">27.5 kWh</td>
                      <td className="py-2 px-4">55</td>
                      <td className="py-2 px-4">22</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Practical compromise (≈90% of pool-heating days)</td>
                      <td className="py-2 px-4">27.5 kWh</td>
                      <td className="py-2 px-4">35</td>
                      <td className="py-2 px-4">14</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-4">
                <h4 className="text-yellow-400 font-epilogue mb-2">What this means in practice</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li><span className="text-yellow-400">Roof/ground area:</span> 400 W all-black modules are ~1.8 m² each:
                    <ul className="ml-6 list-disc">
                      <li>22 panels → 40 m²</li>
                      <li>35 panels → 63 m²</li>
                      <li>55 panels → 99 m²</li>
                    </ul>
                  </li>
                  <li><span className="text-yellow-400">Battery buffer:</span> The pool heater runs mostly when the sun is down, so store the harvest first. One DELTA Pro Ultra inverter + three 6.1 kWh packs (18 kWh) handles the nightly draw; add a fourth pack (24 kWh) for cloudy spells.</li>
                  <li><span className="text-yellow-400">Seasonality tip:</span> If you shut the heater off November–February (common in SW France), the 22-panel array is plenty; any surplus sun then goes to household loads or into the Tesla.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-yellow-400 font-epilogue mb-2">Putting it all together</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>If the pool is heated only in the swim season, an ~9 kWp (22-panel) array plus your existing battery stack will keep the water warm with near-zero grid input.</li>
                  <li>If you insist on year-round 28 °C water, size up to 14–22 kWp (35–55 panels) or lean on the grid/generator during the darkest weeks.</li>
                  <li>The array doubles as extra daytime cover for your household load and the Tesla—therefore the incremental panels tend to shorten overall payback rather than lengthen it.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center py-20 px-4">
        <Link href="https://www.ecoflow.com/us/delta-pro-ultra" target="_blank">
          <Button className="bg-yellow-500 text-black font-bold text-xl px-10 py-5 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
            Get EcoFlow Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
