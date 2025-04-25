import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="group overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-yellow-500/20 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,0.3)] transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-epilogue text-xl font-semibold mb-2 text-yellow-500">{title}</h3>
        <p className="font-satoshi text-zinc-300">{description}</p>
      </CardContent>
    </Card>
  );
} 