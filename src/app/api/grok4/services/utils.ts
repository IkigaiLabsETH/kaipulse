import { logger } from '@/lib/logger';

// Rate limiting for client requests
type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute
const MAX_MESSAGE_LENGTH = 2000; // Prevent extremely long messages

const rateLimitCache = new Map<string, RateLimitEntry>();

export function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const entry = rateLimitCache.get(clientId);
  
  if (!entry || now > entry.resetTime) {
    rateLimitCache.set(clientId, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  entry.count++;
  return true;
}

export function getClientId(request: Request): string {
  // Use IP address or user agent as client identifier
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  return forwardedFor || realIp || userAgent.substring(0, 50);
}

// Input sanitization
export function sanitizeMessage(message: string): string {
  // Remove potential XSS and limit length
  return message
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .substring(0, MAX_MESSAGE_LENGTH)
    .trim();
}

// Response helpers with CORS support
export function createErrorResponse(message: string, status: number = 500): Response {
  return new Response(message, {
    status,
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

export function createSuccessResponse(content: string): Response {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  });
}

// Enhanced request validation
export async function validateRequest(request: Request): Promise<{
  message: string;
  systemPrompt?: string;
  temperature?: number;
  stream?: boolean;
  imageUrl?: string;
  generateImage?: boolean;
  imagePrompt?: string;
  structuredOutput?: boolean;
  outputSchema?: string;
  functionCalling?: boolean;
}> {
  if (request.method !== 'POST') {
    throw new Error('Method not allowed');
  }

  const contentType = request.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Content-Type must be application/json');
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    throw new Error('Invalid JSON in request body');
  }
  if (typeof body !== 'object' || body === null) {
    throw new Error('Request body must be an object');
  }
  const b = body as Record<string, unknown>;
  if (!('message' in b) || typeof b.message !== 'string') {
    throw new Error('Message is required and must be a string');
  }
  // Sanitize and validate message
  const sanitizedMessage = sanitizeMessage(b.message as string);
  if (!sanitizedMessage) {
    throw new Error('Message cannot be empty after sanitization');
  }
  // Validate temperature range
  if ('temperature' in b && typeof b.temperature === 'number' && (b.temperature < 0 || b.temperature > 2)) {
    throw new Error('Temperature must be between 0 and 2');
  }
  return {
    ...b,
    message: sanitizedMessage,
    structuredOutput: typeof b.structuredOutput === 'boolean' ? b.structuredOutput : false,
    outputSchema: typeof b.outputSchema === 'string' ? b.outputSchema : 'analysis',
    functionCalling: typeof b.functionCalling === 'boolean' ? b.functionCalling : false
  };
}

// Performance tracking
export class PerformanceTracker {
  private timings: Record<string, number> = {};
  
  start(label: string) {
    this.timings[label] = performance.now();
  }
  
  end(label: string) {
    if (this.timings[label]) {
      this.timings[label] = performance.now() - this.timings[label];
    }
  }
  
  getTimings() {
    return this.timings;
  }
  
  logTimings() {
    logger.info('Step timings (ms):', this.timings);
  }
}

// Structured output handling
export function createStructuredResponse(data: unknown, schemaType: string = 'analysis') {
  return {
    structured: true,
    schema: schemaType,
    data: data,
    timestamp: new Date().toISOString()
  };
}

// CORS preflight handler
export async function handleCORS(request: Request): Promise<Response | null> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  return null;
} 