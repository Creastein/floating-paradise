import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { MapPin, Plane, Ship, Clock, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Getting Here | Floating Paradise',
  description: 'Easy directions and transportation information to reach Floating Paradise in Karimunjawa, Indonesia.',
}

export default function GettingHerePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-secondary to-secondary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Getting Here
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Easy directions and travel options to reach your island paradise destination.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Welcome to Karimunjawa
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Floating Paradise is located on Karimunjawa Island in Central Java, Indonesia—one of the most pristine and least crowded island destinations in the country. This hidden gem is easily accessible from major Indonesian cities while maintaining its peaceful, untouched character.
            </p>
          </div>

          {/* Transportation Options */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
              How to Get There
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* By Air */}
              <div className="bg-muted rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                  <h4 className="font-serif text-2xl font-bold text-foreground">
                    By Air
                  </h4>
                </div>
                <ul className="space-y-3 text-foreground/80 text-sm">
                  <li>
                    <strong>Fly to:</strong> Ahmed Yani Airport (SemarangUG), Central Java
                  </li>
                  <li>
                    <strong>Flight time:</strong> 2-3 hours from Jakarta or Surabaya
                  </li>
                  <li>
                    <strong>From airport:</strong> 1.5-hour drive to Jepara port
                  </li>
                  <li>
                    <strong>We arrange:</strong> Airport pickup service available
                  </li>
                </ul>
              </div>

              {/* By Ferry */}
              <div className="bg-muted rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Ship className="w-8 h-8 text-primary" />
                  <h4 className="font-serif text-2xl font-bold text-foreground">
                    By Ferry
                  </h4>
                </div>
                <ul className="space-y-3 text-foreground/80 text-sm">
                  <li>
                    <strong>Depart from:</strong> Jepara Port, Central Java
                  </li>
                  <li>
                    <strong>Journey time:</strong> 4-5 hours by public ferry
                  </li>
                  <li>
                    <strong>Or charter:</strong> Private speedboat (2-3 hours)
                  </li>
                  <li>
                    <strong>Ferry schedule:</strong> Daily departures available
                  </li>
                </ul>
              </div>

              {/* From Java */}
              <div className="bg-muted rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h4 className="font-serif text-2xl font-bold text-foreground">
                    From Jakarta/Bandung
                  </h4>
                </div>
                <ul className="space-y-3 text-foreground/80 text-sm">
                  <li>
                    <strong>Option 1:</strong> Flight to Semarang + ferry (6-8 hours total)
                  </li>
                  <li>
                    <strong>Option 2:</strong> Train to Semarang + ferry (8-10 hours)
                  </li>
                  <li>
                    <strong>Recommended:</strong> Flight is faster and more comfortable
                  </li>
                  <li>
                    <strong>We can arrange:</strong> Complete transfer coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Itinerary */}
          <div className="mb-20 bg-muted rounded-xl p-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8">
              Typical Travel Itinerary
            </h3>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  time: 'Morning',
                  title: 'Depart from Jakarta/Surabaya',
                  description: 'Take early flight to Ahmed Yani Airport (Semarang). We recommend morning flights to maximize your day.',
                },
                {
                  step: 2,
                  time: '1-2 PM',
                  title: 'Arrive in Semarang',
                  description: 'Our representative meets you at arrivals. Complimentary welcome drink and briefing about your stay.',
                },
                {
                  step: 3,
                  time: '3 PM',
                  title: 'Drive to Jepara Port',
                  description: '1.5-hour scenic drive along coastal routes. Rest area and refreshments provided.',
                },
                {
                  step: 4,
                  time: '4:30 PM',
                  title: 'Board Ferry/Speedboat',
                  description: 'Depart Jepara Port. Speedboat journey takes 2-3 hours with stunning sea views.',
                },
                {
                  step: 5,
                  time: '7 PM',
                  title: 'Arrive at Floating Paradise',
                  description: 'Welcome ceremony, check-in, and dinner with the team. Rest and acclimate.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent text-sm">
                        {item.time}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-primary/10 rounded-xl p-8">
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Before You Travel
              </h4>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Check your passport validity (minimum 6 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Apply for Indonesian visa if required (available on arrival)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Book flights at least 2-3 weeks in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Arrange travel insurance covering trip cancellation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Get vaccinations recommended for Indonesia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Inform us of your flight details at least 2 weeks prior</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-xl p-8">
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                What We Provide
              </h4>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Airport pickup and drop-off service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Ferry/speedboat transfers arranged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Port check-in assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Welcome meal and orientation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Return journey arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>24/7 support and emergency assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map & Contact */}
          <div className="bg-muted rounded-xl p-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Location & Contact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Our Location
                </h4>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Floating Paradise<br />
                  Karimunjawa Island<br />
                  Jepara District<br />
                  Central Java, Indonesia<br />
                  <br />
                  <strong>Coordinates:</strong> 5.8611° S, 110.4150° E
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        Phone
                      </p>
                      <p className="text-foreground/70 text-sm">
                        +62 (0) xxx xxxx
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        Email
                      </p>
                      <p className="text-foreground/70 text-sm">
                        travel@floatingparadise.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-foreground mb-4">
                  Nearby Reference Points
                </h4>
                <ul className="space-y-3 text-foreground/80 text-sm">
                  <li>
                    <strong>Semarang Airport:</strong> ~90km, 1.5 hours
                  </li>
                  <li>
                    <strong>Jepara City:</strong> ~35km from our island
                  </li>
                  <li>
                    <strong>Karimunjawa Main Town:</strong> 15 minutes by boat
                  </li>
                  <li>
                    <strong>Nearest Hospital:</strong> Jepara (45 min transfer)
                  </li>
                  <li>
                    <strong>Nearest Major City:</strong> Semarang
                  </li>
                  <li>
                    <strong>Time Zone:</strong> Western Indonesia Time (WIB)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready for Your Journey?
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team will coordinate every detail of your travel to ensure a seamless, comfortable journey to paradise.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all font-semibold text-lg">
              Contact Travel Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
