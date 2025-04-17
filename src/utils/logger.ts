type LogLevel = 'error' | 'info' | 'warn';
type LogData = string | number | boolean | null | undefined | Record<string, unknown> | Error | unknown[] | unknown;

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: LogData;
}

interface FormattedError {
  name: string;
  message: string;
  stack?: string;
  cause?: FormattedError;
}

export class Logger {
  private static formatError(error: unknown): FormattedError {
    if (error instanceof Error) {
      const formatted: FormattedError = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };

      // Handle nested errors
      if (error.cause) {
        formatted.cause = this.formatError(error.cause);
      }

      return formatted;
    }

    // Handle non-Error objects that were thrown
    return {
      name: 'UnknownError',
      message: typeof error === 'string' ? error : JSON.stringify(error),
    };
  }

  private static formatData(data?: LogData): string {
    if (!data) return '';
    
    if (data instanceof Error) {
      return '\n' + JSON.stringify(this.formatError(data), null, 2);
    }

    // Handle arrays (including arrays of errors)
    if (Array.isArray(data)) {
      const formattedArray = data.map(item => 
        item instanceof Error ? this.formatError(item) : item
      );
      return '\n' + JSON.stringify(formattedArray, null, 2);
    }
    
    // Handle other types of data
    try {
      return '\n' + JSON.stringify(data, null, 2);
    } catch {
      // Handle circular references or other JSON.stringify errors
      return '\n' + String(data);
    }
  }

  private static formatOutput(entry: LogEntry): string {
    const timestamp = new Date().toISOString();
    const dataStr = this.formatData(entry.data);
    return `[${timestamp}] ${entry.level.toUpperCase()}: ${entry.message}${dataStr}`;
  }

  /* eslint-disable no-console, @typescript-eslint/no-use-before-define, no-restricted-globals */
  private static log(level: LogLevel, message: string, data?: LogData): void {
    const output = this.formatOutput({ timestamp: new Date().toISOString(), level, message, data });
    
    switch (level) {
      case 'error':
        console.error(output);
        break;
      case 'warn':
        console.warn(output);
        break;
      default:
        console.log(output);
    }
  }
  /* eslint-enable no-console, @typescript-eslint/no-use-before-define, no-restricted-globals */

  static error(message: string, data?: LogData): void {
    this.log('error', message, data);
  }

  static info(message: string, data?: LogData): void {
    this.log('info', message, data);
  }

  static warn(message: string, data?: LogData): void {
    this.log('warn', message, data);
  }
} 