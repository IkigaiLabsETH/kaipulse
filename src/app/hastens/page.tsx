"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HastensPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Sleep • Swedish Craftsmanship • Natural Materials</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Hästens
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Art of Sleep Since 1852</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/wYPa5b0vsv8"
                title="Hästens Luxury Beds"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <Link href="https://www.hastens.com/fr/hastens-for-everybody" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-none hover:bg-yellow-400 transition-all duration-300 text-lg">
                  Discover Hästens Collection
                </Button>
              </Link>
            </div>
          </div>

          {/* Heritage Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Six Generations of Swedish Excellence
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Founded in 1852, Hästens has been family-owned for six generations, emphasizing craftsmanship and innovation. The iconic blue check pattern, introduced in 1978, remains a hallmark of their brand identity. Each bed is made by artisans trained for up to 7 years, ensuring the highest quality and attention to detail.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Heritage Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Family-owned since 1852</li>
                  <li>Official bed supplier to Swedish Royal Court</li>
                  <li>Iconic blue check pattern since 1978</li>
                  <li>7-year artisan training program</li>
                  <li>25-year warranty on all beds</li>
                  <li>Designed to last over 100 years</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Natural Materials
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Horsehair, Wool, Cotton & Flax
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Spring System
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Patented Technology
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">👑</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Royal Heritage
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Swedish Royal Court Supplier
              </p>
            </div>
          </div>

          {/* Bed Models Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Luxury Bed Collection
            </h3>
            <div className="space-y-8">
              {/* 2000T Model */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Hästens 2000T - The Accessible Luxury</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The 2000T represents the perfect entry point into the world of Hästens luxury. Starting at $22,980, this model combines horsehair, cotton, and wool for a supportive and comfortable sleeping surface. It features Hästens&apos; patented Spring System, which distributes weight evenly and reduces pressure points, along with the signature blue check pattern that has become a brand icon.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Signature blue check pattern</li>
                        <li>Patented Spring System</li>
                        <li>Horsehair, cotton & wool blend</li>
                        <li>Balanced support & comfort</li>
                        <li>25-year warranty</li>
                        <li>Made in Sweden</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Specifications:</h5>
                      <p className="text-white/80 font-satoshi">Starting Price: $22,980</p>
                      <p className="text-white/80 font-satoshi">Construction: Handcrafted</p>
                      <p className="text-white/80 font-satoshi">Materials: Natural fibers</p>
                      <p className="text-white/80 font-satoshi">Warranty: 25 years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Herlewing Model */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Hästens Herlewing - Advanced Support Technology</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Priced at approximately $30,000, the Herlewing represents a significant step up in technology and comfort. This model features three spring systems, enhancing support and allowing for personalized comfort. It contains 35 layers of natural materials, including horsehair, wool, cotton, and flax, designed for optimal temperature regulation and a cool, comfortable sleep experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Three spring systems</li>
                        <li>35 layers of natural materials</li>
                        <li>Temperature regulation</li>
                        <li>Personalized comfort</li>
                        <li>Enhanced support</li>
                        <li>Cool sleep technology</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Specifications:</h5>
                      <p className="text-white/80 font-satoshi">Price: ~$30,000</p>
                      <p className="text-white/80 font-satoshi">Spring Systems: 3</p>
                      <p className="text-white/80 font-satoshi">Material Layers: 35</p>
                      <p className="text-white/80 font-satoshi">Focus: Temperature control</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vividus Model */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Hästens Vividus - The Masterpiece</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    At approximately $195,000, the Vividus represents the pinnacle of luxury sleep technology. This masterpiece takes 240 hours to construct, requiring 45 days to complete a single order with nine of the world&apos;s foremost bed artisans. It features taller springs and additional layers of natural materials, providing enhanced comfort and a sense of weightlessness that defines true luxury.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>240 hours construction time</li>
                        <li>9 master artisans</li>
                        <li>Taller springs</li>
                        <li>Enhanced weightlessness</li>
                        <li>5 firmness levels</li>
                        <li>Bespoke customization</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Specifications:</h5>
                      <p className="text-white/80 font-satoshi">Price: ~$195,000</p>
                      <p className="text-white/80 font-satoshi">Construction: 240 hours</p>
                      <p className="text-white/80 font-satoshi">Artisans: 9 master craftsmen</p>
                      <p className="text-white/80 font-satoshi">Firmness: 5 levels available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grand Vividus Model */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Hästens Grand Vividus - The Ultimate Luxury</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Starting at $588,000, the Grand Vividus is the most exclusive bed in the world. This extraordinary creation takes 600 hours to make, entirely hand-built by Hästens&apos; most esteemed craftsmen in their factory in Köping, Sweden. It features leather edges, stingray skin corners, and brass adornments, making it not just a bed but a work of art for the bedroom. Celebrity clients include Drake and Beyoncé.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>600 hours construction time</li>
                        <li>Leather edges</li>
                        <li>Stingray skin corners</li>
                        <li>Brass adornments</li>
                        <li>Ultimate craftsmanship</li>
                        <li>Celebrity ownership</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Specifications:</h5>
                      <p className="text-white/80 font-satoshi">Price: $588,000+</p>
                      <p className="text-white/80 font-satoshi">Construction: 600 hours</p>
                      <p className="text-white/80 font-satoshi">Materials: Premium leather</p>
                      <p className="text-white/80 font-satoshi">Status: Ultra-luxury</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maranga vs 2000T Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Maranga vs 2000T: Choosing Your Perfect Hästens
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              Two exceptional models catering to different luxury segments - discover which Hästens bed aligns with your sleep preferences and investment level.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Maranga Model */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hästens Maranga - Accessible Luxury</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Price Range:</span>
                    <span className="text-yellow-400 font-bold">$13,990 - $27,980</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Layers:</span>
                    <span className="text-yellow-400 font-bold">27 layers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Spring System:</span>
                    <span className="text-yellow-400 font-bold">13 cm pocket + Bonnell</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Construction:</span>
                    <span className="text-yellow-400 font-bold">2 hours side-stitching</span>
                  </div>
                </div>
                <p className="text-white/80 font-satoshi mt-4">
                  Perfect for mid-range luxury seekers who want Hästens quality at a more accessible price point. Offers responsive pliability with a gentle hug when lying down.
                </p>
              </div>

              {/* 2000T Model */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hästens 2000T - Flagship Luxury</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Price Range:</span>
                    <span className="text-yellow-400 font-bold">$22,980 - $55,780+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Layers:</span>
                    <span className="text-yellow-400 font-bold">37 layers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Spring System:</span>
                    <span className="text-yellow-400 font-bold">18 cm pocket + additional</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Construction:</span>
                    <span className="text-yellow-400 font-bold">More intricate craftsmanship</span>
                  </div>
                </div>
                <p className="text-white/80 font-satoshi mt-4">
                  Hästens&apos; flagship model offering the pinnacle of luxury sleep. Features advanced spring technology and refined, cloud-like comfort for the ultimate sleep experience.
                </p>
              </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="text-yellow-500 font-bold p-4">Feature</th>
                    <th className="text-yellow-500 font-bold p-4">Maranga</th>
                    <th className="text-yellow-500 font-bold p-4">2000T</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Price Range</td>
                    <td className="p-4">$13,990 - $27,980</td>
                    <td className="p-4">$22,980 - $55,780+</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Material Layers</td>
                    <td className="p-4">27 layers</td>
                    <td className="p-4">37 layers</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Spring System</td>
                    <td className="p-4">13 cm pocket + Bonnell</td>
                    <td className="p-4">18 cm pocket + additional</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Comfort Level</td>
                    <td className="p-4">Responsive pliability</td>
                    <td className="p-4">Ultimate luxury feel</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Target Audience</td>
                    <td className="p-4">Mid-range luxury seekers</td>
                    <td className="p-4">High-end luxury seekers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-yellow-400">Warranty</td>
                    <td className="p-4">25 years</td>
                    <td className="p-4">25 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Differences Summary */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Why Choose Maranga?</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• More affordable entry into Hästens luxury</li>
                  <li>• Excellent value for money</li>
                  <li>• Responsive, weightless comfort</li>
                  <li>• Perfect for mid-range luxury seekers</li>
                  <li>• Same 25-year warranty as flagship models</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Why Choose 2000T?</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Hästens&apos; flagship model</li>
                  <li>• Advanced spring technology</li>
                  <li>• Enhanced support and comfort</li>
                  <li>• More intricate craftsmanship</li>
                  <li>• Ultimate luxury sleep experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Superia vs Excel Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Superia vs Excel: Mid-Range Luxury Frame Beds
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              Two exceptional frame bed models offering luxury comfort at accessible price points - discover which suits your sleep preferences and budget.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Superia Model */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hästens Superia - Weightless Luxury</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Price Range:</span>
                    <span className="text-yellow-400 font-bold">$11,423 - $19,038</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Layers:</span>
                    <span className="text-yellow-400 font-bold">15 layers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Spring System:</span>
                    <span className="text-yellow-400 font-bold">Double Hästens springs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Frame:</span>
                    <span className="text-yellow-400 font-bold">Swedish pine</span>
                  </div>
                </div>
                <p className="text-white/80 font-satoshi mt-4">
                  Offers a &quot;bottomless&quot; weightless feel with deeply supportive comfort. Perfect for those seeking maximum softness and luxurious sinking sensation.
                </p>
              </div>

              {/* Excel Model */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hästens Excel - Plush Comfort</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Price Range:</span>
                    <span className="text-yellow-400 font-bold">$9,890 - $19,780</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Layers:</span>
                    <span className="text-yellow-400 font-bold">15 layers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Spring System:</span>
                    <span className="text-yellow-400 font-bold">Bonnell + pocket springs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Frame:</span>
                    <span className="text-yellow-400 font-bold">Swedish pine + flax</span>
                  </div>
                </div>
                <p className="text-white/80 font-satoshi mt-4">
                  Provides a deep and plush experience that adjusts to body movements. Offers balanced softness and support for uninterrupted sleep.
                </p>
              </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="text-yellow-500 font-bold p-4">Feature</th>
                    <th className="text-yellow-500 font-bold p-4">Superia</th>
                    <th className="text-yellow-500 font-bold p-4">Excel</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Price Range</td>
                    <td className="p-4">$11,423 - $19,038</td>
                    <td className="p-4">$9,890 - $19,780</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Material Layers</td>
                    <td className="p-4">15 layers</td>
                    <td className="p-4">15 layers</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Spring System</td>
                    <td className="p-4">Double Hästens springs</td>
                    <td className="p-4">Bonnell + pocket springs</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Comfort Profile</td>
                    <td className="p-4">Bottomless, weightless</td>
                    <td className="p-4">Deep and plush</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Frame Construction</td>
                    <td className="p-4">Swedish pine, finger joints</td>
                    <td className="p-4">Swedish pine, flax encasement</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-yellow-400">Warranty</td>
                    <td className="p-4">25 years</td>
                    <td className="p-4">25 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Differences Summary */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Why Choose Superia?</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Maximum softness and weightless feel</li>
                  <li>• &quot;Bottomless&quot; sinking sensation</li>
                  <li>• Poetic balance of comfort and support</li>
                  <li>• Traditional corner finger joint construction</li>
                  <li>• Multiple top mattress options (BV, BJ, BJX)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Why Choose Excel?</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Lower starting price point</li>
                  <li>• Balanced softness and support</li>
                  <li>• Natural flax encasement reduces noise</li>
                  <li>• Adjusts to body movements</li>
                  <li>• Deep and plush comfort profile</li>
                </ul>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-8 bg-black/30 p-6 rounded-none border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Shared Features</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Materials</h5>
                  <ul className="text-white/80 font-satoshi text-sm space-y-1">
                    <li>• Horsetail hair</li>
                    <li>• Wool</li>
                    <li>• Cotton</li>
                    <li>• Flax</li>
                    <li>• Swedish pine frame</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Customization</h5>
                  <ul className="text-white/80 font-satoshi text-sm space-y-1">
                    <li>• Multiple firmness levels</li>
                    <li>• Various sizes available</li>
                    <li>• Custom upholstery options</li>
                    <li>• Leg style choices</li>
                    <li>• Top mattress options</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Quality</h5>
                  <ul className="text-white/80 font-satoshi text-sm space-y-1">
                    <li>• Handcrafted in Sweden</li>
                    <li>• 25-year warranty</li>
                    <li>• OEKO-TEX® 100 certified</li>
                    <li>• Sustainable materials</li>
                    <li>• No synthetic components</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Herlewing Dedicated Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Hästens Herlewing: Advanced Support Technology
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              The Herlewing represents the perfect balance of luxury and advanced engineering, featuring 38 layers of natural materials and three spring systems for personalized comfort.
            </p>

            {/* Hero Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">38</div>
                <div className="text-white/80 font-satoshi text-sm">Material Layers</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">3</div>
                <div className="text-white/80 font-satoshi text-sm">Spring Systems</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">1,750</div>
                <div className="text-white/80 font-satoshi text-sm">Total Springs</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">25</div>
                <div className="text-white/80 font-satoshi text-sm">Year Warranty</div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Spring Technology</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• 15 cm pocket spring system for individualized support</li>
                    <li>• 8 cm Bonnell spring system for firmness</li>
                    <li>• Reinforced edge springs to prevent rolling out</li>
                    <li>• Reinforced corner springs covered in flax</li>
                    <li>• 1,750 total springs for robust support</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Natural Materials</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• 4 layers of hand-teased J Horsetail hair</li>
                    <li>• 12 layers of cotton & wool</li>
                    <li>• 2 layers of flax for sound insulation</li>
                    <li>• 100% cotton bolster fabric</li>
                    <li>• Solid Swedish pine frame</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Comfort & Support</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• Weightless, cloud-like sleeping experience</li>
                    <li>• Natural temperature regulation</li>
                    <li>• Almost bottomless feel</li>
                    <li>• Gentle embrace for optimal relaxation</li>
                    <li>• Excellent spinal alignment</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Customization Options</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• 4 firmness levels (soft to extra firm)</li>
                    <li>• Over 20,000 possible combinations</li>
                    <li>• Blue Check and Silver Beige Check included</li>
                    <li>• Custom fabric options available</li>
                    <li>• Unique Hästens bed legs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="bg-black/30 p-6 rounded-none border border-yellow-500/20 mb-8">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Technical Specifications</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-3">Dimensions</h5>
                  <div className="space-y-2 text-white/80 font-satoshi">
                    <div className="flex justify-between">
                      <span>Overall Height:</span>
                      <span>65 cm (25.6&quot;)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Top Mattress:</span>
                      <span>5 cm (2&quot;)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Middle Mattress:</span>
                      <span>24 cm (9.4&quot;)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Base:</span>
                      <span>27 cm (10.6&quot;)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Legs:</span>
                      <span>9 cm (3.5&quot;)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-3">Available Sizes</h5>
                  <div className="space-y-2 text-white/80 font-satoshi">
                    <div className="flex justify-between">
                      <span>Queen:</span>
                      <span>152 x 203 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>King:</span>
                      <span>193 x 203 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>California King:</span>
                      <span>183 x 213 cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Warranty */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Investment & Value</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Price Range:</span>
                    <span className="text-yellow-400 font-bold text-xl">~$30,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Warranty:</span>
                    <span className="text-yellow-400 font-bold">25 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Lifespan:</span>
                    <span className="text-yellow-400 font-bold">100+ years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Construction:</span>
                    <span className="text-yellow-400 font-bold">Handcrafted</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Quality Certifications</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• OEKO-TEX® 100 certified</li>
                  <li>• Latex-free construction</li>
                  <li>• Sustainably produced materials</li>
                  <li>• Ethically sourced components</li>
                  <li>• Natural air conditioning properties</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Herlewing */}
            <div className="bg-black/30 p-6 rounded-none border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Why Choose the Herlewing?</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Advanced Technology</h5>
                  <p className="text-white/80 font-satoshi text-sm">
                    Three spring systems working in harmony provide personalized support and exceptional comfort for every body type.
                  </p>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Natural Comfort</h5>
                  <p className="text-white/80 font-satoshi text-sm">
                    38 layers of natural materials create a weightless, cloud-like experience with superior temperature regulation.
                  </p>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Mid-Range Luxury</h5>
                  <p className="text-white/80 font-satoshi text-sm">
                    Perfect balance of luxury and accessibility, offering Hästens quality at a more attainable price point than flagship models.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Model Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="text-yellow-500 font-bold p-4">Model</th>
                    <th className="text-yellow-500 font-bold p-4">Price Range</th>
                    <th className="text-yellow-500 font-bold p-4">Construction Time</th>
                    <th className="text-yellow-500 font-bold p-4">Key Features</th>
                    <th className="text-yellow-500 font-bold p-4">Target Audience</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">2000T</td>
                    <td className="p-4">$22,980+</td>
                    <td className="p-4">Not specified</td>
                    <td className="p-4">Blue check pattern, Spring System</td>
                    <td className="p-4">Luxury seekers on modest budget</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Herlewing</td>
                    <td className="p-4">~$30,000</td>
                    <td className="p-4">Not specified</td>
                    <td className="p-4">3 spring systems, 35 layers</td>
                    <td className="p-4">Advanced support & comfort</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Vividus</td>
                    <td className="p-4">~$195,000</td>
                    <td className="p-4">240 hours</td>
                    <td className="p-4">Taller springs, weightlessness</td>
                    <td className="p-4">High-end luxury seekers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-yellow-400">Grand Vividus</td>
                    <td className="p-4">$588,000+</td>
                    <td className="p-4">600 hours</td>
                    <td className="p-4">Leather, stingray skin, brass</td>
                    <td className="p-4">Ultra-luxury exclusivity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Considerations */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Investment & Longevity
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Warranty & Care</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• 25-year warranty against spring or frame breakage</li>
                  <li>• Designed to last over 100 years with proper care</li>
                  <li>• Natural materials can be reused or reclaimed</li>
                  <li>• Sustainable and environmentally conscious</li>
                  <li>• No synthetic materials used</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Customization Options</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Firmness levels (extra soft to extra firm)</li>
                  <li>• Material choices and combinations</li>
                  <li>• Size and dimension customization</li>
                  <li>• Bespoke design elements</li>
                  <li>• Personal consultation with experts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Models Cards */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Featured Models
            </h3>
            <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 text-center leading-relaxed">
              Discover our curated selection of Hästens&apos; most exceptional bed models, each offering unique experiences and unparalleled sleep quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">2000T</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Entry Luxury</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">The perfect introduction to Hästens luxury with signature blue check pattern and patented Spring System.</p>
                  <div className="text-yellow-500 font-bold text-lg">$22,980+</div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Herlewing</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Advanced Technology</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Three spring systems and 35 layers of natural materials for personalized support and temperature regulation.</p>
                  <div className="text-yellow-500 font-bold text-lg">~$30,000</div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Vividus</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Masterpiece</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">240 hours of construction by nine master artisans, featuring taller springs and enhanced weightlessness.</p>
                  <div className="text-yellow-500 font-bold text-lg">~$195,000</div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Grand Vividus</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Ultimate Luxury</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">600 hours of craftsmanship with leather edges, stingray skin corners, and brass adornments.</p>
                  <div className="text-yellow-500 font-bold text-lg">$588,000+</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
