import { z } from 'zod';
import { BaseOpenSeaAPI } from './base';
import { nftSchema, nftResponseSchema, nftRaritySchema, collectionNFTSchema, collectionNFTsResponseSchema } from './schemas';
import type { NFT, NFTRarity } from '@/types/opensea';
import type { Chain } from '@/types/web3';
import { chainSchema, addressSchema, tokenIdSchema } from './schemas';
import { logger } from '@/lib/logger';
import { getContractToCollectionMapping, setContractToCollectionMapping } from './cache';

export class OpenSeaNFTAPI extends BaseOpenSeaAPI {
  constructor(apiKey: string) {
    super(apiKey);
  }

  private mapRarity(rarity: z.infer<typeof nftRaritySchema>): NFTRarity {
    return {
      rank: rarity.rank ?? 0,
      score: rarity.score ?? 0,
      strategy_version: rarity.strategy_version ?? '',
      strategy_key: rarity.strategy_key ?? '',
      calculated_at: rarity.calculated_at ?? '',
      max_rank: rarity.max_rank ?? 0,
      total_supply: rarity.total_supply ?? 0
    };
  }

  private mapCollectionNFTResponse(nft: z.infer<typeof collectionNFTSchema>): NFT {
    return {
      identifier: nft.identifier,
      token_id: nft.token_id,
      contract: nft.contract,
      contract_address: nft.contract, // For collection NFTs, contract is the same as contract_address
      chain: 'ethereum', // Collection NFTs are always from ethereum
      collection: nft.collection,
      name: nft.name,
      description: nft.description,
      image_url: nft.image_url,
      external_url: nft.external_url,
      animation_url: nft.animation_url,
      token_standard: nft.token_standard,
      metadata_url: nft.metadata_url,
      background_color: nft.background_color,
      traits: nft.traits
    };
  }

  private mapNFTResponse(nft: unknown): NFT {
    // Use type assertion after basic validation
    const nftData = (typeof nft === 'object' && nft !== null) ? nft as Record<string, unknown> : {};
    
    return {
      identifier: typeof nftData.identifier === 'string' ? nftData.identifier : '',
      token_id: typeof nftData.token_id === 'string' ? nftData.token_id : '',
      contract: typeof nftData.contract === 'string' ? nftData.contract : '',
      contract_address: typeof nftData.contract_address === 'string' ? nftData.contract_address : '',
      chain: (typeof nftData.chain === 'string' && ['ethereum', 'polygon', 'optimism', 'arbitrum', 'base'].includes(nftData.chain)) 
        ? nftData.chain as Chain 
        : 'ethereum',
      collection: typeof nftData.collection === 'string' ? nftData.collection : '',
      name: typeof nftData.name === 'string' ? nftData.name : '',
      description: typeof nftData.description === 'string' ? nftData.description : '',
      image_url: typeof nftData.image_url === 'string' ? nftData.image_url : '',
      external_url: typeof nftData.external_url === 'string' ? nftData.external_url : '',
      animation_url: typeof nftData.animation_url === 'string' ? nftData.animation_url : null,
      token_standard: typeof nftData.token_standard === 'string' ? nftData.token_standard : 'erc721',
      metadata_url: typeof nftData.metadata_url === 'string' ? nftData.metadata_url : '',
      background_color: typeof nftData.background_color === 'string' ? nftData.background_color : '',
      traits: Array.isArray(nftData.traits) ? nftData.traits : [],
      rarity: nftData.rarity && typeof nftData.rarity === 'object' ? this.mapRarity(nftData.rarity as z.infer<typeof nftRaritySchema>) : undefined
    };
  }

