import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg space-y-6">
          <p className="text-7xl font-serif text-primary/30">404</p>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The page you&apos;re looking for seems to have drifted away with the tide. 
            Let&apos;s get you back to calmer waters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/"
              className="inline-block text-base font-medium px-8 py-3 rounded-full bg-[#2d5a3d] text-white hover:bg-[#3d7a53] transition-colors duration-300"
            >
              Back to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-block text-base font-medium px-8 py-3 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
