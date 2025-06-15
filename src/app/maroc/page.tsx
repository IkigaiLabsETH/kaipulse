"use client";

export default function MoroccoPage() {
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
                Morocco
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Journey Through Moroccan Excellence</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/tbizkWD6YdA"
                title="Moroccan Luxury Journey"
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
              Exploring Morocco&apos;s Pinnacle of Luxury
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Morocco&apos;s hospitality scene is a tapestry of timeless tradition and modern opulence, where ancient craftsmanship meets contemporary elegance. From the vibrant medinas of Marrakech to the coastal serenity of Taghazout and the cosmopolitan charm of Casablanca and Rabat, the country offers an array of luxury accommodations that redefine indulgence.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Morocco&apos;s finest hotels</li>
                  <li>Traditional Moroccan cuisine and fine dining</li>
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
                Ancient Traditions
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
                Moroccan Cuisine
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

          {/* Luxury Properties */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Morocco&apos;s Finest Luxury Properties
            </h3>
            <div className="space-y-8">
              {/* Villa Mabrouka */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Villa Mabrouka: A Timeless Sanctuary in Tangier</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Nestled in the heart of Tangier, Villa Mabrouka is a testament to the vision of the late Yves Saint Laurent and his partner Pierre Bergé, whose legacy of artistry and elegance permeates every corner of this boutique retreat. Perched on a cliff overlooking the Strait of Gibraltar, the villa—whose name means &quot;house of luck&quot; in Arabic—blends Moroccan craftsmanship with Mediterranean allure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>12 uniquely designed suites</li>
                        <li>Lush gardens</li>
                        <li>Rooftop terrace</li>
                        <li>Poolside pavilions</li>
                        <li>Traditional Moroccan cuisine</li>
                        <li>Panoramic sea views</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Location:</h5>
                      <p className="text-white/80 font-satoshi">Tangier</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Royal Mansour Casablanca */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Royal Mansour Casablanca: A Reimagined Icon</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    In the heart of Casablanca&apos;s Art Deco district, Royal Mansour Casablanca has risen from its storied past to redefine luxury in Morocco&apos;s economic capital. Originally built in the 1950s, this iconic property was reborn in April 2024 after eight years of meticulous restoration, preserving its modernist silhouette while infusing it with contemporary elegance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>149 luxury accommodations</li>
                        <li>La Grande Table Marocaine</li>
                        <li>2,510-square-meter spa</li>
                        <li>Traditional hammam</li>
                        <li>20th-floor barber salon</li>
                        <li>Dedicated butler service</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Location:</h5>
                      <p className="text-white/80 font-satoshi">Casablanca</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Riad Dar Al Dall */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Riad Dar Al Dall - This Time Tomorrow, Marrakech</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Tucked away in the labyrinthine alleys of Marrakech&apos;s medina, Riad Dar Al Dall - This Time Tomorrow offers an intimate retreat that captures the essence of the &quot;Red City.&quot; This boutique riad, part of a collection curated by tastemakers, is a celebration of Moroccan craftsmanship, with intricately carved plasterwork, vibrant zellige tiles, and handwoven textiles adorning its intimate spaces.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Intimate courtyard</li>
                        <li>Rooftop terrace</li>
                        <li>Farm-to-table dining</li>
                        <li>Traditional architecture</li>
                        <li>Personalized service</li>
                        <li>Cultural immersion</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Location:</h5>
                      <p className="text-white/80 font-satoshi">Marrakech</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Ritz-Carlton Rabat */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Ritz-Carlton Rabat, Dar Es Salam</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Set within a 440-acre oak forest in Morocco&apos;s capital, The Ritz-Carlton Rabat, Dar Es Salam is a masterpiece of luxury that harmonizes with its natural surroundings. Adjacent to the prestigious Royal Golf Dar Es Salam, this resort is a haven for those seeking both relaxation and adventure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>104 luxury rooms and suites</li>
                        <li>Five dining venues</li>
                        <li>Traditional spa</li>
                        <li>Golf course access</li>
                        <li>Cultural excursions</li>
                        <li>Forest views</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Location:</h5>
                      <p className="text-white/80 font-satoshi">Rabat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fairmont Taghazout Bay */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Fairmont Taghazout Bay: Coastal Bliss Redefined</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    On Morocco&apos;s stunning Atlantic coast, Fairmont Taghazout Bay is a beacon of oceanfront luxury in the laid-back surf village of Taghazout. Spanning 18 hectares, this 5-star resort boasts 155 rooms and 52 exclusive villas, many with private pools and sweeping views of the Atlantic.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Highlights:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Private pool villas</li>
                        <li>Fairmont Spa</li>
                        <li>Surf lessons</li>
                        <li>Golf courses</li>
                        <li>Oceanfront dining</li>
                        <li>Cultural excursions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Location:</h5>
                      <p className="text-white/80 font-satoshi">Taghazout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              A Tapestry of Moroccan Luxury
            </h3>
            <p className="text-lg text-gray-300">
              From the cliffside elegance of Villa Mabrouka to the urban sophistication of Royal Mansour Casablanca, the intimate charm of Riad Dar Al Dall, the forested grandeur of The Ritz-Carlton Rabat, and the coastal allure of Fairmont Taghazout Bay, these properties showcase Morocco&apos;s ability to blend heritage with innovation. Each offers a unique lens through which to experience the kingdom&apos;s rich culture, from its imperial cities to its sun-drenched shores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
