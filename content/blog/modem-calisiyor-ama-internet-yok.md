---
title: "Modem çalışıyor ama internet yok: TP-Link'e göre ne yapılır?"
description: "Modem ışıkları yanıyor ama internet yoksa TP-Link Archer VR300 kılavuzunun sırası: kablolar, arayüz girişi, IP ayarı, hesap bilgisi, MAC klonlama ve reset."
slug: "modem-calisiyor-ama-internet-yok"
date: "2026-11-10"
category: "Bilgisayar / yazıcı"
updated: "2026-11-10"
kisaCevap: "TP-Link Archer VR300 kılavuzuna göre Internet ışığı sönükse başarılı bir internet bağlantısı yoktur. Kılavuz 6 adımlık sıra veriyor: kabloları kontrol et, arayüze gir, servis sağlayıcıdan hesap bilgilerini teyit et, MAC adresini klonla, fabrika ayarına dön, en son teknik desteği ara."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 hafta sonu seti A; BOSLUK.md sürüm 4 #412 "modem çalışmıyor / açılmıyor / modem çalışıyor ama internet yok"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.321 dosya). Yakın: modem-dsl-isigi-yanip-sonuyor (DSL ışığı; bu yazı DSL sabit / Internet sönük durumunu ve bilgisayar tarafını ele alıyor), laptop-wifi-baglanmiyor, tv-internete-baglanmiyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "modem çalışıyor ama" #1 "…internet yok", #2 "…wifi gözükmüyor", #3 "…wifi yok", #4 "…internete bağlanmıyor", #5 "…internet ışığı yanmıyor", #6 "…bilgisayarda internet yok"; "modem ışıkları yanıyor ama internet yok" #1. GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200, ikisi de TP-Link'in kendi kılavuz sayfası (HTML, İngilizce): (A) TP-Link Archer VR300 V1.2 kullanım kılavuzu "Appendix: Troubleshooting" https://www.tp-link.com/en/user-guides/Archer-VR300_V1.2/troubleshooting md5 d44c0c29806f6df4fdfc5e3958d51a81 · (B) TP-Link Archer VR300 V1.2 kullanım kılavuzu Bölüm 1 https://www.tp-link.com/en/user-guides/Archer-VR300_V1.2/chapter-1-get-to-know-about-your-modem-router md5 378ad4be0600fe719a0b30fe762eaa37.
# MODEL SINIRI: Yalnız Archer VR300 yazıldı; operatör modemlerinin ışık dili ve arayüzü belgelenmedi, genellenmedi.
# BİLEREK YAZILMAYANLAR: VPI/VCI değerleri, PPPoE kullanıcı adı/şifre girişi ayrıntısı · Windows XP adımları · bina içi hat onarımı (servis sağlayıcı işi) · fiyat (#46).
# Alıntı denetimi: modem-calisiyor-ama-internet-yok.KAYNAK.md
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Bilgisayar", "Ethernet kablosu"]
steps:
  - "Modemin ışıklarını tabloyla eşleştir."
  - "Telefon hattı, Ethernet kablosu ve güç adaptörü bağlantılarını kontrol et."
  - "Modemin arayüzüne girip giremediğine bak."
  - "Bilgisayarı IP adresini otomatik alacak şekilde ayarla."
  - "Servis sağlayıcından bağlantı türü ve hesap bilgilerini teyit et."
  - "Hesabın tek bir cihaza bağlıysa MAC adresini klonla."
  - "Sorun sürerse modemi fabrika ayarına döndürüp yeniden kur."
