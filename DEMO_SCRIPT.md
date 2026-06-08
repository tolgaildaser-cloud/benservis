# Benservis — Demo Sunum Scripti
> Text-to-video / ekran kaydı için sahne sahne anlatım

---

## 🎬 SAHNE 1 — Açılış

**Ekran:** Logo animasyonu, siyah arka plan
**Araç:** —

> "Türkiye'de her yıl milyonlarca ev aleti arızalanıyor.
> Doğru servisi bulmak zor. Fiyatlar belirsiz. Cihazların geçmişi bilinmiyor.
> Benservis bu üç sorunu tek platformda çözüyor."

---

## 🎬 SAHNE 2 — Faz 1: AI Arıza Teşhisi

**Ekran:** benservis.com ana sayfası açılıyor
**Araç:** `Vercel` (hosting), `Claude API` (AI model)

> "Kullanıcı buzdolabının soğutmadığını bildiriyor.
> Cihazını seçiyor — Buzdolabı.
> Markayı seçiyor — Arçelik. Bu adım zorunlu."

**Ekran:** Marka dropdown açılıyor, 56 marka listesi görünüyor, "Arçelik" seçiliyor

> "Marka seçimi rastgele değil.
> Cihaz garantiliyse sisteme söylemek için gereken ilk bilgi bu."

**Ekran:** Belirti yazılıyor: 'Motor çalışıyor ama soğutmuyor.' → Teşhis butonu

> "Sunucu bu isteği alıyor ve Anthropic'in Claude modeline iletiyor.
> Model, gerçek tamir verilerinden beslenmiş fiyat matrisiyle cevap üretiyor."

**Ekran:** Sonuç ekranı — olası arızalar, tahmini maliyet, öneri

> "Sonuç geliyor: Kompresör arızası, yüzde 70 olasılık.
> Tahmini maliyet: 800 ile 1500 TL arası.
> Öneri: Tamir ettir.
> Yapay zeka fiyatı havadan söylemiyor — yerel tamir verilerine dayanıyor."

**Alt yazı / Callout:** `⚡ Vercel Serverless Function — /api/diagnose`

---

## 🎬 SAHNE 2B — Faz 2: Servis Kademeleri + Garanti Yönlendirmesi

**Ekran:** Teşhis sonucu ekranında "Servis Bul" butonu — kullanıcı tıklamadan önce
**Araç:** `React` (frontend filtre), `services-data` (498 servis, puanlı)

> "Kullanıcı buzdolabının hâlâ garantili olduğunu biliyor.
> 'Cihazım garantili' kutusunu işaretliyor."

**Ekran:** Checkbox işaretleniyor → "Servis Bul" tıklanıyor

> "Sistem devreye giriyor.
> Garantili cihaz için yalnızca Yetkili Servisler listeleniyor.
> Ekranın üstünde yeşil şerit: 'Arçelik Yetkili Servisine yönlendiriliyorsunuz.'"

**Ekran:** Servis listesi açılıyor — 4 servis kademesi görünüyor

> "Her servisin yanında rozeti var.
> Yeşil 'YETKİLİ' — üretici onaylı, garanti tamirini karşılar.
> Mor 'PLATİN' — en yüksek kalite kademesi.
> Sarı 'GOLD', turuncu 'BRONZ'.
> Bir servis hem Yetkili hem Platin olabilir."

**Ekran:** Garanti kutusunun işareti kaldırılıyor → liste anında değişiyor, tüm kademeler görünüyor

> "Garanti yoksa tüm servisler açılır.
> Kullanıcı puana, mesafeye ve kademeye göre seçim yapıyor."

**Alt yazı / Callout:**
```
Garanti → sadece yetkili servisler
Kademe: YETKİLİ · PLATİN · GOLD · BRONZ
Puan + mesafe + kademe sıralaması
```

---

## 🎬 SAHNE 3 — Faz 3: Dijital Ürün Pasaportu (DPP)

