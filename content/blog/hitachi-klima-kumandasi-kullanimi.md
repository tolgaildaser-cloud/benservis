---
title: "Hitachi klima kumandası kullanımı: soğuk, sıcak ve reset"
description: "Hitachi klima kumandasında soğuk ve sıcak ayarı, MODE sırası, saat kurma, zamanlayıcı, mod kilidi ve RESET. RAR-6NE1 kumanda kılavuzuna göre tuş tuş."
slug: "hitachi-klima-kumandasi-kullanimi"
date: "2026-10-27"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ alt ajanı (günlük yazı, tek marka). origin/main 9ed539dc content/blog/ altında "hitachi" geçen yazı, slug ya da başlık YOK.
#   Markasız klima-kumandasi-calismiyor farklı sorgu (arıza); diğer marka kumanda rehberleri (Hisense, Carrier, SEG, Panasonic) başka marka sorgusu.
#   Dalga 6–8, marka-25eki ve blog-taslaklar klasörlerinde Hitachi yazısı yok.
# OT (#164, bu koşu 26 Eki 22:11, hl=tr gl=tr): "hitachi klima" → 1. hitachi klima · 2. "hitachi klima kumandası" · 3. …fiyatları.
#   "hitachi klima kumandası" → 2. …ayarları · 3. …soğuk ayarı · 4. …resetleme · 5. …nasıl kullanılır · 7. …pil değişimi · 8. …sıcak ayarı. GSC (www-5, www-6): "hitachi" satırı yok.
# Belge (#88) bu koşuda indirildi; zincir (yerleşik tarayıcı, curl Incapsula bot korumasına takılıyor):
#   https://www.hitachiaircon.com/uk/resources (200) → https://www.hitachiaircon.com/uk/resources/controls-and-accessories/rac-controls/om-ir-remote-performance-shirokuma (200)
#   → https://www.hitachiaircon.com/uk/download/160/6adfa5106015b (200 application/pdf, "OM IR Remote - Performance & Shirokuma.pdf", 300 s., kapak "Remote Controller Manual MODEL RAR-6NE1")
#   md5 fd2404a19adea02cf5421599e1d41f82. İngilizce bölüm PDF s.1–30. Türkçe bölüm yok (EN, DE, FR, IT, ES, PT, EL, SV, NL, FI).
#   TR sitesi https://www.hitachiaircon.com/tr/kaynaklar/klima (200) yalnız katalog veriyor, kullanım kılavuzu yok.
# BİLEREK YAZILMAYANLAR: hata kodlarının anlamı (kılavuz yalnız INFO ile kodun görüneceğini ve servise bildirilmesini söylüyor) · evrensel kumanda kodu ·
#   RAR-2P2 gibi başka kumandaların tuşları · Wi-Fi/uygulama eşleme · fiyat (#46).
# Alıntı denetim tablosu: hitachi-klima-kumandasi-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Hitachi klima kumandası", "İki adet AAA (LR03) alkalin pil"]
steps:
  - "Kumandanın kapağını kaydırıp çıkar, iki AAA alkalin pili yuvadaki işaretlere göre tak ve kapağı geri kaydır."
  - "RESET tuşuna bas, yılı, günü, ayı ve saati TIME ile ayarlayıp her adımı CLOCK tuşuyla geç."
  - "MODE tuşuna basarak otomatik, ısıtma, nem alma, soğutma ya da fan modunu seç."
  - "Sıcaklık tuşlarıyla ayarı 16 ile 32 °C arasında yap, FAN SPEED ile fan hızını seç ve START/STOP'a bas."
  - "AUTO SWING tuşlarıyla kanatları dikey ya da yatay salla, istediğin konumda yeniden basıp durdur."
  - "Gerektiğinde POWERFUL, SILENT, ECO ya da LEAVE HOME tuşuyla özel modu aç, aynı tuşla kapat."
  - "OFF-TIMER ya da ON-TIMER'a bas, saati TIME ile seç ve kumandayı iç üniteye tutarak SEND'e bas."
  - "Mod değişmiyorsa kumanda kapalıyken ECO ile POWERFUL ya da ECO ile SILENT tuşlarını 5 saniye birlikte basılı tutarak kilidi aç."
