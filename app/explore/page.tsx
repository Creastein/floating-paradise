import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ExploreContent from '@/components/explore-content'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'

export const metadata = {
  title: 'Explore Karimunjawa | Floating Paradise',
  description: 'Discover the island through our curated activities: eco boat tours, sunset yoga, kayaking, trekking, turtle sanctuary, and local cuisine.',
}

const ACTIVITIES = [
  {
      title: 'Private Eco Boat Tour',
      description:
        'A full-day private boat trip departing from our pier to explore the most breathtaking corners of the archipelago. Guided by an English-speaking crew, discover vibrant reefs and untouched islands — sustainably.',
      gallery: [
        '/image/Explore/Private Eco Boat Tour/PB1.webp',
        '/image/Explore/Private Eco Boat Tour/PB2.webp',
        '/image/Explore/Private Eco Boat Tour/PB3.webp',
        '/image/Explore/Private Eco Boat Tour/PB4.webp',
        '/image/Explore/Private Eco Boat Tour/PB5.webp',
        '/image/Explore/Private Eco Boat Tour/PB6.webp',
        '/image/Explore/Private Eco Boat Tour/PB7.webp',
        '/image/Explore/Private Eco Boat Tour/PB8.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Open Air Sunset Yoga',
      description:
        'A 75-minute Hatha Flow practice at the end of our jetty as the sun sets over the bay. Led by Astrid, Floating\u2019s resident teacher — mats provided, just bring an open mind.',
      gallery: [
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga6.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga1.JPG',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga2.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga3.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga4.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga5.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga7.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga8.webp',
      ],
      ctaText: 'Learn More',
      ctaLink: '/yoga-retreat',
      ctaExternal: false,
    },
    {
      title: 'Kayak, Lunch & Chill',
      description:
        'Paddle through crystal-clear water, discover secluded beaches, and glide above vibrant coral reef at your own pace. Includes welcome drink, kayak, snorkel gear, and a fresh seafood lunch.',
      gallery: [
        '/image/Explore/Kayak, Lunch & Chill/kayak2.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak1.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak3.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak4.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak5.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak6.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Trekking Nyamplungan',
      description:
        'A half-day hike to the island\u2019s second-highest peak through tropical forest, rewarded with sweeping views of the archipelago. Plant a sapling at the summit and give something back.',
      gallery: [
        '/image/Explore/Trekking Nyamplungan/Trekking1.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking2.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking3.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking4.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking5.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Turtle Sanctuary',
      description:
        'Visit the sea turtle conservation sanctuary in our bay, led by the national park authority. Join the afternoon release of baby turtles — a meaningful way to support the reef\u2019s future.',
      gallery: [
        '/image/Explore/Turtle Sanctuary/TS1.webp',
        '/image/Explore/Turtle Sanctuary/TS2.webp',
        '/image/Explore/Turtle Sanctuary/TS3.webp',
        '/image/Explore/Turtle Sanctuary/TS4.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Tastes of Paradise',
      description:
        'Slow, fresh, and deeply local meals shaped by the sea and the seasons. Fragrant Indonesian classics, freshly caught fish, plant-based options, and good coffee at the bar.',
      gallery: [
        '/image/Explore/Tastes of Paradise/TP1.webp',
        '/image/Explore/Tastes of Paradise/TP2.webp',
        '/image/Explore/Tastes of Paradise/TP3.webp',
        '/image/Explore/Tastes of Paradise/TP4.webp',
        '/image/Explore/Tastes of Paradise/TP5.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Floating Merchandise',
      description:
        'Bamboo cotton t-shirts — soft, eco-friendly, and antibacterial. Each design handmade by Astrid herself.',
      gallery: ['/image/Explore/New folder/floating-merchandise.png'],
      detail: 'Rp 180,000 · Sizes S–XXL',
      label: 'Pre-order',
      ctaText: 'Pre-Order',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
  },
]

export default function ExplorePage() {
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
          <ExploreContent activities={ACTIVITIES} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
