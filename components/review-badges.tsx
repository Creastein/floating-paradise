"use client"

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap-init'

export default function ReviewBadges() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide-in from left
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Badge cards — specific animations for desktop and mobile
      if (badgesRef.current) {
        let mm = gsap.matchMedia();
        const badges = gsap.utils.toArray(badgesRef.current.children);
        
        // Desktop: Slide up sequentially
        mm.add("(min-width: 768px)", () => {
          gsap.fromTo(badges,
            { y: 40, opacity: 0, x: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out',
              force3D: true,
              scrollTrigger: {
                trigger: badgesRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        });

        // Mobile: Alternate slide-in from left and right
        mm.add("(max-width: 767px)", () => {
          gsap.fromTo(badges,
            { 
              x: (i: number) => i % 2 === 0 ? -80 : 80, 
              y: 0,
              opacity: 0 
            },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.4,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: badgesRef.current,
                start: 'top 95%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        });
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pt-8 pb-0 bg-[#f0ebe3] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-10">
          <p className="text-sm tracking-widest text-primary uppercase font-bold mb-3">
            Trusted by Guests
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-medium">
            What Our Visitors Say
          </h2>
        </div>

        {/* Badges Layout */}
        <div ref={badgesRef} className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-center gap-5 sm:gap-6">
          
          {/* Google */}
          <Link
            href="https://www.google.com/travel/search?g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C72958624%2C73059275%2C73064764%2C121529349&hl=id-ID&gl=id&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MmU3M2QxYzFkOGUyMDI2ZjoweDU0Mzg2MWQyYmI1MTI2Y2QSGhIUCgcI6g8QAxgeEgcI6g8QAxgfGAEyAhAA&qs=CAEyE0Nnb0l6YzNFMnF1Nm1KeFVFQUU4AkIJCc0mUbvSYThU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwi4lpeQ0q2TAxUAAAAAHQAAAAAQBA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded px-5 py-4 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-md w-full sm:w-auto sm:min-w-[180px] h-24 border border-gray-100 shrink-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            <div className="text-[12px] font-extrabold text-black tracking-wide mb-1 mt-1 flex items-center gap-1.5">
              EXCELLENT <span className="font-light text-gray-300">|</span> 4.9
            </div>
            <div className="flex items-center text-[22px] font-bold tracking-tighter" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
          </Link>

          {/* Booking.com */}
          <Link
            href="https://www.booking.com/hotel/id/floating-paradise.id.html#tab-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded px-5 py-4 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-md w-full sm:w-auto sm:min-w-[180px] h-24 border border-gray-100 shrink-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="text-[#003580] font-bold text-[19px] tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>Booking.com</span>
              <span className="bg-[#003580] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm rounded-br-[1px]">
                9.5
              </span>
            </div>
            <div className="text-[11px] font-medium text-black mt-1 flex items-center gap-1">
              Read our <b>145 reviews</b> <span className="text-gray-400 font-extrabold">&gt;</span>
            </div>
          </Link>

          {/* Airbnb */}
          <Link
            href="https://www.airbnb.co.id/rooms/22774718/reviews?source_impression_id=p3_1773987582_P3CArEfWf8wD57RN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded px-5 py-4 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-md w-full sm:w-auto sm:min-w-[180px] h-24 border border-gray-100 shrink-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            <img src="/Airbnb.svg" alt="Airbnb" style={{ height: '28px', width: 'auto' }} className="mb-1" />
            <div className="flex gap-0.5 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#FF5A5F">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-[11px] font-medium text-black flex items-center gap-1">
              Read our <b>36 reviews</b> <span className="text-gray-400 font-extrabold">&gt;</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}
