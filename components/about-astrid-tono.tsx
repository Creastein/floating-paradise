"use client"

import Image from 'next/image'
import { useEditorialScroll } from '@/hooks/use-editorial-scroll'
import { PortableText } from '@/components/portable-text'
import { useLanguage } from '@/lib/i18n/language-context'

interface AboutAstridTonoProps {
  initialStory?: any[] | null
}

export default function AboutAstridTono({ initialStory }: AboutAstridTonoProps) {
  const { t } = useLanguage()
  const { sectionRef, imageRef, textColumnRef, headingRef } =
    useEditorialScroll({ headingDirection: 'left' })

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 relative aspect-[4/5] sm:aspect-[3/4]">
        <div ref={imageRef} className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/image/about-us/astrid&tono.webp"
            alt="Astrid & Tono"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div ref={textColumnRef} className="w-full md:w-1/2 space-y-8 lg:space-y-10 py-6 pr-4">
        <div ref={headingRef} className="scrub-text">
          <h2 className="text-sm tracking-widest text-primary uppercase font-bold mb-3">
            {t.aboutPage.astridTonoTitle}
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight">
            {t.aboutPage.astridTonoSubtitle}
          </h3>
        </div>
        
        {initialStory ? (
          <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
            <PortableText value={initialStory} />
          </div>
        ) : (
          <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
            <p className="scrub-text">
              {t.aboutPage.astridTonoP1}
            </p>
            <p className="scrub-text">
              {t.aboutPage.astridTonoP2}
            </p>
            <p className="scrub-text border-l-[3px] border-primary/40 pl-6 my-6 italic text-foreground/90 font-medium">
              {t.aboutPage.astridTonoP3}
            </p>
            <p className="scrub-text">
              {t.aboutPage.astridTonoP4}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

