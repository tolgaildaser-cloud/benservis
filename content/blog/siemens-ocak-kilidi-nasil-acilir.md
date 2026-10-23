---
title: "Siemens ocak kilitlendi: çocuk kilidi nasıl açılır?"
description: "Siemens indüksiyon ocak kilitlendi, tuşlara basınca tepki vermiyor mu? Kılavuza göre çocuk kilidi, otomatik kilit ve silme koruması nasıl kapatılır."
slug: "siemens-ocak-kilidi-nasil-acilir"
date: "2026-10-23"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme E). origin/main'de siemens-ocak-kilidi-nasil-acilir yok; Siemens ocakta yalnız
#   siemens-induksiyon-ocak-tencereyi-algilamiyor var. Kilit sorgusunu karşılayan sayfa yok.
# Arama kanıtı: GSC son 7 gün (https___www-6) "siemens ocak kilit açma" 7 gösterim, "siemens ocak kilidi nasıl açılır" 4 gösterim
#   (sayfamız yokken). Otomatik tamamlama (bu koşu, hl=tr gl=tr): "siemens ocak kilit" → "siemens ocak kilitlendi nasıl açılır",
#   "siemens ocak kilit açma", "siemens ocak kilitlendi"; "ocak kilitlendi" → "siemens ocak kilitlendi nasıl açılır",
#   "elektrikli ocak kilitlendi", "elektrikli ocak kilitlendi nasıl açılır".
# Belgeler (media3.bsh-group.com, bu koşuda HTTP 200, md5 yerel kopyalarla aynı): Siemens EH9..LV.. (9001906458_F),
#   Siemens ED..HQB.. (9001975506_E). Alıntı denetimi: siemens-ocak-kilidi-nasil-acilir.KAYNAK.md
# BİLEREK YAZILMAYANLAR: tuş simgesinin adı (PDF'te görsel; metinde ad yok) · Bosch/Profilo ocaklar (ayrı belge) · gazlı ocak
#   · elektrik bağlantısı · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Ocağın kullanma kılavuzu", "Kuru bez"]
steps:
  - "Ocağın kumanda yüzeyini kuru bir bezle sil ve üzerinde duran tencere, kapak ya da ıslak bez varsa kaldır."
  - "Ocak yeni silindiyse ve kumanda alanı kısa süreliğine kilitlendiyse silme korumasının bitmesini bekle ya da aynı tuşa dokunarak kapat."
  - "Ocağın ana şalter tuşuna dokunarak ocağı aç."
  - "Kılavuzunda çocuk kilidi için gösterilen sembole yaklaşık 4 saniye dokunarak kilidi kaldır."
  - "Ocak her kapatıldığında yeniden kilitleniyorsa otomatik çocuk kilidi açıktır; temel ayarlardan manuel ya da kapalı konuma al."
  - "Göstergeler hiç yanmıyorsa ya da kilit kalkmıyorsa ocağın elektriğini sigortadan kes, 30 saniye bekle ve yeniden ver."
  - "Ekranda arıza kodu tekrar ediyorsa kodu not edip Siemens müşteri hizmetlerine bildir."
faq:
  - q: "Siemens ocak kilidi nasıl açılır?"
    a: "Siemens'in indüksiyonlu ocak kılavuzlarına göre önce ocağı açmak için ana şalter sembolüne dokunulur, ardından çocuk kilidi sembolüne 4 saniye dokunulur ve kilit kaldırılır. Sembollerin yeri modele göre değişir; kendi kılavuzundaki çizime bak."
  - q: "Ocağı her kapattığımda yeniden kilitleniyor, neden?"
    a: "Otomatik çocuk kilidi açık olabilir. Kılavuza göre çocuk kilidi, ocak her kapatıldığında otomatik etkinleşecek şekilde ayarlanabiliyor. Bu ayar temel ayarlardan değiştiriliyor; seçenekler manuel, otomatik ve kapalı."
  - q: "Ocağı silerken tuşlar kilitlendi, ne oldu?"
    a: "Silme koruması devreye girmiş olabilir. Kılavuza göre bu fonksiyon açıldığında kumanda alanı 35 saniye boyunca kilitlenir ve kapanmadan 5 saniye önce bir sinyal duyulur. Süreyi beklemeden kapatmak için aynı sembole dokunmak yeterli."
  - q: "Göstergeler yanıp sönüyor ve tuşlar tepki vermiyor?"
    a: "ED serisi kılavuzunda göstergelerin yanıp sönmesinin bir nedeni kumanda bölümünün nemli olması ya da üzerinde bir cisim bulunması. Çözüm kumanda bölümünü kurulamak ya da cismi kaldırmak."
  - q: "Ocak kendi kendine kapandı, kilit mi?"
    a: "Kilit olmayabilir. Kılavuza göre bir pişirme alanı uzun süre ayar değiştirilmeden çalışırsa bağımsız emniyet kapatması devreye girer ve pişirme alanını kapatır; süre seçilen güç kademesine göre 1 ile 10 saat arasında değişir. Pişirme alanını açmak için herhangi bir düğmeye basılır."
