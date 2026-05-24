import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutUsSection from "@/components/about-us-section"

import { getHomepage, getBungalows, getSiteSettings } from "@/lib/sanity.fetch"
import { generatePageSeo } from "@/lib/i18n/seo"
import { WA_GENERAL } from "@/lib/constants"

import ExploreSection from "@/components/explore-section"
import BungalowsSection from "@/components/bungalows-section"
import YogaRetreatSection from "@/components/yoga-retreat-section"
import ReviewBadges from "@/components/review-badges"
import Footer from "@/components/footer"
import { LodgingBusinessSchema, FaqSchema } from "@/components/schema-org"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "home", "/")
}

export default async function Home({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const params = await paramsPromise;
  const locale = params.locale;
  const { data: homepage } = await getHomepage()
  const { data: bungalows } = await getBungalows()
  const { data: siteSettings } = await getSiteSettings()

  return (
    <main className="min-h-screen">
      <LodgingBusinessSchema siteSettings={siteSettings} bungalows={bungalows} locale={locale} />
      <FaqSchema locale={locale} />
      <Navigation />
      <HeroSection homepage={homepage} locale={locale} />
      <AboutUsSection homepage={homepage} />
      <div className="h-24 md:h-32 bg-gradient-to-b from-background to-[#f5efe6]" />
      <ExploreSection />
      <div className="h-24 md:h-32 bg-gradient-to-b from-[#f5efe6] to-background" />
      <BungalowsSection homepage={homepage} bungalows={bungalows} />
      <YogaRetreatSection />
      <div className="h-16 md:h-20 bg-gradient-to-b from-background to-[#f0ebe3]" />
      <ReviewBadges />
      <Footer />
    </main>
  )
}
