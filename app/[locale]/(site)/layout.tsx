import type { Metadata } from "next"
import { Lato, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import FloatingWhatsapp from "@/components/floating-whatsapp"
import { getSiteSettings } from "@/lib/sanity.fetch"
import { SiteSettingsProvider } from "@/components/site-settings-provider"
import { urlFor } from "@/lib/sanity.image"
import "../../globals.css"

import { GoogleAnalytics } from '@next/third-parties/google'
import { LanguageProvider } from "@/lib/i18n/language-context"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-cormorant',
  display: 'swap',
})

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const params = await paramsPromise
  const { data: settings } = await getSiteSettings()

  const defaultTitle = "Floating Paradise — Off-Grid Eco Resort & Guest House in Karimunjawa, Java"
  const defaultDesc =
    "Off-grid eco resort in Karimunjawa, Java — handcrafted overwater bungalows, solar-powered, direct reef access & sunrise yoga. An exclusive island retreat with only 3 rooms. Book direct for best rates."

  const title = settings?.seoTitle || defaultTitle
  const description = settings?.seoDescription || defaultDesc

  const ogImageUrl = settings?.seoImage
    ? urlFor(settings.seoImage).width(1200).height(630).url()
    : null

  return {
    metadataBase: new URL("https://floatingparadise.id"),
    title,
    description,
    keywords:
      "Karimunjawa eco resort, Karimunjawa accommodation beachfront, off-grid accommodation Indonesia, Karimunjawa island retreat, boutique eco stay Karimunjawa, sustainable stay Karimunjawa, off-grid island stay Indonesia, hidden paradise Indonesia, nature escape Indonesia island, unique stays Karimunjawa, eco resort Indonesia beach, quiet island retreat Indonesia, exclusive island stay Indonesia, guest house Karimunjawa, best place to stay Karimunjawa, overwater bungalow Karimunjawa, floating guesthouse Indonesia, solar-powered accommodation, Karimunjawa accommodation",
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        'en': '/en',
        'id': '/id',
        'x-default': '/en',
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/logo.png",
    },
    verification: {
      google: 'uzqU-wJg4uZLFdlf30fzK8gDWj-umICe7BaW4X7DyOo',
    },
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

export default async function RootLayout({
  children,
  params: paramsPromise,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const params = await paramsPromise
  const { data: settings } = await getSiteSettings()

  return (
    <html lang={params.locale}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="dns-prefetch" href="https://tripla.jp" />
        <link rel="dns-prefetch" href="https://triplabot-production.tripla.ai" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${lato.className} ${cormorant.variable} antialiased`}>
        <SiteSettingsProvider settings={settings}>
          <LanguageProvider initialLocale={params.locale as "en" | "id"}>
            {children}
            <FloatingWhatsapp />
            <Analytics />
            <GoogleAnalytics gaId="G-7JZWJ5455X" />
            <button id="hidden-tripla-trigger" data-tripla-booking-widget="search" style={{ display: 'none' }} aria-hidden="true" />
            <Script
              id="tripla-sdk"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var loaded = false;
                    function loadTripla() {
                      if (loaded) return;
                      loaded = true;
                      var script = document.createElement('script');
                      script.src = 'https://tripla.jp/sdk/javascript/tripla.min.js';
                      script.setAttribute('data-triplabot-code', '019c5054-aa76-72af-8207-e3dd1c280fa3');
                      document.body.appendChild(script);
                      
                      ['scroll','mousemove','touchstart','keydown','click'].forEach(function(e) {
                        window.removeEventListener(e, loadTripla, { capture: true });
                      });
                    }
                    
                    // Load immediately if user interacts
                    ['scroll','mousemove','touchstart','keydown','click'].forEach(function(e) {
                      window.addEventListener(e, loadTripla, { capture: true, once: true, passive: true });
                    });
                    
                    // Fallback to load after 8 seconds in case of no interaction, so it's not totally missing,
                    // but passes Lighthouse's long network idle window.
                    setTimeout(loadTripla, 8000);
                  })();
                `
              }}
            />
            <Script
              id="tripla-hide-searchbar"
              src="/tripla-hide.js"
              strategy="lazyOnload"
            />
          </LanguageProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
