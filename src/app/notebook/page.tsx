'use client';

import { useState } from 'react';
import { BlogPostIdea } from '@/services/notebook/types';
import { logger } from '@/services/lib/logger';

type ToneType = 'technical' | 'educational' | 'conversational' | 'professional';
type LengthType = 'short' | 'medium' | 'long';

export default function NotebookPage() {
  const [idea, setIdea] = useState<BlogPostIdea>({
    title: '',
    tweetUrl: '',
    keyPoints: [],
    targetAudience: '',
    tone: 'professional',
    desiredLength: 'medium',
    references: [],
    tags: ['Bitcoin']
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [status, setStatus] = useState<string>('');

  const addKeyPoint = () => {
    setIdea(prev => ({
      ...prev,
      keyPoints: [...(prev.keyPoints || []), '']
    }));
  };

  const addReference = () => {
    setIdea(prev => ({
      ...prev,
      references: [...(prev.references || []), '']
    }));
  };

  const updateKeyPoint = (index: number, value: string) => {
    setIdea(prev => ({
      ...prev,
      keyPoints: (prev.keyPoints || []).map((point, i) => i === index ? value : point)
    }));
  };

  const updateReference = (index: number, value: string) => {
    setIdea(prev => ({
      ...prev,
      references: prev.references?.map((ref, i) => i === index ? value : ref) || []
    }));
  };

  const addTag = (tag: string) => {
    if (!idea.tags?.includes(tag)) {
      setIdea(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tag]
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setIdea(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
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
        keyPoints: result.keyPoints || [],
        title: result.suggestedTitle || prev.title,
        tags: Array.from(new Set([...(prev.tags || []), ...(result.suggestedTags || [])])),
        references: [...(prev.references || []), url]
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
      setStatus('Blog post generated and published successfully!');
      logger.info('Blog post generated:', result.slug);
    } catch (error) {
      setStatus('Error generating blog post');
      logger.error('Error generating blog post:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Bitcoin Blog Notebook</h1>
        
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

          {/* Key Points */}
          <div>
            <label className="block text-sm font-medium mb-2">Key Points</label>
            <div className="space-y-3">
              {(idea.keyPoints || []).map((point, index) => (
                <input
                  key={index}
                  type="text"
                  value={point}
                  onChange={e => updateKeyPoint(index, e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
                  placeholder="Enter a key point"
                />
              ))}
              <button
                onClick={addKeyPoint}
                className="text-yellow-500 hover:text-yellow-400 text-sm"
              >
                + Add Key Point
              </button>
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium mb-2">Target Audience</label>
            <input
              type="text"
              value={idea.targetAudience}
              onChange={e => setIdea(prev => ({ ...prev, targetAudience: e.target.value }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
              placeholder="Who is this article for?"
            />
          </div>

          {/* Tone */}
          <div>
            <label className="block text-sm font-medium mb-2">Tone</label>
            <select
              value={idea.tone}
              onChange={e => setIdea(prev => ({ ...prev, tone: e.target.value as ToneType }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
            >
              <option value="technical">Technical</option>
              <option value="educational">Educational</option>
              <option value="conversational">Conversational</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          {/* Length */}
          <div>
            <label className="block text-sm font-medium mb-2">Article Length</label>
            <select
              value={idea.desiredLength}
              onChange={e => setIdea(prev => ({ ...prev, desiredLength: e.target.value as LengthType }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
            >
              <option value="short">Short (~800 words)</option>
              <option value="medium">Medium (~1500 words)</option>
              <option value="long">Long (~2500 words)</option>
            </select>
          </div>

          {/* References */}
          <div>
            <label className="block text-sm font-medium mb-2">References (optional)</label>
            <div className="space-y-3">
              {idea.references?.map((ref, index) => (
                <input
                  key={index}
                  type="text"
                  value={ref}
                  onChange={e => updateReference(index, e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
                  placeholder="Enter a reference"
                />
              ))}
              <button
                onClick={addReference}
                className="text-yellow-500 hover:text-yellow-400 text-sm"
              >
                + Add Reference
              </button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {idea.tags?.map(tag => (
                <span
                  key={tag}
                  className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-yellow-300 hover:text-yellow-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a tag"
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white"
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    addTag(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
            </div>
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
      </div>
    </div>
  );
} 