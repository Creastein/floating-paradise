// Contact Information
// Update these variables when switching to the new floating business number.

// Main business WhatsApp number (used for all general inquiries, bookings, and boat tickets)
export const WA_GENERAL = '6282226945510'
export const WA_GENERAL_DISPLAY = '+62 822 2694 5510'

// Astrid's personal WhatsApp number (used specifically for Yoga Retreat inquiries)
export const WA_ASTRID = '6282226945510'
export const WA_ASTRID_DISPLAY = '+62 822 2694 5510'

// Yoga retreat proper name (not translated)
export const YOGA_RETREAT_NAME = 'The Art of Floating'

// Base URL for SEO absolute paths
export const BASE_URL = 'https://floatingparadise.id'

// Helper function to generate a WhatsApp wa.me link with a pre-filled message
export const getWhatsAppLink = (number: string, message: string = '') => {
  if (!message) return `https://wa.me/${number}`
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
