'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Clock, Bitcoin, Zap, MapPin, Wrench, Users, ChevronRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  category: string;
  lastUpdated?: string;
  featured?: boolean;
}

interface SearchSuggestion {
  query: string;
  category: string;
}

interface CategorySection {
  title: string;
  icon: LucideIcon;
  description: string;
  subcategories: {
    name: string;
    items: string[];
  }[];
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    // Core Bitcoin & Strategy
    'MicroStrategy', 'Strike', 'Nakamoto', '21 Energy', 'Max Pain',
    
    // Hardware & Security  
   'Bitaxe', 'S9 Pro',
    
    // DeFi & Altcoins
   'HyperLiquid', 'Solana', 'Sui', 'Lombard', 'Stride',
    
    // NFTs & Digital Art
    'NFT Collections', 'Art Gallery', 'Prints', 
    
    // Stocks & Traditional Finance
    'Tesla', 'NVDA', 'Mag7', 'Gold', 'Options Trading', 'IPO', 'Stocks', 'Hood',
    
    // Travel & Destinations
    'Portugal Guide', 'Spain', 'Costa Rica', 'Dubai', 'Monaco', 'Morocco', 'Biarritz', 'Sotogrande',
    
    // Lifestyle & Luxury
    'Real Estate', 'Airstream', 'Catamaran', 'Mobile Home', 'Land Investment', 'Smart Home', 'Pool Life', 'Sauna', 'Hastens', 'Six Senses',
    
    // AI & Technology
    'AI Tools', 'Voice Assistant', 'Cursor IDE', 'Vibe Coding', 'Eliza', 'Neuralink', 'Robotaxi', 
    
    // Health & Biohacking
    'Biohacking', 'Mitochondria', 'Training', 'Whoop', 'Quality of Life',
    
    // Philosophy & Culture
    'Naval Wisdom', 'Fire Movement', 'Bitcoin Documentary', 'Down Bad', 'Grind', 'Time Management', 'Cost of Living',
    
