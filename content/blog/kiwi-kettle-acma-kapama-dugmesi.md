---
title: "Kiwi kettle açma kapama düğmesi: atmıyor ya da açılmıyor"
description: "Kiwi kettle düğmesi açılmıyor, hemen atıyor ya da kaynamadan kapanıyorsa Kiwi kılavuzuna göre su seviyesi, kuru kaynama koruması, taban ve kireç kontrolü."
slug: "kiwi-kettle-acma-kapama-dugmesi"
date: "2026-10-23"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 3, küme K2). Konu: origin/main (1c05771) "kiwi" geçen yazı yok; tek kettle yazısı arzum-su-isitici-kirec-temizleme (başka marka, kireç sorgusu).
# Arama kanıtı (#164, bu koşuda suggestqueries client=firefox hl=tr gl=tr): "kiwi kettle a" → 2. "kiwi kettle açma kapama düğmesi tamiri" · 3. "kiwi kettle açma kapama düğmesi";
#   "kiwi kettle" → 6. "…açma kapama düğmesi tamiri", 7. "…açma kapama düğmesi", 9. "kiwi kettle tamiri".
# GSC: https___www-3..6 Sorgular.csv içinde "kiwi" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, hepsi HTTP 200. #88: yalnız Kiwi'nin kendi kılavuzları.
#  (A) KK-3330 Su Isıtıcı kılavuzu 12 s.  md5 bd27240a73af047677779424e01d4992  TR s.6-7 (KK-3328 9a56d9de…, KK-3331 dd460541…, KK-3334 0a1619e7…, KK-3340 c369bf1b…, KKT-33 fadcbea7… aynı kullanım metni)
#  (B) KK-3304 Kettle kılavuzu 16 s.  md5 2913f3071f12e9c205fb3163a23425be  TR s.8-9
#  (C) KK-3350 Su Isıtıcı kılavuzu 8 s.  md5 1e360819a37b6370d1d2e74b5e3b7c06  TR s.4-5 (kuru çalışma sıfırlama, kireç belirtisi)
#  (D) KK-3361 Barista Su Isıtıcı föyü 2 s.  md5 a1aa0e530c95274b8e8ddd7a76506a60  TR sütunu s.2 (dijital düğme, bekleme)
# BİLEREK YAZILMAYANLAR: düğme mekanizmasını ya da termostatı söküp onarma (#31; "tamiri" sorgusu servis satırına bağlandı) · yedek parça (#46) · kapak açıkken kapanmama (kettle kılavuzlarında yok, yalnız çay makinesi kılavuzunda) · kireç çözücü dozu.
# 2026-10-25 PAZ alt ajanı (YK #182 Kiwi model eki, origin/main b70bb65): yeni modeller eklendi, yeni yazı açılmadı. Belgeler bu koşuda kiwi.com.tr ürün sayfası (HTTP 200) → static.kiwi.com.tr PDF zinciriyle indirildi, HTTP 200 application/pdf (#88):
#  KK-3325P Su Isıtıcı kılavuzu 12 s. TR s.6-7  md5 913042671eddb8bb93adc4f81b673fe9
#  Kullanım metni KK-3330 ailesiyle aynı.
# Ek alıntı tablosu: kiwi-kettle-acma-kapama-dugmesi.KAYNAK-EK.md
# Alıntı denetim tablosu: kiwi-kettle-acma-kapama-dugmesi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Soğuk su", "Yumuşak nemli bez", "Ev aletleri için kireç çözücü", "Su ısıtıcının kullanım kılavuzu"]
steps:
  - "Su ısıtıcıyı yalnızca kendi tabanına düz biçimde oturt ve fişin prize sıkıca takılı olduğunu kontrol et."
  - "Su ısıtıcıyı tabandan kaldırıp minimum ve maksimum işaretleri arasında su doldur."
  - "Açma kapama düğmesine bas; gösterge ışığının ya da ışık halkasının yandığını gör."
  - "Su kaynayınca düğmenin kendiliğinden kapalı konuma dönmesini bekle; bu normaldir."
  - "Düğme hemen atıyorsa ve içi boşsa fişi çek, soğuk su ekle ve kuru kaynama korumasının sıfırlanmasını bekle."
  - "Dijital modelde düğmeye bir kez bas, sıcaklığı seç, başlatmak için tekrar bas; kapatmak için üç saniye basılı tut."
  - "Su yeterli olduğu halde kaynamadan kapanıyorsa kendi kılavuzundaki tarifle kirecini çöz."
  - "Düğme yerine oturmuyor ya da hiç tepki vermiyorsa kullanmayı bırak ve Kiwi müşteri hizmetlerini ara."
