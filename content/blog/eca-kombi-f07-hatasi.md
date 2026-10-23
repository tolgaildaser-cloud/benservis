---
title: "ECA kombi F7 (F07) hatası: baca gazı sıcaklığı"
description: "ECA kombide F7 (F07) baca gazı sıcaklığının 95 °C'yi aşması demek. Reset neden silmez, F58 ve E83 tekrarı, baca uyarısı ve servis; ECA kılavuzlarından."
slug: "eca-kombi-f07-hatasi"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork C). Konu seçimi: origin/main'de eca-kombi-f07-hatasi yok.
#   ECA'da origin/main'de eca-kombi-ariza-kodlari (F07'yi tablo satırı olarak anıyor) + E01/E03/F37/F40 tek kod sayfaları + kalorifer-isitmiyor var.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "eca kombi f" → 1. "…fiyatları 2026", 2. "…fiyatı", 3. "eca kombi f7 hatası";
#   "eca kombi f7" → "…f7 hatası", "…f7 arızası nedir"; "eca kombi f07" → 1. "eca kombi f07 hatası", 2. "…nasıl giderilir", 5. "eca kronos kombi f07 hatası".
# GSC (https___www-6, 7 gün): ECA F07 sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile eca.com.tr'den yeniden indirildi: üçü de HTTP 200 application/pdf, md5 yerel kopyalarla
#   (kaynak-eca-sprint/) birebir. pdftotext -layout, sayfa = PDF sayfası. #88: forum/servis sitesi kullanılmadı.
#  (P) Proteus Premix  https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf  48 s.  md5 28a5d7565ffbc9c1faaf1e97e45553d9
#  (C) Confeo Premix   https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf  44 s.  md5 4ef56163ac14c46f9cb1dcb9ea189681
#  (T) Citius Premix   https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf  40 s.  md5 023164f7b7cebedc931411900edd72b0
# Gaz kokusu P s.5, C s.5, T s.4 · menfez + baca bağlantısı değişikliği P s.5, C s.5, T s.4 · CO tehlikesi P s.17, C s.15, T s.14
#   · EXX/FXX ve Reset P s.26, C s.23, T s.22 · ASE P s.28, T s.24 · F07, F13, F53, F58 P s.30 · F07, F13, E83 C s.28, F53 C s.29
#   · F07, F13 T s.25, F53, F58 T s.26. Kronos kılavuzu elimizde yok; yazı üç Premix ailesiyle sınırlı.
# BİLEREK YAZILMAYANLAR: F07'nin olası nedeni (tıkalı baca, eşanjör vb.; F07 satırı neden vermiyor, yalnız E83 "Ana Isı Eşanjörü Sorunu" diyor)
#   · baca kontrolü/temizliği kullanıcı adımı olarak · F07'yi resetle silme yöntemi (belgeye göre silinmez) · fiyat (#46) · pazar bağlantısı.
#   Alıntı denetim tablosu: eca-kombi-f07-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; gaz vanalarını kapat, kapı ve pencereleri aç, 187'yi ara."
  - "Ekrandaki kodu ve kombinin modelini not et; F07 baca gazı sıcaklığının 95 °C'yi aştığını gösterir."
  - "Reset'e art arda basma; F07 geçici bir hata, Reset tuşuyla ekrandan silinmez."
  - "Baca bağlantısına ve baca setine dokunma, kombinin bulunduğu odadaki havalandırma menfezlerinin önünü açık tut."
  - "E.C.A. yetkili servisine haber ver; kılavuzun F07 için verdiği tek çözüm bu."
  - "F07'nin kaç kez çıktığını not et; bir ay içinde ikinci kez çıkarsa ekranda F58 ya da Confeo'da E83 görebilirsin."
