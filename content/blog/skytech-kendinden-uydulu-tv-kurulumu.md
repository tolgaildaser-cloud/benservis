---
title: "Skytech kendinden uydulu TV kurulumu: ilk açılış ve arama"
description: "Skytech kendinden uydu alıcılı televizyon nasıl kurulur? Kılavuza göre LNB bağlantısı, ilk kurulum, uydu otomatik araması, DiSEqC, karasal arama ve saat."
slug: "skytech-kendinden-uydulu-tv-kurulumu"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "skytech" geçen slug/başlık/blog gövdesi YOK.
# GSC: "skytech" satırı yok. OT (bu koşu): "skytech kendinden uydulu" → 1. "skytech kendinden uydulu tv kurulumu" · 2. "…kanal ayarlama"; "skytech televizyon " → 5. "…uydu kurulumu"; "skytech uydu" → 3. "skytech uydu kurulumu".
# Belge zinciri (#88): skytech.com.tr/kullanim-kilavuzu (200) → skytech.com.tr/uploads/files/b0e4fd5cf81044a1f42d5c6ad2aac60e.pdf "Uydu Alıcılı Tv Kullanma Kılavuzu 24ST1000/24ST2000/24ST3000/32ST2000/32ST1000/32ST1001/32ST3001/32ST4000" (200 application/pdf), 82 s., md5 2d3908abea7de815642634c8645a3b3e.
# Türkçe, metin tabanlı. Sayfa = PDF sayfası. İlk açılış sihirbazının ekranları belgede tek tek yok; belgede KURULUM > İlk Kurulum satırı var (s.21, 38-39), yazıda öyle anlatıldı.
# BİLEREK YAZILMAYANLAR: Türksat frekans değerleri · TKGS (belgede yok) · çanak yönlendirme · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Uydu çanağından gelen kablo"]
steps:
  - "Televizyonu standına ya da duvar aparatına yerleştir, çanaktan gelen kabloyu LNB girişine tak."
  - "Alttaki açma tuşuyla televizyonu aç; gösterge ışığının yandığını gör."
  - "SOURCE tuşuyla giriş kaynağı menüsünden TV kaynağını seç."
  - "MENU, KURULUM, İlk Kurulum ile menü dilini, ülkeyi ve yayın türünü seç."
  - "KANAL menüsünde Otomatik Arama'yı aç, uyduyu ve arama modunu seçip aramayı başlat."
  - "Birden fazla uydu kullanıyorsan DiSEqC ayarını yap, karasal anten varsa DTV aramasını da çalıştır."
  - "ZAMAN menüsünde saat dilimini ayarla, Program Tablosu'ndan kanalları düzenle."
faq:
  - q: "Kendinden uydulu Skytech'te ayrıca uydu alıcısı gerekir mi?"
    a: "Hayır. Skytech'in uydu alıcılı TV kılavuzu bu modellerde LNB girişi ve KANAL menüsünde Otomatik Arama (Uydu Anten Kaynağı) olduğunu gösteriyor; çanak kablosu doğrudan televizyona takılıyor ve kanallar televizyonun kendi menüsünden aranıyor."
  - q: "Kurulumu baştan yapmak istiyorum, nereden başlarım?"
    a: "Kılavuza göre MENU, KURULUM bölümündeki İlk Kurulum satırı televizyonu ilk kurulum menüsüne götürüyor. Burada OSD dili, ülke ve uydu, karasal ya da kablolu yayın seçimi yapılarak yeniden kurulum yapılıyor."
  - q: "Arama modunda hangisini seçmeliyim?"
    a: "Kılavuz bir model grubunda Ağ, Varsayılan ve Tam arama, öbür grubunda Ağ, Varsayılan ve Kör tarama seçeneklerini sayıyor. Hepsini taramak istiyorsan tam ya da kör taramayı seçebilirsin; süresi daha uzun olabilir."
  - q: "Saat neden yanlış görünüyor?"
    a: "ZAMAN menüsündeki zaman bölgesi doğru seçilmemiş olabilir. Kılavuz saatin doğru çalışması için bölgenin doğru seçilmesi gerektiğini ve Türkiye için +3 olarak ayarlanması gerektiğini yazıyor."
  - q: "Kilit şifresi nedir?"
    a: "Uydu alıcılı TV kılavuzunda sistem kilidini etkinleştirmek için KİLİT menüsünde 0000 girildiği yazıyor. Şifreyi Belirle satırından kendi şifreni koyabilirsin; kılavuz belirlediğin şifreyi not etmeni istiyor."
