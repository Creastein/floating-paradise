import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import Image from 'next/image'

export const metadata = {
  title: 'Our Story | Floating Paradise',
  description: 'The story behind Floating Paradise: Astrid & Tono’s vision of sustainable living in Karimunjawa.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen border-box overflow-hidden">
      <Navigation />

      <PageHero 
        title="Our Story"
        subtitle="A quiet conversation on a wooden pier, transformed into a sanctuary above the sea."
        backgroundImage="/hero-island.jpg"
        fullHeight
      />

      <section className="relative -mt-16 z-10 pt-32 pb-24 bg-background overflow-hidden rounded-t-[2.5rem]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero-island.jpg"
                alt="Astrid & Tono"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Astrid & Tono
              </h2>
              <div className="text-lg text-foreground/80 font-light leading-relaxed space-y-6">
                <p>
                  Long before Floating Paradise officially opened its doors, it was just a quiet conversation on a wooden pier. 
                </p>
                <p>
                  Tono, born and raised in Karimunjawa, grew up swimming in these waters and exploring the coral reefs long before tourism arrived. His deep understanding of the tides, the seasons, and local boat-building traditions is the foundation upon which Floating Paradise is built — quite literally.
                </p>
                <p>
                  Astrid first visited Karimunjawa in 2018. Originally from Europe, she was seeking a slower pace of life and a deeper connection to nature. When she met Tono, their shared vision became clear: to build an eco-guesthouse that allowed travelers to experience the raw beauty of the archipelago without leaving a heavy footprint behind.
                </p>
              </div>
            </div>
          </div>

          <div className="py-16 bg-[#F5EFE4] rounded-3xl text-center px-8 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 flex items-center justify-center">
               <span className="font-serif text-[15rem] leading-none text-primary selection:bg-transparent -translate-y-12">"</span>
             </div>
             <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h3 className="uppercase tracking-widest text-primary font-semibold text-sm">Mission Statement</h3>
                <p className="font-serif text-3xl md:text-4xl text-foreground font-medium leading-relaxed">
                  To create a space where guests can reconnect with nature, without compromising the delicate ecosystem that surrounds them.
                </p>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
