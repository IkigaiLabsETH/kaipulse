"use client";

import { motion } from "framer-motion";

const MonacoVideoSection = () => {
  return (
    <div className="container mx-auto px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/Wg7bxdav_k4"
          title="Monaco Bitcoin Treasury"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export default MonacoVideoSection; 