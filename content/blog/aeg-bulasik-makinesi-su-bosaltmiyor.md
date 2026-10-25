---
title: "AEG bulaşık makinesi su boşaltmıyor: filtre, hortum, gider"
description: "AEG bulaşık makinesi su boşaltmıyorsa: iç yüzeydeki su normal mi, program iptali, üç parçalı filtre, yabancı cisim, tahliye hortumu ve gider ağzı."
slug: "aeg-bulasik-makinesi-su-bosaltmiyor"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı C (YK #182 Dalga 7, küme Y5). origin/main 26ffd7d'de bu slug ve "AEG bulaşık ... boşaltmıyor" başlığı yok; Dalga 6/7 klasörlerinde yok.
# Arama kanıtı (#164, bu koşu 25 Eki 08:23 +03, hl=tr gl=tr; ham _kaynak/C/k3/ot-k3.tsv; ilk kanıt _kaynak/ot.tsv 24 Eki 13:46): "aeg bulaşık makinesi su" → 2. "aeg bulaşık makinesi su boşaltmıyor"; "aeg bulaşık makinesi s" → 4. aynı. GSC: "aeg" satırı yok.
# Belge (#88). Zincir: https://www.aeg.co.uk/support/user-manuals/?q=911434668 (FSE73727P, PNC 911 434 668; curl HTTP/2 hatası, yerleşik tarayıcıda açıldı)
#   → https://electrolux.bynder.com/asset/a8a328ca-93f2-42fa-8a16-cd1b7590a91e/241217V37I-pdf.pdf (bu koşu curl 200, application/pdf)
#  AEG FSE73727P kullanım kılavuzu, EN/FR, 52 s., md5 674698ccd07b3cded91fc0feefd0cc34 — s.5, 7, 16, 18, 19, 21, 22, 45
#  Kılavuzun İngilizce baskısı; alıntılar Türkçeye çevrildi, orijinaller KAYNAK'ta.
# HUB KURALI: i20 satırı main'deki aeg-bulasik-makinesi-ariza-kodlari'nda tablo satırı; bu sayfa belirti sorgusu ("su boşaltmıyor"), kod tablosu kopyalanmadı, hub'a bağlandı.
# BİLEREK YAZILMAYANLAR: tahliye pompası sökümü/temizliği · hortum yüksekliği değeri (kılavuz kurulum talimatına gönderiyor) · iptalin suyu boşalttığı iddiası (kılavuzda yok) · fiyat (#46).
# Alıntı denetimi: aeg-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Küçük bir kap", "Emici bir bez ya da sünger", "Makinenin kullanım kılavuzu"]
steps:
  - "Programın gerçekten bitip bitmediğine ve tabanda gerçekten su birikip birikmediğine bak; iç yüzeylerde kalan biraz su normal."
  - "Çalışan programı açma-kapama tuşunu yaklaşık üç saniye basılı tutarak iptal et, makineyi kapat ve fişi çek."
  - "Tabandaki suyu kap ve bezle al, silindir biçimli filtreyi saat yönünün tersine çevirip çıkar."
  - "Üç filtreyi birbirinden ayır ve akan su altında yıka."
  - "Haznede cam, kemik, plastik ya da kürdan gibi yabancı cisim varsa elle al; çıkmıyorsa servise bırak."
  - "Düz filtreyi iki kılavuzun altına oturt, diğer iki filtreyi birleştirip saat yönünde kilitlenene kadar çevir."
  - "Tahliye hortumunun dolabın arkasında bükülmediğini ve ezilmediğini kontrol et."
  - "Lavabo altındaki gider bağlantısının tıkalı olmadığına bak, makineyi açıp yeni bir program başlat."
faq:
  - q: "AEG bulaşık makinesinin dibinde su kalıyor, arıza mı?"
    a: "Duruma bağlı. FSE73727P kılavuzu program bittikten sonra iç yüzeylerde su kalabileceğini yazıyor; bu normal. Tabanda su birikiyorsa ve ekranda i20 görünüyorsa makine suyu boşaltamıyor demektir; filtreleri, tahliye hortumunu ve gider ağzını kontrol et."
  - q: "i20 ne demek?"
    a: "AEG kılavuzunda i20, makinenin suyu boşaltmadığını gösteriyor. Kontrol listesi üç maddelik: lavabo altındaki gider ağzı tıkalı mı, makinenin iç filtre sistemi tıkalı mı, tahliye hortumunda büküm var mı?"
  - q: "Programı iptal edince makine suyu boşaltır mı?"
    a: "Kılavuz bunu söylemiyor. Yalnız açma-kapama tuşunu yaklaşık üç saniye basılı tutunca makinenin program seçimine döndüğünü yazıyor. Filtreyi sökmeden önce tabandaki suyu bir kap ve bezle almak işini kolaylaştırır (çıkarım)."
  - q: "Ekranda i20 değil iF1 var, fark ne?"
    a: "Kılavuza göre iF1 makinedeki su seviyesinin çok yüksek olduğunu gösteriyor. Öneri makineyi kapatıp açmak, filtrelerin temiz olduğundan emin olmak ve tahliye hortumunun zeminden doğru yükseklikte takılı olduğunu kurulum talimatından kontrol etmek."
  - q: "Tahliye pompasını kendim temizleyebilir miyim?"
    a: "AEG kılavuzu kullanıcıya filtreleri ve hazneyi gösteriyor, pompayı değil. Yabancı cismi çıkaramıyorsan yetkili servise başvurmanı istiyor; i51–i59 ya da i5A–i5F kodları da yıkama ya da tahliye pompasında arıza demek ve kapat-aç sonrası sürerse servis gerekiyor."
images:
  coverAlt: "Kapağı açık, tabanında bir miktar su birikmiş bir bulaşık makinesinin içi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda su ya da toz haznesi"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
---

AEG bulaşık makinen programı bitirdi ama kapağı açtığında tabanda kirli su duruyor, ya da program yarıda kesilip ekranda **i20** beliriyor. AEG'nin kılavuzu bu belirtinin nedenlerini üç yerde arıyor: makinenin kendi filtre sistemi, tahliye hortumu ve lavabo altındaki gider bağlantısı. Bu yazı AEG'nin İngiltere sitesindeki kılavuz sayfasından indirdiğimiz **7000 GlassCare (FSE73727P)** kılavuzunun İngilizce baskısına dayanıyor; alıntılar bizim çevirimiz. Tuş adları modele göre değişebilir.

Olası arızayı benservis.com'daki ücretsiz teşhisten öğrenebilirsin.

> ⚡ **Kısa özet:** İç yüzeylerde biraz su normal; tabanda su birikiyorsa programı iptal et, fişi çek, suyu al. Üç parçalı filtreyi sök, yıka, haznedeki yabancı cismi çıkar, filtreyi doğru tak. Tahliye hortumunda büküm, gider ağzında tıkanıklık var mı bak. Sürerse yetkili servis.

## Önce: gerçekten boşaltmıyor mu?

Kılavuzun programın sonuna dair notu açık: program bittikten sonra makinenin iç yüzeylerinde su kalabiliyor. Duvarlarda ve kapakta damlacıklar, tabanın kenarında ince bir ıslaklık bu yüzden arıza değil. Program bittiğinde ekran 0:00 gösteriyor ve Auto Off işlevi makineyi kendiliğinden kapatıyor. Süre ekranda henüz akıyorsa makine boşaltma aşamasına gelmemiş olabilir (çıkarım). Kılavuz programın çalışırken birkaç kez durup yeniden başlamasını da normal sayıyor.

Boşaltmama başka bir tablo: tabanda, filtrenin çevresinde kirli su birikmiş duruyor ve ekranda i20 görünebiliyor. Kodun yanında iF1 görüyorsan makinede su seviyesi çok yüksek demektir; ikisinin kontrolü büyük ölçüde aynı yerden geçiyor. Tüm kodların listesi [AEG bulaşık makinesi arıza kodları](/blog/aeg-bulasik-makinesi-ariza-kodlari/) sayfasında.

## Adım adım: evde denenecekler

**1. Belirtiyi ayır.** Programın bitip bitmediğine, tabanda gerçekten su biriktiğine bak. Ekrandaki kodu not et; servise giderse ilk sorulacak şey bu.

**2. Programı iptal et, fişi çek.** Çalışan bir programı iptal etmek için açma-kapama tuşunu yaklaşık üç saniye basılı tut; makine program seçimine dönüyor. Sonra makineyi kapat. AEG Machine Care dışındaki her bakımdan önce makineyi kapatıp fişini prizden çekmeni istiyor. Kılavuz iptalin suyu boşalttığını söylemiyor.

**3. Suyu al, filtreyi çıkar.** Tabandaki suyu küçük bir kap ve emici bir bezle al (çıkarım; kılavuzda bu adım yok). Filtre sistemi üç parçadan oluşuyor: silindir biçimli filtreyi saat yönünün tersine çevirip çıkar.

**4. Filtreleri yıka.** İçteki küçük filtreyi silindir filtreden ayır, altındaki düz filtreyi kaldır ve üçünü de yıka. Haznenin içinde ve kenarında yemek artığı ya da kir kalmadığından emin ol.

**5. Yabancı cismi çıkar.** AEG filtreleri ve hazneyi her yıkamadan sonra kontrol etmeni istiyor. Cam parçası, plastik, kemik ya da kürdan gibi cisimler yıkama performansını düşürüyor ve **tahliye pompasına zarar verebiliyor.** Gördüklerini elle al. Kılavuzun uyarısı: yabancı cismi çıkaramıyorsan yetkili servise başvur.

**6. Filtreleri doğru tak.** Düz filtreyi yerine koy ve iki kılavuzun altına doğru oturduğundan emin ol. Diğer iki filtreyi birleştir, düz filtrenin içine yerleştir ve kilitlenene kadar saat yönünde çevir. AEG'ye göre yanlış takılan filtre kötü yıkama sonucuna ve makinenin zarar görmesine yol açabiliyor.

**7. Tahliye hortumunu kontrol et.** i20 satırının son maddesi tahliye hortumunda büküm ya da kıvrım olmaması. Makine dolabına itilirken ya da lavabo altına eşya konurken hortum arkada katlanmış olabilir. iF1 görüyorsan kılavuz ayrıca hortumun zeminden doğru yükseklikte takılı olduğunu kontrol etmeni istiyor; değer makineyle gelen kurulum talimatında.

**8. Gider ağzına bak, yeniden başlat.** Kılavuzun İngilizce baskısı lavabo altındaki gider bağlantısının, Fransızca baskısı sifonun tıkalı olmamasını istiyor. Lavabonun kendisi de yavaş akıyorsa tıkanıklık büyük olasılıkla evin giderinde, makinede değil (çıkarım). Fişi tak, makineyi aç; yeni programdan önce deterjan gözünde deterjan olduğundan emin ol. AEG'nin genel kuralı: kontrolden sonra makineyi kapatıp aç, sorun yeniden çıkarsa yetkili servis.

## Tekrarlamasın diye

Büyük yemek artıklarını sıyırıp bulaşığı öyle diz; AEG elde ön durulamayı önermiyor, yalnız artıkları almanı istiyor. Filtreyi ve hazneyi düzenli kontrol et. Kılavuz kirli filtrenin ve tıkalı püskürtme kollarının yıkama sonucunu bozduğunu yazıyor. Makine temizlik gerektiğini algılayınca ilgili gösterge yanıyor; o zaman kireç çözücü ya da bulaşık makinesine özel bir temizlik ürünüyle Machine Care programını çalıştır, ama önce filtreleri ve püskürtme kollarını temizle. Filtrelerin marka fark etmeksizin temizliği için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/).

