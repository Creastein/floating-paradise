import { getBungalows } from "@/lib/sanity.fetch"
import BungalowsClient from "./bungalows-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "bungalows", "/bungalows")
}

export default async function BungalowsPage() {
  const { data: bungalows } = await getBungalows()

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BungalowsClient initialBungalows={bungalows} />
    </>
  )
}
