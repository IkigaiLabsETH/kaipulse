"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SaunaPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Scandinavian Wellness • French Craftsmanship • Luxury Outdoor Living</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Størvatt
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Where Tradition Meets Innovation</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Founded in 1997 by Jan Sidérius and Evert-Jan van Hellenberg Hubar, Størvatt pioneered Nordic baths in Europe, blending Scandinavian wellness traditions with French artisanal craftsmanship.
              </p>
              <p className="text-lg">
                Our premium products, crafted from Western Red Cedar, include wood-fired and electric hot tubs, the innovative Tradition Sauna with Alcove, and customizable spas for 2-10 people.
              </p>
              <p className="text-lg">
                With over 25 years of expertise, we combine sustainability, innovation, and customer satisfaction, backed by comprehensive warranties including a 5-year wood guarantee and lifetime frost protection.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🛁</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Hot Tubs
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Wood-fired & Electric Options
              </p>
              <p className="text-center text-sm text-gray-400 mt-2">
                150-210 cm diameter
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🧖</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Saunas
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Tradition with Modern Comfort
              </p>
              <p className="text-center text-sm text-gray-400 mt-2">
                150-240 cm length
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💆</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Spas
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Customizable Luxury
              </p>
              <p className="text-center text-sm text-gray-400 mt-2">
                2-10 person capacity
              </p>
            </div>
          </div>

          {/* Company History */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Our Journey
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">1997</h4>
                <p className="text-lg">Founded in the Netherlands, introducing Nordic baths to Europe</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">1999</h4>
                <p className="text-lg">Established production facility in Moergestel, Netherlands</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">2008</h4>
                <p className="text-lg">Introduced first wooden hot tub with electric heating</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">2012</h4>
                <p className="text-lg">French branch became independent, expanding European presence</p>
              </div>
            </div>
          </div>

          {/* Product Range */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Product Range
            </h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Hot Tubs</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Experience the perfect blend of tradition and convenience with our wood-fired and electric hot tubs. The Størvatt 180 wood-fired model features a 40 kW stove for rapid heating (1.5-2 hours) and excellent heat retention. Our electric models, introduced in 2008, offer instant warmth with 3 kW heaters and massage jets. Available in diameters of 150, 180, or 210 cm and heights of 90 or 120 cm.
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Wood-fired models with 40 kW stove</li>
                    <li>Electric models with 3 kW heaters</li>
                    <li>Multiple size options</li>
                    <li>Includes accessories (ash shovel, thermometer, cover)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Outdoor Saunas</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Our flagship Tradition Sauna with Alcove features a unique barrel-shaped design crafted from knot-free Red Cedar Clear2 Vertical Grain. The 65 cm open refuge with exterior benches creates a perfect social space for post-sauna relaxation.
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Length options: 150-240 cm</li>
                    <li>6.6 kW Tylö heater with 50 kg volcanic stones</li>
                    <li>LED lighting and premium accessories</li>
                    <li>Customizable window tint options</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Spas</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Our premium spas combine luxury with functionality, featuring advanced technology and customizable options. Available in both built-in and above-ground configurations, they accommodate 2-10 people with features like massage jets and LED lighting.
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Customizable massage jets</li>
                    <li>LED lighting systems</li>
                    <li>Advanced filtration</li>
                    <li>Professional-grade durability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Values */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Our Values
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400">Craftsmanship & Quality</h4>
                <p className="text-white/80">
                  Over 25 years of expertise in handcrafted excellence, using in-house CNC machining and direct material sourcing for unmatched precision.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400">Sustainability</h4>
                <p className="text-white/80">
                  Responsibly sourced materials and durable designs that minimize environmental impact while maximizing product longevity.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400">Customer Care</h4>
                <p className="text-white/80">
                  Comprehensive maintenance services, personalized solutions, and dedicated support throughout your wellness journey.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400">Social Responsibility</h4>
                <p className="text-white/80">
                  Supporting community initiatives and providing professional installation services with a focus on customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link href="https://www.storvatt.fr/en/wooden-sauna/219-6478-tradition-sauna-with-alcove.html#/20-length-180_cm/32-sauna_finishing-cap/110-diametre_sauna-180_cm/113-couleur_de_la_fenetre_horizon-bronze/114-syst_chauf_sauna_horizon-electric_heater_66kw" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-8 rounded-none border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                  Tradition Sauna with Alcove
                </Button>
              </Link>
              <Link href="https://www.storvatt.fr/en/wooden-sauna/46-vision-sauna.html" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-8 rounded-none border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                  Vision Sauna
                </Button>
              </Link>
              <Link href="https://www.storvatt.fr/en/nordic-wooden-spa/37-369-above-ground-spa.htm" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-8 rounded-none border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                  Above Ground Spa
                </Button>
              </Link>
              <Link href="https://www.storvatt.fr/en/nordic-bath/224-7355-wood-fireheated-hot-tub.html" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-8 rounded-none border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                  Wood Fire Heated Nordic Bath
                </Button>
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-4">Explore our premium wellness collection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
