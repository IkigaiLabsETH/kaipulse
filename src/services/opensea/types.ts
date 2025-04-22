import type { Chain } from '../../types/web3';
export type { Chain } from '../../types/web3';
// NFTMetadata is imported but unused
// import { NFTMetadata } from '../../types/nft';

export interface OpenSeaRarityInfo {
  rank: number;
  score: number;
  strategy_version: string;
  strategy_key: string;
  calculated_at: string;
  max_rank: number;
  total_supply: number;
}

export interface OpenSeaNFT {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  animation_url: string | null;
  background_color: string | null;
  external_url: string | null;
  created_at: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  is_suspicious: boolean;
  creator: {
    username: string;
    profile_url: string;
    address: string;
  };
  owners: Array<{
    address: string;
    quantity: number;
  }>;
  traits: Array<{
    trait_type: string;
    value: string;
    display_type: string | null;
    max_value: number | null;
    trait_count: number;
    order: number | null;
  }>;
  rarity: {
    strategy_id: string | null;
    strategy_version: string | null;
    rank: number | null;
    score: number | null;
    calculated_at: string | null;
    max_rank: number | null;
    tokens_scored: number | null;
  };
  listings?: Array<{
    price: {
      current: {
        value: number;
      };
    };
  }>;
}

export interface OpenSeaCollection {
  collection: string;
  name: string;
  description: string;
  primary_contract: string;
  contract_address: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  fees: {
    seller_fees: { [address: string]: number };
    opensea_fees: { [address: string]: number };
  };
  created_date: string;
  slug: string;
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

export interface Account {
  address: string;
  config?: string;
  profile_img_url?: string;
  user?: {
    username: string;
  };
}

export interface OpenSeaEvent {
  created_date: string;
  event_type: 'offer' | 'sale' | 'transfer' | 'mint' | 'listing' | 'cancel' | 'approve';
  event_timestamp: string;
  from_account: Account;
  to_account: Account | null;
  nft: OpenSeaNFT;
  quantity: string;
  total_price: string;
  transaction?: {
    hash: string;
    timestamp: string;
  };
  protocol_data?: {
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
  };
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
  config?: string;
  profile_img_url?: string;
  user?: {
    username: string;
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

export interface CollectionOrderParams extends OrderQueryParams {
  collection_slug: string;
}

export interface CollectionListingParams extends CollectionOrderParams {
  order_by?: 'created_date' | 'eth_price';
  order_direction?: 'asc' | 'desc';
}

export interface CollectionOfferParams extends CollectionOrderParams {
  trait_type?: string;
  trait_value?: string;
}

export interface CollectionStatsTimeRange {
  volume: number;
  change: number;
  sales: number;
  average_price: number;
}

export interface OpenSeaCollectionStats {
  floor_price?: number | null;
  total_volume?: number | null;
  total_sales?: number | null;
  total_supply?: number | null;
  num_owners?: number | null;
  average_price?: number | null;
  market_cap?: number | null;
  one_day?: CollectionStatsTimeRange | null;
  seven_day?: CollectionStatsTimeRange | null;
  thirty_day?: CollectionStatsTimeRange | null;
  count?: number | null;
}

export interface OpenSeaCollectionTrait {
  trait_type: string;
  value: string | number;
  display_type?: string;
  max_value?: number;
  trait_count: number;
  order?: number;
}

export interface OpenSeaCollectionTraitStats {
  trait_type: string;
  value: string | number;
  asset_count: number;
  on_sale_count: number;
  floor_price?: number;
  highest_offer?: number;
}

// NFT Request Parameters
export interface NFTRequestParams {
  chain: Chain;
  address: string;
  identifier: string;
  include_orders?: boolean;
}

export interface NFTBatchRequestParams {
  chain: string;
  contract_address: string;
  limit?: number;
  next?: string;
}

export interface NFTBatchResponse {
  nfts: OpenSeaNFT[];
  next: string | null;
}

export interface NFTsByOwnerParams {
  chain: Chain;
  address: string;
  collection?: string;
  include_orders?: boolean;
  limit?: number;
  next?: string;
}

export interface NFTsByCollectionParams {
  collection_slug: string;
  limit?: number;
  next?: string;
  include_orders?: boolean;
  available_for_sale?: boolean;
}

// NFT Response Types
export interface NFTMetadataResponse {
  nft: OpenSeaNFT;
}

export interface NFTError {
  code: number;
  message: string;
  details?: {
    chain?: string;
    contract?: string;
    token_id?: string;
    reason?: string;
  };
}

// NFT Cache Types
export interface NFTCacheConfig {
  ttl: number; // Time to live in seconds
  maxSize: number; // Maximum number of items in cache
}

export interface NFTCacheEntry {
  data: OpenSeaNFT;
  timestamp: number;
}

// Enhanced NFT Types
export interface NFTSaleInfo {
  price: string;
  payment_token: OpenSeaPaymentToken;
  timestamp: string;
  transaction_hash: string;
  from_address: string;
  to_address: string;
}

export interface NFTOwnership {
  owner_address: string;
  quantity: number;
  acquired_at: string;
  source_transaction?: string;
}

export interface NFTRarityDetails extends OpenSeaRarityInfo {
  trait_rarity: {
    [trait: string]: {
      value: string | number;
      rarity_score: number;
      occurrence: number;
    };
  };
}

// Event Types
export type EventType = 
  | 'sale'
  | 'transfer'
  | 'mint'
  | 'offer'
  | 'listing'
  | 'cancel'
  | 'approve';

export interface EventQueryParams {
  chain?: Chain;
  event_type?: EventType;
  limit?: number;
  next?: string;
  occurred_before?: string; // ISO timestamp
  occurred_after?: string;  // ISO timestamp
}

export interface EventsByAccountParams extends EventQueryParams {
  account_address: string;
}

export interface EventsByCollectionParams extends EventQueryParams {
  collection_slug: string;
}

export interface EventsByNFTParams extends EventQueryParams {
  chain: Chain;
  contract_address: string;
  token_id: string;
}

export interface EventPaymentInfo {
  quantity: string;
  token: OpenSeaPaymentToken;
  price_usd?: string;
}

export interface EventNFTInfo {
  nft: OpenSeaNFT;
  quantity: number;
}

export interface OpenSeaEventDetails {
  event_type: EventType;
  event_timestamp: string;
  created_date: string;
  from_account: OpenSeaAccount;
  to_account?: OpenSeaAccount;
  seller?: OpenSeaAccount;
  winner?: OpenSeaAccount;
  payment?: EventPaymentInfo;
  nft?: EventNFTInfo;
  transaction?: {
    hash: string;
    timestamp: string;
    block_number: number;
    block_hash: string;
  };
}

export interface EventsResponse {
  next: string | null;
  previous: string | null;
  events: OpenSeaEventDetails[];
}

// Base types
export type OrderSide = 'ask' | 'bid';
export type OrderDirection = 'asc' | 'desc';
export type OrderSortBy = 'created_date' | 'eth_price';

// Query Parameters
export interface BaseQueryParams {
  chain?: Chain;
  limit?: number;
  next?: string;
}

export interface OrderQueryParams extends BaseQueryParams {
  order_by?: OrderSortBy;
  order_direction?: OrderDirection;
}

export interface ListingQueryParams extends OrderQueryParams {
  asset_contract_address?: string;
  maker?: string;
  taker?: string;
  token_ids?: string[];
  protocol_address?: string;
}

export interface OfferQueryParams extends OrderQueryParams {
  asset_contract_address?: string;
  maker?: string;
  taker?: string;
  token_ids?: string[];
  protocol_address?: string;
  trait_type?: string;
  trait_value?: string;
}

export interface NFTOrderParams {
  collection_slug: string;
  token_id: string;
}

// Protocol Data Types
export interface OrderProtocolData {
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
}

// Order Types
export interface OrderFees {
  account: OpenSeaAccount;
  basis_points: string;
}

export interface BaseOrder {
  protocol_address: string;
  chain: Chain;
  order_hash: string;
  created_date: string;
  closing_date: string | null;
  listing_time: number;
  expiration_time: number;
  protocol_data: OrderProtocolData;
  current_price: string;
  maker: OpenSeaAccount;
  taker: OpenSeaAccount | null;
  maker_fees: OrderFees[];
  taker_fees: OrderFees[];
  side: OrderSide;
  order_type: string;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  client_signature: string;
  relay_id: string;
  criteria_proof: string | null;
}

export interface Listing extends BaseOrder {
  nft: OpenSeaNFT;
}

export interface Offer extends BaseOrder {
  nft?: OpenSeaNFT;
  criteria?: {
    trait?: {
      type: string;
      value?: string;
    };
  };
}

// Response Types
export interface PaginatedResponse {
  next: string | null;
  previous: string | null;
}

export interface OrdersResponse<T extends BaseOrder> extends PaginatedResponse {
  orders: T[];
}

export type ListingsResponse = OrdersResponse<Listing>;
export type OffersResponse = OrdersResponse<Offer>;

export interface CollectionStats {
  total_supply: number;
  total_listings: number;
  total_volume: number;
  floor_price: number;
  num_owners: number;
  market_cap: number;
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  external_url: string;
  safelist_status: string;
  is_nsfw: boolean;
  category: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  wiki_url: string;
  stats: CollectionStats;
  contract_address: string;
}

export interface CollectionResponse {
  collection: Collection;
}

export interface RequestOptions<T> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: Record<string, string | number | boolean>;
  body?: T;
} 