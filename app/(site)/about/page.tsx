import { getAboutPage } from '@/lib/sanity.fetch'
import AboutClient from './about-client'

export const metadata = {
  title: 'Our Story | Floating Paradise',
  description: 'The story behind Floating Paradise: Astrid & Tono\u2019s vision of sustainable living in Karimunjawa.',
}

export default async function AboutPage() {
  const aboutResult = await getAboutPage()
  const cmsData = aboutResult?.data

  return <AboutClient cmsData={cmsData} />
}
