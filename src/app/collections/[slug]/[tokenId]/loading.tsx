import { Layout } from '@/components/ui';

export default function NFTLoading() {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-12">
        <div className="animate-pulse">
          {/* Navigation placeholder */}
          <div className="flex justify-between items-center mb-16">
            <div className="h-5 w-32 bg-white/10" />
            <div className="h-5 w-32 bg-white/10" />
          </div>
          
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* NFT image placeholder */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="aspect-square bg-white/5 border-[6px] border-yellow-400/20" />
            </div>
            
            {/* NFT details placeholder */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-8">
              {/* Title and collection */}
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-white/5" />
                <div className="h-4 w-1/3 bg-white/5" />
              </div>
              
              {/* Divider */}
              <div className="h-[1px] w-16 bg-white/10 my-8" />
              
              {/* Description */}
              <div className="space-y-4">
                <div className="h-4 w-1/4 bg-white/10" />
                <div className="h-4 w-full bg-white/5" />
                <div className="h-4 w-full bg-white/5" />
                <div className="h-4 w-2/3 bg-white/5" />
              </div>
              
              {/* Creator */}
              <div className="space-y-4">
                <div className="h-4 w-1/4 bg-white/10" />
                <div className="h-4 w-1/2 bg-white/5" />
              </div>
              
              {/* Details */}
              <div className="space-y-4">
                <div className="h-4 w-1/4 bg-white/10" />
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1">
                    <div className="h-3 w-16 bg-white/10" />
                    <div className="h-4 w-full bg-white/5" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 w-16 bg-white/10" />
                    <div className="h-4 w-full bg-white/5" />
                  </div>
                </div>
              </div>
              
              {/* Traits */}
              <div className="space-y-4">
                <div className="h-4 w-1/4 bg-white/10" />
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="border border-white/5 p-3 space-y-2">
                      <div className="h-3 w-16 bg-white/10" />
                      <div className="h-4 w-20 bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 