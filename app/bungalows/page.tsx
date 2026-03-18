import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import BungalowCard from '@/components/bungalow-card'
import Image from 'next/image'

export const metadata = {
  title: 'Luxury Bungalows | Floating Paradise',
  description: 'Discover our eco-luxury bungalows with solar power, ocean views, and sustainable design in Karimunjawa.',
}

export default function BungalowsPage() {
  const bungalows = [
    {
      title: 'Ocean View Suite',
      image: '/bungalow-deluxe.jpg',
      description:
        'Wake to pristine ocean views from your private terrace. Our most popular suite features a spacious bedroom, en-suite bathroom, and direct beach access.',
      features: [
        'King-size bed with premium linens',
        'Private terrace with ocean views',
        'Solar-powered AC and lighting',
        'Indoor and outdoor shower',
        'Mini bar with local beverages',
        'Complimentary WiFi',
      ],
      price: '$250',
    },
    {
      title: 'Deluxe Garden Bungalow',
      image: '/bungalow-luxury.jpg',
      description:
        'Nestled in tropical gardens with partial ocean views. Perfect for couples seeking privacy and natural surroundings.',
      features: [
        'Spacious bedroom with garden views',
        'Enclosed garden shower',
        'Eco-friendly amenities',
        'Private seating area',
        'Sustainable materials throughout',
        'Direct garden access',
      ],
      price: '$180',
    },
    {
      title: 'Family Paradise Suite',
      image: '/bungalow-family.jpg',
      description:
        'Our largest accommodation with multiple bedrooms, perfect for families and groups. Features a private pool and expansive outdoor space.',
      features: [
        '2 bedrooms with en-suite bathrooms',
        'Private infinity pool',
        'Full kitchen facilities',
        'Living and dining areas',
        'Ocean and garden views',
        'Perfect for up to 6 guests',
      ],
      price: '$450',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Luxury Bungalows
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of eco-friendly, solar-powered bungalows designed for ultimate comfort and sustainability.
          </p>
        </div>
      </section>

      {/* Bungalows Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bungalows.map((bungalow, index) => (
              <BungalowCard key={index} {...bungalow} />
            ))}
          </div>

          {/* Features Highlight */}
          <div className="bg-muted rounded-xl p-12 mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              All Bungalows Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Solar-powered electricity',
                'Filtered rainwater systems',
                'Premium eco-friendly toiletries',
                'Air conditioning & heating',
                'Private terraces or gardens',
                'Beachfront or garden access',
                'Room service & daily cleaning',
                'Complimentary WiFi',
                'Mini bar with local snacks',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready to Book Your Stay?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you plan the perfect escape to paradise. Contact us for availability, special packages, and recommendations.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
