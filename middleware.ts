import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['en', 'id']
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl
  const langParam = searchParams.get('lang')

  // Handle ?lang= query parameters — redirect to proper locale URL
  if (langParam) {
    const locale = SUPPORTED_LOCALES.includes(langParam) ? langParam : DEFAULT_LOCALE
    const url = request.nextUrl.clone()
    url.searchParams.delete('lang')
    
    // Construct the new path with locale
    const newPath = pathname === '/' ? '' : pathname
    // Make sure we don't double up locales if the path already starts with a locale
    if (newPath.startsWith('/en') || newPath.startsWith('/id')) {
        url.pathname = newPath.replace(/^\/(en|id)/, `/${locale}`)
    } else {
        url.pathname = `/${locale}${newPath}`
    }
    
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon|studio|robots|sitemap).*)',
  ],
}
