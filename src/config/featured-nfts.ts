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
    tokenId: "13000192"
  },
  {
    contract: "0xc14a73fcc775a861e597f1df2e6b86d1c982e2cf",
    tokenId: "2"
  },
  {
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    tokenId: "173000115"
  },
  {
    contract: "0x232a68a51d6e07357ae025d2a459c16077327102",
    tokenId: "11"
  },
  {
    contract: "0x190951d425bcc7aa1ac11def0fda67662933a259",
    tokenId: "10"
  },
  {
    contract: "0x99a9b7c1116f9ceeb1652de04d5969cce509b069",
    tokenId: "455000390"
  },
  {
    contract: "0x845dd2a7ee2a92a0518ab2135365ed63fdba0c88",
    tokenId: "148"
  },
  {
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    tokenId: "23000547"
  },
  {
    contract: "0xd90829c6c6012e4dde506bd95d7499a04b9a56de",
    tokenId: "48"
  },
  {
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    tokenId: "78000029"
  },
  {
    contract: "0x7a63d17f5a59bca04b6702f461b1f1a1c59b100b",
    tokenId: "718"
  },
  {
    contract: "0xe034bb2b1b9471e11cf1a0a9199a156fb227aa5d",
    tokenId: "318"
  },
  {
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    tokenId: "3385251931645379735483189246080152619861567145433800384203060887640575311873"
  },
  {
    contract: "0xd0b67acc0e5918192b158c1647dad5782e6f4fb5",
    tokenId: "13"
  },
  {
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    tokenId: "90759427057310509927547570395708714779512351118091613108582219533160401600513"
  },
  {
    contract: "0x8a939fd297fab7388d6e6c634eee3c863626be57",
    tokenId: "17600020228"
  },
  {
    contract: "0x2e55fb6e20e29344adb531200811007092051443",
    tokenId: "10"
  },
  {
    contract: "0x16edf9d65a54e1617921a8125d77ef48c4e8c449",
    tokenId: "65"
  },
  {
    contract: "0x9d6c8e4b348999a69ee24285cd81226f4628e8f8",
    tokenId: "72683907607289245948376378937398657013536021870223758380494556672121413187180"
  },
  {
    contract: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    tokenId: "2924"
  },
  {
    contract: "0x4e1f41613c9084fdb9e34e11fae9412427480e56",
    tokenId: "8246"
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
    tokenId: "22629"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "22509"
  },
  {
    contract: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    tokenId: "24061"
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