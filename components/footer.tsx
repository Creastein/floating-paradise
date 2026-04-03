"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'
import { useSiteSettings } from './site-settings-provider'
import { useLanguage } from '@/lib/i18n/language-context'

export default function Footer() {
  const settings = useSiteSettings()
  const footerRef = useRef<HTMLElement>(null)
  
  const { t, language } = useLanguage()

  useEffect(() => {
    let ctx: any
    import('@/lib/gsap-init').then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
      // Staggered reveal for all granular footer text and elements
      const elements = gsap.utils.toArray('.footer-text')
      if (elements.length > 0) {
        gsap.fromTo(elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }, footerRef)
    })

    return () => ctx?.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#1a2b22] text-primary-foreground py-20 lg:py-24 overflow-hidden relative border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Contact (Span 4) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href={`/${language}`} className="footer-text flex items-center mb-6 w-fit">
              <Image
                src="/logo.webp"
                alt="Floating Paradise"
                width={200}
                height={55}
                className="h-14 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="footer-text text-primary-foreground/70 text-lg leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="pt-4 space-y-3">
              <div className="footer-text">
                <a href={`mailto:${settings?.email || 'floatingparadise.legonlele@gmail.com'}`} className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors group w-fit">
                  <Mail size={18} className="text-[#c1a06a] group-hover:scale-110 transition-transform" />
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                    {settings?.email || 'floatingparadise.legonlele@gmail.com'}
                  </span>
                </a>
              </div>
              <div className="footer-text flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="text-[#c1a06a] mt-1 shrink-0" />
                <span className="leading-relaxed whitespace-pre-line">
                  {settings?.address || "Jalan Kapuran, Legon Lele,\nKarimunjawa – Jepara, Indonesia"}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="lg:col-span-3 lg:col-start-7 text-center md:text-left">
            <h4 className="footer-text font-serif text-xl mb-6 text-[#e8e4db] w-fit mx-auto md:mx-0">{t.footer.explore}</h4>
            <ul className="space-y-4">
              {[
                { label: t.nav.home, href: `/${language}` },
                { label: t.nav.bungalows, href: `/${language}/bungalows` },
                { label: t.nav.explore, href: `/${language}/explore` },
                { label: t.nav.yogaRetreat, href: `/${language}/yoga-retreat` },
                { label: t.nav.gettingHere, href: `/${language}/getting-here` },
                { label: t.nav.aboutUs, href: `/${language}/about` }
              ].map((item) => (
                <li key={item.href} className="footer-text">
                  <Link 
                    href={item.href} 
                    className="text-primary-foreground/70 hover:text-white transition-colors text-lg relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Newsletter (Span 3) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="footer-text font-serif text-xl mb-6 text-[#e8e4db] w-fit mx-auto md:mx-0">{t.footer.connect}</h4>
            <div className="flex justify-center md:justify-start gap-5 mb-10">
              {settings?.socialLinks ? (
                settings.socialLinks.map((link: any, i: number) => {
                  const p = link.platform?.toLowerCase() || ''
                  const isIg = p.includes('instagram') || p.includes('ig')
                  const isFb = p.includes('facebook') || p.includes('fb')
                  return (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${link.platform || 'social media'}`} className="footer-text p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all text-white">
                      {isIg ? <Instagram size={20} /> : isFb ? <Facebook size={20} /> : <span className="text-sm font-semibold">{link.platform || 'Link'}</span>}
                    </a>
                  )
                })
              ) : (
                <>
                  <a href="https://www.instagram.com/paradisefloating/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="footer-text p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all text-white">
                    <Instagram size={20} />
                  </a>
                  <a href="#" aria-label="Follow us on Facebook" className="footer-text p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all text-white">
                    <Facebook size={20} />
                  </a>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-12 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50 gap-4">
            <p className="footer-text">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
              <Link href="#" className="footer-text hover:text-white transition-colors">{t.footer.privacy}</Link>
              <Link href="#" className="footer-text hover:text-white transition-colors">{t.footer.terms}</Link>
              <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
              <button 
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="footer-text hover:text-white transition-colors text-[11px] tracking-[0.2em] font-mono uppercase"
              >
                {t.footer.backToTop}
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
