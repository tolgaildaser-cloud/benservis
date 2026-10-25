---
title: "Warmhaus kombi sıcak su gelmiyor: kontrol sırası"
description: "Warmhaus kombide sıcak su gelmiyorsa kılavuzların sırası: vanalar, gaz, mod, musluk sembolü, sıcaklık ayarı, Er kodu, şebeke suyu basıncı ve servis."
slug: "warmhaus-kombi-sicak-su-gelmiyor"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, alt ajan C). origin/main'de warmhaus-kombi-sicak-su-* yok; Warmhaus'ta yalnız
#   warmhaus-kombi-hata-kodlari (Glowa Er kod tablosu, hub). Bu yazı belirti sayfası; kod tablosunu kopyalamaz, hub'a bağlanır.
#   Dalga 2/3/6/7 klasörlerinde Warmhaus sıcak su slug'ı yok.
# Arama kanıtı (25 Eki 2026, Google TR otomatik tamamlama): "warmhaus kombi s" → 2. "warmhaus kombi sıcak su gelmiyor";
#   "warmhaus kombi sıcak su" → 1. "…gelmiyor", 2. "…ayarı", 3. "…nasıl açılır". GSC (www-5 / www-6): Warmhaus satırı yok.
# Belge zinciri (bu koşuda, curl -sL -A "Mozilla/5.0"):
#  warmhaus.com/tr/urunler/kombiler/yogusmali-kombiler/warmhaus-glowa-yogusmali-kombi (200) →
#   (W1) warmhaus.com/storage/product/March2026/warmhaus-glowa-montaj-ve-kullanim-kilavuzu-tr.pdf  200 application/pdf  md5 9018b4be5bb22670e55cdca77229d794
#  …/warmhaus-ewa-20-yogusmali-kombi (200) → (W2) …/March2026/ewa-montaj-ve-kullanim-kilavuzu-tr-2026.pdf  200  md5 35f4901f377450b0b76f58c7c6fca462
#  …/warmhaus-enerwa-yogusmali-kombi (200) → (W3) …/March2026/enerwa-montaj-ve-kullanim-kilavuzu-2026.pdf  200  md5 1d4e541ef599c491026cdbf4cf807ceb
# Gaz kokusu W1 s.24 · kullanım öncesi kontroller W1 s.24, W2 s.19 · modlar ve semboller W1 s.25–26, W2 s.19–20 · DHW 35–60 °C W2 s.20, W3 s.21
#   · sıfırlama W1 s.27, W2 s.21 · Er 04 W1 s.29, E04 W2 s.23 · şebeke suyu basıncı W1 s.10 · 38–42 °C, ECO ve kireç W2 s.27 · ön ısıtma W2 s.22, W3 s.25.
# BİLEREK YAZILMAYANLAR: plakalı eşanjör, üç yollu vana, akış sensörü teşhisi · Glowa'nın sıcak su ayar aralığı (Glowa teknik tablosunda değer
#   sütunu boş; aralık yalnız Ewa/Enerwa için yazıldı) · servis parametreleri (P42 vb.) kullanıcı adımı olarak · fiyat (#46).
# Alıntı denetim tablosu: warmhaus-kombi-sicak-su-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa gaz vanalarını kapat, elektrik düğmelerine dokunma, kıvılcım çıkaracak bir şey yapma ve gaz şirketini ya da yetkili servisi ara."
  - "Kombinin altındaki musluk suyu ve gaz vanalarının açık, kombinin elektrik sigortasının açık olduğunu kontrol et."
  - "Ocaklardan birini yakarak gaz hattında gaz olup olmadığına bak."
  - "Ekranı oku: kombi kapalı ya da bekleme konumundaysa açma düğmesiyle çalıştır; kış ve yaz konumunun ikisinde de sıcak su verilir."
  - "Sıcak su sıcaklık ayarını kontrol et; değer en alta indirilmişse yükselt."
  - "Ekranda Er ya da E ile başlayan bir kod varsa kodu not al ve sıfırlama düğmesine kılavuzdaki süre kadar bir kez bas."
  - "Musluktaki su akışı zayıfsa şebeke suyu basıncının düşük olup olmadığını düşün; kombinin sıcaklığa ulaşması için yeterli akış gerekir."
  - "Kod geri geliyorsa ya da ayarlar doğruyken sıcak su gelmiyorsa kodu ve modeli yetkili servise bildir."
