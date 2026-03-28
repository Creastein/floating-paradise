import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import { getSiteSettings } from '@/lib/sanity.fetch'
import { SiteSettingsProvider } from '@/components/site-settings-provider'
import { urlFor } from '@/lib/sanity.image'
import '../globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import { LanguageProvider } from '@/lib/i18n/language-context'

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
    metadataBase: new URL('https://floatingparadise.id'),
    title,
    description,
    keywords: 'Karimunjawa, eco-luxury, yoga retreat, guesthouse, bungalows, solar-powered, island paradise',
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
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
                    // Reset after 500ms to re-enable auto-hide
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
