import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutUsSection from '@/components/about-us-section'
import ExploreSection from '@/components/explore-section'
import BungalowsSection from '@/components/bungalows-section'
import YogaRetreatSection from '@/components/yoga-retreat-section'
import ReviewBadges from '@/components/review-badges'
import Footer from '@/components/footer'
import { getHomepage, getBungalows } from '@/lib/sanity.fetch'

export default async function Home() {
  const { data: homepage } = await getHomepage()
  const { data: bungalows } = await getBungalows()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection 
        title={homepage?.heroTitle} 
        subtitle={homepage?.heroSubtitle}
        image={homepage?.heroImage}
      />
      <AboutUsSection 
        title={homepage?.welcomeTitle}
        text={homepage?.welcomeText}
        image1={homepage?.welcomeImage1}
        image2={homepage?.welcomeImage2}
        image3={homepage?.welcomeImage3}
      />
      {/* Smooth transition: white → beige */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-background to-[#f5efe6]" />
      <ExploreSection />
      {/* Smooth transition: beige → white */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-[#f5efe6] to-background" />
      <BungalowsSection 
        title={homepage?.builtByHandTitle}
        text={homepage?.builtByHandText}
        bungalows={bungalows}
      />
      <YogaRetreatSection />
      {/* Smooth transition: white → warm beige for reviews */}
      <div className="h-16 md:h-20 bg-gradient-to-b from-background to-[#f0ebe3]" />
      <ReviewBadges />
      <Footer />
    </main>
  )
}
