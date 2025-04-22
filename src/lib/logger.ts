type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private log(level: LogLevel, message: string, ...args: unknown[]) {
    if (this.isDevelopment) {
      const timestamp = new Date().toISOString();
      const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
      
      // In development, we can use console for better DevTools integration
      /* eslint-disable no-console */
      switch (level) {
        case 'debug':
          console.debug(prefix, message, ...args);
          break;
        case 'info':
          console.info(prefix, message, ...args);
          break;
        case 'warn':
          console.warn(prefix, message, ...args);
          break;
        case 'error':
          console.error(prefix, message, ...args);
          break;
      }
      /* eslint-enable no-console */
    } else {
      // In production, we would typically send logs to a service
      // For now, we'll only log warnings and errors
      if (level === 'warn' || level === 'error') {
        // TODO: Implement production logging service integration
        // e.g., send to logging service, analytics, etc.
      }
    }
  }

  debug(message: string, ...args: unknown[]) {
    this.log('debug', message, ...args);
  }

  info(message: string, ...args: unknown[]) {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: unknown[]) {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: unknown[]) {
    this.log('error', message, ...args);
  }
}

export const logger = new Logger(); 