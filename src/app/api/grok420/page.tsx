interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  structuredData?: unknown; // For structured output responses
} 