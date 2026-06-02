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
 * Server Component - renders the hero image as static HTML so the browser
 * discovers it immediately. The CMS image uses a high-resolution Sanity
 * transform so the full-screen hero stays sharp on desktop and HiDPI screens.
 */
export default function HeroSection({ homepage, locale = 'en' }: HeroSectionProps) {
  const image = homepage?.heroImage

  const heroImage = image
    ? urlFor(image).width(2400).format('webp').quality(75).url()
    : "/hero-img.webp"

  const t = locale === 'id' ? id : en;

  // CMS fields: heroTitle (EN), heroTitle_id (ID) - flat strings.
  const title = locale === 'id'
    ? (homepage?.heroTitle_id || homepage?.heroTitle || t.hero.defaultTitle)
    : (homepage?.heroTitle || t.hero.defaultTitle);
  const subtitle = locale === 'id'
    ? (homepage?.heroSubtitle_id || homepage?.heroSubtitle || t.hero.defaultSubtitle)
    : (homepage?.heroSubtitle || t.hero.defaultSubtitle);

  return (
    <section className="relative h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Floating Paradise - eco-luxury retreat above the sea"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      <HeroAnimations>
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
