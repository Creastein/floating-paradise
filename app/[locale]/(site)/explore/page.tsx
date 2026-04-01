import ExploreClient from "@/app/(site)/explore/explore-client"
import { getActivities, getExplorePage } from "@/lib/sanity.fetch"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "explore", "/explore")
}

export default async function ExplorePage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  const { data: activities } = await getActivities()
  const { data: pageData } = await getExplorePage()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Karimunjawa Islands",
    "description": params.locale === 'id' 
      ? "Jelajahi keindahan alami Karimunjawa bersama Floating Paradise. Kami menawarkan petualangan diving, snorkeling, dan trekking."
      : "Explore the pristine beauty of Karimunjawa with Floating Paradise. We offer diving, snorkeling, and trekking adventures.",
    "includesAttraction": activities?.map((activity: any) => {
      const lang = params.locale === "id" ? "id" : "en";
      return {
        "@type": "TouristAttraction",
        "name": activity.title?.[lang] || activity.name || activity.title?.en || "",
        "description": activity.description?.[lang] || activity.description?.en || "",
        "image": activity.mainImage || "https://floatingparadise.id/og-image.png"
      }
    }) || []
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://floatingparadise.id/${params.locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": params.locale === "id" ? "Jelajahi" : "Explore",
        "item": `https://floatingparadise.id/${params.locale}/explore`
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
      <ExploreClient initialActivities={activities} pageData={pageData} />
    </>
  )
}
