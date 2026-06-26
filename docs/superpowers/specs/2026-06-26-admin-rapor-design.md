# Admin Rapor Sayfası (Faz 1) — Tasarım (Spec)

- **Tarih:** 2026-06-26
- **Durum:** Tasarım onaylandı → spec inceleme bekliyor
- **Kapsam (Faz 1):** İstenildiği zaman çalıştırılan, **tarih-aralıklı** teşhis raporu — `/api/admin/rapor` ucu + `/admin` sayfası (`RaporPaneli.jsx`).
- **Kapsam DIŞI:** Birleşik /admin menüsü + mevcut panelleri (servis onay/ödeme) toplama, grafik, CSV export, marka×arıza çapraz tablo, ayrı admin login. (Faz 2+.)

---

## 1. Bağlam

Faz 0 ile `teshis_log` (anonim) 26 Haz'dan beri birikiyor. Kullanıcı bu veriyi **istediği zaman, istediği tarih aralığında** rapor olarak görmek istiyor (31 Temmuz yalnız örnekti). Mevcut admin deseni: path-based route (`/servis-admin` → `ServisAdmin.jsx`) + **ADMIN_TOKEN** (`api/admin/*`'te `Authorization: Bearer $ADMIN_TOKEN`). Bu deseni aynen kullanırız. [[project_benservis_admin]] Faz 1.

## 2. Hedefler / Hedef-olmayanlar

**Hedefler:** (1) tarih aralığı seç → tek tıkla rapor; (2) en çok marka/arıza/il-ilçe/maliyet/karar; (3) mevcut ADMIN_TOKEN + panel desenini kullan; (4) küçük + hızlı.
**Hedef-olmayanlar:** birleşik konsol, grafik kütüphanesi, export, gerçek-zaman, ayrı login, çapraz tablolar.

## 3. Mimari

### 3a. Endpoint — `api/admin/rapor.js` (GET, ADMIN_TOKEN)
- **Yetki:** `Authorization: Bearer $ADMIN_TOKEN` (mevcut `api/admin/*` `yetkiKontrol` deseni); yanlış → `401`.
- **Query:** `from`, `to` (YYYY-MM-DD). Yoksa varsayılan: `to` = bugün, `from` = 30 gün önce. Uç `from`'u gün başı, `to`'yu gün sonu (23:59:59) yapar; `created_at` aralığında çeker (service-role).
- **Toplama (JS, v1):** çekilen satırlardan:
  - `toplam` (adet)
  - `marka[]` `{ad, adet}` (azalan, top 15) · `ariza[]` (top 15) · `cihaz[]` (hepsi)
  - `karar{}` (tamir/yenisi/gerek_yok/belirsiz adetleri) · `aciliyet{}` (yüksek/orta/düşük/belirsiz)
  - `maliyet{ortMin, ortMax, min, max}` (maliyeti olan satırlardan; yoksa null)
  - `il[]` `{ad, adet}` (top 15, konumu olanlardan) · `ilce[]` (top 15)
  - `aralik{from, to}` (yankı)
- **Çıktı:** `{ ok:true, ...yukarıdaki }`. Hata → `500 {ok:false}`. Güvenlik tavanı: aralıkta en çok 50.000 satır çek (aşılırsa `kismi:true` bayrağı + log).
- **Ölçek notu:** v1 JS-aggregate; hacim büyürse Postgres RPC / materialized view.

### 3b. Sayfa — `/admin` route + `RaporPaneli.jsx`
- **Route:** `main.jsx`'e `const isAdmin = path === "/admin";` → `RaporPaneli` render.
- **Auth:** URL `?token=ADMIN_TOKEN` → istek `Authorization: Bearer`'da (ServisAdmin deseni). Token yoksa/yanlışsa kibar uyarı.
- **UI:** iki tarih girişi (`from`/`to`, varsayılan son 30 gün) → **"Raporu çek"** → tablolar:
  - Özet: toplam teşhis + aralık.
  - En çok marka · en çok arıza · cihaz dağılımı · en çok il · en çok ilçe (ad + adet + mini oran çubuğu).
  - Karar dağılımı · aciliyet dağılımı (rozet/satır).
  - Maliyet özeti (ort min–max, genel min/max).
  - Yükleniyor / hata / boş-aralık ("seçilen aralıkta kayıt yok") durumları.
- **Stil:** kurumsal palet (mavi `#2563EB` / slate / lacivert), Fraunces+Hanken — mevcut panellerle tutarlı.

### 3c. Veri akışı
`admin /admin?token=… açar → tarih seç → 'Raporu çek' → GET /api/admin/rapor?from&to (Bearer) → JSON → tablolar`

## 4. Hata yönetimi
- 401 (token) → "Yetkisiz — admin token hatalı".
- Ağ/sunucu hatası → "Rapor alınamadı, tekrar dene".
- Boş aralık → "Bu aralıkta kayıt yok" (hata değil).
- Endpoint hata olsa bile asla sır/PII döndürmez (zaten tablo anonim).

## 5. Kabul kriterleri
- [ ] `/admin?token=DOĞRU` → rapor sayfası açılır; yanlış/eksik token → 401/uyarı.
- [ ] Tarih aralığı seç + "Raporu çek" → o aralığın toplamı + en çok marka/arıza/il-ilçe/maliyet/karar tabloları gelir.
- [ ] Varsayılan (boş) → son 30 gün.
- [ ] Aralıkta kayıt yoksa kibar "kayıt yok" mesajı (çökme yok).
- [ ] Endpoint yalnız ADMIN_TOKEN ile erişilir (tokensız 401).
- [ ] Mevcut akışlar (teşhis, /servis-admin, /ikinci-el/admin) etkilenmez.
- [ ] `vite build` temiz.

## 6. Test yaklaşımı
- **Endpoint:** curl ile tokensız (→401) + token'lı (→ JSON toplamlar); birkaç sahte `teshis_log` satırı ekleyip (service-role) tarih aralığı + toplamların doğruluğu; sonra temizle.
- **Sayfa:** preview'da `/admin?token=…` → tarih seç → "Raporu çek" → tablolar (snapshot); yanlış token → uyarı; boş aralık → "kayıt yok".
- **Regresyon:** kök teşhis akışı + /servis-admin değişmedi.
