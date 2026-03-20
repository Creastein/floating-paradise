import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'The Art of Floating Yoga Retreat | Floating Paradise',
  description: 'A 7-day nature-based yoga retreat above the sea in Karimunjawa. 8–14 June 2026.',
}

export default function YogaRetreatPage() {
  const themes = [
    {
      title: 'Embodied Practice',
      description: 'Daily sunrise and sunset yoga sessions on our open-air jetty. We move with the rhythm of the tides, focusing on grounding, breath, and mindful flow.'
    },
    {
      title: 'Nature Immersion',
      description: 'Snorkeling vibrant reefs, kayaking through ancient mangroves, and sleeping suspended above the sea. A chance to completely disconnect from the mainland pace.'
    },
    {
      title: 'Conscious Contribution',
      description: 'Engaging in meaningful karma yoga. We support local conservation efforts and participate in community-led island initiatives.'
    }
  ];

  const schedule = [
    { time: '06:30', activity: 'Sunrise Meditation & Vinyasa Flow on the Jetty' },
    { time: '08:30', activity: 'Nourishing Plant-Based Breakfast' },
    { time: '10:00', activity: 'Free Time / Island Exploration (Snorkeling or Kayaking)' },
    { time: '13:00', activity: 'Community Lunch' },
    { time: '14:30', activity: 'Karma Yoga / Nature Walk / Rest' },
    { time: '17:00', activity: 'Sunset Yin & Restorative Practice' },
    { time: '19:00', activity: 'Shared Dinner under the Stars' },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* 1. Page Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="/yoga-sunset.jpg"
          alt="Yoga on the Jetty"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 space-y-6 max-w-4xl mx-auto">
          <p className="text-sm md:text-base tracking-widest uppercase font-semibold text-primary-foreground/90">
            New at Floating Paradise
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">
            The Art of Floating
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-primary-foreground/90">
            8–14 June 2026 · Karimunjawa
          </p>
          <div className="pt-8">
            <a 
              href="#book-retreat"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-muted hover:text-primary transition-all duration-300 font-medium tracking-wide shadow-lg"
            >
              Book Your Spot
            </a>
          </div>
        </div>
      </section>

      {/* 2. Retreat Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="font-serif text-3xl text-foreground font-light leading-relaxed">
            A 7-day sea-based yoga retreat, hosted entirely off-grid.
          </p>
          <div className="text-lg text-foreground/80 font-light leading-relaxed space-y-6">
            <p>
              Join us for an intimate week of practice, nature, and deep rest. Suspended above the Karimunjawa reef in our solar-powered eco-guesthouse, this retreat is an invitation to slow down and align with the elements.
            </p>
            <p>
              Wake up to the sound of the ocean, practice on an open-air wooden jetty, and fall asleep under a sky completely free from light pollution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three Core Themes */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {themes.map((theme, idx) => (
              <div key={idx} className="bg-background p-10 rounded-2xl shadow-sm text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {theme.title}
                </h3>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Daily Rhythm */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-serif text-4xl text-center font-bold text-foreground mb-16">
            Our Daily Rhythm
          </h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-20 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
            {schedule.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ring-4 ring-background"></div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <span className="font-serif text-primary text-xl font-bold">{item.time}</span>
                  </div>
                  <div className="mt-2 text-foreground/80 font-light">{item.activity}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-light text-foreground/60 italic mt-12">
            *This is a sample schedule. Rhythms may adjust to properly align with the weather and tides.
          </p>
        </div>
      </section>

      {/* 5. Nature & Contribution */}
      <section className="py-24 bg-[#e8efe9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Karma Yoga & Deep Contribution
              </h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Yoga extends beyond the mat. During our week together, we dedicate time to give back to the island that holds us. Through guided Karma Yoga sessions, you'll actively participate in the preservation of Karimunjawa's delicate ecosystem.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-light text-lg">Mangrove planting and coastal clean-ups</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-light text-lg">Supporting local turtle sanctuary initiatives</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-light text-lg">Learning to live harmoniously with off-grid systems</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl lg:order-2 order-1">
              <Image
                src="/hero-island.jpg"
                alt="Karimunjawa Nature"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Food Philosophy */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold text-foreground">
            Food Philosophy
          </h2>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
             At Floating, meals are slow, fresh, and deeply local. Throughout the retreat, our kitchen will serve a thoughtfully curated, plant-based fusion menu. We celebrate the foundational flavours of Indonesia, using locally-grown produce to create nourishing, vibrant, and incredibly flavorful meals. Clean eating that grounds the body and lifts the spirit.
          </p>
        </div>
      </section>

      {/* 7. Is This For You? */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Is This Retreat For You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-10 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary">Yes, if you...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> <span className="font-light text-foreground/80 text-lg">Crave a deep disconnect from digital life and urban pace.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> <span className="font-light text-foreground/80 text-lg">Love the ocean and are comfortable sleeping in open-air setups.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> <span className="font-light text-foreground/80 text-lg">Want a yoga practice that integrates deeply with nature.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> <span className="font-light text-foreground/80 text-lg">Appreciate authenticity, simplicity, and eco-conscious living.</span></li>
              </ul>
            </div>
            <div className="bg-background p-10 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground/50">Perhaps not, if you...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-foreground/40 font-bold">✗</span> <span className="font-light text-foreground/70 text-lg">Expect 5-star polished resort amenities and constant AC.</span></li>
                <li className="flex items-start gap-3"><span className="text-foreground/40 font-bold">✗</span> <span className="font-light text-foreground/70 text-lg">Need high-speed mainland WiFi at all times.</span></li>
                <li className="flex items-start gap-3"><span className="text-foreground/40 font-bold">✗</span> <span className="font-light text-foreground/70 text-lg">Are uneasy with bugs, sea sounds, or natural elements.</span></li>
                <li className="flex items-start gap-3"><span className="text-foreground/40 font-bold">✗</span> <span className="font-light text-foreground/70 text-lg">Prefer a rigidly packed itinerary over organic flow.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. About Astrid */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-full overflow-hidden shadow-xl border-4 border-muted">
              <Image
                src="/hero-island.jpg" 
                alt="Astrid - Yoga Teacher"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="font-serif text-3xl font-bold text-foreground">Meet Astrid</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Resident teacher and co-founder of Floating Paradise. Astrid completed her 200hr YTT in India in 2020 and has been weaving movement, breath, and profound respect for nature ever since. Her classes are grounded, inclusive, and designed to help you drop out of the mind and into the body.
              </p>
              <div className="space-y-4 pt-4 border-t border-muted">
                <blockquote className="italic font-serif text-foreground/70">
                  "Astrid has a natural gift for holding space. Her sunset jetty flows completely changed how I experience my own practice." — Sarah, UK
                </blockquote>
                <blockquote className="italic font-serif text-foreground/70">
                  "Gentle, incredibly attentive, and deeply connected to the island. A beautiful guide." — Mark, Aus
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Booking & Cancellation */}
      <section className="py-24 bg-[#e8efe9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Booking & Cancellation
          </h2>
          <div className="text-foreground/80 font-light space-y-4 max-w-2xl mx-auto text-lg leading-relaxed">
            <p>Retreat spaces are extremely limited to preserve intimacy (maximum 6 guests).</p>
            <p>A €500 / £425 non-refundable deposit is required to secure your booking.</p>
            <p className="text-sm mt-8 opacity-80">Full payment is due 30 days prior to the retreat start date. We highly recommend purchasing comprehensive travel insurance that covers unforeseen cancellations or weather-related travel disruptions.</p>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Banner */}
      <section className="py-28 bg-primary text-primary-foreground text-center" id="book-retreat">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Only 3 rooms available.
          </h2>
          <p className="text-2xl font-light opacity-90 pb-4">
            Join us for a week of transformation above the reef.
          </p>
          <a 
            href="#check-availability"
            className="inline-block bg-background text-primary px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 font-bold text-lg shadow-xl"
          >
            Book Your Spot Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
