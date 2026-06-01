import { getBungalows } from "@/lib/sanity.fetch"
import BungalowsClient from "./bungalows-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "bungalows", "/bungalows")
}

export default async function BungalowsPage() {
  const { data: bungalows } = await getBungalows()
  const pageData = undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": bungalows?.map((bungalow: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "HotelRoom",
        "name": bungalow.title?.en || bungalow.name || "",
        "description": bungalow.description?.en || "",
        "image": bungalow.mainImage || "https://floatingparadise.id/og-image.png"
      }
    })) || []
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://floatingparadise.id/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bungalows",
        "item": "https://floatingparadise.id/en/bungalows"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BungalowsClient initialBungalows={bungalows} pageData={pageData} />
    </>
  )
}
