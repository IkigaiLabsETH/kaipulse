import React from 'react';

export const PageLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
        {[...Array(7)].map((_, index) => (
          <div 
            key={index}
            className="h-[400px] w-full rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse"
          >
            <div className="h-full w-full flex flex-col p-6 space-y-4">
              <div className="h-8 w-3/4 bg-gray-700 rounded-md"></div>
              <div className="h-4 w-1/2 bg-gray-700 rounded-md"></div>
              <div className="h-4 w-2/3 bg-gray-700 rounded-md"></div>
              <div className="h-4 w-1/3 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageLoading; 