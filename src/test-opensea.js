import fetch from 'node-fetch';
import { logger } from './lib/logger';

async function testOpenSeaAPI() {
  const OPENSEA_API_KEY = 'fa68580b01364bdc9f5dc278fe8aa3f8';
  const OPENSEA_API_URL = 'https://api.opensea.io/v2';

  try {
    // Test a simple API endpoint
    const response = await fetch(`${OPENSEA_API_URL}/chain/ethereum/contract/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d`, {
      headers: {
        'X-API-KEY': OPENSEA_API_KEY,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    logger.info('API Test Result:', data);
    logger.info('API is working correctly!');
  } catch (error) {
    logger.error('API Test Error:', error.message);
  }
}

testOpenSeaAPI(); 