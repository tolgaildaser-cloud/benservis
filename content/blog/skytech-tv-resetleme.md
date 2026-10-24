---
title: "Skytech TV resetleme: menü sıfırlama ve fabrika ayarı"
description: "Skytech televizyon nasıl resetlenir? Android, Google TV, webOS ve uydu alıcılı modellerde kılavuza göre menü sıfırlama, fabrika ayarı ve şifre bilgisi."
slug: "skytech-tv-resetleme"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "skytech" geçen slug/başlık/blog gövdesi YOK; TV resetleme/fabrika ayarı başlıklı yazı da YOK.
# GSC: "skytech" satırı yok. OT (bu koşu): "skytech tv r" → 1. "skytech tv resetleme" · 3. "…resetleme nasıl yapılır"; "skytech tv s" → 5. "…sıfırlama nasıl yapılır"; "skytech tv f" → 2. "…fabrika ayarlarına döndürme".
# Belge zinciri (#88): skytech.com.tr/kullanim-kilavuzu (200) → uploads/files PDF (200 application/pdf):
#  (A) Android Tv 1416ca625b69fc9be0c8a7b1808ef831.pdf, 116 s., md5 3af25fd7a8c420524b14640c5060ddba (s.28-29, 31, 58-59)
#  (G) Google Tv 9e8e348a4be6e7163701110a54425c40.pdf, 73 s., md5 ed3fda5ebad54e6308eb94d0276104bc (s.24-25)
#  (W) WebOS Tv fcf9b843cb47bf4e5933f0c6b134456b.pdf, 102 s., md5 0de744cf430e0af4416a34df110399fd (s.49, 52)
#  (U) Uydu Alıcılı Tv b0e4fd5cf81044a1f42d5c6ad2aac60e.pdf, 82 s., md5 2d3908abea7de815642634c8645a3b3e (s.20-21, 38-39)
#  (H) Whale Tv 666758210ab9d3abadaf020bdfa9620a.pdf, 62 s., md5 dd17972f798f0636a519f7b982921092 (s.20)
# BİLEREK YAZILMAYANLAR: servis menüsü / gizli tuş kombinasyonu · USB'den yazılım yükleme (belgede yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası"]
steps:
  - "Sorunun geçici mi kalıcı mı olduğuna bak; önce televizyonu yeniden başlatmayı dene."
  - "Televizyonunun Android, Google TV, webOS, Whale ya da uydu alıcılı model olduğunu öğren."
  - "Yalnız görüntü, ses ve menü ayarlarını geri almak istiyorsan menü sıfırlamayı kullan."
  - "Google TV'de Sistem, Sıfırlama yolundan fabrika ayarlarını sıfırla seçeneğine git."
  - "webOS'ta Destek bölümünden Başlangıç Ayarlarına Geri Dön'ü seç, istenirse parolayı gir."
  - "Uydu alıcılı modelde KURULUM menüsünde Sıfırlama'yı, gerekirse İlk Kurulum'u çalıştır."
  - "Sıfırlama bitince dili, ağı ve kanal taramasını yeniden yap."
faq:
  - q: "Skytech televizyonda menü sıfırlama nerede?"
    a: "Skytech'in Android TV kılavuzunda Genel Ayarlar bölümündeki Menü Sıfırla satırı tüm menü ayarlarını sıfırlıyor. Whale TV kılavuzunda da TV Ayarları altında Menü Sıfırlama var ve varsayılan ayarları geri yüklüyor."
  - q: "Fabrika ayarlarına dönünce neler silinir?"
    a: "Skytech'in Google TV kılavuzuna göre fabrika ayarları sıfırlamada Google hesabın, sistem ve uygulama verilerin, ayarların ve indirdiğin uygulamalar dahil dahili depolamadaki tüm veriler siliniyor. Kanal listesinin de baştan taranması gerekecek; bu son kısım bizim çıkarımımız."
  - q: "Sıfırlarken şifre isteniyor, şifre nedir?"
    a: "Kılavuzlarda yazan başlangıç şifreleri modele göre farklı: Android TV kılavuzunda mevcut şifre 1234, webOS ve uydu alıcılı TV kılavuzlarında 0000 olarak geçiyor. Şifreyi değiştirdiysen ve hatırlamıyorsan Skytech destek hattına model koduyla başvur."
  - q: "webOS'lu Skytech sıfırlanınca kendiliğinden kapanıp açılıyor, normal mi?"
    a: "Evet. Kılavuza göre Başlangıç Ayarlarına Geri Dön tüm ayarları varsayılana döndürüyor ve sıfırlamadan sonra televizyon otomatik olarak kapanıp açılıyor. Bu sırada gücü kapatmaman gerekiyor."
  - q: "Televizyonu satmadan önce sıfırlamalı mıyım?"
    a: "Skytech'in webOS kılavuzu televizyonu satmadan ya da başkasına devretmeden önce ilk ayarlara sıfırlamayı öneriyor. Uygulama hesaplarından çıkmak da kişisel verilerin için iyi olur."
