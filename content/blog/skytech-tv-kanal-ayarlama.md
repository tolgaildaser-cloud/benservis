---
title: "Skytech TV kanal ayarlama: anten, kablo ve uydu tarama"
description: "Skytech televizyonda kanal ayarlama nasıl yapılır? Android TV kanal menüsünde anten tipi, otomatik ve elle tarama, LCN, kablo ağ taraması ve uydu araması."
slug: "skytech-tv-kanal-ayarlama"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "skytech" geçen slug/başlık/blog gövdesi YOK.
# GSC: "skytech" satırı yok (www-3…www-6). OT (bu koşu): "skytech tv " → 1. "skytech tv kanal ayarlama" · 2. "…kanal arama nasıl yapılır"; "skytech tv k" → 1. "…kanal ayarlama"; "skytech televizyon " → 3. "…kanal ayarlama".
# Belge zinciri (#88): skytech.com.tr/kullanim-kilavuzu (200) → skytech.com.tr/uploads/files/1416ca625b69fc9be0c8a7b1808ef831.pdf "Android Tv Kullanma Kılavuzu" (200 application/pdf), 116 s., md5 3af25fd7a8c420524b14640c5060ddba. Ek: Google TV kılavuzu 9e8e348a….pdf (200), 73 s., md5 ed3fda5ebad54e6308eb94d0276104bc.
# Türkçe, metin tabanlı (pdftotext). Sayfa = PDF sayfası (basılı numarayla aynı).
# BİLEREK YAZILMAYANLAR: Türksat frekans/transponder değerleri (belgede yok) · TKGS (belgede yok) · çanak yönlendirme · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Anten, kablo ya da uydu bağlantısı"]
steps:
  - "Televizyonun arkasındaki model etiketine bak; kanal menüsü Skytech'in model gruplarında farklı görünüyor."
  - "Kullanacağın yayının kablosunu televizyonun doğru anten girişine sıkıca tak."
  - "MENU tuşuyla menüyü aç, sağ ve sol yön tuşlarıyla kanal menüsüne gir."
  - "Anten tipini Hava, Kablo ya da Uydu olarak seç."
  - "Tara bölümünden otomatik taramayı başlat; karasal ve kabloda LCN kararını taramadan önce ver."
  - "Uydu yayınında uyduyu seç, LNB ayarını yap ve tüm LNB'ler için otomatik aramayı başlat."
  - "Tarama bitince kanal listesini aç, kanalları taşı, sil, atla ya da favorilere ekle."
faq:
  - q: "Skytech televizyonda kanal arama nereden yapılır?"
    a: "Skytech'in Android TV kılavuzuna göre MENU tuşuyla açılan menüde Kanal Menüsü'ne girersin. Önce Anten Tipi'ni Hava, Kablo ya da Uydu olarak seçer, sonra Tara bölümünden otomatik ya da elle kanal arama yaptırırsın."
  - q: "Hava, Kablo ve Uydu seçenekleri ne anlama geliyor?"
    a: "Kılavuzda Hava karasal yayını (DVB-T/T2), Kablo kablo TV yayınını (DVB-C), Uydu da uydu yayınını (DVB-S/S2) ifade ediyor. Evine hangi kablo geliyorsa o tipi seçmen gerekiyor."
  - q: "LCN açılırsa ne olur?"
    a: "Kılavuzun bir model grubunda, karasal ve kablo otomatik taramasında karşına LCN seçeneği çıkıyor. Kılavuza göre LCN açılırsa kanal numaraları kilitleniyor ve sonradan değiştirilemiyor. Kanalları kendin sıralamak istiyorsan taramadan önce bunu düşün."
  - q: "Kumandadaki TV tuşu ne işe yarar?"
    a: "Skytech kılavuzunda TV tuşu, yayın modundayken anten türleri (hava, kablo, uydu) arasında geçiş yapıyor; Smart TV ekranındayken uydu moduna geçiriyor. Kanal listesi boş görünüyorsa önce doğru anten türünde olup olmadığına bak."
  - q: "Google TV'li Skytech'te kanal tarama nerede?"
    a: "Skytech'in Google TV kılavuzunda kanal kurulum menüsü Kanal ve girişler başlığı altında. Kanallar'a girip Analog, Anten ya da Kablo gibi tarama türünü seçiyorsun. İlk kurulumda tarama atlandıysa kılavuza göre tarama sonradan bu menüden yapılabiliyor."
images:
  coverAlt: "Oturma odasında televizyon ekranında açık duran kanal ayarları menüsü"
  steps:
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda anten girişi ve kablo"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda anten girişi ve kablo"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda temizleme bezi"
---

Skytech televizyonu yeni kurdun, taşındın ya da kanallar bir sabah kayboldu. Kanal ayarlama Skytech'te kanal menüsünden yapılıyor; menünün görünümü ise model grubuna göre değişiyor. Bu yazıda Skytech'in kendi sitesinde yayımladığı Android TV kullanma kılavuzundaki kanal menüsü adımlarını topladık; Google TV'li modeller için farklı olan yolu da ayrıca not ettik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** MENU, Kanal Menüsü, Anten Tipi (Hava, Kablo ya da Uydu), Tara. Karasal ve kabloda LCN açılırsa kanal numaraları kilitlenir. Uyduda önce uydu ve LNB seçilir, sonra otomatik arama başlar.

## Hangi yayın, hangi seçenek

| Kılavuzdaki adı | Yayın türü | Tarama seçenekleri |
|---|---|---|
| **Hava** | Karasal (DVB-T/T2) | Otomatik tarama, elle tarama, LCN |
| **Kablo** | Kablo TV (DVB-C) | Tam Tarama ya da Ağ Taraması, elle tarama |
| **Uydu** | Uydu (DVB-S/S2) | Ağ ya da kör tarama, LNB ekleme, elle transponder araması |

