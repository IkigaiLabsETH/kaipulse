import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle pipeline URLs
  if (request.nextUrl.pathname.startsWith('/pipeline')) {
    return NextResponse.redirect(new URL('/', request.url))
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
  ],
} 