'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import { FadeIn } from '@/components/ui/fade-in'
import Image from 'next/image'
import WhatsAppIcon from '@/components/icons/whatsapp-icon'

import { useLanguage } from '@/lib/i18n/language-context'
import { useWhatsAppNumbers } from '@/components/site-settings-provider'
import { urlFor } from '@/lib/sanity.image'
import {
  CAR_HIRE_OPTIONS,
} from '@/data/getting-here-data'

const getStringValue = (value: unknown) =>
  typeof value === 'string' ? value.trim() : ''

const hasSanityImage = (image: any) =>
  Boolean(image?.asset?._ref || image?.asset?._id || image?.asset?.url)

// ── Sub-components ─────────────────────────────────────────────────

interface JourneyStepProps {
  step: number
  title: string
  subtitle: string
  isLast?: boolean
  children: React.ReactNode
  stepLabel?: string
}

function JourneyStep({ step, title, subtitle, isLast = false, children, stepLabel = 'Step' }: JourneyStepProps) {
  return (
    <div className="relative">
      <div className="flex items-start gap-6 md:gap-10">
        {/* Step indicator + vertical line */}
        <div className="flex flex-col items-center shrink-0">
          <FadeIn direction="up" distance={20} className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl md:text-2xl font-bold shadow-lg relative z-10">
            {step}
          </FadeIn>
          {!isLast && <div className="w-px bg-primary/20 flex-1 min-h-[4rem]" />}
        </div>
        
        {/* Content */}
        <div className="flex-1 pb-16 md:pb-24">
          <FadeIn direction="up" distance={30} delay={0.1}>
            <div className="space-y-2 mb-8">
              <p className="text-sm tracking-widest uppercase font-semibold text-primary">{stepLabel} {step}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
              <p className="text-lg text-foreground/70 font-light">{subtitle}</p>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────

export default function GettingHereClient({ pageData }: { pageData?: any }) {
  const { language } = useLanguage()
  const { general: waGeneral, generalDisplay: waDisplay } = useWhatsAppNumbers()
  const isId = language === 'id'

  const cmsText = (field: string, fallback: string) => {
    const localizedField = isId ? `${field}_id` : field
    return getStringValue(pageData?.[localizedField]) || fallback
  }

  const cmsNode = (field: string, fallback: React.ReactNode) => {
    const localizedField = isId ? `${field}_id` : field
    return getStringValue(pageData?.[localizedField]) || fallback
  }

  const cmsFixedText = (field: string, fallback: string) =>
    getStringValue(pageData?.[field]) || fallback

  const heroImageUrl =
    hasSanityImage(pageData?.heroImage) ? urlFor(pageData.heroImage).width(2400).height(1350).url() : undefined

  const expressImageUrl =
    hasSanityImage(pageData?.expressImage) ? urlFor(pageData.expressImage).width(1200).height(800).url() : undefined

  const carHireOptions = [
    {
      city: 'Semarang',
      price: cmsFixedText('semarangPrice', CAR_HIRE_OPTIONS[0].price),
      duration: isId
        ? cmsFixedText('semarangDuration_id', '~2.5 jam ke Jepara')
        : cmsFixedText('semarangDuration', CAR_HIRE_OPTIONS[0].duration),
    },
    {
      city: 'Yogyakarta',
      price: cmsFixedText('yogyakartaPrice', CAR_HIRE_OPTIONS[1].price),
      duration: isId
        ? cmsFixedText('yogyakartaDuration_id', '~5 jam ke Jepara')
        : cmsFixedText('yogyakartaDuration', CAR_HIRE_OPTIONS[1].duration),
    },
    {
      city: 'Malang',
      price: cmsFixedText('malangPrice', CAR_HIRE_OPTIONS[2].price),
      duration: isId
        ? cmsFixedText('malangDuration_id', '~8 jam ke Jepara')
        : cmsFixedText('malangDuration', CAR_HIRE_OPTIONS[2].duration),
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero 
        title={cmsText('heroTitle', isId ? "Perjalanan Anda ke Floating" : "Your Journey to Floating")}
        subtitle={cmsText('heroSubtitle', isId ? "Floating Paradise terletak di Karimunjawa, sebuah kepulauan yang dilindungi dengan 27 pulau di Laut Jawa. Perjalanan ke sini adalah bagian dari petualangan — izinkan kami memandu Anda langkah demi langkah." : "Floating Paradise is located in Karimunjawa, a protected archipelago of 27 islands in the Java Sea. Getting here is part of the adventure — let us guide you step by step.")}
        backgroundImage={heroImageUrl || "/image/getting-here/gh-hero.webp"}
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-32 pb-8 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ① PLAN YOUR JOURNEY */}
          <JourneyStep 
            step={1} 
            stepLabel={isId ? 'Langkah' : 'Step'}
            title={cmsText('step1Title', isId ? "Rencanakan Perjalanan Anda" : "Plan Your Journey")}
            subtitle={cmsText('step1Subtitle', isId ? "Terbang ke Jawa Tengah, lalu perjalanan darat ke Pelabuhan Jepara." : "Fly into Central Java, then travel overland to Jepara Harbour.")}
          >
            {/* Arriving by Air */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">{cmsText('airTitle', isId ? 'Tiba Melalui Udara' : 'Arriving by Air')}</h3>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {cmsNode('airText', isId ? (
                    <>Bandara internasional terdekat adalah <strong>Semarang Achmad Yani (SRG)</strong>. Dari sana, perjalanan ke pelabuhan Jepara memakan waktu sekitar 2,5 jam dengan mobil pribadi. Kami dapat mengatur sopir tepercaya untuk menjemput Anda saat kedatangan.</>
                  ) : (
                    <>The closest international airport is <strong>Semarang Achmad Yani (SRG)</strong>. From there, the journey to Jepara harbour takes approximately 2.5 hours by private car. We can arrange a trusted driver to meet you upon arrival.</>
                  ))}
                </p>
              </div>
            </FadeIn>

            {/* Private Car Hire */}
            <div className="space-y-4 pt-4">
              <FadeIn direction="up" distance={40}>
                <h3 className="font-serif text-2xl font-bold text-foreground">{cmsText('carTitle', isId ? 'Sewa Mobil Pribadi' : 'Private Car Hire')}</h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-4">
                  {cmsText('carIntro', isId ? 'Kami mengatur mobil pribadi dengan sopir untuk membawa Anda langsung ke Pelabuhan Kartini Jepara. Semua harga sudah termasuk bahan bakar dan biaya tol. Sopir Anda akan menemui Anda di aula kedatangan atau lobi hotel.' : 'We arrange private cars with driver to take you directly to Jepara Kartini Harbour. All prices include fuel and toll fees. Your driver will meet you at the arrivals hall or hotel lobby.')}
                </p>
              </FadeIn>

              {/* Car Hire Grid — data-driven */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {carHireOptions.map((option, i) => (
                  <FadeIn key={option.city} direction="up" distance={30} delay={(i + 1) * 0.1}>
                    <div className="bg-muted h-full p-6 rounded-2xl text-center space-y-2 border border-primary/10">
                      <p className="text-sm tracking-widest uppercase font-semibold text-primary">{option.city}</p>
                      <p className="font-serif text-2xl font-bold text-foreground">{option.price}</p>
                      <p className="text-sm text-foreground/60">{option.duration}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn direction="up" distance={20} delay={0.4} className="pt-4">
                <a
                  href={`https://wa.me/${waGeneral}?text=${encodeURIComponent(cmsText('transferWhatsAppMessage', isId ? 'Halo, saya ingin memesan penjemputan mobil pribadi ke Pelabuhan Jepara. Bisa share detail dan ketersediaan? Terima kasih!' : "Hi, I'd like to book a private car transfer to Jepara Harbour. Could you share details and availability? Thank you!"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-md cursor-pointer"
                >
                  {cmsText('transferCtaText', isId ? 'Pesan Penjemputan' : 'Book a Transfer')}
                </a>
              </FadeIn>
            </div>
          </JourneyStep>

          {/* ② CROSS TO KARIMUNJAWA */}
          <JourneyStep 
            step={2} 
            stepLabel={isId ? 'Langkah' : 'Step'}
            title={cmsText('step2Title', isId ? "Menyeberang ke Karimunjawa" : "Cross to Karimunjawa")}
            subtitle={cmsText('step2Subtitle', isId ? "Naik kapal cepat dari Jepara — sekitar 2 jam menyeberangi Laut Jawa." : "Take the fast boat from Jepara — approximately 2 hours across the Java Sea.")}
          >
            {/* Express Bahari */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10 space-y-6 overflow-hidden">
                <div className="relative h-48 sm:h-64 -mt-8 -mx-8 mb-6">
                  <Image 
                    src={expressImageUrl || "/image/getting-here/gh4.webp"}
                    alt="Express Bahari Fast Boat"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">{cmsText('expressTitle', isId ? 'Kapal Cepat Express Bahari' : 'Express Bahari Fast Boat')}</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-4 pt-2">
                  <p>{cmsText('expressText', isId ? 'Express Bahari beroperasi setiap hari antara Jepara dan Karimunjawa. Jadwal bervariasi berdasarkan bulan dan musim — beberapa hari menawarkan dua keberangkatan. Kami sarankan memesan tiket melalui kami untuk informasi ketersediaan terbaru.' : 'Express Bahari operates daily between Jepara and Karimunjawa. Schedules vary by month and season — some days offer two departures. We recommend booking your tickets through us for the most up-to-date availability.')}</p>
                </div>
              </div>
            </FadeIn>

            {/* Book Through Floating */}
            <FadeIn direction="up" distance={40} delay={0.1}>
              <div className="bg-[#e8efe9] p-8 rounded-2xl space-y-6 mt-8">
                <h3 className="font-serif text-2xl font-bold text-foreground">{cmsText('bookFloatingTitle', isId ? 'Pesan Melalui Floating' : 'Book Through Floating')}</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-4">
                  <p>{cmsText('bookFloatingText', isId ? 'Kami menawarkan layanan pemesanan tiket berbayar (dengan biaya tambahan) untuk tamu kami. Biarkan kami yang mengurus logistik sehingga Anda tidak perlu repot mencari situs pemesanan lokal atau mengantre di pelabuhan.' : 'We offer a ticketing service for our guests with a surcharge. Let us handle the logistics so you don\'t have to navigate local booking sites or harbour queues.')}</p>
                  <p className="font-medium text-foreground">{cmsText('bookFloatingHighlight', isId ? 'Cukup kirimkan tanggal perjalanan, email, dan salinan paspor/KTP Anda — kami akan mengamankan kursi Anda dengan tiket boarding QR. Tanpa antre.' : 'Simply send us your travel dates, email, and passport copies — we\'ll secure your seats with a QR boarding card. No queuing required.')}</p>
                  
                  {/* WhatsApp Contact */}
                  <div className="bg-background/60 p-4 rounded-xl">
                    <p className="text-sm font-medium text-foreground mb-2">{cmsText('contactLabel', isId ? 'Hubungi kami langsung:' : 'Contact us directly:')}</p>
                    <a 
                      href={`https://wa.me/${waGeneral}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
                    >
                      <WhatsAppIcon />
                      {waDisplay}
                    </a>
                  </div>

                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-sm italic text-foreground/70">
                      {cmsText('ticketNote', isId ? 'Kami dapat membantu mengatur tiket untuk siapa pun.' : 'We can help arrange tickets for anyone.')}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${waGeneral}?text=${encodeURIComponent(cmsText('boatWhatsAppMessage', isId ? 'Halo, saya ingin memesan tiket kapal ke Karimunjawa melalui Floating. Mohon info ketersediaan dan biaya tambahannya ya. Terima kasih!' : "Hi, I'd like to book a boat ticket to Karimunjawa through Floating. Could you confirm availability and the surcharge? Thank you!"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-md cursor-pointer"
                >
                  <WhatsAppIcon />
                  {cmsText('boatCtaText', isId ? 'Pesan via WhatsApp' : 'Book via WhatsApp')}
                </a>
              </div>
            </FadeIn>

            {/* Ferry Option */}
            <FadeIn direction="up" distance={30} delay={0.1}>
              <div className="bg-[#F5EFE4] p-6 rounded-2xl space-y-3 mt-8">
                <h4 className="font-serif text-xl font-bold text-foreground">{cmsText('ferryTitle', isId ? 'Alternatif: Kapal Feri' : 'Alternative: Public Ferry')}</h4>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {cmsText('ferryText', isId ? 'Jika kapal cepat penuh, kapal feri juga tersedia. Durasi: sekitar 4,5 jam. Harga: kurang lebih Rp 180.000 per orang (sekali jalan).' : 'If the fast boat is fully booked, a public ferry is also available. Duration: approximately 4.5 hours. Price: around Rp 180,000 per person (one way).')}
                </p>
              </div>
            </FadeIn>
          </JourneyStep>

          {/* ③ ARRIVE ON THE ISLAND */}
          <JourneyStep 
            step={3} 
            stepLabel={isId ? 'Langkah' : 'Step'}
            title={cmsText('step3Title', isId ? "Tiba di Pulau" : "Arrive on the Island")}
            subtitle={cmsText('step3Subtitle', isId ? "Selamat datang di Karimunjawa. Perjalanan pulau Anda berlanjut." : "Welcome to Karimunjawa. Your island journey continues.")}
          >
            {/* Arrival Transfer */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-[#e8efe9] p-8 rounded-2xl space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">{cmsText('taxiTitle', isId ? 'Taksi / Penjemputan' : 'Taxi / Transfer')}</h3>
                <ul className="text-foreground/80 font-light leading-relaxed space-y-2 list-disc list-inside">
                  <li>{cmsText('taxiPriceLine', isId ? 'Taksi dari pelabuhan ke Floating Paradise: Rp 150.000 (dibayar langsung ke sopir, tunai)' : 'Taxi from harbour to Floating Paradise: Rp 150,000 (paid directly to driver, cash)')}</li>
                  <li>{cmsText('taxiJourneyTimeLine', isId ? 'Waktu tempuh: ~15 menit' : 'Journey time: ~15 minutes')}</li>
                  <li>{cmsText('scooterLine', isId ? 'Sewa skuter: Rp 100.000/hari, termasuk helm. Kami sangat menyarankan para tamu untuk menyewa dari Floating setelah menurunkan barang bawaan dan melihat kondisi jalan. Jika Anda mahir dan membawa barang bawaan yang cukup kecil untuk dibawa ke atas kapal, kami dapat menyiapkan skuter untuk Anda di pelabuhan.' : 'Scooter rental: Rp 100,000/day, helmets included. We strongly recommend renting through Floating after you’ve dropped your bags and seen the road conditions. If you’re confident on a scooter and travelling light (small enough to take your luggage on the boat), we can arrange a scooter for you at the harbour.')}</li>
                  <li>{cmsText('nationalParkLine', isId ? 'Harap diperhatikan bahwa ada biaya masuk Taman Nasional sebesar Rp200.000 yang harus dibayar tunai saat Anda tiba. Tiket ini akan memberi Anda akses gratis ke Suaka Penyu, Trekking Hutan Bakau, dan jalur pendakian Taman Nasional lainnya, jadi pastikan Anda menyimpannya.' : 'National Park entrance fee: Rp 200,000 (cash, paid on arrival). This ticket gives you free access to the Turtle Sanctuary, Mangrove Forest Trek, and other National Park hiking trails, so please keep it.')}</li>
                </ul>
              </div>
            </FadeIn>
          </JourneyStep>

          {/* ④ REACH FLOATING */}
          <JourneyStep 
            step={4} 
            stepLabel={isId ? 'Langkah' : 'Step'}
            title={cmsText('step4Title', isId ? "Akses ke Floating Paradise" : "Access to Floating Paradise")}
            subtitle={cmsText('step4Subtitle', isId ? "Tahap terakhir — tiba di lokasi." : "The final stretch — arriving at the property.")}
          >
            <FadeIn direction="up" distance={30} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{cmsText('findingTitle', isId ? 'Menemukan Kami' : 'Finding Us')}</h3>
                <p className="text-lg text-foreground/80 font-light leading-relaxed">
                  {cmsText('findingText', isId ? 'Terdapat akses jalan darat langsung dan tempat parkir di lokasi. Ikuti jalan melewati Pantai Bobi — begitu jalan paving berbata berakhir, belok kanan ke jalan tanah. Lanjutkan menyusuri pantai, seberangi jembatan kayu kecil, dan berkendara melewati bekas tambak udang untuk mencapai area parkir Floating Paradise.' : 'There is direct road access and parking on site. Follow the path past Bobi Beach — once the brick road ends, turn right onto the dirt track. Continue along the beach, cross the small wooden bridge, and drive through the old shrimp farm to reach the Floating Paradise parking area.')}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={30} delay={0.1}>
              <p className="text-foreground/70 font-light leading-relaxed mt-6">
                {cmsText('travelLightNote', isId ? 'Kami merekomendasikan untuk tidak membawa terlalu banyak barang bawaan dan datang dengan pikiran terbuka. Kehidupan di pulau kecil mengundang fleksibilitas, kesabaran, dan kehadiran penuh.' : 'We recommend travelling with light luggage and an open mindset. Life on a small island invites flexibility, patience and presence.')}
              </p>
            </FadeIn>
          </JourneyStep>

          {/* ⑤ YOUR JOURNEY BEGINS */}
          <JourneyStep 
            step={5} 
            stepLabel={isId ? 'Langkah' : 'Step'}
            title={cmsText('step5Title', isId ? "Perjalanan Anda Dimulai" : "Your Journey Begins")}
            subtitle={cmsText('step5Subtitle', isId ? "Anda telah tiba. Sekarang lepaskan." : "You've arrived. Now let go.")}
            isLast
          >
            <div className="space-y-8">
              <FadeIn direction="up" distance={20} delay={0.2}>
                <p className="text-lg text-foreground/80 font-light leading-relaxed italic">
                  {cmsText('finalText', isId ? 'Floating dirancang bagi tamu yang menghargai alam, kesederhanaan, dan kedekatan dengan elemen sekitar. Jika Anda menikmati otentisitas, udara laut, dan ritme yang lebih lambat, Anda akan merasa betah di sini.' : 'Floating is designed for guests who appreciate nature, simplicity and being close to the elements. If you enjoy authenticity, sea air and a slower rhythm, you will feel very at home.')}
                </p>
              </FadeIn>
              <FadeIn direction="up" distance={20} delay={0.3}>
                <button
                  type="button"
                  data-tripla-booking-widget="search"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                >
                  {cmsText('availabilityCtaText', isId ? 'Cek Ketersediaan' : 'Check Availability')}
                </button>
              </FadeIn>
            </div>
          </JourneyStep>

        </div>
      </section>



      <Footer />
    </main>
  )
}
