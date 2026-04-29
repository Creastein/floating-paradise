import FaqClient from '@/components/faq-client'
import { generatePageSeo } from '@/lib/i18n/seo'
import { getFaqPage } from '@/lib/sanity.fetch'

interface LocalePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params: paramsPromise }: LocalePageProps) {
  const { locale } = await paramsPromise
  return generatePageSeo(locale, "faq", "/faq")
}

/** Shape of a single FAQ item from Sanity CMS */
interface CmsFaqItem {
  question?: string
  question_id?: string
  answer?: string
  answer_id?: string
}

/** Build JSON-LD FAQPage schema dynamically from CMS data */
function buildFaqJsonLd(
  faqData: Record<string, CmsFaqItem[] | undefined> | null,
  locale: string
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
    "name": locale === "id" ? "FAQ Floating Paradise" : "Floating Paradise FAQ",
    "url": `https://floatingparadise.id/${locale}/faq`,
    "mainEntity": allItems
      .filter((item) => item.question && item.answer)
      .map((item) => ({
        "@type": "Question",
        "name": locale === "id" && item.question_id ? item.question_id : item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": locale === "id" && item.answer_id ? item.answer_id : item.answer,
        },
      })),
  }
}

export default async function FaqPage({ params: paramsPromise }: LocalePageProps) {
  const { locale } = await paramsPromise

  // Fetch FAQ data from Sanity CMS
  const { data: faqData } = await getFaqPage()

  // Build structured data dynamically from CMS content
  const jsonLd = buildFaqJsonLd(faqData, locale)

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
