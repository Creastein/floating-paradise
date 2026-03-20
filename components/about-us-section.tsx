"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const topImageRef = useRef<HTMLDivElement>(null)
  const bottomImageRef = useRef<HTMLDivElement>(null)
  const textColumnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation Timeline (Muncul satu-satu)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%', // Trigger slightly earlier to ensure they see it
          toggleActions: 'restart none none reverse', // Fix replay: restarts every time entering from top, reverses when scrolling back up
        }
      })

      if (topImageRef.current && bottomImageRef.current) {
        // Set initial invisible state to the left
        gsap.set([topImageRef.current, bottomImageRef.current], { opacity: 0, x: -120 })
        
        tl.to(topImageRef.current, {
          opacity: 1,
          x: 0,
          duration: 2.5, // Diperlambat dari 1.8s ke 2.5s
          ease: 'power3.out'
        })
        .to(bottomImageRef.current, {
          opacity: 1,
          x: 0,
          duration: 2.5, 
          ease: 'power3.out'
        }, "-=1.8") // Gambar kedua menyusul 0.7s setelah gambar pertama
      }

      // 2. Parallax scroll effect
      if (topImageRef.current) {
        gsap.to(topImageRef.current, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      if (bottomImageRef.current) {
        gsap.to(bottomImageRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // 3. Text Scrub Animation (Membaca saat scroll)
      if (textColumnRef.current) {
        const paragraphs = gsap.utils.toArray('.scrub-text', textColumnRef.current)
        paragraphs.forEach((p: any) => {
          gsap.fromTo(p, 
            { opacity: 0.15, filter: 'blur(2px)' }, // Mulai dari redup & sedikit blur
            {
              opacity: 1,
              filter: 'blur(0px)', // Menjadi tajam & terang sepenuhnya
              ease: 'none',
              scrollTrigger: {
                trigger: p,
                start: 'top 85%', // Trigger saat teks mencapai 85% layar dari atas
                end: 'top 55%',   // Selesai animasi saat teks di tengah layar
                scrub: 1, // Efek scrub mulus yang mengikut scroll
              }
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section ref={sectionRef} className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Column — Editorial Overlap Layout */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full">
            {/* Main Portrait Image (Back) */}
            <div ref={topImageRef} className="absolute top-0 left-0 w-[85%] md:w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-lg z-10 will-change-transform opacity-0 group/img1">
              <Image 
                src="/Welcome-to-Floating1.webp" 
                alt="Floating Paradise Exterior" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            
            {/* Secondary Overlapping Image (Front) */}
            <div ref={bottomImageRef} className="absolute bottom-0 right-0 w-[70%] md:w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-20 border-8 lg:border-[12px] border-background will-change-transform opacity-0">
              <Image 
                src="/Welcome-to-Floating2.webp" 
                alt="Floating Paradise Interior" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* Text Column — Magazine Editorial & GSAP Scroll Scrub */}
          <div ref={textColumnRef} className="space-y-8 lg:space-y-10 py-6 relative">
            
            {/* Header Titles */}
            <div className="scrub-text">
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
