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
