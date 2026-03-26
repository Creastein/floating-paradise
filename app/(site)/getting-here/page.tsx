import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'
import { FadeIn } from '@/components/ui/fade-in'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppIcon from '@/components/icons/whatsapp-icon'
import BoatTicketForm from '@/components/boat-ticket-form'
import {
  CAR_HIRE_OPTIONS,
  BOAT_PRICES,
  BOAT_SCHEDULE,
  TRANSPORT_OPTIONS,
} from '@/data/getting-here-data'

import GettingHereClient from './getting-here-client'

export const metadata = {
  title: 'Getting Here | Floating Paradise',
  description: 'Your journey to Karimunjawa and Floating Paradise — step by step. Fast boat schedules, private transfers, and arrival information.',
}

export default function GettingHerePage() {
  return <GettingHereClient />
}
