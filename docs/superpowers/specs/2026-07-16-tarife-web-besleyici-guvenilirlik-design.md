# Tarife Veri Motoru — Web Besleyici + Güvenilirlik (reconciliation)

**Tarih:** 2026-07-16
**Durum:** Brainstorming onaylı → spec review → writing-plans
**Branch:** `feat/tarife-veri-motoru-web` (güncel main'den; eski `feat/tarife-veri-motoru` Haziran'da kalmış)
**Temel alınan:** `docs/superpowers/specs/2026-06-17-tarife-veri-motoru-design.md` + `docs/superpowers/plans/2026-06-17-tarife-veri-motoru.md` (onaylı **ama hiç uygulanmamış**)

---

## 1. Karar & Bağlam

**Problem (kullanıcı, 16 Tem):** *"Sunduğumuz tahmini maliyetler ve arızalar gerçek hayata uygun çıkmazsa marka başlamadan biter."* Bugün maliyet, `src/App.jsx`'te **elle kalibre statik SEED**'e çıpalı; gerçekle karşılaştıran **ölçüm/geri besleme yok** → "gerçek hayata uygun mu" sorusunun ölçülebilir cevabı yok.

**Zaten var olan temel:** 17 Haziran'da Supabase tabanlı bir "Tarife Veri Motoru" (depo + küratörlük + AI-bağlama) **tasarlandı ve tam planlandı** (5 slice, 7 task, gerçek SQL/API/UI kodu) — ama **hiç uygulanmadı** (kanıt: `api/_tarife.js`/`TarifeAdmin.jsx`/`api/_seed.js` yok; SEED hâlâ `App.jsx`'te client-side; prompt hâlâ tarayıcıda kuruluyor). O tasarımda **web scraping `kaynak='web'` v2 olarak** işaretlenmişti.

