import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'id']
const defaultLocale = 'en'

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // Check for Indonesian language preference
  if (acceptLanguage.includes('id') || acceptLanguage.includes('in')) {
    return 'id'
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, API routes, studio, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    pathname.includes('.') // static files (images, css, js, etc.)
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale prefix
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (hasLocalePrefix) {
    return NextResponse.next()
  }

  // Redirect root and non-locale paths to preferred locale
  const locale = getPreferredLocale(request)
  const newUrl = request.nextUrl.clone()
  newUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)',
  ],
}
