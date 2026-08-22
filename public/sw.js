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
 *   - /anasayfa/*, /tamir-gorsel/* (hash'siz görseller) → stale-while-revalidate
 *     (aynı adreste içerik değişebiliyor; cache-first bayat kare servis ediyordu).
 *   - Diğer statikler    → cache-first.
 *
 * 2 AĞU 2026 — IT İNCELEMESİ (PWA adım 3/5, hüküm "ŞARTLI GEÇER") DÜZELTMELERİ:
 *   1) /api/servis/yakin cache ANAHTARINDAN ham GPS çıkarıldı. Eskiden anahtar tam URL'di
 *      (…?lat=41.0123456&lng=29.0123456) → koordinat cache'te düz metin duruyordu (kuralın
 *      açık ihlali) VE koordinat her ölçümde değiştiği için anahtar hiç tutmuyordu, yani
 *      offline liste de boş geliyordu. Tek düzeltme iki sorunu birden kapatıyor.
 *   2) Token'lı ikinci el sayfaları (/ikinci-el/alici/…, /ikinci-el/satis/…) kara listeye alındı.
 *   3) Gezinme cache'i BEYAZ LİSTEYE bağlandı: yalnız herkese açık içerik (ana sayfa + blog)
 *      cache'lenir; kalan rotalar offline'da yalnız uygulama kabuğuna düşer.
 */

// ⚠️ SÜRÜM v1 → v2 (2 Ağu 2026): sürüm adı değişince activate() eski cache'leri SİLER.
// Bu, düzeltmenin geriye dönük ayağıdır — daha önce kurulmuş cihazlarda diske yazılmış
// ham GPS'li anahtarlar ve token'lı sayfalar ilk açılışta temizlenir. Sürüm bumb'ı olmadan
// kod düzelir ama eski cihazdaki veri yerinde kalırdı.
// ⚠️ SÜRÜM v2 → v3 (19 Ağu 2026): cihaz kartı kareleri 18 Ağu'da iki kez yenilendi
// (v2 → Kling v3) ama DOSYA ADLARI AYNI kaldı. Hash'siz statikler cache-first
// olduğu için siteyi daha önce açmış cihazlarda SW eski kareyi diskten servis
// etmeye devam etti — Tolga "mavili adamları canlıda göremiyorum" dedi, sebebi bu.
// Sürüm adı değişince activate() eski cache'leri siler; bu, düzeltmenin geriye
// dönük ayağı. İleriye dönük ayağı aşağıdaki HASHSIZ_SWR kuralı.
// v3 → v4 (19 Ağu): kapak fotoğrafı dalga 1 — 15 kapak AYNI dosya adıyla değişti.
// Sürüm artmazsa mevcut ziyaretçide hiçbiri değişmez: build ve ölçüm yeşil görünür,
// canlı eski kalır. (Aynı senaryo v2→v3 notunda da yazılı.)
// v4 → v5 (20 Ağu): merkez-gorsel/genel + surdurulebilirlik AYNI adla değişti (kavram
// kartları) ve /merkez-gorsel/ SWR listesinde yoktu → cache-first bayat kare servis
// ederdi. Yol SWR listesine alındı, sürüm artışı geriye dönük temizliği yapıyor.
// v5 → v6 (20 Ağu, Kling dalga 3): camasir-kac-derecede-yikanir + camasir-makinesi-
// ses-titresim kapakları AYNI adla değişti (kusurlu kareler yenilendi) → 19 Ağu kuralı.
// v7 → v8 (22 Ağu, sirke kuralı): bulasik-makinesi-kokuyor kapak + adim-01/03/06 ve
// camasir-makinesi-kokuyor adim-05 AYNI adla değişti. Buradaki fark, önceki dört
// artıştan daha ağır: değişiklik bir kare tazelemesi değil, "makineye zarar verebilir"
// düzeltmesi. SWR bıraksaydık metin İLK açılışta yeni gelir (HTML network-first),
// görsel ise BİR açılış eski kalırdı → kullanıcı "sirke önermiyoruz" cümlesini sirke
// şişeli kareyle birlikte görürdü; bulaşıkta o kare kapağın kendisi, yani og:image.
// Bedeli (tüm cache boşalır, herkes yeniden indirir) bu pencereye tercih edildi.
const SURUM = "benservis-v8";
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
  // Token'lı ikinci el sayfaları (IT incelemesi, 2 Ağu 2026): URL'in kendisi paylaşılan
  // gizli anahtar (/ikinci-el/alici/:token · /ikinci-el/satis/:token) → cache anahtarında
  // duramaz; sayfanın kendisi de kişiye özel işlem ekranı.
  "/ikinci-el/alici",
  "/ikinci-el/satis",
  "/takip/",
  "/dpp/",
  "/_vercel/", // analitik/insights — cache'lenirse bayat script kalır, ölçüm bozulur
];

const yasakli = (url) =>
  ASLA_CACHE.some((p) => url.pathname === p || url.pathname.startsWith(p + "/") || url.pathname.startsWith(p));

