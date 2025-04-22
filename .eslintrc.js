module.exports = {
  extends: [
    'next/core-web-vitals', 
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // Production rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-explicit-any': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_', 
      varsIgnorePattern: '^_' 
    }],
  },
  ignorePatterns: [
    // Always ignore these
    'node_modules/',
    '.next/',
    'out/',
    'public/',
    '**/*.d.ts',
    
    // Ignore debug/test files in production
    ...(process.env.NODE_ENV === 'production' ? [
      'src/app/api/debug/**/*',
      'src/app/api/debug-nfts/**/*',
      'src/app/api/test/**/*',
      'src/app/debug-collection/**/*',
      'src/app/test-nfts/**/*',
    ] : []),
  ],
} 