import PhotoGrid from "./components/PhotoGrid";
import HeroSection from "./components/HeroSection";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Satsnap | A like that actually means something",
  description: "Support photographers with Bitcoin Lightning micropayments. Every like sends sats directly to creators.",
};

export default function SatsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-foreground">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <HeroSection />

      {/* Features Grid */}
      <section className="relative py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Instant Value"
              description="Every like sends 21 sats instantly. Your appreciation becomes real value for creators."
              icon="⚡"
            />
            <FeatureCard
              title="Pure Photography"
              description="A curated space for exceptional images. No algorithms, no distractions."
              icon="📸"
            />
            <FeatureCard
              title="Exclusive Access"
              description="Support creators to unlock limited edition prints and behind-the-scenes content."
              icon="🎬"
            />
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-boska text-4xl md:text-5xl text-center mb-16">
            Featured <span className="text-yellow-500">Photography</span>
          </h2>
          <PhotoGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-boska text-4xl md:text-5xl mb-6">
            Support <span className="text-yellow-500">Creators</span>
          </h2>
          <p className="font-satoshi text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
            Every like makes a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-epilogue text-lg"
            >
              Start Creating
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-epilogue text-lg"
            >
              Explore Photos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 