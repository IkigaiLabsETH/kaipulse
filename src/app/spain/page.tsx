"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SpainPage() {
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
                Spain
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Journey Through Spanish Excellence</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/7aJ9MCB85RQ"
                title="Spanish Journey"
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
              Your Dream Spanish Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Embark on a 14-day journey through Spain&apos;s most enchanting landscapes, from the vibrant streets of Madrid to the sun-kissed shores of Mallorca. This carefully curated road trip weaves together the finest accommodations, Michelin-starred dining experiences, and cultural treasures, creating an unforgettable tapestry of Spanish excellence.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Spain&apos;s finest hotels</li>
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
                <span className="text-4xl">🏰</span>
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
                <span className="text-4xl">🍽️</span>
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

          {/* 14-Day Itinerary */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              14-Day Journey
            </h3>
            <div className="space-y-8">
              {/* Days 1-3: Madrid */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 1-3: Madrid</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Begin your journey in Madrid, staying at the Four Seasons Hotel Madrid. Day 1: Start with a guided tour of the Prado Museum, home to masterpieces by Velázquez, Goya, and El Greco. Enjoy lunch at the hotel&apos;s Dani Brasserie before exploring the Royal Palace and its stunning gardens. Evening: Experience traditional tapas at Mercado de San Miguel and dinner at DiverXO, Spain&apos;s only three-Michelin-starred restaurant.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Prado Museum & Royal Palace</li>
                        <li>Plaza Mayor & Gran Via</li>
                        <li>Day trip to Toledo</li>
                        <li>Michelin-starred dining</li>
                        <li>Flamenco show</li>
                        <li>Local markets & shopping</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Four Seasons Hotel Madrid</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 4-6: Northern Spain */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 4-6: Northern Spain</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 4: Travel to San Sebastián, staying at AKELARRE Hotel. Morning: Arrive and check in to your ocean-view suite. Afternoon: Explore La Concha beach and the historic Old Town. Evening: Experience the city&apos;s famous pintxos culture with a guided tour of the best bars, including La Cuchara de San Telmo and Bar Zeruko. Dinner at the hotel&apos;s three-Michelin-starred restaurant by Chef Pedro Subijana.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 5: Morning: Visit the San Telmo Museum to learn about Basque culture. Afternoon: Drive to Bilbao to explore the Guggenheim Museum and its iconic architecture. Evening: Return to San Sebastián for dinner at Arzak, another three-Michelin-starred restaurant known for its innovative Basque cuisine.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 6: Transfer to Abadía Retuerta LeDomaine in the Ribera del Duero wine region. Morning: Private tour of the 12th-century abbey and its vineyards. Afternoon: Wine tasting session featuring the estate&apos;s award-winning wines. Evening: Dinner at the one-Michelin-starred Refectorio restaurant, showcasing local ingredients and traditional techniques with a modern twist.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>San Sebastián beaches</li>
                        <li>Guggenheim Bilbao</li>
                        <li>Wine tasting in Ribera del Duero</li>
                        <li>Pintxos tour in San Sebastián</li>
                        <li>Basque cultural experiences</li>
                        <li>Historic abbey exploration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stays:</h5>
                      <p className="text-white/80 font-satoshi">AKELARRE Hotel & Abadía Retuerta LeDomaine</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 7-9: Barcelona & Costa Brava */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 7-9: Barcelona & Costa Brava</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 7: Arrive in Barcelona, staying at Mandarin Oriental Barcelona. Morning: Visit the iconic Sagrada Familia with a private guide. Afternoon: Explore Park Güell and enjoy panoramic views of the city. Evening: Dinner at Moments, the hotel&apos;s two-Michelin-starred restaurant, followed by a nightcap at the rooftop bar.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 8: Morning: Guided tour of the Gothic Quarter, including the Barcelona Cathedral and Plaça del Rei. Afternoon: Visit La Boqueria market for a food tour and cooking class. Evening: Experience the vibrant nightlife of El Born district, with dinner at El Xampanyet, a historic cava bar.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 9: Day trip to Costa Brava. Morning: Visit the medieval town of Girona and its famous cathedral. Afternoon: Explore the coastal town of Cadaqués, once home to Salvador Dalí. Evening: Return to Barcelona for a farewell dinner at El Celler de Can Roca, a three-Michelin-starred restaurant in Girona.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Sagrada Familia & Park Güell</li>
                        <li>Gothic Quarter exploration</li>
                        <li>Montserrat monastery</li>
                        <li>Costa Brava beaches</li>
                        <li>Local market & cooking class</li>
                        <li>Coastal town visits</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Mandarin Oriental Barcelona</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 10-12: Southern Spain */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 10-12: Southern Spain</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 10: Arrive in Marbella, staying at Marbella Club Hotel. Morning: Relax at the beach and enjoy the hotel&apos;s facilities. Afternoon: Explore the historic Old Town and Orange Square. Evening: Dinner at Skina, a two-Michelin-starred restaurant in Marbella&apos;s old town.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 11: Morning: Visit the white village of Ronda, famous for its dramatic gorge and bullring. Afternoon: Explore the historic center and enjoy lunch at a local restaurant. Evening: Return to Marbella for a flamenco show and dinner at the hotel&apos;s beachfront restaurant.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 12: Day trip to Granada. Morning: Visit the Alhambra Palace and its stunning gardens. Afternoon: Explore the Albaicín neighborhood and enjoy traditional tapas. Evening: Return to Marbella for a farewell dinner at El Lago, a one-Michelin-starred restaurant.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Alhambra Palace</li>
                        <li>White villages of Andalusia</li>
                        <li>Marbella beaches</li>
                        <li>Flamenco shows</li>
                        <li>Historic Ronda</li>
                        <li>Local tapas experience</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Marbella Club Hotel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 13-14: Mallorca */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 13-14: Mallorca</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 13: Fly to Mallorca, staying at Hotel Can Ferrereta. Morning: Arrive and check in to your suite. Afternoon: Visit the Mondragó Natural Park for hiking and beach time. Evening: Dinner at the hotel&apos;s restaurant, featuring local Mallorcan cuisine.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Day 14: Morning: Explore the historic center of Palma, including the Cathedral and Almudaina Palace. Afternoon: Visit a local winery for a tasting session. Evening: Farewell dinner at a traditional restaurant in Santanyí, enjoying the island&apos;s famous seafood and local wines.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Mondragó Natural Park</li>
                        <li>Historic Palma</li>
                        <li>Beach relaxation</li>
                        <li>Local wine tasting</li>
                        <li>Traditional cuisine</li>
                        <li>Island exploration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Hotel Can Ferrereta</p>
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
              Discover our curated selection of Spain&apos;s most exceptional hotels, each offering unique experiences and world-class hospitality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Four Seasons Hotel Madrid</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Madrid</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Opened in 2020, this hotel merges four landmark 19th-century buildings into one grand property. Features the city&apos;s largest urban spa (1,450 m²), a rooftop infinity pool, and multiple dining venues including Dani Brasserie by celebrity chef Dani García.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.fourseasons.com/madrid/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Mandarin Oriental Barcelona</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Barcelona</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Housed in a grand 1920s bank on Passeig de Gràcia, featuring a dramatic white glass atrium, rooftop infinity pool, and two-Michelin-starred restaurant Moments. The Spa Mo offers a vitality pool, hammam, and thermal suite.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.mandarinoriental.com/barcelona" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Abadía Retuerta LeDomaine</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Valladolid</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A 12th-century abbey transformed into a hotel, featuring 500 acres of vineyards, the award-winning Santuario Spa, and one-Michelin-starred Refectorio restaurant. Offers private vineyard tours and wine tastings.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.ledomaine.es/en/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">AKELARRE Hotel</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">San Sebastián</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Perched on Monte Igueldo with panoramic ocean views, featuring a full-service Spa Akelarre and three-Michelin-starred restaurant by Chef Pedro Subijana. Modern architecture with floor-to-ceiling windows and soundproofed rooms.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.akelarrehotel.com/en/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Marbella Club Hotel</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Marbella</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Founded in 1954, this legendary beachfront resort features low-slung whitewashed buildings, tropical gardens, and multiple pools. The Marbella Club Spa offers thalassotherapy and state-of-the-art treatments.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.marbellaclub.com/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Hotel Can Ferrereta</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Mallorca</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A restored 17th-century Mallorcan manor house with 10,000 m² gardens. Features Sa Calma Spa, rooftop plunge pool, and a restaurant in the ancient wine cellar serving modern Mediterranean cuisine.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.canferrereta.com/en/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Pepe Vieira Hotel Relais & Châteaux</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Pontevedra</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A coastal estate with 14 modern &quot;galpones&quot; featuring floor-to-ceiling windows and a two-Michelin-starred restaurant. Set on 12,500 m² of woodland with an outdoor saltwater pool and traditional Galician lareira.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.pepevieira.com/en/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Casa Beatnik Hotel</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">A Coruña</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">An 18th-century villa surrounded by vineyards, featuring eclectic interiors and a unique spa complex with Finnish sauna &quot;iglu&quot; and Turkish hammam. Offers 13 unique suites and 6 luxury yurts in the gardens.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.casabeatnik.com/" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        View Hotel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Terra Dominicata Hotel & Winery</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Tarragona</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A restored 12th-century Carthusian monastery with vineyards and olive groves. Features Les Oliveres spa, outdoor pool, and Mater Terrae restaurant serving Catalan countryside cuisine.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.terradominicata.com/" target="_blank">
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
