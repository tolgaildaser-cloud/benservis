---
title: "Panasonic klima POWER ışığı yanıp sönüyor: arıza mı?"
description: "Panasonic klimada POWER ışığı yanıp sönüyorsa kılavuz çoğu durumu arıza saymıyor: ısıtma başlangıcı, buz çözme, çoklu sistemde bekleme, zamanlayıcı."
slug: "panasonic-klima-power-isigi-yanip-soniyor"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0'da "panasonic" geçen slug/başlık/gövde yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "panasonic klima power" → 1. panasonic klima power ışığı yanıp sönüyor, 2. powerful,
#   3. power blinkt. "panasonic klima ı" → 3. sırada aynı sorgu. GSC: panasonic satırı yok.
# Belge: Panasonic CS-TZ..ZKEW kullanım kılavuzu (TR, WEB-ACXF55-35140-TR), bu koşuda HTTP 200, md5 644a0a7789a6d5d38ed511829c6fe515.
# BİLEREK YAZILMAYANLAR: dış ünite buz çözme mekanizmasının ayrıntısı · kart teşhisi · başka seriler · fiyat (#46).
#   Alıntı denetimi: panasonic-klima-power-isigi-yanip-soniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Uzaktan kumanda"]
steps:
  - "Klimanın hangi modda olduğuna ve POWER ışığının ne zaman yanıp söndüğüne bak."
  - "Klima ısıtmada ve sıcak hava gelmiyorsa buz çözmenin bitmesini bekle."
  - "Evde aynı dış üniteye bağlı başka iç ünite varsa hepsini aynı moda al."
  - "Soğutma seçince ışık yanıp sönüyorsa sistemin yalnız ısıtmaya kilitli olup olmadığını yetkili satıcıya sor."
  - "Klima açılmadan önce yanıp sönüyorsa kumandada kurulu zamanlayıcıyı kontrol et."
  - "Filtreleri temizle, hava giriş ve çıkışını açık tut."
  - "Klima durur ve TIMER ışığı da yanıp sönerse kumandadan hata kodunu oku ve servise bildir."
faq:
  - q: "Panasonic klimada POWER ışığı yanıp sönüyor ama sıcak hava gelmiyor, neden?"
    a: "TZ serisi kılavuzunun arıza olmayan durumlar tablosuna göre ISITMA modunda GÜÇ göstergesi yanıp sönüyor ve sıcak hava gelmiyorsa (kanatçık kapalı) ürün defrost yani buz çözme modundadır. Isıtma sırasında dış ünitede oluşan buzlanma bu döngüde erir."
  - q: "Klimayı ilk açtığımda POWER ışığı yanıp sönüyor, bozuk mu?"
    a: "Hayır. Kılavuza göre AUTO ve ISITMA modlarında GÜÇ göstergesi ilk aşamada yanıp söner. Isıtmada kılavuz ünitenin ısınması için biraz zaman tanımayı öneriyor."
  - q: "İki odadaki klima aynı anda çalışınca biri yanıp sönüyor, neden?"
    a: "Çoklu (multi split) sistemde çalışma önceliği ilk çalıştırılan üniteye verilir ve farklı iç ünitelerde aynı anda ISITMA ve SOĞUTMA etkinleştirilemez. Kılavuz, güç göstergesinin yanıp sönmesinin ünitenin farklı çalışma modu yüzünden beklemede olduğunu gösterdiğini yazıyor."
  - q: "Soğutma seçince ışık yanıp sönüyor, sonra duruyor. Ne demek?"
    a: "Tabloda 'GÜÇ göstergesi yanıp söner ve SOĞUTMA/NEM ALMA modu sırasında yanıp sönmesi durur' satırının sebebi 'Sistem yalnızca ISITMA modunda çalışması için kilitlenmiştir'. Bu bir ayar; açtırmak için yetkili satıcıya danış."
