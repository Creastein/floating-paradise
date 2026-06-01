import ExploreClient from "./explore-client"
import { getActivities } from "@/lib/sanity.fetch"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "explore", "/explore")
}

export default async function ExplorePage() {
  const { data: activities } = await getActivities()
  const pageData = undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Karimunjawa Islands",
    "description": "Explore the pristine beauty of Karimunjawa with Floating Paradise. We offer diving, snorkeling, and trekking adventures.",
    "includesAttraction": activities?.map((activity: any) => ({
      "@type": "TouristAttraction",
      "name": activity.title?.en || activity.name || "",
      "description": activity.description?.en || "",
      "image": activity.mainImage || "https://floatingparadise.id/og-image.png"
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
        "name": "Explore",
        "item": "https://floatingparadise.id/en/explore"
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
