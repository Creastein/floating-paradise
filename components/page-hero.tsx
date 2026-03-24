"use client"

import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  fullHeight?: boolean
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = '/hero-island.jpg',
  fullHeight = false,
}: PageHeroProps) {
  return (
    <div className={`relative ${fullHeight ? 'h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] w-full overflow-hidden' : 'h-[60vh] min-h-[400px]'} flex flex-col items-center justify-center text-center overflow-hidden`}>
      {/* Background Image with zoom-out entrance */}
      <div className="absolute inset-0 z-0 animate-hero-zoom">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content with fade-up entrance */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-white animate-hero-text-reveal">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-hero-subtitle-reveal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
