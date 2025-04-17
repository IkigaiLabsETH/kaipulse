'use client';

import { useEffect, useState } from 'react';
import { ghostService } from '@/services/ghost';
import { logger } from '@/services/lib/logger';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleProps {
  params: {
    slug: string;
  };
}

interface Article {
  title: string;
  html: string;
  feature_image?: string;
  published_at?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
}

export default function ArticlePage({ params }: ArticleProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const post = await ghostService.getPostBySlug(params.slug);
        setArticle(post as Article);
      } catch (error) {
        logger.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [params.slug]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="animate-pulse text-yellow-500">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-black">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
          <Link href="/news" className="text-yellow-500 hover:text-yellow-400">
            ← Back to articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8"
        >
          ← Back to articles
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">{article.title}</h1>
          <div className="flex flex-wrap gap-4 items-center text-sm text-zinc-400">
            <time dateTime={article.published_at}>
              {formatDate(article.published_at)}
            </time>
            <div className="flex gap-2">
              {article.tags?.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.feature_image && (
          <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={article.feature_image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <article
          className="prose prose-invert prose-yellow max-w-none"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </div>
  );
} 