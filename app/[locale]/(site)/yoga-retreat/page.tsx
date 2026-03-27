import { getYogaRetreat } from "@/lib/sanity.fetch"
import YogaClient from "@/app/(site)/yoga-retreat/yoga-client"
import { getSeoValue } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const title = getSeoValue(params.locale, "seo.yoga.title")
  const description = getSeoValue(params.locale, "seo.yoga.description")

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

export default async function YogaRetreatPage({
  params,
}: {
  params: { locale: string }
}) {
  const retreatResult = await getYogaRetreat()
  const cmsData = retreatResult?.data
  const retreatUrl = `https://floatingparadise.id/${params.locale}/yoga-retreat`

  const retreatJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "The Art of Floating — Yoga Retreat",
    startDate: "2026-06-08",
    endDate: "2026-06-14",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Floating Paradise",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karimunjawa",
        addressRegion: "Jawa Tengah",
        addressCountry: "ID",
      },
    },
    description:
      "A 7-day nature-based yoga retreat above the sea. Sunrise and sunset yoga on the jetty,",
    organizer: {
      "@type": "Person",
      name: "Astrid Branum",
    },
    offers: {
      "@type": "Offer",
      price: "16000000",
      priceCurrency: "IDR",
      availability: "https://schema.org/LimitedAvailability",
      url: retreatUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(retreatJsonLd) }}
      />
      <YogaClient cmsData={cmsData} />
    </>
  )
}
