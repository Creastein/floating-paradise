import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary-foreground">✦</span>
              Floating Paradise
            </h3>
            <p className="text-sm opacity-90">
              A handcrafted guesthouse above the sea. Solar-powered. Intentional. Karimunjawa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bungalows" className="opacity-90 hover:opacity-100 transition-opacity">
                  Bungalows
                </Link>
              </li>
              <li>
                <Link href="/explore" className="opacity-90 hover:opacity-100 transition-opacity">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/yoga-retreat" className="opacity-90 hover:opacity-100 transition-opacity">
                  Yoga Retreat
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Karimunjawa Island, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+62 (0) xxx xxxx</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>hello@floatingparadise.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Stay Updated</h4>
            <p className="text-sm opacity-90 mb-3">
              Subscribe for travel tips and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-primary rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Floating Paradise. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
