"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TRIPLA_BOOKING_URL } from '@/lib/tripla'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function BungalowsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardImageRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardsGridRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const bungalows = [
    {
      name: 'Sunrise Bungalow',
      description: 'Our most private and sought-after bungalow, offering expansive sea views and soft ocean breezes right from your king-sized bed.',
      image: '/Sunrise-home.webp',
    },
    {
      name: 'Sunset Bungalow',
      description: "Our soul went into creating Floating's first stand-alone bungalow — offering expansive sea views and sunset views along the bay.",
      image: '/Sunset-.webp',
    },
    {
      name: 'Bayside Bungalow',
      description: 'Originally our private family space, Bayside has evolved into a spacious two-bedroom bungalow where you can shower with a view and take in the mangrove forest to the East and the sea flowing gently into the bay in the West.',
      image: '/Bayside-home.webp',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text scrub animation
      const scrubElements = gsap.utils.toArray('.scrub-text', sectionRef.current) as HTMLElement[];
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
              toggleActions: 'play reverse play reverse',
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

      // Parallax on each card's image
      cardImageRefs.current.forEach((img) => {
        if (img) {
          gsap.to(img, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        }
      });

      // Cards entrance and exit
      if (cardsGridRef.current) {
        let mm = gsap.matchMedia();
        const cards = gsap.utils.toArray('.bungalow-card', cardsGridRef.current) as HTMLElement[];

        // Desktop: Staggered animation based on grid
        mm.add("(min-width: 768px)", () => {
          gsap.fromTo(cards,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsGridRef.current,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse',
              }
            }
          );
        });

        // Mobile: Individual animation per card
        mm.add("(max-width: 767px)", () => {
          cards.forEach((card) => {
            gsap.fromTo(card,
              { opacity: 0, y: 100 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play reverse play reverse',
                }
              }
            );
          });
        });
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])



  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Split Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="w-full md:w-1/3">
            <h2 ref={headingRef} className="scrub-text font-serif text-3xl md:text-5xl lg:text-5xl text-foreground font-medium tracking-wide leading-tight">
              Our Floating <br className="hidden lg:block"/> Bungalows
            </h2>
          </div>
          
          <div className="w-full md:w-2/3 md:max-w-xl md:border-l-[2px] md:border-primary/20 md:pl-10 text-foreground/80 space-y-3 text-lg text-justify leading-relaxed">
            <p className="scrub-text">
              <strong className="text-foreground font-semibold">Suspended above the reef</strong>, our three handcrafted bamboo bungalows invite you to live between sea and sky.
            </p>
            <p className="scrub-text">
              Built by hand and shaped by the elements, each bungalow has its own personality; no two are the same. Wake with the sunrise shimmering across the water, watch the tide shift beneath your feet, and fall asleep to the quiet rhythm of the waves.
            </p>
            <p className="scrub-text">
              Inside, natural textures and open design create a space that feels both grounded and free. Each bungalow features a queen bed (or larger), a private ensuite with fresh water shower, sink, and flushing toilet, and a generous balcony with comfortable seating; your front-row seat to panoramic views of the sea and mangroves.
            </p>
            <p className="scrub-text font-medium text-foreground pt-3 mt-5 border-t border-border">
              These are not just rooms, they're a place to exhale, to soften, and to float.
            </p>
          </div>
        </div>

        <div 
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {bungalows.map((bungalow, index) => (
            <div key={index} className="bungalow-card group cursor-pointer flex flex-col h-full bg-[#f5efe6] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700">
              <div className="relative h-72 w-full overflow-hidden">
                <div
                  ref={(el: HTMLDivElement | null) => { cardImageRefs.current[index] = el }}
                  className="absolute inset-0 will-change-transform"
                  style={{ top: '-10%', height: '120%' }}
                >
                  <Image
                    src={bungalow.image}
                    alt={bungalow.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow text-center">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {bungalow.name}
                </h3>
                <p className="text-foreground/70 text-base mb-8 flex-grow leading-relaxed">
                  {bungalow.description}
                </p>
                <div className="mt-6 pt-5 border-t border-primary/20">
                  <a 
                    href={TRIPLA_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs font-bold text-primary hover:text-foreground transition-colors duration-700 w-full"
                  >
                    Book This Room <span className="text-lg opacity-80">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
