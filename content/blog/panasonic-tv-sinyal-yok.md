---
title: "Panasonic TV sinyal yok, kanallar gelmiyor: ne yapmalı?"
description: "Panasonic TV'de sinyal yok ya da görüntü mozaikliyse kılavuzun sırası: giriş modu, anten ve çanak, Sinyal Durumu, yeniden başlatma, kanal arama."
slug: "panasonic-tv-sinyal-yok"
date: "2026-10-23"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0'da "panasonic" geçen slug/başlık/gövde yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "panasonic tv s" → 1. panasonic tv sinyal yok, 2. panasonic tv servis, 3. panasonic tv ses var
#   görüntü yok. "panasonic tv sinyal" → 1. panasonic tv sinyal yok. GSC: panasonic satırı yok.
# Belge: Panasonic eHELP (TR, TX-55MX950E / MX serisi, TQB5ZA0038TUR-E, 379 s.), bu koşuda HTTP 200, md5 f2011467298c9e7275a426ff7e31bd58.
# BİLEREK YAZILMAYANLAR: HDMI sorunlarının ayrıntısı (tv-hdmi-sinyal-yok sayfasında) · çanak yönlendirme açıları · kart/tuner teşhisi
#   · fiyat (#46). Alıntı denetimi: panasonic-tv-sinyal-yok.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Televizyonun eHELP kılavuzu"]
steps:
  - "AV tuşuyla doğru giriş modunun seçili olduğunu, TV tuşuyla doğru yayın modunda olduğunu kontrol et."
  - "Televizyonun fişini çekip anten ve uydu kablolarının yerine oturduğunu kontrol et."
  - "Kanal Tarama Menüsü'nden Sinyal Durumu'nu aç ve sinyal kalitesine bak."
  - "Anten aradaki bir cihaz üzerinden geliyorsa doğrudan televizyona bağla."
  - "Kurulum > Sistem Menüsü > Yeniden Başlat ile televizyonu yeniden başlat."
  - "Hâlâ kanal yoksa Otomatik Ayar ile kanalları yeniden arat."
  - "Faulty dish mesajı ya da sürekli zayıf sinyal varsa çanak ve kabloyu bir anten kurulumcusuna kontrol ettir."
faq:
  - q: "Panasonic TV'de sinyal yok yazıyor, ilk ne yapmalıyım?"
    a: "MX serisi eHELP'ine göre önce doğru giriş modunun seçildiğine ve kabloların yerine iyi takıldığına bakılır. Dijital yayında anten ya da çanağın konumu, yönü ve bağlantısı kontrol edilir, sonra Sinyal Durumu'ndan sinyal kalitesine bakılır."
  - q: "Televizyon kendi kendine bekleme moduna geçiyor, sinyalle ilgisi var mı?"
    a: "Olabilir. Kılavuza göre Sinyal yoksa kapat ayarı Açık iken 10 dakika boyunca sinyal alınmaz ve işlem yapılmazsa televizyon gereksiz güç tüketimini önlemek için Bekleme moduna geçer. Bekleme moduna girmeden 3 dakika önce uyarı mesajı gösterilir."
  - q: "Sinyal Gücü iyi görünüyor ama kanal yine bozuk, neden?"
    a: "Kılavuzun Sinyal Durumu sayfasında açıkça 'İyi bir Sinyal Gücü uygun sinyal alımı olduğunu göstermez' yazıyor. Sinyal Kalitesi düzeyi düşükse DVB sinyali güçsüzdür."
  - q: "Ekranda Faulty dish mesajı çıkıyor, ne demek?"
    a: "Kılavuza göre uydu kablosu kısa devre yapıyor ya da kablo bağlantısında sorun olabilir. Fişi çekip televizyonu kapat, kablo bağlantısını kontrol et ve tekrar aç. Mesaj sürerse bir çanak anten kurulumcusundan çanağı ve kabloyu kontrol etmesini iste."
  - q: "Yağmurda kanallar gidiyor, televizyon mu bozuk?"
    a: "Kılavuza göre hava durumu, özellikle zayıf alım bölgelerinde sinyal alımını etkiler; şiddetli yağmur ve kar gibi. İyi havada bile yüksek basınç bazı kanalların zayıf alınmasına yol açabilir."
