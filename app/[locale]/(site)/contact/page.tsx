import ContactClient from '@/components/contact-client'
import { generatePageSeo } from '@/lib/i18n/seo'
import { WA_GENERAL } from '@/lib/constants'

interface LocalePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params: paramsPromise }: LocalePageProps) {
  const { locale } = await paramsPromise
  return generatePageSeo(locale, "contact", "/contact")
}

export default async function ContactPage({ params: paramsPromise }: LocalePageProps) {
  const { locale } = await paramsPromise
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": locale === "id" ? "Hubungi Floating Paradise" : "Contact Floating Paradise",
    "description": locale === "id" 
      ? "Hubungi Floating Paradise Karimunjawa. Pesan penginapan, yoga retreat, atau aktivitas pulau Anda."
      : "Get in touch with Floating Paradise Karimunjawa. Book your stay, yoga retreat, or island activities.",
    "url": `https://floatingparadise.id/${locale}/contact`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Floating Paradise",
      "image": "https://floatingparadise.id/logo.png",
      "telephone": `+${WA_GENERAL}`,
      "email": "floatingparadise.legonlele@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Kapuran, Legon Lele",
        "addressLocality": "Karimunjawa",
        "addressRegion": "Jawa Tengah",
        "addressCountry": "ID"
      }
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
        "item": `https://floatingparadise.id/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": locale === "id" ? "Hubungi Kami" : "Contact",
        "item": `https://floatingparadise.id/${locale}/contact`
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
      <ContactClient />
    </>
  )
}
