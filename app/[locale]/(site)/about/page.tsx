import { getAboutPage } from "@/lib/sanity.fetch"
import AboutClient from "@/app/(site)/about/about-client"
import { getSeoValue } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const title = getSeoValue(params.locale, "seo.about.title")
  const description = getSeoValue(params.locale, "seo.about.description")

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

export default async function AboutPage() {
  const aboutResult = await getAboutPage()
  const cmsData = aboutResult?.data

  return <AboutClient cmsData={cmsData} />
}
