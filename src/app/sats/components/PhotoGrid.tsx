'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LightningService } from "@/services/lightning";
import { toast } from "sonner";
import dynamic from 'next/dynamic';
import PhotoGridSkeleton from "./PhotoGridSkeleton";
import { photos } from "../data/photos";

// Dynamically import Framer Motion components
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

interface LightningPaymentError extends Error {
  code?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

export default function PhotoGrid() {
  const [isLightningReady, setIsLightningReady] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initLightning = async () => {
      try {
        const lightning = LightningService.getInstance();
        const ready = await lightning.init();
        setIsLightningReady(ready);
      } catch {
        toast.error('Failed to initialize Lightning wallet', {
          description: 'Please make sure you have a compatible wallet installed',
        });
      } finally {
        setIsInitializing(false);
      }
    };

    initLightning();
  }, []);

  const handleLike = async (photoId: string) => {
    setIsLoading(photoId);
    const lightning = LightningService.getInstance();

    try {
      if (!isLightningReady) {
        throw new Error('Please install a Lightning wallet to support creators');
      }

      await lightning.sendPayment(21, `Support for photo ${photoId}`);
      
      toast.success('Thank you for supporting the creator!', {
        description: '21 sats sent successfully',
      });

      // In production: Update likes count in the database
      // and refresh the UI using SWR or React Query
    } catch (error) {
      const paymentError = error as LightningPaymentError;
      toast.error('Failed to send payment', {
        description: paymentError.message || 'Please try again',
      });
    } finally {
      setIsLoading(null);
    }
  };

  if (isInitializing) {
    return <PhotoGridSkeleton />;
  }

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {photos.map((photo) => (
        <MotionDiv key={photo.id} variants={cardVariants}>
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
                  onClick={() => handleLike(photo.id)}
                  disabled={isLoading === photo.id || !isLightningReady}
                  className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-2 font-medium"
                >
                  <Heart className={`w-4 h-4 ${isLoading === photo.id ? 'animate-ping' : ''}`} />
                  {isLoading === photo.id ? 'Sending...' : 'Send 21 sats'}
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
          </Card>
        </MotionDiv>
      ))}
    </MotionDiv>
  );
} 