images:
  coverAlt: "Oturma odasında ekranında sistem ayarları açık duran televizyon"
  steps:
    - "Bekleme modunda duran bir televizyon ve sönük ekran"
    - "Televizyonun arka kasasında duran model etiketi"
    - "Televizyon ekranında genel ayarlar listesi"
    - "Televizyon ekranında sistem menüsünde sıfırlama seçeneği"
    - "Televizyon ekranında onay penceresi ve parola alanı"
    - "Küçük bir televizyonun ekranında açık kurulum menüsü"
    - "Televizyon ekranında dil seçimiyle açılan ilk kurulum ekranı"
---

Skytech televizyonun menüleri karıştı, görüntü ya da ses ayarı bozuldu, uygulamalar takılıyor ya da televizyonu başkasına vereceksin. "Resetleme" Skytech'te tek bir düğme değil: modelin işletim sistemine göre bir menü sıfırlama, bir de fabrika ayarına dönüş var ve ikisi aynı şeyi silmiyor. Bu yazıda Skytech'in kendi sitesinde yayımladığı Android TV, Google TV, webOS TV, Whale TV ve uydu alıcılı TV kılavuzlarındaki sıfırlama yollarını topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce yeniden başlat. Yalnız ayarlar bozuksa menü sıfırlama. Her şeyi silmek için Google TV'de fabrika ayarlarını sıfırla, webOS'ta Başlangıç Ayarlarına Geri Dön, uydu alıcılı modelde KURULUM, Sıfırlama. Sonra kanalları yeniden tara.

## Modele göre sıfırlama yolu

| Model türü | Kılavuzdaki yol | Ne yapıyor |
|---|---|---|
| **Android TV** | Genel Ayarlar → Menü Sıfırla | Tüm menü ayarlarını sıfırlar |
| **Google TV** | Sistem → Sıfırlama → Fabrika ayarlarını sıfırla | Hesap, uygulama ve veriler dahil hepsini siler |
| **webOS TV** | Destek → Başlangıç Ayarlarına Geri Dön | Tüm ayarları varsayılana döndürür, TV kapanıp açılır |
| **Whale TV** | TV Ayarları → Menü Sıfırlama | Varsayılan ayarları geri yükler |
| **Uydu alıcılı TV** | KURULUM → Sıfırlama / İlk Kurulum | Kullanıcı ayarlarını ilk hâline döndürür; ilk kurulumu yeniden açar |

## Adım adım: Skytech TV resetleme

**1. Önce yeniden başlat.** Geçici takılmalarda sıfırlamaya geçmeden önce televizyonu yeniden başlatmayı dene. Google TV kılavuzunda **Sistem → Hakkında** bölümünde **Yeniden Başlatma** seçeneği var. Yeniden başlatma ayarlarını silmez; sorun geçmezse sonraki adımlara geç.

**2. Modelini öğren.** Skytech'in kendi sitesinde Android, Google TV, webOS, Whale ve uydu alıcılı modeller için ayrı kılavuzlar var ve sıfırlama satırının adı her birinde farklı. Televizyonun arkasındaki etiketteki model kodu ve açılış ekranı hangisine sahip olduğunu gösterir.

**3. Menü sıfırlama.** Yalnız görüntü, ses ya da kanal menüsü ayarlarını varsayılana çekmek istiyorsan bu yeterli. Android TV kılavuzunda **Genel Ayarlar** altındaki **Menü Sıfırla** tüm menü ayarlarını sıfırlıyor. Whale TV kılavuzunda **TV Ayarları** altındaki **Menü Sıfırlama** sağ ve sol tuşlarla seçilip OK ile onaylanıyor. Android'in bir model grubunda ayrıca **Ayarlar → Ortak** başlığında **Sistem Kurtarma** satırı bulunuyor; bu satırın ne sildiğini kılavuz ayrıntılı yazmıyor, bu yüzden kişisel verilerini önceden düşün.

