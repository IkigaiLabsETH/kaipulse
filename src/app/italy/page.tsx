"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ItalyPage() {
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
            <source src="/videos/italy-tuscany.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6 px-4 md:px-0">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide px-4 py-1.5 rounded-full">Your Dream Italian Journey</Badge>
            <h1 className="font-epilogue text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight leading-tight">
              Road Trip Through Italy
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-relaxed">
              Embark on a 16-day journey through Italy&apos;s most enchanting landscapes, from the fashion-forward streets of Milan to the sun-kissed shores of Puglia. This carefully curated road trip weaves together the finest luxury accommodations, Michelin-starred dining experiences, and cultural treasures, creating an unforgettable tapestry of Italian excellence.
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
                src="https://www.youtube.com/embed/3bPM_ezxITs"
                title="Italian Luxury Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
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
            Discover our curated selection of Italy&apos;s most exceptional hotels, each offering unique experiences and world-class hospitality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Art Hotel Villa Fiorella</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Massa Lubrense</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A modern boutique hotel in an olive grove overlooking the sea, featuring panoramic views, an infinity pool, and the Terrazza Fiorella restaurant.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/massa-lubrense/art-hotel-villa-fiorella-8477" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Portrait Milano</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Milan</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A luxury boutique hotel in the heart of Milan&apos;s fashion district, offering personalized service and elegant accommodations.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/milan/portrait-milano-12981" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Grand Hotel Victoria</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Lake Como</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A historic hotel with a modern concept spa, offering stunning views of Lake Como and exceptional dining experiences.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/menaggio/grand-hotel-victoria-concept-spa-12002" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Villa Cora</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Florence</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A magnificent 19th-century villa with stunning gardens, offering panoramic views of Florence and luxury accommodations.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/florence/villa-cora-79" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Castelfalfi</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Tuscany</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A medieval village transformed into a luxury resort, featuring a golf course, spa, and authentic Tuscan experiences.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/montaione/castelfalfi-8779" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Hotel Vilòn</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Rome</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A boutique hotel in a 16th-century palace, offering an intimate atmosphere and exceptional service in the heart of Rome.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/rome/hotel-vilon-11138" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Borgo Santandrea</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Amalfi Coast</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A luxury cliffside hotel with private beach access, offering stunning views of the Mediterranean and authentic Italian hospitality.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/amalfi/borgo-santandrea-12461" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Casa Maria Luigia</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Modena</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A country house managed by Massimo Bottura, offering a unique culinary experience and luxurious accommodations.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/Modena/casa-maria-luigia-13611" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 hover:border-yellow-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">La Minervetta</CardTitle>
                <p className="text-white/60 font-satoshi text-sm">Sorrento</p>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">A contemporary design hotel with stunning views of the Bay of Naples and Mount Vesuvius, offering a unique coastal experience.</p>
                <Link href="https://guide.michelin.com/fr/fr/hotels-stays/sorrento-2/la-minervetta-197" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                    View on Michelin Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Video Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 font-bold tracking-tight uppercase">Experience the Journey</h2>
          <div className="w-full aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              src="https://www.youtube.com/embed/G7pFfltyPQw"
              title="Italian Luxury Journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 1-2: Milan Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 1-2: Milan - The Gateway to Italian Elegance</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 leading-relaxed">
            Begin your journey in Milan, where contemporary luxury meets centuries of artistic heritage. At Portrait Milano, you&apos;ll experience the perfect blend of modern sophistication and timeless Italian hospitality. This exclusive boutique hotel, located in the heart of the Quadrilatero della Moda, offers just 73 meticulously designed suites, each featuring custom-made furniture and curated art pieces. The hotel&apos;s rooftop terrace provides panoramic views of the city&apos;s iconic Duomo, while its private spa offers bespoke treatments using exclusive Italian skincare products. As you explore the city&apos;s fashion district, you&apos;ll discover why Milan is considered the beating heart of Italian design and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/milan/portrait-milano-12981" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Portrait Milano
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 3-4: Lake Como Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 font-bold tracking-tight uppercase">Experience Lake Como</h2>
          <div className="w-full aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              src="https://www.youtube.com/embed/ISMpqKc9sJ0"
              title="Lake Como Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 3-4: Lake Como Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase text-3xl md:text-4xl">Day 3-4: Lake Como - A Symphony of Natural Beauty</h2>
          <p className="text-base md:text-lg text-white/80 font-satoshi mb-4">
            As you leave Milan&apos;s urban sophistication behind, a scenic one-hour drive (50 km) brings you to the timeless elegance of Lake Como. Here, the Grand Hotel Victoria Concept & Spa awaits, offering a perfect blend of Belle Époque charm and modern luxury. This historic property, dating back to 1834, features 84 elegantly appointed rooms and suites, many with private balconies overlooking the lake. The hotel&apos;s state-of-the-art spa spans 1,000 square meters, offering a range of treatments using local ingredients and cutting-edge technology. The lake&apos;s mirror-like waters reflect centuries of aristocratic history, while the surrounding mountains create a dramatic backdrop for your stay. Don&apos;t miss the hotel&apos;s private beach club and the Michelin-starred restaurant, where you can savor innovative interpretations of traditional Lombard cuisine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/menaggio/grand-hotel-victoria-concept-spa-12002" target="_blank" className="w-full sm:w-auto">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 w-full">
                Grand Hotel Victoria
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Florence Video Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 font-bold tracking-tight uppercase">Experience Florence</h2>
          <div className="w-full aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              src="https://www.youtube.com/embed/FHNIEajewW8"
              title="Florence Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 5-6: Florence Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 5-6: Florence - The Cradle of Renaissance</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            The journey south to Florence (3.5 hours, 300 km) takes you through the heart of Lombardy and Emilia-Romagna, where the landscape gradually transforms into the rolling hills of Tuscany. Villa Cora, your Florentine sanctuary, stands as a testament to the city&apos;s golden age, offering panoramic views of the city that gave birth to the Renaissance. This magnificent 19th-century villa, once home to Empress Eugénie de Montijo, features 44 opulent rooms and suites, each decorated with period antiques and original frescoes. The property&apos;s 11-acre park includes a heated outdoor pool, a tennis court, and a private helipad. The hotel&apos;s restaurant, Il Cora, serves refined Tuscan cuisine in a setting of unparalleled elegance, while the spa offers treatments inspired by ancient Roman bathing rituals. Here, art, architecture, and culinary excellence converge in perfect harmony.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/florence/villa-cora-79" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Villa Cora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 7-8: Tuscany Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 7-8: Tuscany - The Soul of Italian Countryside</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            A short drive through the Tuscan countryside (1 hour, 70 km) brings you to Castelfalfi, where medieval history meets contemporary luxury. This ancient village, transformed into a world-class resort, offers an authentic taste of rural Tuscany. The property features 120 rooms and suites spread across restored medieval buildings, each offering a unique blend of historic charm and modern comfort. The resort&apos;s 27-hole golf course, designed by Tom Weiskopf, is one of Italy&apos;s finest, while its spa offers treatments using local olive oil and wine. The estate&apos;s organic farm supplies the resort&apos;s restaurants with fresh produce, and guests can participate in cooking classes, wine tastings, and truffle hunting excursions. Here, you&apos;ll discover the region&apos;s rich agricultural heritage through immersive experiences that connect you with the land and its traditions.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/montaione/castelfalfi-8779" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Castelfalfi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 9-10: Rome Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 9-10: Rome - The Eternal City</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            As you journey south to Rome (2.5 hours, 250 km), the landscape gradually changes, preparing you for the grandeur of the Eternal City. Hotel Vilòn, nestled in a 16th-century palace, offers an intimate retreat in the heart of Rome&apos;s historic center. This boutique property features just 18 exquisitely designed rooms and suites, each showcasing a unique blend of contemporary art and historic architecture. The hotel&apos;s private garden, a rare luxury in central Rome, provides a peaceful oasis, while its rooftop terrace offers stunning views of the city&apos;s iconic landmarks. The property&apos;s restaurant, Sistina, serves innovative Roman cuisine in a setting of understated elegance. Here, ancient history and modern luxury coexist, creating an unforgettable experience of la dolce vita.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/rome/hotel-vilon-11138" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Hotel Vilòn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 11-12: Amalfi Coast Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 11-12: Amalfi Coast - Mediterranean Paradise</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            The journey to the Amalfi Coast (3.5 hours, 280 km) takes you through the picturesque landscapes of Campania. Borgo Santandrea and Art Hotel Villa Fiorella offer contrasting yet complementary experiences of coastal luxury. Borgo Santandrea, perched on a cliffside, features 30 rooms and suites, each with a private terrace and sea views. The hotel&apos;s private beach club, accessible by elevator, offers exclusive access to the Mediterranean&apos;s crystal-clear waters. Meanwhile, Art Hotel Villa Fiorella, set in an olive grove, provides a more intimate experience with just 20 rooms, each decorated with contemporary art and designer furniture. Both properties offer exceptional dining experiences, with restaurants showcasing the region&apos;s fresh seafood and local produce. Here, the Mediterranean&apos;s azure waters meet dramatic cliffs, creating a setting that has inspired artists and travelers for centuries.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/amalfi/borgo-santandrea-12461" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Borgo Santandrea
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/massa-lubrense/art-hotel-villa-fiorella-8477" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Art Hotel Villa Fiorella
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 13-14: Puglia Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 13-14: Puglia - The Hidden Gem of Southern Italy</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Your journey continues to Puglia (4 hours, 350 km), where the authentic soul of southern Italy reveals itself. From the iconic trulli houses of Alberobello to the baroque splendor of Lecce, this region offers a unique blend of architectural wonders and culinary traditions. Here, time seems to slow down, allowing you to savor the true essence of Italian hospitality.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
              Explore Puglia
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 15: Naples Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 15: Naples - The Gateway to Southern Flavors</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Begin your return journey with a scenic drive to Naples (3 hours, 250 km). Stay at the Grand Hotel Vesuvio, a historic 5-star property overlooking the Bay of Naples. The hotel&apos;s Caruso Roof Garden Restaurant offers panoramic views and Michelin-starred dining, featuring innovative interpretations of Neapolitan cuisine. Experience private guided tours of the historic center, exclusive pizza-making classes with master pizzaioli, and sunset aperitivi with views of Mount Vesuvius.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/naples/grand-hotel-vesuvio-123" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Grand Hotel Vesuvio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 16: Bologna Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 16: Bologna - The Culinary Capital</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Continue north to Bologna (4 hours, 350 km), the culinary capital of Italy. Check into the Grand Hotel Majestic già Baglioni, a historic 5-star hotel in the heart of the city. The hotel&apos;s I Carracci Restaurant, set in a frescoed hall, offers a Michelin-starred dining experience showcasing the best of Emilia-Romagna&apos;s culinary traditions. Explore the Quadrilatero market with local chefs, master the art of pasta-making, and discover the secrets of traditional balsamic vinegar.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/bologna/grand-hotel-majestic-gia-baglioni-123" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Grand Hotel Majestic
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 17: Modena Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 17: Modena - The Heart of Italian Gastronomy</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            A short drive brings you to Modena (40 minutes, 40 km), home to Massimo Bottura&apos;s Osteria Francescana. Stay at Casa Maria Luigia, Bottura&apos;s country house turned luxury hotel. This intimate property offers just 12 rooms, each uniquely designed, and features a private kitchen where guests can watch the culinary team prepare breakfast and aperitivo. Experience exclusive balsamic vinegar tastings, private cooking classes, and explore the Enzo Ferrari Museum.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/Modena/casa-maria-luigia-13611" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Casa Maria Luigia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Day 18: Return to Milan Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Day 18: Return to Milan - The Grand Finale</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Complete your journey with the final drive to Milan (2 hours, 180 km). Return to Portrait Milano for your farewell stay, where you can reflect on your Italian adventure over a final dinner at the hotel&apos;s restaurant. Enjoy a private shopping experience in the Quadrilatero della Moda, an exclusive tour of the Last Supper, and a farewell aperitivo at the hotel&apos;s rooftop terrace, savoring the memories of your extraordinary journey through Italy&apos;s most luxurious destinations.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/fr/fr/hotels-stays/milan/portrait-milano-12981" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Portrait Milano
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Begin Your Italian Odyssey</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-8">
            Let us craft your perfect Italian journey, where every mile tells a story and every destination reveals a new chapter in the rich narrative of Italy&apos;s cultural heritage. From the fashion-forward streets of Milan to the sun-drenched shores of Puglia, your luxury road trip awaits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 text-lg">
              Book Your Journey
            </Button>
            <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-4 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 text-lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
