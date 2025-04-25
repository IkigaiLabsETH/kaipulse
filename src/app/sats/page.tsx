import PhotoGrid from "./components/PhotoGrid";
import HeroSection from "./components/HeroSection";
import FeatureCard from "./components/FeatureCard";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Satsnap | A like that actually means something",
  description: "Support photographers with Bitcoin Lightning micropayments. Every like sends sats directly to creators.",
};

export default function SatsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />

      {/* Features Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Instant Rewards"
              description="Every like sends 21 sats directly to creators via Lightning Network"
              icon="⚡"
            />
            <FeatureCard
              title="Curated Content"
              description="High-quality photography only. No infinite scroll chaos."
              icon="📸"
            />
            <FeatureCard
              title="Unlock Perks"
              description="Support creators to unlock limited edition prints and special rewards"
              icon="🎁"
            />
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-boska text-4xl md:text-5xl text-center mb-16">
            Featured <span className="text-primary">Photography</span>
          </h2>
          <PhotoGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-boska text-4xl md:text-5xl mb-6">
            Ready to Support <span className="text-primary">Creators?</span>
          </h2>
          <p className="font-satoshi text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community of photographers and supporters. Every like makes a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-epilogue text-lg"
            >
              Start Creating
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-epilogue text-lg"
            >
              Explore Photos
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 