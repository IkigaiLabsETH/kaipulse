import { getOpenSeaAPI } from '../services/opensea';
import { testLogger as log } from '../utils/test-logger';

async function testOpenSeaAPI() {
  const api = getOpenSeaAPI();
  const contractAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'; // BAYC

  log.log('Testing OpenSea API integration...\n');

  try {
    log.log('1. Fetching collection details...');
    const collection = await api.getCollection(contractAddress);
    log.log('✓ Collection details:', {
      name: collection.name,
      description: collection.description.slice(0, 100) + '...',
    });

    log.log('\n2. Fetching collection stats...');
    const stats = await api.getCollectionStats(contractAddress);
    log.log('✓ Collection stats:', {
      floor_price: stats.floor_price,
      total_volume: stats.total_volume,
      num_owners: stats.num_owners,
    });

    log.log('\n3. Fetching recent events...');
    const events = await api.getCollectionEvents(contractAddress, { limit: 3 });
    log.log('✓ Recent events:', events.results.map(event => ({
      type: event.type,
      price: event.price?.current.value,
      date: event.created_date,
    })));

    log.log('\n4. Fetching NFTs...');
    const nfts = await api.getCollectionNFTs(contractAddress, { limit: 3 });
    log.log('✓ NFTs:', nfts.results.map(nft => ({
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