faq:
  - q: "Warmhaus kombi yaz konumunda sıcak su verir mi?"
    a: "Verir. Warmhaus kılavuzlarına göre yaz konumunda kombi yalnız kullanım sıcak suyunu ısıtmak için çalışır, kış konumunda hem ortamı ısıtır hem de sıcak su sağlar. Yani yaz konumu sıcak suyu kesmez. Sıcak su gelmiyorsa sebep moddan çok kapalı konum, vana, gaz, ayar ya da bir hata kodudur."
  - q: "Petekler ısınıyor ama sıcak su gelmiyor, neden?"
    a: "Ewa kılavuzunun arıza tablosunda tam bu tarif var: E04 kodunda kombi sıcak kullanım suyu modunda çalışmıyor ama kalorifer modunda çalışıyor; muhtemel sebep sıcak su sıcaklık sensörü. Kılavuzun çözümü bir kez sıfırlamak, arıza sürerse yetkili servis. Glowa'da Er 04 aynı sensörün uyarısı. Sensöre kullanıcı müdahale etmez."
  - q: "Warmhaus kombide sıcak su sıcaklığı kaç derece olmalı?"
    a: "Ewa ve Enerwa kılavuzlarında sıcak su 35 ile 60 °C arasında ayarlanıyor. Ewa kılavuzu enerji tasarrufu için sıcak suyu mümkün olduğunca 38 ile 42 °C civarında tutmayı öneriyor; yüksek sıcaklıkların güçlü kireçlenmeye, daha uzun ısıtma süresine ve daha düşük akışa yol açtığını yazıyor."
  - q: "Musluğu açınca uzun süre soğuk su akıyor, normal mi?"
    a: "Bir miktar bekleme normal. Warmhaus bazı modellerde hazır sıcak su ya da ön ısıtma işlevi sunuyor: plakalı eşanjördeki suyu ısıtıp hazır tutarak bekleme sırasında soğuk su tüketimini azaltıyor. Ewa ve Enerwa'da bu işlev yetkili servisin parametre ayarıyla açılıyor; altı butonlu Enerwa Plus'ta ise kılavuz kullanıcıya bir tuş yolu veriyor."
  - q: "Su doldurmayı kendim yapabilir miyim?"
    a: "Warmhaus kılavuzlarında tesisatın doldurulması montaj personeli bölümünde anlatılıyor. Kullanıcıdan beklenen, kullanmadan önce kombinin altındaki manometrede basıncın 1 ile 1,5 bar arasında olduğunu görmek. Basınç düşükse doldurmayı yetkili servise bırak."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir kombi ve altında soğuk akan bir lavabo musluğu"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Kombinin altında borular arasında duran açık konumda vanalar"
    - "Mutfakta yanan mavi alevli bir ocak gözü"
    - "Kombinin ışığı sönük, kapalı duran dijital ekranı"
    - "Kombi panelinde musluk simgeli bir sıcaklık ayar düğmesi"
    - "Kombi ekranında yanıp sönen kısa bir uyarı yazısı"
    - "Lavaboda ince ve zayıf akan bir musluk suyu"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve kapalı bir alet çantası"
---

Kombi çalışıyor gibi görünüyor ama musluktan sıcak su gelmiyor. Warmhaus'un Glowa, Ewa ve Enerwa montaj ve kullanım kılavuzlarında bu belirti için tek bir satır yok; ama üç kılavuz da sıcak suyu etkileyen kontrolleri, ekran göstergelerini ve kullanıcıya bırakılan adımları açıkça sıralıyor. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi bu kılavuzlardan topladık. Düğmelerin yeri modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce vanalar, gaz ve sigorta. Sonra ekran: kapalıysa aç, sıcak su ayarını kontrol et. **Er** ya da **E** kodu varsa bir kez sıfırla. Petekler ısınıp yalnız sıcak su yoksa sensör kodu olabilir; o servis işi. Basınç 1–1,5 bar olmalı.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **KAPALI / bar değeri** | Kombi kapalı ya da bekleme konumunda | 🛠️ Açma düğmesiyle çalıştır |
| **Musluk + radyatör** | Kış konumu: ısıtma ve sıcak su | Normal |
| **Yalnız musluk** | Yaz konumu: yalnız sıcak su | Normal |
| **Yanıp sönen musluk** | Sıcak su talebi var, kombi hazırlıyor | Bekle |
| **Yanıp sönen Er + kod** | Arıza ya da kilitleme | 🛠️ Kodu not al, bir kez sıfırla |

## Adım adım kontrol

**1. Gaz kokusu var mı?** Warmhaus'un kullanıcı bölümündeki ilk kural: ortamda gaz kokusu varsa evin giriş hattındaki ve kombinin gaz vanalarını, dökme gaz kullanıyorsan LPG tankı ya da tüp vanasını kapat. Elektrik düğmelerini açıp kapatma, kıvılcım çıkarabilecek hiçbir şey yapma. Gaz şirketini ya da yetkili servisi ara.

**2. Vanalar ve sigorta.** Kılavuzun kullanmaya başlamadan önceki kontrol listesi açık: kombinin altındaki radyatör, **musluk suyu** ve gaz vanaları açık olmalı, kombinin elektrik sigortası açık olmalı. Bir bakım ya da tadilattan sonra musluk suyu vanası kapalı kalmışsa kombi sıcak su hazırlayamaz (çıkarım).

