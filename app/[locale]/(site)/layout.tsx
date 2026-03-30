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
            <button id="hidden-tripla-trigger" data-tripla-booking-widget="search" style={{ display: 'none' }} aria-hidden="true" />
            <Script
              src="https://tripla.jp/sdk/javascript/tripla.min.js"
              strategy="afterInteractive"
              data-triplabot-code="019c5054-aa76-72af-8207-e3dd1c280fa3"
            />
            <Script id="tripla-hide-searchbar" strategy="afterInteractive">{`
              (function(){
                var bookingActive = false;

                function unhideEl(el){
                  if(!el) return;
                  el.classList.add('tripla-active');
                  el.removeAttribute('aria-hidden');
                  if(el.shadowRoot){
                    var s = el.shadowRoot.getElementById('tripla-hide-injected');
                    if(s) s.remove();
                  }
                }

                function hideEl(el){
                  if(bookingActive) return;
                  if(el){
                    el.classList.remove('tripla-active');
                    el.setAttribute('aria-hidden','true');
                  }
                  if(el && el.shadowRoot){
                    var sid = 'tripla-hide-injected';
                    if(!el.shadowRoot.getElementById(sid)){
                      var s = document.createElement('style');
                      s.id = sid;
                      s.textContent = ':host:not(.tripla-active){visibility:hidden!important;opacity:0!important;height:0!important;width:0!important;overflow:hidden!important;position:fixed!important;top:-9999px!important;pointer-events:none!important;clip-path:inset(100%)!important} :host:not(.tripla-active) *{visibility:hidden!important;opacity:0!important;height:0!important;max-height:0!important;overflow:hidden!important;pointer-events:none!important}';
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

                function unhideAll(){
                  var el = document.querySelector('tripla-search-bar');
                  unhideEl(el);
                  document.querySelectorAll('[class*="tripla-search"],[id*="tripla-search"]').forEach(unhideEl);
                }

                document.addEventListener('click', function(e){
                  var btn = e.target.closest ? e.target.closest('[data-tripla-booking-widget]') : null;
                  if(!btn) return;
                  bookingActive = true;
                  unhideAll();
                  setTimeout(function(){ bookingActive = false; hideAll(); }, 60000);
                }, true);

                window.__openTriplaBooking = function(roomId){
                  bookingActive = true;
                  unhideAll();
                  setTimeout(function(){ bookingActive = false; hideAll(); }, 60000);

                  if(!roomId){
                    var hiddenBtn = document.getElementById('hidden-tripla-trigger');
                    if(hiddenBtn) hiddenBtn.click();
                  } else {
                    window.__triplaDesiredRoomId = roomId;

                    if(window.__triplaRoomObserver){
                      window.__triplaRoomObserver.disconnect();
                      window.__triplaRoomObserver = null;
                    }

                    function findTriplaIframe(){
                      var iframe = document.querySelector('iframe[src*="tripla"]')
                                || document.getElementById('tripla-booking-widget-window');
                      if(iframe) return iframe;
                      var hosts = document.querySelectorAll('tripla-search-bar, tripla-booking, [class*="tripla"]');
                      for(var i = 0; i < hosts.length; i++){
                        if(hosts[i].shadowRoot){
                          iframe = hosts[i].shadowRoot.querySelector('iframe');
                          if(iframe) return iframe;
                          var nested = hosts[i].shadowRoot.querySelectorAll('*');
                          for(var j = 0; j < nested.length; j++){
                            if(nested[j].shadowRoot){
                              iframe = nested[j].shadowRoot.querySelector('iframe');
                              if(iframe) return iframe;
                            }
                          }
                        }
                      }
                      return null;
                    }

                    function patchIframe(){
                      var iframe = findTriplaIframe();
                      if(!iframe || !iframe.src) return false;
                      try {
                        var url = new URL(iframe.src);
                        if(url.searchParams.get('room_type_ids[]') === roomId) return true;
                        url.searchParams.delete('room_type_ids[]');
                        url.searchParams.set('room_type_ids[]', roomId);
                        iframe.src = url.toString();
                        return true;
                      } catch(e){ return false; }
                    }

                    if(!patchIframe()){
                      var observer = new MutationObserver(function(){
                        if(patchIframe()){
                          observer.disconnect();
                          window.__triplaRoomObserver = null;
                        }
                      });
                      observer.observe(document.body, {
                        childList: true,
                        subtree: true,
                        attributes: true,
                        attributeFilter: ['src']
                      });
                      window.__triplaRoomObserver = observer;
                      setTimeout(function(){
                        observer.disconnect();
                        window.__triplaRoomObserver = null;
                      }, 120000);
                    }
                  }
                };

                (function(){
                  var origDesc = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src');
                  if(!origDesc || !origDesc.set) return;
                  Object.defineProperty(HTMLIFrameElement.prototype, 'src', {
                    set: function(val){
                      if(window.__triplaDesiredRoomId && val){
                        try {
                          var u = new URL(val, location.origin);
                          if(u.hostname.indexOf('tripla') !== -1){
                            u.searchParams.delete('room_type_ids[]');
                            u.searchParams.set('room_type_ids[]', window.__triplaDesiredRoomId);
                            val = u.toString();
                            window.__triplaDesiredRoomId = null;
                          }
                        } catch(e){}
                      }
                      origDesc.set.call(this, val);
                    },
                    get: origDesc.get,
                    configurable: true
                  });
                })();

                var bodyObs = new MutationObserver(function(){ hideAll(); });
                bodyObs.observe(document.body,{childList:true,subtree:true});

                hideAll();
                var c = 0;
                var iv = setInterval(function(){
                  hideAll();
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
