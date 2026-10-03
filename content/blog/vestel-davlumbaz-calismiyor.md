---
title: "Vestel davlumbaz çalışmıyor"
description: "Vestel davlumbaz hiç açılmıyor, tuşlar ya da ışık tepki vermiyor mu? Vestel kılavuzlarının sırası: fiş, sigorta, açma tuşu, 20 saniye bekleme ve tuş temizliği."
slug: "vestel-davlumbaz-calismiyor"
date: "2026-10-03"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, davlumbaz/termosifon koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in KENDİ alan
#   adlarından indirildi, hepsi HTTP 200, yönlendirme 0. Web araması yalnız belgelerin yerini bulmak için. Sayfa = PDF sayfası (pdftotext -f N -l N).
#  V1) Vestel AD-63330 B / G / S davlumbaz kullanım kılavuzu   https://statik.vestel.com.tr/webfiles/20267393_k.pdf   28 s.  md5 32ee39d45cceb692a1d98c25df4e1dde
#  V2) Vestel AD-6021 X / YX davlumbaz kullanım kılavuzu       https://statik.vestel.com.tr/webfiles/20264487_k.pdf   18 s.  md5 384a7f344f13eba700020cf9f3629a74
#  V3) Vestel VAD 955 CX davlumbaz kullanım kılavuzu           https://static.vestel.com.tr/kullanimkilavuzlari/50215033.pdf  20 s.  md5 66cf50e1988367844c9f042829f29e59
# Ana satırlar: V1 s.20 · V2 s.13 "Sorun Giderme" → "Cihaz çalışmıyor." / "Prize uygun şekilde takılmamış." → "Sıkıca prize takın." · "Prizde elektrik yok." →
#   "Sigorta veya şalteri kontrol edin." · "Açma / Kapama tuşuna basılmamış." → "Açma/Kapama tuşuna basın." · "Aydınlatma çalışmıyor." → "Fiş prize takılı
#   olmayabilir." / "Fişin prize takılı olduğundan emin olun." · "Ürün anahtarı çalışmıyor olabilir." / "Düğmeyi kontrol edin." · "Bacadan kirli hava girişi
#   oluyor." → "Cihazın çalışmadığı durumlarda klape hava çıkış ağzını kapatmalıdır. Bu kapanmayı engelleyecek nedenleri ortadan kaldırınız."
#   V2 s.13 "Cihazınızı kendiniz tamir etmeye çalışmayın." · V2 s.11 tuş 1 lamba, 2-4 hız, 5 "Ürünü Açma/Kapama için bu tuşa basınız." · V1 s.15 tuş 3-5 hız
#   kademeleri, 6 lamba.
#   V3 s.9 "a) Cihaz hiçbir şekilde çalışmıyorsa: - Cihazın bağlı olduğu sigortayı ve evinizin ana sigortasını kontrol ediniz. - Davlumbazın fişi takılı mı
#   veya prize tam oturmuş mu kontrol ediniz. - Fişi çıkartıp cihazın başlama moduna geçmesini sağlayınız. Bunu sağlamak için 15 ile 20 saniye bekleyiniz
#   ve fişi tekrar takınız. Eğer fişe ulaşamıyorsanız cihazın bağlı olduğu sigortayı indirerek aynı işlemi yapınız." · "c) Davlumbaz aydınlatma lambası
#   çalışmıyor" · V3 s.16 "Cihaz Çalışmıyorsa: · Fişin prize takıldığından ve sigortaların sağlam olduğundan emin olunuz. · Ön paneldeki tuşları kontrol
#   ediniz. (Bu tuşların çevresi uzun süre temizlenmediği durumlarda dolar ve tuşların görev yapmasını engeller)." · "Devir Tuşları Çalışmıyorsa: · Tuşların
#   kenarlarını kontrol ediniz. Tuşların rahat bir şekilde çalışmasına engel teşkil edecek kirleri temizleyiniz." · "Aydınlatma Çalışmıyorsa: ... Aydınlatma
#   düğmesinin görev yapıp yapmadığından emin olunuz." · "Şunları belirtiniz; Cihazın problemini / Cihazın modelini / Ürün kodunu (cihazın iç tarafındaki
#   bilgi etiketinde yer alır)" · V3 s.6 'Cihazı herhangi bir devir (1,2,3) butonuna basarak çalıştırabilirsiniz. “Off” butonuna basarak motoru kapatabilirsiniz.'
#   · "Light" düğmesi. · V3 s.7 temizlik: "Davlumbazın fişini çekerek veya bağlı olduğu sigortayı indirerek enerjisini kesiniz." · "yumuşak bir bezle".
#   V1 s.19 "Davlumbazın lambasında fiziksel bir deformasyon veya aydınlatması ile ilgili bir problemle karşılaşırsanız lütfen yetkili servis ile irtibata geçiniz."
# BİLEREK YAZILMAYANLAR: lamba sökme/değiştirme (V1 s.19, V2 s.12, V3 s.8 belgede var; parça değişimi → #31, servise bırakıldı) · sigorta değiştirme /
#   pano içi işlem (yalnız "kontrol et" yazıldı) · klapeye müdahale yöntemi (belge yöntem vermiyor) · motor/kart teşhisi · model genellemesi · fiyat (#46).
# Alıntı denetim tablosu: vestel-davlumbaz-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Yumuşak kuru bez"]
steps:
  - "Davlumbazın fişinin prize tam oturduğunu kontrol et, gevşekse sıkıca tak."
  - "Davlumbazın bağlı olduğu sigortayı ve evin ana sigortasını kontrol et."
  - "Modelindeki açma/kapama tuşuna ya da bir hız tuşuna bastığından emin ol."
  - "Fişi çıkar, 15-20 saniye bekle ve tekrar tak; fişe ulaşamıyorsan aynı işlemi sigortayı indirerek yap."
  - "Fiş çekiliyken ön paneldeki tuşların kenarlarını kontrol et, tuşun basılmasını engelleyen kiri yumuşak bezle temizle."
  - "Işık yanmıyorsa fişi ve lamba düğmesini kontrol et; yine yanmıyorsa lambayı servise bırak."
