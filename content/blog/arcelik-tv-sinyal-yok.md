---
title: "Arçelik TV sinyal yok: kılavuza göre kontrol sırası"
description: "Arçelik TV'de sinyal yok, kendi kendine kapanma ya da mavi ekran için Arçelik kılavuzlarına göre kaynak, anten, kanal arama ve sinyal bilgisi sırası."
slug: "arcelik-tv-sinyal-yok"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P36 satır #188). origin/main'de Arçelik markalı televizyon yazısı yok. Yakın sayfalar: televizyon-kendi-kendine-kapaniyor (genel, Arçelik + Philips), tv-acilmiyor, tv-hdmi-sinyal-yok, vestel-televizyon-sinyal-yok, panasonic-tv-sinyal-yok, skytech-tv-sinyal-yok, sunny-tv-sinyal-yok, dijitsu-tv-sinyal-yok.
# Arama kanıtı (30 Eki, Google otomatik tamamlama hl=tr gl=tr): "arçelik tv neden" → 1. arçelik tv neden sinyal yok der · 2. …kendi kendine kapanıyor · 3. …youtube açılmıyor · 4. …internete bağlanmıyor · 6. …mavi gösteriyor · 7. …wifiye bağlanmıyor · 8. …açılıp kapanıyor. BOSLUK.md #188.
# Belgeler (Arçelik'in kendi dosya sunucuları; curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf; arcelik.com.tr destek/blog sayfaları 403 verdi, kaynak sayılmadı):
#  (A1) Arçelik "Televizyon Kullanma Kılavuzu TR A55 B 975 A" (2021), 118 s.  https://gsim2hwnpbvwtwmb1dg11z6.blob.core.windows.net/media/documents/UPM000_MDM2_USER_MANUAL_FILE_tr_TR_20210302_155147.pdf  md5 aşağıdaki KAYNAK.md'de
#  (A2) Arçelik "Television User Manual TR I EN I DE I AR" (2018), TR bölümü 116 s.  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201802131545151_User%20Manual%20-%20Filetr_TR.pdf
# Sayfalar: A1 s.14 (girişler) · s.15 (kumanda: Sinyal kaynağı) · s.21 (karasal tarama) · s.31 (kaynak/anten tipi) · s.33 (sinyal olmadığında otomatik kapanma) · s.34 (Sessiz Mavi Ekran) · s.38 (Sistem Bilgileri) · s.107-108 (sorun giderme). A2 s.10 (anten bağlama) · s.22 (arama) · s.32 (Kaynak Seçin) · s.104 (Sinyal Bilgileri) · s.107 (sorun giderme).
# BİLEREK YAZILMAYANLAR: çanak yönü ayarı, LNB/kablo değişimi (servis işi) · kayıtsız "YouTube açılmıyor" çözümleri (kılavuzda yok, yalnız ağ satırı) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Televizyon kumandası", "Arçelik kullanma kılavuzu (model etiketine göre)"]
steps:
  - "Kumandadaki sinyal kaynağı düğmesiyle antenin bağlı olduğu kaynağı seç."
  - "Televizyonu fişten çek, anten kablosunun girişe tam oturduğunu kontrol et."
  - "Kanal listesi boşsa kanal taramasını yeniden başlat."
  - "Sinyal bilgileri ekranında sinyal gücü ve kalite çubuklarına bak."
  - "Kendiliğinden kapanma için sinyal olmadığında otomatik kapanma süresine bak."
  - "Mavi ekran için sessiz mavi ekran ayarının durumuna bak."
  - "Sinyal gelmiyorsa anten tesisatını yetkili kişiye kontrol ettir."
