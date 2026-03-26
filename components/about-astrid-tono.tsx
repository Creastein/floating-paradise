"use client"

import Image from 'next/image'
import { useEditorialScroll } from '@/hooks/use-editorial-scroll'
import { PortableText } from '@/components/portable-text'

interface AboutAstridTonoProps {
  initialStory?: any[] | null
}

export default function AboutAstridTono({ initialStory }: AboutAstridTonoProps) {
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
            The Founders
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight">
            Astrid & Tono
          </h3>
        </div>
        
        {initialStory ? (
          <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
            <PortableText value={initialStory} />
          </div>
        ) : (
          <div className="text-foreground/80 space-y-4 md:space-y-6 text-lg text-justify leading-relaxed">
            <p className="scrub-text">
              My name is Tono and I am the proud owner of Floating Paradise. I was born and raised in Karimunjawa, and my family have been living and working here for generations. I'm very grateful that I can call this beautiful island home. I'm passionate about sharing this place with others, and making sure we can collectively preserve the island's natural beauty too.
            </p>
            <p className="scrub-text">
              Astrid has been traveling her entire life, always seeking new experiences and connections. Yet it was during this particular journey, after nine months of exploring South-East Asia, that she met Tono in Karimunjawa. Sharing similar dreams and values, they quickly formed a deep connection.
            </p>
            <p className="scrub-text border-l-[3px] border-primary/40 pl-6 my-6 italic text-foreground/90 font-medium">
              Together, Astrid and Tono established Floating Paradise, a retreat that embodies their shared vision of peace and harmony with nature.
            </p>
            <p className="scrub-text">
              Over the years, they've built a life rooted in their love for the island, setting up an educational charity, constructing their own home and food forest, marrying, and welcoming two children into their lives. 
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

