// API base URL for OpenSea requests
export const API_BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}/api/opensea`
  : 'http://localhost:3000/api/opensea';

// Helper function to make API requests
export async function fetchFromAPI<T>(path: string, params: Record<string, string>) {
  const searchParams = new URLSearchParams({ path, ...params });
  const response = await fetch(`${API_BASE_URL}?${searchParams}`);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
} 