faq:
  - q: "ECA kombide F7 ya da F07 ne demek?"
    a: "ECA'nın Proteus, Confeo ve Citius Premix kılavuzlarında F07 baca gazı sıcaklık hatası. Kod, baca gazı sıcaklığı 95 °C'yi aştığında ortaya çıkar. Üç kılavuzun çözüm sütununda tek madde var: E.C.A. yetkili servisine haber vermek."
  - q: "F07 hatasını Reset ile silebilir miyim?"
    a: "Hayır. ECA kılavuzlarına göre F ile başlayan kodlar geçici arızadır ve Reset tuşu ile ekrandan giderilemez; hata durumu düzeldiğinde kod ekrandan kendiliğinden kaybolur. Üstelik 1 saat içinde 5'ten fazla Reset'e basılırsa F13 fazla resetleme hatası çıkar ve onun çözümü de yetkili servis."
  - q: "F07 kayboldu, kombi yine çalışıyor; servisi yine de aramalı mıyım?"
    a: "Kılavuzun F07 için tek talimatı yetkili servise haber vermek. Ayrıca Proteus ve Citius Premix'te bir ay içinde iki kez F07 çıkarsa F58 baca gazı yüksek sıcaklıkta kilitlenme hatası oluşuyor; Confeo Premix'te bu durum E83 uyarısı olarak görünüyor."
  - q: "F07 ile F53 aynı şey mi?"
    a: "Hayır. F07 baca gazı sıcaklığının 95 °C'yi aşması. F53 baca gazı sıcaklık sensörünün kısa ya da açık devre olması. İkisinde de kılavuzun çözümü yetkili servis."
  - q: "Baca borusunu kendim kontrol edebilir miyim?"
    a: "ECA kılavuzları baca bağlantılarında yetkili servise danışılmadan herhangi bir değişiklik yapılmamasını istiyor. Montaj bölümündeki tehlike notuna göre baca setinin sızdırmaz sabitlenmemesi, baca bağlantılarından karbon monoksit sızmasına ve zehirlenmeye yol açabilir."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve üstünden duvara giren baca borusu"
  steps:
    - "Ardına kadar açık bir pencere ve boş, sakin bir mutfak"
    - "Kombi ekranında yanıp sönen kısa bir uyarı yazısı"
    - "Kombi panelinde diğerlerinden ayrı duran yuvarlak bir tuş"
    - "Duvarın üst kısmında açık bırakılmış bir havalandırma menfezi"
    - "Kombinin yanında tezgâhta duran kapalı bir telefon ve katlanmış bir kılavuz"
    - "Mutfak tezgâhında duran küçük bir defter ve kalem"
---

Kombi ekranında F07 yanıp sönüyor, aramalarda çoğu zaman başındaki sıfır olmadan F7 diye yazılıyor. ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kullanma kılavuzlarında bu kodun anlamı aynı: **baca gazı sıcaklığı 95 °C'yi aştı.** Üç kılavuz da bu kod için kullanıcıya tek bir iş bırakıyor ve o iş bir tuş değil, bir telefon. Bu yazıda F07'nin ne demek olduğunu, neden resetle gitmediğini, tekrar ederse hangi kodun geleceğini ve nerede durman gerektiğini bu üç kılavuzdan topladık. Senin kombin başka bir ECA ailesindense kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F07, baca gazı sıcaklığının 95 °C'yi aşması demek. Çözüm sütununda tek madde var: E.C.A. yetkili servisine haber ver. F kodu geçici hatadır, Reset'le silinmez; 1 saatte 5'ten fazla Reset F13 hatasına götürür. Bir ay içinde iki kez F07 çıkarsa Proteus ve Citius'ta F58 kilitlenmesi, Confeo'da E83 uyarısı gelir.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **F07** | Baca gazı sıcaklığı 95 °C'yi aştı | Yetkili servis |
| **F53** | Baca gazı sıcaklık sensöründe kısa ya da açık devre | Yetkili servis |
| **F58** (Proteus, Citius) | Bir ayda iki kez F07: baca gazı yüksek sıcaklıkta kilitlenme | Yetkili servis |
| **E83** (Confeo) | Son bir ay içinde iki kez F07: ana ısı eşanjörü sorunu | 🛠️ Bir kez Reset, sürerse servis |
| **F13** | 1 saat içinde 5'ten fazla Reset | Yetkili servis |

## Adım adım

**1. Gaz kokusu varsa hiçbir şeye dokunma.** ECA kılavuzlarının emniyet kuralları: cihazın gaz vanasını ve gazla çalışan diğer bütün cihazların vanalarını kapat, ocak ve fırın gibi cihazların alevini söndür, kibrit ya da çakmak yakma, kapı ve pencereleri açıp ortamı havalandır. Elektrikli cihazların düğmelerine ve fişlerine dokunma, daire ve bina girişindeki gaz vanalarını kapat, gaz kokan ortamdaki telefonları kullanma. Zaman kaybetmeden **187**'den gaz şirketine haber ver, durumu en yakın yetkili servise bildir.

