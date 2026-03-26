"use client"

import { createContext, useContext, ReactNode } from 'react'

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
