'use client'

import { useState } from 'react'
import ActivityPhotoSlider from '@/components/activity-photo-slider'
import Lightbox from '@/components/lightbox'

interface Activity {
  title: string
  description: string
  gallery: string[]
  detail?: string
  label?: string
  ctaText: string
  ctaLink: string
  ctaExternal: boolean
}

export default function ExploreContent({ activities }: { activities: Activity[] }) {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxAlt, setLightboxAlt] = useState('')

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col space-y-6">
            <ActivityPhotoSlider
              images={activity.gallery}
              alt={activity.title}
              label={activity.label}
              onOpenLightbox={(photoIndex) => {
                setLightboxImages(activity.gallery)
                setLightboxIndex(photoIndex)
                setLightboxAlt(activity.title)
              }}
            />

            <div className="flex flex-col flex-grow space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                {activity.title}
              </h2>
              <div className="text-foreground/80 font-light leading-relaxed flex-grow space-y-4 whitespace-pre-line">
                {activity.description}
              </div>
              {activity.detail && (
                <p className="text-[#2F4A3F] font-semibold text-base">
                  {activity.detail}
                </p>
              )}
              <div className="pt-4">
                <a
                  href={activity.ctaLink}
                  {...(activity.ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-block border border-[#2F4A3F] text-[#2F4A3F] px-8 py-3 rounded-full hover:bg-[#2F4A3F] hover:text-white transition-all duration-300 font-medium text-center"
                >
                  {activity.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxImages && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          alt={lightboxAlt}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </>
  )
}
