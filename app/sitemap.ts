import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://floatingparadise.id"
  const pages = ["", "/bungalows", "/explore", "/yoga-retreat", "/getting-here", "/about"]
  const locales = ["en", "id"]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    const isHome = page === ""
    const url = isHome ? baseUrl : `${baseUrl}${page}`
    entries.push({
      url,
      changeFrequency: "weekly",
      priority: isHome ? 1.0 : 0.8,
    })

    for (const locale of locales) {
      const localePath = isHome ? `/${locale}` : `/${locale}${page}`
      entries.push({
        url: `${baseUrl}${localePath}`,
        changeFrequency: "weekly",
        priority: isHome ? 1.0 : 0.8,
      })
    }
  }

  return entries
}
