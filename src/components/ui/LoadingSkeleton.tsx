export function LoadingSkeleton() {
  return (
    <div className="space-y-16">
      {[1, 2, 3].map((categoryIndex) => (
        <div key={categoryIndex} className="space-y-8">
          <div className="space-y-4">
            {/* Category Header */}
            <div className="h-8 w-48 bg-gray-800 rounded-lg animate-pulse" />
            <div className="h-4 w-96 bg-gray-800 rounded-lg animate-pulse" />
          </div>

          {/* Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((collectionIndex) => (
              <div
                key={collectionIndex}
                className="relative bg-gray-900 rounded-xl overflow-hidden"
              >
                {/* Banner */}
                <div className="h-48 w-full bg-gray-800 animate-pulse" />

                {/* Logo */}
                <div className="absolute -bottom-8 left-4">
                  <div className="h-16 w-16 rounded-xl bg-gray-800 animate-pulse" />
                </div>

                {/* Content */}
                <div className="p-4 pt-12 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-800 rounded-lg animate-pulse" />
                  <div className="h-4 w-full bg-gray-800 rounded-lg animate-pulse" />
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[1, 2, 3].map((statIndex) => (
                      <div key={statIndex} className="space-y-2">
                        <div className="h-3 w-12 bg-gray-800 rounded animate-pulse" />
                        <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 