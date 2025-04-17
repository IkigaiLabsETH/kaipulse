import { NextResponse } from 'next/server';
import { serverLogger } from '@/utils/serverLogger';

const MEMPOOL_API = 'https://mempool.space/api/v1';
const BLOCKCHAIN_API = 'https://api.blockchain.info';
const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const ALTERNATIVE_API = 'https://api.alternative.me';

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
    // Fetch price data from CoinGecko
    try {
      serverLogger.info('Fetching CoinGecko price data...');
      const priceResponse = await fetch(
        `${COINGECKO_API}/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true`,
        { next: { revalidate: 0 } }
      );
      
      if (priceResponse.ok) {
        const priceData = await priceResponse.json();
        serverLogger.info('Raw price data:', priceData);
        
        if (priceData.bitcoin) {
          response.price = {
            usd: Number(priceData.bitcoin.usd) || null,
            change24h: Number(priceData.bitcoin.usd_24h_change) || null
          };
          serverLogger.info('Price data processed:', response.price);
        } else {
          serverLogger.error('No bitcoin data in price response');
        }
      } else {
        serverLogger.error('CoinGecko API error:', { 
          status: priceResponse.status,
          statusText: priceResponse.statusText
        });
      }
    } catch (error) {
      serverLogger.error('Error fetching CoinGecko data:', error);
    }

    // Fetch network stats from Blockchain.com
    try {
      serverLogger.info('Fetching Blockchain.com stats...');
      const networkResponse = await fetch(
        `${BLOCKCHAIN_API}/stats`,
        { next: { revalidate: 0 } }
      );
      
      if (networkResponse.ok) {
        const networkData = await networkResponse.json();
        serverLogger.info('Raw Blockchain.com data:', networkData);
        response.network = {
          hashRate: Number(networkData.hash_rate),
          difficulty: Number(networkData.difficulty),
          blockHeight: Number(networkData.n_blocks_total),
          avgBlockTime: Number(networkData.minutes_between_blocks),
          avgBlockSize: Number(networkData.blocks_size),
          totalBTC: Number(networkData.totalbc) / 1e8, // Convert satoshis to BTC
          marketCap: Number(networkData.market_price_usd) * (Number(networkData.totalbc) / 1e8),
          nextHalving: {
            blocks: 840000 - Number(networkData.n_blocks_total),
            estimatedDate: new Date(Date.now() + ((840000 - Number(networkData.n_blocks_total)) * 10 * 60 * 1000)).toISOString()
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
        };
        serverLogger.info('Processed network data:', response.network);
      } else {
        serverLogger.error('Blockchain.com API error:', { status: networkResponse.status });
      }
    } catch (error) {
      serverLogger.error('Error fetching Blockchain.com data:', error);
    }

    // Fetch mempool data from mempool.space
    try {
      serverLogger.info('Fetching mempool.space data...');
      const [blockHeightResponse, mempoolFeesResponse, mempoolStatsResponse] = await Promise.all([
        fetch(`${MEMPOOL_API}/blocks/tip/height`, { next: { revalidate: 0 } }),
        fetch(`${MEMPOOL_API}/fees/recommended`, { next: { revalidate: 0 } }),
        fetch(`${MEMPOOL_API}/mempool`, { next: { revalidate: 0 } })
      ]);

      if (blockHeightResponse.ok) {
        const blockHeight = await blockHeightResponse.json();
        response.network.blockHeight = Number(blockHeight);
      }

      if (mempoolFeesResponse.ok) {
        const mempoolFees = await mempoolFeesResponse.json();
        response.network.mempoolFees = {
          fastestFee: Number(mempoolFees.fastestFee),
          halfHourFee: Number(mempoolFees.halfHourFee),
          economyFee: Number(mempoolFees.economyFee)
        };
      }

      if (mempoolStatsResponse.ok) {
        const mempoolStats = await mempoolStatsResponse.json();
        // Log raw mempool data for debugging
        serverLogger.info('Raw mempool stats:', {
          vsize: mempoolStats.vsize,
          size: mempoolStats.size,
          bytes: mempoolStats.bytes,
          count: mempoolStats.count
        });
        
        // Use bytes instead of vsize for actual size
        response.network.mempoolSize = Number(mempoolStats.bytes);
        response.network.mempoolTxs = Number(mempoolStats.count);
        
        serverLogger.info('Processed mempool data:', {
          mempoolSize: response.network.mempoolSize,
          mempoolTxs: response.network.mempoolTxs
        });
      }

      // Add Bitnodes API call for accurate node count
      try {
        serverLogger.info('Fetching Bitnodes data...');
        const bitnodesResponse = await fetch(
          'https://bitnodes.io/api/v1/snapshots/latest/',
          { next: { revalidate: 0 } }
        );

        if (bitnodesResponse.ok) {
          const bitnodesData = await bitnodesResponse.json();
          serverLogger.info('Raw Bitnodes data:', {
            total_nodes: bitnodesData.total_nodes,
            latest_countries: Object.keys(bitnodesData.countries || {}).length
          });
          
          response.nodes = {
            total: Number(bitnodesData.total_nodes),
            countries: Object.keys(bitnodesData.countries || {}).length
          };
        } else {
          serverLogger.error('Bitnodes API error:', { status: bitnodesResponse.status });
        }
      } catch (error) {
        serverLogger.error('Error fetching Bitnodes data:', error);
      }

      serverLogger.info('Mempool.space data fetched successfully');
    } catch (error) {
      serverLogger.error('Error fetching mempool.space data:', error);
    }

    // Fetch fear & greed index
    try {
      serverLogger.info('Fetching Fear & Greed index...');
      const fearGreedResponse = await fetch(
        `${ALTERNATIVE_API}/fng/`,
        { next: { revalidate: 0 } }
      );
      
      if (fearGreedResponse.ok) {
        const fearGreedData = await fearGreedResponse.json();
        response.sentiment.fearGreedIndex = Number(fearGreedData.data[0].value);
        response.sentiment.fearGreedValue = fearGreedData.data[0].value_classification;
        serverLogger.info('Fear & Greed data fetched successfully');
      } else {
        serverLogger.error('Fear & Greed API error:', { status: fearGreedResponse.status });
      }
    } catch (error) {
      serverLogger.error('Error fetching Fear & Greed data:', error);
    }

    // Fetch mining revenue from Blockchain.com
    try {
      serverLogger.info('Fetching mining revenue data...');
      const miningResponse = await fetch(
        `${BLOCKCHAIN_API}/revenue/24hr`,
        { next: { revalidate: 0 } }
      );
      
      if (miningResponse.ok) {
        const miningData = await miningResponse.json();
        response.network.miningRevenue = Number(miningData.revenue);
        response.network.miningRevenue24h = Number(miningData.revenue_24h);
        serverLogger.info('Mining revenue data fetched successfully');
      } else {
        serverLogger.error('Blockchain.com mining API error:', { status: miningResponse.status });
      }
    } catch (error) {
      serverLogger.error('Error fetching mining revenue data:', error);
    }

    // Fetch Lightning Network data from 1ML.com
    try {
      serverLogger.info('Fetching Lightning Network data...');
      const lightningResponse = await fetch(
        'https://1ml.com/statistics?json=true',
        { next: { revalidate: 0 } }
      );
      
      if (lightningResponse.ok) {
        const lightningData = await lightningResponse.json();
        response.network.lightningCapacity = Number(lightningData.capacity);
        response.network.lightningChannels = Number(lightningData.channels);
        serverLogger.info('Lightning Network data fetched successfully');
      } else {
        serverLogger.error('1ML.com API error:', { status: lightningResponse.status });
      }
    } catch (error) {
      serverLogger.error('Error fetching Lightning Network data:', error);
    }

    // Fetch liquidity data from CoinGecko
    try {
      serverLogger.info('Fetching liquidity data...');
      const liquidityResponse = await fetch(
        `${COINGECKO_API}/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        { next: { revalidate: 0 } }
      );
      
      if (liquidityResponse.ok) {
        const liquidityData = await liquidityResponse.json();
        serverLogger.info('Raw liquidity data:', liquidityData);
        
        if (liquidityData.market_data && liquidityData.market_data.total_volume) {
          response.network.liquidity = Number(liquidityData.market_data.total_volume.usd);
          serverLogger.info('Liquidity data processed successfully:', {
            value: response.network.liquidity
          });
        } else {
          serverLogger.error('No volume data found in response:', liquidityData);
        }
      } else {
        serverLogger.error('CoinGecko liquidity API error:', { 
          status: liquidityResponse.status,
          statusText: liquidityResponse.statusText
        });
      }
    } catch (error) {
      serverLogger.error('Error fetching liquidity data:', error);
    }

    // Log the final response for debugging
    serverLogger.info('Final response data:', response);

    // Check if we have at least some data
    const hasAnyData = Object.values(response).some(section => 
      Object.values(section).some(value => value !== null)
    );

    if (!hasAnyData) {
      throw new Error('All API calls failed');
    }

    return NextResponse.json(response);

  } catch (error) {
    // Log the error with more details
    serverLogger.error('All API calls failed:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { error: 'Failed to fetch any data from APIs' },
      { status: 500 }
    );
  }
} 