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
    "url": "https://floatingparadise.id/about",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient cmsData={cmsData} />
    </>
  )
}
