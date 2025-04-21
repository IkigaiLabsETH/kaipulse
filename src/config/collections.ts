interface FeaturedCollection {
  slug: string;
  name: string;
  description?: string;
  image_url?: string;
  banner_image_url?: string;
}

interface CuratedCollection {
  address: string;
  name: string;
  image_url: string;
  description?: string;
}

// Add new contract addresses here in this simple format
export const CONTRACT_ADDRESSES = [
  // Art & Photography
  '0x186e2eece5ddbac8f1dde73723586b2c86aa8b58', // Fidenza
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // BAYC
  '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e', // Doodles
  '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', // CryptoPunks
  '0x60e4d786628fea6478f785a6d7e704777c86a7c6', // MAYC
  '0xed5af388653567af2f388e6224dc7c4b3241c544', // Azuki
  '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b', // CLONE X
];

// Collection metadata mapped by contract address
const COLLECTION_METADATA: Record<string, Omit<CuratedCollection, 'address'>> = {
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d': {
    name: 'Bored Ape Yacht Club',
    image_url: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256',
    description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs.'
  },
  '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e': {
    name: 'Doodles',
    image_url: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256',
    description: 'A community-driven collectibles project featuring art by Burnt Toast.'
  },
  '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb': {
    name: 'CryptoPunks',
    image_url: 'https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=256',
    description: 'CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard.'
  },
  '0x60e4d786628fea6478f785a6d7e704777c86a7c6': {
    name: 'Mutant Ape Yacht Club',
    image_url: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256',
    description: 'The MAYC is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM.'
  },
  '0xed5af388653567af2f388e6224dc7c4b3241c544': {
    name: 'Azuki',
    image_url: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256',
    description: 'A brand for the metaverse. Built by the community.'
  },
  '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b': {
    name: 'CLONE X',
    image_url: 'https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&w=256',
    description: 'RTFKT X TAKASHI MURAKAMI'
  },
  '0x23581767a106ae21c074b2276d25e5c3e136a68b': {
    name: 'Moonbirds',
    image_url: 'https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4zJE7-_wvIJXskX_sPNzYhQFWqgWdqwQkX7wEyPXTz-1nNohB3M?auto=format&w=256',
    description: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.'
  },
  '0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e': {
    name: 'Art Blocks',
    image_url: 'https://i.seadn.io/gae/GwnosrkaneKGEkWySxvTSzZ5bEUjWkRuQzLSNfrpgy2-gxYjoR3m5PohLT9Fzy0p1tohajZ1g-LFfF_ZLnS1GqlPNHPUaKUbDhbf?auto=format&w=256',
    description: 'Art Blocks is a first-of-its-kind platform focused on genuinely programmable on-demand generative content that is stored immutably on the Ethereum blockchain.'
  },
  '0x6339e5e072086621540d0362c4e3cea0d643e114': {
    name: 'Chromie Squiggle',
    image_url: 'https://i.seadn.io/gae/26U5k4Pqj0xR8kE8Vpl6Oq_jGVYE89oV5SFYY_BiynXsIYyXDI9GgXKXNv1VQXmNiinPAWLAQb-gCF57W5qzCl0HQd5wH9EG2iPb?auto=format&w=256',
    description: 'A generative art project by Snowfro, founder of Art Blocks. Each squiggle is unique and created by an algorithm.'
  },
  '0x186e2eece5ddbac8f1dde73723586b2c86aa8b58': {
    name: 'Fidenza',
    image_url: 'https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256',
    description: 'A generative art collection by Tyler Hobbs, exploring flow fields and organic curves through algorithmic art.'
  }
};

// Generate the curated collections by combining addresses with metadata
export const CURATED_COLLECTIONS: CuratedCollection[] = CONTRACT_ADDRESSES.map(address => ({
  address,
  ...COLLECTION_METADATA[address]
}));

// Useful links for finding collection information:
// - OpenSea: https://opensea.io/collection/[collection-slug]
// - Etherscan: https://etherscan.io/token/[contract-address] 