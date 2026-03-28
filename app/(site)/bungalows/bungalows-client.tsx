"use client"

import { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import Lightbox from '@/components/lightbox'
import Image from 'next/image'
import { Check, Camera } from 'lucide-react'
import { TRIPLA_BOOKING_URL } from '@/lib/tripla'
import { gsap } from '@/lib/gsap-init'
import { PortableText } from '@/components/portable-text'
import { urlFor } from '@/lib/sanity.image'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'
import { sendGAEvent } from '@next/third-parties/google'

interface DisplayRoom {
  name: string
  description: string | any
  image: string
  reverse: boolean
  guests: string
  size: string
  price: string
  gallery: string[]
  triplaUrl?: string
  features?: string[]
}

const ROOM_GALLERIES = {
  sunrise: [
    '/image/bungalows/sunrise/Sunrise1.webp',
    '/image/bungalows/sunrise/Sunrise2.webp',
    '/image/bungalows/sunrise/Sunrise3.webp',
    '/image/bungalows/sunrise/Sunrise4.webp',
    '/image/bungalows/sunrise/Sunrise5.webp',
    '/image/bungalows/sunrise/Sunrise6.webp',
  ],
  sunset: [
    '/image/bungalows/sunset/Sunset1.webp',
    '/image/bungalows/sunset/Sunset2.webp',
    '/image/bungalows/sunset/Sunset3.webp',
    '/image/bungalows/sunset/Sunset4.webp',
    '/image/bungalows/sunset/Sunset5.webp',
    '/image/bungalows/sunset/Sunset6.webp',
    '/image/bungalows/sunset/Sunset7.webp',
  ],
  bayside: [
    '/image/bungalows/bayside/bayside1.webp',
    '/image/bungalows/bayside/bayside2.webp',
    '/image/bungalows/bayside/bayside3.webp',
    '/image/bungalows/bayside/bayside9.webp',
    '/image/bungalows/bayside/bayside5.webp',
    '/image/bungalows/bayside/bayside6.webp',
    '/image/bungalows/bayside/bayside7.webp',
    '/image/bungalows/bayside/bayside8.webp',
  ],
}

export default function BungalowsClient({ initialBungalows }: { initialBungalows?: any[] }) {
  const { t, language } = useLanguage()
  const { getCmsValue } = useCmsTranslation()
  const mainRef = useRef<HTMLDivElement>(null)

  const introQuoteRef = useRef<HTMLParagraphElement>(null)
  const introSubRef = useRef<HTMLParagraphElement>(null)

  // Build ROOMS using translated content, so it's reactive to language changes
  const ROOMS: DisplayRoom[] = [
    {
      name: 'Sunrise Bungalow',
      description: t.bungalowsPage.rooms.sunrise.description,
      image: '/image/homepage/Sunrise-home.webp',
      reverse: false,
      guests: '2',
      size: '4 x 8 m',
      price: `${t.bungalowsPage.from} Rp 1,125,000 / ${t.bungalowsPage.night}`,
      gallery: ROOM_GALLERIES.sunrise,
    },
    {
      name: 'Sunset Bungalow',
      description: t.bungalowsPage.rooms.sunset.description,
      image: '/image/homepage/Sunset-home.webp',
      reverse: true,
      guests: '2',
      size: '4 x 8 m',
      price: `${t.bungalowsPage.from} Rp 990,000 / ${t.bungalowsPage.night}`,
      gallery: ROOM_GALLERIES.sunset,
    },
    {
      name: 'Bayside Bungalow',
      description: t.bungalowsPage.rooms.bayside.description,
      image: '/image/homepage/Bayside-home.webp',
      reverse: false,
      guests: '4',
      size: '5.5 x 10 m',
      price: `${t.bungalowsPage.from} Rp 1,900,000 / ${t.bungalowsPage.night}`,
      gallery: ROOM_GALLERIES.bayside,
    },
  ]

  const ROOM_FACILITIES = t.bungalowsPage.facilities

  const displayRooms: DisplayRoom[] = initialBungalows && initialBungalows.length > 0
    ? initialBungalows.map((b, index) => ({
        name: b.name,
        description: getCmsValue(b, 'description', ROOMS[index]?.description),
        image: b.gallery?.[0] ? urlFor(b.gallery[0]).url() : ROOMS[index]?.image || '/image/homepage/Sunrise-home.webp',
        reverse: index % 2 !== 0,
        guests: b.maxGuests?.toString() || ROOMS[index]?.guests || '2',
        size: ROOMS[index]?.size || 'N/A',
        price: b.priceIDR ? `${t.bungalowsPage.from} Rp ${b.priceIDR.toLocaleString('en-US')} / ${t.bungalowsPage.night}` : ROOMS[index]?.price || 'Check Rates',
        gallery: b.gallery ? b.gallery.map((img: any) => urlFor(img).url()) : ROOMS[index]?.gallery || [],
        triplaUrl: b.triplaUrl || TRIPLA_BOOKING_URL,
        features: b.features || ROOM_FACILITIES,
      }))
    : ROOMS;

  const roomCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const roomImageRefs = useRef<(HTMLDivElement | null)[]>([])
  const roomTextRefs = useRef<(HTMLDivElement | null)[]>([])

  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxAlt, setLightboxAlt] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Intro Section
      if (introQuoteRef.current) {
        gsap.fromTo(introQuoteRef.current,
          { y: 30, opacity: 0, filter: 'blur(5px)' },
          {
            y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out', force3D: true,
            scrollTrigger: { trigger: introQuoteRef.current, start: 'top 80%', toggleActions: 'play reverse play reverse' }
          }
        )
      }
      if (introSubRef.current) {
        gsap.fromTo(introSubRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out', force3D: true,
            scrollTrigger: { trigger: introSubRef.current, start: 'top 85%', toggleActions: 'play reverse play reverse' }
          }
        )
      }

      // 2. Room Cards
      roomCardRefs.current.forEach((card, index) => {
        if (!card) return;

        const imgContainer = roomImageRefs.current[index];
        const textContainer = roomTextRefs.current[index];
        const isReverse = displayRooms[index].reverse;

        // Image Parallax (subtle vertical movement on scroll)
        if (imgContainer) {
          gsap.to(imgContainer, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          });
        }

        // Image slide-in from outside (left for normal, right for reverse)
        if (imgContainer?.parentElement) {
          gsap.fromTo(imgContainer.parentElement,
            {
              x: isReverse ? 120 : -120,
              opacity: 0,
              scale: 0.95,
              filter: 'blur(3px)',
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 40%',
                scrub: 0.8,
              }
            }
          );
        }

        // Text slide-in from opposite side (right for normal, left for reverse)
        if (textContainer) {
          gsap.fromTo(textContainer,
            {
              x: isReverse ? -80 : 80,
              opacity: 0,
              filter: 'blur(2px)',
            },
            {
              x: 0,
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 0.8,
              }
            }
          );
        }
      });


    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen overflow-hidden">
      <Navigation />

      <PageHero
        title={t.bungalowsPage.title}
        subtitle={t.bungalowsPage.subtitle}
        backgroundImage="/image/bungalows/home-bungalows.webp"
        fullHeight
      />

      {/* Intro Section */}
      <section className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p ref={introQuoteRef} className="font-serif text-2xl text-foreground italic will-change-transform">
            {language === 'id'
              ? '"Tergantung di atas terumbu karang, tiga bungalow bambu buatan tangan kami mengundang Anda untuk hidup di antara laut dan langit."'
              : '"Suspended above the reef, our three handcrafted bamboo bungalows invite you to live between sea and sky."'}
          </p>
          <p ref={introSubRef} className="text-lg text-foreground/80 font-light leading-relaxed will-change-transform">
            {language === 'id'
              ? 'Dibangun dengan tangan dan dibentuk oleh elemen alam, setiap bungalow memiliki kepribadiannya sendiri; tak satupun yang sama. Ini bukan sekadar kamar, melainkan tempat untuk bernapas, melembutkan diri, dan mengapung bebas.'
              : 'Built by hand and shaped by the elements, each bungalow has its own personality; no two are the same. These are not just rooms, they\'re a place to exhale, to soften, and to float.'}
          </p>
        </div>
      </section>

      {/* Rooms Zig-Zag */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {displayRooms.map((room, index) => (
            <div
              key={index}
              ref={(el) => { roomCardRefs.current[index] = el; }}
              className={`flex flex-col ${room.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div
                className="w-full lg:w-1/2 overflow-hidden rounded-t-[40%] rounded-b-2xl shadow-xl will-change-transform group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                onClick={() => {
                  if (room.gallery && room.gallery.length > 0) {
                    setLightboxImages(room.gallery)
                    setLightboxIndex(0)
                    setLightboxAlt(room.name)
                  }
                }}
              >
                <div className="relative h-[400px] lg:h-[500px] w-full">
                  <div
                    ref={(el) => { roomImageRefs.current[index] = el; }}
                    className="absolute inset-0"
                    style={{ top: '-10%', height: '120%' }}
                  >
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={80}
                    />
                  </div>
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  {/* Explore badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm px-4 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105">
                    <Camera className="w-4 h-4" />
                    <span className="font-medium tracking-wide">{t.bungalowsPage.exploreRoom}</span>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => { roomTextRefs.current[index] = el; }}
                className="w-full lg:w-1/2 space-y-6 will-change-transform"
              >
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {room.name}
                </h2>
                {/* Info Bar */}
                <div className="bg-[#2F4A3F] p-5 sm:p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 w-full shadow-2xl shadow-[#2F4A3F]/30 border border-[#D8C3A5]/20 relative z-10 transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 w-full md:w-auto">
                    <div className="flex flex-col border-l-2 border-[#D8C3A5] pl-4">
                      <span className="text-[#D8C3A5] text-xs uppercase tracking-wider mb-1">{t.bungalowsPage.guests}</span>
                      <span className="text-white font-medium">{room.guests}</span>
                    </div>
                    <div className="flex flex-col border-l-2 border-[#D8C3A5] pl-4">
                      <span className="text-[#D8C3A5] text-xs uppercase tracking-wider mb-1">{t.bungalowsPage.size}</span>
                      <span className="text-white font-medium">{room.size}</span>
                    </div>
                    <div className="flex flex-col border-l-2 border-[#D8C3A5] pl-4">
                      <span className="text-[#D8C3A5] text-xs uppercase tracking-wider mb-1">{t.bungalowsPage.priceNight}</span>
                      <span className="text-white font-medium">{room.price}</span>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    data-tripla-booking-widget="search"
                    onClick={() => sendGAEvent('event', 'book_now_click', { action: 'clicked', label: `bungalows_page_${room.name.toLowerCase().replace(/ /g, '_')}` })}
                    className="w-full md:w-auto bg-[#D8C3A5] text-[#2F4A3F] px-8 py-3 rounded hover:bg-white transition-colors duration-300 font-semibold text-center whitespace-nowrap"
                  >
                    {t.bungalowsPage.bookNow}
                  </button>
                </div>

                <div className="space-y-6 pt-2">
                  <div className="text-lg text-foreground/80 font-light leading-relaxed">
                    {typeof room.description === 'string' ? (
                      <p>{room.description}</p>
                    ) : room.description ? (
                      <PortableText 
                        value={room.description} 
                        components={{
                          block: {
                            normal: ({ children }: any) => <p className="mb-4 last:mb-0">{children}</p>
                          }
                        }}
                      />
                    ) : null}
                  </div>
                  {/* Internal Facilities Checklist */}
                  <ul className="space-y-3">
                    {(room.features || ROOM_FACILITIES).map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <Check className="w-5 h-5 text-[#2F4A3F] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      <Footer />

      {lightboxImages && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          alt={lightboxAlt}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </main>
  )
}
