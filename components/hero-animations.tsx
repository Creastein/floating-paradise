"use client"

import { ChevronDown } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'
import { sendGAEvent } from '@next/third-parties/google'

type HeroAnimationsProps = {
  homepage?: any;
  heroImageUrl: string;
}

export default function HeroAnimations({ homepage, heroImageUrl }: HeroAnimationsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [gsapReady, setGsapReady] = useState(false)

  const { t } = useLanguage()
  const { getCmsValue } = useCmsTranslation()

  const title = getCmsValue(homepage, 'heroTitle', t.hero.defaultTitle)
  const subtitle = getCmsValue(homepage, 'heroSubtitle', t.hero.defaultSubtitle)

  // Lazy-load GSAP only after hydration to reduce TBT
  useEffect(() => {
    let ctx: any
    import('@/lib/gsap-init').then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)
      setGsapReady(true)

      const parentSection = sectionRef.current?.closest('section')

      ctx = gsap.context(() => {
        // Parallax: image moves slower than scroll
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: parentSection,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        }

        // Fade out content on scroll
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            opacity: 0,
            y: 80,
            ease: 'none',
            scrollTrigger: {
              trigger: parentSection,
              start: 'top top',
              end: '60% top',
              scrub: 1.2,
            },
          })
        }
      }, parentSection || undefined)
    })

    return () => ctx?.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      {/* Parallax wrapper — overlays the server-rendered image once GSAP loads */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform pointer-events-none"
        style={{ opacity: gsapReady ? 1 : 0 }}
      />

      {/* Animated Content */}
      <div 
        ref={contentRef}
        className="absolute top-0 left-0 right-0 h-[100vh] min-h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 will-change-transform"
      >
        <div className="max-w-2xl space-y-6">
          <h1 
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white text-pretty leading-tight drop-shadow-lg"
          >
            {title}
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            {subtitle}
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <button 
              type="button"
              onClick={() => { sendGAEvent('event', 'book_now_click', { action: 'clicked', label: 'hero_section' }); if (typeof window !== 'undefined' && (window as any).__openTriplaBooking) (window as any).__openTriplaBooking(); }}
              className="btn-skew inline-block text-base font-medium px-10 py-4 rounded-full bg-[#2d5a3d] text-white hover:text-[#2d5a3d] transition-colors duration-300 drop-shadow-xl border border-transparent hover:border-[#2d5a3d]"
            >
              <span className="relative z-10">{t.hero.checkAvailability}</span>
            </button>
          </div>
        </div>

        {/* Bouncing Scroll Indicator — CSS animation only */}
        <div
          className="absolute bottom-12 text-white/70 animate-bounce"
          style={{ animationDelay: '1.5s' }}
        >
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </div>
  )
}
