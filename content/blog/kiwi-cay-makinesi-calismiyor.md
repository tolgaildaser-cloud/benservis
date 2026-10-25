---
title: "Kiwi çay makinesi çalışmıyor: kılavuza göre 8 kontrol"
description: "Kiwi çay makinesi ısıtmıyor, kaynamadan kapanıyor ya da düğme atmıyorsa Kiwi kılavuzuna göre su seviyesi, taban, kapak, düğme ve susuz koruma kontrolü."
slug: "kiwi-cay-makinesi-calismiyor"
date: "2026-10-23"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 3, küme K2). Konu: origin/main (1c05771) "çay makinesi" ya da "kiwi" geçen yazı yok.
# Arama kanıtı (#164, bu koşuda suggestqueries client=firefox hl=tr gl=tr): "kiwi çay makinesi ç" → 1. "kiwi çay makinesi çalışmıyor" · 3. "kiwi çay makinesi nasıl çalışır";
#   "kiwi çay makinesi nasıl" → 1. "kiwi çay makinesi nasıl kullanılır".
# GSC: https___www-3..6 Sorgular.csv içinde "kiwi" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, hepsi HTTP 200. #88: yalnız Kiwi'nin kendi kılavuzları.
#  (A) KTM-2907 Çay Makinesi kılavuzu 12 s.  md5 3cbcfc7af6a5f87c69bfdecbc014ab30  TR s.6-7 (KTM-2908 edfecbf4…, KTM-2910 29df9da3…, KTM-2911 ee94af3a… aynı metin; KTM-2930 semaver 326579249d… aynı kullanım metni)
#  (B) KTM-2919 Çay Makinesi kılavuzu 28 s.  md5 7e52ae2c22ba35c01e2555d7da24df8d  TR s.8-10 (dijital panel, kireç belirtisi)
#  (C) KTM-2921 Çay Makinesi kılavuzu 8 s.  md5 a816f9d90ad5dfb027dcf0de248455d5  TR s.4-5 (susuz çalışma koruması, tekrar kaynatma)
# BİLEREK YAZILMAYANLAR: termostat, rezistans, güç tabanı kontağı teşhisi · tabanı açma · sıcak tutma lambası arızası (belgede yok) · fiyat, yedek parça bağlantısı (#46).
# Alıntı denetim tablosu: kiwi-cay-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Temiz su", "Yumuşak nemli bez", "Çay makinesinin kullanım kılavuzu"]
steps:
  - "Fişin topraklı bir prize tam oturduğunu ve cihazdaki voltaj bilgisinin evindeki şebekeye uyduğunu kontrol et."
  - "Su ısıtıcıdaki suya bak; su minimum ve maksimum işaretleri arasında olmalı."
  - "Cihaz susuz çalıştıysa fişi çek, soğumasını bekle, soğuk su doldurup yeniden başlat."
  - "Su ısıtıcıyı yalnızca kendi altlığına ya da güç tabanına düz biçimde oturt."
  - "Kapağın sağlam kapandığını ve açma kapama tuşunun önünde onu sıkıştıran bir şey olmadığını kontrol et."
  - "Açma kapama tuşunu aşağı konuma getir; dijital modelde hazır programlardan birini seç."
  - "Su kaynamadan kapanmayı sürdürüyorsa cihazın kirecini beyaz sirkeyle temizle."
  - "Bunlara rağmen çalışmıyorsa fişi çek ve Kiwi müşteri hizmetlerini ya da yetkili servisi ara."
