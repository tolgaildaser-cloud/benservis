---
title: "Sharp TV kanal ayarlama: anten, kablo ve uydu tarama"
description: "Sharp televizyonda kanal arama nasıl yapılır? Google TV ve TiVo menülerinde anten, kablo ve uydu taraması, LCN ayarı, kanal listesi ve sıralama."
slug: "sharp-tv-kanal-ayarlama"
date: "2026-10-23"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M1). origin/main 75980e0'da "sharp" geçen slug/başlık/gövde YOK.
# GSC: "sharp" satırı yok. OT (bu koşu): "sharp tv" → 2. "…kumandası" · 3. "sharp tv kanal ayarlama"; "sharp tv k" → 2. "…kanal ayarlama" · 3. "…kanal arama"; "sharp televizyon k" → 2. "…kanal arama"; "sharp tv kanal" → 1. "…ayarlama" · 2. "…arama".
# Belge zinciri (#88): sharpconsumer.com (Sharp Consumer Electronics Europe) ürün sayfaları "Downloads" → s3.infra.brandquad.io (Sharp'ın ürün belge deposu, SHRP hesabı) PDF, HTTP 200.
#  (G) Sharp Google TV "Instruction manual" EN (SHA/MAN/0580-EN), 29 s., md5 3dbcfb6e76b673cd810118f0995b70c6 — 55JT8265E / 65JT8265E / 75JT8265E sayfalarında bağlı
#  (T) Sharp TiVo TV "Instruction manual" EN/DE/FR/IT/ES/PL (70GK4245E), 84 s., md5 f1752a96ed5fe21c1a62393a0cdedd81 — 70GK4245E sayfasında bağlı
# Türkçe kılavuz yok; kılavuzların İngilizce baskısı kullanıldı, alıntılar çevrildi, orijinali KAYNAK.md'de. pdftotext; sayfa = PDF sayfası.
# BİLEREK YAZILMAYANLAR: Türksat frekans/transponder değerleri (belgede yok) · Android TV ve eski Sharp menüleri (bu belgelerde yok) · uydu çanağı yönlendirme · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Anten, kablo ya da uydu bağlantısı"]
steps:
  - "Televizyonunun Google TV mi TiVo mu olduğunu ana ekrandan anla; menü yolları ikisinde farklı."
  - "Anten, kablo ya da uydu kablosunun televizyonun doğru girişine sıkıca takılı olduğunu kontrol et."
  - "Google TV'de Hızlı Ayarlar'dan Tüm ayarlar, Kanallar ve girişler, Kanallar, Kanal Tarama yolunu aç; TiVo'da ayarlar tuşundan Live TV menüsüne gir."
  - "Tuner modunu ya da kaynak türünü bağlantına göre anten, kablo ya da uydu olarak seç."
  - "Otomatik taramayı başlat ve televizyon kanalları bulurken bekle."
  - "Uydu taramasında operatörünü ya da Diğer seçeneğiyle uyduyu seç, ardından taramayı başlat."
  - "Tarama bitince kanal listesini aç, istemediğin kanalları gizle ya da sırasını değiştir."
faq:
  - q: "Sharp televizyonda kanal arama nereden yapılır?"
    a: "Sharp'ın Google TV kılavuzuna göre Hızlı Ayarlar tuşuna basıp Tüm ayarlar, Kanallar ve girişler, Kanallar, Kanal Tarama yolunu açarsın. TiVo işletim sistemli Sharp modellerinde yol farklı: ayarlar tuşu, Live TV, Kanal Yapılandırması, Kanal Tara."
  - q: "Kanallar karışık sıralandı, nasıl düzeltirim?"
    a: "Tarama öncesindeki LCN ayarı sıralamayı belirliyor. Kılavuza göre LCN açıkken dijital kanallar yayıncının tercihine göre dizilir ve kanalların yerini değiştirmen sınırlanabilir. Kendi sıralamanı istiyorsan LCN'i kapatıp yeniden tarayabilir, ardından kanal düzenleyiciyle kanalları taşıyabilirsin."
  - q: "Yeni çıkan kanalları tüm listeyi silmeden nasıl eklerim?"
    a: "Google TV kılavuzunda güncelleme taraması var: Anten Güncelleme Taraması ya da Kablo Güncelleme Taraması artık yayında olmayan kanalları kaldırıp yeni kanalları arar. Otomatik Servis Güncellemesi açıksa televizyon bunu gece bekleme modundayken kendisi yapar."
  - q: "İlk kurulumda yanlış ülkeyi seçtim, değiştirebilir miyim?"
    a: "Sharp Google TV kılavuzuna göre ülke seçimi kanal ayarlarını belirliyor ve menüden sonradan değiştirilemiyor. Ülkeyi değiştirmek için fabrika ayarlarına dönüp ilk kurulumu yeniden yapman gerekiyor."
  - q: "Uydu kanallarını nasıl ararım?"
    a: "Kanal Tarama menüsünde tuner modunu Uydu yap ve Uydu Otomatik Tarama'yı seç. Listeden operatörünü seçebilir ya da genel bir uydu için Diğer seçeneğine girip uyduyu işaretleyebilirsin. Ayarlar bitince kumandadaki MAVİ tuş taramayı başlatır."