faq:
  - q: "Kiwi kettle düğmesi neden kendiliğinden atıyor?"
    a: "Kiwi kılavuzlarına göre su kaynadığında açma kapama düğmesi otomatik olarak kapalı konumuna döner. Yeterince su kullanılmazsa su ısıtıcı güvenlik nedeniyle kapanır; su ısıtıcıda su kalmamışsa kuru kaynama koruması devreye girip kapatır."
  - q: "Kiwi kettle düğmesi açılmıyor, ne yapmalıyım?"
    a: "Önce su ısıtıcıyı kendi tabanına oturt, fişi kontrol et ve hazneye su koy. Cihaz susuz çalıştıysa KK-3350 kılavuzuna göre fişi çıkar ve soğuk su ekle; güç kapatma cihazı kendiliğinden sıfırlanır. İlk kaynattığın suyu dök, sonra normal kullan. Düğme yine tepki vermiyorsa Kiwi müşteri hizmetlerini ara."
  - q: "Kiwi kettle kaynamadan kapanıyor."
    a: "KK-3350 kılavuzuna göre cihaz su kaynamadan önce kapanıyorsa muhtemelen kireç çözme işlemi gerekir. Kiwi bu modelde kireç çözmenin suyun sertliğine göre her üç dört ayda bir yapılmasını, sirke yerine piyasada satılan bir kireç çözücü kullanılmasını yazıyor. Az su da aynı sonuca yol açar."
  - q: "Kiwi kettle açma kapama düğmesi tamir edilir mi?"
    a: "Kiwi kılavuzlarında düğmenin onarımı için kullanıcıya bırakılan bir adım yok. Kılavuzlar sorun giderme için müşteri hizmetlerini, hasarlı kablo için üreticiyi ya da yetkili servisi gösteriyor; bu yüzden düğme mekanizmasını açmak servis işidir. Bu son cümle bir çıkarım; kılavuzda ayrıca yazmıyor."
  - q: "Kiwi barista kettle kendi kendine bekleme moduna geçiyor."
    a: "Normal. KK-3361 föyüne göre on saniye boyunca işlem yapılmazsa cihaz bekleme moduna geçer. Çalışırken tabandan kaldırılıp on dakika içinde geri konursa önceki işleme devam eder; daha uzun süre sonra konursa beklemeye geçer."
images:
  coverAlt: "Mutfak tezgâhında tabanına oturtulmuş paslanmaz çelik bir su ısıtıcı ve yanında bir kupa"
  steps:
    - "Çizim: solda su ısıtıcı (kettle), sağda prizden çekilen fiş"
    - "Çizim: solda su ısıtıcı (kettle), sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda su ısıtıcı (kettle), sağda panel ekranındaki uyarı"
    - "Çizim: solda su ısıtıcı (kettle), sağda bekleme süresi için saat"
    - "Çizim: solda su ısıtıcı (kettle), sağda prizden çekilen fiş"
    - "Çizim: solda su ısıtıcı (kettle), sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda su ısıtıcı (kettle), sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda su ısıtıcı (kettle), sağda telefon ve kullanım kılavuzu"
---

Kiwi kettle'ın düğmesine basıyorsun ama hiç açılmıyor, bastığın an geri atıyor ya da su kaynamadan kapanıyor. Arama önerilerinde de "kiwi kettle açma kapama düğmesi" ve "tamiri" birlikte geçiyor. Kiwi'nin su ısıtıcı kılavuzları düğmenin ne zaman kendiliğinden kapandığını açıkça yazıyor; bu kapanmaların çoğu arıza değil, güvenlik özelliği. Bu yazı **KK-3330 ailesi (KK-3328, KK-3331, KK-3334, KK-3340, KKT-33), KK-3304, KK-3350 ve KK-3361** Türkçe kılavuzlarına dayanıyor.

**KK-3325P** kılavuzu da KK-3330 ailesiyle aynı kullanım metnini taşıyor: düğmeye basınca gösterge ışığı yanar, su kaynayınca düğme kendiliğinden kapalı konuma döner, az suda güvenlik nedeniyle kapanır, susuz kalınca kuru kaynama koruması devreye girer ve soğuk su eklemek korumayı soğutur. Kireç için ev aletlerine uygun bir kireç çözücü istiyor.

> ⚡ **Kısa özet:** Su ısıtıcıyı kendi tabanına oturt, fişi kontrol et. Suyu minimum ve maksimum arasına koy. Kaynayınca düğmenin atması normal. Boşken attıysa fişi çek, soğuk su ekle; koruma kendiliğinden sıfırlanır. Dijital modelde başlatmak için iki kez basılır. Su yeterliyken kaynamadan kapanıyorsa kireç çöz. Düğme tepki vermiyorsa servis.

## Düğme ne zaman kendiliğinden kapanır?

| Durum | Kiwi'ye göre ne oluyor | Ne yaparsın |
|---|---|---|
| Su kaynadı | Düğme otomatik olarak kapalı konuma döner | Normal |
| Çok az su var | Su ısıtıcı güvenlik nedeniyle kapanır | Suyu minimum işaretinin üzerine tamamla |
| İçinde hiç su yok | Kuru kaynama koruması devreye girer | Fişi çek, soğuk su ekle |
| Su yeterli, yine de kaynamadan kapanıyor | KK-3350'ye göre muhtemelen kireç | Kireç çöz |
| Dijital modelde on saniye işlem yok | KK-3361 bekleme moduna geçer | Düğmeye yeniden bas |

