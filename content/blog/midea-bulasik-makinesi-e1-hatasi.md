---
title: "Midea bulaşık makinesi E1 hatası: su alma süresi uzadı"
description: "Midea bulaşık makinesinde E1, su alma süresinin uzaması demek. Musluk göstergesi, vana, şebeke basıncı, hortum ve donma kontrolü; kılavuzdaki sıra."
slug: "midea-bulasik-makinesi-e1-hatasi"
date: "2026-10-25"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı C (YK #182 Dalga 8, küme Z5 — Dalga 7 yedeği). origin/main 829cec5'te "midea" slug'ları: midea-buzdolabi-kurulum, midea-camasir-makinesi-e10/e21-hatasi, midea-camasir-makinesi-resetleme; bulaşık makinesi slug'ı/başlığı yok, Midea hata kodları hub'ı yok.
# Arama kanıtı (25 Eki 08:50 +03, ham: Z5/_kaynak/ot.tsv): "midea bulaşık makinesi e" → 1. "…e1 hatası"; "midea bulaşık makinesi e1" → 1.; "midea bulaşık makinesi" → 4. GSC: satır yok (www-5, www-6 Sorgular.csv'de "midea" 0).
# Belge zinciri (bu koşu 25 Eki): Midea UK resmî ürün sayfaları (200) → www.midea.com/content/dam/midea-aem/uk/... PDF (200 application/pdf).
#  (B1) MDWEF1034D(W)-WG-UK kullanım kılavuzu EN, 48 s., md5 781d6848e00fc64d0520687a8f1b054e
#  (B2) MDWEF1034D(SS)-WG-UK kullanım kılavuzu EN, 48 s., md5 6b3fbfe86b2a2b1e977dd10a0c83ca83 (metin B1 ile aynı)
#  PDF s.8 (basınç), s.13 (soğuk su bağlantısı), s.14 (emniyetli hortum), s.19 (musluk göstergesi), s.32 (başlatma, reset), s.38 (donma, her yıkamadan sonra), s.39 (sorun giderme), s.41 (onarım uyarısı), s.42 (hata tablosu, görüntüden doğrulandı)
# BİLEREK YAZILMAYANLAR: su giriş valfi, kart, seviye algılayıcı teşhisi (#31) · hortum sökme/değiştirme (kılavuz: tesisat profesyonel) · giriş filtresi (bu kılavuzda yok) · fiyat (#46) · Türkiye modeli ayrıntısı.
# Alıntı denetimi: midea-bulasik-makinesi-e1-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["El feneri", "Bez ya da havlu", "Makinenin kullanım kılavuzu"]
steps:
  - "Ekrandaki musluk göstergesinin yanıp yanmadığına bak."
  - "Makinenin bağlı olduğu vanayı sonuna kadar aç."
  - "Evdeki diğer musluklarda suyun normal akıp akmadığını kontrol et."
  - "Makineyi dikkatle öne çek, besleme hortumunu vanadan makineye kadar izle, ezik ya da kıvrımı düzelt."
  - "Tesisat yeniyse ya da uzun süre kullanılmadıysa su girişinin tıkanmış olabileceğini not et ve servise bildir."
  - "Makine soğuk bir ortamdaysa donma ihtimalini düşün, ortam ısınmadan çalıştırma."
  - "Başlat/Duraklat ile programı iptal et, programı yeniden seçip başlat."
faq:
  - q: "Midea bulaşık makinesinde E1 ne demek?"
    a: "Midea'nın MDWEF1034D kılavuzundaki hata tablosuna göre E1, su alma süresinin uzaması. Makine programın istediği suyu beklenen sürede alamamış."
  - q: "E1 için kılavuz ne diyor?"
    a: "Çözüm sütununda üç neden sayılıyor: musluk açılmamış, su girişi kısıtlanmış ya da su basıncı çok düşük. Çözülemeyen hata kodunda profesyonel yardım isteniyor."
  - q: "Su basıncı kaç olmalı?"
    a: "Kılavuz giriş suyu basıncını en az 0,04 MPa, en çok 1 MPa olarak veriyor (yaklaşık 0,4 ile 10 bar). Basıncın nasıl ölçüleceği kılavuzda yok."
  - q: "Ekranda musluk simgesi yanıyor, bu ne demek?"
    a: "Kılavuzdaki ekran tablosuna göre musluk göstergesi yanıyorsa su musluğu kapalı. Vanayı sonuna kadar açıp programı yeniden başlat."
  - q: "Vana açık, basınç normal, E1 yine çıkıyor. Ne yapmalıyım?"
    a: "Hortum düz ve evde su normal akıyorsa sorun makinenin su alma tarafında olabilir (çıkarım). Kılavuz profesyonel olmayan onarımın güvenlik riski taşıdığını yazıyor; yetkili servisi ara."
images:
  coverAlt: "Mutfak tezgâhı yanında duran, kapağı kapalı beyaz solo bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
---

Midea bulaşık makinen programa başladı, bir süre bekledi, sonra durdu ve ekranda E1 belirdi. Midea'nın hata kodu tablosunda E1'in karşılığı kısa: su alma süresi uzadı. Yani makine, programın istediği suyu beklenen sürede alamadı. Tablodaki çözüm de nedenleri sayıyor: musluk açılmamış, su girişi kısıtlanmış ya da su basıncı çok düşük. Bu yazı Midea'nın İngiltere sitesinde yayımlanan MDWEF1034D(W)-WG-UK ve MDWEF1034D(SS)-WG-UK kullanım kılavuzuna dayanıyor (kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi). Türkiye'de satılan modelde panel ve ayrıntılar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E1 = su geç geliyor ya da hiç gelmiyor. Ekrandaki musluk göstergesine bak, vanayı sonuna kadar aç, evde suyun normal akıp akmadığını kontrol et, hortumun ezilmediğinden emin ol. Kışın donma ihtimalini düşün. Sonra programı iptal edip yeniden başlat. Kod dönerse servis.

## Kılavuzdaki E1 satırı

| Kod | Kılavuzdaki neden | Kılavuzdaki çözüm |
|---|---|---|
| **E1** | Su alma süresi uzadı | Musluk açılmamış, su girişi kısıtlı ya da su basıncı çok düşük |

Aynı tabloda E3, E4, E8 ve Ed de var. E4 taşma demek; o kod için [Midea bulaşık makinesi E4 hatası](/blog/midea-bulasik-makinesi-e4-hatasi/) yazısına bak. Tablonun altındaki uyarı da açık: çözülemeyen bir hata kodunda profesyonel yardım istenmeli.

E1'in üç nedeninin üçü de makinenin dışında. Bu yüzden servisi aramadan önceki kontroller kısa, çoğu birkaç dakikalık iş.

## Adım adım: Midea bulaşık makinesinde E1 hatasını gidermek

**1. Musluk göstergesine bak.** Kılavuzdaki kontrol paneli tablosunda ekranın bir parçası olarak musluk göstergesi var. Bu simge yanıyorsa kılavuza göre su musluğu kapalı. E1 ile birlikte bu simge de görünüyorsa sebebi büyük ölçüde bulmuşsun demektir (çıkarım).

**2. Vanayı sonuna kadar aç.** Kılavuz her yıkamadan sonra makinenin suyunu kapatmanı ve nem ile koku içeride kalmasın diye kapağı biraz aralık bırakmanı öneriyor. Bu alışkanlığın doğal sonucu, bir sonraki yıkamada vananın kapalı unutulması (çıkarım). Program başlatma bölümü suyun **tam basınçla açık** olduğundan emin olmanı istiyor; emniyetli besleme hortumu bölümü de aynı şeyi tekrarlıyor: makineyi çalıştırmadan önce suyu sonuna kadar aç. Yarım açık bir vana da su girişini kısıtlar (çıkarım).

**3. Şebeke basıncını kontrol et.** Kılavuzun verdiği aralık: giriş suyu basıncı **en az 0,04 MPa, en çok 1 MPa** (yaklaşık 0,4 ile 10 bar). Basıncı ölçmenin yolu kılavuzda yok; pratik kontrol evdeki diğer musluklar. Mutfakta ve banyoda su zayıf akıyorsa, binada kesinti ya da depo sorunu varsa makine istediği suyu zamanında alamaz (çıkarım). Sorun giderme tablosu "makine çalışmıyor" satırında da düşük basıncı sayıyor ve su beslemesinin doğru bağlı, suyun açık olduğunu kontrol etmeni istiyor.

**4. Hortumun yolunu izle.** Tablodaki ikinci neden su girişinin kısıtlanması. Makine dolapların arasına ya da tezgâh altına itilirken besleme hortumu arkada ezilmiş, katlanmış ya da bir ayağın altında kalmış olabilir (çıkarım). Makineyi dikkatle öne çek, hortumu vanadan makineye kadar izle, ezik ya da kıvrım varsa düzelt. Kılavuz besleme ve tahliye hortumlarının sağa ya da sola yönlendirilebildiğini söylüyor; yön değiştirildiyse bu noktaya özellikle bak.

**5. Yeni ya da uzun süre kullanılmamış tesisatı unutma.** Kılavuzun soğuk su bağlantısı notuna göre borular yeniyse ya da uzun süre kullanılmadıysa, suyun berrak geldiğinden emin olmak için önce bir süre akıtmak gerekiyor. Gerekçe de yazılı: **su girişinin tıkanması ve makinenin zarar görmesi riski.** Tesisatta yakın zamanda iş yapıldıysa ya da ev uzun süre boş kaldıysa makine bu yüzden su alamıyor olabilir (çıkarım). Girişe ulaşan tortunun temizliği kılavuzda anlatılmıyor; bu iş servisin.

**6. Kışın donma ihtimalini düşün.** Kılavuz kış için ayrı bir donma önlemi bölümü ayırıyor: her yıkamadan sonra elektriği kaynağından kesmek, suyu kapatmak, besleme hortumundaki ve su valfindeki suyu bir kaba boşaltmak, hortumu yeniden bağlamak ve teknenin dibindeki suyu süngerle almak. Makine ısıtılmayan bir alanda duruyorsa hortumda donan su girişi kapatabilir (çıkarım). Böyle bir durumda ortam ısınmadan makineyi çalıştırma (çıkarım).

**7. Programı iptal edip yeniden başlat.** Kontroller bitince makineyi yeniden dene. Kılavuza göre program Başlat/Duraklat düğmesiyle duraklatılıyor, ardından aynı düğmeye 3 saniyeden uzun basılınca makine program seçim moduna geçiyor; program seçilip yeniden Başlat/Duraklat'a basılıyor. Deterjan bölmesi açıldıysa yeniden doldurulması gerekiyor. Ayrıntılar [Midea bulaşık makinesi resetleme](/blog/midea-bulasik-makinesi-resetleme/) yazısında.

## Emniyetli hortum notu

Kılavuzdaki modelde besleme hortumu çift cidarlı bir emniyetli hortum. Kılavuza göre bu sistem, hortum patladığında ve iç hortumla dıştaki oluklu hortum arasındaki boşluk suyla dolduğunda **su akışını keserek** devreye giriyor. Vana açık, basınç normal ve hortum düz olduğu hâlde makine hiç su almıyorsa bu sistemin devreye girmiş olması da ihtimal dahilinde (çıkarım). Hortumu kendin değiştirmeye çalışma: kılavuz boru ve elektrik tesisatının profesyonelce yapılmasını, makinenin yeni hortum takımıyla bağlanmasını ve eski takımın yeniden kullanılmamasını istiyor.

Genel anlatım için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısına bakabilirsin.

## Ne zaman servis

- Musluk göstergesi sönük, vana tam açık, evde basınç normal olduğu hâlde E1 geri geliyorsa
- Makine hiç su almıyor ve emniyetli hortumun devreye girdiğinden şüpheleniyorsan
- Vana ya da hortum bağlantısında sızıntı görüyorsan
- Yeni tesisattan sonra su girişinin tıkandığını düşünüyorsan

⛔ **Kendin-çöz sınırı burada biter.** Musluk, vana ve hortumun yolu sende; su bağlantısını sökmek, hortum değiştirmek, su valfi, kart ve makinenin içi yetkili servisin. Kılavuz kendi başına ya da profesyonel olmayan onarımın kullanıcı güvenliği için ciddi risk taşıdığını ve garantiyi etkileyebileceğini yazıyor.

## Servisi aramadan önce kısa özet

1. Modelin ne (tanıtım etiketinde yazar)?
2. E1 programın hangi anında çıktı?
3. Musluk göstergesi yanıyor muydu?
4. Evdeki diğer musluklarda su normal akıyor mu?
5. Makine soğuk bir ortamda mı duruyor, tesisatta yakın zamanda iş yapıldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
