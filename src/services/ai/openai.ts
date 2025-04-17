import OpenAI from 'openai';
import { BlogPostIdea, GeneratedPost } from '../notebook/types';
import { logger } from '../lib/logger';

export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  private async generateBlogContent(idea: BlogPostIdea): Promise<string> {
    const prompt = `
      Write a comprehensive blog post about Bitcoin with the following specifications:
      ${idea.title ? `Title: ${idea.title}` : 'Generate an engaging title'}
      
      Key Points to Cover:
      ${idea.keyPoints.map(point => `- ${point}`).join('\n')}
      
      Target Audience: ${idea.targetAudience || 'General Bitcoin enthusiasts and investors'}
      Tone: ${idea.tone || 'professional'}
      Length: ${idea.desiredLength || 'medium'} (short: ~800 words, medium: ~1500 words, long: ~2500 words)
      
      ${idea.references ? `References to Include:\n${idea.references.map(ref => `- ${ref}`).join('\n')}` : ''}
      
      Please structure the article with clear sections, engaging subheadings, and a compelling narrative flow.
      Include relevant technical details while maintaining accessibility.
      End with a strong conclusion that ties back to the main themes.
    `;

    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are an expert Bitcoin writer who creates engaging, accurate, and insightful content. Your articles are well-researched, technically sound, and accessible to your target audience."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      });

      return completion.choices[0].message.content || '';
    } catch (error) {
      logger.error('Error generating blog content:', error);
      throw error;
    }
  }

  private async generateMetadata(content: string): Promise<{ title: string; description: string; excerpt: string; }> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "Generate SEO-optimized metadata for a Bitcoin blog post. Include a compelling title, meta description, and excerpt."
          },
          {
            role: "user",
            content: `Based on this article content, generate:\n1. An SEO title (max 60 chars)\n2. A meta description (max 155 chars)\n3. An engaging excerpt (max 200 chars)\n\nContent:\n${content.substring(0, 2000)}...`
          }
        ],
        temperature: 0.7
      });

      const response = completion.choices[0].message.content || '';
      const [title, description, excerpt] = response.split('\n').map((line: string) => line.replace(/^\d\.\s*/, ''));

      return {
        title: title || 'Bitcoin Blog Post',
        description: description || '',
        excerpt: excerpt || ''
      };
    } catch (error) {
      logger.error('Error generating metadata:', error);
      throw error;
    }
  }

  private async suggestTags(content: string): Promise<string[]> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "Generate relevant tags for a Bitcoin blog post. Focus on key themes, technologies, and concepts mentioned."
          },
          {
            role: "user",
            content: `Based on this article content, suggest 5-8 relevant tags:\n\n${content.substring(0, 2000)}...`
          }
        ],
        temperature: 0.7
      });

      const response = completion.choices[0].message.content || '';
      return response.split(',').map((tag: string) => tag.trim());
    } catch (error) {
      logger.error('Error generating tags:', error);
      throw error;
    }
  }

  async generateBlogPost(idea: BlogPostIdea): Promise<GeneratedPost> {
    try {
      // Generate the main content
      const content = await this.generateBlogContent(idea);
      
      // Generate metadata and tags in parallel
      const [metadata, tags] = await Promise.all([
        this.generateMetadata(content),
        idea.tags || this.suggestTags(content)
      ]);

      return {
        title: metadata.title,
        content,
        excerpt: metadata.excerpt,
        tags,
        meta: {
          title: metadata.title,
          description: metadata.description
        }
      };
    } catch (error) {
      logger.error('Error in blog post generation pipeline:', error);
      throw error;
    }
  }
} 