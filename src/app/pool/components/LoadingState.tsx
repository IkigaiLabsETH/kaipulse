import React from 'react';

interface LoadingStateProps {
  height?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  height = "h-96",
  className = ""
}) => {
  return (
    <div className={`${height} w-full rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse ${className}`}>
      <div className="h-full w-full flex flex-col p-6 space-y-4">
        <div className="h-8 w-3/4 bg-gray-700 rounded-md"></div>
        <div className="h-4 w-1/2 bg-gray-700 rounded-md"></div>
        <div className="h-4 w-2/3 bg-gray-700 rounded-md"></div>
        <div className="h-4 w-1/3 bg-gray-700 rounded-md"></div>
      </div>
    </div>
  );
};

export default LoadingState; 