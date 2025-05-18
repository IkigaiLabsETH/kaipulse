import { BaseOpenSeaAPI } from './base';
import { OpenSeaNFTAPI } from './nft';
import { OpenSeaEventsAPI } from './events';
import { CollectionService } from './collection';
import { OpenSeaOrdersAPI } from './orders';
import type { Collection } from '@/types/opensea';

export class OpenSeaAPI extends BaseOpenSeaAPI {
  public readonly nft: OpenSeaNFTAPI;
  public readonly events: OpenSeaEventsAPI;
  public readonly collections: CollectionService;
  public readonly orders: OpenSeaOrdersAPI;

  constructor(apiKey: string) {
    super(apiKey);
    this.nft = new OpenSeaNFTAPI(apiKey);
    this.events = new OpenSeaEventsAPI(apiKey);
    this.collections = new CollectionService(apiKey);
    this.orders = new OpenSeaOrdersAPI(apiKey);
  }

  async getCollection(slug: string): Promise<Collection> {
    const collectionData = await this.collections.getCollection({ slug });
    const { collection } = collectionData;
    
    return {
      // BaseAsset properties
      name: collection.name,
      description: collection.description || '',
      image_url: collection.image_url || '',
      external_url: collection.external_url || '',
      
      // Collection properties
      slug: collection.slug,
      banner_image_url: collection.banner_image_url || '',
      safelist_status: collection.safelist_request_status || '',
      category: 'art', // Default category since it's not available in the API response
      contract_address: collectionData.address || '',
      is_nsfw: collection.is_nsfw,
      discord_url: collection.discord_url || '',
      telegram_url: collection.telegram_url || '',
      twitter_username: collection.twitter_username || '',
      instagram_username: collection.instagram_username || '',
      wiki_url: collection.wiki_url || '',
      opensea_url: `https://opensea.io/collection/${collection.slug}`,
      project_url: collection.external_url || '',
      stats: collection.stats || {
        total_supply: 0,
        total_listings: 0,
        total_volume: 0,
        floor_price: 0,
        num_owners: 0,
        market_cap: 0
      }
    };
  }
} 