faq:
  - q: "Vestel davlumbazım hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Vestel'in AD-63330 ve AD-6021 kılavuzlarındaki sorun giderme tablosu üç sebep yazıyor: fişin prize uygun şekilde takılmamış olması, prizde elektrik olmaması ve açma/kapama tuşuna basılmamış olması. Çözümleri sırasıyla fişi sıkıca takmak, sigorta ya da şalteri kontrol etmek ve açma/kapama tuşuna basmak."
  - q: "Fişi çıkarıp takmak gerçekten işe yarar mı?"
    a: "VAD 955 CX kılavuzu cihaz hiçbir şekilde çalışmıyorsa bunu ayrıca öneriyor: fişi çıkarıp cihazın başlama moduna geçmesi için 15 ile 20 saniye bekle, sonra fişi tekrar tak. Fişe ulaşamıyorsan aynı işlemi cihazın bağlı olduğu sigortayı indirerek yapabilirsin."
  - q: "Tuşlara basıyorum ama tepki vermiyor, neden?"
    a: "VAD 955 CX kılavuzuna göre ön paneldeki tuşların çevresi uzun süre temizlenmediğinde dolar ve tuşların görev yapmasını engeller. Kılavuz tuşların kenarlarını kontrol edip rahat çalışmasını engelleyen kirleri temizlemeni istiyor; temizlikten önce fişi çek ya da sigortayı indir."
  - q: "Davlumbaz kapalıyken bacadan kötü hava geliyor, bu arıza mı?"
    a: "Vestel kılavuzlarında bu satır 'Bacadan kirli hava girişi oluyor' olarak geçiyor. Sebep baca çıkış ağzındaki plastik klape: cihaz çalışmadığında klape hava çıkış ağzını kapatmalı. Kılavuz bu kapanmayı engelleyen nedenlerin ortadan kaldırılmasını istiyor; klape baca bağlantısında olduğu için bu kontrolü servise ya da montajı yapan tarafa bırak."
images:
  coverAlt: "Mutfakta ocağın üstündeki kapalı bir duvar tipi davlumbazın ön kumanda tuşlarına uzanan bir el"
---

Ocak yanıyor, davlumbazın tuşuna basıyorsun ve hiçbir şey olmuyor: ne fan dönüyor ne ışık yanıyor. Vestel'in davlumbaz kılavuzlarında bu belirtinin adı **"Cihaz çalışmıyor."** Tabloda yazan üç sebebin üçü de evde kontrol edilebiliyor: **fiş, elektrik ve açma/kapama tuşu.** VAD 955 CX kılavuzu bunlara bir **yeniden başlatma** ve **tuş temizliği** adımı ekliyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi sıkıca tak → davlumbazın sigortasını ve ana sigortayı kontrol et → açma/kapama tuşuna bas → fişi çekip 15-20 saniye bekle, tekrar tak → tuş kenarlarındaki kiri temizle → ışık sorunu sürüyorsa lambayı servise bırak.

## Kılavuzun tablosu

Bu yazı üç Vestel kılavuzuna dayanıyor: **AD-63330 B/G/S**, **AD-6021 X/YX** ve **VAD 955 CX.** İlk ikisinin sorun giderme tablosu birebir aynı:

| Sorun | Sebep | Çözüm |
|---|---|---|
| Cihaz çalışmıyor | Prize uygun şekilde takılmamış | Sıkıca prize tak |
| Cihaz çalışmıyor | Prizde elektrik yok | Sigorta veya şalteri kontrol et |
| Cihaz çalışmıyor | Açma/kapama tuşuna basılmamış | Açma/kapama tuşuna bas |
| Aydınlatma çalışmıyor | Fiş prize takılı olmayabilir | Fişin takılı olduğundan emin ol |
| Aydınlatma çalışmıyor | Ürün anahtarı çalışmıyor olabilir | Düğmeyi kontrol et |

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Tablonun ilk satırı: cihaz **prize uygun şekilde takılmamış** olabilir, çözüm **sıkıca prize takmak.** VAD 955 CX kılavuzu aynı kontrolü "fişi takılı mı veya **prize tam oturmuş mu**" diye soruyor.

