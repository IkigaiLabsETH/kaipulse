"use client";

export default function CostaRicaPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Travel • Nature • Adventure</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Costa Rica
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Pura Vida - Pure Life</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/gjdlIXd1P8g"
                title="Costa Rica Luxury Journey"
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
              Your Dream Costa Rican Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Embark on a 17-day journey through Costa Rica&apos;s most enchanting landscapes, from the vibrant Central Valley to the pristine beaches of the Pacific Coast. This carefully curated itinerary combines luxury accommodations, eco-tourism experiences, and adventure activities, creating an unforgettable tapestry of Costa Rican excellence.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Costa Rica&apos;s finest resorts</li>
                  <li>Eco-tourism and wildlife experiences</li>
                  <li>Beach and surfing adventures</li>
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
                <span className="text-4xl">🌴</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Eco-Tourism
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Nature & Wildlife
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏄</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Adventure
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Surf & Explore
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
                Premium Resorts
              </p>
            </div>
          </div>

          {/* 17-Day Itinerary */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              17-Day Journey
            </h3>
            <div className="space-y-8">
              {/* Days 1-2: Central Valley */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 1-2: Central Valley - The Heart of Costa Rica</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Begin your journey in the Central Valley, staying at the Costa Rica Marriott Hotel Hacienda Belen. This luxurious resort, nestled in a coffee plantation, offers the perfect blend of urban access and resort amenities. Enjoy the outdoor pools, full-service spa, fitness center, and golf driving range.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>San Jose city center</li>
                        <li>Britt&apos;s Coffee Tour</li>
                        <li>St. Mary&apos;s International Chapel</li>
                        <li>Spa treatments</li>
                        <li>Golf facilities</li>
                        <li>Local markets</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Costa Rica Marriott Hotel Hacienda Belen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 3-7: Northwest Coast */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 3-7: Northwest Coast - Luxury Beach Paradise</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Travel to the stunning Peninsula Papagayo, where you&apos;ll experience the epitome of luxury at either the Four Seasons Resort or Nekajui, a Ritz-Carlton Reserve. Both properties offer world-class amenities, including multiple pools, beaches, golf courses, and spas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Arnold Palmer golf course</li>
                        <li>Water sports</li>
                        <li>Spa treatments</li>
                        <li>Beach activities</li>
                        <li>Wellness programs</li>
                        <li>National parks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Four Seasons Resort Peninsula Papagayo or Nekajui</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 8-12: Central Pacific */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 8-12: Central Pacific - Nature & Luxury</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Experience the perfect blend of nature and luxury at Makanda by The Sea and Vista Celestial. These boutique properties offer unique experiences, from private beach access to infinity pools with rainforest views.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Manuel Antonio National Park</li>
                        <li>Whale&apos;s Tail sandbar</li>
                        <li>Wildlife watching</li>
                        <li>Beach relaxation</li>
                        <li>Yoga sessions</li>
                        <li>Rainforest hikes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Makanda by The Sea & Vista Celestial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 13-17: South Pacific */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Days 13-17: South Pacific - Eco-Tourism & Surfing</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Conclude your journey in the South Pacific, where eco-luxury meets adventure. Stay at Lapa Rios Lodge for an immersive rainforest experience, and visit Pavones for world-class surfing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Corcovado National Park</li>
                        <li>Pavones surf break</li>
                        <li>Wildlife tours</li>
                        <li>Bird watching</li>
                        <li>Rainforest hikes</li>
                        <li>Golfo Dulce</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stay:</h5>
                      <p className="text-white/80 font-satoshi">Lapa Rios Lodge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Information */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Practical Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Transportation</h4>
                <p className="text-white/80 font-satoshi">
                  Fly into Juan Santamaría International Airport (SJO) for San Jose, with domestic options to Liberia (LIR) and Puerto Jimenez (PJM). Renting a car is recommended for flexibility, especially in remote areas like Pavones, where a 4x4 is essential.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Best Time to Visit</h4>
                <p className="text-white/80 font-satoshi">
                  The dry season (December to April) is ideal for outdoor activities, with sunny weather and lower rainfall. However, Costa Rica&apos;s year-round appeal means the rainy season (May to November) can offer lush landscapes and fewer crowds.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Budget Considerations</h4>
                <p className="text-white/80 font-satoshi">
                  Expect costs of $300-$1,000+ per night for luxury accommodations. Additional expenses include activities like wildlife tours, surfing lessons, and spa treatments. Plan for transportation costs, especially for remote areas.
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Pura Vida Experiences */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Alternative Pura Vida Experiences
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mother Earth Vegan Hotel */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Mother Earth Vegan Hotel</h4>
                <p className="text-white/80 font-satoshi mb-4">Tamarindo, Guanacaste</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• First vegan hotel in Costa Rica</li>
                  <li>• Solar-powered sustainability</li>
                  <li>• Saltwater natural pool</li>
                  <li>• Plant-based fine dining</li>
                </ul>
              </div>

              {/* SENDERO HOTEL */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">SENDERO HOTEL</h4>
                <p className="text-white/80 font-satoshi mb-4">Nosara, Guanacaste</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Steps from Playa Guiones</li>
                  <li>• Surf concierge service</li>
                  <li>• Eco-friendly design</li>
                  <li>• Wellness & spa facilities</li>
                </ul>
              </div>

              {/* Hotel Aguas Claras */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Hotel Aguas Claras</h4>
                <p className="text-white/80 font-satoshi mb-4">Puerto Viejo, Caribbean</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Adults-only luxury retreat</li>
                  <li>• Artistic Victorian design</li>
                  <li>• Beachfront location</li>
                  <li>• Holistic spa treatments</li>
                </ul>
              </div>

              {/* Origins Luxury Lodge */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Origins Luxury Lodge</h4>
                <p className="text-white/80 font-satoshi mb-4">Upala, Alajuela</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Michelin-starred dining</li>
                  <li>• Treetop villa suites</li>
                  <li>• 180° valley views</li>
                  <li>• Wildlife & nature tours</li>
                </ul>
              </div>

              {/* Casa Chameleon */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Casa Chameleon Las Catalinas</h4>
                <p className="text-white/80 font-satoshi mb-4">Las Catalinas, Guanacaste</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Private infinity pools</li>
                  <li>• Adults-only luxury</li>
                  <li>• Ocean-view villas</li>
                  <li>• Relais & Châteaux member</li>
                </ul>
              </div>

              {/* Kura Boutique Hotel */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Kura Boutique Hotel</h4>
                <p className="text-white/80 font-satoshi mb-4">Uvita, Pacific Coast</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Rainforest luxury suites</li>
                  <li>• Panoramic ocean views</li>
                  <li>• Fine dining experience</li>
                  <li>• Sustainable luxury</li>
                </ul>
              </div>

              {/* Silvestre Nosara */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Silvestre Nosara</h4>
                <p className="text-white/80 font-satoshi mb-4">Nosara, Guanacaste</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Family-friendly luxury</li>
                  <li>• Surf concierge service</li>
                  <li>• Rooftop infinity pool</li>
                  <li>• Wellness studio</li>
                </ul>
              </div>

              {/* El Mangroove */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">El Mangroove</h4>
                <p className="text-white/80 font-satoshi mb-4">Playa Panama, Guanacaste</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Beachfront mangroves</li>
                  <li>• Private tour boats</li>
                  <li>• Bearth Spa treatments</li>
                  <li>• Contemporary luxury</li>
                </ul>
              </div>

              {/* Andaz Costa Rica */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Andaz Costa Rica Resort</h4>
                <p className="text-white/80 font-satoshi mb-4">Peninsula Papagayo</p>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Private peninsula setting</li>
                  <li>• Multiple pools & beaches</li>
                  <li>• 11 dining venues</li>
                  <li>• Family-friendly activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
