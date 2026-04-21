import FaqClient from '@/components/faq-client'
import { generatePageSeo } from '@/lib/i18n/seo'

export async function generateMetadata() {
  return generatePageSeo("en", "faq", "/faq")
}

export default function FaqPage() {
  return <FaqClient />
}
