'use client'

import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'

interface ActivityPhotoSliderProps {
  images: string[]
  alt: string
  onOpenLightbox: (index: number) => void
  label?: string
}

export default function ActivityPhotoSlider({
  images,
  alt,
  onOpenLightbox,
  label,
}: ActivityPhotoSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null)

  // Track which slide is visible via scroll position
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const slideWidth = el.offsetWidth * 0.85 // matches the snap point width
    const index = Math.round(el.scrollLeft / slideWidth)
    setActiveIndex(Math.min(index, images.length - 1))
  }, [images.length])

  // Click dot → scroll to that slide
  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const slideWidth = el.offsetWidth * 0.85
    el.scrollTo({ left: slideWidth * index, behavior: 'smooth' })
  }

  // Desktop drag support
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    setIsDragging(true)
    dragStart.current = { x: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
    el.style.cursor = 'grabbing'
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart.current) return
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - dragStart.current.x) * 1.5
    el.scrollLeft = dragStart.current.scrollLeft - walk
  }

  const onMouseUp = () => {
    setIsDragging(false)
    dragStart.current = null
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  return (
    <div className="relative w-full">
      {/* Scrollable photo strip */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 snap-start rounded-xl overflow-hidden shadow-md transition-all duration-500"
            style={{ width: '85%', aspectRatio: '16/9' }}
            onClick={() => {
              if (!isDragging) onOpenLightbox(index)
            }}
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 85vw, 42vw"
              quality={80}
            />
          </div>
        ))}
        {/* Spacer so last slide can snap properly */}
        <div className="flex-shrink-0 w-[15%]" aria-hidden="true" />
      </div>

      {/* Label badge */}
      {label && (
        <span className="absolute top-4 left-4 z-10 bg-[#2F4A3F] text-[#D8C3A5] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
          {label}
        </span>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to photo ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-6 h-2.5 bg-[#2F4A3F]'
                  : 'w-2.5 h-2.5 bg-[#2F4A3F]/25 hover:bg-[#2F4A3F]/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
