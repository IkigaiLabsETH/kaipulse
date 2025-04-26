# MSTY Freedom Calculator - Lightning Network Production Guide

# Satsnap

## Vision
**Satsnap is a photo-first, curated social app where every like instantly sends Bitcoin to creators over the Lightning Network.**

**No ads, no algorithms — just real support for real artists.**

**Fans who like photos earn rewards like limited-edition prints, creating true ownership and connection.**

**It's the magic of early Instagram, rebuilt for the Bitcoin era.**

### Why Satsnap?
Satsnap reimagines social media engagement through the lens of Bitcoin's Lightning Network, creating meaningful connections between photographers and their audience. In a world where "likes" have become meaningless metrics, Satsnap transforms each interaction into tangible value.

### Core Philosophy
- **Real Value Exchange**: Every like sends 21 sats directly to creators
- **Quality Over Quantity**: Curated creator onboarding ensures high-quality content
- **True Ownership**: Creators own their content, audience, and earnings
- **Meaningful Engagement**: Likes carry financial weight, eliminating empty engagement

### User Experience Goals
1. **For Creators**:
   - Direct value for their work through instant micropayments
   - Building genuine connections with supporters
   - Offering exclusive rewards to dedicated fans
   - Complete control over their earnings

2. **For Supporters**:
   - Supporting creators directly with each interaction
   - Building status through consistent support
   - Unlocking exclusive content and physical rewards
   - Participating in a genuine, ad-free community

### Technical Vision
The Lightning Network integration serves as the backbone for:
- Instant micropayments (21 sats per like)
- Automated reward distribution
- Creator earnings management
- Transparent value exchange

### Anti-Web2 Principles
- No algorithmic manipulation
- No data harvesting
- No middleman fees
- No artificial engagement metrics

This vision guides the technical implementation detailed below, ensuring that every feature serves the core purpose of creating meaningful connections through value exchange.

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

## MVP Features & Roadmap

### Core Features (Day 1 Launch)

#### 1. User Wallet Integration
- **Implementation**: Custodial Lightning wallet for optimal UX
- **Features**:
  - QR code deposit flow
  - Lightning Address support
  - On-chain BTC loading
  - Instant creator payouts
- **Technical Requirements**:
  - Secure wallet creation/management
  - Real-time balance updates
  - Transaction history tracking
  - Multi-currency conversion display

#### 2. Photo Upload System
- **Creator Features**:
  - Single photo upload workflow
  - Title and description fields
  - Configurable reward milestones
- **Technical Requirements**:
  - Image optimization pipeline
  - Metadata management
  - Content delivery network integration
  - EXIF data handling

#### 3. Lightning-Powered Likes
- **Core Mechanics**:
  - 21 sats per like
  - Instant payment processing
  - Real-time balance updates
- **UI/UX Requirements**:
  - Fluid animation system
  - Sats flow visualization
  - Heart feedback animation
  - Error state handling

#### 4. Reward System
- **Features**:
  - Milestone progress tracking
  - Automated reward unlocking
  - Digital reward distribution
  - Physical reward fulfillment
- **Technical Implementation**:
  - Progress tracking database
  - Secure address collection
  - Automated distribution system
  - Reward claim verification

#### 5. Curated Feed
- **Core Principles**:
  - Quality-focused curation
  - Manual creator verification
  - Clean, focused interface
- **Technical Requirements**:
  - Creator application system
  - Content moderation tools
  - Feed optimization algorithm
  - Performance monitoring

#### 6. User Profiles
- **Display Metrics**:
  - Total sats sent
  - Supported artists count
  - Collector tier system
- **Technical Requirements**:
  - Real-time stats calculation
  - Badge progression system
  - Profile data caching
  - Achievement tracking

#### 7. Activity Feed
- **Features**:
  - Like history tracking
  - Sats transaction log
  - Reward milestone alerts
- **Technical Requirements**:
  - Real-time notification system
  - Activity data aggregation
  - User engagement metrics
  - Performance optimization

### Future Iterations (Post-MVP)

#### Planned Features
1. **Golden Like Jackpot**
   - Random reward multiplication
   - Engagement gamification
   - Special animation system

2. **Auto Top-Up System**
   - Configurable thresholds
   - Automated wallet funding
   - Payment method management

3. **Exclusive Drops**
   - Limited-time offerings
   - Creator collaborations
   - Scarcity mechanics

4. **IRL Event Integration**
   - Event ticket unlocks
   - Gallery show access
   - Meet-and-greet coordination

5. **Decentralized Storage**
   - Arweave integration
   - Filecoin backup system
   - Content permanence

### Core Narrative

> "Every like matters. Every sats counts. Build real art collections with real value, one heart at a time."

This narrative drives our technical decisions and feature prioritization, ensuring that every component contributes to a meaningful, value-driven social experience.

### Success Metrics

1. **Engagement Metrics**
   - Average sats per user
   - Like-to-view ratio
   - Reward completion rate

2. **Creator Metrics**
   - Earnings per post
   - Reward fulfillment rate
   - Creator retention

3. **Platform Health**
   - Transaction success rate
   - Feed quality score
   - User growth velocity

## Wireframe & UI Specifications

### Design Philosophy

