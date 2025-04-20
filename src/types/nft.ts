import { Chain } from './web3';
import { OpenSeaPaymentToken } from './opensea';

export interface NFTMetadata {
  chain: Chain;
  name: string;
  description?: string;
  image_url: string;
  animation_url?: string | null;
  additional_images?: string[];
  background_color?: string | null;
  external_url?: string | null;
  traits: Array<{
    trait_type: string;
    value: string | number;
    display_type?: string;
    max_value?: number;
    trait_count?: number;
    order?: number;
  }>;
  collection_name?: string;
  price?: {
    currentPrice?: number;
    paymentToken: OpenSeaPaymentToken;
    lastSale?: {
      price: string;
      payment_token: string;
    };
  };
}

export interface NFTAttribute {
  trait_type: string;
  value: string | number;
  display_type?: string;
}

export interface NFTCollection {
  address: string;
  name: string;
  description: string;
  image: string;
  banner_image?: string;
  external_url?: string;
  stats: NFTCollectionStats;
}

export interface NFTCollectionStats {
  total_supply: number;
  num_owners: number;
  floor_price?: number;
  total_volume?: number;
}

export interface EnhancedNFT extends NFTMetadata {
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
} 