images:
  coverAlt: "Küçük bir mutfak tezgâhının üzerinde duran kompakt televizyon"
  steps:
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda panel ekranındaki uyarı"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
---

Kendinden uydu alıcılı bir Skytech televizyon aldın ve ayrı bir uydu kutusu kullanmadan kanalları açmak istiyorsun. Bu modellerde çanak kablosu doğrudan televizyona takılıyor ve kanallar televizyonun kendi KANAL menüsünden aranıyor. Bu yazıda Skytech'in kendi sitesinde yayımladığı "Uydu Alıcılı TV" kullanma kılavuzundaki kurulum ve arama adımlarını sıraladık. Kılavuz 24 ve 32 inçlik uydu alıcılı modelleri (24ST1000, 24ST2000, 24ST3000, 32ST1000, 32ST1001, 32ST2000, 32ST3001, 32ST4000) kapsıyor; model grupları arasında küçük menü farkları var.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çanak kablosunu LNB girişine tak, SOURCE ile TV kaynağını seç, MENU, KANAL, Otomatik Arama ile uyduyu seçip ara. Baştan kurmak için KURULUM, İlk Kurulum. Saat için ZAMAN menüsünde bölgeyi +3 yap.

## Menüde nerede ne var

| Menü | Kurulumda işine yarayan satırlar |
|---|---|
| **KANAL** | Otomatik Arama (uydu), DiSEqC 1.0 ve 1.1, Program Tablosu, Sinyal Bilgisi, CI Bilgisi, Çanak Anten Ayarı |
| **KURULUM** | OSD Dili, Ekran Formatı, Mavi Ekran, İlk Kurulum, Sıfırlama |
| **ZAMAN** | Zaman bölgesi, kapanma zamanı, otomatik bekleme |
| **KİLİT** | Sistemi kilitle, şifre belirle, program kilidi, ebeveyn kilidi |

## Adım adım: Skytech kendinden uydulu TV kurulumu

**1. Yerleştir ve kabloyu tak.** Kılavuzda masa üstü standının takılışı model grubuna göre ayrı anlatılıyor; güvenlik bölümü de cihazın sert ve düz bir zemine konmasını, yalnız cihazla gelen ya da üreticinin önerdiği stand veya montaj aparatının kullanılmasını ve ekranın yalnız tavsiye edilen şekilde duvara ya da tavana monte edilmesini istiyor. Televizyonu yerine koyduktan sonra çanaktan gelen kabloyu arkadaki girişe tak. Teknik özellik tablosunda bu modellerde karasal anten girişi ve LNB girişi ayrı ayrı sayılıyor; bir modelin bağlantı şemasında ise tek bir "Anten Girişi (S/S2/T/T2)" görünüyor. Arka paneldeki yazıya göre tak.

**2. Televizyonu aç.** Kılavuza göre cihazın alt kısmındaki açma/kapama tuşuna basınca gösterge ışığı yeşil yanıyor. Kumanda elinde değilse alttaki akıllı tuş da işini görüyor: arka arkaya kısa basarak menü, kaynak, kanal ve ses simgelerinden birini seçiyor, uzun basarak çalıştırıyorsun.

