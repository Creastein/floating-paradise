/**
 * Tripla Booking System — Shared URL Constants
 *
 * Floating Paradise's Tripla code: 019c5054-aa76-72af-8207-e3dd1c280fa3
 * All external booking links should open in a new tab with rel="noopener noreferrer".
 */

export const TRIPLA_CODE = '019c5054-aa76-72af-8207-e3dd1c280fa3'

/** Main room booking page */
export const TRIPLA_BOOKING_URL = `https://triplabot-production.tripla.ai/booking/result?code=${TRIPLA_CODE}`

/** Extras / add-on services page (boat tickets, kayak, trekking, etc.) */
export const TRIPLA_EXTRAS_URL = `${TRIPLA_BOOKING_URL}&type=extra_services`
