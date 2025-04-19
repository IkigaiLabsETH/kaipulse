import { OpenSeaAPI } from './api';
import { MockOpenSeaAPI } from './mock';

// Factory function to get the appropriate API instance
export function getOpenSeaAPI(): OpenSeaAPI | MockOpenSeaAPI {
  const apiKey = process.env.NEXT_PUBLIC_OPENSEA_API_KEY;
  
  if (!apiKey || process.env.NODE_ENV === 'development') {
    return new MockOpenSeaAPI();
  }
  
  return new OpenSeaAPI(apiKey);
} 