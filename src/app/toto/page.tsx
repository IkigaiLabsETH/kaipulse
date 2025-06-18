"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TotoPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Japanese Innovation • Smart Technology • Sustainable Design</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                TOTO
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Revolutionizing the Bathroom Experience</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/bNi5HCB2mUM"
                title="TOTO Innovation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Company Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Revolutionizing the Bathroom Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In the world of bathroom fixtures, few names resonate as powerfully as TOTO. Synonymous with cutting-edge technology, unparalleled hygiene, and a commitment to sustainability, TOTO has transformed the humble toilet into a symbol of Japanese innovation and cultural reverence for cleanliness. From its iconic Washlet bidet seat to its high-efficiency flushing systems, TOTO has set the global standard for what a toilet can be.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Innovation Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Revolutionary Washlet bidet technology</li>
                  <li>High-efficiency Tornado Flushing System</li>
                  <li>Proprietary Cefiontect glaze technology</li>
                  <li>Smart Neorest luxury toilets</li>
                  <li>Global expansion and cultural impact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🚿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Washlet Technology
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Revolutionary Bidet Innovation
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌊</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Tornado Flush
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                High-Efficiency System
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏭</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Global Reach
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Worldwide Innovation
              </p>
            </div>
          </div>

          {/* Company History Timeline */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Innovation Journey
            </h3>
            <div className="space-y-8">
              {/* 1917-1980: Origins & Foundation */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1917-1980: The Origins of TOTO</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    TOTO&apos;s story begins in 1917 in Kitakyushu, an industrial port city in Fukuoka Prefecture, Japan. Founded by Kazuchika Okura under the name Toyo Toki Co., Ltd. (meaning &quot;Oriental Ceramics&quot;), the company emerged from Okura&apos;s vision to modernize Japanese sanitation. Inspired by the gleaming ceramic flush toilets he encountered during a trip to Europe in 1903, Okura sought to bring Western-style seated toilets to Japan.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Milestones:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>1914: First Western-style flush toilet</li>
                        <li>1917: Toyo Toki Co., Ltd. established</li>
                        <li>1970: Company renamed to TOTO</li>
                        <li>1980: Washlet introduction</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Early Focus:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Quality ceramics manufacturing</li>
                        <li>Sanitation modernization</li>
                        <li>Western-style toilet adoption</li>
                        <li>Industrial excellence</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1980-2000: Washlet Revolution */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1980-2000: The Washlet Revolution</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    TOTO&apos;s most revolutionary contribution to the bathroom industry is the Washlet, a toilet seat with an integrated bidet introduced in 1980. The Washlet redefined personal hygiene by offering a warm-water cleansing spray, a heated seat, and air drying. Its debut marked the beginning of Japan&apos;s high-tech toilet era, transforming the bathroom into a space of comfort and cleanliness.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Washlet Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Warm-water cleansing spray</li>
                        <li>Heated seat technology</li>
                        <li>Air drying function</li>
                        <li>Precision temperature control</li>
                        <li>Self-cleaning nozzles</li>
                        <li>Automatic lid operation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Cultural Impact:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>80% Japanese household adoption</li>
                        <li>60+ million units sold globally</li>
                        <li>Tourist attraction status</li>
                        <li>Hygiene culture transformation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2000-2015: Global Expansion */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">2000-2015: Global Expansion & Innovation</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    TOTO&apos;s global expansion began with strategic market entries and technological innovations. The company entered the U.S. market in 1989 with water-efficient 1.6 GPF toilets during a California drought. The Neorest series was introduced, representing TOTO&apos;s most advanced toilets with smart technology integration and luxury features.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Global Markets:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>U.S. market entry (1989)</li>
                        <li>European expansion (2009)</li>
                        <li>Asian market growth</li>
                        <li>Production facilities in 9 countries</li>
                        <li>30,000+ employees worldwide</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Technological Advances:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Neorest luxury series</li>
                        <li>Tornado Flushing System</li>
                        <li>Cefiontect glaze technology</li>
                        <li>Smart sensor integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2015-Present: Future Innovation */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">2015-Present: Future Innovation & Legacy</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    TOTO continues to innovate with health monitoring features, sustainable design, and semiconductor diversification. The company opened the TOTO Museum in Kitakyushu in 2015, celebrating its 100th anniversary and showcasing the evolution of toilet technology. Recent innovations include medical sensors and wellness-focused features.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Recent Innovations:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Health monitoring sensors</li>
                        <li>Bowel scan functionality</li>
                        <li>Sustainable manufacturing</li>
                        <li>Semiconductor materials</li>
                        <li>Smart home integration</li>
                        <li>Wellness technology</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Future Vision:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Global market expansion</li>
                        <li>Environmental sustainability</li>
                        <li>Preventative healthcare</li>
                        <li>Cultural innovation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Revolutionary Products
            </h3>
            <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 text-center leading-relaxed">
              Discover TOTO&apos;s most innovative bathroom solutions, each showcasing Japanese engineering excellence and cultural sensitivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Washlet</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Revolutionary Bidet Technology</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">The iconic toilet seat with integrated bidet, featuring warm-water cleansing, heated seats, and air drying. Over 60 million units sold globally.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.totousa.com/washlet" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Explore Washlet
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Neorest</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Luxury Smart Toilet</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">TOTO&apos;s most advanced toilet series, featuring health monitoring, UV-cleaning nozzles, and customizable settings. Priced $6,000-$22,000.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.totousa.com/neorest" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Explore Neorest
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Tornado Flush</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">High-Efficiency System</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Revolutionary flushing system using two powerful nozzles for centrifugal rinsing action. Uses only 1.0-1.28 gallons per flush.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.totousa.com/tornado-flush" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Cefiontect Glaze</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Proprietary Technology</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Super-smooth, non-porous surface that prevents waste from sticking to the bowl. Reduces cleaning chemicals and enhances hygiene.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.totousa.com/cefiontect" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Discover Technology
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">TOTO Museum</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Kitakyushu, Japan</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Celebrating 100 years of innovation, the museum showcases toilet evolution from ancient styles to modern smart technology.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.toto.co.jp/museum/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Visit Museum
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">FD Series</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Wall-Mounted Design</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Redesigned wall-mounted toilet with seamless design and easy-clean features, perfect for modern bathroom aesthetics.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.totousa.com/fd-series" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Series
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
