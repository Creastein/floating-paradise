'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ExploreContent from '@/components/explore-content'
import { useLanguage } from '@/lib/i18n/language-context'
import { urlFor } from '@/lib/sanity.image'

export default function ExploreClient({
  initialActivities,
  pageData,
}: {
  initialActivities?: any[]
  pageData?: any
}) {
  const { t } = useLanguage()
  const heroImage =
    pageData?.heroImage ? urlFor(pageData.heroImage).width(2400).height(1350).url() : undefined

  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero
        title={t.explorePage.heroTitle}
        subtitle={t.explorePage.heroSubtitle}
        backgroundImage={heroImage || "/image/Explore/explore-hero.webp"}
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExploreContent initialActivities={initialActivities} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
