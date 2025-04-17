type LogLevel = 'error' | 'info' | 'warn';
type LogData = string | number | boolean | null | undefined | Record<string, unknown> | Error | unknown[] | unknown;

interface FormattedError {
  name: string;
  message: string;
  stack?: string;
  cause?: FormattedError;
}

function formatError(error: unknown): FormattedError {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause ? formatError(error.cause) : undefined
    };
  }

  return {
    name: 'UnknownError',
    message: typeof error === 'string' ? error : JSON.stringify(error),
  };
}

function formatMessage(level: LogLevel, message: string, data?: LogData): string {
  const timestamp = new Date().toISOString();
  const formattedData = data ? formatData(data) : '';
  return `[${timestamp}] ${level.toUpperCase()}: ${message}${formattedData}`;
}

function formatData(data: LogData): string {
  if (!data) return '';
  
  if (data instanceof Error) {
    return '\n' + JSON.stringify(formatError(data), null, 2);
  }

  if (Array.isArray(data)) {
    const formattedArray = data.map(item => 
      item instanceof Error ? formatError(item) : item
    );
    return '\n' + JSON.stringify(formattedArray, null, 2);
  }
  
  try {
    return '\n' + JSON.stringify(data, null, 2);
  } catch {
    return '\n' + String(data);
  }
}

// Simple logging functions that use window.console when available
export const clientLogger = {
  error: (message: string, data?: LogData) => {
    if (typeof window !== 'undefined') {
      window.console.error(formatMessage('error', message, data));
    }
  },
  
  info: (message: string, data?: LogData) => {
    if (typeof window !== 'undefined') {
      window.console.log(formatMessage('info', message, data));
    }
  },
  
  warn: (message: string, data?: LogData) => {
    if (typeof window !== 'undefined') {
      window.console.warn(formatMessage('warn', message, data));
    }
  }
}; 