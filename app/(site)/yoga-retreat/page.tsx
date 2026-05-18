import { getYogaRetreat } from "@/lib/sanity.fetch"
import YogaClient from "./yoga-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "yoga", "/yoga-retreat")
}

export default async function YogaRetreatPage() {
  const retreatResult = await getYogaRetreat()
  const cmsData = retreatResult?.data

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
      "A 7-day nature-based yoga retreat above the sea. Sunrise and sunset yoga on the jetty, meditation sessions, and wholesome plant-based meals at Floating Paradise Karimunjawa.",
    organizer: {
      "@type": "Person",
      name: "Astrid Branum",
    },
    offers: {
      "@type": "Offer",
      price: "16000000",
      priceCurrency: "IDR",
      availability: "https://schema.org/LimitedAvailability",
      url: "https://floatingparadise.id/en/yoga-retreat",
    },
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
        "name": "Yoga Retreat",
        "item": "https://floatingparadise.id/en/yoga-retreat"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(retreatJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <YogaClient cmsData={cmsData} />
    </>
  )
}
