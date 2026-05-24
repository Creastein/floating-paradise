import React from 'react'
import { urlFor } from '@/lib/sanity.image'

// Helper to convert Sanity Portable Text blocks to clean plain text
export function blocksToPlainText(blocks: any): string {
  if (typeof blocks === "string") return blocks
  if (!blocks || !Array.isArray(blocks)) return ""
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map((child: any) => child.text).join("")
    })
    .join("\n")
}

// Localized field selector running on server components
export function getCmsValueServer(
  doc: any,
  fieldBaseName: string,
  locale: string,
  defaultValue: any = null
): any {
  if (!doc) return defaultValue
  
  if (locale === "en") {
    return doc[fieldBaseName] !== undefined ? doc[fieldBaseName] : defaultValue
  }
  
  const idField = `${fieldBaseName}_id`
  if (Array.isArray(doc[idField]) && doc[idField].length > 0) {
    return doc[idField]
  } else if (typeof doc[idField] === "string" && doc[idField].trim() !== "") {
    return doc[idField]
  } else if (doc[idField] !== undefined && doc[idField] !== null) {
    return doc[idField]
  }
  
  return doc[fieldBaseName] !== undefined ? doc[fieldBaseName] : defaultValue
}

interface LodgingBusinessSchemaProps {
  siteSettings: any
  bungalows: any[] | null | undefined
  locale: string
}

export function LodgingBusinessSchema({
  siteSettings,
  bungalows,
  locale,
}: LodgingBusinessSchemaProps) {
  // Format telephone number
  const tel = siteSettings?.whatsappNumber 
    ? `+${siteSettings.whatsappNumber.toString().replace(/^\+/, '')}` 
    : "+6282226945510"

  // Geo coordinates
  const latitude = siteSettings?.latitude ?? -5.8024
  const longitude = siteSettings?.longitude ?? 110.4473

  // Price range
  const priceRange = siteSettings?.priceRange ?? "$$"

  // Standard sameAs URLs from current hardcoded schemas, merged with any dynamic CMS links
  const defaultSameAs = [
    "https://www.instagram.com/paradisefloating",
    "https://www.booking.com/hotel/id/floating-paradise.id.html",
    "https://www.airbnb.co.id/rooms/22774718"
  ]
  const sameAsSet = new Set(defaultSameAs)
  if (siteSettings?.socialLinks && Array.isArray(siteSettings.socialLinks)) {
    siteSettings.socialLinks.forEach((link: any) => {
      if (link.url) {
        sameAsSet.add(link.url)
      }
    })
  }
  const sameAs = Array.from(sameAsSet)

  // Default amenities for English / Indonesian
  const defaultAmenities = {
    en: [
      "Solar powered",
      "Sea view",
      "Direct reef access",
      "Private bungalows",
      "Natural ventilation"
    ],
    id: [
      "Bertenaga surya",
      "Pemandangan laut",
      "Akses terumbu karang langsung",
      "Bungalow pribadi",
      "Ventilasi alami"
    ]
  }

  const resolvedAmenities = getCmsValueServer(
    siteSettings, 
    'amenities', 
    locale, 
    defaultAmenities[locale as 'en' | 'id'] || defaultAmenities.en
  )

  const amenityFeature = resolvedAmenities.map((name: string) => ({
    "@type": "LocationFeatureSpecification",
    "name": name,
    "value": true
  }))

  // Default room settings if no bungalows are queried
  const defaultBungalows = [
    {
      name: "Sunrise Bungalow",
      description: locale === "id" 
        ? "Bungalow bambu indah buatan tangan dengan pemandangan matahari terbit langsung dan tangga menuju ke laut."
        : "Beautiful handcrafted bamboo bungalow with direct sunrise views and private steps to the sea.",
      maxGuests: 2
    },
    {
      name: "Sunset Bungalow",
      description: locale === "id"
        ? "Nikmati pemandangan matahari terbenam yang memukau di atas air dari teras pribadi Anda."
        : "Enjoy stunning overwater sunset views from your own private terrace.",
      maxGuests: 2
    },
    {
      name: "Bayside Bungalow",
      description: locale === "id"
        ? "Bungalow luas kami di sudut teluk yang tenang, sempurna untuk ketenangan maksimal."
        : "Our spacious bungalow located in a quiet corner of the bay, perfect for maximum tranquility.",
      maxGuests: 2
    }
  ]

  const resolvedBungalows = bungalows && bungalows.length > 0 ? bungalows : defaultBungalows

  const rooms = resolvedBungalows.map((bungalow: any) => {
    const name = getCmsValueServer(bungalow, 'name', locale, bungalow.name || "")
    const rawDesc = getCmsValueServer(bungalow, 'description', locale, bungalow.description || "")
    const description = blocksToPlainText(rawDesc)
    
    return {
      "@type": "HotelRoom",
      "name": name,
      "description": description,
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": bungalow.maxGuests || 2
      },
      "bed": {
        "@type": "BedDetails",
        "typeOfBed": "Double"
      }
    }
  })

  // Full LodgingBusiness schema object
  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": getCmsValueServer(siteSettings, 'seoTitle', locale, "Floating Paradise"),
    "description": getCmsValueServer(
      siteSettings, 
      'seoDescription', 
      locale, 
      locale === "id"
        ? "Menginap di bungalow atas air buatan tangan di Floating Paradise — resor ramah lingkungan bertenaga surya di Karimunjawa, Indonesia. 3 kamar pribadi dengan akses karang langsung."
        : "Stay in handcrafted overwater bungalows at Floating Paradise — a solar-powered eco-retreat in Karimunjawa, Indonesia. 3 private rooms with direct reef access."
    ),
    "url": "https://floatingparadise.id",
    "telephone": tel,
    "email": siteSettings?.email || "floatingparadise.legonlele@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteSettings?.address || "Jl. Kapuran, Legon Lele",
      "addressLocality": "Karimunjawa",
      "addressRegion": "Jawa Tengah",
      "postalCode": "59455",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "numberOfRooms": resolvedBungalows.length,
    "checkinTime": "14:00",
    "checkoutTime": "11:00",
    "priceRange": priceRange,
    "image": siteSettings?.logo ? urlFor(siteSettings.logo).url() : "https://floatingparadise.id/og-image.png",
    "amenityFeature": amenityFeature,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "96",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": sameAs,
    "containsPlace": rooms
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
    />
  )
}

