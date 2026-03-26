'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { FadeIn } from '@/components/ui/fade-in'
import { MapPin, WhatsappLogo, EnvelopeSimple, InstagramLogo } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/i18n/language-context'

export default function ContactClient() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="bg-primary pt-48 pb-32 px-4 sm:px-6 lg:px-8 mt-0 relative z-10 w-full rounded-b-[2.5rem]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FadeIn direction="up" distance={30}>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight">
              {t.contact.title}
            </h1>
          </FadeIn>
          <FadeIn direction="up" distance={30} delay={0.1}>
            <p className="font-sans text-xl md:text-2xl text-white/90 font-light">
              {t.contact.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2-Column Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Philosophy / Greeting */}
            <div className="space-y-6 md:sticky md:top-32">
              <FadeIn direction="right" distance={40}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold italic">
                  {t.contact.getInTouch}
                </h2>
              </FadeIn>
              <FadeIn direction="right" distance={40} delay={0.1}>
                <p className="text-lg text-foreground/80 font-light leading-relaxed">
                  {t.contact.getInTouchDesc}
                </p>
              </FadeIn>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="space-y-3">
              
              {/* Location Card */}
              <FadeIn direction="left" distance={40} delay={0.1}>
                <div className="bg-[#F5EFE4] py-4 px-5 rounded-2xl flex items-start gap-6 group hover:shadow-md transition-shadow duration-300">
                  <div className="text-primary mt-1">
                    <MapPin size={32} weight="light" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t.contact.location}</h3>
                    <div className="text-foreground text-lg leading-relaxed">
                      <p>Jalan Kapuran, Legon Lele,</p>
                      <p>Karimunjawa – Jepara, Indonesia</p>
                      <a 
                        href="https://maps.app.goo.gl/a4WW4EozRCwJoHeE9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 font-medium"
                      >
                        {t.contact.viewMap}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* WhatsApp Card */}
              <FadeIn direction="left" distance={40} delay={0.2}>
                <div className="bg-[#F5EFE4] py-4 px-5 rounded-2xl flex items-start gap-6 group hover:shadow-md transition-shadow duration-300">
                  <div className="text-primary mt-1">
                    <WhatsappLogo size={32} weight="light" />
                  </div>
                  <div className="space-y-3 w-full">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t.contact.whatsapp}</h3>
                    <div className="text-foreground text-lg space-y-4 pt-1">
                      <a 
                        href="https://wa.me/+6282226945510" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full hover:text-primary transition-colors group/link p-3 -mx-3 rounded-lg hover:bg-white/50"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-2xl" aria-label="English">🇬🇧</span> English
                        </span>
                        <span className="font-medium">+62 822 2694 5510</span>
                      </a>
                      <a 
                        href="https://wa.me/+6281326008111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full hover:text-primary transition-colors group/link p-3 -mx-3 rounded-lg hover:bg-white/50"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-2xl" aria-label="Indonesia">🇮🇩</span> Indonesia
                        </span>
                        <span className="font-medium">+62 813 2600 8111</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Email Card */}
              <FadeIn direction="left" distance={40} delay={0.3}>
                <div className="bg-[#F5EFE4] py-4 px-5 rounded-2xl flex items-start gap-6 group hover:shadow-md transition-shadow duration-300">
                  <div className="text-primary mt-1">
                    <EnvelopeSimple size={32} weight="light" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t.contact.email}</h3>
                    <div className="text-foreground text-lg leading-relaxed pt-1">
                      <a 
                        href="mailto:floatingparadise.legonlele@gmail.com" 
                        className="hover:text-primary transition-colors inline-block break-all font-medium"
                      >
                        floatingparadise.legonlele@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Instagram Card */}
              <FadeIn direction="left" distance={40} delay={0.4}>
                <div className="bg-[#F5EFE4] py-4 px-5 rounded-2xl flex items-start gap-6 group hover:shadow-md transition-shadow duration-300">
                  <div className="text-primary mt-1">
                    <InstagramLogo size={32} weight="light" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t.contact.instagram}</h3>
                    <div className="text-foreground text-lg leading-relaxed pt-1">
                      <a 
                        href="https://www.instagram.com/paradisefloating/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors font-medium inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                      >
                        @paradisefloating
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Relocated Map Embed */}
              <FadeIn direction="up" distance={40} delay={0.5} className="pt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.123!2d110.4456!3d-5.8672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFloating+Paradise+Karimunjawa!5e0!3m2!1sen!2sid"
                  width="100%"
                  height={300}
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Floating Paradise Karimunjawa Location"
                  className="shadow-md border border-primary/10"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
