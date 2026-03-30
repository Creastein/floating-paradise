"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import en from "./translations/en.json"
import id from "./translations/id.json"

type Language = "en" | "id"
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const translations = { en, id }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLocale = "en" }: { children: React.ReactNode, initialLocale?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLocale)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Synchronize state from URL locale (e.g. after navigation completes)
    setLanguage(initialLocale)
    
    // Sync localStorage
    localStorage.setItem("fp-language", initialLocale)
  }, [initialLocale])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("fp-language", lang)
  }

  // Prevent hydration mismatch by rendering default (en) first, but 
  // context still provides selected language to children. 
  // We use isMounted mainly if we needed to wait for client render
  // but for translations it's usually fine to render and let it swap
  // if mismatch happens. Here context value updates immediately on client.

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Helper to pick CMS fields based on current language
export function useCmsTranslation() {
  const { language } = useLanguage()

  const getCmsValue = (doc: any, fieldBaseName: string, defaultValue: any = null) => {
    if (!doc) return defaultValue
    
    // For English (default), look for base field name
    if (language === "en") {
      return doc[fieldBaseName] || null
    }
    
    // For Indonesian, look for _id suffix, ONLY if it exists and is populated, 
    // otherwise fallback to base English field.
    const idField = `${fieldBaseName}_id`
    
    // Handle specific checks for arrays (like PortableText blocks) vs primitive types
    if (Array.isArray(doc[idField]) && doc[idField].length > 0) {
       return doc[idField]
    } else if (typeof doc[idField] === "string" && doc[idField].trim() !== "") {
       return doc[idField]
    } else if (doc[idField] !== undefined && doc[idField] !== null) {
       return doc[idField]
    }
    
    // Fallback to English
    return doc[fieldBaseName] || defaultValue
  }

  return { getCmsValue, language }
}