**4. Google TV'de fabrika ayarı.** Ayarlarda **Sistem** bölümünü aç; kılavuza göre burada Hakkında, tarih ve saat, dil, girişler, resim, ses ve **Sıfırlama** gibi seçenekler var. **Fabrika ayarlarını sıfırla** seçilirse Google hesabın, sistem ve uygulama verilerin, ayarların ve indirilen uygulamalar dahil dahili depolamadaki tüm veriler siliniyor. Sıfırlamadan sonra uygulamalara erişmek için yeniden Google hesabıyla oturum açman gerekecek.

**5. webOS'ta ilk ayarlara dönüş.** **Destek** bölümünde **Başlangıç Ayarlarına Geri Dön** satırı televizyonun tüm ayarlarını varsayılan değerlere döndürüyor. Kılavuza göre güvenlik açık olarak ayarlandıysa bunun için parola yazman gerekiyor; ilk şifre 0000. Sıfırlamadan sonra televizyon kendiliğinden kapanıp açılıyor; kılavuz başlatma sırasında gücü kapatmamanı açıkça istiyor.

**6. Uydu alıcılı modelde sıfırlama.** MENU tuşuyla **KURULUM** menüsüne gir. **Sıfırlama** satırı kullanıcının sonradan yaptığı ayarları ilk hâline döndürüyor. Kurulumu baştan yapmak istiyorsan **İlk Kurulum** satırı OSD dili, ülke ve uydu, karasal ya da kablolu yayın seçimiyle yeniden kurulum yaptırıyor. Bu modellerde sistem kilidi için 0000 giriliyor.

**7. Yeniden kur.** Fabrika ayarından sonra dil, saat dilimi ve kablosuz ağ adımlarını yeniden yap. Android kılavuzundaki kurulum sihirbazı dil, saat dilimi, kablosuz ağ ve açılış kaynağı seçimini sırayla soruyor. Ardından kanal menüsünden kanalları yeniden tara; ayrıntı [Skytech TV kanal ayarlama](/blog/skytech-tv-kanal-ayarlama/) ve uydu alıcılı modeller için [Skytech kendinden uydulu TV kurulumu](/blog/skytech-kendinden-uydulu-tv-kurulumu/) yazısında.

## Şifre sorulursa

Kılavuzlarda yazan başlangıç şifreleri modele göre değişiyor: Android TV kılavuzunda kilit bölümünde mevcut şifre **1234**, webOS ve uydu alıcılı TV kılavuzlarında **0000** olarak geçiyor. Şifreyi değiştirdiysen ve hatırlamıyorsan rastgele kod denemek yerine model koduyla Skytech destek hattına başvur. Kılavuz da kendi belirlediğin şifreyi not etmeni ve unutmamanı istiyor; sıfırlamadan önce şifreyi bir kâğıda yazıp televizyonun yanında saklamak işini kolaylaştırır.

## Ne zaman servis

- Sıfırlama yarıda kaldı, televizyon açılış ekranından geçmiyorsa
- Sıfırlamadan sonra da menüler donuyor, televizyon kendi kendine yeniden başlıyorsa
- Kumanda hiçbir tuşa tepki vermiyor, pil değişimi de işe yaramıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Menü sıfırlama, fabrika ayarı ve yeniden kurulum sende. Yazılım yükleme, servis menüsü ve kart arızası Skytech yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun model kodu ve işletim sistemi ne?
2. Hangi sıfırlamayı denedin, sonuç ne oldu?
3. Sorun sıfırlamadan önce de var mıydı?
4. Ekranda bir uyarı ya da hata metni çıkıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Televizyon kendi kendine kapanıyorsa [televizyon kendi kendine kapanıyor](/blog/televizyon-kendi-kendine-kapaniyor/), uygulamalar açılmıyorsa [smart TV uygulama açılmıyor](/blog/smart-tv-uygulama-acilmiyor/) yazısına bak. Bil, gör, çağır.