images:
  coverAlt: "Karanlık salonda açık duran geniş bir televizyon, ekranda boş bir mesaj kutusu"
  steps:
    - "Sehpada duran siyah bir televizyon kumandası ve arkada açık ekran"
    - "Televizyonun arka panelindeki anten ve uydu girişlerine takılı kablolar"
    - "Televizyon ekranında çubuk göstergeli sade bir sinyal ekranı"
    - "Televizyonun yanında duran küçük bir uydu alıcı kutusu ve kabloları"
    - "Ekranında sistem menüsü açık bir televizyon"
    - "Televizyon ekranında ilerleme çubuğu gösteren bir kanal arama ekranı"
    - "Çatıda gökyüzüne dönük bir uydu çanak anteni"
---

Panasonic televizyonu açtın, kanal yerine siyah ekran ya da "sinyal yok" benzeri bir uyarı geldi. Bazen görüntü mozaikleşip donuyor, bazen bazı kanallar hiç bulunamıyor. Panasonic'in MX serisi (TX-55MX950E) Türkçe eHELP kılavuzu bu belirtileri "Sık Sorulan Sorular" bölümünde dijital ve analog yayın için ayrı ayrı ele alıyor. Bu yazıda o kontrolleri evde yapılacak sıraya dizdik. Kılavuz bu seriye ait; menü adları başka modellerde farklı olabilir. Sorun HDMI'ya bağlı bir cihazdaysa [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) yazısı daha uygun.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Giriş modunu kontrol et, kabloları fiş çekiliyken yerine oturt, **Sinyal Durumu**'na bak, anteni doğrudan televizyona bağla, **Kurulum > Sistem Menüsü > Yeniden Başlat** yap, gerekirse kanalları yeniden arat. Faulty dish mesajı ya da sürekli zayıf sinyal varsa çanağı bir anten kurulumcusuna kontrol ettir.

## Belirti ne söylüyor

| Gördüğün | Kılavuza göre olası sebep | Ne yapılır |
|---|---|---|
| **Hiçbir görüntü yok** | Yanlış giriş modu, kablo, ışık ayarları | 🛠️ Giriş ve kabloları kontrol et |
| **Mozaik, donan görüntü** | Anten ya da çanak, zayıf DVB sinyali, hava | 🛠️ Anten ve Sinyal Durumu |
| **Bazı kanallar ayarlanamıyor** | Anten yönü, zayıf sinyal | 🛠️ Anten, sonra yeniden başlat |
| **Faulty dish mesajı** | Uydu kablosu kısa devre ya da bağlantı | 🛠️ Fişi çek, kabloyu kontrol et |
| **TV Rehberi boş** | Dijital verici | Antenin yönünü kontrol et |
| **10 dakika sonra beklemeye geçiyor** | Sinyal yoksa kapat ayarı | Ayarı kontrol et |

## Adım adım: sinyali geri getir

**1. Giriş ve mod.** Kılavuzun "Hiçbir görüntü görüntülenmiyor" satırındaki ilk kontrol: **doğru giriş modunun seçildiğini** kontrol et. Giriş seçme menüsü **AV** tuşuyla açılıyor; yayın moduna dönmek için **TV** tuşu kullanılıyor. TV tuşuyla DVB-S (uydu), DVB-C (kablo), DVB-T (karasal) ve Analog arasında da geçiliyor; çanak bağlıyken karasal modda kalmak kanalsız ekran demektir (çıkarım). Aynı satır, Işık Seviyesi, Kontrast ve Parlaklığın en düşüğe ayarlanıp ayarlanmadığına da bakmanı istiyor.

**2. Kablolar.** Kılavuzun bağlantı sayfalarındaki uyarı: herhangi bir kablo bağlamadan ya da çıkarmadan önce **cihazın fişinin prizden çekilmiş** olduğunu kontrol et. Uydu kablosu **Uydu IN 1** (çift tunerde IN 1 ve IN 2) terminaline, karasal anten ya da kablo yayını **RF kablosuyla** anten girişine takılır. Gerekli tüm kabloların yerine iyi oturduğundan emin ol.

