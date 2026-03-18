import Image from 'next/image'
import Link from 'next/link'

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bungalows Highlight */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/bungalow-luxury.jpg"
                alt="Luxury Bungalow"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground text-pretty">
                  Our Floating Bungalows
                </h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Each bungalow is thoughtfully designed with sustainable materials and modern amenities. Wake up to ocean views, enjoy private terraces, and experience the perfect blend of comfort and nature.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Solar-powered climate control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Premium ocean view locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Eco-friendly toiletries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Outdoor shower with sea views</span>
                </li>
              </ul>
              <Link
                href="/bungalows"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                View All Rooms
              </Link>
            </div>
          </div>
        </div>

        {/* Yoga Retreat Highlight */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  New at Floating Paradise
                </p>
                <h2 className="font-serif text-4xl font-bold text-foreground text-pretty">
                  The Art of Floating
                </h2>
                <p className="text-lg text-foreground/70 mt-3">
                  8–14 June 2026 · Karimunjawa
                </p>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                A 7-day nature-based yoga retreat above the sea. Sunrise and sunset yoga on the jetty, nature immersion, and meaningful contribution — all shaped by the rhythm of island life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Daily yoga & meditation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Sunset practice on the jetty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Mangrove kayaking & reef snorkeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground/80">Plant-based fusion meals</span>
                </li>
              </ul>
              <Link
                href="/yoga-retreat"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Discover the Retreat
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/yoga-sunset.jpg"
                alt="Yoga at Sunset"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
