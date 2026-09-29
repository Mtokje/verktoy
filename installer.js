/* Verktøykassen – «Installer som app»-knapp
   Viser en liten stripe nederst når nettleseren tillater installering.
   Chrome/Android: knapp som åpner installeringsvinduet.
   iPhone/iPad (Safari): kort forklaring, siden Apple ikke tillater knapp.
   Skjules når appen allerede er installert, eller når brukeren har trykket «Ikke nå» (i 14 dager). */
(function () {
  var KEY = 'vk-installer-skjult:' + location.pathname;
  var DAGER = 14;

  function erInstallert() {
    return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  }
  function erSkjult() {
    try { var t = +localStorage.getItem(KEY); return t && Date.now() - t < DAGER * 864e5; } catch (e) { return false; }
  }
  function skjul() {
    try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {}
  }
  if (erInstallert()) return;

  var css =
    '.vk-inst{position:fixed;left:50%;bottom:16px;transform:translate(-50%,140%);z-index:2147483000;' +
    'display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);box-sizing:border-box;' +
    'padding:12px 14px;border-radius:10px;background:#1C2733;color:#fff;border:1px solid #33414F;' +
    'box-shadow:0 8px 28px rgba(0,0,0,.35);font:500 15px/1.35 "IBM Plex Sans",system-ui,sans-serif;' +
    'transition:transform .35s ease}' +
    '.vk-inst.vis{transform:translate(-50%,0)}' +
    '.vk-inst img{width:40px;height:40px;border-radius:8px;flex:none}' +
    '.vk-inst .t{flex:1;min-width:0}' +
    '.vk-inst .t b{display:block;font-weight:600}' +
    '.vk-inst .t span{color:#C6CFD6;font-size:13px}' +
    '.vk-inst button{font:inherit;cursor:pointer;border-radius:8px;border:0;flex:none}' +
    '.vk-inst .ja{background:#F26722;color:#fff;font-weight:600;padding:10px 16px;font-size:15px}' +
    '.vk-inst .nei{background:transparent;color:#C6CFD6;padding:10px 6px;font-size:14px}' +
    '@media (max-width:560px){.vk-inst{flex-wrap:wrap;width:calc(100% - 24px);bottom:12px}' +
    '.vk-inst .t{flex:1 1 calc(100% - 56px)}.vk-inst .ja{flex:1 1 auto}}' +
    '@media print{.vk-inst{display:none}}';

  function ikon() {
    var l = document.querySelector('link[rel="icon"]');
    return l ? l.href : '';
  }
  function navn() {
    var t = (document.title || '').split(/\s[–·|-]\s/)[0];
    return t || 'verktøyet';
  }

  function vis(tittel, tekst, knapp, onJa) {
    if (erSkjult() || document.querySelector('.vk-inst')) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var el = document.createElement('div');
    el.className = 'vk-inst'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Installer som app');
    el.innerHTML =
      (ikon() ? '<img alt="" src="' + ikon() + '">' : '') +
      '<div class="t"><b></b><span></span></div>' +
      (knapp ? '<button class="ja" type="button"></button>' : '') +
      '<button class="nei" type="button">' + (knapp ? 'Ikke nå' : 'OK') + '</button>';
    el.querySelector('b').textContent = tittel;
    el.querySelector('span').textContent = tekst;
    if (knapp) {
      el.querySelector('.ja').textContent = knapp;
      el.querySelector('.ja').onclick = function () { onJa(el); };
    }
    el.querySelector('.nei').onclick = function () { skjul(); lukk(el); };
    document.body.appendChild(el);
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('vis'); }); });
  }
  function lukk(el) {
    el.classList.remove('vis');
    setTimeout(function () { el.remove(); }, 400);
  }

  function chrome(ev) {
    vis('Installer ' + navn() + ' som app', 'Eget ikon, fullskjerm og virker uten nett.', 'Installer', function (el) {
      ev.prompt();
      (ev.userChoice || Promise.resolve({})).then(function (r) {
        if (r.outcome === 'dismissed') skjul();
        lukk(el);
      });
    });
  }

  function start() {
    // Hendelsen kan ha kommet før dette skriptet lastet (fanget i <head>)
    if (window.__vkInstallEvent) chrome(window.__vkInstallEvent);
    window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); chrome(e); });
    window.addEventListener('appinstalled', function () {
      var el = document.querySelector('.vk-inst'); if (el) lukk(el);
    });

    // iPhone/iPad i Safari: ingen knapp mulig, vis forklaring
    var ua = navigator.userAgent;
    var ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var safari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
    if (ios && safari) {
      setTimeout(function () {
        vis('Legg ' + navn() + ' på Hjem-skjermen', 'Trykk Del-knappen (firkant med pil) og velg «Legg til på Hjem-skjerm».', null);
      }, 1500);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
