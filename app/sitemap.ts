import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://floatingparadise.id"
  const locales = ["en", "id"]
  const pages = ["", "/bungalows", "/explore", "/yoga-retreat", "/getting-here", "/about", "/contact", "/faq"]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    const isHome = page === ""

    const alternates = {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${page}`])
      ),
    }

    // Only locale-specific entries (no duplicate non-locale root)
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: isHome ? 1.0 : 0.8,
        alternates,
      })
    }
  }

  return entries
}
