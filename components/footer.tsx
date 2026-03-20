"use client"

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for all footer elements with the .footer-elem class
      const elements = gsap.utils.toArray('.footer-elem')
      if (elements.length > 0) {
        gsap.fromTo(elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#1a2b22] text-primary-foreground py-20 lg:py-24 overflow-hidden relative border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Contact (Span 4) */}
          <div className="footer-elem lg:col-span-5 space-y-6">
            <Link href="/" className="font-serif text-3xl font-bold flex items-center gap-2 mb-6 text-[#e8e4db]">
              <span className="text-[#c1a06a]">✦</span>
              Floating Paradise
            </Link>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-sm">
              A solar-powered eco-luxury guesthouse gracefully floating above the pristine reefs of Karimunjawa, Indonesia.
            </p>
            <div className="pt-4 space-y-3">
              <a href="mailto:hello@floatingparadise.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors group w-fit">
                <Mail size={18} className="text-[#c1a06a] group-hover:scale-110 transition-transform" />
                <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  hello@floating-paradise.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="text-[#c1a06a] mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Karimunjawa National Park,<br />Jepara, Central Java, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="footer-elem lg:col-span-3 lg:col-start-7 text-center md:text-left">
            <h4 className="font-serif text-xl mb-6 text-[#e8e4db]">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Bungalows', 'Explore', 'Yoga Retreat', 'Getting Here', 'About Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-primary-foreground/70 hover:text-white transition-colors text-lg relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Newsletter (Span 3) */}
          <div className="footer-elem lg:col-span-3 text-center md:text-left">
            <h4 className="font-serif text-xl mb-6 text-[#e8e4db]">Connect</h4>
            <div className="flex justify-center md:justify-start gap-5 mb-10">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="footer-elem border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50 gap-4">
            <p>&copy; {new Date().getFullYear()} Floating Paradise. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-white transition-colors text-[11px] tracking-[0.2em] font-mono uppercase"
              >
                BACK TO TOP ^
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
