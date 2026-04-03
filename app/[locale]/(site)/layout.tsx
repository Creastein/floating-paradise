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
                var activeTimers = [];
                var closePoller = null;

                function clearAllTimers(){
                  activeTimers.forEach(function(t){ clearTimeout(t); });
                  activeTimers = [];
                  if(closePoller){ clearInterval(closePoller); closePoller = null; }
                }

                /* ── Force-hide search bar: display:none + shadow DOM injection ── */
                function hideEl(el){
                  if(!el) return;
                  el.style.setProperty('display','none','important');
                  el.style.setProperty('visibility','hidden','important');
                  el.style.setProperty('opacity','0','important');
                  el.style.setProperty('height','0','important');
                  el.style.setProperty('width','0','important');
                  el.style.setProperty('overflow','hidden','important');
                  el.style.setProperty('position','fixed','important');
                  el.style.setProperty('top','-9999px','important');
                  el.style.setProperty('pointer-events','none','important');
                  el.setAttribute('aria-hidden','true');
                  if(el.shadowRoot){
                    var sid = 'tripla-hide-injected';
                    if(!el.shadowRoot.getElementById(sid)){
                      var s = document.createElement('style');
                      s.id = sid;
                      s.textContent = ':host{display:none!important;visibility:hidden!important;opacity:0!important;height:0!important;width:0!important;overflow:hidden!important;position:fixed!important;top:-9999px!important;pointer-events:none!important;clip-path:inset(100%)!important} :host *{display:none!important;visibility:hidden!important;opacity:0!important;height:0!important;max-height:0!important;overflow:hidden!important;pointer-events:none!important}';
                      el.shadowRoot.prepend(s);
                    }
                  }
                }

                function hideAll(){
                  var el = document.querySelector('tripla-search-bar');
                  if(el) hideEl(el);
                  document.querySelectorAll('[class*="tripla-search"],[id*="tripla-search"],[class*="triplaSearchBar"],[class*="tripla_search"]').forEach(hideEl);
                }

                /* ── Use rAF to hide before browser paints ── */
                function hideBeforePaint(){
                  requestAnimationFrame(function(){
                    hideAll();
                    requestAnimationFrame(function(){ hideAll(); });
                  });
                }

                function findTriplaModal(){
                  var iframe = document.querySelector('iframe[src*="tripla"]')
                            || document.getElementById('tripla-booking-widget-window');
                  if(iframe){
                    var r = iframe.getBoundingClientRect();
                    if(r.width > 50 && r.height > 50) return iframe;
                  }
                  var hosts = document.querySelectorAll('tripla-search-bar, tripla-booking, [class*="tripla"]');
                  for(var i = 0; i < hosts.length; i++){
                    if(hosts[i].shadowRoot){
                      var f = hosts[i].shadowRoot.querySelector('iframe');
                      if(f){
                        var r2 = f.getBoundingClientRect();
                        if(r2.width > 50 && r2.height > 50) return f;
                      }
                    }
                  }
                  return null;
                }

                function deactivate(){
                  clearAllTimers();
                  hideAll();
                  hideBeforePaint();
                  /* Extra burst-hide for 2 seconds after modal closes */
                  var burst = 0;
                  var burstIv = setInterval(function(){
                    hideAll();
                    burst++;
                    if(burst > 40){ clearInterval(burstIv); }
                  }, 50);
                  activeTimers.push(burstIv);
                }

                function activate(){
                  clearAllTimers();
                  activeTimers.push(setTimeout(deactivate, 120000));
                  var waitCount = 0;
                  var waitForOpen = setInterval(function(){
                    hideAll();
                    waitCount++;
                    if(waitCount > 10){ clearInterval(waitForOpen); deactivate(); return; }
                    var modal = findTriplaModal();
                    if(modal){
                      clearInterval(waitForOpen);
                      var closePollCount = 0;
                      closePoller = setInterval(function(){
                        hideAll();
                        closePollCount++;
                        if(closePollCount > 120){ deactivate(); return; }
                        var m = findTriplaModal();
                        if(!m){ deactivate(); return; }
                      }, 500);
                    }
                  }, 500);
                  activeTimers.push(waitForOpen);
                }

                window.addEventListener('popstate', deactivate);
                if(typeof window !== 'undefined' && window.navigation){
                  window.navigation.addEventListener('navigate', function(){ deactivate(); });
                }

                document.addEventListener('click', function(e){
                  var btn = e.target.closest ? e.target.closest('[data-tripla-booking-widget]') : null;
                  if(!btn) return;
                  activate();
                }, true);

                window.__openTriplaBooking = function(roomId){
                  activate();
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
                        childList: true, subtree: true,
                        attributes: true, attributeFilter: ['src']
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

                /* MutationObserver: hide on every DOM change + rAF for pre-paint */
                var bodyObs = new MutationObserver(function(){
                  hideAll();
                  hideBeforePaint();
                });
                bodyObs.observe(document.body,{childList:true,subtree:true,attributes:true});

                hideAll();
                var c = 0;
                var iv = setInterval(function(){
                  hideAll();
                  c++;
                  if(c > 120){ clearInterval(iv); }
                }, 250);
              })();
            `}</Script>
          </LanguageProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
