/* eslint-disable no-console, no-restricted-globals */

import { logger } from '@/lib/logger';

// Constants
const DEFAULT_LIMIT = 50;
const MAINNET_BASE_URL = 'https://api.opensea.io';
const TESTNET_BASE_URL = 'https://testnets-api.opensea.io';

// Utility function for delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Error class
export class OpenSeaAPIError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'OpenSeaAPIError';
  }
}

// Base interfaces
interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

interface PaginatedResponse<T> {
  next: string | null;
  previous: string | null;
  results: T[];
  data: T[];  // Alias for results to maintain backward compatibility
}

// Contract response interface
interface ContractResponse {
  collection?: string;
  name?: string;
  description?: string;
  [key: string]: string | number | boolean | null | undefined; // More specific types for additional fields
}

// OpenSea specific interfaces
import type { 
  OpenSeaCollection, 
  OpenSeaCollectionTraits,
  OpenSeaCollectionStats,
  OpenSeaEvent,
  OpenSeaNFT,
  OpenSeaListing,
  OpenSeaOffer,
  OpenSeaAccount
} from '@/services/opensea/types';

export type { 
  OpenSeaCollection, 
  OpenSeaCollectionTraits,
  OpenSeaCollectionStats,
  OpenSeaEvent,
  OpenSeaNFT,
  OpenSeaListing,
  OpenSeaOffer,
  OpenSeaAccount
};

// Main API class
export class OpenSeaAPI {
  private baseURL: string;
  private apiKey?: string;

  constructor(options: { testnet?: boolean; apiKey?: string } = {}) {
    this.baseURL = options.testnet ? TESTNET_BASE_URL : MAINNET_BASE_URL;
    this.apiKey = options.apiKey;

    if (!this.apiKey) {
      logger.error('OpenSea API key is not configured');
      throw new OpenSeaAPIError('OpenSea API key is required but not configured. Please set NEXT_PUBLIC_OPENSEA_API_KEY in your environment.');
    }
  }

