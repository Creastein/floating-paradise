'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * BookingModal
 *
 * Full-screen modal that contains the Tripla booking search bar.
 * When mounted, the Tripla SDK detects the mount point and renders
 * its booking interface inside this modal.
 */
export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const mountRef = useRef<HTMLDivElement>(null)

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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
