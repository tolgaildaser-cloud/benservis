# Benservis — İş Planı

> **Güncel tek kaynak.** Bu doküman dağınık ve eskimiş plan parçalarını (`CLAUDE.md` faz
> bölümü, `docs/DURUM.md`) birleştirir ve **17 Haziran 2026 pivotunu** yansıtır. Çakışma
> olursa bu doküman geçerlidir; `CLAUDE.md` artık tarihsel/teknik devir bağlamı olarak kalır.
>
> Son güncelleme: **23 Temmuz 2026** (organizasyon & yürütme bölümü eklendi — §9)

---

## 0. Yönetici Özeti

**Benservis**, Türkiye'de ev/elektronik cihaz arızaları için **AI destekli teşhis + tahmini
maliyet** veren ve kullanıcıyı **yakındaki puanlı teknik servise** yönlendiren bir platform.
Kullanıcı teknik bilmez; cihazını ve belirtisini yazar (ya da sesle söyler), sistem olası
arızayı ve tahmini tutarı verir, sonra en yakın yüksek puanlı servisi **tek dokunuşla aratır**.

- **Bugünkü ürün (canlı):** sade model — teşhis + maliyet + Google puanlı yakın servis dizini
  + direkt arama/WhatsApp. Ücretsiz; amaç trafik + niyet verisi.
- **Stratejik katman (kodu yazılı, dormant):** fazlı platform — servis pazaryeri (gelir motoru),
  DPP "Cihazların Tramer'i", ikinci el. Pivotta gizlendi, **silinmedi** → satış avantajı.
- **Hedef:** VC-büyüt-ölç değil; **yalın traction → stratejik satış** (mütevazı-hızlı, birkaç
  milyon ₺), yarı zamanlı yürütülür.
- **Neden şimdi / neden büyük:** AB Dijital Ürün Pasaportu (2025–2030) + Onarım Hakkı
  regülasyonu cihaz yaşam-döngüsü verisini kaçınılmaz kılıyor.

---

## 1. Ürün — Bugün Canlı Olan (Pivot Sonrası Sade Model)

16 Haziran 2026 yatırımcı seansı beklenen gitmeyince, **17 Haziran'da iki taraflı pazaryeri
karmaşıklığı (havuz/panel/SMS) geri çekildi**, ilk versiyonun sade modeline dönüldü:

| Özellik | Durum | Not |
|---|---|---|
| AI arıza + tahmini maliyet teşhisi | ✅ Canlı | Anthropic Claude; referans tarifeye çıpalı |
| Sesli girdi (🎤 → yazıya) | ✅ Canlı | OpenAI Whisper (TR); ses **saklanmaz** |
| Google puanlı yakın servis dizini | ✅ Canlı | **7.832 servis** (İstanbul/İzmir/Ankara), mesafe sıralı, gerçek Google puanı + yorum sayısı |
| Direkt arama + WhatsApp | ✅ Canlı | Birincil aksiyon "📞 Ara"; cep numaralılara WhatsApp butonu |
| Geçerlilik kapısı | ✅ Canlı | Anlamsız belirtide teşhis/fiyat gösterilmez |
| Bilgi Merkezi (SEO içerik) | ✅ Canlı | **59 yazı** (arıza + fiyat + marka hata kodları + nasıl-yapılır); kategori filtreli |
| Admin teşhis analitiği | ✅ Canlı | Anonim `teshis_log` + tarih aralıklı rapor (marka/arıza/il/ilçe/maliyet) |

**benservis.com = sadece teşhis app'i.** DPP/ikinci el/havuz akışları ana akıştan çıkarıldı
(rotalar + backend **dormant** kalıyor, geri dönülebilir).

### Fiyat motoru (moat çekirdeği)
- Gömülü **referans tarife (SEED)** — 2026 TR piyasasıyla kalibre (yedek parça siteleri, Armut,
  şikayetvar, servis fiyat listeleri).
