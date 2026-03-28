'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import { TRIPLA_EXTRAS_URL } from '@/lib/tripla'
import { FadeIn } from '@/components/ui/fade-in'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppIcon from '@/components/icons/whatsapp-icon'
import BoatTicketForm from '@/components/boat-ticket-form'
import { useLanguage } from '@/lib/i18n/language-context'
import {
  CAR_HIRE_OPTIONS,
} from '@/data/getting-here-data'

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

export default function GettingHereClient() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHero 
        title={language === 'id' ? "Perjalanan Anda ke Floating" : "Your Journey to Floating"}
        subtitle={language === 'id' ? "Floating Paradise terletak di Karimunjawa, sebuah kepulauan yang dilindungi dengan 27 pulau di Laut Jawa. Perjalanan ke sini adalah bagian dari petualangan — izinkan kami memandu Anda langkah demi langkah." : "Floating Paradise is located in Karimunjawa, a protected archipelago of 27 islands in the Java Sea. Getting here is part of the adventure — let us guide you step by step."}
        backgroundImage="/image/getting-here/gh2.webp"
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-32 pb-8 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ① PLAN YOUR JOURNEY */}
          <JourneyStep 
            step={1} 
            stepLabel={language === 'id' ? 'Langkah' : 'Step'}
            title={language === 'id' ? "Rencanakan Perjalanan Anda" : "Plan Your Journey"} 
            subtitle={language === 'id' ? "Terbang ke Jawa Tengah, lalu perjalanan darat ke Pelabuhan Jepara." : "Fly into Central Java, then travel overland to Jepara Harbour."}
          >
            {/* Arriving by Air */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">{language === 'id' ? 'Tiba Melalui Udara' : 'Arriving by Air'}</h3>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {language === 'id' ? (
                    <>Bandara internasional terdekat adalah <strong>Semarang Achmad Yani (SRG)</strong>. Dari sana, perjalanan ke pelabuhan Jepara memakan waktu sekitar 2,5 jam dengan mobil pribadi. Kami dapat mengatur sopir tepercaya untuk menjemput Anda saat kedatangan.</>
                  ) : (
                    <>The closest international airport is <strong>Semarang Achmad Yani (SRG)</strong>. From there, the journey to Jepara harbour takes approximately 2.5 hours by private car. We can arrange a trusted driver to meet you upon arrival.</>
                  )}
                </p>
              </div>
            </FadeIn>

            {/* Private Car Hire */}
            <div className="space-y-4 pt-4">
              <FadeIn direction="up" distance={40}>
                <h3 className="font-serif text-2xl font-bold text-foreground">{language === 'id' ? 'Sewa Mobil Pribadi' : 'Private Car Hire'}</h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-4">
                  {language === 'id' ? 'Kami mengatur mobil pribadi dengan sopir untuk membawa Anda langsung ke Pelabuhan Kartini Jepara. Semua harga sudah termasuk bahan bakar dan biaya tol. Sopir Anda akan menemui Anda di aula kedatangan atau lobi hotel.' : 'We arrange private cars with driver to take you directly to Jepara Kartini Harbour. All prices include fuel and toll fees. Your driver will meet you at the arrivals hall or hotel lobby.'}
                </p>
              </FadeIn>

              {/* Car Hire Grid — data-driven */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {CAR_HIRE_OPTIONS.map((option, i) => (
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
                <button
                  type="button"
                  data-tripla-booking-widget="extras"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-md"
                >
                  {language === 'id' ? 'Pesan Penjemputan' : 'Book a Transfer'}
                </button>
              </FadeIn>
            </div>
          </JourneyStep>

          {/* ② CROSS TO KARIMUNJAWA */}
          <JourneyStep 
            step={2} 
            stepLabel={language === 'id' ? 'Langkah' : 'Step'}
            title={language === 'id' ? "Menyeberang ke Karimunjawa" : "Cross to Karimunjawa"} 
            subtitle={language === 'id' ? "Naik kapal cepat dari Jepara — sekitar 2 jam menyeberangi Laut Jawa." : "Take the fast boat from Jepara — approximately 2 hours across the Java Sea."}
          >
            {/* Express Bahari */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10 space-y-6 overflow-hidden">
                <div className="relative h-48 sm:h-64 -mt-8 -mx-8 mb-6">
                  <Image 
                    src="/image/getting-here/gh4.webp"
                    alt="Express Bahari Fast Boat"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">{language === 'id' ? 'Kapal Cepat Express Bahari' : 'Express Bahari Fast Boat'}</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-4 pt-2">
                  <p>{language === 'id' ? 'Express Bahari beroperasi setiap hari antara Jepara dan Karimunjawa. Jadwal bervariasi berdasarkan bulan dan musim — beberapa hari menawarkan dua keberangkatan. Kami sarankan memesan tiket melalui kami untuk informasi ketersediaan terbaru.' : 'Express Bahari operates daily between Jepara and Karimunjawa. Schedules vary by month and season — some days offer two departures. We recommend booking your tickets through us for the most up-to-date availability.'}</p>
                </div>
              </div>
            </FadeIn>

            {/* Book Through Floating */}
            <FadeIn direction="up" distance={40} delay={0.1}>
              <div className="bg-[#e8efe9] p-8 rounded-2xl space-y-6 mt-8">
                <h3 className="font-serif text-2xl font-bold text-foreground">{language === 'id' ? 'Pesan Melalui Floating' : 'Book Through Floating'}</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-4">
                  <p>{language === 'id' ? 'Kami menawarkan layanan pemesanan tiket gratis untuk semua tamu kami. Biarkan kami yang mengurus logistik sehingga Anda tidak perlu repot mencari situs pemesanan lokal atau mengantre di pelabuhan.' : 'We offer a complimentary ticketing service for all our guests. Let us handle the logistics so you don\'t have to navigate local booking sites or harbour queues.'}</p>
                  <p className="font-medium text-foreground">{language === 'id' ? 'Cukup kirimkan tanggal perjalanan, email, dan salinan paspor/KTP Anda — kami akan mengamankan kursi Anda dengan tiket boarding QR. Tanpa antre.' : 'Simply send us your travel dates, email, and passport copies — we\'ll secure your seats with a QR boarding card. No queuing required.'}</p>
                  
                  {/* WhatsApp Contact */}
                  <div className="bg-background/60 p-4 rounded-xl">
                    <p className="text-sm font-medium text-foreground mb-2">{language === 'id' ? 'Hubungi kami langsung:' : 'Contact us directly:'}</p>
                    <a 
                      href="https://wa.me/6282226945510"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
                    >
                      <WhatsAppIcon />
                      +62 822 2694 5510
                    </a>
                  </div>

                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-sm italic text-foreground/70">
                      {language === 'id' ? 'Kami hanya memesankan tiket untuk tamu dengan reservasi terkonfirmasi di Floating Paradise.' : 'We only book tickets for guests with confirmed reservations at Floating Paradise.'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  data-tripla-booking-widget="extras"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-md"
                >
                  {language === 'id' ? 'Pesan Melalui Floating' : 'Book Through Floating'}
                </button>
              </div>
            </FadeIn>

            {/* Ferry Option */}
            <FadeIn direction="up" distance={30} delay={0.1}>
              <div className="bg-[#F5EFE4] p-6 rounded-2xl space-y-3 mt-8">
                <h4 className="font-serif text-xl font-bold text-foreground">{language === 'id' ? 'Alternatif: Kapal Feri' : 'Alternative: Public Ferry'}</h4>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {language === 'id' ? 'Jika kapal cepat penuh, kapal feri juga tersedia. Durasi: sekitar 4,5 jam. Harga: kurang lebih Rp 180.000 per orang (sekali jalan).' : 'If the fast boat is fully booked, a public ferry is also available. Duration: approximately 4.5 hours. Price: around Rp 180,000 per person (one way).'}
                </p>
              </div>
            </FadeIn>
          </JourneyStep>

          {/* ③ ARRIVE ON THE ISLAND */}
          <JourneyStep 
            step={3} 
            stepLabel={language === 'id' ? 'Langkah' : 'Step'}
            title={language === 'id' ? "Tiba di Pulau" : "Arrive on the Island"} 
            subtitle={language === 'id' ? "Selamat datang di Karimunjawa. Perjalanan pulau Anda berlanjut." : "Welcome to Karimunjawa. Your island journey continues."}
          >
            {/* Arrival Transfer */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="bg-[#e8efe9] p-8 rounded-2xl space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">{language === 'id' ? 'Taksi / Penjemputan' : 'Taxi / Transfer'}</h3>
                <ul className="text-foreground/80 font-light leading-relaxed space-y-2 list-disc list-inside">
                  {language === 'id' ? (
                    <>
                      <li>Taksi dari pelabuhan ke Floating Paradise: Rp 150.000 (dibayar langsung ke sopir, tunai)</li>
                      <li>Waktu tempuh: ~15 menit</li>
                      <li>Sewa skuter: Rp 100.000/hari, termasuk helm</li>
                    </>
                  ) : (
                    <>
                      <li>Taxi from harbour to Floating Paradise: Rp 150,000 (paid directly to driver, cash)</li>
                      <li>Journey time: ~15 minutes</li>
                      <li>Scooter rental: Rp 100,000/day, helmets included</li>
                    </>
                  )}
                </ul>
              </div>
            </FadeIn>
          </JourneyStep>

          {/* ④ REACH FLOATING */}
          <JourneyStep 
            step={4} 
            stepLabel={language === 'id' ? 'Langkah' : 'Step'}
            title={language === 'id' ? "Akses ke Floating Paradise" : "Access to Floating Paradise"} 
            subtitle={language === 'id' ? "Tahap terakhir — tiba di lokasi." : "The final stretch — arriving at the property."}
          >
            <FadeIn direction="up" distance={30} delay={0.2}>
              <div className="bg-muted p-8 rounded-2xl border border-primary/10">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{language === 'id' ? 'Menemukan Kami' : 'Finding Us'}</h3>
                <p className="text-lg text-foreground/80 font-light leading-relaxed">
                  {language === 'id' ? 'Terdapat akses jalan darat langsung dan tempat parkir di lokasi. Ikuti jalan melewati Pantai Bobi — begitu jalan paving berbata berakhir, belok kanan ke jalan tanah. Lanjutkan menyusuri pantai, seberangi jembatan kayu kecil, dan berkendara melewati bekas tambak udang untuk mencapai area parkir Floating Paradise.' : 'There is direct road access and parking on site. Follow the path past Bobi Beach — once the brick road ends, turn right onto the dirt track. Continue along the beach, cross the small wooden bridge, and drive through the old shrimp farm to reach the Floating Paradise parking area.'}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={30} delay={0.1}>
              <p className="text-foreground/70 font-light leading-relaxed mt-6">
                {language === 'id' ? 'Kami merekomendasikan untuk tidak membawa terlalu banyak barang bawaan dan datang dengan pikiran terbuka. Kehidupan di pulau kecil mengundang fleksibilitas, kesabaran, dan kehadiran penuh.' : 'We recommend travelling with light luggage and an open mindset. Life on a small island invites flexibility, patience and presence.'}
              </p>
            </FadeIn>
          </JourneyStep>

          {/* ⑤ YOUR JOURNEY BEGINS */}
          <JourneyStep 
            step={5} 
            stepLabel={language === 'id' ? 'Langkah' : 'Step'}
            title={language === 'id' ? "Perjalanan Anda Dimulai" : "Your Journey Begins"} 
            subtitle={language === 'id' ? "Anda telah tiba. Sekarang lepaskan." : "You've arrived. Now let go."}
            isLast
          >
            <div className="space-y-8">
              <FadeIn direction="up" distance={20} delay={0.2}>
                <p className="text-lg text-foreground/80 font-light leading-relaxed italic">
                  {language === 'id' ? 'Floating dirancang bagi tamu yang menghargai alam, kesederhanaan, dan kedekatan dengan elemen sekitar. Jika Anda menikmati otentisitas, udara laut, dan ritme yang lebih lambat, Anda akan merasa betah di sini.' : 'Floating is designed for guests who appreciate nature, simplicity and being close to the elements. If you enjoy authenticity, sea air and a slower rhythm, you will feel very at home.'}
                </p>
              </FadeIn>
              <FadeIn direction="up" distance={20} delay={0.3}>
                <button
                  type="button"
                  data-tripla-booking-widget="search"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  {language === 'id' ? 'Cek Ketersediaan' : 'Check Availability'}
                </button>
              </FadeIn>
            </div>
          </JourneyStep>

        </div>
      </section>

      {/* ── BOAT TICKET BOOKING ──────────────────────────────────── */}
      <section className="py-24 bg-[#F5EFE4]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" distance={30}>
            <div className="text-center space-y-4 mb-12">
              <p className="text-sm tracking-widest uppercase font-semibold text-primary">
                {language === 'id' ? 'Layanan Tiket Kapal' : 'Boat Ticket Service'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {language === 'id' ? 'Pesan Tiket Kapal Anda' : 'Book Your Boat Ticket'}
              </h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed max-w-lg mx-auto">
                {language === 'id' ? 'Kami yang mengurus tiket Anda supaya Anda tak perlu antre. Tersedia untuk semua penyeberang ke Karimunjawa.' : 'We handle your ticket so you don\'t have to queue. Available to everyone travelling to Karimunjawa.'}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/80 px-5 py-2.5 rounded-xl border border-primary/10">
                <span className="text-sm text-foreground/60">Express Bahari</span>
                <span className="text-foreground/30">•</span>
                <span className="font-serif text-lg font-bold text-primary">Rp 300,000</span>
                <span className="text-sm text-foreground/60">{language === 'id' ? '/ tiket' : '/ ticket'}</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" distance={40} delay={0.15}>
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-primary/5">
              <BoatTicketForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
