/**
 * Lightweight analytics helper — calls window.gtag directly.
 * Replaces @next/third-parties/google sendGAEvent to avoid bundling
 * the third-party package in every component that tracks events.
 *
 * GA4 script is loaded lazily via next/script in layout.tsx.
 * Events queued before GA loads are pushed to dataLayer and replayed.
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (typeof window === 'undefined') return

  // If gtag is loaded, fire immediately
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
    return
  }

  // Otherwise, queue in dataLayer (GA will replay on load)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })
}
