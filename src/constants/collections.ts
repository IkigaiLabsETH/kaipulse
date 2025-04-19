interface CollectionCategory {
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
      '0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270', // Art Blocks
      '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a', // Chromie Squiggle
      '0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270', // Fidenza (Art Blocks contract)
      '0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270'  // Ringers (Art Blocks contract)
    ]
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Fine art photography and photographic collections from renowned artists.',
    contractAddresses: [
      '0x9D90669665607F08005CAe4A7098143f43b4355b', // Cognition
      '0x27A3e410c4Ec4D30bED399E428Ce1A28Af45C2E4', // DRIFT Genesis
      '0x2B9fd4363782D9460eFce1143A6957CfFF503058'  // Where My Vans Go
    ]
  },
  {
    id: 'ai-powered',
    name: 'AI-Powered Art',
    description: 'Collections leveraging artificial intelligence and machine learning.',
    contractAddresses: [
      '0x892848074ddeA461A15f337250Da3ce55580CA85', // Archetype
      '0x6d4530149e5B4483d9c26E9497783a104085cF8f', // Artificial Dreams
      '0x7fD8Ca23F0ee13C866EC8DDea73F01c2e86C5A16'  // Memory Machines
    ]
  },
  {
    id: 'others',
    name: 'Other Collections',
    description: 'Notable collections spanning various styles and mediums.',
    contractAddresses: [
      '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', // BAYC
      '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB', // CryptoPunks
      '0x23581767a106ae21c074b2276D25e5C3e136a68b'  // Moonbirds
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