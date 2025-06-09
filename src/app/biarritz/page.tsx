"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BiarritzPage() {
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
                Basque Country
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Journey Through Basque Excellence</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/IcNGKQg8Nkg"
                title="Basque Country Luxury Journey"
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
              Your Dream Basque Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Ready for the adventure of a lifetime? We&apos;re taking you on a whirlwind tour of the Basque Country&apos;s finest - from Bilbao&apos;s jaw-dropping art scene to San Sebastián&apos;s sun-kissed beaches, all the way to Biarritz&apos;s timeless elegance.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Basque Country&apos;s finest hotels</li>
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

          {/* 5-Day Itinerary */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              5-Day Journey
            </h3>
            <div className="space-y-8">
              {/* Day 1: Bilbao */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Day 1: Bilbao - The Gateway to Basque Art</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Welcome to Bilbao! Get ready to be wowed by this vibrant city where art meets luxury. We&apos;ve got you staying at The Artist Grand Hotel (hello, Guggenheim views!) and dining at the mind-blowing three-Michelin-starred Azurmendi.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Guggenheim Museum</li>
                        <li>The Artist Grand Hotel</li>
                        <li>Azurmendi Restaurant</li>
                        <li>Old Town exploration</li>
                        <li>Fine dining experiences</li>
                        <li>Art galleries & museums</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">The Artist Grand Hotel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2: Gaztelugatxe & San Sebastián */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Day 2: Gaztelugatxe & San Sebastián - Coastal Wonders</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Experience the dramatic beauty of Gaztelugatxe, a historic hermitage on a dramatic islet, before heading to the elegant Hotel Maria Cristina in San Sebastián. This Belle Époque luxury hotel has been welcoming guests since 1912 and offers prime location near La Concha Beach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Gaztelugatxe hermitage</li>
                        <li>Hotel Maria Cristina</li>
                        <li>La Concha Beach</li>
                        <li>Historic film festival venue</li>
                        <li>Dry Martini Bar</li>
                        <li>Coastal views</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Hotel Maria Cristina</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3: San Sebastián */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Day 3: San Sebastián - Culinary Paradise</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    San Sebastián - where every meal feels like a celebration! From hopping between pintxos bars to the legendary Arzak restaurant, this city will make your taste buds dance. Trust us, you&apos;ll understand why foodies worldwide call this place paradise.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Arzak Restaurant</li>
                        <li>Pintxos bars</li>
                        <li>La Concha Beach</li>
                        <li>Old Town exploration</li>
                        <li>Fine dining experiences</li>
                        <li>Coastal walks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Hotel Maria Cristina</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 4: Saint-Jean-de-Luz */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Day 4: Saint-Jean-de-Luz - French Basque Charm</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Bonjour, French Basque Country! Get ready to fall in love with Saint-Jean-de-Luz&apos;s seaside charm. We&apos;re talking Belle Époque luxury at the Grand Hôtel Thalasso & Spa and exploring picture-perfect Basque villages that look straight out of a storybook.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Grand Hôtel Thalasso & Spa</li>
                        <li>Ainhoa village</li>
                        <li>Espelette peppers</li>
                        <li>Le Kaïku restaurant</li>
                        <li>Coastal exploration</li>
                        <li>Local markets</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Grand Hôtel Thalasso & Spa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 5: Biarritz */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Day 5: Biarritz - Imperial Elegance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Your grand finale in Biarritz! This is where imperial elegance meets coastal cool. Picture yourself at the historic Hôtel du Palais, where Napoleon III once stayed, and dining at L&apos;Impertinent - because why not end your journey with a Michelin-starred bang?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Hôtel du Palais</li>
                        <li>Rocher de la Vierge</li>
                        <li>L&apos;Impertinent</li>
                        <li>Grande Plage</li>
                        <li>Luxury shopping</li>
                        <li>Coastal views</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Hôtel du Palais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Accommodations */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Luxury Accommodations
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The Artist Grand Hotel</h4>
                <p className="text-white/80 font-satoshi">
                  A design-lover&apos;s haven with 145 rooms featuring panoramic views of the Guggenheim Museum. Enjoy the rooftop terrace, full-service spa, and chauffeur service.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hotel Maria Cristina</h4>
                <p className="text-white/80 font-satoshi">
                  Belle Époque luxury since 1912, featuring elegant rooms with modern amenities and a prime location near La Concha Beach.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hôtel du Palais</h4>
                <p className="text-white/80 font-satoshi">
                  Empress Eugénie&apos;s former summer residence, offering imperial grandeur, ocean views, and direct access to the Grande Plage.
                </p>
              </div>
            </div>
          </div>

          {/* Michelin-Starred Restaurants */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Michelin-Starred Dining
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Azurmendi</h4>
                <p className="text-white/80 font-satoshi">
                  Three-Michelin-starred restaurant by Chef Eneko Atxa, known for innovative Basque cuisine and sustainable practices.
                </p>
                <div className="mt-4">
                  <Link href="https://guide.michelin.com/en/bizkaia/larrabetzu/restaurant/azurmendi" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Arzak</h4>
                <p className="text-white/80 font-satoshi">
                  Juan Mari and Elena Arzak&apos;s three-Michelin-star restaurant combines Basque tradition with innovative techniques.
                </p>
                <div className="mt-4">
                  <Link href="https://guide.michelin.com/en/pais-vasco/san-sebastian/restaurant/arzak" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Akelarre</h4>
                <p className="text-white/80 font-satoshi">
                  Pedro Subijana&apos;s three-Michelin-star restaurant offers stunning ocean views and innovative Basque cuisine.
                </p>
                <div className="mt-4">
                  <Link href="https://guide.michelin.com/en/pais-vasco/san-sebastian/restaurant/akelarre" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">L&apos;Impertinent</h4>
                <p className="text-white/80 font-satoshi">
                  Chef Fabian Feldmann&apos;s Michelin-starred restaurant offers inventive contemporary French cuisine in an elegant setting.
                </p>
                <div className="mt-4">
                  <Link href="https://guide.michelin.com/en/nouvelle-aquitaine/biarritz/restaurant/l-impertinent" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Etxebarri</h4>
                <p className="text-white/80 font-satoshi">
                  Victor Arguinzoniz&apos;s Michelin-starred restaurant in Axpe is famous for its wood-fired cooking techniques.
                </p>
                <div className="mt-4">
                  <Link href="https://guide.michelin.com/en/pais-vasco/axpe/restaurant/asadero-extebarri" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Mugaritz</h4>
                <p className="text-white/80 font-satoshi">
                  Andoni Luis Aduriz&apos;s two-Michelin-star restaurant pushes the boundaries of culinary innovation.
                </p>
                <div className="mt-4">
                  <Link href="https://guide.michelin.com/en/pais-vasco/errenteria/restaurant/mugaritz" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
                      View on Michelin Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Activities */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Cultural Immersion
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Art & Architecture</h4>
                <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                  <li>Private Guggenheim Museum tours</li>
                  <li>Frank Gehry&apos;s architectural masterpieces</li>
                  <li>Contemporary art galleries in Bilbao</li>
                  <li>Historic Basque architecture tours</li>
                  <li>Art workshops with local artists</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Traditional Activities</h4>
                <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                  <li>Private pelota matches</li>
                  <li>Basque cooking classes</li>
                  <li>Traditional music performances</li>
                  <li>Local festival experiences</li>
                  <li>Guided historical walks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Luxury Shopping */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Luxury Shopping
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Biarritz Shopping</h4>
                <p className="text-white/80 font-satoshi">
                  Luxury boutiques along Avenue Edouard VII, featuring Hermès, Louis Vuitton, and local designers. Visit Les Halles for artisanal products.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">San Sebastián Boutiques</h4>
                <p className="text-white/80 font-satoshi">
                  Exclusive shopping in the Centro district, with high-end fashion, local designers, and traditional Basque crafts in the Old Town.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Bilbao Design</h4>
                <p className="text-white/80 font-satoshi">
                  Contemporary design shops in the Abando district, featuring local artisans, modern furniture, and unique Basque souvenirs.
                </p>
              </div>
            </div>
          </div>

          {/* Wellness & Spa */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Wellness & Spa
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Luxury Spas</h4>
                <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                  <li>Hôtel du Palais Spa with sea views</li>
                  <li>Grand Hôtel Thalasso & Spa treatments</li>
                  <li>Nobu Hotel Spa experiences</li>
                  <li>Private wellness consultations</li>
                  <li>Customized spa packages</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Active Wellness</h4>
                <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                  <li>Private yoga sessions with ocean views</li>
                  <li>Guided coastal meditation walks</li>
                  <li>Personal training on the beach</li>
                  <li>Surf lessons with world-class instructors</li>
                  <li>Private Pilates studios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Private Events */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Private Events
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Beachside Celebrations</h4>
                <p className="text-white/80 font-satoshi">
                  Exclusive beach setups with gourmet catering, live music, and sunset views at Biarritz&apos;s Grande Plage or San Sebastián&apos;s La Concha.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Wine Tasting Events</h4>
                <p className="text-white/80 font-satoshi">
                  Private wine tastings in historic cellars, featuring rare vintages and expert sommeliers, paired with gourmet Basque cuisine.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Cultural Performances</h4>
                <p className="text-white/80 font-satoshi">
                  Private concerts, traditional dance performances, and cultural shows in historic venues or luxury hotel settings.
                </p>
              </div>
            </div>
          </div>

          {/* Luxury Transportation */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Luxury Transportation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚗</div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Blacklane Chauffeur Service</h4>
                    <p className="text-white/80 font-satoshi mb-4">
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
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚁</div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Helicopter Services</h4>
                    <p className="text-white/80 font-satoshi mb-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
