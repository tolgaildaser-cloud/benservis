---
title: "Vaillant kombi sıcak su vermiyor: ne kontrol edilir"
description: "Vaillant kombi sıcak su vermiyorsa kılavuz önce ayara bakıyor: sıcak su konumu, sıcaklık değeri, regler, soğuk su vanası, basınç ve F kodları."
slug: "vaillant-kombi-sicak-su-vermiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme D, fork A). Konu seçimi: origin/main'de vaillant-kombi-sicak-su-vermiyor yok
#   (Vaillant'ta calismiyor = "sıcak su da yok", kalorifer-isitmiyor, ariza-kodlari, F22, F28, S34, sembolleri var). Bu yazı ayrı belirti: musluğa sıcak su gelmiyor.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "vaillant kombi sıcak su" → 1. öneri "vaillant kombi sıcak su vermiyor";
#   "vaillant kombi sıcak su vermiyor" → "…ama petekler ısınıyor", "…neden", "…ne yapmalıyım". GSC 7 gün (https___www-6, 19 Eki): "vaillant kombi su ısıtmıyor neden" 3 gösterim.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile vaillant.com.tr'den yeniden indirildi: dördü de HTTP 200 application/pdf, md5 yerel kopyalarla aynı.
#   #88: forum/servis sitesi/üçüncü taraf kullanılmadı. Okuma pdftotext (sütun kırpmalı), sayfa = PDF sayfası.
#  (A) ecoTEC intro 8000037574_02  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf  16 s.  md5 2ad2ae698770f850da164d67e3ac3637
#  (B) ecoTEC plus/exclusive 0020282305_07  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf  20 s.  md5 7019a6c065efd6227ebac697dc91f175
#  (C) ecoTEC pure 0020250679_02  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf  20 s.  md5 f48176844c2865cf7cd48c96cd902121
#  (D) ecoTEC pro 0020228720_02  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pro_842041.pdf  12 s.  md5 5958d4db9b178710d1bf7c4ef3147f2e
# Gaz kokusu A s.3-4 · semboller A s.6 · sıcak su ayarı A s.8, B s.10, C s.11, D s.8 · lejyoner A s.8, D s.8 · kullanım suyu konumunu kapatma (OFF) C s.11
#   · 35-60 °C, <35 = OFF C s.16 · eBUS oda termostatı C s.10-11 · regler bağlıyken üründe maksimum D s.8 · kapatma vanaları/soğuk su kesme vanası C s.10, D s.7
#   · basınç A s.9, D s.8 · reset A s.10, B s.17, D s.11 · arıza tablosu A s.12, B s.17, C s.17, D s.11 · hava alma: A s.12 ve D s.11 yetkili servis, B s.17 kullanıcı (yapamazsa servis).
# BİLEREK YAZILMAYANLAR: "sıcak su yok ama petek ısınıyor" için parça teşhisi (3 yollu vana, akış sensörü, plakalı eşanjör, kart; kılavuzlarda yok)
#   · radyatör purjöründen hava alma (iki kılavuz servise bırakıyor) · lejyoner altı sıcaklık önerisi · "en sık neden" sıralaması · #46 kapsamı.
# Alıntı denetim tablosu: vaillant-kombi-sicak-su-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının (regler) kullanma kılavuzu (varsa)"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, gaz sayacı vanasını kapat, binayı terk et ve gaz şirketinin acil durum birimini dışarıdan ara."
  - "Ekranda F ile başlayan bir arıza kodu varsa önce o kodun tedbirini uygula; F.28 için gaz kesme vanasına bak, sonra reset tuşuyla kılavuzun izin verdiği kadar dene."
  - "Ekran tamamen kapalıysa kombi kapalıdır; açma kapama tuşuyla çalıştır, binadaki sigortayı kontrol et."
  - "Sıcak su konumunun kapatılmadığını kontrol et; ecoTEC pure'da sıcak su sıcaklığı ekranında OFF görünüyorsa sıcak su hazırlama kapalıdır."
  - "Sıcak su sıcaklığını kılavuzdaki tuşla aç ve değeri yükselt; lejyoner uyarısı nedeniyle yetkili bayiye danışmadan 60 °C'nin altına indirme."
  - "Kombiye regler ya da eBUS oda termostatı bağlıysa sıcak su sıcaklığını reglerden ayarla; ecoTEC pro'da üründeki sıcak su değerini en yükseğe al."
  - "Kombinin altındaki soğuk su kesme vanasının açık olduğunu kontrol et."
  - "Basınç düşükse ve F.22 görüyorsan kılavuzdaki doldurma adımlarını uygula; ayarlar doğru olduğu hâlde musluğa sıcak su gelmiyorsa yetkili servisi ara."