## Adım adım: Skytech TV'de kanal ayarlama

**1. Model grubunu öğren.** Kılavuz birden fazla Android model grubunu kapsıyor ve kanal menüsünün yerleşimi gruplar arasında küçük farklar gösteriyor. Örneğin bir grupta seçenekler "Anten Tipi" ve "Tara" altında toplanırken, başka bir grupta uydu, karasal ve kablo için ayrı menü sayfaları açılıyor. Televizyonun arkasındaki etikette yazan model kodu hangi bölümün senin için geçerli olduğunu gösterir.

**2. Kabloyu doğru girişe tak.** Kılavuz taramaya başlamadan önce, kullanacağın yayın tipine ait anten kablosunun televizyonun uygun anten girişine bağlı olduğundan emin olmanı istiyor. Kılavuzun bağlantı tablolarında uydu alıcı anten girişi (LNB) ile karasal anten girişi ayrı satırlarda gösteriliyor: uydu kablosu LNB girişine, karasal ya da kablo TV kablosu anten girişine gider. Kablo yanlış girişteyse tarama hiçbir kanal bulamaz; girişlerin yeri modele göre değiştiği için arka paneldeki yazılara bakarak tak.

**3. Kanal menüsünü aç.** Kumandada MENU tuşuna bas, sağ ve sol yön tuşlarıyla **Kanal Menüsü**'nü seç ve OK/ENTER ile gir. Kılavuza göre bu menüden yayın seçimi (DVB-T/T2, DVB-S/S2 ya da DVB-C), çanak anten ayarı ve kanal ayarları yapılıyor.

**4. Anten tipini seç.** **Anten Tipi** satırında Hava, Kablo ya da Uydu seçeneklerinden birini işaretle. Kumandadaki **TV** tuşu da yayın modundayken bu anten türleri arasında geçiş yapıyor; bir türde kanal varken öbür türde liste boş görünebilir, bu yüzden hangi türde olduğuna bak.

**5. Otomatik taramayı başlat.** **Tara** bölümünde otomatik ya da elle kanal arama yaptırabilirsin. Kılavuza göre analog tarama analog yayınlanan kablo ya da karasal kanalları, dijital tarama dijital yayınlanan kanalları arıyor. Bir model grubunda karasal ve kablo otomatik taramasında **LCN** seçeneği çıkıyor: açarsan kanal numaraları kilitleniyor ve sonradan değiştirilemiyor. Kabloda Tarama Modu "Tam Tarama" seçilirse bütün frekans bandı taranıyor; "Ağ Taraması" seçilirse operatörünün verdiği ağ parametrelerini girmen gerekiyor. Seçimi yapınca **Taramayı Başlat**'a gelip ENTER'a bas.

**6. Uydu araması.** Anten tipini Uydu yap. Tarama modu olarak ağ ya da kör (gizli) tarama, kanal türü olarak şifresiz, şifreli ya da tümü, servis tipi olarak radyo, TV ya da tümü seçilebiliyor. **LNB Ekle** menüsünde taramak istediğin uyduyu seçip OK'a bas, sağ yön tuşuyla sağdaki pencereye geçip DiSEqC 1.0 ayarını yap. Sonra **Tüm LNB'ler İçin Otomatik Ayarlamayı Başlat**'ı seç; kılavuza göre arama bitince kanallar kendiliğinden kaydediliyor. Uydu ayarının ayrıntısı [Skytech TV uydu ayarlama](/blog/skytech-tv-uydu-ayarlama/) yazısında.

**7. Listeyi düzenle.** Tarama bitince kanal listesine gir, yön tuşlarıyla bir kanal seç ve menü tuşuna bas. Açılan alt menüden kanalı taşıyabilir, en üste alabilir, silebilir, favorilere ekleyebilir ya da atlayabilirsin. Sıralamanın ayrıntısı [Skytech TV kanal taşıma](/blog/skytech-tv-kanal-tasima/) yazısında.

## Google TV'li modellerde yol farklı

Skytech'in Google TV kılavuzunda kanal kurulumu **Kanal ve girişler** başlığında duruyor: Kanallar'a girip Analog, Anten ya da Kablo gibi tarama türünü seçiyorsun. İlk kurulumdaki ayar adımında Anten, Kablo ya da Uydu seçilerek tarama yapılıyor; "Atla" dendiyse kılavuza göre tarama sonradan menüden yapılabiliyor. Bu kılavuzun ana sayfa adımlarında, TV kaynağındayken Kanallar ve **Yeni Kanallar Mevcut** seçeneği de geçiyor.

## Ne zaman servis

- Kablo doğru girişte, anten tipi doğru seçili ama tarama hiç kanal bulmuyorsa
- Aynı kablo başka bir televizyonda kanal veriyor ama Skytech'te vermiyorsa
- Tarama menüsü açılmıyor ya da tarama yarıda donuyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kablo, anten tipi, tarama ve kanal listesi sende. Çanak yönlendirme, LNB değişimi ve bina anten tesisatı uzmanın; televizyonun alıcı devresi Skytech yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun model kodu ne?
2. Yayın karasal mı, kablo mu, uydu mu?
3. Hangi tarama türünü denedin, LCN açık mıydı?
4. Aynı kablo başka bir televizyonda çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ekranda hiç görüntü yoksa [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/), HDMI'dan bağlı cihaz görünmüyorsa [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) yazısına bak. Bil, gör, çağır.
