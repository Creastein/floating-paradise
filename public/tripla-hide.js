(function(){
  var activeTimers = [];
  var closePoller = null;
  var triplaActive = false;

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

  function unhideEl(el){
    if(!el) return;
    el.style.removeProperty('display');
    el.style.removeProperty('visibility');
    el.style.removeProperty('opacity');
    el.style.removeProperty('height');
    el.style.removeProperty('width');
    el.style.removeProperty('overflow');
    el.style.removeProperty('position');
    el.style.removeProperty('top');
    el.style.removeProperty('pointer-events');
    el.removeAttribute('aria-hidden');
    if(el.shadowRoot){
      var sid = 'tripla-hide-injected';
      var injected = el.shadowRoot.getElementById(sid);
      if(injected) injected.remove();
    }
  }

  function hideSearchBar(){
    var el = document.querySelector('tripla-search-bar');
    if(el) hideEl(el);
    document.querySelectorAll('[class*="tripla-search"],[id*="tripla-search"],[class*="triplaSearchBar"],[class*="tripla_search"]').forEach(hideEl);
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
    triplaActive = false;
    clearAllTimers();
    hideSearchBar();
    /* Extra burst-hide for 2 seconds after modal closes */
    var burst = 0;
    var burstIv = setInterval(function(){
      if(!triplaActive) hideSearchBar();
      burst++;
      if(burst > 40){ clearInterval(burstIv); }
    }, 50);
    activeTimers.push(burstIv);
  }

  function activate(){
    triplaActive = true;
    clearAllTimers();
    activeTimers.push(setTimeout(deactivate, 120000));
    var waitCount = 0;
    var waitForOpen = setInterval(function(){
      waitCount++;
      if(waitCount > 10){ clearInterval(waitForOpen); deactivate(); return; }
      var modal = findTriplaModal();
      if(modal){
        clearInterval(waitForOpen);
        var closePollCount = 0;
        closePoller = setInterval(function(){
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
    /* Un-hide tripla elements so the booking modal can appear */
    var searchBar = document.querySelector('tripla-search-bar');
    if(searchBar) unhideEl(searchBar);

    if(!roomId){
      var hiddenBtn = document.getElementById('hidden-tripla-trigger');
      if(hiddenBtn) hiddenBtn.click();
    } else {
      window.__triplaDesiredRoomId = roomId;
      if(window.__triplaRoomObserver){
        window.__triplaRoomObserver.disconnect();
        window.__triplaRoomObserver = null;
      }
      /* Click hidden trigger first to open the widget */
      var hiddenBtn2 = document.getElementById('hidden-tripla-trigger');
      if(hiddenBtn2) hiddenBtn2.click();

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

  /* Debounced MutationObserver: only hide search bar, with debounce to prevent infinite loop */
  var hideDebounceTimer = null;
  var bodyObs = new MutationObserver(function(){
    if(triplaActive) return;
    if(hideDebounceTimer) return;
    hideDebounceTimer = setTimeout(function(){
      hideDebounceTimer = null;
      if(!triplaActive) hideSearchBar();
    }, 200);
  });
  bodyObs.observe(document.body,{childList:true,subtree:true});

  hideSearchBar();
  var c = 0;
  var iv = setInterval(function(){
    if(!triplaActive) hideSearchBar();
    c++;
    if(c > 60){ clearInterval(iv); }
  }, 500);
})();