**Ekran:** /dpp/[seri_no] URL'si açılıyor
**Araç:** `Supabase` (veritabanı), `Vercel` (OG sayfası)

> "Her cihazın bir seri numarası var.
> Bu numara artık bir dijital kimlik — DPP Pasaportu."

**Ekran:** Cihaz bilgileri: marka, model, garanti, tamir geçmişi

> "Servis tarihçesi burada.
> Hangi parça değişti, ne kadar maliyeti oldu, hangi servis yaptı — hepsi kayıtlı.
> Benservis kayıtlı servisler doğrulanmış rozet kazanıyor."

**Alt yazı / Callout:** `🗄️ Supabase — cihazlar + tamir_kayitlari tablosu`

---

## 🎬 SAHNE 4 — Faz 4: İkinci El Pazaryeri

**Ekran:** benservis.com/ikinci-el açılıyor
**Araç:** `React + Vite` (frontend), `Vercel` (hosting)

> "Artık kullanıcılar bu cihazları satabilir.
> DPP geçmişiyle şeffaf ikinci el alışveriş."

**Ekran:** Kategori chip'leri, arama çubuğu, ilan kartları

> "Sayfada anlık arama var, kategoriye göre filtre var.
> Her kartda cihazın durumu ve fiyatı görünüyor.
> Benservis doğrulanmış ilanlar rozet kazanıyor."

**Alt yazı / Callout:** `🔍 Anlık Arama + Sunucu Tarafı Kategori Filtresi`

---

## 🎬 SAHNE 5 — İlan Oluşturma (2 Adım)

**Ekran:** benservis.com/ikinci-el/yeni açılıyor
**Araç:** `Supabase` (sorgulama + kayıt), `Verimor` (SMS)

> "Satıcı seri numarasını giriyor."

**Ekran:** Seri no alanına yazılıyor, "DPP Sorgula" tıklanıyor

> "Sistem anında bu cihazın tüm geçmişini çekiyor.
> Kaç tamir gördü, son durum ne — satıcı bunları değiştiremiyor.
> Veriler doğrudan Benservis veritabanından geliyor."

**Ekran:** Adım 2 — başlık, fiyat, iletişim bilgileri doldurulup gönderiliyor

> "İlan yayına giriyor.
> Satıcının telefonuna SMS geliyor: 'İlanınız yayında. Teklifleri yönetmek için tıklayın.'"

**Alt yazı / Callout:** `📱 Verimor SMS — Satıcıya Yönetim Linki`

---

## 🎬 SAHNE 6 — Alıcı Talebi

**Ekran:** İlan detay sayfası, "Satın Almak İstiyorum" formu
**Araç:** `Supabase` (talep kaydı), `Verimor` (SMS)

> "Alıcı ilana bakıyor. Satıcının telefonu göstermiyor.
> 'Satın Almak İstiyorum' diyor, adını ve mesajını yazıyor."

**Ekran:** Form gönderiliyor, alıcı panel linki gösteriliyor

> "Talep oluşuyor.
> Satıcıya SMS: 'Yeni talep geldi, panelden görüntüle.'
> Alıcı kendi panelinle yönlendiriliyor."

**Alt yazı / Callout:** `🔒 Güvenli Token Sistemi — Telefon numaraları hiçbir zaman karşı tarafa gösterilmiyor`

---

## 🎬 SAHNE 7 — Mesajlaşma Paneli (Alıcı)

**Ekran:** /ikinci-el/alici/[token] sayfası
**Araç:** `Supabase` (mesajlar tablosu), `Verimor` (bildirim SMS)

> "Alıcı kendi panelinde.
> Satıcıyla platform üzerinden mesajlaşabiliyor.
> WhatsApp yok, telefon yok — her iletişim kayıt altında."

**Ekran:** Mesaj yazılıp gönderiliyor, chat balonu çıkıyor

