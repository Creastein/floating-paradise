import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import HeroAnimations from './hero-animations'

import en from '@/lib/i18n/translations/en.json'
import id from '@/lib/i18n/translations/id.json'

type HeroSectionProps = {
  homepage?: any;
  locale?: string;
}

/**
 * Server Component — renders the hero image as static HTML so the browser
 * discovers it immediately (no JS required). The `priority` prop on <Image>
 * tells Next.js to emit a <link rel="preload"> in <head>.
 *
 * Client-side GSAP parallax and framer-motion text animations are isolated
 * in <HeroAnimations>, which hydrates independently.
 *
 * Performance: two image URLs are generated — a small mobile version (640px)
 * and a full desktop version (1200px). This significantly reduces LCP on mobile.
 */
export default function HeroSection({ homepage, locale = 'en' }: HeroSectionProps) {
  const image = homepage?.heroImage

  // Mobile-optimized: smaller, lower quality to reduce LCP on mobile
  const heroImageMobile = image
    ? urlFor(image).width(828).format('webp').quality(55).url()
    : "/hero-img.webp"

  // Desktop: higher quality, full resolution
  const heroImageDesktop = image
    ? urlFor(image).width(1920).format('webp').quality(65).url()
    : "/hero-img.webp"

  // Get translations based on locale
  const t = locale === 'id' ? id : en;
  
  // Extract text from CMS or fallback to translation
  const titleObj = homepage?.heroTitle || {};
  const subtitleObj = homepage?.heroSubtitle || {};
  const title = titleObj[locale] || t.hero.defaultTitle;
  const subtitle = subtitleObj[locale] || t.hero.defaultSubtitle;

  return (
    <section className="relative h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] w-full overflow-hidden">
      {/* Static Background Image — rendered server-side for instant LCP */}
      <div className="absolute inset-0">
        <Image
          src={heroImageMobile}
          alt="Floating Paradise — eco-luxury retreat above the sea"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="(max-width: 828px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={65}
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      {/* Client-side animations (parallax + text entrance) */}
      <HeroAnimations heroImageUrl={heroImageDesktop}>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white text-pretty leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-md">
          {subtitle}
        </p>
      </HeroAnimations>
    </section>
  )
}
