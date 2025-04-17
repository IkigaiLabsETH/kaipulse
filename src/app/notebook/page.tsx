'use client';

import { useState } from 'react';
import { BlogPostIdea } from '@/services/notebook/types';
import { logger } from '@/services/lib/logger';

export default function NotebookPage() {
  const [idea, setIdea] = useState<BlogPostIdea>({
    title: '',
    tweetUrl: '',
    keyPoints: ['']
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const updateKeyPoints = (value: string) => {
    setIdea(prev => ({
      ...prev,
      keyPoints: [value]
    }));
  };

  const analyzeTweet = async (url: string) => {
    try {
      setIsAnalyzing(true);
      setStatus('Analyzing tweet...');
      
      const response = await fetch('/api/analyze-tweet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze tweet');
      }

      const result = await response.json();
      
      // Update the form with analyzed tweet data
      setIdea(prev => ({
        ...prev,
        keyPoints: [result.keyPoints?.join('\n') || ''],
        title: result.suggestedTitle || prev.title
      }));

      setStatus('Tweet analyzed successfully!');
    } catch (error) {
      setStatus('Error analyzing tweet');
      logger.error('Error analyzing tweet:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generatePost = async () => {
    try {
      setIsGenerating(true);
      setStatus('Generating blog post...');
      
      const response = await fetch('/api/generate-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(idea),
      });

      if (!response.ok) {
        throw new Error('Failed to generate post');
      }

      const result = await response.json();
      setGeneratedContent(result.content);
      setIsPreviewMode(true);
      setStatus('Blog post generated successfully!');
      logger.info('Blog post generated');
    } catch (error) {
      setStatus('Error generating blog post');
      logger.error('Error generating blog post:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const publishPost = async () => {
    try {
      setIsPublishing(true);
      setStatus('Publishing blog post...');
      
      const response = await fetch('/api/publish-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...idea,
          content: generatedContent
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to publish post');
      }

      const result = await response.json();
      setStatus('Blog post published successfully!');
      logger.info('Blog post published:', result.slug);
      
      // Reset the form
      setIdea({
        title: '',
        tweetUrl: '',
        keyPoints: ['']
      });
      setGeneratedContent('');
      setIsPreviewMode(false);
    } catch (error) {
      setStatus('Error publishing blog post');
      logger.error('Error publishing blog post:', error);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Bitcoin Blog Notebook</h1>
        
        {!isPreviewMode ? (
          <div className="space-y-6">
            {/* Twitter URL */}
            <div>
              <label className="block text-sm font-medium mb-2">Twitter URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={idea.tweetUrl}
                  onChange={e => setIdea(prev => ({ ...prev, tweetUrl: e.target.value }))}
                  className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
                  placeholder="Paste a tweet URL to auto-populate fields"
                />
                <button
                  onClick={() => idea.tweetUrl && analyzeTweet(idea.tweetUrl)}
                  disabled={isAnalyzing || !idea.tweetUrl}
                  className={`bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transition-colors ${
                    isAnalyzing || !idea.tweetUrl ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">Title (optional)</label>
              <input
                type="text"
                value={idea.title}
                onChange={e => setIdea(prev => ({ ...prev, title: e.target.value }))}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
                placeholder="Enter a title or let AI generate one"
              />
            </div>

            {/* Notes & Ideas */}
            <div>
              <label className="block text-sm font-medium mb-2">Notes & Ideas</label>
              <textarea
                value={idea.keyPoints?.[0] || ''}
                onChange={e => updateKeyPoints(e.target.value)}
                className="w-full h-64 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white resize-none"
                placeholder="Paste your notes, ideas, or bullet points here..."
              />
            </div>

            {/* Generate Button */}
            <div className="pt-6">
              <button
                onClick={generatePost}
                disabled={isGenerating}
                className={`w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg transition-colors ${
                  isGenerating ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isGenerating ? 'Generating...' : 'Generate Blog Post'}
              </button>
              {status && (
                <p className="mt-4 text-center text-sm text-yellow-500/80">{status}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Preview Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Preview</h2>
              <button
                onClick={() => setIsPreviewMode(false)}
                className="text-yellow-500 hover:text-yellow-400"
              >
                Back to Edit
              </button>
            </div>

            {/* Preview Content */}
            <div className="prose prose-invert max-w-none">
              <textarea
                value={generatedContent}
                onChange={e => setGeneratedContent(e.target.value)}
                className="w-full h-[600px] bg-zinc-900 border border-zinc-700 rounded-lg p-6 text-white resize-none"
              />
            </div>

            {/* Publish Button */}
            <div className="pt-6">
              <button
                onClick={publishPost}
                disabled={isPublishing}
                className={`w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg transition-colors ${
                  isPublishing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isPublishing ? 'Publishing...' : 'Publish Blog Post'}
              </button>
              {status && (
                <p className="mt-4 text-center text-sm text-yellow-500/80">{status}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 