Yeni bir su ısıtıcıda Kiwi ilk kullanımdan önce temizlik ve koku için maksimum seviyeye kadar suyla kaynatıp bu suyu atmanı istiyor; KK-3350 bunu iki kez yapmanı söylüyor. Cihazı düz ve sabit bir yüzeye, çevresinde en az on santim boşluk bırakarak yerleştir; kılavuzlara göre dolap içi ve dış mekân için uygun değil.

## Adım adım: evde denenecekler

**1. Tabanı ve fişi kontrol et.** Su ısıtıcıyı yalnızca birlikte verilen tabana, düz ve sabit bir yüzeyde oturt. KK-3350 kılavuzu kullanım sırasında fişin prize sıkıca takılı olmasını istiyor. Cihazdaki voltaj bilgisinin evindeki şebekeye uyduğunu da kontrol et.

**2. Suyu doğru doldur.** Doldururken tabana su dökülmesin diye su ısıtıcıyı daima tabandan kaldır. Su seviyesi asla maksimum işaretini geçmesin. Kiwi'ye göre yeterince su kullanılmazsa su ısıtıcı güvenlik nedeniyle kapanır, fazla su kullanılırsa taşar.

**3. Düğmeye bas.** Açma kapama düğmesine basarak cihazı aç. KK-3330 ailesinde ve KK-3304'te gösterge ışığı yanar; KK-3350'de LED ışık halkası yanar ve ısıtma başlar.

**4. Kaynayınca atmasını bekle.** Su kaynadığında düğme kendiliğinden kapalı konuma döner. Bu bir arıza değil, kılavuzun tarif ettiği çalışma biçimi. KK-3350'de ısıtmayı istediğin anda düğmeyi kapatarak elle de durdurabilirsin.

**5. Kuru kaynama korumasını sıfırla.** Düğme bastığın an atıyorsa ve su ısıtıcının içi boşsa kuru kaynama koruması devrededir. KK-3330 ailesinde soğuk su eklemek koruma mekanizmasını soğutur ve su ısıtıcıyı normal kullanmanı sağlar. KK-3350'de önce fişi çıkar, sonra uygun miktarda soğuk su ekle; güç kapatma cihazı kendiliğinden sıfırlanır. İlk kaynattığın suyu dök, sonra normal kullan.

**6. Dijital modelde sırayı izle.** KK-3361'de kapağı yerine takıp su ısıtıcıyı kontrol tabanına koy. Fiş takılıyken açma kapama ve onay düğmesine bir kez bas, simgeler yanar. Sıcaklık ayar düğmesiyle hedefi seç, başlatmak için düğmeye tekrar bas. Isıtmayı durdurmak için bir kez bas; cihazı kapatmak için üç saniye basılı tut. On saniye işlem yapmazsan cihaz beklemeye geçer.

**7. Kireci çöz.** Su yeterli olduğu hâlde ısıtıcı kaynamadan kapanıyorsa kireç çözme zamanı gelmiş olabilir. Kiwi'nin tarifi modele göre değişiyor: KK-3330 ailesi ve KK-3304 ev aletlerine uygun bir kireç çözücü istiyor; KK-3350 sirke kullanılmamasını, piyasada satılan bir kireç çözücüyle her üç dört ayda bir yapılmasını yazıyor; KK-3361 maksimum seviyeye kadar su ve bir tatlı kaşığı limon tuzuyla kaynatıp on beş dakika sonra bezle silmeyi anlatıyor. Kireç çözdükten sonra su ısıtıcıyı birkaç kez temiz suyla durula.

**8. Tepki yoksa servis.** Düğme yerine oturmuyor, kırık görünüyor ya da bu adımlardan sonra hiç tepki vermiyorsa kullanmayı bırak ve Kiwi müşteri hizmetlerini ara. Kiwi aramadan önce cihazın altındaki etiketteki model numarasını hazır tutmanı istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Kaynayınca atma, az su, kuru kaynama koruması | Senin, bu yazıdaki adımlar |
| Kireç yüzünden erken kapanma | Senin; kendi kılavuzundaki tarifle |
| Düğme kırık, oturmuyor ya da hiç tepki vermiyor | Kiwi müşteri hizmetleri ya da yetkili servis |
| Güç kablosu hasarlı | Üretici, servis acentesi ya da benzer nitelikli kişi değiştirir |

⛔ Düğmeyi ya da tabanı söküp onarmaya çalışma; su ısıtıcıyı ve tabanını suya ya da başka bir sıvıya daldırma. Çay makinesinin su ısıtıcısında aynı belirtiler için [Kiwi çay makinesi çalışmıyor](/blog/kiwi-cay-makinesi-calismiyor/) yazısına, başka bir markada kireç tarifi için [Arzum kettle kireç temizleme](/blog/arzum-su-isitici-kirec-temizleme/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Düğmenin çalışma biçimi, su seviyesi, kuru kaynama koruması, dijital model düğmeleri ve kireç tarifleri Kiwi'nin Türkçe kullanım kılavuzlarından (KK-3330 ailesi, KK-3304, KK-3350, KK-3361) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

**Ek kaynak.** KK-3325P bilgileri bu modelin Kiwi Türkçe kullanım kılavuzundan alınmıştır.
