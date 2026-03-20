import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'

export const metadata = {
  title: 'Getting Here | Floating Paradise',
  description: 'How to travel to Karimunjawa and Floating Paradise. Fast boat schedules, private transfers, and arrival information.',
}

export default function GettingHerePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero 
        title="Getting to Karimunjawa"
        subtitle="Floating Paradise is located in Karimunjawa, a protected archipelago of 27 islands in the Java Sea, roughly 80 kilometers northwest of Jepara, Central Java."
        backgroundImage="/hero-island.jpg"
      />

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
              Getting here is part of the adventure. The islands are only accessible by sea, which keeps the archipelago quiet, authentic, and naturally pristine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-muted p-10 rounded-2xl shadow-sm space-y-6 border border-primary/10">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Express Bahari Fast Boat
              </h2>
              <p className="text-sm tracking-widest uppercase font-semibold text-primary">2 Hours • Departs Jepara</p>
              <div className="text-foreground/80 font-light space-y-4 leading-relaxed">
                <p>The most reliable and established route is via the Express Bahari fast boat from Jepara Harbour.</p>
                <ul className="space-y-2 py-4 border-y border-primary/20">
                  <li className="flex justify-between"><span>Monday to Thursday</span> <span>9:00 am</span></li>
                  <li className="flex justify-between"><span>Friday</span> <span>9:30 am</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>10:00 am</span></li>
                </ul>
                <p className="text-destructive font-medium">There are NO boats departing Jepara on Sundays.</p>
                <p className="text-sm italic opacity-80 mt-4 text-primary">
                  *Please note: From mid-December to March (the rainy season), the crossing can occasionally be delayed or cancelled due to high waves.
                </p>
              </div>
              <div className="pt-4">
                <a 
                  href={TRIPLA_EXTRAS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                >
                  Pre-Book Now
                </a>
              </div>
            </div>

            <div className="bg-[#e8efe9] p-10 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Book Through Floating
              </h2>
              <div className="text-foreground/80 font-light space-y-4 leading-relaxed">
                <p>To ensure your journey is as smooth as possible, we offer a complimentary ticketing service for all our guests. Let us handle the logistics so you don't have to navigate local booking sites or harbour queues.</p>
                <p className="font-medium text-foreground">Simply let us know your travel dates, and we will secure VIP or Executive class seats for you (subject to availability).</p>
                <div className="bg-background/50 p-4 rounded-lg mt-6">
                  <p className="text-sm italic text-foreground/80">
                    Please note: We only book tickets for guests with confirmed reservations at Floating Paradise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 pt-12 border-t border-muted">
             <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Arriving by Air
              </h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                The closest international airport is Semarang Achmad Yani (SRG). From Semarang airport to Jepara harbour, the journey by private taxi takes approximately 2.5 hours depending on traffic. We can gladly arrange a trusted private driver to meet you upon arrival in Semarang.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                We Pick You Up
              </h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Once you arrive at Karimunjawa harbour, your journey ends and your rest begins. Our team will be waiting at the pier with a sign to collect you and your luggage. The transfer to Floating Paradise takes less than five minutes. Free of charge.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