images:
  coverAlt: "Kış günü salon duvarında çalışan beyaz bir split klima iç ünitesi"
  steps:
    - "Klima iç ünitesinin ön yüzündeki küçük gösterge lambaları yakından"
    - "Kanatçığı kapalı duran bir split klima ve önünde boş bir koltuk"
    - "Koridorun iki ucundaki odalarda duvara asılı iki ayrı klima iç ünitesi"
    - "Masada duran bir klima kumandası ve yanında katlanmış kullanma kılavuzu"
    - "Komodinin üstünde ekranı aydınlanmış bir klima kumandası"
    - "Lavabonun kenarında kurumaya bırakılmış ince ağlı klima filtreleri"
    - "Sehpada açık bir not defteri ve klima kumandası"
---

Panasonic klimanın ön panelindeki **POWER** ışığı yanıp sönüyor, klima bazen üflüyor, bazen susuyor. Bu belirti çoğu zaman arıza değil. Panasonic'in TZ serisi (CS-TZ..ZKEW) Türkçe kullanım kılavuzu, GÜÇ göstergesinin yanıp söndüğü birkaç ayrı durumu tarif ediyor; bunların bir kısmını "Daha fazlası için" bölümünde, bir kısmını "Aşağıdaki durumlar üründe arıza olduğunu göstermez" tablosunda anlatıyor. Bu yazıda o durumları sırayla ayırdık. Kılavuz bu seriye ait; senin modelinde davranış farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** POWER ışığı ısıtma başında, buz çözmede, çok odalı sistemde mod çakışmasında ve zamanlayıcı öncesinde yanıp söner; bunlar arıza değil. Klima durmuş ve **TIMER** ışığı yanıp sönüyorsa durum farklı: kodu oku ve servise bildir.

## Işık ne söylüyor

| Gördüğün | Kılavuza göre sebebi | Ne yapılır |
|---|---|---|
| **AUTO ya da ISITMA, ilk dakikalar** | İlk aşamada yanıp söner | ⏳ Bekle |
| **ISITMA, sıcak hava yok, kanatçık kapalı** | Defrost (buz çözme) | ⏳ Bekle |
| **Çok odalı sistem, başka odada farklı mod** | Ünite beklemede | 🛠️ Odaları aynı moda al |
| **SOĞUTMA seçince yanıp sönüp duruyor** | Sistem yalnız ısıtmaya kilitli | Yetkili satıcıya sor |
| **Klima açılmadan önce yanıp sönüyor** | Zamanlayıcıya hazırlık | Normal |
| **Ünite durdu, TIMER yanıp sönüyor** | Hata kaydı | 🛠️ Kodu oku |

## Adım adım: sebebi ayır

**1. Mod ve zaman.** Kumandanın ekranında hangi modun seçili olduğuna ve ışığın ne zaman yanıp sönmeye başladığına bak. Kılavuza göre **AUTO** modunda GÜÇ göstergesi **ilk aşamada yanıp söner**; ünite çalışma modunu tek sistemde ayara ve oda sıcaklığına göre **10 dakikada bir** seçer. **ISITMA** modunda da ışık ilk aşamada yanıp söner ve kılavuz "ünitenin ısınması biraz zaman ayır" diyor.

**2. Isıtmada buz çözme.** Kılavuzun tablosundaki satır: **ISITMA modunda GÜÇ göstergesi yanıp sönüyor, sıcak hava gelmiyor (ve kanatçık kapalı)** ise ürün **defrost (buz çözme)** modundadır. Aynı tablo, ısıtma sırasında dış ünitede oluşan buzlanmanın bu döngüde eridiğini ve **su ya da buhar** olarak atıldığını da yazıyor. Yani balkonda dış üniteden buhar çıkması bu sırada normal. Ayrıntı [klima dış ünite buzlanma](/blog/klima-dis-unite-buzlanma/) yazısında.

