import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import Image from 'next/image'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'

export const metadata = {
  title: 'Explore Karimunjawa | Floating Paradise',
  description: 'Discover the island through our curated activities: eco boat tours, sunset yoga, kayaking, trekking, dining, and turtle sanctuary visits.',
}

export default function ExplorePage() {
  const activities = [
    {
      title: 'Private Eco Boat Tour',
      description: 'Our most popular and exclusive service is a full-day private boat trip departing directly from Floating Paradiseʼs pier. During this tour you can explore the most breathtaking, and less touristic areas of the archipelago. Guided by a well-trained, English speaking guide and a friendly captain, youʼll discover vibrant reefs and untouched tropical islands while enjoying a truly unforgettable day.\n\nIn line with our eco-friendly principles, we ensure all trips are as sustainable as possible: no single-use plastics are used, rubbish is collected and taken back with us, and we prioritise reef preservation. Destinations vary depending on weather, ensuring both safety and minimal environmental impact.',
      image: '/hero-island.jpg',
      ctaText: 'Pre-Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Open Air Sunset Yoga',
      description: 'As the heat softens and the sky begins to glow, we gather at the end of Floatingʼs jetty for a steady, grounding Hatha Flow practice. This 75 minute practice blends breathwork, meditation, yogic philosophy as well as mindful sequencing. Expect a balanced flow, gentle enough for beginners, with options to deepen for more experienced practitioners.\n\nPracticing above the water as the sun sets over the bay creates a naturally calming atmosphere. Classes are led by Astrid, Floatingʼs resident teacher with five years of experience. Mats are provided, just bring comfortable clothing and an open mind. End your day grounded, stretched, and steady.',
      image: '/yoga-sunset.jpg',
      ctaText: 'Retreat Info',
      ctaLink: '/yoga-retreat',
      ctaExternal: false,
    },
    {
      title: 'Kayak, Lunch & Chill',
      description: 'Explore the reef and mangroves of Karimunjawa at your own rhythm. Our new two-person kayaks invite you to paddle through crystal-clear water, discover secluded beaches, and glide quietly above vibrant coral reef.\n\nFor Outside Guests – Kayak Day Experience: Join us between 10am–3pm for a curated off-grid adventure. Includes welcome drink, use of a two-person kayak, free mask & snorkel rental, fresh seafood lunch, access to our jetty area, and 10% off bar orders.\nRp350,000 per person (Pre-booking required · Maximum 4 outside guests per day).\nA simple, beautiful day above the sea.',
      image: '/hero-island.jpg',
      ctaText: 'Reserve Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Trekking Nyamplungan',
      description: 'For those craving movement and panoramic reward, Nyamplungan Trek is one of Karimunjawaʼs most iconic hikes. This half-day adventure takes you to the islandʼs second-highest peak, climbing through tropical forest on a reasonably steep but manageable trail. Along the way, youʼll pass native trees, hear the sounds of the jungle, and feel the shift from sea breeze to mountain air.\n\nAt the summit, youʼre met with sweeping views across the archipelago and the wild northern coastline. As part of the journey, youʼll have the opportunity to plant a sapling at the top, contributing directly to the islandʼs reforestation efforts. Challenge your body. Expand your view. Give something back.',
      image: '/hero-island.jpg',
      ctaText: 'Pre-Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Tastes of Paradise',
      description: 'At Floating, meals are slow, fresh, and deeply local; shaped by the sea, the seasons, and what the island provides that day.\n\nOur kitchen celebrates the flavours of Karimunjawa with fragrant Indonesian classics, freshly caught fish, tender squid, vibrant vegetable dishes, and nourishing plant-based options. Every plate is prepared to order using local ingredients. We donʼt rush food here and ingredients are sourced daily, which is why we kindly ask guests to pre-order lunch and dinner. At the bar, youʼll find chilled long drinks, cold beers, fresh juices, coconuts, and good coffee.',
      image: '/hero-island.jpg',
      ctaText: 'See Our Menu',
      ctaLink: '#download-menu',
      ctaExternal: false,
    },
    {
      title: 'Turtle Sanctuary',
      description: 'In the same bay as Floating Paradise, the Turtle Sanctuary is an initiative led by Balai Taman Nasional Karimunjawa (BTN), the authority responsible for protecting the marine ecosystem of Karimunjawa.\n\nThe sanctuary supports sea turtle conservation by safeguarding eggs from predators and increasing hatchling chances of survival. Guests are welcome to visit the sanctuary and participate in the release of baby sea turtles, which usually takes place in the afternoon. The visit is Rp150,000 per person (transport included). A meaningful way to witness — and support — the future of the reef.',
      image: '/hero-island.jpg',
      ctaText: 'Pre-Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero 
        title="Explore Karimunjawa"
        subtitle="We offer a range of activities on site, or slightly beyond, that depart directly from Floating."
        backgroundImage="/hero-island.jpg"
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {activities.map((activity, index) => (
              <div key={index} className="flex flex-col space-y-6">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex flex-col flex-grow space-y-4">
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    {activity.title}
                  </h2>
                  <div className="text-foreground/80 font-light leading-relaxed flex-grow space-y-4 whitespace-pre-line">
                    {activity.description}
                  </div>
                  <div className="pt-4">
                    <a 
                      href={activity.ctaLink}
                      {...(activity.ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-block border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-center"
                    >
                      {activity.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
