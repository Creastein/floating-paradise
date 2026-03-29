"use client"

import { createContext, useContext, ReactNode } from 'react'
import { WA_GENERAL, WA_ASTRID } from '@/lib/constants'

const SiteSettingsContext = createContext<any>(null)

export function SiteSettingsProvider({ 
  children, 
  settings 
}: { 
  children: ReactNode, 
  settings: any 
}) {
  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  )
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext)
}

/**
 * Returns WhatsApp numbers from CMS (Site Settings) with hardcoded fallbacks.
 * - `general`: main business number (all inquiries except yoga)
 * - `yogaRetreat`: Astrid's number for yoga retreat inquiries
 * - `getLink(number, message?)`: generates a wa.me link
 * - `generalDisplay`: formatted display string for the general number
 */
export function useWhatsAppNumbers() {
  const settings = useSiteSettings()

  const general = (settings?.whatsappNumber || WA_GENERAL).replace(/\D/g, '')
  const yogaRetreat = (settings?.yogaRetreatWhatsapp || WA_ASTRID).replace(/\D/g, '')

  const getLink = (number: string, message: string = '') => {
    if (!message) return `https://wa.me/${number}`
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

  // Format: +62 822 2694 5510
  const formatDisplay = (num: string) => {
    if (num.startsWith('62') && num.length >= 10) {
      const rest = num.slice(2)
      return `+62 ${rest.slice(0, 3)} ${rest.slice(3, 7)} ${rest.slice(7)}`
    }
    return `+${num}`
  }

  return {
    general,
    yogaRetreat,
    generalDisplay: formatDisplay(general),
    yogaRetreatDisplay: formatDisplay(yogaRetreat),
    getLink,
  }
}
