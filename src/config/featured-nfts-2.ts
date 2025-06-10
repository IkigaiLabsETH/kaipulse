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
    contract: "0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d",
    tokenId: "5876"
  },
  {
    contract: "0x4e1f41613c9084fdb9e34e11fae9412427480e56",
    tokenId: "8246"
  },
  {
    contract: "0x2559bf029b4981c0701149ac7fde65170c82b449",
    tokenId: "5"
  },
  {
    contract: "0xd33bc0af2dc4e39cbaef4beff8d1fb3c00c2e7a3",
    tokenId: "58"
  },
  {
    contract: "0x99a9b7c1116f9ceeb1652de04d5969cce509b069",
    tokenId: "407000228"
  },
  {
    contract: "0xc96b48036fe497f15976b8a7fbc7e7210d77c5b6",
    tokenId: "1"
  },
  {
    contract: "0xc04e0000726ed7c5b9f0045bc0c4806321bc6c65",
    tokenId: "169"
  },
  {
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    tokenId: "282000509"
  },
  {
    contract: "0x45aa3f3a6cf6e28fb4b762ce7cf5a62419b778c4",
    tokenId: "19"
  },
  {
    contract: "0x293ecb98c48a43b8ab8c025e38a1e7f5261fbb1b",
    tokenId: "16"
  },
  {
    contract: "0x2559bf029b4981c0701149ac7fde65170c82b449",
    tokenId: "4"
  },
  {
    contract: "0x55fda4cf1e821c6f13372d6337303a97eea829c1",
    tokenId: "1"
  },
  {
    contract: "0x830861ae472ddf7705fafef52d0e3aa2537f885a",
    tokenId: "1"
  },
  {
    contract: "0x183368d767b299681fdf660233e39f9f8cf8be3a",
    tokenId: "390"
  },
  {
    contract: "0x1067b71aac9e2f2b1a4e6ab6c1ed10510876924a",
    tokenId: "120"
  },
  {
    contract: "0x4d928ab507bf633dd8e68024a1fb4c99316bbdf3",
    tokenId: "76"
  },
  {
    contract: "0x190951d425bcc7aa1ac11def0fda67662933a259",
    tokenId: "3"
  },
  {
    contract: "0xca53bb6cdfcd5bf437bf4ac6d17c3b0e67d8a83e",
    tokenId: "44"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "24060"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "23359"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "22629"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "22878"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "22509"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "24061"
  },
  {
    contract: "0xdd012153e008346591153fff28b0dd6724f0c256",
    tokenId: "100110001"
  },
  {
    contract: "0xdd012153e008346591153fff28b0dd6724f0c256",
    tokenId: "100010037"
  },
  {
    contract: "0x76a57f53dd9108cce8cd8e73bafcb512a14de557",
    tokenId: "144"
  },
  {
    contract: "0xE9BD6Cc1f6C09F414f91573502FA96D5232b8a67",
    tokenId: "16"
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