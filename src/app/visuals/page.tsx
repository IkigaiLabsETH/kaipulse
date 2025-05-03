"use client";
import { useState, useCallback, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

const visuals = [
  "69420.png", "21Y.jpeg", "175.jpeg", "FIRE.jpeg", "projections.jpeg", "100Msats.jpeg", "inflation.jpg", "houseprice.jpg", "assets.jpg", "sats.png", "zero.jpeg", "halvings.jpeg", "realestate_.jpeg", "10.jpeg", "5.jpeg", "21.jpeg", "inflation.jpeg", "transactions.jpeg", "distribution.jpeg", "realestate.jpeg", "SBR.jpeg", "quantile_model.jpeg", "bitcoin_frame_.jpg", "bitcoin_frame_1.jpg", "bitcoin_frame_2.jpg"
];

const breakpointColumnsObj = {
  default: 4,
  1920: 4,
  1536: 3,
  1280: 2,
  1024: 2,
  768: 2,
  640: 1
};

function VisualCard({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return (
    <motion.div
      className="group relative w-full mb-6 cursor-pointer bg-black border-4 border-yellow-400 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transition-all duration-500 hover:shadow-[0_12px_40px_0_rgba(247,181,0,0.35),0_4px_16px_0_rgba(0,0,0,0.55)] hover:border-yellow-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="relative w-full bg-[#181818] rounded-xl overflow-hidden" style={{ aspectRatio: 'auto' }}>
        <SafeImage
          src={`/visuals/${src}`}
          alt={alt}
          className="object-contain w-full h-full transition-all duration-700"
          fill={false}
        />
        <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="relative p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h2 className="font-epilogue text-lg text-yellow-400 tracking-tight font-bold drop-shadow-md">
              {alt}
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ open, index, onClose, visuals }: { open: boolean; index: number; onClose: () => void; visuals: string[] }) {
  const [current, setCurrent] = useState(index);

  useEffect(() => {
    if (open) setCurrent(index);
  }, [open, index]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % visuals.length);
    if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + visuals.length) % visuals.length);
    if (e.key === "Escape") onClose();
  }, [open, visuals.length, onClose]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onClick={e => e.stopPropagation()}
        >
          <SafeImage
            src={`/visuals/${visuals[current]}`}
            alt={visuals[current].replace(/[-_.]/g, ' ').replace(/\.[a-z]+$/, '')}
            className="rounded-xl object-contain w-full h-full max-h-[80vh] bg-black"
            fill={false}
            priority={true}
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button onClick={onClose} className="bg-black/70 rounded-full p-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
              <span className="sr-only">Close</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <button onClick={() => setCurrent((c) => (c - 1 + visuals.length) % visuals.length)} className="bg-black/70 rounded-full p-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
              <span className="sr-only">Previous</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button onClick={() => setCurrent((c) => (c + 1) % visuals.length)} className="bg-black/70 rounded-full p-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
              <span className="sr-only">Next</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="mt-4 text-center text-yellow-400 font-epilogue text-lg tracking-widest">
            {visuals[current].replace(/[-_.]/g, ' ').replace(/\.[a-z]+$/, '')}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function VisualsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <div className="min-h-screen bg-black px-8 pt-24 pb-8 md:px-12 md:pt-32 md:pb-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-16 relative z-10 text-center">
          <h1 className="heading-xl text-yellow-400 font-vcr mb-4 drop-shadow-lg tracking-widest uppercase">Memes & Dreams</h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-epilogue max-w-2xl mx-auto tracking-wider">
            Dive into a curated collection of Bitcoin-inspired art, data, and memes. Click any image to view it full screen. Use your keyboard arrows to navigate!
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-[#F3CC3E]/5 to-transparent opacity-30 pointer-events-none" />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto"
            columnClassName="pl-8 first:pl-0 bg-clip-padding space-y-12 md:space-y-16"
          >
            {visuals.map((file, idx) => (
              <VisualCard
                key={file}
                src={file}
                alt={file.replace(/[-_.]/g, ' ').replace(/\.[a-z]+$/, '')}
                onClick={() => openLightbox(idx)}
              />
            ))}
          </Masonry>
        </div>
        <Lightbox open={lightboxOpen} index={lightboxIndex} onClose={closeLightbox} visuals={visuals} />
      </div>
    </div>
  );
}
