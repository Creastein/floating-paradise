"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { motion } from "framer-motion"

interface LanguageSwitcherProps {
  className?: string
  isSolid?: boolean
}

export default function LanguageSwitcher({ className = "", isSolid = true }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  // Adaptive styling based on nav state
  const bgClass = isSolid 
    ? "bg-muted/50 border-input" 
    : "backdrop-blur-xl bg-white/10 border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
    
  const textClass = isSolid
    ? "text-foreground"
    : "text-white"
    
  const indicatorClass = isSolid
    ? "bg-background shadow-sm border border-border"
    : "bg-white/20 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-white/30"

  return (
    <div className={`relative flex items-center ${className}`}>
      <button
        onClick={toggleLanguage}
        className={`relative flex items-center h-10 w-24 p-1 rounded-full border transition-colors duration-300 ${bgClass}`}
        aria-label="Toggle language"
      >
        {/* Animated indicator pill */}
        <motion.div
          className={`absolute h-8 w-11 rounded-full ${indicatorClass}`}
          initial={false}
          animate={{
            x: language === "en" ? 0 : 42,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
        
        {/* EN Option */}
        <div className={`relative z-10 flex items-center justify-center w-11 h-full text-xs font-bold leading-none select-none transition-colors duration-300 ${language === "en" ? (isSolid ? "text-primary" : "text-white") : (isSolid ? "text-foreground/50" : "text-white/60")}`}>
          <span>EN</span>
        </div>
        
        {/* ID Option */}
        <div className={`relative z-10 flex items-center justify-center w-11 h-full text-xs font-bold leading-none select-none transition-colors duration-300 ${language === "id" ? (isSolid ? "text-primary" : "text-white") : (isSolid ? "text-foreground/50" : "text-white/60")}`}>
          <span>ID</span>
        </div>
      </button>
    </div>
  )
}
