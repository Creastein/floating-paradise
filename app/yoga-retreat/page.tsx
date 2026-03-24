import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from "next/image"
import Link from "next/link"
import { Check, X, ArrowRight, Sun, Waves, HeartHandshake } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import { TextScrub } from "@/components/ui/text-scrub"
import { AutoSlideshow } from "@/components/ui/auto-slideshow"
import { AnimatedTimeline } from "@/components/ui/animated-timeline"

export const metadata = {
  title: "Yoga Retreat | Floating Paradise",
  description: "The Art of Floating. Join our 7-day sea-based yoga retreat in Karimunjawa.",
}

export default function YogaRetreatPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1. Hero Section */}
      <section className="relative h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/image/Yoga-retreat/hero-yoga.png"
            alt="Sunrise Yoga on the Jetty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 space-y-6 max-w-4xl mx-auto mt-16">
          <p className="text-sm md:text-base tracking-widest uppercase font-semibold text-primary-foreground/90 animate-hero-subtitle-reveal">
            A Tropical Island Yoga Retreat
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold animate-hero-text-reveal text-primary-foreground">
            The Art of Floating
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-primary-foreground/90 animate-hero-subtitle-reveal">
            8–14 June 2026 &middot; Karimunjawa
          </p>
          <p className="text-base md:text-lg font-light text-primary-foreground/80 animate-hero-subtitle-reveal max-w-2xl mx-auto italic">
            Step out of your everyday life and find harmony above the sea
          </p>
          <div className="pt-8 animate-hero-subtitle-reveal">
            <Link
              href="#book"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-muted hover:text-primary transition-all duration-300 font-medium tracking-wide shadow-lg uppercase text-sm"
            >
              Book Your Spot
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Retreat Overview — Overlaps hero */}
      <section className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-[700px] mx-auto px-4 text-center space-y-8">
          <FadeIn once={false}>
            <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed italic font-serif">
              Floating Paradise lives in relationship with its surroundings, shaped by the tides, the wind &amp; the moon&apos;s phases. This retreat invites you to tune into your own living flow too.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} once={false}>
            <div className="w-16 h-px bg-primary/30 mx-auto" />
          </FadeIn>
          <FadeIn delay={0.3} once={false}>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
              The Art of Floating is an intimate, sea-based yoga retreat designed for those ready to embrace a slower, more sustainable rhythm. Set at our solar-powered guesthouse suspended above the water, this retreat blends daily practice, nature immersion, and meaningful contribution, all shaped by the elements of island life.
            </p>
          </FadeIn>
          <FadeIn delay={0.45} once={false}>
            <p className="text-lg md:text-xl text-foreground/80 font-medium italic font-serif">
              Here, yoga is a tool for living, not a performance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Three Core Themes */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Across the week, we focus on three core themes:</h2>
          </FadeIn>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" staggerDelay={0.3} once={false}>
            <StaggerItem className="bg-background p-10 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300" distance={50}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-foreground">Self-Love &amp; Self-Acceptance</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Using yoga to care for yourself physically, mentally, and spiritually, learning to listen, adapt, and build an honest, kind relationship with yourself.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-background p-10 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300" distance={50}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Waves className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-foreground">Embodied Exploration</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Refine alignment, receive hands-on guidance, and explore deeper expressions of classic postures in a supportive, non-competitive space.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-background p-10 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300" distance={50}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Sun className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-foreground">Intentional Living</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Practicing presence on and off the mat, discover what it means to &ldquo;float&rdquo; in your breath, your body, and your everyday life.
              </p>
            </StaggerItem>
          </StaggerGrid>
          <FadeIn delay={0.3} className="text-center mt-12">
            <p className="text-lg text-foreground/60 font-light italic">Perfect for beginners and those ready to deepen their practice. Singles and couples welcome.</p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Nature & Contribution */}
      <section className="py-24 md:py-32 px-4 bg-[#e8efe9] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.35), 0 10px 30px -8px rgba(0, 0, 0, 0.2)' }}>
            <AutoSlideshow
              images={[
                { src: "/image/Yoga-retreat/yoga1.png", alt: "Yoga retreat moment 1" },
                { src: "/image/Yoga-retreat/yoga2.png", alt: "Yoga retreat moment 2" },
                { src: "/image/Yoga-retreat/yoga3.png", alt: "Yoga retreat moment 3" },
                { src: "/image/Yoga-retreat/yoga4.png", alt: "Yoga retreat moment 4" },
                { src: "/image/Yoga-retreat/yoga5.png", alt: "Yoga retreat moment 5" },
                { src: "/image/Yoga-retreat/yoga6.png", alt: "Yoga retreat moment 6" },
              ]}
              interval={4000}
            />
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn direction="up" distance={40}>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">Nature &amp; Contribution</h2>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mt-3">Karma Yoga</p>
            </FadeIn>
            <FadeIn delay={0.15} direction="up" distance={40}>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Floating Paradise is not separate from its environment, and neither is this retreat. Contribution here is quiet, grounded, and meaningful, a reminder that balance includes giving back.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" distance={40}>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">
                In addition, &euro;100 will be donated on your behalf to a local educational charity (included in the retreat price).
              </p>
            </FadeIn>
            
            <FadeIn delay={0.45} direction="up" distance={40}>
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-medium text-foreground border-b pb-4 border-foreground/10">Throughout the week, we weave inner work with outward care through:</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-lg text-foreground/80 font-light">Mangrove kayaking &amp; reforestation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-lg text-foreground/80 font-light">Beach clean-ups with a local educational nature-based foundation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-lg text-foreground/80 font-light">A full-day boat trip exploring the archipelago and its reefs</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-lg text-foreground/80 font-light">Silent beach walks &amp; beach yoga</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-lg text-foreground/80 font-light">Snorkelling, swimming, and unstructured hours in wild nature</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Daily Rhythm — Centered alternating timeline */}
      <section className="py-32 px-4 bg-[#F5EFE4]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl font-serif text-foreground mb-6">The Daily Rhythm</h2>
            <p className="text-foreground/60 font-light">An unhurried flow designed to harmonize with the sun and sea.</p>
          </FadeIn>
          
          <AnimatedTimeline
            bgColor="#F5EFE4"
            items={[
              { title: "Dawn", description: "Morning yoga, blending meditation and pranayama.", side: "left" },
              { title: "Morning", description: "Fresh breakfast followed by nature-based activities (kayaking, snorkeling, swimming) or free time.", side: "right" },
              { title: "Midday", description: "Locally prepared lunch & rest during the warmest hours.", side: "left" },
              { title: "Afternoon", description: "Sunset yoga on the jetty.", side: "right" },
              { title: "Evening", description: "Plant-based buffet dinner followed by either a sharing circle, Yoga Nidra or Yin Yoga session.", side: "left" },
            ]}
          />
          <FadeIn delay={0.3} className="text-center mt-12">
            <p className="text-base text-foreground/50 font-light italic">Throughout the week: Yogic dharma inspired by the Yamas &amp; Niyamas woven gently into the retreat.</p>
          </FadeIn>
        </div>
      </section>

      {/* 6. Food Philosophy — Minimalist text-only */}
      <section className="py-32 px-4 bg-background text-center">
        <div className="max-w-[640px] mx-auto space-y-10">
          <FadeIn direction="up" distance={40}>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Food Philosophy</h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="up" distance={40}>
            <div className="w-16 h-px bg-primary/30 mx-auto" />
          </FadeIn>
          <FadeIn delay={0.2} direction="up" distance={40}>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed italic font-serif">
              &ldquo;This is food that nourishes, delights, and feels aligned with the spirit of the retreat.&rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.35} direction="up" distance={40}>
            <p className="text-lg text-foreground/70 font-light leading-relaxed">
              Floating Paradise is typically known for its specialty local seafood dishes: vibrant, generous plates always served with seasonal vegetables, fresh fruit, and plenty of love. For this retreat, we&apos;re elevating our menu into a nourishing fusion experience: classic Indonesian flavours reimagined with wholesome plant-based proteins, colourful salads, and touches of cross-Asian inspiration woven throughout.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. Is This For You? */}
      <section className="py-24 md:py-32 px-4 bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" distance={40} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">Is this retreat for you?</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* For You */}
            <FadeIn delay={0.15} direction="up" distance={50}>
              <div className="bg-emerald-50/50 p-8 md:p-12 rounded-3xl space-y-8">
                <h3 className="text-3xl font-serif text-emerald-900 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-emerald-700" strokeWidth={3} />
                  </span>
                  Yes, if you...
                </h3>
                <ul className="space-y-6 text-emerald-950/80 font-light text-lg pl-14">
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">You&apos;re fairly new to yoga or want to refine foundations</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">You want to spend time in nature that feels meaningful and restorative</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">You want to learn more about mindfulness and intentional living (yogic dharma)</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">Reconnect with your body and inner compass</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">You want to slow down without guilt</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">You want to develop tools to live yoga off the mat</li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Not For You */}
            <FadeIn delay={0.35} direction="up" distance={50}>
              <div className="bg-rose-50/50 p-8 md:p-12 rounded-3xl space-y-8">
                <h3 className="text-3xl font-serif text-rose-900 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-rose-700" strokeWidth={3} />
                  </span>
                  No, if you...
                </h3>
                <ul className="space-y-6 text-rose-950/80 font-light text-lg pl-14">
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-rose-300">You struggle in nature-based settings</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-rose-300">You need air-conditioned, sealed-off environments</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-rose-300">You prefer rigid schedules</li>
                  <li className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-rose-300">You are looking for advanced, athletic yoga training</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Meet Astrid + Testimonials */}
      <section className="py-24 md:py-32 px-4 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          <FadeIn direction="right" className="md:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-8 border-muted shadow-xl">
              <Image
                src="/image/Yoga-retreat/Facilitator.jpg"
                alt="Astrid - Yoga Facilitator"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="left" className="md:col-span-7 space-y-8">
            <div>
              <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Lead Facilitator</p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Meet Astrid</h2>
            </div>
            
            <p className="text-xl text-foreground/70 font-light leading-relaxed">
              Astrid is the heart of the yoga experience at Floating Paradise, guiding with a gentle presence, and grounded in wisdom. She completed her 200-hour Yoga Teacher Training in India in 2020 and has been teaching here ever since, focusing on classic hatha and hatha flow practices, blending pranayama &amp; meditation into classes that are accessible, balanced, and deeply nourishing.
            </p>
            <p className="text-lg text-foreground/60 font-light leading-relaxed">
              Guests at Floating frequently highlight her relaxed, supportive teaching style and the special magic of practicing yoga on the jetty at sunset, with the sound of water and the horizon stretching beside them.
            </p>
          </FadeIn>
        </div>

        {/* Testimonial Cards */}
        <StaggerGrid className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <StaggerItem className="bg-[#F5EFE4] rounded-2xl p-8 md:p-10 space-y-6">
            <p className="text-foreground/70 font-light leading-relaxed italic text-lg font-serif">
              &ldquo;The yoga sessions with Astrid on the wooden jetty were a highlight, just like meditating there after dinner, with nothing but the moon and the stars above you, the jungle around you and the water beneath you. My retreat at floating paradise truly left a mark and will stay with me.&rdquo;
            </p>
            <p className="text-foreground font-medium text-sm uppercase tracking-wider">— Cornelius Haritz</p>
          </StaggerItem>
          <StaggerItem className="bg-[#F5EFE4] rounded-2xl p-8 md:p-10 space-y-6">
            <p className="text-foreground/70 font-light leading-relaxed italic text-lg font-serif">
              &ldquo;For me her style was the perfect mixture between healthy exercise and wholesome meditation. In her class I felt completely safe and comfortable. She has a great deal of knowledge and experience, while staying humble. I definitely recommend practicing yoga with Astrid.&rdquo;
            </p>
            <p className="text-foreground font-medium text-sm uppercase tracking-wider">— Benedikt Schuler</p>
          </StaggerItem>
        </StaggerGrid>
      </section>

      {/* 9. Investment & Terms — Package Pricing Cards */}
      <section id="book" className="py-24 md:py-32 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Investment & Terms</h2>
            <p className="text-xl text-foreground/60 font-light">Transparent details for your peace of mind.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Violet — Left */}
            <FadeIn direction="right" distance={50}>
              <div className="bg-background rounded-2xl p-8 border border-foreground/5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Violet Package</h3>
                </div>
                <p className="text-foreground/70 font-light mb-1">Sunrise Bungalow</p>
                <p className="text-sm text-foreground/50 mb-6">Private — Single occupancy</p>
                <div className="space-y-2 border-t border-foreground/5 pt-5">
                  <div className="flex justify-between text-foreground/80"><span>IDR</span><span className="font-medium">Rp 21,100,000</span></div>
                  <div className="flex justify-between text-foreground/80"><span>GBP</span><span className="font-medium">£959</span></div>
                  <div className="flex justify-between text-foreground/80"><span>EUR</span><span className="font-medium">€1,060</span></div>
                </div>
              </div>
            </FadeIn>

            {/* Green — Right */}
            <FadeIn direction="left" distance={50} delay={0.15}>
              <div className="bg-background rounded-2xl p-8 border border-foreground/5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Green Package</h3>
                </div>
                <p className="text-foreground/70 font-light mb-1">Sunrise Bungalow</p>
                <p className="text-sm text-foreground/50 mb-6">Shared — Double bed (women only)</p>
                <div className="space-y-2 border-t border-foreground/5 pt-5">
                  <div className="flex justify-between text-foreground/80"><span>IDR</span><span className="font-medium">Rp 17,500,000</span></div>
                  <div className="flex justify-between text-foreground/80"><span>GBP</span><span className="font-medium">£761</span></div>
                  <div className="flex justify-between text-foreground/80"><span>EUR</span><span className="font-medium">€879</span></div>
                </div>
              </div>
            </FadeIn>

            {/* Indigo — Left */}
            <FadeIn direction="right" distance={50}>
              <div className="bg-background rounded-2xl p-8 border border-foreground/5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 shrink-0" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Indigo Package</h3>
                </div>
                <p className="text-foreground/70 font-light mb-1">Sunset Bungalow</p>
                <p className="text-sm text-foreground/50 mb-6">Private — Single occupancy</p>
                <div className="space-y-2 border-t border-foreground/5 pt-5">
                  <div className="flex justify-between text-foreground/80"><span>IDR</span><span className="font-medium">Rp 19,900,000</span></div>
                  <div className="flex justify-between text-foreground/80"><span>GBP</span><span className="font-medium">£905</span></div>
                  <div className="flex justify-between text-foreground/80"><span>EUR</span><span className="font-medium">€1,000</span></div>
                </div>
              </div>
            </FadeIn>

            {/* Yellow — Right */}
            <FadeIn direction="left" distance={50} delay={0.15}>
              <div className="bg-background rounded-2xl p-8 border border-foreground/5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 shrink-0" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Yellow Package</h3>
                </div>
                <p className="text-foreground/70 font-light mb-1">Sunset Bungalow</p>
                <p className="text-sm text-foreground/50 mb-6">Shared — Double bed (women only)</p>
                <div className="space-y-2 border-t border-foreground/5 pt-5">
                  <div className="flex justify-between text-foreground/80"><span>IDR</span><span className="font-medium">Rp 16,900,000</span></div>
                  <div className="flex justify-between text-foreground/80"><span>GBP</span><span className="font-medium">£735</span></div>
                  <div className="flex justify-between text-foreground/80"><span>EUR</span><span className="font-medium">€849</span></div>
                </div>
              </div>
            </FadeIn>

            {/* Blue — Left */}
            <FadeIn direction="right" distance={50}>
              <div className="bg-background rounded-2xl p-8 border border-foreground/5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Blue Package</h3>
                </div>
                <p className="text-foreground/70 font-light mb-1">Bayside Bungalow</p>
                <p className="text-sm text-foreground/50 mb-6">Shared — Separate rooms, shared bathroom</p>
                <div className="space-y-2 border-t border-foreground/5 pt-5">
                  <div className="flex justify-between text-foreground/80"><span>IDR</span><span className="font-medium">Rp 18,250,000</span></div>
                  <div className="flex justify-between text-foreground/80"><span>GBP</span><span className="font-medium">£830</span></div>
                  <div className="flex justify-between text-foreground/80"><span>EUR</span><span className="font-medium">€917</span></div>
                </div>
              </div>
            </FadeIn>

            {/* Orange — Right */}
            <FadeIn direction="left" distance={50} delay={0.15}>
              <div className="bg-background rounded-2xl p-8 border border-foreground/5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Orange Package</h3>
                </div>
                <p className="text-foreground/70 font-light mb-1">Bayside Bungalow</p>
                <p className="text-sm text-foreground/50 mb-6">Shared — Double bed (women only)</p>
                <div className="space-y-2 border-t border-foreground/5 pt-5">
                  <div className="flex justify-between text-foreground/80"><span>IDR</span><span className="font-medium">Rp 16,000,000</span></div>
                  <div className="flex justify-between text-foreground/80"><span>GBP</span><span className="font-medium">£696</span></div>
                  <div className="flex justify-between text-foreground/80"><span>EUR</span><span className="font-medium">€804</span></div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="text-center text-foreground/50 italic font-light mt-10 text-base">
            All prices are per person and include the full 7-day retreat experience.
          </FadeIn>
        </div>
      </section>

      {/* 9b. What Your Stay Includes */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" distance={40} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">What Your Stay Includes</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Included */}
            <FadeIn direction="right" distance={50}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </span>
                  Included
                </h3>
                <ul className="space-y-4 pl-11">
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">Full retreat program</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">All yoga, meditation, and evening practices</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">All meals and excursions</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">Accommodation at Floating Paradise</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">National Park Entrance Tickets</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">Welcome package</li>
                </ul>
              </div>
            </FadeIn>

            {/* Not Included */}
            <FadeIn direction="left" distance={50} delay={0.15}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-rose-700" />
                  </span>
                  Not Included
                </h3>
                <ul className="space-y-4 pl-11">
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400">International and domestic flights</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400">Travel to Karimunjawa (although we can arrange this for you)</li>
                  <li className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400">Alcohol and food ordered offsite (at the beach/cafes etc.)</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. Deposit Banner */}
      <section className="py-20 px-4 bg-[#F5EFE4]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <FadeIn direction="up" distance={40}>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Secure your spot</h2>
          </FadeIn>
          <FadeIn delay={0.15} direction="up" distance={40}>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
              A €350 / £300 non-refundable deposit is required to confirm your place.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} direction="up" distance={40}>
            <p className="text-base text-foreground/50 font-light leading-relaxed">
              The remaining balance is due <strong className="font-medium text-foreground/70">45 days</strong> before the retreat start date <strong className="font-medium text-foreground/70">(by 25th April 2026)</strong>. If booking within 60 days of the retreat, full payment is required at the time of booking.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 11. Cancellation Policy — Guest */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" distance={40} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Cancellation Policy</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" distance={40}>
              <div className="bg-muted rounded-2xl p-8 text-center space-y-4">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">More than 60 days</p>
                <div className="w-12 h-px bg-primary/30 mx-auto" />
                <p className="text-lg text-foreground font-light">Full refund minus deposit</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" distance={40} delay={0.15}>
              <div className="bg-muted rounded-2xl p-8 text-center space-y-4">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">30–59 days</p>
                <div className="w-12 h-px bg-primary/30 mx-auto" />
                <p className="text-lg text-foreground font-light">50% of total cost refunded</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" distance={40} delay={0.3}>
              <div className="bg-muted rounded-2xl p-8 text-center space-y-4">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Less than 30 days</p>
                <div className="w-12 h-px bg-primary/30 mx-auto" />
                <p className="text-lg text-foreground font-light">Non-refundable</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="up" distance={30} className="max-w-2xl mx-auto mt-10 space-y-4">
            <p className="text-center text-foreground/50 italic font-light text-base">
              If you are unable to attend, you may transfer your place to another person at no additional charge (subject to approval).
            </p>
            <p className="text-center text-foreground/50 italic font-light text-base">
              We strongly recommend purchasing travel insurance that covers trip cancellation, medical expenses, and travel delays.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 12. Cancellations by Floating Paradise */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn direction="up" distance={40}>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center">Cancellations by Floating Paradise</h2>
          </FadeIn>
          
          <FadeIn delay={0.15} direction="up" distance={40}>
            <p className="text-lg text-foreground/70 font-light leading-relaxed text-center">
              If the retreat must be cancelled due to unforeseen circumstances (including extreme weather), you will receive:
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up" distance={40}>
            <ul className="space-y-4 max-w-xl mx-auto">
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <span className="text-lg text-foreground/70 font-light">A full refund of all payments made, <strong className="font-medium text-foreground/80">or</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <span className="text-lg text-foreground/70 font-light">The option to transfer your payment to a future retreat</span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.45} direction="up" distance={30}>
            <p className="text-center text-foreground/50 italic font-light text-sm">
              Floating Paradise is not responsible for flights, ferry tickets, or additional travel expenses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 10. Final CTA Banner */}
      <section className="bg-primary py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn direction="up" distance={50}>
            <h2 className="text-5xl md:text-7xl font-serif text-primary-foreground mb-6">
              Only 3 rooms available.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up" distance={40}>
            <p className="text-2xl text-primary-foreground/80 font-light mb-12">
              Secure your sanctuary on the sea before it fills up.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up" distance={30}>
            <div className="inline-block">
              <Link
                href="mailto:hello@floatingparadise.com?subject=Yoga Retreat Booking Enquiry"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-background text-primary font-bold uppercase tracking-wide text-sm hover:scale-105 transition-all duration-300 rounded-full group shadow-xl"
              >
                Book Your Spot Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
