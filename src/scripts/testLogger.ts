import { logger } from '../services/lib/logger';

async function testLogger() {
  // Test info logging
  logger.info('Testing info log', { test: true });

  // Test error logging with Error object
  try {
    throw new Error('Test error');
  } catch (error) {
    logger.error('An error occurred', error);
  }

  // Test warning
  logger.warn('This is a warning', { warning: true });

  // Test debug
  logger.debug('Debug information', { debug: true });

  // Test error with custom object
  logger.error('Custom error object', { 
    code: 'TEST_ERROR',
    details: 'Something went wrong'
  });
}

// Run the test
testLogger(); 