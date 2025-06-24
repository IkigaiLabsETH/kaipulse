"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SixSensesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Residences • Wellness • Nature</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Six Senses
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Residences in Harmony with Nature</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/_qH2kLq3cTQ"
                title="Six Senses Residences"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Six Senses Les Bordes Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6 text-center font-epilogue">
              Six Senses Residences at Les Bordes Estate, Loire Valley
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Location and Context</h3>
                <p className="text-white/80">
                  Located in a 1,400-acre private estate in the Sologne Forest, Loire Valley, France, just 90 minutes from Paris. This UNESCO World Heritage site is known for its châteaux, fine wines, and unspoiled landscapes. The residences are a collection of 52 luxury villas designed to blend modern luxury with the region&apos;s natural and cultural heritage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Residence Details</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Villas range from three to seven bedrooms (2,360 to 7,125 sq ft).</li>
                  <li>Set on plots up to 1.72 acres with private heated pools and south-facing gardens.</li>
                  <li>Design by BLINK Design Group, featuring locally sourced materials.</li>
                  <li>Fully serviced by the Six Senses team with 24-hour concierge, security, and more.</li>
                  <li>Optional hotel-managed rental program available.</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <CardHeader>
                    <CardTitle className="font-epilogue text-xl text-yellow-400">Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">Prices for the first phase range from €2.5 million to €8.8 million.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <CardHeader>
                    <CardTitle className="font-epilogue text-xl text-yellow-400">Development Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">Construction begins in 2024, with opening expected in 2027.</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Amenities and Facilities</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>**Six Senses Hotel and Spa:** 50-key hotel and an 18,000-square-foot spa.</li>
                  <li>**Dining:** Gastronomic restaurant, lounge bar, speakeasy, and all-day dining options.</li>
                  <li>**Les Bordes Golf Club:** Private club with two 18-hole championship courses.</li>
                  <li>**Equestrian Centre:** Managed by Olympic gold medalist Scott Brash.</li>
                  <li>**Activities:** Tennis, pickleball, natural swimming lake, water sports, and more.</li>
                  <li>**Le Village:** Social hub with a bakery, café, and farmers&apos; market.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Ownership Benefits</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Blend of privacy and resort-style amenities.</li>
                  <li>Access to all Six Senses facilities and Loire Valley&apos;s offerings.</li>
                  <li>Opportunity to apply for Les Bordes Country Club & Golf Club membership.</li>
                  <li>Eco-friendly design with a focus on sustainability.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Six Senses Comporta Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6 text-center font-epilogue">
              Six Senses Residences Comporta, Portugal
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Location</h3>
                <p className="text-white/80">
                  Situated in Pinheirinho, Comporta, on Portugal&apos;s Alentejo coastline, 90 minutes south of Lisbon. The 400-hectare estate is nestled between pine forests, sand dunes, and the 62-km-long Comporta Beach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Residences</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Limited collection of fully serviced, luxury branded residences.</li>
                  <li>Design reflects Comporta&apos;s bohemian-chic aesthetic with sustainable materials.</li>
                  <li>Residences range from villas to larger estates with private pools and terraces.</li>
                  <li>Fully managed by Six Senses with an optional rental program.</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <CardHeader>
                    <CardTitle className="font-epilogue text-xl text-yellow-400">Unique Appeal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">Comporta is known as &quot;the Hamptons of Europe,&quot; blending rustic charm with understated luxury, attracting visitors seeking privacy and a connection to nature.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <CardHeader>
                    <CardTitle className="font-epilogue text-xl text-yellow-400">Development Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">Announced as part of the 2023–2028 pipeline, with completion slated for 2028.</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Amenities and Facilities</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>**Six Senses Resort & Spa:** A 72-key hotel and a state-of-the-art wellness facility.</li>
                  <li>**Dining:** Farm-to-table cuisine, pool bar, wine bar, and a Chefs Table.</li>
                  <li>**Golf:** An 18-hole championship golf course integrated with the natural landscape.</li>
                  <li>**Equestrian Centre:** Facilities for horse riding, lessons, and guided tours.</li>
                  <li>**Activities:** Direct beach access, nature trails, organic gardens, and water sports.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Why Consider Comporta?</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                    <li>Its European coastal setting is a natural fit for those interested in France, Spain, and Lisbon.</li>
                    <li>A rare opportunity to own in an emerging luxury market poised for growth.</li>
                    <li>Suitable for year-round living or seasonal escapes with easy access to Lisbon.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-white/70 font-satoshi mb-4">
              For the latest updates and inquiries, contact the Six Senses sales team.
            </p>
            <Link href="mailto:residences@sixsenses.com">
              <Button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300">
                Contact Sales
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
