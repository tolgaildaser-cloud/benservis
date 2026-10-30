---
title: "Telefon Wi-Fi'ye bağlanmıyor: Apple ve Huawei'ye göre sıra"
description: "Telefon Wi-Fi'ye bağlanmıyor ya da bağlı görünüp internet açmıyor mu? Apple ve Huawei'nin destek sayfalarına göre ayar, modem ve ağ sıfırlama sırası."
slug: "telefon-wifi-baglanmiyor"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P43 / PAKETLER #174). origin/main'de genel "telefon-wifi-baglanmiyor" yok (yakın: vestel-televizyon-wifi-baglanmiyor, yazici-wifi-baglanmiyor, ecovacs-deebot-wifi-baglanmiyor; telefon yazıları markalı).
# Arama kanıtı: PAKETLER #174: OT "telefon wifi" #1–#4; "iphone wifi" #4,#10; "huawei telefon neden" #6.
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (A) Apple Destek TR "iPhone veya iPad'inizde Wi-Fi'ye bağlanamıyorsanız" https://support.apple.com/tr-tr/111786 (yayın 5 Ekim 2026) · (H) Huawei TR "Cihazınızı Sıfırlama" https://consumer.huawei.com/tr/support/content/tr-tr15795248/ (yalnız "Ağ Ayarlarını Sıfırlama" bölümü). Xiaomi KA-714513 indirildi ama 2 belge sınırı nedeniyle kullanılmadı.
# BİLEREK YAZILMAYANLAR: Samsung/Xiaomi menü yolları (belge yok) · modem arayüzü ayarları · kanal/DNS tüyoları · fiyat (#46) · cihaz içi müdahale.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Wi-Fi şifresi", "Modemin fişi"]
steps:
  - "Ayarlar'da Wi-Fi'nin açık olduğundan emin ol ve ağın adına dokunarak bağlan."
  - "Uçak modunun kapalı olduğunu kontrol et."
  - "Başka bir aygıtın aynı ağa bağlanıp bağlanmadığına bak."
  - "Modemin fişini çekip geri tak; telefonu modeme yaklaştır."
  - "Modem iki frekans veriyorsa diğer frekanstaki ağa katıl."
  - "VPN ya da güvenlik yazılımı kuruluysa kaldır ve telefonu yeniden başlat."
  - "Hiçbiri işe yaramazsa ağ ayarlarını sıfırla."
faq:
  - q: "Telefon Wi-Fi'ye bağlı görünüyor ama internet yok, ne yapmalıyım?"
    a: "Apple'ın sayfasına göre 'İnternet Bağlantısı Yok' gibi bir mesaj sürüyorsa sorun yönelticide ya da ağ ayarlarında olabilir. Aynı ağı başka aygıtlarla dene. Başka aygıtlarla da çevrimiçi olamıyorsan bir servis kesintisi söz konusu olabilir; internet servis sağlayıcınla iletişime geç."
  - q: "Ağ ayarlarını sıfırlamak fotoğraflarımı siler mi?"
    a: "Huawei'ye göre ağ ayarlarını sıfırlama Wi-Fi, mobil veri ve Bluetooth ayarlarını sıfırlar; başka bir ayarı değiştirmez ve veri silmez. Apple'da ise bu işlem tüm Wi-Fi ağlarını ve parolalarını, hücresel, VPN ve APN ayarlarını da sıfırlıyor. Wi-Fi şifresini hazır tut."
  - q: "Telefon yalnız evdeki Wi-Fi'ye bağlanmıyor, başka yerde bağlanıyor. Telefon mu bozuk?"
    a: "Apple, sorunun yalnızca kendi ağında olup olmadığını görmek için farklı bir konumdaki Wi-Fi'ye bağlanmayı denemeni söylüyor."
  - q: "2,4 GHz mi 5 GHz mi seçmeliyim?"
    a: "Apple'ın sayfası yöneltici farklı frekansları destekliyorsa başka bir frekansa katılmayı denemeni, örneğin 2,4 GHz yerine 5 GHz'e katılmayı öneriyor. Hangisinin daha iyi olduğunu belgeler söylemiyor."