faq:
  - q: "Vaillant kombi sıcak su vermiyor ama petekler ısınıyor, neden?"
    a: "Vaillant'ın ecoTEC kullanma kılavuzlarındaki arıza tablosunda yalnız sıcak suyun kesildiği ayrı bir satır yok. Sıcak suyla ilgili maddeler şunlar: sıcak su sıcaklığının çok düşük ayarlanması, sıcak su işletiminin kapatılması ve soğuk su devresi kapatma vanasının kapalı olması. Üçü de doğruysa ve kalorifer çalışırken musluğa sıcak su gelmiyorsa sorun kullanıcı ayarlarının dışında demektir; kombinin içine bakmak yetkili servisin işi."
  - q: "Vaillant kombide sıcak su nasıl açılır?"
    a: "Model farklı. ecoTEC intro'da ana ekranda sıcaklık tuşuna iki kez basınca sıcak su değeri görünür, ok tuşlarıyla ayarlanıp onaylanır. ecoTEC plus'ta ana ekrandaki sıcak su sembolüne basılır. ecoTEC pure'da sıcak su sıcaklığı OFF'a indirilirse sıcak su hazırlama kapanır; yeniden bir değer seçip onaylamak gerekir."
  - q: "Vaillant kombide sıcak su kaç derece olmalı?"
    a: "ecoTEC pure kılavuzunda sıcak su ayar aralığı 35 ile 60 °C arası; 35'in altı OFF demek. ecoTEC intro ve pro kılavuzları lejyoner bakterisi nedeniyle yetkili bayiye danışmadan su sıcaklığının 60 °C'nin altına ayarlanmamasını istiyor."
  - q: "Oda termostatı bağlıyken kombiden sıcak su ayarı yapılmıyor, bozuk mu?"
    a: "Hayır. ecoTEC pure kılavuzuna göre kombiye eBUS oda termostatı bağlıysa sıcak su ve gidiş suyu sıcaklığı kombinin ekranından ayarlanamaz; ayar regler üzerinden yapılır. ecoTEC pro'da regler bağlıyken üründe mümkün olan en yüksek sıcak su değeri seçilir, istenen sıcaklık reglerden ayarlanır."
  - q: "Reset tuşuna kaç kez basabilirim?"
    a: "ecoTEC intro kılavuzu açma kapama tuşuna 3 saniyeden uzun basarak en fazla beş kez arıza gidermeye izin veriyor. ecoTEC plus'ta F.28 için tekrar sayısı en fazla 3. Ateşleme arızası bu denemelerle gitmiyorsa yetkili servise başvurmak gerekiyor."
images:
  coverAlt: "Banyo lavabosunda açık duran bir musluk ve duvarda asılı beyaz bir kombi"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda duvardaki oda termostatı"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kalorifer çalışıyor, ama musluğu açınca su ısınmıyor. Ya da kombi açık görünüyor, sıcak su hiç gelmiyor. Vaillant'ın ecoTEC intro, ecoTEC plus, ecoTEC pure ve ecoTEC pro kullanma kılavuzları bu durumu ayrı bir başlıkla anlatmıyor; ama dördü de sıcak su ayarını, sıcak su konumunun nasıl kapandığını ve arıza tablosunu aynı mantıkla veriyor. Aşağıda servisi çağırmadan önce evde bakabileceğin her şeyi bu dört kılavuzdan sırayla topladık. Tuş yerleri modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su yoksa ilk şüpheli ayar. Sıcak su konumu kapalı mı, sıcaklık çok mu düşük, regler bağlıysa sıcaklık oradan mı ayarlanıyor, soğuk su vanası açık mı? Ekranda F.22 ya da F.28 varsa önce onun tedbiri. Bunlar doğruysa Vaillant yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **Ekran kapalı** | Ürün kapalı ya da elektrik yok | 🛠️ Aç, sigortaya bak |
| **Musluk simgesi sürekli** | Sıcak su hazırlama etkin, talep yok | Kombi hazır |
| **Musluk simgesi yanıp sönüyor** | Güncel sıcak su talebi var | Kombi suyu ısıtıyor |
| **Sıcak su değerinde OFF** (ecoTEC pure) | Sıcak su hazırlama kapatılmış | 🛠️ Yeniden bir sıcaklık seç |
| **F.22** | Tesisat basıncı çok düşük | 🛠️ Basınca bak, doldur |
| **F.28** | Ateşleme başarısız | 🛠️ Gaz vanası, reset; sürerse servis |

## Adım adım kontrol

**1. Gaz kokusu varsa hiçbir şeye dokunma.** Kılavuzların emniyet bölümü açık: gaz kokusu olan yerde bulunma, kapı ve pencereleri aç, çakmak ve kibritten uzak dur, elektrik şalterini, prizi, zili ve telefonu kullanma. Gaz sayacındaki kapatma düzeneğini kapat, diğer sakinleri uyar, binayı terk et ve gaz şirketinin acil durum birimini evin dışındaki bir telefondan ara.

