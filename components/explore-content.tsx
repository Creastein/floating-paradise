'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'
import Lightbox from '@/components/lightbox'
import { Camera } from 'lucide-react'

interface Activity {
  title: string
  description: string
  gallery: string[]
  detail?: string
  label?: string
  ctaText: string
  ctaLink: string
  ctaExternal: boolean
}

export default function ExploreContent({ activities }: { activities: Activity[] }) {
  const gridRef = useRef<HTMLDivElement>(null)

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
        {activities.map((activity, index) => (
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

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                {activity.description}
              </p>

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

