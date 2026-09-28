---
title: "Baymak kombi F37 ve H.02.07 hatası"
description: "Baymak kombide F37 ve H.02.07 düşük su basıncı demek. Basıncı soğukken okuma, doldurma musluğunu yavaş açma ve servis sınırı adım adım; Baymak'tan."
slug: "baymak-kombi-f37-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi baymak.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no \f ayracına göre. Metin katmanı olmayan güncel PDF'ler tesseract (tur) OCR ile yalnız KARŞILAŞTIRMA için okundu.
# Web araması kullanılmadı: belgeler baymak.com.tr ürün sayfalarından ve hub provenansındaki URL'lerden bulundu.
# Alıntı denetim tablosu: baymak-kombi-f37-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: F37 (Duotec/Eco) ve H.02.07 (Lunatec) aynı durumu ("düşük su basıncı" / "Isıtma devresinde düşük basınç") iki ayrı kod düzeninde gösteriyor.
# A) Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 s. · md5 df4c42a6604e3ec39b2d152606464cb0
#    "Kombi soğuk iken manometreden okunan basınç değerinin 0,7 – 1,5 bar aralığında olduğunu düzenli olarak kontrol ediniz." s.14
#    "Hava yapmaması için, doldurma musluğunu çok yavaş açınız." · "Basınç düşmesi sık tekrarlanıyorsa yetkili servise başvurunuz." s.14
#    "Yüksek basınç durumunda, boşaltma musluğunu açarak basıncın istenilen basınç aralığı değerine getirilmesini sağlayınız." s.14
#    "Su basıncı 0.7 bar'dan düşükse, sisteme su doldurulmalıdır." · "Su basıncı 0,5 barın altına düşerse kombi çalışmaz." s.15
#    "Normal işletme suyu basıncı 1 ila 2 bar arasındadır. Basınç 3 barı aşarsa, 3 bar emniyet ventili açılır" s.15
#    "Kombi sürekli olarak basınçlandırma ihtiyacı gerektiriyorsa su kaçağı olabilir. Yetkili servisi bilgilendirin." s.15
#    "F37 Düşük su basıncı" · "F40 Yüksek su basıncı" · "Kombiyi resetlemek için, RESET (K1) tuşuna basınız. Sorun devam ederse mutlaka yetkili servisi arayınız." s.17
# B) Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122
#    https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 s. · md5 723546ecd63c99eaecb5c3143c687c2a · aynı cümleler: 0,7–1,5 s.14 · 0,5 bar / kaçak / 3 bar s.15 · F37, F40, RESET s.17
# C) Eco CT 20 Premix Montaj & Kullanma Kılavuzu 300035751
#    https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 s. · md5 e43149e6b888491b718ae20b1251eb37 · 0,7–1,5 s.15 · 0,5 bar / kaçak / 3 bar s.16 · F37, F40, RESET s.18
#    ⚠️ Belge içi tutarsızlık: panel tablosunda "K4 Reset tuşu" (s.13), hata kodu bölümünde "RESET (K1)" (s.18) → yazıda tuş numarası VERİLMEDİ, yalnız "RESET tuşu".
# D) Duotec DHW Kullanma Kılavuzu (ürün sayfasındaki güncel dosya)
#    https://www.baymak.com.tr/media/5477/baymak-duotec-dhw-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 s. · md5 aad24ed8ef67c8ab27204a4864bde308 · 0,7–1,5 s.15 · "Merkezi ısıtma tesisatına mutlaka doldurma musluğu montajı yapılmalıdır." s.15 · F37 s.18
# E) Lunatec Montaj ve Kullanma Kılavuzu 300036785
#    https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 s. · md5 dec11a69fd55c366d613da7ba31d6d98
#    "minimum basınç 0,8 bar, önerilen basınç 1 - 1,5 bar" s.4
#    "Doldurma musluğu açık mavi renktedir ve ... kombinin altına yerleştirilmiştir." · "saat yönünün tersine (sola doğru) yavaşça çevirin. El aletleri değil, sadece eliniz kullanın." s.18
#    "0,8 bar değerinin üzerine çıkıldığında artık hava giderme fonksiyonu (bölüm 6.5) devreye girer ve ekranda "------" gözükür, basınç okunamaz." · AM019 s.18
#    "Basınç 1 – 1,5 bar arasına ulaştığında musluğu kapatın ve su sızıntısı olmadığını kontrol edin." s.18
#    "Yüklemenin sonunda, kombinin elektriğini keserek ve derhal tekrar vererek hava giderme fonksiyonunun (bölüm 6.5) tekrarlanması tavsiye edilir." s.18
#    "Tesisat soğukken basıncın 1 - 1,5 bar arasında olduğunu periyodik olarak kontrol edin." · "Sık basınç azalmaları meydana gelecek olursa BAYMAK YETKİLİ TEKNİK SERVİSİN müdahalesini isteyin." s.27
#    "H: Engelleme, cihaz çalışmaz.( hata durumu ortadan kaldırıldığında, hata kodu kaybolur ve kombi çalışır)" s.28
#    "H.02 .07 Isıtma devresinde düşük basınç (su doldurma gerekli)." | "Tesisat basıncını kontrol edin / Genleşme tankı basıncını kontrol edin / Kombi/tesisat sızıntılarını kontrol edin" s.29
#    "Boşaltma musluğu, kombinin içindedir (sol alt kısımda)." s.19
# F) Karşılaştırma (OCR, metin katmanı yok): güncel Duotec Compact 300038181 Rev.01 29.02.2024
#    https://www.baymak.com.tr/media/6460/baymak-duotec-compact-tam-yogusmali-kombi-kullanma-kilavuzu.pdf · HTTP 200 · 28 s. · md5 21c20e98d4a5c67b92460da43b7b0c4c
#    5.2 su doldurma metni ve F37/F40 tablosu A ile aynı (OCR s.15, s.18).
#    Güncel Lunatec https://www.baymak.com.tr/media/6715/lunatec-kullanim-kilavuzu.pdf · HTTP 200 · 36 s. · md5 187c3f29ae218bcc26df923a5cc2c6f4
#    OCR s.18 (açık mavi musluk, 1–1,5 bar) ve s.27-28 E ile aynı.
# BİLEREK yazılmayanlar:
#  - "1-1,5 bar" Duotec/Eco için: bu kılavuzlar 0,7–1,5 bar diyor. (baymak.com.tr/sss sayfası genel olarak "1-1,5 bar" yazıyor, md5 8dd1f660a0b21be5d33809e95495e390; model kılavuzu esas alındı, SSS değer kaynağı yapılmadı.)
#  - Duotec/Eco'da doldurma musluğunun YERİ: bu kılavuzlar göstermiyor. Yalnız Lunatec (kombinin altında, açık mavi) ve Duotec DHW (tesisata monte edilir) yazıldı.
#  - Genleşme tankı basıncı kontrolü kullanıcı adımı olarak YAZILMADI (Lunatec tablosunda var ama servis işi, #31).
#  - Basıncın neden düştüğü (kaçak dışında): belgede yok. Yalnız "sürekli basınçlandırma = su kaçağı olabilir" verildi.
#  - H.02.07 için reset: Lunatec H kodlarında reset istemiyor, kod kendiliğinden kayboluyor.
#  - F40'ta boşaltma musluğunu kullanıcının açması ADIM olarak konmadı: Duotec/Eco kılavuzları yerini göstermiyor, Lunatec'te kombinin içinde (#31 kapak açma yok).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin soğumasını bekle; basınç kombi soğukken okunur."
  - "Basıncı oku: Duotec ve Eco'da manometreden, Lunatec'te ekrandan."
  - "Doldurma musluğunun yerini bul; bilmiyorsan servisten göstermesini iste."
  - "Doldurma musluğunu hava yapmaması için çok yavaş aç."
  - "Basınç kılavuzdaki aralığa gelince musluğu kapat: Duotec ve Eco'da 0,7–1,5 bar, Lunatec'te 1–1,5 bar."
  - "Musluğun kapandığını ve su sızıntısı olmadığını kontrol et."
  - "Duotec veya Eco'da F37 sürüyorsa RESET tuşuna bas; Lunatec'te H.02.07 basınç düzelince kendiliğinden kaybolur."
  - "Basınç sık sık düşüyorsa yetkili servise başvur."
