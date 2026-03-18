import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-5xl font-bold mb-6 text-pretty">
          Ready for Your Paradise Escape?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Start planning your perfect island getaway today. From bungalows to yoga retreats, we have the ideal experience waiting for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-8 py-4 bg-secondary hover:bg-accent text-primary rounded-lg font-semibold transition-all transform hover:scale-105 text-center"
          >
            Book Your Stay
          </Link>
          <Link
            href="/explore"
            className="px-8 py-4 border-2 border-current hover:bg-primary-foreground/10 rounded-lg font-semibold transition-all"
          >
            Explore the Island
          </Link>
        </div>
      </div>
    </section>
  )
}
