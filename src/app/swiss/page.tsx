"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SwissPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Travel • Wellness • Alpine Adventure</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Switzerland
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Journey Through Swiss Excellence</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/wQ1lJNGoBrA"
                title="Swiss Luxury Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Journey Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Your Dream Swiss Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Experience Switzerland&apos;s finest luxury accommodations, from historic palaces to modern mountain retreats. This carefully curated journey takes you through the country&apos;s most iconic destinations, combining world-class hospitality with breathtaking natural beauty.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Switzerland&apos;s finest hotels</li>
                  <li>World-class spa and wellness experiences</li>
                  <li>Michelin-starred dining throughout</li>
                  <li>Exclusive access to private tours</li>
                  <li>Personalized concierge service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏔️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Alpine Luxury
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Mountain Retreats
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💆‍♀️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Wellness
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Spa & Relaxation
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🍽️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Fine Dining
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Michelin Stars
              </p>
            </div>
          </div>

          {/* Featured Luxury Hotels Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Featured Luxury Stays
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Discover our curated selection of Switzerland&apos;s most exceptional hotels, each offering unique experiences and world-class hospitality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">The Cambrian</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Adelboden</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A contemporary mountain retreat with panoramic alpine views and a world-class spa.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/adelboden/the-cambrian-6747" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">7132 Hotel</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Vals</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">An architectural masterpiece by Peter Zumthor, featuring the iconic thermal baths.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/vals/7132-hotel-8526" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">La Réserve Genève</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Geneva</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A lakeside sanctuary with Michelin-starred dining and an award-winning spa.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/geneva/la-reserve-geneve-hotel-spa-6471" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">La Réserve Eden au Lac</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Zurich</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A historic lakeside hotel with contemporary luxury and stunning city views.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/zurich/la-reserve-eden-au-lac-zurich-10745" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Schweizerhof Zermatt</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Zermatt</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A historic luxury hotel with breathtaking views of the Matterhorn.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/zermatt/schweizerhof-zermatt-9080" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Bürgenstock Resort</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Lake Lucerne</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A mountaintop resort with panoramic views and world-class wellness facilities.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/burgenstock/burgenstock-9744" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Explore More Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Explore More Luxury Stays
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Discover more exceptional accommodations across Switzerland, curated by the Michelin Guide. From historic palaces to modern mountain retreats, find your perfect luxury stay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://guide.michelin.com/fr/fr/hotels-stays/switzerland?arr=2025-06-25&dep=2025-06-26&nA=1&nC=0&nR=1&distinction=all-keys" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-none hover:bg-yellow-400 transition-all duration-300 text-lg">
                  Explore Michelin Guide Hotels
                </Button>
              </Link>
              <Link href="https://www.swissdeluxehotels.com/luxury-hotels/" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-none hover:bg-yellow-400 transition-all duration-300 text-lg">
                  View Swiss Deluxe Hotels
                </Button>
              </Link>
            </div>
          </div>

          {/* Day 1-2: Geneva Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 1-2: Geneva
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Begin your journey in Geneva, where luxury meets lakeside elegance. Stay at La Réserve Genève Hotel & Spa, indulge in the award-winning Nescens Spa, and savor dinner at Tsé Fung, the hotel&apos;s Michelin-starred Chinese restaurant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">La Réserve Genève</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">A lakeside sanctuary with 102 rooms and suites, featuring the award-winning Nescens Spa, private beach, and Michelin-starred dining.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Jet d&apos;Eau</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Geneva&apos;s iconic water fountain, reaching 140 meters high. Best viewed from the lakeshore or during a sunset boat cruise.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Old Town Geneva</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Explore the historic heart of Geneva with its charming cobblestone streets, luxury boutiques, and the stunning St. Pierre Cathedral.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://www.lareserve.ch/en/geneva" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  La Réserve Genève
                </Button>
              </Link>
              <Link href="https://www.lareserve.ch/en/geneva/restaurants/ts-fung" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  Tsé Fung Restaurant
                </Button>
              </Link>
            </div>
          </div>

          {/* Day 3-4: Gstaad Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 3-4: Gstaad
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">The Alpina Gstaad</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Six Senses Spa & Wellness</li>
                  <li>• Michelin-starred Sommet restaurant</li>
                  <li>• Alpine-inspired luxury suites</li>
                  <li>• Private cinema and cigar lounge</li>
                  <li>• Year-round outdoor activities</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Lavaux Vineyards</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• UNESCO World Heritage site</li>
                  <li>• Scenic drive through terraced vineyards</li>
                  <li>• Wine tasting experiences</li>
                  <li>• Lake Geneva views</li>
                  <li>• Historic wine villages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Travel Tips Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Essential Travel Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Planning & Reservations</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Book hotels 6-12 months in advance</li>
                  <li>• Reserve Michelin restaurants early</li>
                  <li>• Plan for seasonal road conditions</li>
                  <li>• Consider private transfers</li>
                  <li>• Check spa booking requirements</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Local Experiences</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Try Swiss fondue and raclette</li>
                  <li>• Visit local markets early morning</li>
                  <li>• Learn basic Swiss German phrases</li>
                  <li>• Experience local festivals</li>
                  <li>• Take scenic train journeys</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 5-6: Lake Lucerne Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 5-6: Lake Lucerne
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Experience architectural elegance and cinematic views at the Bürgenstock Resort Lake Lucerne. Bathe in the cliffside infinity pool, relax in the 10,000m² Alpine Spa, and dine at Parisa for a Persian fine dining experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Alpine Spa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">A 10,000m² wellness sanctuary featuring indoor and outdoor pools, treatment rooms, and panoramic views of Lake Lucerne.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Lake Lucerne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Explore the crystal-clear waters of Lake Lucerne by boat, with stunning views of the surrounding mountains and historic landmarks.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Mount Pilatus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Take the world&apos;s steepest cogwheel railway to the summit for breathtaking views and unforgettable dining experiences.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://www.buergenstock.ch/en" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  Bürgenstock Resort
                </Button>
              </Link>
              <Link href="https://www.buergenstock.ch/en/restaurants/parisa" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  Parisa Restaurant
                </Button>
              </Link>
            </div>
          </div>

          {/* Day 7-8: Bad Ragaz Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 7-8: Bad Ragaz
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Experience the legendary Grand Resort Bad Ragaz, a pilgrimage for wellness enthusiasts. Home to &apos;Memories&apos; by Sven Wassmer, one of Switzerland&apos;s few three-star Michelin restaurants, and thermal waters sourced from the nearby Tamina Gorge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Thermal Spa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Experience the healing thermal waters from the Tamina Gorge in the resort&apos;s state-of-the-art spa facilities.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Tamina Gorge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Visit the source of the thermal waters in this dramatic natural wonder, accessible via a scenic walk or cable car.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Golf Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Play on the resort&apos;s championship golf course, surrounded by stunning mountain views and alpine landscapes.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://www.resortragaz.ch/en" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  Grand Resort Bad Ragaz
                </Button>
              </Link>
              <Link href="https://www.resortragaz.ch/en/restaurants/memories" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  Memories Restaurant
                </Button>
              </Link>
            </div>
          </div>

          {/* Day 9-10: St. Moritz Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 9-10: St. Moritz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Badrutt&apos;s Palace Hotel</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Historic luxury since 1896</li>
                  <li>• Michelin-starred IGNIV restaurant</li>
                  <li>• La Coupole-Matsuhisa dining</li>
                  <li>• World-class spa facilities</li>
                  <li>• Private ski concierge</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">St. Moritz Activities</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Alpine skiing and snowboarding</li>
                  <li>• Summer hiking trails</li>
                  <li>• Luxury shopping district</li>
                  <li>• Lake St. Moritz activities</li>
                  <li>• Cultural events and festivals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 11-12: Andermatt Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 11-12: Andermatt
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Discover The Chedi Andermatt, a Zen-inspired property nestled in the Urseren Valley. Experience the 2,400m² spa and dine at The Japanese Restaurant—the highest Michelin-starred Japanese venue in the Alps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Alpine Spa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">A 2,400m² wellness sanctuary featuring indoor and outdoor pools, treatment rooms, and panoramic mountain views.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Gemsstock Mountain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Access world-class skiing and hiking trails from the resort&apos;s doorstep, with stunning views of the Swiss Alps.</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Golf Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Play on the 18-hole championship golf course, designed by Kurt Rossknecht, surrounded by alpine scenery.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://www.thechediandermatt.com/en" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  The Chedi Andermatt
                </Button>
              </Link>
              <Link href="https://www.thechediandermatt.com/en/restaurants/the-japanese-restaurant" target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                  The Japanese Restaurant
                </Button>
              </Link>
            </div>
          </div>

          {/* Day 13-14: Return to Geneva Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Day 13-14: Return to Geneva
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Return Options</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Return to La Réserve Genève</li>
                  <li>• Stay at Hotel Palafitte</li>
                  <li>• Scenic drive through Neuchâtel</li>
                  <li>• Final luxury shopping</li>
                  <li>• Farewell dinner in Geneva</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Departure Day</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Private transfer to airport</li>
                  <li>• Duty-free shopping</li>
                  <li>• Last-minute souvenirs</li>
                  <li>• Fond farewell to Switzerland</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