**3. Gaz geliyor mu?** Aynı listede kılavuz, gaz hattında gaz olduğunu ocaklarından birini yakarak kontrol edebileceğini yazıyor. Ocak da yanmıyorsa sorun kombide değil gaz beslemesinde; gaz dağıtım şirketini ara.

**4. Kombi açık mı, hangi konumda?** Glowa ilk açıldığında bütün göstergeler yanar, ardından bekleme konumunda **bar** ifadesi yazar. Açma/kapama düğmesine basınca ekranda kombinin o anki sıcaklığı görünür. Kılavuza göre **kış** konumunda kombi hem ortamı ısıtır hem sıcak su verir, **yaz** konumunda yalnız sıcak suyu ısıtır. İkisinde de musluk sembolü ekrandadır. Ewa'da konumlar MODE butonunu basılı tutarak değişiyor; ekranda **OFF** yazıyorsa kombi kapalıdır.

**5. Sıcak su ayarı.** Musluğu açınca ekranda sıcak su sıcaklığı ve **yanıp sönen musluk** sembolü görünmeli. Glowa'da sıcak su sıcaklığı paneldeki musluk düğmesiyle ayarlanıyor. Ewa ve Enerwa'da sıcak su 35 ile 60 °C arasında ayarlanabiliyor; Ewa'da önce sıcak su butonuna basıp artırma ve azaltma tuşlarını kullanıyorsun. Değer en alttaysa su ılık gelir.

**6. Kod varsa bir kez sıfırla.** Glowa kılavuzuna göre ekranda yanıp sönen **Er** ve bir kod değeri varsa SIFIRLAMA düğmesine üç saniye basıyorsun. Ewa'da RESET butonu üç dört saniye basılı tutuluyor. Ewa kılavuzunun örneği öğretici: E06 ya da E81 görünüyorsa yanma olmamıştır ve kombiye bağlı gaz vanalarından biri kapalı olabilir; kapalı vanayı açıp RESET'e basınca kombi yeniden çalışır. Kodların tam listesi [Warmhaus kombi hata kodları](/blog/warmhaus-kombi-hata-kodlari/) sayfasında.

**7. Musluk akışı zayıf mı?** Glowa kılavuzunun tesisat bölümünde önemli bir not var: kombi en az 0,5 bar musluk suyu basıncında çalışabiliyor, ama bu çok düşük bir akışa denk geliyor ve istenen sıcaklığı ayarlamak mümkün olmuyor. Warmhaus, sıcak suda konfor için en az 1 bar şebeke suyu basıncı istiyor, gerekirse hidrofor öneriyor. Soğuk su da zayıf akıyorsa sebep şebeke basıncı olabilir.

**8. Ayarlar doğruysa servis.** Vanalar açık, gaz var, kombi açık, ayar doğru, kod yok ya da sıfırlamadan sonra geri geliyorsa ev turu bitmiştir. Kılavuzların ortak talimatı: arıza devam ederse yetkili servisi ara.

## Petekler ısınıyor, sıcak su yok

Ewa'nın arıza tablosunda **E04** kodu tam bu tabloyu tarif ediyor: kombi sıcak kullanım suyu modunda çalışmıyor ama kalorifer modunda çalışıyor, muhtemel sebep sıcak su sıcaklık sensörü. Çözüm bir kez sıfırlamak, sürerse yetkili servis. Glowa'da **Er 04** aynı sensörün uyarısı olarak geçiyor. Sensör kombinin içinde, servis işi.

## Kireç ve hazır sıcak su

Ewa kılavuzu sıcak suyu mümkün olduğunca **38 ile 42 °C** civarında tutmanı öneriyor. Gerekçesi: yüksek sıcaklıklar güçlü kireçlenmeye neden oluyor, ısıtma süresi uzuyor, akış miktarı düşüyor. Kılavuz ayrıca Ewa'nın ECO moduna ayarlı geldiğini ve değiştirilmemesini önerdiğini yazıyor. Musluğu açınca uzun süre soğuk su akıyorsa bazı modellerde **hazır sıcak su** (ön ısıtma) işlevi var; Ewa ve Enerwa'da bunu yetkili servis parametreyle açıyor.

## Ne zaman servis

- Aynı kod sıfırlamadan sonra geri geliyorsa
- Petekler ısınıyor, sıcak su hiç gelmiyorsa (sensör kodu)
- Gaz vanası açık olduğu hâlde ateşleme kodu dönüyorsa
- Manometre 1 barın altında kalıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Vanalar, açma düğmesi, mod, sıcaklık ayarı ve sıfırlama sende; kombinin kapağının içi, gaz hattı, baca, sensörler, tesisata su doldurma ve servis parametreleri yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Glowa, Ewa, Enerwa)?
2. Ekranda hangi konum ve hangi kod var?
3. Musluk suyu ve gaz vanaları açık mı?
4. Manometre kaç bar gösteriyor?
5. Petekler ısınıyor mu?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız nedenler [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısında, basınç değerleri [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasında. Bil, gör, çağır.
