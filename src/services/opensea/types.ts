import { Chain } from '../../types/web3';
import { NFTMetadata } from '../../types/nft';

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
  background_color?: string | null;
  external_url?: string | null;
}

export interface OpenSeaCollection {
  collection: string;
  name: string;
  description: string;
  slug: string;
  image_url: string;
  banner_image_url?: string;
  external_url?: string;
  twitter_username?: string;
  discord_url?: string;
  instagram_username?: string;
  telegram_url?: string;
  safelist_status: string;
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  opensea_url: string;
  project_url?: string;
  wiki_url?: string;
  stats: {
    total_supply: number;
    total_listings: number;
    total_volume: number;
    floor_price: number;
    market_cap: number;
    num_owners: number;
    one_day_volume?: number;
    seven_day_volume?: number;
    thirty_day_volume?: number;
  };
  fees: {
    seller_fees: Record<string, number>;
    opensea_fees: Record<string, number>;
  };
  editors: string[];
  payment_tokens: Array<{
    symbol: string;
    address: string;
    image_url: string;
    name: string;
    decimals: number;
    eth_price: string;
    usd_price: string;
  }>;
  contracts: Array<{
    address: string;
    chain: string;
  }>;
}

export interface OpenSeaCollectionTraits {
  attributes: {
    [key: string]: {
      values: Array<{
        value: string | number;
        count: number;
      }>;
    };
  };
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
  protocol_address: string;
  chain: Chain;
  order_hash: string;
  created_date: string;
  closing_date: string | null;
  listing_time: number;
  expiration_time: number;
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
      startTime: string;
      endTime: string;
      orderType: number;
      zone: string;
      zoneHash: string;
      salt: string;
      conduitKey: string;
      totalOriginalConsiderationItems: number;
      counter: number;
    };
    signature: string;
  };
  current_price: string;
  maker: OpenSeaAccount;
  taker: OpenSeaAccount | null;
  maker_fees: Array<{
    account: OpenSeaAccount;
    basis_points: string;
  }>;
  taker_fees: Array<{
    account: OpenSeaAccount;
    basis_points: string;
  }>;
  side: string;
  order_type: string;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  client_signature: string;
  relay_id: string;
  criteria_proof: string | null;
}

export interface GetListingsParams {
  chain?: Chain;
  limit?: number;
  next?: string;
}

export interface OpenSeaContract {
  address: string;
  asset_contract_type: string;
  created_date: string;
  name: string;
  nft_version: string;
  opensea_version: string | null;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: string | null;
  description: string;
  external_link: string;
  image_url: string;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: string | null;
}

export interface OpenSeaAccount {
  address: string;
  username?: string;
  profile_img_url: string;
  banner_img_url?: string;
  bio?: string;
  created_date: string;
  social_links?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
  metadata?: {
    email?: string;
    verified: boolean;
  };
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
      startTime: string;
      endTime: string;
      orderType: number;
      zone: string;
      zoneHash: string;
      salt: string;
      conduitKey: string;
      totalOriginalConsiderationItems: number;
      counter: number;
    };
    signature: string;
  };
  protocol_address: string;
  current_price: string;
  maker: OpenSeaAccount;
  taker: OpenSeaAccount | null;
  maker_fees: Array<{
    account: OpenSeaAccount;
    basis_points: string;
  }>;
  taker_fees: Array<{
    account: OpenSeaAccount;
    basis_points: string;
  }>;
  side: string;
  order_type: string;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  client_signature: string;
  relay_id: string;
  criteria_proof: string | null;
  criteria?: {
    trait?: {
      type: string;
      value?: string;
    };
  };
}

export interface OpenSeaNFTParams {
  owner?: string;
  token_ids?: string[];
  limit?: number;
  cursor?: string;
}

export interface OpenSeaPaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

export interface OpenSeaMetadata {
  trait_type: string;
  value: string | number;
  display_type?: string;
  max_value?: number;
  trait_count?: number;
  order?: number;
}

export interface OpenSeaCollectionStats {
  floor_price?: number | null;
  total_volume?: number | null;
  total_sales?: number | null;
  total_supply?: number | null;
  num_owners?: number | null;
  average_price?: number | null;
  market_cap?: number | null;
  one_day_volume?: number | null;
  one_day_change?: number | null;
  one_day_sales?: number | null;
  one_day_average_price?: number | null;
  seven_day_volume?: number | null;
  seven_day_change?: number | null;
  seven_day_sales?: number | null;
  seven_day_average_price?: number | null;
  thirty_day_volume?: number | null;
  thirty_day_change?: number | null;
  thirty_day_sales?: number | null;
  thirty_day_average_price?: number | null;
  count?: number | null;
} 