faq:
  - q: "Baymak kombide F37 hatası ne demek?"
    a: "Duotec, Duotec DHW ve Eco CT 20 kullanma kılavuzlarındaki hata kodu tablosunda F37'nin karşılığı 'Düşük su basıncı'. Aynı kılavuzlara göre su basıncı 0,5 barın altına düşerse kombi çalışmaz, 0,7 barın altındaysa sisteme su doldurulmalıdır."
  - q: "Lunatec'teki H.02.07 ile F37 aynı şey mi?"
    a: "Aynı durumu iki farklı kod düzeninde gösteriyorlar. Lunatec kılavuzu H.02.07'yi 'Isıtma devresinde düşük basınç (su doldurma gerekli)' diye tanımlıyor. H ile başlayan kodlar Lunatec'te geçici arızadır: kombi çalışmaz, hata durumu ortadan kalkınca kod kaybolur ve kombi çalışır."
  - q: "Baymak kombinin basıncı kaç bar olmalı?"
    a: "Seriye göre değişiyor. Duotec ve Eco kılavuzları kombi soğukken 0,7–1,5 bar aralığını veriyor. Lunatec kılavuzu tesisat soğukken 1–1,5 bar öneriyor ve minimum basıncı 0,8 bar olarak yazıyor. Duotec ve Eco kılavuzlarına göre normal işletme suyu basıncı 1 ila 2 bar arasındadır; basınç 3 barı aşarsa 3 bar emniyet ventili açılır."
  - q: "Lunatec'te su doldururken ekranda '------' çıktı, basıncı göremiyorum. Normal mi?"
    a: "Evet, kılavuzda anlatılan bir durum. Basınç 0,8 barın üzerine çıkınca hava giderme fonksiyonu devreye girer, ekranda '------' görünür ve basınç okunamaz. Kılavuz, anlık basıncı görmek için menüden AM019 (ısıtma tesisatının su basıncı) parametresine girilmesini söylüyor."
  - q: "Su ekledim ama birkaç gün sonra F37 yine çıktı. Ne yapmalıyım?"
    a: "Baymak'ın kılavuzları burada sınırı net çiziyor: basınç düşmesi sık tekrarlanıyorsa yetkili servise başvurulmalı. Duotec kılavuzu ayrıca kombi sürekli basınçlandırma ihtiyacı gösteriyorsa su kaçağı olabileceğini yazıyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; yuvarlak bir basınç göstergesi ve borular arasında açık mavi kollu küçük bir doldurma musluğu"
