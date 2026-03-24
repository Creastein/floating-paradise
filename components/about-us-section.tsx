"use client"

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const textColumnRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Gallery frames — staggered reveal entrance
      const frames = gsap.utils.toArray<HTMLElement>('.gallery-frame', galleryRef.current)
      if (frames.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'restart none none reverse',
          }
        })

        frames.forEach((frame, i) => {
          gsap.set(frame, { opacity: 0, y: 60, scale: 0.95 })
          tl.to(frame, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
          }, i * 0.25)
        })
      }

      // Heading slide-in from left
      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // 2. Text Scrub Animation
      if (textColumnRef.current) {
        const paragraphs = gsap.utils.toArray<HTMLElement>('.scrub-text', textColumnRef.current)
        paragraphs.forEach((p) => {
          gsap.fromTo(p,
            { opacity: 0.15, filter: 'blur(2px)' },
            {
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'none',
              scrollTrigger: {
                trigger: p,
                start: 'top 85%',
                end: 'top 55%',
                scrub: 1,
              }
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Column — Gallery Wall Layout */}
          <div ref={galleryRef} className="grid grid-cols-5 grid-rows-2 gap-3 md:gap-4 h-[420px] sm:h-[500px] lg:h-[600px]">
            
            {/* Image 1 — Large, spans left 3 columns & both rows */}
            <div
              className="gallery-frame col-span-3 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group opacity-0 cursor-pointer shadow-premium hover:-translate-y-3"
            >
              <Image
                src="/image/homepage/Welcome-to-Floating1.webp"
                alt="Floating Paradise Exterior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Image 2 — Top-right, spans right 2 columns */}
            <div
              className="gallery-frame col-span-2 row-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group opacity-0 cursor-pointer shadow-premium hover:-translate-y-3"
            >
              <Image
                src="/image/homepage/Welcome-to-Floating2.webp"
                alt="Floating Paradise Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Image 3 — Bottom-right, spans right 2 columns */}
            <div
              className="gallery-frame col-span-2 row-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group opacity-0 cursor-pointer shadow-premium hover:-translate-y-3"
            >
              <Image
                src="/image/homepage/Welcome-to-Floating3.webp"
                alt="Moonrise over Floating Paradise"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Column — Magazine Editorial & GSAP Scroll Scrub */}
          <div ref={textColumnRef} className="space-y-8 lg:space-y-10 py-6 relative">
            
            {/* Header Titles */}
            <div ref={headingRef} className="scrub-text">
              <h2 className="text-sm tracking-widest text-primary uppercase font-bold mb-3">
                Welcome to Floating
              </h2>
              <h3 className="font-serif text-3xl md:text-5xl text-foreground font-medium leading-tight">
                A sea-based guesthouse,<br className="hidden md:block"/> sheltered in a mangrove bay.
              </h3>
            </div>
            
            {/* Body Paragraphs */}
            <div className="text-foreground/80 space-y-1 md:space-y-2 text-lg text-justify md:text-left leading-relaxed">
              
              {/* Paragraf 1 */}
              <p className="scrub-text">
                <strong className="text-foreground font-semibold">Floating Paradise</strong> is proudly solar-powered. Built consciously above the water, it invites a slower rhythm of living, where mornings begin gazing out to the horizon, days unfold barefoot, and life follows the tides more than the clock.
              </p>

              {/* Paragraf 2 */}
              <p className="scrub-text">
                With just three cosy rooms, all locally crafted using wood and bamboo, with direct jetty access to deep water, and the reef at your doorstep, it's a unique, secluded, nature escape.
              </p>

              {/* Paragraf 3 - Gentle Break */}
              <p className="scrub-text italic font-serif text-xl md:text-2xl text-foreground/90 border-l-[3px] border-primary/40 pl-6 my-3 md:my-4 relative">
                <span className="absolute -left-3 -top-2 text-primary/30 text-4xl">"</span>
                Swim, snorkel, kayak, fish, explore nearby beaches, or practice yoga on our open decks overlooking the horizon.
              </p>

              {/* Paragraf 4 */}
              <p className="scrub-text">
                At night, watch phosphorescent plankton glow beneath you or spot shooting stars above, not forgetting our fresh, abundant meals too. Immerse yourself in this unique tropical island space; slow down, reconnect, contribute sustainably, and connect to nature, all at Floating Paradise.
              </p>

              {/* Paragraf 5 - Final */}
              <p className="scrub-text text-foreground font-medium pt-3 mt-4 md:mt-5 border-t border-border">
                Comfort, exploration, and rejuvenation await in this tropical island paradise. We can't wait to welcome you!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
