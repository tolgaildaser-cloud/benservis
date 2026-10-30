---
title: "Telefon çekmiyor: uçak modu, SIM ve şebeke ayarı adımları"
description: "Telefon çekmiyor ya da Servis Yok yazıyorsa Apple ve Samsung destek sayfalarındaki sırayı izle: uçak modu, SIM, şebeke modu, ağ ayarı sıfırlama."
slug: "telefon-cekmiyor"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P41 (YK #197 boşluk, BOSLUK.md #164). Slug origin/main'de yok (doğrulayıcı). Yakın yazılar: samsung-telefon-donuyor, iphone-acilmiyor-apple-logosunda-kaliyor, iphone-isiniyor (hiçbiri çekim sorununu anlatmıyor).
# Kaynak (#88): Apple Destek TR "iPhone veya iPad'inizde SOS, Servis Yok ya da Aranıyor ifadesini görüyorsanız" (120000, 6 Tem 2026) + Samsung TR "Samsung Galaxy cihazınızda aramalar kesiliyor gibi göründüğünde veya ağ sinyali yokmuş gibi göründüğünde ne yapmalısınız" (26 Ağu 2026). URL, md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · operatör karşılaştırması (Turkcell, Vodafone, Türk Telekom) · anten/modem donanımı ve parça değişimi (servis) · belgede olmayan "kod çevirme" tüyoları.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Telefonun kendi ayarları"]
steps:
  - "Uçak modunu kontrol et: kapalıysa en az on beş saniye açıp kapat."
  - "Telefonu yeniden başlat."
  - "Yazılımı güncelle ve operatör ayarı güncellemesi var mı bak."
  - "SIM kartı ya da çift SIM hattını kontrol et; fiziksel SIM kartı çıkarıp tekrar tak."
  - "Şebeke modunu değiştir, iPhone'da LTE seçeneğini kontrol et."
  - "Samsung'da mobil ağ ayarlarını ve erişim noktası adlarını sıfırla."
  - "Operatörünü ara: hesap, kapsam, kesinti ve yurt dışı dolaşım."
  - "Operatör sorun yok diyorsa servise git."
faq:
  - q: "Telefonda Servis Yok yazıyorsa ne demek?"
    a: "Apple'ın destek sayfasına göre durum çubuğunda Servis Yok ya da Aranıyor yazıyorsa aygıtın bir hücresel ağa bağlı değil. Önce Uçak Modu'nu en az 15 saniye açıp kapatmayı, sonra yeniden başlatmayı dene."
  - q: "Uçak modu çekmeme sorununa neden olur mu?"
    a: "Samsung'a göre Uçuş modu açıkken telefon aramaları ve ağ bağlantıları kullanılamaz. Ayarlar > Bağlantılar bölümünden kapatıp bağlantıyı yeniden kontrol et."
  - q: "Mobil ağ ayarlarını sıfırlamak neyi siler?"
    a: "Samsung sayfası bu işlemin ne sildiğini yazmıyor. Yalnızca yolu veriyor: Ayarlar > Genel yönetim > Sıfırla > Mobil ağ ayarlarını sıfırla. İşlemi onaylamadan önce ekrandaki açıklamayı oku."
  - q: "Çekmeme operatörden mi kaynaklanıyor, telefondan mı?"
    a: "Apple'a göre hesabın etkin olup olmadığını, bölgende kapsam ve kesinti olup olmadığını yalnızca operatörün doğrulayabilir. Operatör sorun yok derse ve donanım şüphesi varsa servis gerekebilir."
images:
  coverAlt: "Masada duran, ekranında sinyal çubuğu boş görünen bir akıllı telefonun sade çizimi"
  steps:
    - "Hızlı ayarlar panelinde uçak simgesine dokunan beyaz eldivenli sade siluet el"
    - "Yan tuşa basılı tutarak telefonu yeniden başlatan beyaz eldivenli sade siluet el"
    - "Ekranında güncelleme çubuğu ilerleyen telefon çizimi"
    - "SIM tepsisini telefonun kenarından çıkaran beyaz eldivenli sade siluet el"
    - "Mobil ağ ayarlarında şebeke modu satırına dokunan beyaz eldivenli sade siluet el"
    - "Ayarlar menüsünde dairesel ok simgesine dokunan beyaz eldivenli sade siluet el"
    - "Telefon kulaklığını kulağına tutarak operatörle konuşan beyaz eldivenli sade siluet el"
    - "Servis tezgâhında telefonu teslim eden beyaz eldivenli sade siluet el"
---

Ekranda sinyal çubuğu yok, arama yapamıyorsun ya da "Servis Yok" yazıyor. "Telefon çekmiyor" diye arayanlar için iki üreticinin destek sayfasını okuduk: Apple ve Samsung. Aşağıdaki adımların hepsi bu sayfalardan alındı. Hat ve hesap işlemleri operatörün işi. Apple'ın sayfasında bunlar açıkça operatöre bırakılmış.

Telefonun içini açmak ya da anten gibi parça değiştirmek bu listenin parçası değildir. O kısım servis işidir. Yakınındaki servisi Benservis'te bulabilirsin.

> 📶 **Önce şunu bil:** menü adları markaya, modele ve yazılım sürümüne göre değişir. Her adımın yanında hangi markanın sayfasından alındığını yazdık.

## Adım adım: çekmeyen telefon için sıra

**1. Uçak modunu kontrol et.** Samsung'a göre uçuş modu açıkken telefon aramaları ve ağ bağlantıları kullanılamaz. **Ayarlar > Bağlantılar** bölümünden kapat. Apple ise hücresel ağına erişebiliyorsan Uçak Modu'nu en az 15 saniye açıp sonra kapatmanı söylüyor.

**2. Yeniden başlat.** Apple, aygıtı yeniden başlatmanı istiyor. Nasıl yapılacağından emin değilsen Apple'ın sayfasında yeniden başlatma adımları da var.

**3. Güncellemeleri denetle.** Samsung: **Ayarlar > Yazılım güncellemesi > Güncellemeleri denetle.** Apple ise iOS'un en son sürümüne güncellemeni ve operatör ayarı güncellemesini elle denetlemeni istiyor: Wi-Fi'ye bağlıyken **Ayarlar > Genel > Hakkında.** Güncelleme varsa orada görünür.

**4. SIM'i kontrol et.** Apple çift SIM'li iPhone'larda **Ayarlar > Hücresel** altında hattın etkin olup olmadığına bakmanı istiyor. Hat etkin değilse Bu Hattı Etkinleştir'e dokun. Fiziksel SIM kullanıyorsan SIM kartı çıkarıp tekrar tak. Kart hasarlıysa ya da tepsiye sığmıyorsa operatörden yenisini iste.

**5. Şebeke modunu değiştir.** Samsung: **Ayarlar > Bağlantılar > Mobil ağlar > Şebeke modu** altında kullanılabilir modlar arasında geçiş yapıp bağlantıyı kontrol et. iPhone 6 ve sonrasında Apple, **Ayarlar > Hücresel > Seçenekler** altında LTE'yi Etkinleştir seçeneğini açmanı istiyor.

**6. Samsung'da mobil ağı sıfırla.** **Ayarlar > Genel yönetim > Sıfırla > Mobil ağ ayarlarını sıfırla.** Hâlâ bağlanmıyorsa **Ayarlar > Bağlantılar > Mobil ağlar > Erişim noktası adları** içinde üç noktaya dokunup **Varsayılan olarak sıfırla** yap. Samsung'a göre yanlış APN ayarları mobil ağa bağlanmayı engelleyebilir.

**7. Operatörünü ara.** Apple'a göre hesabına yalnızca operatörün erişebilir. Hesabının etkin olduğunu, bulunduğun yerde kapsam ve kesinti olmadığını, hattın kısıtlı olmadığını doğrulat. Yurt dışındaysan **Ayarlar > Hücresel Veri > Seçenekler** altında Uluslararası Dolaşım'ın açık olduğundan emin ol.

**8. Hâlâ yoksa servise git.** Apple, operatör sorun olmadığını söylüyorsa ve donanım şüphesi varsa servis gerekebileceğini yazıyor. Samsung ise önce Samsung Members'taki Telefon tanılamasını çalıştırıp mobil ağ durumuna bakmanı öneriyor.

## Samsung ve Apple'ın sayfaları nasıl ayrışıyor?

Samsung sayfası ayarları sırayla düzeltmeye odaklanıyor: yazılım, uçuş modu, engellenen arayanlar, mobil ağ sıfırlama, APN, şebeke modu. Apple sayfası ise önce operatör tarafını netleştiriyor. Hesap, kapsam, çift SIM ve dolaşım gibi başlıklar var. Bu yüzden listede Samsung'a ait adımlar (6) ve Apple'a ait adımlar (çift SIM, LTE) ayrı işaretli. Telefonunda hangisi varsa onu uygula.

## Tanılama uygulamaları

İki üretici de ayarları denedikten sonra kendi tanılamasını öneriyor. Samsung'da yol şu: **Samsung Members > Destek > Başla**, ardından **Mobil ağ** öğesini seç ve ekrandaki yönergeleri izle. Samsung bu tanılamanın yalnızca Samsung Members yüklü Galaxy cihazlarda çalıştığını belirtiyor. Apple ise iOS 18 ve sonrası yüklü iPhone'larda Apple Destek uygulamasının en son sürümünü indirmeni öneriyor. Uygulama, sorunun kaynağını belirlemeye yardımcı olan ek tanılamalar çalıştırıyor.

## Eski iPhone'larda 3G uyarısı

Apple'ın sayfasında bir ayrıntı daha var. Durum çubuğunda Servis Yok yazıyorsa ve aygıtın iPhone 5s, iPhone 5c ya da daha eski bir model ise seçenekleri operatörünle görüşmen gerekiyor. Apple'a göre 5G destekleyen iPhone ve iPad aygıtları, 3G ağlarının aşamalı olarak kullanımdan kaldırılmasından etkilenmiyor. iPhone 6 ve sonrasında ise adım 5'teki LTE seçeneğine bakılıyor.

## Arama kesiliyorsa

Samsung aramalar kesiliyorsa bilinmeyen numaralardan gelen aramaların engellenmiş olabileceğini de yazıyor. Kontrol: **Telefon uygulaması > Diğer seçenekler (üç nokta) > Ayarlar > Numaraları engelle > Bilinmeyen no.dan aramaları engelle** kapalı olsun.

## Her adımdan sonra bağlantıyı yeniden dene

Samsung'un sayfası uçuş modunu kapattıktan ve şebeke modunu değiştirdikten sonra bağlantıyı yeniden kontrol etmeni istiyor. Bunu atlama. Sinyal geri geldiyse bir sonraki adıma geçmene gerek kalmaz. Böylece gereksiz yere sıfırlama yapmazsın. Apple de Uçak Modu adımından sonra aygıtı yeniden başlatmayı ve ancak sonra operatör tarafına bakmayı sıralıyor.

## Buradan sonrası servis işi

Uçak modu, yeniden başlatma, güncelleme, SIM kontrolü ve ağ ayarları kullanıcı seviyesindeki işlerdir. Bunlara rağmen telefon çekmiyorsa ve operatör hattında sorun görmüyorsa donanım kontrolü gerekir. Telefonun içini açmak servis işidir. Telefon açılış sırasında takılıyorsa [iPhone açılmıyor, Apple logosunda kalıyor](/blog/iphone-acilmiyor-apple-logosunda-kaliyor/) yazısına bak.

## Servis çağırmadan önce üç not

1. Telefonun marka ve modelini yaz.
2. Servis Yok mu yazıyor, çubuk mu boş, arama mı kesiliyor? Belirtiyi tek cümleyle not et.
3. Hangi adımları denediğini, operatörünün ne dediğini ve SIM'i başka telefonda deneyip denemediğini söyle.

Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
