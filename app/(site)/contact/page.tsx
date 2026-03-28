import ContactClient from './contact-client'

import { generatePageSeo } from '@/lib/i18n/seo'
import { WA_GENERAL } from '@/lib/constants'

export async function generateMetadata() {
  return generatePageSeo("en", "contact", "/contact")
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Floating Paradise",
    "description": "Get in touch with Floating Paradise Karimunjawa. Book your stay, yoga retreat, or island activities.",
    "url": "https://floatingparadise.id/contact",
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
