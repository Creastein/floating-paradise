import ContactClient from '@/app/(site)/contact/contact-client'
import { generatePageSeo } from '@/lib/i18n/seo'
import { WA_GENERAL } from '@/lib/constants'

interface LocalePageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: LocalePageProps) {
  return generatePageSeo(locale, "contact", "/contact")
}

export default function ContactPage({ params: { locale } }: LocalePageProps) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  )
}