**2. Kodu ve modeli not et.** Proteus ve Citius'ta kod **F07 Baca Gazı Sıcaklık Hatası**, Confeo'da **Yüksek Baca Gazı Sıcaklığı Hatası** olarak geçiyor. Üçünde de tanım aynı: kod, baca gazı sıcaklığı **95 °C'yi aştığında** meydana gelir.

**3. Reset'e art arda basma.** ECA kılavuzları arızaları ikiye ayırıyor. **E ile başlayan** kalıcı arızalarda hata düzeldikten sonra Reset'e bir kez basılarak kombi normal çalışmaya döner. **F ile başlayan** geçici arızalarda ise Reset tuşu kodu ekrandan **silmez**; hata durumu düzeldiğinde kod kendiliğinden kaybolur. F07 bir F kodu. Üstelik 1 saat içinde 5'ten fazla Reset'e basılırsa ekrana **F13 fazla resetleme hatası** gelir ve onun çözümü de doğrudan yetkili servis.

**4. Bacaya dokunma, menfezi kapatma.** F07 bacadan çıkan gazla ilgili bir kod, ama baca senin kontrol edeceğin bir parça değil. Kılavuzların emniyet bölümü iki şey söylüyor: baca bağlantılarında yetkili servise danışılmadan herhangi bir değişiklik yapılmamalı ve kombinin bulunduğu ortamdaki havalandırma menfezlerinin önü kesinlikle kapatılmamalı. Montaj bölümündeki tehlike notu nedenini veriyor: baca setinin sızdırmaz şekilde sabitlenmemesi, baca bağlantılarından karbon monoksit sızmasına ve hayati risk taşıyan zehirlenmelere yol açabilir. Baca hakkında genel bilgi [kombi baca borusu ve hortumu](/blog/kombi-baca-borusu-ve-hortumu/) yazısında.

**5. Yetkili servise haber ver.** Proteus, Confeo ve Citius kılavuzlarında F07 satırının çözüm sütunu tek maddeden oluşuyor: **E.C.A. yetkili servisine haber veriniz.** Kılavuz bu kod için kullanıcıya başka bir kontrol bırakmıyor.

**6. Kaç kez çıktığını not et.** F07 tek seferlik kalmayabilir ve kılavuz tekrarını ayrı bir kodla izliyor. Proteus ve Citius Premix'te **bir ay içinde iki kez F07** çıkarsa **F58 baca gazı yüksek sıcaklıkta kilitlenme** hatası meydana geliyor; çözümü yetkili servis. Confeo Premix'te aynı durum **E83** uyarısı olarak görünüyor ve tablo bunu **ana ısı eşanjörü sorunu** diye tanımlıyor; kılavuz Reset'e basmayı, sürerse yetkili servise bildirmeyi söylüyor. Servisi aradığında F07'yi kaç kez ve ne zaman gördüğünü söylemek işini kolaylaştırır.

## F07 ile F53 farkı

İki kod da bacayla ilgili, ama aynı şey değil. **F07** ölçülen baca gazı sıcaklığının sınırı aştığını söyler. **F53** ise baca gazı sıcaklık sensörünün kendisinde kısa ya da açık devre olduğunu. İkisinde de kılavuzun çözümü yetkili servis.

## Ne zaman servis

- Ekranda F07 bir kez bile göründüyse (kılavuzun tek talimatı bu)
- F07 bir ay içinde ikinci kez çıktıysa ya da ekranda F58 veya E83 varsa
- Ekranda F13 ya da F53 varsa
- Ekranda **ASE** görüyorsan: yıllık bakım zamanı; kombi ısıtmayı aksatmadan çalışır, ama bakım için yetkili servis

⛔ **Kendin-çöz sınırı burada biter.** Kodu okumak, not almak ve menfezin önünü açık tutmak sende; baca bağlantısı, baca seti, kombinin kapağının içi ve gaz hattı E.C.A. yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Proteus, Confeo, Citius ya da başka)?
2. Ekranda tam olarak hangi kod var?
3. F07 bu ay kaç kez çıktı?
4. Reset'e kaç kez bastın?
5. Baca ya da kombi yakın zamanda yerinden oynadı mı?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. ECA'nın bütün kodları [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) sayfasında. Bil, gör, çağır.
