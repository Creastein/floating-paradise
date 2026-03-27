import en from "./translations/en.json"
import id from "./translations/id.json"

const translations = { en, id }

export type SeoLocale = keyof typeof translations

export function getSeoValue(locale: string, key: string): string {
  const selected = translations[locale as SeoLocale] || translations.en
  const fallback = translations.en
  return (selected as Record<string, string>)[key] || (fallback as Record<string, string>)[key] || ""
}
