"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Grid } from '@/components/ui/grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SwissPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 pb-8 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/swiss-alps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6 px-4 md:px-0">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide px-4 py-1.5 rounded-full">Your Dream Swiss Journey</Badge>
            <h1 className="font-epilogue text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight leading-tight">
              Road Trip Through Switzerland
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-relaxed">
              Switzerland is more than a postcard-perfect destination; it's a sanctuary of elevated hospitality, world-class wellness, and majestic alpine panoramas. For the refined traveler, a 14-day road trip through the Swiss landscape reveals not just five-star hotels, but immersive experiences where spa rituals, Michelin-starred dining, and jaw-dropping drives converge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 text-lg w-full sm:w-auto">
                Start Your Journey
              </Button>
              <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-4 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 text-lg w-full sm:w-auto">
                View Itinerary
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center w-full max-w-[500px] px-4 md:px-0">
            <div className="w-full aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transform hover:scale-[1.02] transition-transform duration-300">
              <iframe
                src="https://www.youtube.com/embed/wQ1lJNGoBrA"
                title="Swiss Luxury Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Featured Luxury Hotels Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Featured Luxury Stays</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-12 text-center leading-relaxed">
            Discover our curated selection of Switzerland's most exceptional hotels, each offering unique experiences and world-class hospitality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">The Cambrian</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Adelboden</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A contemporary mountain retreat with panoramic alpine views and a world-class spa.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/adelboden/the-cambrian-6747" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">7132 Hotel</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Vals</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">An architectural masterpiece by Peter Zumthor, featuring the iconic thermal baths.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/vals/7132-hotel-8526" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">La Réserve Genève</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Geneva</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A lakeside sanctuary with Michelin-starred dining and an award-winning spa.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/geneva/la-reserve-geneve-hotel-spa-6471" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">La Réserve Eden au Lac</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Zurich</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A historic lakeside hotel with contemporary luxury and stunning city views.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/zurich/la-reserve-eden-au-lac-zurich-10745" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Schweizerhof Zermatt</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Zermatt</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A historic luxury hotel with breathtaking views of the Matterhorn.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/zermatt/schweizerhof-zermatt-9080" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Bürgenstock Resort</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Lake Lucerne</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A mountaintop resort with panoramic views and world-class wellness facilities.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/burgenstock/burgenstock-9744" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Explore More Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Explore More Luxury Stays</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Discover more exceptional accommodations across Switzerland, curated by the Michelin Guide. From historic palaces to modern mountain retreats, find your perfect luxury stay.
          </p>
          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/switzerland?arr=2025-06-25&dep=2025-06-26&nA=1&nC=0&nR=1&distinction=all-keys" target="_blank" className="inline-block">
            <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 text-lg">
              Explore Michelin Guide Hotels
            </Button>
          </Link>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 1-2: Geneva Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 1-2: Geneva</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Begin your journey in Geneva, where luxury meets lakeside elegance. Stay at La Réserve Genève Hotel & Spa, indulge in the award-winning Nescens Spa, and savor dinner at Tsé Fung, the hotel's Michelin-starred Chinese restaurant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://www.lareserve.ch/en/geneva" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                La Réserve Genève
              </Button>
            </Link>
            <Link href="https://www.lareserve.ch/en/geneva/restaurants/ts-fung" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Tsé Fung Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center gap-6 px-4">
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">La Réserve Genève</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">A lakeside sanctuary with 102 rooms and suites, featuring the award-winning Nescens Spa, private beach, and Michelin-starred dining.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Jet d'Eau</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Geneva's iconic water fountain, reaching 140 meters high. Best viewed from the lakeshore or during a sunset boat cruise.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Old Town Geneva</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Explore the historic heart of Geneva with its charming cobblestone streets, luxury boutiques, and the stunning St. Pierre Cathedral.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 3-4: Gstaad Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 3-4: Gstaad</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">The Alpina Gstaad</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Six Senses Spa & Wellness</li>
                    <li>Michelin-starred Sommet restaurant</li>
                    <li>Alpine-inspired luxury suites</li>
                    <li>Private cinema and cigar lounge</li>
                    <li>Year-round outdoor activities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Lavaux Vineyards</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>UNESCO World Heritage site</li>
                    <li>Scenic drive through terraced vineyards</li>
                    <li>Wine tasting experiences</li>
                    <li>Lake Geneva views</li>
                    <li>Historic wine villages</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Travel Tips Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Essential Travel Tips</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Planning & Reservations</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Book hotels 6-12 months in advance</li>
                    <li>Reserve Michelin restaurants early</li>
                    <li>Plan for seasonal road conditions</li>
                    <li>Consider private transfers</li>
                    <li>Check spa booking requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Local Experiences</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Try Swiss fondue and raclette</li>
                    <li>Visit local markets early morning</li>
                    <li>Learn basic Swiss German phrases</li>
                    <li>Experience local festivals</li>
                    <li>Take scenic train journeys</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 5-6: Lake Lucerne Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 5-6: Lake Lucerne</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Experience architectural elegance and cinematic views at the Bürgenstock Resort Lake Lucerne. Bathe in the cliffside infinity pool, relax in the 10,000m² Alpine Spa, and dine at Parisa for a Persian fine dining experience.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://www.buergenstock.ch/en" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Bürgenstock Resort
              </Button>
            </Link>
            <Link href="https://www.buergenstock.ch/en/restaurants/parisa" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Parisa Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Alpine Spa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">A 10,000m² wellness sanctuary featuring indoor and outdoor pools, treatment rooms, and panoramic views of Lake Lucerne.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Lake Lucerne</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Explore the crystal-clear waters of Lake Lucerne by boat, with stunning views of the surrounding mountains and historic landmarks.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Mount Pilatus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Take the world's steepest cogwheel railway to the summit for breathtaking views and unforgettable dining experiences.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 7-8: Bad Ragaz Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 7-8: Bad Ragaz</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Experience the legendary Grand Resort Bad Ragaz, a pilgrimage for wellness enthusiasts. Home to 'Memories' by Sven Wassmer, one of Switzerland's few three-star Michelin restaurants, and thermal waters sourced from the nearby Tamina Gorge.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://www.resortragaz.ch/en" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Grand Resort Bad Ragaz
              </Button>
            </Link>
            <Link href="https://www.resortragaz.ch/en/restaurants/memories" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Memories Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Thermal Spa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Experience the healing thermal waters from the Tamina Gorge in the resort's state-of-the-art spa facilities.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Tamina Gorge</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Visit the source of the thermal waters in this dramatic natural wonder, accessible via a scenic walk or cable car.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Golf Course</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Play on the resort's championship golf course, surrounded by stunning mountain views and alpine landscapes.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 9-10: St. Moritz Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 9-10: St. Moritz</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Badrutt's Palace Hotel</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Historic luxury since 1896</li>
                    <li>Michelin-starred IGNIV restaurant</li>
                    <li>La Coupole-Matsuhisa dining</li>
                    <li>World-class spa facilities</li>
                    <li>Private ski concierge</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">St. Moritz Activities</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Alpine skiing and snowboarding</li>
                    <li>Summer hiking trails</li>
                    <li>Luxury shopping district</li>
                    <li>Lake St. Moritz activities</li>
                    <li>Cultural events and festivals</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 11-12: Andermatt Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 11-12: Andermatt</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Discover The Chedi Andermatt, a Zen-inspired property nestled in the Urseren Valley. Experience the 2,400m² spa and dine at The Japanese Restaurant—the highest Michelin-starred Japanese venue in the Alps.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://www.thechediandermatt.com/en" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                The Chedi Andermatt
              </Button>
            </Link>
            <Link href="https://www.thechediandermatt.com/en/restaurants/the-japanese-restaurant" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                The Japanese Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Alpine Spa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">A 2,400m² wellness sanctuary featuring indoor and outdoor pools, treatment rooms, and panoramic mountain views.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Gemsstock Mountain</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Access world-class skiing and hiking trails from the resort's doorstep, with stunning views of the Swiss Alps.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Golf Course</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Play on the 18-hole championship golf course, designed by Kurt Rossknecht, surrounded by alpine scenery.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 13-14: Return to Geneva Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 13-14: Return to Geneva</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Return Options</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Return to La Réserve Genève</li>
                    <li>Stay at Hotel Palafitte</li>
                    <li>Scenic drive through Neuchâtel</li>
                    <li>Final luxury shopping</li>
                    <li>Farewell dinner in Geneva</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Departure Day</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Breakfast with lake views</li>
                    <li>Last-minute shopping</li>
                    <li>Private transfer to airport</li>
                    <li>Duty-free shopping</li>
                    <li>Fond farewell to Switzerland</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Ready to Experience Switzerland?</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-8">
            Book your luxury Swiss road trip today and create memories that will last a lifetime. Our travel experts are ready to craft your perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 text-lg">
              Book Your Journey
            </Button>
            <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-4 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 text-lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
