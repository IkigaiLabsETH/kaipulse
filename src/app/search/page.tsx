'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Clock } from 'lucide-react';
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

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    'Bitcoin Calculator',
    'NFT Collections',
    'AI Tools',
    'Freedom Calculator',
    'Crypto Analysis',
    'News',
    'Market Data',
    'Altcoins',
    'Investment Strategy'
  ];

  const quickCategories = [
    { name: 'Tools', icon: '🛠️', description: 'Calculators & utilities' },
    { name: 'Collections', icon: '🎨', description: 'NFT & art galleries' },
    { name: 'Analysis', icon: '📊', description: 'Market insights' },
    { name: 'Education', icon: '📚', description: 'Learning resources' }  
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

  return (
    <div className="min-h-screen bg-black text-white">
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

      <div className="max-w-4xl mx-auto px-4">
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
              <h1 className="font-boska text-4xl md:text-6xl text-yellow-500 mb-4">
                Find Anything
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Search through our Bitcoin education, NFT collections, market analysis, 
                tools, and more. Your gateway to financial freedom starts here.
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
                placeholder="Search Bitcoin education, NFTs, tools, analysis..."
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

        {/* Popular Searches - Only show before first search */}
        {!hasSearched && (
          <div className="mb-12">
            <h2 className="text-lg font-medium text-gray-300 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Categories - Only show before first search */}
        {!hasSearched && (
          <div className="mb-12">
            <h2 className="text-lg font-medium text-gray-300 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(category.name)}
                  className="p-6 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg transition-colors text-left group"
                >
                  <div className="text-2xl mb-3">{category.icon}</div>
                  <h3 className="font-medium text-white group-hover:text-yellow-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                </button>
              ))}
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
                  {popularSearches.slice(0, 5).map((search, index) => (
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
      </div>
    </div>
  );
}
