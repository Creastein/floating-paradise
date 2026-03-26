import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ExploreContent from '@/components/explore-content'
import { getActivities } from '@/lib/sanity.fetch'

export const metadata = {
  title: 'Explore Karimunjawa | Floating Paradise',
  description: 'Discover the island through our curated activities: eco boat tours, sunset yoga, kayaking, trekking, turtle sanctuary, and local cuisine.',
}

export default async function ExplorePage() {
  const { data: activities } = await getActivities()

  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero
        title="Explore"
        subtitle="Every experience departs from our pier."
        backgroundImage="/image/Explore/explore-hero.webp"
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExploreContent initialActivities={activities} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
