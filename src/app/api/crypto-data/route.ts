import { NextResponse } from 'next/server';
import { serverLogger } from '@/utils/serverLogger';

const MEMPOOL_API = 'https://mempool.space/api/v1';
const BLOCKCHAIN_API = 'https://api.blockchain.info';
const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const ALTERNATIVE_API = 'https://api.alternative.me';
const DERIBIT_API = 'https://www.deribit.com/api/v2/public';

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
    exchangeVolume: {
      total24h: number | null;
      topExchanges: Array<{
        name: string;
        volume: number;
      }> | null;
    };
    optionsData: {
      volume24h: number | null;
      openInterest: number | null;
      putCallRatio: number | null;
      details: {
        puts: {
          volume: number | null;
          openInterest: number | null;
        };
        calls: {
          volume: number | null;
          openInterest: number | null;
        };
        futures: {
          volume: number | null;
          openInterest: number | null;
        };
      } | null;
      volatility: number | null;
    };
    largeTransactions: {
      count24h: number | null;
      volume24h: number | null;
      latest: Array<{
        value: number;
        time: string;
      }> | null;
    };
    volume24h: number | null;
    btcIndex: number | null;
    activeInstruments: number | null;
    lastTradePrice: number | null;
    bestBid: number | null;
    bestAsk: number | null;
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

// Add interfaces for API responses
interface ExchangeTicker {
  base: string;
  target: string;
  market: {
    name: string;
  };
  volume: number;
}

interface DeribitSummary {
  volume_24h: number;
  open_interest: number;
  underlying_index: string;
  creation_timestamp: number;
  instrument_name: string;
}

interface DeribitStats {
  volume_put: number;
  volume_call: number;
  open_interest_put: number;
  open_interest_call: number;
}

