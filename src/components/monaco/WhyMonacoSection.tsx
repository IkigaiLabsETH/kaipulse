"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const WhyMonacoSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Why Monaco?</h2>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Beyond Tax Benefits: A Strategic Vision</h3>
            <p className="text-gray-300">
              As we contemplate the next phase of our journey, Monaco emerges as more than just a tax-friendly jurisdiction. It represents a unique confluence of opportunities that align perfectly with our vision for both personal growth and business innovation. The Principality offers a dynamic environment where entrepreneurship, art, and technology converge to create unparalleled possibilities.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Entrepreneurial Ecosystem</h3>
            <p className="text-gray-300">
              Monaco&apos;s reputation extends far beyond its status as a wealthy enclave. The Principality has evolved into a thriving hub for entrepreneurial activity, supported by initiatives like MonacoTech&apos;s startup program. The country hosts prestigious events such as the Monaco Private Label, attracting global investors and innovators. This ecosystem, combined with political stability and strategic location, creates an ideal environment for innovative ventures like our Bitcoin treasury initiative.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Cultural Excellence & Art Scene</h3>
            <p className="text-gray-300">
              Monaco&apos;s rich cultural landscape, anchored by institutions like the Nouveau Musée National and the Oceanographic Museum, offers a sophisticated environment that blends tradition with innovation. The Principality&apos;s vibrant art scene, featuring events like Art Monte-Carlo and Monaco Art Week, creates a unique atmosphere where business and culture intersect. This cultural richness adds an invaluable dimension to our business venture, positioning us within a community that values both heritage and forward-thinking initiatives.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Innovation in Finance</h3>
            <p className="text-gray-300">
              Monaco&apos;s progressive stance on cryptocurrency and blockchain technology aligns perfectly with our vision. The Principality&apos;s recent regulatory framework (Law No. 1.528) demonstrates its commitment to embracing financial innovation while maintaining robust compliance standards. This forward-thinking approach to digital assets creates an ideal foundation for establishing a Bitcoin-focused investment vehicle.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Quality of Life & Security</h3>
            <p className="text-gray-300">
              The Principality offers an unmatched quality of life, combining world-class healthcare, education, and infrastructure with exceptional security. Monaco&apos;s Mediterranean setting, pristine environment, and vibrant social scene through establishments like the Monte-Carlo Société des Bains de Mer create an attractive environment for both business operations and personal life. This stability and high standard of living are crucial factors in attracting and retaining top talent for our venture.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Strategic Network Hub</h3>
            <p className="text-gray-300">
              Monaco&apos;s unique position as a nexus of international business, finance, and culture provides invaluable networking opportunities. The presence of sophisticated investors, forward-thinking entrepreneurs, and a community that understands both traditional finance and digital assets makes it an ideal location for our Bitcoin treasury initiative. This environment facilitates meaningful connections and partnerships that can drive our venture&apos;s success.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyMonacoSection; 