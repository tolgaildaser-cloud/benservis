---
title: "Vestel elektrikli ocak çalışmıyor"
description: "Vestel indüksiyonlu ya da vitroseramik ocak açılmıyor, tuşlara tepki vermiyor ya da kendini kapatıyorsa: sigorta, F ve L göstergesi, tuş kilidi, t uyarısı."
slug: "vestel-ocak-calismiyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ocak). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile statik.vestel.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adresler vestel.com.tr ürün sayfalarındaki kullanım kılavuzu bağlantısından (*_k.pdf = Türkçe kılavuz). Web araması yok. Sayfa = PDF sayfası.
#  V1) Vestel AO-6470 S 60 cm indüksiyonlu ankastre ocak  https://statik.vestel.com.tr/webfiles/20210044_k.pdf  27 s.  md5 6e4db4a2cc90868aa9df9dc2c933f18f  (ürün: /vestel-ao-6470-s-ankastre-ocak-p-169)
#  V2) Vestel AO-6330 S 60 cm vitroseramik ankastre ocak  https://statik.vestel.com.tr/webfiles/20210033_k.pdf  29 s.  md5 67db67c90616b1dc2bdf1e785711c31d  (ürün: /vestel-ao-6330-s-ankastre-ocak-p-168)
# Ana satırlar (V1 s.22 "Sorun Giderme"): "Ocağın kumanda kartının göstergesi karardı. Ocak ve yakma başlıkları açılamıyor." / "Enerji beslemesi yoktur." / "Cihazın sigortasını kontrol
#   ediniz." "Başka elektronik cihazları çalıştırmayı deneyerek elektrik kesintisi olmadığını kontrol ediniz." · "Ocak kullanılmadığı zaman kapanır ve her göstergede 'F' yanıp söner." /
#   "Kumandalar nemlidir ya da üzerine bir nesne bırakılmıştır." / "Kumandaları kurutunuz veya nesneyi kaldırınız." · "Kullanım sırasında ocak kapanıyor." / "Pişirme bölgelerinden biri çok
#   uzun zamandır açıktır." / "Yeniden açarak pişirme bölgesini tekrar kullanabilirsiniz." · "Ocağın kumandaları çalışmıyor ve çocuk kilidi LED'i yanıyor." / "Çocuk kilidi aktiftir." /
#   "Çocuk kilidini kapatınız."
#   V1 s.16 Cihazı Açma: "(20 saniye içinde bir pişirme bölgesi seçilmezse, ocak otomatik olarak kapanacaktır)." · V1 s.17 çocuk kilidi kapatma (Kayar Buton) · V2 s.19 Tuş Kilidi / Çocuk Kilidi /
#   Güvenlik Uyarısı Kontrolü ('F') · V2 s.20 Aşırı Isı Kontrolü ('t') · V2 s.24 Sorun Giderme.
# BİLEREK YAZILMAYANLAR: E1-EC / C1-C8 kodları (ayrı konu; çözümlerin çoğu "yetkili servis" ya da yalnız kapat-aç; fiş çekme adımı ankastrede alınmadı) · "elektrik bağlantısı
#   yanlış yapılmış olabilir" satırının teşhisi (servis) · AO-6470 tuş kilidi kapatma tarifi (belgede yalnız açma var) · fiyat.
# Alıntı denetim tablosu: vestel-ocak-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "Ocağın kullanım kılavuzu"]
steps:
  - "Gösterge tamamen karardıysa ocağın sigortasını kontrol et."
  - "Başka bir elektronik cihazı çalıştırarak evde elektrik kesintisi olmadığını doğrula."
  - "Her göstergede F yanıp sönüyorsa kumandaları kurula ya da üzerindeki nesneyi kaldır."
  - "Göstergelerde L görünüyorsa çocuk kilidini kılavuzdaki tuş sırasıyla kapat."
  - "Yalnız açma/kapama tuşu çalışıyor ve tuş kilidi lambası yanıyorsa tuş kilidini kapat."
  - "Ocağı açtıktan sonra 20 saniye içinde bir pişirme bölgesi seç."
  - "Kullanım sırasında kapanan bölgeyi yeniden açıp ayarla."
