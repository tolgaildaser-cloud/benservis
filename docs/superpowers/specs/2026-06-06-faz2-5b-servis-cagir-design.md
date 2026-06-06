# Faz 2.5b — Servis Çağır + İş Yönetimi Tasarım Dokümanı

**Tarih:** 2026-06-06  
**Durum:** Onaylandı  
**Önceki faz:** Faz 2.5a (ServisProfil sayfası)

---

## Hedef

"Ara" ve "Haritada Gör" butonlarının yerini alan **"Servis Çağır"** akışı. Tüm müşteri–servis iletişimi Benservis üzerinden geçer; iş açma, kapama ve arama kontrolü platformda olur. Telefon numaraları her iki tarafta da gizli kalır.

---

## Kapsam (bu faz)

| Dahil | Dışarıda |
|-------|----------|
| Servis Çağır butonu + talep formu | Ödeme (Faz 6) |
| is_talepleri DB tablosu | Müşteri puan UI'ı (DB alanı hazır) |
| Supabase Auth — servis panel girişi | Servis kayıt/onboarding akışı |
| Servis paneli (/panel) | Push notification |
| Twilio SMS (müşteri bildirimleri) | Çoklu dil desteği |
| Twilio Voice 850 köprüsü | |
| 30dk otomatik süre dolumu + puan düşüşü | |

---

## İş Yaşam Döngüsü

```
bekliyor (30dk sayaç başlar)
  ├─ servis kabul eder  → onaylandi → [saat penceresi SMS] → tamamlandi
  ├─ servis reddeder    → reddedildi → [müşteriye SMS: yeni servis seç]
  └─ 30dk geçer        → suresi_doldu → [servis puan düşer] → [müşteriye SMS: yeni servis seç]
```

**Durum değerleri:** `bekliyor` | `onaylandi` | `reddedildi` | `suresi_doldu` | `tamamlandi`

---

## Veri Modeli

### is_talepleri

```sql
CREATE TABLE is_talepleri (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_no             text UNIQUE NOT NULL,          -- BS-0042: 'BS-' || LPAD(nextval('is_no_seq')::text, 4, '0')
  servis_id         text NOT NULL,                 -- services-data.json Google Places ID
  servis_ad         text NOT NULL,
  musteri_ad        text NOT NULL,
  musteri_tel       text NOT NULL,                 -- Twilio'ya iletilir, panelde gösterilmez
  adres             text NOT NULL,
  tarih_tercihi     text,                          -- serbest metin ("Yarın öğleden sonra")
  cihaz             text,                          -- teşhisten otomatik aktarılır
  belirti           text,                          -- teşhisten otomatik aktarılır
  durum             text NOT NULL DEFAULT 'bekliyor'
                    CHECK (durum IN ('bekliyor','onaylandi','reddedildi','suresi_doldu','tamamlandi')),
  son_kabul_tarihi  timestamptz NOT NULL,          -- created_at + 30 dakika
  gelis_penceresi   text,                          -- "10:00–12:00" (servis panelinden girer)
  twilio_numara     text,                          -- onaylandıktan sonra atanır
  puan              int CHECK (puan BETWEEN 1 AND 5), -- iş sonrası müşteri puanı (UI ileride)
  odeme_durumu      text DEFAULT 'bekliyor',       -- ödeme fazı için yer tutucu
  created_at        timestamptz DEFAULT now()
);

CREATE INDEX ON is_talepleri(servis_id);
CREATE INDEX ON is_talepleri(durum);
CREATE INDEX ON is_talepleri(son_kabul_tarihi) WHERE durum = 'bekliyor';
```

### servis_performans

```sql
CREATE TABLE servis_performans (
  servis_id         text PRIMARY KEY,              -- services-data.json ID
  yanitlamamis      int NOT NULL DEFAULT 0,        -- yanıtsız iş sayısı
  puan_carpani      numeric(3,2) NOT NULL DEFAULT 1.00, -- görünür puan = JSON puan × carpani
  guncelleme_tarihi timestamptz DEFAULT now()
);
```

**Puan düşüş kuralı:** Her `suresi_doldu` → `yanitlamamis + 1`. Her 3 yanıtsız işte `puan_carpani - 0.10` (minimum 0.50). Servis listesi sıralamasında `servis.puan × puan_carpani` kullanılır.

---

## Telefon Gizliliği (Twilio Çift Yönlü Maskeleme)

```
Müşteri  ←→  Twilio 850 numarası  ←→  Servis
```

