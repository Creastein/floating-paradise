"use client"

import Image from 'next/image'
import { useEditorialScroll } from '@/hooks/use-editorial-scroll'

export default function AboutKejora() {
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
            Community Giving
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight">
            Kejora Karimunjawa
          </h3>
        </div>
        
        <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
          <p className="scrub-text block font-medium text-foreground">
            In 2021, we legally founded a charity called Kejora Karimunjawa, which improves access to quality education on the island.
          </p>
          <p className="scrub-text">
            Kejora has been successfully running the island's first legal bilingual, nature-based preschool for 3–6-year olds since July 2023, with many children attending on a scholarship.
          </p>
          <p className="scrub-text border-l-[3px] border-primary/40 pl-6 my-6 italic text-foreground/90">
            We also provide English lessons for primary school children aged 7–12 and for adults working in tourism. We've recently built a library and a second classroom to expand our facilities, paving the way for the introduction of primary education.
          </p>

          <div className="scrub-text p-6 bg-[#F5EFE4] rounded-2xl mt-8">
            <h4 className="font-serif text-xl font-bold text-foreground mb-3">Support Our Mission</h4>
            <p className="text-sm mb-4">
              As we are entirely non-profit, we depend on donors. We are legalised in the Netherlands, meaning you can donate directly to our EU bank account:
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
              Visit www.kejorakarimunjawa.com →
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
