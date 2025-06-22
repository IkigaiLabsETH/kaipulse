"use client";

import Link from 'next/link';

export default function DubaiPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Crypto Hub • Luxury Living • Business Opportunities</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Dubai 2025
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The World&apos;s Most Dynamic Blockchain Hub</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/G0fQcV2ErbY"
                title="Dubai Lifestyle Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Living Costs Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Premium Living Costs
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Dubai&apos;s ultra-luxury real estate commands premium prices, with Downtown penthouses and Palm Jumeirah villas ranging from AED 15-50M ($4-14M). Premium apartment rentals in iconic locations like Burj Khalifa or Palm start from AED 450,000/year ($123,000) for a 3BR, while luxury villa rentals in Emirates Hills or Palm Jumeirah can exceed AED 1.5M/year ($410,000).
              </p>
              <p className="text-lg">
                Monthly expenses reflect the high-end lifestyle. Expect AED 2,500-4,000 ($680-1,100) for utilities in a large residence, AED 3,000-5,000 ($820-1,360) for premium gym memberships, and AED 15,000-25,000 ($4,100-6,800) for a full-time driver. International school fees at top institutions range from AED 70,000-120,000 ($19,000-33,000) per child annually.
              </p>
              <p className="text-lg">
                Fine dining and entertainment costs are substantial. A meal at a MICHELIN-starred restaurant averages AED 800-1,500 ($220-410) per person, while VIP table service at premium venues starts from AED 25,000 ($6,800). Private beach club memberships run AED 50,000-100,000 ($13,600-27,000) annually. Luxury car leases (Range Rover, G-Wagon) start from AED 15,000 ($4,100) monthly.
              </p>
              <p className="text-lg">
                For a family of four maintaining a luxury lifestyle in Dubai, including premium housing, schooling, staff, and high-end amenities, the annual budget typically ranges from AED 2.5-5M ($680,000-1.36M), varying based on housing choices and lifestyle preferences.
              </p>
            </div>
          </div>

          {/* Business Setup Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📜</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  VARA Licensing
                </h3>
              </div>
              <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                <li>Registration: ~$30k initial fee</li>
                <li>Annual maintenance: ~$60k for exchanges</li>
                <li>4-12 months processing time</li>
                <li>Required for most crypto operations</li>
                <li>Access to banking services</li>
              </ul>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏢</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Free Zone Setup
                </h3>
              </div>
              <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                <li>DMCC Crypto Centre from AED 34k</li>
                <li>100% foreign ownership</li>
                <li>0% corporate tax through 2027</li>
                <li>Flexi-desk + visa from AED 15-20k</li>
                <li>600+ crypto firms in DMCC</li>
              </ul>
            </div>
          </div>

          {/* Visa Options Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Residency Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Golden Visa</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li>10-year renewable</li>
                  <li>For tech founders</li>
                  <li>Revenue ≥AED 1-2M/year</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Green Visa</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li>5-year self-sponsored</li>
                  <li>Freelance permit</li>
                  <li>Income ≥AED 360k/year</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Remote Work</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li>1-year visa</li>
                  <li>Work remotely</li>
                  <li>$3.5k/month income</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Luxury Lifestyle Links */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Dubai Luxury Living
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              Explore Dubai&apos;s finest real estate, dining experiences, and luxury accommodations through our curated partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="https://www.sothebysrealty.com/eng/sales/du-uae/price-low-sort" target="_blank" className="block">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 hover:border-yellow-500 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Sotheby&apos;s</h4>
                  <p className="text-white/80 font-satoshi">Discover exclusive Dubai properties through Sotheby&apos;s Realty</p>
                </div>
              </Link>
              <Link href="https://guide.michelin.com/fr/fr/hotels-stays/dubai" target="_blank" className="block">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 hover:border-yellow-500 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Luxury Hotels</h4>
                  <p className="text-white/80 font-satoshi">Browse Dubai&apos;s finest hotels selected by the MICHELIN Guide</p>
                </div>
              </Link>
              <Link href="https://guide.michelin.com/fr/fr/dubai-emirate/restaurants" target="_blank" className="block">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 hover:border-yellow-500 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Fine Dining</h4>
                  <p className="text-white/80 font-satoshi">Explore MICHELIN-starred restaurants and culinary excellence</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Crypto Community
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              Join Dubai&apos;s thriving Web3 ecosystem with regular conferences, hackathons, and networking events. Connect with industry leaders and fellow entrepreneurs in the region&apos;s most active crypto hub.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Major Events</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li>TOKEN2049 (15,000+ attendees)</li>
                  <li>DMCC-Bybit Hackathons</li>
                  <li>Monthly Ethereum Dev Meetups</li>
                  <li>Blockchain Hub Dinners</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Players</h4>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li>Binance (VASP licensed)</li>
                  <li>Bybit Regional HQ</li>
                  <li>Solana Foundation Office</li>
                  <li>600+ DMCC Crypto Firms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="relative w-full mx-auto aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <iframe
              src="https://www.youtube.com/embed/G_BJuT0PffU"
              title="SIRO One Za'abeel Lifestyle Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

          {/* SIRO One Za'abeel Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              SIRO One Za&apos;abeel: A New Era of Wellness Hospitality
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              Opened in early 2024, SIRO One Za&apos;abeel is Dubai&apos;s first fitness and recovery-focused hotel. Part of the iconic One Za&apos;abeel development, it&apos;s an immersive lifestyle destination featuring two skyscrapers connected by &quot;The Link,&quot; the world&apos;s longest cantilevered structure. It redefines luxury with a deep focus on holistic wellbeing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Fitness & Recovery */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Fitness & Recovery Core</h4>
                <p className="text-white/80 font-satoshi">
                  The hotel boasts a state-of-the-art Fitness Lab and a dedicated Recovery Floor with advanced therapies. Guests can engage in personalized training, group classes, or curated experiences like desert workouts and skydiving.
                </p>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Cutting-edge equipment with downtown views</li>
                  <li>Pioneering recovery-focused treatments</li>
                  <li>Rooms designed to optimize sleep and performance</li>
                </ul>
              </div>

              {/* Right Column: Culinary & Luxury */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Culinary & Luxury</h4>
                <p className="text-white/80 font-satoshi">
                  With nine restaurants, including concepts from world-renowned chefs like Anne-Sophie Pic and Tetsuya Wakuda, dining is a key part of the experience. Bespoke nutrition programs align with wellness goals.
                </p>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>La Dame de Pic: Refined French cuisine</li>
                  <li>Sagetsu: Sophisticated Japanese dining</li>
                  <li>Stunning views from the 27th-floor infinity pool</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
                <Link href="https://www.sirohotels.com/onezaabeel" target="_blank" className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-none hover:bg-yellow-600 transition-colors duration-300 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                    Explore SIRO One Za&apos;abeel
                </Link>
            </div>
            
            <div className="mt-8 text-white/70 text-sm font-satoshi text-center">
              <p>Rated 9/10 by The Telegraph and highly on Tripadvisor, SIRO is praised for its innovative concept. It&apos;s located a 5-minute walk from the Dubai World Trade Centre.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