faq:
  - q: "Arçelik TV neden kendi kendine kapanıyor?"
    a: "Arçelik kılavuzunda iki ayar var. Biri 'Sinyal olmadığında Otomatik Kapanma': televizyon yayın sinyali almadığında seçtiğin sürenin sonunda kapanır. Diğeri uyku zamanlayıcısı ve kapanma zamanlayıcısı: süre dolunca televizyon bekleme moduna geçer. Güç menüsünden üçünü de kontrol edebilirsin."
  - q: "Arçelik TV neden mavi gösteriyor?"
    a: "Kılavuzdaki Gelişmiş Seçenekler menüsünde 'Sessiz Mavi Ekran' ayarı var. Yayın sinyali olmadığında ekranın mavi görünmesini seçebiliyorsun. Mavi ekran sinyal alınmadığını gösterir; önce anten kablosunu ve kaynağı kontrol et."
  - q: "Arçelik TV internete bağlanmıyor, YouTube açılmıyor. Ne yapmalıyım?"
    a: "Kılavuzun sorun giderme tablosu ekrandaki bağlantı uyarılarında iki kontrol veriyor: ağ kablosu ya da kablosuz USB ağ aygıtının takılı olduğuna bak, modemin internete çıktığından emin ol. Videolar takılıyorsa kılavuz hız sorununu abonelik paketine ya da altyapıya bağlıyor ve internet servis sağlayıcına başvurmanı istiyor."
  - q: "Sinyal gücü ve kalite çubukları ne anlama geliyor?"
    a: "2018 tarihli Arçelik kılavuzuna göre çubuk sağa doğru ne kadar uzarsa alınan sinyal o kadar iyidir. Sinyal düzeyi yalnız alıcı sistemine değil, o anda izlediğin kanala da bağlıdır; bu yüzden birkaç kanalda bak."
images:
  coverAlt: "Oturma odasında açık bir televizyonda düz mavi ekran, sehpada kumanda ve duvardaki anten girişine uzanan kablo"
  steps:
    - "Televizyon kumandasındaki kaynak düğmesine basan beyaz eldivenli sade siluet el, ekranda kaynak listesi çizimi, okunur yazı yok"
    - "Televizyonun arkasındaki anten girişine kabloyu işaret eden beyaz eldivenli sade siluet el"
    - "Kumandayla kanal taraması başlatan beyaz eldivenli sade siluet el, ekranda ilerleme çubuğu çizimi"
    - "Ekranda iki yatay çubuk gösteren sinyal bilgisi çizimi, yanında kumandaya uzanan beyaz eldivenli sade siluet el"
    - "Ekranda güç menüsü, kumandanın yön düğmesine basan beyaz eldivenli sade siluet el"
    - "Düz mavi bir televizyon ekranı ve kumandayı tutan beyaz eldivenli sade siluet el"
    - "Çatıdaki anteni uzaktan işaret eden beyaz eldivenli sade siluet el, yanında telefon çizimi"
---

Arçelik televizyonunda "sinyal yok" yazıyor, ekran mavi kalıyor ya da televizyon bir süre sonra kendini kapatıyor. Bu üç belirti çoğu zaman aynı yerden çıkar: televizyon yayın sinyali alamıyor. Bu yazıda Arçelik'in kendi Türkçe kullanma kılavuzlarındaki (A55 B 975 A, 2021 ve 2018 tarihli televizyon kılavuzu) sorun giderme satırlarını ve menü adımlarını kontrol sırasına dizdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kaynağı kontrol et, sonra anten kablosunun takılı olduğuna bak. Kanal listesi boşsa kanal taramasını yenile. Sinyal bilgisi ekranında çubuklar kısaysa sorun anten tarafındadır. Kendiliğinden kapanma ve mavi ekran, menüdeki iki ayarın sonucu olabilir. Sürerse → anten tesisatı için yetkili kişi.

## Kılavuzun satırları

| Belirti | Arçelik kılavuzu ne diyor | Ne yaparsın |
|---|---|---|
| Ekran açık, kanal yok | "Anten kablosu takılı mı?" | Kabloyu kontrol et |
| Kanal listesi boş | "Kanal aramasını başlatın" | Kanal taramasını yenile |
| Kendiliğinden kapanıyor | Sinyal olmadığında otomatik kapanma | Süre ayarını gör |
| Ekran mavi | Sessiz Mavi Ekran | Açık mı kapalı mı bak |
| Görüntü zayıf | Sinyal Gücü ve Kalite çubuğu | Çubukları izle |

## Adım adım: sinyal yok için kontrol sırası

**1. Kaynağı seç.** Kumandadaki sinyal kaynağı düğmesine bas, antenin bağlı olduğu kaynağı seçip onayla. 2021 kılavuzunda Home menüsündeki **Girişler** öğesinden de aynı seçim yapılır; 2018 kılavuzunda aynı iş "Kaynak Seçin" menüsünden yapılıyor. Arçelik kılavuzu uydu alıcısı ya da kayıt cihazı gibi harici cihazların da arızaya yol açabileceğini hatırlatıyor; böyle bir cihazın girişini de dene.

