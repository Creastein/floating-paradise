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
          <LanguageProvider initialLocale={params.locale as "en" | "id"}>
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
                var bookingActive = false;
                var HIDE_CSS = 'visibility:hidden !important;opacity:0 !important;height:0 !important;max-height:0 !important;width:0 !important;overflow:hidden !important;position:fixed !important;top:-9999px !important;left:-9999px !important;pointer-events:none !important;z-index:-1 !important;clip-path:inset(100%) !important;';

                function unhideEl(el){
                  if(!el) return;
                  el.style.cssText = '';
                  el.removeAttribute('aria-hidden');
                  if(el.shadowRoot){
                    var s = el.shadowRoot.getElementById('tripla-hide-injected');
                    if(s) s.remove();
                  }
                }

                function hideEl(el){
                  if(bookingActive) return;
                  if(el && el.style.cssText !== HIDE_CSS){
                    el.style.cssText = HIDE_CSS;
                    el.setAttribute('aria-hidden','true');
                  }
                  if(el && el.shadowRoot){
                    var sid = 'tripla-hide-injected';
                    if(!el.shadowRoot.getElementById(sid)){
                      var s = document.createElement('style');
                      s.id = sid;
                      s.textContent = ':host{visibility:hidden!important;opacity:0!important;height:0!important;width:0!important;overflow:hidden!important;position:fixed!important;top:-9999px!important;pointer-events:none!important;clip-path:inset(100%)!important} *{visibility:hidden!important;opacity:0!important;height:0!important;max-height:0!important;overflow:hidden!important;pointer-events:none!important}';
                      el.shadowRoot.prepend(s);
                    }
                  }
                }

                function hideAll(){
                  if(bookingActive) return;
                  var el = document.querySelector('tripla-search-bar');
                  if(el) hideEl(el);
                  document.querySelectorAll('[class*="tripla-search"],[id*="tripla-search"]').forEach(hideEl);
                }

                // Listen for booking button clicks — temporarily allow search bar to show
                document.addEventListener('click', function(e){
                  var btn = e.target.closest ? e.target.closest('[data-tripla-booking-widget]') : null;
                  if(!btn) return;
                  bookingActive = true;
                  var el = document.querySelector('tripla-search-bar');
                  unhideEl(el);
                  document.querySelectorAll('[class*="tripla-search"],[id*="tripla-search"]').forEach(unhideEl);
                  // Re-enable hiding after 60s (user closes booking or navigates away)
                  setTimeout(function(){ bookingActive = false; hideAll(); }, 60000);
                }, true);

                // Also expose global helper for programmatic triggers
                window.__openTriplaBooking = function(roomId){
                  bookingActive = true;
                  var el = document.querySelector('tripla-search-bar');
                  unhideEl(el);
                  document.querySelectorAll('[class*="tripla-search"],[id*="tripla-search"]').forEach(unhideEl);
                  setTimeout(function(){ bookingActive = false; hideAll(); }, 60000);

                  // If a roomId is provided, watch for the Tripla iframe and inject room_type_ids
                  if(roomId){
                    var attempts = 0;
                    var patchInterval = setInterval(function(){
                      attempts++;
                      var iframe = document.getElementById('tripla-booking-widget-window');
                      if(iframe && iframe.src && iframe.src.indexOf('bw.tripla.ai') !== -1){
                        clearInterval(patchInterval);
                        var url = new URL(iframe.src);
                        if(!url.searchParams.has('room_type_ids[]')){
                          url.searchParams.set('room_type_ids[]', roomId);
                          iframe.src = url.toString();
                        }
                      }
                      if(attempts > 50) clearInterval(patchInterval);
                    }, 200);
                  }
                };

                var bodyObs = new MutationObserver(function(){ hideAll(); });
                bodyObs.observe(document.body,{childList:true,subtree:true});

                function watchElement(){
                  var el = document.querySelector('tripla-search-bar');
                  if(el && !bookingActive){
                    hideEl(el);
                    var attrObs = new MutationObserver(function(){ if(!bookingActive) hideEl(el); });
                    attrObs.observe(el,{attributes:true,attributeFilter:['style','class']});
                  }
                }

                hideAll();
                var c = 0;
                var iv = setInterval(function(){
                  hideAll();
                  watchElement();
                  c++;
                  if(c > 60){ clearInterval(iv); bodyObs.disconnect(); }
                }, 500);
              })();
            `}</Script>
          </LanguageProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