// Add new interface for summary data
interface DeribitBookSummary {
  volume_24h: number;
  price_change: number;
  open_interest: number;
  instrument_name: string;
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
      liquidity: null,
      exchangeVolume: {
        total24h: null,
        topExchanges: null
      },
      optionsData: {
        volume24h: null,
        openInterest: null,
        putCallRatio: null,
        details: {
          puts: {
            volume: null,
            openInterest: null
          },
          calls: {
            volume: null,
            openInterest: null
          },
          futures: {
            volume: null,
            openInterest: null
          }
        },
        volatility: null
      },
      largeTransactions: {
        count24h: null,
        volume24h: null,
        latest: null
      },
      volume24h: null,
      btcIndex: null,
      activeInstruments: null,
      lastTradePrice: null,
      bestBid: null,
      bestAsk: null
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
        { 
          next: { revalidate: 0 },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
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
          // Try fallback to Blockchain.com price API
          try {
            serverLogger.info('Trying Blockchain.com price fallback...');
            const fallbackResponse = await fetch(
              `${BLOCKCHAIN_API}/ticker`,
              { next: { revalidate: 0 } }
            );
            
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              response.price = {
                usd: Number(fallbackData.USD.last) || null,
                change24h: Number(fallbackData.USD.percent_change_24h) || null
              };
              serverLogger.info('Fallback price data processed:', response.price);
            } else {
              serverLogger.error('Blockchain.com fallback API error:', { 
                status: fallbackResponse.status,
                statusText: fallbackResponse.statusText
              });
            }
          } catch (fallbackError) {
            serverLogger.error('Error fetching fallback price data:', fallbackError);
          }
        }
      } else {
        serverLogger.error('CoinGecko API error:', { 
          status: priceResponse.status,
          statusText: priceResponse.statusText,
          headers: Object.fromEntries(priceResponse.headers.entries())
        });
        
        // Try fallback to Blockchain.com price API
        try {
          serverLogger.info('Trying Blockchain.com price fallback...');
          const fallbackResponse = await fetch(
            `${BLOCKCHAIN_API}/ticker`,
            { next: { revalidate: 0 } }
          );
          
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            response.price = {
              usd: Number(fallbackData.USD.last) || null,
              change24h: Number(fallbackData.USD.percent_change_24h) || null
            };
            serverLogger.info('Fallback price data processed:', response.price);
          } else {
            serverLogger.error('Blockchain.com fallback API error:', { 
              status: fallbackResponse.status,
              statusText: fallbackResponse.statusText
            });
          }
        } catch (fallbackError) {
          serverLogger.error('Error fetching fallback price data:', fallbackError);
        }
      }
    } catch (error) {
      serverLogger.error('Error fetching CoinGecko data:', error);
      
      // Try fallback to Blockchain.com price API
      try {
        serverLogger.info('Trying Blockchain.com price fallback...');
        const fallbackResponse = await fetch(
          `${BLOCKCHAIN_API}/ticker`,
          { next: { revalidate: 0 } }
        );
        
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          response.price = {
            usd: Number(fallbackData.USD.last) || null,
            change24h: Number(fallbackData.USD.percent_change_24h) || null
          };
          serverLogger.info('Fallback price data processed:', response.price);
        } else {
          serverLogger.error('Blockchain.com fallback API error:', { 
            status: fallbackResponse.status,
            statusText: fallbackResponse.statusText
          });
        }
      } catch (fallbackError) {
        serverLogger.error('Error fetching fallback price data:', fallbackError);
      }
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
          ...response.network,
          hashRate: Number(networkData.hash_rate),
          difficulty: Number(networkData.difficulty),
          blockHeight: Number(networkData.n_blocks_total),
          avgBlockTime: Number(networkData.minutes_between_blocks),
          avgBlockSize: Number(networkData.blocks_size),
          totalBTC: Number(networkData.totalbc) / 1e8,
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
          liquidity: null,
          exchangeVolume: {
            total24h: null,
            topExchanges: null
          },
          optionsData: {
            volume24h: null,
            openInterest: null,
            putCallRatio: null,
            details: {
              puts: {
                volume: null,
                openInterest: null
              },
              calls: {
                volume: null,
                openInterest: null
              },
              futures: {
                volume: null,
                openInterest: null
              }
            },
            volatility: null
          },
          largeTransactions: {
            count24h: null,
            volume24h: null,
            latest: null
          },
          volume24h: null,
          btcIndex: null,
          activeInstruments: null,
          lastTradePrice: null,
          bestBid: null,
          bestAsk: null
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

    // Fetch exchange volume from CoinGecko
    try {
      serverLogger.info('Fetching exchange volume data...');
      const volumeResponse = await fetch(
        `${COINGECKO_API}/coins/bitcoin/tickers?include_exchange_logo=false`,
        { next: { revalidate: 0 } }
      );
      
      if (volumeResponse.ok) {
        const volumeData = await volumeResponse.json();
        serverLogger.info('Raw exchange volume data:', volumeData);
        
        let total24h = 0;
        const topExchanges: Array<{ name: string; volume: number }> = [];
        
        // Process top exchanges by volume, including both USD and USDT pairs
        const validTickers = volumeData.tickers
          .filter((ticker: ExchangeTicker) => 
            ticker.base === 'BTC' && 
            (ticker.target === 'USD' || ticker.target === 'USDT') &&
            typeof ticker.volume === 'number' &&
            !isNaN(ticker.volume) &&
            ticker.volume > 0
          );

        // Sort by volume and take top 5
        validTickers
          .sort((a: ExchangeTicker, b: ExchangeTicker) => b.volume - a.volume)
          .slice(0, 5)
          .forEach((ticker: ExchangeTicker) => {
            const volume = Number(ticker.volume);
            total24h += volume;
            topExchanges.push({
              name: ticker.market.name,
              volume: Math.round(volume * 1000) / 1000 // Round to 3 decimal places for BTC
            });
          });

        response.network.exchangeVolume = {
          total24h: Math.round(total24h * 1000) / 1000, // Round to 3 decimal places for BTC
          topExchanges
        };
        
        serverLogger.info('Exchange volume processed (in BTC):', response.network.exchangeVolume);
      }
    } catch (error) {
      serverLogger.error('Error fetching exchange volume:', error);
    }

    // Fetch options data from Deribit
    try {
      serverLogger.info('Fetching options data from Deribit...');
      const [optionsResponse, futuresResponse, btcStatsResponse] = await Promise.all([
        fetch(`${DERIBIT_API}/get_book_summary_by_currency?currency=BTC&kind=option`,
          { next: { revalidate: 0 } }
        ),
        fetch(`${DERIBIT_API}/get_book_summary_by_currency?currency=BTC&kind=future`,
          { next: { revalidate: 0 } }
        ),
        fetch(`${DERIBIT_API}/get_historical_volatility?currency=BTC`,
          { next: { revalidate: 0 } }
        )
      ]);
      
      if (optionsResponse.ok && futuresResponse.ok) {
        const [optionsData, futuresData, btcStatsData] = await Promise.all([
          optionsResponse.json(),
          futuresResponse.json(),
          btcStatsResponse.ok ? btcStatsResponse.json() : { result: [] }
        ]);

        if (optionsData.result && futuresData.result) {
          // Initialize stats for puts and calls
          const stats: DeribitStats = {
            volume_put: 0,
            volume_call: 0,
            open_interest_put: 0,
            open_interest_call: 0
          };

          // Process options data
          optionsData.result.forEach((item: DeribitSummary) => {
            const volume = Number(item.volume_24h);
            const openInterest = Number(item.open_interest);
            
            if (!isNaN(volume) && !isNaN(openInterest)) {
              // Check if it's a PUT or CALL option based on instrument name
              if (item.instrument_name.includes('-P')) {
                stats.volume_put += volume;
                stats.open_interest_put += openInterest;
              } else if (item.instrument_name.includes('-C')) {
                stats.volume_call += volume;
                stats.open_interest_call += openInterest;
              }
            }
          });

          // Process futures data
          const futuresVolume = futuresData.result.reduce((acc: number, item: DeribitSummary) => {
            const volume = Number(item.volume_24h);
            return acc + (isNaN(volume) ? 0 : volume);
          }, 0);

          const futuresOI = futuresData.result.reduce((acc: number, item: DeribitSummary) => {
            const oi = Number(item.open_interest);
            return acc + (isNaN(oi) ? 0 : oi);
          }, 0);

          // Calculate total volumes and open interest
          const totalVolume = stats.volume_put + stats.volume_call + futuresVolume;
          const totalOI = stats.open_interest_put + stats.open_interest_call + futuresOI;

          // Get historical volatility if available
          const volatility = btcStatsData.result?.[0] || null;
          
          response.network.optionsData = {
            volume24h: Math.round(totalVolume * 1000) / 1000,
            openInterest: Math.round(totalOI * 1000) / 1000,
            putCallRatio: Math.round((stats.volume_put / stats.volume_call) * 1000) / 1000,
            details: {
              puts: {
                volume: Math.round(stats.volume_put * 1000) / 1000,
                openInterest: Math.round(stats.open_interest_put * 1000) / 1000
              },
              calls: {
                volume: Math.round(stats.volume_call * 1000) / 1000,
                openInterest: Math.round(stats.open_interest_call * 1000) / 1000
              },
              futures: {
                volume: Math.round(futuresVolume * 1000) / 1000,
                openInterest: Math.round(futuresOI * 1000) / 1000
              }
            },
            volatility: volatility ? Math.round(volatility * 100) / 100 : null
          };
          
          serverLogger.info('Options data processed:', {
            totalVolume,
            totalOI,
            putCallRatio: stats.volume_put / stats.volume_call,
            volatility
          });
        } else {
          serverLogger.error('Invalid options data structure:', { 
            hasOptionsData: !!optionsData.result, 
            hasFuturesData: !!futuresData.result 
          });
        }
      } else {
        serverLogger.error('Deribit API error:', { 
          optionsStatus: optionsResponse.status,
          futuresStatus: futuresResponse.status
        });
      }
    } catch (error) {
      serverLogger.error('Error fetching options data:', error);
    }

    // Fetch large transactions from Mempool.space
    try {
      serverLogger.info('Fetching large transactions...');
      const txResponse = await fetch(
        `${MEMPOOL_API}/mempool/recent`,
        { next: { revalidate: 0 } }
      );
      
      if (txResponse.ok) {
        const txData = await txResponse.json();
        const btcThreshold = 100; // 100 BTC threshold for large transactions
        
        // Filter and process large transactions
        const largeTransactions = txData
          .filter((tx: { value: number; firstSeen: number }) => {
            const value = Number(tx.value) / 1e8; // Convert satoshis to BTC
            return !isNaN(value) && value >= btcThreshold;
          })
          .map((tx: { value: number; firstSeen: number }) => {
            const btcValue = tx.value / 1e8; // Convert satoshis to BTC
            return {
              value: Math.round(btcValue * 1000) / 1000, // Round to 3 decimal places for BTC
              time: new Date(tx.firstSeen * 1000).toISOString()
            };
          })
          .filter((tx: { time: string }) => {
            // Filter transactions within last 24 hours
            const txTime = new Date(tx.time).getTime();
            const cutoff = Date.now() - (24 * 60 * 60 * 1000);
            return txTime >= cutoff;
          });
        
        response.network.largeTransactions = {
          count24h: largeTransactions.length,
          volume24h: Math.round(largeTransactions.reduce((acc: number, tx: { value: number }) => acc + tx.value, 0) * 1000) / 1000,
          latest: largeTransactions.slice(0, 5)
        };
        
        serverLogger.info('Large transactions processed (in BTC):', response.network.largeTransactions);
      }
    } catch (error) {
      serverLogger.error('Error fetching large transactions:', error);
    }

    // Fetch public data from Deribit
    try {
      serverLogger.info('Fetching public data from Deribit...');
      const [indexResponse, futuresSummaryResponse, optionsSummaryResponse, tradesResponse, orderBookResponse] = await Promise.all([
        fetch(`${DERIBIT_API}/get_index_price?index_name=btc_usd`,
          { next: { revalidate: 0 } }
        ),
        fetch(`${DERIBIT_API}/get_book_summary_by_currency?currency=BTC&kind=future`,
          { next: { revalidate: 0 } }
        ),
        fetch(`${DERIBIT_API}/get_book_summary_by_currency?currency=BTC&kind=option`,
          { next: { revalidate: 0 } }
        ),
        fetch(`${DERIBIT_API}/get_last_trades_by_instrument?instrument_name=BTC-PERPETUAL&count=1`,
          { next: { revalidate: 0 } }
        ),
        fetch(`${DERIBIT_API}/get_order_book?instrument_name=BTC-PERPETUAL&depth=1`,
          { next: { revalidate: 0 } }
        )
      ]);

      const [indexData, futuresSummaryData, optionsSummaryData, tradesData, orderBookData] = await Promise.all([
        indexResponse.ok ? indexResponse.json() : null,
        futuresSummaryResponse.ok ? futuresSummaryResponse.json() : null,
        optionsSummaryResponse.ok ? optionsSummaryResponse.json() : null,
        tradesResponse.ok ? tradesResponse.json() : null,
        orderBookResponse.ok ? orderBookResponse.json() : null
      ]);

      // Process index price
      if (indexData?.result) {
        response.network.btcIndex = Number(indexData.result.index_price);
      }

      // Process summary data - combine futures and options volume
      let totalVolume = 0;
      let instrumentCount = 0;

      // Add futures volume
      if (futuresSummaryData?.result) {
        const futuresVolume = futuresSummaryData.result.reduce((acc: number, item: DeribitBookSummary) => {
          return acc + (Number(item.volume_24h) || 0);
        }, 0);
        totalVolume += futuresVolume;
        instrumentCount += futuresSummaryData.result.length;
        
        serverLogger.info('Futures volume:', { futuresVolume });
      }

      // Add options volume
      if (optionsSummaryData?.result) {
        const optionsVolume = optionsSummaryData.result.reduce((acc: number, item: DeribitBookSummary) => {
          return acc + (Number(item.volume_24h) || 0);
        }, 0);
        totalVolume += optionsVolume;
        instrumentCount += optionsSummaryData.result.length;
        
        serverLogger.info('Options volume:', { optionsVolume });
      }

      // Update response with combined data
      response.network.volume24h = Math.round(totalVolume * 1000) / 1000;
      response.network.activeInstruments = instrumentCount;

      serverLogger.info('Combined volume data:', {
        totalVolume: response.network.volume24h,
        instrumentCount: response.network.activeInstruments
      });

      // Process last trade
      if (tradesData?.result?.[0]) {
        response.network.lastTradePrice = Number(tradesData.result[0].price);
      }

      // Process order book
      if (orderBookData?.result) {
        const { bids, asks } = orderBookData.result;
        if (bids?.[0]?.[0]) {
          response.network.bestBid = Number(bids[0][0]);
        }
        if (asks?.[0]?.[0]) {
          response.network.bestAsk = Number(asks[0][0]);
        }
      }

      serverLogger.info('Deribit public data processed:', {
        btcIndex: response.network.btcIndex,
        volume24h: response.network.volume24h,
        activeInstruments: response.network.activeInstruments,
        lastTradePrice: response.network.lastTradePrice,
        bestBid: response.network.bestBid,
        bestAsk: response.network.bestAsk
      });
    } catch (error) {
      serverLogger.error('Error fetching Deribit public data:', error);
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