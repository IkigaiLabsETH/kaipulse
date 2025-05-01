export interface FeaturedNFT {
  contract: string;
  tokenId: string;
  // Optional fields for manual override of OpenSea data
  title?: string;
  description?: string;
  priority?: number; // For controlling display order
}

export const featuredNFTs: FeaturedNFT[] = [
  {
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    tokenId: "163000312",
    title: "Meridian #312", // Optional override
    priority: 1
  },
  {
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    tokenId: "13000628"
  },
];

// Helper function to convert OpenSea URL to contract/tokenId
export function parseOpenSeaUrl(url: string): { contract: string; tokenId: string } | null {
  try {
    // Handle different OpenSea URL formats
    const regex = /(?:opensea\.io\/assets\/(?:ethereum\/)?|opensea\.io\/assets\/ethereum\/)?(0x[a-fA-F0-9]{40})\/(\d+)/;
    const match = url.match(regex);
    
    if (!match) return null;
    
    return {
      contract: match[1].toLowerCase(),
      tokenId: match[2]
    };
  } catch {
    return null;
  }
}

// Example usage:
// parseOpenSeaUrl("https://opensea.io/assets/ethereum/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/9999")
// parseOpenSeaUrl("https://opensea.io/assets/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/9999") 