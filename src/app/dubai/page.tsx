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
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-center">Premium Living Costs</h2>
          <Card className="bg-black border-yellow-500">
            <CardContent className="pt-6">
              <div className="space-y-6 text-white/80 font-satoshi">
                <p className="text-lg leading-relaxed">
                  Dubai&apos;s ultra-luxury real estate commands premium prices, with Downtown penthouses and Palm Jumeirah villas ranging from AED 15-50M ($4-14M). Premium apartment rentals in iconic locations like Burj Khalifa or Palm start from AED 450,000/year ($123,000) for a 3BR, while luxury villa rentals in Emirates Hills or Palm Jumeirah can exceed AED 1.5M/year ($410,000).
                </p>
                <p className="text-lg leading-relaxed">
                  Monthly expenses reflect the high-end lifestyle. Expect AED 2,500-4,000 ($680-1,100) for utilities in a large residence, AED 3,000-5,000 ($820-1,360) for premium gym memberships, and AED 15,000-25,000 ($4,100-6,800) for a full-time driver. International school fees at top institutions range from AED 70,000-120,000 ($19,000-33,000) per child annually.
                </p>
                <p className="text-lg leading-relaxed">
                  Fine dining and entertainment costs are substantial. A meal at a MICHELIN-starred restaurant averages AED 800-1,500 ($220-410) per person, while VIP table service at premium venues starts from AED 25,000 ($6,800). Private beach club memberships run AED 50,000-100,000 ($13,600-27,000) annually. Luxury car leases (Range Rover, G-Wagon) start from AED 15,000 ($4,100) monthly.
                </p>
                <p className="text-lg leading-relaxed">
                  For a family of four maintaining a luxury lifestyle in Dubai, including premium housing, schooling, staff, and high-end amenities, the annual budget typically ranges from AED 2.5-5M ($680,000-1.36M), varying based on housing choices and lifestyle preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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

      {/* Luxury Lifestyle Links */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Dubai Luxury Living</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-8">
            Explore Dubai&apos;s finest real estate, dining experiences, and luxury accommodations through our curated partners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="https://www.sothebysrealty.com/eng/sales/du-uae/price-low-sort" target="_blank">
              <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Sotheby&apos;s</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Discover exclusive Dubai properties through Sotheby&apos;s Realty</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/dubai" target="_blank">
              <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Luxury Hotels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Browse Dubai&apos;s finest hotels selected by the MICHELIN Guide</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/dubai-emirate/restaurants" target="_blank">
              <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Fine Dining</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Explore MICHELIN-starred restaurants and culinary excellence</p>
                </CardContent>
              </Card>
            </Link>
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