images:
  coverAlt: "Masada duran bir telefon ve yanında modem, aralarında sinyal çizgileri"
  steps:
    - "Telefon ekranında Wi-Fi anahtarını açan beyaz eldivenli sade siluet el"
    - "Telefon ekranında uçak simgesinin üzerinde çarpı işareti çizimi"
    - "Yan yana duran bir telefon ve bir tablet, ikisinden de modeme giden sinyal çizgileri"
    - "Modemin fişini prizden çeken beyaz eldivenli sade siluet el"
    - "Modemden çıkan iki farklı sinyal halkası ve telefonda bunlardan birini seçen parmak çizimi"
    - "Telefon ekranında kilit simgeli bir kalkan ve üzerinde çarpı işareti çizimi"
    - "Telefon ekranında dairesel ok simgesi ve sıfırlama simgesi çizimi"
---

Telefon Wi-Fi ağını görüyor ama bağlanmıyor. Ya da bağlı yazıyor, sayfalar açılmıyor. "Telefon Wi-Fi'ye bağlanmıyor" aramasının arkasında çoğu zaman telefonun kendisi değil, ayar, modem ya da ağ var. Bu yazıdaki sıra **Apple**'ın Türkçe Wi-Fi destek sayfasından ve **Huawei**'nin Türkçe sıfırlama sayfasından geliyor. Menü adları marka ve sürüme göre değişebilir; kendi telefonunun kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> 📶 **Önce ayrım yap:** Wi-Fi listesinde ağ hiç görünmüyor mu, görünüp bağlanamıyor mu, yoksa bağlı olup internet mi yok? Aşağıdaki sıra üçü için de aynı. Önce kolay ve veri kaybettirmeyen adımlar, sıfırlama en sonda.

## Belgeler ne diyor

| Konu | Apple | Huawei |
|---|---|---|
| **Ayar kontrolü** | Wi-Fi açık, uçak modu kapalı | Belgede yok |
| **Modem** | Fişini çekip tak, frekans dene | Belgede yok |
| **Ağ sıfırlama** | Wi-Fi, hücresel, VPN, APN ayarlarını sıfırlar | Wi-Fi, mobil veri, Bluetooth; veri silmez |

## Adım adım: bağlanmayan telefon için sıra

**1. Wi-Fi açık mı, bağlandın mı?** Apple'ın tarifi şöyle: Ayarlar'da Wi-Fi'ye dokun ve açık olduğundan emin ol. Bir ağa bağlanmak için ağ adına dokun. Bağlandığını **mavi onay işaretinden** anlarsın.

**2. Uçak modunu kapat.** Hâlâ bağlanamıyorsan Ayarlar'a dön ve Uçak Modu'nun kapalı olduğundan emin ol. Apple ayrıca Wi-Fi ayarında Bağlantı Desteği'nin kapalı olduğunu kontrol etmeni ve Wi-Fi ayarı soluk renkteyse (gri) aygıtı yeniden başlatmanı söylüyor.

**3. Başka aygıt bağlanıyor mu?** Apple, diğer aygıtların Wi-Fi ağına bağlanıp bağlanamadığına bakmanı istiyor. Başka aygıtlar bağlanabiliyorsa yöneltici ve ağ çalışıyor demektir. Yalnızca kendi ağında sorun olup olmadığını görmek için farklı bir yerdeki Wi-Fi'yi de deneyebilirsin.

**4. Modemi yeniden başlat.** Apple, yönelticinin açık ve kapsama alanında olduğundan emin olmanı, sinyalden çok uzak olabileceğini söylüyor. Yönelticinin ve kablolu modemin **fişini çıkarıp geri takarak** yeniden başlatmanı istiyor; bu ağ bağlantısını yeniler ve küçük bağlantı sorunlarını giderebilir.

