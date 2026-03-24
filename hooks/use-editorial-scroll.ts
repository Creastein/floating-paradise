"use client"

import { useRef, useEffect, RefObject } from 'react'
import { gsap } from '@/lib/gsap-init'

// ── Types ──────────────────────────────────────────────────────────

interface UseEditorialScrollOptions {
  /** Direction the heading slides in from. Default: 'left' (-x). */
  headingDirection?: 'left' | 'right'
}

interface UseEditorialScrollRefs {
  sectionRef: RefObject<HTMLDivElement | null>
  imageRef: RefObject<HTMLDivElement | null>
  textColumnRef: RefObject<HTMLDivElement | null>
  headingRef: RefObject<HTMLDivElement | null>
}

// ── Hook ───────────────────────────────────────────────────────────

/**
 * Shared GSAP ScrollTrigger animation hook used by editorial-style
 * sections (e.g. Astrid & Tono, Kejora Karimunjawa).
 *
 * Handles three animation layers:
 * 1. **Image reveal** — scale-down + unblur entrance.
 * 2. **Heading slide-in** — horizontal entrance from the specified direction.
 * 3. **Text scrub** — progressive opacity / blur linked to scroll position.
 */
export function useEditorialScroll(
  options: UseEditorialScrollOptions = {}
): UseEditorialScrollRefs {
  const { headingDirection = 'left' } = options

  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textColumnRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image reveal — scale-up from inside out + shadow grows
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            filter: 'blur(8px)',
            boxShadow: '0 0 0 rgba(0,0,0,0)',
          },
          {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            boxShadow: '0 25px 60px -12px rgba(0,0,0,0.3), 0 10px 25px -5px rgba(0,0,0,0.15)',
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // 2. Heading slide-in
      const xFrom = headingDirection === 'left' ? -50 : 50
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { x: xFrom, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // 3. Text scrub — editorial magazine-style progressive reveal
      if (textColumnRef.current) {
        const paragraphs = gsap.utils.toArray<HTMLElement>(
          '.scrub-text',
          textColumnRef.current
        )
        paragraphs.forEach((p) => {
          gsap.fromTo(
            p,
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
              },
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [headingDirection])

  return { sectionRef, imageRef, textColumnRef, headingRef }
}