- **±%10 bandı** + gösterilen tutar yukarı en yakın 100'e yuvarlanır.
- **Servis eve-gidiş bedeli: 1.500 TL** sabit eklenir (7 Tem 2026'da 1.000→1.500 güncellendi).
- **Marka kademesi** (gizli, içsel): premium/orta/ekonomik parça bandı; kullanıcıya gösterilmez.
- **Yaş etkisi:** ~8+ yıl + tamir yeninin yarısını aşıyorsa "yenisini al" önerisi.

---

## 2. İş Modeli & Gelir

**Temel tez:** Para teşhiste değil; **doğru servise yönlendirme + güven katmanında**.

- **Bugün:** ücretsiz teşhis = ucuz müşteri kazanımı + niyet verisi ("Ara" tıklaması = sıcak lead).
  Henüz doğrudan gelir yok (pivotta take-rate akışı dormant).
- **Gelir motoru (Faz 2, dormant kod):** servisler kaydolur, **işi biz veririz, ödeme bizim
  üzerimizden geçer → take-rate/komisyon**. Sıralama = puan + mesafe + fiyat (komisyon sıralamaya
  girmez, güven için).
- **İnce/erken gelir alternatifleri (çıkış kaldıracı için):** partner "öne çıkan listeleme"
  ücreti **veya** B2B pilot (teşhis + tarife verisini sigorta/servis zincirine sat). 1 imzalı
  pilot > projeksiyon.
- **Moat:** (a) gerçek/yerel/güncel **tarife veritabanı** (AI fiyatta zayıf, gerçek veri asıl
  değer), (b) gelecekte **DPP yaşam-döngüsü verisi**.

> ⚠️ **Pivot gerilimi:** direkt-arama modeli tamamlanan işlemi yakalamaz → take-rate otomatik
> birikmez. Gelir kanıtı için ya Faz 2'nin ince dilimi (birkaç servis + 1–2 gerçek ödeme) ya da
> B2B pilot gerekir. Bu **#1 açık iş**.

---

## 3. Faz Mimarisi

Benservis "sade bir app" değil, **yapılandırılmış fazlı platform**; kodun çoğu **yazılmış ama
dormant** (pivotta gizlendi). Bu, stratejik alıcıya "çalışan kod" satma avantajıdır.

| Faz | Ne | Durum | Rol |
|---|---|---|---|
| **Faz 1** | AI teşhis + tahmini maliyet + dizin + direkt arama | ✅ **Canlı** | Trafik + ucuz kazanım |
| **Faz 2** | BiTaksi havuz modeli — servis kaydı, iş dağıtımı, ödeme bizden | 🅿️ **Dormant** (kod yazılı) | **Gelir motoru** (take-rate) |
| **Faz 2.5** | İçerik/SEO + iFixit tarzı nasıl-yapılır rehberleri | ✅ **Canlı** (Bilgi Merkezi) | İçerik moat + funnel |
| **Faz 3** | DPP "Cihazların Tramer'i" + ikinci el pazaryeri | 🅿️ **Dormant** (kod ~yazılı) | **Taç mücevher** |
| **Faz 4** | İkinci el pazaryeri derinleşme (sahibinden formatı, e-ticaret) | 🅿️ **Dormant** (~%75) | Provenance = fiyat gücü |
| **Faz 5** | Perakende entegrasyonu (Teknosa/Koçtaş/Hepsiburada) + garanti takibi | 🔮 Vizyon | Otomatik DPP + kilitlenme |

**Not:** `docs/DURUM.md` "Faz 3 DPP Canlıda" diyor — bu **inşa edildiği** anlamında doğru, ama
pivotla ana akıştan çekildi (dormant). Vitrin bugün yalnız Faz 1.

**Veri döngüsü (vizyon):** Teşhis → Tamir → DPP kaydı → İkinci el satış → daha çok kullanıcı →
daha zengin DPP → daha güvenilir pazar.

---

## 4. Pazara Çıkış (GTM)

- **Bütçe:** sıfır / organik. **Motor:** içerik-SEO (Google'daki "cihazım bozuldu / tamir kaç
  para" talebini yakala).
- **Kanca:** *"Önce öğren, sonra çağır."* Düşman **belirsizlik**, servisler değil — suçlayıcı
  ("tamirci kazıkladı") dil YOK (servisler ileride partner).
- **Beachhead:** İstanbul → **ilçe bazlı** (Anadolu yakası: Kadıköy + Ataşehir + Ümraniye), ilçe
  SEO ile domine et, sonra genişle.
- **İçerik:** Bilgi Merkezi 59 yazı — cihaz arıza/fiyat + **marka hata kodları** (Track B, en
  yüksek niyet) + **nasıl-yapılır** (iFixit tohumu) + güvenli servis. FAQ/Article/Breadcrumb schema,
  sitemap, GSC kurulu (impressions yükseliyor).
- **Sosyal + entity:** @benservis.app (IG · TikTok · YouTube); görünürlük ağı (LinkedIn ·
  Wellfound · Startups.watch · StartupCentrum) → "bonservis" düzeltmesini kıran entity sinyalleri.
- **KPI (yatırımcı için):** teşhis tamamlama oranı, "Ara" dönüşümü, K-faktörü, D7/D30 retention,
  şehir penetrasyonu.

> **Session ayrımı:** 18 Tem 2026'da tam organizasyon yapısına evrildi — bkz. **§9 Organizasyon
> & Yürütme** (YK + iki ayrı org + merkez fonksiyonlar + zamanlanmış çalışanlar).

---

## 5. Çıkış / Yatırım Stratejisi

**Üçüncü stream** (ne core ürün ne marketing): **yalın traction → stratejik satış.**

- **Yön:** VC-büyüt-ölç DEĞİL. Hedef değer **mütevazı ama hızlı** (birkaç milyon ₺), temiz
  paketleme satışı. Kaynak: **yarı zamanlı** + sınırlı sermaye (1 Eyl 2026 Ensmart'a geçiş).
- **Satış hikâyesi:** *"Cihazların Tramer'i — cihaz yaşam döngüsünün veri + güven katmanı."*
- **M&A içgörüsü:** tam vizyonu **satarsın**, tamamını **inşa etmezsin.** Değer = çalışan Faz 1 +
  traction + Faz 2'nin **ince kanıtı** (1–2 gerçek işlem/ödeme = take-rate çalışıyor) + Faz 3
  DPP'nin regülasyon-destekli **vizyonu + dormant kodu**.
- **Değer merdiveni:** Faz1 = varlık alımı (düşük) · +Faz2 = gelir çarpanı (orta) · +Faz3 Tramer =
  stratejik prim (yüksek). Kaç rung kanıtlanırsa fiyat o kadar yüksek; dormant kod her rung'ı ucuzlatır.
- **4 yalın kaldıraç:** (1) traction kanıtı (temiz funnel metriği) · (2) **gelir kanıtı** — ince
  ama gerçek (partner ücreti / B2B pilot; **en yüksek kaldıraç**) · (3) temiz paketleme
  (A.Ş./Ltd'de domain+kod+içerik+marka; **RLS+KVKK kapat**) · (4) görünürlük (Crunchbase/LinkedIn/
  Startups.watch).
- **Karar kapısı:** eşik (ör. 6. ay X ziyaret + Y teşhis + 1–2 ödeyen partner) → stratejik satış /
  küçük tur / nakit-akışı varlığı.
- **Alıcı haritası:** sigorta + genişletilmiş garanti (underwriting) · perakende (Teknosa/
  Hepsiburada/Vestel) · hizmet pazaryerleri (Armut/sahibinden) · beyaz eşya/yetkili servis ağları ·
  ikinci el pazaryerleri (Dolap/Yenilenmiş) · acqui-hire fallback. Satış = bankacı değil, **kurucu
  ağıyla 5–10 alıcıya doğrudan** + hafif rekabet.

---

## 6. Regülasyon & Konumlandırma Rüzgârı

- **AB Dijital Ürün Pasaportu (2025–2030 kademeli):** cihaz yaşam-döngüsü kaydını zorunlu kılıyor;
  Türkiye AB uyumunda izliyor → DPP fazının "neden şimdi / neden büyük" gerekçesi.
- **AB Onarım Hakkı:** "önce öğren, sonra çağır" + iFixit hizası.
- **COP31 (Türkiye ev sahibi) + Sıfır Atık:** döngüsel-ekonomi konumlandırması; en keskin kart
  AB Onarım Hakkı hizası + DPP. (Not: traction abartma.)
- **SERBİS (servis.gov.tr):** T.C. Ticaret Bakanlığı resmî yetkili-servis sistemi. Public API yok;
  ama KVKK metni "üçüncü taraflarla paylaşım" mekanizması olduğunu söylüyor → resmî veri erişimi
  başvurusu (Tüketicinin Korunması Gen. Md. / CİMER) gerçekleşirse **"✓ SERBİS kayıtlı yetkili
  servis" otomatik rozeti = büyük moat + yatırımcı hikâyesi**. Başvuru **ertelendi**. (Not: telefon
  eşleşmesiyle 207 servislik "✓ SERBİS Yetkili" rozeti Tem 2026'da zaten canlıya alındı.)
- **🆕 YÜBİS — Yenilenmiş Ürün Bilgi Sistemi (RG 27 Haz 2026, yürürlük 1 Ağu 2026):** Ticaret
  Bakanlığı, yenilenmiş cihazlar için **cihaz başına dijital sicil** kurdu (değişen parçalar,
  e-sertifika, çalıntı sorgusu; tüketici internetten sorgular). Kapsam yalnız elektronik
  (telefon/tablet/TV/bilgisayar/konsol/saat/modem) ve yalnız "yenileme anı" — **beyaz eşya ve
  yaşam-boyu tamir geçmişi YOK = tam bizim boşluğumuz.** Okuma: devlet "cihaz sicili" kavramını
  meşrulaştırdı (DPP tezimizin yerli emsali; aynı bakanlık SERBİS+YÜBİS+Yeşil Mutabakat'ı
  yürütüyor → kurumsal tutarlılık hikâyesi). Konum: *"YÜBİS yenilenmiş elektroniğin doğum
  belgesi; biz tüm cihazların sağlık karnesi."* Risk izlemede: kapsam beyaz eşyaya genişlerse /
  üçüncü taraf API açılırsa (aylık DPP mevzuat takibine eklendi, 23 Tem 2026).

---

## 7. Teknik Mimari (Özet)

- **Frontend:** React + Vite SPA (inline stil, path-switch routing, harici CSS yok).
- **Backend:** Vercel serverless fonksiyonları (tek proje: **project-83ils**; benservis.com +
  www ona bağlı). API anahtarları yalnız sunucu env'inde.
- **AI:** teşhis → Anthropic Claude (`/api/diagnose`); ses → OpenAI Whisper (`/api/stt`, ses
  saklanmaz).
- **Servis dizini:** `/api/servis/yakin` — 7.832 servis (8MB JSON sunucuda `includeFiles` +
  `fs.readFileSync`; client'a import edilmez), kategori + telefon + en yakın 150.
- **Veri:** Supabase Postgres (RLS açık) — dormant fazlar (havuz/DPP/ikinci el) + anonim
  `teshis_log` analitiği. Rate-limit: Upstash (10/saat per-IP).
- **Statik blog:** `content/blog/*.md` → `scripts/build-blog.mjs` → `dist/blog/` (SEO'lu HTML +
  sitemap + schema).
- **Güvenlik:** RLS + rate-limit canlı. **Kalan:** Faturalar bucket private + KVKK temizlik
  (satıştan önce kapanmalı — diligence).

---

## 8. Mevcut Durum & Sıradaki Adımlar

**Canlı:** teşhis + maliyet, sesli girdi, 7.832 servis dizini, direkt arama + WhatsApp, geçerlilik
kapısı, admin teşhis raporu, Bilgi Merkezi 59 yazı, entity/sosyal ağı, GSC (impressions ↑).

**Öncelik sırası:**
1. **Gelir kanıtı (#1 kaldıraç):** B2B pilot (teşhis+tarife verisi) **veya** partner öne-çıkan
   listeleme ücreti **veya** Faz 2'nin ince dilimi (birkaç servis + 1–2 gerçek ödeme).
2. **Funnel/dönüşüm ölçümü:** teşhis → "Ara" tıklaması dönüşümünü oku (Vercel Analytics event'leri
   + `teshis_log`).
3. **Branded-search itmesi** + backlink/basın (yeni domain otoritesi; #1 SEO eksiği).
4. **Temiz paketleme:** A.Ş./Ltd + **KVKK/RLS kapatma** + Faturalar bucket private.
5. **Karar kapısı** → çıkış yolu seçimi.

**Riskler:**
- **Arz tarafı** (servisleri gelir modeline ikna) = asıl zorluk, kod değil.
- Pivot direkt-aramayı öne aldı → transaction yakalanmıyor → **gelir modeli yeniden tasarlanmalı**
  (ör. arama sonrası "ne kadar ödedin?" anketi = hem veri hem take-rate köprüsü).
- Güvenlik/KVKK açıkları satıştan önce kapanmalı.

---

## 9. Organizasyon & Yürütme (YK Düzeni — 18-20 Tem 2026'da kuruldu)

Benservis yarı zamanlı yürütüleceği için (1 Eyl 2026 sonrası) işletme, **AI departmanlarından
oluşan bir organizasyona** devredildi. Kurucu = Yönetim Kurulu; departmanlar = Claude
oturumları + zamanlanmış görevler ("çalışanlar").

### Yapı: tek YK, iki tamamen ayrı organizasyon

- **🏛️ YK (ana oturum):** Tüm kararlar burada alınır ve **karar defteri**
  (`~/Desktop/yonetim-kurulu/KARAR-DEFTERI.md`) üzerinden dağılır; her çalışan koşusuna
  kendi bölümünü okuyarak başlar. Öncelik: **karar defteri > backlog > brif.** Tüm iş
  raporlarının bildirimleri YK'ya döner; Pazartesi sabahı otomatik **YK brifingi** üretilir.
- **🟦 BENSERVİS ORG:** Pazarlama-Benservis · IT (veri + güvenlik + teşhis + altyapı) ·
  Yazılım/QA (güvenilirlik + fiyat doğruluğu **denetimi** — IT işletir, Yazılım denetler) ·
  Kurumsal (A.Ş./marka/exit + **Yatırım Araştırma ekibi** = exit stream).
- **🟧 KIPIR ORG:** tamamı ayrı "Kıpır Shopify" oturumunda (ürün yönetimi + fiyatlama +
  operasyon). Benservis'le içerik/plan **çapraz karışmaz**.
- **🏦 Merkez fonksiyonlar (iki org'a hizmet):** Muhasebe (ham finansal veri, Shopify ciro +
  gider taraması) · Bütçe & Raporlama (org bazlı bilançolar, bütçe vs gerçekleşen).
- **🎨 Ortak pazarlama havuzu:** 3 AI rol — pazarlama uzmanı (günlük; **sosyal yayın tekeli
  onda**), grafiker (Pzt/Çar/Cum), front-endci (Pzt/Çar/Cum; canlıya taşıma yetkili, otonom
  koşuda deploy öncesi kurucu onayı). İki org'a **ayrı** çalışır (backlog iki bölüm).

### Rutin takvimi

| Ne zaman | Çalışan / iş |
|---|---|
| Pzt 09:00 | YK brifingi (org bazlı durum + onay kuyruğu + açık kararlar + öncelikler) |
| Her gün 09:15 | Pazarlama uzmanı (haftalık plan: org başına 3 carousel + 1 Reels + 3 blog taslağı; onaylı yayın) |
| Pzt/Çar/Cum | Grafiker (10:30) + Front-endci (11:30) |
| Çar 09:00 | Yazılım fiyat nöbeti (underpricing avı + fiyat determinizm testi) |
| Perş 10:00 | Yatırım/pazar radarı (Kurumsal) |
| Ayın 1'i | Sağlık kontrolü (site/API probe) + DPP mevzuat takibi |
| Ayın 2'si / 3'ü | Muhasebe finans raporu → Bütçe & Raporlama bilançosu |
| Ayın 15'i | Tarife günü (veri onayı + snapshot — insan onaylı) |

### Yürütme ilkeleri

1. **İnsan onay kapıları:** sosyal yayın (1 Ağu'ya kadar onay kuyruğu), blog/site yayını,
   tarife onayı, tüm harcamalar ve bütçe hedefleri kurucuda. Görevler ödeme/finansal işlem
   asla yapmaz.
2. **"Beyin Claude'da, borular Zapier'de":** Zapier yalnız veri/yayın borusudur (Shopify
   sipariş çekme, IG+YT yayını); yönetim ve muhakeme Claude oturumlarında.
3. **Bütçe çerçevesi (2026 H2):** Benservis ilk yıl gelir hedefi yok (ücretsiz büyüme);
   Kıpır aylık ciro hedefi Ç1 10K TL → her çeyrek ×2. Pazarlama bütçesi: Benservis 5.000
   TL/ay, Kıpır 200 TL/ay (harcama kurucuda) — "sıfır bütçe organik" dönemi 20 Tem'de kapandı.
4. **Kurumsal takvim:** Eylül 2026 marka tescili (şahıs adına, Tolga İldaser) → **Ekim 2026
   Benservis A.Ş. kuruluşu** + kuruluşta pay senedi bastırma (2 yıl sonrası vergisiz hisse
   satışı → exit penceresi Ekim 2028+; §5'teki "temiz paketleme" kaldıracını karşılar).

## İlgili Dokümanlar

- `CLAUDE.md` — teknik devir dokümanı (tarihsel; orijinal 5-fazlı vizyon).
- `docs/DURUM.md` — faz durum özeti (eski; Faz 3 "canlı" ifadesi pivot öncesi).
- `docs/superpowers/specs/` + `plans/` — her fazın spec + uygulama planı.
- `docs/superpowers/admin-konsol-roadmap.md` — admin konsol yol haritası.
