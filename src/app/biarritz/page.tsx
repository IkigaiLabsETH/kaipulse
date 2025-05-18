"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Grid } from '@/components/ui/grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BiarritzPage() {
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
            <source src="/videos/basque-coast.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6 px-4 md:px-0">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide px-4 py-1.5 rounded-full">Your Dream Basque Journey</Badge>
            <h1 className="font-epilogue text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight leading-tight">
              Bilbao to Biarritz
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-relaxed">
              Ready for the adventure of a lifetime? We&apos;re taking you on a whirlwind tour of the Basque Country&apos;s finest - from Bilbao&apos;s jaw-dropping art scene to San Sebastián&apos;s sun-kissed beaches, all the way to Biarritz&apos;s timeless elegance.
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
                src="https://www.youtube.com/embed/IcNGKQg8Nkg"
                title="Basque Country Luxury Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 1: Bilbao Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 1: Bilbao</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Welcome to Bilbao! Get ready to be wowed by this vibrant city where art meets luxury. We&apos;ve got you staying at The Artist Grand Hotel (hello, Guggenheim views!) and dining at the mind-blowing three-Michelin-starred Azurmendi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/getxo/palacio-arriluce-hotel-14058" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Palacio Arriluce Hotel
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/pais-vasco/larrabetzu/restaurant/azurmendi" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Azurmendi Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center gap-6 px-4">
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">The Artist Grand Hotel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">A design-lover&apos;s haven with 145 rooms featuring panoramic views of the Guggenheim Museum. Enjoy the rooftop terrace, full-service spa, and chauffeur service.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Guggenheim Museum</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Frank Gehry&apos;s architectural masterpiece houses world-class contemporary art. Don&apos;t miss Jeff Koons&apos; famous Puppy sculpture outside.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Azurmendi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Chef Eneko Atxa&apos;s three-Michelin-star restaurant offers innovative Basque cuisine with a focus on sustainability and local ingredients.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 2: Gaztelugatxe Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 2: Gaztelugatxe & San Sebastián</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Gaztelugatxe</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Historic hermitage on a dramatic islet</li>
                    <li>241 steps to the summit</li>
                    <li>Ring the bell three times for good luck</li>
                    <li>Game of Thrones filming location</li>
                    <li>Breathtaking coastal views</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Hotel Maria Cristina</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Belle Époque luxury since 1912</li>
                    <li>Historic film festival venue</li>
                    <li>Prime location near La Concha Beach</li>
                    <li>Elegant rooms with modern amenities</li>
                    <li>Dry Martini Bar for craft cocktails</li>
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
                    <li>Book hotels 3-6 months in advance</li>
                    <li>Reserve Michelin restaurants early</li>
                    <li>Get Gaztelugatxe tickets online</li>
                    <li>Plan for seasonal weather changes</li>
                    <li>Consider private transfers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Local Experiences</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Try traditional Basque cider</li>
                    <li>Visit local markets early morning</li>
                    <li>Learn basic Basque phrases</li>
                    <li>Experience local festivals</li>
                    <li>Take coastal walks at sunset</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 3: San Sebastián Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 3: San Sebastián</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            San Sebastián - where every meal feels like a celebration! From hopping between pintxos bars to the legendary Arzak restaurant, this city will make your taste buds dance. Trust us, you&apos;ll understand why foodies worldwide call this place paradise.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/pais-vasco/lasarte-oria/restaurant/martin-berasategui" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Martín Berasategui
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/san-sebastian/hotel-maria-cristina-7470" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Hotel Maria Cristina
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">La Concha Beach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">One of Europe&apos;s most beautiful urban beaches, with a crescent-shaped bay and elegant promenade. Perfect for morning walks and sunset views.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Old Town Pintxos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Explore the narrow streets of Parte Vieja, hopping between traditional pintxos bars. Each offers unique specialties and local atmosphere.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Arzak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Juan Mari and Elena Arzak&apos;s three-Michelin-star restaurant combines Basque tradition with innovative techniques in their century-old family mansion.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 4: Saint-Jean-de-Luz Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 4: Saint-Jean-de-Luz</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Bonjour, French Basque Country! Get ready to fall in love with Saint-Jean-de-Luz&apos;s seaside charm. We&apos;re talking Belle Époque luxury at the Grand Hôtel Thalasso & Spa and exploring picture-perfect Basque villages that look straight out of a storybook.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/guethary/briketenia-9793" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Briketenia
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/pais-vasco/es-donostia-san-sebastian/restaurant/amelia-1191398" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Amelia Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Grand Hôtel Thalasso & Spa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Belle Époque luxury with panoramic ocean views, featuring the renowned Loreamar Thalasso & Spa with seawater therapy pool and rejuvenating treatments.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Ainhoa & Espelette</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Explore picturesque Basque villages, from Ainhoa&apos;s charming streets to Espelette&apos;s famous red peppers adorning traditional architecture.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Le Kaïku</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Chef Nicolas Borombo&apos;s Michelin-starred restaurant celebrates Basque flavors with innovative dishes in an intimate historic setting.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 5: Biarritz Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 5: Biarritz</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Your grand finale in Biarritz! This is where imperial elegance meets coastal cool. Picture yourself at the historic Hôtel du Palais, where Napoleon III once stayed, and dining at L&apos;Impertinent - because why not end your journey with a Michelin-starred bang?
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/biarritz/hotel-du-palais-8280" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Hôtel du Palais
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/biarritz/regina-experimental-biarritz-13275" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Regina Experimental
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Hôtel du Palais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Empress Eugénie&apos;s former summer residence, offering imperial grandeur, ocean views, and direct access to the Grande Plage.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Rocher de la Vierge</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Dramatic rock formation with panoramic coastal views, connected by a historic footbridge designed by Gustave Eiffel.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">L&apos;Impertinent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Chef Fabian Feldmann&apos;s Michelin-starred restaurant offers inventive contemporary French cuisine in an elegant setting.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Alternative Luxury Accommodations */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Luxury Accommodations</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Looking for something extra special? We&apos;ve handpicked the crème de la crème of Basque Country stays - from historic palaces that tell stories of the past to contemporary luxury hotels that define modern elegance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/san-sebastian/akelarre-8643" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Akelarre
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/san-sebastian/nobu-hotel-san-sebastian-123670-13489" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Nobu Hotel San Sebastián
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/saint-pee-sur-nivelle/lauberge-basque-11647" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                L&apos;Auberge Basque
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/elciego/hotel-marques-de-riscal-7425" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Hotel Marqués de Riscal
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/biarritz/regina-experimental-biarritz-13275" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Regina Experimental
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/guethary/briketenia-9793" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Briketenia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Akelarre</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Three-Michelin-starred restaurant with luxury accommodations, offering panoramic views of the Cantabrian Sea and innovative Basque cuisine.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Nobu Hotel San Sebastián</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Contemporary luxury hotel featuring the renowned Nobu restaurant, spa facilities, and stunning views of La Concha Bay.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">L&apos;Auberge Basque</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Charming boutique hotel in Saint-Pée-sur-Nivelle, offering authentic Basque hospitality and Michelin-starred dining.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Michelin-Starred Restaurants */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Michelin-Starred Dining</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Calling all food lovers! The Basque Country is your culinary playground, where every meal is an adventure. From time-honored Basque traditions to cutting-edge gastronomy, prepare to have your taste buds spoiled.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/pais-vasco/larrabetzu/restaurant/azurmendi" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Azurmendi
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/pais-vasco/lasarte-oria/restaurant/martin-berasategui" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Martín Berasategui
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/pais-vasco/es-donostia-san-sebastian/restaurant/amelia-1191398" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Amelia Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Azurmendi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Three-Michelin-starred restaurant by Chef Eneko Atxa, known for innovative Basque cuisine and sustainable practices.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Martín Berasategui</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Three-Michelin-starred restaurant offering creative Basque cuisine with international influences in an elegant setting.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Amelia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Michelin-starred restaurant in San Sebastián, showcasing contemporary Basque cuisine with a focus on local ingredients.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Final Journey Highlights */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Journey Highlights</h2>
          <Card className="bg-black border-yellow-500">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Cultural Experiences</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                    <li>Guggenheim Museum in Bilbao</li>
                    <li>Historic Gaztelugatxe hermitage</li>
                    <li>Traditional Basque villages</li>
                    <li>Biarritz&apos;s imperial heritage</li>
                    <li>Local markets and festivals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Culinary Journey</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                    <li>Three Michelin-starred Azurmendi</li>
                    <li>Legendary Arzak restaurant</li>
                    <li>Traditional pintxos bars</li>
                    <li>Le Kaïku in Saint-Jean-de-Luz</li>
                    <li>L&apos;Impertinent in Biarritz</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Luxury Experiences */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Exclusive Experiences</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Ready to make your Basque journey truly unforgettable? We&apos;ve got some seriously cool experiences up our sleeve that&apos;ll make your friends back home green with envy.
          </p>
        </div>
      </section>

      <Grid columns={3} className="justify-center gap-6 px-4">
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Private Wine Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Exclusive visits to Rioja&apos;s finest wineries, including Marqués de Riscal and Ysios, with private tastings and gourmet pairings.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Helicopter Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Aerial views of the Basque coastline, from Biarritz&apos;s Grande Plage to San Sebastián&apos;s La Concha Bay, with champagne service.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Private Chef Experiences</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">In-villa dining with Michelin-starred chefs, featuring personalized menus and wine pairings in your luxury accommodation.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Cultural Activities */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Cultural Immersion</h2>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Art & Architecture</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Private Guggenheim Museum tours</li>
                    <li>Frank Gehry&apos;s architectural masterpieces</li>
                    <li>Contemporary art galleries in Bilbao</li>
                    <li>Historic Basque architecture tours</li>
                    <li>Art workshops with local artists</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Traditional Activities</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Private pelota matches</li>
                    <li>Basque cooking classes</li>
                    <li>Traditional music performances</li>
                    <li>Local festival experiences</li>
                    <li>Guided historical walks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Luxury Shopping */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Luxury Shopping</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Shopaholics, rejoice! The Basque Country is your luxury shopping paradise, where high-end boutiques meet unique local treasures.
          </p>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Biarritz Shopping</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Luxury boutiques along Avenue Edouard VII, featuring Hermès, Louis Vuitton, and local designers. Visit Les Halles for artisanal products.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">San Sebastián Boutiques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Exclusive shopping in the Centro district, with high-end fashion, local designers, and traditional Basque crafts in the Old Town.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Bilbao Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Contemporary design shops in the Abando district, featuring local artisans, modern furniture, and unique Basque souvenirs.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Wellness & Spa */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Wellness & Spa</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Time to treat yourself! Whether you&apos;re a spa enthusiast or an active wellness lover, we&apos;ve got the perfect way to recharge your batteries in style.
          </p>
          <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Luxury Spas</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Hôtel du Palais Spa with sea views</li>
                    <li>Grand Hôtel Thalasso & Spa treatments</li>
                    <li>Nobu Hotel Spa experiences</li>
                    <li>Private wellness consultations</li>
                    <li>Customized spa packages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Active Wellness</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-3">
                    <li>Private yoga sessions with ocean views</li>
                    <li>Guided coastal meditation walks</li>
                    <li>Personal training on the beach</li>
                    <li>Surf lessons with world-class instructors</li>
                    <li>Private Pilates studios</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Private Events */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Private Events</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Got something special to celebrate? Let&apos;s make it magical! From beachside soirées to intimate wine tastings, we&apos;ll help you create memories that&apos;ll last a lifetime.
          </p>
        </div>
      </section>

      <Grid columns={3} className="justify-center gap-6 px-4">
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Beachside Celebrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Exclusive beach setups with gourmet catering, live music, and sunset views at Biarritz&apos;s Grande Plage or San Sebastián&apos;s La Concha.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Wine Tasting Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Private wine tastings in historic cellars, featuring rare vintages and expert sommeliers, paired with gourmet Basque cuisine.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Cultural Performances</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi leading-relaxed">Private concerts, traditional dance performances, and cultural shows in historic venues or luxury hotel settings.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Luxury Transportation */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Luxury Transportation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚗</div>
                  <div>
                    <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Blacklane Chauffeur Service</h3>
                    <p className="text-white/80 font-satoshi mb-4 leading-relaxed">
                      Ready to travel like a VIP? Blacklane&apos;s got your back with their top-notch chauffeur service. Available round the clock for everything from airport pickups to city adventures.
                    </p>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                      <li>Professional chauffeurs</li>
                      <li>Fixed prices</li>
                    </ul>
                    <div className="mt-6">
                      <Link href="https://www.blacklane.com" target="_blank">
                        <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                          Book Your Ride
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚁</div>
                  <div>
                    <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Helicopter Services</h3>
                    <p className="text-white/80 font-satoshi mb-4 leading-relaxed">
                      Want to make your journey even more epic? Take to the skies with our helicopter services and see the Basque Country from a whole new perspective!
                    </p>
                    <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                      <li>Airport transfers to hotels</li>
                      <li>Scenic coastal tours</li>
                      <li>Winery visits by air</li>
                    </ul>
                    <div className="mt-6">
                      <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                        Request Helicopter Service
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 font-satoshi text-sm">
              Need help planning your perfect ride? Our concierge team is here to make it happen - just give us a shout!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