**2. Sigortaları kontrol et.** İkinci satır **prizde elektrik olmaması**; çözüm **sigorta veya şalteri kontrol etmek.** VAD 955 CX'te bu kontrol iki katmanlı: **cihazın bağlı olduğu sigorta** ve **evinin ana sigortası.** Sigorta kutusunda kontrolün ötesinde bir iş gerekiyorsa bunu bir elektrik ustasına bırak.

**3. Doğru tuşa bastığından emin ol.** Üçüncü satır sade ama sık atlanıyor: **açma/kapama tuşuna basılmamış** olabilir. Modelden modele düzen değişiyor:
- **AD-6021:** 5 numaralı tuş ürünü **açıp kapatıyor**, 2-4 numaralı tuşlar hız kademeleri, 1 numaralı tuş lamba.
- **AD-63330:** hız kademeleri ayrı tuşlarda, lamba için ayrı tuş var.
- **VAD 955 CX:** cihaz herhangi bir **devir butonuna (1, 2, 3)** basarak çalışıyor, **"Off"** butonu motoru kapatıyor.

**4. Fişi çekip 20 saniye bekle.** VAD 955 CX kılavuzunun "cihaz hiçbir şekilde çalışmıyorsa" maddesi: **fişi çıkar**, cihazın **başlama moduna geçmesi** için **15 ile 20 saniye bekle** ve fişi **tekrar tak.** Fişe ulaşamıyorsan aynı işlemi **cihazın bağlı olduğu sigortayı indirerek** yap.

**5. Tuşların kenarlarını temizle.** VAD 955 CX'in servis öncesi listesinde dikkat çeken bir not var: ön paneldeki tuşların çevresi **uzun süre temizlenmediğinde dolar ve tuşların görev yapmasını engeller.** Devir tuşları çalışmıyorsa kılavuz **tuşların kenarlarını kontrol edip** rahat çalışmalarını engelleyen **kirleri temizlemeni** istiyor. Temizlikten önce kılavuzun genel kuralı geçerli: **fişi çek ya da sigortayı indir**, yüzeyi **yumuşak bir bezle** temizle.

**6. Işık yanmıyorsa fişi ve lamba düğmesini kontrol et.** Tablonun aydınlatma satırları **fişin prize takılı olduğundan emin olmanı** ve **düğmeyi kontrol etmeni** söylüyor; VAD 955 CX'te bu düğme **"Light"** yazan tuş. Bu iki kontrolden sonra ışık hâlâ yanmıyorsa AD-63330 kılavuzunun cümlesi geçerli: aydınlatmayla ilgili bir problemle karşılaşırsan **yetkili servis ile irtibata geç.**

## Kapalıyken bacadan kötü hava geliyorsa

Vestel tablosunda bir satır daha var: **"Bacadan kirli hava girişi oluyor."** Sebep, baca çıkış ağzındaki **plastik klape.** Kılavuza göre cihaz çalışmadığında klape **hava çıkış ağzını kapatmalı**; çözüm **bu kapanmayı engelleyen nedenleri ortadan kaldırmak.** Klape baca bağlantısının içinde kaldığı için bu kontrolü kurulumu yapan tarafa ya da servise bırak.

Davlumbaz çalışıyor ama çekişi zayıfsa sıradaki yazı: [Vestel davlumbaz çekmiyor](/blog/vestel-davlumbaz-cekmiyor/). Markadan bağımsız genel kontroller için [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/), ses şikâyeti için [davlumbaz gürültülü çalışıyor](/blog/davlumbaz-gurultulu-calisiyor/).

## Ne zaman servis

- Fiş, sigortalar, tuşlar ve 20 saniyelik bekleme denendiği hâlde cihaz **hiç açılmıyorsa.**
- **Lamba yanmıyorsa** ya da lamba yüzeyinde **çatlak, kırık** varsa: AD-63330 kılavuzu değişim için yetkili servisle irtibata geçmeni istiyor.

AD-6021 kılavuzunun uyarısı açık: **cihazını kendin tamir etmeye çalışma**; Vestel İletişim Merkezi'ne ya da en yakın Vestel Yetkili Servisi'ne başvur. Ararken VAD 955 CX kılavuzunun listesi işe yarar: **cihazın problemi, modeli** ve **ürün kodu** (cihazın iç tarafındaki bilgi etiketinde yazıyor).

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta kontrolü, tuş ve temizlik kullanıcıya; elektrik bağlantısı, kart, motor, lamba ve baca klapesi servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