- Müşteri formdaki telefonu yalnızca Twilio SMS için kullanılır.
- Servis paneli `musteri_tel` alanını **görmez** (API'dan dışarıda bırakılır).
- İş onaylandıktan sonra oluşturulan Twilio numarası köprü görevi görür.
- Müşteri bu numarayı çevirir → Twilio → servisin gerçek numarasına bağlar.
- Servis de bu numara üzerinden müşteriye ulaşır.

---

## SMS Akışı (Twilio Messaging)

| Tetikleyici | Alıcı | İçerik |
|-------------|-------|--------|
| İş oluşturuldu | Müşteri | "Talebiniz Boğaziçi İklimlendirme'ye iletildi. İş No: #BS-0042. Yanıt bekleniyor." |
| Servis kabul etti | Müşteri | "İyi haber! Servis talebinizi kabul etti. Geliş: 10:00–12:00. Aramak için: 0850-XXX-XXXX" |
| Servis reddetti | Müşteri | "Servis bu sefer uygun değil. Yeni servis seçmek için uygulamaya dönün." |
| 30dk geçti | Müşteri | "Servis 30 dakika içinde yanıt vermedi. Yeni servis seçmek için uygulamaya dönün." |

---

## 30 Dakika Otomatik Süre Kontrolü

**Vercel Cron Job** — her 5 dakikada çalışır:

```
GET /api/cron/expire  (Authorization: Bearer CRON_SECRET)

1. is_talepleri'nde durum='bekliyor' AND son_kabul_tarihi < NOW() olanları bul
2. Her biri için:
   a. durum → 'suresi_doldu'
   b. servis_performans'ta yanitlamamis + 1, gerekirse puan_carpani - 0.10
   c. Müşteriye Twilio SMS gönder
```

`vercel.json` cron konfigürasyonu:
```json
{ "crons": [{ "path": "/api/cron/expire", "schedule": "*/5 * * * *" }] }
```

---

## Servis Paneli (/panel)

**Auth:** Supabase Auth (email/password). Servis hesapları şimdilik Supabase Dashboard'dan manuel oluşturulur. Her servis hesabına `servis_id` metadata olarak atanır.

**RLS Politikası:** Servis yalnızca `servis_id` eşleşen `is_talepleri` satırlarını okuyabilir/güncelleyebilir.

**Ekranlar:**
1. **Giriş** — email/password form
2. **Talep Listesi** — `bekliyor` talepler üstte, onaylananlar altta
3. **Kabul Ekranı** — geliş saati penceresi seçimi (serbest metin) → kaydet → SMS tetiklenir
4. **Tamamla** — "İşi Tamamla" butonu → durum → `tamamlandi`

**Müşteri telefonu panelde gösterilmez.** Servis yalnızca: iş no, müşteri adı (ilk ad + soyad baş harfi), adres, arıza, tarih tercihi, geliş penceresi bilgisini görür.

---

## Twilio Voice (850 Köprüsü)

İş `onaylandi` durumuna geçince:
1. `is_talepleri.twilio_numara` → `TWILIO_PHONE_NUMBER` (tek sabit numara) olarak güncellenir.
2. Müşteri SMS'inde bu numara gönderilir.
3. Müşteri bu numarayı çevirdiğinde `/api/twilio/callback` webhook tetiklenir.
4. Webhook TwiML ile `servis_id`'ye bakıp `services-data.json`'dan servisin gerçek telefonunu alır, köprü kurar.

**MVP notu:** Tek bir Twilio numarası tüm işler için kullanılır. Eş zamanlı iki arama çakışabilir — MVP için kabul edilebilir. Üretimde numara havuzu (her aktif iş için ayrı numara) ayrı bir operasyonel geliştirmedir.

---

## Değişen / Eklenen Dosyalar

| Dosya | Değişim |
|-------|---------|
| `src/ServisEkrani.jsx` | ServisKarti → "Servis Çağır" butonu, ServisCaldir state |
| `src/ServisCaldir.jsx` | YENİ — talep formu bottom sheet |
| `src/ServisPanel.jsx` | YENİ — servis paneli (giriş + talep listesi + kabul/ret) |
| `api/is/yeni.js` | YENİ — POST: iş oluştur + SMS gönder |
| `api/is/liste.js` | YENİ — GET: panel için talep listesi |
| `api/is/[id].js` | YENİ — PATCH: kabul/ret/tamamla |
| `api/cron/expire.js` | YENİ — süresi dolan işleri kapat |
| `api/twilio/callback.js` | YENİ — Voice TwiML köprüsü |
| `supabase/schema.sql` | is_talepleri + servis_performans tabloları |
| `vercel.json` | cron konfigürasyonu |

**Env değişkenleri (Vercel'e eklenecek):**
```
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_PHONE_NUMBER       # 850 sanal numara (tüm işler için tek numara)
CRON_SECRET               # cron endpoint güvenliği (rastgele uzun string)
```

---

## Başarı Kriterleri

- [ ] Müşteri "Servis Çağır"a basıp formu doldurunca `is_talepleri`'ne kayıt oluşur
- [ ] Müşteri Twilio SMS alır (talep alındı)
- [ ] Servis `/panel`'e giriş yapıp talebi görür
- [ ] Servis kabul edince müşteriye saat + 850 numarası SMS gider
- [ ] Müşteri 850 numarasını çevirince servisin telefonuna bağlanır (servis müşteri numarasını görmez)
- [ ] 30dk yanıt gelmezse durum otomatik `suresi_doldu` olur, servis puanı düşer, müşteriye SMS gider
- [ ] Servis paneli `musteri_tel`'i hiçbir noktada göstermez
