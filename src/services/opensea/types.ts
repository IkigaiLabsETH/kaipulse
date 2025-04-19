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
  traits?: {
    [key: string]: {
      values: Record<string, number>;
      count: number;
    };
  };
  payment_tokens?: Array<{
    symbol: string;
    address: string;
    decimals: number;
    eth_price: string;
    usd_price: string;
  }>;
  editors: string[];
  stats?: {
    total_volume: number;
    total_sales: number;
    total_supply: number;
    num_owners: number;
    floor_price: number;
    market_cap: number;
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
  };
}

export interface OpenSeaTraitStats {
  trait_type: string;
  value: string | number;
  display_type?: string;
  max_value?: number;
  trait_count?: number;
  order?: number;
  count: number;
  percent: number;
}

export interface OpenSeaCollectionTraits {
  [trait_type: string]: {
    values: {
      [value: string]: {
        count: number;
        percent: number;
      };
    };
    count: number;
  };
}

export interface OpenSeaTrait {
  trait_type: string;
  value: string | number;
  display_type?: string;
  max_value?: number;
  trait_count?: number;
  order?: number;
}

export interface OpenSeaNFT {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: 'erc721' | 'erc1155' | 'erc20' | 'cryptopunks';
  name: string;
  description: string;
  image_url: string | null;
  metadata_url: string | null;
  created_date: string;
  updated_date: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  animation_url: string | null;
  is_suspicious: boolean;
  creator: {
    address: string;
    profile_url: string;
    username?: string;
  } | null;
  owners: Array<{
    address: string;
    quantity: number;
    profile_url: string;
    username?: string;
  }>;
  traits: OpenSeaTrait[];
  rarity?: {
    strategy_id: string;
    strategy_version: string;
    rank: number;
    score: number;
    calculated_at: string;
    max_rank: number;
    tokens_scored: number;
  };
  ownership?: {
    owner: {
      address: string;
      username?: string;
      profile_url: string;
    };
    quantity: number;
    on_sale: boolean;
  };
  contract_metadata?: {
    name: string;
    symbol: string;
    type: 'semi-fungible' | 'non-fungible' | 'fungible';
    total_supply?: number;
    verified?: boolean;
  };
  collection_metadata?: {
    name: string;
    slug: string;
    image_url: string | null;
    description: string | null;
    safelist_status: 'not_requested' | 'requested' | 'approved' | 'verified';
  };
  price?: {
    currentPrice?: number;
    paymentToken?: {
      symbol: string;
      address: string;
      decimals: number;
      eth_price: string;
      usd_price: string;
    };
    lastSale?: {
      price: number;
      timestamp: string;
    };
  };
}

export interface OpenSeaCollectionStats {
  total_volume: number;
  total_sales: number;
  total_supply: number;
  num_owners: number;
  floor_price: number;
  market_cap: number;
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
}

export interface OpenSeaEvent {
  type: 'listing' | 'sale' | 'offer' | 'transfer' | 'mint' | 'cancel';
  from_address: string;
  to_address?: string;
  transaction?: {
    transaction_hash: string;
    block_hash: string;
    block_number: number;
  };
  price?: {
    current: {
      value: number;
      decimals: number;
    };
  };
  payment_token?: {
    symbol: string;
    address: string;
    decimals: number;
    eth_price: string;
    usd_price: string;
  };
  created_date: string;
}

