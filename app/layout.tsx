import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
