import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ActivityCard from '@/components/activity-card'

export const metadata = {
  title: 'Explore Activities | Floating Paradise',
  description: 'Discover exciting island adventures including snorkeling, jungle trekking, and sailing in Karimunjawa.',
}

export default function ExplorePage() {
  const activities = [
    {
      title: 'Snorkeling & Diving',
      image: '/snorkel-coral.jpg',
      description:
        'Explore vibrant coral reefs and encounter tropical marine life in crystal-clear waters. Our certified guides ensure a safe and unforgettable underwater adventure.',
      duration: '3-4 hours',
      groupSize: '2-8 people',
      details: [
        'All equipment provided',
        'Professional dive guides',
        'Multiple reef locations',
        'Morning and afternoon sessions',
        'Perfect for beginners and experienced divers',
        'Marine wildlife photography available',
      ],
    },
    {
      title: 'Jungle Trek & Nature Walk',
      image: '/jungle-trek.jpg',
      description:
        'Immerse yourself in Karimunjawa\'s lush tropical biodiversity. Our expert naturalists guide you through hidden trails, revealing exotic plants and wildlife.',
      duration: '2-3 hours',
      groupSize: '1-6 people',
      details: [
        'Expert naturalist guides',
        'Bird watching opportunities',
        'Plant and wildlife education',
        'Photography-friendly stops',
        'Beginner to moderate difficulty',
        'Early morning tours recommended',
      ],
    },
    {
      title: 'Sunset Sailing & Cruise',
      image: '/sunset-sail.jpg',
      description:
        'Experience pure magic as you sail around the island during the golden hour. Enjoy local refreshments while witnessing the sun dip beyond the horizon.',
      duration: '2-3 hours',
      groupSize: '2-12 people',
      description:
        'Experience pure magic as you sail around the island during the golden hour. Enjoy local refreshments while witnessing the sun dip beyond the horizon.',
      details: [
        'Traditional sailboat or catamaran',
        'Complimentary beverages & snacks',
        'Professional crew',
        'Island history commentary',
        'Photography-perfect moments',
        'Romantic setting for couples',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-accent to-accent/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Island Adventures
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover thrilling activities and unforgettable experiences exploring the beauty of Karimunjawa.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>

          {/* Additional Activities Section */}
          <div className="bg-muted rounded-xl p-12 mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              More Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Island Hopping',
                  description: 'Visit nearby islands with pristine beaches and discover hidden gems around Karimunjawa.',
                },
                {
                  title: 'Fishing Excursion',
                  description: 'Join traditional fishermen for an authentic experience fishing local waters.',
                },
                {
                  title: 'Beach Picnic',
                  description: 'Private beach setup with gourmet lunch prepared by our chef.',
                },
                {
                  title: 'Photography Tour',
                  description: 'Guided tour designed specifically for photography enthusiasts capturing island beauty.',
                },
              ].map((exp, index) => (
                <div key={index} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking CTA */}
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Book Your Adventure
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              All activities can be customized based on your interests and fitness level. Contact our activities coordinator to plan your perfect day.
            </p>
            <button className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg">
              Schedule Activity
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