faq:
  - q: "Vestel ocağımın her göstergesinde F yanıp sönüyor."
    a: "Vestel'in AO-6470 kılavuzuna göre bu durumda kumandalar nemlidir ya da üzerine bir nesne bırakılmıştır; çözüm kumandaları kurutmak ya da nesneyi kaldırmak. AO-6330 kılavuzu da kontrol paneline sıvı dökülmesinin veya bir ya da daha fazla butona 12 saniye ya da daha uzun basılmasının ocağı bekleme moduna aldığını ve bütün ekranlarda 'F' yanıp söndüğünü yazıyor."
  - q: "Ekranda L yazıyor, hiçbir tuş çalışmıyor."
    a: "L, çocuk kilidinin etkin olduğunu gösterir. Vestel'in kılavuzlarına göre ocak kapatılıp açılsa da kilit açılana kadar kilitli kalır. Kapatma sırası modele göre değişir: AO-6470'te ocağı açıp kayar butonun sol ve sağ tarafına aynı anda, ardından sol tarafına basılıyor; AO-6330'da açma/kapama tuşuna ikaz sesi gelene kadar basılı tutup ısı artırma ve azaltma tuşlarına birlikte, hemen ardından ısı azaltma tuşuna basılıyor."
  - q: "Vitroseramik ocakta t harfi yanıp sönüyor."
    a: "Vestel'in AO-6330 kılavuzunda bu aşırı ısı kontrolü: sistemin zarar görmesini önlemek için ocak kendini kapatır ve göstergede 't' görünür. Sıcaklık belirli bir dereceye düşene kadar 't' yanıp söner; ocağın soğumasını bekle."
  - q: "Ocak açılıyor ama birkaç saniye sonra kendiliğinden kapanıyor."
    a: "AO-6470 kılavuzuna göre ocağı açtıktan sonra 20 saniye içinde bir pişirme bölgesi seçilmezse ocak otomatik olarak kapanır. Kullanım sırasında kapanıyorsa tablodaki neden bir bölgenin çok uzun süredir açık olması; bölgeyi yeniden açarak kullanmaya devam edebilirsin."
images:
  coverAlt: "Mutfak tezgâhına gömülü dört gözlü siyah cam ocağın kumanda şeridinde yanan küçük bir kilit ışığı"
---

Vestel ocağın tuşlarına basıyorsun ama ekran karanlık, ya da göstergelerde bir harf yanıp sönüyor ve göz ısınmıyor. Vestel'in ocak kılavuzlarında bu tabloların çoğu birer harfle işaretlenmiş: **F**, **L**, **t**. AO-6470 indüksiyonlu ocak kılavuzunun sorun giderme tablosu ilk satırda en temel durumu yazıyor: **"Ocağın kumanda kartının göstergesi karardı. Ocak ve yakma başlıkları açılamıyor."** Bu yazı, AO-6470 (indüksiyon) ve AO-6330 (vitroseramik) kılavuzlarındaki satırlara dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran karanlık → sigorta, elektrik kesintisi. **F** yanıp sönüyor → kumandalar ıslak ya da üstünde bir şey var. **L** → çocuk kilidi. Yalnız açma/kapama çalışıyor → tuş kilidi. **t** → aşırı ısı, soğumasını bekle. Açıp bıraktıysan → 20 saniyede bölge seç.

## Adım adım: evde denenecekler

**1. Sigortayı kontrol et.** Gösterge karardıysa tablonun nedeni **"Enerji beslemesi yoktur."**, ilk çözüm **"Cihazın sigortasını kontrol ediniz."**

**2. Elektrik kesintisini ayır.** Aynı satırın ikinci çözümü: **başka elektronik cihazları çalıştırmayı deneyerek** elektrik kesintisi olmadığını kontrol et.

**3. "F" görüyorsan kumandaları kurula.** Ocak kendiliğinden kapanıp her göstergede **F** yanıp sönüyorsa sebep **"Kumandalar nemlidir ya da üzerine bir nesne bırakılmıştır."** Çözüm: **kumandaları kurut ya da nesneyi kaldır.** AO-6330 kılavuzuna göre kontrol paneline sıvı dökülmesi ya da bir veya daha fazla tuşa **12 saniye veya daha uzun** basılması da ocağı bekleme moduna alır ve bütün ekranlarda F yanıp söner.

