import ExploreClient from './explore-client'
import { getActivities } from '@/lib/sanity.fetch'

export const metadata = {
  title: 'Explore Karimunjawa | Floating Paradise',
  description: 'Discover the island through our curated activities: eco boat tours, sunset yoga, kayaking, trekking, turtle sanctuary, and local cuisine.',
}

export default async function ExplorePage() {
  const { data: activities } = await getActivities()

  return <ExploreClient initialActivities={activities} />
}
