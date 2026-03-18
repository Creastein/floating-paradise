import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Leaf, Heart, Globe, Zap } from 'lucide-react'

export const metadata = {
  title: 'About Us | Floating Paradise',
  description: 'Learn about our mission, vision, and commitment to sustainable luxury and island community.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Reimagining luxury travel through sustainability, wellness, and authentic island living.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To create transformative travel experiences that honor both people and planet. We believe that luxury should never come at the expense of sustainability, and that true paradise is found when humans and nature thrive together.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Commitment to Excellence
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  Every detail of Floating Paradise is designed with intentionality. From solar power to local partnerships, we measure success not just by guest satisfaction, but by our positive impact on the island ecosystem and community.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To become the global benchmark for eco-luxury experiences. We envision a world where resorts actively contribute to environmental restoration, support local communities, and inspire guests to become conscious travelers and global citizens.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Building Community
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  Floating Paradise is more than an accommodation—it's a gathering place. We host workshops, partner with local artisans, and create spaces where travelers, instructors, and island communities connect meaningfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            How We Started
          </h2>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <p>
              Floating Paradise was born from a simple dream: to create a space where people could escape the modern world without leaving a footprint. Our founders, passionate about sustainable travel and wellness, spent years searching for the perfect location. When they discovered Karimunjawa Island—with its pristine beaches, untouched reefs, and welcoming community—they knew they had found it.
            </p>

            <p>
              Rather than impose a vision on the island, we listened. We worked with local architects, hired from the community, sourced materials responsibly, and built infrastructure that would enhance rather than harm. The result is Floating Paradise: a resort that belongs to the island, not vice versa.
            </p>

            <p>
              From day one, sustainability wasn't an afterthought or a marketing angle—it was central to everything. We installed solar arrays before building our first bungalow. We designed water systems that harness rainfall. We created composting programs and marine conservation partnerships. Every system was built to give back more than it takes.
            </p>

            <p>
              Today, Floating Paradise hosts travelers from around the world seeking authentic experiences. Yoga instructors have found their teaching sanctuary. Families have reconnected far from digital distractions. Solo travelers have found community. And through it all, we've remained committed to our core mission: to prove that luxury and sustainability aren't opposing forces—they're partners.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Sustainability',
                description:
                  'Environmental responsibility is woven into every operational decision. We measure, track, and continuously improve our ecological impact.',
              },
              {
                icon: Heart,
                title: 'Community',
                description:
                  'We believe in genuine partnership with Karimunjawa residents. Employment, education, and profit-sharing create mutual prosperity.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description:
                  'Renewable energy, water conservation, and waste reduction solutions are constantly researched and upgraded.',
              },
              {
                icon: Globe,
                title: 'Authenticity',
                description:
                  'We celebrate local culture, traditional practices, and genuine connections over manufactured experiences.',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-muted rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Highlights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Sustainability in Action
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/solar-panels.jpg"
                alt="Solar Power"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-foreground">
                100% Solar Powered
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our entire resort operates on renewable solar energy. We've installed one of the largest solar arrays on the island, with battery storage ensuring 24/7 clean power. Every guest contributes zero direct carbon emissions for their stay.
              </p>
              <ul className="space-y-3">
                {[
                  'Peak capacity: 150kW solar array',
                  'Battery backup for 48+ hours',
                  'Smart energy management system',
                  'Net-positive energy in sunny seasons',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="font-serif text-3xl font-bold text-foreground">
                Water Stewardship
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We've implemented advanced rainwater harvesting, greywater recycling, and saltwater cooling systems. Every drop is precious, and we treat it as such.
              </p>
              <ul className="space-y-3">
                {[
                  '80% water recycled through system',
                  'Rainfall collected and filtered',
                  'Natural saltwater cooling for AC',
                  'Low-flow fixtures throughout',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/island-community.jpg"
                alt="Island Community"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-background rounded-xl p-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
              More Eco-Initiatives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Zero Waste Program',
                  desc: 'Composting, recycling, and careful waste management. Goal: 95% waste reduction by 2025.',
                },
                {
                  title: 'Marine Conservation',
                  desc: 'Partnership with ocean cleanup initiatives and coral restoration projects.',
                },
                {
                  title: 'Local Sourcing',
                  desc: '85% of food from local farmers and fishermen, supporting island economy.',
                },
                {
                  title: 'Community Education',
                  desc: 'Workshops on sustainability, marine biology, and traditional island knowledge.',
                },
              ].map((init, i) => (
                <div key={i} className="border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    {init.title}
                  </h4>
                  <p className="text-sm text-foreground/70">{init.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6 text-center">
            Our Team
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Floating Paradise is powered by passionate individuals dedicated to exceptional service and sustainable operations. Our team brings world-class hospitality expertise combined with deep local knowledge and respect for island traditions.
          </p>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/about-team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Isabella Rossi',
                role: 'Founder & Sustainability Officer',
                bio: 'Architect and environmental advocate who designed every aspect of Floating Paradise to honor sustainability principles.',
              },
              {
                name: 'Budi Santoso',
                role: 'General Manager',
                bio: 'Local Karimunjawa native ensuring our operations benefit the community while providing world-class guest experiences.',
              },
              {
                name: 'Dr. Suman Kumar',
                role: 'Wellness Director',
                bio: 'Ayurvedic physician overseeing our holistic wellness programs and ensuring guest health and safety.',
              },
            ].map((member, i) => (
              <div key={i} className="bg-muted rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6" />
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl font-bold mb-6 text-pretty">
            Join Our Mission
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Experience a resort where luxury and sustainability aren't contradictory—they're inseparable. Every night you stay supports ocean conservation, local communities, and renewable energy innovation.
          </p>
          <button className="px-8 py-4 bg-secondary hover:bg-accent text-primary rounded-lg font-semibold transition-all transform hover:scale-105 text-lg">
            Plan Your Visit
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