images:
  coverAlt: "Oturma odasında duvara monte edilmiş, ekranında ayar menüsü açık bir televizyon"
  steps:
    - "Televizyon ekranında açık duran akıllı TV ana ekranı"
    - "Televizyonun arka panelinde anten girişine takılı bir koaksiyel kablo"
    - "Televizyon ekranında açılmış bir ayarlar menüsü"
    - "Televizyon ekranında kaynak türü seçim listesi"
    - "Televizyon ekranında ilerleyen bir kanal tarama çubuğu"
    - "Balkon korkuluğuna monte edilmiş bir uydu çanağı"
    - "Televizyon ekranında açık duran bir kanal listesi"
---

Sharp televizyonunu yeni kurdun, taşındın ya da yayıncı frekans değiştirdi ve kanallar kayboldu. Kanal ayarlama Sharp'ta televizyonun işletim sistemine göre değişiyor: Google TV'li modellerde bir menü yolu, TiVo'lu modellerde başka bir yol var. Bu yazıda Sharp'ın Google TV ve TiVo televizyon kılavuzlarındaki (kılavuzların İngilizce baskısı, alıntılar ve menü adları Türkçeye çevrildi) kanal tarama adımlarını topladık. Menü adları televizyonunda Türkçe görünüyorsa anlam aynı.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Google TV'de Hızlı Ayarlar, Tüm ayarlar, Kanallar ve girişler, Kanallar, Kanal Tarama. Tuner modunu seç, otomatik taramayı başlat. Yeni kanallar için güncelleme taraması. Ülke seçimi menüden değişmez.

## Hangi Sharp, hangi menü

| İşletim sistemi | Kanal taramasına giden yol | Tarama türleri |
|---|---|---|
| **Google TV** | Hızlı Ayarlar → Tüm ayarlar → Kanallar ve girişler → Kanallar → Kanal Tarama | Otomatik, güncelleme, elle |
| **TiVo** | Ayarlar tuşu → Live TV → Kanal Yapılandırması → Kaynak Türü, sonra Kanal Tara | Otomatik, elle; kabloda Tam ya da Hızlı |

## Adım adım: Sharp TV'de kanal arama

**1. Sistemi tanı.** Ana ekranda Google TV arayüzü ya da TiVo arayüzü görünür; kumandada ayrı bir TiVo tuşu varsa model TiVo'ludur. Aşağıdaki adımlar iki sistem için ayrı yazıldı.

**2. Bağlantıyı kontrol et.** Anten, kablo ya da uydu kablosunun televizyonun ilgili girişine sıkıca takılı olduğundan emin ol. Google TV kılavuzuna göre ilk kurulumda anten bağlı değilse tarama adımı atlanabiliyor; o durumda kanallar hiç taranmamış olur ve aşağıdaki adımlarla sonradan taranır. Sinyal hiç gelmiyorsa markadan bağımsız kontroller [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/) yazısında.

**3. Tarama menüsünü aç.** **Google TV:** kumandada Hızlı Ayarlar tuşuna bas, sonra **Tüm ayarlar → Kanallar ve girişler → Kanallar → Kanal Tarama** yolunu seç. **TiVo:** ayarlar tuşuna bas ve **Live TV** menüsünü seç.

