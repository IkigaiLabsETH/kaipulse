import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import LightningPaymentWidget from "@/components/LightningPaymentWidget";
import { useState } from "react";

export default function PhotoCard({ photo, rewarded, onRewarded }: {
  photo: { id: string; url: string; title: string; photographer: string; likes: number; },
  rewarded: boolean,
  onRewarded: () => void
}) {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <Card className="group overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-yellow-500/20 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,0.3)] transition-all duration-300">
      <div className="relative aspect-[4/3]">
        <Image
          src={photo.url}
          alt={photo.title}
          fill
          className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={photo.id === "1"}
          quality={85}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <Button
            onClick={() => setShowWidget(true)}
            disabled={rewarded}
            className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-2 font-medium"
          >
            <Heart className={`w-4 h-4 ${rewarded ? '' : ''}`} />
            {rewarded ? 'Liked! ⚡' : 'Send 21 sats'}
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-epilogue text-lg font-semibold mb-1 text-yellow-500">{photo.title}</h3>
        <p className="font-satoshi text-sm text-zinc-300">
          by {photo.photographer}
        </p>
        <div className="mt-2 flex items-center gap-1 text-yellow-500">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-sm">{photo.likes}</span>
        </div>
      </div>
      {showWidget && (
        <LightningPaymentWidget
          amount={21}
          memo={`Like for photo ${photo.id} by ${photo.photographer}`}
          open={true}
          onClose={() => setShowWidget(false)}
          onPaymentSuccess={() => {
            onRewarded();
            setShowWidget(false);
          }}
        />
      )}
    </Card>
  );
} 