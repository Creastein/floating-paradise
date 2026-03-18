import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import HighlightsSection from '@/components/highlights-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
