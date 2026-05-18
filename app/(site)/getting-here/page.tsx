import GettingHereClient from "./getting-here-client"
import { getGettingHerePage } from "@/lib/sanity.fetch"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "getting-here", "/getting-here")
}

export default async function GettingHerePage() {
  const { data: pageData } = await getGettingHerePage()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get to Floating Paradise Karimunjawa",
    "description": "Step-by-step guide on traveling to Karimunjawa Islands and reaching Floating Paradise lodge via ferry from Jepara or Semarang.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Travel to Jepara or Semarang",
        "text": "Fly into Semarang (SRG) airport or travel overland to Jepara port."
      },
      {
        "@type": "HowToStep",
        "name": "Take the Ferry to Karimunjawa",
        "text": "Board the Express Bahari fast boat (2 hours) or Siginjai slow ferry (4.5 hours) from Jepara to Karimunjawa."
      },
      {
        "@type": "HowToStep",
        "name": "Arrive at Floating Paradise",
        "text": "Once at Karimunjawa port, we can arrange a pickup. Floating Paradise is located in Legon Lele, a 15-minute ride from the main harbor."
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
        "item": "https://floatingparadise.id/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Getting Here",
        "item": "https://floatingparadise.id/en/getting-here"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GettingHereClient pageData={pageData} />
    </>
  )
}
