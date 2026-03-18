import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Heart, Leaf, Users, Zap } from 'lucide-react'

export const metadata = {
  title: 'Yoga & Wellness Retreat | Floating Paradise',
  description: 'Transform your mind, body, and spirit at our luxury yoga retreat in Karimunjawa with expert instructors and ocean views.',
}

export default function YogaReturnPage() {
  const programs = [
    {
      title: '7-Day Yoga Immersion',
      level: 'All Levels',
      description:
        'A comprehensive yoga journey combining daily classes, meditation, and holistic wellness practices designed to deepen your practice.',
      sessions: 'Daily 6am & 4pm classes',
      includes: [
        'Daily yoga classes (Hatha & Vinyasa)',
        'Guided meditation sessions',
        'Pranayama (breathing) workshops',
        'Nutritional wellness talks',
        'Beach meditation walks',
        'Accommodation in deluxe bungalow',
        'All meals with yoga-friendly nutrition',
      ],
      price: '$1,890',
    },
    {
      title: '14-Day Intensive Retreat',
      level: 'Intermediate to Advanced',
      description:
        'Deep dive into yoga philosophy, advanced asanas, and spiritual transformation. Perfect for serious practitioners seeking profound change.',
      sessions: 'Daily 6am & 4pm classes',
      includes: [
        'All 7-Day benefits',
        'Advanced yoga techniques',
        'Yoga philosophy discussions',
        'Private instructor consultations',
        'Ayurveda wellness assessment',
        'Spa treatments (3x per week)',
        'Island exploration activities',
        'Journal workshops',
      ],
      price: '$3,290',
    },
    {
      title: 'Weekend Wellness Break',
      level: 'All Levels',
      description:
        'Perfect for those short on time. Rejuvenate your mind and body in just 3 days of focused practice and relaxation.',
      sessions: 'Daily 6am, 12pm, 4pm classes',
      includes: [
        'Yoga classes (2x daily)',
        'Guided meditation',
        'One spa treatment',
        'Wellness lecture',
        'Organic vegetarian meals',
        'Sunset yoga session',
        'Beach wellness walk',
      ],
      price: '$590',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Image
          src="/yoga-sunset.jpg"
          alt="Yoga at Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-2xl space-y-6">
            <div className="text-secondary text-2xl font-serif">Transform Yourself</div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              Yoga & Wellness Retreats
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Find inner peace and transform your practice in our oceanfront sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Your Journey to Inner Peace
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            Our yoga retreats combine traditional practices with modern wellness in a sustainable, eco-friendly environment. Led by internationally certified instructors, each retreat is designed to deepen your practice, refresh your spirit, and connect you with nature and like-minded seekers.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm font-semibold opacity-90">
                    {program.level}
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <p className="text-sm text-accent font-semibold mb-6">
                    {program.sessions}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="text-primary mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary">
                      {program.price}
                    </p>
                    <p className="text-xs text-foreground/60 mt-1">
                      per person
                    </p>
                  </div>

                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all font-semibold">
                    Book Retreat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/yoga-pavilion.jpg"
                alt="Yoga Pavilion"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/meditation-spa.jpg"
                alt="Meditation Spa"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Oceanfront Pavilion',
                desc: 'Practice with unobstructed ocean views in our open-air yoga studio.',
              },
              {
                icon: Leaf,
                title: 'Spa & Wellness Center',
                desc: 'Rejuvenate with massages, facials, and holistic treatments.',
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                desc: 'Learn from internationally certified yoga masters and wellness coaches.',
              },
              {
                icon: Zap,
                title: 'Sustainable Practice',
                desc: 'Experience yoga in a 100% solar-powered, eco-friendly environment.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-all"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Meet Our Instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                specialty: 'Vinyasa Flow & Philosophy',
                bio: 'International yoga instructor with 15+ years of experience and certification from India.',
              },
              {
                name: 'Marco Rossi',
                specialty: 'Hatha & Alignment',
                bio: 'Italian yoga master specializing in therapeutic yoga and injury prevention.',
              },
              {
                name: 'Maya Chen',
                specialty: 'Meditation & Mindfulness',
                bio: 'Meditation expert with background in Buddhist philosophy and wellness coaching.',
              },
            ].map((instructor, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {instructor.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {instructor.specialty}
                </p>
                <p className="text-sm text-foreground/70">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Transform Your Life
          </h2>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            Join hundreds of seekers who have found peace, clarity, and purpose at Floating Paradise. Our retreats aren't just about yoga—they're about transformation.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all font-semibold text-lg">
            Reserve Your Retreat Today
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
