---
title: "Protherm kombi sıcak su gelmiyor: ne kontrol edilir"
description: "Protherm kombiden sıcak su gelmiyorsa kılavuz önce ayara bakıyor: işletme modu, sıcak su sıcaklığı, regler, soğuk su vanası, basınç ve kodlar."
slug: "protherm-kombi-sicak-su-gelmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme D, fork A). Konu seçimi: origin/main'de protherm-kombi-sicak-su-gelmiyor yok
#   (Protherm'de calismiyor = "sıcak su da ısıtma da yok", ariza-kodlari, f22 var; kalorifer-isitmiyor yalnız Dalga 1 taslağında). Bu yazı ayrı belirti: musluk soğuk.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "protherm kombi sıcak su" → 1. öneri "protherm kombi sıcak su gelmiyor";
#   "protherm kombi" → 3. öneri aynı; "protherm kombi sıcak su gelmiyor" → "…ne yapmalıyım", "protherm leopard…", "…banyoya…", "…çalışıyor sıcak su gelmiyor", "protherm lynx…".
#   GSC (https___www-6, 7 gün): bu sorgu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile protherm.com.tr'den yeniden indirildi: üçü de HTTP 200 application/pdf, md5 yerel kopyalarla aynı.
#  (P) Puma Condens 18/24 0020289282_02  https://www.protherm.com.tr/_temp/protherm-puma-condens-kullanma-kilavuzu-18-24.pdf  16 s.  md5 ef689d0d0cd29a076485d66f769ceee4
#  (L) Lynx Condens 24/28 0020277896_02  https://www.protherm.com.tr/_temp/7ba8cc34-c05a-44d9-90c1-607f1a2c579d.pdf  20 s.  md5 a062e2f5414dde91e8e73afb33559a11
#  (G) Gepard Condens 20/24 0020281180_03  https://www.protherm.com.tr/_temp/c2f54fd4-f5ad-4a4c-a6a3-195cd32bb5f9.pdf  16 s.  md5 e007ac08696eee927eb59ddd827dfb63
# Gaz kokusu P s.3-4 · Lynx işletme modları/standby L s.12 · Lynx Eco 50 °C L s.9 · L aralık 35-60, Eco 38-50 L s.15 · Puma sıcak su ayarı P s.8
#   · Gepard sıcak su tuşu G s.7-8, s.10, 35-64 G s.13 · regler L s.12, P s.8 · soğuk su vanası L s.15, P s.12, G s.13 · basınç P s.8-9, L s.11/15, G s.9
#   · F.22/F.28 P s.12 · Gepard F10 G s.9, F04 G s.14 · reset P s.10, L s.9, G s.14 · arıza tablosu sonrası servis L s.12, P s.10.
# BİLEREK YAZILMAYANLAR: "yalnız sıcak su yok" için parça teşhisi (3 yollu vana, akış sensörü, eşanjör, kart; kılavuzlarda yok) · radyatör purjörü
#   (Puma ve Gepard servise bırakıyor) · lejyoner/derece önerisi (Protherm kılavuzlarında yok) · "en sık neden" sıralaması · #46 kapsamı.
# Alıntı denetim tablosu: protherm-kombi-sicak-su-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının (regler) kullanma kılavuzu (varsa)"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, gaz sayacı vanasını kapat, binayı terk et ve gaz şirketinin acil durum birimini dışarıdan ara."
  - "Ekranda OFF varsa kombi bekleme modundadır ya da kapalıdır; açma kapama tuşuyla çalıştır, binadaki sigortayı kontrol et."
  - "Lynx Condens'te işletme modunu kontrol et; sadece ısıtma ya da talep yok seçiliyse ısıtma artı sıcak su moduna al."
  - "Sıcak su sıcaklığını aç ve değeri yükselt; Puma'da ana ekranda sıcaklık tuşuna iki kez, Gepard'da sıcak su konumu tuşuna bas."
  - "Kombiye regler bağlıysa sıcak su sıcaklığını reglerden ayarla."
  - "Kombinin altındaki soğuk su devresi kapatma vanasının açık olduğunu kontrol et."
  - "Basınca bak; F.22 ya da F10 görüyorsan kılavuzdaki doldurma adımlarını uygula, F.28'de gaz vanasını kontrol et, F.28 ya da F04'te reset tuşuyla izin verilen kadar dene."
  - "Ayarlar doğru olduğu hâlde musluğa sıcak su gelmiyorsa ya da kod geri geliyorsa Protherm yetkili servisini ara."