**3. Sinyal Durumu.** **Kurulum > Kanal Tarama Menüsü > Sinyal Durumu** seçilen kanalın sinyal durumunu gösterir. Kılavuza göre **Sinyal Kalitesi** düzeyi düşükse DVB sinyali güçsüzdür. Aynı sayfadaki uyarı önemli: **iyi bir Sinyal Gücü uygun sinyal alımı olduğunu göstermez**. Yani bakman gereken değer kalite.

**4. Anteni doğrudan bağla.** Kılavuz, anteni set üstü kutu ya da DVD gibi bir cihaz üzerinden bağlamak yerine **doğrudan televizyona bağlamanın** sinyal kalitesini yükseltebileceğini yazıyor. Anten ya da çanağın **konumu, yönü ve bağlantısı** da ilk kontrol listesinde. Hava durumu, özellikle zayıf alım bölgelerinde, sinyali etkiler; şiddetli yağmur ve kar gibi.

**5. Yeniden başlat.** Dijital ve analog yayın sorularının ikisinde de aynı öneri var: ana menüde **Kurulum > Sistem Menüsü > Yeniden Başlat** öğesini seçip televizyonu yeniden başlat. Bu, menüden yapılan bir yeniden başlatma; fişi çekmekten farklı bir adım.

**6. Kanalları yeniden arat.** Kanal listesi silinmiş ya da eksikse **Otomatik Ayar** kullanılır. Kılavuz bulanık ya da bozuk görüntü için de "kanalları sıfırlayın" diyerek aynı yolu gösteriyor. Otomatik Ayar o moddaki eski kanal ayarlarını siler; adımlar [Panasonic TV kanal arama](/blog/panasonic-tv-kanal-arama/) yazısında. Uyduda Otomatik Ayar tam yapılamıyorsa kılavuz bağlantıları ve çanak anten ayarını kontrol etmeyi, sorun sürerse bayiye danışmayı öneriyor.

**7. Faulty dish ya da kalıcı zayıf sinyal.** Ekranda **Faulty dish** mesajı görüntüleniyorsa kılavuza göre **uydu kablosu kısa devre** yapıyor ya da kablo bağlantısında sorun olabilir. Fişi prizden çıkararak televizyonu kapat, kablo bağlantısını kontrol et, tekrar aç. Mesaj sürerse bir **çanak anten kurulumcusundan** çanağı ve kabloyu kontrol etmesini iste.

## Televizyon kendi kendine kapanıyorsa

Kılavuzdaki **Sinyal yoksa kapat** ayarı Açık iken **10 dakika** boyunca sinyal alınmaz ve işlem yapılmazsa televizyon **Bekleme** moduna geçer; geçmeden **3 dakika** önce uyarı mesajı çıkar. Yol: **MENU > Ana Menü > Zamanlayıcı > Sinyal yoksa kapat**. Ayrı bir **Oto. Bekleme** ayarı da 4 saat boyunca işlem yapılmazsa televizyonu beklemeye alıyor. Sinyal sorununu çözmeden bu ayarı kapatmak yalnız belirtiyi gizler (çıkarım). Ses var ama görüntü yoksa [televizyonda ses var görüntü yok](/blog/televizyonda-ses-var-goruntu-yok/) yazısına bak.

## Ne zaman servis

- Anten doğrudan bağlı, Sinyal Kalitesi iyi ama hiçbir kanal gelmiyorsa
- Bütün girişlerde hiç görüntü yoksa
- Ekranda sürekli bir hata mesajı çıkıyor ve mesajın talimatı işe yaramıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, menü ve kabloların yerine oturması sende; çanağın yönlendirilmesi anten kurulumcusunun, televizyonun içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Televizyonun modeli ne?
2. Uydu mu, kablo mu, karasal anten mi kullanıyorsun?
3. Sinyal Durumu'nda kalite düzeyi ne gösteriyor?
4. Ekranda bir mesaj var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
