import { OpenSeaCollection, OpenSeaNFT, OpenSeaCollectionStats, PaginatedResponse } from './types';

export const mockCollections: PaginatedResponse<OpenSeaCollection> = {
  next: null,
  previous: null,
  results: [
    {
      collection: 'doodles-official',
      name: 'Doodles',
      description: 'A community-driven collectibles project featuring art by Burnt Toast.',
      image_url: 'https://i.seadn.io/gcs/files/a11e8097b8ea51d4c296fbcd95e6b403.png',
      banner_image_url: 'https://i.seadn.io/gcs/files/cad3e8f58a0c07d6cb2a499f9c434ef0.png',
      owner: '0x8c907e67d37b17e3c544ed08ed356db53c763f86',
      safelist_status: 'verified',
      category: 'art',
      is_disabled: false,
      is_nsfw: false,
      trait_offers_enabled: true,
      collection_offers_enabled: true,
      created_date: '2021-10-17T00:00:00Z',
      payout_address: '0x8c907e67d37b17e3c544ed08ed356db53c763f86',
      fees: {
        seller_fees: {},
        opensea_fees: { '0x0000a26b00c1f0df003000390027140000faa719': 250 }
      },
      discord_url: 'https://discord.gg/doodles',
      external_url: 'https://doodles.app',
      twitter_username: 'doodles',
      instagram_username: 'doodlesnft',
      wiki_url: 'https://www.notion.so/Doodles-Wiki-fd531c55621547b6b069875268a79d7f',
      total_supply: 10000
    },
    {
      collection: 'azuki',
      name: 'Azuki',
      description: 'A brand for the metaverse. Built by the community.',
      image_url: 'https://i.seadn.io/gcs/files/9d60c6f8a5a70c05383a78c0aa571cbf.png',
      banner_image_url: 'https://i.seadn.io/gcs/files/2a843e35e3e63c04c0c8f5aa3c97f974.png',
      owner: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      safelist_status: 'verified',
      category: 'art',
      is_disabled: false,
      is_nsfw: false,
      trait_offers_enabled: true,
      collection_offers_enabled: true,
      created_date: '2022-01-12T00:00:00Z',
      payout_address: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      fees: {
        seller_fees: {},
        opensea_fees: { '0x0000a26b00c1f0df003000390027140000faa719': 250 }
      },
      discord_url: 'https://discord.gg/azuki',
      external_url: 'https://www.azuki.com',
      twitter_username: 'azukiofficial',
      instagram_username: 'azuki',
      total_supply: 10000
    }
  ]
};

export const mockCollectionStats: OpenSeaCollectionStats = {
  one_day_volume: 45.67,
  one_day_change: 0.12,
  one_day_sales: 34,
  one_day_average_price: 1.34,
  seven_day_volume: 234.56,
  seven_day_change: -0.05,
  seven_day_sales: 156,
  seven_day_average_price: 1.5,
  thirty_day_volume: 1234.56,
  thirty_day_change: 0.25,
  thirty_day_sales: 789,
  thirty_day_average_price: 1.56,
  total_volume: 12345.67,
  total_sales: 5678,
  total_supply: 10000,
  count: 10000,
  num_owners: 4567,
  floor_price: 1.23,
  market_cap: 12300
};

export const mockNFTs: PaginatedResponse<OpenSeaNFT> = {
  next: null,
  previous: null,
  results: Array.from({ length: 20 }, (_, i) => ({
    identifier: `${i + 1}`,
    collection: 'doodles-official',
    contract: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
    token_standard: 'erc721',
    name: `Doodle #${i + 1}`,
    description: 'A Doodles NFT',
    image_url: `https://i.seadn.io/gcs/files/104b5aa9bb5247b30db5a8c2a8e3c0cc.png?w=500&auto=format`,
    metadata_url: `https://api.doodles.app/metadata/${i + 1}`,
    created_at: '2021-10-17T00:00:00Z',
    updated_at: '2021-10-17T00:00:00Z',
    is_disabled: false,
    is_nsfw: false,
    animation_url: undefined,
    is_suspicious: false,
    creator: {
      user: {
        username: 'doodles'
      },
      profile_img_url: 'https://i.seadn.io/gcs/files/a11e8097b8ea51d4c296fbcd95e6b403.png',
      address: '0x8c907e67d37b17e3c544ed08ed356db53c763f86'
    },
    traits: [
      {
        trait_type: 'Background',
        value: 'Blue',
        display_type: undefined,
        max_value: undefined,
        trait_count: 1305,
        order: undefined
      },
      {
        trait_type: 'Face',
        value: 'Rainbow Puke',
        display_type: undefined,
        max_value: undefined,
        trait_count: 168,
        order: undefined
      }
    ],
    owners: [
      {
        address: '0x8c907e67d37b17e3c544ed08ed356db53c763f86',
        quantity: 1
      }
    ]
  }))
}; 