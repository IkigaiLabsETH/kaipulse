// Mock collection data structure matching OpenSea's API response
interface MockCollection {
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  stats: {
    floor_price: number;
    total_volume: number;
    num_owners: number;
    total_supply: number;
  };
}

// Mock data for collections
const MOCK_COLLECTIONS: Record<string, MockCollection> = {
  // BAYC
  '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D': {
    name: 'Bored Ape Yacht Club',
    description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs.',
    image_url: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format',
    banner_image_url: 'https://i.seadn.io/gae/i5dYZRkVCUK97bfprGPGkHASMDpZ7s_j-UQn9wEF6lPdOYhY3iPGcRSOZ_HR7Z_A-2C09jWK4EzX0c6BZ_ZQf2nTgo-Vd1yFdosd?w=3840&auto=format',
    stats: {
      floor_price: 30.88,
      total_volume: 850775,
      num_owners: 5528,
      total_supply: 10000
    }
  },
  // Art Blocks
  '0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270': {
    name: 'Art Blocks',
    description: 'Art Blocks is a first-of-its-kind platform focused on genuinely programmable on-demand generative content.',
    image_url: 'https://i.seadn.io/gae/GHhptRLebBOWOy8kEaQGH6OCFmJ1Kf_JuxfqwO0PG_uHiTWSXFSYfojhKRFE_UBqOIqHazZ1u2tG4eMXdvyFE9rZQV6JlDHAYmS5?w=500&auto=format',
    banner_image_url: 'https://i.seadn.io/gae/4elUtz8UyFYDH34vDxd4BSMbausJ9SW9P2ylh8FJdnZZcww6oGuU8m2fPQQSTQhES2porLaZKjcaC9_fLXzZhJ1hKXnec-Kn-YVJGA?w=3840&auto=format',
    stats: {
      floor_price: 0.25,
      total_volume: 124890,
      num_owners: 12500,
      total_supply: 0
    }
  }
};

// Add more mock collections as needed...

export class MockOpenSeaAPI {
  async getCollection(contractAddress: string): Promise<MockCollection> {
    const collection = MOCK_COLLECTIONS[contractAddress];
    if (!collection) {
      throw new Error(`Collection not found: ${contractAddress}`);
    }
    return collection;
  }

  async getCollectionStats(contractAddress: string) {
    const collection = MOCK_COLLECTIONS[contractAddress];
    if (!collection) {
      throw new Error(`Collection not found: ${contractAddress}`);
    }
    return collection.stats;
  }

  async getCollectionEvents(contractAddress: string, options = { limit: 20 }) {
    // Return mock events
    return {
      results: Array(options.limit).fill(null).map(() => ({
        type: ['sale', 'listing', 'offer'][Math.floor(Math.random() * 3)],
        price: {
          current: {
            value: Math.random() * 100
          }
        },
        from_address: '0x' + Math.random().toString(16).slice(2, 42),
        to_address: '0x' + Math.random().toString(16).slice(2, 42),
        created_date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
      }))
    };
  }

  async getCollectionNFTs(contractAddress: string, options = { limit: 20 }) {
    // Return mock NFTs
    return {
      results: Array(options.limit).fill(null).map((_, index) => ({
        identifier: (index + 1).toString(),
        name: `${MOCK_COLLECTIONS[contractAddress]?.name} #${index + 1}`,
        description: 'A unique NFT from the collection',
        image_url: MOCK_COLLECTIONS[contractAddress]?.image_url,
        contract: contractAddress
      }))
    };
  }
} 