**4. Kaynağı seç.** Google TV'de **Tuner Modu** seçeneğinde Anten, Kablo ya da Uydu'yu işaretle. TiVo'da **Kanal Yapılandırması → Kaynak Türü** ayarını aynı şekilde Anten, Kablo ya da Uydu yap. Taramadan önce LCN ayarına bak: kılavuza göre LCN açıkken dijital kanallar yayıncının tercihine göre sıralanır ve kanalların yerini değiştirmen sınırlanabilir.

**5. Otomatik taramayı başlat.** Google TV'de anten için **Anten Otomatik Tarama**, kablo için **Kablo Otomatik Tarama** bütün kanalları arar. Kabloda tarama türü olarak Tam Tarama (bütün frekanslar, zaman alabilir), Hızlı Tarama ya da Ağ Taraması seçilebilir; operatörün frekans ya da ağ kimliği vermediyse bu alanları Otomatik bırak. Yeni kanalları eklemek için **Güncelleme Taraması**, tek bir frekans bandı için **Elle Tarama** var. TiVo'da antende Kanal Tara → Anten Taraması → Otomatik Tarama, kabloda Kablo Taraması → Tam seçilir. **Otomatik Servis Güncellemesi** açıksa Google TV yeni kanalları gece bekleme modundayken kendisi arar.

**6. Uydu taraması.** Google TV'de tuner modunu Uydu yap, **Uydu Otomatik Tarama**'yı seç ve listeden operatörünü seç. Operatör kartın (CAM) takılıysa kanallar kendiliğinden ayarlanır. Genel bir uydu için **Diğer**'i seç; soldaki listeden uyduyu, ortadaki listeden istersen transponderleri işaretle, sağdaki sütunda DiSEqC ya da Unicable gibi ayarları yap ve **MAVİ** tuşla taramayı başlat. TiVo modellerinde Uydu Taraması menüsü tek uydu için Doğrudan bağlantı, dört uyduya kadar DiSEqC 1.0, on altı uyduya kadar DiSEqC 1.1 seçenekleri sunuyor.

**7. Listeyi düzenle.** Tarama bitince Google TV'de Live TV uygulamasını aç, OK tuşuyla menüye girip **Kanal Listesi**'ni seç; izlerken OK tuşunu basılı tutmak da listeyi açar. Kanalların yerini değiştirmek için **Kanallar → Kanal Düzenleyici** menüsünde kanalı seçip **Taşı** de, yeni yere götürüp MAVİ tuşa bas ve OK ile onayla. TiVo'da Kanal Yapılandırması → Kanalları Yönet ekranında kanal gizlenir ya da favorilere eklenir.

## İlk kurulumda ülke seçimine dikkat

Sharp'ın Google TV kılavuzuna göre ilk kurulumda seçilen ülke, kanal ayarına ait operatöre özgü ayarları belirliyor ve **menüden sonradan değiştirilemiyor**. Yanlış ülke seçildiyse ülkeyi değiştirmenin yolu fabrika ayarlarına dönüp ilk kurulumu yeniden yapmak. Kılavuz fabrika ayarına dönüşün bütün uygulamaları, hesapları ve verileri sildiğini yazıyor; bu yüzden önce taramayı bir kez daha dene. Geçici sorunlarda Sistem menüsündeki **Yeniden Başlat** seçeneği de kılavuza göre işe yarayabiliyor.

## Ne zaman servis

- Anten, kablo ve uydu bağlantısı sağlamken tarama hiç kanal bulmuyorsa
- Başka bir televizyonda aynı kabloyla kanallar çıkıyor ama Sharp'ta çıkmıyorsa
- Tarama menüsü açılmıyor ya da tarama yarıda kesiliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kablo, tarama, LCN ve kanal listesi sende; çanak ayarı, anten tesisatı ve televizyonun alıcı devresi uzman ya da Sharp yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Televizyonun modeli ne? Google TV mi, TiVo mu?
2. Bağlantı anten mi, kablo mu, uydu mu?
3. Hangi tarama türünü denedin?
4. Aynı kablo başka bir televizyonda çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. HDMI'dan görüntü gelmiyorsa [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/), uygulamalar açılmıyorsa [smart TV uygulama açılmıyor](/blog/smart-tv-uygulama-acilmiyor/) yazısına bak. Bil, gör, çağır.
