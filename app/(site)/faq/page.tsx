import FaqClient from '@/components/faq-client'
import { generatePageSeo } from '@/lib/i18n/seo'
import { getFaqPage } from '@/lib/sanity.fetch'

export async function generateMetadata() {
  return generatePageSeo("en", "faq", "/faq")
}

export default async function FaqPage() {
  const { data: faqData } = await getFaqPage()
  return <FaqClient faqData={faqData} />
}