**4. "L" görüyorsan çocuk kilidini kapat.** Tablonun satırı: **"Ocağın kumandaları çalışmıyor ve çocuk kilidi LED'i yanıyor."** → **"Çocuk kilidini kapatınız."** Kilit, ocak kapatılıp açılsa da kalkmaz. AO-6470'te önce ocağı aç, **kayar butonun sol ve sağ tarafına aynı anda**, ardından **sol tarafına** bas; L kaybolur. AO-6330'da **açma/kapama tuşuna ikaz sesi gelene kadar** basılı tut, **ısı artırma ve azaltma tuşlarına aynı anda**, hemen ardından **ısı azaltma** tuşuna bas.

**5. Tuş kilidini kapat.** Tuş kilidi, ocak çalışırken yanlış dokunuşları engeller; açıkken **yalnız ocağı açıp kapatabilirsin**, diğer tuşlar çalışmaz. AO-6330 kılavuzuna göre ocağı kapatıp açmak tuş kilidini açmaz; iptal etmek için **tuş kilidi düğmesine bas**, uyarı lambası söner.

**6. 20 saniye içinde bölge seç.** AO-6470 kılavuzuna göre ocağı açınca tüm göstergeler **0** gösterir; **20 saniye içinde** bir pişirme bölgesi seçilmezse ocak kendiliğinden kapanır. Açtıktan sonra hemen kullanacağın gözü seç.

**7. Kapanan bölgeyi yeniden aç.** Kullanım sırasında ocak kapanıyorsa tablodaki neden **"Pişirme bölgelerinden biri çok uzun zamandır açıktır."** Çözüm: **yeniden açarak pişirme bölgesini tekrar kullanabilirsin.**

## Arıza sayılmayan durumlar

- **"t" uyarısı (vitroseramik):** AO-6330'un aşırı ısı kontrolü; ocak kendini kapatır, sıcaklık belirli bir dereceye düşene kadar **t** yanıp söner.
- **"H" göstergesi:** göz hâlâ sıcaktır; AO-6470 kılavuzu sıcaklık güvenli seviyeye düşene kadar ilgili göstergede **H** gösterildiğini yazıyor.
- **İndüksiyonda tıkırdama ya da tavadan gelen ses:** AO-6470 tablosuna göre pişirme kaplarında bu **normaldir** ve ne ocak ne de kap için risk oluşturur.
- **Aynı taraftaki iki gözün gücü kendiliğinden düşüyor:** iki bölge aynı anda **P** ya da **9** seviyesine alınınca izin verilen toplam güç aşılır ve güç düşürülür.

Göz ısınmıyor ve göstergede **U** yanıyorsa sorun tenceredir; ayrıntısı kardeş yazıda: [Vestel ocak U hatası](/blog/vestel-ocak-u-hatasi/). Markadan bağımsız liste için [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/).

## Ne zaman servis

- Sigorta açık, elektrik var, kilitler kapalı ama gösterge hâlâ yanmıyorsa: AO-6330 tablosuna göre ürünün **elektriksel bağlantısı yapılmamış olabilir**; bu durumda **yetkili servise** başvur.
- Ürün açıldıktan bir süre sonra sürekli kapanıyorsa: AO-6330 tablosu **elektrik bağlantısının yanlış yapılmış olabileceğini** yazıyor ve yine **yetkili servise** yönlendiriyor.
- Göstergede **E** ya da **C** ile başlayan bir kod tekrar tekrar çıkıyorsa.

Vestel'in yönlendirmesi: temel sorun giderme adımlarından sonra sorun sürüyorsa **Vestel İletişim Merkezi** ya da en yakın **Vestel Yetkili Servisi** ile iletişime geç. Kılavuza göre bakım ve onarım yalnız yetkili servis teknisyenlerince yapılmalıdır.

⛔ **Kendin-çöz sınırı burada biter.** Sigorta kontrolü, kurulama, kilitler ve yeniden açma kullanıcıya; elektrik bağlantısı, kumanda kartı ve ısıtıcılar servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
