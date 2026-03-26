import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import { getSiteSettings } from '@/lib/sanity.fetch'
import { SiteSettingsProvider } from '@/components/site-settings-provider'
import { urlFor } from '@/lib/sanity.image'
import '../globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"]
});

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await getSiteSettings()

  const defaultTitle = 'Floating Paradise | Solar-Powered Eco-Luxury Retreat'
  const defaultDesc = 'Experience sustainable luxury at Floating Paradise, a solar-powered guesthouse in Karimunjawa. Enjoy yoga retreats, island exploration, and eco-friendly bungalows.'

  const title = settings?.seoTitle || defaultTitle
  const description = settings?.seoDescription || defaultDesc
  
  // Use CMS image if available, else fallback
  const ogImageUrl = settings?.seoImage ? urlFor(settings.seoImage).width(1200).height(630).url() : null

  return {
    title,
    description,
    keywords: 'Karimunjawa, eco-luxury, yoga retreat, guesthouse, bungalows, solar-powered, island paradise',
    openGraph: {
      title,
      description,
      type: 'website',
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: title }] : undefined,
    },
    icons: {
      icon: '/favicon.svg',
      apple: '/logo.png',
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: settings } = await getSiteSettings()

  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <SiteSettingsProvider settings={settings}>
          {children}
          <FloatingWhatsapp />
          <Analytics />
          <Script 
            src="https://tripla.jp/sdk/javascript/tripla.min.js" 
            strategy="afterInteractive"
            data-triplabot-code="019c5054-aa76-72af-8207-e3dd1c280fa3"
          />
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
