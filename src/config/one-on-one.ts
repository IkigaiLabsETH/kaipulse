export interface OneOnOneNFT {
  contract: string;
  tokenId: string;
  // Optional fields for manual override of OpenSea data
  title?: string;
  description?: string;
  priority?: number; // For controlling display order
}

export const oneononeNFTs: OneOnOneNFT[] = [
  {
    contract: "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0",
    tokenId: "43093",
    priority: 1
  },
  {
    contract: "0xf424af449bCF60869df3657f7F7e27cdef6AeCa4",
    tokenId: "9"
  },
  {
    contract: "0xb772099b6312A9795F6a6Cc4eD2324B7660d9Ce2",
    tokenId: "24"
  },
  {
    contract: "0x7714D54197114FE30E50a9bcCc42f3C5b7D005D5",
    tokenId: "7"
  },
  {
    contract: "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0",
    tokenId: "50911"
  },
  {
    contract: "0xC29cC6C635564BB4DEf5AE0c9239e6AA9C6232B0",
    tokenId: "1"
  },
  {
    contract: "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0",
    tokenId: "50878"
  },
  {
    contract: "0x7714D54197114FE30E50a9bcCc42f3C5b7D005D5",
    tokenId: "8"
  },
  {
    contract: "0x980BF079195588c7812db05F5499CB07C9B5943D",
    tokenId: "18"
  },
  {
    contract: "0xE45ba20ed9337a88De0eA2EA45458Be8950AE50E",
    tokenId: "3"
  },
  {
    contract: "0x19c798674414f7119ccE25426993F77692a40dF2",
    tokenId: "3"
  },
  {
    contract: "0xf273F66c492e78C1aFBF7395CE4d23a7B2325265",
    tokenId: "10"
  },
  {
    contract: "0x5aFE8341213B960a1462D98FE88b71fB5c6a9D72",
    tokenId: "5"
  },
  {
    contract: "0x089ccd4F21fD237D52d68a768E38D9a1cA69C75D",
    tokenId: "1"
  },
  {
    contract: "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0",
    tokenId: "50144"
  },
  {
    contract: "0x5aFE8341213B960a1462D98FE88b71fB5c6a9D72",
    tokenId: "1"
  },
  {
    contract: "0xa3cd5F942d3E48DaA806AcDF3718C8647Cf8d7b5",
    tokenId: "1"
  },
  {
    contract: "0x8b3f22d64012BFeeD58C9d510e65226CCb85773a",
    tokenId: "7"
  },
  {
    contract: "0x5B2bdDF95EF860C31A7bDCa620556BA427f9f431",
    tokenId: "5"
  },
  {
    contract: "0x8A1521398214a61beF23E0a2F2909a6A152f9341",
    tokenId: "86"
  },
  {
    contract: "0x0207e48A4ddf430aa0a345b9Df2A6cA83DAE1D26",
    tokenId: "14"
  },
  {
    contract: "0x2559BF029b4981c0701149Ac7fdE65170c82b449",
    tokenId: "7"
  },
  {
    contract: "0x8A1521398214a61beF23E0a2F2909a6A152f9341",
    tokenId: "21"
  },
  {
    contract: "0x9bc89Ed4241Ea05b007F6A7ef87bf0ac01c7822e",
    tokenId: "45"
  },
  {
    contract: "0x2c2754A9789a39B7595B6Fe8Db642C1F241a31f1",
    tokenId: "13"
  },
  {
    contract: "0x2559bf029b4981c0701149ac7fde65170c82b449",
    tokenId: "8"
  },
  {
    contract: "0x55957dC9df7b7e0D8976B3099C75d9B50349CCC6",
    tokenId: "23"
  },
  {
    contract: "0x55957dC9df7b7e0D8976B3099C75d9B50349CCC6",
    tokenId: "21"
  },
  {
    contract: "0xb772099b6312A9795F6a6Cc4eD2324B7660d9Ce2",
    tokenId: "22"
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

// Example usage:
// parseOpenSeaUrl("https://opensea.io/assets/ethereum/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/9999")
// parseOpenSeaUrl("https://opensea.io/assets/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/9999") 