"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortugalPage() {
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
            <source src="/videos/portugal-lisbon.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6 px-4 md:px-0">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide px-4 py-1.5 rounded-full">Crypto & Lifestyle Hub</Badge>
            <h1 className="font-epilogue text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight leading-tight">
              Where Crypto Meets Culture
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-relaxed">
              Discover Portugal&apos;s unique blend of crypto innovation and Mediterranean charm. From Lisbon&apos;s vibrant tech scene to the sun-drenched beaches of Cascais and the mystical hills of Sintra, experience a lifestyle where digital innovation meets timeless tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 text-lg w-full sm:w-auto">
                Explore Portugal
              </Button>
              <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-4 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 text-lg w-full sm:w-auto">
                View Crypto Guide
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center w-full max-w-[500px] px-4 md:px-0">
            <div className="w-full aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transform hover:scale-[1.02] transition-transform duration-300">
              <iframe
                src="https://www.youtube.com/embed/O9l15CeLGdU"
                title="Portugal Crypto & Lifestyle"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Crypto & Lifestyle Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">Crypto & Lifestyle Hubs</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-12 text-center leading-relaxed">
            Explore Portugal&apos;s most vibrant locations where crypto innovation meets Mediterranean lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Lisbon</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Crypto Capital</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">The heart of Portugal&apos;s crypto scene, where historic charm meets cutting-edge innovation. Home to major crypto events and a thriving digital nomad community.</p>
                <Link href="#" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    Explore Lisbon
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Cascais</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Coastal Paradise</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A sun-drenched coastal town where crypto founders find their perfect work-life balance. Known for its beaches, golf courses, and luxury living.</p>
                <Link href="#" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    Discover Cascais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Sintra</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Mystical Retreat</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A UNESCO World Heritage site where crypto entrepreneurs find inspiration in historic palaces and misty forests. Perfect for creative thinking and strategic planning.</p>
                <Link href="#" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    Visit Sintra
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Porto</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Northern Innovation</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Portugal&apos;s second city, combining traditional charm with a growing tech scene. Famous for its wine, architecture, and emerging crypto community.</p>
                <Link href="#" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    Explore Porto
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Ericeira</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Surf & Tech</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A surf paradise where crypto entrepreneurs balance work with world-class waves. Known for its laid-back lifestyle and growing digital nomad community.</p>
                <Link href="#" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    Discover Ericeira
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Algarve</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Southern Escape</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Portugal&apos;s southern coast offers year-round sunshine, golf courses, and a growing community of remote workers and crypto entrepreneurs.</p>
                <Link href="#" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    Visit Algarve
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Crypto Benefits Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 font-bold tracking-tight uppercase">Why Portugal for Crypto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Tax Benefits</h3>
              <ul className="text-white/80 font-satoshi space-y-2">
                <li>• Capital gains tax exemption on crypto held over 12 months</li>
                <li>• Zero tax on coin-to-coin swaps</li>
                <li>• Digital nomad visa options</li>
                <li>• Golden visa alternatives</li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
              <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Lifestyle Perks</h3>
              <ul className="text-white/80 font-satoshi space-y-2">
                <li>• Mediterranean climate year-round</li>
                <li>• World-class healthcare system</li>
                <li>• English widely spoken</li>
                <li>• High quality of life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Community Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">The Crypto Community</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Join a thriving network of crypto entrepreneurs, developers, and digital nomads. From weekend surf trips in Ericeira to long-form chats over petiscos in Porto, Portugal offers the perfect environment for building meaningful connections while maintaining work-life balance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
              Join the Community
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Road Trip Itinerary Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase text-3xl md:text-4xl">3-Week Luxury Road Trip</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-12 text-center leading-relaxed">
            Experience Portugal&apos;s finest luxury accommodations and breathtaking landscapes on this carefully curated journey from Porto to Lisbon and back.
          </p>

          <div className="space-y-16">
            {/* Week 1: Porto & Douro Valley */}
            <div className="bg-black/50 p-8 rounded-xl border border-yellow-500/20">
              <h3 className="text-yellow-400 font-epilogue text-2xl mb-6">Week 1: Porto & Douro Valley</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 1-3: Porto</h4>
                  <p className="text-white/80 font-satoshi mb-4">Begin your journey in Porto, Portugal&apos;s charismatic northern capital where historic charm meets contemporary luxury. The city&apos;s UNESCO-listed Ribeira district, with its colorful facades and medieval streets, sets the stage for an unforgettable stay. Choose from an array of exceptional accommodations:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue text-lg mb-2">Riverside Luxury</h5>
                      <div className="space-y-2">
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/the-yeatman-11004" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                            The Yeatman
                          </Button>
                        </Link>
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/portobay-flores-12216" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                            PortoBay Flores
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue text-lg mb-2">Historic Palaces</h5>
                      <div className="space-y-2">
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/le-monumental-palace-10607" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                            Le Monumental Palace
                          </Button>
                        </Link>
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/ga-palace-hotel-spa-a-xixth-century-villa-14493" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                            GA Palace Hotel & Spa
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue text-lg mb-2">Boutique Retreats</h5>
                      <div className="space-y-2">
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/torel-1884-9352" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                            Torel 1884
                          </Button>
                        </Link>
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/hotel-torel-avantgarde-9354" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                            Torel Avantgarde
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue text-lg mb-2">Coastal & Countryside</h5>
                      <div className="space-y-2">
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/vila-foz-hotel-spa-9157" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full mb-2">
                            Vila Foz Hotel & Spa
                          </Button>
                        </Link>
                        <Link href="https://guide.michelin.com/fr/fr/hotels-stays/porto/quinta-de-silvalde-14071" target="_blank">
                          <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                            Quinta de Silvalde
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 font-satoshi mb-4">During your stay, immerse yourself in Porto&apos;s rich cultural tapestry. Visit the iconic Livraria Lello, one of the world&apos;s most beautiful bookstores, explore the historic port wine cellars in Vila Nova de Gaia, and stroll along the Douro River promenade. The city&apos;s vibrant food scene offers everything from traditional francesinhas to innovative Michelin-starred dining experiences. Don&apos;t miss the opportunity to witness the stunning sunset from the Dom Luís I Bridge, where the city&apos;s golden light creates a magical atmosphere.</p>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 4-6: Douro Valley</h4>
                  <p className="text-white/80 font-satoshi mb-4">Journey to the Six Senses Douro Valley in Lamego, where you&apos;ll experience world-class wine tasting, spa treatments, and breathtaking views of the terraced vineyards.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/lamego/six-senses-douro-valley-1901" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Six Senses Douro Valley
                    </Button>
                  </Link>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 7-8: Vidago</h4>
                  <p className="text-white/80 font-satoshi mb-4">Visit the historic Vidago Palace Hotel, a Belle Époque gem surrounded by lush gardens and offering thermal spa treatments.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/vidago/vidago-palace-7618" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Vidago Palace
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Week 2: Alentejo & Algarve */}
            <div className="bg-black/50 p-8 rounded-xl border border-yellow-500/20">
              <h3 className="text-yellow-400 font-epilogue text-2xl mb-6">Week 2: Alentejo & Algarve</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 9-10: Monforte</h4>
                  <p className="text-white/80 font-satoshi mb-4">Stay at Torre de Palma Wine Hotel, a 14th-century estate in the heart of Alentejo, offering wine experiences and authentic Portuguese cuisine.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/monforte/torre-de-palma-wine-hotel-8218" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Torre de Palma
                    </Button>
                  </Link>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 11-13: Algarve Coast</h4>
                  <p className="text-white/80 font-satoshi mb-4">Experience the Bela Vista Hotel & Spa in Portimão, followed by Vila Joya in Albufeira, both offering stunning ocean views and world-class dining.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/portimao/bela-vista-hotel-spa-6546" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                        Bela Vista Hotel
                      </Button>
                    </Link>
                    <Link href="https://guide.michelin.com/fr/fr/hotels-stays/albufeira/vila-joya-7487" target="_blank">
                      <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                        Vila Joya
                      </Button>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 14-15: Vila Vita Parc</h4>
                  <p className="text-white/80 font-satoshi mb-4">Relax at Vila Vita Parc in Alporchinhos, a luxury resort with private beaches, multiple pools, and Michelin-starred dining.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/alporchinhos/vila-vita-parc-11366" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Vila Vita Parc
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Week 3: Lisbon & Sintra */}
            <div className="bg-black/50 p-8 rounded-xl border border-yellow-500/20">
              <h3 className="text-yellow-400 font-epilogue text-2xl mb-6">Week 3: Lisbon & Sintra</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 16-17: Melides</h4>
                  <p className="text-white/80 font-satoshi mb-4">Visit Vermelho Melides, a unique retreat combining art, nature, and luxury in the peaceful Alentejo coast.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/Melides/vermelho-melides-13109" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Vermelho Melides
                    </Button>
                  </Link>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 18-19: Sintra</h4>
                  <p className="text-white/80 font-satoshi mb-4">Stay at Penha Longa Resort, a luxury retreat surrounded by the mystical Sintra mountains and offering world-class golf and spa facilities.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/sintra/penha-longa-resort-14501" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Penha Longa Resort
                    </Button>
                  </Link>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-epilogue text-xl mb-3">Days 20-21: Lisbon</h4>
                  <p className="text-white/80 font-satoshi mb-4">Conclude your journey at the Four Seasons Hotel Ritz Lisbon, enjoying the city&apos;s vibrant culture, historic sites, and world-class dining.</p>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/lisbon/four-seasons-hotel-ritz-lisbon-12766" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                      Four Seasons Ritz
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
