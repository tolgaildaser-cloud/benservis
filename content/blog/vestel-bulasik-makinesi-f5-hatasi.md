---
title: "Vestel bulaşık makinesi F5 hatası"
description: "Vestel bulaşık makinesi F5 hatası iki nesilde iki ayrı anlam taşır: eski nesilde su girişi yetersiz, yeni nesilde basınç sistemi arızası."
slug: "vestel-bulasik-makinesi-f5-hatasi"
date: "2026-09-27"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext (düz ve -layout, sayfa sayfa) ile okundu.
# Sayfa numaraları PDF sayfasıdır (pdftotext -f/-l), basılı sayfa numarası değil.
# Web araması bu belgeler için KULLANILMADI: üçünün yeri hub'ın (vestel-bulasik-makinesi-hata-kodlari) provenans bloğundan alındı.
#  A) BM 8402 GI Pro WIFI   https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410
#  B) BM 10502 X GI WIFI    https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff
#  C) BM-401 (eski nesil)   https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# YENİ NESİL F5 (A s.50, B s.49, birebir): "F5 | Basınç sistemi arızası | Servisle iletişime geçin."
# ESKİ NESİL F5 (C s.40): "F5 | Su girişi yetersiz. | Su giriş musluğunun tamamen açık olduğundan ve suyun kesik olmadığından
#   emin olunuz. Su giriş musluğunu kapatınız, su giriş hortumunu musluktan ayırarak hortumun bağlantı ucundaki filtreyi
#   temizleyiniz. Makinenizi tekrar çalıştırın, hata devam ediyorsa servise başvurunuz."
# Yeni nesilde su girişi ayrı koda taşınmış: FF "Su giriş sistemi arızası" (A s.50, B s.49); C tablosunda FF YOK.
# Hortum filtresi bakımı: C s.34 · Su basıncı 0,03-1 MPa: C s.11-12 · Güvenlikli hortum: C s.12.
# YAZILMAYANLAR: yeni nesil "basınç sistemi" için herhangi bir mekanizma/parça yorumu (belgede yok; Vestel yalnız "Servisle iletişime geçin"
#   diyor) · "modeline göre nesli şuradan anlarsın" gibi seri numarası/yıl kuralı (belgede yok) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-f5-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Küçük bir kap"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Su giriş musluğunun tamamen açık olduğunu ve evde suyun kesik olmadığını kontrol et."
  - "Musluğu kapat ve su giriş hortumunu musluktan ayır."
  - "Hortumun bağlantı ucundaki filtreyi musluk altında temizle ve yerine yerleştir."
  - "Hortumu geri tak, musluğu sonuna kadar aç ve bağlantıda sızıntı olmadığını kontrol et."
  - "Makineyi tekrar çalıştır; F5 sürerse servise başvur."
faq:
  - q: "Vestel bulaşık makinesi F5 hatası ne demek?"
    a: "Makinenin nesline bağlı. Eski nesil Vestel kılavuzunda F5 'Su girişi yetersiz' anlamına gelir ve kullanıcıdan musluk ile hortum filtresini kontrol etmesini ister. Yeni nesil kılavuzlarda F5 'Basınç sistemi arızası'dır ve Vestel'in talimatı tek cümledir: servisle iletişime geçin."
  - q: "Makinemin hangi nesil olduğunu nasıl anlarım?"
    a: "En güvenilir yol, kendi modelinin kullanım kılavuzundaki arıza kodu tablosudur: F5'in karşısında ne yazıyorsa o geçerlidir. Tabloya bakarken şunu da gör: Vestel'in yeni nesil kılavuzlarında su girişi için ayrı bir kod, FF, bulunur; eski nesil kılavuzun tablosunda FF yoktur."
  - q: "Yeni nesil makinede F5 için evde yapabileceğim bir şey var mı?"
    a: "Vestel'in yeni nesil tablosu F5 için kullanıcıya bir adım tarif etmiyor; çözüm sütununda yalnızca 'Servisle iletişime geçin' yazıyor. Makineyi kapatıp fişini çekmek ve servise modelini, kodu ve kodun hangi aşamada çıktığını söylemek yeterli."
  - q: "Eski nesilde hortum filtresini nasıl temizlerim?"
    a: "Vestel'in eski nesil kılavuzuna göre önce musluğu kapat ve hortumu sök. Filtreyi hortumdan çıkarıp musluk altına tutarak temizle, yeniden hortumun içindeki yerine yerleştir ve hortumu geri tak. Kılavuz, bu filtrenin şebekeden gelebilecek kum, kil gibi kirleri tuttuğunu yazıyor."
images:
  coverAlt: "Açık bir kullanım kılavuzunda bulaşık makinesi arıza kodu tablosu ve yanında makinenin kontrol paneli"
---

