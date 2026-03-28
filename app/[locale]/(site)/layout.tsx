import type { Metadata } from "next"
import { Lato } from "next/font/google"
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

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const params = await paramsPromise
  const { data: settings } = await getSiteSettings()

  const defaultTitle = "Floating Paradise | Solar-Powered Eco-Luxury Retreat"
  const defaultDesc =
    "Experience sustainable luxury at Floating Paradise, a solar-powered guesthouse in Karimunjawa. Enjoy yoga retreats, island exploration, and eco-friendly bungalows."

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
      "Karimunjawa, eco-luxury, yoga retreat, guesthouse, bungalows, solar-powered, island paradise",
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        'en': '/en',
        'id': '/id',
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
      <body className={`${lato.className} antialiased`}>
        <SiteSettingsProvider settings={settings}>
          <LanguageProvider>
            {children}
            <FloatingWhatsapp />
            <Analytics />
            <GoogleAnalytics gaId="G-7JZWJ5455X" />
            <Script
              src="https://tripla.jp/sdk/javascript/tripla.min.js"
              strategy="afterInteractive"
              data-triplabot-code="019c5054-aa76-72af-8207-e3dd1c280fa3"
            />
            <Script id="tripla-hide-searchbar" strategy="afterInteractive">{`
              (function(){
                var userClicked = false;
                // Track user clicks on Tripla trigger buttons
                document.addEventListener('click', function(e) {
                  var target = e.target.closest('[data-tripla-booking-widget]');
                  if (target) {
                    userClicked = true;
                    // Reset after 60s to re-enable auto-hide
                    setTimeout(function() { userClicked = false; }, 60000);
                  }
                }, true);

                function hideTriplaSearchBar(){
                  // Don't hide if user just clicked a Tripla trigger
                  if (userClicked) return;

                  // Hide the persistent auto-rendered search bar only
                  var el = document.querySelector('tripla-search-bar');
                  if(el){
                    el.style.cssText = 'display:none !important;height:0 !important;overflow:hidden !important;position:absolute !important;pointer-events:none !important;opacity:0 !important;';
                  }
                  document.querySelectorAll('[data-tripla-booking-widget-search-bar]').forEach(function(e){
                    e.style.cssText = 'display:none !important;height:0 !important;overflow:hidden !important;';
                  });
                }
                var observer = new MutationObserver(function(){ hideTriplaSearchBar(); });
                observer.observe(document.body,{childList:true,subtree:true});
                hideTriplaSearchBar();
                setTimeout(function(){ observer.disconnect(); },15000);
              })();
            `}</Script>
          </LanguageProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
