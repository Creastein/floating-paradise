import ExploreClient from "./explore-client"
import { getActivities, getExplorePage } from "@/lib/sanity.fetch"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "explore", "/explore")
}

export default async function ExplorePage() {
  const { data: activities } = await getActivities()
  const { data: pageData } = await getExplorePage()

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExploreClient initialActivities={activities} pageData={pageData} />
    </>
  )
}
