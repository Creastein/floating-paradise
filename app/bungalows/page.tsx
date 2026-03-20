import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { TRIPLA_BOOKING_URL } from '@/lib/tripla'

export const metadata = {
  title: 'Our Floating Rooms | Floating Paradise',
  description: 'Suspended above the reef, our three handcrafted bamboo bungalows invite you to live between sea and sky.',
}

export default function BungalowsPage() {
  const rooms = [
    {
      name: 'Sunrise Bungalow',
      description: 'Our most private and sought-after bungalow, offering expansive sea views and soft ocean breezes right from your king-sized bed.',
      image: '/bungalow-1.jpg',
      reverse: false,
    },
    {
      name: 'Sunset Bungalow',
      description: "Our soul went into creating Floating's first stand-alone bungalow — offering expansive sea views and sunset views along the bay.",
      image: '/bungalow-2.jpg',
      reverse: true,
    },
    {
      name: 'Bayside Bungalow',
      description: 'Originally our private family space, Bayside has evolved into a spacious two-bedroom bungalow where you can shower with a view and take in the mangrove forest to the East and the sea flowing gently into the bay in the West.',
      image: '/bungalow-3.jpg',
      reverse: false,
    },
  ];

  const features = [
    'Queen bed (or larger)',
    'Private ensuite',
    'Fresh water shower',
    'Sink and flushing toilet',
    'Generous balcony with comfortable seating',
    'Direct access to the sea',
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero 
        title="Our Floating Rooms"
        subtitle="Perched above the sea, built by hand, shaped by the elements."
        backgroundImage="/hero-island.jpg"
      />

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="font-serif text-2xl text-foreground italic">
            "Suspended above the reef, our three handcrafted bamboo bungalows invite you to live between sea and sky."
          </p>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            Built by hand and shaped by the elements, each bungalow has its own personality; no two are the same. These are not just rooms, they're a place to exhale, to soften, and to float.
          </p>
        </div>
      </section>

      {/* Rooms Zig-Zag */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${room.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {room.name}
                </h2>
                <p className="text-lg text-foreground/80 font-light leading-relaxed">
                  {room.description}
                </p>
                <a 
                  href={TRIPLA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-16">
            Inside Your Bungalow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pl-4 md:pl-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground/80 font-light">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deposit Banner */}
      <section className="py-16 bg-[#F5EFE4] border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Booking & Deposit
          </h3>
          <p className="text-lg text-foreground/80 font-light">
            A €350 / £300 deposit secures your spot in paradise. The layout for the bungalows can be the same, but you can choose your preferred room and secure it directly through our booking system.
          </p>
          <div className="pt-4">
             <a 
                href={TRIPLA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium shadow-md hover:shadow-lg"
              >
                Check Availability & Book
              </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
