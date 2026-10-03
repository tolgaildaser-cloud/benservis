---
title: "Electrolux fırın ısınmıyor: evde kontrol"
description: "Electrolux fırın ısıtmıyorsa kılavuzun tablosu dört neden sayıyor: saat ayarı, kapak, sigorta ve Çocuk Kilidi. Kontrol sırası burada."
slug: "electrolux-firin-isinmiyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, kombi + fırın koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi: HTTP 200, application/pdf.
# ⚠️ ALAN ADI: api.electrolux-medialibrary.com (Electrolux'un medya kütüphanesi; DNS Akamai edgekey, electrolux.com.tr ile aynı CDN ailesi). 1 Eki'de kabul edilen electrolux.com.tr/services/eml/asset/... yolu aynı varlık kimliğini taşıyor
#    ama bu koşuda electrolux.com.tr curl'e yanıt vermedi (000). ✅ Alan adı Tolga onayıyla kabul edildi (3 Eki 2026, ~09:4x).
# Belgenin yeri web aramasıyla bulundu; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası. Yerel kopya: blog-taslaklar/kaynak-firin-3eki/electrolux-EOC8P39WX.pdf
#  (E) Electrolux "EOC8P39WX EOC8P39WZ KOCBP39WX TR Kullanma Kılavuzu | Buharlı ankastre fırın", 28 s., 756.518 B, md5 b56a03252a0eb723eb5e1c99641de40e
#      https://api.electrolux-medialibrary.com/asset/0f0f41ac-10be-470f-9d16-4bf886f651aa/E4RM3Q/240803JBKF/PDF/240803JBKF.pdf
#      s.23 12.1 "Bu durumlarda ne yapmalı...": "Cihaz açılmıyor veya çalışmıyor." → "Cihaz, elektrik hattına bağlanmamıştır ya da elektrik bağlantısı doğru şekilde yapılmamıştır."
#        "Cihaz ısınmıyor." → "Saat ayarlanmamıştır. Saati ayarlamak için Saat fonksiyonları bölümüne bakın." / "Kapı doğru şekilde kapatılmamıştır." / "Sigorta atmıştır. Soruna sigortanın neden olup olmadığını kontrol edin. Sorun devam ederse yetkili bir elektrik teknisyenine başvurun." / "Çocuk Kilidi etkin."
#      s.15 8.2 "Ayar: Günün saati 1. Cihazı çalıştırın. 2. Şuna basın: Günün saati. 3. Süreyi ayarlayın. 4. [onay] tuşuna basın."
#      s.15 7.3 Çocuk Kilidi: "1. Cihazı çalıştırın. 2. [menü] tuşuna basın. 3. Seçenekler / Çocuk Kilidi ögesini seçin. 4. Kod harflerine alfabetik sırayla basın. 5. Cihazı kapatın." · "Cihaz kapatıldığında kapak kilitlenir." · "Cihazı kullanabilmek için kod harflerini alfabetik sıraya göre seçin." · "Bu fonksiyonu devre dışı bırakmak için yukarıdaki adımları tekrarlayın."
#      s.15 7.4 Otomatik kapanma: "Güvenlik önlemi olarak, ısıtma fonksiyonu etkinse ve hiçbir ayar değiştirilmemişse, cihaz belirli bir süre sonra otomatik olarak kapanır." · tablo 30-115 °C 12.5 sa · 120-195 °C 8.5 sa · 200-245 °C 5.5 sa · 250-maks. 3 sa · "Otomatik kapanma süresini aşan bir süre boyunca bir ısıtma fonksiyonunu çalıştırmak istiyorsanız, pişirme süresini ayarlayın."
#      s.15 7.5 "Cihazı kaparsanız, cihaz soğuyana kadar soğutma fanı çalışmaya devam eder."
#      s.24 12.2 "F102 - fırın kapağı tam kapanmamış ya da kapak kilidi arızalı." → "Kapağı kapatın. Cihazı kapatın ve tekrar açın." · "Bu hata mesajı ekranda görünmeye devam ederse arızalı bir alt sistem devre dışı bırakılmış olabilir. Böyle bir durumda satıcınıza veya Yetkili Servise başvurun."
# BİLEREK YAZILMAYANLAR: sigorta değiştirme / elektrik bağlantısı müdahalesi (#31; belge de elektrik teknisyenine yönlendiriyor) · rezistans/termostat/kart teşhisi (belgede yok) · lamba değişimi · buhar/su haznesi satırları (konu dışı)
#   · diğer Electrolux modellerine genelleme (menü adları EOC8P39WX'e göre) · yakın kopya: AEG/Electrolux grubunun yayında fırın sayfası yok; Arçelik/Bosch/Vestel ısınmıyor sayfalarından farklı tablo · fiyat.
# Alıntı denetim tablosu: electrolux-firin-isinmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranda saatin ayarlı olduğunu kontrol et; ayarlı değilse Günün saati menüsünden ayarla ve onayla."
  - "Fırın kapağının tam kapandığından emin ol; ekranda F102 varsa kapağı kapatıp fırını kapat-aç."
  - "Çocuk Kilidi etkinse menüden Seçenekler / Çocuk Kilidi'ne gir ve kod harflerine alfabetik sırayla basarak kapat."
  - "Sigorta kutusunda fırının sigortasının atıp atmadığına bak."
  - "Uzun süre aynı ayarla pişiriyorsan otomatik kapanmaya takılmamak için pişirme süresini ayarla."
  - "Fırın hiç açılmıyorsa ya da sorun sürüyorsa elektrik bağlantısı için yetkili servise başvur."
