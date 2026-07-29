/* Benservis service worker — YK Kararı #26, PWA adım 2/5 (29 Tem 2026).
 *
 * AMAÇ: ana ekrandan tam ekran açılan, offline'da uygulama kabuğunu + son görülen
 * servis dizinini gösteren bir PWA. PUSH YOK (YK #26: gönderilecek mesaj yok).
 *
 * GİZLİLİK KURALI (IT, PWA planı adım 3/5 — BAĞLAYICI, koda gömülü):
 *   - Cache'te kişisel veri, teşhis metni, ses, konum veya admin yanıtı BULUNAMAZ.
 *   - Yalnız GET cache'lenir; POST/PUT/DELETE'e HİÇ dokunulmaz → rate-limit ve origin
 *     kontrolleri SW üzerinden atlatılamaz (istek olduğu gibi ağa gider).
 *   - KARA LİSTE (aşağıda ASLA_CACHE) her şeyden önce değerlendirilir.
 *
 * STRATEJİ:
 *   - Gezinme (navigate)  → network-first, offline'da cache, o da yoksa kabuk.
 *     (Bayat HTML riski yok; "normal tarayıcı deneyimi bozulmasın" ölçütü bunu gerektiriyor.)
 *   - /assets/* (hash'li) → cache-first (dosya adı hash'li, içerik değişmez).
 *   - /api/servis/yakin  → stale-while-revalidate, TTL 24 saat (anonim servis dizini).
 *   - Diğer statikler    → cache-first.
 */

const SURUM = "benservis-v1";
const KABUK_CACHE = `${SURUM}-kabuk`;
const STATIK_CACHE = `${SURUM}-statik`;
const DIZIN_CACHE = `${SURUM}-servis-dizini`;
const GECERLI_CACHELER = [KABUK_CACHE, STATIK_CACHE, DIZIN_CACHE];

// Servis dizini yanıtı bu süreden eskiyse arka planda tazelenir (offline'da yine de sunulur).
const DIZIN_TTL_MS = 24 * 60 * 60 * 1000;

// Kurulumda yüklenen minimum kabuk. Build'de hash'lenen JS/CSS burada YOK —
// onlar /assets/ altında çalışma anında cache'lenir (isimleri deploy'da değişiyor).
const KABUK = [
  "/",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/icon-512-maskable.png",
  "/manifest.json",
];

// ⛔ ASLA CACHE'LENMEZ (IT kuralı). Teşhis/ses/log = kişisel veri; admin = yetkili yanıt.
const ASLA_CACHE = [
  "/api/diagnose",
  "/api/stt",
  "/api/teshis/log",
  "/api/admin",
  "/admin",
  "/servis-admin",
  "/tarife",
  "/panel",
  "/ikinci-el/admin",
  "/takip/",
  "/dpp/",
  "/_vercel/", // analitik/insights — cache'lenirse bayat script kalır, ölçüm bozulur
];

const yasakli = (url) =>
  ASLA_CACHE.some((p) => url.pathname === p || url.pathname.startsWith(p + "/") || url.pathname.startsWith(p));

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(KABUK_CACHE)
      // addAll tek bir 404'te komple düşer → tek tek, hata toleranslı.
      .then((c) => Promise.all(KABUK.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((adlar) => Promise.all(adlar.filter((a) => !GECERLI_CACHELER.includes(a)).map((a) => caches.delete(a))))
      .then(() => self.clients.claim())
  );
});

// Yeni sürüm hazır olduğunda sayfa "hemen geç" diyebilsin.
self.addEventListener("message", (e) => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

async function servisDiziniSWR(request) {
  const cache = await caches.open(DIZIN_CACHE);
  const cached = await cache.match(request);
  const yas = cached ? Date.now() - Number(cached.headers.get("x-benservis-cached-at") || 0) : Infinity;

  const agdanAl = fetch(request)
    .then(async (res) => {
      // Yalnız gerçek JSON yanıtı cache'lenir; API bir gün HTML hata sayfası döndürürse
      // onu servis dizini diye saklamayalım.
      const json = (res?.headers.get("content-type") || "").includes("application/json");
      if (res && res.ok && json) {
        // Yanıta cache zamanını iliştir (TTL için) — gövde aynen korunur.
        const govde = await res.clone().blob();
        const h = new Headers(res.headers);
        h.set("x-benservis-cached-at", String(Date.now()));
        await cache.put(request, new Response(govde, { status: res.status, statusText: res.statusText, headers: h }));
      }
      return res;
    })
    .catch(() => null);

  if (cached && yas < DIZIN_TTL_MS) return cached; // taze → anında ver, arkada tazele
  const taze = await agdanAl;
  // Ne taze ne cache var (ilk açılış + offline) → boş liste; ekran "servis bulunamadı" der, çökmez.
  // NOT: Response.json() eski Safari'de yok, elle kuruyoruz.
  return (
    taze ||
    cached ||
    new Response(JSON.stringify({ servisler: [], offline: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );
}

async function gezinme(request) {
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      const cache = await caches.open(KABUK_CACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch {
    const cache = await caches.open(KABUK_CACHE);
    return (await cache.match(request)) || (await cache.match("/")) || Response.error();
  }
}

async function cacheOnce(request, cacheAdi) {
  const cache = await caches.open(cacheAdi);
  const cached = await cache.match(request);
  if (cached) return cached;
  const res = await fetch(request);
  // HTML'i cache-first'e ASLA alma: gezinme olmayan bir fetch("/blog/...") de buraya düşebiliyor
  // ve deploy sonrası bayat sayfa servis edilirdi. HTML her zaman network-first koldan geçer.
  const html = (res?.headers.get("content-type") || "").includes("text/html");
  if (res && res.ok && res.type === "basic" && !html) cache.put(request, res.clone());
  return res;
}

self.addEventListener("fetch", (e) => {
  const { request } = e;

  // 1) Yalnız GET. POST/PUT/DELETE ağa dokunulmadan gider (rate-limit/origin korunur).
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // 2) Başka origin'ler (Vercel Analytics, Google Fonts vb.) → SW karışmaz.
  if (url.origin !== self.location.origin) return;

  // 3) Kara liste — her şeyden önce (IT gizlilik kuralı).
  if (yasakli(url)) return;

  // 4) Anonim servis dizini → SWR (uçak modunda son liste gelir).
  if (url.pathname === "/api/servis/yakin") {
    e.respondWith(servisDiziniSWR(request));
    return;
  }

  // 5) Diğer tüm API'ler cache'lenmez (bilinmeyen uç = güvenli taraf).
  if (url.pathname.startsWith("/api/")) return;

  // 6) Sayfa gezinmeleri (ana sayfa + blog) → network-first.
  if (request.mode === "navigate") {
    e.respondWith(gezinme(request));
    return;
  }

  // 7) Hash'li build çıktıları ve statik varlıklar → cache-first.
  e.respondWith(cacheOnce(request, STATIK_CACHE).catch(() => caches.match(request).then((c) => c || Response.error())));
});
