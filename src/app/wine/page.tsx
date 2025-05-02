"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Grid } from '@/components/ui/grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WinePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">World-Class Wine Regions</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">South African &amp; French Wines</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              Discover the rich heritage and exceptional quality of wines from South Africa&apos;s Cape Winelands and France&apos;s prestigious wine regions. From historic estates to modern vineyards, experience world-class wines and culinary excellence.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mK7R8hNxY_0"
                title="Wine Regions of South Africa and France"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* South African Wines Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">South African Wine Estates</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Experience the finest wine estates in South Africa&apos;s Cape Winelands, where centuries-old tradition meets modern innovation. From Stellenbosch to Franschhoek, discover world-class wines and exceptional dining experiences.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://guide.michelin.com/en/hotels-stays/cape-town/the-silo-hotel-11136" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                The Silo Hotel Guide
              </Button>
            </Link>
            <Link href="https://guide.michelin.com/en/hotels-stays/Stellenbosch/delaire-graff-lodges-spa-14629" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                Delaire Graff Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Boschendal Estate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Founded in 1688, Boschendal offers award-winning wines, farm-to-table dining, and historic Cape Dutch architecture. Known for exceptional Chardonnay and Shiraz.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Delaire Graff Estate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">A modern luxury vineyard featuring world-class wines, art collection, and fine dining. Their Terraced Block Chardonnay 2022 was named &quot;Chardonnay of the Year.&quot;</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Mont Rochelle</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Sir Richard Branson&apos;s 22-room hotel and vineyard, featuring historic cellars, award-winning restaurants, and the acclaimed Little Rock wine range.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Featured South African Estate */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Featured Estate: Boschendal</h2>
          <Card className="bg-black border-yellow-500">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Heritage & History</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                    <li>Est. in 1688 by French Huguenot Jean le Long</li>
                    <li>Historic Cape Dutch manor house from 1688</li>
                    <li>De Villiers family farm until 1879</li>
                    <li>Acquired by Cecil Rhodes in 1887</li>
                    <li>Now a premier wine and culinary destination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Current Offerings</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                    <li>Award-winning wine portfolio</li>
                    <li>Farm-to-table Werf Restaurant</li>
                    <li>Casual Deli Restaurant</li>
                    <li>Daily wine tastings with local pairings</li>
                    <li>Luxury accommodation in historic cottages</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* French Wines Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">French Wine Regions</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Explore France&apos;s legendary wine regions, each with its distinct terroir and centuries of winemaking tradition. From Bordeaux&apos;s grand châteaux to Burgundy&apos;s historic climats, discover the epitome of fine wine craftsmanship.
          </p>
          <div className="space-y-8 mt-8">
            {/* Bordeaux Region Links */}
            <div>
              <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Bordeaux Estates</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://guide.michelin.com/en/hotels-stays/bommes/hotel-restaurant-lalique-chateau-lafaurie-peyraguey-9006" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                    Château Lafaurie-Peyraguey
                  </Button>
                </Link>
                <Link href="https://guide.michelin.com/en/hotels-stays/bordeaux/les-sources-de-caudalie-6023" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                    Les Sources de Caudalie
                  </Button>
                </Link>
              </div>
            </div>

            {/* Loire Valley Links */}
            <div>
              <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Loire Valley</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://guide.michelin.com/en/hotels-stays/Cheverny/les-sources-de-cheverny-12201" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                    Les Sources de Cheverny
                  </Button>
                </Link>
                <Link href="https://guide.michelin.com/en/hotels-stays/courcelles-sur-vesle/chateau-de-courcelles-9343" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                    Château de Courcelles
                  </Button>
                </Link>
              </div>
            </div>

            {/* Champagne Region Links */}
            <div>
              <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Champagne</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://guide.michelin.com/en/hotels-stays/reims/chateau-les-crayeres-7375" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                    Château Les Crayères
                  </Button>
                </Link>
                <Link href="https://guide.michelin.com/en/hotels-stays/champillon/royal-champagne-hotel-spa-6479" target="_blank">
                  <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                    Royal Champagne Hotel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Grid columns={3} className="justify-center">
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Bordeaux</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Storied elegance and power, with grand Médoc châteaux and riverfront estates. Known for opulent red blends of Merlot (62%) and Cabernet Sauvignon (25%), defined by the prestigious 1855 Grand Cru classification.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Burgundy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Contemplative and terroir-focused, with gentle Côte d&apos;Or slopes and UNESCO-listed climats. Home to world-class Pinot Noir and Chardonnay, each village and slope speaking with its own distinct accent.</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-yellow-500">
          <CardHeader>
            <CardTitle className="font-epilogue text-xl text-yellow-400">Northern Rhône</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 font-satoshi">Muscular yet soulful wines from steep granite terraces. Famous for concentrated Syrah (Hermitage, Côte-Rôtie) and floral Viognier (Condrieu), expressing the dramatic landscape in every bottle.</p>
          </CardContent>
        </Card>
      </Grid>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Featured French Region */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Featured Region: Bordeaux</h2>
          <Card className="bg-black border-yellow-500">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Signature Experiences</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                    <li>Stay at InterContinental Grand Hôtel Bordeaux</li>
                    <li>Visit Château Lynch-Bages in Pauillac</li>
                    <li>Tour legendary Château d&apos;Yquem</li>
                    <li>Explore medieval Saint-Émilion</li>
                    <li>Dine at Michelin-starred Le Pressoir d&apos;Argent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-epilogue text-xl mb-4">Wine Highlights</h3>
                  <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                    <li>Left Bank Cabernet-dominated blends</li>
                    <li>Right Bank Merlot-based wines</li>
                    <li>Sweet Sauternes from botrytized grapes</li>
                    <li>Historic 1855 Classification estates</li>
                    <li>Extensive château cellar collections</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Additional French Regions */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Southern Rhône & Provence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Sun-scorched vineyards producing rich Grenache-Syrah-Mourvèdre blends in Châteauneuf-du-Pape and Gigondas. Experience the terroir of garrigue amid olive groves and lavender fields.</p>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Stay at La Mirande in historic Avignon</li>
                  <li>Tour the legendary Châteauneuf-du-Pape</li>
                  <li>Visit the Abbey of Sénanque</li>
                  <li>Dine at 3* Oustau de Baumanière</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Champagne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi mb-4">Effervescence and elegance beneath Gothic cathedrals. Home to prestigious houses producing bright, celebratory wines from Pinot Noir, Chardonnay, and Meunier grapes.</p>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Experience Royal Champagne Hotel & Spa</li>
                  <li>Tour Moët & Chandon cellars</li>
                  <li>Visit Reims Cathedral</li>
                  <li>Dine at 3* L&apos;Assiette Champenoise</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Wine Comparison Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Regional Wine Comparison</h2>
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">South African Signatures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Pinotage (unique South African variety)</li>
                  <li>Chenin Blanc (largest plantings worldwide)</li>
                  <li>Cabernet Sauvignon (Stellenbosch specialty)</li>
                  <li>Syrah/Shiraz (cool-climate expressions)</li>
                  <li>Méthode Cap Classique sparkling wines</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">French Classics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
                  <li>Bordeaux blends (Cabernet & Merlot)</li>
                  <li>Burgundian Pinot Noir & Chardonnay</li>
                  <li>Champagne (traditional method)</li>
                  <li>Rhône Valley Syrah & blends</li>
                  <li>Loire Valley Chenin Blanc & Sauvignon</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Bordeaux Luxury Roadtrip Section */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">The Circle of Wine: A 7-Day Parker-Rated Luxury Road Trip</h2>
          <p className="text-lg md:text-xl text-white/90 font-satoshi mb-8 text-center max-w-3xl mx-auto">
            Here&apos;s your refined, richly detailed long-form editorial itinerary, structured day-by-day, showcasing an immersive Bordeaux experience tailored for luxury travelers who cherish precision, Parker points, and Michelin-starred mastery.<br/><br/>
            <span className="italic text-yellow-400">There are journeys, and then there are pilgrimages.</span><br/><br/>
            Bordeaux, that hallowed cradle of Cabernet and Merlot, isn&apos;t just a wine region—it&apos;s a living museum of flavor, tradition, and architectural beauty. But for the discerning traveler, the mission is clear: go beyond the cellar doors and into the sanctuaries of the world&apos;s most revered wines—those blessed with 95 points and above by none other than Robert Parker himself.
          </p>
          <p className="text-md md:text-lg text-white/80 font-satoshi mb-12 text-center max-w-2xl mx-auto">
            This is not a casual tasting tour. This is a weeklong odyssey, self-driven and precision-crafted for those who sip slowly, travel boldly, and believe that the only worthy route through Bordeaux is one lined with first-growth vineyards, 5-star château suites, and Michelin stars on every plate.
          </p>

          <Separator className="my-8 bg-yellow-500/40" />

          {/* Day-by-day cards */}
          <div className="space-y-10">
            {/* Day 1 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 1: Golden Beginnings in Sauternes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> Château Lafaurie-Peyraguey<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> Lalique, 1 Michelin star
                </p>
                <div className="mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/bommes/hotel-restaurant-lalique-chateau-lafaurie-peyraguey-9006" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">View on Michelin Guide</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">You land gently in the amber-hued heart of Sauternes. Begin your journey at the iconic Château d&apos;Yquem. Each tasting here feels ceremonial; bottles spanning multiple decades reveal why Parker repeatedly awarded this estate the rare perfect score. Move onward to Château Climens and Château Suduiraut, sampling complex, honeyed elixirs balanced by stunning freshness.</p>
                <p className="text-white/80 font-satoshi">Your first night is indulgently spent at Château Lafaurie-Peyraguey, a Lalique-designed 5-star gem whose glass walls shimmer like Sauternes itself. Dinner at the Michelin-starred Lalique restaurant is refined yet rich, mirroring the wines you&apos;ve encountered today: foie gras with apricot confit, scallops glazed in saffron butter, and finishes with Yquem-infused crème brûlée.</p>
              </CardContent>
            </Card>
            <Separator className="my-4 bg-yellow-500/20" />
            {/* Day 2 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 2: Bordeaux City — Elegance & Epicureanism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> InterContinental Bordeaux – Le Grand Hôtel<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> Le Pressoir d&apos;Argent, 2 Michelin stars
                </p>
                <div className="mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/bordeaux/intercontinental-bordeaux-le-grand-hotel-6030" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">View on Michelin Guide</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">Morning sunlight accompanies your leisurely drive north to Bordeaux&apos;s vibrant cityscape. Check in at the palatial InterContinental Bordeaux – Le Grand Hôtel, an 18th-century landmark facing the grand opera. Spend the afternoon exploring Bordeaux&apos;s UNESCO-listed boulevards and boutiques, stopping into the famed L&apos;Intendant wine boutique or the state-of-the-art La Cité du Vin museum.</p>
                <p className="text-white/80 font-satoshi">Evening transforms into culinary theatre at Gordon Ramsay&apos;s Le Pressoir d&apos;Argent. Order the pressed Brittany lobster, impeccably paired with vintage Graves or Médoc. Sip slowly, as each mouthful is both storytelling and sensory poetry.</p>
              </CardContent>
            </Card>
            <Separator className="my-4 bg-yellow-500/20" />
            {/* Day 3 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 3: Saint-Émilion&apos;s Limestone Symphony</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> Château Troplong Mondot<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> Les Belles Perdrix, 1 Michelin star
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/saint-emilion/chateau-du-palanquey-spa-9121" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">Chateau du Palanquey & SPA</Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/saint-emilion/hostellerie-de-plaisance-11431" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">Hostellerie de Plaisance</Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/saint-emilion/les-clefs-de-troplong-mondot-14019" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">Les Clefs de Troplong Mondot</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">Eastward now, into Saint-Émilion&apos;s dreamy medieval streets. Your visits today are legendary: Château Pavie, famous for Parker&apos;s repeated perfect 100s, offers a tasting hall overlooking undulating vineyards. At Château Angélus, the bells ring and the wines pour silkily, luxurious yet structured. Château Canon offers restrained elegance and chalky finesse—a thoughtful counterpart to Pavie&apos;s muscular style.</p>
                <p className="text-white/80 font-satoshi">Sleep atop the Saint-Émilion plateau at the stunningly renovated Château Troplong Mondot, where each suite is tastefully furnished and vineyard views stretch infinitely. Michelin-starred Les Belles Perdrix brings seasonal produce to poetic perfection—think delicate pigeon breast, truffle risotto, and blackberry sorbet.</p>
              </CardContent>
            </Card>
            <Separator className="my-4 bg-yellow-500/20" />
            {/* Day 4 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 4: Intimate Seduction in Pomerol</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> Château Troplong Mondot (2nd night)<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> Private dining or L&apos;Atelier de Candale
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/saint-emilion/chateau-hotel-grand-barrail-9626" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">Château Hôtel Grand Barrail</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">A short drive leads to Pomerol&apos;s legendary gravel and clay soils. Start at Château La Conseillante, renowned for its aromatic elegance. Continue to L&apos;Église Clinet, home to some of Pomerol&apos;s most collectible wines—tiny production, monumental taste. Vieux Château Certan completes the day with its haunting balance of power and subtlety.</p>
                <p className="text-white/80 font-satoshi">Relaxed and inspired, return to Troplong Mondot. Tonight, opt for private dining or explore the charming L&apos;Atelier de Candale, savoring local delicacies with views of vines under a slowly darkening sky.</p>
              </CardContent>
            </Card>
            <Separator className="my-4 bg-yellow-500/20" />
            {/* Day 5 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 5: Left Bank Majesty — Margaux, Pauillac & Saint-Julien</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> Château Cordeillan-Bages<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> Restaurant Cordeillan-Bages, 1 Michelin star
                </p>
                <div className="mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/pauillac/chateau-cordeillan-bages-11835" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">Château Cordeillan-Bages</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">Crossing the Gironde estuary westward, your journey reaches iconic Médoc. Begin at the classical perfection of Château Margaux, tasting wines that embody grace itself. Next, step into artful opulence at Mouton Rothschild, where wine and art intersect memorably—tastings here include vintages famously adorned by Picasso and Warhol labels. Finish the afternoon at the impressive Château Léoville Las Cases, known for deep complexity and consistent Parker accolades.</p>
                <p className="text-white/80 font-satoshi">Your stay tonight is Château Cordeillan-Bages, a boutique Relais & Châteaux treasure. Dinner at its Michelin-starred restaurant echoes Médoc&apos;s terroir: roasted duck, truffle potato purée, and delicate sauces crafted to perfection.</p>
              </CardContent>
            </Card>
            <Separator className="my-4 bg-yellow-500/20" />
            {/* Day 6 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 6: Saint-Estèphe & Graves — Depth and Refinement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> Les Sources de Caudalie<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> La Grand&apos;Vigne, 2 Michelin stars
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/saint-estephe/la-maison-destournel-9330" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">La Maison d&apos;Estournel</Button>
                  </Link>
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/bordeaux/les-sources-de-caudalie-6023" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">Les Sources de Caudalie</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">Continuing south, explore Saint-Estèphe&apos;s powerful style at Château Montrose, famed for structured, long-lived wines. Then to Cos d&apos;Estournel, exotic and lavish, where every sip feels richly spiced. Pichon Baron adds aristocratic elegance, completing your Médoc pilgrimage.</p>
                <p className="text-white/80 font-satoshi">Your afternoon leads to Graves and Pessac-Léognan. Check into the exquisite Les Sources de Caudalie, where vinotherapy spa treatments relax mind and body. Dinner at the two-starred La Grand&apos;Vigne pairs elevated local ingredients—blue lobster, tender lamb—with vintages from adjacent Château Smith Haut Lafitte, a Parker-favorite.</p>
              </CardContent>
            </Card>
            <Separator className="my-4 bg-yellow-500/20" />
            {/* Day 7 */}
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl text-yellow-400">Day 7: Sauternes — A Golden Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-satoshi mb-2">
                  <span className="font-bold text-yellow-400">Stay:</span> Château Lafaurie-Peyraguey (final night)<br/>
                  <span className="font-bold text-yellow-400">Dining:</span> Restaurant Lalique, 1 Michelin star
                </p>
                <div className="mb-2">
                  <Link href="https://guide.michelin.com/fr/fr/hotels-stays/bommes/hotel-restaurant-lalique-chateau-lafaurie-peyraguey-9006" target="_blank">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">View on Michelin Guide</Button>
                  </Link>
                </div>
                <p className="text-white/80 font-satoshi mb-2">Your final day circles back gracefully to Sauternes&apos; glowing vineyards. Revisit Château d&apos;Yquem, exploring deeper into its legendary vintages, or savor the lively brightness of Château Climens and the sensual depth of Suduiraut. A vertical tasting perhaps, to truly grasp the essence of time and terroir in liquid gold.</p>
                <p className="text-white/80 font-satoshi">As evening settles, return once more to the Lalique-designed embrace of Lafaurie-Peyraguey. Dinner, under Michelin&apos;s attentive eye, celebrates this golden terroir one last time—seared foie gras, delicate lobster bisque, and perfect wine pairings.</p>
                <p className="text-white/80 font-satoshi italic mt-4">Sip and reflect. The circle has closed, yet Bordeaux&apos;s spell remains: lasting, profound, irresistible.</p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 bg-yellow-500/40" />

          {/* Epilogue */}
          <div className="mt-12">
            <h3 className="text-yellow-400 font-epilogue text-xl mb-4 text-center uppercase tracking-widest">Epilogue: Bordeaux Beyond Points</h3>
            <p className="text-white/80 font-satoshi text-center max-w-2xl mx-auto">
              This curated route was never merely about Parker points. It was about tasting terroir, living history, and discovering Bordeaux&apos;s quiet moments of breathtaking luxury. In these seven days, you&apos;ve become part of its eternal story—each sip remembered, every sunset savored.<br/><br/>
              <span className="text-yellow-400">This is Bordeaux: timeless, transcendent, and waiting always for your return.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
