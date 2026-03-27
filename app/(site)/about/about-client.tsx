"use client"

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
import { PortableText } from '@/components/portable-text'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'

interface AboutClientProps {
  cmsData: any
}

export default function AboutClient({ cmsData }: AboutClientProps) {
  const { t } = useLanguage()
  const { getCmsValue } = useCmsTranslation()
  const a = t.aboutPage

  const GREEN_PRACTICES = [
    { icon: Sun,      title: a.practices.solar.title,      desc: a.practices.solar.desc },
    { icon: Leaf,     title: a.practices.amenities.title,  desc: a.practices.amenities.desc },
    { icon: Sprout,   title: a.practices.palmOil.title,    desc: a.practices.palmOil.desc },
    { icon: Droplets, title: a.practices.water.title,      desc: a.practices.water.desc },
    { icon: Recycle,  title: a.practices.reduce.title,     desc: a.practices.reduce.desc },
    { icon: Trash2,   title: a.practices.waste.title,      desc: a.practices.waste.desc },
    { icon: Users,    title: a.practices.trashHero.title,  desc: a.practices.trashHero.desc },
    { icon: BookOpen, title: a.practices.education.title,  desc: a.practices.education.desc },
  ]

  const CORE_VALUES = [
    { icon: Leaf,    title: a.values.sustainability.title, desc: a.values.sustainability.desc },
    { icon: Heart,   title: a.values.community.title,      desc: a.values.community.desc },
    { icon: Compass, title: a.values.simplicity.title,     desc: a.values.simplicity.desc },
  ]

  return (
    <main className="min-h-screen border-box overflow-hidden">
      <Navigation />

      {/* 1. PAGE HERO */}
      <PageHero 
        title={a.heroTitle}
        subtitle={a.heroSubtitle}
        backgroundImage="/image/about-us/about-hero.jpg"
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* 2. ASTRID & TONO STORY */}
          <AboutAstridTono cmsData={cmsData} />

          {/* 3. MISSION STATEMENT */}
          <FadeIn direction="up" distance={40}>
            <div className="py-16 bg-[#F5EFE4] rounded-3xl text-center px-8 sm:px-16 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                 <span className="font-serif text-[15rem] leading-none text-primary selection:bg-transparent -translate-y-12">&quot;</span>
               </div>
               <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                  <h3 className="uppercase tracking-widest text-primary font-semibold text-sm">{a.missionStatementTitle}</h3>
                  {getCmsValue(cmsData, 'missionStatement') ? (
                    <div className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground font-medium leading-relaxed italic">
                      <PortableText value={getCmsValue(cmsData, 'missionStatement')} />
                    </div>
                  ) : (
                    <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground font-medium leading-relaxed italic">
                      {a.missionDefault}
                    </p>
                  )}
               </div>
            </div>
          </FadeIn>

          {/* 4. KEEP IT GREEN */}
          <div className="space-y-16 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <FadeIn direction="right" distance={50} className="w-full md:w-2/5 space-y-6">
                <h2 className="font-serif text-4xl font-bold text-foreground">{a.keepItGreenTitle}</h2>
                <p className="text-lg text-foreground/80 font-light leading-relaxed text-justify">
                  {a.keepItGreenDesc}
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
              <h2 className="font-serif text-4xl font-bold text-foreground">{a.valuesTitle}</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORE_VALUES.map((value, i) => (
                <FadeIn key={value.title} direction="up" distance={30} delay={i * 0.1} className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-[#F5EFE4] rounded-full flex items-center justify-center text-primary">
                    <value.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-medium mb-3">{value.title}</h4>
                    <p className="text-foreground/70 font-light leading-relaxed">{value.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 7. CLOSING CTA */}
          <FadeIn direction="up" distance={30} className="pb-16 text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{a.readyToVisit}</h2>
            <Link 
              href="https://tripla.ai" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              {a.checkAvailabilityCTA}
            </Link>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </main>
  )
}
