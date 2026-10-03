---
title: "Samsung televizyon açılmıyor: evde kontrol"
description: "Samsung TV açılmıyorsa e-Kılavuzun kontrolleri: güç kablosunun iki ucu, kumanda pili ve şarjı, kumandayı yeniden eşleme, anten kablosu, uydu kutusu."
slug: "samsung-televizyon-acilmiyor"
date: "2026-10-03"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2, televizyon). Belge bu koşuda (10:4x) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Samsung'un kendi alan adı: bağlantı samsung.com/tr/support/model/QE65S90CATXTK/ destek sayfasında; org.downloadcenter.samsung.com → downloadcenter.samsung.com yönlendirmesi.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-tv-3eki/samsung-1.pdf · pdftotext -layout; sayfa = PDF sayfası = basılı "- N -" numarası.
#  S1) Samsung TV "Kullanıcı kılavuzu" (e-Manual) Türkçe, BN81-27185C-680 (2025-10 baskı), 313 s., md5 03df07cf22f30da3db8dc896307fa67a
#      https://downloadcenter.samsung.com/content/UM/202511/20251118094733324/BN81-27185C-680_EUG_ROPDVBEUF_EU_TUR_251022.0.pdf
#      s.255 "Açılmıyor · TV'inizi açmada sorunlar yaşıyorsanız, servis bölümünü aramadan önce yapabileceğiniz birkaç kontrol vardır." / "TV'nin güç kablosunun her iki ucunun düzgün takıldığını ve uzaktan kumandanın normal çalıştığını onaylayın." / "Anten kablosunun veya kablolu TV kablosunun sıkıca bağlandığından emin olun." / "Bir kablolu yayın kutusu veya uydu kutunuz varsa takılı ve açık olduğunu onaylayın." / "TV'nizin modeli One Connect Box'ı destekliyorsa TV'yi One Connect Box'a bağlayan One Connect Kablosu'ı veya TV ile One Connect Box arasındaki bağlantıyı kontrol edin."
#      s.255 "TV kapatılamaz. · Bazı modellerde, Power düğmesine basıldığında ve tutulduğunda TV'yi kapatabilirsiniz. Sanat modundan TV moduna veya tam tersi geçiş yapmak için TV açıkken Power düğmesine kısa basın." / "Bu işlev modele bağlı olarak desteklenmeyebilir."
#      s.274 "Uzaktan kumanda çalışmıyor. · Uzaktan kumanda ve TV arasındaki bağlantı kaybolabilir. · Samsung Akıllı Kumanda öğesini TV'in ön tarafına yöneltin, ardından [Geri] ile [Oynat/Duraklat] düğmelerini aynı anda 3 saniye veya daha uzun süre basılı tutun." (düğme simgeleri metin katmanında yok; sayfa görüntüsünden okundu: kıvrık geri oku + oynat/duraklat) / "Ayrıca, uzaktan kumanda düzgün çalışmıyorsa veya çok yavaş yanıt veriyorsa pil az veya bitmiş olabilir. · Alttaki USB bağlantı noktasını (C tipi) kullanarak uzaktan kumandayı şarj edin veya uzaktan kumandayı ters çevirerek güneş pilinin ışık görmesini sağlayın." / "Uzaktan kumandanın pilleri varsa yenileriyle değiştirin."
#      s.274 "TV'yi açmak için alttaki güç düğmesine basın" (mobil kumanda maddesi içinde)
#      s.289 "Servis isteme" (Destek Alma başlığı)
# YAKIN KOPYA: Samsung'un yayında televizyon sayfası yok; markasız tv-acilmiyor ile ve bugünkü kardeş vestel-televizyon-acilmiyor ile gövde karşılaştırması .KAYNAK.md'de (farklı belge satırları: One Connect, uydu kutusu, kumanda eşleme, Sanat modu).
# BİLEREK YAZILMAYANLAR: kumanda bağlantısını sıfırlama (ikinci tuş çiftinin simgesi görüntüden kesin okunamadı) · TV'nin alt tarafındaki güç düğmesinin yeri için genelleme (e-Kılavuz yalnız mobil kumanda maddesinde "alttaki güç düğmesi" diyor; adımda "TV üzerindeki güç düğmesi" diye verilmedi) · güç kartı, anakart (belgede yok) · fiyat.
# Alıntı denetim tablosu: samsung-televizyon-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "USB-C şarj kablosu (şarjlı kumandada)"]
steps:
  - "Güç kablosunun hem televizyondaki hem prizdeki ucunun düzgün takılı olduğunu kontrol et."
  - "Kumandan pilliyse pillerini yenileriyle değiştir."
  - "Kumandan şarjlı Samsung Akıllı Kumanda ise alttaki USB-C girişinden şarj et ya da ters çevirip güneş pilini ışığa tut."
  - "Akıllı Kumanda'yı televizyonun önüne yöneltip Geri ve Oynat/Duraklat düğmelerini aynı anda en az 3 saniye basılı tut."
  - "Anten kablosunun ya da kablolu TV kablosunun yerine tam oturduğundan emin ol."
  - "Kablolu yayın ya da uydu kutun varsa takılı ve açık olduğunu kontrol et."
  - "Modelin One Connect Box kullanıyorsa televizyonla kutu arasındaki One Connect kablosunu kontrol et."
