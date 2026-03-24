"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

interface AutoSlideshowProps {
  images: { src: string; alt: string }[]
  interval?: number
  className?: string
}

export function AutoSlideshow({ images, interval = 4000, className = "" }: AutoSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [nextSlide, interval])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}
