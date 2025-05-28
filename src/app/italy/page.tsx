"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Grid } from '@/components/ui/grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ItalyPage() {
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
            <source src="/videos/italy-tuscany.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6 px-4 md:px-0">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide px-4 py-1.5 rounded-full">Your Dream Italian Journey</Badge>
            <h1 className="font-epilogue text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight leading-tight">
              Road Trip Through Italy
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-relaxed">
              Italy is a symphony of culinary excellence, artistic heritage, and timeless luxury. This 14-day road trip through Italy's most prestigious destinations combines five-star accommodations with Michelin-starred dining, from the fashion capital of Milan to the rolling hills of Tuscany and the romantic canals of Venice.
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
                src="https://www.youtube.com/embed/3bPM_ezxITs"
                title="Italian Luxury Journey"
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
            Discover our curated selection of Italy's most exceptional hotels, each offering unique experiences and world-class hospitality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Art Hotel Villa Fiorella</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Massa Lubrense</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A modern boutique hotel in an olive grove overlooking the sea, featuring panoramic views, an infinity pool, and the Terrazza Fiorella restaurant.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/massa-lubrense/art-hotel-villa-fiorella-8477" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Portrait Milano</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Milan</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A luxury boutique hotel in the heart of Milan's fashion district, offering personalized service and elegant accommodations.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/milan/portrait-milano-12981" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Grand Hotel Victoria</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Lake Como</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A historic hotel with a modern concept spa, offering stunning views of Lake Como and exceptional dining experiences.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/menaggio/grand-hotel-victoria-concept-spa-12002" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Villa Cora</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Florence</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A magnificent 19th-century villa with stunning gardens, offering panoramic views of Florence and luxury accommodations.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/florence/villa-cora-79" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Castelfalfi</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Tuscany</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A medieval village transformed into a luxury resort, featuring a golf course, spa, and authentic Tuscan experiences.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/montaione/castelfalfi-8779" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Hotel Vilòn</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Rome</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A boutique hotel in a 16th-century palace, offering an intimate atmosphere and exceptional service in the heart of Rome.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/rome/hotel-vilon-11138" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Borgo Santandrea</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Amalfi Coast</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A luxury cliffside hotel with private beach access, offering stunning views of the Mediterranean and authentic Italian hospitality.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/amalfi/borgo-santandrea-12461" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Casa Maria Luigia</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Modena</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A country house managed by Massimo Bottura, offering a unique culinary experience and luxurious accommodations.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/Modena/casa-maria-luigia-13611" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">La Minervetta</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Sorrento</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A contemporary design hotel with stunning views of the Bay of Naples and Mount Vesuvius, offering a unique coastal experience.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/sorrento-2/la-minervetta-197" target="_blank">
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

      {/* Day 1-2: Milan Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 1-2: Milan</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Begin your journey in Milan, Italy's fashion and design capital. Stay at the Portrait Milano, indulge in the award-winning spa, and savor dinner at their Michelin-starred restaurant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/milan/portrait-milano-12981" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Portrait Milano
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 3-4: Lake Como Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 3-4: Lake Como</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-4">
            Drive to Lake Como (1 hour, 50 km from Milan). Experience the Grand Hotel Victoria Concept & Spa, offering stunning views of the lake and exceptional dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/menaggio/grand-hotel-victoria-concept-spa-12002" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Grand Hotel Victoria
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 5-6: Florence Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 5-6: Florence</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Drive to Florence (3.5 hours, 300 km from Lake Como). Experience Villa Cora, a magnificent 19th-century villa with stunning gardens and panoramic views of Florence.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/florence/villa-cora-79" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Villa Cora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 7-8: Tuscany Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 7-8: Tuscany</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Drive to Castelfalfi (1 hour, 70 km from Florence). Experience this medieval village transformed into a luxury resort, featuring a golf course, spa, and authentic Tuscan experiences.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/montaione/castelfalfi-8779" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Castelfalfi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 9-10: Rome Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 9-10: Rome</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Drive to Rome (2.5 hours, 250 km from Tuscany). Stay at Hotel Vilòn, a boutique hotel in a 16th-century palace, offering an intimate atmosphere and exceptional service in the heart of Rome.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/rome/hotel-vilon-11138" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Hotel Vilòn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 11-12: Amalfi Coast Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 11-12: Amalfi Coast</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Drive to the Amalfi Coast (3.5 hours, 280 km from Rome). Experience Borgo Santandrea, a luxury cliffside hotel with private beach access and stunning Mediterranean views.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/amalfi/borgo-santandrea-12461" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Borgo Santandrea
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/massa-lubrense/art-hotel-villa-fiorella-8477" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Art Hotel Villa Fiorella
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 13-14: Puglia Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 13-14: Puglia</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Drive to Puglia (4 hours, 350 km from Amalfi Coast). Experience the unique charm of southern Italy, from the trulli houses of Alberobello to the baroque architecture of Lecce.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
              Explore Puglia
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 15-16: Return to Milan Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 15-16: Return to Milan</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Return Journey</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Drive from Puglia to Milan (8 hours, 800 km)</li>
                    <li>Consider breaking the journey in Bologna</li>
                    <li>Final luxury shopping in Milan</li>
                    <li>Farewell dinner at Portrait Milano</li>
                    <li>Private transfer to airport</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Travel Tips</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Book hotels 6-12 months in advance</li>
                    <li>Reserve Michelin restaurants early</li>
                    <li>Plan for seasonal road conditions</li>
                    <li>Consider private transfers for long drives</li>
                    <li>Check spa booking requirements</li>
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
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Ready to Experience Italy?</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-8">
            Book your luxury Italian road trip today and create memories that will last a lifetime. Our travel experts are ready to craft your perfect itinerary.
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
