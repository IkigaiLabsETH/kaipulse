import { NFTCollection, NFTCollectionStats, NFTMetadata } from './nft';
import { Chain } from './web3';
import type { PaginatedResponse } from './api';

export interface OpenSeaAccount {
  address: string;
  username?: string;
  profile_img_url?: string;
  banner_img_url?: string;
  created_date: string;
}

export interface OpenSeaContract {
  address: string;
  chain: Chain;
  name: string;
  symbol: string;
  type: 'non-fungible' | 'semi-fungible' | 'fungible';
  schema_name: string;
  description?: string;
  external_link?: string;
  image_url?: string;
  collection: {
    slug: string;
    name: string;
    description?: string;
    image_url?: string;
    safelist_status: string;
  };
}

export interface OpenSeaRarityInfo {
  rank: number;
  score: number;
  strategy_version: string;
  strategy_key: string;
  calculated_at: string;
  max_rank: number;
  total_supply: number;
}

export interface OpenSeaNFT extends NFTMetadata {
  identifier: string;
  token_id: string;
  contract: string;
  contract_address: string;
  chain: Chain;
  collection: string;
  collection_name?: string;
  collection_metadata?: {
    name: string;
    safelist_status: string;
  };
  name: string;
  description?: string;
  image_url: string;
  animation_url?: string | null;
  additional_images?: string[];
  traits: Array<{
    trait_type: string;
    value: string | number;
    trait_count?: number;
  }>;
  rarity?: OpenSeaRarityInfo;
  lastSale?: {
    price: string;
    payment_token: string;
  };
  owners?: string[];
  creator?: string;
  price?: {
    currentPrice?: number;
    paymentToken: OpenSeaPaymentToken;
    lastSale?: {
      price: string;
      payment_token: string;
    };
  };
  token_standard?: string;
  metadata_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface OpenSeaCollection extends NFTCollection {
  slug: string;
  payment_tokens: string[];
  primary_asset_contracts: string[];
  primary_contract: string;
  traits?: Record<string, { count: number; value: string | number }>;
  stats: OpenSeaCollectionStats;
  image_url: string;
  safelist_status: string;
  collection: string;
}

export interface OpenSeaCollectionStats extends NFTCollectionStats {
  one_day_volume: number;
  seven_day_volume: number;
  thirty_day_volume: number;
  one_day_sales: number;
  seven_day_sales: number;
  thirty_day_sales: number;
  market_cap: number;
}

export interface OpenSeaEvent {
  event_type: string;
  created_date: string;
  from_account: string;
  to_account?: string;
  quantity: number;
  total_price?: string;
  payment_token?: string;
  transaction_hash?: string;
}

export interface OpenSeaListing {
  created_date: string;
  closing_date: string;
  current_price: string;
  maker: string;
  token_id: string;
  quantity: number;
  payment_token_contract: string;
}

export interface OpenSeaOffer {
  created_date: string;
  closing_date: string | null;
  listing_time: number;
  expiration_time: number;
  order_hash: string;
  protocol_data: {
    parameters: {
      offerer: string;
      offer: Array<{
        itemType: number;
        token: string;
        identifierOrCriteria: string;
        startAmount: string;
        endAmount: string;
      }>;
      consideration: Array<{
        itemType: number;
        token: string;
        identifierOrCriteria: string;
        startAmount: string;
        endAmount: string;
        recipient: string;
      }>;
    };
    signature: string;
  };
  protocol_address: string;
  current_price: string;
  payment_token: OpenSeaPaymentToken;
}

export interface OpenSeaPaymentToken {
  address: string;
  symbol: string;
  decimals: number;
  eth_price?: string;
  usd_price?: string;
}

export interface OpenSeaMetadata {
  event_type?: string;
  timestamp?: string;
  price?: string;
  payment_token?: OpenSeaPaymentToken;
  from_address?: string;
  to_address?: string;
  transaction?: {
    hash: string;
    timestamp: string;
  };
}

export interface OpenSeaCollectionTraits {
  [key: string]: {
    values: {
      [value: string]: {
        count: number;
        percent: number;
      };
    };
    count: number;
  };
}

export type { PaginatedResponse }; 