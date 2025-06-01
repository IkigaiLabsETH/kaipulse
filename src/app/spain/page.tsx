"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SpainPage() {
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
            <source src="/videos/spain-coast.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6 px-4 md:px-0">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide px-4 py-1.5 rounded-full">Your Dream Spanish Journey</Badge>
            <h1 className="font-epilogue text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight leading-tight">
              Road Trip Through Spain
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-relaxed">
              Embark on a 14-day journey through Spain&apos;s most enchanting landscapes, from the vibrant streets of Madrid to the sun-kissed shores of Mallorca. This carefully curated road trip weaves together the finest luxury accommodations, Michelin-starred dining experiences, and cultural treasures, creating an unforgettable tapestry of Spanish excellence.
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
                src="https://www.youtube.com/embed/7aJ9MCB85RQ"
                title="Spanish Luxury Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* 14-Day Itinerary */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">14-Day Luxury Journey</h2>
          
          {/* Days 1-3: Madrid */}
          <div className="mb-12">
            <h3 className="text-2xl font-epilogue text-yellow-400 mb-4">Days 1-3: Madrid</h3>
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-white/80 font-satoshi mb-4">
                Begin your journey in Madrid, staying at the Four Seasons Hotel Madrid. Explore the Prado Museum, Royal Palace, and Plaza Mayor. Visit nearby Toledo for its medieval architecture and El Greco masterpieces. Enjoy Michelin-starred dining at DiverXO and Coque.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Highlights:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside">
                    <li>Prado Museum & Royal Palace</li>
                    <li>Plaza Mayor & Gran Via</li>
                    <li>Day trip to Toledo</li>
                    <li>Michelin-starred dining</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Luxury Stay:</h4>
                  <p className="text-white/80 font-satoshi">Four Seasons Hotel Madrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Days 4-6: Northern Spain */}
          <div className="mb-12">
            <h3 className="text-2xl font-epilogue text-yellow-400 mb-4">Days 4-6: Northern Spain</h3>
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-white/80 font-satoshi mb-4">
                Head north to San Sebastián, staying at AKELARRE Hotel. Experience the city&apos;s famous pintxos bars and beaches. Visit the Guggenheim Museum in Bilbao. Explore the Ribera del Duero wine region from Abadía Retuerta LeDomaine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Highlights:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside">
                    <li>San Sebastián beaches</li>
                    <li>Guggenheim Bilbao</li>
                    <li>Wine tasting in Ribera del Duero</li>
                    <li>Pintxos tour in San Sebastián</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Luxury Stays:</h4>
                  <p className="text-white/80 font-satoshi">AKELARRE Hotel & Abadía Retuerta LeDomaine</p>
                </div>
              </div>
            </div>
          </div>

          {/* Days 7-9: Barcelona & Costa Brava */}
          <div className="mb-12">
            <h3 className="text-2xl font-epilogue text-yellow-400 mb-4">Days 7-9: Barcelona & Costa Brava</h3>
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-white/80 font-satoshi mb-4">
                Stay at Mandarin Oriental Barcelona and explore Gaudí&apos;s masterpieces, including Sagrada Familia and Park Güell. Visit the Gothic Quarter and La Boqueria market. Day trips to Montserrat and the Costa Brava.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Highlights:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside">
                    <li>Sagrada Familia & Park Güell</li>
                    <li>Gothic Quarter exploration</li>
                    <li>Montserrat monastery</li>
                    <li>Costa Brava beaches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Luxury Stay:</h4>
                  <p className="text-white/80 font-satoshi">Mandarin Oriental Barcelona</p>
                </div>
              </div>
            </div>
          </div>

          {/* Days 10-12: Southern Spain */}
          <div className="mb-12">
            <h3 className="text-2xl font-epilogue text-yellow-400 mb-4">Days 10-12: Southern Spain</h3>
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-white/80 font-satoshi mb-4">
                Conclude your journey in Marbella at the Marbella Club Hotel. Explore the white villages of Andalusia, including Ronda and Mijas. Visit the Alhambra in Granada and the Mezquita in Córdoba.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Highlights:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside">
                    <li>Alhambra Palace</li>
                    <li>White villages of Andalusia</li>
                    <li>Marbella beaches</li>
                    <li>Flamenco shows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Luxury Stay:</h4>
                  <p className="text-white/80 font-satoshi">Marbella Club Hotel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Days 13-14: Mallorca */}
          <div className="mb-12">
            <h3 className="text-2xl font-epilogue text-yellow-400 mb-4">Days 13-14: Mallorca</h3>
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-white/80 font-satoshi mb-4">
                Fly to Mallorca for a final stay at Hotel Can Ferrereta. Explore the island&apos;s beaches, mountains, and charming villages. Enjoy the Mediterranean lifestyle and cuisine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Highlights:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside">
                    <li>Mondragó Natural Park</li>
                    <li>Historic Palma</li>
                    <li>Beach relaxation</li>
                    <li>Local wine tasting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-epilogue mb-2">Luxury Stay:</h4>
                  <p className="text-white/80 font-satoshi">Hotel Can Ferrereta</p>
                </div>
              </div>
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
            Discover our curated selection of Spain&apos;s most exceptional hotels, each offering unique experiences and world-class hospitality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Four Seasons Hotel Madrid</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Madrid</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Opened in 2020, this luxury hotel merges four landmark 19th-century buildings into one grand property. Features the city&apos;s largest urban spa (1,450 m²), a rooftop infinity pool, and multiple dining venues including Dani Brasserie by celebrity chef Dani García.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.fourseasons.com/madrid/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/madrid/four-seasons-hotel-madrid-13597" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Mandarin Oriental Barcelona</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Barcelona</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Housed in a grand 1920s bank on Passeig de Gràcia, featuring a dramatic white glass atrium, rooftop infinity pool, and two-Michelin-starred restaurant Moments. The Spa Mo offers a vitality pool, hammam, and thermal suite.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.mandarinoriental.com/barcelona" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/barcelona/mandarin-oriental-barcelona-6386" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Abadía Retuerta LeDomaine</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Valladolid</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A 12th-century abbey transformed into a luxury hotel, featuring 500 acres of vineyards, the award-winning Santuario Spa, and one-Michelin-starred Refectorio restaurant. Offers private vineyard tours and wine tastings.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.ledomaine.es/en/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/valladolid2/abadia-retuerta-ledomaine-10200" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">AKELARRE Hotel</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">San Sebastián</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Perched on Monte Igueldo with panoramic ocean views, featuring a full-service Spa Akelarre and three-Michelin-starred restaurant by Chef Pedro Subijana. Modern architecture with floor-to-ceiling windows and soundproofed rooms.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.akelarrehotel.com/en/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/san-sebastian/akelarre-8643" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Marbella Club Hotel</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Marbella</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Founded in 1954, this legendary beachfront resort features low-slung whitewashed buildings, tropical gardens, and multiple pools. The Marbella Club Spa offers thalassotherapy and state-of-the-art treatments.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.marbellaclub.com/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/marbella/marbella-club-hotel-5985" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Hotel Can Ferrereta</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Mallorca</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A restored 17th-century Mallorcan manor house with 10,000 m² gardens. Features Sa Calma Spa, rooftop plunge pool, and a restaurant in the ancient wine cellar serving modern Mediterranean cuisine.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.canferrereta.com/en/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/santanyi/hotel-can-ferrereta-13405" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Pepe Vieira Hotel Relais & Châteaux</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Pontevedra</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A coastal estate with 14 modern &quot;galpones&quot; featuring floor-to-ceiling windows and a two-Michelin-starred restaurant. Set on 12,500 m² of woodland with an outdoor saltwater pool and traditional Galician lareira.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.pepevieira.com/en/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/pontevedra/pepe-vieira-hotel-relais-chateaux-13404" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Casa Beatnik Hotel</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">A Coruña</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">An 18th-century villa surrounded by vineyards, featuring eclectic interiors and a unique spa complex with Finnish sauna &quot;iglu&quot; and Turkish hammam. Offers 13 unique suites and 6 luxury yurts in the gardens.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.casabeatnik.com/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/la-coruna/casa-beatnik-hotel-13030" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Terra Dominicata Hotel & Winery</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Tarragona</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A restored 12th-century Carthusian monastery with vineyards and olive groves. Features Les Oliveres spa, outdoor pool, and Mater Terrae restaurant serving Catalan countryside cuisine.</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.terradominicata.com/" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                      View Hotel
                    </Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/tarragona/terra-dominicata-hotel-winery-8962" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 w-full">
                      Michelin Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Week 1: Madrid & Surroundings */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Week 1: Madrid & Surroundings</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Begin your journey in Madrid, staying at the Four Seasons Hotel Madrid. Explore the Prado Museum, Royal Palace, and Plaza Mayor. Visit nearby Toledo for its medieval architecture and El Greco masterpieces. Day trips to Segovia for its Roman aqueduct and Ávila for its medieval walls. Enjoy Michelin-starred dining at DiverXO and Coque.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://www.fourseasons.com/madrid/" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Four Seasons Madrid
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Week 2: Northern Spain */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Week 2: Northern Spain</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Head north to San Sebastián, staying at AKELARRE Hotel. Experience the city&apos;s famous pintxos bars and beaches. Visit the Guggenheim Museum in Bilbao. Explore the Ribera del Duero wine region from Abadía Retuerta LeDomaine. Discover the medieval streets of Burgos and its cathedral. Enjoy the Basque Country&apos;s culinary scene with visits to Arzak and Mugaritz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://www.akelarrehotel.com/en/" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                AKELARRE Hotel
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Week 3: Barcelona & Costa Brava */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Week 3: Barcelona & Costa Brava</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Stay at Mandarin Oriental Barcelona and explore Gaudí&apos;s masterpieces, including Sagrada Familia and Park Güell. Visit the Gothic Quarter and La Boqueria market. Day trips to Montserrat and the Costa Brava. Experience the region&apos;s best restaurants, including El Celler de Can Roca in Girona. Enjoy the Mediterranean beaches and coastal towns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://www.mandarinoriental.com/barcelona" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Mandarin Oriental Barcelona
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Week 4: Southern Spain & Islands */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Week 4: Southern Spain & Islands</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Conclude your journey in Marbella at the Marbella Club Hotel. Explore the white villages of Andalusia, including Ronda and Mijas. Visit the Alhambra in Granada and the Mezquita in Córdoba. Fly to Mallorca for a final stay at Hotel Can Ferrereta, exploring the island&apos;s beaches, mountains, and charming villages. Enjoy the Mediterranean lifestyle and cuisine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://www.marbellaclub.com/" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Marbella Club Hotel
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
