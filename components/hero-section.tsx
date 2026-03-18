import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-island.jpg"
        alt="Floating Paradise Island"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-pretty leading-tight">
            Floating Paradise
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
            for the relaxed adventurer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="#check-availability"
              className="px-8 py-3 bg-primary text-primary-foreground hover:shadow-lg transition-all rounded-lg font-semibold"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