faq:
  - q: "Hitachi klima kumandasında soğuk ayarı nasıl yapılır?"
    a: "MODE tuşuna, ekranda soğutma (COOL) görünene kadar bas. Sıcaklık tuşlarıyla ayarı oda sıcaklığının altına indir ve START/STOP'a bas. Kılavuza göre ayar oda sıcaklığından yüksekse çalışma ışığı yansa da soğutma başlamaz; ayarı oda sıcaklığının altına indirince başlar."
  - q: "Sıcak ayarı nasıl yapılır?"
    a: "MODE tuşuyla ısıtmayı (HEAT) seç, sıcaklığı 16–32 °C arasında ayarla ve START/STOP'a bas. Kılavuz ısıtmanın dış hava 21 °C'nin altındayken kullanılmasını istiyor; daha sıcak havada cihazı korumak için ısıtma çalışmayabilir."
  - q: "Hitachi klima kumandası nasıl resetlenir?"
    a: "Kumandadaki RESET tuşuna basılır. Kılavuza göre RESET, kumandada kayıtlı bütün bilgileri siler; takvim, saat ve gerekli ayarları yeniden yapman gerekir. Mod kilidini de açar."
  - q: "Pil değiştirince saat neden silindi?"
    a: "Kılavuza göre pil değişince takvim ve saat yeniden kurulmalı. RESET'e bas, sonra kumandayı iç üniteye tutup INFO tuşuna bas; iç ünite saati kumandaya gönderir. Elektrik kesildiyse ya da sigorta kapatıldıysa bu aktarım olmaz, saati elle kurarsın."
  - q: "Kumandada hata kodu nasıl görülür?"
    a: "Klimada arıza varsa kumandayı iç ünitenin alıcısına 2 metre içinden tut ve INFO tuşuna bas, 2 saniye bekle; ekranda bir hata kodu görünür. Kılavuz bu kodu yetkili servise bildirmeni istiyor; kodların anlamını vermiyor."
images:
  coverAlt: "Beyaz bir klima kumandası ve arkada duvara monte edilmiş split klima iç ünitesi"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kumandanın pilleri"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda saat ve zamanlayıcı ayarı"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kumanda tuşları ve ekranı"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kumanda tuşları ve ekranı"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda saat ve zamanlayıcı ayarı"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
---

Hitachi klima kumandasında MODE tuşu beş modu sırayla dolaşıyor, saat kurulmadan zamanlayıcılar çalışmıyor ve bazı tuş ikilileri modu kilitliyor. Soğuk ya da sıcak ayarı yapamıyorsan, pil değişince saat silindiyse ya da mod değişmiyorsa sebep çoğu zaman bunlardan biri. Bu yazı, Hitachi'nin klima sitesinde "Performance & Shirokuma" duvar tipi serilerinin kumandası olarak yayımlanan **RAR-6NE1 kumanda kılavuzuna** dayanıyor. Türkçe baskı bulunamadı; **kılavuzun İngilizce baskısı** kullanıldı, alıntılar Türkçeye çevrildi. Senin kumandan başka bir modelse tuş adları farklı olabilir; kumandanın üstündeki model adına bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** MODE ile modu, sıcaklık tuşlarıyla ayarı seç, START/STOP'a bas. Soğutma, ayar oda sıcaklığının altındaysa başlar. Pil değişince RESET'e bas ve saati yeniden kur. Mod değişmiyorsa kilit açıktır: kumanda kapalıyken ECO ile POWERFUL ya da ECO ile SILENT tuşlarını 5 saniye birlikte basılı tut.

## Tuşlar ne işe yarıyor

| Tuş | Görevi |
|---|---|
| **MODE** | Otomatik → ısıtma → nem alma → soğutma → fan |
| **FAN SPEED** | Otomatik → yüksek → orta → düşük → sessiz |
| **Sıcaklık ▲ / ▼** | Ayar sıcaklığı, 16–32 °C |
| **START/STOP** | Çalıştırır, tekrar basınca durdurur |
| **POWERFUL / SILENT / ECO** | Tam güç, çok yavaş fan, enerji tasarrufu |
| **LEAVE HOME** | Evde kimse yokken 10–16 °C koruma ısıtması |
| **SLEEP** | ECO uyku zamanlayıcısı |
| **INFO** | Kumanda çevresindeki sıcaklık, aylık tüketim, hata kodu |
| **FROST WASH / CLEAN** | İç ünite eşanjörünün temizlik çalışması |
| **RESET** | Kumandadaki bütün kayıtları siler |

## Adım adım: kumandayı kullanmak

**1. Pilleri tak.** Kapağı kaydırıp çıkar, iki adet AAA (LR03) alkalin pili yuvadaki işaretlere göre tak, kapağı yerine kaydır. Kılavuza göre yeni pil takıldıktan sonra kumandanın komutlara cevap vermesi yaklaşık 10 saniye sürüyor. Piller yaklaşık bir yıl dayanıyor; ekran soluklaşırsa ya da sinyal zayıflarsa iki pili birlikte, aynı türden yenileriyle değiştir.

**2. Takvim ve saati kur.** İlk kurulumda **RESET** tuşuna bas; yıl yanıp söner. TIME ile yılı ayarla, CLOCK'a bas. Gün ve ay yanıp söner; TIME ile ayarla, CLOCK'a bas. Saati de TIME ile ayarlayıp CLOCK ile bitir. Kılavuza göre takvim ve saat kurulmadan açılma, kapanma ve haftalık zamanlayıcı ayarlanamıyor. Pil değişince RESET'e bas, kumandayı iç üniteye tut ve **INFO**'ya bas; iç ünite saati kumandaya gönderir.