**2. Arıza kodu var mı?** Bir arıza olduğunda ana ekran arıza koduna geçer. **F.22** tesisat basıncının çok düşük olduğunu, **F.28** ateşlemenin başarısız olduğunu gösterir. F.28'de kılavuzların ilk tedbiri gaz kesme vanasının açık olup olmadığına bakmak. ecoTEC intro'da açma kapama tuşuna 3 saniyeden uzun basarak en fazla beş kez arıza giderilebiliyor; ecoTEC plus'ta bu sayı en fazla 3. Ayrıntılar [Vaillant kombi F28 hatası](/blog/vaillant-kombi-f28-hatasi/) yazısında.

**3. Kombi açık mı?** Arıza tablosunun ilk maddeleri basit: ürün kapalı olabilir ya da binadaki elektrik kesilmiş olabilir. Kılavuzun tedbiri binadaki sigortayı kontrol etmek; elektrik gelince kombi kendiliğinden çalışmaya başlar.

**4. Sıcak su konumu kapalı mı?** ecoTEC pure kılavuzunda sıcak su ayrıca kapatılabiliyor: sıcak su sıcaklığı ekranda **OFF** görünene kadar düşürülüp onaylanırsa **sıcak su hazırlama kapatılmıştır**. Ayar tablosuna göre 35 °C'nin altı zaten OFF demek. Arıza tablolarında da "sıcak su işletimi kapatılmış" ayrı bir neden olarak yazıyor.

**5. Sıcak su sıcaklığını kontrol et.** ecoTEC intro'da ana ekranda sıcaklık tuşuna **iki kez** basınca ayarlı sıcak su değeri görünür; ok tuşlarıyla değiştirip onaylarsın, değer iki kez hızla yanıp söner. ecoTEC plus'ta ana ekrandaki sıcak su sembolüne basıp değeri seçiyorsun. ecoTEC pure'da ayar aralığı **35–60 °C**. Kılavuzların uyarısı önemli: lejyoner bakterisi 60 °C'nin altında gelişir, yetkili bayiye danışmadan suyu 60 °C'nin altına ayarlama. Ayrıntılı tarif [Vaillant kombi sembolleri](/blog/vaillant-kombi-sembolleri-ve-anlamlari/) sayfasında.

**6. Regler bağlı mı?** Kombiye bir oda termostatı ya da regler bağlıysa sıcak su ayarı oradan yapılır. ecoTEC pure kılavuzuna göre **eBUS oda termostatı** bağlıyken sıcak su ve gidiş suyu sıcaklığı kombinin ekranından ayarlanamaz. ecoTEC pro'da regler bağlıyken önce üründe mümkün olan en yüksek sıcak su değeri seçilir, istenen sıcaklık reglerden ayarlanır. Reglerin kendi ayarı için onun kılavuzuna bak.

**7. Soğuk su kesme vanası açık mı?** Arıza tablolarında "soğuk su devresi kapatma vanası kapalı" ayrı bir neden. Vana yerini bilmiyorsan kılavuzun önerisi kombiyi kuran tesisatçıya sormak; vanayı açmak senin işin, tesisata müdahale değil.

**8. Basınç ve servis.** ecoTEC pro kılavuzuna göre basınç soğukken **1,0–2,0 bar** arasında olmalı; 0,5 barın altına düşerse kombi kapanır ve ekranda F.22 ile basınç dönüşümlü görünür. Doldurma adımları [Vaillant kombi F22 hatası](/blog/vaillant-kombi-f22-hatasi/) yazısında. Ayarlar doğru, kalorifer çalışıyor, yine de musluğa sıcak su gelmiyorsa ev turu bitmiştir: kılavuzlar arızayı belirtilen önlemlerle gideremezsen yetkili servise başvurmanı istiyor.

## Ne zaman servis

- Sıcak su konumu açık, sıcaklık yüksek, vana açık ama musluk soğuksa
- F.28 izin verilen reset denemelerinden sonra geri geliyorsa
- Basınç sık sık düşüyorsa
- Isıtma sisteminde hava varsa: ecoTEC intro ve pro hava almayı yetkili servise bırakıyor

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar, regler ayarı, soğuk su vanası ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı, elektrik bağlantısı ve tesisat uzmanın.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (intro, plus, pure, pro)?
2. Ekranda bir F kodu ya da OFF var mı?
3. Kalorifer çalışıyor mu, yoksa ikisi de mi yok?
4. Regler ya da oda termostatı bağlı mı?
5. Basınç soğukken kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ne sıcak su ne ısıtma varsa [Vaillant kombi çalışmıyor](/blog/vaillant-kombi-calismiyor/) yazısına, marka bağımsız nedenler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
