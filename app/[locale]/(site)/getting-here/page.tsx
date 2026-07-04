import GettingHereClient from "@/components/getting-here-client"
import { generatePageSeo } from "@/lib/i18n/seo"
import { getGettingHerePage } from "@/lib/sanity.fetch"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "getting-here", "/getting-here")
}

export default async function GettingHerePage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  const { data: pageData } = await getGettingHerePage()
  const isId = params.locale === "id";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": isId ? "Cara Ke Floating Paradise Karimunjawa" : "How to Get to Floating Paradise Karimunjawa",
    "description": isId 
      ? "Panduan langkah demi langkah perjalanan ke Kepulauan Karimunjawa dan Floating Paradise via kapal feri dari Jepara."
      : "Step-by-step guide on traveling to Karimunjawa Islands and reaching Floating Paradise lodge via ferry from Jepara or Semarang.",
    "step": [
      {
        "@type": "HowToStep",
        "name": isId ? "Perjalanan ke Jepara" : "Travel to Jepara or Semarang",
        "text": isId ? "Menuju ke Pelabuhan Kartini di Jepara menggunakan jalur darat." : "Fly into Semarang (SRG) airport or travel overland to Jepara port."
      },
      {
        "@type": "HowToStep",
        "name": isId ? "Naik Kapal Feri ke Karimunjawa" : "Take the Ferry to Karimunjawa",
        "text": isId ? "Naik kapal cepat Express Bahari (2 jam) atau kapal feri Siginjai (4.5 jam) ke Karimunjawa." : "Board the Express Bahari fast boat (2 hours) or Siginjai slow ferry (4.5 hours) from Jepara to Karimunjawa."
      },
      {
        "@type": "HowToStep",
        "name": "Arrive at Floating Paradise",
        "text": isId ? "Setibanya di pelabuhan Karimunjawa, kami dapat mengatur penjemputan. Floating Paradise terletak di Legon Lele." : "Once at Karimunjawa port, we can arrange a pickup. Floating Paradise is located in Legon Lele, a 15-minute ride from the main harbor."
      }
    ]
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isId ? "Bagaimana cara ke Karimunjawa dari Semarang?" : "How do I get to Karimunjawa from Semarang?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Terbang ke Bandara Semarang (SRG), lalu naik taksi atau shuttle DayTrans ke Jepara (sekitar 2 jam). Dari Jepara, naik kapal cepat Express Bahari (2 jam) ke Karimunjawa."
            : "Fly into Semarang (SRG) airport, then take a private taxi or DayTrans shuttle to Jepara (approximately 2 hours). From Jepara, board the Express Bahari fast boat (2 hours) to Karimunjawa."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Berapa lama perjalanan kapal ke Karimunjawa?" : "How long is the boat ride to Karimunjawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Kapal cepat Express Bahari memakan waktu sekitar 2 jam, sedangkan kapal feri KMP Siginjai memakan waktu sekitar 4,5 jam dari Pelabuhan Kartini, Jepara."
            : "The Express Bahari fast boat takes approximately 2 hours, while the KMP Siginjai car ferry takes approximately 4.5 hours from Kartini Harbour in Jepara."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Bagaimana cara dari pelabuhan Karimunjawa ke Floating Paradise?" : "How do I get from Karimunjawa port to Floating Paradise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Floating Paradise terletak di Legon Lele, sekitar 15 menit dari pelabuhan. Taksi tersedia dengan harga Rp 150.000. Kami juga dapat mengatur penjemputan untuk Anda."
            : "Floating Paradise is located in Legon Lele, about a 15-minute ride from the port. Taxis are available for Rp 150,000. We can also arrange a pickup for you."
        }
      },
      {
        "@type": "Question",
        "name": isId ? "Apakah ada jadwal harian kapal ke Karimunjawa?" : "Is there a daily boat schedule to Karimunjawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isId
            ? "Express Bahari beroperasi setiap hari dengan jadwal yang bervariasi tergantung musim. KMP Siginjai berangkat setiap dua hari sekali. Kami menyarankan memesan tiket melalui kami untuk informasi jadwal terkini."
            : "Express Bahari operates daily with schedules varying by season. KMP Siginjai departs every other day. We recommend booking tickets through us for the most up-to-date availability."
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
        "name": isId ? "Cara ke Sini" : "Getting Here",
        "item": `https://floatingparadise.id/${params.locale}/getting-here`
      }
    ]
  }

  return (
    <>
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
      <GettingHereClient pageData={pageData} />
    </>
  )
}