faq:
  - q: "Samsung televizyon neden açılmaz?"
    a: "Samsung e-Kılavuzu 'Açılmıyor' başlığında servisi aramadan önce yapılacak kontrolleri sıralıyor: güç kablosunun iki ucunun düzgün takılı olması, kumandanın normal çalışması, anten ya da kablolu TV kablosunun iyi bağlanması, varsa kablolu yayın ya da uydu kutusunun takılı ve açık olması ve One Connect destekli modellerde One Connect kablosu."
  - q: "Samsung kumanda televizyonu açmıyor, ne yapmalıyım?"
    a: "e-Kılavuza göre kumanda ile televizyon arasındaki bağlantı kaybolmuş olabilir. Samsung Akıllı Kumanda'yı televizyonun önüne yöneltip iki düğmeyi aynı anda en az 3 saniye basılı tutarak yeniden bağlarsın. Kumanda yavaş tepki veriyorsa pili azalmış olabilir: şarjlı modeli USB-C ile şarj et ya da güneş pilini ışığa tut, pilli modelde pilleri yenile."
  - q: "Sanat modlu Samsung televizyonda güç tuşu neden televizyonu açıp kapatmıyor?"
    a: "Sanat modu olan modellerde e-Kılavuza göre televizyon açıkken güç düğmesine kısa basmak Sanat modu ile TV modu arasında geçiş yapar; bazı modellerde televizyonu kapatmak için güç düğmesini basılı tutman gerekir. Güç düğmesinin davranışı Ayarlar > Tüm Ayarlar > Genel ve Gizlilik > Uzaktan kumanda > Güç Düğmesi Seçeneği'nden değiştirilebiliyor."
  - q: "Kontrollerden sonra da açılmazsa ne olacak?"
    a: "e-Kılavuz bu kontrolleri servis bölümünü aramadan önce yapılacak işler olarak veriyor. Hepsi tamam olduğu hâlde televizyon açılmıyorsa e-Kılavuzun Destek Alma bölümündeki servis isteme yoluyla ya da doğrudan Samsung yetkili servisine başvur; televizyonun arka kapağını açma."
images:
  coverAlt: "Akşam ışığında oturma odasında kapalı, siyah ekranlı ince bir televizyon ve önündeki sehpada USB-C kablosuna takılı ince siyah bir kumanda"
---

Kumandanın güç tuşuna basıyorsun, ekran karanlık kalıyor. Samsung'un Türkçe televizyon e-Kılavuzu bu durumu sorun giderme bölümünde **"Açılmıyor"** başlığıyla veriyor ve şöyle başlıyor: **"TV'inizi açmada sorunlar yaşıyorsanız, servis bölümünü aramadan önce yapabileceğiniz birkaç kontrol vardır."** Listenin ilk maddesi iki şeyi birden istiyor: **"TV'nin güç kablosunun her iki ucunun düzgün takıldığını ve uzaktan kumandanın normal çalıştığını onaylayın."** Ardından anten kablosu, kablolu yayın ya da uydu kutusu ve One Connect kablosu geliyor. Kumandanın "normal çalışması" kısmını e-Kılavuzun kumanda sorunları sayfasıyla açıyoruz: pil, şarj ve yeniden eşleme.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Güç kablosunun iki ucu da takılı mı? Kumandanın pilini yenile ya da USB-C ile şarj et. Akıllı Kumanda'yı televizyona yöneltip Geri ve Oynat/Duraklat'a 3 saniye bas. Anten kablosu, uydu kutusu ve One Connect kablosunu kontrol et. Sürerse → Samsung yetkili servisi.

