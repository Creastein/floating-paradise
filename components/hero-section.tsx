import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import HeroAnimations from './hero-animations'

type HeroSectionProps = {
  homepage?: any;
}

/**
 * Server Component — renders the hero image as static HTML so the browser
 * discovers it immediately (no JS required). The `priority` prop on <Image>
 * tells Next.js to emit a <link rel="preload"> in <head>.
 *
 * Client-side GSAP parallax and framer-motion text animations are isolated
 * in <HeroAnimations>, which hydrates independently.
 */
export default function HeroSection({ homepage }: HeroSectionProps) {
  const image = homepage?.heroImage
  const heroImageUrl = image
    ? urlFor(image).width(1920).format('webp').quality(75).url()
    : "/hero-img.webp"

  return (
    <section className="relative h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] w-full overflow-hidden">
      {/* Static Background Image — rendered server-side for instant LCP */}
      <div className="absolute inset-0">
        <Image
          src={heroImageUrl}
          alt="Floating Paradise — eco-luxury retreat above the sea"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      {/* Client-side animations (parallax + text entrance) */}
      <HeroAnimations homepage={homepage} heroImageUrl={heroImageUrl} />
    </section>
  )
}
