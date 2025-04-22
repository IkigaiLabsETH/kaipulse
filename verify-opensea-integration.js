/**
 * OpenSea API Integration Verification Script
 * 
 * This script provides a comprehensive check of the OpenSea API integration.
 * It tests:
 * 1. API endpoints (collection and NFTs)
 * 2. Caching mechanism
 * 3. Data structure validation
 * 4. Browser verification links
 */

const axios = require('axios');
const { exec } = require('child_process');
const os = require('os');

const BASE_URL = 'http://localhost:3000';
const BAYC_CONTRACT = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
const ALT_CONTRACT = '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e'; // Doodles contract

// Colors for console output
const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

// Helper function to pretty-print headers
function formatHeaders(headers) {
  return Object.entries(headers)
    .filter(([key]) => ['cache-control', 'x-cache', 'content-type'].includes(key.toLowerCase()))
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n    ');
}

// Helper function to open URLs in browser
function openInBrowser(url) {
  const platform = os.platform();
  let command;

  if (platform === 'darwin') {
    command = `open "${url}"`;
  } else if (platform === 'win32') {
    command = `start "${url}"`;
  } else {
    command = `xdg-open "${url}"`;
  }

  exec(command, (error) => {
    if (error) {
      console.error(`Error opening browser: ${error.message}`);
    }
  });
}

// Test the collection endpoint
async function testCollectionEndpoint(contract) {
  console.log(`\n${COLORS.bright}Testing collection endpoint for ${contract}...${COLORS.reset}`);
  try {
    // First request to check normal response
    console.log(`${COLORS.dim}Making first request...${COLORS.reset}`);
    const firstResponse = await axios.get(`${BASE_URL}/api/collections/contract/${contract}`);
    
    const data = firstResponse.data;
    console.log(`${COLORS.green}✅ Collection data received:${COLORS.reset}`);
    console.log(`   Name: ${data.name || data.collection?.name}`);
    console.log(`   Image URL: ${data.image_url || data.collection?.image_url}`);
    
    // Check for essential fields
    const essentialFields = ['name', 'image_url', 'description'];
    const missingFields = essentialFields.filter(field => 
      !(data[field] || data.collection?.[field])
    );
    
    if (missingFields.length === 0) {
      console.log(`${COLORS.green}✅ All essential fields present${COLORS.reset}`);
    } else {
      console.log(`${COLORS.yellow}⚠️ Missing fields: ${missingFields.join(', ')}${COLORS.reset}`);
    }
    
    // Check response headers
    console.log(`${COLORS.cyan}Response headers:${COLORS.reset}`);
    console.log(`    ${formatHeaders(firstResponse.headers)}`);
    
    // Make a second request to test caching
    console.log(`\n${COLORS.dim}Making second request to test caching...${COLORS.reset}`);
    const secondResponse = await axios.get(`${BASE_URL}/api/collections/contract/${contract}`);
    
    // Check if x-cache header indicates a cache hit
    const isFromCache = secondResponse.headers['x-cache'] === 'HIT';
    if (isFromCache) {
      console.log(`${COLORS.green}✅ Caching works correctly (X-Cache: HIT)${COLORS.reset}`);
    } else {
      console.log(`${COLORS.yellow}⚠️ Caching may not be working (X-Cache: ${secondResponse.headers['x-cache'] || 'not set'})${COLORS.reset}`);
    }
    
    return { success: true, data };
  } catch (error) {
    console.error(`${COLORS.red}❌ Error testing collection endpoint:${COLORS.reset}`, error.message);
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Data: ${JSON.stringify(error.response.data, null, 2)}`);
    }
    return { success: false, error: error.message };
  }
}

// Test the NFTs endpoint
async function testNFTsEndpoint(contract) {
  console.log(`\n${COLORS.bright}Testing NFTs endpoint for ${contract}...${COLORS.reset}`);
  try {
    // First request to check normal response
    console.log(`${COLORS.dim}Making first request...${COLORS.reset}`);
    const firstResponse = await axios.get(`${BASE_URL}/api/collections/contract/${contract}/nfts`);
    
    const data = firstResponse.data;
    const nftCount = data.nfts?.length || 0;
    
    console.log(`${COLORS.green}✅ Retrieved ${nftCount} NFTs${COLORS.reset}`);
    
    if (nftCount > 0) {
      const firstNFT = data.nfts[0];
      console.log(`   First NFT: ${firstNFT.name} (ID: ${firstNFT.token_id})`);
      console.log(`   Traits: ${firstNFT.traits?.length || 0}`);
      
      // Validate NFT data structure
      const requiredNFTFields = ['name', 'image_url', 'token_id'];
      const missingFields = requiredNFTFields.filter(field => !firstNFT[field]);
      
      if (missingFields.length === 0) {
        console.log(`${COLORS.green}✅ NFT data structure is valid${COLORS.reset}`);
      } else {
        console.log(`${COLORS.yellow}⚠️ NFT missing fields: ${missingFields.join(', ')}${COLORS.reset}`);
      }
    } else {
      console.log(`${COLORS.yellow}⚠️ No NFTs returned${COLORS.reset}`);
    }
    
    // Check pagination
    if (data.next !== undefined) {
      console.log(`${COLORS.green}✅ Pagination field present${COLORS.reset}`);
    } else {
      console.log(`${COLORS.yellow}⚠️ Pagination field missing${COLORS.reset}`);
    }
    
    // Check response headers
    console.log(`${COLORS.cyan}Response headers:${COLORS.reset}`);
    console.log(`    ${formatHeaders(firstResponse.headers)}`);
    
    // Make a second request to test caching
    console.log(`\n${COLORS.dim}Making second request to test caching...${COLORS.reset}`);
    const secondResponse = await axios.get(`${BASE_URL}/api/collections/contract/${contract}/nfts`);
    
    // Check if x-cache header indicates a cache hit
    const isFromCache = secondResponse.headers['x-cache'] === 'HIT';
    if (isFromCache) {
      console.log(`${COLORS.green}✅ Caching works correctly (X-Cache: HIT)${COLORS.reset}`);
    } else {
      console.log(`${COLORS.yellow}⚠️ Caching may not be working (X-Cache: ${secondResponse.headers['x-cache'] || 'not set'})${COLORS.reset}`);
    }
    
    return { success: true, data };
  } catch (error) {
    console.error(`${COLORS.red}❌ Error testing NFTs endpoint:${COLORS.reset}`, error.message);
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Data: ${JSON.stringify(error.response.data, null, 2)}`);
    }
    return { success: false, error: error.message };
  }
}

