# Faz 2.5 — Servis Profil Sayfası Tasarım Dokümanı

**Tarih:** 2026-06-06

---

## Hedef

Kullanıcı servis listesinden bir servise tıkladığında o servisin profil sayfasına girsin. Profil sayfası mevcut servis verilerini detaylı gösterir; ürün/parça kataloğu altyapısı hazır ama şimdilik boş görünür.

Bu adım Benservis'in Yemeksepeti benzeri marketplace vizyonuna geçişin ilk somut adımıdır.

---

## Mimari

`ServisEkrani` zaten full-screen overlay olarak çalışıyor. Aynı bileşen içinde ekran state machine'e yeni bir durum eklenir:

```
"liste"  →  karta tıkla  →  "profil"
"profil" →  ← geri       →  "liste"
```

React Router gerekmez. DPP'deki `DPPEkrani` pattern'i aynen uygulanır.

---

## Dosya Değişiklikleri

| Dosya | Değişiklik |
|-------|------------|
| `src/ServisEkrani.jsx` | `ekran` state eklenir (`"liste"` \| `"profil"`), `ServisKarti` tıklanabilir olur, yeni `ServisProfil` bileşeni eklenir |
| `src/services-data.json` | Değişmez |
| `supabase/` | `servis_katalog` tablosu (ürün/parça için, şimdilik boş) migration eklenir |

---

## Bileşenler

### ServisKarti (mevcut → güncellenir)
- Tüm kart alanı tıklanabilir (`onClick` → profil ekranına geç)
- "📞 Ara" butonu propagation durdurur (`e.stopPropagation()`) — telefon açılır, profil açılmaz

### ServisProfil (yeni)
Props: `servis: object, onGeri: () => void`

**Düzen (yukarıdan aşağıya):**
```
[← Geri]   [YETKİLİ rozeti varsa]
Servis adı (Fraunces, büyük)
⭐ puan · yorum sayısı · ilçe · X km

[📞 Ara butonu]  [🗺 Haritada Gör linki]

── Hizmet Kategorileri ──
Her kategori bir chip: Klima · Buzdolabı · ...

── Ürünler & Parçalar ──    (Supabase'den gelecek)
"Yakında — bu servis henüz ürün eklemedi"
```

### ServisEkrani (güncellenir)
```jsx
const [ekran, setEkran] = useState("liste");   // "liste" | "profil"
const [seciliServis, setSeciliServis] = useState(null);

// liste ekranında: karta tıklayınca setEkran("profil") + setSeciliServis(servis)
// profil ekranında: ServisProfil render edilir, onGeri → setEkran("liste")
```

---

## Supabase Tablosu

```sql
create table servis_katalog (
  id          uuid primary key default gen_random_uuid(),
  servis_id   text not null,          -- services-data.json'daki id (Google Places ID)
  tip         text not null,          -- 'hizmet' | 'yedek_parca' | 'yenilenmiş_ürün'
  ad          text not null,
  aciklama    text,
  fiyat       integer,                -- kuruş cinsinden (TL × 100)
  aktif       boolean default true,
  created_at  timestamptz default now()
);
```

Şimdilik boş kalır. Profil sayfasında "yakında" mesajı gösterilir.

---

## Tasarım Tokenleri

Mevcut token'lar aynen kullanılır:
- INK `#22302A` — başlıklar, metin
- CREAM `#F5EFE2` — arkaplan
- AMBER `#C8632B` — Ara butonu, vurgu
- GREEN `#3A7D44` — yetkili rozeti, chip arkaplanı

Fontlar: **Fraunces** (servis adı) + **Hanken Grotesk** (detaylar)

---

## Kapsam Dışı (bu fazda yapılmıyor)

- Servis hesabı / giriş sistemi
- Katalog yönetim paneli
- Sepet ve ödeme
- İş talebi oluşturma
- Puanlama formu (bir sonraki adım)

---

## Başarı Kriteri

1. Servis listesindeki her karta tıklanabilir
2. Profil sayfası açılır, mevcut tüm servis bilgileri gösterilir
3. "← Geri" ile liste ekranına dönülür
4. "📞 Ara" tıklandığında profil açılmaz, doğrudan telefon açılır
5. Ürünler bölümü "yakında" mesajıyla görünür
6. `servis_katalog` tablosu Supabase'de oluşturulmuş olur