faq:
  - q: "Electrolux fırınım neden ısınmıyor?"
    a: "Electrolux'un EOC8P39WX kullanma kılavuzundaki tabloda 'Cihaz ısınmıyor' satırı dört neden sayıyor: saat ayarlanmamış, kapı doğru kapatılmamış, sigorta atmış ya da Çocuk Kilidi etkin."
  - q: "Saat ayarlı değilse fırın gerçekten ısıtmaz mı?"
    a: "Electrolux'un tablosu saatin ayarlanmamış olmasını fırının ısınmama nedenlerinin ilk sırasına koyuyor ve saati ayarlamak için kılavuzun Saat fonksiyonları bölümüne yönlendiriyor. EOC8P39WX'te saat; cihazı çalıştırıp Günün saati'ne basarak, süreyi ayarlayıp onaylayarak giriliyor."
  - q: "Fırın pişirirken kendi kendine kapandı, arıza mı?"
    a: "Olmayabilir. Kılavuza göre ısıtma fonksiyonu etkinse ve hiçbir ayar değiştirilmemişse cihaz güvenlik önlemi olarak belirli bir süre sonra otomatik kapanıyor. Süre sıcaklığa bağlı: örneğin 120-195 °C arasında 8,5 saat, 250 °C ve üstünde 3 saat. Daha uzun çalıştırmak için pişirme süresi ayarlanıyor."
  - q: "Ekranda F102 yazıyor, ne yapmalıyım?"
    a: "Kılavuza göre F102 fırın kapağının tam kapanmadığını ya da kapak kilidinin arızalı olduğunu gösterir. Çözüm: kapağı kapatmak, cihazı kapatıp tekrar açmak. Mesaj görünmeye devam ederse satıcıya ya da Yetkili Servise başvurulması isteniyor."
images:
  coverAlt: "Paslanmaz çelik bir ankastre fırının dokunmatik ekranı, içi karanlık ve tepsisi boş"
---

Fırını çalıştırdın, ekran yanıyor ama içerisi ısınmıyor. Electrolux'un EOC8P39WX kullanma kılavuzundaki sorun giderme tablosunda bu belirtinin karşılığı tek satır: **"Cihaz ısınmıyor."** Tablonun saydığı dört nedenin üçü bir ayar ya da kapakla ilgili; dördüncüsü sigorta. Bu yazı EOC8P39WX / EOC8P39WZ / KOCBP39WX kılavuzuna dayanıyor; menü adları başka modellerde farklı olabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Saat ayarlı mı? Kapak tam kapalı mı (F102)? Çocuk Kilidi etkin mi? Sigorta atmış mı? Uzun pişirmede otomatik kapanma devreye girmiş olabilir. Fırın hiç açılmıyorsa elektrik bağlantısı servisin işi.

## Electrolux'un tablosu