faq:
  - q: "Protherm kombi çalışıyor ama sıcak su gelmiyor, neden?"
    a: "Protherm'in Puma, Lynx ve Gepard Condens kılavuzlarına göre kullanıcının bakacağı nedenler ayarda: sıcak su sıcaklığının çok düşük ayarlanması ya da sıcak su işletiminin kapatılması, soğuk su devresi kapatma vanasının kapalı olması. Lynx Condens'te ayrıca işletme modu sadece ısıtmaya alınmışsa kombi sıcak su hazırlamaz. Bunlar doğruysa sorun kullanıcı ayarlarının dışında; yetkili servis."
  - q: "Protherm Lynx kombide sıcak su nasıl açılır?"
    a: "Lynx Condens kılavuzuna göre ekranda istediğin işletme modu görünene kadar mod tuşuna basıyorsun. Seçenekler ısıtma artı sıcak su, sadece ısıtma, sadece kullanma suyu ve talep yok. Sıcak su için ısıtma artı sıcak su ya da sadece kullanma suyu seçili olmalı. Kombi her açıldığında son seçilen işletme modu uygulanır."
  - q: "Protherm kombide sıcak su kaç derece ayarlanabiliyor?"
    a: "Lynx Condens'te kullanma suyu sıcaklığı 35 ile 60 °C, Eco kullanma suyu sıcaklığı 38 ile 50 °C arasında. Gepard Condens'te kullanım suyu sıcaklığı 35 ile 64 °C arasında, fabrika ayarı 50. Puma Condens kılavuzu aralığı vermiyor; sıcaklık ana ekrandan ayarlanıyor."
  - q: "Ekranda F.28 ya da F04 var, sıcak su gelmiyor; ne yapmalıyım?"
    a: "İkisi de ateşleme arızası. Puma Condens'te F.28 için ilk tedbir gaz kesme vanasının açık olup olmadığını kontrol etmek, sonra arızayı açma kapama tuşuna 3 saniyeden uzun basarak gidermek; bu en fazla beş kez yapılır. Gepard'da F04 için reset tuşuna basılır; arıza üç denemede gitmiyorsa yetkili servise başvurulur."
  - q: "Regler bağlıyken kombiden sıcak su ayarı yapılabilir mi?"
    a: "Lynx Condens kılavuzuna göre sıcaklık regler tarafından kumanda ediliyorsa sıcak su sıcaklığı reglerden ayarlanır. Puma Condens'te de regler bağlıysa istenen sıcak su sıcaklığı reglerde ayarlanır. Reglerin kendi kılavuzuna bak."
images:
  coverAlt: "Banyo lavabosunda açık duran bir musluk ve yan duvarda beyaz bir kombi"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda duvardaki oda termostatı"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Petekler ısınıyor ya da kombi açık görünüyor, ama musluktan sıcak su gelmiyor. Protherm'in Puma Condens, Lynx Condens ve Gepard Condens kullanma kılavuzlarında bu durum için ayrı bir başlık yok; ama üçü de sıcak su ayarını, işletme modlarını ve arıza tablosunu anlatıyor. Aşağıda servisi çağırmadan önce evde bakabileceğin her şeyi bu üç kılavuzdan sırayla topladık. Tuş düzeni modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su yoksa ilk şüpheli ayar. Kombi bekleme modunda mı, Lynx'te işletme modu sadece ısıtmada mı, sıcak su sıcaklığı düşük mü, regler bağlı mı, soğuk su vanası açık mı? Ekranda bir kod varsa önce onun tedbiri. Bunlar doğruysa Protherm yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **OFF** | Lynx'te bekleme modu; donma koruması açık | 🛠️ Açma kapama tuşuyla çalıştır |
| **Musluk simgesi sürekli** | Sıcak su işletimi etkin | Kombi hazır |
| **Musluk simgesi yanıp sönüyor** | Sıcak su konumunda brülör devrede | Kombi suyu ısıtıyor |
| **F.22 / F10** | Tesisat basıncı düşük ya da aralık dışında | 🛠️ Basınca bak, doldur |
| **F.28 / F04** | Ateşleme başarısız | 🛠️ Gaz vanası, reset; sürerse servis |
| **rE** | Puma'da reset yapılıyor | Bekle |

## Adım adım kontrol

**1. Gaz kokusu varsa hiçbir şeye dokunma.** Puma Condens kılavuzunun emniyet bölümü açık: gaz kokusu olan yerde bulunma, kapı ve pencereleri aç, çakmak ve kibritten uzak dur, sigara içme, elektrik şalterini, prizi, zili ve telefonu kullanma. Gaz sayacındaki kapatma düzeneğini kapat, diğer sakinleri uyar, binayı hemen terk et ve gaz şirketinin acil durum birimini evin dışındaki bir telefondan ara.