faq:
  - q: "Modem ışıkları yanıyor ama internet yoksa ne demek?"
    a: "TP-Link Archer VR300 kılavuzuna göre DSL ışığı sabitse hat eşleşmesi tamamdır; Internet ışığı sönükse başarılı bir internet bağlantısı yoktur. Bu durumda sorun hattın eşleşmesinde değil, internet bağlantısının kurulmasındadır."
  - q: "Modemin arayüzüne giremiyorsam ne yapmalıyım?"
    a: "Archer VR300 kılavuzu modemin bilgisayara doğru bağlandığını, bilgisayarın IP ve DNS adresini otomatik aldığını ve adresi doğru yazdığını kontrol etmeni istiyor. Olmazsa başka tarayıcı ya da bilgisayar dene."
  - q: "MAC adresi klonlama ne işe yarar?"
    a: "Archer VR300 kılavuzuna göre servis sağlayıcın internet hesabını tek bir MAC adresine bağladıysa yalnız o bilgisayar internete çıkabilir. MAC Clone ile modem o adresi kullanır ve diğer cihazlar da aynı hesapla internete çıkar."
  - q: "Wi-Fi ağım görünmüyorsa ne yapmalıyım?"
    a: "Archer VR300 kılavuzu dizüstündeki kablosuz özelliğin açık ve kablosuz bağdaştırıcı sürücüsünün kurulu olduğunu kontrol etmeni istiyor. Başka ağlar görünüyor ama seninki görünmüyorsa modeme yaklaş ve ağ adının gizli olmadığını kontrol et."
images:
  coverAlt: "Sade modem ve yanında hava akımı simgesi çizimi"
  steps:
    - "Modemin ön ışıklarına bakan beyaz eldivenli sade siluet el"
    - "Modemin arkasındaki kabloları yoklayan beyaz eldivenli sade siluet el"
    - "Dizüstü bilgisayarda tarayıcı açan beyaz eldivenli sade siluet el"
    - "Dizüstü bilgisayarda ağ ayarlarını açan beyaz eldivenli sade siluet el"
    - "Telefonla arama yapan beyaz eldivenli sade siluet el, yanında modem"
    - "Dizüstü bilgisayarda ayar sayfasında seçim yapan beyaz eldivenli sade siluet el"
    - "Modemin arkasındaki küçük düğmeye basan beyaz eldivenli sade siluet el"
---

Modem çalışıyor ama internet yoksa önce Internet ışığına bakarsın. TP-Link Archer VR300 kılavuzuna göre DSL ışığı sabitse hat eşleşmesi tamamdır, Internet ışığı sönükse başarılı bir internet bağlantısı kurulamamıştır. Kılavuzun sorun giderme ekinde bu durum için 6 adımlık bir sıra var.

Bu sıra kablolar, modemin arayüzü, servis sağlayıcıdan alınan hesap bilgileri, MAC adresi klonlama, fabrika ayarı ve en son teknik destekten oluşuyor. Işık dili ve menü adları markaya göre değişir; aşağıdakiler yalnız Archer VR300'e aittir. Operatörden aldığın modem başka markaysa **kendi modelinin kılavuzu esastır.**

> ⚠️ **Sınır.** Bu yazı kullanıcı kontrollerini anlatıyor. Bina içi telefon hattı, dış hat ve santral servis sağlayıcının işidir; modemi açmak ya da güç adaptörünü onarmak servis işidir.

## Modem ışıkları internet hakkında ne söyler?

| Işık | Durum | Archer VR300'e göre anlamı |
|---|---|---|
| Power | Sabit | Sistem başarıyla açıldı |
| DSL | Sabit | Hat eşleşmesi tamam |
| DSL | Sönük | DSL portunda bağlantı yok ya da eşleşme başarısız |
| Internet | Sabit | İnternet hizmeti kullanılabilir |
| Internet | Sönük | Başarılı bir internet bağlantısı yok |
| LAN | Sabit | En az bir kablolu cihaz bağlı |

Kaynak: TP-Link Archer VR300 kılavuzu, Bölüm 1.

## Adım adım: modem çalışıyor ama internet yoksa ne yapılır?

**1. Modemin ışıklarını tabloyla eşleştir.** DSL ışığı sönük ya da yanıp sönüyorsa sorun hat eşleşmesindedir; bunun için [modem DSL ışığı yanıp sönüyor](/blog/modem-dsl-isigi-yanip-sonuyor/) yazısındaki sıraya bak. DSL sabit, Internet sönükse aşağıdaki adımlarla devam et.

**2. Telefon hattı, Ethernet kablosu ve güç adaptörü bağlantılarını kontrol et.** Sorun giderme ekinin ilk maddesi tüm bağlantıların sağlam olduğundan emin olmak: telefon hattı, Ethernet kabloları ve güç adaptörleri. Bölüm 1'e göre DSL portu splitter'a ya da doğrudan telefon prizine bağlanır; LAN portları bilgisayar ve diğer kablolu cihazlar içindir.

