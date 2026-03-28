import GettingHereClient from "@/app/(site)/getting-here/getting-here-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  return generatePageSeo(params.locale, "getting-here", "/getting-here")
}

export default function GettingHerePage({
  params,
}: {
  params: { locale: string }
}) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GettingHereClient />
    </>
  )
}
