import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand - Left */}
          <div className="flex-1 text-center md:text-left">
            <Link href="/" className="font-serif text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="text-primary-foreground">✦</span>
              Floating Paradise
            </Link>
          </div>

          {/* Quick Links - Center */}
          <div className="flex-1">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
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
                <Link href="/getting-here" className="opacity-90 hover:opacity-100 transition-opacity">
                  Getting Here
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* WhatsApp / Contact - Right */}
          <div className="flex-1 flex justify-center md:justify-end">
            <a 
              href="https://wa.me/6282226945510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full hover:bg-muted transition-colors font-medium text-sm"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80 gap-4">
            <p>&copy; {new Date().getFullYear()} Floating Paradise. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
