import { Layout } from '@/components/ui';
import { motion } from 'framer-motion';

export default function NFTLoading() {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-black p-8 md:p-12"
      >
        <div className="max-w-[1920px] mx-auto">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-16">
            <div className="h-5 w-32 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
            <div className="h-5 w-32 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
          </div>
          
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* NFT image */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="aspect-square bg-gradient-to-b from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
            </div>
            
            {/* NFT details */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-8">
              {/* Title and collection */}
              <div className="space-y-4">
                <div className="h-12 w-3/4 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="h-6 w-1/3 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
              </div>
              
              {/* Description */}
              <div className="space-y-4">
                <div className="h-6 w-1/4 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="h-4 w-2/3 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
              </div>
              
              {/* Details */}
              <div className="space-y-4">
                <div className="h-6 w-1/4 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="grid grid-cols-1 gap-4">
                  <div className="h-8 w-full bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                  <div className="h-8 w-full bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                </div>
              </div>
              
              {/* Properties */}
              <div className="space-y-4">
                <div className="h-6 w-1/4 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
} 