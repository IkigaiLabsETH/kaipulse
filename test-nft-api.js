// Simple test script for the NFT API endpoint
// Run with: node test-nft-api.js

const http = require('http');

// NFT to test - known to have validation issues
const contractAddress = '0x87d25e5e755b69943572a58936843ffa894afd66';
const tokenId = '1545';
const chain = 'ethereum';

// Call our API endpoint
const url = `http://localhost:3000/api/nfts/${chain}/${contractAddress}/${tokenId}`;
console.log(`Fetching NFT from: ${url}`);

http.get(url, (res) => {
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