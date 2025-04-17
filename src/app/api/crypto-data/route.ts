import { NextResponse } from 'next/server';
import { serverLogger } from '@/utils/serverLogger';

const BLOCKCHAIN_API = 'https://api.blockchain.info';
const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const ALTERNATIVE_API = 'https://api.alternative.me';
const MEMPOOL_API = 'https://mempool.space/api';

interface CryptoResponse {
  price: {
    usd: number | null;
    change24h: number | null;
  };
  network: {
    hashRate: number | null;
    difficulty: number | null;
    blockHeight: number | null;
    avgBlockTime: number | null;
    avgBlockSize: number | null;
    totalBTC: number | null;
    marketCap: number | null;
    nextHalving: {
      blocks: number | null;
      estimatedDate: string | null;
    };
    mempoolSize: number | null;
    mempoolFees: {
      fastestFee: number | null;
      halfHourFee: number | null;
      economyFee: number | null;
    };
    mempoolTxs: number | null;
    miningRevenue: number | null;
    miningRevenue24h: number | null;
    lightningCapacity: number | null;
    lightningChannels: number | null;
    liquidity: number | null;
  };
  sentiment: {
    fearGreedIndex: number | null;
    fearGreedValue: string | null;
  };
  nodes: {
    total: number | null;
    countries: number | null;
  };
}

async function fetchPriceData() {
  try {
    const priceResponse = await fetch(
      `${COINGECKO_API}/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true`,
      { next: { revalidate: 0 } }
    );
    
    if (priceResponse.ok) {
      const data = await priceResponse.json();
      return {
        usd: Number(data.bitcoin?.usd) || null,
        change24h: Number(data.bitcoin?.usd_24h_change) || null
      };
    }
    return null;
  } catch (error) {
    serverLogger.error('Error fetching price data:', error);
    return null;
  }
}

async function fetchNetworkData() {
  try {
    const networkResponse = await fetch(
      `${BLOCKCHAIN_API}/stats`,
      { next: { revalidate: 0 } }
    );
    
    if (networkResponse.ok) {
      const data = await networkResponse.json();
      
      // Calculate next halving
      const currentBlock = Number(data.n_blocks_total);
      const currentHalvingEpoch = Math.floor(currentBlock / 210000);
      const nextHalvingBlock = (currentHalvingEpoch + 1) * 210000;
      const blocksUntilHalving = nextHalvingBlock - currentBlock;
      
      // Estimate halving date based on average block time
      const avgBlockTime = Number(data.minutes_between_blocks);
      const minutesUntilHalving = blocksUntilHalving * avgBlockTime;
      const halvingDate = new Date(Date.now() + minutesUntilHalving * 60 * 1000);

      return {
        hashRate: Number(data.hash_rate),
        difficulty: Number(data.difficulty),
        blockHeight: Number(data.n_blocks_total),
        avgBlockTime: Number(data.minutes_between_blocks),
        avgBlockSize: Number(data.blocks_size),
        totalBTC: Number(data.totalbc) / 1e8,
        marketCap: Number(data.market_price_usd) * (Number(data.totalbc) / 1e8),
        nextHalving: {
          blocks: blocksUntilHalving,
          estimatedDate: halvingDate.toISOString()
        }
      };
    }
    return null;
  } catch (error) {
    serverLogger.error('Error fetching network data:', error);
    return null;
  }
}

async function fetchSentimentData() {
  try {
    const fearGreedResponse = await fetch(
      `${ALTERNATIVE_API}/fng/`,
      { next: { revalidate: 0 } }
    );
    
    if (fearGreedResponse.ok) {
      const data = await fearGreedResponse.json();
      return {
        fearGreedIndex: Number(data.data[0].value),
        fearGreedValue: data.data[0].value_classification
      };
    }
    return null;
  } catch (error) {
    serverLogger.error('Error fetching sentiment data:', error);
    return null;
  }
}

async function fetchMempoolData() {
  try {
    // Fetch mempool data in parallel
    const [mempoolResponse, feesResponse] = await Promise.all([
      fetch(`${MEMPOOL_API}/mempool`, { next: { revalidate: 0 } }),
      fetch(`${MEMPOOL_API}/v1/fees/recommended`, { next: { revalidate: 0 } })
    ]);

    if (!mempoolResponse.ok || !feesResponse.ok) {
      throw new Error('Failed to fetch mempool data');
    }

    const [mempoolData, feesData] = await Promise.all([
      mempoolResponse.json(),
      feesResponse.json()
    ]);

    return {
      mempoolSize: mempoolData.vsize || null,  // Virtual size in bytes
      mempoolTxs: mempoolData.count || null,   // Number of transactions
      mempoolFees: {
        fastestFee: feesData.fastestFee || null,
        halfHourFee: feesData.halfHourFee || null,
        economyFee: feesData.economyFee || null
      },
      miningRevenue: mempoolData.total_fee || null,  // Total fees in satoshis
      miningRevenue24h: null  // We'll need another endpoint for this
    };
  } catch (error) {
    serverLogger.error('Error fetching mempool data:', error);
    return null;
  }
}

export async function GET() {
  // Initialize response object with default values
  const response: CryptoResponse = {
    price: {
      usd: null,
      change24h: null
    },
    network: {
      hashRate: null,
      difficulty: null,
      blockHeight: null,
      avgBlockTime: null,
      avgBlockSize: null,
      totalBTC: null,
      marketCap: null,
      nextHalving: {
        blocks: null,
        estimatedDate: null
      },
      mempoolSize: null,
      mempoolFees: {
        fastestFee: null,
        halfHourFee: null,
        economyFee: null
      },
      mempoolTxs: null,
      miningRevenue: null,
      miningRevenue24h: null,
      lightningCapacity: null,
      lightningChannels: null,
      liquidity: null
    },
    sentiment: {
      fearGreedIndex: null,
      fearGreedValue: null
    },
    nodes: {
      total: null,
      countries: null
    }
  };

  try {
    // Fetch all data in parallel
    const [priceData, networkData, sentimentData, mempoolData] = await Promise.all([
      fetchPriceData(),
      fetchNetworkData(),
      fetchSentimentData(),
      fetchMempoolData()
    ]);

    // Update response with fetched data
    if (priceData) {
      response.price = priceData;
    }

    if (networkData) {
      response.network = {
        ...response.network,
        ...networkData
      };
    }

    if (sentimentData) {
      response.sentiment = sentimentData;
    }

    if (mempoolData) {
      response.network = {
        ...response.network,
        ...mempoolData
      };
    }

    return NextResponse.json(response);
  } catch (error) {
    serverLogger.error('Error in GET handler:', error);
    return NextResponse.json(response);
  }
} 