> "Mesaj gönderilince satıcıya SMS bildirimi gidiyor.
> Satıcı cevap verince alıcıya SMS bildirimi gidiyor.
> Sayfa her 15 saniyede otomatik yenileniyor."

**Alt yazı / Callout:** `💬 Supabase mesajlar tablosu — DB-backed mesajlaşma`

---

## 🎬 SAHNE 8 — Güvenli Ödeme

**Ekran:** "Ödemeyi Başlat" butonu, iyzico checkout formu
**Araç:** `iyzico` (ödeme altyapısı), `Supabase` (durum takibi)

> "Anlaşma sağlandı. Alıcı ödemeyi başlatıyor.
> Ödeme Benservis güvencesiyle tutuluyor.
> Satıcıya anında ödeme yapılmıyor."

**Ekran:** Ödeme formu (iyzico iframe), kart bilgileri giriliyor

> "Ödeme iyzico üzerinden gerçekleşiyor.
> Para Benservis'te bekliyor.
> Alıcı ürünü teslim alıp onaylayana kadar satıcıya aktarılmıyor."

**Alt yazı / Callout:** `💳 iyzico Güvenli Ödeme — Escrow Modeli`

---

## 🎬 SAHNE 9 — Teslimat Onayı ve Satıcı Ödemesi

**Ekran:** Alıcı paneli — "Teslimi Onaylıyorum" butonu
**Araç:** `Supabase` (durum güncelleme), `Verimor` (SMS)

> "Alıcı ürünü aldı ve onaylıyor.
> Onay gelince satıcıya SMS gidiyor: 'Ödemeniz aktarılacak.'"

**Ekran:** Admin paneli — /ikinci-el/admin

> "Operatör panelinde bekleyen ödemeler görünüyor.
> IBAN bilgisi ekranda, tek tıkla kopyalanıyor.
> 'Ödeme Yapıldı' işaretlenince satıcıya SMS gidiyor: 'IBAN'ınıza ödeme yapıldı.'"

**Alt yazı / Callout:** `🏦 Manuel IBAN Transferi → Otomatik SMS Bildirimi`

---

## 🎬 SAHNE 10 — Satıcı Paneli

**Ekran:** /ikinci-el/satis/[token] sayfası
**Araç:** `Supabase`, `Verimor`

> "Satıcı kendi panelinde tüm talepleri görüyor.
> Okunmamış mesaj sayısı her talebin yanında gösteriliyor.
> Ödeme geldiğinde kargo talimatları çıkıyor."

---

## 🎬 SAHNE 11 — Teknik Mimari Özeti

**Ekran:** Akış şeması animasyonu
**Araç:** Tümü bir arada gösteriliyor

> "Kullanıcı — React arayüzü — Vercel serverless fonksiyonları — Supabase veritabanı.
> AI teşhis için Claude API.
> Bildirimler için Verimor.
> Ödeme için iyzico.
> Tüm sistem serverless — sunucu yönetimi yok, sıfır altyapı maliyeti."

**Alt yazı / Callout:**
```
Frontend:  React + Vite → Vercel CDN
Backend:   Vercel Serverless Functions
Veritabanı: Supabase (PostgreSQL)
AI:        Anthropic Claude API
SMS:       Verimor
Ödeme:     iyzico
```

---

## 🎬 SAHNE 12 — Kapanış

**Ekran:** Logo, benservis.com

> "Teşhis. Tamir. Pasaport. Satış.
> Cihazın tüm yaşam döngüsü tek platformda.
> Benservis."

---

## 🎬 SAHNE 13 — Vizyon: Faz 0 — Retail & E-Retail Entegrasyonu

**Ekran:** Teknosa, Hepsiburada, Trendyol, MediaMarkt logoları yan yana
**Araç:** `Retailer API` → `Vercel Webhook` → `Supabase`

