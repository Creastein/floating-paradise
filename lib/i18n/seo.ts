import { Metadata } from "next"
import en from "./translations/en.json"
import id from "./translations/id.json"
import { YOGA_RETREAT_NAME, BASE_URL } from "../constants"

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
  const rawTitle = getSeoValue(locale, `seo.${pageKey}.title`)
  const title =
    pageKey === "yoga"
      ? [YOGA_RETREAT_NAME, rawTitle].filter(Boolean).join(" — ")
      : rawTitle
  const description = getSeoValue(locale, `seo.${pageKey}.description`)
  const keywords = getSeoValue(locale, `seo.${pageKey}.keywords`)
  
  // Format the path string properly
  const formattedPath = path.startsWith('/') ? path : `/${path}`
  const enUrl = formattedPath === '/' ? `${BASE_URL}/en` : `${BASE_URL}/en${formattedPath}`
  const idUrl = formattedPath === '/' ? `${BASE_URL}/id` : `${BASE_URL}/id${formattedPath}`
  
  // Base canonical URL should include the locale so each variant points to itself
  const canonicalUrl = locale === 'en' ? enUrl : idUrl

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': enUrl,
        'id': idUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      url: locale === 'en' ? enUrl : idUrl,
      siteName: 'Floating Paradise',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
    other: {
      'DC.creator': 'Floating Paradise',
    },
  }
}
