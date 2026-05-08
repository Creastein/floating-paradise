"use client"

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { urlFor } from '@/lib/sanity.image'
import { PortableText } from '@/components/portable-text'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'

type AboutUsSectionProps = {
  homepage?: any;
}

export default function AboutUsSection({ homepage }: AboutUsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const textColumnRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()
  const { getCmsValue } = useCmsTranslation()

  const title = getCmsValue(homepage, 'welcomeTitle', null)
  const text = getCmsValue(homepage, 'welcomeText', null)

  const image1 = homepage?.welcomeImage1
  const image2 = homepage?.welcomeImage2
  const image3 = homepage?.welcomeImage3

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    let ctx: any
    import('@/lib/gsap-init').then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
      // 1. Gallery frames — staggered reveal entrance (desktop only)
      const frames = gsap.utils.toArray<HTMLElement>('.gallery-frame', galleryRef.current)
      if (frames.length && isDesktop) {
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

      // Heading slide-in from left (desktop only)
      if (headingRef.current && isDesktop) {
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

      // 2. Text Scrub Animation (desktop only — scrub triggers forced reflow on mobile)
      if (textColumnRef.current && isDesktop) {
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
    })

    return () => ctx?.revert()
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
                src={image1 ? urlFor(image1).width(900).format('webp').quality(75).url() : "/image/homepage/Welcome-to-Floating1.webp"}
                alt="Exterior view of Floating Paradise wooden bungalows over the ocean in Karimunjawa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>

            {/* Image 2 — Top-right, spans right 2 columns */}
            <div
              className="gallery-frame col-span-2 row-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group opacity-0 cursor-pointer shadow-premium hover:-translate-y-3"
            >
              <Image
                src={image2 ? urlFor(image2).width(500).format('webp').quality(75).url() : "/image/homepage/Welcome-to-Floating2.webp"}
                alt="Interior of a rustic oceanfront room at Floating Paradise"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 20vw"
                loading="lazy"
              />
            </div>

            {/* Image 3 — Bottom-right, spans right 2 columns */}
            <div
              className="gallery-frame col-span-2 row-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group opacity-0 cursor-pointer shadow-premium hover:-translate-y-3"
            >
              <Image
                src={image3 ? urlFor(image3).width(500).format('webp').quality(75).url() : "/image/homepage/Welcome-to-Floating3.webp"}
                alt="Stunning moonrise viewed from the jetty at Floating Paradise Karimunjawa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Column — Magazine Editorial & GSAP Scroll Scrub */}
          <div ref={textColumnRef} className="space-y-8 lg:space-y-10 py-6 relative">
            
            {/* Header Titles */}
            <div ref={headingRef} className="scrub-text">
              <p className="text-sm tracking-widest text-primary uppercase font-bold mb-3">
                {t.about.welcomeTitle}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground font-medium leading-tight">
                {title || (
                  <span dangerouslySetInnerHTML={{ __html: t.about.defaultTitle }} />
                )}
              </h2>
            </div>
            
            {/* Body Paragraphs */}
            <div className="text-foreground space-y-1 md:space-y-2 text-lg text-justify leading-relaxed">
              {text ? (
                <PortableText 
                  value={text} 
                  components={{
                    block: {
                      normal: ({ children }: any) => <p className="scrub-text leading-relaxed">{children}</p>,
                      blockquote: ({ children }: any) => (
                        <p className="scrub-text italic font-serif text-xl md:text-2xl text-foreground/90 border-l-[3px] border-primary/40 pl-6 my-3 md:my-4 relative">
                          <span className="absolute -left-3 -top-2 text-primary/30 text-4xl">"</span>
                          {children}
                        </p>
                      )
                    }
                  }}
                />
              ) : (
                <>
                  <p className="scrub-text flex flex-col gap-4">
                    <span dangerouslySetInnerHTML={{ __html: t.about.defaultText1.replace('Floating Paradise', '<strong class="text-foreground font-semibold">Floating Paradise</strong>') }} />
                  </p>

                  <p className="scrub-text">
                    {t.about.defaultText2}
                  </p>

                  <p className="scrub-text italic font-serif text-xl md:text-2xl text-foreground/90 border-l-[3px] border-primary/40 pl-6 my-3 md:my-4 relative">
                    <span className="absolute -left-3 -top-2 text-primary/30 text-4xl">"</span>
                    {t.about.defaultText3}
                  </p>

                  <p className="scrub-text">
                    {t.about.defaultText4}
                  </p>

                  <p className="scrub-text text-foreground font-medium pt-3 mt-4 md:mt-5 border-t border-border">
                    {t.about.defaultText5}
                  </p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