> "Şu ana kadar gördüğümüz her şey, cihazın bir noktada arızalandığını varsaydı.
> Peki ya cihazın hikayesi satın alındığı an başlasaydı?"

**Ekran:** Kullanıcı Hepsiburada'dan buzdolabı satın alıyor, sipariş onayı geldi

> "Kullanıcı Hepsiburada'dan bir buzdolabı aldı.
> Sipariş tamamlandığı anda Hepsiburada, Benservis'e bir webhook gönderiyor.
> Seri numarası, model, satın alma tarihi, garanti süresi — hepsi otomatik geliyor."

**Ekran:** Benservis DPP sayfası açılıyor — cihaz zaten kayıtlı, 'Yeni' rozeti var

> "Kullanıcının telefonuna SMS geliyor:
> 'Buzdolabınızın dijital pasaportu oluşturuldu. Garanti bitiş tarihiniz: 15 Haziran 2027.'
> Kullanıcı hiçbir şey girmedi. Sistem otomatik çalıştı."

**Alt yazı / Callout:** `🔗 Retailer Webhook → /api/dpp/register → Supabase`

---

**Ekran:** Zaman çizelgesi animasyonu — 0. günden başlayarak ilerliyor

> "Garanti süresi boyunca cihaz izleniyor.
> Garanti bitmeden 30 gün önce otomatik uyarı gidiyor:
> 'Garantiniz bitiyor. Kontrol ettirmek ister misiniz?'"

**Ekran:** Garanti süresi doldu — cihaz arızalandı, Benservis teşhis sayfası açılıyor

> "Cihaz arızalanınca kullanıcı Benservis'e geliyor — Faz 1.
> Tamir yaptırıyor — Faz 2.
> Tamir kaydı DPP'ye işleniyor — Faz 3.
> Artık satmak istiyor — Faz 4.
> Hikaye sıfırdan başladı. Eksiksiz."

**Alt yazı / Callout:** `📅 Garanti takibi → Vercel Cron → Verimor SMS`

---

**Ekran:** Entegrasyon hedefleri listesi

> "Hedef entegrasyonlar:
> Teknosa, MediaMarkt, Hepsiburada, Trendyol, Amazon Türkiye.
> Bunların yanında manuel kayıt her zaman mevcut —
> faturasını yüklersen biz seri numarayı çekiyoruz."

**Alt yazı / Callout:**
```
Entegrasyon Seçenekleri:
1. Retailer API   — sipariş anında otomatik
2. Webhook        — e-ticaret platformu push
3. Manuel         — fatura yükle, seri no + garanti otomatik çıkar
```

---

## 🎬 SAHNE 14 — Tam Döngü (Final)

**Ekran:** Tüm fazları gösteren dairesel akış şeması
**Araç:** Tümü bir arada

> "Faz 0: Satın al — DPP otomatik oluşur, garanti takibi başlar.
> Faz 1: Arızalan — AI teşhis eder, marka bilir.
> Faz 2: Tamir et — garanti varsa Yetkili Servis, yoksa Platin / Gold / Bronz.
> Faz 3: Kayıt — her tamir pasaporta işlenir.
> Faz 4: Sat — alıcı tam geçmişi görür.
> Yeni sahibiyle döngü yeniden başlar."

**Ekran:** Logo, tagline fade in

> "Benservis. Cihazın doğduğu günden son sahibine kadar."

---

## 📊 Demo URL'leri

| Ekran | URL |
|-------|-----|
| Ana sayfa (Teşhis) | benservis.com |
| İkinci El Liste | benservis.com/ikinci-el |
| İlan Ver | benservis.com/ikinci-el/yeni |
| DPP Pasaportu | benservis.com/dpp/[seri_no] |
| Alıcı Paneli | benservis.com/ikinci-el/alici/[token] |
| Satıcı Paneli | benservis.com/ikinci-el/satis/[token] |
| Admin Paneli | benservis.com/ikinci-el/admin?token=... |