faq:
  - q: "Kiwi çay makinesi neden su kaynamadan kapanıyor?"
    a: "Kiwi kılavuzları iki neden yazıyor. Su ısıtıcıya çok az su konursa ısıtıcı su kaynamadan kapanır; su daima minimum ve maksimum işaretleri arasında olmalı. KTM-2919 kılavuzuna göre cihaz kaynama noktasına ulaşmadan otomatik olarak kapanıyorsa kireçten temizlenmesi gerekir."
  - q: "Kiwi çay makinesi su kaynadığı halde kapanmıyor."
    a: "KTM-2907 kılavuzuna göre açma kapama tuşu sıkışmışsa ya da kapak açık bırakılmışsa ısıtıcı kapanmaz. Tuşun önünde engel olmadığından ve kapağın sağlam kapalı olduğundan emin ol. Su kaynadığında düğme atar ve ısıtma fonksiyonuna geçer."
  - q: "Çay makinesi bir kez kaynattı, tekrar çalışmıyor."
    a: "KTM-2907 ailesi kılavuzunda açma kapama düğmesi aşağı pozisyona getirilmeden ısıtıcının tekrar kaynamayacağı yazıyor. KTM-2921'de cihazı tekrar kaynatmak için açma kapama düğmesine yeniden basılır."
  - q: "Kiwi çay makinesini boş çalıştırdım, bozuldu mu?"
    a: "Kiwi'ye göre cihaz yanlışlıkla susuz çalıştırılırsa kuru kaynama ya da susuz çalışma koruması devreye girip ısıtıcıyı kapatır. Böyle bir durumda cihazın soğumasını bekle, soğuk su doldurup yeniden çalıştır. Kılavuz, ısı elemanlarına zarar vermemek için cihazın boşken çalıştırılmamasını istiyor."
  - q: "Kiwi çay makinesi fişe takınca hemen ısınmaya başlıyor, normal mi?"
    a: "Normal. KTM-2907 kılavuzu cihazda otomatik ısıtma sistemi olduğunu, fişe takıldığı anda ısınmaya başlayacağını yazıyor; bu yüzden cihazı suyla doldurmadan fişe takmamanı istiyor."
images:
  coverAlt: "Mutfak tezgâhında çelik su ısıtıcılı ve cam demlikli bir çay makinesi, arkada fayans duvar"
  steps:
    - "Çizim: solda çay makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda çay makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda çay makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda çay makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda çay makinesi, sağda kapak"
    - "Çizim: solda çay makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda çay makinesi, sağda temizleme bezi"
    - "Çizim: solda çay makinesi, sağda prizden çekilen fiş"
---

Sabah çayı için Kiwi çay makinesini çalıştırdın ama su ısınmıyor, ısınıp kaynamadan kapanıyor ya da bir kez kaynatıp tekrar çalışmıyor. Kiwi'nin çay makinesi kılavuzları bu belirtilerin çoğunu kullanım bölümünde tek tek açıklıyor: az su, açık kapak, sıkışmış tuş, susuz çalışma koruması ve kireç. Bu yazı **KTM-2907 ailesi (KTM-2908, KTM-2910, KTM-2911, KTM-2930 semaver dahil), KTM-2919 ve KTM-2921** Türkçe kılavuzlarına dayanıyor.

> ⚡ **Kısa özet:** Fişi ve prizi kontrol et. Suyu minimum ve maksimum işaretleri arasına getir. Susuz çalıştıysa soğut, soğuk su doldur. Su ısıtıcıyı kendi tabanına düz oturt. Kapağı kapat, tuşun önünü aç. Tuşu aşağı indir ya da dijital programı seç. Kaynamadan kapanma sürüyorsa kireç temizliği yap.

## Belirtiye göre kılavuzun söylediği

| Belirti | Kiwi'ye göre neden | Ne yaparsın |
|---|---|---|
| Su kaynamadan kapanıyor | Çok az su; ya da kireç (KTM-2919) | Suyu tamamla; kireci temizle |
| Su kaynadığı halde kapanmıyor | Tuş sıkışmış ya da kapak açık | Kapağı kapat, tuşun önünü aç |
| Bir kez kaynattı, tekrar kaynamıyor | Tuş aşağı pozisyona getirilmedi | Tuşu yeniden indir |
| Boş çalıştı, kapandı | Kuru kaynama koruması devrede | Soğut, soğuk su doldur |
| Fişe takınca hemen ısınıyor | Otomatik ısıtma sistemi | Normal; suyla doldurmadan fişe takma |

Sıcak tutma da modele göre değişiyor. KTM-2919'da su kaynadıktan sonra sıcak tutma fonksiyonuna dokunarak açarsın ve artı eksi tuşlarıyla 40 ile 100 derece arasında ayar yaparsın. KTM-2921'de sıcak tutma düğmesini kullanmadan önce su ısıtıcıda su olduğundan emin olman gerekiyor.

## Adım adım: evde denenecekler

**1. Fişi ve prizi kontrol et.** Fişin topraklı bir prize tam oturduğunu ve cihazın altında yazan voltaj bilgisinin evindeki şebekeye uyduğunu kontrol et. Kiwi voltaj uyumlu değilse cihazın kullanılmamasını istiyor. Kablo masa kenarından sarkmasın ve sıcak yüzeye değmesin.

