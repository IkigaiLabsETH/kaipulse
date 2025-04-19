/* eslint-disable no-restricted-globals, no-console */

interface TestLogger {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

export const testLogger: TestLogger = {
  log: (...args: unknown[]): void => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...args);
    }
  },
  error: (...args: unknown[]): void => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
  }
}; 