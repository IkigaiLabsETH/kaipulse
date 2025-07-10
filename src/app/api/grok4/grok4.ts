import OpenAI from "openai";
import { env } from "@/env.mjs";
import { logger } from "@/lib/logger";
import type { ChatCompletion, ChatCompletionMessageParam, ChatCompletionTool, ChatCompletionToolChoiceOption } from "openai/resources/chat/completions";

// Initialize OpenAI client for XAI (Grok4)
const client = new OpenAI({
  baseURL: "https://api.x.ai/v1",
  apiKey: env.XAI_API_KEY,
});

export interface Grok4Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface Grok4Request {
  messages: ChatCompletionMessageParam[];
  temperature?: number;
  max_tokens?: number;
  tools?: ChatCompletionTool[];
  tool_choice?: ChatCompletionToolChoiceOption;
}

export interface Grok4Response {
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// ToolCall type for extracting tool calls
export type ToolCall = {
  id: string;
  type: string;
  function: {
    name: string;
    arguments: string; // JSON string per OpenAI SDK
  };
};

// Add a type for deferred completion response
export interface DeferredCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<ChatCompletion.Choice>;
}

export class Grok4Service {
  static async chatCompletion(request: Grok4Request): Promise<ChatCompletion> {
    try {
      const completion = await client.chat.completions.create({
        model: "grok-4-0709",
        messages: request.messages,
        temperature: request.temperature || 0.7,
        max_tokens: request.max_tokens || 1000,
        ...(request.tools ? { tools: request.tools } : {}),
        ...(request.tool_choice ? { tool_choice: request.tool_choice } : {}),
      });
      return completion;
    } catch (error) {
      logger.error("Grok4 API error:", error);
      throw new Error(`Grok4 API error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  static extractToolCall(completion: ChatCompletion): ToolCall | null {
    // Returns the tool call object if present, else null
    const toolCall = completion.choices?.[0]?.message?.tool_calls?.[0];
    return toolCall || null;
  }

  static async generateResponseWithTools(
    userMessage: string,
    systemPrompt?: string,
    temperature: number = 0.7,
    tools?: ChatCompletionTool[],
    tool_choice?: ChatCompletionToolChoiceOption
  ): Promise<ChatCompletion> {
    const messages: ChatCompletionMessageParam[] = [];
    if (systemPrompt) {
      messages.push({
        role: "system",
        content: systemPrompt,
      });
    }
    messages.push({
      role: "user",
      content: userMessage,
    });
    return this.chatCompletion({
      messages,
      temperature,
      tools,
      tool_choice,
    });
  }

  static async pollDeferredCompletion(requestId: string, maxAttempts = 20, intervalMs = 1000): Promise<DeferredCompletion> {
    const url = `https://api.x.ai/v1/chat/deferred-completion/${requestId}`;
    for (let i = 0; i < maxAttempts; i++) {
      const res = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${env.XAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        return await res.json();
      }
      if (res.status !== 202) throw new Error('Unexpected status from deferred completion');
      await new Promise(r => setTimeout(r, intervalMs));
    }
    throw new Error('Deferred completion timed out');
  }
}

// Simple DuckDuckGo web search utility
export async function duckDuckGoSearch(query: string): Promise<string> {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('DuckDuckGo API error');
    const data = await res.json();
    // Prefer Abstract, then RelatedTopics, then fallback
    let title = data.Heading || '';
    let snippet = data.AbstractText || '';
    let link = data.AbstractURL || '';
    if (!snippet && Array.isArray(data.RelatedTopics) && data.RelatedTopics.length > 0) {
      const topic = data.RelatedTopics[0];
      if (typeof topic.Text === 'string') snippet = topic.Text;
      if (topic.FirstURL) link = topic.FirstURL;
      if (topic.Name) title = topic.Name;
      if (topic.Topics && topic.Topics[0]) {
        if (topic.Topics[0].Text) snippet = topic.Topics[0].Text;
        if (topic.Topics[0].FirstURL) link = topic.Topics[0].FirstURL;
        if (topic.Topics[0].Name) title = topic.Topics[0].Name;
      }
    }
    // Fallbacks
    if (!snippet && data.Answer) snippet = data.Answer;
    if (!title && query) title = query;
    // Special handling for BTC price queries
    if (/bitcoin|btc.*price|price.*btc|price.*bitcoin/i.test(query)) {
      const match = snippet.match(/\$[0-9,]+(\.[0-9]{2})?/);
      if (match) return `BTC Price: ${match[0]}`;
    }
    // Format result
    let result = '';
    if (title) result += `Title: ${title}\n`;
    if (snippet) result += `Snippet: ${snippet}\n`;
    if (link) result += `URL: ${link}`;
    if (!result) result = 'No relevant web search results found.';
    return result.trim();
  } catch {
    return 'Web search failed.';
  }
}
