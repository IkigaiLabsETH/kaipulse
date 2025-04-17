import { NextResponse } from 'next/server';
import { serverLogger } from '@/utils/serverLogger';

export async function GET() {
  try {
    // Fetch data from CoinGecko API
    const coinGeckoResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
    if (!coinGeckoResponse.ok) {
      throw new Error(`CoinGecko API error: ${coinGeckoResponse.status}`);
    }
    const coinGeckoData = await coinGeckoResponse.json();

    // Fetch data from mempool.space API
    const mempoolResponse = await fetch('https://mempool.space/api/v1/fees/recommended');
    if (!mempoolResponse.ok) {
      throw new Error(`Mempool API error: ${mempoolResponse.status}`);
    }
    const mempoolData = await mempoolResponse.json();

    // Fetch data from Blockchain.com API for hash rate
    const blockchainResponse = await fetch('https://api.blockchain.info/stats');
    if (!blockchainResponse.ok) {
      throw new Error(`Blockchain.com API error: ${blockchainResponse.status}`);
    }
    const blockchainData = await blockchainResponse.json();
    
    // Log the blockchain data to see the structure
    serverLogger.info('Blockchain.com API response:', blockchainData);

    // Fetch data from Alternative.me Fear & Greed Index API
    const fearGreedResponse = await fetch('https://api.alternative.me/fng/');
    if (!fearGreedResponse.ok) {
      throw new Error(`Fear & Greed API error: ${fearGreedResponse.status}`);
    }
    const fearGreedData = await fearGreedResponse.json();

    // Fetch data from Bitnodes API
    const bitnodesResponse = await fetch('https://bitnodes.io/api/v1/snapshots/latest/');
    if (!bitnodesResponse.ok) {
      throw new Error(`Bitnodes API error: ${bitnodesResponse.status}`);
    }
    const bitnodesData = await bitnodesResponse.json();

    // Combine all data into a single response
    const combinedData = {
      price: {
        usd: coinGeckoData.bitcoin.usd,
        change24h: coinGeckoData.bitcoin.usd_24h_change
      },
      network: {
        hashRate: blockchainData.hash_rate / 1e6, // Convert to TH/s
        difficulty: blockchainData.difficulty,
        mempool: {
          fastestFee: mempoolData.fastestFee,
          halfHourFee: mempoolData.halfHourFee,
          hourFee: mempoolData.hourFee
        }
      },
      sentiment: {
        value: fearGreedData.data[0].value,
        classification: fearGreedData.data[0].value_classification
      },
      nodes: {
        total: bitnodesData.total_nodes,
        latestTimestamp: bitnodesData.timestamp
      }
    };

    return NextResponse.json(combinedData);
  } catch (error) {
    serverLogger.error('Error in crypto-data route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch crypto data' },
      { status: error instanceof Response ? error.status : 500 }
    );
  }
} 