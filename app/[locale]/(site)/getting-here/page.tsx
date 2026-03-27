import GettingHereClient from "@/app/(site)/getting-here/getting-here-client"
import { getSeoValue } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const title = getSeoValue(params.locale, "seo.getting-here.title")
  const description = getSeoValue(params.locale, "seo.getting-here.description")

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

export default function GettingHerePage() {
  return <GettingHereClient />
}
