export interface NFTCollection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  bannerUrl: string;
  floorPrice: number;
  totalVolume: number;
  owners: number;
}

export interface CollectionCategory {
  id: string;
  name: string;
  description: string;
  contractAddresses: string[];
}

// We only maintain the contract addresses and metadata will be fetched from OpenSea
export const FEATURED_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'gen-art',
    name: 'Generative Art',
    description: 'Algorithmic and generative art collections pushing the boundaries of creative coding.',
    contractAddresses: [
      '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // Bored Ape Yacht Club
      '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b'  // Clone X
    ]
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Fine art photography and photographic collections from renowned artists.',
    contractAddresses: [
      '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e', // Doodles
      '0x60e4d786628fea6478f785a6d7e704777c86a7c6',  // Mutant Ape Yacht Club
      '0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e',
      '0x6339e5e072086621540d0362c4e3cea0d643e114',
      '0x186e2eece5ddbac8f1dde73723586b2c86aa8b58'
    ]
  },
  {
    id: 'ai-powered',
    name: 'AI-Powered Art',
    description: 'Collections leveraging artificial intelligence and machine learning.',
    contractAddresses: [
      '0xed5af388653567af2f388e6224dc7c4b3241c544', // Azuki
      '0x23581767a106ae21c074b2276d25e5c3e136a68b'  // Moonbirds
    ]
  },
  {
    id: 'others',
    name: 'Other Collections',
    description: 'Notable collections spanning various styles and mediums.',
    contractAddresses: [
      '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', // CryptoPunks
      '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258'  // Otherdeed
    ]
  }
];

// Helper function to get all contract addresses across categories
export const getAllContractAddresses = (): string[] => {
  return FEATURED_COLLECTIONS.flatMap(category => category.contractAddresses);
};

// Helper function to get contract addresses by category
export const getContractAddressesByCategory = (categoryId: string): string[] => {
  const category = FEATURED_COLLECTIONS.find(cat => cat.id === categoryId);
  return category?.contractAddresses || [];
};

// Helper function to get category by contract address
export const getCategoryByContract = (contractAddress: string): CollectionCategory | undefined => {
  return FEATURED_COLLECTIONS.find(category =>
    category.contractAddresses.some(addr => 
      addr.toLowerCase() === contractAddress.toLowerCase()
    )
  );
};

// Helper function to get all categories
export const getAllCategories = (): CollectionCategory[] => {
  return FEATURED_COLLECTIONS;
};

// Helper function to get category by ID
export const getCategoryById = (categoryId: string): CollectionCategory | undefined => {
  return FEATURED_COLLECTIONS.find(category => category.id === categoryId);
}; 