**2. Kombi açık mı?** Arıza tablolarındaki ilk maddeler basit: ürün kapalı olabilir ya da binadaki elektrik kesilmiş olabilir. Lynx Condens'te açma kapama tuşuna 3 saniyeden kısa basınca kombi bekleme moduna geçer ve ekranda **OFF** görünür. Elektrik kesintisinde kılavuzun tedbiri binadaki sigortayı kontrol etmek.

**3. İşletme modu doğru mu? (Lynx Condens)** Lynx'te dört işletme modu var: **ısıtma + sıcak su, sadece ısıtma, sadece kullanma suyu** ve **talep yok**. Mod tuşuna istediğin mod ekranda görünene kadar basıyorsun. Sadece ısıtma seçiliyse kombi petekleri ısıtır ama sıcak su hazırlamaz. Kılavuzun notu önemli: kombi her açıldığında **son seçilen işletme modu** uygulanır.

**4. Sıcak su sıcaklığını kontrol et.** Puma Condens'te ana ekranda sıcaklık tuşuna **iki kez** basınca sıcak su değeri görünür; değiştirip onaylarsın, değer iki kez hızla yanıp söner. Gepard'da sıcak su konumu tuşuna basıp döner düğmeyle sıcaklığı seçiyorsun; ayar aralığı **35–64 °C**, fabrika ayarı 50. Lynx'te kullanma suyu **35–60 °C**, Eco sıcak su konumunda 38–50 °C. Arıza tablolarında "sıcak su sıcaklığı çok düşük ayarlanmış ya da sıcak su işletimi kapatılmış" ayrı bir neden.

**5. Regler bağlı mı?** Kombiye bir oda termostatı ya da regler bağlıysa sıcak su sıcaklığı oradan ayarlanır. Lynx kılavuzu bunu açıkça yazıyor: sıcaklık regler tarafından kumanda ediliyorsa sıcak su sıcaklığını reglerden ayarla. Puma'da da regler bağlıyken istenen sıcak su sıcaklığı reglerde seçilir.

**6. Soğuk su vanası açık mı?** Üç kılavuzun arıza tablosunda da "soğuk su devresi kapatma vanası kapalı" ayrı bir neden; tedbiri vanayı açmak. Vananın yerini bilmiyorsan kombiyi kuran tesisatçıya sor.

**7. Basınç ve kodlar.** Puma'da basınç 0,5 barın altındaysa sistem doldurulur, hedef **1,0–1,4 bar**. Gepard'da tesisat basıncı aralık dışındaysa ekranda **F10** görünür; 0,8 barın altında doldurulur. Lynx'te ayda bir basıncın 0,5 ile 2,7 bar arasında olduğuna bakılır; sık düşüyorsa yetkili bayi. Ayrıntılar [Protherm kombi F22 hatası](/blog/protherm-kombi-f22-hatasi/) yazısında. **F.28** ya da Gepard'da **F04** ateşleme arızası. Puma'da F.28 için ilk tedbir gaz kesme vanasının açık olup olmadığına bakmak; sonra reset için açma kapama tuşuna 3 saniyeden uzun basılır, en fazla beş kez; Gepard'da arıza üç denemede gitmiyorsa yetkili servis.

**8. Ayarlar doğruysa servis.** Mod, sıcaklık, regler, vana ve basınç doğru, yine de musluk soğuksa ev turu bitmiştir. Lynx kılavuzu tablodaki tüm noktaları kontrol ettiğin hâlde ürün sorunsuz çalışmıyorsa yetkili bayiye başvurmanı istiyor.

## Ne zaman servis

- İşletme modu, sıcaklık ve vana doğru olduğu hâlde musluğa sıcak su gelmiyorsa
- Ateşleme arızası izin verilen reset denemelerinden sonra geri geliyorsa
- Basınç sık sık düşüyorsa
- Gepard'da **F05** (atık gaz hattında arıza) görüyorsan: kılavuz doğrudan yetkili servis diyor

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar, işletme modu, regler ayarı, soğuk su vanası ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı, elektrik bağlantısı ve tesisat uzmanın.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Puma, Lynx, Gepard ya da başka)?
2. Ekranda OFF ya da bir kod var mı?
3. Petekler ısınıyor mu?
4. Regler bağlı mı?
5. Basınç kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ne sıcak su ne ısıtma varsa [Protherm kombi çalışmıyor](/blog/protherm-kombi-calismiyor/) yazısına, bütün kodlar için [Protherm kombi arıza kodları](/blog/protherm-kombi-ariza-kodlari/) sayfasına, marka bağımsız nedenler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
