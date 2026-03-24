// ── Types ──────────────────────────────────────────────────────────

export interface CarHireOption {
  city: string
  price: string
  duration: string
}

export interface BoatPrice {
  label: string
  price: string
}

export interface ScheduleEntry {
  day: string
  time: string
}

export interface TransportOption {
  image: string
  imageAlt: string
  title: string
  details: string[]
  note?: string
}

// ── Static Data ────────────────────────────────────────────────────

export const CAR_HIRE_OPTIONS: CarHireOption[] = [
  { city: 'Semarang', price: 'Rp 600,000', duration: '~2.5 hours to Jepara' },
  { city: 'Yogyakarta', price: 'Rp 1,200,000', duration: '~5 hours to Jepara' },
  { city: 'Malang', price: 'Rp 3,200,000', duration: '~8 hours to Jepara' },
]

export const BOAT_PRICES: BoatPrice[] = [
  { label: 'Executive Class', price: 'Rp 300,000' },
  { label: 'VIP Class', price: 'Rp 350,000' },
]

export const BOAT_SCHEDULE: ScheduleEntry[] = [
  { day: 'Monday – Thursday', time: '9:00 am' },
  { day: 'Friday', time: '9:30 am' },
  { day: 'Saturday', time: '10:00 am' },
]

export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    image: '/image/getting-here/gh1.webp',
    imageAlt: 'Local Jeep Taxi',
    title: 'Taxi Service',
    details: [
      'Local 4x4 jeep taxis with qualified drivers are available at the harbour and village.',
      'Harbour to Floating: <strong>Rp 150,000</strong> per trip, following the island\u0027s drivers association prices.',
    ],
  },
  {
    image: '/image/getting-here/gh5.webp',
    imageAlt: 'Scooters for rent',
    title: 'Scooter Rental',
    details: [
      'Automatic scooter: <strong>Rp 100,000 per day</strong>, helmets included. The most flexible way to explore beaches, viewpoints, and village life.',
    ],
    note: 'Passport or cash deposit and liability form required. Riding lessons available on request.',
  },
]
