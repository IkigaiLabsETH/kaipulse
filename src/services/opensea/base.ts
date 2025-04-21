import { z } from 'zod';
import { logger } from '@/lib/logger';

interface OpenSeaErrorResponse {
  success: boolean;
  message?: string;
  code?: string;
}

interface RequestOptions<T> {
  method: string;
  url: string;
  params?: Record<string, unknown>;
  body?: unknown;
  validateResponse?: (data: unknown) => T;
}

export class OpenSeaAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string,
    public responseBody?: OpenSeaErrorResponse
  ) {
    super(message);
    this.name = 'OpenSeaAPIError';
  }
}

export class BaseOpenSeaAPI {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl = 'https://api.opensea.io') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  protected validateParams<T>(params: T, schema: z.ZodType<T>): T {
    try {
      return schema.parse(params);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new OpenSeaAPIError(
          `Invalid parameters: ${error.errors.map(e => e.message).join(', ')}`
        );
      }
      throw error;
    }
  }

  protected cleanParams(params: Record<string, unknown>): Record<string, string> {
    return Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>);
  }

  protected async request<T>({
    method,
    url,
    params,
    body,
    validateResponse
  }: RequestOptions<T>): Promise<T> {
    const queryParams = params ? new URLSearchParams(this.cleanParams(params)).toString() : '';
    const fullUrl = `${this.baseUrl}${url}${queryParams ? `?${queryParams}` : ''}`;

    try {
      logger.info('Making OpenSea API request:', {
        method,
        url: fullUrl,
        params,
      });

      const response = await fetch(fullUrl, {
        method,
        headers: {
          'X-API-KEY': this.apiKey,
          'Accept': 'application/json',
          ...(body ? { 'Content-Type': 'application/json' } : {})
        },
        ...(body ? { body: JSON.stringify(body) } : {})
      });

      const responseBody = await response.json() as OpenSeaErrorResponse;

      if (!response.ok) {
        logger.error('OpenSea API request failed:', {
          status: response.status,
          url: fullUrl,
          response: responseBody
        });

        throw new OpenSeaAPIError(
          responseBody.message || 'OpenSea API request failed',
          response.status,
          responseBody.code,
          responseBody
        );
      }

      try {
        return validateResponse ? validateResponse(responseBody) : responseBody as T;
      } catch (error) {
        logger.error('Failed to validate OpenSea API response:', {
          error,
          responseBody
        });
        throw error;
      }

    } catch (error) {
      if (error instanceof OpenSeaAPIError) {
        throw error;
      }
      logger.error('OpenSea API request failed:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        url: fullUrl
      });
      throw new OpenSeaAPIError(
        `Request failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  protected async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>({
      method: 'GET',
      url,
      params
    });
  }
} 