// Generate browser verification links
function generateBrowserLinks() {
  console.log(`\n${COLORS.bright}Browser Verification Links:${COLORS.reset}`);
  
  const pages = [
    { name: 'Collection Page', url: `${BASE_URL}/collections/${BAYC_CONTRACT}` },
    { name: 'Art Collection Page', url: `${BASE_URL}/art` },
    { name: 'API Collection (JSON)', url: `${BASE_URL}/api/collections/contract/${BAYC_CONTRACT}` },
    { name: 'API NFTs (JSON)', url: `${BASE_URL}/api/collections/contract/${BAYC_CONTRACT}/nfts` },
  ];
  
  pages.forEach((page, index) => {
    console.log(`${index + 1}. ${COLORS.cyan}${page.name}${COLORS.reset}: ${page.url}`);
  });
  
  // Ask if user wants to open these in browser
  console.log(`\n${COLORS.yellow}Would you like to open these pages in your browser? (y/n)${COLORS.reset}`);
  process.stdin.once('data', data => {
    const answer = data.toString().trim().toLowerCase();
    if (answer === 'y' || answer === 'yes') {
      pages.forEach(page => {
        console.log(`Opening ${page.name}...`);
        openInBrowser(page.url);
      });
    }
    
    console.log(`\n${COLORS.bright}Next Steps:${COLORS.reset}`);
    console.log(`1. Check for any console errors in browser developer tools`);
    console.log(`2. Verify image alt attributes are correctly set`);
    console.log(`3. Confirm there are no ethereum property conflicts`);
    
    // Exit the script
    process.exit(0);
  });
}

// Main function
async function main() {
  console.log(`${COLORS.bright}🧪 OpenSea API Integration Verification${COLORS.reset}\n`);
  
  // Test primary collection (BAYC)
  const baycCollectionResult = await testCollectionEndpoint(BAYC_CONTRACT);
  const baycNFTsResult = await testNFTsEndpoint(BAYC_CONTRACT);
  
  // Test alternate collection (Doodles)
  const altCollectionResult = await testCollectionEndpoint(ALT_CONTRACT);
  
  // Summary
  console.log(`\n${COLORS.bright}📊 Verification Results Summary:${COLORS.reset}`);
  console.log(`${baycCollectionResult.success ? COLORS.green + '✅' : COLORS.red + '❌'} BAYC Collection Endpoint${COLORS.reset}`);
  console.log(`${baycNFTsResult.success ? COLORS.green + '✅' : COLORS.red + '❌'} BAYC NFTs Endpoint${COLORS.reset}`);
  console.log(`${altCollectionResult.success ? COLORS.green + '✅' : COLORS.red + '❌'} Alternative Collection Endpoint${COLORS.reset}`);
  
  const allPassed = baycCollectionResult.success && baycNFTsResult.success && altCollectionResult.success;
  
  if (allPassed) {
    console.log(`\n${COLORS.green}${COLORS.bright}🎉 All API endpoints are working correctly!${COLORS.reset}`);
  } else {
    console.log(`\n${COLORS.yellow}${COLORS.bright}⚠️ Some endpoints had issues. Check the logs above for details.${COLORS.reset}`);
  }
  
  // Generate browser verification links
  generateBrowserLinks();
}

// Run the tests
main().catch(error => {
  console.error(`${COLORS.red}Unhandled error:${COLORS.reset}`, error);
  process.exit(1);
}); 