images:
  coverAlt: "Mutfak tezgâhına gömülü siyah cam yüzeyli bir indüksiyon ocağın dokunmatik kumanda şeridi"
  steps:
    - "İndüksiyon ocağın cam yüzeyi kuru bir bezle siliniyor, üzerinde hiçbir kap yok"
    - "Temiz ve parlak bir ocak kumanda şeridi, ışıkları sönük"
    - "Ocağın kumanda şeridinde açma kapama simgesinin bulunduğu bölge"
    - "Ocağın kumanda şeridinde çocuk kilidi simgesinin bulunduğu bölge"
    - "Ocağın kumanda şeridi ve yanında açık duran bir kullanma kılavuzu sayfası"
    - "Koridordaki sigorta kutusunun kapağı kapalı, sade"
    - "Kapalı bir ocak ve yanında not defteri ile kalem"
---

Akşam yemeği için ocağı açmak istiyorsun, dokunmatik tuşlar tepki vermiyor. Ekranda bir sembol yanıyor ya da hiçbir şey olmuyor. Siemens indüksiyonlu ocaklarda bunun en sık nedeni **çocuk kilidi**: tek bir dokunuşla açılmayan, birkaç saniye basılı tutmayı isteyen bir güvenlik özelliği. Siemens'in EH9 ve ED serisi indüksiyonlu ocak kılavuzları kilidin nasıl açılıp kapatıldığını, ocak her kapandığında neden kendiliğinden kilitlenebildiğini ve temizlik sırasında devreye giren kısa süreli kilidi ayrı ayrı anlatıyor. Bu yazıda o adımları sırayla topladık. Senin ocağında sembollerin yeri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kumanda yüzeyini kurula. Ana şalter sembolüyle ocağı aç, sonra çocuk kilidi sembolüne yaklaşık 4 saniye dokun; kilit kalkar. Ocak her kapanışta yeniden kilitleniyorsa otomatik çocuk kilidi açıktır, temel ayarlardan kapat. Silerken 35 saniyelik kilit silme korumasıdır.

## Hangi kilit?

| Durum | Kılavuza göre | Ne yapılır |
|---|---|---|
| **Çocuk kilidi** | Ocak kilitli, açılmaz | 🛠️ Ana şalter + kilit sembolü 4 sn |
| **Otomatik çocuk kilidi** | Ocak her kapanışta kilitlenir | 🛠️ Temel ayarlardan değiştir |
| **Silme koruması** | Kumanda alanı 35 sn kilitli | ⏳ Bekle ya da sembole dokun |
| **Göstergeler yanıp sönüyor** | Kumanda nemli ya da üstünde cisim | 🛠️ Kurula, cismi kaldır |
| **Hiçbir gösterge yanmıyor** | Elektrik beslemesi kesik olabilir | 🛠️ Sigorta; sürerse servis |

## Adım adım: evde denenecekler

**1. Kumanda yüzeyini kurula.** Dokunmatik tuşlar ıslaklığa ve üzerine konan eşyaya karşı hassastır. ED serisi kılavuzunda **göstergelerin yanıp sönmesinin** bir nedeni olarak kumanda bölümünün **nemli** olması ya da **üzerinde bir cisim** bulunması yazıyor; çözüm kurulamak ve cismi kaldırmak. Kumanda alanının yakınında sıcak bir tencere varsa kılavuz onu da almanı, elektroniğin aşırı ısınmaması için beklemeni istiyor.

**2. Silme koruması mı?** Ocağı silerken tuşlar kilitlendiyse bu çocuk kilidi değil, **silme koruması** olabilir. EH9 serisi kılavuzuna göre bu fonksiyon açıldığında bir ikaz sesi duyulur ve **kumanda alanı 35 saniye boyunca kilitlenir**; kapanmadan 5 saniye önce bir sinyal duyulur. Kılavuz bu kilidin **ana şalter üzerinde etkisi olmadığını** da yazıyor. Süreyi beklemeden kapatmak için aynı sembole dokun.

