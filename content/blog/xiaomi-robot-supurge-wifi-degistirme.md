---
title: "Xiaomi robot süpürge wifi değiştirme nasıl yapılır"
description: "Xiaomi robot süpürgede wifi değiştirme: Wi-Fi'yi güç ve ev düğmesiyle sıfırla, Xiaomi Home'a yeniden ekle; 2,4 GHz şartı. X10 ve S20 Türkçe kılavuzları."
slug: "xiaomi-robot-supurge-wifi-degistirme"
date: "2026-10-24"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 7, küme Y3). origin/main'de "xiaomi" slug/başlıkta yok (yalnız iki yazının gövdesinde). Genel wifi yazıları başka cihazlar (Ecovacs, Vestel TV, yazıcı).
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "xiaomi robot süpürge w" → 1. "xiaomi robot süpürge wifi değiştirme", 2. "…wifi bağlanma", 3. "…wifi bağlanmiyor", 5. "…wifi şifre değiştirme", 10. "…wifi sıfırlama"; "xiaomi robot süpürge" → 8. "…wifi değiştirme". GSC: "xiaomi" satırı yok.
# Belge (#88). Zincir: mi.com/tr/support/user-guide/ (200; PDF adresleri sayfa HTML'inde) → mi-img CDN (200, application/pdf):
#  (X10) md5 6844de9fbffdda002a8d1b59fd0be5dd — TR s.59 gösterge, s.61 uygulama/Wi-Fi sıfırlama, s.62 yazılım güncelleme
#  (S20) md5 c16bc2342081edbc40078e231ff125a1 — TR s.78 uygulama/Wi-Fi sıfırlama, s.79 aygıt yazılımı, s.81 "Ağ yapılandırması başarısız oldu"
#  Düğme simgeleri sayfa görüntüsünden (x10-061.png, s20-078.png).
# BİLEREK YAZILMAYANLAR: uygulama ekranlarının menü adları (sürüme göre değişiyor, kılavuz da uyarıyor) · yönlendirici ayarları (üretici belgesi dışı) · fiyat (#46).
# Alıntı denetimi: xiaomi-robot-supurge-wifi-degistirme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Akıllı telefon", "Xiaomi Home uygulaması", "Yeni Wi-Fi ağının adı ve parolası"]
steps:
  - "Telefonunu yeni ağın 2,4 GHz bandına bağla ve Xiaomi Home uygulamasını güncelle."
  - "Robotu şarj istasyonuna koy ve Wi-Fi sinyalinin güçlü olduğu bir yerde olduğundan emin ol."
  - "Robotun kapağını açarak Wi-Fi göstergesini görünür hâle getir."
  - "Ağ yapılandırmasını beklediğini söyleyen sesi duyana kadar güç ve ev düğmelerini birlikte basılı tut."
  - "Wi-Fi göstergesi yanıp sönmeye başlayınca sıfırlamanın tamamlandığını anla."
  - "Xiaomi Home'da sağ üstteki artı simgesine dokun ve robotu yeni ağla ekle."
  - "Bağlantı başarısız olursa parolayı, bandı ve sinyali kontrol edip uygulamayı kapatıp açarak adımları baştan yap."
faq:
  - q: "Modemi değiştirdim, Xiaomi robot süpürge yeni wifiye nasıl bağlanır?"
    a: "Xiaomi'nin X10 ve S20 Türkçe kılavuzlarına göre yönlendirici yeniden yapılandırıldığında ya da parola değiştiğinde Wi-Fi'yi sıfırlıyorsun: kapağı aç, ağ yapılandırma sesini duyana kadar güç ve ev düğmelerine birlikte bas, gösterge yanıp sönünce robotu Xiaomi Home uygulamasına yeniden ekle."
  - q: "Xiaomi robot süpürge 5 GHz wifiye bağlanır mı?"
    a: "Hayır. Kılavuzlar yalnız 2,4 GHz Wi-Fi ağlarının desteklendiğini yazıyor; S20 kılavuzu 5 GHz ağların ve kurumsal yönlendiricilerin şu anda desteklenmediğini, 2,4 GHz ağa geçmeni söylüyor."
  - q: "Xiaomi robot süpürge wifi olmadan çalışır mı?"
    a: "Evet, temel temizlik düğmeyle başlatılabiliyor. Kılavuza göre temizliğe robotun üzerindeki güç düğmesine basarak ya da uygulamadan başlayabiliyorsun. Harita, yasak alan ve yazılım güncellemesi gibi işlevler uygulama üzerinden yapılıyor."
  - q: "Wi-Fi ışığı ne anlatıyor?"
    a: "X10 kılavuzuna göre turuncu ışık Wi-Fi'nin bağlı olmadığını, yanıp sönen beyaz ışık ise bağlantı beklendiğini ya da Wi-Fi'ye bağlanıldığını gösteriyor. Wi-Fi sıfırlamadan sonra Wi-Fi göstergesinin yanıp sönmesi sıfırlamanın başarılı olduğu anlamına geliyor."