**3. Modu seç.** MODE tuşuna her basışta mod sırayla değişir: **otomatik, ısıtma, nem alma, soğutma, fan**. Otomatikte klima oda sıcaklığına göre ısıtma ya da soğutmayı kendisi seçer. Kılavuz çalışırken mod değiştirince klimanın koruma için yaklaşık 3 dakika durabileceğini, dış ünitenin de durduktan sonra 3 dakika yeniden kalkmadığını yazıyor; bu arıza değil.

**4. Sıcaklığı ve fanı ayarla.** Sıcaklık tuşlarıyla ayarı **16–32 °C** arasında yap, FAN SPEED ile hızı seç, START/STOP'a bas; klima bip sesiyle başlar. Ayarlar kumandanın hafızasında kalır, sonraki sefer yalnız START/STOP yeterli. **Soğuk ayarı:** soğutma, ayar oda sıcaklığından yüksekse çalışma ışığı yansa bile başlamaz. **Sıcak ayarı:** kılavuz ısıtmanın dış hava 21 °C'nin altındayken kullanılmasını istiyor. Nem almada fan düşükte başlar, önerilen ayar 20–26 °C.

**5. Hava yönünü ayarla.** AUTO SWING (dikey) tuşu kanatları aşağı yukarı, AUTO SWING (yatay) tuşu sağa sola sallar. Aynı tuşa yeniden basınca kanat o anki konumunda durur. Kılavuz soğutma ve nem almada kanatların uzun süre sallanmasını ya da en alt konumda kalmasını önermiyor; kanatlarda yoğuşma olabiliyor.

**6. Özel modları kullan.** **POWERFUL** klimayı tam güçte çalıştırır ve 20 dakika sonra önceki ayara döner. **SILENT** fanı çok yavaşa alır. **ECO** ayar sıcaklığını kendiliğinden kaydırıp tüketimi sınırlar; hareket sensörlü modellerde oda 20 dakika boş kalınca ayar kayar. **LEAVE HOME** 10 °C'de ısıtmaya başlar, ayarı 10–16 °C arasında yaparsın. Her modu aynı tuşa yeniden basarak ya da START/STOP ile kapatırsın.

**7. Zamanlayıcıyı kur.** Kapanma için OFF-TIMER'a bas, saati TIME ile seç, kumandayı iç üniteye tutup **SEND**'e bas; iç ünitedeki zamanlayıcı ışığı yanar. Açılma ON-TIMER ile aynı şekilde kurulur. **SLEEP** tuşu her basışta 1, 2, 3 ve 7 saat arasında geçer; süre dolunca klima kapanır. Zamanlayıcıyı CANCEL ile iptal edersin.

**8. Kilit ve RESET.** Soğutmaya ya da ısıtmaya geçemiyorsan mod kilidi açık olabilir. Kumanda kapalıyken **ECO ile POWERFUL** tuşlarını yaklaşık 5 saniye birlikte basılı tutmak ısıtma kilidini, **ECO ile SILENT** soğutma ve nem alma kilidini açıp kapatır. Zamanlayıcı kuruluyken kilit çalışmaz. RESET de kilidi açar, ama kumandadaki bütün bilgileri siler.

## Frost Wash ve hata kodu

Kumanda kapalıyken **FROST WASH / CLEAN** tuşuna basınca iç ünitenin eşanjörü dondurulup çözülerek tozdan arındırılır; kılavuza göre yaklaşık iki saat sonra kendiliğinden durur. Bu sırada pencereyi açma, ön paneli açma ya da sökme. Arıza varsa kumandayı iç üniteye 2 metre içinden tut, **INFO**'ya bas ve 2 saniye bekle; ekranda hata kodu görünür. Kılavuz kodun anlamını vermiyor, servise bildirmeni istiyor.

## Ne zaman servis

- Yeni pille, kilit kapalıyken klima kumandaya hiç cevap vermiyorsa
- INFO tuşu ekranda bir hata kodu gösteriyorsa
- Ayar doğru olduğu halde klima seçtiğin modda soğutmuyor ya da ısıtmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Pil, saat, mod, kilit ve ayarlar sende; iç ünitenin alıcısı, kartı, gaz ve elektrik bağlantıları Hitachi yetkili servisinin.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kumanda hiç çalışmıyorsa [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/), ısıtma ayarı için [klima ısıtma modu kaç derece olmalı](/blog/klima-isitma-modu-kac-derece-olmali/), filtre bakımı için [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısına bak. Bil, gör, çağır.

---

**Kaynak künyesi.** Tuş görevleri, ayar aralıkları, zamanlayıcı, mod kilidi, RESET ve INFO bilgileri Hitachi'nin klima sitesinde yayımlanan RAR-6NE1 kumanda kılavuzunun ("OM IR Remote - Performance & Shirokuma") İngilizce bölümünden alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
