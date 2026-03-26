"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'
import { TRIPLA_BOOKING_URL } from '@/lib/tripla'
import { urlFor } from '@/lib/sanity.image'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'

type HeroSectionProps = {
  homepage?: any;
}

export default function HeroSection({ homepage }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()
  const { getCmsValue } = useCmsTranslation()

  const title = getCmsValue(homepage, 'heroTitle', t.hero.defaultTitle)
  const subtitle = getCmsValue(homepage, 'heroSubtitle', t.hero.defaultSubtitle)
  const image = homepage?.heroImage

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: image moves slower than scroll (scrub with smooth lag)
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }

      // Fade out content on scroll (scrub with smooth lag)
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '60% top',
            scrub: 1.2,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] w-full overflow-hidden">
      {/* Parallax Background Image */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={image ? urlFor(image).url() : "/hero-img.jpg"}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      </div>

      {/* Animated Content */}
      <div 
        ref={contentRef}
        className="absolute top-0 left-0 right-0 h-[100vh] min-h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 will-change-transform"
      >
        <div className="max-w-2xl space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white text-pretty leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            {subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <a 
              href={TRIPLA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-skew inline-block text-base font-medium px-10 py-4 rounded-full bg-[#2d5a3d] text-white hover:text-[#2d5a3d] transition-colors duration-300 drop-shadow-xl border border-transparent hover:border-[#2d5a3d]"
            >
              <span className="relative z-10">{t.hero.checkAvailability}</span>
            </a>
          </motion.div>
        </div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="absolute bottom-12 text-white/70"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  )
}
