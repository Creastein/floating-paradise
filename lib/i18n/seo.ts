import { Metadata } from "next"
import en from "./translations/en.json"
import id from "./translations/id.json"

const translations = { en, id }

export type SeoLocale = keyof typeof translations

export function getSeoValue(locale: string, key: string): string {
  const selected = translations[locale as SeoLocale] || translations.en
  const fallback = translations.en
  return (selected as unknown as Record<string, string>)[key] || (fallback as unknown as Record<string, string>)[key] || ""
}

export function generatePageSeo(
  locale: string,
  pageKey: string, 
  path: string = ""
): Metadata {
  const title = getSeoValue(locale, `seo.${pageKey}.title`)
  const description = getSeoValue(locale, `seo.${pageKey}.description`)
  const keywords = getSeoValue(locale, `seo.${pageKey}.keywords`)
  
  // Format the path string properly
  const formattedPath = path.startsWith('/') ? path : `/${path}`
  const enUrl = formattedPath === '/' ? '/en' : `/en${formattedPath}`
  const idUrl = formattedPath === '/' ? '/id' : `/id${formattedPath}`
  
  // Base canonical (no locale prefix for default route)
  const canonicalUrl = formattedPath

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': enUrl,
        'id': idUrl,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      url: locale === 'en' ? enUrl : idUrl,
      siteName: 'Floating Paradise',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