images:
  coverAlt: "Salonda zeminde duran yuvarlak bir robot süpürge ve arka planda bir kablosuz modem"
  steps:
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda bekleme süresi için saat"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
---

Modemini değiştirdin, Wi-Fi parolasını yeniledin ya da internet sağlayıcın yeni bir cihaz kurdu; Xiaomi robot süpürgen artık uygulamada çevrimdışı görünüyor. Robotun hafızasındaki ağ eski ağ olduğu için kendiliğinden yeni ağa geçmiyor. Xiaomi'nin Türkçe kılavuzlarında bunun için ayrı bir işlem var: **Wi-Fi'ı Sıfırlama**. Robotu Wi-Fi'den koparıp ağ yapılandırma moduna alıyorsun, sonra Xiaomi Home uygulamasından yeni ağla yeniden ekliyorsun. Bu yazı Xiaomi'nin Türkiye destek sayfasındaki **Xiaomi Robot Vacuum X10** ve **Xiaomi Robot Vacuum S20** Türkçe kılavuzlarına dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Telefonu yeni ağın 2,4 GHz bandına bağla. Robotun kapağını aç, ağ yapılandırma sesini duyana kadar güç ve ev düğmelerine birlikte bas. Wi-Fi göstergesi yanıp sönünce Xiaomi Home'da artı simgesiyle robotu yeniden ekle. 5 GHz ağ ve kurumsal yönlendirici desteklenmiyor.

## Başlamadan önce kontrol et

