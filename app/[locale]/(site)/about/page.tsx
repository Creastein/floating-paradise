import { getAboutPage } from "@/lib/sanity.fetch"
import AboutClient from "@/app/(site)/about/about-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  return generatePageSeo(params.locale, "about", "/about")
}

export default async function AboutPage({
  params,
}: {
  params: { locale: string }
}) {
  const aboutResult = await getAboutPage()
  const cmsData = aboutResult?.data

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Floating Paradise",
    "description": params.locale === "id" 
      ? "Guesthouse ramah lingkungan yang dibangun di atas laut Karimunjawa." 
      : "An eco-friendly guesthouse handbuilt above the sea in Karimunjawa.",
    "url": `https://floatingparadise.id/${params.locale}/about`,
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