| "Cihaz ısınmıyor" satırındaki neden | Kılavuzun yönlendirmesi |
|---|---|
| Saat ayarlanmamıştır | Saat fonksiyonları bölümüne göre saati ayarla |
| Kapı doğru şekilde kapatılmamıştır | Kapağı tam kapat |
| Sigorta atmıştır | Sigortanın neden olup olmadığını kontrol et; sorun devam ederse yetkili bir elektrik teknisyeni |
| Çocuk Kilidi etkin | Çocuk Kilidi'ni kapat |

## Adım adım: evde denenecekler

**1. Saat ayarlı mı?** Tablonun ilk nedeni: **saat ayarlanmamıştır.** EOC8P39WX'te saat şöyle giriliyor: cihazı çalıştır → **Günün saati**'ne bas → süreyi ayarla → onay tuşuna bas.

**2. Kapak tam kapalı mı?** İkinci neden: **kapı doğru şekilde kapatılmamıştır.** Kılavuzun hata kodu tablosu bunun ekrandaki karşılığını da veriyor: **F102 – fırın kapağı tam kapanmamış ya da kapak kilidi arızalı.** Çözüm: **kapağı kapat, cihazı kapatıp tekrar aç.**

**3. Çocuk Kilidi.** Tablodaki dördüncü neden: **Çocuk Kilidi etkin.** EOC8P39WX'te kilit menüden yönetiliyor: cihazı çalıştır → menü tuşuna bas → **Seçenekler / Çocuk Kilidi** → kod harflerine **alfabetik sırayla** bas. Kılavuza göre fonksiyonu devre dışı bırakmak için aynı adımlar tekrarlanıyor. Çocuk Kilidi etkinken cihaz kapatıldığında **kapak da kilitleniyor.**

**4. Sigorta.** Üçüncü neden: **sigorta atmıştır.** Kılavuzun talimatı: **soruna sigortanın neden olup olmadığını kontrol et.** Sorun devam ediyorsa Electrolux'un yönlendirmesi açık: **yetkili bir elektrik teknisyenine başvur.** Sigorta kutusuna bakmanın ötesi bu rehberin konusu değil.

**5. Uzun pişirmede otomatik kapanma.** Fırın bir süre ısıtıp sonra durduysa bu bir arıza olmayabilir. Kılavuza göre **ısıtma fonksiyonu etkinse ve hiçbir ayar değiştirilmemişse** cihaz güvenlik önlemi olarak belirli bir süre sonra **otomatik kapanıyor.** Süre sıcaklığa bağlı: 30-115 °C'de 12,5 saat, 120-195 °C'de 8,5 saat, 200-245 °C'de 5,5 saat, 250 °C ve üstünde 3 saat. Daha uzun çalıştırmak istiyorsan kılavuzun önerisi **pişirme süresini ayarlamak.**

**6. Fırın hiç açılmıyorsa servis.** Tablonun bir üst satırı farklı bir belirti: **cihaz açılmıyor veya çalışmıyor.** Electrolux'a göre neden, cihazın **elektrik hattına bağlanmamış** ya da bağlantının **doğru yapılmamış** olması. Bu, kullanıcının değil yetkili servisin ya da elektrik teknisyeninin işi.

## Kapattıktan sonra fan çalışıyor

Kılavuza göre fırın çalışırken yüzeyin soğuk kalması için **soğutma fanı** otomatik çalışıyor ve cihazı kapattığında **cihaz soğuyana kadar** çalışmaya devam ediyor. Kapattığın hâlde fan sesini duyman kılavuzda tarif edilen davranış.

## Ne zaman servis

- Saat, kapak, Çocuk Kilidi ve sigorta yerinde olduğu hâlde fırın ısınmıyorsa.
- **F102** kapağı kapatıp kapat-aç yaptıktan sonra da görünmeye devam ediyorsa; kılavuza göre bu durumda arızalı bir alt sistem devre dışı bırakılmış olabilir, satıcıya ya da Yetkili Servis'e başvur.
- Fırın hiç açılmıyorsa ya da sigorta kontrolünden sonra sorun sürüyorsa (kılavuz bu durumda elektrik teknisyenine yönlendiriyor).

⛔ Fırının içini açmak, rezistans ya da kabloya dokunmak bu rehberin konusu değil. Markadan bağımsız kontrol sırası için [fırın ısınmıyor](/blog/firin-isinmiyor/) yazısına, pişirme dengesizse [fırın eşit pişirmiyor](/blog/firin-esit-pisirmiyor/) yazısına bak.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
