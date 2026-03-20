import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: 'Floating Paradise | Solar-Powered Eco-Luxury Retreat',
  description: 'Experience sustainable luxury at Floating Paradise, a solar-powered guesthouse in Karimunjawa. Enjoy yoga retreats, island exploration, and eco-friendly bungalows.',
  keywords: 'Karimunjawa, eco-luxury, yoga retreat, guesthouse, bungalows, solar-powered, island paradise',
  openGraph: {
    title: 'Floating Paradise | Eco-Luxury Retreat in Karimunjawa',
    description: 'Discover sustainable island living at Floating Paradise with yoga, bungalows, and island experiences.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`} style={{ '--font-serif': cormorant.style.fontFamily } as React.CSSProperties}>
        {children}
        <FloatingWhatsapp />
        <Analytics />
        <Script 
          src="https://tripla.jp/sdk/javascript/tripla.min.js" 
          strategy="afterInteractive"
          data-triplabot-code="019c5054-aa76-72af-8207-e3dd1c280fa3"
        />
      </body>
    </html>
  )
}