## Samsung'un listesi

| Samsung'un kontrolü | Ne yaparsın | Kimin işi |
|---|---|---|
| Güç kablosunun her iki ucu | Televizyon ve priz tarafını kontrol et | Senin |
| Uzaktan kumanda normal çalışıyor mu | Pil, şarj, yeniden eşleme | Senin |
| Anten ya da kablolu TV kablosu | Yerine tam oturduğundan emin ol | Senin |
| Kablolu yayın ya da uydu kutusu | Takılı ve açık mı bak | Senin |
| One Connect kablosu (destekleyen modelde) | Televizyon ile kutu arasındaki bağlantıyı kontrol et | Senin |
| Kontrollerin hepsi tamam, televizyon açılmıyor | Servis isteme | Samsung yetkili servisi |

## Adım adım: evde denenecekler

**1. Güç kablosunun iki ucu.** Güç kablosunun hem televizyondaki hem prizdeki ucunun düzgün takılı olduğunu kontrol et. Samsung "her iki ucu" diyerek televizyon tarafındaki girişi de ayrıca istiyor.

**2. Pilli kumanda.** Kumandan pilliyse pillerini yenileriyle değiştir. e-Kılavuz kumandanın düzgün çalışmaması ya da çok yavaş yanıt vermesini pilin azalmasına ya da bitmesine bağlıyor.

**3. Şarjlı kumanda.** Kumandan şarjlı Samsung Akıllı Kumanda ise alttaki USB-C girişinden şarj et ya da ters çevirip güneş pilini ışığa tut. Güneş pilli kumandanın kalan şarjı, televizyon açıldığında Ayarlar > Tüm Ayarlar > Genel ve Gizlilik > Uzaktan kumanda bölümünden görülebiliyor; bu özellik modele göre değişiyor.

**4. Kumandayı yeniden bağlama.** Akıllı Kumanda'yı televizyonun önüne yöneltip Geri ve Oynat/Duraklat düğmelerini aynı anda en az 3 saniye basılı tut. e-Kılavuza göre kumanda ile televizyon arasındaki bağlantı kaybolabiliyor ve bu işlem onu yeniden kuruyor.

**5. Anten kablosu.** Anten kablosunun ya da kablolu TV kablosunun yerine tam oturduğundan emin ol. Samsung bunu açılmama listesinde ayrı bir madde olarak veriyor.

**6. Uydu ya da kablo kutusu.** Kablolu yayın ya da uydu kutun varsa takılı ve açık olduğunu kontrol et.

**7. One Connect.** Modelin One Connect Box kullanıyorsa televizyonla kutu arasındaki One Connect kablosunu kontrol et. e-Kılavuz bu maddeyi yalnız One Connect destekleyen modeller için veriyor.

Sanat modu olan bir modelin varsa bir şeyi daha bil: e-Kılavuza göre televizyon açıkken güç düğmesine kısa basmak Sanat modu ile TV modu arasında geçiş yapar, bazı modellerde kapatmak için düğmeyi basılı tutmak gerekir.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Güç kablosu, kumanda pili, şarj, kumandayı yeniden bağlama, anten kablosu, uydu kutusu, One Connect kablosu | Senin, bu rehberdeki adımlar |
| Bütün kontroller tamam, televizyon yine açılmıyor | Samsung yetkili servisi |

⛔ Televizyonun arka kapağını açma. Güç kartı ve anakart kontrolü yetkili servisin işidir.

Markadan bağımsız anlatım [TV açılmıyor](/blog/tv-acilmiyor/) yazısında. Televizyon açılıyor ama kendini kapatıyorsa [televizyon kendi kendine kapanıyor](/blog/televizyon-kendi-kendine-kapaniyor/), açılıyor ama ekran zaman zaman kararıyorsa [Samsung televizyon ekranı kararıyor](/blog/samsung-televizyon-ekrani-karariyor/) yazısına bak.

---

**Kaynak künyesi.** "Açılmıyor", "TV kapatılamaz" ve "Uzaktan kumanda çalışmıyor" maddeleri Samsung'un samsung.com/tr destek sayfasından erişilen Türkçe televizyon e-Kılavuzundan (BN81-27185C) alınmıştır. Menü adları ve özellikler modele göre değişir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
