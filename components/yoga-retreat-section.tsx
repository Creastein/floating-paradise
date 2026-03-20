"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function YogaRetreatSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textColumnRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image: smooth scale-up and slide-up with subtle rotation
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { scale: 0.8, opacity: 0, y: 150, rotation: -4 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 2.5,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // 2. Text scrub animations (matching About Us style)
      if (textColumnRef.current) {
        const scrubItems = gsap.utils.toArray('.yoga-scrub-text', textColumnRef.current)
        scrubItems.forEach((el: any) => {
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
                scrub: 1,
              }
            }
          )
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

      // CTA Button slide-up and fade-in
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: 0.5, // stronger delay to appear after text 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Column — Editorial Style */}
          <div ref={textColumnRef} className="space-y-8 lg:space-y-10 order-1">
            
            {/* Subtitle */}
            <div ref={headingRef} className="yoga-scrub-text">
              <p className="text-sm tracking-widest text-primary uppercase font-bold mb-4">
                New Experience
              </p>
              {/* Title — Mixed serif with italic */}
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground font-medium leading-tight">
                The Art of<br />
                <span className="italic text-primary/80">Floating</span>
              </h2>
            </div>

            {/* Date */}
            <div className="yoga-scrub-text">
              <p className="font-serif italic text-lg md:text-xl text-foreground/60">
                8–14 June 2026
              </p>
            </div>

            {/* Body */}
            <div className="text-foreground/80 space-y-4 text-lg leading-relaxed">
              <p className="yoga-scrub-text">
                Join us for a 7-day immersive yoga retreat. Reconnect with yourself through daily practice, mindful living, and the healing power of the ocean.
              </p>
              
              {/* Blockquote accent */}
              <p className="yoga-scrub-text italic font-serif text-xl md:text-2xl text-foreground/90 border-l-[3px] border-primary/40 pl-6 my-3 md:my-4 relative">
                <span className="absolute -left-3 -top-2 text-primary/30 text-4xl">"</span>
                This is yoga as a way of being. Come float with us.
              </p>
            </div>

            {/* CTA Button */}
            <div ref={ctaRef} className="pt-2">
              <Link
                href="/yoga-retreat"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-[#3a7350] transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-widest shadow-lg"
              >
                Discover the Retreat
              </Link>
            </div>
          </div>

          {/* Image Column — Circular with Decorative Ring */}
          <div className="order-2 flex items-center justify-center">
            <div ref={imageRef} className="relative will-change-transform">
              {/* Decorative outer ring */}
              <div className="absolute -inset-3 md:-inset-4 rounded-full border border-primary/20" />
              
              {/* Main circular image */}
              <div
                className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 group"
                style={{
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.25), 0 50px 90px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)'}
              >
                <Image
                  src="/yogahome.webp"
                  alt="Yoga at Sunset on Jetty"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
