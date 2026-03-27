import { getYogaRetreat } from '@/lib/sanity.fetch'
import YogaClient from './yoga-client'

export const metadata = {
  title: "Yoga Retreat | Floating Paradise",
  description: "The Art of Floating. Join our 7-day sea-based yoga retreat in Karimunjawa.",
}

export default async function YogaRetreatPage() {
  const retreatResult = await getYogaRetreat()
  const cmsData = retreatResult?.data

  return <YogaClient cmsData={cmsData} />
}
