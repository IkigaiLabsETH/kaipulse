import { clientLogger } from '@/utils/clientLogger';

// Types for tool responses
export interface ToolResponseMessage {
  type: 'tool_response';
  toolCallId: string;
  content: string;
}

export interface ToolErrorMessage {
  type: 'tool_error';
  toolCallId: string;
  content: string;
  error: string;
}

export type ToolResponse = ToolResponseMessage | ToolErrorMessage;

// Tool call message interface
export interface ToolCallMessage {
  name: string;
  toolCallId: string;
  parameters: string;
}

/**
 * Fetch cryptocurrency price data
 */
async function fetchPriceData(currency: string): Promise<number> {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch price data: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data[currency] || !data[currency].usd) {
      throw new Error(`Price data not available for ${currency}`);
    }
    
    return data[currency].usd;
  } catch (error) {
    clientLogger.error('Error fetching crypto price:', error);
    throw error;
  }
}

/**
 * Handle tool calls from the voice interface
 */
export async function handleToolCallMessage(toolCallMessage: unknown): Promise<ToolResponse> {
  // Log the tool call for debugging
  clientLogger.info('Handling tool call:', toolCallMessage);
  
  // Type guard function to check if the input is a valid ToolCallMessage
  const isToolCallMessage = (value: unknown): value is ToolCallMessage => {
    return typeof value === 'object' && 
           value !== null && 
           'name' in value && 
           'toolCallId' in value &&
           typeof (value as ToolCallMessage).name === 'string' &&
           typeof (value as ToolCallMessage).toolCallId === 'string';
  };
  
  // Check if the toolCallMessage is valid
  if (!isToolCallMessage(toolCallMessage)) {
    return {
      type: 'tool_error',
      toolCallId: typeof toolCallMessage === 'object' && 
                 toolCallMessage !== null && 
                 'toolCallId' in toolCallMessage ? 
                 String(toolCallMessage.toolCallId) : 'unknown',
      error: 'Invalid tool call message',
      content: 'The tool call message is invalid or missing required fields'
    };
  }
  
  // Handle cryptocurrency price tool
  if (toolCallMessage.name === 'coingecko') {
    try {
      // Parse parameters safely
      let parameters: Record<string, unknown>;
      try {
        parameters = JSON.parse(toolCallMessage.parameters);
      } catch {
        throw new Error('Failed to parse tool parameters');
      }
      
      // Validate parameters
      if (!parameters || !parameters.currency) {
        throw new Error('Missing required parameter: currency');
      }
      
      // Extract and normalize the currency
      const currency = String(parameters.currency);
      const normalizedCurrency = currency.toLowerCase().trim();
      
      // Fetch price data
      const price = await fetchPriceData(normalizedCurrency);
      
      // Return successful response
      return {
        type: 'tool_response',
        toolCallId: toolCallMessage.toolCallId,
        content: price.toString()
      };
    } catch (error) {
      // Log and return error response
      clientLogger.error('Crypto price tool error:', error);
      
      return {
        type: 'tool_error',
        toolCallId: toolCallMessage.toolCallId,
        error: 'Crypto Price tool error',
        content: error instanceof Error ? error.message : 'Error fetching cryptocurrency price'
      };
    }
  }
  
  // Tool not found
  return {
    type: 'tool_error',
    toolCallId: toolCallMessage.toolCallId,
    error: 'Tool not found',
    content: `The tool '${toolCallMessage.name}' was not found`
  };
} 