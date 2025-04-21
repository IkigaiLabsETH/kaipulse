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
    return this.collections.getCollection({ slug });
  }
} 