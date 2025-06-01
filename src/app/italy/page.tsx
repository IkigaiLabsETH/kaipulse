"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ItalyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Travel • Cultural Experiences • Fine Dining</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Italy
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Journey Through Italian Excellence</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/3bPM_ezxITs"
                title="Italian Luxury Journey"
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
              Your Dream Italian Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Embark on a 16-day journey through Italy&apos;s most enchanting landscapes, from the fashion-forward streets of Milan to the sun-kissed shores of Puglia. This carefully curated road trip weaves together the finest luxury accommodations, Michelin-starred dining experiences, and cultural treasures, creating an unforgettable tapestry of Italian excellence.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Italy&apos;s finest hotels</li>
                  <li>Michelin-starred dining experiences</li>
                  <li>Cultural immersion in historic cities</li>
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
                <span className="text-4xl">🏛️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Cultural Heritage
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Historic Treasures
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🍝</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Fine Dining
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Michelin-Starred Cuisine
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏨</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Luxury Stays
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Premium Accommodations
              </p>
            </div>
          </div>

          {/* 16-Day Itinerary */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              16-Day Journey
            </h3>
            <div className="space-y-8">
              {/* Days 1-2: Milan */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 1-2: Milan - The Gateway to Italian Elegance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Begin your journey in Milan, where contemporary luxury meets centuries of artistic heritage. At Portrait Milano, you&apos;ll experience the perfect blend of modern sophistication and timeless Italian hospitality. This exclusive boutique hotel, located in the heart of the Quadrilatero della Moda, offers just 73 meticulously designed suites, each featuring custom-made furniture and curated art pieces.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Quadrilatero della Moda</li>
                        <li>Duomo di Milano</li>
                        <li>La Scala Opera House</li>
                        <li>Michelin-starred dining</li>
                        <li>Art galleries & museums</li>
                        <li>Luxury shopping</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Portrait Milano</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 3-4: Lake Como */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 3-4: Lake Como - A Symphony of Natural Beauty</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    As you leave Milan&apos;s urban sophistication behind, a scenic one-hour drive (50 km) brings you to the timeless elegance of Lake Como. Here, the Grand Hotel Victoria Concept & Spa awaits, offering a perfect blend of Belle Époque charm and modern luxury. This historic property, dating back to 1834, features 84 elegantly appointed rooms and suites, many with private balconies overlooking the lake.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Villa Carlotta</li>
                        <li>Bellagio village</li>
                        <li>Lake cruises</li>
                        <li>Mountain hiking</li>
                        <li>Water sports</li>
                        <li>Historic villas</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Grand Hotel Victoria</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 5-6: Florence */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 5-6: Florence - The Cradle of Renaissance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The journey south to Florence (3.5 hours, 300 km) takes you through the heart of Lombardy and Emilia-Romagna, where the landscape gradually transforms into the rolling hills of Tuscany. Villa Cora, your Florentine sanctuary, stands as a testament to the city&apos;s golden age, offering panoramic views of the city that gave birth to the Renaissance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Uffizi Gallery</li>
                        <li>Duomo & Baptistery</li>
                        <li>Ponte Vecchio</li>
                        <li>Boboli Gardens</li>
                        <li>Michelin-starred dining</li>
                        <li>Artisan workshops</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Villa Cora</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 7-8: Tuscany */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 7-8: Tuscany - The Soul of Italian Countryside</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    A short drive through the Tuscan countryside (1 hour, 70 km) brings you to Castelfalfi, where medieval history meets contemporary luxury. This ancient village, transformed into a world-class resort, offers an authentic taste of rural Tuscany. The property features 120 rooms and suites spread across restored medieval buildings, each offering a unique blend of historic charm and modern comfort.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Wine tasting</li>
                        <li>Olive oil production</li>
                        <li>Golf course</li>
                        <li>Cooking classes</li>
                        <li>Truffle hunting</li>
                        <li>Village exploration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Castelfalfi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 9-10: Rome */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 9-10: Rome - The Eternal City</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    As you journey south to Rome (2.5 hours, 250 km), the landscape gradually changes, preparing you for the grandeur of the Eternal City. Hotel Vilòn, nestled in a 16th-century palace, offers an intimate retreat in the heart of Rome&apos;s historic center. This boutique property features just 18 exquisitely designed rooms and suites, each showcasing a unique blend of contemporary art and historic architecture.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Colosseum & Forum</li>
                        <li>Vatican Museums</li>
                        <li>Trevi Fountain</li>
                        <li>Spanish Steps</li>
                        <li>Michelin-starred dining</li>
                        <li>Historic piazzas</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Hotel Vilòn</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 11-12: Amalfi Coast */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 11-12: Amalfi Coast - Mediterranean Paradise</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The journey to the Amalfi Coast (3.5 hours, 280 km) takes you through the picturesque landscapes of Campania. Borgo Santandrea and Art Hotel Villa Fiorella offer contrasting yet complementary experiences of coastal luxury. Borgo Santandrea, perched on a cliffside, features 30 rooms and suites, each with a private terrace and sea views.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Positano village</li>
                        <li>Ravello gardens</li>
                        <li>Coastal hiking</li>
                        <li>Boat excursions</li>
                        <li>Lemon groves</li>
                        <li>Beach clubs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Borgo Santandrea & Art Hotel Villa Fiorella</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 13-14: Puglia */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 13-14: Puglia - The Hidden Gem of Southern Italy</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Your journey continues to Puglia (4 hours, 350 km), where the authentic soul of southern Italy reveals itself. From the iconic trulli houses of Alberobello to the baroque splendor of Lecce, this region offers a unique blend of architectural wonders and culinary traditions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Alberobello trulli</li>
                        <li>Lecce architecture</li>
                        <li>Olive oil tasting</li>
                        <li>Coastal towns</li>
                        <li>Local cuisine</li>
                        <li>Historic villages</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Masseria Torre Maizza</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 15-16: Return Journey */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 15-16: Return Journey - Culinary Capitals</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Begin your return journey with stops in Naples and Bologna, two of Italy&apos;s culinary capitals. In Naples, stay at the Grand Hotel Vesuvio, enjoying its Michelin-starred restaurant and views of Mount Vesuvius. Then, continue to Bologna, staying at the Grand Hotel Majestic già Baglioni, where you can explore the city&apos;s famous food markets and historic center.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Pizza making in Naples</li>
                        <li>Bologna food markets</li>
                        <li>Balsamic vinegar tasting</li>
                        <li>Historic city centers</li>
                        <li>Michelin-starred dining</li>
                        <li>Cooking classes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stays:</h5>
                      <p className="text-white/80 font-satoshi">Grand Hotel Vesuvio, Grand Hotel Majestic, Casa Maria Luigia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Luxury Hotels Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Featured Stays
            </h3>
            <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 text-center leading-relaxed">
              Discover our curated selection of Italy&apos;s most exceptional hotels, each offering unique experiences and world-class hospitality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Art Hotel Villa Fiorella</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Massa Lubrense</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A modern boutique hotel in an olive grove overlooking the sea, featuring panoramic views, an infinity pool, and the Terrazza Fiorella restaurant.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/massa-lubrense/art-hotel-villa-fiorella-8477" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Portrait Milano</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Milan</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A luxury boutique hotel in the heart of Milan&apos;s fashion district, offering personalized service and elegant accommodations.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/milan/portrait-milano-12981" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Grand Hotel Victoria</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Lake Como</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A historic hotel with a modern concept spa, offering stunning views of Lake Como and exceptional dining experiences.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/menaggio/grand-hotel-victoria-concept-spa-12002" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Villa Cora</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Florence</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A magnificent 19th-century villa with stunning gardens, offering panoramic views of Florence and luxury accommodations.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/florence/villa-cora-79" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Castelfalfi</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Tuscany</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A medieval village transformed into a luxury resort, featuring a golf course, spa, and authentic Tuscan experiences.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/montaione/castelfalfi-8779" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Hotel Vilòn</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Rome</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A boutique hotel in a 16th-century palace, offering an intimate atmosphere and exceptional service in the heart of Rome.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/rome/hotel-vilon-11138" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Borgo Santandrea</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Amalfi Coast</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A luxury cliffside hotel with private beach access, offering stunning views of the Mediterranean and authentic Italian hospitality.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/amalfi/borgo-santandrea-12461" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Casa Maria Luigia</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Modena</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A country house managed by Massimo Bottura, offering a unique culinary experience and luxurious accommodations.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/Modena/casa-maria-luigia-13611" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">La Minervetta</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Sorrento</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A contemporary design hotel with stunning views of the Bay of Naples and Mount Vesuvius, offering a unique coastal experience.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/sorrento-2/la-minervetta-197" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
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
