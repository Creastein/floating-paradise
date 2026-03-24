import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sun, Leaf, Sprout, Droplets,
  Recycle, Trash2, Users, BookOpen,
  Heart, Compass,
} from 'lucide-react'
import AboutAstridTono from '@/components/about-astrid-tono'
import AboutKejora from '@/components/about-kejora'
import { FadeIn } from '@/components/ui/fade-in'
import type { GreenPractice, CoreValue } from '@/data/about-data'

// ── Static Data (co-located with icons) ────────────────────────────

const GREEN_PRACTICES: GreenPractice[] = [
  { icon: Sun,      title: 'Solar Powered',      desc: 'Floating Paradise runs entirely on solar-powered energy' },
  { icon: Leaf,     title: 'Natural Amenities',   desc: 'Complimentary handmade natural body wash, shampoo, and natural cleaning products' },
  { icon: Sprout,   title: 'No Palm Oil',         desc: 'We avoid palm oil, choosing island-sourced coconut oil instead' },
  { icon: Droplets, title: 'Plastic Free Water',  desc: 'No plastic bottles sold; we provide free drinking water and sell reusable steel bottles' },
  { icon: Recycle,  title: 'Reduce Single-Use',   desc: 'We consistently use reusable bags, Tupperware, and other items' },
  { icon: Trash2,   title: 'Responsible Waste',   desc: 'We dispose of our rubbish responsibly, using organic waste for compost' },
  { icon: Users,    title: 'Trash Hero',          desc: 'We work with Trash Hero Karimunjawa to clean up the local area' },
  { icon: BookOpen, title: 'Education',           desc: 'We volunteer passionately towards improving education across Karimunjawa' },
]

const CORE_VALUES: CoreValue[] = [
  { icon: Leaf,    title: 'Sustainability', desc: 'Powered by the sun and built with natural, locally-sourced materials that honor the environment.' },
  { icon: Heart,   title: 'Community',      desc: 'Supporting our island home through local employment, guide partnerships, and dedicated educational charity work.' },
  { icon: Compass, title: 'Simplicity',     desc: 'Embracing a slower pace. We invite guests to practice intentional living and slow travel during their stay.' },
]

// ── Metadata ───────────────────────────────────────────────────────

export const metadata = {
  title: 'Our Story | Floating Paradise',
  description: 'The story behind Floating Paradise: Astrid & Tono\u2019s vision of sustainable living in Karimunjawa.',
}

// ── Page ────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen border-box overflow-hidden">
      <Navigation />

      {/* 1. PAGE HERO */}
      <PageHero 
        title="Our Story"
        subtitle="A quiet conversation on a wooden pier, transformed into a sanctuary above the sea."
        backgroundImage="/hero-island.jpg"
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* 2. ASTRID & TONO STORY */}
          <AboutAstridTono />

          {/* 3. MISSION STATEMENT */}
          <FadeIn direction="up" distance={40}>
            <div className="py-16 bg-[#F5EFE4] rounded-3xl text-center px-8 sm:px-16 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                 <span className="font-serif text-[15rem] leading-none text-primary selection:bg-transparent -translate-y-12">&quot;</span>
               </div>
               <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                  <h3 className="uppercase tracking-widest text-primary font-semibold text-sm">Mission Statement</h3>
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground font-medium leading-relaxed italic">
                    Our dream is that Floating Paradise not only offers a retreat from the business of life, but also serves as a gentle reminder of the beauty of living harmoniously with the world around us.
                  </p>
               </div>
            </div>
          </FadeIn>

          {/* 4. KEEP IT GREEN */}
          <div className="space-y-16 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <FadeIn direction="right" distance={50} className="w-full md:w-2/5 space-y-6">
                <h2 className="font-serif text-4xl font-bold text-foreground">
                  Keep It Green
                </h2>
                <p className="text-lg text-foreground/80 font-light leading-relaxed text-justify">
                  At Floating, we are committed to preserving the natural beauty of our surroundings and minimising our environmental impact.
                </p>
              </FadeIn>
              <FadeIn direction="left" distance={50} delay={0.1} className="w-full md:w-3/5 relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <Image
                  src="/image/about-us/Eco.webp"
                  alt="Nature collage showcasing sustainable focus"
                  fill
                  className="object-cover"
                />
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {GREEN_PRACTICES.map((practice, i) => (
                <FadeIn key={practice.title} direction="up" distance={40} delay={i * 0.1} className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl border border-border/50 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <practice.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium text-foreground">{practice.title}</h4>
                  <p className="text-sm text-foreground/70 font-light leading-relaxed text-justify">
                    {practice.desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 5. KEJORA KARIMUNJAWA */}
          <AboutKejora />

          {/* 6. VALUES */}
          <div className="py-24 space-y-16">
            <FadeIn direction="up" distance={30} className="text-center">
              <h2 className="font-serif text-4xl font-bold text-foreground">Our Values</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORE_VALUES.map((value, i) => (
                <FadeIn key={value.title} direction="up" distance={30} delay={i * 0.1} className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-[#F5EFE4] rounded-full flex items-center justify-center text-primary">
                    <value.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-medium mb-3">{value.title}</h4>
                    <p className="text-foreground/70 font-light leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 7. CLOSING CTA */}
          <FadeIn direction="up" distance={30} className="pb-16 text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Ready to visit?</h2>
            <Link 
              href="https://tripla.ai" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Check Availability
            </Link>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </main>
  )
}
