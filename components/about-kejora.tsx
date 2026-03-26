"use client"

import Image from 'next/image'
import { useEditorialScroll } from '@/hooks/use-editorial-scroll'
import { useLanguage } from '@/lib/i18n/language-context'

export default function AboutKejora() {
  const { t } = useLanguage()
  const { sectionRef, imageRef, textColumnRef, headingRef } =
    useEditorialScroll({ headingDirection: 'right' })

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center gap-10 md:gap-16 pt-16 border-t border-border">
      
      <div className="w-full md:w-[55%] md:-ml-[10%] lg:-ml-[15%] flex-none relative aspect-[4/3] bg-muted">
        <div ref={imageRef} className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/image/about-us/Kejora.webp"
            alt="Kejora Karimunjawa Community Giving"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div ref={textColumnRef} className="w-full md:w-[45%] lg:w-[50%] space-y-8 lg:space-y-10 py-6 pr-0 md:pr-4">
        
        <div ref={headingRef} className="scrub-text">
          <h2 className="text-sm tracking-widest text-primary uppercase font-bold mb-3">
            {t.aboutPage.kejoraTitle}
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight">
            {t.aboutPage.kejoraSubtitle}
          </h3>
        </div>
        
        <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
          <p className="scrub-text block font-medium text-foreground">
            {t.aboutPage.kejoraP1}
          </p>
          <p className="scrub-text">
            {t.aboutPage.kejoraP2}
          </p>
          <p className="scrub-text border-l-[3px] border-primary/40 pl-6 my-6 italic text-foreground/90">
            {t.aboutPage.kejoraP3}
          </p>

          <div className="scrub-text p-6 bg-[#F5EFE4] rounded-2xl mt-8">
            <h4 className="font-serif text-xl font-bold text-foreground mb-3">{t.aboutPage.kejoraSupportTitle}</h4>
            <p className="text-sm mb-4">
              {t.aboutPage.kejoraSupportDesc}
            </p>
            <p className="text-sm font-mono bg-white/50 p-4 rounded-xl border border-primary/10 shadow-sm text-center tracking-wide">
              NL66 RABO 0189 6488 05 (Rabobank)<br/>
              Stichting Kejora Karimunjawa
            </p>
            <a 
              href="https://www.kejorakarimunjawa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-bold text-primary hover:text-primary/70 tracking-widest uppercase transition-colors"
            >
              {t.aboutPage.kejoraVisitUrl}
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
