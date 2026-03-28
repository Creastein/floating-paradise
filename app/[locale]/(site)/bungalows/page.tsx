import { getBungalows } from "@/lib/sanity.fetch"
import BungalowsClient from "@/app/(site)/bungalows/bungalows-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "bungalows", "/bungalows")
}

export default async function BungalowsPage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  const { data: bungalows } = await getBungalows()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": bungalows?.map((bungalow: any, index: number) => {
      const lang = params.locale === "id" ? "id" : "en";
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "HotelRoom",
          "name": bungalow.title?.[lang] || bungalow.name || "",
          "description": bungalow.description?.[lang] || "",
          "image": bungalow.mainImage || "https://floatingparadise.id/og-image.png"
        }
      }
    }) || []
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
