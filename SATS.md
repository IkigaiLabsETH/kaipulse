# MSTY Freedom Calculator - Lightning Network Production Guide

## Overview
This document outlines the requirements and steps for deploying the Lightning Network payment system to production, with a focus on the invoice creation endpoint and associated services.

## Architecture

### Lightning Network Integration
- **Provider**: River Lightning Services
- **Implementation**: REST API integration
- **Payment Flow**: WebLN for client-side, River API for server-side
- **Settlement**: Instant Lightning Network payments
- **Hot Wallet**: Minimal balance strategy with automated top-ups

## Technical Requirements

### 1. API Implementation

#### Invoice Creation Endpoint
```typescript
POST /api/lightning/create-invoice
Content-Type: application/json

Request:
{
  "amount": number,    // Amount in satoshis
  "memo": string      // Optional payment memo
}

Response:
{
  "paymentRequest": string,  // Lightning invoice
  "paymentHash": string,    // Payment identifier
  "expiresAt": string      // ISO timestamp
}
```

#### Required Environment Variables
```env
RIVER_API_KEY=your_api_key
RIVER_API_SECRET=your_api_secret
RIVER_WEBHOOK_SECRET=your_webhook_secret
REDIS_URL=your_redis_url
SENTRY_DSN=your_sentry_dsn
```

### 2. Security Measures

#### Rate Limiting
- 50 requests per minute per IP
- Redis-based implementation
- Burst allowance configuration
- Rate limit headers in responses

#### Input Validation
- Zod schema validation
- Amount bounds checking
- Memo length restrictions
- Request size limits

#### Authentication & Authorization
- API key validation
- CORS policy implementation
- Security headers configuration
- Request origin verification

### 3. Error Handling

#### Error Types
- `INVALID_INPUT`: 400 Bad Request
- `RATE_LIMITED`: 429 Too Many Requests
- `PAYMENT_FAILED`: 402 Payment Required
- `SERVER_ERROR`: 500 Internal Server Error

#### Error Response Format
```typescript
{
  error: string,
  code: string,
  details?: unknown,
  requestId?: string
}
```

### 4. Monitoring & Logging

#### Metrics to Track
- Invoice creation success rate
- Payment settlement time
- Error rates by type
- API latency
- Rate limit hits

#### Logging Requirements
- Request/response logging
- Error logging with context
- Performance metrics
- Security events

### 5. Database Schema

#### Invoice Table
```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  payment_hash VARCHAR(64) UNIQUE,
  amount_sats BIGINT,
  memo TEXT,
  status VARCHAR(20),
  expires_at TIMESTAMP,
  settled_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

#### Indexes
- `payment_hash` (UNIQUE)
- `status, created_at`
- `expires_at` (for cleanup)

### 6. Testing Requirements

#### Unit Tests
- Input validation
- Rate limiting logic
- Error handling
- Database operations

#### Integration Tests
- API endpoint functionality
- River API integration
- WebLN compatibility
- Payment flow

#### Load Tests
- Concurrent request handling
- Rate limit effectiveness
- Error rate under load
- Response time degradation

### 7. Deployment Checklist

#### Pre-deployment
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Rate limiting tested
- [ ] Security headers configured
- [ ] CORS policies set
- [ ] Error tracking configured
- [ ] Logging pipeline tested
- [ ] Monitoring alerts configured
- [ ] Load testing completed
- [ ] Documentation updated

#### Post-deployment
- [ ] Verify API accessibility
- [ ] Test payment flow
- [ ] Check monitoring dashboards
- [ ] Verify logging pipeline
- [ ] Test error reporting
- [ ] Validate rate limiting
- [ ] Check security headers
- [ ] Monitor error rates

### 8. Maintenance Procedures

#### Regular Tasks
- Clean up expired invoices
- Monitor error rates
- Review security logs
- Update API keys
- Verify backup procedures

#### Incident Response
- Error rate threshold alerts
- Payment failure investigation
- Rate limit adjustment
- Security incident response
- System recovery procedures

## Dependencies

```json
{
  "dependencies": {
    "@river-lightning/node": "^1.0.0",
    "ioredis": "^5.0.0",
    "zod": "^3.0.0",
    "@sentry/nextjs": "^7.0.0",
    "winston": "^3.0.0"
  }
}
```

## Additional Resources

### Documentation
- [River Lightning API Documentation](https://river.com/api)
- [WebLN Specification](https://webln.dev)
- [Lightning Network Best Practices](https://lightning.network)

### Support Channels
- River Lightning Support
- Lightning Network Community
- MSTY Technical Support

## Rollout Strategy

### Phase 1: Development
- Implement core functionality
- Set up monitoring
- Initial testing

### Phase 2: Staging
- Deploy to staging environment
- Integration testing
- Load testing
- Security audit

### Phase 3: Production
- Gradual rollout
- Monitor metrics
- Gather feedback
- Optimize performance

### Phase 4: Optimization
- Analyze performance
- Adjust rate limits
- Fine-tune monitoring
- Update documentation 