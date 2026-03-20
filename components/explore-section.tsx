"use client"

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)
  const mobileImg1Ref = useRef<HTMLDivElement>(null)
  const mobileImg2Ref = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden relative" style={{ backgroundColor: '#f5efe6' }}>
      
      {/* Title & Line */}
      <div ref={headingRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left mb-16 lg:mb-24">
        <h2 className="scrub-text font-serif text-3xl md:text-5xl lg:text-6xl text-foreground font-medium mb-8 tracking-wide">
          Built by Hand,<br className="hidden md:block"/> Powered by Sun
        </h2>
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
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden will-change-transform cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 group"
              style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.25), 0 50px 90px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)'}
            >
              <Image
                src="/Builtbyhand-1.webp"
                alt="Handcrafted natural materials"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Image 2 — Solar Power */}
            <div
              ref={img2Ref}
              className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden will-change-transform cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 group"
              style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.25), 0 50px 90px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)'}
            >
              <Image
                src="/Builtbyhand-2.webp"
                alt="Solar powered living"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Mobile: same calm gallery with scroll animation */}
          <div className="w-full md:hidden flex flex-col gap-5">
            <div
              ref={mobileImg1Ref}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 group"
              style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)',
              }}
            >
              <Image src="/Builtbyhand-1.webp" fill alt="Materials" className="object-cover transition-transform duration-700 group-hover:scale-105"/>
            </div>
            <div
              ref={mobileImg2Ref}
              className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 group"
              style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(0,0,0,0.1)',
              }}
            >
              <Image src="/Builtbyhand-2.webp" fill alt="Solar Panel" className="object-cover transition-transform duration-700 group-hover:scale-105"/>
            </div>
          </div>

          {/* Right: Scrolling Text — Narrow Column + Vertical Accent */}
          <div className="w-full md:w-1/2 pb-24 md:pb-32">
            <div className="md:max-w-xl md:border-l-[2px] md:border-primary/20 md:pl-10 text-foreground/80 space-y-1 md:space-y-2 text-lg text-justify leading-relaxed">
              <p className="scrub-text">
                <strong className="text-foreground font-semibold">At first glance</strong>, Floating may appear simple. Natural materials. Open air. Timber, thatch, weave, salt air. Nothing polished to perfection. Not entirely sealed away from the elements.
              </p>
              
              <p className="scrub-text">
                And that is exactly the point. Every structure at Floating Paradise is built from natural materials that live in relationship with the sea, the sun, the wind and the rain, they fade and weather. They require care. They need replacing. The roof is renewed. The wood is tended. The details are revisited again and again.
              </p>
              
              <p className="scrub-text italic font-serif text-xl md:text-2xl text-foreground border-l-[3px] border-primary/40 pl-6 my-8 md:my-12 relative text-left">
                <span className="absolute -left-3 -top-2 text-primary/30 text-5xl">"</span>
                We do not build to resist nature. We build to exist within it.
              </p>
              
              <p className="scrub-text">
                Choosing natural materials means choosing maintenance over permanence. It means accepting cycles rather than chasing &ldquo;forever.&rdquo; What may look simple is, in truth, ongoing care, for this bay, for Karimunjawa, for our planet.
              </p>
              
              <p className="scrub-text">
                Just as intentionally, Floating runs entirely on solar power. There is no mainland grid supporting us. Every light, every fan, every system relies on a carefully built, hand-crafted solar network.
              </p>
              
              <p className="scrub-text">
                Tono, self-taught and deeply committed, designed and built this system himself. It is safe, reliable and entirely powered by the sun, but it requires constant attention, monitoring, learning and upgrading. Living off-grid is not a shortcut. It is daily devotion.
              </p>

              <p className="scrub-text">
                When you stay here, you are not paying for luxury in the conventional sense. You are supporting craftsmanship. Renewable energy. Natural materials. Cyclical rebuilding. Human hands. Long-term care.
              </p>
              
              <p className="scrub-text text-foreground font-medium pt-5 mt-8 md:mt-12 border-t border-border">
                Floating is simple by design. Yet simplicity, when created with intention and responsibility, carries depth and value. It is cared for, again and again.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
