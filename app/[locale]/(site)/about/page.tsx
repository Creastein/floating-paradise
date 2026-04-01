import { getAboutPage } from "@/lib/sanity.fetch"
import AboutClient from "@/app/(site)/about/about-client"
import { generatePageSeo } from "@/lib/i18n/seo"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "about", "/about")
}

export default async function AboutPage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
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
        "name": params.locale === "id" ? "Tentang Kami" : "About Us",
        "item": `https://floatingparadise.id/${params.locale}/about`
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
