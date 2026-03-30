/**
 * Tripla Booking System — Shared URL Constants
 *
 * Floating Paradise's Tripla code: 019c5054-aa76-72af-8207-e3dd1c280fa3
 * All external booking links should open in a new tab with rel="noopener noreferrer".
 *
 * ── Discount Structure ──────────────────────────────────────────────
 *
 * OTA published rates (Booking.com / Agoda / etc.):
 *   Sunrise Bungalow:  Rp 1,125,000 – Rp 1,850,000
 *   Sunset Bungalow:   Rp   990,000 – Rp 1,620,000
 *   Bayside Bungalow:  Rp 1,900,000 – Rp 2,600,000
 *
 * Discount 1 — Direct Booking (configured in Tripla dashboard, NOT in code):
 *   All prices shown via the Tripla widget already reflect 10% below OTA rate.
 *   No frontend logic required — this is handled natively by Tripla.
 *
 * Discount 2 — Local Bank Transfer (promo code fallback):
 *   Code: LOKAL10 — additional 10% off the Tripla direct price.
 *   Combined effect: ~20% total discount vs OTA rate.
 *   Distributed offline / via WhatsApp only — no on-site promotion.
 *   NOTE: If Tripla confirms native conditional discount by payment method,
 *         this promo code system will be removed and replaced with native config.
 */

export const TRIPLA_CODE = '019c5054-aa76-72af-8207-e3dd1c280fa3'

export const TRIPLA_FACILITY_ID = '8558'

/** Room Type IDs — must match Tripla dashboard configuration */
export const TRIPLA_ROOM_IDS = {
  sunrise: '36939',
  sunset:  '36940',
  bayside: '36941',
} as const

export type RoomKey = keyof typeof TRIPLA_ROOM_IDS

/** Main room booking page (generic — shows all rooms) */
export const TRIPLA_BOOKING_URL = `https://triplabot-production.tripla.ai/booking/result?code=${TRIPLA_CODE}`

/** Generate a room-specific Tripla booking URL */
export function getTriplaRoomUrl(roomKey: RoomKey): string {
  const roomId = TRIPLA_ROOM_IDS[roomKey]
  return `${TRIPLA_BOOKING_URL}&room_type_ids[]=${roomId}`
}

/** Extras / add-on services page (boat tickets, kayak, trekking, etc.) */
export const TRIPLA_EXTRAS_URL = `${TRIPLA_BOOKING_URL}&type=extra_services`

// LOKAL10 — local guest discount, distributed via offline/WhatsApp only
export const PROMO_CODE_LOCAL = 'LOKAL10'
export const PROMO_DISCOUNT_PERCENT = 10

