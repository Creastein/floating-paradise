import { getBungalows } from "@/lib/sanity.fetch"
import BungalowsClient from "@/app/(site)/bungalows/bungalows-client"
import { getSeoValue } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const title = getSeoValue(params.locale, "seo.bungalows.title")
  const description = getSeoValue(params.locale, "seo.bungalows.description")

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

export default async function BungalowsPage() {
  const { data: bungalows } = await getBungalows()
  return <BungalowsClient initialBungalows={bungalows} />
}
