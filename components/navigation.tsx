'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from './language-switcher'
import { useLanguage } from '@/lib/i18n/language-context'
import { sendGAEvent } from '@next/third-parties/google'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const { t, language } = useLanguage()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== 'undefined') {
      const isHomePage = pathname === '/'
      const homeHeroHeight = Math.max(600, window.innerHeight)
      const subpageHeroHeight = Math.max(400, window.innerHeight * 0.6)
      const heroHeight = isHomePage ? homeHeroHeight : subpageHeroHeight
      setIsScrolled(latest > heroHeight * 0.8)
    }
  })

  const navItems = [
    { href: `/${language}`, label: t.nav.home },
    { href: `/${language}/bungalows`, label: t.nav.bungalows },
    { href: `/${language}/explore`, label: t.nav.explore },
    { href: `/${language}/yoga-retreat`, label: t.nav.yogaRetreat },
    { href: `/${language}/getting-here`, label: t.nav.gettingHere },
    { href: `/${language}/about`, label: t.nav.aboutUs },
    { href: `/${language}/contact`, label: t.nav.contact },
  ]

  const isSolid = isScrolled || isOpen

  const navBg = isSolid 
    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border border-t-0" 
    : "bg-transparent border-transparent"
    
  const textColor = isSolid 
    ? "text-foreground/80 hover:text-primary" 
    : "text-white hover:text-white/80 [text-shadow:_0_1px_4px_rgb(0_0_0_/_60%),_0_0px_2px_rgb(0_0_0_/_40%)]"
    
  const iconColor = isSolid 
    ? "text-foreground" 
    : "text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_60%)]"

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link 
              href={`/${language}`} 
              onClick={() => setIsOpen(false)}
              className="flex items-center transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="Floating Paradise"
                width={234}
                height={65}
                className={`h-[52px] md:h-[62px] w-auto transition-all duration-300 ${
                  isSolid ? '' : 'brightness-0 invert'
                }`}
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = item.href === `/${language}` 
                  ? pathname === `/${language}` || pathname === `/${language}/`
                  : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-base font-semibold transition-colors duration-300 pb-1 ${
                      isActive
                        ? isSolid
                          ? 'text-primary'
                          : 'text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_60%),_0_0px_2px_rgb(0_0_0_/_40%)]'
                        : textColor
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full ${
                          isSolid ? 'bg-primary' : 'bg-white'
                        }`}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
              <LanguageSwitcher isSolid={isSolid} className="mr-2" />
              
              <button
                type="button"
                onClick={() => { sendGAEvent('event', 'book_now_click', { action: 'clicked', label: 'navbar_desktop' }); if (typeof window !== 'undefined' && (window as any).__openTriplaBooking) (window as any).__openTriplaBooking(); }}
                className={`btn-skew font-semibold rounded-full px-6 transition-colors duration-300 border ${
                  isSolid 
                    ? 'border-transparent text-primary bg-primary text-primary-foreground hover:text-primary hover:border-primary hover:bg-transparent' 
                    : 'bg-white/15 backdrop-blur-md text-white border-white/30 hover:border-transparent hover:text-primary hover:bg-white'
                }`}
              >
                <span className="relative z-10">{t.nav.bookNow}</span>
              </button>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <LanguageSwitcher isSolid={isSolid} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-colors duration-300 ${iconColor}`}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 left-0 right-0 bg-background/98 backdrop-blur-xl z-40 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen px-6 pt-24 pb-8">
              <div className="flex flex-col gap-6 flex-grow">
                {navItems.map((item, i) => {
                  const isActive = item.href === `/${language}` 
                    ? pathname === `/${language}` || pathname === `/${language}/`
                    : pathname.startsWith(item.href)
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block text-3xl font-serif transition-colors py-2 border-b border-border/50 ${
                          isActive 
                            ? 'text-primary border-l-4 border-l-primary pl-4' 
                            : 'text-foreground hover:text-primary'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 mb-safe pb-8"
              >
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); sendGAEvent('event', 'book_now_click', { action: 'clicked', label: 'navbar_mobile' }); if (typeof window !== 'undefined' && (window as any).__openTriplaBooking) (window as any).__openTriplaBooking(); }}
                  className="btn-skew w-full text-lg rounded-xl h-14 border border-transparent hover:border-primary bg-primary text-primary-foreground hover:text-primary hover:bg-transparent transition-colors duration-300"
                >
                  <span className="relative z-10">{t.nav.bookNow}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
