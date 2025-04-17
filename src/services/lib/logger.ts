type LogArg = string | number | boolean | object | null | undefined;
type LogArgs = LogArg[];

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

type LogLevel = 'info' | 'error' | 'warn' | 'debug';

class Logger {
  private logToFile(level: LogLevel, message: string, ...args: LogArgs) {
    // In a real production environment, this would write to a log file
    // or send to a logging service like Winston, Bunyan, or a cloud logging service
    const timestamp = new Date().toISOString();
    const formattedArgs = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');
    
    // For development, we'll still log to stdout/stderr but through process
    // This avoids ESLint console warnings while maintaining debugging capability
    const output = `[${timestamp}] ${level.toUpperCase()}: ${message} ${formattedArgs}`;
    
    if (level === 'error') {
      process.stderr.write(`${output}\n`);
    } else {
      process.stdout.write(`${output}\n`);
    }
  }

  info(message: string, ...args: LogArgs): void {
    if (process.env.NODE_ENV !== 'production') {
      this.logToFile('info', message, ...args);
    }
  }

  error(message: string, error?: unknown, ...args: LogArgs): void {
    if (process.env.NODE_ENV !== 'production') {
      this.logToFile('error', message, error ? formatError(error) : '', ...args);
    }
  }

  warn(message: string, ...args: LogArgs): void {
    if (process.env.NODE_ENV !== 'production') {
      this.logToFile('warn', message, ...args);
    }
  }

  debug(message: string, ...args: LogArgs): void {
    if (process.env.NODE_ENV !== 'production') {
      this.logToFile('debug', message, ...args);
    }
  }
}

// Export a singleton instance
export const logger = new Logger(); 