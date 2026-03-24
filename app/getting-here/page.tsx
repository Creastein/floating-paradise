import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'
import { FadeIn } from '@/components/ui/fade-in'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppIcon from '@/components/icons/whatsapp-icon'
import {
  CAR_HIRE_OPTIONS,
  BOAT_PRICES,
  BOAT_SCHEDULE,
  TRANSPORT_OPTIONS,
} from '@/data/getting-here-data'

// ── Metadata ───────────────────────────────────────────────────────

export const metadata = {
  title: 'Getting Here | Floating Paradise',
  description: 'Your journey to Karimunjawa and Floating Paradise — step by step. Fast boat schedules, private transfers, and arrival information.',
}

// ── Sub-components ─────────────────────────────────────────────────

interface JourneyStepProps {
  step: number
  title: string
  subtitle: string
  isLast?: boolean
  children: React.ReactNode
}

function JourneyStep({ step, title, subtitle, isLast = false, children }: JourneyStepProps) {
  return (
    <div className="relative">
      <div className="flex items-start gap-6 md:gap-10">
        {/* Step indicator + vertical line */}
        <div className="flex flex-col items-center shrink-0">
          <FadeIn direction="up" distance={20} className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl md:text-2xl font-bold shadow-lg relative z-10">
            {step}
          </FadeIn>
          {!isLast && <div className="w-px bg-primary/20 flex-1 min-h-[4rem]" />}
        </div>
        
        {/* Content */}
        <div className="flex-1 pb-16 md:pb-24">
          <FadeIn direction="up" distance={30} delay={0.1}>
            <div className="space-y-2 mb-8">
              <p className="text-sm tracking-widest uppercase font-semibold text-primary">Step {step}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
              <p className="text-lg text-foreground/70 font-light">{subtitle}</p>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────

export default function GettingHerePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero 
        title="Your Journey to Floating"
        subtitle="Floating Paradise is located in Karimunjawa, a protected archipelago of 27 islands in the Java Sea. Getting here is part of the adventure — let us guide you step by step."
        backgroundImage="/image/getting-here/gh2.webp"
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-32 pb-8 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ① PLAN YOUR JOURNEY */}
          <JourneyStep 
            step={1} 
            title="Plan Your Journey" 
            subtitle="Fly into Central Java, then travel overland to Jepara Harbour."
          >
            {/* Arriving by Air */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">Arriving by Air</h3>
                <p className="text-foreground/80 font-light leading-relaxed">
                  The closest international airport is <strong>Semarang Achmad Yani (SRG)</strong>. From there, the journey to Jepara harbour takes approximately 2.5 hours by private car. We can arrange a trusted driver to meet you upon arrival.
                </p>
              </div>
            </FadeIn>

            {/* Private Car Hire */}
            <div className="space-y-4 pt-4">
              <FadeIn direction="up" distance={40}>
                <h3 className="font-serif text-2xl font-bold text-foreground">Private Car Hire</h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-4">
                  We arrange private cars with driver to take you directly to Jepara Kartini Harbour. All prices include fuel and toll fees. Your driver will meet you at the arrivals hall or hotel lobby.
                </p>
              </FadeIn>

              {/* Car Hire Grid — data-driven */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {CAR_HIRE_OPTIONS.map((option, i) => (
                  <FadeIn key={option.city} direction="up" distance={30} delay={(i + 1) * 0.1}>
                    <div className="bg-muted h-full p-6 rounded-2xl text-center space-y-2 border border-primary/10">
                      <p className="text-sm tracking-widest uppercase font-semibold text-primary">{option.city}</p>
                      <p className="font-serif text-2xl font-bold text-foreground">{option.price}</p>
                      <p className="text-sm text-foreground/60">{option.duration}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn direction="up" distance={20} delay={0.4} className="pt-4">
                <a 
                  href={TRIPLA_EXTRAS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-md"
                >
                  Book a Transfer
                </a>
              </FadeIn>
            </div>
          </JourneyStep>

          {/* ② CROSS TO KARIMUNJAWA */}
          <JourneyStep 
            step={2} 
            title="Cross to Karimunjawa" 
            subtitle="Take the fast boat from Jepara — approximately 2 hours across the Java Sea."
          >
            {/* Express Bahari */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10 space-y-6 overflow-hidden">
                <div className="relative h-48 sm:h-64 -mt-8 -mx-8 mb-6">
                  <Image 
                    src="/image/getting-here/gh4.webp"
                    alt="Express Bahari Fast Boat"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Express Bahari Fast Boat</h3>
                <p className="text-sm tracking-widest uppercase font-semibold text-primary">2 Hours • Departs Jepara</p>
                <p className="text-foreground/80 font-light leading-relaxed">
                  The most reliable route is via the Express Bahari fast boat from Jepara Harbour.
                </p>

                {/* Prices — data-driven */}
                <div className="bg-background/60 p-4 rounded-xl space-y-2">
                  {BOAT_PRICES.map((tier) => (
                    <div key={tier.label} className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{tier.label}</span>
                      <span className="font-semibold text-primary">{tier.price}</span>
                    </div>
                  ))}
                  <p className="text-xs text-foreground/60 pt-1">per person, one way</p>
                </div>

                {/* Schedule — data-driven */}
                <ul className="space-y-2 py-4 border-y border-primary/20 text-foreground/80 font-light">
                  {BOAT_SCHEDULE.map((entry) => (
                    <li key={entry.day} className="flex justify-between">
                      <span>{entry.day}</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-destructive font-medium">There are NO boats departing Jepara on Sundays.</p>
                <p className="text-sm italic text-primary/80">
                  *From mid-December to March (rainy season), the crossing can occasionally be delayed or cancelled due to high waves.
                </p>
              </div>
            </FadeIn>

            {/* Book Through Floating */}
            <FadeIn direction="up" distance={40} delay={0.1}>
              <div className="bg-[#e8efe9] p-8 rounded-2xl space-y-6 mt-8">
                <h3 className="font-serif text-2xl font-bold text-foreground">Book Through Floating</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-4">
                  <p>We offer a complimentary ticketing service for all our guests. Let us handle the logistics so you don&apos;t have to navigate local booking sites or harbour queues.</p>
                  <p className="font-medium text-foreground">Simply send us your travel dates, email, and passport copies — we&apos;ll secure your seats with a QR boarding card. No queuing required.</p>
                  
                  {/* WhatsApp Contact */}
                  <div className="bg-background/60 p-4 rounded-xl">
                    <p className="text-sm font-medium text-foreground mb-2">Contact us directly:</p>
                    <a 
                      href="https://wa.me/6282226945510"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
                    >
                      <WhatsAppIcon />
                      +62 822 2694 5510
                    </a>
                  </div>

                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-sm italic text-foreground/70">
                      We only book tickets for guests with confirmed reservations at Floating Paradise.
                    </p>
                  </div>
                </div>
                <a 
                  href={TRIPLA_EXTRAS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-md"
                >
                  Book Through Floating
                </a>
              </div>
            </FadeIn>

            {/* Ferry Option */}
            <FadeIn direction="up" distance={30} delay={0.1}>
              <div className="bg-[#F5EFE4] p-6 rounded-2xl space-y-3 mt-8">
                <h4 className="font-serif text-xl font-bold text-foreground">Alternative: Public Ferry</h4>
                <p className="text-foreground/80 font-light leading-relaxed">
                  If the fast boat is fully booked, a public ferry is also available. Duration: approximately 4.5 hours. Price: around Rp 180,000 per person (one way).
                </p>
              </div>
            </FadeIn>
          </JourneyStep>

          {/* ③ ARRIVE ON THE ISLAND */}
          <JourneyStep 
            step={3} 
            title="Arrive on the Island" 
            subtitle="Welcome to Karimunjawa. Our team is waiting for you at the pier."
          >
            {/* We Pick You Up */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-[#e8efe9] p-8 rounded-2xl space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">We Pick You Up</h3>
                <p className="text-foreground/80 font-light leading-relaxed">
                  Once you arrive at Karimunjawa harbour, your journey ends and your rest begins. Our team will be waiting at the pier with a sign to collect you and your luggage. The transfer to Floating Paradise takes less than five minutes. <strong>Free of charge.</strong>
                </p>
              </div>
            </FadeIn>

            {/* Getting Around */}
            <div className="space-y-4 pt-4">
              <FadeIn direction="up" distance={30}>
                <h3 className="font-serif text-xl font-bold text-foreground text-foreground/60">Getting Around the Island</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Karimunjawa is small and relaxed. Life here moves at a slower pace, and transport options are simple. From the harbour, Floating is about 15–20 minutes by road.
                </p>
              </FadeIn>
            </div>

            {/* Transport Options — data-driven */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {TRANSPORT_OPTIONS.map((option, i) => (
                <FadeIn key={option.title} direction="up" distance={30} delay={(i + 1) * 0.1} className="h-full">
                  <div className="bg-muted h-full p-8 rounded-2xl border border-primary/5 space-y-4 overflow-hidden flex flex-col">
                    <div className="relative h-48 -mt-8 -mx-8 mb-2 shrink-0">
                      <Image 
                        src={option.image}
                        alt={option.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-foreground">{option.title}</h4>
                    <div className="text-foreground/80 font-light leading-relaxed space-y-3 flex-1">
                      {option.details.map((detail) => (
                        <p key={detail.slice(0, 30)} dangerouslySetInnerHTML={{ __html: detail }} />
                      ))}
                      {option.note && (
                        <p className="text-sm italic text-foreground/60">{option.note}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </JourneyStep>

          {/* ④ REACH FLOATING */}
          <JourneyStep 
            step={4} 
            title="Reach Floating" 
            subtitle="The last stretch — from road to reef, from land to sea."
          >
            <FadeIn direction="up" distance={30} delay={0.2}>
              <div className="text-foreground/80 font-light leading-relaxed">
                <p>Floating is located in a quiet bay outside the main village area. The road leading east across the island is narrow, hilly and not lit at night. It then turns onto a dirt track that passes through an old shrimp farm before reaching our parking area. The track can become muddy during the rainy season.</p>
              </div>
            </FadeIn>

            {/* Boat Pickup */}
            <FadeIn direction="up" distance={40} delay={0.1}>
              <div className="bg-[#e8efe9] p-8 sm:p-10 rounded-2xl border border-primary/10 space-y-6 relative overflow-hidden mt-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="relative h-56 sm:h-80 -mt-8 sm:-mt-10 -mx-8 sm:-mx-10 mb-6 shrink-0 rounded-b-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/image/getting-here/gh6.webp"
                    alt="Motorised boat pickup"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground relative z-10">The Final Step — By Boat</h3>
                <p className="text-lg text-foreground/80 font-light leading-relaxed relative z-10">
                  We pick up guests with a small motorised boat from the bay. This short ride across the water is your final transition — from road to reef, from land to sea. It&apos;s the moment the outside world fades and Floating begins.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={30} delay={0.1}>
              <p className="text-foreground/70 font-light leading-relaxed mt-6">
                We recommend travelling with light luggage and an open mindset. Life on a small island invites flexibility, patience and presence.
              </p>
            </FadeIn>
          </JourneyStep>

          {/* ⑤ YOUR JOURNEY BEGINS */}
          <JourneyStep 
            step={5} 
            title="Your Journey Begins" 
            subtitle="You've arrived. Now let go."
            isLast
          >
            <div className="space-y-8">
              <FadeIn direction="up" distance={20} delay={0.2}>
                <p className="text-lg text-foreground/80 font-light leading-relaxed italic">
                  Floating is designed for guests who appreciate nature, simplicity and being close to the elements. If you enjoy authenticity, sea air and a slower rhythm, you will feel very at home.
                </p>
              </FadeIn>
              <FadeIn direction="up" distance={20} delay={0.3}>
                <Link 
                  href="https://tripla.ai" 
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Check Availability
                </Link>
              </FadeIn>
            </div>
          </JourneyStep>

        </div>
      </section>

      <Footer />
    </main>
  )
}
