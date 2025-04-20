type LogArgs = (string | number | boolean | null | undefined | object)[];

/* eslint-disable no-console, no-restricted-globals */
export const logger = {
  info: (message: string, ...args: LogArgs) => {
    console.log(`[INFO] ${message}`, ...args);
  },
  error: (message: string, error?: Error | unknown) => {
    console.error(`[ERROR] ${message}`, error);
  },
  warn: (message: string, ...args: LogArgs) => {
    console.warn(`[WARN] ${message}`, ...args);
  },
  debug: (message: string, ...args: LogArgs) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }
};
/* eslint-enable no-console, no-restricted-globals */ 