**2. Anten kablosunu kontrol et.** Kılavuzun "Ekran açık, ama kanal yok" satırındaki çözüm tek cümle: **"Anten kablosu takılı mı?"** Karasal anten ya da kablolu yayın **ANT IN**, uydu anteni **SATELLITE** girişine takılır. Kabloya dokunmadan önce televizyonu fişten çek; 2018 kılavuzu cihazı prize ancak antenleri bağladıktan sonra takmanı istiyor.

**3. Kanal taramasını yenile.** Aynı tablodaki ikinci satır: "Programlanmış TV kanalı yok", çözümü **"Kanal aramasını başlatın."** 2021 kılavuzunda karasal anten için **Anten** seçilir, **Tara** ile arama başlar ve **SON** mesajı gelince biter. 2018 kılavuzunda aramayı kırmızı düğme başlatır, **"Arama tamamlandı!"** mesajı bitişi gösterir. Uydu taramasında kılavuzun ekranı "İlk olarak lütfen uydu ile bağlantı kurun." diyor; yani uydu tarafında bağlantı hazır değilse tarama sonuç vermez.

**4. Sinyal bilgisine bak.** 2018 kılavuzunda Menü, Ayarlar, Kaynak ve Gelişmiş yolundan **Sinyal Bilgileri** açılır. Sinyal Gücü ve Kalite çubuğu sağa doğru ne kadar uzarsa sinyal o kadar iyidir. 2021 kılavuzunda aynı bilgi Gelişmiş Seçenekler altındaki **Sistem Bilgileri**'nde. Sinyal düzeyi izlediğin kanala da bağlı olduğu için birkaç kanalda bak.

**5. Kapanma ayarına bak.** 2021 kılavuzundaki Güç menüsünde **"Sinyal olmadığında Otomatik Kapanma"** var: televizyon yayın sinyali almadığında seçtiğin sürenin sonunda kapanır. Aynı menüde uyku zamanlayıcısı ve kapanma zamanlayıcısı da duruyor. "Kendi kendine kapanıyor" belirtisi bu ayarlardan biri olabilir.

**6. Mavi ekranı anla.** Gelişmiş Seçenekler menüsündeki **Sessiz Mavi Ekran** ayarı, yayın sinyali olmadığında ekranın mavi görünmesini sağlar; Açık ya da Kapalı seçilir. Ekranın mavi kalması televizyonun bozulduğunu değil, sinyal almadığını söyler. Ayarı kapatmak mavi rengi değiştirir ama sinyali getirmez; asıl çözüm 2. ve 3. adımda.

**7. Anten tesisatını kontrol ettir.** Kılavuz çözümler işe yaramazsa yetkili satıcıyla iletişim kurmanı istiyor; gölge ve yansıma satırında da "Anten kablosunu veya sistemi kontrol ettirin" diyor. Çatıdaki anten, çanak ve kablo tesisatı senin işin değil.

## YouTube açılmıyor, internete bağlanmıyor

Sinyal sorunu yayın izlemeyle ilgili; uygulamalar internetle çalışır. 2021 kılavuzundaki bağlantı uyarısı satırı iki kontrol veriyor: ağ kablosu ya da kablosuz USB ağ aygıtının takılı olduğuna bak, **"Modeminiz internete çıktığında emin olun."** Videolar takılıyorsa kılavuz hız düşüklüğünü abonelik paketine ya da altyapıya bağlıyor ve internet servis sağlayıcına başvurmanı istiyor.

## Ne zaman servis?

- Kaynak, kablo ve tarama doğruyken sinyal çubukları sıfırda kalıyorsa
- Kanal listesi boş kalıyor, tarama hiçbir kanal bulmuyorsa
- Televizyon sinyal gelse bile kapanıyorsa

⛔ Çatıya ya da balkon dışına çıkıp anten ve çanakla uğraşma. Televizyonun arka kapağını açma.

Televizyon hiç açılmıyorsa [TV açılmıyor](/blog/tv-acilmiyor/), kendi kendine kapanma sürüyorsa [televizyon kendi kendine kapanıyor](/blog/televizyon-kendi-kendine-kapaniyor/), kablolu cihazdan görüntü gelmiyorsa [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) yazısına bak.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Sorun giderme satırları, kanal arama, sinyal bilgisi, otomatik kapanma ve mavi ekran ayarları Arçelik'in Türkçe televizyon kullanma kılavuzlarından (A55 B 975 A, 2021; 2018 tarihli kılavuz) alınmıştır. Menü adları modele göre değişir; kendi kılavuzun farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
