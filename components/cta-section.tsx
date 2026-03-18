import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-5xl font-bold mb-6 text-pretty">
          Only 3 rooms. Book direct.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="#check-availability"
            className="px-8 py-4 bg-white text-primary hover:shadow-lg rounded-lg font-semibold transition-all text-center"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  )
}
