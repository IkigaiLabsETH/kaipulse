"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/ui/grid';
import Link from 'next/link';

export default function DubaiPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">Crypto Founder Life in Dubai</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">Dubai 2025</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              Experience the pinnacle of crypto entrepreneurship in the world&apos;s most dynamic blockchain hub. Zero taxes, pro-crypto regulations, and a lifestyle that matches your ambitions.
            </p>
            <Link href="https://www.vara.ae/" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Explore VARA Licensing
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/G0fQcV2ErbY"
                title="Dubai Lifestyle Video"
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

      {/* Living Costs Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Living Costs & Lifestyle</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Dubai offers a premium lifestyle with corresponding costs. From luxury apartments to world-class amenities, understand what it takes to live comfortably in this global crypto hub.
          </p>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Housing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Prime area studios and 1BR flats: AED 80-100k/year. Urban outskirts: AED 50-60k/year. Utilities add AED 500-800/month in summer.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Transportation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Efficient metro system, but car-centric lifestyle. Ride-hailing trips cost AED 15-30. Fuel is affordable at AED 1.50-2.00/liter.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Daily Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Basic meal: AED 20-30. Mid-range dinner: AED 80-120/person. Gym membership: AED 200-350/month. Premium venues cost significantly more.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Business Setup Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Crypto Business Setup</h2>
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">VARA Licensing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Registration: ~$30k initial fee</li>
                  <li>Annual maintenance: ~$60k for exchanges</li>
                  <li>4-12 months processing time</li>
                  <li>Required for most crypto operations</li>
                  <li>Access to banking services</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Free Zone Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>DMCC Crypto Centre from AED 34k</li>
                  <li>100% foreign ownership</li>
                  <li>0% corporate tax through 2027</li>
                  <li>Flexi-desk + visa from AED 15-20k</li>
                  <li>600+ crypto firms in DMCC</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Visa Options Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Residency Options</h2>
          <div className="space-y-8 mt-8">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Available Visas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-yellow-400 font-epilogue mb-2">Golden Visa</h4>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                      <li>10-year renewable</li>
                      <li>For tech founders</li>
                      <li>Revenue ≥AED 1-2M/year</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-epilogue mb-2">Green Visa</h4>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                      <li>5-year self-sponsored</li>
                      <li>Freelance permit</li>
                      <li>Income ≥AED 360k/year</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-epilogue mb-2">Remote Work</h4>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                      <li>1-year visa</li>
                      <li>Work remotely</li>
                      <li>$3.5k/month income</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Community Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Crypto Community</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-8">
            Join Dubai&apos;s thriving Web3 ecosystem with regular conferences, hackathons, and networking events. Connect with industry leaders and fellow entrepreneurs in the region&apos;s most active crypto hub.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Major Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>TOKEN2049 (15,000+ attendees)</li>
                  <li>DMCC-Bybit Hackathons</li>
                  <li>Monthly Ethereum Dev Meetups</li>
                  <li>Blockchain Hub Dinners</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Key Players</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Binance (VASP licensed)</li>
                  <li>Bybit Regional HQ</li>
                  <li>Solana Foundation Office</li>
                  <li>600+ DMCC Crypto Firms</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
