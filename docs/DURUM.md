# Benservis — Faz Durumu

Son güncelleme: 2026-06-05

## Tamamlanan Fazlar

### Faz 1 — AI Teşhis ✅ Canlıda
- Kullanıcı belirtileri girer, AI cihaz ve arıza tahmini yapar
- `api/diagnose.js` — Anthropic API entegrasyonu
- `App.jsx` — teşhis formu + sonuç ekranı

### Faz 2 — Servis Eşleştirme ✅ Canlıda
- 498 teknik servis (İstanbul 280, İzmir 218) — Google Places API ile toplandı
- `src/services-data.json` — statik servis verisi
- `src/ServisEkrani.jsx` — Haversine mesafe hesabı, geolocation, telefon butonu, harita linki
- `App.jsx` entegrasyonu — teşhis sonrası "📍 Servis Bul" CTA

### Faz 3 — Dijital Ürün Pasaportu (DPP) ✅ Canlıda
- Seri numara bazlı cihaz kimliği, tamir geçmişi, AB DPP uyumluluğu
- **Supabase**: `cihazlar` + `tamir_kayitlari` tabloları, `dpp-fotograflar` bucket
- `api/dpp/cihaz.js` — GET (pasaport sorgula) + POST (cihaz upsert)
- `api/dpp/tamir.js` — POST (tamir kaydı ekle)
- `src/DPPEkrani.jsx` — 4 ekranlı UI: arama → yeni cihaz → pasaport → tamir ekle
- Fotoğraf yükleme (Supabase Storage, thumbnail galeri)
- `App.jsx` entegrasyonu — banner'da seri no arama + teşhis sonrası "📋 Cihazı Kaydet"

## Planlanan Fazlar

### Faz 4 — İkinci El Listeleme ⏳
- Onarılmış cihazların güvenilir ikinci el satışa çıkarılması
- DPP pasaportu ile şeffaf geçmiş gösterimi

### Faz 5 — Bayi + Garanti Yönetimi ⏳
- Yetkili bayi entegrasyonu
- Garanti takibi ve uzatma

## Teknik Altyapı

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React 18 + Vite (ESM) |
| Backend | Vercel Serverless Functions (Node 24) |
| Veritabanı | Supabase (PostgreSQL) |
| Depolama | Supabase Storage |
| Deploy | Vercel (`www.benservis.com`) |
| AI | Anthropic Claude API |

## Tasarım Tokenleri

| Token | Değer | Kullanım |
|-------|-------|---------|
| INK | `#22302A` | Ana metin, başlıklar |
| CREAM | `#F5EFE2` | Arkaplan |
| AMBER | `#C8632B` | CTA butonları, vurgu |
| GREEN | `#3A7D44` | Başarı, yetkili rozeti |

Fontlar: **Fraunces** (başlık) + **Hanken Grotesk** (gövde)
