import { getYogaRetreat } from "@/lib/sanity.fetch"
import YogaClient from "@/components/yoga-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "yoga", "/yoga-retreat")
}

export default async function YogaRetreatPage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  const retreatResult = await getYogaRetreat()
  const cmsData = retreatResult?.data
  const retreatUrl = `https://floatingparadise.id/${params.locale}/yoga-retreat`

  const isId = params.locale === "id"

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isId ? "Apakah retret ini cocok untuk pemula?" : "Is this retreat suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Ya, retret ini cocok untuk pemula maupun praktisi yang ingin memperdalam praktik mereka. Kelas dipandu oleh Astrid dengan gaya yang santai dan suportif."
            : "Yes, this retreat is perfect for beginners and those looking to deepen their practice. Classes are led by Astrid with a relaxed and supportive teaching style."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Apa saja yang termasuk dalam harga retret?" : "What is included in the retreat price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Harga sudah termasuk program retret penuh, semua kelas yoga dan meditasi, semua makan, akomodasi di Floating Paradise, tiket masuk Taman Nasional, excursion, dan paket sambutan. Donasi €100 ke yayasan pendidikan lokal juga sudah termasuk."
            : "The price includes the full retreat program, all yoga and meditation classes, all meals, accommodation at Floating Paradise, National Park entrance tickets, excursions, and a welcome package. A €100 donation to a local educational charity is also included."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Berapa kapasitas peserta retret?" : "How many participants can join the retreat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Floating Paradise hanya memiliki 3 kamar, sehingga retret ini sangat intim dengan jumlah peserta yang terbatas. Peserta individu dan pasangan sama-sama diterima."
            : "Floating Paradise has only 3 rooms, making this an intimate retreat with limited participants. Singles and couples are both welcome."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Bagaimana kebijakan pembatalan retret?" : "What is the cancellation policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Lebih dari 60 hari sebelum retret: pengembalian penuh dikurangi deposit. 30–59 hari: 50% dikembalikan. Kurang dari 30 hari: tidak dapat dikembalikan. Deposit sebesar €350/£300 diperlukan untuk konfirmasi."
            : "More than 60 days before: full refund minus deposit. 30–59 days: 50% refund. Less than 30 days: non-refundable. A €350/£300 non-refundable deposit is required to confirm your place."
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
        "name": isId ? "Retret Yoga" : "Yoga Retreat",
        "item": `https://floatingparadise.id/${params.locale}/yoga-retreat`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <YogaClient cmsData={cmsData} />
    </>
  )
}
