import { openSeaService } from '../services/opensea';
import { testLogger as log } from '../utils/test-logger';
import type { OpenSeaEventDetails } from '../services/opensea/types';

async function testOpenSeaAPI() {
  const contractAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'; // BAYC

  log.log('Testing OpenSea API integration...\n');

  try {
    log.log('1. Fetching collection details...');
    const collection = await openSeaService.getCollection(contractAddress);
    log.log('✓ Collection details:', {
      name: collection.name,
      description: collection.description?.slice(0, 100) + '...' || 'No description available',
    });

    log.log('\n2. Fetching collection stats...');
    const stats = collection.stats;
    if (stats) {
      log.log('✓ Collection stats:', {
        floor_price: stats.floor_price,
        total_volume: stats.total_volume,
        num_owners: stats.num_owners,
      });
    } else {
      log.log('⚠️ No stats available for this collection');
    }

    log.log('\n3. Fetching recent events...');
    const events = await openSeaService.events.getEventsByCollection({ collection_slug: contractAddress, limit: 3 });
    log.log('✓ Recent events:', events.events.map((event: OpenSeaEventDetails) => ({
      type: event.event_type,
      price: event.payment?.price_usd,
      date: event.created_date,
    })));

    log.log('\n4. Fetching NFTs...');
    const nfts = await openSeaService.nft.getNFTsByContract({ contractAddress, limit: 3 });
    log.log('✓ NFTs:', nfts.nfts.map(nft => ({
      id: nft.identifier,
      name: nft.name,
    })));

    log.log('\n✅ All tests passed! OpenSea API is working correctly.');
  } catch (error) {
    log.error('\n❌ Error testing OpenSea API:', error);
    process.exit(1);
  }
}

testOpenSeaAPI(); 