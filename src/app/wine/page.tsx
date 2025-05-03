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

      {/* Final Section: From Bordeaux to South Africa */}
      <section className="py-20 px-4 bg-[#181818]">
        <div className="mx-auto max-w-5xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 text-center font-bold tracking-tight uppercase">From Bordeaux to South Africa: A Tale of Terroir &amp; Taste</h2>
          <p className="text-lg md:text-xl text-white/90 font-satoshi mb-8 text-center max-w-3xl mx-auto">
            When people imagine visiting Bordeaux, they think vineyards—and rightly so. With roughly 9,000 vineyards, Bordeaux is more than a wine region; it&apos;s a way of life. Yet, this famed terroir holds secrets beyond its legendary Châteaux. Just two hours from Bordeaux lies Biarritz, the surfing capital of Europe, seamlessly blending vineyard vacation with coastal charm.
          </p>
          <p className="text-md md:text-lg text-white/80 font-satoshi mb-12 text-center max-w-2xl mx-auto">
            Our wine journey, inspired by over a decade of world travel and significant years spent immersed in the captivating landscapes of South Africa, aims to redefine wine tourism. South Africa, our home away from home, taught us that wine experiences should be personal, vibrant, and unforgettable. Perfectly situated between Bordeaux&apos;s rolling vineyards and Biarritz&apos;s sandy shores, we offer intimate, bespoke wine tours.
          </p>



          <div className="mt-12">
            <p className="text-lg md:text-xl text-white/90 font-satoshi text-center max-w-3xl mx-auto mb-4">
              At <span className="text-yellow-400 font-bold">LiveTheLifeTV</span>, it&apos;s not simply about tasting wine—it&apos;s about immersing yourself fully in the essence of each region, experiencing the vibrant interplay of soil, climate, and passionate winemaking.
            </p>
            <p className="text-md md:text-lg text-white/80 font-satoshi text-center max-w-2xl mx-auto">
              From Bordeaux&apos;s historic elegance to South Africa&apos;s pioneering spirit, let us guide you on a personalized journey where exceptional wine, coastal relaxation, and the joy of discovery await.<br/><br/>
              <span className="font-bold text-yellow-400">From the vineyards to the sea—Vive La Vie.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Wine Menu Section */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="mx-auto max-w-5xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 text-center font-bold tracking-tight uppercase">La Cave Du Bon Vivant</h2>
          <div className="space-y-8">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Bordeaux</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">L&apos;Esprit de Pavie</span>: Vinified in the tradition of Château Pavie; lush Merlot-led blend aged in oak for 15 months.</li>
                  <li><span className="font-bold text-yellow-400">Chapelle d&apos;Aliénor</span>: Rich terroir near Saint-Émilion, vines around 40 years old, producing wines of elegant finesse.</li>
                  <li><span className="font-bold text-yellow-400">Château Marjosse</span>: Prestigious estate managed by Pierre Lurton; Merlot, Cabernet Sauvignon, Cabernet Franc, Malbec, Sauvignon, and Sémillon.</li>
                  <li><span className="font-bold text-yellow-400">Château Ronan</span>: 100% Merlot from Pomerol&apos;s Château Clinet team; rich aromas of cherries, raspberry, spices.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Bordeaux Supérieur</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château de Reignac</span>: Lauded by Robert Parker; sophisticated Bordeaux Supérieur, rivaling classified growths.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Graves & Pessac-Léognan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Clos Floridène</span>: Aromatic, fruit-driven wines reflecting Denis Dubourdieu&apos;s expertise.</li>
                  <li><span className="font-bold text-yellow-400">Château Haura</span>: Classic blend with elegant tannins and fruity freshness.</li>
                  <li><span className="font-bold text-yellow-400">Château La Louvière</span>: Varied terroir, producing both complex reds and vibrant whites.</li>
                  <li><span className="font-bold text-yellow-400">Château Gazin Rocquencourt</span>: Innovative viticulture, elegant blends by Michel Rolland.</li>
                  <li><span className="font-bold text-yellow-400">Château Latour Martillac</span>: Grand Cru Classé; exceptional balance, white and red wines.</li>
                  <li><span className="font-bold text-yellow-400">Château Fieuzal</span>: Powerful, concentrated wines, excellent reputation.</li>
                  <li><span className="font-bold text-yellow-400">Domaine de Merlet</span>: Unique, family-driven vinification; powerful aging potential.</li>
                  <li><span className="font-bold text-yellow-400">Château Carbonnieux</span>: Distinguished whites and reds, hallmark Graves character.</li>
                  <li><span className="font-bold text-yellow-400">La Réserve de Malartic</span>: Second wine with refined fruit, smoky notes, and complexity.</li>
                  <li><span className="font-bold text-yellow-400">Château Pape Clément</span>: Bernard Magrez&apos;s prestigious estate; exemplary second and third wines.</li>
                  <li><span className="font-bold text-yellow-400">Château Olivier</span>: Historic site producing elegant, classified wines.</li>
                  <li><span className="font-bold text-yellow-400">Château Haut-Brion</span>: First Growth, legendary for both red and white wines.</li>
                  <li><span className="font-bold text-yellow-400">Château La Mission Haut-Brion</span>: Top estate, powerful and complex.</li>
                  <li><span className="font-bold text-yellow-400">Domaine de Chevalier</span>: Benchmark for both red and white.</li>
                  <li><span className="font-bold text-yellow-400">Château Smith Haut Lafitte</span>: Iconic, especially for whites.</li>
                  <li><span className="font-bold text-yellow-400">Château Haut-Bailly</span>: Elegant, age-worthy.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Haut-Médoc</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Cambon La Pelouse</span>: Situated between Giscours and Cantemerle; structured wines from gravelly terroir.</li>
                  <li><span className="font-bold text-yellow-400">Château Cantemerle</span>: Elegant, tender tannins with aromatic complexity, typical of Médoc&apos;s sandy soils.</li>
                  <li><span className="font-bold text-yellow-400">Château Chasse Spleen</span>: Deep garnet wines with wild berries, blueberries, rounded and silky tannins.</li>
                  <li><span className="font-bold text-yellow-400">Château Sociando Mallet</span>: Complex red fruit, subtle oak; known for impressive aging potential.</li>
                  <li><span className="font-bold text-yellow-400">Château La Lagune</span>: 3rd Growth, refined and floral.</li>
                  <li><span className="font-bold text-yellow-400">Château La Tour Carnet</span>: 4th Growth, historic.</li>
                  <li><span className="font-bold text-yellow-400">Château Belgrave</span>: 5th Growth, value.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Margaux</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Margaux</span>: Legendary First Growth, benchmark for elegance and finesse.</li>
                  <li><span className="font-bold text-yellow-400">Château Ferrière</span>: Small, prestigious estate; blends Cabernet Sauvignon, Merlot, and Cabernet Franc.</li>
                  <li><span className="font-bold text-yellow-400">Château Dufort-Vivens</span>: Second Cru Classé; violets, black cherry, truffle.</li>
                  <li><span className="font-bold text-yellow-400">Château Brane-Cantenac</span>: Classic Margaux complexity; aromatic finesse, sustainable viticulture.</li>
                  <li><span className="font-bold text-yellow-400">Les Hauts du Tertre</span>: Second wine blending power and finesse, cherry and plum notes.</li>
                  <li><span className="font-bold text-yellow-400">Chevalier de Lascombes</span>: Elegant, smoother sibling of Château Lascombes, charming and approachable.</li>
                  <li><span className="font-bold text-yellow-400">Confidence de Prieuré-Lichine</span>: Expertly crafted wines guided by Stéphane Derenoncourt and Michel Rolland.</li>
                  <li><span className="font-bold text-yellow-400">Château Palmer</span>: 3rd Growth, world-class.</li>
                  <li><span className="font-bold text-yellow-400">Château Giscours</span>: 3rd Growth, elegant and structured.</li>
                  <li><span className="font-bold text-yellow-400">Château Rauzan-Ségla</span>: 2nd Growth, classic.</li>
                  <li><span className="font-bold text-yellow-400">Château Lascombes</span>: 2nd Growth, modern style.</li>
                  <li><span className="font-bold text-yellow-400">Château Malescot St. Exupéry</span>: 3rd Growth, rising star.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Saint Julien</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Léoville Las Cases</span>: Top "Super Second" growth, powerful and structured.</li>
                  <li><span className="font-bold text-yellow-400">Château Talbot</span>: Harmonious bridge between Margaux finesse and Pauillac power.</li>
                  <li><span className="font-bold text-yellow-400">Château Gloria</span>: Exceptional quality-value, rivaling classified growths.</li>
                  <li><span className="font-bold text-yellow-400">Château du Glana</span>: Deeply structured wines from the esteemed Saint-Pierre and Lagrange vineyards.</li>
                  <li><span className="font-bold text-yellow-400">Les Fiefs de Lagrange</span>: Rich fruit, spice complexity; robust with exceptional aging capacity.</li>
                  <li><span className="font-bold text-yellow-400">Les Pélerins Lafon Rochet</span>: Diverse soils, precise winemaking, and environmentally conscious viticulture.</li>
                  <li><span className="font-bold text-yellow-400">Château Ducru-Beaucaillou</span>: 2nd Growth, iconic.</li>
                  <li><span className="font-bold text-yellow-400">Château Gruaud-Larose</span>: 2nd Growth, classic.</li>
                  <li><span className="font-bold text-yellow-400">Château Branaire-Ducru</span>: 4th Growth, refined.</li>
                  <li><span className="font-bold text-yellow-400">Château Beychevelle</span>: 4th Growth, popular.</li>
                  <li><span className="font-bold text-yellow-400">Château Léoville Barton</span>: 2nd Growth, traditional.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Pauillac</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Lafite Rothschild</span>: Iconic First Growth, renowned for longevity and complexity.</li>
                  <li><span className="font-bold text-yellow-400">Château Mouton Rothschild</span>: First Growth, famous for its art labels and opulent style.</li>
                  <li><span className="font-bold text-yellow-400">Château Latour</span>: First Growth, known for power and age-worthiness.</li>
                  <li><span className="font-bold text-yellow-400">Château Pichon Longueville Comtesse de Lalande</span>: "Super Second," elegant and complex Pauillac.</li>
                  <li><span className="font-bold text-yellow-400">Château Pontet-Canet</span>: Biodynamic, highly rated, expressive Pauillac.</li>
                  <li><span className="font-bold text-yellow-400">Réserve de la Comtesse</span>: Richly textured second wine; spice-enhanced elegance.</li>
                  <li><span className="font-bold text-yellow-400">Château Lynch Moussas</span>: Meticulously managed vineyards; deep, matured tannins.</li>
                  <li><span className="font-bold text-yellow-400">Château Lacoste Borie</span>: Fruity elegance, approachable style from younger vines.</li>
                  <li><span className="font-bold text-yellow-400">Château Pichon Longueville Baron</span>: 2nd Growth, opulent.</li>
                  <li><span className="font-bold text-yellow-400">Château d'Armailhac</span>: 5th Growth, elegant.</li>
                  <li><span className="font-bold text-yellow-400">Château Clerc Milon</span>: 5th Growth, vibrant.</li>
                  <li><span className="font-bold text-yellow-400">Château Duhart-Milon</span>: 4th Growth, Rothschild stable.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Saint Estèphe</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Montrose</span>: Powerful, long-lived, classic Saint Estèphe.</li>
                  <li><span className="font-bold text-yellow-400">Goulée by Cos d'Estournel</span>: Rich Médoc terroir, vinified by Cos d'Estournel team.</li>
                  <li><span className="font-bold text-yellow-400">La Dame de Montrose</span>: Luxurious second wine; velvety Merlot presence.</li>
                  <li><span className="font-bold text-yellow-400">Château Sérilhan</span>: Award-winning craftsmanship; structured and richly textured.</li>
                  <li><span className="font-bold text-yellow-400">Château Cos d'Estournel</span>: 2nd Growth, exotic.</li>
                  <li><span className="font-bold text-yellow-400">Château Calon-Ségur</span>: 3rd Growth, heart label.</li>
                  <li><span className="font-bold text-yellow-400">Château Lafon-Rochet</span>: 4th Growth, value.</li>
                  <li><span className="font-bold text-yellow-400">Château Phélan Ségur</span>: Well regarded.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Sauternes &amp; Barsac</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château d'Yquem</span>: The world's greatest sweet wine, Premier Cru Supérieur, legendary for its complexity and longevity.</li>
                  <li><span className="font-bold text-yellow-400">Château Coutet</span>: Fresh, vibrant Barsac wines; notes of citrus, honey, and vanilla.</li>
                  <li><span className="font-bold text-yellow-400">Château Rabaud Promis</span>: Premier Cru Classé, complex terroir, deep honeyed concentration.</li>
                  <li><span className="font-bold text-yellow-400">Château Rayne Vigneau</span>: Magnificent terroir, Premier Grand Cru Classé.</li>
                  <li><span className="font-bold text-yellow-400">Clos Haut Peyraguey</span>: Small, refined estate; expressive Sémillon dominance.</li>
                  <li><span className="font-bold text-yellow-400">Château Suduiraut</span>: Premier Cru, rich and honeyed.</li>
                  <li><span className="font-bold text-yellow-400">Château Climens</span>: Barsac, Sémillon specialist.</li>
                  <li><span className="font-bold text-yellow-400">Château Guiraud</span>: Premier Cru, organic pioneer.</li>
                  <li><span className="font-bold text-yellow-400">Château Doisy-Daëne</span>: Barsac, classic.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Madiran</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Montus</span>: "The Petrus of the Southwest"; powerful, elegant, deeply concentrated.</li>
                  <li><span className="font-bold text-yellow-400">Château d'Aydie</span>: Complex and powerful, superb aging potential.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Saint-Émilion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Cheval Blanc</span>: Legendary Premier Grand Cru Classé A; Merlot and Cabernet Franc blend, renowned for elegance and longevity.</li>
                  <li><span className="font-bold text-yellow-400">Château Ausone</span>: Rare Premier Grand Cru Classé A; powerful, age-worthy, and highly sought after.</li>
                  <li><span className="font-bold text-yellow-400">Château Figeac</span>: Premier Grand Cru Classé; Cabernet-driven, elegant and complex.</li>
                  <li><span className="font-bold text-yellow-400">Château Angélus</span>: Premier Grand Cru Classé A, iconic.</li>
                  <li><span className="font-bold text-yellow-400">Château Pavie</span>: Premier Grand Cru Classé A, powerful.</li>
                  <li><span className="font-bold text-yellow-400">Château Canon</span>: Premier Grand Cru Classé B, elegant.</li>
                  <li><span className="font-bold text-yellow-400">Château Troplong Mondot</span>: Premier Grand Cru Classé B, robust.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">Pomerol</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Château Ronan</span>: 100% Merlot from Pomerol&apos;s Château Clinet team; rich aromas of cherries, raspberry, spices.</li>
                  <li><span className="font-bold text-yellow-400">Château La Conseillante</span>: Iconic estate; silky, perfumed, Merlot-dominant wines.</li>
                  <li><span className="font-bold text-yellow-400">Château Clinet</span>: Plush, modern, highly rated for its depth and richness.</li>
                  <li><span className="font-bold text-yellow-400">Château Trotanoy</span>: Deep, complex, age-worthy, a true connoisseur&apos;s choice.</li>
                  <li><span className="font-bold text-yellow-400">Château La Fleur-Pétrus</span>: Elegant, highly sought after.</li>
                  <li><span className="font-bold text-yellow-400">Château L'Evangile</span>: Rothschild-owned, plush.</li>
                  <li><span className="font-bold text-yellow-400">Château Le Pin</span>: Cult wine, rare.</li>
                  <li><span className="font-bold text-yellow-400">Vieux Château Certan</span>: Classic, highly rated.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-lg text-yellow-400">South Africa Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
                  <li><span className="font-bold text-yellow-400">Cederberg</span> (Wilderness): High-altitude, cool-climate estate; Sauvignon Blanc, Shiraz.</li>
                  <li><span className="font-bold text-yellow-400">Saronsberg</span> (Tulbagh): Award-winning, bold reds; Shiraz, Rhône blends.</li>
                  <li><span className="font-bold text-yellow-400">Allesverloren</span> (Swartland): Swartland&apos;s oldest; robust Shiraz, Tinta Barocca, fortifieds.</li>
                  <li><span className="font-bold text-yellow-400">Groote Post</span> (Darling): Coastal, cool-climate; Sauvignon Blanc, Merlot.</li>
                  <li><span className="font-bold text-yellow-400">Vondeling</span> (Paardeberg): Biodiverse, panoramic; Chenin Blanc, Rhône-style blends.</li>
                  <li><span className="font-bold text-yellow-400">Diemersfontein</span> (Wellington): Famous for coffee-chocolate Pinotage; Shiraz, Chenin Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Veenwouden</span> (Paarl): Mediterranean style; Merlot, Cabernet Franc.</li>
                  <li><span className="font-bold text-yellow-400">Landskroon</span> (Paarl): Family-run, historic; elegant reds, port-style wines.</li>
                  <li><span className="font-bold text-yellow-400">Glen Carlou</span> (Paarl): Meticulous selection; Chardonnay, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Backsberg Family Reserve</span> (Paarl): Exclusive, characterful vintages; Bordeaux blends.</li>
                  <li><span className="font-bold text-yellow-400">Marianne Wines</span> (Klapmuts): Bordeaux-style blends; fruit-forward, nuanced.</li>
                  <li><span className="font-bold text-yellow-400">Babylonstoren</span> (Klapmuts): Pristine terroir; Chenin Blanc, Shiraz.</li>
                  <li><span className="font-bold text-yellow-400">Mont Destin</span> (Klapmuts): Small-batch, Rhône-inspired; Shiraz.</li>
                  <li><span className="font-bold text-yellow-400">Rupert & Rothschild</span> (Franschhoek): Prestigious collaboration; Bordeaux blends.</li>
                  <li><span className="font-bold text-yellow-400">Plaisir de Merle</span> (Franschhoek): Terroir-driven; Cabernet Sauvignon, Merlot.</li>
                  <li><span className="font-bold text-yellow-400">Anthonij Rupert</span> (Franschhoek): Innovative, terroir-specific; Syrah, Cabernet Franc.</li>
                  <li><span className="font-bold text-yellow-400">Graham Beck</span> (Franschhoek): Renowned for Cap Classique sparkling wines.</li>
                  <li><span className="font-bold text-yellow-400">La Motte</span> (Franschhoek): Excellence in winemaking; Shiraz, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Grande Provence</span> (Franschhoek): Historic, refined; Chenin Blanc, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Boschendal</span> (Franschhoek): Diverse, consistent; Chardonnay, Shiraz.</li>
                  <li><span className="font-bold text-yellow-400">Tokara</span> (Stellenbosch): Balanced, elegant; Cabernet Sauvignon, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Sadie Family Wines</span> (Swartland): Acclaimed fine wines; Columella, Palladius.</li>
                  <li><span className="font-bold text-yellow-400">Mullineux</span> (Swartland): Award-winning; Syrah, Chenin Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Klein Constantia Vin de Constance</span> (Constantia): Iconic sweet wine.</li>
                  <li><span className="font-bold text-yellow-400">Boekenhoutskloof</span> (Franschhoek): Modern classics; The Chocolate Block, Syrah.</li>
                  <li><span className="font-bold text-yellow-400">Kanonkop</span> (Stellenbosch): Premier Cru-quality; Pinotage, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Delaire Graff Estate</span> (Stellenbosch): High-altitude, elegant; Chardonnay, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Neil Ellis</span> (Stellenbosch): Terroir-driven; Cabernet Sauvignon, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Le Riche</span> (Stellenbosch): Cabernet Sauvignon specialists.</li>
                  <li><span className="font-bold text-yellow-400">Warwick</span> (Stellenbosch): Bordeaux-style blends; Warwick Trilogy.</li>
                  <li><span className="font-bold text-yellow-400">Vilafonté</span> (Stellenbosch): SA-Californian collaboration; structured blends.</li>
                  <li><span className="font-bold text-yellow-400">Ken Forrester</span> (Stellenbosch): Chenin Blanc specialists.</li>
                  <li><span className="font-bold text-yellow-400">Kleine Zalze Family Reserve</span> (Stellenbosch): Single-vineyard, top-tier; Chenin Blanc, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Dornier</span> (Stellenbosch): Tradition meets innovation; Merlot, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Rust & Vrede</span> (Stellenbosch): Renowned for Cabernet Sauvignon and Syrah.</li>
                  <li><span className="font-bold text-yellow-400">Vergelegen</span> (Somerset West): Historic estate, Bordeaux blends, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Morgenster</span> (Somerset West): Italian varietals, Bordeaux blends, olive oil.</li>
                  <li><span className="font-bold text-yellow-400">Waterkloof</span> (Somerset West): Biodynamic, elegant Syrah, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Paul Cluver</span> (Elgin): Chardonnay, Pinot Noir, Riesling specialist.</li>
                  <li><span className="font-bold text-yellow-400">Meerlust</span> (Stellenbosch): Iconic Rubicon Bordeaux blend, Pinot Noir.</li>
                  <li><span className="font-bold text-yellow-400">De Toren</span> (Stellenbosch): Modern Bordeaux-style blends, Fusion V.</li>
                  <li><span className="font-bold text-yellow-400">Amani</span> (Stellenbosch): Boutique, Merlot, Cabernet Franc.</li>
                  <li><span className="font-bold text-yellow-400">Jordan</span> (Stellenbosch): Chardonnay, Cabernet Sauvignon, Syrah.</li>
                  <li><span className="font-bold text-yellow-400">Saxenburg</span> (Stellenbosch): Shiraz, Cabernet Sauvignon, Pinotage.</li>
                  <li><span className="font-bold text-yellow-400">Ataraxia</span> (Hemel-en-Aarde): Chardonnay, Pinot Noir, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Bouchard Finlayson</span> (Hemel-en-Aarde): Pinot Noir, Chardonnay, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Hamilton Russell</span> (Hemel-en-Aarde): Benchmark Pinot Noir, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Hemel & Aarde</span> (Walker Bay): Cool-climate Pinot Noir, Chardonnay region.</li>
                  <li><span className="font-bold text-yellow-400">Raka Wine</span> (Walker Bay): Bordeaux blends, Syrah, value reds.</li>
                  <li><span className="font-bold text-yellow-400">Aaldering</span> (Stellenbosch): Pinotage, Sauvignon Blanc, luxury focus.</li>
                  <li><span className="font-bold text-yellow-400">Clos Malverne</span> (Stellenbosch): Pinotage, Merlot, Cape blends.</li>
                  <li><span className="font-bold text-yellow-400">Hartenberg</span> (Stellenbosch): Shiraz, Merlot, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Beyerskloof</span> (Stellenbosch): Pinotage specialist, Cape blends.</li>
                  <li><span className="font-bold text-yellow-400">Simonsig</span> (Stellenbosch): Cap Classique, Chenin Blanc, Pinotage.</li>
                  <li><span className="font-bold text-yellow-400">Villiera</span> (Stellenbosch): Cap Classique, Sauvignon Blanc, Chenin Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Diemersdal</span> (Durbanville): Sauvignon Blanc, Pinotage, value reds.</li>
                  <li><span className="font-bold text-yellow-400">Nitida</span> (Durbanville): Sauvignon Blanc, Merlot, boutique wines.</li>
                  <li><span className="font-bold text-yellow-400">Mulderbosch</span> (Stellenbosch): Sauvignon Blanc, Chenin Blanc, Rosé.</li>
                  <li><span className="font-bold text-yellow-400">De Grendel</span> (Durbanville): Sauvignon Blanc, Shiraz, Bordeaux blends.</li>
                  <li><span className="font-bold text-yellow-400">Eagles Nest</span> (Constantia): Shiraz, Merlot, Viognier.</li>
                  <li><span className="font-bold text-yellow-400">Groot Constantia</span> (Constantia): Historic, wide range, sweet wines.</li>
                  <li><span className="font-bold text-yellow-400">Klein Constantia</span> (Constantia): Vin de Constance, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Buitenverwachting</span> (Constantia): Sauvignon Blanc, blends.</li>
                  <li><span className="font-bold text-yellow-400">Steenberg</span> (Constantia): Sauvignon Blanc, Cap Classique, Merlot.</li>
                  <li><span className="font-bold text-yellow-400">Cape Point</span> (Noordhoek): Sauvignon Blanc, Semillon, coastal freshness.</li>
                  <li><span className="font-bold text-yellow-400">Reyneke</span> (Stellenbosch): Biodynamic, Syrah, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Rustenberg</span> (Stellenbosch): Historic, Cabernet Sauvignon, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Thelema Mountain Vineyards</span> (Stellenbosch): Cabernet Sauvignon, Shiraz.</li>
                  <li><span className="font-bold text-yellow-400">Spier</span> (Stellenbosch): Large, historic, wide range.</li>
                  <li><span className="font-bold text-yellow-400">Oldenburg Vineyards</span> (Stellenbosch): Premium, Syrah, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Uva Mira</span> (Stellenbosch): High-altitude, Chardonnay, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">Glenelly Estate</span> (Stellenbosch): Bordeaux blends, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Raats Family Wines</span> (Stellenbosch): Chenin Blanc, Cabernet Franc.</li>
                  <li><span className="font-bold text-yellow-400">Kleine Zalze</span> (Stellenbosch): Chenin Blanc, Cabernet Sauvignon.</li>
                  <li><span className="font-bold text-yellow-400">AA Badenhorst Family Wines</span> (Swartland): Iconic blends.</li>
                  <li><span className="font-bold text-yellow-400">Porseleinberg</span> (Swartland): Cult Syrah.</li>
                  <li><span className="font-bold text-yellow-400">David & Nadia</span> (Swartland): Chenin Blanc, Grenache.</li>
                  <li><span className="font-bold text-yellow-400">Leeuwenkuil</span> (Swartland): Value, Syrah.</li>
                  <li><span className="font-bold text-yellow-400">Constantia Glen</span> (Constantia): Bordeaux blends, Sauvignon Blanc.</li>
                  <li><span className="font-bold text-yellow-400">Buitenverwachting</span> (Constantia): Sauvignon Blanc, blends.</li>
                  <li><span className="font-bold text-yellow-400">Steenberg</span> (Constantia): Sauvignon Blanc, Cap Classique.</li>
                  <li><span className="font-bold text-yellow-400">Groot Constantia</span> (Constantia): Historic, wide range.</li>
                  <li><span className="font-bold text-yellow-400">Creation Wines</span> (Hemel-en-Aarde): Pinot Noir, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Newton Johnson</span> (Hemel-en-Aarde): Pinot Noir, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Storm Wines</span> (Hemel-en-Aarde): Pinot Noir specialist.</li>
                  <li><span className="font-bold text-yellow-400">Hamilton Russell</span> (Hemel-en-Aarde): Pinot Noir, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Bouchard Finlayson</span> (Hemel-en-Aarde): Pinot Noir, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">Iona</span> (Elgin): Sauvignon Blanc, Chardonnay, Pinot Noir.</li>
                  <li><span className="font-bold text-yellow-400">Paul Cluver</span> (Elgin): Chardonnay, Pinot Noir, Riesling.</li>
                  <li><span className="font-bold text-yellow-400">Springfield Estate</span> (Robertson): Sauvignon Blanc, Chardonnay.</li>
                  <li><span className="font-bold text-yellow-400">De Wetshof</span> (Robertson): Chardonnay specialist.</li>
                  <li><span className="font-bold text-yellow-400">Lismore Estate</span> (Overberg): Chardonnay, Syrah.</li>
                  <li><span className="font-bold text-yellow-400">Raka</span> (Walker Bay): Bordeaux blends, Syrah.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg text-yellow-400 font-bold font-epilogue mb-2">La Cave Du Bon Vivant invites you on a journey through terroir, taste, and tradition.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
