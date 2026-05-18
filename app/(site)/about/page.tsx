import { getAboutPage } from "@/lib/sanity.fetch"
import AboutClient from "./about-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata() {
  return generatePageSeo("en", "about", "/about")
}

export default async function AboutPage() {
  const aboutResult = await getAboutPage()
  const cmsData = aboutResult?.data

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Floating Paradise",
    "description": "An eco-friendly guesthouse handbuilt above the sea in Karimunjawa.",
    "url": "https://floatingparadise.id/en/about",
    "logo": "https://floatingparadise.id/logo.png",
    "foundingDate": "2018",
    "founder": [
      {
        "@type": "Person",
        "name": "Astrid"
      },
      {
        "@type": "Person",
        "name": "Tono"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karimunjawa",
      "addressRegion": "Jawa Tengah",
      "addressCountry": "ID"
    }
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
        "name": "About Us",
        "item": "https://floatingparadise.id/en/about"
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
      <AboutClient cmsData={cmsData} />
    </>
  )
}
