import FaqClient from '@/components/faq-client'
import { generatePageSeo } from '@/lib/i18n/seo'
import { getFaqPage } from '@/lib/sanity.fetch'

export async function generateMetadata() {
  return generatePageSeo("en", "faq", "/faq")
}

/** Shape of a single FAQ item from Sanity CMS */
interface CmsFaqItem {
  question?: string
  answer?: string
}

/** Build JSON-LD FAQPage schema dynamically from CMS data */
function buildFaqJsonLd(
  faqData: Record<string, CmsFaqItem[] | undefined> | null,
) {
  if (!faqData) return null

  const allItems: CmsFaqItem[] = [
    ...(faqData.accommodationFaqs || []),
    ...(faqData.foodFaqs || []),
    ...(faqData.bookingFaqs || []),
    ...(faqData.gettingHereFaqs || []),
    ...(faqData.activitiesFaqs || []),
  ]

  if (allItems.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Floating Paradise FAQ",
    "url": "https://floatingparadise.id/en/faq",
    "mainEntity": allItems
      .filter((item) => item.question && item.answer)
      .map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
  }
}

export default async function FaqPage() {
  const { data: faqData } = await getFaqPage()

  const jsonLd = buildFaqJsonLd(faqData)

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
        "name": "FAQ",
        "item": "https://floatingparadise.id/en/faq"
      }
    ]
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FaqClient faqData={faqData} />
    </>
  )
}