**5. Frekansı değiştir.** Yöneltici farklı frekansları destekliyorsa başka bir frekansa katılmayı dene. Apple'ın örneği: 2,4 GHz yerine 5 GHz. Yönelticinin firmware sürümünün güncel olması ve yönelticinin cihazını desteklemesi de gerekiyor; yardıma ihtiyacın varsa yönelticinin üreticisine ulaş.

**6. VPN ve güvenlik yazılımını kaldır.** VPN ya da güvenlik yazılımı yüklüyse Apple şu sırayı veriyor: yazılımı kaldır, aygıtı yeniden başlat, Wi-Fi bağlantısını test et. Bu sorunu çözerse ama yazılıma ihtiyacın varsa VPN yöneticine ya da yazılım sağlayıcına başvur.

**7. Son adım: ağ ayarlarını sıfırla.** Yalnızca diğer çözümler başarısız olursa yap. **Apple'da** yol: Ayarlar > Genel > Aktar veya Sıfırla > Sıfırla > Ağ Ayarlarını Sıfırla. Bu işlem tüm Wi-Fi ağlarını ve parolalarını, hücresel ayarları, VPN ve APN ayarlarını sıfırlar. **Huawei'de** yol: Ayarlar > Sistem ve güncellemeler > Sıfırlama > Ağ ayarlarını sıfırla. Huawei'ye göre bu işlem Wi-Fi, mobil veri ağı ve Bluetooth ayarlarını sıfırlar; başka bir ayarı değiştirmez ve veri silmez. Ağın okul ya da işletme tarafından kurulduysa Apple ağ yöneticine danışmanı istiyor.

## Ağ listede hiç görünmüyorsa

Apple'ın sayfasına göre ağın görünmemesinin iki olası nedeni var: ağ yetkisiz aygıtları engelleyen bir teknoloji tarafından **gizlenmiş** olabilir ya da ağ Apple'ın önerilerini karşılamıyor olabilir. Ağı sen yönetmiyorsan ve yapılandırma değişikliğini nasıl yapacağını bilmiyorsan internet servis sağlayıcıyla iletişime geç. Evdeki modemin arayüzüne girip ayar değiştirmek için modemin kendi kılavuzuna bakman gerekir; bu yazının belgeleri o ayarları anlatmıyor.

## Sıra neden böyle?

Sıra, veri kaybettirmeyen ve geri alınabilen adımlardan geri alınamayanlara doğru ilerliyor. Ayar kontrolü ve uçak modu saniyeler sürer. Modemin fişini çekmek de aynı şekilde risksiz. VPN ya da güvenlik yazılımını kaldırmak ise bir yazılımı silmek demek; Apple bunu ağ ayarlarını sıfırlamadan önce koyuyor. Ağ ayarlarını sıfırlamak kayıtlı Wi-Fi ağlarını ve parolalarını silebilir; Apple bu yüzden yalnızca diğer çözümler başarısız olursa sıfırlamanı istiyor. Huawei'nin sayfası da ağ sıfırlamayı ayrı, **veri silmeyen** bir seçenek olarak tarif ediyor. Fabrika ayarlarına dönmek ise ayrı ve çok daha büyük bir adım: Huawei'ye göre hesapları, uygulama verilerini ve dahili depolamadaki dosyaları siler, bu yüzden bu yazının sırasında yer almıyor.

## Bağlı ama internet yoksa

Ağ ayarlarını sıfırladıktan sonra telefon Wi-Fi'ye bağlandığını gösteriyor ama internete erişemiyorsa Apple internet servis sağlayıcıyla görüşmeni söylüyor. Başka aygıtlarla da çevrimiçi olamıyorsan servis kesintisi olabilir.

## Ne zaman servis?

Bu adımlar kullanıcı seviyesindedir. Telefon hiçbir Wi-Fi ağına bağlanamıyorsa Apple, destek bölümüne ulaşmanı söylüyor. Telefonu açmak ya da anten parçasına müdahale etmek bu listenin parçası değildir; o kısım servis işi. [Samsung telefon donuyor](/blog/samsung-telefon-donuyor/) yazısındaki sıfırlama farkları da işine yarayabilir.

Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