---

Baymak kombinin ekranında **F37** görüyorsan Baymak'ın kullanma kılavuzundaki karşılığı iki kelime: **"Düşük su basıncı."** Lunatec serisinde aynı durum **H.02.07** koduyla ve şu tanımla gelir: **"Isıtma devresinde düşük basınç (su doldurma gerekli)."** Basıncı okumak ve su eklemek, Baymak'ın kılavuzlarının kullanıcıya bıraktığı bir iş. Bu yazı o işi seriye göre adım adım anlatıyor ve nerede durman gerektiğini gösteriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F37 / H.02.07 = düşük su basıncı. Sıra şu: kombi soğusun → basıncı oku → doldurma musluğunu çok yavaş aç → Duotec/Eco'da 0,7–1,5 bar, Lunatec'te 1–1,5 bar olunca kapat → sızıntı yok mu bak. Basınç sık düşüyorsa yetkili servis.

## F37 mi, H.02.07 mi: modeline göre

Baymak'ta iki ayrı kod düzeni var ve aynı durum ikisinde farklı görünür:

| Seri | Ekrandaki kod | Kılavuzdaki tanım | Önerilen basınç (soğukken) |
|---|---|---|---|
| **Duotec, Duotec DHW, Eco CT 20** | **F37** | Düşük su basıncı | **0,7–1,5 bar** |
| **Lunatec** | **H.02.07** | Isıtma devresinde düşük basınç (su doldurma gerekli) | **1–1,5 bar** (minimum 0,8 bar) |

Duotec ve Eco kılavuzlarına göre su basıncı **0,7 barın altındaysa** sisteme su doldurulmalı; **0,5 barın altına** düşerse kombi çalışmaz. Lunatec'te kombi, ısıtma devresinde su olmadığında çalışmasına izin vermeyen bir hidrolik sensörle donatılmıştır.

## Adım adım: evde denenecekler

**1. Kombinin soğumasını bekle.** İki kılavuz da basıncın **soğukken** okunmasını istiyor: Duotec ve Eco'da "kombi soğuk iken", Lunatec'te "tesisat soğukken".

**2. Basıncı oku.** Duotec ve Eco'da değer **manometreden** okunur. Lunatec'te basınç **ekrandan** takip edilir; kılavuz bu yüzden kombinin elektrik bağlantısının yapılmış ve enerjinin verilmiş olmasını istiyor.

**3. Doldurma musluğunun yerini bul.** Lunatec'te doldurma musluğu **açık mavi** renktedir ve **kombinin altındadır**. Duotec DHW kılavuzu doldurma musluğunun **merkezi ısıtma tesisatına** monte edilmesini şart koşuyor. Duotec ve Eco kılavuzları musluğun yerini göstermiyor; bilmiyorsan servisten göstermesini iste.

