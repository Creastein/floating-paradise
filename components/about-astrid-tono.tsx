"use client"

import Image from 'next/image'
import { useEditorialScroll } from '@/hooks/use-editorial-scroll'
import { PortableText } from '@/components/portable-text'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'

interface AboutAstridTonoProps {
  cmsData?: any | null
}

export default function AboutAstridTono({ cmsData }: AboutAstridTonoProps) {
  const { t } = useLanguage()
  const { getCmsValue } = useCmsTranslation()
  const { sectionRef, imageRef, textColumnRef, headingRef } =
    useEditorialScroll({ headingDirection: 'left' })

  // Picks storyContent or storyContent_id depending on active language
  const storyContent = getCmsValue(cmsData, 'storyContent')

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 relative aspect-[4/5] sm:aspect-[3/4]">
        <div ref={imageRef} className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/image/about-us/astrid&tono.webp"
            alt="Astrid & Tono"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
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
        
        {storyContent ? (
          <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
            <PortableText value={storyContent} />
          </div>
        ) : (
          <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
            <p className="scrub-text">
              {t.aboutPage.astridTonoP1}
            </p>
            <p className="scrub-text">
              {t.aboutPage.astridTonoP2}
            </p>
            <p className="scrub-text">
              {t.aboutPage.astridTonoP3}
            </p>
            {t.aboutPage.astridTonoP4 && (
              <p className="scrub-text">
                {t.aboutPage.astridTonoP4}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
