type LogArg = string | number | boolean | object | null | undefined;
type LogArgs = LogArg[];
type LogLevel = 'info' | 'error' | 'warn' | 'debug';

const formatError = (error: unknown): LogArg => {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
      name: error.name
    };
  }
  return String(error);
};

const formatOutput = (level: LogLevel, message: string, args: LogArgs): string => {
  const timestamp = new Date().toISOString();
  const formattedArgs = args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
  ).join(' ');
  
  return `[${timestamp}] ${level.toUpperCase()}: ${message} ${formattedArgs}`;
};

// Safe console access that works in both browser and Node.js environments
/* eslint-disable no-console */
const safeConsole = {
  log: (...args: unknown[]) => {
    if (typeof console !== 'undefined') {
      console.log(...args);
    }
  },
  error: (...args: unknown[]) => {
    if (typeof console !== 'undefined') {
      console.error(...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (typeof console !== 'undefined') {
      console.warn(...args);
    }
  },
  debug: (...args: unknown[]) => {
    if (typeof console !== 'undefined') {
      console.debug(...args);
    }
  }
};
/* eslint-enable no-console */

class Logger {
  private log(level: LogLevel, message: string, ...args: LogArgs): void {
    const output = formatOutput(level, message, args);

    // Use safe console methods that work in all environments
    switch (level) {
      case 'error':
        safeConsole.error(output);
        break;
      case 'warn':
        safeConsole.warn(output);
        break;
      case 'debug':
        safeConsole.debug(output);
        break;
      default:
        safeConsole.log(output);
    }
  }

  info(message: string, ...args: LogArgs): void {
    this.log('info', message, ...args);
  }

  error(message: string, error?: unknown, ...args: LogArgs): void {
    this.log('error', message, error ? formatError(error) : '', ...args);
  }

  warn(message: string, ...args: LogArgs): void {
    this.log('warn', message, ...args);
  }

  debug(message: string, ...args: LogArgs): void {
    this.log('debug', message, ...args);
  }
}

// Export a singleton instance
export const logger = new Logger(); 