import FaqClient from '@/components/faq-client'
import { generatePageSeo } from '@/lib/i18n/seo'

interface LocalePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params: paramsPromise }: LocalePageProps) {
  const { locale } = await paramsPromise
  return generatePageSeo(locale, "faq", "/faq")
}

export default async function FaqPage({ params: paramsPromise }: LocalePageProps) {
  const { locale } = await paramsPromise

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": locale === "id" ? "FAQ Floating Paradise" : "Floating Paradise FAQ",
    "url": `https://floatingparadise.id/${locale}/faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do the rooms have AC?",
        "acceptedAnswer": { "@type": "Answer", "text": "No, we have ceiling fans and natural ventilation to enable a fully solar-powered guesthouse." }
      },
      {
        "@type": "Question",
        "name": "Is there WiFi?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we have Starlink WiFi available for all guests." }
      },
      {
        "@type": "Question",
        "name": "Is breakfast included?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, breakfast is included with every stay." }
      },
      {
        "@type": "Question",
        "name": "Can guests use the kayaks?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, kayak use is free of charge for all guests. We also provide complimentary masks and snorkels." }
      },
      {
        "@type": "Question",
        "name": "What time is check-in and check-out?",
        "acceptedAnswer": { "@type": "Answer", "text": "Check-in is at 12:00 PM and check-out is at 10:00 AM." }
      },
      {
        "@type": "Question",
        "name": "Is there direct access to Floating?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, there is both bike and car access directly to our parking area." }
      },
      {
        "@type": "Question",
        "name": "Can we pay by card?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, card payment is accepted with a 3% processing fee." }
      },
      {
        "@type": "Question",
        "name": "What activities can be done directly from Floating?",
        "acceptedAnswer": { "@type": "Answer", "text": "You can swim, snorkel, kayak, join sunset yoga, take a beach walk, visit the turtle sanctuary, or book a private eco boat tour — all directly from our pier." }
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
        "item": `https://floatingparadise.id/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": `https://floatingparadise.id/${locale}/faq`
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
      <FaqClient />
    </>
  )
}