**3. Modemin arayüzüne girip giremediğine bak.** Tarayıcıda tplinkmodem.net adresini aç. Giremiyorsan kılavuz modemin bilgisayara doğru bağlandığını, girdiğin adresin doğru olduğunu kontrol etmeni, başka bir tarayıcı ya da bilgisayarla yeniden denemeni istiyor. Windows'ta İnternet Seçenekleri altındaki Bağlantılar sekmesinde "hiçbir zaman bağlantı çevirme" seçeneğini işaretlemeni de öneriyor.

**4. Bilgisayarı IP adresini otomatik alacak şekilde ayarla.** Kılavuz bilgisayarın IP adresini ve DNS sunucu adresini otomatik almasını şart koşuyor. Windows'ta ağ bağlantısının Özellikler penceresinde İnternet Protokolü Sürüm 4 (TCP/IPv4) satırına çift tıklayıp iki "otomatik al" seçeneğini işaretlersin. Mac'te Ağ ayarlarında TCP/IP sekmesinde IPv4'ü DHCP kullanacak şekilde ayarlarsın.

**5. Servis sağlayıcından bağlantı türü ve hesap bilgilerini teyit et.** Arayüze girebildiğin hâlde internet yoksa kılavuz servis sağlayıcına danışmanı istiyor. VPI/VCI değerlerinin, bağlantı türünün, hesap kullanıcı adının ve şifrenin doğru olduğundan emin ol. Yanlış bir değer varsa düzeltip yeniden dene.

**6. Hesabın tek bir cihaza bağlıysa MAC adresini klonla.** Kılavuza göre bazı servis sağlayıcılar internet hesabını tek bir MAC adresine bağlar ve yalnız o bilgisayarın internete çıkmasına izin verir. Advanced > Network > Internet sayfasındaki MAC Clone bölümünde, o bilgisayardan bağlanıyorsan geçerli bilgisayarın adresini kullanmayı, adresi biliyorsan elle girmeyi seçersin.

**7. Sorun sürerse modemi fabrika ayarına döndürüp yeniden kur.** Kılavuz bu adımda modemi fabrika ayarlarına döndürüp hızlı kurulum sihirbazıyla yeniden yapılandırmanı istiyor. Bölüm 1'e göre RESET düğmesine yaklaşık 2 saniye basmak modemi fabrika ayarına döndürür; fabrika ayarına dönen modemde sonradan yaptığın ayarlar silinir. Yeniden başlatma ile sıfırlama farkını "modem nasıl resetlenir" yazımız ayrıntılı anlatıyor. Sorun yine sürerse TP-Link teknik destekle görüş.

## Wi-Fi ağı görünmüyorsa ne yapılır?

Kılavuz önce dizüstündeki kablosuz özelliğin açık olduğunu ve kablosuz bağdaştırıcı sürücüsünün kurulu olduğunu kontrol etmeni istiyor. Başka ağlar görünüyor ama seninki görünmüyorsa modeme yaklaş ve ağ adının (SSID) gizli olmadığını kontrol et. Ağ görünüyor ama bağlanmıyorsa şifrenin büyük küçük harfe duyarlı olduğunu unutma. İlk bağlantıda istenen PIN, Wi-Fi şifresinden farklıdır ve genellikle modemin etiketinde yazar. Sinyal 1-3 çubuksa modemi bilgisayara yaklaştırıp yeniden dene; kablosuz kanalı 1, 6 ya da 11 yapmak diğer ağlardan gelen paraziti azaltır.

## Bu konuda hangi yazılara bakılır?

Modem ışıkları normal ama dizüstü bağlanmıyorsa [laptop Wi-Fi bağlanmıyor](/blog/laptop-wifi-baglanmiyor/), televizyon internete çıkmıyorsa [TV internete bağlanmıyor](/blog/tv-internete-baglanmiyor/) yazısına bak.

---

**Kaynak künyesi.** Sorun giderme sırası, arayüz girişi, IP ayarı, MAC klonlama ve Wi-Fi kontrolleri TP-Link Archer VR300 V1.2 kullanım kılavuzunun sorun giderme ekinden; ışık tablosu, portlar ve RESET düğmesi aynı kılavuzun 1. bölümünden alınmıştır. Kendi modeminin kılavuzu farklı bir sıra veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da internet gelmiyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