  private async fetchWithRetry<T>(
    endpoint: string,
    queryParams: QueryParams = {},
    retries = 3,
    delay = 1000
  ): Promise<T> {
    const url = new URL(endpoint, this.baseURL);
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });

    const headers: HeadersInit = {
      'Accept': 'application/json'
    };

    if (this.apiKey) {
      headers['x-api-key'] = this.apiKey;
      logger.info('API request headers configured:', {
        endpoint,
        hasApiKey: true,
        apiKeyLength: this.apiKey.length
      });
    } else {
      logger.warn('Making API request without API key:', { endpoint });
    }

    logger.info('OpenSea API Request:', {
      method: 'GET',
      url: url.toString().replace(this.apiKey || '', '***'),
      hasApiKey: !!this.apiKey,
      queryParams
    });

    let lastError: Error | null = null;
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        logger.info(`API Request Attempt ${attempt + 1}/${retries}:`, { endpoint });
        const response = await fetch(url.toString(), { 
          method: 'GET',
          headers 
        });
        
        const responseText = await response.text();
        
        logger.info('API Response received:', {
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get('content-type'),
          responseLength: responseText.length
        });

        if (!response.ok) {
          const errorDetails = {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            body: responseText,
            url: url.toString().replace(this.apiKey || '', '***')
          };
          
          logger.error('OpenSea API Error Response:', errorDetails);
          
          // Parse error response if possible
          try {
            const errorJson = JSON.parse(responseText);
            throw new OpenSeaAPIError(
              `OpenSea API Error (${response.status}): ${JSON.stringify(errorJson)}`,
              response.status
            );
          } catch (e) {
            throw new OpenSeaAPIError(
              `OpenSea API Error (${response.status}): ${responseText}`,
              response.status
            );
          }
        }

        let data;
        try {
          data = JSON.parse(responseText);
          if (data.results && !data.data) {
            data.data = data.results;
          }
          
          logger.info('API Response parsed successfully:', {
            endpoint,
            dataKeys: Object.keys(data),
            hasResults: !!data.results,
            resultCount: data.results?.length
          });
          
          return data;
        } catch (e) {
          logger.error('Failed to parse API response:', {
            error: e instanceof Error ? e.message : 'Unknown error',
            responseText: responseText.slice(0, 200) + '...' // Log first 200 chars
          });
          throw new Error(`Invalid JSON response: ${responseText}`);
        }
      } catch (error) {
        lastError = error as Error;
        logger.error(`API Request Failed (Attempt ${attempt + 1}/${retries}):`, {
          endpoint,
          error: lastError.message,
          stack: lastError.stack
        });
        
        if (attempt < retries - 1) {
          const backoffDelay = delay * Math.pow(2, attempt);
          logger.info(`Retrying request in ${backoffDelay}ms...`, { endpoint });
          await sleep(backoffDelay);
        }
      }
    }

    throw lastError || new Error('Failed to fetch from OpenSea API');
  }

  /**
   * Get a single collection including details such as fees, traits, and links.
   * @param slugOrAddress - The collection slug (i.e. "doodles-official") or contract address
   * @returns Collection details including stats, fees, and metadata
   * @throws {OpenSeaAPIError} If the collection is not found or there's an API error
   */
  async getCollection(slugOrAddress: string): Promise<OpenSeaCollection> {
    // Check if it's a contract address
    const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(slugOrAddress);
    
    try {
      if (isContractAddress) {
        logger.info('Fetching collection by contract address:', { address: slugOrAddress });
        
        // First get the collection details from the contract endpoint
        const response = await this.fetchWithRetry<any>(
          `/api/v2/chain/ethereum/contract/${slugOrAddress.toLowerCase()}`
        );
        
        logger.info('Contract API Response:', {
          hasResponse: !!response,
          responseKeys: Object.keys(response || {}),
          hasCollection: !!response?.collection,
          collectionData: response?.collection
        });

        // Handle different response formats
        let collectionSlug: string | undefined;
        
        if (response?.collection?.slug) {
          // New format where slug is directly in the collection object
          collectionSlug = response.collection.slug;
        } else if (response?.collection) {
          // Old format where collection might be the slug itself
          collectionSlug = typeof response.collection === 'string' ? response.collection : undefined;
        }

        if (!collectionSlug) {
          logger.error('No collection slug found in response:', { response });
          throw new Error('No collection slug found in OpenSea API response');
        }

        logger.info('Found collection slug:', { collectionSlug });

        // Now fetch the full collection data
        const collectionResponse = await this.fetchWithRetry<any>(
          `/api/v2/collections/${collectionSlug}`
        );

        logger.info('Collection API Response:', {
          hasResponse: !!collectionResponse,
          responseKeys: Object.keys(collectionResponse || {}),
          hasCollection: !!collectionResponse?.collection
        });

        if (!collectionResponse?.collection) {
          throw new Error('Collection data not found in response');
        }

        return collectionResponse.collection;
      }

      // If it's a slug, fetch directly
      logger.info('Fetching collection by slug:', { slug: slugOrAddress });
      const response = await this.fetchWithRetry<any>(
        `/api/v2/collections/${slugOrAddress.toLowerCase()}`
      );

      logger.info('Collection API Response:', {
        hasResponse: !!response,
        responseKeys: Object.keys(response || {}),
        hasCollection: !!response?.collection
      });

      if (!response?.collection) {
        throw new Error('Collection data not found in response');
      }

      return response.collection;
    } catch (error) {
      logger.error('Failed to fetch collection:', { 
        slugOrAddress,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      throw error;
    }
  }

  async getCollectionByContract(chain: string, address: string): Promise<OpenSeaCollection> {
    return this.fetchWithRetry<OpenSeaCollection>(`/api/v2/chain/${chain}/contract/${address.toLowerCase()}`);
  }

  async getCollectionStatsByContract(chain: string, address: string): Promise<OpenSeaCollectionStats> {
    const collection = await this.getCollectionByContract(chain, address);
    if (!collection.stats) {
      throw new Error('Collection stats not available');
    }
    return collection.stats;
  }

  async getCollectionTraits(chain: string, address: string): Promise<OpenSeaCollectionTraits> {
    return this.fetchWithRetry<OpenSeaCollectionTraits>(`/api/v2/chain/${chain}/contract/${address.toLowerCase()}/traits`);
  }

  async getNFTsByContract(params: {
    chain: string;
    address: string;
    limit?: number;
    next?: string;
    token_ids?: string[];
    include_orders?: boolean;
    order_by?: string;
    order_direction?: string;
  }): Promise<PaginatedResponse<OpenSeaNFT>> {
    const { chain, address, limit = DEFAULT_LIMIT, next, token_ids, ...rest } = params;
    return this.fetchWithRetry<PaginatedResponse<OpenSeaNFT>>(
      `/api/v2/chain/${chain}/contract/${address.toLowerCase()}/nfts`,
      { limit, next, token_ids: token_ids?.join(','), ...rest }
    );
  }

  async getNFTsByCollection(params: {
    collection: string;
    limit?: number;
    next?: string;
    include_orders?: boolean;
    order_by?: string;
    order_direction?: string;
  }): Promise<PaginatedResponse<OpenSeaNFT>> {
    const { collection, limit = DEFAULT_LIMIT, next, ...rest } = params;
    return this.fetchWithRetry<PaginatedResponse<OpenSeaNFT>>(
      `/api/v2/collection/${collection.toLowerCase()}/nfts`,
      { limit, next, ...rest }
    );
  }

  async getNFT(params: {
    chain: string;
    address: string;
    identifier: string;
    include_orders?: boolean;
  }): Promise<OpenSeaNFT> {
    const { chain, address, identifier, ...rest } = params;
    const url = `/api/v2/chain/${chain}/contract/${address.toLowerCase()}/nfts/${identifier}`;
    
    logger.info('Fetching NFT:', { url, params });
    
    const response = await this.fetchWithRetry<any>(url, rest);
    
    logger.info('NFT API Response:', {
      hasResponse: !!response,
      responseKeys: Object.keys(response || {}),
      hasNft: !!response?.nft,
      nftData: response?.nft ? {
        identifier: response.nft.identifier,
        name: response.nft.name,
        hasImageUrl: !!response.nft.image_url,
        hasTraits: Array.isArray(response.nft.traits)
      } : null
    });

    // Handle different response formats
    let nft: OpenSeaNFT | undefined;
    
    if (response?.nft) {
      // New format where NFT is nested under 'nft' key
      nft = response.nft;
    } else if (response?.identifier) {
      // Old format where NFT data is at the root
      nft = response;
    }

    if (!nft) {
      logger.error('NFT data not found in response:', { response });
      throw new OpenSeaAPIError('NFT not found in response');
    }

    // Ensure required fields are present
    if (!nft.identifier || !nft.contract) {
      logger.error('Invalid NFT data:', { nft });
      throw new OpenSeaAPIError('Invalid NFT data received from API');
    }

    return nft;
  }

  /**
   * Get a single NFT by collection slug and token ID
   * @param params.collection - Collection slug (e.g., "boredapeyachtclub")
   * @param params.identifier - Token ID
   * @param params.include_orders - Whether to include orders
   */
  async getNFTByCollection(params: {
    collection: string;
    identifier: string;
    include_orders?: boolean;
  }): Promise<OpenSeaNFT> {
    const { collection, identifier, ...rest } = params;
    return this.fetchWithRetry<OpenSeaNFT>(
      `/api/v2/collection/${collection.toLowerCase()}/nfts/${identifier}`,
      rest
    );
  }

  async getBestListing(contractAddress: string, tokenId: string): Promise<PaginatedResponse<OpenSeaListing>> {
    const response = await this.fetchWithRetry<{ listings: OpenSeaListing[] }>(
      `/api/v2/chain/ethereum/contract/${contractAddress.toLowerCase()}/nfts/${tokenId}/listings`,
      { limit: 1, order_by: 'eth_price', order_direction: 'asc' }
    );

    return {
      next: null,
      previous: null,
      results: response.listings || [],
      data: response.listings || []
    };
  }

  async getBestOffer(contractAddress: string, tokenId: string): Promise<PaginatedResponse<OpenSeaOffer>> {
    const response = await this.fetchWithRetry<{ offers: OpenSeaOffer[] }>(
      `/api/v2/chain/ethereum/contract/${contractAddress.toLowerCase()}/nfts/${tokenId}/offers`,
      { limit: 1, order_by: 'eth_price', order_direction: 'desc' }
    );

    return {
      next: null,
      previous: null,
      results: response.offers || [],
      data: response.offers || []
    };
  }

  async getNFTEvents(contractAddress: string, tokenId: string, params: {
    limit?: number;
    next?: string;
    event_type?: string;
  } = {}): Promise<PaginatedResponse<OpenSeaEvent>> {
    const { limit = DEFAULT_LIMIT, next, event_type } = params;
    
    logger.info('Fetching NFT events:', {
      contractAddress,
      tokenId,
      limit,
      event_type,
      next
    });

    // Use the correct events endpoint for NFTs
    const response = await this.fetchWithRetry<any>(
      `/api/v2/events/chain/ethereum/contract/${contractAddress.toLowerCase()}/nfts/${tokenId}`,
      { 
        limit,
        next,
        event_types: event_type
      }
    );

    // Log the raw response for debugging
    logger.info('Raw NFT events response:', {
      responseKeys: Object.keys(response),
      responseType: typeof response,
      hasEvents: Array.isArray(response),
      sampleEvent: Array.isArray(response) ? response[0] : null
    });

    // Handle both array and object response formats
    let events: OpenSeaEvent[] = [];
    if (Array.isArray(response)) {
      events = response;
    } else if (response.events) {
      events = response.events;
    } else if (response.asset_events) {
      events = response.asset_events;
    }

    logger.info('Processed NFT events:', {
      eventCount: events.length,
      eventTypes: events.map(e => e.event_type),
      firstEvent: events[0]
    });

    return {
      next: null,
      previous: null,
      results: events,
      data: events
    };
  }

  /**
   * Get an OpenSea Account Profile including details such as bio, social media usernames, and profile image.
   * @param addressOrUsername - Ethereum address or OpenSea username
   * @returns OpenSea account details
   */
  async getAccount(addressOrUsername: string): Promise<OpenSeaAccount> {
    return this.fetchWithRetry<OpenSeaAccount>(
      `/accounts/${addressOrUsername.toLowerCase()}`
    );
  }

  /**
   * Get a list of OpenSea collections with optional filtering and pagination.
   * @param params - Query parameters for filtering and pagination
   * @returns Paginated list of collections
   */
  async getCollections(params: {
    chain?: string;
    include_hidden?: boolean;
    limit?: number;
    next?: string;
    order_by?: 'created_date' | 'name' | 'sale_count' | 'floor_price';
    order_direction?: 'asc' | 'desc';
  } = {}): Promise<PaginatedResponse<OpenSeaCollection>> {
    const { chain = 'ethereum', limit = DEFAULT_LIMIT, ...rest } = params;
    return this.fetchWithRetry<PaginatedResponse<OpenSeaCollection>>(
      '/collections',
      { chain, limit, ...rest }
    );
  }

  /**
   * Flexible method to get NFTs by either collection slug or contract address.
   * @param params.collection - Collection slug (e.g., "doodles-official")
   * @param params.chain - Chain name (required when using contract address)
   * @param params.contract - Contract address
   * @param params.limit - Number of NFTs to return per page
   * @param params.next - Pagination cursor
   * @param params.include_orders - Include orders information
   * @param params.order_by - Sort field
   * @param params.order_direction - Sort direction
   * @returns Paginated list of NFTs
   */
  async getNFTs(params: {
    collection?: string;
    chain?: string;
    contract?: string;
    limit?: number;
    next?: string;
    include_orders?: boolean;
    order_by?: string;
    order_direction?: string;
  }): Promise<PaginatedResponse<OpenSeaNFT>> {
    const { collection, chain = 'ethereum', contract, limit = DEFAULT_LIMIT, ...rest } = params;

    // If collection slug is provided, use getNFTsByCollection
    if (collection) {
      return this.getNFTsByCollection({
        collection,
        limit,
        ...rest
      });
    }

    // If contract address is provided, use getNFTsByContract
    if (contract) {
      return this.getNFTsByContract({
        chain,
        address: contract,
        limit,
        ...rest
      });
    }

    throw new Error('Either collection slug or contract address must be provided');
  }
}