export interface PaginatedResponse<T> {
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface OpenSeaAccount {
  address: string;
  username?: string;
  config: string;
  profile_img_url?: string;
  banner_img_url?: string;
  bio?: string;
  email?: string;
  website?: string;
  social_media: {
    twitter?: string;
    instagram?: string;
    discord?: string;
  };
  metadata?: Record<string, any>;
}

export interface OpenSeaContract {
  address: string;
  chain: string;
  name: string;
  description: string;
  type: 'semi-fungible' | 'non-fungible' | 'fungible';
  schema_name: 'ERC721' | 'ERC1155' | 'ERC20' | 'CRYPTO_PUNKS';
  nft_version: string;
  symbol: string;
  owner: string;
  created_date: string;
  collection: {
    slug: string;
    name: string;
    image_url: string | null;
    description: string | null;
    safelist_status: 'not_requested' | 'requested' | 'approved' | 'verified';
  };
  total_supply?: number;
  verified?: boolean;
  opensea_version?: string;
  implementation?: string;
  payout_address?: string;
  selectable_payout_address?: boolean;
  transfer_fee?: {
    percentage: number;
    recipient: string;
  };
  token_metadata_type?: 'on_chain' | 'off_chain';
  token_metadata_update_type?: 'standard' | 'frozen';
}

export interface OpenSeaPaymentToken {
  address: string;
  chain: string;
  name: string;
  symbol: string;
  decimals: number;
  eth_price?: string;
  usd_price?: string;
  image_url?: string;
  total_supply?: string;
  is_native?: boolean;
  is_token?: boolean;
  payment_token_contract?: {
    payout_address?: string;
    selectable_payout_address?: boolean;
  };
}

export interface OpenSeaProtocolData {
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
    counter: number;
  };
  signature: string | null;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image_url: string | null;
  traits: OpenSeaTrait[];
  collection: {
    slug: string;
    name?: string;
    safelist_status?: 'not_requested' | 'requested' | 'approved' | 'verified';
  };
}

export interface OpenSeaListing {
  order_hash: string;
  chain: string;
  type: 'listing';
  protocol_address: string;
  protocol_data: OpenSeaProtocolData;
  protocol: 'seaport';
  maker: {
    address: string;
    profile_img_url?: string;
    username?: string;
  };
  taker?: {
    address: string;
    profile_img_url?: string;
    username?: string;
  };
  current_price: string;
  maker_fees: Array<{
    account: {
      address: string;
    };
    basis_points: string;
  }>;
  taker_fees: Array<{
    account: {
      address: string;
    };
    basis_points: string;
  }>;
  side: 'ask' | 'bid';
  order_type: 'basic' | 'dutch' | 'english' | 'criteria';
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  remaining_quantity: number;
  relay_id: string;
  created_date: string;
  closing_date: string | null;
  updated_date: string;
  nft: {
    identifier: string;
    contract: string;
    chain: string;
    metadata?: NFTMetadata;
  };
  payment_token: {
    address: string;
    chain: string;
    symbol: string;
    decimals: number;
    eth_price?: string;
    usd_price?: string;
  };
}

export interface OpenSeaOffer {
  order_hash: string;
  chain: string;
  type: 'offer';
  protocol_address: string;
  protocol_data: OpenSeaProtocolData;
  protocol: 'seaport';
  maker: {
    address: string;
    profile_img_url?: string;
    username?: string;
  };
  taker?: {
    address: string;
    profile_img_url?: string;
    username?: string;
  };
  current_price: string;
  maker_fees: Array<{
    account: {
      address: string;
    };
    basis_points: string;
  }>;
  taker_fees: Array<{
    account: {
      address: string;
    };
    basis_points: string;
  }>;
  side: 'bid';
  order_type: 'basic' | 'dutch' | 'english' | 'criteria';
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  remaining_quantity: number;
  relay_id: string;
  created_date: string;
  closing_date: string | null;
  updated_date: string;
  criteria?: {
    collection: {
      slug: string;
      name: string;
      contract: string;
      chain: string;
      safelist_status: 'not_requested' | 'requested' | 'approved' | 'verified';
      description?: string;
      image_url?: string;
    };
    trait?: {
      type: string;
      value: string;
      count?: number;
      percent?: number;
    };
  };
  nft?: {
    identifier: string;
    contract: string;
    chain: string;
    metadata?: NFTMetadata;
  };
  payment_token: {
    address: string;
    chain: string;
    symbol: string;
    decimals: number;
    eth_price?: string;
    usd_price?: string;
  };
} 