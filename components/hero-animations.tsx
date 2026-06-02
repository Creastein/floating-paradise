"use client"

import { ChevronDown } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/language-context'

type HeroAnimationsProps = {
  children: React.ReactNode;
}

function trackEvent(eventName: string, params: Record<string, string>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }
}

export default function HeroAnimations({ children }: HeroAnimationsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  const { t } = useLanguage()

  // Lazy-load GSAP only on desktop (>= 768px) to eliminate TBT on mobile.
  // Mobile devices: CSS animations in globals.css handle all effects — zero JS needed.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)').matches
    setIsDesktop(desktop)

    // Skip GSAP entirely on mobile — prevents forced reflow & reduces TBT by ~200ms
    if (!desktop) return

    let ctx: any
    import('@/lib/gsap-init').then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)

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
      {/* Parallax wrapper — desktop-only GSAP overlay */}
      {isDesktop && (
        <div
          ref={imageRef}
          className="absolute inset-0 will-change-transform pointer-events-none"
        />
      )}

      {/* Animated Content — always visible, CSS animations handle entrance */}
      <div 
        ref={contentRef}
        className="absolute top-0 left-0 right-0 h-[100vh] min-h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 will-change-transform"
      >
        <div className="max-w-2xl space-y-6">
          {children}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <button 
              type="button"
              onClick={() => {
                trackEvent('book_now_click', { action: 'clicked', label: 'hero_section' })
                if (typeof window !== 'undefined' && (window as any).__openTriplaBooking) (window as any).__openTriplaBooking()
              }}
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
