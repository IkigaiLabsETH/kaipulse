import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Global error handler for pipeline URLs
                function logToServer(level, message) {
                  // Send to server-side logging (can be implemented with a beacon or fetch)
                  try {
                    if (navigator.sendBeacon) {
                      navigator.sendBeacon('/api/log', JSON.stringify({
                        level: level,
                        message: message,
                        url: window.location.href,
                        timestamp: new Date().toISOString()
                      }));
                    }
                  } catch (e) {
                    // Silent fail - don't use console here
                  }
                }

                if (window.location.pathname.includes('/pipeline')) {
                  logToServer('warn', 'Pipeline URL detected, redirecting to home');
                  window.location.replace('/');
                }
                
                // Listen for unhandled errors
                window.addEventListener('error', function(event) {
                  if (event.message && event.message.includes('parse URL from /pipeline')) {
                    logToServer('error', 'Pipeline URL error detected, redirecting to home');
                    window.location.replace('/');
                    event.preventDefault();
                  }
                });
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 