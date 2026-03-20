'use client'

import { useEffect, useRef } from 'react'

/**
 * TriplaWidget
 * 
 * Tripla is a 3rd-party booking widget loaded globally via <Script> in layout.tsx.
 * It auto-renders its booking bar wherever it finds a specific mount point.
 * 
 * This component creates that mount point so the widget renders INSIDE 
 * our Hero section instead of floating at a random position on the page.
 * 
 * Styling is handled via CSS overrides in globals.css (glassmorphism).
 */
export default function TriplaWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Nothing to imperitavely do — Tripla auto-detects and mounts to the DOM.
    // The container div with id="tripla-widget-mount" gives it an anchor.
  }, [])

  return (
    <div
      ref={containerRef}
      id="tripla-widget-mount"
      className="w-full max-w-3xl mx-auto"
      aria-label="Booking widget"
    />
  )
}
