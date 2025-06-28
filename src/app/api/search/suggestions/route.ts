import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

interface SearchSuggestion {
  query: string;
  category: string;
}

// Predefined suggestions based on popular searches and content
const SUGGESTIONS: SearchSuggestion[] = [
  // Tools & Calculators
  { query: 'Bitcoin Calculator', category: 'Tools' },
  { query: 'MSTY Calculator', category: 'Tools' },
  { query: 'Freedom Calculator', category: 'Tools' },
  { query: 'Portfolio Calculator', category: 'Tools' },
  { query: 'AI Tools', category: 'Tools' },
  { query: 'Content Creation Tools', category: 'Tools' },
  { query: 'NFT Minting', category: 'Tools' },

  // Bitcoin & Crypto
  { query: 'Bitcoin', category: 'Crypto' },
  { query: 'Bitcoin Analysis', category: 'Analysis' },
  { query: 'Bitcoin Price', category: 'Analysis' },
  { query: 'Bitcoin Mining', category: 'Technology' },
  { query: 'Bitcoin Strategy', category: 'Education' },
  { query: 'Altcoins', category: 'Crypto' },
  { query: 'Ethereum', category: 'Crypto' },
  { query: 'DeFi', category: 'Crypto' },
  { query: 'Lightning Network', category: 'Technology' },

  // NFTs & Collections
  { query: 'NFT Collections', category: 'Collections' },
  { query: 'Bored Ape Yacht Club', category: 'Collections' },
  { query: 'CryptoPunks', category: 'Collections' },
  { query: 'Digital Art', category: 'Collections' },
  { query: 'PFP Collections', category: 'Collections' },
  { query: 'Art Gallery', category: 'Collections' },

  // Investment & Markets
  { query: 'Stock Market', category: 'Analysis' },
  { query: 'Investment Strategy', category: 'Analysis' },
  { query: 'Portfolio Management', category: 'Analysis' },
  { query: 'Market Analysis', category: 'Analysis' },
  { query: 'Trading Strategies', category: 'Analysis' },
  { query: 'Options Trading', category: 'Analysis' },
  { query: 'Real Estate', category: 'Investment' },
  { query: 'Gold vs Bitcoin', category: 'Analysis' },

  // Technology
  { query: 'AI', category: 'Technology' },
  { query: 'Artificial Intelligence', category: 'Technology' },
  { query: 'Machine Learning', category: 'Technology' },
  { query: 'Web3', category: 'Technology' },
  { query: 'Blockchain', category: 'Technology' },
  { query: 'Tesla', category: 'Technology' },
  { query: 'Cursor IDE', category: 'Technology' },

  // Lifestyle
  { query: 'Biohacking', category: 'Lifestyle' },
  { query: 'Health Optimization', category: 'Lifestyle' },
  { query: 'Dubai Lifestyle', category: 'Lifestyle' },
  { query: 'Portugal Living', category: 'Lifestyle' },
  { query: 'Travel', category: 'Lifestyle' },
  { query: 'Luxury Living', category: 'Lifestyle' },

  // Education & News
  { query: 'Bitcoin Education', category: 'Education' },
  { query: 'Financial Freedom', category: 'Education' },
  { query: 'News', category: 'News' },
  { query: 'Market News', category: 'News' },
  { query: 'Crypto News', category: 'News' },

  // Platforms & Exchanges
  { query: 'Hyperliquid', category: 'Platforms' },
  { query: 'OpenSea', category: 'Platforms' },
  { query: 'Coinbase', category: 'Platforms' },
  { query: 'Strike', category: 'Platforms' },

  // Specific Assets
  { query: 'MSTY', category: 'Assets' },
  { query: 'NVDA', category: 'Assets' },
  { query: 'TSLA', category: 'Assets' },
  { query: 'Solana', category: 'Assets' },
  { query: 'Dogecoin', category: 'Assets' }
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase().trim();

    if (!query || query.length < 2) {
      return NextResponse.json({ suggestions: [] });
    }

    logger.info('Suggestions request:', { query });

    // Find matching suggestions
    const matchingSuggestions = SUGGESTIONS
      .filter(suggestion => 
        suggestion.query.toLowerCase().includes(query) ||
        suggestion.category.toLowerCase().includes(query)
      )
      .slice(0, 8) // Limit to 8 suggestions
      .sort((a, b) => {
        // Prioritize exact matches at the beginning
        const aStartsWith = a.query.toLowerCase().startsWith(query);
        const bStartsWith = b.query.toLowerCase().startsWith(query);
        
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        
        // Then sort by relevance (shorter suggestions first)
        return a.query.length - b.query.length;
      });

    // Add some dynamic suggestions based on query patterns
    const dynamicSuggestions: SearchSuggestion[] = [];
    
    if (query.includes('bitcoin') || query.includes('btc')) {
      dynamicSuggestions.push(
        { query: 'Bitcoin Price Analysis', category: 'Analysis' },
        { query: 'Bitcoin Investment Strategy', category: 'Education' }
      );
    }
    
    if (query.includes('nft') || query.includes('art')) {
      dynamicSuggestions.push(
        { query: 'NFT Market Trends', category: 'Analysis' },
        { query: 'Art Collections', category: 'Collections' }
      );
    }
    
    if (query.includes('ai') || query.includes('artificial')) {
      dynamicSuggestions.push(
        { query: 'AI Trading Tools', category: 'Tools' },
        { query: 'AI Content Generation', category: 'Tools' }
      );
    }

    // Combine and deduplicate
    const allSuggestions = [...matchingSuggestions, ...dynamicSuggestions]
      .filter((suggestion, index, self) => 
        index === self.findIndex(s => s.query === suggestion.query)
      )
      .slice(0, 8);

    logger.info('Suggestions results:', { query, count: allSuggestions.length });

    return NextResponse.json({ 
      suggestions: allSuggestions,
      query 
    });

  } catch (error) {
    logger.error('Suggestions API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch suggestions' },
      { status: 500 }
    );
  }
} 