    // Business & Tools
    'Fairmint', 'Otonomos', 'SharpLink', 'Sonar', 'Distribution'
  ];

  const featuredContent = [
    { title: 'Bitcoin Core Education', url: '/platforms/msty/bitcoin', description: 'Master the fundamentals of Bitcoin' },
    { title: 'MicroStrategy Strategy', url: '/platforms/msty/mstr', description: 'Corporate Bitcoin adoption playbook' },
    { title: 'Bitcoin Documentary', url: '/docu', description: 'Essential viewing for Bitcoin understanding' },
  ];

  const categoryData: CategorySection[] = [
    {
      title: 'Bitcoin Strategy',
      icon: Bitcoin,
      description: 'Master Bitcoin fundamentals and build robust long-term strategies',
      subcategories: [
        {
          name: 'Core Bitcoin',
          items: ['Bitcoin Basics', 'Whitepaper', 'MicroStrategy', 'MSTY', 'Strike', 'Nakamoto', 'Treasury Holdings']
        },
        {
          name: 'Mining & Infrastructure', 
          items: ['S9 Pro', 'Bitaxe', 'Node Setup', 'MARA', 'Lightning Network', '21 Energy']
        },
        {
          name: 'Investment Tools',
          items: ['Calculator', 'Cost of Living', 'Max Pain', 'Liquidity Analysis', 'Portfolio Tools']
        }
      ]
    },
    {
      title: 'DeFi & Web3',
      icon: Zap,
      description: 'Explore decentralized finance and Web3 technologies with a Bitcoin-first approach',
      subcategories: [
        {
          name: 'DeFi Platforms',
          items: ['Ethereum', 'HyperLiquid', 'Aave', 'Solana', 'Sui', 'EtherFi']
        },
        {
          name: 'NFTs & Collections',
          items: ['Collections', 'PFP', 'Gallery', 'Art', 'Prints', '1-on-1']
        },
        {
          name: 'Web3 Tools',
          items: ['Fairmint', 'Otonomos', 'Abra', 'FireFish']
        }
      ]
    },
    {
      title: 'Lifestyle & Travel',
      icon: MapPin,
      description: 'Live the Bitcoin lifestyle while exploring the world',
      subcategories: [
        {
          name: 'European Destinations',
          items: ['Portugal', 'Spain', 'France', 'Italy', 'Switzerland']
        },
        {
          name: 'Alternative Living',
          items: ['Real Estate', 'Mobile Homes', 'Airstream', 'Catamaran', 'Smart Home', 'Land', 'EcoFlow']
        },
        {
          name: 'Luxury Destinations',
          items: ['Dubai', 'Costa Rica', 'Maldives', 'Biarritz', 'Private Jet', 'Helicopter']
        }
      ]
    },
    {
      title: 'Tools & Resources',
      icon: Wrench,
      description: 'Comprehensive suite of tools for your Bitcoin journey',
      subcategories: [
        {
          name: 'Hardware & Security',
          items: ['Ledger', 'Coinbase', 'Sparrow Wallet']
        },
        {
          name: 'Analytics & Research',
          items: ['Sonar', 'Quality Analysis', 'Monaco', 'SharpLink']
        },
        {
          name: 'The Degens Guide',
          items: ['Pump Not Fun', 'Grind', '6fig Hell', 'Fire Movement']
        }
      ]
    },
    {
      title: 'Community & Culture',
      icon: Users,
      description: 'Join our vibrant community of Bitcoin enthusiasts',
      subcategories: [
        {
          name: 'Lifestyle & Health',
          items: ['Tesla', 'Training', 'Wine Tasting', 'Pool Life']
        },
        {
          name: 'Content & Media',
          items: ['Bitcoin Documentary', 'Zero', 'Naval Wisdom', 'Time Management']
        },
        {
          name: 'Voice & AI',
          items: ['Voice Assistant', 'AI Tools', 'VibeCode', 'Cursor IDE', 'DGX Spark']
        }
      ]
    }
  ];

  useEffect(() => {
    // Focus the search input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 1) {
        try {
          const response = await fetch(`/api/search/suggestions?q=${encodeURIComponent(query)}`);
          if (response.ok) {
            const data = await response.json();
            setSuggestions(data.suggestions || []);
            setShowSuggestions(true);
          }
        } catch {
          // Error fetching suggestions - silently fail
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    setShowSuggestions(false);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results || []);
      } else {
        // Search failed
        setResults([]);
      }
    } catch {
      // Error performing search
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Header with Logo */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/bitcoin/bitcoin-circle-colorful.svg"
              alt="LiveTheLifeTV"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-boska text-xl text-yellow-500">LiveTheLifeTV</span>
          </Link>
          <div className="text-sm text-gray-400">
            Search all content
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Search Section */}
        <div className={cn(
          "transition-all duration-300",
          hasSearched ? "py-8" : "py-20"
        )}>
          {/* Logo for initial state */}
          {!hasSearched && (
            <div className="text-center mb-12">
              <Image
                src="/bitcoin/bitcoin-circle-colorful.svg"
                alt="LiveTheLifeTV Search"
                width={120}
                height={120}
                className="w-30 h-30 mx-auto mb-6"
              />
              <h1 className="text-center">
                <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                  Find Anything
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Search through our Bitcoin education, NFT collections, market analysis, 
                lifestyle guides, tools, and more. Your gateway to financial freedom starts here.
              </p>
            </div>
          )}

          {/* Search Input */}
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search Bitcoin education, NFTs, tools, lifestyle guides, travel..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-lg"
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => handleSearch()}
                disabled={isLoading || !query.trim()}
                className="px-8 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.query)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Search className="h-4 w-4 text-gray-400" />
                      <span className="text-white">{suggestion.query}</span>
                      <span className="text-xs text-gray-400 ml-auto">{suggestion.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Featured Content - Only show before first search */}
        {!hasSearched && (
          <div className="mb-12">
            <h2 className="text-xl font-medium text-yellow-500 mb-6 flex items-center">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Featured Content
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredContent.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="p-6 bg-[#1c1f26] hover:bg-gray-800 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transition-all group"
                >
                  <h3 className="font-medium text-white group-hover:text-yellow-500 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                  <div className="flex items-center mt-3 text-yellow-500">
                    <span className="text-sm">Explore</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Searches - Only show before first search */}
        {!hasSearched && (
          <div className="mb-12">
            <h2 className="text-xl font-medium text-yellow-500 mb-6 flex items-center">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comprehensive Categories - Only show before first search */}
        {!hasSearched && (
          <div className="mb-12">
            <h2 className="text-xl font-medium text-yellow-500 mb-6 flex items-center">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Browse by Category
            </h2>
            <div className="space-y-4">
              {categoryData.map((category, index) => {
                const IconComponent = category.icon;
                const isExpanded = expandedCategory === category.title;
                
                return (
                  <div
                    key={index}
                    className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
                  >
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="w-full p-6 text-left hover:bg-gray-800 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <IconComponent className="h-6 w-6 text-yellow-500" />
                        <div>
                          <h3 className="font-medium text-yellow-500 text-lg">
                            {category.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                        </div>
                      </div>
                      <ChevronRight 
                        className={cn(
                          "h-5 w-5 text-yellow-500 transition-transform duration-200",
                          isExpanded && "rotate-90"
                        )} 
                      />
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6">
                        <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-gray-700">
                          {category.subcategories.map((subcat, subIndex) => (
                            <div key={subIndex} className="space-y-3">
                              <h4 className="font-medium text-white">{subcat.name}</h4>
                              <ul className="space-y-2">
                                {subcat.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <button
                                      onClick={() => handleSuggestionClick(item)}
                                      className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                                    >
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Search Results */}
        {hasSearched && (
          <div className="pb-12">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-2 border-yellow-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-400">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-400">
                    About {results.length} results for <span className="text-white">&ldquo;{query}&rdquo;</span>
                  </p>
                </div>
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="group"
                    >
                      <Link 
                        href={result.url}
                        className="block hover:bg-gray-900/50 -mx-4 px-4 py-4 rounded-lg transition-colors"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-xl text-blue-400 group-hover:text-blue-300 font-medium">
                                {result.title}
                              </h3>
                              {result.featured && (
                                <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-green-600 text-sm mb-2">{result.url}</p>
                            <p className="text-gray-300 leading-relaxed">{result.description}</p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                              <span className="flex items-center space-x-1">
                                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span>{result.category}</span>
                              </span>
                              {result.lastUpdated && (
                                <span className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{result.lastUpdated}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">
                  Try different keywords or browse our popular content below.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.slice(0, 8).map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="px-4 py-2 bg-yellow-500 text-black rounded-full text-sm hover:bg-yellow-400 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* About LiveTheLifeTV - Always show at bottom */}
        <div className="mt-16 mb-12">
          <div className="bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🎯 Our Mission
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                We believe in &ldquo;Fix Money, Fix The World.&rdquo; Life isn&rsquo;t about accumulating the biggest stack - it&rsquo;s about living your best life with Bitcoin. Our platform provides educational resources and tools to help you achieve financial freedom while embracing life&rsquo;s true value.
              </p>
              <p className="text-lg">
                If you&rsquo;re new here, start with our <Link href="/docu" className="text-yellow-500 hover:text-yellow-400 transition-colors">featured Bitcoin documentary</Link> and the <Link href="/platforms/msty/bitcoin" className="text-yellow-500 hover:text-yellow-400 transition-colors">Bitcoin page</Link>. Our core focus is Bitcoin, and everything else is research to help you live the life you want. We&rsquo;re leveraging AI through vibe coding to create content that will help fine-tune our bespoke model.
              </p>
              <p className="text-lg">
                Yes, this app might feel like a hot mess - because it is! We&rsquo;re exploring the intersection of Bitcoin, AI, and lifestyle. For crypto veterans: while most altcoins are going to zero, we dive deep into the few dozen projects actually shipping innovative solutions. We trade them hoping for short-term outperformance against Bitcoin, but always swap back to our core Bitcoin stack. Check out our <Link href="/col" className="text-yellow-500 hover:text-yellow-400 transition-colors">cost of living analysis</Link> to see how we measure everything in Bitcoin and satoshis.
              </p>
              <p className="text-lg">
                Our daily routine? Check Mando Minutes for news, monitor Bitcoin price, and review our <Link href="/crypto" className="text-yellow-500 hover:text-yellow-400 transition-colors">watchlist</Link> for potential <Link href="/crypto" className="text-yellow-500 hover:text-yellow-400 transition-colors">outperformers</Link>. We write deep dives on projects that could impact our industry - from <Link href="/altcoins" className="text-yellow-500 hover:text-yellow-400 transition-colors">HyperLiquid and Sui to Solana, Ethereum, and OG memes like DOGE</Link>. We track traditional finance&rsquo;s embrace of Bitcoin after a decade of resistance, focusing on major players like MicroStrategy by Saylor and 21 by Jack, plus innovative products like MSTY, Stride, and Strike.
              </p>
              <p className="text-lg">
                Beyond trading, we&rsquo;re passionate about digital art - creating, curating, and collecting. Our lifestyle thesis in the About section shares insights from our 20+ years in travel and real estate, documenting our journey through the past, present, and future of this space.
              </p>
              <p className="text-lg">
                Above all, <Link href="/assets" className="text-yellow-500 hover:text-yellow-400 transition-colors">stay hungry, stay curious</Link>. Use our <Link href="/voice" className="text-yellow-500 hover:text-yellow-400 transition-colors">voice AI</Link> to ask questions and explore. Our platform is your gateway to understanding Bitcoin, leveraging AI, and living life on your own terms.
              </p>
              <p className="text-lg">
                If Bitcoin seems too good to be true, that&rsquo;s because it is - but not in the way you might think. It&rsquo;s not a <Link href="/downbad" className="text-yellow-500 hover:text-yellow-400 transition-colors">get-rich-quick scheme or a magical solution</Link>. It&rsquo;s a fundamental shift in how we think about money, value, and freedom. The system isn&rsquo;t broken - it&rsquo;s working exactly as designed to extract value from your labor. Bitcoin isn&rsquo;t trying to sell you something or pump your bags. It just... is. A mathematical truth, a monetary rebellion, and your final protest vote against a system that turned your hard work into &ldquo;clown coupons.&rdquo; You won&rsquo;t &ldquo;buy Bitcoin someday&rdquo; - you&rsquo;ll buy Bitcoin, or you&rsquo;ll own nothing. The choice is yours. <Link href="/downbad" className="text-yellow-500 hover:text-yellow-400 transition-colors">Learn more about why we&rsquo;re down bad</Link> and <Link href="/maxpain" className="text-yellow-500 hover:text-yellow-400 transition-colors">understand Bitcoin&rsquo;s market cycles</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
