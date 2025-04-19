export interface OpenSeaCollection {
  collection: string; // slug
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: 'not_requested' | 'requested' | 'approved' | 'verified';
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  created_date: string;
  payout_address: string;
  primary_contract: string;
  fees: {
    seller_fees: Record<string, number>;
    opensea_fees: Record<string, number>;
  };
  discord_url?: string;
  external_url?: string;
  twitter_username?: string;
  instagram_username?: string;
  telegram_url?: string;
  wiki_url?: string;
  total_supply?: number;
}

export interface OpenSeaNFT {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: 'erc721' | 'erc1155';
  name: string | null;
  description: string | null;
  image_url: string | null;
  metadata_url: string | null;
  created_at: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  animation_url?: string | null;
  is_suspicious: boolean;
  creator?: {
    user?: {
      username: string;
    } | null;
    profile_img_url: string | null;
    address: string;
  } | null;
  traits?: Array<{
    trait_type: string;
    value: string;
    display_type?: string | null;
    max_value?: number | null;
    trait_count?: number | null;
    order?: number | null;
  }> | null;
  owners?: Array<{
    address: string;
    quantity: number;
  }> | null;
}

export interface OpenSeaCollectionStats {
  one_day_volume: number;
  one_day_change: number;
  one_day_sales: number;
  one_day_average_price: number;
  seven_day_volume: number;
  seven_day_change: number;
  seven_day_sales: number;
  seven_day_average_price: number;
  thirty_day_volume: number;
  thirty_day_change: number;
  thirty_day_sales: number;
  thirty_day_average_price: number;
  total_volume: number;
  total_sales: number;
  total_supply: number;
  count: number;
  num_owners: number;
  floor_price: number;
  market_cap: number;
}

export interface OpenSeaEvent {
  type: 'listing' | 'sale' | 'offer' | 'transfer' | 'mint' | 'cancel';
  from_address: string;
  to_address?: string;
  transaction?: {
    timestamp: string;
    transaction_hash: string;
    transaction_index: string;
  };
  created_date: string;
  modified_date: string;
  payment_token?: {
    symbol: string;
    address: string;
    decimals: number;
    eth_price: string;
    usd_price: string;
  };
  price?: {
    current: {
      value: number;
      decimal: number;
    };
  };
}

export interface PaginatedResponse<T> {
  next: string | null;
  previous: string | null;
  results: T[];
} 