// ✅ GEZİNME BEYAZ LİSTESİ (IT incelemesi, 2 Ağu 2026). Kara liste "neyi saklama"yı sayar;
// beyaz liste "yalnız şunu sakla" der → ileride eklenecek kişiye özel rotalar cache'e
// KENDİLİĞİNDEN giremez. Kapsam: ana sayfa (uygulama kabuğu) + statik blog sayfaları.
// Diğer tüm rotalar (SPA rewrite'ları) zaten aynı kabuğu döndürüyor; offline'da "/" kabuğuna
// düşerler, yani kullanıcı deneyimi kaybı yok.
const gezinmeCachelenir = (url) => url.pathname === "/" || url.pathname === "/blog" || url.pathname.startsWith("/blog/");

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

// Cache ANAHTARI — ham koordinat İÇERMEZ (IT incelemesi, 2 Ağu 2026).
// Konumlu istekler tek bir "kaynak=konum" anahtarında toplanır: cihaz başına "en son görülen
// yakın servis listesi". Ağa giden istek DEĞİŞMEZ (gerçek lat/lng sunucuya gider, sıralama
// doğru kalır) — yalnız diske yazılan anahtar sadeleşir.
// İlçe, kullanıcının kendi seçtiği idari birimdir (ilçe düzeyi = yüz binlerce kişi), koordinat
// değildir; offline'da doğru listeyi verebilmek için anahtarda kalır.
function dizinAnahtari(url) {
  const anahtar = new URL("/api/servis/yakin", self.location.origin);
  const cihaz = url.searchParams.get("cihaz");
  const ilce = url.searchParams.get("ilce");
  if (cihaz) anahtar.searchParams.set("cihaz", cihaz);
  if (url.searchParams.has("lat") && url.searchParams.has("lng")) anahtar.searchParams.set("kaynak", "konum");
  else if (ilce) anahtar.searchParams.set("ilce", ilce);
  return new Request(anahtar.toString());
}

async function servisDiziniSWR(request, anahtar) {
  const cache = await caches.open(DIZIN_CACHE);
  const cached = await cache.match(anahtar);
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
        await cache.put(anahtar, new Response(govde, { status: res.status, statusText: res.statusText, headers: h }));
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

async function gezinme(request, cachelenir) {
  try {
    const res = await fetch(request);
    if (res && res.ok && cachelenir) {
      const cache = await caches.open(KABUK_CACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch {
    const cache = await caches.open(KABUK_CACHE);
    return (await cache.match(request)) || (await cache.match("/")) || Response.error();
  }
}

// İçeriği aynı adreste değişebilen statikler (hash'siz): kare/kapak görselleri,
// ikonlar. Bunlarda cache-first BAYAT İÇERİK üretir — dosya adı sabit olduğu için
// SW yeni sürümü hiç görmez. Çözüm stale-while-revalidate: kullanıcı beklemeden
// cache'ten görür, arka planda tazelenir, BİR SONRAKİ açılışta yeni kare gelir.
// /assets/* bu listede DEĞİL — orada ad hash'li, içerik asla değişmez.
const HASHSIZ_SWR = /^\/(anasayfa|tamir-gorsel|merkez-gorsel|ikon|logo)\//;

async function statikSWR(request, cacheAdi) {
  const cache = await caches.open(cacheAdi);
  const cached = await cache.match(request);
  const agdan = fetch(request)
    .then((res) => {
      if (res && res.ok && res.type === "basic") cache.put(request, res.clone());
      return res;
    })
    .catch(() => null);
  // Cache varsa anında dön (tazeleme arka planda sürer); yoksa ağı bekle.
  return cached || (await agdan) || Response.error();
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
  //    İsim araması (?q=) servis panelinin kurulum ekranına ait, kullanıcı girdisidir →
  //    cache'lenmez, SW hiç karışmaz.
  if (url.pathname === "/api/servis/yakin") {
    if (url.searchParams.has("q")) return;
    e.respondWith(servisDiziniSWR(request, dizinAnahtari(url)));
    return;
  }

  // 5) Diğer tüm API'ler cache'lenmez (bilinmeyen uç = güvenli taraf).
  if (url.pathname.startsWith("/api/")) return;

  // 6) Sayfa gezinmeleri → network-first; cache'e yalnız beyaz listedekiler yazılır.
  if (request.mode === "navigate") {
    e.respondWith(gezinme(request, gezinmeCachelenir(url)));
    return;
  }

  // 7a) Hash'siz görsel varlıkları → stale-while-revalidate (içerik aynı adreste
  //     değişebiliyor; cache-first bayat kare servis ediyordu).
  if (HASHSIZ_SWR.test(url.pathname)) {
    e.respondWith(statikSWR(request, STATIK_CACHE));
    return;
  }

  // 7b) Hash'li build çıktıları ve diğer statikler → cache-first (ad hash'li, içerik sabit).
  e.respondWith(cacheOnce(request, STATIK_CACHE).catch(() => caches.match(request).then((c) => c || Response.error())));
});
