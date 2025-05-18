import type { NFT } from '@/types/opensea';

// Mock NFT data for testing
export const mockCollections: Record<string, NFT[]> = {
  'boredapeyachtclub': [
    {
      identifier: "1",
      token_id: "1",
      collection: "boredapeyachtclub",
      contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      contract_address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      chain: "ethereum",
      token_standard: "erc721",
      name: "Bored Ape #1",
      description: "Unique Bored Ape from the BAYC collection",
      image_url: "https://i.seadn.io/gae/nBPnFhAQEwEKxjhe_VH0MYDBFwGaVB0DP_LMUkiS6g0SFnAYcQdBtBWKKdLxqQA7GzDxs-vBlMnTZjzM7hXmJ46R0fYwSbukP0Hkmw?w=500&auto=format",
      metadata_url: "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1",
      external_url: "https://boredapeyachtclub.com/",
      background_color: "",
      animation_url: null,
      traits: [
        { trait_type: "Fur", value: "Brown", trait_count: 1370 },
        { trait_type: "Eyes", value: "Sleepy", trait_count: 751 },
        { trait_type: "Mouth", value: "Bored", trait_count: 2272 },
        { trait_type: "Clothes", value: "Vietnam Jacket", trait_count: 224 },
        { trait_type: "Background", value: "Orange", trait_count: 1274 }
      ]
    },
    {
      identifier: "2",
      token_id: "2",
      collection: "boredapeyachtclub",
      contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      contract_address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      chain: "ethereum",
      token_standard: "erc721",
      name: "Bored Ape #2",
      description: "Another unique Bored Ape from the BAYC collection",
      image_url: "https://i.seadn.io/gae/1A1Q6VbdBPkEWuGXAQvUpMGsC8MhI-VxwqJvq9Lm2I4Qwxf4K9QpJztPz3WlQ7MU1z4-r6-aD5n916ap2mhiVQ?w=500&auto=format",
      metadata_url: "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/2",
      external_url: "https://boredapeyachtclub.com/",
      background_color: "",
      animation_url: null,
      traits: [
        { trait_type: "Fur", value: "Golden Brown", trait_count: 420 },
        { trait_type: "Eyes", value: "Coins", trait_count: 95 },
        { trait_type: "Mouth", value: "Grin", trait_count: 1280 },
        { trait_type: "Clothes", value: "Tuxedo Tee", trait_count: 342 },
        { trait_type: "Background", value: "Blue", trait_count: 1560 }
      ]
    }
  ],
  'cryptopunks': [
    {
      identifier: "1",
      token_id: "1",
      collection: "cryptopunks",
      contract: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      contract_address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      chain: "ethereum",
      token_standard: "erc721",
      name: "CryptoPunk #1",
      description: "One of the original CryptoPunks",
      image_url: "https://www.larvalabs.com/cryptopunks/cryptopunk1.png",
      metadata_url: "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1",
      external_url: "https://www.larvalabs.com/cryptopunks",
      background_color: "",
      animation_url: null,
      traits: [
        { trait_type: "Type", value: "Male", trait_count: 6039 },
        { trait_type: "Accessory", value: "Smile", trait_count: 238 },
        { trait_type: "Accessory", value: "Goat", trait_count: 295 }
      ]
    }
  ]
}; 