Ekranda **F5** yazıyor. Bu kodun cevabı makinenin nesline bağlı: Vestel bulaşık makinesi kod tablosunu nesiller arasında değiştirmiş ve bu kodda fark büyük. Eski nesil kılavuzda F5'in karşılığı **"Su girişi yetersiz."**; yeni nesil kılavuzlarda ise **"Basınç sistemi arızası."** Birincisinde Vestel sana musluk ve hortum filtresi kontrolü yaptırıyor, ikincisinde doğrudan servise yönlendiriyor. Bu yazı önce hangisinin sende geçerli olduğunu, sonra ne yapacağını adım adım anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kılavuzuna bak. **Basınç sistemi arızası** yazıyorsa → makineyi kapat, fişini çek → servis. **Su girişi yetersiz** yazıyorsa → musluk tam açık mı, su var mı → musluğu kapat, hortumu ayır, bağlantı ucundaki filtreyi temizle → geri tak → tekrar çalıştır. Sürerse → servis.

## Önce: sendeki F5 hangisi?

| | Eski nesil kılavuz | Yeni nesil kılavuz |
|---|---|---|
| **F5** | Su girişi yetersiz | Basınç sistemi arızası |
| **FF** | *(tabloda yok)* | Su giriş sistemi arızası |
| **Vestel ne diyor (F5)** | Musluk ve hortum filtresini kontrol et, tekrar çalıştır; sürerse servis | Servisle iletişime geç |

Kesin cevap kendi modelinin kullanım kılavuzundaki arıza kodu tablosundadır: F5'in karşısında ne yazıyorsa o geçerlidir. Tabloya bakarken şunu da gör: Vestel'in yeni nesil kılavuzlarında su girişi için ayrı bir kod, **FF**, bulunur; eski nesil kılavuzun tablosunda FF yoktur.

## Yeni nesil: F5 = basınç sistemi arızası

Vestel'in yeni nesil tablosunda bu satırın çözüm sütunu tek cümle: **"Servisle iletişime geçin."** Kullanıcıya tarif edilen bir kontrol yok. Makineyi Açma/Kapama tuşuyla kapat, fişini çek ve servise modelini, kodu ve kodun programın hangi aşamasında çıktığını söyle.

Makinen yeni nesilse ama su almadığını düşünüyorsan, o belirtinin kodu FF'dir: [Vestel bulaşık makinesi FF hatası](/blog/vestel-bulasik-makinesi-ff-hatasi/).

## Eski nesil: F5 = su girişi yetersiz — adım adım

**1. Makineyi kapat, fişini çek.** Hortuma dokunmadan önce makinenin enerjisini kes.

**2. Musluğa ve suya bak.** Vestel'in eski nesil talimatının ilk cümlesi: **su giriş musluğunun tamamen açık olduğundan ve suyun kesik olmadığından emin ol.** Mutfakta başka bir musluğu açarak evde su olup olmadığını gör.

**3. Musluğu kapat, hortumu ayır.** Talimatın ikinci kısmı: **su giriş musluğunu kapat, su giriş hortumunu musluktan ayır.** Hortumda kalan az miktarda su için altına küçük bir kap tut.

**4. Filtreyi temizle.** Hortumun **bağlantı ucundaki filtreyi** temizle. Kılavuzun bakım bölümündeki sıra: filtreyi hortumdan çıkar, **musluk altına tutarak** temizle, yeniden hortumun içindeki yerine yerleştir.

**5. Hortumu geri tak.** Hortumu musluğa bağla, musluğu sonuna kadar aç. Vestel, bağlantılar yapıldıktan sonra **su sızdırmazlığının kontrol edilmesini** istiyor.

**6. Tekrar çalıştır.** Talimatın son cümlesi: **makineyi tekrar çalıştır, hata devam ediyorsa servise başvur.**

## Eski nesilde kurulumla ilgili iki kural

- **Basınç aralığı:** Vestel'e göre musluktan gelen basınç **en az 0,03 MPa (0,3 bar), en fazla 1 MPa (10 bar)** olmalı; 1 MPa'nın üzerindeyse araya basınç düşürücü vana konulmalı.
- **Güvenlikli hortum:** Bazı modellerde güvenlikli hortum kullanılıyor ve Vestel bu hortumda **tehlikeli gerilim bulunduğunu** yazıyor. Kesme, kıvrılmasına ve bükülmesine izin verme; fişi çekmeden hortuma dokunma.

Kılavuz ayrıca hortumların cihaz yerine yerleştirilirken **sıkışmamasını** ve eski cihazdan kalan giriş hortumu yerine makineyle verilen **yeni hortumun** kullanılmasını istiyor.

## Sınır nerede biter

Yeni nesilde F5'in sınırı baştan bellidir: **servis.** Eski nesilde musluk açık, su var, hortum filtresi temiz ve F5 hâlâ çıkıyorsa Vestel'in talimatı yine aynı yere varıyor: **servise başvur.** Kılavuzun genel kuralı da kurulum ve onarım işlerinin yetkili servis tarafından yapılmasıdır.

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum ve hortum filtresi kullanıcıya; makinenin içindeki su ve basınç tarafı servise aittir.

Vestel'in öteki bulaşık kodları ve nesil farkının tamamı için [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Kılavuzundaki tabloda F5'in karşılığı ne yazıyor?
2. Tabloda FF kodu var mı?
3. (Eski nesil) Musluk tam açık, evde su var mı?
4. (Eski nesil) Hortumun bağlantı ucundaki filtre temizlendi mi?
5. Kod programın hangi aşamasında çıktı?

Bu beşine cevabın varsa servise "F5 veriyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
