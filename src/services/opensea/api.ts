/* eslint-disable no-console, no-restricted-globals */
import { OpenSeaCollection, OpenSeaNFT, OpenSeaCollectionStats, PaginatedResponse, OpenSeaEvent, OpenSeaAccount, OpenSeaContract, OpenSeaPaymentToken, OpenSeaCollectionTraits, OpenSeaListing, OpenSeaOffer } from './types';
import { logger } from '@/lib/logger';

const OPENSEA_API_URL = 'https://api.opensea.io/api/v2';
const DEFAULT_LIMIT = 50;

export class OpenSeaAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'OpenSeaAPIError';
  }
}

export class OpenSeaAPI {
  private apiKey: string | undefined;
  private rateLimitDelay: number = 2000; // Increased to 2 seconds between requests
  private lastRequestTime: number = 0;
  private maxRetries: number = 5;
  private retryDelay: number = 2000;
  private requestQueue: Promise<unknown> = Promise.resolve();
  private requestsInLastMinute: number = 0;
  private requestsResetTime: number = Date.now();
  private readonly MAX_REQUESTS_PER_MINUTE = 30; // OpenSea's rate limit

  constructor(apiKey: string | undefined = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_OPENSEA_API_KEY : process.env.OPENSEA_API_KEY) {
    this.apiKey = apiKey;
    
    if (!apiKey) {
      logger.warn('OpenSea API key not provided. API calls will be restricted.');
    }

    // Reset request counter every minute
    setInterval(() => {
      this.requestsInLastMinute = 0;
      this.requestsResetTime = Date.now();
    }, 60000);
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async enforceRateLimit(): Promise<void> {
    const now = Date.now();

    // Reset counter if a minute has passed
    if (now - this.requestsResetTime >= 60000) {
      this.requestsInLastMinute = 0;
      this.requestsResetTime = now;
    }

    // If we've hit the rate limit, wait until the next minute
    if (this.requestsInLastMinute >= this.MAX_REQUESTS_PER_MINUTE) {
      const timeToWait = 60000 - (now - this.requestsResetTime);
      logger.info(`Rate limit reached, waiting ${timeToWait}ms before next request`);
      await this.sleep(timeToWait);
      this.requestsInLastMinute = 0;
      this.requestsResetTime = Date.now();
    }

    // Enforce minimum delay between requests
    const timeSinceLastRequest = now - this.lastRequestTime;
    if (timeSinceLastRequest < this.rateLimitDelay) {
      await this.sleep(this.rateLimitDelay - timeSinceLastRequest);
    }
    
    this.lastRequestTime = Date.now();
    this.requestsInLastMinute++;
  }

  private async fetchWithRetry<T>(
    endpoint: string,
    params: Record<string, string> = {},
    retryCount: number = 0
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.requestQueue = this.requestQueue.then(async () => {
        try {
          if (!this.apiKey) {
            throw new OpenSeaAPIError('API key is required for OpenSea API calls');
          }

          await this.enforceRateLimit();

          const url = new URL(`${OPENSEA_API_URL}${endpoint}`);
          Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
              url.searchParams.append(key, value);
            }
          });

          logger.info('Fetching from OpenSea API:', { url: url.toString() });

          const response = await fetch(url.toString(), {
            headers: {
              'X-API-KEY': this.apiKey,
              'Accept': 'application/json',
            },
          });

          if (!response.ok) {
            const status = response.status;
            let errorMessage = `OpenSea API error: ${response.statusText}`;
            let errorCode: string | undefined;
            
            try {
              const errorData = await response.json();
              logger.error('OpenSea API error response:', errorData);
              errorMessage = errorData.detail || errorData.message || errorMessage;
              errorCode = errorData.code;
            } catch {
              logger.error('Failed to parse error response');
            }

            // Handle rate limiting with exponential backoff
            if ((status === 429 || errorMessage.includes('Request was throttled')) && retryCount < this.maxRetries) {
              const delay = this.retryDelay * Math.pow(2, retryCount);
              logger.info(`Rate limited, retrying in ${delay}ms... (attempt ${retryCount + 1}/${this.maxRetries})`);
              await this.sleep(delay);
              return resolve(this.fetchWithRetry<T>(endpoint, params, retryCount + 1));
            }

            throw new OpenSeaAPIError(errorMessage, status, errorCode);
          }

          const data = await response.json();
          
          if (data === null || typeof data !== 'object') {
            throw new OpenSeaAPIError('Invalid response format: not an object');
          }

          logger.info('OpenSea API response:', { endpoint, data });
          resolve(data as T);
        } catch (error) {
          if (error instanceof OpenSeaAPIError) {
            reject(error);
            return;
          }
          
          logger.error('OpenSea API request failed:', error);
          
          if (retryCount < this.maxRetries) {
            const delay = this.retryDelay * Math.pow(2, retryCount);
            logger.info(`Request failed, retrying in ${delay}ms... (attempt ${retryCount + 1}/${this.maxRetries})`);
            await this.sleep(delay);
            return resolve(this.fetchWithRetry<T>(endpoint, params, retryCount + 1));
          }

          reject(new OpenSeaAPIError(
            'Failed to fetch from OpenSea API' + (error instanceof Error ? ': ' + error.message : '')
          ));
        }
      });

      return this.requestQueue;
    });
  }

  // Get collection by contract address
  async getCollectionByContract(contractAddress: string): Promise<OpenSeaCollection> {
    if (!contractAddress || !/^0x[a-fA-F0-9]{40}$/i.test(contractAddress)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }
    return this.fetchWithRetry<OpenSeaCollection>(`/chain/ethereum/contract/${contractAddress.toLowerCase()}`);
  }

  // Get collection stats by contract address
  async getCollectionStatsByContract(contractAddress: string): Promise<OpenSeaCollectionStats> {
    if (!contractAddress || !/^0x[a-fA-F0-9]{40}$/i.test(contractAddress)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }
    return this.fetchWithRetry<OpenSeaCollectionStats>(`/chain/ethereum/contract/${contractAddress.toLowerCase()}/stats`);
  }

  // Get NFTs by collection slug
  async getCollectionNFTs(collectionSlug: string, params: {
    limit?: number;
    next?: string;
    available_for_sale?: boolean;
    include_orders?: boolean;
    token_ids?: string[];
    traits?: Array<{
      trait_type: string;
      values: string[];
    }>;
    order_by?: 'created_date' | 'sale_date' | 'sale_count' | 'sale_price' | 'total_price';
    order_direction?: 'asc' | 'desc';
  } = {}): Promise<PaginatedResponse<OpenSeaNFT>> {
    if (!collectionSlug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching collection NFTs:', { collectionSlug, params });

    try {
      const queryParams: Record<string, string> = {
        limit: (params.limit || 50).toString()
      };

      // Add optional query parameters
    if (params.next) queryParams.next = params.next;
      if (params.available_for_sale !== undefined) {
        queryParams.available_for_sale = params.available_for_sale.toString();
      }
      if (params.include_orders !== undefined) {
        queryParams.include_orders = params.include_orders.toString();
      }
      if (params.token_ids?.length) {
        queryParams.token_ids = params.token_ids.join(',');
      }
    if (params.order_by) queryParams.order_by = params.order_by;
    if (params.order_direction) queryParams.order_direction = params.order_direction;

      // Handle trait filters
      if (params.traits?.length) {
        params.traits.forEach((trait, index) => {
          queryParams[`traits[${index}][trait_type]`] = trait.trait_type;
          queryParams[`traits[${index}][values]`] = trait.values.join(',');
        });
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaNFT>>(
        `/collection/${collectionSlug}/nfts`,
      queryParams
    );

      // If orders weren't included, fetch additional price information for each NFT
      if (!params.include_orders) {
        const nftsWithPrices = await Promise.all(
          response.results.map(async (nft) => {
            try {
              const priceInfo = await this.getNFTPriceInfo(nft.contract, nft.identifier);
    return {
                ...nft,
                price: priceInfo
              };
            } catch (priceError) {
              logger.warn('Failed to fetch NFT price info:', {
                collection: collectionSlug,
                contract: nft.contract,
                identifier: nft.identifier,
                error: priceError
              });
              return nft;
            }
          })
        );

        return {
          ...response,
          results: nftsWithPrices
        };
      }

      return response;
    } catch (error) {
      logger.error('Error fetching collection NFTs:', error);
      throw error;
    }
  }

  // Get a single NFT by chain, contract address and token ID
  async getNFT(params: {
    chain: string;
    address: string;
    identifier: string;
    include_orders?: boolean;
  }): Promise<OpenSeaNFT> {
    const { chain, address, identifier, include_orders } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    if (!address || !/^0x[a-fA-F0-9]{40}$/i.test(address)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }

    if (!identifier) {
      throw new OpenSeaAPIError('Token identifier is required');
    }

    logger.info('Fetching NFT:', { chain, address, identifier });

    try {
      const normalizedAddress = address.toLowerCase();
      const normalizedChain = chain.toLowerCase();

      const queryParams: Record<string, string> = {};
      if (include_orders !== undefined) {
        queryParams.include_orders = include_orders.toString();
      }

      const response = await this.fetchWithRetry<{ nft: OpenSeaNFT }>(
        `/chain/${normalizedChain}/contract/${normalizedAddress}/nfts/${identifier}`,
        queryParams
      );

      if (!response.nft) {
        throw new OpenSeaAPIError('NFT not found');
      }

      const nft = response.nft;

      // Fetch additional price information if include_orders wasn't specified
      if (!include_orders) {
        try {
          const priceInfo = await this.getNFTPriceInfo(normalizedAddress, identifier);
      return {
        ...nft,
        price: priceInfo
      };
        } catch (priceError) {
          logger.warn('Failed to fetch NFT price info:', {
            chain,
            address: normalizedAddress,
            identifier,
            error: priceError
          });
        }
      }

      // Fetch rarity data if not included
      if (!nft.rarity) {
        try {
          const rarityInfo = await this.fetchWithRetry<any>(
            `/chain/${normalizedChain}/contract/${normalizedAddress}/nfts/${identifier}/rarity`
          );
          if (rarityInfo) {
            nft.rarity = rarityInfo;
          }
        } catch (rarityError) {
          logger.warn('Failed to fetch NFT rarity:', {
            chain,
            address: normalizedAddress,
            identifier,
            error: rarityError
          });
        }
      }

      return nft;
    } catch (error) {
      logger.error('Error fetching NFT:', error);
      throw error;
    }
  }

  // Get NFT events by contract address
  async getCollectionEvents(contractAddress: string, params: {
    event_type?: 'listing' | 'sale' | 'offer' | 'transfer' | 'mint' | 'cancel';
    limit?: number;
    next?: string;
    occurred_after?: string;
    occurred_before?: string;
  } = {}): Promise<PaginatedResponse<OpenSeaEvent>> {
    if (!contractAddress || !/^0x[a-fA-F0-9]{40}$/i.test(contractAddress)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }

    return this.fetchWithRetry<PaginatedResponse<OpenSeaEvent>>(
      `/events/chain/ethereum/contract/${contractAddress.toLowerCase()}`,
      {
        ...params,
        limit: params.limit?.toString() || DEFAULT_LIMIT.toString()
      } as Record<string, string>
    );
  }

  // Get NFT price information
  private async getNFTPriceInfo(contractAddress: string, tokenId: string): Promise<{
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
  }> {
    try {
      // Get best listing for the NFT
      const bestListing = await this.fetchWithRetry<any>(
        `/orders/ethereum/seaport/listings`, {
          asset_contract_address: contractAddress.toLowerCase(),
          token_ids: tokenId,
          order_by: 'eth_price',
          order_direction: 'asc',
          limit: '1'
        }
      );

      // Get best offer for the NFT
      const bestOffer = await this.fetchWithRetry<any>(
        `/orders/ethereum/seaport/offers`, {
          asset_contract_address: contractAddress.toLowerCase(),
          token_ids: tokenId,
          order_by: 'eth_price',
          order_direction: 'desc',
          limit: '1'
        }
      );

      // Get last sale from events
      const salesResponse = await this.fetchWithRetry<PaginatedResponse<OpenSeaEvent>>(
        `/events/chain/ethereum/contract/${contractAddress.toLowerCase()}/nfts/${tokenId}`,
        {
          limit: '1',
          event_type: 'sale'
        }
      );

      logger.info('Price info responses:', {
        bestListing,
        bestOffer,
        lastSale: salesResponse.results?.[0]
      });

      const latestSale = salesResponse.results?.[0];
      const listing = bestListing?.orders?.[0];
      const offer = bestOffer?.orders?.[0];

      return {
        currentPrice: listing?.current_price ? Number(listing.current_price) / 1e18 : undefined,
        paymentToken: {
          symbol: 'ETH',
          address: '0x0000000000000000000000000000000000000000',
          decimals: 18,
          eth_price: '1',
          usd_price: '1'
        },
        lastSale: latestSale?.price?.current?.value ? {
          price: Number(latestSale.price.current.value),
          timestamp: latestSale.created_date
        } : undefined
      };
    } catch (error) {
      logger.error('Error fetching NFT price info:', error);
      return {};
    }
  }

  // Get best listing for an NFT
  async getBestListing(contractAddress: string, tokenId: string): Promise<any> {
    return this.fetchWithRetry<any>(
      `/orders/ethereum/seaport/listings`,
      {
        asset_contract_address: contractAddress.toLowerCase(),
        token_ids: tokenId,
        order_by: 'eth_price',
        order_direction: 'asc',
        limit: '1'
      }
    );
  }

  // Get best offer for an NFT
  async getBestOffer(contractAddress: string, tokenId: string): Promise<any> {
    return this.fetchWithRetry<any>(
      `/orders/ethereum/seaport/offers`,
      {
        asset_contract_address: contractAddress.toLowerCase(),
        token_ids: tokenId,
        order_by: 'eth_price',
        order_direction: 'desc',
        limit: '1'
      }
    );
  }

  // Get NFT events by contract address and token ID
  async getNFTEvents(
    contractAddress: string,
    tokenId: string,
    params: {
      event_type?: 'listing' | 'sale' | 'offer' | 'transfer' | 'mint' | 'cancel';
      limit?: number;
      next?: string;
      occurred_after?: string;
      occurred_before?: string;
    } = {}
  ): Promise<PaginatedResponse<OpenSeaEvent>> {
    if (!contractAddress || !/^0x[a-fA-F0-9]{40}$/i.test(contractAddress)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }

    return this.fetchWithRetry<PaginatedResponse<OpenSeaEvent>>(
      `/events/chain/ethereum/contract/${contractAddress.toLowerCase()}/nfts/${tokenId}`,
      {
        ...params,
        limit: params.limit?.toString() || DEFAULT_LIMIT.toString()
      } as Record<string, string>
    );
  }

  // Get account details by address or username
  async getAccount(addressOrUsername: string): Promise<OpenSeaAccount> {
    if (!addressOrUsername) {
      throw new OpenSeaAPIError('Address or username is required');
    }

    // If it's an address, validate the format
    if (addressOrUsername.startsWith('0x')) {
      if (!/^0x[a-fA-F0-9]{40}$/i.test(addressOrUsername)) {
        throw new OpenSeaAPIError('Invalid address format');
      }
      addressOrUsername = addressOrUsername.toLowerCase();
    }

    logger.info('Fetching OpenSea account:', { addressOrUsername });

    try {
      return await this.fetchWithRetry<OpenSeaAccount>(`/accounts/${addressOrUsername}`);
    } catch (error) {
      logger.error('Error fetching OpenSea account:', error);
      throw error;
    }
  }

  // Get collection by slug
  async getCollection(collectionSlug: string): Promise<OpenSeaCollection> {
    if (!collectionSlug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching collection by slug:', { collectionSlug });

    try {
      const collection = await this.fetchWithRetry<OpenSeaCollection>(`/collections/${collectionSlug}`);

      // If stats are needed, fetch them separately and merge
      try {
        const stats = await this.getCollectionStatsBySlug(collectionSlug);
        return {
          ...collection,
          stats
        };
      } catch (statsError) {
        logger.warn('Failed to fetch collection stats:', statsError);
        return collection;
      }
    } catch (error) {
      logger.error('Error fetching collection:', error);
      throw error;
    }
  }

  // Get collection stats by slug
  private async getCollectionStatsBySlug(collectionSlug: string): Promise<OpenSeaCollectionStats> {
    return this.fetchWithRetry<OpenSeaCollectionStats>(`/collections/${collectionSlug}/stats`);
  }

  // Get contract details by chain and address
  async getContract(params: {
    chain: string;
    address: string;
  }): Promise<OpenSeaContract> {
    const { chain, address } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    if (!address || !/^0x[a-fA-F0-9]{40}$/i.test(address)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }

    logger.info('Fetching contract details:', { chain, address });

    try {
      const normalizedAddress = address.toLowerCase();
      const normalizedChain = chain.toLowerCase();

      const contract = await this.fetchWithRetry<OpenSeaContract>(
        `/chain/${normalizedChain}/contract/${normalizedAddress}`
      );

      // If this is an NFT contract, try to fetch additional collection data
      if (contract.type === 'non-fungible' || contract.type === 'semi-fungible') {
        try {
          const collection = await this.getCollection(contract.collection.slug);
          return {
            ...contract,
            collection: {
              ...contract.collection,
              ...collection
            }
          };
        } catch (collectionError) {
          logger.warn('Failed to fetch additional collection data:', {
            contractAddress: address,
            error: collectionError
          });
        }
      }

      return contract;
    } catch (error) {
      logger.error('Error fetching contract:', error);
      throw error;
    }
  }

  // List collections with optional filters
  async listCollections(params: {
    chain?: string;
    include_hidden?: boolean;
    next?: string;
    limit?: number;
    created_after?: string; // ISO timestamp
    created_before?: string; // ISO timestamp
  } = {}): Promise<PaginatedResponse<OpenSeaCollection>> {
    logger.info('Fetching collections list with params:', params);

    try {
      const queryParams: Record<string, string> = {};
      
      if (params.chain) queryParams.chain = params.chain;
      if (params.include_hidden !== undefined) queryParams.include_hidden = params.include_hidden.toString();
      if (params.next) queryParams.next = params.next;
      if (params.limit) queryParams.limit = params.limit.toString();
      if (params.created_after) queryParams.created_after = params.created_after;
      if (params.created_before) queryParams.created_before = params.created_before;

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaCollection>>('/collections', queryParams);

      // Optionally fetch stats for each collection
      const collectionsWithStats = await Promise.all(
        response.results.map(async (collection) => {
          try {
            const stats = await this.getCollectionStatsBySlug(collection.collection);
            return {
              ...collection,
              stats
            };
          } catch (statsError) {
            logger.warn('Failed to fetch stats for collection:', {
              collection: collection.collection,
              error: statsError
            });
            return collection;
          }
        })
      );

      return {
        ...response,
        results: collectionsWithStats
      };
    } catch (error) {
      logger.error('Error fetching collections list:', error);
      throw error;
    }
  }

  // Get NFTs owned by an account address
  async getNFTsByAccount(params: {
    chain: string;
    address: string;
    collection?: string;
    include_orders?: boolean;
    limit?: number;
    next?: string;
    order_by?: 'created_date' | 'sale_date' | 'sale_count' | 'sale_price' | 'total_price';
    order_direction?: 'asc' | 'desc';
  }): Promise<PaginatedResponse<OpenSeaNFT>> {
    const { 
      chain,
      address,
      collection,
      include_orders,
      limit = 50,
      next,
      order_by,
      order_direction
    } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    if (!address || !/^0x[a-fA-F0-9]{40}$/i.test(address)) {
      throw new OpenSeaAPIError('Invalid account address format');
    }

    logger.info('Fetching NFTs by account:', { chain, address, collection });

    try {
      const normalizedAddress = address.toLowerCase();
      const normalizedChain = chain.toLowerCase();

      const queryParams: Record<string, string> = {
        limit: limit.toString()
      };

      if (collection) queryParams.collection = collection;
      if (include_orders !== undefined) queryParams.include_orders = include_orders.toString();
      if (next) queryParams.next = next;
      if (order_by) queryParams.order_by = order_by;
      if (order_direction) queryParams.order_direction = order_direction;

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaNFT>>(
        `/chain/${normalizedChain}/account/${normalizedAddress}/nfts`,
        queryParams
      );

      // If orders weren't included, fetch additional price information for each NFT
      if (!include_orders) {
        const nftsWithPrices = await Promise.all(
          response.results.map(async (nft) => {
            try {
              const priceInfo = await this.getNFTPriceInfo(nft.contract, nft.identifier);
              return {
                ...nft,
                price: priceInfo
              };
            } catch (priceError) {
              logger.warn('Failed to fetch NFT price info:', {
                chain,
                contract: nft.contract,
                identifier: nft.identifier,
                error: priceError
              });
              return nft;
            }
          })
        );

        return {
          ...response,
          results: nftsWithPrices
        };
      }

      return response;
    } catch (error) {
      logger.error('Error fetching NFTs by account:', error);
      throw error;
    }
  }

  // Get NFTs by contract address
  async getNFTsByContract(params: {
    chain: string;
    address: string;
    limit?: number;
    next?: string;
    include_orders?: boolean;
    token_ids?: string[];
    available_for_sale?: boolean;
    order_by?: 'created_date' | 'sale_date' | 'sale_count' | 'sale_price' | 'total_price';
    order_direction?: 'asc' | 'desc';
  }): Promise<PaginatedResponse<OpenSeaNFT>> {
    const { 
      chain,
      address,
      limit = 50,
      next,
      include_orders,
      token_ids,
      available_for_sale,
      order_by,
      order_direction
    } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    if (!address || !/^0x[a-fA-F0-9]{40}$/i.test(address)) {
      throw new OpenSeaAPIError('Invalid contract address format');
    }

    logger.info('Fetching NFTs by contract:', { chain, address });

    try {
      const normalizedAddress = address.toLowerCase();
      const normalizedChain = chain.toLowerCase();

      const queryParams: Record<string, string> = {
        limit: limit.toString()
      };

      // Add optional query parameters
      if (next) queryParams.next = next;
      if (include_orders !== undefined) {
        queryParams.include_orders = include_orders.toString();
      }
      if (token_ids?.length) {
        queryParams.token_ids = token_ids.join(',');
      }
      if (available_for_sale !== undefined) {
        queryParams.available_for_sale = available_for_sale.toString();
      }
      if (order_by) queryParams.order_by = order_by;
      if (order_direction) queryParams.order_direction = order_direction;

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaNFT>>(
        `/chain/${normalizedChain}/contract/${normalizedAddress}/nfts`,
        queryParams
      );

      // If orders weren't included, fetch additional price information for each NFT
      if (!include_orders) {
        const nftsWithPrices = await Promise.all(
          response.results.map(async (nft) => {
            try {
              const priceInfo = await this.getNFTPriceInfo(normalizedAddress, nft.identifier);
              return {
                ...nft,
                price: priceInfo
              };
            } catch (priceError) {
              logger.warn('Failed to fetch NFT price info:', {
                chain,
                contract: normalizedAddress,
                identifier: nft.identifier,
                error: priceError
              });
              return nft;
            }
          })
        );

        return {
          ...response,
          results: nftsWithPrices
        };
      }

      // Try to fetch and include contract metadata for all NFTs
      try {
        const contractData = await this.getContract({ chain, address: normalizedAddress });
        return {
          ...response,
          results: response.results.map(nft => ({
            ...nft,
            contract_metadata: {
              name: contractData.name,
              symbol: contractData.symbol,
              type: contractData.type,
              total_supply: contractData.total_supply,
              verified: contractData.verified
            }
          }))
        };
      } catch (contractError) {
        logger.warn('Failed to fetch contract metadata:', {
          chain,
          address: normalizedAddress,
          error: contractError
        });
        return response;
      }
    } catch (error) {
      logger.error('Error fetching NFTs by contract:', error);
      throw error;
    }
  }

  // Get traits for a collection
  async getCollectionTraits(collectionSlug: string): Promise<OpenSeaCollectionTraits> {
    if (!collectionSlug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching collection traits:', { collectionSlug });

    try {
      // First verify the collection exists
      await this.getCollection(collectionSlug);

      const response = await this.fetchWithRetry<OpenSeaCollectionTraits>(
        `/traits/${collectionSlug}`
      );

      // Validate the response structure
      if (!response || typeof response !== 'object') {
        throw new OpenSeaAPIError('Invalid traits response format');
      }

      // Calculate additional statistics for each trait
      const enrichedTraits: OpenSeaCollectionTraits = {};
      
      for (const [traitType, traitData] of Object.entries(response)) {
        if (!traitData.values || typeof traitData.values !== 'object') {
          logger.warn('Invalid trait data structure:', { traitType, traitData });
          continue;
        }

        let totalCount = 0;
        for (const value of Object.values(traitData.values)) {
          totalCount += value.count;
        }

        enrichedTraits[traitType] = {
          values: traitData.values,
          count: totalCount
        };

        // Recalculate percentages to ensure accuracy
        for (const [value, data] of Object.entries(traitData.values)) {
          enrichedTraits[traitType].values[value] = {
            count: data.count,
            percent: Number((data.count / totalCount * 100).toFixed(2))
          };
        }
      }

      return enrichedTraits;
    } catch (error) {
      logger.error('Error fetching collection traits:', error);
      throw error;
    }
  }

  // Get payment token details by chain and address
  async getPaymentToken(params: {
    chain: string;
    address: string;
  }): Promise<OpenSeaPaymentToken> {
    const { chain, address } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    if (!address || !/^0x[a-fA-F0-0]{40}$/i.test(address)) {
      throw new OpenSeaAPIError('Invalid token address format');
    }

    logger.info('Fetching payment token:', { chain, address });

    try {
      const normalizedAddress = address.toLowerCase();
      const normalizedChain = chain.toLowerCase();

      const response = await this.fetchWithRetry<OpenSeaPaymentToken>(
        `/chain/${normalizedChain}/payment_token/${normalizedAddress}`
      );

      // Handle special case for native tokens (ETH, MATIC, etc.)
      if (response.is_native) {
        logger.info('Native token detected:', {
          chain,
          symbol: response.symbol
        });
      }

      // Validate required fields
      if (!response.symbol || !response.decimals) {
        throw new OpenSeaAPIError('Invalid payment token response: missing required fields');
      }

      return response;
    } catch (error) {
      logger.error('Error fetching payment token:', error);
      throw error;
    }
  }

  // Get all active listings for a collection
  async getAllCollectionListings(params: {
    collection_slug: string;
    limit?: number;
    next?: string;
    payment_token_address?: string;
    maker?: string;
    taker?: string;
    order_by?: 'created_date' | 'eth_price';
    order_direction?: 'asc' | 'desc';
  }): Promise<PaginatedResponse<OpenSeaListing>> {
    const { 
      collection_slug,
      limit = 50,
      next,
      payment_token_address,
      maker,
      taker,
      order_by = 'created_date',
      order_direction = 'desc'
    } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching collection listings:', { collection_slug, params });

    try {
      // First verify the collection exists
      await this.getCollection(collection_slug);

      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        order_by,
        order_direction
      };

      if (next) queryParams.next = next;
      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }
      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }
      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaListing>>(
        `/listings/collection/${collection_slug}/all`,
        queryParams
      );

      // Enrich listings with additional data
      const enrichedListings = await Promise.all(
        response.results.map(async (listing) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (listing.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: listing.chain,
                address: listing.payment_token.address
              });
              return {
                ...listing,
                payment_token: {
                  ...listing.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }
            return listing;
          } catch (error) {
            logger.warn('Failed to enrich listing with payment token details:', {
              listing_hash: listing.order_hash,
              error
            });
            return listing;
          }
        })
      );

      return {
        ...response,
        results: enrichedListings
      };
    } catch (error) {
      logger.error('Error fetching collection listings:', error);
      throw error;
    }
  }

  // Get all active offers for a collection
  async getAllCollectionOffers(params: {
    collection_slug: string;
    limit?: number;
    next?: string;
    payment_token_address?: string;
    maker?: string;
    taker?: string;
    order_by?: 'created_date' | 'eth_price';
    order_direction?: 'asc' | 'desc';
    include_criteria?: boolean;
  }): Promise<PaginatedResponse<OpenSeaOffer>> {
    const { 
      collection_slug,
      limit = 50,
      next,
      payment_token_address,
      maker,
      taker,
      order_by = 'created_date',
      order_direction = 'desc',
      include_criteria = true
    } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching collection offers:', { collection_slug, params });

    try {
      // First verify the collection exists
      await this.getCollection(collection_slug);

      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        order_by,
        order_direction,
        include_criteria: include_criteria.toString()
      };

      if (next) queryParams.next = next;
      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }
      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }
      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaOffer>>(
        `/offers/collection/${collection_slug}/all`,
        queryParams
      );

      // Enrich offers with additional data
      const enrichedOffers = await Promise.all(
        response.results.map(async (offer) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (offer.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: offer.chain,
                address: offer.payment_token.address
              });
              return {
                ...offer,
                payment_token: {
                  ...offer.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }
            return offer;
          } catch (error) {
            logger.warn('Failed to enrich offer with payment token details:', {
              offer_hash: offer.order_hash,
              error
            });
            return offer;
          }
        })
      );

      // Sort criteria offers first if they exist
      const sortedOffers = enrichedOffers.sort((a, b) => {
        if (a.criteria && !b.criteria) return -1;
        if (!a.criteria && b.criteria) return 1;
        return 0;
      });

      return {
        ...response,
        results: sortedOffers
      };
    } catch (error) {
      logger.error('Error fetching collection offers:', error);
      throw error;
    }
  }

  // Get best listing for an NFT
  async getBestNFTListing(params: {
    collection_slug: string;
    token_identifier: string;
  }): Promise<OpenSeaListing | null> {
    const { collection_slug, token_identifier } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    if (!token_identifier) {
      throw new OpenSeaAPIError('Token identifier is required');
    }

    logger.info('Fetching best listing for NFT:', { collection_slug, token_identifier });

    try {
      // First verify the collection exists
      const collection = await this.getCollection(collection_slug);

      const response = await this.fetchWithRetry<{ listing: OpenSeaListing | null }>(
        `/listings/collection/${collection_slug}/nfts/${token_identifier}/best`
      );

      if (!response.listing) {
        logger.info('No active listing found for NFT:', { collection_slug, token_identifier });
        return null;
      }

      // Enrich listing with additional data if payment token is not native ETH
      if (response.listing.payment_token.address !== '0x0000000000000000000000000000000000000000') {
        try {
          const tokenDetails = await this.getPaymentToken({
            chain: response.listing.chain,
            address: response.listing.payment_token.address
          });

          return {
            ...response.listing,
            payment_token: {
              ...response.listing.payment_token,
              eth_price: tokenDetails.eth_price,
              usd_price: tokenDetails.usd_price
            }
          };
        } catch (error) {
          logger.warn('Failed to enrich listing with payment token details:', {
            listing_hash: response.listing.order_hash,
            error
          });
        }
      }

      return response.listing;
    } catch (error) {
      logger.error('Error fetching best listing for NFT:', error);
      throw error;
    }
  }

  // Get best (cheapest) listings for a collection
  async getBestCollectionListings(params: {
    collection_slug: string;
    limit?: number;
    payment_token_address?: string;
    maker?: string;
    taker?: string;
    protocol?: 'seaport';
  }): Promise<PaginatedResponse<OpenSeaListing>> {
    const { 
      collection_slug,
      limit = 50,
      payment_token_address,
      maker,
      taker,
      protocol = 'seaport'
    } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching best listings for collection:', { collection_slug, params });

    try {
      // First verify the collection exists
      await this.getCollection(collection_slug);

      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        protocol
      };

      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }
      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }
      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaListing>>(
        `/listings/collection/${collection_slug}/best`,
        queryParams
      );

      // Enrich listings with additional data
      const enrichedListings = await Promise.all(
        response.results.map(async (listing) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (listing.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: listing.chain,
                address: listing.payment_token.address
              });
              return {
                ...listing,
                payment_token: {
                  ...listing.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }
            return listing;
          } catch (error) {
            logger.warn('Failed to enrich listing with payment token details:', {
              listing_hash: listing.order_hash,
              error
            });
            return listing;
          }
        })
      );

      // Sort listings by price in ascending order (cheapest first)
      const sortedListings = enrichedListings.sort((a, b) => {
        const aPrice = BigInt(a.current_price);
        const bPrice = BigInt(b.current_price);
        return aPrice < bPrice ? -1 : aPrice > bPrice ? 1 : 0;
      });

      return {
        ...response,
        results: sortedListings
      };
    } catch (error) {
      logger.error('Error fetching best listings for collection:', error);
      throw error;
    }
  }

  // Get best offer for an NFT
  async getBestNFTOffer(params: {
    collection_slug: string;
    token_identifier: string;
  }): Promise<OpenSeaOffer | null> {
    const { collection_slug, token_identifier } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    if (!token_identifier) {
      throw new OpenSeaAPIError('Token identifier is required');
    }

    logger.info('Fetching best offer for NFT:', { collection_slug, token_identifier });

    try {
      // First verify the collection exists
      const collection = await this.getCollection(collection_slug);

      const response = await this.fetchWithRetry<{ offer: OpenSeaOffer | null }>(
        `/offers/collection/${collection_slug}/nfts/${token_identifier}/best`
      );

      if (!response.offer) {
        logger.info('No active offers found for NFT:', { collection_slug, token_identifier });
        return null;
      }

      const offer = response.offer;

      // Enrich offer with additional data if payment token is not native ETH
      if (offer.payment_token.address !== '0x0000000000000000000000000000000000000000') {
        try {
          const tokenDetails = await this.getPaymentToken({
            chain: offer.chain,
            address: offer.payment_token.address
          });

          return {
            ...offer,
            payment_token: {
              ...offer.payment_token,
              eth_price: tokenDetails.eth_price,
              usd_price: tokenDetails.usd_price
            }
          };
        } catch (error) {
          logger.warn('Failed to enrich offer with payment token details:', {
            offer_hash: offer.order_hash,
            error
          });
        }
      }

      // Check if this is a criteria-based offer
      if (offer.criteria) {
        const criteria = offer.criteria;
        try {
          // Verify the criteria matches the NFT's traits
          const nft = await this.getNFT({
            chain: offer.chain,
            address: criteria.collection.contract,
            identifier: token_identifier
          });

          if (criteria.trait) {
            const trait = criteria.trait;
            const matchingTrait = nft.traits.find(
              nftTrait => 
                nftTrait.trait_type === trait.type &&
                nftTrait.value === trait.value
            );

            if (!matchingTrait) {
              logger.warn('Criteria offer trait does not match NFT traits:', {
                offer_hash: offer.order_hash,
                criteria: trait,
                nft_traits: nft.traits
              });
            }
          }
        } catch (error) {
          logger.warn('Failed to verify criteria offer against NFT traits:', {
            offer_hash: offer.order_hash,
            error
          });
        }
      }

      return offer;
    } catch (error) {
      logger.error('Error fetching best offer for NFT:', error);
      throw error;
    }
  }

  // Get collection offers
  async getCollectionOffers(params: {
    collection_slug: string;
    limit?: number;
    next?: string;
    payment_token_address?: string;
    maker?: string;
    taker?: string;
    order_by?: 'created_date' | 'eth_price';
    order_direction?: 'asc' | 'desc';
    include_criteria?: boolean;
  }): Promise<PaginatedResponse<OpenSeaOffer>> {
    const { 
      collection_slug,
      limit = 50,
      next,
      payment_token_address,
      maker,
      taker,
      order_by = 'created_date',
      order_direction = 'desc',
      include_criteria = true
    } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching collection offers:', { collection_slug, params });

    try {
      // First verify the collection exists
      await this.getCollection(collection_slug);

      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        order_by,
        order_direction,
        include_criteria: include_criteria.toString()
      };

      if (next) queryParams.next = next;
      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }
      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }
      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaOffer>>(
        `/offers/collection/${collection_slug}`,
        queryParams
      );

      // Enrich offers with additional data
      const enrichedOffers = await Promise.all(
        response.results.map(async (offer) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (offer.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: offer.chain,
                address: offer.payment_token.address
              });
              return {
                ...offer,
                payment_token: {
                  ...offer.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }
            return offer;
          } catch (error) {
            logger.warn('Failed to enrich offer with payment token details:', {
              offer_hash: offer.order_hash,
              error
            });
            return offer;
          }
        })
      );

      // Sort criteria offers first if they exist
      const sortedOffers = enrichedOffers.sort((a, b) => {
        if (a.criteria && !b.criteria) return -1;
        if (!a.criteria && b.criteria) return 1;
        return 0;
      });

      return {
        ...response,
        results: sortedOffers
      };
    } catch (error) {
      logger.error('Error fetching collection offers:', error);
      throw error;
    }
  }

  // Get individual NFT offers
  async getItemOffers(params: {
    chain: string;
    protocol?: 'seaport';
    asset_contract_address?: string;
    token_ids?: string[];
    limit?: number;
    next?: string;
    maker?: string;
    taker?: string;
    payment_token_address?: string;
    order_by?: 'created_date' | 'eth_price';
    order_direction?: 'asc' | 'desc';
  }): Promise<PaginatedResponse<OpenSeaOffer>> {
    const { 
      chain,
      protocol = 'seaport',
      asset_contract_address,
      token_ids,
      limit = 50,
      next,
      maker,
      taker,
      payment_token_address,
      order_by = 'created_date',
      order_direction = 'desc'
    } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    logger.info('Fetching item offers:', { chain, protocol, params });

    try {
      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        order_by,
        order_direction
      };

      // Add optional query parameters
      if (asset_contract_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(asset_contract_address)) {
          throw new OpenSeaAPIError('Invalid asset contract address format');
        }
        queryParams.asset_contract_address = asset_contract_address.toLowerCase();
      }

      if (token_ids?.length) {
        queryParams.token_ids = token_ids.join(',');
      }

      if (next) queryParams.next = next;

      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }

      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaOffer>>(
        `/orders/${chain.toLowerCase()}/${protocol}/offers`,
        queryParams
      );

      // Enrich offers with additional data
      const enrichedOffers = await Promise.all(
        response.results.map(async (offer) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (offer.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: offer.chain,
                address: offer.payment_token.address
              });
              return {
                ...offer,
                payment_token: {
                  ...offer.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }

            // If the offer has an NFT, fetch additional NFT details
            if (offer.nft) {
              try {
                const nftDetails = await this.getNFT({
                  chain: offer.chain,
                  address: offer.nft.contract,
                  identifier: offer.nft.identifier
                });

                return {
                  ...offer,
                  nft: {
                    ...offer.nft,
                    metadata: {
                      name: nftDetails.name,
                      description: nftDetails.description,
                      image_url: nftDetails.image_url,
                      traits: nftDetails.traits,
                      collection: {
                        slug: nftDetails.collection,
                        name: nftDetails.collection_metadata?.name,
                        safelist_status: nftDetails.collection_metadata?.safelist_status
                      }
                    }
                  }
                } as OpenSeaOffer;
              } catch (nftError) {
                logger.warn('Failed to fetch NFT details for offer:', {
                  offer_hash: offer.order_hash,
                  nft: offer.nft,
                  error: nftError
                });
              }
            }

            return offer;
          } catch (error) {
            logger.warn('Failed to enrich offer:', {
              offer_hash: offer.order_hash,
              error
            });
            return offer;
          }
        })
      );

      return {
        ...response,
        results: enrichedOffers
      };
    } catch (error) {
      logger.error('Error fetching item offers:', error);
      throw error;
    }
  }

  // Get all active listings
  async getListings(params: {
    chain: string;
    protocol?: 'seaport';
    asset_contract_address?: string;
    token_ids?: string[];
    limit?: number;
    next?: string;
    maker?: string;
    taker?: string;
    payment_token_address?: string;
    order_by?: 'created_date' | 'eth_price';
    order_direction?: 'asc' | 'desc';
  }): Promise<PaginatedResponse<OpenSeaListing>> {
    const { 
      chain,
      protocol = 'seaport',
      asset_contract_address,
      token_ids,
      limit = 50,
      next,
      maker,
      taker,
      payment_token_address,
      order_by = 'created_date',
      order_direction = 'desc'
    } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    logger.info('Fetching listings:', { chain, protocol, params });

    try {
      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        order_by,
        order_direction
      };

      // Add optional query parameters
      if (asset_contract_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(asset_contract_address)) {
          throw new OpenSeaAPIError('Invalid asset contract address format');
        }
        queryParams.asset_contract_address = asset_contract_address.toLowerCase();
      }

      if (token_ids?.length) {
        queryParams.token_ids = token_ids.join(',');
      }

      if (next) queryParams.next = next;

      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }

      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaListing>>(
        `/orders/${chain.toLowerCase()}/${protocol}/listings`,
        queryParams
      );

      // Enrich listings with additional data
      const enrichedListings = await Promise.all(
        response.results.map(async (listing) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (listing.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: listing.chain,
                address: listing.payment_token.address
              });
              listing = {
                ...listing,
                payment_token: {
                  ...listing.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }

            // Fetch NFT details
            try {
              const nftDetails = await this.getNFT({
                chain: listing.chain,
                address: listing.nft.contract,
                identifier: listing.nft.identifier
              });

              return {
                ...listing,
                nft: {
                  ...listing.nft,
                  metadata: {
                    name: nftDetails.name,
                    description: nftDetails.description,
                    image_url: nftDetails.image_url,
                    traits: nftDetails.traits,
                    collection: {
                      slug: nftDetails.collection,
                      name: nftDetails.collection_metadata?.name,
                      safelist_status: nftDetails.collection_metadata?.safelist_status
                    }
                  }
                }
              };
            } catch (nftError) {
              logger.warn('Failed to fetch NFT details for listing:', {
                listing_hash: listing.order_hash,
                nft: listing.nft,
                error: nftError
              });
              return listing;
            }
          } catch (error) {
            logger.warn('Failed to enrich listing:', {
              listing_hash: listing.order_hash,
              error
            });
            return listing;
          }
        })
      );

      // Sort listings by price in ascending order if sorting by eth_price
      if (order_by === 'eth_price') {
        const sortedListings = enrichedListings.sort((a, b) => {
          const aPrice = BigInt(a.current_price);
          const bPrice = BigInt(b.current_price);
          return order_direction === 'asc' 
            ? (aPrice < bPrice ? -1 : aPrice > bPrice ? 1 : 0)
            : (aPrice > bPrice ? -1 : aPrice < bPrice ? 1 : 0);
        });

        return {
          ...response,
          results: sortedListings
        };
      }

      return {
        ...response,
        results: enrichedListings
      };
    } catch (error) {
      logger.error('Error fetching listings:', error);
      throw error;
    }
  }

  // Get a single order by hash
  async getOrder(params: {
    chain: string;
    protocol_address: string;
    order_hash: string;
  }): Promise<OpenSeaListing | OpenSeaOffer> {
    const { chain, protocol_address, order_hash } = params;

    if (!chain) {
      throw new OpenSeaAPIError('Chain parameter is required');
    }

    if (!protocol_address || !/^0x[a-fA-F0-9]{40}$/i.test(protocol_address)) {
      throw new OpenSeaAPIError('Invalid protocol address format');
    }

    if (!order_hash || !/^0x[a-fA-F0-9]{64}$/i.test(order_hash)) {
      throw new OpenSeaAPIError('Invalid order hash format');
    }

    logger.info('Fetching order:', { chain, protocol_address, order_hash });

    try {
      const response = await this.fetchWithRetry<{ order: OpenSeaListing | OpenSeaOffer }>(
        `/orders/chain/${chain.toLowerCase()}/protocol/${protocol_address.toLowerCase()}/${order_hash}`
      );

      if (!response.order) {
        throw new OpenSeaAPIError('Order not found');
      }

      const order = response.order;

      // Enrich order with additional data
      try {
        // If payment token is not native ETH, fetch token details
        if (order.payment_token.address !== '0x0000000000000000000000000000000000000000') {
          const tokenDetails = await this.getPaymentToken({
            chain: order.chain,
            address: order.payment_token.address
          });

          order.payment_token = {
            ...order.payment_token,
            eth_price: tokenDetails.eth_price,
            usd_price: tokenDetails.usd_price
          };
        }

        // If this is a listing or an item-specific offer
        if ('nft' in order && order.nft) {
          try {
            const nftDetails = await this.getNFT({
              chain: order.chain,
              address: order.nft.contract,
              identifier: order.nft.identifier
            });

            order.nft = {
              ...order.nft,
              metadata: {
                name: nftDetails.name,
                description: nftDetails.description,
                image_url: nftDetails.image_url,
                traits: nftDetails.traits,
                collection: {
                  slug: nftDetails.collection,
                  name: nftDetails.collection_metadata?.name,
                  safelist_status: nftDetails.collection_metadata?.safelist_status
                }
              }
            };
          } catch (nftError) {
            logger.warn('Failed to fetch NFT details for order:', {
              order_hash,
              nft: order.nft,
              error: nftError
            });
          }
        }

        // If this is a criteria offer
        if ('criteria' in order && order.criteria) {
          try {
            const collection = await this.getCollection(order.criteria.collection.slug);
            if (collection) {
              order.criteria.collection = {
                ...order.criteria.collection,
                name: collection.name,
                description: collection.description,
                image_url: collection.image_url,
                safelist_status: collection.safelist_status
              };
            }
          } catch (collectionError) {
            logger.warn('Failed to fetch collection details for criteria offer:', {
              order_hash,
              collection: order.criteria.collection,
              error: collectionError
            });
          }
        }

        return order;
      } catch (error) {
        logger.warn('Failed to enrich order:', {
          order_hash,
          error
        });
        return order;
      }
    } catch (error) {
      logger.error('Error fetching order:', error);
      throw error;
    }
  }

  // Get trait offers for a collection
  async getTraitOffers(params: {
    collection_slug: string;
    limit?: number;
    next?: string;
    payment_token_address?: string;
    maker?: string;
    taker?: string;
    order_by?: 'created_date' | 'eth_price';
    order_direction?: 'asc' | 'desc';
  }): Promise<PaginatedResponse<OpenSeaOffer>> {
    const { 
      collection_slug,
      limit = 50,
      next,
      payment_token_address,
      maker,
      taker,
      order_by = 'created_date',
      order_direction = 'desc'
    } = params;

    if (!collection_slug) {
      throw new OpenSeaAPIError('Collection slug is required');
    }

    logger.info('Fetching trait offers:', { collection_slug, params });

    try {
      // First verify the collection exists and get traits
      const collection = await this.getCollection(collection_slug);
      const traits = await this.getCollectionTraits(collection_slug);

      const queryParams: Record<string, string> = {
        limit: limit.toString(),
        order_by,
        order_direction
      };

      if (next) queryParams.next = next;
      if (payment_token_address) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(payment_token_address)) {
          throw new OpenSeaAPIError('Invalid payment token address format');
        }
        queryParams.payment_token_address = payment_token_address.toLowerCase();
      }
      if (maker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(maker)) {
          throw new OpenSeaAPIError('Invalid maker address format');
        }
        queryParams.maker = maker.toLowerCase();
      }
      if (taker) {
        if (!/^0x[a-fA-F0-9]{40}$/i.test(taker)) {
          throw new OpenSeaAPIError('Invalid taker address format');
        }
        queryParams.taker = taker.toLowerCase();
      }

      const response = await this.fetchWithRetry<PaginatedResponse<OpenSeaOffer>>(
        `/offers/collection/${collection_slug}/traits`,
        queryParams
      );

      // Enrich offers with additional data
      const enrichedOffers = await Promise.all(
        response.results.map(async (offer) => {
          try {
            // If payment token is not native ETH, fetch token details
            if (offer.payment_token.address !== '0x0000000000000000000000000000000000000000') {
              const tokenDetails = await this.getPaymentToken({
                chain: offer.chain,
                address: offer.payment_token.address
              });
              offer = {
                ...offer,
                payment_token: {
                  ...offer.payment_token,
                  eth_price: tokenDetails.eth_price,
                  usd_price: tokenDetails.usd_price
                }
              };
            }

            // Enrich criteria with trait statistics if available
            if (offer.criteria?.trait) {
              const traitType = offer.criteria.trait.type;
              const traitValue = offer.criteria.trait.value;
              
              if (traits[traitType]?.values[traitValue]) {
                const traitStats = traits[traitType].values[traitValue];
                return {
                  ...offer,
                  criteria: {
                    ...offer.criteria,
                    collection: {
                      ...offer.criteria.collection,
                      name: collection.name,
                      description: collection.description,
                      image_url: collection.image_url
                    },
                    trait: {
                      ...offer.criteria.trait,
                      count: traitStats.count,
                      percent: traitStats.percent
                    }
                  }
                } as OpenSeaOffer;
              }
            }

            return offer;
          } catch (error) {
            logger.warn('Failed to enrich trait offer:', {
              offer_hash: offer.order_hash,
              error
            });
            return offer;
          }
        })
      );

      // Sort offers by price if requested
      if (order_by === 'eth_price') {
        const sortedOffers = enrichedOffers.sort((a, b) => {
          const aPrice = BigInt(a.current_price);
          const bPrice = BigInt(b.current_price);
          return order_direction === 'asc' 
            ? (aPrice < bPrice ? -1 : aPrice > bPrice ? 1 : 0)
            : (aPrice > bPrice ? -1 : aPrice < bPrice ? 1 : 0);
        });

        return {
          ...response,
          results: sortedOffers
        };
      }

      return {
        ...response,
        results: enrichedOffers
      };
    } catch (error) {
      logger.error('Error fetching trait offers:', error);
      throw error;
    }
  }

} // End of class