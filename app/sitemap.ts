import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://floatingparadise.id"
  const pages = ["", "/bungalows", "/explore", "/yoga-retreat", "/getting-here", "/about", "/contact"]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    const isHome = page === ""
    const canonicalUrl = isHome ? baseUrl : `${baseUrl}${page}`

    const alternates = {
      languages: {
        'en': `${baseUrl}/en${page}`,
        'id': `${baseUrl}/id${page}`,
      },
    }

    // Default entry
    entries.push({
      url: canonicalUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: isHome ? 1.0 : 0.8,
      alternates,
    })

    // Locale entries
    const locales = ["en", "id"]
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
