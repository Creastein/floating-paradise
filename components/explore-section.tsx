"use client"

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/language-context'

export default function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)
  const mobileImg1Ref = useRef<HTMLDivElement>(null)
  const mobileImg2Ref = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()

  useEffect(() => {
    let ctx: any
    import('@/lib/gsap-init').then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
      // Decorative line grows with scroll
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: '50% center',
              scrub: true,
            },
          }
        )
      }

      // Text scrub animation matching Welcome to Floating
      const scrubElements = gsap.utils.toArray('.scrub-text') as HTMLElement[];
      scrubElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0.15, filter: 'blur(2px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 1, // Smoother scrub
            }
          }
        );
      });

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

      // Images Entrance Timeline (Slide from right)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%', 
          toggleActions: 'restart none none reverse', 
        }
      });

      if (img1Ref.current && img2Ref.current) {
        gsap.set([img1Ref.current, img2Ref.current], { opacity: 0, x: 120 });
        
        // Image 1
        tl.to(img1Ref.current, {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: 'power3.out'
        })
        // Image 2 slightly later
        .to(img2Ref.current, {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: 'power3.out'
        }, "-=1.8");
      }

      // Mobile images — fade up on scroll (same feel as desktop)
      if (mobileImg1Ref.current) {
        gsap.fromTo(mobileImg1Ref.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mobileImg1Ref.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
      if (mobileImg2Ref.current) {
        gsap.fromTo(mobileImg2Ref.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mobileImg2Ref.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)
    })

    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden relative" style={{ backgroundColor: '#f5efe6' }}>
      
      {/* Title & Line */}
      <div ref={headingRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left mb-16 lg:mb-24">
        <h2 
          className="scrub-text font-serif text-3xl md:text-5xl lg:text-6xl text-foreground font-medium mb-8 tracking-wide"
          dangerouslySetInnerHTML={{ __html: t.explore.title }}
        />
        {/* GSAP Decorative Line */}
        <div 
          ref={lineRef} 
          className="w-32 md:w-48 h-[2px] bg-primary/60 mx-auto md:mx-0 origin-center md:origin-left will-change-transform"
        />
      </div>

      {/* Sticky Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-16 items-start">
          
          {/* Left: Sticky Calm Gallery */}
            <div className="w-full md:w-1/2 sticky top-24 hidden md:flex flex-col gap-5">
             {/* Image 1 — Handcrafted Structure */}
            <div
              ref={img1Ref}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden will-change-transform cursor-pointer shadow-premium transition-all duration-500 ease-out hover:-translate-y-3 group"
            >
              <Image
                src="/image/homepage/Builtbyhand-1.webp"
                alt="Handcrafted bamboo and reclaimed wood structure at Floating Paradise Karimunjawa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 45vw"
                loading="lazy"
              />
            </div>
            {/* Image 2 — Solar Power */}
            <div
              ref={img2Ref}
              className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden will-change-transform cursor-pointer shadow-premium transition-all duration-500 ease-out hover:-translate-y-3 group"
            >
              <Image
                src="/image/homepage/Builtbyhand-2.webp"
                alt="Solar-powered eco-friendly living above the sea at Floating Paradise"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 45vw"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Mobile: same calm gallery with scroll animation */}
          <div className="w-full md:hidden flex flex-col gap-5">
            <div
              ref={mobileImg1Ref}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-premium transition-all duration-500 ease-out hover:-translate-y-3 group"
            >
              <Image src="/image/homepage/Builtbyhand-1.webp" fill alt="Handcrafted bamboo and reclaimed wood structure at Floating Paradise Karimunjawa" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" loading="lazy" />
            </div>
            <div
              ref={mobileImg2Ref}
              className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden cursor-pointer shadow-premium transition-all duration-500 ease-out hover:-translate-y-3 group"
            >
              <Image src="/image/homepage/Builtbyhand-2.webp" fill alt="Solar-powered eco-friendly energy system at Floating Paradise" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" loading="lazy" />
            </div>
          </div>

          {/* Right: Scrolling Text — Narrow Column + Vertical Accent */}
          <div className="w-full md:w-1/2 pb-24 md:pb-32">
            <div className="md:max-w-xl md:border-l-[2px] md:border-primary/20 md:pl-10 text-foreground/80 space-y-1 md:space-y-2 text-lg text-justify leading-relaxed">
              <p className="scrub-text">
                <span dangerouslySetInnerHTML={{ __html: t.explore.p1.replace('At first glance', '<strong class="text-foreground font-semibold">At first glance</strong>').replace('Pada pandangan pertama', '<strong class="text-foreground font-semibold">Pada pandangan pertama</strong>') }} />
              </p>
              
              <p className="scrub-text">
                {t.explore.p2}
              </p>
              
              <p className="scrub-text italic font-serif text-xl md:text-2xl text-foreground border-l-[3px] border-primary/40 pl-6 my-8 md:my-12 relative text-left">
                <span className="absolute -left-3 -top-2 text-primary/30 text-5xl">"</span>
                {t.explore.quote}
              </p>
              
              <p className="scrub-text">
                {t.explore.p3}
              </p>
              
              <p className="scrub-text">
                {t.explore.p4}
              </p>
              
              <p className="scrub-text">
                {t.explore.p5}
              </p>

              <p className="scrub-text">
                {t.explore.p6}
              </p>
              
              <p className="scrub-text text-foreground font-medium pt-5 mt-8 md:mt-12 border-t border-border">
                {t.explore.p7}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
