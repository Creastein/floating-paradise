'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'
import Lightbox from '@/components/lightbox'
import { Camera } from 'lucide-react'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'
import { PortableText } from '@/components/portable-text'
import { urlFor } from '@/lib/sanity.image'

const FALLBACK_ACTIVITIES = [
  {
      title: 'Private Eco Boat Tour',
      description:
        'A full-day private boat trip departing from our pier to explore the most breathtaking corners of the archipelago. Guided by an English-speaking crew, discover vibrant reefs and untouched islands — sustainably.',
      gallery: [
        '/image/Explore/Private Eco Boat Tour/PB1.webp',
        '/image/Explore/Private Eco Boat Tour/PB2.webp',
        '/image/Explore/Private Eco Boat Tour/PB3.webp',
        '/image/Explore/Private Eco Boat Tour/PB4.webp',
        '/image/Explore/Private Eco Boat Tour/PB5.webp',
        '/image/Explore/Private Eco Boat Tour/PB6.webp',
        '/image/Explore/Private Eco Boat Tour/PB7.webp',
        '/image/Explore/Private Eco Boat Tour/PB8.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Open Air Sunset Yoga',
      description:
        'A 75-minute Hatha Flow practice at the end of our jetty as the sun sets over the bay. Led by Astrid, Floating\u2019s resident teacher — mats provided, just bring an open mind.',
      gallery: [
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga6.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga1.JPG',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga2.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga3.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga4.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga5.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga7.webp',
        '/image/Explore/Open Air Sunset Yoga/sunsetyoga8.webp',
      ],
      ctaText: 'Learn More',
      ctaLink: '/yoga-retreat',
      ctaExternal: false,
    },
    {
      title: 'Kayak, Lunch & Chill',
      description:
        'Paddle through crystal-clear water, discover secluded beaches, and glide above vibrant coral reef at your own pace. Includes welcome drink, kayak, snorkel gear, and a fresh seafood lunch.',
      gallery: [
        '/image/Explore/Kayak, Lunch & Chill/kayak2.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak1.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak3.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak4.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak5.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak6.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Trekking Nyamplungan',
      description:
        'A half-day hike to the island\u2019s second-highest peak through tropical forest, rewarded with sweeping views of the archipelago. Plant a sapling at the summit and give something back.',
      gallery: [
        '/image/Explore/Trekking Nyamplungan/Trekking1.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking2.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking3.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking4.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking5.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Turtle Sanctuary',
      description:
        'Visit the sea turtle conservation sanctuary in our bay, led by the national park authority. Join the afternoon release of baby turtles — a meaningful way to support the reef\u2019s future.',
      gallery: [
        '/image/Explore/Turtle Sanctuary/TS1.webp',
        '/image/Explore/Turtle Sanctuary/TS2.webp',
        '/image/Explore/Turtle Sanctuary/TS3.webp',
        '/image/Explore/Turtle Sanctuary/TS4.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Tastes of Paradise',
      description:
        'Slow, fresh, and deeply local meals shaped by the sea and the seasons. Fragrant Indonesian classics, freshly caught fish, plant-based options, and good coffee at the bar.',
      gallery: [
        '/image/Explore/Tastes of Paradise/TP1.webp',
        '/image/Explore/Tastes of Paradise/TP2.webp',
        '/image/Explore/Tastes of Paradise/TP3.webp',
        '/image/Explore/Tastes of Paradise/TP4.webp',
        '/image/Explore/Tastes of Paradise/TP5.webp',
      ],
      ctaText: 'Book Now',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
    },
    {
      title: 'Floating Merchandise',
      description:
        'Bamboo cotton t-shirts — soft, eco-friendly, and antibacterial. Each design handmade by Astrid herself.',
      gallery: ['/image/Explore/floating-merchandise/floating-merchandise.png'],
      detail: 'Rp 180,000 · Sizes S–XXL',
      label: 'Pre-order',
      ctaText: 'Pre-Order',
      ctaLink: TRIPLA_EXTRAS_URL,
      ctaExternal: true,
  },
]

export default function ExploreContent({ initialActivities }: { initialActivities?: any[] }) {
  const gridRef = useRef<HTMLDivElement>(null)

  // Use CMS data if available, fallback to defaults
  const displayActivities = initialActivities && initialActivities.length > 0
    ? initialActivities.map((a, index) => ({
        title: a.name,
        description: a.description,
        gallery: a.heroImage ? [urlFor(a.heroImage).url()] : FALLBACK_ACTIVITIES[index]?.gallery || ['/image/Explore/explore-hero.webp'],
        detail: a.price ? `Starts from Rp ${a.price.toLocaleString('en-US')}${a.duration ? ` · ${a.duration}` : ''}` : FALLBACK_ACTIVITIES[index]?.detail,
        label: FALLBACK_ACTIVITIES[index]?.label,
        ctaText: a.triplaExtrasLink ? 'Book Now' : FALLBACK_ACTIVITIES[index]?.ctaText || 'Learn More',
        ctaLink: a.triplaExtrasLink || FALLBACK_ACTIVITIES[index]?.ctaLink || TRIPLA_EXTRAS_URL,
        ctaExternal: a.triplaExtrasLink ? true : FALLBACK_ACTIVITIES[index]?.ctaExternal ?? true,
      }))
    : FALLBACK_ACTIVITIES;

  // Lightbox state
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; alt: string } | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.explore-card') as HTMLElement[]

      cards.forEach((card, index) => {
        const isRightColumn = index % 2 === 1
        const colDelay = isRightColumn ? 0.3 : 0

        const imageEl = card.querySelector('.card-image') as HTMLElement
        const textEl = card.querySelector('.card-text') as HTMLElement
        const els = [imageEl, textEl].filter(Boolean)

        els.forEach(el => gsap.set(el, { opacity: 0, y: 25, filter: 'blur(4px)' }))

        const animateIn = (fromY: number) => {
          els.forEach((el, i) => {
            gsap.fromTo(el,
              { opacity: 0, y: fromY, filter: 'blur(4px)' },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.6,
                delay: colDelay + (i * 0.2),
                ease: 'power2.inOut',
              }
            )
          })
        }

        const resetEls = () => {
          els.forEach(el => gsap.set(el, { opacity: 0, filter: 'blur(4px)' }))
        }

        ScrollTrigger.create({
          trigger: card,
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => animateIn(25),
          onEnterBack: () => animateIn(-25),
          onLeave: () => resetEls(),
          onLeaveBack: () => resetEls(),
        })
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {displayActivities.map((activity, index) => (
          <article key={index} className="explore-card flex flex-col">
            {/* Single hero image with optional gallery badge */}
            <div className="card-image mb-6 opacity-0">
              <div
                className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl cursor-pointer group shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                onClick={() =>
                  setLightbox({ images: activity.gallery, index: 0, alt: activity.title })
                }
              >
                <Image
                  src={activity.gallery[0]}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  loading="lazy"
                />
                
                {/* Gradient overlay for text contrast (like bungalow-card) if there are badges */}
                {(activity.label || activity.gallery.length > 1) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                )}

                {/* Top left label (e.g., Pre-order) */}
                {activity.label && (
                  <span className="absolute top-4 left-4 z-10 bg-[#2F4A3F] text-[#D8C3A5] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {activity.label}
                  </span>
                )}

                {/* Bottom right View Gallery badge (like Bungalows) */}
                {activity.gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105">
                    <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="font-medium tracking-wide">View Gallery</span>
                  </div>
                )}
              </div>
            </div>

            {/* Text content */}
            <div className="card-text flex flex-col flex-grow opacity-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2F4A3F] font-medium mb-3 leading-tight">
                {activity.title}
              </h2>

              <div className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                {typeof activity.description === 'string' ? (
                  <p>{activity.description}</p>
                ) : activity.description && (
                  <PortableText 
                    value={activity.description} 
                    components={{
                      block: {
                        normal: ({ children }: any) => <p className="mb-2 last:mb-0">{children}</p>
                      }
                    }}
                  />
                )}
              </div>

              {activity.detail && (
                <p className="text-[#2F4A3F] font-semibold text-sm md:text-base mb-6">
                  {activity.detail}
                </p>
              )}

              <div>
                <a
                  href={activity.ctaLink}
                  {...(activity.ctaExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-block bg-[#2F4A3F] text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-90"
                >
                  {activity.ctaText}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

