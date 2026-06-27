# Teşhis Raporu — Ham Veri Matrisi — Tasarım (Spec)

- **Tarih:** 2026-06-26
- **Durum:** Tasarım onaylandı → spec inceleme bekliyor
- **Kapsam:** `/admin` teşhis raporunu "en çok" özetlerinden **ham veri matrisine** (Excel benzeri tablo) çevir + CSV export.
- **Kapsam DIŞI:** Sunucu-tarafı sayfalama (v1 satır tavanı), grafik, çoklu-aday-arıza loglama (ayrı/sonra), Faz 4 rapor kataloğu.

---

## 1. Bağlam
Faz 1 raporu "en çok marka/arıza/il…" özetleri gösteriyor; kullanıcı **düzgün istatistik** için **ham veri tablosu** istiyor (her teşhis = 1 satır, Excel'de pivot yapılabilir). "En çok" özetleri işini görmüyor.

## 2. Karar özeti
- Rapor = **ham satır matrisi**, tarihe göre sıralı (en yeni üstte). Sütunlar: **Tarih · Cihaz · Marka · Arıza · İl · İlçe · Maliyet · Karar · Aciliyet**.
- **"En çok" özetleri kaldırılır.** Üstte toplam sayı + aralık kalır.
- **CSV export** (Excel'de aç; UTF-8 BOM → Türkçe doğru). Maliyet CSV'de **iki sayısal sütun** (min, max) — istatistik için.
- **Arıza:** satır başına **tek** (en olası — `teshis_log` onu tutuyor). Tüm aday arızalar = ayrı/sonraki iş.

## 3. Mimari

### 3a. Endpoint — `api/admin/rapor.js`
- Auth (ADMIN_TOKEN/ADMIN_PASSWORD) + tarih aralığı (from/to, vars. son 30 gün) **DEĞİŞMEZ**.
- Sorgu: `select created_at, cihaz, marka, ariza, il, ilce, maliyet_min, maliyet_max, karar, aciliyet` · `created_at` aralığında · **`order("created_at", desc)`** · `limit(5000)`.
- **Toplama (top-N/dağılım) KALDIRILIR.** Çıktı:
  ```json
  { "ok": true, "aralik": {from,to}, "toplam": N,
    "satirlar": [ {created_at, cihaz, marka, ariza, il, ilce, maliyet_min, maliyet_max, karar, aciliyet}, … ],
    "kismi": false }
  ```
  `kismi=true` → 5000 tavanına ulaşıldı (tarih aralığını daralt).

### 3b. Sayfa — `src/RaporPaneli.jsx`
- Giriş + tarih filtresi + "Raporu çek" **KORUNUR**.
- Rapor gövdesi DEĞİŞİR: özet kartları/Tablo bileşeni KALDIRILIR → yerine:
  - Başlık şeridi: **toplam** teşhis + aralık + **"📥 Excel'e aktar (CSV)"** butonu.
  - **Matris tablo** (yatay kaydırılabilir): `<table>` — başlık satırı (Tarih · Cihaz · Marka · Arıza · İl · İlçe · Maliyet · Karar · Aciliyet), her `satir` bir `<tr>`.
    - Tarih: TR formatı (`gg.aa.yyyy ss:dd`). Maliyet hücresi: `min–max` (yoksa "—"). Boş alanlar "—".
  - `toplam===0` → "Bu aralıkta kayıt yok." `kismi` → küçük uyarı ("ilk 5000; aralığı daralt").
- **CSV:** `satirlar`'dan istemci tarafı üret → indir (Blob). Sütunlar: `Tarih,Cihaz,Marka,Arıza,İl,İlçe,MaliyetMin,MaliyetMax,Karar,Aciliyet`. Değerler virgül/tırnak için escape'lenir; başına **UTF-8 BOM** (Excel Türkçe). Dosya adı: `teshis-raporu_{from}_{to}.csv`.

### 3c. Veri akışı
`/admin → tarih seç → "Raporu çek" → GET /api/admin/rapor (Bearer) → {satirlar} → matris tablo · "Excel'e aktar" → CSV indir`

## 4. Hata yönetimi
- 401 → giriş ekranı (mevcut). Ağ/sunucu → "Rapor alınamadı". Boş → "kayıt yok".

## 5. Kabul kriterleri
- [ ] Rapor, her teşhisi **bir satır** olarak gösterir: Tarih · Cihaz · Marka · Arıza · İl · İlçe · Maliyet · Karar · Aciliyet; **tarihe göre sıralı** (en yeni üstte).
- [ ] "En çok" özet tabloları YOK.
- [ ] "Excel'e aktar" → CSV indirir; Excel'de Türkçe doğru; maliyet min/max ayrı sayısal sütun.
- [ ] Boş aralık → "kayıt yok"; >5000 → kısmi uyarı.
- [ ] Giriş/şifre, tarih filtresi, endpoint auth **değişmemiş**.
- [ ] `vite build` temiz.

## 6. Test yaklaşımı
- **Endpoint:** lokal handler (sahte sır) + birkaç örnek satır → `satirlar` doğru alanlar + `created_at` desc sıralı + toplam; sonra temizle.
- **Sayfa:** preview — giriş → "Raporu çek" → matris tablo (örnek satırlarla) + "Excel'e aktar" CSV içeriği; boş aralık → "kayıt yok".
- **Regresyon:** giriş/şifre + tarih filtresi çalışır; kök teşhis akışı değişmedi.