**2. Su seviyesine bak.** Su ısıtıcıdaki su minimum ve maksimum işaretleri arasında olmalı. Kiwi'ye göre çok az su konursa ısıtıcı su kaynamadan kapanır; maksimumun üzerine doldurursan kaynarken ağızdan su dökülebilir. Kılavuz kapasiteyi model başına işaretlerle veriyor; kendi su ısıtıcının çizgilerine bak.

**3. Susuz koruma devrede mi?** Cihaz yanlışlıkla susuz çalıştıysa kuru kaynama koruması ısıtıcıyı kendiliğinden kapatır. Fişi çek, cihazın soğumasını bekle, sonra su ısıtıcıyı soğuk suyla doldurup yeniden başlat. KTM-2907 kılavuzu cihazda otomatik ısıtma sistemi olduğunu, fişe takıldığı anda ısınmaya başladığını da yazıyor; bu yüzden makineyi suyla doldurmadan fişe takma.

**4. Su ısıtıcıyı tabanına oturt.** Su ısıtıcıyı yalnızca kendi altlığına ya da güç tabanına düz biçimde yerleştir. Kiwi su ısıtıcının yalnızca birlikte verilen standla kullanılmasını istiyor. Cihaz sert ve düz bir zeminde, etrafında en az on santim boşluk kalacak şekilde durmalı; dolap içi ve dış mekân kullanımı için uygun değil.

**5. Kapağı ve tuşu kontrol et.** Kapağın sağlam kapandığını ve açma kapama tuşunun önünde onu sıkıştıran bir şey olmadığını kontrol et. KTM-2907 ailesinin kılavuzu açık: tuş sıkışmışsa ya da kapak açık kalmışsa ısıtıcı kapanmaz. Su kaynarken kapağı kaldırma; demleme sırasında kapağın kaldırılması yanığa yol açabilir.

**6. Tuşu indir ya da programı seç.** KTM-2907 ailesinde kolun altındaki açma kapama tuşuna bas. Su kaynayınca tuş atar ve ısıtma fonksiyonuna geçer; tuş aşağı pozisyona getirilmeden ısıtıcı tekrar kaynamaz. KTM-2921'de tekrar kaynatmak için açma kapama düğmesine yeniden basılır. Dijital KTM-2919'da fişi taktığında ekran ve dokunmatik tuşlar ışıklı belirir; hazır ayarlardan birini seçince işlem başlar, iptal için güç tuşu beş saniye basılı tutulur.

**7. Kireci temizle.** Su yeterli olduğu hâlde ısıtıcı kaynamadan kapanmayı sürdürüyorsa cihazın kirecini temizle. KTM-2919 kılavuzu bunu açıkça kireç belirtisi sayıyor ve kireç için yalnız beyaz sirke kullanılmasını istiyor. Tarif [Kiwi çay makinesi kireç temizliği](/blog/kiwi-cay-makinesi-kirec-temizligi/) yazısında.

**8. Müşteri hizmetlerini ara.** Bu adımlardan sonra da makine çalışmıyorsa fişi çek ve Kiwi müşteri hizmetlerini ya da yetkili servisi ara. Kiwi aramadan önce cihazın altındaki etiketteki model numarasını hazır tutmanı istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Az su, açık kapak, sıkışmış tuş, susuz koruma | Senin, bu yazıdaki adımlar |
| Kireç | Senin; beyaz sirkeyle |
| Fiş takılı, su yeterli, tuş indirildi ama hiç ısıtmıyor | Kiwi müşteri hizmetleri ya da yetkili servis |
| Güç kablosu hasarlı | Üretici, yetkili servis ya da benzer nitelikli kişi değiştirir |

⛔ Su ısıtıcıyı ya da kablosunu suya batırma, güç tabanını açmaya çalışma. Ayrı bir Kiwi su ısıtıcın varsa [Kiwi kettle açma kapama düğmesi](/blog/kiwi-kettle-acma-kapama-dugmesi/) yazısı aynı belirtileri o cihaz için anlatıyor.

---

**Kaynak künyesi.** Su seviyesi, otomatik ısıtma, kuru kaynama koruması, kapak ve tuş uyarıları, tekrar kaynatma ve kireç belirtisi Kiwi'nin Türkçe kullanım kılavuzlarından (KTM-2907, KTM-2919, KTM-2921; aynı metni taşıyan KTM-2908, KTM-2910, KTM-2911 ve KTM-2930) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
