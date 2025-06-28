import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  category: string;
  lastUpdated?: string;
  featured?: boolean;
  keywords?: string[];
}

// Comprehensive content index for all pages/routes
const CONTENT_INDEX: SearchResult[] = [
  // Featured Introduction
  {
    title: 'LiveTheLifeTV Introduction',
    url: '/intro',
    description: 'Your gateway to Bitcoin education & life balance. Complete guide to our platform covering Bitcoin strategy, DeFi, lifestyle, and tools.',
    category: 'Education',
    featured: true,
    keywords: ['intro', 'introduction', 'gateway', 'bitcoin', 'education', 'life balance', 'getting started']
  },

  // Core Bitcoin Strategy
  {
    title: 'Bitcoin Core Education',
    url: '/platforms/msty/bitcoin',
    description: 'Comprehensive Bitcoin education covering fundamentals, investment strategies, and long-term wealth building.',
    category: 'Bitcoin',
    featured: true,
    keywords: ['bitcoin', 'btc', 'education', 'strategy', 'investment', 'wealth', 'satoshi', 'hodl']
  },
  {
    title: 'Bitcoin Whitepaper',
    url: '/whitepaper',
    description: 'Study the original Bitcoin whitepaper by Satoshi Nakamoto and understand the foundational principles of Bitcoin.',
    category: 'Education',
    keywords: ['whitepaper', 'satoshi', 'nakamoto', 'bitcoin', 'fundamentals', 'peer-to-peer', 'electronic cash']
  },
  {
    title: 'MicroStrategy Bitcoin Strategy',
    url: '/platforms/msty/mstr',
    description: 'Learn about MicroStrategy\'s corporate Bitcoin treasury strategy and Michael Saylor\'s approach to Bitcoin adoption.',
    category: 'Bitcoin',
    featured: true,
    keywords: ['microstrategy', 'mstr', 'saylor', 'corporate', 'treasury', 'bitcoin', 'strategy']
  },
  {
    title: 'MSTY Freedom Calculator',
    url: '/calculator',
    description: 'Calculate your path to financial freedom using Bitcoin-first portfolio strategies. Includes income projections and allocation recommendations.',
    category: 'Tools',
    featured: true,
    keywords: ['msty', 'calculator', 'freedom', 'bitcoin', 'portfolio', 'allocation', 'income', 'financial']
  },
  {
    title: 'MSTY Investment Platform',
    url: '/platforms/msty/',
    description: 'Explore MSTY covered call ETF strategies for generating income while maintaining Bitcoin exposure.',
    category: 'Investment',
    keywords: ['msty', 'etf', 'covered call', 'income', 'yield', 'bitcoin', 'strategy']
  },
  {
    title: 'Cost of Living Calculator',
    url: '/col',
    description: 'Calculate your cost of living in Bitcoin terms. See how much you need in satoshis to maintain your lifestyle.',
    category: 'Tools',
    keywords: ['cost of living', 'calculator', 'bitcoin', 'satoshis', 'lifestyle', 'budgeting']
  },
  {
    title: 'Bitcoin Max Pain Analysis',
    url: '/maxpain',
    description: 'Understand Bitcoin market cycles and max pain theory for better timing and investment decisions.',
    category: 'Analysis',
    keywords: ['max pain', 'bitcoin', 'market cycles', 'timing', 'analysis', 'trading']
  },

  // Mining & Infrastructure
  {
    title: 'Bitcoin Mining Setup',
    url: '/mining',
    description: 'Complete guide to Bitcoin mining including hardware recommendations, setup guides, and profitability analysis.',
    category: 'Technology',
    keywords: ['mining', 'bitcoin', 'hardware', 'asic', 'profitability', 'setup', 'infrastructure']
  },
  {
    title: 'Antminer S9 Pro',
    url: '/s9pro',
    description: 'Detailed review and setup guide for the Antminer S9 Pro Bitcoin mining hardware.',
    category: 'Technology',
    keywords: ['s9 pro', 'antminer', 'mining', 'hardware', 'bitcoin', 'asic']
  },
  {
    title: 'Bitaxe Solo Mining',
    url: '/bitaxe',
    description: 'Learn about Bitaxe open-source Bitcoin mining hardware for solo mining and lottery-style mining.',
    category: 'Technology',
    keywords: ['bitaxe', 'solo mining', 'open source', 'mining', 'bitcoin', 'lottery']
  },
  {
    title: 'Bitcoin Node Setup',
    url: '/node',
    description: 'Step-by-step guide to running your own Bitcoin full node for network participation and sovereignty.',
    category: 'Technology',
    keywords: ['node', 'bitcoin', 'full node', 'sovereignty', 'network', 'setup']
  },
  {
    title: 'Lightning Network',
    url: '/ln',
    description: 'Bitcoin Lightning Network payments, channels, and second-layer scaling solutions for instant Bitcoin transactions.',
    category: 'Technology',
    keywords: ['lightning', 'network', 'payments', 'scaling', 'bitcoin', 'layer 2', 'instant']
  },

  // DeFi & Altcoins
  {
    title: 'Altcoins Analysis Hub',
    url: '/altcoins',
    description: 'Deep dive into alternative cryptocurrencies, market trends, and investment analysis beyond Bitcoin.',
    category: 'Analysis',
    featured: true,
    keywords: ['altcoins', 'cryptocurrency', 'analysis', 'market', 'trends', 'ethereum', 'defi']
  },
  {
    title: 'Crypto Watchlist',
    url: '/crypto',
    description: 'Our curated watchlist of cryptocurrencies and projects we\'re monitoring for potential outperformance.',
    category: 'Analysis',
    keywords: ['crypto', 'watchlist', 'monitoring', 'outperformance', 'projects', 'analysis']
  },
  {
    title: 'Ethereum Analysis',
    url: '/eth',
    description: 'Comprehensive Ethereum ecosystem analysis, DeFi protocols, and smart contract innovations.',
    category: 'Analysis',
    keywords: ['ethereum', 'eth', 'defi', 'smart contracts', 'protocols', 'analysis']
  },
  {
    title: 'HyperLiquid DEX',
    url: '/hyperliquid',
    description: 'Explore HyperLiquid decentralized perpetual exchange and advanced trading strategies.',
    category: 'DeFi',
    keywords: ['hyperliquid', 'dex', 'perpetuals', 'trading', 'defi', 'derivatives']
  },
  {
    title: 'Solana Ecosystem',
    url: '/sol',
    description: 'Solana blockchain analysis, DeFi protocols, and high-performance decentralized applications.',
    category: 'Analysis',
    keywords: ['solana', 'sol', 'blockchain', 'defi', 'dapps', 'performance']
  },
  {
    title: 'Sui Blockchain',
    url: '/sui',
    description: 'Sui blockchain technology, Move programming language, and next-generation smart contracts.',
    category: 'Technology',
    keywords: ['sui', 'blockchain', 'move', 'smart contracts', 'technology']
  },

  // NFT Collections & Digital Art
  {
    title: 'NFT Collections Gallery',
    url: '/collections',
    description: 'Explore curated NFT collections including Bored Ape Yacht Club, CryptoPunks, and emerging digital art.',
    category: 'Collections',
    featured: true,
    keywords: ['nft', 'collections', 'opensea', 'bayc', 'cryptopunks', 'digital art', 'ethereum']
  },
  {
    title: 'Profile Picture NFT Collections',
    url: '/pfp',
    description: 'Browse and discover PFP (Profile Picture) NFT collections with real-time market data and analytics.',
    category: 'Collections',
    keywords: ['pfp', 'profile picture', 'nft', 'avatar', 'collections', 'market data']
  },
  {
    title: 'Art Gallery & Curation',
    url: '/art',
    description: 'Discover fine art photography, digital collections, and curated visual experiences from global artists.',
    category: 'Collections',
    keywords: ['art', 'photography', 'curation', 'visual', 'gallery', 'artists', 'digital']
  },
  {
    title: 'Art Gallery Space',
    url: '/gallery',
    description: 'Virtual gallery space showcasing digital art, NFT collections, and contemporary artworks.',
    category: 'Collections',
    keywords: ['gallery', 'virtual', 'digital art', 'nft', 'contemporary', 'showcase']
  },
  {
    title: '1-on-1 Art Sessions',
    url: '/1on1',
    description: 'Personalized art consultation and collection curation sessions with expert guidance.',
    category: 'Collections',
    keywords: ['1-on-1', 'consultation', 'art', 'curation', 'personalized', 'expert']
  },
  {
    title: 'Art Prints Collection',
    url: '/print',
    description: 'High-quality art prints and limited edition physical artworks from digital collections.',
    category: 'Collections',
    keywords: ['prints', 'art', 'limited edition', 'physical', 'collection']
  },

  // Lifestyle & Travel - European Destinations
  {
    title: 'Portugal Digital Nomad Guide',
    url: '/portugal',
    description: 'Complete guide to living in Portugal as a digital nomad and Bitcoin enthusiast. Tax benefits, lifestyle, and crypto-friendly environment.',
    category: 'Lifestyle',
    featured: true,
    keywords: ['portugal', 'digital nomad', 'bitcoin', 'tax', 'lifestyle', 'europe', 'crypto-friendly']
  },
  {
    title: 'Spain Lifestyle Guide',
    url: '/spain',
    description: 'Discover Spain as a destination for Bitcoin enthusiasts, covering lifestyle, culture, and crypto regulations.',
    category: 'Lifestyle',
    keywords: ['spain', 'lifestyle', 'bitcoin', 'culture', 'crypto', 'europe']
  },
  {
    title: 'France Living Guide',
    url: '/france',
    description: 'Living in France as a Bitcoin enthusiast: culture, regulations, and lifestyle insights.',
    category: 'Lifestyle',
    keywords: ['france', 'living', 'bitcoin', 'culture', 'regulations', 'lifestyle']
  },
  {
    title: 'Italy Lifestyle',
    url: '/italy',
    description: 'Experience Italy\'s rich culture and lifestyle while navigating the Bitcoin and crypto landscape.',
    category: 'Lifestyle',
    keywords: ['italy', 'lifestyle', 'culture', 'bitcoin', 'crypto', 'living']
  },
  {
    title: 'Swiss Banking & Privacy',
    url: '/swiss',
    description: 'Swiss banking, privacy laws, and financial sovereignty in the digital age. Bitcoin-friendly jurisdiction insights.',
    category: 'Finance',
    keywords: ['switzerland', 'swiss', 'banking', 'privacy', 'sovereignty', 'bitcoin', 'finance']
  },

  // Luxury Destinations
  {
    title: 'Dubai Bitcoin Hub',
    url: '/dubai',
    description: 'Dubai as a crypto and Bitcoin hub: business opportunities, lifestyle, and regulatory environment.',
    category: 'Lifestyle',
    keywords: ['dubai', 'crypto hub', 'bitcoin', 'business', 'luxury', 'uae', 'lifestyle']
  },
  {
    title: 'Costa Rica Living',
    url: '/costarica',
    description: 'Costa Rica as a Bitcoin-friendly destination: lifestyle, regulations, and expat community.',
    category: 'Lifestyle',
    keywords: ['costa rica', 'bitcoin', 'expat', 'lifestyle', 'regulations', 'pura vida']
  },
  {
    title: 'Maldives Luxury Experience',
    url: '/maldives',
    description: 'Ultimate luxury travel experience in the Maldives with Bitcoin payment options and exclusive resorts.',
    category: 'Lifestyle',
    keywords: ['maldives', 'luxury', 'travel', 'bitcoin', 'resorts', 'experience']
  },
  {
    title: 'Biarritz Luxury Living',
    url: '/biarritz',
    description: 'Discover Biarritz, France as a luxury destination for the Bitcoin elite and digital nomads.',
    category: 'Lifestyle',
    keywords: ['biarritz', 'france', 'luxury', 'bitcoin', 'elite', 'surfing']
  },
  {
    title: 'Private Jet Travel',
    url: '/cirrus',
    description: 'Private aviation and luxury travel options for the Bitcoin wealthy. Cirrus aircraft and travel insights.',
    category: 'Lifestyle',
    keywords: ['private jet', 'cirrus', 'aviation', 'luxury', 'travel', 'bitcoin']
  },
  {
    title: 'Helicopter Travel',
    url: '/hx50',
    description: 'Helicopter travel and luxury aviation experiences for discerning Bitcoin enthusiasts.',
    category: 'Lifestyle',
    keywords: ['helicopter', 'hx50', 'aviation', 'luxury', 'travel', 'bitcoin']
  },

  // Alternative Living & Real Estate
  {
    title: 'Real Estate Investment',
    url: '/realestate',
    description: 'Real estate investment strategies measured in Bitcoin terms. Property analysis and market insights.',
    category: 'Investment',
    keywords: ['real estate', 'property', 'investment', 'bitcoin', 'market', 'analysis']
  },
  {
    title: 'Mobile Home Living',
    url: '/mobilehome',
    description: 'Alternative living in mobile homes: financial freedom through minimalism and location independence.',
    category: 'Lifestyle',
    keywords: ['mobile home', 'alternative living', 'minimalism', 'freedom', 'nomad']
  },
  {
    title: 'Airstream Travel',
    url: '/airstream',
    description: 'Luxury nomadic living with Airstream trailers. Travel and lifestyle insights for digital nomads.',
    category: 'Lifestyle',
    keywords: ['airstream', 'travel', 'nomadic', 'luxury', 'trailer', 'lifestyle']
  },
  {
    title: 'Catamaran Living',
    url: '/catamaran',
    description: 'Live aboard catamarans: sailing lifestyle, costs, and freedom on the water.',
    category: 'Lifestyle',
    keywords: ['catamaran', 'sailing', 'liveaboard', 'water', 'freedom', 'yacht']
  },
  {
    title: 'Smart Home Technology',
    url: '/smarthome',
    description: 'Smart home automation, energy efficiency, and technology integration for modern living.',
    category: 'Technology',
    keywords: ['smart home', 'automation', 'technology', 'energy', 'efficiency', 'iot']
  },
  {
    title: 'Land Investment Guide',
    url: '/land',
    description: 'Investing in land: forest properties, agricultural land, and alternative real estate strategies.',
    category: 'Investment',
    keywords: ['land', 'forest', 'agriculture', 'property', 'investment', 'alternative']
  },
  {
    title: 'EcoFlow Solar Power',
    url: '/ecoflow',
    description: 'Portable solar power solutions with EcoFlow. Energy independence and off-grid living.',
    category: 'Technology',
    keywords: ['ecoflow', 'solar', 'portable power', 'energy', 'off-grid', 'battery']
  },

  // Community & Culture
  {
    title: 'About LiveTheLifeTV',
    url: '/about',
    description: 'Our mission to educate and inspire Bitcoin adoption for financial freedom and sovereignty.',
    category: 'Education',
    keywords: ['about', 'mission', 'bitcoin', 'education', 'freedom', 'sovereignty', 'philosophy']
  },
  {
    title: 'Exclusive Member Club',
    url: '/club',
    description: 'Join our exclusive community of Bitcoin maximalists and lifestyle optimizers.',
    category: 'Community',
    keywords: ['club', 'community', 'membership', 'exclusive', 'bitcoin', 'lifestyle']
  },
  {
    title: 'Bitcoin Documentary',
    url: '/docu',
    description: 'Watch our featured Bitcoin documentary exploring the history, philosophy, and future of Bitcoin.',
    category: 'Education',
    featured: true,
    keywords: ['documentary', 'bitcoin', 'history', 'philosophy', 'education', 'video']
  },
  {
    title: 'Naval Ravikant Wisdom',
    url: '/naval',
    description: 'Naval Ravikant\'s insights on wealth creation, happiness, and decision-making in the digital age.',
    category: 'Philosophy',
    keywords: ['naval', 'ravikant', 'wisdom', 'wealth', 'happiness', 'philosophy']
  },
  {
    title: 'Tesla Innovation',
    url: '/tesla',
    description: 'Tesla innovation, electric vehicles, and Elon Musk\'s impact on technology and Bitcoin.',
    category: 'Technology',
    keywords: ['tesla', 'electric', 'innovation', 'elon musk', 'technology', 'sustainability']
  },

  // AI & Technology
  {
    title: 'AI Tools & Resources',
    url: '/ai',
    description: 'Comprehensive guide to AI tools, machine learning, and artificial intelligence applications.',
    category: 'Technology',
    featured: true,
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'tools', 'technology', 'automation']
  },
  {
    title: 'Voice AI Experience',
    url: '/voice',
    description: 'Interactive voice AI for asking questions and exploring Bitcoin, crypto, and lifestyle topics.',
    category: 'Technology',
    keywords: ['voice', 'ai', 'interactive', 'questions', 'chat', 'assistant']
  },
  {
    title: 'Cursor IDE Development',
    url: '/cursor',
    description: 'Cursor IDE and modern development tools for building with AI assistance and vibe coding.',
    category: 'Technology',
    keywords: ['cursor', 'ide', 'development', 'ai', 'coding', 'programming', 'vibe']
  },
  {
    title: 'VibeCode Programming',
    url: '/vibecode',
    description: 'Vibe coding philosophy: intuitive programming with AI assistance and creative development.',
    category: 'Technology',
    keywords: ['vibecode', 'programming', 'ai', 'creative', 'development', 'philosophy']
  },
  {
    title: 'DGX Spark Computing',
    url: '/dgx',
    description: 'High-performance computing with NVIDIA DGX systems for AI and machine learning workloads.',
    category: 'Technology',
    keywords: ['dgx', 'spark', 'nvidia', 'computing', 'ai', 'machine learning', 'gpu']
  },

  // Hardware & Security
  {
    title: 'Ledger Hardware Wallet',
    url: '/ledger',
    description: 'Ledger hardware wallet setup, security best practices, and Bitcoin storage solutions.',
    category: 'Security',
    keywords: ['ledger', 'hardware wallet', 'security', 'bitcoin', 'storage', 'cold storage']
  },
  {
    title: 'Coinbase Platform',
    url: '/platforms/coinbase',
    description: 'Coinbase exchange, custody services, and institutional Bitcoin trading platform.',
    category: 'Platforms',
    keywords: ['coinbase', 'exchange', 'custody', 'trading', 'bitcoin', 'institutional']
  },
  {
    title: 'Sparrow Wallet',
    url: '/sparrow',
    description: 'Sparrow Bitcoin wallet: advanced features, privacy, and self-custody solutions.',
    category: 'Security',
    keywords: ['sparrow', 'wallet', 'bitcoin', 'privacy', 'self-custody', 'advanced']
  },

  // Web3 Tools & Platforms
  {
    title: 'Fairmint Equity Platform',
    url: '/fairmint',
    description: 'Fairmint continuous equity and tokenization platform for startups and investment.',
    category: 'Web3',
    keywords: ['fairmint', 'equity', 'tokenization', 'startups', 'investment', 'web3']
  },
  {
    title: 'Otonomos Business Setup',
    url: '/otonomos',
    description: 'Otonomos decentralized business incorporation and legal entity management platform.',
    category: 'Web3',
    keywords: ['otonomos', 'business', 'incorporation', 'legal', 'entity', 'decentralized']
  },
  {
    title: 'Abra Investment App',
    url: '/abra',
    description: 'Abra investment application for cryptocurrencies, stocks, and alternative assets.',
    category: 'Investment',
    keywords: ['abra', 'investment', 'app', 'crypto', 'stocks', 'assets']
  },
  {
    title: 'FireFish Platform',
    url: '/firefish',
    description: 'FireFish decentralized social networking and Web3 community platform.',
    category: 'Web3',
    keywords: ['firefish', 'social', 'decentralized', 'web3', 'community', 'platform']
  },

  // Analytics & Research Tools
  {
    title: 'Sonar Analytics',
    url: '/sonar',
    description: 'Advanced analytics and research tools for Bitcoin and cryptocurrency market analysis.',
    category: 'Tools',
    keywords: ['sonar', 'analytics', 'research', 'bitcoin', 'crypto', 'analysis']
  },
  {
    title: 'Quality Assessment',
    url: '/quality',
    description: 'Quality assessment framework for evaluating Bitcoin projects and investment opportunities.',
    category: 'Analysis',
    keywords: ['quality', 'assessment', 'evaluation', 'bitcoin', 'projects', 'investment']
  },
  {
    title: 'Monaco Research',
    url: '/monaco',
    description: 'Monaco research platform for institutional-grade cryptocurrency and Bitcoin analysis.',
    category: 'Research',
    keywords: ['monaco', 'research', 'institutional', 'analysis', 'bitcoin', 'crypto']
  },
  {
    title: 'SharpLink Platform',
    url: '/sharplink',
    description: 'SharpLink professional networking and research platform for Bitcoin professionals.',
    category: 'Tools',
    keywords: ['sharplink', 'networking', 'professional', 'research', 'bitcoin', 'platform']
  },

  // The Degens Guide
  {
    title: 'Down Bad Analysis',
    url: '/downbad',
    description: 'Understanding market psychology when you\'re "down bad" - managing losses and emotional trading.',
    category: 'Education',
    keywords: ['down bad', 'psychology', 'losses', 'emotional', 'trading', 'management']
  },
  {
    title: 'Pump Not Fun Guide',
    url: '/pumpnotfun',
    description: 'Critical analysis of pump and dump schemes, meme coins, and speculative trading risks.',
    category: 'Education',
    keywords: ['pump', 'dump', 'meme coins', 'speculation', 'risks', 'education']
  },
  {
    title: 'The Grind Mindset',
    url: '/grind',
    description: 'Building wealth through consistent effort, discipline, and long-term Bitcoin accumulation.',
    category: 'Philosophy',
    keywords: ['grind', 'mindset', 'wealth', 'discipline', 'bitcoin', 'accumulation']
  },
  {
    title: '6-Figure Hell Escape',
    url: '/7fig',
    description: 'Breaking out of the 6-figure income trap and achieving true financial freedom with Bitcoin.',
    category: 'Education',
    keywords: ['6-figure', 'income trap', 'financial freedom', 'bitcoin', 'wealth', 'escape']
  },
  {
    title: 'FIRE Movement',
    url: '/fire',
    description: 'Financial Independence Retire Early (FIRE) movement with Bitcoin as the primary vehicle.',
    category: 'Education',
    keywords: ['fire', 'financial independence', 'retire early', 'bitcoin', 'movement']
  },

  // Lifestyle & Health
  {
    title: 'Wine Tasting Guide',
    url: '/wine',
    description: 'Wine tasting, collecting, and appreciation for the discerning Bitcoin enthusiast.',
    category: 'Lifestyle',
    keywords: ['wine', 'tasting', 'collecting', 'lifestyle', 'luxury', 'appreciation']
  },
  {
    title: 'Training & Fitness',
    url: '/train',
    description: 'Physical training, fitness routines, and health optimization for peak performance.',
    category: 'Lifestyle',
    keywords: ['training', 'fitness', 'health', 'optimization', 'performance', 'wellness']
  },
  {
    title: 'Pool Life & Leisure',
    url: '/pool',
    description: 'Pool lifestyle, luxury amenities, and leisure activities for the Bitcoin wealthy.',
    category: 'Lifestyle',
    keywords: ['pool', 'luxury', 'leisure', 'lifestyle', 'amenities', 'relaxation']
  },

  // Content & Philosophy  
  {
    title: 'Zero Hour Philosophy',
    url: '/zero',
    description: 'Zero hour decision making and the philosophical implications of Bitcoin adoption.',
    category: 'Philosophy',
    keywords: ['zero', 'philosophy', 'decision making', 'bitcoin', 'adoption', 'implications']
  },
  {
    title: 'Time Value Insights',
    url: '/time',
    description: 'Understanding time preference, delayed gratification, and Bitcoin as a store of time.',
    category: 'Philosophy',
    keywords: ['time', 'preference', 'gratification', 'bitcoin', 'store of time', 'value']
  },

  // Additional Tools & Resources
  {
    title: 'News & Updates Hub',
    url: '/news',
    description: 'Latest Bitcoin, crypto, and financial news from our editorial team and trusted sources.',
    category: 'News',
    featured: true,
    keywords: ['news', 'updates', 'bitcoin', 'crypto', 'finance', 'editorial', 'current events']
  },
  {
    title: 'Content Notebook',
    url: '/notebook',
    description: 'AI-powered content creation and blog post generation for Bitcoin and crypto topics.',
    category: 'Tools',
    keywords: ['notebook', 'content', 'ai', 'blog', 'writing', 'generation', 'creation']
  }


];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase().trim();

    if (!query) {
      return NextResponse.json({ results: [] }, { status: 400 });
    }

    logger.info('Search request:', { query });

    // Search algorithm
    const results = CONTENT_INDEX
      .map(item => {
        let score = 0;
        const searchTerms = query.split(' ').filter(term => term.length > 1);

        // Title match (highest priority)
        if (item.title.toLowerCase().includes(query)) {
          score += 100;
        }

        // Exact keyword match
        if (item.keywords?.some(keyword => keyword.toLowerCase() === query)) {
          score += 80;
        }

        // Keyword partial match
        if (item.keywords?.some(keyword => keyword.toLowerCase().includes(query))) {
          score += 50;
        }

        // Description match
        if (item.description.toLowerCase().includes(query)) {
          score += 30;
        }

        // Category match
        if (item.category.toLowerCase().includes(query)) {
          score += 40;
        }

        // Multiple search terms
        searchTerms.forEach(term => {
          if (item.title.toLowerCase().includes(term)) score += 20;
          if (item.description.toLowerCase().includes(term)) score += 10;
          if (item.keywords?.some(keyword => keyword.toLowerCase().includes(term))) {
            score += 15;
          }
        });

        // Featured boost
        if (item.featured) {
          score += 10;
        }

        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20) // Limit to top 20 results
      .map(({ score: _score, ...item }) => item); // Remove score from final results

    logger.info('Search results:', { query, count: results.length });

    return NextResponse.json({ 
      results,
      total: results.length,
      query 
    });

  } catch (error) {
    logger.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
} 