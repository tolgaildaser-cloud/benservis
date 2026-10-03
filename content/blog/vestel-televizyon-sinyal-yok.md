---
title: "Vestel televizyonda sinyal yok, kanal gelmiyor"
description: "Vestel TV'de görüntü yok ya da kanal gelmiyorsa kılavuzun kontrolleri: giriş kaynağı, anten ve uydu girişi, kablo hasarı, sinyal bilgisi, kanal arama."
slug: "vestel-televizyon-sinyal-yok"
date: "2026-10-03"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2, televizyon). Belgeler bu koşuda (10:3x) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf, Vestel'in kendi alan adı statik.vestel.com.tr (adres yalnız belgenin yerini bulmak için web aramasıyla bulundu).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-tv-3eki/ · pdftotext -layout; sayfa = PDF sayfası.
#  V1) Vestel 43U9540 43" 4K Smart TV Kullanım Kılavuzu, 73 s., md5 5051f2408bc00470c905cab3dfc7b548 — https://statik.vestel.com.tr/webfiles/20277113_k.pdf
#      s.47 tablo "Görüntü yok." → "TV'nizin herhangi bir yayın almadığı anlamına gelir. | TV'nizin yayın aldığından emin olunuz." / "Anten bağlantısı yanlış olabilir. | Anten bağlantısının doğru şekilde yapıldığından emin olunuz." / "Anten kablosu zarar görmüş olabilir. | Anten kablosunun zarar görmediğinden emin olunuz." / "Anten bağlantısı için yanlış konektörler kullanılmış olabilir. | Yetkili bir kişinin anten bağlantısının düzgün yapıldığını kontrol etmesini sağlayınız." / "Uzaktan kumandada yanlış tuşlara basılmış olabilir. | Yeniden deneyiniz ve doğru tuşlara bastığınızdan emin olunuz." / "Doğru giriş kaynağı seçilmemiş olabilir. | Doğru giriş kaynağını seçtiğinizden emin olunuz."
#      s.46 tablo "Görüntü kalitesi kötü." → "Sinyal seviyesi düşük olabilir. | Düşük sinyal seviyesi görüntüde bozulmaya neden olabilir. Lütfen anten bağlantısını kontrol ediniz." / "Anten aynı anda iki harici cihaza bağlanmış olabilir. | Cihazlardan birini ayırınız."
#      s.47 "Giriş seçenekleri seçilemiyor." → "TV'nize bir cihaz bağlanmış olduğundan emin olunuz." / "AV kablolarının ve bağlantılarının doğru olduğundan emin olunuz."
#      s.13 "Farklı kaynaklar seçmek için, uzaktan kumandanızda bulunan Source tuşuna arka arkaya basınız."
#      s.17 "“Anten” veya “kablolu TV” ucunu TV'nin arkasındaki ANTEN GİRİŞİ (ANT.) soketine ya da uydu girişini TV'nin arka sol tarafında bulunan UYDU GİRİŞİNE (LNB) bağlayınız."
#      s.37 Kurulum Menüsü İçeriği → "Otomatik Kanal Arama (Yeniden Ayarlama) | Otomatik kanal arama seçeneklerini görüntüler. D. Anten: Havadan yayınlanan DVB kanallarını arar ve hafızaya alır. D. Kablo: ... Analog: ... Uydu: Uydu kanallarını arar ve hafızaya alır." / "Sinyal Bilgileri | Bu menü ögesini, sinyal seviyesi/kalitesi, ağ adı, vb. gibi kullanılabilir frekansların sinyalle ilişkili bilgileri izlemek için kullanabilirsiniz." / "TKGS Kurulumu ... Eğer kullanılamıyorsa, İlk Kurulumu tekrar yapınız ve Uydu Operatörü seçimini TKGS olarak yapınız." / "İlk Kurulum | Kayıtlı tüm kanalları ve ayarları siler, TV'yi fabrika ayarlarına sıfırlar."
#      s.12 "Uzun bir süre boyunca sinyal alınamadığı için TV otomatik olarak bekleme moduna geçti." (Sinyal Yok Zamanlayıcısı, Ayarlar>Cihazlar)
#  V2) Vestel HD 32T01900 Smart TiVo TV Kullanım Kılavuzu, 67 s., md5 0e66c6817169e6ce0c3280d53f0c1bc3 — https://statik.vestel.com.tr/webfiles/20300564_k.pdf — s.44 aynı "Görüntü yok." satırları.
# YAKIN KOPYA: Vestel'in yayında televizyon sayfası yok. Markasız tv-hdmi-sinyal-yok (HDMI elemesi) ve televizyon-goruntu-gelmiyor (arka ışık/panel) ile gövde karşılaştırması .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: çanak anten yönü/LNB ayarı (belgede kullanıcıya verilmiyor; çatı işi) · uydu frekans/sembol değerleri · İlk Kurulum'u adım olarak vermek (tüm kanal ve ayarları siler; yalnız SSS'de uyarıyla anıldı) · fiyat.
# Alıntı denetim tablosu: vestel-televizyon-sinyal-yok.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Kumandanın Source tuşuna arka arkaya basarak izlemek istediğin giriş kaynağını seç."
  - "Anten kablosunun televizyonun arkasındaki ANT. soketine, uydu kablosunun LNB girişine takılı olduğundan emin ol."
  - "Anten kablosunu boydan boya gözden geçir; ezik, kesik ya da hasar olup olmadığına bak."
  - "Anten kablosu aynı anda iki harici cihaza bağlıysa cihazlardan birini ayır."
  - "Kurulum menüsündeki Sinyal Bilgileri ekranından sinyal seviyesi ve kalitesine bak."
  - "Kurulum menüsünde Otomatik Kanal Arama'yı açıp anten, kablo ya da uydu kanallarını yeniden ara."
  - "Bağlantıda yanlış konektör kullanılmış olabileceğini düşünüyorsan anten bağlantısını yetkili bir kişiye kontrol ettir."
