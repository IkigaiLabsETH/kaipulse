// Script to test our OpenSea API endpoints
// Use axios instead of node-fetch
const axios = require('axios');
const https = require('https');

const BASE_URL = 'http://localhost:3000';
const BAYC_CONTRACT = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

// NFT to test - known to have validation issues
const contractAddress = '0x87d25e5e755b69943572a58936843ffa894afd66';
const tokenId = '1545';
const chain = 'ethereum';

async function testCollectionEndpoint() {
  console.log('Testing collection endpoint...');
  try {
    const response = await axios.get(`${BASE_URL}/api/collections/contract/${BAYC_CONTRACT}`);
    
    const data = response.data;
    console.log('Collection data:');
    console.log('- Name:', data.name || data.collection?.name);
    console.log('- Description:', (data.description || data.collection?.description || '').substring(0, 100) + '...');
    console.log('- Image URL:', data.image_url || data.collection?.image_url);
    
    // Check if we have essential fields
    const hasEssentialFields = 
      (data.name || data.collection?.name) && 
      (data.image_url || data.collection?.image_url);
    
    console.log('Has essential fields:', hasEssentialFields ? 'Yes' : 'No');
    console.log('Response status:', response.status);
    console.log('Cache header:', response.headers['cache-control']);
    console.log('X-Cache header:', response.headers['x-cache']);
    
    return { success: true, data };
  } catch (error) {
    console.error('Error testing collection endpoint:', error.message);
    return { success: false, error: error.message };
  }
}

async function testNFTsEndpoint() {
  console.log('\nTesting NFTs endpoint...');
  try {
    const response = await axios.get(`${BASE_URL}/api/collections/contract/${BAYC_CONTRACT}/nfts`);
    
    const data = response.data;
    console.log('NFTs data:');
    console.log('- Total NFTs:', data.nfts?.length || 0);
    
    if (data.nfts && data.nfts.length > 0) {
      console.log('- First NFT name:', data.nfts[0].name);
      console.log('- First NFT image:', data.nfts[0].image_url);
      console.log('- First NFT traits:', data.nfts[0].traits?.length || 0);
    }
    
    console.log('Has pagination info:', data.next !== undefined ? 'Yes' : 'No');
    console.log('Response status:', response.status);
    console.log('Cache header:', response.headers['cache-control']);
    console.log('X-Cache header:', response.headers['x-cache']);
    
    return { success: true, data };
  } catch (error) {
    console.error('Error testing NFTs endpoint:', error.message);
    return { success: false, error: error.message };
  }
}

async function testNFTAPI() {
  console.log('\nTesting NFT API endpoint...');
  try {
    const url = `http://localhost:3000/api/nfts/${chain}/${contractAddress}/${tokenId}`;
    console.log(`Fetching NFT from: ${url}`);

    https.get(url, (res) => {
      let data = '';

      console.log(`Status: ${res.statusCode}`);
      
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          console.log('Response from API:');
          console.log(JSON.stringify(response, null, 2));

          if (response.nft) {
            console.log('\nNFT found with properties:');
            Object.keys(response.nft).forEach(key => {
              const value = response.nft[key];
              console.log(`- ${key}: ${typeof value === 'object' ? 'Object' : value}`);
            });
          } else {
            console.log('No NFT data returned');
          }
        } catch (error) {
          console.error('Error parsing response:', error);
          console.log('Raw response:', data);
        }
      });
    }).on('error', (err) => {
      console.error('Error:', err.message);
    });

    return { success: true, data: { url } };
  } catch (error) {
    console.error('Error testing NFT API endpoint:', error.message);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🧪 OpenSea API Endpoints Test\n');
  
  // Test collection endpoint
  const collectionResult = await testCollectionEndpoint();
  
  // Test NFTs endpoint
  const nftsResult = await testNFTsEndpoint();
  
  // Test NFT API
  const nftAPIResult = await testNFTAPI();
  
  console.log('\n📊 Test Results Summary:');
  console.log('- Collection Endpoint:', collectionResult.success ? '✅ Success' : '❌ Failed');
  console.log('- NFTs Endpoint:', nftsResult.success ? '✅ Success' : '❌ Failed');
  console.log('- NFT API:', nftAPIResult.success ? '✅ Success' : '❌ Failed');
  
  if (collectionResult.success && nftsResult.success && nftAPIResult.success) {
    console.log('\n🎉 All endpoints are working correctly!');
  } else {
    console.log('\n⚠️ Some endpoints failed the test. Check the logs above for details.');
  }
}

// Run the tests
main().catch(error => {
  console.error('Unhandled error during tests:', error);
}); 