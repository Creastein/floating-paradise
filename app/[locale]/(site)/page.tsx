import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutUsSection from "@/components/about-us-section"

import { getHomepage, getBungalows } from "@/lib/sanity.fetch"
import { generatePageSeo } from "@/lib/i18n/seo"
import { WA_GENERAL } from "@/lib/constants"

import ExploreSection from "@/components/explore-section"
import BungalowsSection from "@/components/bungalows-section"
import YogaRetreatSection from "@/components/yoga-retreat-section"
import ReviewBadges from "@/components/review-badges"
import Footer from "@/components/footer"

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}) {
  const params = await paramsPromise
  return generatePageSeo(params.locale, "home", "/")
}

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Floating Paradise",
  description:
    "A handcrafted, solar-powered guesthouse above the sea in Karimunjawa, Indonesia.",
  url: "https://floatingparadise.id",
  telephone: `+${WA_GENERAL}`,
  email: "floatingparadise.legonlele@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kapuran, Legon Lele",
    addressLocality: "Karimunjawa",
    addressRegion: "Jawa Tengah",
    postalCode: "59455",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -5.8024,
    longitude: 110.4473,
  },
  numberOfRooms: 3,
  amenityFeature: [
    "Solar powered",
    "Sea view",
    "Direct reef access",
    "Private bungalows",
    "Natural ventilation",
  ],
  checkinTime: "14:00",
  checkoutTime: "11:00",
  priceRange: "$$",
  image: "https://floatingparadise.id/og-image.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.4",
    bestRating: "10",
    worstRating: "1",
    ratingCount: "156",
    reviewCount: "156",
  },
  sameAs: [
    "https://www.instagram.com/floatingparadise",
    "https://www.booking.com/hotel/id/floating-paradise.id.html",
    "https://www.airbnb.co.id/rooms/22774718",
  ],
}

export default async function Home({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const params = await paramsPromise;
  const locale = params.locale;
  const { data: homepage } = await getHomepage()
  const { data: bungalows } = await getBungalows()

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
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
