import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutUsSection from '@/components/about-us-section'
import ExploreSection from '@/components/explore-section'
import BungalowsSection from '@/components/bungalows-section'
import YogaRetreatSection from '@/components/yoga-retreat-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      {/* Smooth transition: white → beige */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-background to-[#f5efe6]" />
      <ExploreSection />
      {/* Smooth transition: beige → white */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-[#f5efe6] to-background" />
      <BungalowsSection />
      <YogaRetreatSection />
      <Footer />
    </main>
  )
}