**4. Musluğu çok yavaş aç.** Baymak'ın uyarısı iki kılavuzda da aynı: **hava yapmaması için** doldurma musluğunu çok yavaş aç. Lunatec'te musluk saat yönünün tersine, yani **sola doğru** çevrilir; kılavuz **el aleti değil, yalnız elini** kullanmanı istiyor.

**5. Hedef değere gelince kapat.** Duotec ve Eco'da basınç **0,7–1,5 bar** aralığına gelince, Lunatec'te **1–1,5 bar** arasına ulaşınca musluğu kapat. Lunatec'te basınç **0,8 barı geçince** hava giderme fonksiyonu devreye girer ve ekranda **"------"** görünür; bu sırada basınç okunamaz. Anlık değeri görmek için kılavuz menüden **AM019** (ısıtma tesisatının su basıncı) parametresine girilmesini söylüyor.

**6. Sızıntı kontrolü yap.** Musluğun kapandığından ve **su sızıntısı olmadığından** emin ol.

**7. Kodun gidişini izle.** Duotec ve Eco kılavuzları bir hata kodunda **RESET** tuşuna basılmasını söylüyor; F37 sürüyorsa bas. Lunatec'te H ile başlayan kodlar geçici arızadır: hata durumu ortadan kalkınca **kod kendiliğinden kaybolur** ve kombi çalışır; kılavuza göre bazı durumlarda bu **10 dakika** sonra olur.

**8. Sık düşüyorsa servise bildir.** Baymak'ın kılavuzlarına göre basınç düşmesi **sık tekrarlanıyorsa** yetkili servise başvurulmalı.

## Lunatec'te doldurmadan sonra hava

Lunatec kılavuzu bir ek not düşüyor: musluk yavaş açılsa bile eşanjör giriş suyundaki havanın tamamı tahliye edilemeyebilir. Bu yüzden doldurmanın sonunda **kombinin elektriğini kesip hemen tekrar vererek** hava giderme fonksiyonunun tekrarlanmasını tavsiye ediyor.

## Fazla doldurduysan: F40

Aynı tabloda ters durumun da kodu var: **F40 — Yüksek su basıncı.** Duotec ve Eco kılavuzlarına göre normal işletme suyu basıncı **1 ila 2 bar** arasındadır; basınç **3 barı aşarsa 3 bar emniyet ventili açılır** ve su boşaltılarak basınç düşürülür.

Kılavuz yüksek basınçta **boşaltma musluğunun** açılarak basıncın istenen aralığa getirilmesini söylüyor. Ancak Duotec ve Eco kılavuzları bu musluğun yerini göstermiyor; Lunatec kılavuzuna göre boşaltma musluğu **kombinin içindedir.** Kombinin kapağını açman gerekiyorsa bu iş sana ait değil → yetkili servis.

## Nerede duracaksın

Basıncı tamamladığın hâlde F37 ya da H.02.07 kısa sürede geri geliyorsa evde yapılacak iş bitmiştir. Duotec kılavuzunun ifadesiyle: kombi **sürekli basınçlandırma ihtiyacı** gösteriyorsa **su kaçağı olabilir**, yetkili servisi bilgilendir. Lunatec'in arıza tablosu da H.02.07 için tesisat basıncının yanında **genleşme tankı basıncının** ve **kombi/tesisat sızıntılarının** kontrolünü sayıyor; bu kontroller servisin işidir.

⛔ **Kendin-çöz sınırı burada biter.** Duotec ve Eco kılavuzları kombinin bakımının ve temizlenmesinin **yalnız yetkili kişilerce** yapılmasını istiyor. Kural basit: **basıncı okumak ve doldurma musluğu sana; kombinin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Ekrandaki kod F37 mi, H.02.07 mi, yoksa F40 mı?
2. Basınç kombi soğukken kaç bar?
3. Su ekledikten sonra kod gitti mi?
4. Ne kadar sürede yeniden su eklemen gerekti?
5. Kombinin altında ya da tesisatta su izi var mı?

Bu beşine cevabın varsa servise "kombi çalışmıyor" yerine somut bir tablo anlatabilirsin.

Baymak'ın diğer kodları için [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) listesine bak. Basınç konusunu marka bağımsız anlattığımız yerler: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) ve [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/). Ekranda F37 değil **E01** varsa [Baymak kombi E01 hatası](/blog/baymak-kombi-e01-hatasi/), **F13** varsa [Baymak kombi F13 hatası](/blog/baymak-kombi-f13-hatasi/) yazısına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
