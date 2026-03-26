'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
// LOKAL10 — local guest discount, distributed via offline/WhatsApp only
import { PROMO_CODE_LOCAL, PROMO_DISCOUNT_PERCENT } from '@/lib/tripla'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [promoInput, setPromoInput] = useState('')
  const [promoStatus, setPromoStatus] = useState<'idle' | 'valid' | 'invalid'>('idle')

  // LOKAL10 — local guest discount, distributed via offline/WhatsApp only
  const validatePromo = useCallback(() => {
    const code = promoInput.trim().toUpperCase()
    if (!code) {
      setPromoStatus('idle')
      return
    }
    setPromoStatus(code === PROMO_CODE_LOCAL ? 'valid' : 'invalid')
  }, [promoInput])

  // Reset promo state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPromoInput('')
      setPromoStatus('idle')
    }
  }, [isOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // When modal opens, try to move the Tripla chatbot widget into our mount point
  useEffect(() => {
    if (!isOpen || !mountRef.current) return

    // Try to trigger the Tripla chatbot by finding its button
    const timer = setTimeout(() => {
      // Look for the Tripla chatbot button and click it
      const triplaBtn = document.querySelector<HTMLElement>(
        '[class*="triplabot"] button, [id*="triplabot"] button, .triplabot-chatbot-button'
      )
      if (triplaBtn) {
        triplaBtn.click()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Book your stay"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-[95vw] max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50/80">
              <h2 className="font-serif text-xl font-bold text-[#2F4A3F]">
                Book Your Stay
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800"
                aria-label="Close booking"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tripla widget mount point */}
            <div className="p-6" ref={mountRef}>
              <div 
                id="tripla-widget-mount"
                className="w-full"
                aria-label="Booking widget"
              />
              <p className="text-center text-sm text-gray-500 mt-4">
                Loading booking system...
              </p>

              {/* ── Promo code input ─────────────────────────────── */}
              {/* LOKAL10 — local guest discount, distributed via offline/WhatsApp only */}
              {/* NOTE: If Tripla confirms native conditional discount by payment method, */}
              {/*        this promo code field will be removed and replaced with native config. */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value)
                      if (promoStatus !== 'idle') setPromoStatus('idle')
                    }}
                    onBlur={validatePromo}
                    onKeyDown={(e) => { if (e.key === 'Enter') validatePromo() }}
                    placeholder="Kode khusus"
                    className="flex-1 text-xs px-3 py-2 rounded border border-gray-200 bg-gray-50/50 text-gray-500 placeholder:text-[#999] focus:outline-none focus:border-[#2F4A3F]/30 transition-colors"
                    style={{ fontSize: '12px' }}
                    aria-label="Kode khusus"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="button"
                    onClick={validatePromo}
                    className="text-xs px-3 py-2 rounded border border-gray-200 text-[#999] hover:text-[#2F4A3F] hover:border-[#2F4A3F]/30 transition-colors"
                    style={{ fontSize: '12px' }}
                  >
                    Apply
                  </button>
                </div>

                {/* Validation feedback — minimal */}
                <AnimatePresence mode="wait">
                  {promoStatus === 'valid' && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-[11px] text-[#2F4A3F]"
                    >
                      <Check className="w-3 h-3" />
                      {PROMO_DISCOUNT_PERCENT}% discount — mention this code when confirming via WhatsApp
                    </motion.p>
                  )}
                  {promoStatus === 'invalid' && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-2 text-[11px] text-[#999]"
                    >
                      Code not recognised
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
