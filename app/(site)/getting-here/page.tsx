import GettingHereClient from "./getting-here-client"
import { getSeoValue } from "@/lib/i18n/seo"

export async function generateMetadata() {
  const title = getSeoValue("en", "seo.getting-here.title")
  const description = getSeoValue("en", "seo.getting-here.description")

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