#### Visual Language
- **Color Palette**:
  - Primary: Bitcoin Orange (#F7931A)
  - Monochrome base scheme
  - Minimal accent colors
- **Typography**:
  - Heading: Elegant Serif (e.g., Freight Display Pro)
  - Body: Modern Sans-Serif (e.g., Inter)
- **Spacing System**:
  - 8px base grid
  - Consistent vertical rhythm
  - Generous whitespace

### Screen Specifications

#### 1. Home Feed
```
┌─────────────────────────────┐
│ ⚡ 21,000    [Gold Badge]   │ <- Status Bar
├─────────────────────────────┤
│                             │
│                             │
│      [Full-Bleed Photo]     │ <- Main Content
│                             │
│                             │
├─────────────────────────────┤
│ @artist_name                │
│ Short bio text              │
│                             │
│         [❤️ 21 sats]        │ <- Action Bar
│                             │
│ [───── Reward Progress ────] │
└─────────────────────────────┘
```

**Technical Requirements**:
- Vertical swipe gesture handling
- Preloading of next/previous images
- Lightning payment trigger on like
- Real-time progress bar updates
- Fluid animation system for zaps

#### 2. Photo Detail View
```
┌─────────────────────────────┐
│ ← Back                      │
├─────────────────────────────┤
│      [Full-Size Photo]      │
│                             │
├─────────────────────────────┤
│ Caption/Story               │
│ ❤️ 1,234 likes              │
│ ⚡ 25,914 sats earned        │
│                             │
│ [View Artist Portfolio]     │
└─────────────────────────────┘
```

**Technical Requirements**:
- High-res image loading
- Metadata management
- View tracking
- Portfolio link routing

#### 3. Reward Unlock Modal
```
┌─────────────────────────────┐
│         🎉                  │
│  Reward Unlocked!           │
│                             │
│  [Preview Image]            │
│                             │
│  [Claim Digital Download]   │
│  [Request Physical Print]   │
│                             │
│  [Maybe Later]              │
└─────────────────────────────┘
```

**Technical Requirements**:
- Secure download system
- Address collection form
- Fulfillment tracking
- Modal state management

#### 4. Profile Pages

##### Creator Profile
```
┌─────────────────────────────┐
│      [Banner Image]         │
│                             │
│ @username                   │
│ Artist Statement            │
│ ⚡ Total Earnings            │
│                             │
│ Current Rewards:            │
│ [Reward 1] [Reward 2]      │
│                             │
│ Gallery:                    │
│ [Photo Grid]               │
└─────────────────────────────┘
```

##### Liker Profile
```
┌─────────────────────────────┐
│ [Profile Picture]           │
│ @username                   │
│                             │
│ Gold Collector              │
│ ⚡ 25,000 sats sent         │
│                             │
│ Artists Supported:          │
│ [Artist List]              │
│                             │
│ Reward History:            │
│ [Unlocked Items]           │
└─────────────────────────────┘
```

#### 5. Wallet Interface
```
┌─────────────────────────────┐
│ Balance: ⚡ 21,000          │
│                             │
│ [Add Sats]                  │
│  • QR Code                  │
│  • Lightning Address        │
│                             │
│ [Withdraw]                  │
│  • External Wallet          │
│                             │
│ [Transaction History]       │
└─────────────────────────────┘
```

**Technical Requirements**:
- Real-time balance updates
- QR code generation
- Lightning Address validation
- Transaction logging

#### 6. Onboarding Flow
```
Step 1: Profile Creation
┌─────────────────────────────┐
│ Create Your Profile         │
│ [Username Input]            │
│ [Profile Picture Upload]    │
└─────────────────────────────┘

Step 2: Wallet Setup
┌─────────────────────────────┐
│ Setup Your Wallet           │
│ [Create New Wallet]         │
│ [Link External Wallet]      │
└─────────────────────────────┘

Step 3: Initial Funding
┌─────────────────────────────┐
│ Get Started                 │
│ [Add Initial Sats]          │
│ [Skip for Now]              │
└─────────────────────────────┘
```

### Navigation Structure
```
App Root
├── Home Feed
│   └── Photo Detail
├── Wallet
│   ├── Add Sats
│   └── Withdraw
├── Profile
│   ├── Creator View
│   └── Liker View
└── Reward System
    └── Unlock Modal
```

### UI Components Library

#### Core Components
1. **PhotoCard**
   - Full-bleed image container
   - Like button
   - Progress bar
   - Artist info

2. **LightningButton**
   - Payment trigger
   - Animation state
   - Loading state
   - Success feedback

3. **RewardProgress**
   - Progress visualization
   - Milestone markers
   - Unlock animation

4. **WalletBalance**
   - Real-time updates
   - Currency conversion
   - Animation effects

#### Animation Specifications

1. **Like Animation**
   ```
   Initial State → Tap →
   Heart Scale Up (150ms) →
   Lightning Bolt (200ms) →
   Sats Counter Update (300ms)
   ```

2. **Reward Unlock**
   ```
   Threshold Reached →
   Celebration Particles →
   Modal Slide Up →
   Content Fade In
   ```

### Performance Requirements

1. **Image Loading**
   - Progressive loading
   - Lazy loading
   - Preloading next item
   - Cache management

2. **Animation Performance**
   - 60fps target
   - Hardware acceleration
   - Memory management
   - Battery optimization

3. **Payment Processing**
   - < 100ms response time
   - Offline queue support
   - Retry mechanism
   - Error recovery 