import { Chain } from './web3';

// Base types
export interface BaseAsset {
  name: string;
  description: string | null;
  image_url: string | null;
  external_url: string | null;
}

export interface OpenSeaPaymentToken {
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

// Collection types
export interface CollectionStats {
  total_supply: number;
  total_listings: number;
  total_volume: number;
  floor_price: number | null;
  market_cap: number | null;
  num_owners: number;
  one_day_volume?: number;
  seven_day_volume?: number;
  thirty_day_volume?: number;
}

export interface Collection extends BaseAsset {
  slug: string;
  banner_image_url: string | null;
  safelist_status: string | null;
  category: string | null;
  contract_address: string | null;
  is_disabled?: boolean;
  is_nsfw?: boolean;
  trait_offers_enabled?: boolean;
  collection_offers_enabled?: boolean;
  opensea_url: string | null;
  project_url: string | null;
  wiki_url: string | null;
  discord_url: string | null;
  telegram_url: string | null;
  twitter_username: string | null;
  instagram_username: string | null;
  fees?: {
    seller_fees?: Record<string, number>;
    opensea_fees?: Record<string, number>;
  } | null;
  payment_tokens?: Array<{
    symbol: string;
    address?: string;
    image_url?: string;
    name: string;
    decimals?: number;
    eth_price?: string;
    usd_price?: string;
  }> | null;
  editors?: string[] | null;
  owner?: string | null;
  created_date?: string | null;
  stats: CollectionStats;
}

// NFT types
export interface NFTTrait {
  trait_type: string;
  value: string | number;
  trait_count?: number;
}

export interface NFTRarity {
  rank: number;
  score: number;
  strategy_version: string;
  strategy_key: string;
  calculated_at: string;
  max_rank: number;
  total_supply: number;
}

export interface NFTListing {
  price: {
    current: {
      value: number;
    };
  };
}

export interface NFT extends BaseAsset {
  identifier: string;
  token_id: string;
  contract: string;
  contract_address: string;
  chain: Chain;
  collection: string;
  animation_url: string | null;
  token_standard: string;
  metadata_url: string;
  background_color: string | null;
  traits?: NFTTrait[];
  rarity?: NFTRarity;
  listings?: NFTListing[];
  blurhash?: string;
}

// API Response types
export interface PaginatedResponse<T> {
  next: string | null;
  results: T[];
}

export interface CuratedCollectionsResponse {
  collections: (Collection & { collection: string })[];
  pagination: {
    total: number;
    offset: number;
    limit: number;
  };
}

export interface CollectionResponse {
  collection: Collection;
}

export interface NFTResponse {
  nft: NFT;
}

export interface NFTsResponse {
  nfts: NFT[];
  next: string | null;
} 