## Ne zaman servis

- Filtre, hortum ve gider temiz olduğu hâlde i20 ya da iF1 kapat-aç sonrası geri geliyorsa
- Haznedeki yabancı cismi çıkaramıyorsan
- Ekranda i51–i59 ya da i5A–i5F varsa: kılavuza göre yıkama ya da tahliye pompası arızası; kapat-aç sonrası sürerse servis

⛔ **Kendin-çöz sınırı burada biter.** Filtreler, hazne, hortumun konumu ve gider ağzı sende; tahliye pompası, seviye algılayıcısı, hortum değişimi ve elektronik kart AEG yetkili servisinin. Kılavuz sorun tamamen giderilene kadar makineyi kullanmamanı öneriyor.

## Servisi aramadan önce kısa özet

1. Ekranda i20, iF1 ya da i5 ile başlayan bir kod mu var?
2. Filtreyi söktüğünde haznede yabancı cisim buldun mu?
3. Lavabonun kendisi normal akıyor mu?
4. Bilgi etiketindeki model ve ürün numarası ne?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Program iptali ve ayar sıfırlama için [AEG bulaşık makinesi resetleme](/blog/aeg-bulasik-makinesi-resetleme/), marka fark etmeksizin anlatım için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) sayfasına bak. Bil, gör, çağır.
