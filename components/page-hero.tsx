import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = '/hero-island.jpg',
}: PageHeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
