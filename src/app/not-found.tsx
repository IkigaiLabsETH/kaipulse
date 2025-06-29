'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Bitcoin, Zap, MapPin, Users, ChevronRight } from 'lucide-react';

export default function NotFound() {
  const [query, setQuery] = useState('');

  const popularSearches = [
    'Bitcoin Calculator', 'Freedom Calculator', 'MSTY Strategy', 'MicroStrategy',
    'NFT Collections', 'Art Gallery', 'PFP Generator', 'Prints',
    'Portugal Guide', 'Real Estate', 'Airstream', 'Dubai Luxury',
    'Tesla Options', 'Covered Calls', 'Lightning Network', 'Mining'
  ];

  const featuredContent = [
    { title: 'Freedom Calculator', url: '/calculator', description: 'Calculate your path to financial freedom' },
    { title: 'Bitcoin Education', url: '/platforms/msty/bitcoin', description: 'Master the fundamentals of Bitcoin' },
    { title: 'Tesla Options Strategy', url: '/options', description: 'Generate income with covered calls' },
    { title: 'NFT Collections', url: '/collections', description: 'Curated digital art collections' }
  ];

  const quickCategories = [
    { icon: Bitcoin, title: 'Bitcoin Strategy', items: ['Calculator', 'MSTY', 'MicroStrategy', 'Node'], color: 'text-orange-400' },
    { icon: Zap, title: 'DeFi & Trading', items: ['Options', 'HyperLiquid', 'Ethereum', 'Solana'], color: 'text-purple-400' },
    { icon: MapPin, title: 'Lifestyle', items: ['Portugal', 'Dubai', 'Real Estate', 'Travel'], color: 'text-green-400' },
    { icon: Users, title: 'Community', items: ['Gallery', 'Collections', 'PFP', 'Voice'], color: 'text-blue-400' }
  ];

  const handleSearch = () => {
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 404 Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/bitcoin/bitcoin-circle-colorful.svg"
              alt="LiveTheLifeTV"
              width={80}
              height={80}
              className="w-20 h-20 mx-auto mb-6 opacity-80"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight mb-4 font-boska">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 font-satoshi">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist, but don&apos;t worry – 
            we have plenty of other valuable content to explore.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-yellow-500 mb-6 text-center">
              Search for what you need
            </h3>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search Bitcoin education, tools, lifestyle guides..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-lg"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSearch}
                disabled={!query.trim()}
                className="px-8 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-yellow-500 mb-6 flex items-center justify-center">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            Popular Destinations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredContent.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="p-6 bg-[#1c1f26] hover:bg-gray-800 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transition-all group"
              >
                <h4 className="font-medium text-white group-hover:text-yellow-500 transition-colors mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                <div className="flex items-center text-yellow-500">
                  <span className="text-sm">Explore</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-yellow-500 mb-6 flex items-center justify-center">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            Popular Searches
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((search, index) => (
              <Link
                key={index}
                href={`/search?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-yellow-500 mb-6 flex items-center justify-center">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            Browse by Category
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                    <h4 className="font-medium text-white">{category.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={`/search?q=${encodeURIComponent(item)}`}
                        className="block text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Return Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 