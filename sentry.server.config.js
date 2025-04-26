/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
  {},
  {
    disableInstrumentations: ['@sentry/opentelemetry'],
  }
); 