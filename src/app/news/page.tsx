'use client';

import { useEffect, useState } from 'react';
import { ghostService } from '@/services/ghost';
import { logger } from '@/services/lib/logger';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  feature_image?: string;
  published_at?: string;
  tags: Array<{ name: string; slug: string }>;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const posts = await ghostService.getPosts();
        // Transform the posts to match the Article interface
        const transformedPosts = posts.map(post => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || '',
          feature_image: post.feature_image || '',
          published_at: post.published_at || '',
          tags: post.tags?.map(tag => (typeof tag === 'string' 
            ? { name: tag, slug: tag.toLowerCase().replace(/\s+/g, '-') }
            : tag
          )) || []
        }));
        setArticles(transformedPosts);
      } catch (error) {
        logger.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Bitcoin Insights</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore the latest insights, analysis, and developments in the Bitcoin ecosystem.
            </p>
          </div>

          {/* Articles Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-yellow-500">Loading articles...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-colors"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.feature_image || '/images/default-bitcoin.jpg'}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-zinc-400 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <span
                          key={tag.slug}
                          className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {formatDate(article.published_at)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 