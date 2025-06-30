"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const CulturalFitSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Why Monaco is Our Perfect Cultural Fit</h2>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">European Heritage & Refinement</h3>
            <p className="text-gray-300">
              While Dubai offers a modern, dynamic environment, Monaco&apos;s deep European heritage and refined cultural landscape align perfectly with our vision. The Principality&apos;s blend of French sophistication and Mediterranean charm creates an environment where tradition meets innovation—a perfect backdrop for our Bitcoin treasury initiative. Unlike Dubai&apos;s rapid development, Monaco&apos;s established cultural institutions and long-standing financial traditions provide a more stable foundation for our long-term vision.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Intimate Business Environment</h3>
            <p className="text-gray-300">
              Monaco&apos;s compact size (39,000 residents) fosters a tight-knit business community where relationships matter. This intimate setting contrasts with Dubai&apos;s vast metropolis (3+ million people), allowing us to build deeper connections with key stakeholders. The Principality&apos;s concentrated network of sophisticated investors and financial professionals creates an ideal ecosystem for our Bitcoin treasury initiative, where trust and personal relationships are paramount.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Artistic & Cultural Excellence</h3>
            <p className="text-gray-300">
              Monaco&apos;s rich cultural scene, from the Nouveau Musée National to the Oceanographic Museum, reflects our commitment to excellence and innovation. The Principality&apos;s vibrant art scene and cultural events create an environment where business and creativity intersect—a perfect match for our forward-thinking approach to Bitcoin adoption. This cultural richness adds an invaluable dimension to our business venture, positioning us within a community that values both heritage and innovation.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Quality of Life & Work-Life Balance</h3>
            <p className="text-gray-300">
              Monaco&apos;s Mediterranean climate and compact layout offer an unmatched quality of life, with everything within walking distance. This contrasts with Dubai&apos;s sprawling landscape and extreme summer temperatures. The Principality&apos;s emphasis on work-life balance, combined with its world-class healthcare and education systems, creates an ideal environment for attracting and retaining top talent—crucial for our long-term success.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Strategic European Positioning</h3>
            <p className="text-gray-300">
              While Dubai offers global connectivity, Monaco&apos;s location in the heart of Europe provides strategic advantages for our Bitcoin treasury initiative. The Principality&apos;s proximity to major European financial centers and its integration with the European Union&apos;s regulatory framework creates a more natural fit for our European-focused growth strategy. This positioning allows us to serve both local and international investors while maintaining strong ties to European markets.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Long-Term Stability & Legacy</h3>
            <p className="text-gray-300">
              Monaco&apos;s centuries-old tradition of financial excellence and stability aligns with our vision of building a lasting Bitcoin treasury institution. Unlike Dubai&apos;s relatively recent emergence as a financial center, Monaco&apos;s established reputation for wealth preservation and financial innovation provides a more solid foundation for our long-term goals. The Principality&apos;s commitment to maintaining its status as a premier financial center ensures that our business will benefit from a stable, supportive environment for generations to come.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default CulturalFitSection; 