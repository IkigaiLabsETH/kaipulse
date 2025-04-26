'use client';

import { useState } from "react";
import dynamic from 'next/dynamic';
import PhotoGridSkeleton from "./PhotoGridSkeleton";
import { photos } from "../data/photos";
import PhotoCard from "./PhotoCard";

// Dynamically import Framer Motion components
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

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
  const [rewardedPhotos, setRewardedPhotos] = useState<Record<string, boolean>>({});
  const isInitializing = false;

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
          <PhotoCard
            photo={photo}
            rewarded={!!rewardedPhotos[photo.id]}
            onRewarded={() => setRewardedPhotos((prev) => ({ ...prev, [photo.id]: true }))}
          />
        </MotionDiv>
      ))}
    </MotionDiv>
  );
} 