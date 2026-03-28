'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'
import Lightbox from '@/components/lightbox'
import { Camera } from 'lucide-react'
const WA_NUMBER = '6282226945510'
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
import { PortableText } from '@/components/portable-text'
import { urlFor } from '@/lib/sanity.image'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'

export default function ExploreContent({ initialActivities }: { initialActivities?: any[] }) {
  const { t, language } = useLanguage()
  const { getCmsValue } = useCmsTranslation()
  const gridRef = useRef<HTMLDivElement>(null)

  const FALLBACK_ACTIVITIES = [
    {
      title: t.explorePage.activities.boatTour.title,
      description: t.explorePage.activities.boatTour.description,
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
      ctaText: t.explorePage.preBookNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin memesan Private Eco Boat Tour di Floating Paradise. Bisa share ketersediaan dan detailnya? Terima kasih!'
        : "Hi, I'd like to pre-book the Private Eco Boat Tour at Floating Paradise. Could you share availability and details? Thank you!"),
      ctaExternal: true,
    },
    {
      title: t.explorePage.activities.yoga.title,
      description: t.explorePage.activities.yoga.description,
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
      ctaText: t.explorePage.bookNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin booking sesi Open Air Sunset Yoga di Floating Paradise. Bisa share jadwal dan harganya? Terima kasih!'
        : "Hi, I'd like to book the Open Air Sunset Yoga session at Floating Paradise. Could you share availability and pricing? Thank you!"),
      ctaExternal: true,
    },
    {
      title: t.explorePage.activities.kayaking.title,
      description: t.explorePage.activities.kayaking.description,
      gallery: [
        '/image/Explore/Kayak, Lunch & Chill/kayak2.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak1.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak3.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak4.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak5.webp',
        '/image/Explore/Kayak, Lunch & Chill/kayak6.webp',
      ],
      ctaText: t.explorePage.reserveNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin reservasi Kayak, Lunch & Chill di Floating Paradise. Bisa share ketersediaan? Terima kasih!'
        : "Hi, I'd like to reserve Kayak, Lunch & Chill at Floating Paradise. Could you share availability? Thank you!"),
      ctaExternal: true,
    },
    {
      title: t.explorePage.activities.trekking.title,
      description: t.explorePage.activities.trekking.description,
      gallery: [
        '/image/Explore/Trekking Nyamplungan/Trekking1.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking2.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking3.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking4.webp',
        '/image/Explore/Trekking Nyamplungan/Trekking5.webp',
      ],
      ctaText: t.explorePage.bookNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin booking Trekking Nyamplungan di Floating Paradise. Bisa share detail dan ketersediaan? Terima kasih!'
        : "Hi, I'd like to book the Nyamplungan Trek at Floating Paradise. Could you share details and availability? Thank you!"),
      ctaExternal: true,
    },
    {
      title: t.explorePage.activities.cuisine.title,
      description: t.explorePage.activities.cuisine.description,
      gallery: [
        '/image/Explore/Tastes of Paradise/TP1.webp',
        '/image/Explore/Tastes of Paradise/TP2.webp',
        '/image/Explore/Tastes of Paradise/TP3.webp',
        '/image/Explore/Tastes of Paradise/TP4.webp',
        '/image/Explore/Tastes of Paradise/TP5.webp',
      ],
      ctaText: t.explorePage.enquireNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin tanya tentang pengalaman makan Tastes of Paradise di Floating Paradise. Terima kasih!'
        : "Hi, I'd like to enquire about the Tastes of Paradise dining experience at Floating Paradise. Thank you!"),
      ctaExternal: true,
    },
    {
      title: t.explorePage.activities.turtles.title,
      description: t.explorePage.activities.turtles.description,
      gallery: [
        '/image/Explore/Turtle Sanctuary/TS1.webp',
        '/image/Explore/Turtle Sanctuary/TS2.webp',
        '/image/Explore/Turtle Sanctuary/TS3.webp',
        '/image/Explore/Turtle Sanctuary/TS4.webp',
      ],
      ctaText: t.explorePage.bookNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin mengunjungi Turtle Sanctuary bersama Floating Paradise. Bisa share ketersediaan? Terima kasih!'
        : "Hi, I'd like to visit the Turtle Sanctuary with Floating Paradise. Could you share availability? Thank you!"),
      ctaExternal: true,
    },
    {
      title: 'Floating Merchandise',
      description: language === 'id' 
        ? 'Kaos katun bambu — lembut, ramah lingkungan, dan antibakteri. Setiap desain dibuat secara langsung oleh Astrid.'
        : 'Bamboo cotton t-shirts — soft, eco-friendly, and antibacterial. Each design handmade by Astrid herself.',
      gallery: ['/image/Explore/floating-merchandise/floating-merchandise.png'],
      detail: language === 'id' ? 'Rp 180,000 · Ukuran S–XXL' : 'Rp 180,000 · Sizes S–XXL',
      label: t.explorePage.preOrder,
      ctaText: t.explorePage.preOrderNow,
      ctaLink: waLink(language === 'id'
        ? 'Halo, saya ingin pre-order merchandise Floating Paradise. Bisa share pilihan yang tersedia? Terima kasih!'
        : "Hi, I'd like to pre-order Floating Paradise merchandise. Could you share the available options? Thank you!"),
      ctaExternal: true,
    },
  ]

  // Always use FALLBACK_ACTIVITIES as base (content from WebEdit2026 translations)
  // CMS data only supplements images when available
  const displayActivities = FALLBACK_ACTIVITIES.map((fallback, index) => {
    const cmsActivity = initialActivities?.[index]
    return {
      ...fallback,
      // Only override gallery with CMS image if available
      gallery: cmsActivity?.heroImage ? [urlFor(cmsActivity.heroImage).url(), ...fallback.gallery.slice(1)] : fallback.gallery,
    }
  });

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
                    <span className="font-medium tracking-wide">{t.explorePage.viewGallery}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Text content */}
            <div className="card-text flex flex-col flex-grow opacity-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2F4A3F] font-medium mb-3 leading-tight">
                {activity.title}
              </h2>

              <div className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 flex-grow text-justify">
                {typeof activity.description === 'string' ? (
                  activity.description.includes('\n') ? (
                    activity.description.split('\n').filter((p: string) => p.trim()).map((paragraph: string, pIdx: number) => (
                      <p key={pIdx} className="mb-3 last:mb-0">{paragraph}</p>
                    ))
                  ) : (
                    <p>{activity.description}</p>
                  )
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
                {activity.ctaExternal ? (
                  <a
                    href={activity.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#2F4A3F] text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-90"
                  >
                    {activity.ctaText}
                  </a>
                ) : (
                  <a
                    href={activity.ctaLink}
                    className="inline-block bg-[#2F4A3F] text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-90"
                  >
                    {activity.ctaText}
                  </a>
                )}
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

