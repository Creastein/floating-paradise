"use client"

import Image from 'next/image'
import { Check } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { getTriplaRoomUrl, TRIPLA_ROOM_IDS, type RoomKey } from '@/lib/tripla'
import { useLanguage } from '@/lib/i18n/language-context'

interface BungalowCardProps {
  title: string
  image: string
  description: string
  features: string[]
  roomKey: RoomKey
}

export default function BungalowCard({
  title,
  image,
  description,
  features,
  roomKey,
}: BungalowCardProps) {
  const { t } = useLanguage()

  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          data-tripla-booking-widget="search"
          onClick={() => {
            trackEvent('book_now_click', { action: 'clicked', label: `bungalow_card_${title.toLowerCase().replace(/ /g, '_')}` })
            if (typeof window !== 'undefined' && (window as any).__openTriplaBooking) {
              (window as any).__openTriplaBooking(TRIPLA_ROOM_IDS[roomKey])
            }
          }}
          className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all font-semibold text-center"
        >
          {t.bungalowsPage.bookNow}
        </button>
      </div>
    </div>
  )
}