**3. Ocağı aç.** Çocuk kilidini kaldırmak için iki kılavuzda da ilk adım aynı: **ocağı açmak için ana şalter sembolüne dokun.**

**4. Kilit sembolüne 4 saniye dokun.** Kılavuzlara göre ardından çocuk kilidi sembolüne **4 saniye** dokunulur ve **kilit kaldırılır**. Parmağını hemen çekme; kısa dokunuş yetmez. Sembolün yeri modele göre değişiyor; kılavuzunun "Çocuk kilidi" bölümündeki çizime bak. Aynı yolla kilidi istediğinde yeniden açabilirsin: ocak kapalıyken ana şaltere dokunup kilit sembolüne 4 saniye basarsan sembol **10 saniye** boyunca yanar ve ocak kilitlenir.

**5. Otomatik kilit açık mı?** Ocak her kapatıldığında yeniden kilitleniyorsa **otomatik çocuk kilidi** açık olabilir. Kılavuzlar, çocuk kilidinin ocak her kapatıldığında otomatik etkinleşecek şekilde ayarlanabildiğini ve bunun **temel ayarlar** bölümünden açılıp kapatıldığını yazıyor. Temel ayarlar tablosunda çocuk kilidi için üç seçenek var: **manuel** (fabrika ayarı), **otomatik** ve **kapalı**. ED serisinde temel ayarlara, ocak kapalıyken ana şaltere dokunup sonraki 10 saniye içinde ilgili sembole 4 saniye basarak giriliyor; ayar seçildikten sonra yine 4 saniyelik dokunuşla kaydediliyor.

**6. Göstergeler hiç yanmıyorsa.** Ekran tamamen karanlıksa sorun kilit değil, büyük olasılıkla elektrik. ED serisi kılavuzunun sorun giderme tablosunda ilk satır bu: **elektrik beslemesi kesilmiş** olabilir; başka elektrikli cihazlar yardımıyla kısa devre olup olmadığı kontrol edilmeli. Kılavuz, tabloda olmayan bir arıza kodunda da **ocağın elektrik bağlantısını kesmeyi, 30 saniye bekleyip yeniden bağlamayı** öneriyor. Bunu yalnız sigorta kutusundan yap; ocağın kablosuna ve bağlantı kutusuna dokunma.

**7. Kod sürüyorsa servis.** Gösterge yeniden yanıyor ve aynı arıza kodu tekrar ediyorsa kılavuz **müşteri hizmetleriyle iletişim kurmanı ve arıza kodunu bildirmeni** istiyor. Kodun okunuşu için ilgili pişirme alanının sensörünü basılı tutman gerekebilir. Siemens kılavuzları usulüne aykırı onarımların tehlikeli olduğunu, onarımı yalnız eğitimli uzman personelin yapabileceğini yazıyor.

## Kilit değil, otomatik kapanma

Ocak pişirme sırasında kendi kendine kapandıysa bu da kilit değil. Kılavuza göre bir pişirme alanı **uzun süre aralıksız ve ayar değiştirilmeden** çalışırsa **bağımsız emniyet kapatması** devreye girer ve alanı kapatır; süre seçilen güç kademesine göre **1 ile 10 saat** arasında değişir. Elektronik fazla ısındığında da ocak bir ya da tüm pişirme alanlarını kapatabilir; kılavuz elektroniğin soğumasını beklemeyi, ardından herhangi bir sembole dokunmayı söylüyor. Tencere algılama sorunları [Siemens indüksiyon ocak tencereyi algılamıyor](/blog/siemens-induksiyon-ocak-tencereyi-algilamiyor/) yazısında.

## Ne zaman servis

- 4 saniyelik dokunuşa rağmen kilit kalkmıyorsa
- Göstergeler sigorta açık olduğu hâlde hiç yanmıyorsa
- Arıza kodu elektrik kesip verdikten sonra geri geliyorsa
- Cam yüzeyde çatlak varsa (ocağı hiç kullanma)

⛔ **Kendin-çöz sınırı burada biter.** Dokunmatik ayarlar, temel ayarlar ve sigorta sende; ocağın elektrik bağlantısı, kablosu ve iç parçaları yetkili servisin.

## Servisi aramadan önce kısa özet

1. Ocağın modeli ne (alt yüzdeki etikette ya da kılavuz kapağında)?
2. Ekranda hangi simge ya da kod var?
3. Kilit sembolüne 4 saniye dokununca ne oluyor?
4. Göstergeler hiç yanıyor mu?
5. Sorun bir temizlik ya da elektrik kesintisinden sonra mı başladı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isınma sorunları [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/) yazısında. Bil, gör, çağır.
