'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useLanguage } from '@/lib/i18n/language-context'
import { CaretDown, MagnifyingGlass, WhatsappLogo } from '@phosphor-icons/react'
import { useWhatsAppNumbers } from '@/components/site-settings-provider'

// Category display config (icon + translation key for title)
const CATEGORIES = [
  { key: 'accommodationFaqs', icon: '🏠', titleKey: 'accommodation' },
  { key: 'foodFaqs', icon: '🍽️', titleKey: 'food' },
  { key: 'bookingFaqs', icon: '💳', titleKey: 'booking' },
  { key: 'gettingHereFaqs', icon: '🚗', titleKey: 'gettingHere' },
  { key: 'activitiesFaqs', icon: '🏄', titleKey: 'activities' },
] as const

// Category title translations (kept lightweight — no CMS needed for these labels)
const categoryTitles: Record<string, { en: string; id: string }> = {
  accommodation: { en: 'Accommodation & Facilities', id: 'Akomodasi & Fasilitas' },
  food: { en: 'Food & Dining', id: 'Makanan & Restoran' },
  booking: { en: 'Booking & Payment', id: 'Booking & Pembayaran' },
  gettingHere: { en: 'Getting Here & Around', id: 'Menuju & Berkeliling' },
  activities: { en: 'Activities & Experiences', id: 'Aktivitas & Pengalaman' },
}

interface CmsFaqItem {
  question?: string
  question_id?: string
  answer?: string
  answer_id?: string
}

interface FaqClientProps {
  faqData: Record<string, CmsFaqItem[]> | null
}

export default function FaqClient({ faqData }: FaqClientProps) {
  const { t, language } = useLanguage()
  const { general: waNumber } = useWhatsAppNumbers()
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const isId = language === 'id'

  const faqLabels = t.faq as {
    title: string
    subtitle: string
    searchPlaceholder: string
    noResults: string
    stillHaveQuestions: string
    stillHaveQuestionsDesc: string
    contactUs: string
  }

  // Resolve bilingual FAQ items into display-ready format
  const resolvedCategories = useMemo(() => {
    if (!faqData) return []

    return CATEGORIES.map(({ key, icon, titleKey }) => {
      const items = (faqData[key] || [])
        .map((item) => ({
          q: (isId && item.question_id ? item.question_id : item.question) || '',
          a: (isId && item.answer_id ? item.answer_id : item.answer) || '',
        }))
        .filter((item) => item.q && item.a)

      const title = isId
        ? categoryTitles[titleKey]?.id
        : categoryTitles[titleKey]?.en

      return { key, icon, title: title || titleKey, items }
    }).filter((cat) => cat.items.length > 0)
  }, [faqData, isId])

  // Filter FAQ items based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return resolvedCategories
    const q = searchQuery.toLowerCase()
    return resolvedCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [resolvedCategories, searchQuery])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  )

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-primary pt-48 pb-32 px-4 sm:px-6 lg:px-8 relative z-10 w-full rounded-b-[2.5rem]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight">
            {faqLabels.title}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/90 font-light">
            {faqLabels.subtitle}
          </p>
        </div>
      </section>

      {/* Search + FAQ Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-12">
            <MagnifyingGlass
              size={22}
              weight="light"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={faqLabels.searchPlaceholder}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F5EFE4] border-0 text-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>

          {/* FAQ Categories */}
          {totalResults === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">{faqLabels.noResults}</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredCategories.map((category) => (
                <div key={category.key}>
                  {/* Category Header */}
                  <h2 className="flex items-center gap-3 font-serif text-2xl md:text-3xl text-foreground font-medium mb-5">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </h2>

                  {/* Accordion Items */}
                  <div className="space-y-2">
                    {category.items.map((item, idx) => {
                      const itemId = `${category.key}-${idx}`
                      const isOpen = openItems.has(itemId)

                      return (
                        <div
                          key={itemId}
                          className="bg-[#F5EFE4] rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-md"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left group"
                            aria-expanded={isOpen}
                          >
                            <span className="text-lg font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
                              {item.q}
                            </span>
                            <CaretDown
                              size={22}
                              weight="bold"
                              className={`text-primary shrink-0 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Answer Panel */}
                          <div
                            className={`grid transition-all duration-300 ease-in-out ${
                              isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="px-6 pb-5 text-foreground/80 leading-relaxed text-[17px]">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center bg-[#F5EFE4] rounded-3xl py-12 px-6">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-medium mb-3">
              {faqLabels.stillHaveQuestions}
            </h3>
            <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
              {faqLabels.stillHaveQuestionsDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${language}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                {faqLabels.contactUs}
              </Link>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
