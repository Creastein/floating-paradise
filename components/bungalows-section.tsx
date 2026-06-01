"use client"

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { urlFor } from '@/lib/sanity.image'
import { PortableText } from '@/components/portable-text'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'
import { TRIPLA_ROOM_IDS, type RoomKey } from '@/lib/tripla'
import { trackEvent } from '@/lib/analytics'

const hasPortableTextContent = (value: any) =>
  Array.isArray(value) &&
  value.some((block: any) =>
    Array.isArray(block?.children) &&
    block.children.some((child: any) => typeof child?.text === 'string' && child.text.trim().length > 0)
  )

const hasSanityImage = (image: any) =>
  Boolean(image?.asset?._ref || image?.asset?._id || image?.asset?.url)

type BungalowsSectionProps = {
  homepage?: any;
  bungalows?: any[];
}

export default function BungalowsSection({ homepage, bungalows: cmsBungalows }: BungalowsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardImageRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardsGridRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()
  const { getCmsValue } = useCmsTranslation()

  const title = getCmsValue(homepage, 'builtByHandTitle', null)
  const text = getCmsValue(homepage, 'builtByHandText', null)

  const defaultBungalows = [
    {
      name: 'Sunrise Bungalow',
      description: t.bungalowsPage.rooms.sunrise.description,
      image: '/image/homepage/Sunrise-home.webp',
    },
    {
      name: 'Sunset Bungalow',
      description: t.bungalowsPage.rooms.sunset.description,
      image: '/image/homepage/Sunset-home.webp',
    },
    {
      name: 'Bayside Bungalow',
      description: t.bungalowsPage.rooms.bayside.description,
      image: '/image/homepage/Bayside-home.webp',
    },
  ]

  const findCmsBungalow = (roomName: string) => {
    if (!cmsBungalows?.length) return null
    const roomKey = roomName.split(' ')[0].toLowerCase()

    return cmsBungalows.find((bungalow: any) =>
      typeof bungalow.name === 'string' &&
      bungalow.name.toLowerCase().includes(roomKey)
    ) || null
  }

  const displayBungalows = defaultBungalows.map((fallback) => ({
    ...fallback,
    ...(findCmsBungalow(fallback.name) || {}),
    fallbackName: fallback.name,
    fallbackDescription: fallback.description,
    fallbackImage: fallback.image,
  }))

  /** Map bungalow name to RoomKey for Tripla URL */
  const getRoomKey = (name: string): RoomKey => {
    const lower = name.toLowerCase()
    if (lower.includes('sunrise')) return 'sunrise'
    if (lower.includes('sunset')) return 'sunset'
    return 'bayside'
  }

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    let ctx: any
    import('@/lib/gsap-init').then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
      // Text scrub animation (desktop only)
      if (isDesktop) {
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

      // Parallax on each card's image — desktop only (forced reflow on mobile)
      if (isDesktop) {
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
      }

      // Cards entrance — desktop staggered only
      if (cardsGridRef.current && isDesktop) {
        const cards = gsap.utils.toArray('.bungalow-card', cardsGridRef.current) as HTMLElement[];
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }
    }, sectionRef)
    })

    return () => ctx?.revert()
  }, [])



  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Split Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="w-full md:w-1/3">
            <h2 ref={headingRef} className="scrub-text font-serif text-3xl md:text-5xl lg:text-5xl text-foreground font-medium tracking-wide leading-tight">
              {title || (
                <span dangerouslySetInnerHTML={{ __html: t.bungalows.defaultTitle }} />
              )}
            </h2>
          </div>
          
          <div className="w-full md:w-2/3 md:max-w-xl md:border-l-[2px] md:border-primary/20 md:pl-10 text-foreground/80 space-y-3 text-lg text-justify leading-relaxed">
            {text ? (
              <PortableText 
                value={text} 
                components={{
                  block: {
                    normal: ({ children }: any) => <p className="scrub-text">{children}</p>
                  }
                }}
              />
            ) : (
              <>
                <p className="scrub-text">
                  <span dangerouslySetInnerHTML={{ __html: t.bungalows.defaultText1.replace('Suspended above the reef', '<strong class="text-foreground font-semibold">Suspended above the reef</strong>').replace('Tergantung di atas terumbu karang', '<strong class="text-foreground font-semibold">Tergantung di atas terumbu karang</strong>') }} />
                </p>
                <p className="scrub-text">
                  {t.bungalows.defaultText2}
                </p>
                <p className="scrub-text">
                  {t.bungalows.defaultText3}
                </p>
                <p className="scrub-text font-medium text-foreground pt-3 mt-5 border-t border-border">
                  {t.bungalows.defaultText4}
                </p>
              </>
            )}
          </div>
        </div>

        <div 
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayBungalows.map((bungalow, index) => {
            // Name-based fallback so each card always gets the correct photo
            const fallbackByName: Record<string, string> = {
              'Bayside Bungalow': '/image/homepage/Bayside-home.webp',
              'Sunrise Bungalow': '/image/homepage/Sunrise-home.webp',
              'Sunset Bungalow':  '/image/homepage/Sunset-home.webp',
            }
            const displayName = bungalow.name || bungalow.fallbackName
            const fallbackName = bungalow.fallbackName || displayName
            const localFallback = bungalow.fallbackImage || fallbackByName[fallbackName] || '/image/homepage/Sunrise-home.webp'

            // Priority: 1) Homepage CMS image (matched by name)  2) Bungalow gallery/mainImage  3) Hardcoded default
            const homepageBungalowImageMap: Record<string, string> = {
              'Sunrise Bungalow': 'bungalowImage1',
              'Sunset Bungalow':  'bungalowImage2',
              'Bayside Bungalow': 'bungalowImage3',
            }
            const homepageImgField = homepageBungalowImageMap[fallbackName]
            const homepageImg = homepageImgField ? homepage?.[homepageImgField] : null
            const cmsGallery = Array.isArray(bungalow.gallery)
              ? bungalow.gallery.filter(hasSanityImage)
              : []

            const imgSrc = homepageImg ? urlFor(homepageImg).width(600).format('webp').quality(75).url()
                         : cmsGallery[0] ? urlFor(cmsGallery[0]).width(600).format('webp').quality(75).url()
                         : hasSanityImage(bungalow.mainImage) ? urlFor(bungalow.mainImage).width(600).format('webp').quality(75).url()
                         : localFallback;
            
            return (
            <div key={index} className="bungalow-card group cursor-pointer flex flex-col h-full bg-[#f5efe6] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700">
              <div className="relative h-72 w-full overflow-hidden">
                <div
                  ref={(el: HTMLDivElement | null) => { cardImageRefs.current[index] = el }}
                  className="absolute inset-0 will-change-transform"
                  style={{ top: '-10%', height: '120%' }}
                >
                  <Image
                    src={imgSrc || "/image/homepage/Sunrise-home.webp"}
                    alt={displayName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow text-center">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {displayName}
                </h3>
                <div className="text-foreground/70 text-base mb-8 flex-grow leading-relaxed flex flex-col items-center">
                  {(() => {
                    const desc = getCmsValue(bungalow, 'description', bungalow.fallbackDescription);
                    return typeof desc === 'string' && desc.trim() ? (
                      <p>{desc}</p>
                    ) : hasPortableTextContent(desc) ? (
                      <PortableText 
                        value={desc} 
                        components={{
                          block: {
                            normal: ({ children }: any) => <p className="mb-2 last:mb-0 max-w-sm">{children}</p>
                          }
                        }}
                      />
                    ) : (
                      <p>{bungalow.fallbackDescription}</p>
                    );
                  })()}
                </div>
                <div className="mt-6 pt-5 border-t border-primary/20">
                <button 
                    type="button"
                    data-tripla-booking-widget="search"
                    onClick={() => {
                      const roomKey = getRoomKey(fallbackName)
                      const roomId = TRIPLA_ROOM_IDS[roomKey]
                      trackEvent('book_now_click', { action: 'clicked', label: `bungalows_section_${fallbackName.toLowerCase().replace(/ /g, '_')}` })
                      if (typeof window !== 'undefined' && (window as any).__openTriplaBooking) {
                        (window as any).__openTriplaBooking(roomId)
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs font-bold text-primary hover:text-foreground transition-colors duration-700 w-full"
                  >
                    {t.bungalows.bookRoom} <span className="text-lg opacity-80">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