**3. Kaynağı TV yap.** **SOURCE** tuşuna basınca giriş kaynağı menüsü açılıyor; yukarı ve aşağı tuşlarla TV kaynağını seçip OK'a bas. Kaynak HDMI ya da AV'de kaldıysa uydu kanalları görünmez.

**4. İlk kurulumu yap.** Menüye girmek için kumandadaki MENU tuşuna bas, sağ ve sol tuşlarla **KURULUM**'u seç. **İlk Kurulum** satırı seni ilk kurulum menüsüne götürüyor; burada OSD dilini, ülkeyi ve uydu, karasal ya da kablolu yayın seçimini yapıyorsun. Kılavuz bu satırın yeniden kurulum için de kullanıldığını yazıyor.

**5. Uydu otomatik araması.** **KANAL** menüsünde **Otomatik Arama (Uydu Anten Kaynağı)** üzerine gelip OK'a bas, açılan menüde sağ ve sol tuşlarla uyduyu seç. **Arama Modu**'nda bir model grubunda Ağ, Varsayılan ve Tam arama, öbüründe Ağ, Varsayılan ve Kör tarama var. **Kanal Tipi** ve **Servis Tipi** satırlarıyla şifresiz ya da şifreli kanalları, TV ya da radyo servislerini süzebilirsin. Ayarları yapınca aramayı başlat.

**6. DiSEqC ve karasal arama.** Birden fazla uydu kullanıyorsan **DiSEqC 1.0**'da bağlantına göre seçim yap; kılavuzdaki örnek LNB1 Türksat, LNB2 Hotbird. DiSEqC 1.0 dört uyduya kadar, **DiSEqC 1.1** daha fazla uydu sıralamasına izin veriyor. Karasal anten de bağlıysa **DTV Arama**'da otomatik arama üzerine gelip ATV+DTV ya da yalnız ATV veya DTV seçerek OK'a bas. Uydu tarafının ayrıntısı [Skytech TV uydu ayarlama](/blog/skytech-tv-uydu-ayarlama/) yazısında.

**7. Saati ve listeyi düzenle.** **ZAMAN** menüsünde zaman bölgesini Türkiye için +3 yap; kılavuz saatin doğru çalışması için bunu şart koşuyor. Sonra KANAL menüsündeki **Program Tablosu**'nda taşı, atla ve sil seçimleriyle kanalları istediğin gibi diz. Ayrıntı [Skytech TV kanal taşıma](/blog/skytech-tv-kanal-tasima/) yazısında.

## Kurulumdan sonra işe yarayan ayarlar

**Ekran Formatı**'nda tam ekran için 16/9 seçmen gerekiyor. **Mavi Ekran** açıkken yayın olmadığında ekran maviye dönüyor, kapalıyken siyah kalıyor; bu yüzden siyah ekran her zaman arıza demek değil. **KİLİT** menüsünde sistem kilidini açmak için 0000 giriliyor, **Şifreyi Belirle** ile kendi şifreni koyabiliyorsun. Şifreli kanallar için kılavuz bir modül (CAM) kullanılabileceğini, modül bilgisinin **CI Bilgisi** satırında göründüğünü yazıyor.

## Ne zaman servis

- Kablo LNB girişinde, uydu doğru seçili ama otomatik arama hiç kanal bulmuyorsa
- Sinyal Bilgisi ekranında hiç sinyal görünmüyorsa
- Televizyon açılmıyor ya da gösterge ışığı yanmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kurulum ve arama sende. Kılavuzun sorun giderme tablosu "Sinyal Yok" uyarısında çanağın ayarlatılmasını, hasarlı LNB'nin değiştirilmesini öneriyor; bunlar uzman işi. Televizyonun iç arızası Skytech yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Televizyonun model kodu ne?
2. Tek uydu mu, birden fazla uydu mu?
3. Arama hangi modda yapıldı, kaç kanal buldu?
4. Sinyal Bilgisi ekranında ne yazıyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ekran hiç görüntü vermiyorsa [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/) yazısına bak. Bil, gör, çağır.
