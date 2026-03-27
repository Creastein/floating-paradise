import ExploreClient from "@/app/(site)/explore/explore-client"
import { getActivities } from "@/lib/sanity.fetch"
import { getSeoValue } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const title = getSeoValue(params.locale, "seo.explore.title")
  const description = getSeoValue(params.locale, "seo.explore.description")

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function ExplorePage() {
  const { data: activities } = await getActivities()

  return <ExploreClient initialActivities={activities} />
}