faq:
  - q: "Vestel televizyonda görüntü yok yazıyor, ne demek?"
    a: "Vestel kılavuzunun sorun giderme tablosu 'Görüntü yok' satırının ilk nedenini televizyonun herhangi bir yayın almaması olarak açıklıyor. Ardından anten bağlantısının yanlış yapılmış olması, anten kablosunun zarar görmesi, yanlış konektör kullanılması, kumandada yanlış tuşa basılması ve doğru giriş kaynağının seçilmemesi geliyor."
  - q: "Kanallar kayboldu, yeniden nasıl yüklerim?"
    a: "43U9540 kılavuzunda Kurulum menüsündeki Otomatik Kanal Arama (Yeniden Ayarlama) seçeneği dijital anten, dijital kablo, analog ve uydu kanallarını arayıp hafızaya alıyor. Kurulum menüsündeki İlk Kurulum seçeneği ise kayıtlı tüm kanalları ve ayarları silip televizyonu fabrika ayarlarına döndürüyor; onu yalnız gerçekten baştan kurmak istiyorsan kullan."
  - q: "TKGS menüsü görünmüyor, ne yapmalıyım?"
    a: "Vestel kılavuzuna göre TKGS Kurulumu, ilk kurulumda yapılan uydu operatörü seçimine bağlı olarak görünmeyebilir. Bu durumda kılavuz İlk Kurulumu yeniden yapıp uydu operatörü olarak TKGS'yi seçmeni öneriyor. İlk Kurulum kayıtlı kanalları ve ayarları sildiği için önce bunu göze al."
  - q: "Sinyal yokken Vestel televizyon kendini kapatıyor. Normal mi?"
    a: "Evet. 43U9540 kılavuzuna göre uzun süre sinyal alınamazsa televizyon otomatik olarak bekleme moduna geçer ve yeniden açıldığında bunu söyleyen bir mesaj gösterir. Bu davranış Ayarlar > Cihazlar menüsündeki Sinyal Yok Zamanlayıcısı'ndan değiştirilebiliyor."
  - q: "Görüntü var ama karlı ve bozuk geliyor. Bu da aynı sorun mu?"
    a: "Vestel kılavuzu bunu 'Görüntü kalitesi kötü' satırında ayrıca veriyor: düşük sinyal seviyesi görüntüde bozulmaya neden olabilir, anten bağlantısını kontrol etmen gerekir. Anten aynı anda iki harici cihaza bağlıysa birini ayırman, manuel arama yaptıysan frekans ayarını doğru girdiğinden emin olman isteniyor."
images:
  coverAlt: "Oturma odasında duvara monte bir televizyonun arkasına uzanan beyaz anten kablosu ve önde sehpada duran kumanda, ekran mavi bir boş görüntü gösteriyor"
---

Televizyon açılıyor ama kanal yerine boş bir ekran ya da sinyal uyarısı geliyor. Vestel kılavuzlarının sorun giderme tablosu bu durumu **"Görüntü yok."** satırında topluyor ve ilk nedeni açıkça yazıyor: **"TV'nizin herhangi bir yayın almadığı anlamına gelir."** Yani sorun çoğu zaman ekranda değil, yayının televizyona ulaştığı yoldadır. Tablo ardından anten bağlantısını, anten kablosunun hasarını, yanlış konektörü ve yanlış seçilmiş giriş kaynağını sayıyor. Bu yazıda bu satırları kılavuzun Kurulum menüsündeki Sinyal Bilgileri ve Otomatik Kanal Arama seçenekleriyle birlikte sıraya koyuyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Source tuşuyla doğru kaynağı seç. Anten kablosu ANT. soketinde, uydu kablosu LNB girişinde mi? Kabloda hasar var mı bak, anten iki cihaza birden bağlıysa birini ayır. Sinyal Bilgileri'nden seviyeye bak, Otomatik Kanal Arama yap. Konektör şüphesi varsa → anten bağlantısını yetkili kişiye kontrol ettir.

