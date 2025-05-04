export interface LivethelifeTVNFT {
  contract: string;
  tokenId: string;
  // Optional fields for manual override of OpenSea data
  title?: string;
  description?: string;
  priority?: number; // For controlling display order
}

export const livethelifetvNFTs: LivethelifeTVNFT[] = [
  {
    contract: "0x1dd24550890cEd98f4166968FCA1d5E7Bf5dEA77",
    tokenId: "1",
    priority: 1
  },
  {
    contract: "0x1dd24550890cEd98f4166968FCA1d5E7Bf5dEA77",
    tokenId: "0",
    priority: 0
  },
  {
    contract: "0x1dd24550890cEd98f4166968FCA1d5E7Bf5dEA77",
    tokenId: "2"
  },
  {
    contract: "0x1dd24550890cEd98f4166968FCA1d5E7Bf5dEA77",
    tokenId: "3"
  },
  {
    contract: "0x1dd24550890cEd98f4166968FCA1d5E7Bf5dEA77",
    tokenId: "4"
  },
  {
    contract: "0x1dd24550890cEd98f4166968FCA1d5E7Bf5dEA77",
    tokenId: "5"
  }
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
