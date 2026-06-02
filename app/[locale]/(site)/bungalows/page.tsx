import { getBungalows, getBungalowsPage, getSiteSettings } from "@/lib/sanity.fetch"
import BungalowsClient from "@/app/(site)/bungalows/bungalows-client"
import { generatePageSeo } from "@/lib/i18n/seo"
import { LodgingBusinessSchema } from "@/components/schema-org"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "bungalows", "/bungalows")
}

export default async function BungalowsPage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  const { data: bungalows } = await getBungalows()
  const { data: pageData } = await getBungalowsPage()
  const { data: siteSettings } = await getSiteSettings()

  const isId = params.locale === "id"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": bungalows?.map((bungalow: any, index: number) => {
      const lang = isId ? "id" : "en";
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "HotelRoom",
          "name": bungalow.title?.[lang] || bungalow.name || "",
          "description": bungalow.description?.[lang] || "",
          "image": bungalow.mainImage || "https://floatingparadise.id/og-image.png"
        }
      }
    }) || []
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isId ? "Fasilitas apa saja yang ada di bungalow?" : "What amenities are included in the bungalows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Setiap bungalow dilengkapi tempat tidur nyaman, kamar mandi pribadi dengan air tawar, teras pribadi menghadap laut, kipas angin (tenaga surya), handuk, dan perlengkapan mandi. Sarapan termasuk dalam harga kamar."
            : "Each bungalow includes a comfortable bed, a private bathroom with fresh water, a private sea-facing terrace, solar-powered fan, towels, and toiletries. Breakfast is included in the room rate."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Apakah bungalow menggunakan tenaga surya?" : "Are the bungalows solar powered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Ya, Floating Paradise 100% menggunakan tenaga surya. Semua lampu dan kipas angin ditenagai oleh panel surya. Kami menyediakan powerbank untuk mengisi daya perangkat Anda."
            : "Yes, Floating Paradise is 100% solar powered. All lighting and fans run on solar energy. We provide power banks for charging your devices."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Berapa kapasitas setiap bungalow?" : "How many guests can each bungalow accommodate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Sunrise dan Sunset menampung 2 tamu, atau maksimal 3 tamu dengan 1 extra bed. Bayside menampung hingga 4 tamu sebagai kapasitas standar, atau maksimal 6 tamu dengan 2 extra bed."
            : "Sunrise and Sunset accommodate 2 guests, or up to 3 guests with 1 extra bed. Bayside accommodates up to 4 guests as standard, or up to 6 guests with 2 extra beds."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Jam berapa check-in dan check-out?" : "What are the check-in and check-out times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Check-in pukul 12:00 siang dan check-out pukul 10:00 pagi. Tamu dapat datang ke properti mulai pukul 10:00 pagi, dan early check-in bergantung pada ketersediaan kamar."
            : "Check-in is at 12:00 PM and check-out is at 10:00 AM. Guests may arrive at the property from 10:00 AM, and early check-in depends on room availability."
        }
      }
    ]
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
        "name": isId ? "Bungalow" : "Bungalows",
        "item": `https://floatingparadise.id/${params.locale}/bungalows`
      }
    ]
  }

  return (
    <>
      <LodgingBusinessSchema siteSettings={siteSettings} bungalows={bungalows} locale={params.locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BungalowsClient initialBungalows={bungalows} pageData={pageData} />
    </>
  )
}