## Vestel'in tablosu

| Vestel'in yazdığı neden | Vestel'in çözümü | Kimin işi |
|---|---|---|
| Doğru giriş kaynağı seçilmemiş olabilir | Doğru giriş kaynağını seç | Senin |
| Kumandada yanlış tuşlara basılmış olabilir | Yeniden dene, doğru tuşlara bastığından emin ol | Senin |
| Anten bağlantısı yanlış olabilir | Anten bağlantısının doğru yapıldığından emin ol | Senin |
| Anten kablosu zarar görmüş olabilir | Kablonun zarar görmediğinden emin ol | Senin |
| Anten aynı anda iki harici cihaza bağlı (görüntü kalitesi kötü) | Cihazlardan birini ayır | Senin |
| Anten bağlantısı için yanlış konektörler kullanılmış olabilir | Yetkili bir kişiye kontrol ettir | Yetkili kişi |

## Adım adım: evde denenecekler

**1. Giriş kaynağı.** Kumandanın Source tuşuna arka arkaya basarak izlemek istediğin giriş kaynağını seç. Kılavuza göre harici bir cihaz bağladıktan sonra farklı giriş kaynaklarına bu tuşla geçiliyor; bağlı bir cihaz yoksa giriş seçenekleri seçilemeyebilir. Vestel tablosu kumandada yanlış tuşa basılmış olabileceğini de yazıyor; yeniden dene ve doğru tuşa bastığından emin ol.

**2. Anten ve uydu girişi.** Anten kablosunun televizyonun arkasındaki ANT. soketine, uydu kablosunun LNB girişine takılı olduğundan emin ol. 43U9540 kılavuzu anten ya da kablolu TV ucunun ANTEN GİRİŞİ (ANT.) soketine, uydu kablosunun televizyonun arka sol tarafındaki UYDU GİRİŞİ'ne (LNB) bağlandığını gösteriyor; girişlerin yeri modele göre değişebilir.

**3. Kablo hasarı.** Anten kablosunu boydan boya gözden geçir; ezik, kesik ya da hasar olup olmadığına bak. Vestel tablosunda "Anten kablosu zarar görmüş olabilir" ayrı bir neden olarak geçiyor.

**4. İki cihaz.** Anten kablosu aynı anda iki harici cihaza bağlıysa cihazlardan birini ayır. Vestel bunu bozuk görüntü satırında veriyor ve düşük sinyal seviyesinin görüntüde bozulmaya yol açabileceğini yazıyor.

**5. Sinyal bilgisi.** Kurulum menüsündeki Sinyal Bilgileri ekranından sinyal seviyesi ve kalitesine bak. Kılavuza göre bu ekran kullanılabilir frekansların sinyal seviyesi, kalitesi ve ağ adı gibi bilgilerini gösteriyor. Vestel'e göre düşük sinyal seviyesi görüntüde bozulmaya yol açabilir; bu durumda anten bağlantısını yeniden kontrol et.

**6. Kanal arama.** Kurulum menüsünde Otomatik Kanal Arama'yı açıp anten, kablo ya da uydu kanallarını yeniden ara. Bu seçenek dijital anten, dijital kablo, analog ve uydu kanallarını arayıp hafızaya alıyor. TKGS ile kanal güncelleme kullanıyorsan o da aynı menüde.

**7. Konektör.** Bağlantıda yanlış konektör kullanılmış olabileceğini düşünüyorsan anten bağlantısını yetkili bir kişiye kontrol ettir. Vestel tablosu bu nedeni kullanıcıya değil, yetkili kişiye bırakıyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Giriş kaynağı, kablo yerleşimi, kablo hasarı kontrolü, iki cihazdan birini ayırma, sinyal bilgisi, kanal arama | Senin, bu rehberdeki adımlar |
| Yanlış konektör şüphesi, çatıdaki anten ya da çanak | Yetkili bir kişi |
| Sinyal yerinde, kanallar bulunuyor ama ekran yine boş | Vestel İletişim Merkezi ya da yetkili servis |

⛔ Çatıya ya da balkon dışına çıkıp anten ve çanakla uğraşma; anten bağlantısının kontrolünü Vestel'in dediği gibi yetkili bir kişiye bırak.

HDMI'daki cihazdan görüntü gelmiyorsa [TV'de HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) yazısındaki kablo ve port elemesine bak. Ses geliyor ama ekran karanlıksa [televizyonda ses var görüntü yok](/blog/televizyonda-ses-var-goruntu-yok/), televizyon hiç açılmıyorsa [Vestel televizyon açılmıyor](/blog/vestel-televizyon-acilmiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Sorun giderme tablosu, anten ve uydu bağlantısı, giriş seçimi ve Kurulum menüsü içeriği (Otomatik Kanal Arama, Sinyal Bilgileri, TKGS, İlk Kurulum) Vestel'in statik.vestel.com.tr'deki 43U9540 ve HD 32T01900 Smart TiVo TV kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