**3. Çok odalı sistem.** Evde birden fazla iç ünite aynı dış üniteye bağlıysa kılavuzun "Çalışma modu" maddeleri geçerli: **çalışma önceliği ilk çalıştırılan üniteye verilir**, farklı iç ünitelerde **aynı anda ISITMA ve SOĞUTMA etkinleştirilemez** ve **güç göstergesinin yanıp sönmesi, ünitenin farklı çalışma modundan dolayı beklemede olduğunu gösterir**. Bütün odaları aynı moda al.

**4. Isıtmaya kilit.** Tablodaki başka bir satır: GÜÇ göstergesi yanıp söner ve **SOĞUTMA/NEM ALMA** modu sırasında yanıp sönmesi durur; sebebi **sistemin yalnızca ISITMA modunda çalışması için kilitlenmiş** olması. Kılavuz ayrıca ISITMA kilitliyken başka bir mod seçilirse iç ünitenin durduğunu ve GÜÇ göstergesinin yanıp söndüğünü yazıyor. Bu bir sistem ayarı; değiştirmek için yetkili satıcıya danış.

**5. Zamanlayıcı.** Klima sen açmadan ışık yanıp sönüyorsa tablodaki ilk satıra bak: GÜÇ göstergesi **cihaz açılmadan önce** yanıp söner, çünkü zamanlayıcı AÇIK kurulduğunda ünite istenen sıcaklığa zamanında ulaşmak için ayarlanan saatten **35 dakikaya kadar** önce çalışmaya başlayabilir. Zamanlayıcı ayarı da her gün tekrar eder. Kumandadaki zamanlayıcı ayarları [Panasonic klima kumandası nasıl kullanılır](/blog/panasonic-klima-kumandasi-nasil-kullanilir/) yazısında.

**6. Filtre ve hava yolu.** Kılavuzun "ISITMA/SOĞUTMA işlemi verimli çalışmıyor" satırındaki kontroller şunlar: sıcaklığı doğru ayarla, kapı ve pencereleri kapat, **filtreleri temizle ya da değiştir**, hava giriş ve çıkış ağızlarındaki engelleri kaldır. Filtreye dokunmadan önce güç kaynağını kapat ve fişi çek. Yöntem [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**7. TIMER da yanıp sönüyorsa kod.** Ünite durmuş ve ZAMANLAYICI göstergesi yanıp sönüyorsa kılavuz kodu kumandadan okumayı istiyor: düğmeye **5 saniye** bas, bip sesine kadar ikinci düğmeye bas, kodu not et, çıkmak için yine 5 saniye bas, ürünü kapat ve kodu yetkili satıcına bildir. Anlamları [Panasonic klima arıza kodları](/blog/panasonic-klima-hata-kodlari/) sayfasında.

## Elektrik kesintisinden sonra

Kılavuzdaki "Otomatik Yeniden Başlatma Kontrolü"ne göre elektrik kesintisinden sonra elektrik geldiğinde klima **son çalışma modu ve hava akış yönüyle** kendiliğinden yeniden başlar. Bu kontrol zamanlayıcı ayarlıyken geçerli değil. Kesintiden sonra klimanın kendi kendine çalışması bu yüzden normaldir.

## Ne zaman servis

- Buz çözme dışındaki zamanlarda ısıtmada hiç sıcak hava gelmiyorsa
- TIMER ışığı da yanıp sönüyor ve kumanda bir kod gösteriyorsa
- İç ünite su akıtıyorsa ya da sigorta sık sık atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, mod ayarı ve filtre sende; ısıtma kilidi ayarı, dış ünite, gaz ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. İç ünitenin etiketindeki model ne?
2. Işık hangi modda yanıp sönüyor?
3. Evde aynı dış üniteye bağlı başka iç ünite var mı?
4. TIMER ışığı da yanıp sönüyor mu, kod okundu mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isıtma tarafı için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına bak. Bil, gör, çağır.