interface FaqSchemaProps {
  locale: string
}

export function FaqSchema({ locale }: FaqSchemaProps) {
  const faqs = {
    en: [
      {
        question: "Where is Floating Paradise located?",
        answer: "Floating Paradise is located in Legon Lele, Karimunjawa, Jawa Tengah, Indonesia."
      },
      {
        question: "Is Floating Paradise eco-friendly?",
        answer: "Yes, Floating Paradise is 100% solar powered and utilizes sustainable freshwater management."
      },
      {
        question: "How to get to Karimunjawa?",
        answer: "You can get to Karimunjawa by taking the Express Bahari Ferry from Jepara, Central Java."
      },
      {
        question: "How many bungalows are available?",
        answer: "There are 3 overwater bungalows available, each accommodating a maximum of 2 guests."
      },
      {
        question: "Is there reef access?",
        answer: "Yes, each bungalow has a private terrace with direct stairs to the sea for reef access."
      }
    ],
    id: [
      {
        question: "Di mana lokasi Floating Paradise berada?",
        answer: "Floating Paradise berlokasi di Legon Lele, Karimunjawa, Jawa Tengah, Indonesia."
      },
      {
        question: "Apakah Floating Paradise ramah lingkungan?",
        answer: "Ya, Floating Paradise 100% bertenaga surya dan menggunakan pengelolaan air tawar yang berkelanjutan."
      },
      {
        question: "Bagaimana cara menuju ke Karimunjawa?",
        answer: "Anda dapat menuju ke Karimunjawa dengan menggunakan Feri Express Bahari dari Jepara, Jawa Tengah."
      },
      {
        question: "Berapa banyak bungalow yang tersedia?",
        answer: "Tersedia 3 bungalow di atas air, masing-masing dapat menampung maksimal 2 orang tamu."
      },
      {
        question: "Apakah ada akses ke terumbu karang?",
        answer: "Ya, setiap bungalow memiliki teras pribadi dengan tangga langsung ke laut untuk akses ke terumbu karang."
      }
    ]
  }

  const faqList = faqs[locale as "en" | "id"] || faqs.en

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