  /**
   * Gets a single NFT by contract address and token ID
   */
  async getNFT(params: {
    chain?: string;
    address: string;
    tokenId: string;
  }): Promise<NFT> {
    try {
      // Validate and sanitize inputs
      const validatedParams = this.validateParams(params, z.object({
        chain: chainSchema.optional().default('ethereum'),
        address: addressSchema,
        tokenId: tokenIdSchema
      }));
      
      // Ensure token ID is properly formatted (remove # prefix if present)
      const formattedTokenId = validatedParams.tokenId.replace(/^#/, '');
      
      // Use the formatted token ID
      const endpoint = `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.address}/nfts/${formattedTokenId}`;
      
      try {
        // First try to get the NFT data
        let data;
        try {
          data = await this.request({
            method: 'GET',
            url: endpoint,
            validateResponse: (data) => {
              try {
                return nftResponseSchema.parse(data).nft;
              } catch (parseError) {
                logger.warn('NFT response validation failed, trying to extract raw data', { 
                  error: parseError instanceof Error ? parseError.message : String(parseError),
                  endpoint
                });
                
                // If validation fails, try to extract and return raw data
                if (data && typeof data === 'object' && 'nft' in data) {
                  const rawNFT = data.nft as Record<string, unknown>;
                  
                  // Construct a minimum valid NFT object with defaults for missing fields
                  return {
                    identifier: String(rawNFT.identifier ?? formattedTokenId),
                    token_id: String(rawNFT.token_id ?? formattedTokenId),
                    contract: String(rawNFT.contract ?? validatedParams.address),
                    contract_address: String(rawNFT.contract_address ?? validatedParams.address),
                    chain: validatedParams.chain as 'ethereum' | 'polygon' | 'optimism' | 'arbitrum' | 'base',
                    collection: String(rawNFT.collection ?? ''),
                    name: String(rawNFT.name ?? `NFT #${formattedTokenId}`),
                    description: String(rawNFT.description ?? ''),
                    image_url: String(rawNFT.image_url ?? ''),
                    external_url: String(rawNFT.external_url ?? ''),
                    animation_url: rawNFT.animation_url ? String(rawNFT.animation_url) : null,
                    token_standard: String(rawNFT.token_standard ?? 'erc721'),
                    metadata_url: String(rawNFT.metadata_url ?? ''),
                    background_color: String(rawNFT.background_color ?? ''),
                    traits: Array.isArray(rawNFT.traits) ? rawNFT.traits : []
                  };
                }
                
                // If we can't extract, rethrow
                throw parseError;
              }
            }
          });
        } catch (requestError) {
          logger.error('Failed to fetch NFT data:', {
            error: requestError instanceof Error ? requestError.message : String(requestError),
            endpoint
          });
          
          // Create fallback NFT data
          data = {
            identifier: formattedTokenId,
            token_id: formattedTokenId,
            contract: validatedParams.address,
            contract_address: validatedParams.address,
            chain: validatedParams.chain as 'ethereum' | 'polygon' | 'optimism' | 'arbitrum' | 'base',
            collection: '',
            name: `NFT #${formattedTokenId}`,
            description: 'NFT data unavailable',
            image_url: '/images/placeholder-nft.svg',
            external_url: '',
            animation_url: null,
            token_standard: 'erc721',
            metadata_url: '',
            background_color: '',
            traits: []
          };
        }
  
        // Fetch additional NFT data like current price, offers, etc.
        // This is non-critical, so don't fail if it doesn't work
        let listings: Array<{ price: { current: { value: number } } }> = [];
        try {
          const priceData = await this.request({
            method: 'GET',
            url: `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.address}/nfts/${formattedTokenId}/listings`,
            validateResponse: (data) => z.object({
              listings: z.array(z.object({
                price: z.object({
                  current: z.object({
                    value: z.number()
                  })
                })
              }))
            }).parse(data)
          });
          listings = priceData.listings;
        } catch (listingError) {
          // Non-critical error, continue without listings
          logger.warn('Failed to fetch NFT listings:', listingError);
        }
  
        return {
          ...this.mapNFTResponse(data),
          listings
        };
      } catch (parseError) {
        // Log the specific error that caused the validation to fail
        logger.error('NFT data validation failed:', {
          error: parseError instanceof Error ? parseError.message : String(parseError),
          endpoint,
          params: validatedParams
        });
        
        // Return fallback data instead of throwing
        return {
          identifier: formattedTokenId,
          token_id: formattedTokenId,
          contract: validatedParams.address,
          contract_address: validatedParams.address,
          chain: validatedParams.chain as 'ethereum' | 'polygon' | 'optimism' | 'arbitrum' | 'base',
          collection: '',
          name: `NFT #${formattedTokenId}`,
          description: 'Error fetching NFT data',
          image_url: '/images/placeholder-nft.svg',
          external_url: '',
          animation_url: null,
          token_standard: 'erc721',
          metadata_url: '',
          background_color: '',
          traits: []
        };
      }
    } catch (error) {
      logger.error('Failed to fetch NFT:', {
        params,
        error: error instanceof Error ? error.message : String(error)
      });
      
      // Default fallback
      const fallbackTokenId = params.tokenId.replace(/^#/, '');
      return {
        identifier: fallbackTokenId,
        token_id: fallbackTokenId,
        contract: params.address,
        contract_address: params.address,
        chain: (params.chain || 'ethereum') as 'ethereum' | 'polygon' | 'optimism' | 'arbitrum' | 'base',
        collection: '',
        name: `NFT #${fallbackTokenId}`,
        description: 'Unable to fetch NFT data',
        image_url: '/images/placeholder-nft.svg',
        external_url: '',
        animation_url: null,
        token_standard: 'erc721',
        metadata_url: '',
        background_color: '',
        traits: []
      };
    }
  }

  /**
   * Gets NFTs by collection with pagination
   */
  async getNFTsByCollection(params: {
    collection_slug: string;
    limit?: number;
    next?: string;
    available_for_sale?: boolean;
  }): Promise<{
    nfts: NFT[];
    next: string | null;
  }> {
    const validatedParams = this.validateParams(params, z.object({
      collection_slug: z.string(),
      limit: z.number().optional().default(20),
      next: z.string().optional(),
      available_for_sale: z.boolean().optional()
    }));

    try {
      const rawResponse = await this.request({
        method: 'GET',
        url: `/api/v2/collection/${validatedParams.collection_slug}/nfts`,
        params: validatedParams,
        validateResponse: (data: unknown) => {
          // Log the raw response to help debug
          logger.info('OpenSea raw response:', { data: JSON.stringify(data).substring(0, 500) });
          
          // More lenient validation to handle unexpected response formats
          if (!data || typeof data !== 'object' || !('nfts' in data)) {
            logger.error('Invalid response from OpenSea API - missing nfts array', { data });
            return { nfts: [], next: null };
          }
          
          try {
            return collectionNFTsResponseSchema.parse(data);
          } catch (error) {
            logger.error('Failed to parse OpenSea response:', { error, data });
            const typedData = data as Record<string, unknown>;
            return { 
              nfts: Array.isArray(typedData.nfts) ? typedData.nfts : [], 
              next: typedData.next as string || null 
            };
          }
        }
      });
      
      return {
        next: rawResponse.next,
        nfts: Array.isArray(rawResponse.nfts) 
          ? rawResponse.nfts.map(nft => this.mapCollectionNFTResponse(nft))
          : []
      };
    } catch (error) {
      logger.error('Error in getNFTsByCollection:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        collection_slug: validatedParams.collection_slug
      });
      
      // Return empty result instead of throwing to prevent UI from breaking
      return { nfts: [], next: null };
    }
  }

  /**
   * Gets NFTs owned by an address
   */
  async getNFTsByOwner(params: {
    owner: string;
    chain?: string;
    limit?: number;
    next?: string;
  }): Promise<{
    nfts: NFT[];
    next: string | null;
  }> {
    const validatedParams = this.validateParams(params, z.object({
      owner: addressSchema,
      chain: chainSchema.optional().default('ethereum'),
      limit: z.number().optional().default(20),
      next: z.string().optional()
    }));

    const response = await this.request({
      method: 'GET',
      url: `/api/v2/chain/${validatedParams.chain}/account/${validatedParams.owner}/nfts`,
      params: {
        limit: validatedParams.limit,
        next: validatedParams.next
      },
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          nfts: z.array(nftSchema)
        });
        return schema.parse(data);
      }
    });

    return {
      next: response.next,
      nfts: response.nfts.map(nft => this.mapNFTResponse(nft))
    };
  }

  /**
   * Gets NFTs by contract address with pagination
   */
  async getNFTsByContract(params: {
    contractAddress: string;
    chain?: string;
    limit?: number;
    next?: string;
  }): Promise<{
    nfts: NFT[];
    next: string | null;
  }> {
    try {
      const validatedParams = this.validateParams(params, z.object({
        contractAddress: addressSchema,
        chain: chainSchema.optional().default('ethereum'),
        limit: z.number().optional().default(50),
        next: z.string().optional()
      }));

      // Get collection slug from shared cache
      const cachedSlug = getContractToCollectionMapping(
        validatedParams.chain, 
        validatedParams.contractAddress
      );

      let collectionSlug: string;
      
      if (cachedSlug) {
        logger.info(`Using cached collection slug for contract: ${validatedParams.contractAddress}`);
        collectionSlug = cachedSlug;
      } else {
        // Get contract info to retrieve the collection slug
        const contractData = await this.request({
          method: 'GET',
          url: `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.contractAddress}`,
          validateResponse: (data) => {
            const schema = z.object({
              collection: z.string()
            });
            return schema.parse(data);
          }
        });

        collectionSlug = contractData.collection;
        
        // Save to shared cache
        setContractToCollectionMapping(
          validatedParams.chain,
          validatedParams.contractAddress,
          collectionSlug
        );
      }

      // Then use the collection slug to get the NFTs
      return this.getNFTsByCollection({
        collection_slug: collectionSlug,
        limit: validatedParams.limit,
        next: validatedParams.next
      });
    } catch (error) {
      logger.error('Failed to fetch NFTs by contract:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        params
      });
      throw error;
    }
  }
} 