"use client"

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from "next/image"
import Link from "next/link"
import { Check, X, ArrowRight, Sun, Waves, HeartHandshake } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import { AutoSlideshow } from "@/components/ui/auto-slideshow"
import { AnimatedTimeline } from "@/components/ui/animated-timeline"
import { PortableText } from '@/components/portable-text'
import { useLanguage, useCmsTranslation } from '@/lib/i18n/language-context'

interface YogaClientProps {
  cmsData: any
}

export default function YogaClient({ cmsData }: YogaClientProps) {
  const { t } = useLanguage()
  const { getCmsValue, language } = useCmsTranslation()
  const y = t.yogaRetreatPage

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1. Hero Section */}
      <section className="relative h-[calc(100vh+4rem)] min-h-[calc(600px+4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/image/Yoga-retreat/hero-yoga.png"
            alt="Sunrise Yoga on the Jetty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 space-y-6 max-w-4xl mx-auto mt-16">
          <p className="text-sm md:text-base tracking-widest uppercase font-semibold text-primary-foreground/90 animate-hero-subtitle-reveal">
            {y.heroSubtitle}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold animate-hero-text-reveal text-primary-foreground">
            {y.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-primary-foreground/90 animate-hero-subtitle-reveal">
            {y.heroDate}
          </p>
          <p className="text-base md:text-lg font-light text-primary-foreground/80 animate-hero-subtitle-reveal max-w-2xl mx-auto italic">
            {y.heroDesc}
          </p>
          <div className="pt-8 animate-hero-subtitle-reveal">
            <Link
              href="#book"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-muted hover:text-primary transition-all duration-300 font-medium tracking-wide shadow-lg uppercase text-sm"
            >
              {y.bookSpot}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Retreat Overview */}
      <section className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-[700px] mx-auto px-4 text-center space-y-8">
          {getCmsValue(cmsData, 'overview') ? (
            <FadeIn once={false} className="prose prose-lg prose-emerald text-center mx-auto text-foreground/70 font-light max-w-none prose-p:leading-relaxed">
              <PortableText value={getCmsValue(cmsData, 'overview')} />
            </FadeIn>
          ) : (
            <>
              <FadeIn once={false}>
                <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed italic font-serif">
                  {y.overviewText1}
                </p>
              </FadeIn>
              <FadeIn delay={0.15} once={false}>
                <div className="w-16 h-px bg-primary/30 mx-auto" />
              </FadeIn>
              <FadeIn delay={0.3} once={false}>
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                  {y.overviewText2}
                </p>
              </FadeIn>
              <FadeIn delay={0.45} once={false}>
                <p className="text-lg md:text-xl text-foreground/80 font-medium italic font-serif">
                  {y.overviewText3}
                </p>
              </FadeIn>
            </>
          )}
        </div>
      </section>

      {/* 3. Three Core Themes */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{y.themesTitle}</h2>
          </FadeIn>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" staggerDelay={0.3} once={false}>
            <StaggerItem className="bg-background p-10 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300" distance={50}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-foreground">{y.theme1Title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{y.theme1Desc}</p>
            </StaggerItem>
            
            <StaggerItem className="bg-background p-10 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300" distance={50}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Waves className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-foreground">{y.theme2Title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{y.theme2Desc}</p>
            </StaggerItem>
            
            <StaggerItem className="bg-background p-10 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300" distance={50}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Sun className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-foreground">{y.theme3Title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{y.theme3Desc}</p>
            </StaggerItem>
          </StaggerGrid>
          <FadeIn delay={0.3} className="text-center mt-12">
            <p className="text-lg text-foreground/60 font-light italic">{y.perfectFor}</p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Nature & Contribution */}
      <section className="py-24 md:py-32 px-4 bg-[#e8efe9] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.35), 0 10px 30px -8px rgba(0, 0, 0, 0.2)' }}>
            <AutoSlideshow
              images={
                cmsData?.images?.length 
                  ? cmsData.images.map((url: string, i: number) => ({ src: url, alt: `Yoga retreat moment ${i + 1}` }))
                  : [
                      { src: "/image/Yoga-retreat/yoga1.png", alt: "Yoga retreat moment 1" },
                      { src: "/image/Yoga-retreat/yoga2.png", alt: "Yoga retreat moment 2" },
                      { src: "/image/Yoga-retreat/yoga3.png", alt: "Yoga retreat moment 3" },
                      { src: "/image/Yoga-retreat/yoga4.png", alt: "Yoga retreat moment 4" },
                      { src: "/image/Yoga-retreat/yoga5.png", alt: "Yoga retreat moment 5" },
                      { src: "/image/Yoga-retreat/yoga6.png", alt: "Yoga retreat moment 6" },
                    ]
              }
              interval={4000}
            />
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn direction="up" distance={40}>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">{y.natureTitle}</h2>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mt-3">{y.karmaYoga}</p>
            </FadeIn>
            <FadeIn delay={0.15} direction="up" distance={40}>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">{y.natureDesc1}</p>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" distance={40}>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">{y.natureDesc2}</p>
            </FadeIn>
            
            <FadeIn delay={0.45} direction="up" distance={40}>
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-medium text-foreground border-b pb-4 border-foreground/10">{y.weaveIntro}</h3>
                <ul className="space-y-5">
                  {[y.weave1, y.weave2, y.weave3, y.weave4, y.weave5].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                      <span className="text-lg text-foreground/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Daily Rhythm */}
      <section className="py-32 px-4 bg-[#F5EFE4]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl font-serif text-foreground mb-6">{y.dailyTitle}</h2>
            <p className="text-foreground/60 font-light">{y.dailySubtitle}</p>
          </FadeIn>
          
          {cmsData?.dailySchedule?.length ? (
            <AnimatedTimeline
              bgColor="#F5EFE4"
              items={cmsData.dailySchedule.map((s: any, index: number) => ({
                title: s.time,
                // Use Indonesian activity description if language is 'id' and field exists
                description: (language === 'id' && s.activity_id) ? s.activity_id : s.activity,
                side: index % 2 === 0 ? "left" : "right"
              }))}
            />
          ) : (
            <AnimatedTimeline
              bgColor="#F5EFE4"
              items={[
                { title: y.scheduleDawnTitle, description: y.scheduleDawnDesc, side: "left" },
                { title: y.scheduleMorningTitle, description: y.scheduleMorningDesc, side: "right" },
                { title: y.scheduleMiddayTitle, description: y.scheduleMiddayDesc, side: "left" },
                { title: y.scheduleAfternoonTitle, description: y.scheduleAfternoonDesc, side: "right" },
                { title: y.scheduleEveningTitle, description: y.scheduleEveningDesc, side: "left" },
              ]}
            />
          )}
          <FadeIn delay={0.3} className="text-center mt-12">
            <p className="text-base text-foreground/50 font-light italic">{y.dailyFooter}</p>
          </FadeIn>
        </div>
      </section>

      {/* 6. Food Philosophy */}
      <section className="py-32 px-4 bg-background text-center">
        <div className="max-w-[640px] mx-auto space-y-10">
          <FadeIn direction="up" distance={40}>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">{y.foodTitle}</h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="up" distance={40}>
            <div className="w-16 h-px bg-primary/30 mx-auto" />
          </FadeIn>
          <FadeIn delay={0.2} direction="up" distance={40}>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed italic font-serif">
              {y.foodQuote}
            </p>
          </FadeIn>
          <FadeIn delay={0.35} direction="up" distance={40}>
            <p className="text-lg text-foreground/70 font-light leading-relaxed">{y.foodDesc}</p>
          </FadeIn>
        </div>
      </section>

      {/* 7. Is This For You? */}
      <section className="py-24 md:py-32 px-4 bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" distance={40} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">{y.isForYouTitle}</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* For You */}
            <FadeIn delay={0.15} direction="up" distance={50}>
              <div className="bg-emerald-50/50 p-8 md:p-12 rounded-3xl space-y-8">
                <h3 className="text-3xl font-serif text-emerald-900 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-emerald-700" strokeWidth={3} />
                  </span>
                  {y.yesIf}
                </h3>
                <ul className="space-y-6 text-emerald-950/80 font-light text-lg pl-14">
                  {[y.yes1, y.yes2, y.yes3, y.yes4, y.yes5, y.yes6].map((item, i) => (
                    <li key={i} className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-emerald-300">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            {/* Not For You */}
            <FadeIn delay={0.35} direction="up" distance={50}>
              <div className="bg-rose-50/50 p-8 md:p-12 rounded-3xl space-y-8">
                <h3 className="text-3xl font-serif text-rose-900 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-rose-700" strokeWidth={3} />
                  </span>
                  {y.noIf}
                </h3>
                <ul className="space-y-6 text-rose-950/80 font-light text-lg pl-14">
                  {[y.no1, y.no2, y.no3, y.no4].map((item, i) => (
                    <li key={i} className="relative before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-rose-300">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Meet Astrid + Testimonials */}
      <section className="py-24 md:py-32 px-4 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          <FadeIn direction="right" className="md:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-8 border-muted shadow-xl">
              <Image
                src="/image/Yoga-retreat/Facilitator.jpg"
                alt="Astrid - Yoga Facilitator"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="left" className="md:col-span-7 space-y-8">
            <div>
              <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">{y.meetAstridRole}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{y.meetAstridTitle}</h2>
            </div>
            
            {getCmsValue(cmsData, 'astridBio') ? (
              <div className="prose prose-lg prose-emerald text-foreground/70 font-light max-w-none prose-p:leading-relaxed">
                <PortableText value={getCmsValue(cmsData, 'astridBio')} />
              </div>
            ) : (
              <>
                <p className="text-xl text-foreground/70 font-light leading-relaxed">{y.meetAstridP1}</p>
                <p className="text-lg text-foreground/60 font-light leading-relaxed">{y.meetAstridP2}</p>
              </>
            )}
          </FadeIn>
        </div>

        {/* Testimonial Cards */}
        <StaggerGrid className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <StaggerItem className="bg-[#F5EFE4] rounded-2xl p-8 md:p-10 space-y-6">
            <p className="text-foreground/70 font-light leading-relaxed italic text-lg font-serif">{y.testi1}</p>
            <p className="text-foreground font-medium text-sm uppercase tracking-wider">{y.testi1Name}</p>
          </StaggerItem>
          <StaggerItem className="bg-[#F5EFE4] rounded-2xl p-8 md:p-10 space-y-6">
            <p className="text-foreground/70 font-light leading-relaxed italic text-lg font-serif">{y.testi2}</p>
            <p className="text-foreground font-medium text-sm uppercase tracking-wider">{y.testi2Name}</p>
          </StaggerItem>
        </StaggerGrid>
      </section>

      {/* 9. Investment & Terms */}
      <section id="book" className="py-24 md:py-32 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          {/* Section: Our Floating Rooms */}
          <FadeIn direction="up" distance={40} className="mb-20">
            <div className="bg-background rounded-3xl overflow-hidden shadow-xl border border-[#D8C3A5]/30">
              <div className="p-8 md:p-16 lg:px-24 text-center">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 tracking-wide">
                  {language === 'id' ? 'BUNGALOW APUNG KAMI' : 'OUR FLOATING ROOMS'}
                </h3>
                <p className="text-[#2F4A3F] tracking-[0.2em] md:tracking-[0.3em] font-semibold text-sm md:text-base uppercase opacity-80 mb-10">
                  {language === 'id'
                    ? <>Butik &middot; Intim &middot; Transformatif</>
                    : <>Boutique &middot; Intimate &middot; Transformative</>}
                </p>
                
                <div className="space-y-6 text-foreground/75 font-light leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
                  <p>
                    {language === 'id'
                      ? 'Bertengger lembut di atas laut dan dibingkai hutan mangrove, bungalow buatan tangan kami bukan sekadar kamar - melainkan bagian dari latihan. Setiap unit berdiri di atas tiang kayu, dengan dinding anyaman bambu dan atap daun kelapa yang dibentuk oleh tangan-tangan lokal terampil. Dirancang dengan ventilasi alami dan ditenagai energi surya, bungalow ini merayakan kesederhanaan, keberlanjutan, dan hidup yang selaras dengan elemen.'
                      : 'Perched gently above the sea and framed by mangroves, our hand-crafted bungalows are more than rooms, they are part of the practice. Each one stands on wooden pillars, with bamboo-woven walls and palm-leaf roofs shaped by skilled local hands. Built with natural ventilation in mind and powered by solar energy, they honour simplicity, sustainability, and a life lived in rhythm with the elements.'}
                  </p>
                  <p>
                    {language === 'id'
                      ? 'Bungalow menghadirkan kenyamanan seperti di rumah sekaligus mengundang cara hidup yang otentik - selaras, hadir, dan indah dalam kesederhanaannya. Di sini, dituntun aliran alami laut, angin, dan cahaya matahari, Anda perlahan kembali ke ritme alami diri - terasa lebih hidup, lebih berakar, dan sepenuhnya tenang.'
                      : 'The bungalows offer the comfort of home while inviting an authentic way of living, attuned, present, and beautifully simple. Here, supported by the natural flow of sea, breeze, and sunlight, you are gently guided back to your own natural rhythm, feeling more alive, more grounded, and deeply at peace.'}
                  </p>
                  <p className="font-medium text-foreground py-4 border-y border-[#D8C3A5]/20 my-6">
                    {language === 'id'
                      ? <>Semua harga per orang dan sudah termasuk pengalaman retreat penuh 7 hari<br className="hidden md:block" /> (7 hari / 6 malam, termasuk hari kedatangan dan kepulangan).</>
                      : <>All prices are per person and include the full 7-day retreat experience<br className="hidden md:block" /> (7 days / 6 nights, including arrival and departure days).</>}
                  </p>
                  <p>
                    {language === 'id'
                      ? 'Dengan total maksimal 8 tamu, tiap pilihan menawarkan keseimbangan berbeda antara privasi, kenyamanan, dan pengalaman berbagi.'
                      : 'With a maximum of 8 guests in total, each option offers a different balance of privacy, comfort, and shared experience.'}
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-[500px] w-full">
                <Image
                  src="/image/bungalows/home-bungalows.webp"
                  alt="Our Floating Rooms - Aerial View"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Section: Pricing Title */}
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{y.investmentTitle}</h2>
            <p className="text-xl text-foreground/60 font-light">{y.investmentSubtitle}</p>
          </FadeIn>
          
          {/* Bungalow-grouped packages */}
          <div className="space-y-16">

            {/* ── SUNRISE BUNGALOW ── */}
            <FadeIn direction="up" distance={40}>
              <div className="rounded-3xl overflow-hidden border border-[#D8C3A5]/30 shadow-lg">
                {/* Main room photo */}
                <div className="relative h-80 md:h-[32rem] w-full overflow-hidden">
                  <Image
                    src="/image/bungalows/sunrise/Sunrise1.webp"
                    alt="Sunrise Bungalow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F4A3F]/75 via-[#2F4A3F]/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">{y.packageSunrise}</h3>
                  </div>
                </div>

                {/* Body: detail photos + description + pricing */}
                <div className="bg-background grid grid-cols-1 md:grid-cols-[300px_1fr]">
                  {/* Detail photo column */}
                  <div className="flex flex-row md:flex-col items-center justify-center gap-4 p-6 bg-muted/20 border-b md:border-b-0 md:border-r border-[#D8C3A5]/20">
                    {[
                      "/image/bungalows/sunrise/Sunrise2.webp",
                      "/image/bungalows/sunrise/Sunrise4.webp",
                      "/image/bungalows/sunrise/Sunrise5.webp",
                    ].map((src, i) => (
                      <div key={i} className="relative w-32 h-32 md:w-[9rem] md:h-[9rem] rounded-full overflow-hidden shrink-0 border-2 border-[#D8C3A5]/50 shadow-sm">
                        <Image src={src} alt={`Sunrise detail ${i + 1}`} fill className="object-cover" sizes="112px" />
                      </div>
                    ))}
                  </div>

                  {/* Description + Pricing */}
                  <div className="p-7 md:p-8 space-y-6">
                    <p className="text-foreground/65 font-light text-sm leading-relaxed">
                      Bungalow paling privat dan paling dicari, dengan panorama laut luas dan semilir angin laut yang bisa Anda nikmati langsung dari ranjang king-size. Kamar double yang berdiri sendiri ini dilengkapi kipas angin plafon, kelambu, dan jendela yang dapat dibuka untuk sirkulasi alami. Kamar mandi pribadi memiliki shower air tawar bertekanan, toilet flush, dan wastafel. Balkon pribadi dengan meja dan kursi melengkapi ruang ini.
                    </p>

                    <div className="space-y-3 border-t border-[#D8C3A5]/30 pt-5">
                      {/* Single Occupancy */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-2">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#2F4A3F] bg-[#D8C3A5]/30 px-3 py-1 rounded-full">{y.packagePrivate}</span>
                          <span className="text-xs text-foreground/45 font-light">Private Bungalow</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 23,000,000 <span className="text-foreground/40 font-normal text-xs">· £1,012 · €1,150</span></p>
                      </div>

                      {/* Shared Double */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-2 border-t border-[#D8C3A5]/15">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#2F4A3F] bg-[#D8C3A5]/30 px-3 py-1 rounded-full">{y.packageSharedDouble}</span>
                          <span className="text-xs text-foreground/45 font-light">Women only · sharing a double bed</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 17,500,000 <span className="text-foreground/40 font-normal text-xs">· £770 · €875 pp</span></p>
                      </div>

                      {/* Couples Special Rate */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-3 px-4 bg-primary/5 rounded-xl border border-primary/15 mt-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{y.packageCouples}</span>
                          <span className="text-xs text-foreground/45 font-light">Private Bungalow</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 16,000,000 <span className="text-foreground/40 font-normal text-xs">· £700 · €800 pp</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── SUNSET BUNGALOW ── */}
            <FadeIn direction="up" distance={40} delay={0.1}>
              <div className="rounded-3xl overflow-hidden border border-[#D8C3A5]/30 shadow-lg">
                {/* Main room photo */}
                <div className="relative h-80 md:h-[32rem] w-full overflow-hidden">
                  <Image
                    src="/image/bungalows/sunset/Sunset1.webp"
                    alt="Sunset Bungalow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F4A3F]/75 via-[#2F4A3F]/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">{y.packageSunset}</h3>
                  </div>
                </div>

                {/* Body: detail photos + description + pricing */}
                <div className="bg-background grid grid-cols-1 md:grid-cols-[300px_1fr]">
                  {/* Detail photo column */}
                  <div className="flex flex-row md:flex-col items-center justify-center gap-4 p-6 bg-muted/20 border-b md:border-b-0 md:border-r border-[#D8C3A5]/20">
                    {[
                      "/image/bungalows/sunset/Sunset4.webp",
                      "/image/bungalows/sunset/Sunset5.webp",
                      "/image/bungalows/sunset/Sunset6.webp",
                    ].map((src, i) => (
                      <div key={i} className="relative w-32 h-32 md:w-[9rem] md:h-[9rem] rounded-full overflow-hidden shrink-0 border-2 border-[#D8C3A5]/50 shadow-sm">
                        <Image src={src} alt={`Sunset detail ${i + 1}`} fill className="object-cover" sizes="112px" />
                      </div>
                    ))}
                  </div>

                  {/* Description + Pricing */}
                  <div className="p-7 md:p-8 space-y-6">
                    <p className="text-foreground/65 font-light text-sm leading-relaxed">
                      Seluruh hati kami tercurah untuk menghadirkan bungalow mandiri pertama Floating, dan kami berharap Anda merasakan pesonanya seperti kami. Bungalow ini menawarkan panorama laut yang luas sekaligus pemandangan matahari terbenam di sepanjang teluk. Kamar double yang berdiri sendiri ini dilengkapi kipas angin plafon, kelambu, dan jendela yang dapat dibuka untuk sirkulasi alami. Kamar mandi pribadi memiliki shower air tawar bertekanan, toilet flush, dan wastafel. Balkon pribadi dengan meja dan kursi melengkapi ruang ini.
                    </p>

                    <div className="space-y-3 border-t border-[#D8C3A5]/30 pt-5">
                      {/* Single Occupancy */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-2">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#2F4A3F] bg-[#D8C3A5]/30 px-3 py-1 rounded-full">{y.packagePrivate}</span>
                          <span className="text-xs text-foreground/45 font-light">Private Bungalow</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 21,500,000 <span className="text-foreground/40 font-normal text-xs">· £945 · €1,075</span></p>
                      </div>

                      {/* Shared Double */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-2 border-t border-[#D8C3A5]/15">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#2F4A3F] bg-[#D8C3A5]/30 px-3 py-1 rounded-full">{y.packageSharedDouble}</span>
                          <span className="text-xs text-foreground/45 font-light">Women only · sharing a double bed</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 17,000,000 <span className="text-foreground/40 font-normal text-xs">· £750 · €850 pp</span></p>
                      </div>

                      {/* Couples Special Rate */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-3 px-4 bg-primary/5 rounded-xl border border-primary/15 mt-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{y.packageCouples}</span>
                          <span className="text-xs text-foreground/45 font-light">Private Bungalow</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 15,000,000 <span className="text-foreground/40 font-normal text-xs">· £660 · €750 pp</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── BAYSIDE BUNGALOW ── */}
            <FadeIn direction="up" distance={40} delay={0.2}>
              <div className="rounded-3xl overflow-hidden border border-[#D8C3A5]/30 shadow-lg">
                {/* Main room photo */}
                <div className="relative h-80 md:h-[32rem] w-full overflow-hidden">
                  <Image
                    src="/image/bungalows/bayside/bayside1.webp"
                    alt="Bayside Bungalow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F4A3F]/75 via-[#2F4A3F]/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">{y.packageBayside}</h3>
                  </div>
                </div>

                {/* Body: detail photos + description + pricing */}
                <div className="bg-background grid grid-cols-1 md:grid-cols-[300px_1fr]">
                  {/* Detail photo column */}
                  <div className="flex flex-row md:flex-col items-center justify-center gap-4 p-6 bg-muted/20 border-b md:border-b-0 md:border-r border-[#D8C3A5]/20">
                    {[
                      "/image/bungalows/bayside/bayside2.webp",
                      "/image/bungalows/bayside/bayside5.webp",
                      "/image/bungalows/bayside/bayside8.webp",
                    ].map((src, i) => (
                      <div key={i} className="relative w-32 h-32 md:w-[9rem] md:h-[9rem] rounded-full overflow-hidden shrink-0 border-2 border-[#D8C3A5]/50 shadow-sm">
                        <Image src={src} alt={`Bayside detail ${i + 1}`} fill className="object-cover" sizes="112px" />
                      </div>
                    ))}
                  </div>

                  {/* Description + Pricing */}
                  <div className="p-7 md:p-8 space-y-6">
                    <p className="text-foreground/65 font-light text-sm leading-relaxed">
                      Awalnya merupakan ruang privat keluarga kami, Bayside kini berkembang menjadi bungalow dua kamar yang lapang, tempat Anda dapat mandi dengan pemandangan hutan mangrove di timur dan laut yang mengalir lembut ke teluk di barat. Bayside memiliki pintu geser yang terbuka ke teras luas, kipas angin plafon, kelambu, serta kamar mandi lengkap - ideal untuk kelompok kecil 2-4 orang yang ingin berbagi pengalaman bersama.
                    </p>

                    <div className="space-y-3 border-t border-[#D8C3A5]/30 pt-5">
                      {/* Shared Bungalow */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-2">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#2F4A3F] bg-[#D8C3A5]/30 px-3 py-1 rounded-full">{y.packageSharedSeparate}</span>
                          <span className="text-xs text-foreground/45 font-light">Own double bed · shared bathroom</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 20,000,000 <span className="text-foreground/40 font-normal text-xs">· £880 · €1,000 pp</span></p>
                      </div>

                      {/* Shared Double */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 py-2 border-t border-[#D8C3A5]/15">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#2F4A3F] bg-[#D8C3A5]/30 px-3 py-1 rounded-full">{y.packageSharedDouble}</span>
                          <span className="text-xs text-foreground/45 font-light">Women only · sharing a double bed</span>
                        </div>
                        <p className="text-foreground/80 font-semibold text-sm">Rp 16,000,000 <span className="text-foreground/40 font-normal text-xs">· £800 · €804 pp</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.4} className="text-center text-foreground/50 italic font-light mt-10 text-base">
            {y.investmentFooter}
          </FadeIn>
        </div>
      </section>

      {/* 9b. What Your Stay Includes */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" distance={40} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">{y.includesTitle}</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <FadeIn direction="right" distance={50}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </span>
                  {y.included}
                </h3>
                <ul className="space-y-4 pl-11">
                  {[y.included1, y.included2, y.included3, y.included4, y.included5, y.included6].map((item, i) => (
                    <li key={i} className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" distance={50} delay={0.15}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-rose-700" />
                  </span>
                  {y.notIncluded}
                </h3>
                <ul className="space-y-4 pl-11">
                  {[y.notIncluded1, y.notIncluded2, y.notIncluded3].map((item, i) => (
                    <li key={i} className="text-lg text-foreground/70 font-light relative before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. Deposit Banner */}
      <section className="py-20 px-4 bg-[#F5EFE4]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <FadeIn direction="up" distance={40}>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">{y.secureTitle}</h2>
          </FadeIn>
          <FadeIn delay={0.15} direction="up" distance={40}>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">{y.secure1}</p>
          </FadeIn>
          <FadeIn delay={0.3} direction="up" distance={40}>
            <p className="text-base text-foreground/50 font-light leading-relaxed">
              {y.secure2} <strong className="font-medium text-foreground/70">{y.secure3}</strong> {y.secure4} <strong className="font-medium text-foreground/70">{y.secure5}</strong>{y.secure6}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 11. Cancellation Policy — Guest */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" distance={40} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">{y.cancelTitle}</h2>
          </FadeIn>
          
          {getCmsValue(cmsData, 'cancellationPolicy') ? (
            <FadeIn direction="up" distance={40} className="max-w-4xl mx-auto prose prose-lg prose-emerald text-foreground/70 font-light prose-p:leading-relaxed text-center">
              <PortableText value={getCmsValue(cmsData, 'cancellationPolicy')} />
            </FadeIn>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                <FadeIn direction="up" distance={40} className="h-full">
                  <div className="bg-muted rounded-2xl p-8 text-center space-y-4 h-full flex flex-col justify-start">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">{y.cancelMore60}</p>
                    <div className="w-12 h-px bg-primary/30 mx-auto" />
                    <p className="text-lg text-foreground font-light">{y.cancelMore60Desc}</p>
                  </div>
                </FadeIn>
                <FadeIn direction="up" distance={40} delay={0.15} className="h-full">
                  <div className="bg-muted rounded-2xl p-8 text-center space-y-4 h-full flex flex-col justify-start">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">{y.cancel30to59}</p>
                    <div className="w-12 h-px bg-primary/30 mx-auto" />
                    <p className="text-lg text-foreground font-light">{y.cancel30to59Desc}</p>
                  </div>
                </FadeIn>
                <FadeIn direction="up" distance={40} delay={0.3} className="h-full">
                  <div className="bg-muted rounded-2xl p-8 text-center space-y-4 h-full flex flex-col justify-start">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">{y.cancelLess30}</p>
                    <div className="w-12 h-px bg-primary/30 mx-auto" />
                    <p className="text-lg text-foreground font-light">{y.cancelLess30Desc}</p>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.4} direction="up" distance={30} className="max-w-2xl mx-auto mt-10 space-y-4">
                <p className="text-center text-foreground/50 italic font-light text-base">{y.cancelTransfer}</p>
                <p className="text-center text-foreground/50 italic font-light text-base">{y.cancelInsurance}</p>
              </FadeIn>
            </>
          )}
        </div>
      </section>

      {/* 12. Cancellations by Floating Paradise */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn direction="up" distance={40}>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center">{y.cancelByUsTitle}</h2>
          </FadeIn>
          
          <FadeIn delay={0.15} direction="up" distance={40}>
            <p className="text-lg text-foreground/70 font-light leading-relaxed text-center">{y.cancelByUsDesc}</p>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up" distance={40}>
            <ul className="space-y-4 max-w-xl mx-auto">
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <span className="text-lg text-foreground/70 font-light">{y.cancelByUs1} <strong className="font-medium text-foreground/80">{y.or}</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <span className="text-lg text-foreground/70 font-light">{y.cancelByUs2}</span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.45} direction="up" distance={30}>
            <p className="text-center text-foreground/50 italic font-light text-sm">{y.cancelByUsFooter}</p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-primary py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn direction="up" distance={50}>
            <h2 className="text-5xl md:text-7xl font-serif text-primary-foreground mb-6">{y.ctaTitle}</h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up" distance={40}>
            <p className="text-2xl text-primary-foreground/80 font-light mb-12">{y.ctaSubtitle}</p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up" distance={30}>
            <div className="inline-block">
              <Link
                href="mailto:hello@floatingparadise.com?subject=Yoga Retreat Booking Enquiry"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-background text-primary font-bold uppercase tracking-wide text-sm hover:scale-105 transition-all duration-300 rounded-full group shadow-xl"
              >
                {y.ctaButton}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