| Şart | Kılavuza göre |
|---|---|
| Ağ bandı | Yalnız 2,4 GHz; 5 GHz ve kurumsal yönlendiriciler desteklenmiyor |
| Uygulama | Mi Home/Xiaomi Home (Avrupa'da adı Xiaomi Home) |
| Telefon | X10 için Android 4.4, iOS 10.0 ve üstü; S20 için Android 9.0, iOS 12.0 ve üstü |
| Sinyal | Robot, Wi-Fi sinyalinin güçlü olduğu bir alanda olmalı |

Kılavuz uygulamanın sürümünün güncellenmiş olabileceğini, ekrandaki adımların değişebileceğini de hatırlatıyor; uygulamadaki güncel talimatı izle.

## Adım adım: yeni Wi-Fi ağına geçiş

**1. Telefonu hazırla.** Telefonunu bağlanmak istediğin yeni ağa bağla. Modemin iki bandı tek ad altında yayınlıyorsa ve robot bağlanamıyorsa 2,4 GHz bandını ayrı bir adla açmak gerekebilir (çıkarım). Xiaomi Home uygulamasını en güncel sürüme getir.

**2. Robotu yerleştir.** Robotu şarj istasyonuna koy. S20 kılavuzunun sorun tablosuna göre ağ yapılandırması başarısız olduğunda ilk kontrol, robotun Wi-Fi sinyalinin güçlü olduğu bir alanda bulunması.

**3. Kapağı aç.** Wi-Fi göstergesini görebilmek için robotun üst kapağını aç. Gösterge kapağın altında.

**4. Wi-Fi'yi sıfırla.** Robotun ağ yapılandırmasını beklediğini belirten bir ses duyana kadar güç ve ev düğmelerini aynı anda basılı tut. Düğmeler robotun üst yüzünde, güç simgesi ve ev simgesiyle işaretli.

**5. Göstergeyi izle.** Wi-Fi göstergesi yanıp sönmeye başladıysa Wi-Fi başarıyla sıfırlanmıştır. Robot artık yeni bir ağ için bekliyor.

**6. Uygulamaya ekle.** Xiaomi Home uygulamasını aç, sağ üstteki artı simgesine dokun ve cihaz ekleme adımlarını izle. Uygulama yüklü değilse kılavuzdaki QR kodunu tarayabilir ya da uygulama mağazasında "Mi Home/Xiaomi Home" diye arayabilirsin. Yeni ağın parolasını doğru gir.

**7. Olmadıysa yeniden dene.** S20 kılavuzu ağ yapılandırması başarısız olduğunda dört şeye bakmanı istiyor: Wi-Fi parolası doğru mu, ağ 2,4 GHz mi, robot sinyalin güçlü olduğu yerde mi, robot gerçekten bağlantı modunda bekliyor mu. Son durum için uygulamadan çık, yeniden aç ve ağı yapılandırma adımlarını baştan, doğru sırayla uygula.

## Bağlandıktan sonra

Kılavuzlara göre robotun yazılımı uygulama üzerinden güncelleniyor. X10'da güncellemeden önce robotun istasyonda olması ve pil düzeyinin en az yüzde 15 olması, S20'de şarj istasyonunda olması ve şarjın yüzde 30'dan fazla olması gerekiyor. Haritan ve kısıtlı alanların uygulamada duruyorsa onları kontrol et; robot taşındıysa kendini yeniden konumlandırabilir ya da haritayı yeniden çıkarabilir. Harita sorunlarında [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/) yazısına bakabilirsin.

Wi-Fi sıfırlama robotu fabrika ayarına döndürmüyor. Robot donuyor ya da düğmelere tepki vermiyorsa sıra başka; zorla kapatma ve fabrika ayarı [Xiaomi robot süpürge resetleme](/blog/xiaomi-robot-supurge-resetleme/) yazısında.

## Bağlantı kurulana kadar düğmelerle kullan

Yeni ağa geçiş uzarsa robotu düğmelerle kullanmaya devam edebilirsin. X10 kılavuzuna göre güç düğmesine üç saniye basınca robot açılıp kapanıyor; açıkken güç düğmesine bir kez basınca temizlik başlıyor. Robot önce kenarlar ve duvarlar boyunca, ardından S biçiminde tüm alanı temizliyor ve iş bitince şarj için istasyonuna dönüyor. Ev düğmesine basmak robotu istasyona gönderiyor; temizlik sırasında herhangi bir düğmeye basmak robotu duraklatıyor, güç düğmesi temizliği sürdürüyor. Duraklatılmış robotu kaldırıp taşımamanı da istiyor; aksi hâlde robot istasyona dönemeyebilir ya da harita kaybolabilir. Planlı temizlik, kısıtlı alan ve yazılım güncellemesi için ise uygulama bağlantısı gerekiyor.

Wi-Fi parolanı yalnız değiştirdiysen ve ağın adı aynı kaldıysa da işlem aynı: robot eski parolayla bağlanamayacağı için Wi-Fi sıfırlama ve uygulamadan yeniden ekleme gerekiyor; kılavuz yanlış parolayı bağlantı kaybının nedenlerinden biri olarak sayıyor.

## Ne zaman servis

- Wi-Fi sıfırlama sesi hiç gelmiyor ve gösterge yanıp sönmüyorsa
- Doğru parola ve 2,4 GHz ağla bile bağlantı sürekli kopuyorsa
- Gösterge turuncu yanıp sönerek hata gösteriyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ağ, parola, uygulama ve Wi-Fi sıfırlama senin; Wi-Fi modülü ve kart Xiaomi yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Model adı ne?
2. Ağ 2,4 GHz mi?
3. Wi-Fi sıfırlama sesi geldi mi, gösterge yanıp söndü mü?
4. Uygulama hangi hatayı veriyor?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
