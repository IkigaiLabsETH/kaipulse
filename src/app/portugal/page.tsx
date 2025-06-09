"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortugalPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Crypto & Lifestyle • Cultural Experiences • Luxury Travel</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Portugal
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Where Crypto Meets Culture</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/portugal-lisbon.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Journey Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Your Dream Portuguese Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Discover Portugal&apos;s unique blend of crypto innovation and Mediterranean charm. From Lisbon&apos;s vibrant tech scene to the sun-drenched beaches of Cascais and the mystical hills of Sintra, experience a lifestyle where digital innovation meets timeless tradition.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Journey Highlights:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury accommodations at Portugal&apos;s finest hotels</li>
                  <li>Vibrant crypto and tech community</li>
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
                <span className="text-4xl">💻</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Crypto Hub
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Digital Innovation
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏖️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Coastal Life
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Mediterranean Charm
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏰</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Historic Sites
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Cultural Heritage
              </p>
            </div>
          </div>

          {/* Crypto & Lifestyle Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Crypto & Lifestyle Hubs
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Explore Portugal&apos;s most vibrant locations where crypto innovation meets Mediterranean lifestyle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Lisbon</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Crypto Capital</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">The heart of Portugal&apos;s crypto scene, where historic charm meets cutting-edge innovation. Home to major crypto events and a thriving digital nomad community.</p>
                  <Link href="#" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Explore Lisbon
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Cascais</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Coastal Paradise</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A sun-drenched coastal town where crypto founders find their perfect work-life balance. Known for its beaches, golf courses, and luxury living.</p>
                  <Link href="#" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Discover Cascais
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Sintra</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Mystical Retreat</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A UNESCO World Heritage site where crypto entrepreneurs find inspiration in historic palaces and misty forests. Perfect for creative thinking and strategic planning.</p>
                  <Link href="#" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Visit Sintra
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Porto</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Northern Innovation</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Portugal&apos;s second city, combining traditional charm with a growing tech scene. Famous for its wine, architecture, and emerging crypto community.</p>
                  <Link href="#" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Explore Porto
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Ericeira</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Surf & Tech</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A surf paradise where crypto entrepreneurs balance work with world-class waves. Known for its laid-back lifestyle and growing digital nomad community.</p>
                  <Link href="#" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Discover Ericeira
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-black border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Algarve</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Southern Escape</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Portugal&apos;s southern coast offers year-round sunshine, golf courses, and a growing community of remote workers and crypto entrepreneurs.</p>
                  <Link href="#" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Visit Algarve
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Crypto Benefits Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Why Portugal for Crypto?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Tax Benefits</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Capital gains tax exemption on crypto held over 12 months</li>
                  <li>• Zero tax on coin-to-coin swaps</li>
                  <li>• Digital nomad visa options</li>
                  <li>• Golden visa alternatives</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-xl mb-4">Lifestyle Perks</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Mediterranean climate year-round</li>
                  <li>• World-class healthcare system</li>
                  <li>• English widely spoken</li>
                  <li>• High quality of life</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Crypto Community
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Join a thriving network of crypto entrepreneurs, developers, and digital nomads. From weekend surf trips in Ericeira to long-form chats over petiscos in Porto, Portugal offers the perfect environment for building meaningful connections while maintaining work-life balance.
            </p>
            <div className="flex justify-center">
              <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-none hover:bg-yellow-400 transition-all duration-300 text-lg">
                Join the Community
              </Button>
            </div>
          </div>

          {/* Road Trip Itinerary Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              3-Week Luxury Road Trip
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Experience Portugal&apos;s finest luxury accommodations and breathtaking landscapes on this carefully curated journey from Porto to Lisbon and back.
            </p>

            <div className="space-y-16">
              {/* Week 1: Porto & Douro Valley */}
              <div className="bg-black/50 p-8 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-2xl mb-6">Week 1: Porto & Douro Valley</h4>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 1-3: Porto</h5>
                    <p className="text-white/80 font-satoshi mb-4">Begin your journey in Porto, Portugal&apos;s charismatic northern capital where historic charm meets contemporary luxury. The city&apos;s UNESCO-listed Ribeira district, with its colorful facades and medieval streets, sets the stage for an unforgettable stay. Choose from an array of exceptional accommodations:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Riverside Luxury</h6>
                        <div className="space-y-2">
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/the-yeatman-11004" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                              The Yeatman
                            </Button>
                          </Link>
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/portobay-flores-12216" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                              PortoBay Flores
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Historic Palaces</h6>
                        <div className="space-y-2">
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/le-monumental-palace-10607" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                              Le Monumental Palace
                            </Button>
                          </Link>
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/ga-palace-hotel-spa-a-xixth-century-villa-14493" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                              GA Palace Hotel & Spa
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Boutique Retreats</h6>
                        <div className="space-y-2">
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/torel-1884-9352" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                              Torel 1884
                            </Button>
                          </Link>
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/hotel-torel-avantgarde-9354" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                              Torel Avantgarde
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Coastal & Countryside</h6>
                        <div className="space-y-2">
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/vila-foz-hotel-spa-9157" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                              Vila Foz Hotel & Spa
                            </Button>
                          </Link>
                          <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/quinta-de-silvalde-14071" target="_blank">
                            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                              Quinta de Silvalde
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 font-satoshi mb-4">During your stay, immerse yourself in Porto&apos;s rich cultural tapestry. Visit the iconic Livraria Lello, one of the world&apos;s most beautiful bookstores, explore the historic port wine cellars in Vila Nova de Gaia, and stroll along the Douro River promenade. The city&apos;s vibrant food scene offers everything from traditional francesinhas to innovative Michelin-starred dining experiences. Don&apos;t miss the opportunity to witness the stunning sunset from the Dom Luís I Bridge, where the city&apos;s golden light creates a magical atmosphere.</p>
                  </div>

                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 4-5: Sublime Comporta</h5>
                    <p className="text-white/80 font-satoshi mb-4">Experience the epitome of Portuguese coastal luxury at Sublime Comporta, often compared to Ibiza&apos;s José Ignacio for its sophisticated beach culture and laid-back elegance. This architectural masterpiece, inspired by Frank Lloyd Wright&apos;s design principles, offers a perfect blend of modern minimalism and natural beauty.</p>
                    
                    <div className="bg-black/30 p-6 rounded-none border-2 border-yellow-500/20 mb-6">
                      <h6 className="text-yellow-400 font-epilogue text-lg mb-4">Why Sublime Comporta?</h6>
                      <ul className="text-white/80 font-satoshi space-y-3">
                        <li>• 34 beautifully designed rooms and suites with private patios</li>
                        <li>• Private pool villas with indoor and outdoor fireplaces</li>
                        <li>• Sem Porta restaurant serving seasonal Portuguese cuisine</li>
                        <li>• Beach club access and pristine Atlantic beaches</li>
                        <li>• Solar-powered luxury with sustainable practices</li>
                        <li>• Surrounded by rice fields and pine forests</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Unique Experiences</h6>
                        <ul className="text-white/80 font-satoshi space-y-2">
                          <li>• Beach yoga sessions</li>
                          <li>• Wine tasting in the garden</li>
                          <li>• Private beach dinners</li>
                          <li>• Horseback riding on the beach</li>
                        </ul>
                      </div>

                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Local Attractions</h6>
                        <ul className="text-white/80 font-satoshi space-y-2">
                          <li>• Comporta&apos;s chic boutiques</li>
                          <li>• Rice field cycling tours</li>
                          <li>• Sado Estuary boat trips</li>
                          <li>• Local artisan markets</li>
                        </ul>
                      </div>
                    </div>

                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/comporta/sublime-comporta-7703" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Experience Sublime Comporta
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 6-8: Douro Valley</h5>
                    <p className="text-white/80 font-satoshi mb-4">Journey to the Six Senses Douro Valley in Lamego, where you&apos;ll experience world-class wine tasting, spa treatments, and breathtaking views of the terraced vineyards.</p>
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/lamego/six-senses-douro-valley-1901" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                        Six Senses Douro Valley
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Week 2: Alentejo & Algarve */}
              <div className="bg-black/50 p-8 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-2xl mb-6">Week 2: Alentejo & Algarve</h4>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 9-10: Monforte</h5>
                    <p className="text-white/80 font-satoshi mb-4">Stay at Torre de Palma Wine Hotel, a 14th-century estate in the heart of Alentejo, offering wine experiences and authentic Portuguese cuisine.</p>
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/monforte/torre-de-palma-wine-hotel-8218" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                        Torre de Palma
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 11-13: Algarve Coast</h5>
                    <p className="text-white/80 font-satoshi mb-4">Experience the Bela Vista Hotel & Spa in Portimão, followed by Vila Joya in Albufeira, both offering stunning ocean views and world-class dining.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="https://guide.michelin.com/fr/fr/hotels-stays/portimao/bela-vista-hotel-spa-6546" target="_blank">
                        <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                          Bela Vista Hotel
                        </Button>
                      </Link>
                      <Link href="https://guide.michelin.com/fr/fr/hotels-stays/albufeira/vila-joya-7487" target="_blank">
                        <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                          Vila Joya
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 14-15: Vila Vita Parc</h5>
                    <p className="text-white/80 font-satoshi mb-4">Relax at Vila Vita Parc in Alporchinhos, a luxury resort with private beaches, multiple pools, and Michelin-starred dining.</p>
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/alporchinhos/vila-vita-parc-11366" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                        Vila Vita Parc
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Week 3: Lisbon & Sintra */}
              <div className="bg-black/50 p-8 rounded-none border-2 border-yellow-500/20">
                <h4 className="text-yellow-400 font-epilogue text-2xl mb-6">Week 3: Lisbon & Sintra</h4>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 16-17: Melides</h5>
                    <p className="text-white/80 font-satoshi mb-4">Experience the unique Vermelho Melides, a Relais & Châteaux property that seamlessly blends art, nature, and luxury in the peaceful Alentejo coast. This architectural masterpiece, designed by Christian Louboutin, offers an immersive experience where every detail tells a story.</p>
                    
                    <div className="bg-black/30 p-6 rounded-none border-2 border-yellow-500/20 mb-6">
                      <h6 className="text-yellow-400 font-epilogue text-lg mb-4">Vermelho Melides Highlights</h6>
                      <ul className="text-white/80 font-satoshi space-y-3">
                        <li>• 13 uniquely designed rooms and suites, each with its own artistic identity</li>
                        <li>• Private pool villas with panoramic views of the Atlantic</li>
                        <li>• Restaurant Xtian serving innovative Portuguese cuisine</li>
                        <li>• Art gallery featuring contemporary Portuguese artists</li>
                        <li>• Beach club access to pristine Melides beaches</li>
                        <li>• Sustainable luxury with eco-conscious practices</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Unique Experiences</h6>
                        <ul className="text-white/80 font-satoshi space-y-2">
                          <li>• Private art tours with resident curator</li>
                          <li>• Wine tasting in the garden</li>
                          <li>• Beach picnics with local delicacies</li>
                          <li>• Yoga sessions with ocean views</li>
                        </ul>
                      </div>

                      <div className="bg-black/30 p-4 rounded-none border-2 border-yellow-500/20">
                        <h6 className="text-yellow-400 font-epilogue text-lg mb-2">Local Attractions</h6>
                        <ul className="text-white/80 font-satoshi space-y-2">
                          <li>• Melides&apos; pristine beaches</li>
                          <li>• Local artisan workshops</li>
                          <li>• Sado Estuary nature reserve</li>
                          <li>• Traditional fishing villages</li>
                        </ul>
                      </div>
                    </div>

                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/Melides/vermelho-melides-13109" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                        Experience Vermelho Melides
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 18-19: Sintra</h5>
                    <p className="text-white/80 font-satoshi mb-4">Stay at Penha Longa Resort, a luxury retreat surrounded by the mystical Sintra mountains and offering world-class golf and spa facilities.</p>
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/sintra/penha-longa-resort-14501" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                        Penha Longa Resort
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h5 className="text-yellow-400 font-epilogue text-xl mb-3">Days 20-21: Lisbon</h5>
                    <p className="text-white/80 font-satoshi mb-4">Conclude your journey at the Four Seasons Hotel Ritz Lisbon, enjoying the city&apos;s vibrant culture, historic sites, and world-class dining.</p>
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/lisbon/four-seasons-hotel-ritz-lisbon-12766" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
                        Four Seasons Ritz
                      </Button>
                    </Link>
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
