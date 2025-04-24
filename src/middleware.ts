import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle pipeline URLs
  if (request.nextUrl.pathname.startsWith('/pipeline')) {
    // Redirect to home page with a 302 found redirect (less aggressive than 307)
    // Use absolute URL format to avoid any parsing issues
    const homeUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}/`
    return NextResponse.redirect(homeUrl, {
      status: 302,
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
      },
    })
  }

  // Continue normal request handling
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all request paths except for:
    // - api routes (/api/*)
    // - static files (_next/static/*, favicon.ico, etc.)
    // - public files (public/*)
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    '/pipeline/:path*',
    '/voice/:path*',
  ],
} 