**Bugünkü kararlar (bilinçli):**
1. **Ground truth = WEB** (pilot kanıtladı: web'de yapılandırılmış + marka-kademeli + gerçekçi fiyat VAR ve çıkarılabilir; asıl zorluk veri BULMA değil **KALİTE** → çok-kaynak mutabakatı).
2. **Depo = Supabase** — 17 Haz tasarımını **canlandır** (yeni paralel yapı kurma). Web scraping onun **v2'si**; artık **ilk besleyici**.
3. **Wiring = baked-snapshot** (aşağıda §6): mevcut fiyat hattına dokunmadan; full server-side moat sonraki dilim.

**Pilot doğrulaması (16 Tem, kaynaklar spec sonunda):** buzdolabı kompresör all-in Bosch/Siemens 9.000 > Profilo 8.500 > Arçelik/Beko 7.500 (marka kademesi **gerçek**); termostat parça Bosch 700-750 / Arçelik 200-300 / Vestel 150-200 (SEED 250-1.200 ile **tutarlı**); gaz/keşif sayfası temiz tabloya **çıkarıldı** (keşif 800-1.200 → gidiş 1.500'ümüz üstünde = kalibrasyon sinyali).

---

## 2. Reconciled Mimari

```
scripts/tarife-topla.mjs  (çok kaynak → mutabakat → güven)
     │  POST /api/tarife/veri  (kaynak='web', kaynak_url)
     ▼
Supabase tarife_veri  (ham noktalar)
     │  onerTarife()  (medyan/percentile + aykırı ele)
     ▼
TarifeAdmin  /tarife  "Onayla"  ◄── SEN (insan küratör; her onay bir kayıt)
     │  POST /api/tarife/onayla
     ▼
Supabase tarife  (Onaylı kanonik)
     │  scripts/tarife-snapshot.mjs
     ▼
src/tarife-seed.generated.js  ──►  App.jsx import (hardcoded SEED yerine)
                                      │  markaKademe / seedBeklenen / A2 / normalizeMaliyet(1500)  AYNEN
                                      ▼
                                    kullanıcıya tahmini maliyet

scripts/tarife-rapor.mjs:  web mutabakatı  vs  mevcut Onaylı/SEED  →  % sapma raporu (ÖLÇÜM)
```

Her birim tek sorumluluk + net arayüz: **besle** (topla) → **harmanla** (onerTarife) → **onayla** (admin) → **yayınla** (snapshot) → **ölç** (rapor).

---

## 3. 17 Haz'dan DEĞİŞMEYEN (canlandırılır, aynen benimsenir)

Bu parçalar 17 Haz tasarım/planında tam yazılı; olduğu gibi uygulanır:
- **Şema:** `tarife_veri` (ham) + `tarife` (Onaylı) — 2 tablo, **RLS açık + anon policy yok** (moat: yalnız service-role). [Jun 17 §3 / plan Slice 1 Task 1]
- **Harmanlama:** `onerTarife(points)` saf fonksiyon (medyan/percentile P25–P75, medyanın 0.4×–2.5× dışını ele; <3 nokta → min/max). [plan Slice 2 Task 3, TDD]
- **API:** `POST /api/tarife/veri` (tekil **veya** dizi; `kaynak` alanı zaten `('saha','web','gercek_is','seed')` destekli), `GET /api/tarife/gruplar` (öneri + durum), `POST /api/tarife/onayla` (upsert Onaylı) — tümü `Bearer ADMIN_TOKEN`, service-role. [plan Slice 2 Task 4]
- **Admin UI:** `TarifeAdmin.jsx` + `/tarife` rotası — "Veri Gir" + "Onayla" sekmeleri + CSV import, marka paleti. [plan Slice 3 Task 5]

---

## 4. DELTA 1 — Web Besleyici (yeni; 17 Haz'ın v2'si, artık ilk besleyici)

**`scripts/tarife-topla.mjs`** (YEREL araç, `serbis-match.mjs` deseni):
- **Girdi:** hedef `(cihaz, arıza)` listesi — güncel `App.jsx` SEED anahtarlarından türetilir.
- **Kaynaklar (çok tip, cross-check):** (a) pazaryeri agregatör (Cimri/Akakçe) → **parça** fiyatı; (b) servis fiyat-listeleri (çok site) → **all-in / işçilik**. Çıkarma **LLM/Firecrawl extraction** ile — kırılgan CSS selektör YOK (pilotta kanıtlandı; 17 Haz'ın `arizam_scraper.py` "selektör eksik" sorununu bu çözer).
- **Mutabakat:** kaynaklar arası medyan + aykırı ele (`onerTarife`'nin 0.4×–2.5× kuralıyla uyumlu); `kaynak_sayisi` sayılır.
- **Güven:** `yüksek` = 3+ kaynak & düşük varyans · `orta` = 2 kaynak · `düşük` = 1 kaynak veya yüksek varyans.
- **Çıktı:** her hedef için `POST /api/tarife/veri` (tekil/dizi) `kaynak='web'`, `kaynak_url`, `notlar` = "kaynak siteler + güven".
- **Marka → Genel band:** web marka-bazlı örnek verir (Bosch 750, Vestel 150). Bunlar `marka='Genel'` altına **ayrı veri noktaları** olarak yazılır → `onerTarife` bunları bir **banda** harmanlar (`parca_min` = ekonomik uç, `parca_max` = premium uç) → mevcut `markaKademe()` markayı band içinde konumlar (premium→`pmax`, ekonomik→`pmin`). Yani web verisi mevcut kademe hattını **besler**, değiştirmez. (Tek markada belirgin sapma varsa ileride `marka=<X>` satırı açılabilir; bu turda Genel band.)
- **Kadans:** on-demand (≈aylık), **cron DEĞİL** — insan onayı şart (karar #7).

**Şema eklentisi:** `tarife_veri`'ye `kaynak_url text` kolonu (web denetim izi; 17 Haz şemasında yok). `POST /api/tarife/veri` + `temizle()` bu alanı kabul eder.

---

## 5. DELTA 2 — Güvenilirlik / Ölçüm ("gerçek hayata uygun mu")

- **`scripts/tarife-rapor.mjs`** (YEREL): her `(cihaz, arıza)` için **web mutabakatı vs mevcut Onaylı/SEED** → **% sapma** tablosu (markdown). Bu, kullanıcının istediği *"gerçek hayata uygun muyuz"* ölçümüdür.
- **Ölçülebilir hedef:** gösterilen fiyat, çok-kaynak mutabakatının **±%20'si** içinde. Dışındaysa → **kalibrasyon işareti** (ör. gidiş 1.500 vs web 800-1.200).
- **Güven onayda önceliklendirir:** düşük-güven satırlar ekstra dikkatle onaylanır; UI'da rozet.
- **(Kapsam dışı, sonra) C kullanıcı anketi** "servise gittin mi, ne ödedin?" → `kaynak='gercek_is'` (17 Haz şeması zaten destekliyor, en yüksek güven ağırlığı). Nihai gerçek çıpa; şema hazır, **bu turda yapılmaz**.

---

## 6. DELTA 3 — Wiring: Baked-Snapshot (17 Haz Task 7 diagnose-refactor'ı REPLACE eder)

**Neden değişti:** 17 Haz planı Task 7'de SEED+prompt+referansı **sunucuya taşıyordu** (full moat). Ama o tarihten sonra (bu session dahil) `App.jsx`'e **deterministik fiyat hattı** eklendi (`markaKademe` / `seedBeklenen` / A2 tiebreak / `normalizeMaliyet` 1.500 gidiş) — 17 Haz tasarımı bunu bilmiyordu. Full server-side = bu hattın tamamını taşımak (ağır + canlı fiyata riskli).

**Reconciled (baked-snapshot):**
- **`scripts/tarife-snapshot.mjs`** (YEREL, build öncesi): Supabase Onaylı `tarife` (marka=`Genel`) oku → `src/tarife-seed.generated.js` üret (mevcut SEED şekli: `cihaz → [[ariza, parca_min, parca_max, iscilik], …]`).
- **`App.jsx`:** hardcoded SEED bloğunu **generated import** ile değiştir. `markaKademe` / `seedBeklenen` / A2 / `normalizeMaliyet` **hiç değişmez**.
- **Davranış-korumalı:** migration (§7) güncel SEED'den doldurulur → snapshot **aynı değerlere round-trip eder** → canlı fiyat bozulmaz. Test: migration SEED == snapshot çıktısı.
- **Moat:** bugünkü seviyede (client'ta; **kötüleşmez**). **Full server-side moat = sonraki dilim** (17 Haz Task 7, hazır tasarım rafta durur).

---

## 7. SEED Migration DÜZELTMESİ (17 Haz Task 2 bayat)

17 Haz planının SEED→`tarife` migration'ı **eski taksonomiyle** yazılmış (`Televizyon`, `Fırın / Ocak`, `Kombi`, `Air Fryer` ayrı, `Bilgisayar`/`Yazıcı` ayrı). Güncel durum farklı: `Televizyon / Monitör` (+ monitör paneli / TV paneli ayrımı), `Fırın / Ocak / Aspiratör`, `Kombi / Termosifon`, `Mikrodalga / Air Fryer`, `Süpürge`, `Bilgisayar / Yazıcı`, `Su Sebili / Arıtma`, gidiş bedeli 1.500. → **Migration, güncel `src/App.jsx` SEED'inden + güncel `CIHAZLAR`'dan (constants.js) yeniden üretilir.**

---

## 8. Kapsam (YAGNI)

**Bu tur:** §3 (17 Haz Slice 1-3 canlandır) + §4 (web besleyici) + §5 (rapor/güven) + §6 (snapshot wiring) + §7 (migration fix).
**Kapsam DIŞI (net):**
- Full server-side moat (17 Haz Task 7) — sonraki dilim.
- C kullanıcı anketi / `gercek_is` — şema hazır, veri sonra.
- Saha toplama (Veri Gir formu hazır ama 20-30 servis ziyareti = sonra; web ilk).
- **ARIZA doğruluğu** (teşhis doğru mu) — ayrı iz; gerçek sonuç (`gercek_is`) ister, bu yapı FİYATI çözer.

---

## 9. Test Yaklaşımı

- **Birim (vitest, lokal):** `onerTarife()` — web noktaları → aralık; aykırı ele; güven kademeleri; <3 nokta fallback.
- **Scraper:** örnek sayfa → yapılandırılmış çıktı (pilot deseni); mutabakat + güven hesabı.
- **Snapshot round-trip:** migration SEED değerleri == `tarife-snapshot.mjs` çıktısı (davranış-koruma kanıtı).
- **API/UI (entegrasyon):** branch preview + `curl` (17 Haz test stratejisi: lokal vite `/api`'yi prod'a proxy'ler → yeni uçlar preview'da doğrulanır).

---

## 10. Riskler

| Risk | Azaltma |
|---|---|
| Web SEO-şişik / uydurma fiyat | çok-kaynak mutabakatı + güven skoru + **insan onayı** (3 kat) |
| Scraper kırılganlığı | LLM-extraction (selektörsüz) + aylık **manuel tetik** |
| Canlı fiyat regresyonu | snapshot **davranış-korumalı** (round-trip doğrulaması) |
| Moat sızıntısı | (a)'da bugünkü seviye; full server-side = sonraki dilim |
| Bayat migration | güncel App.jsx SEED'inden yeniden üret (§7) |

---

## 11. Uygulama Dilimleri (writing-plans girdisi)

1. **Şema + migration** — `tarife_veri`(+`kaynak_url`) + `tarife` + RLS; SEED→Onaylı migration **güncel App.jsx'ten**. [17 Haz Slice 1, Task 2 regen]
2. **Harmanlama + API** — `onerTarife` (+güven) + `veri`/`gruplar`/`onayla` uçları. [17 Haz Slice 2]
3. **Admin UI** — `TarifeAdmin` `/tarife` (Veri Gir + Onayla + CSV + güven rozeti). [17 Haz Slice 3]
4. **Web besleyici + rapor** — `scripts/tarife-topla.mjs` (çok-kaynak, mutabakat, güven → `kaynak='web'`) + `scripts/tarife-rapor.mjs` (sapma). [YENİ]
5. **Snapshot wiring** — `scripts/tarife-snapshot.mjs` + `App.jsx` generated SEED import (davranış-korumalı). [17 Haz Task 7 REPLACE]

---

**Pilot kaynakları:** [Cimri kompresör](https://www.cimri.com/buzdolabi-kompresor-fiyatlari) · [motor değişim fiyatı](https://buzdolabimotordegisimfiyati.com.tr/) · [Hizmetgo termostat](https://www.hizmetgo.app/fiyatlari/buzdolabi-termostat-degisimi) · [ucretii gaz](https://www.ucretii.com/buzdolabi-gaz-dolum-ucreti_19.html)
