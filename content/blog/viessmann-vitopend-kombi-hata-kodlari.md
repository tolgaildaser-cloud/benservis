---
title: "Viessmann Vitopend hata kodları ve reset"
description: "Viessmann Vitopend 100-W'de F02-F08 kodları resetlenebilir, F10, F30, F98 ve diğerleri servis ister. Sembolden ayırma ve MODE+OK reset, kılavuzdan."
slug: "viessmann-vitopend-kombi-hata-kodlari"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 · curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi, HTTP 200; pdftotext -layout ile sayfa sayfa okundu;
# ekran simgeleri pdftoppm ile sayfa görüntüsünden doğrulandı (s.12 lejant, s.32 örnek ekranlar F02 / F30).
# Yer: Viessmann'ın kendi ViBooks veritabanı. Web araması yalnız yer bulmak için; scribd/ekilavuz/docplayer kopyaları KULLANILMADI.
# Tek belge: Kullanma Kılavuzu · Vitopend 100-W (sabit sıcaklıkta veya dış hava sıcaklığına bağlı işletme için kontrol paneli ile)
#   · 5791986 TR 4/2019 · ürün tipi A1JB
#   https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5791986VBA00002_1.pdf
#   44 s. · 810.669 B · md5 5806d06b45d167c0b6e7ebe1ce6c0721
# Birebir: lejant "N Arıza göstergesi, resetleme yapın." / "O Arıza göstergesi, yetkili teknik servise haber verin." (s.12)
#   "… sembolü görüntülenir ve F02, F03, F04, F05, F07 veya F08 mesaj kodu yanıp söner." → "Aynı anda MODE ve OK tuşlarına,
#   simge … yanıp sönene kadar basın (Reset). Arıza göstergesi tekrar yanarsa, yetkili teknik servise haber verin." (s.32, s.33)
#   "… 0C, A0, CC, F10, F18, F30, F38, F51, F59, F70, F78, F80, F88, F90 veya F98 mesaj kodu yanıp söner." → "Yetkili teknik
#   servise haber verin." + "Burada belirtilen bir kilit, sistem işletmecisi tarafından açılamaz." (s.32, s.34)
#   "Arıza mesajlarını kısa aralıklarla birkaç kez arka arkaya onaylamayın." (s.5) · Min. sistem basıncı 0,8 bar (0,08 MPa) (s.16)
#   Bakım hatırlatması, OK ile 24 saat (s.34) · IF01–IF22 bilgi sorgulama (s.30-31)
# Bilerek YAZILMAYANLAR: kodların TEKNİK ANLAMI (F02 = …, F05 = … gibi) — kullanma kılavuzu yalnız ne yapılacağını veriyor,
#  nedenini vermiyor; üçüncü taraf listeleri kaynak değil (#88) · gaz kapatma vanası adımı (#31) · su doldurma yöntemi
#  (kılavuz tarif etmiyor) · Vitopend 100-W'nin diğer kontrol paneli sürümleri (5580514, 5580609 — bu koşuda açılmadı).
# Alıntı denetim tablosu: viessmann-vitopend-kombi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kalem ve kâğıt (kod için)"]
steps:
  - "Ekranda yanıp sönen mesaj kodunu ve yanındaki sembolleri not et."
  - "Kodun F02, F03, F04, F05, F07 ya da F08 olup olmadığına bak."
  - "Kod bu grupta değilse ya da ekranda anahtar sembolü de varsa reset deneme, yetkili servisi ara."
  - "Kod bu gruptaysa MODE ve OK tuşlarına aynı anda, resetleme simgesi yanıp sönene kadar bas."
  - "Kombinin normal çalışmaya dönüp dönmediğini izle."
  - "Reset'i kısa aralıklarla art arda tekrarlama."
  - "Arıza göstergesi tekrar yanarsa not ettiğin kodla yetkili servisi ara."
faq:
  - q: "Viessmann Vitopend kombide hangi kodlar resetlenebilir?"
    a: "Vitopend 100-W kullanma kılavuzuna göre resetleme sembolü görüntüleniyor ve F02, F03, F04, F05, F07 ya da F08 mesaj kodu yanıp sönüyorsa MODE ve OK tuşlarına aynı anda, simge yanıp sönene kadar basılarak reset yapılır. Arıza göstergesi tekrar yanarsa yetkili teknik servise haber verilir."
  - q: "Vitopend'de F30 ya da F98 çıktı, reset işe yarar mı?"
    a: "Kılavuz bu kodlar için reset adımı vermiyor. 0C, A0, CC, F10, F18, F30, F38, F51, F59, F70, F78, F80, F88, F90 ve F98 için talimat yetkili teknik servise haber vermek. Kılavuza göre bu durumda belirtilen kilit, sistem işletmecisi yani kullanıcı tarafından açılamaz."
  - q: "Vitopend kombide F04 ya da F05 ne anlama geliyor?"
    a: "Viessmann'ın Vitopend 100-W kullanma kılavuzu bu kodların teknik nedenini vermiyor; yalnız resetlenebilen kodlar arasında sayıyor. Kodun nedenini yetkili servis tespit eder. Kodu ve reset sonrası geri gelip gelmediğini servise bildirmen yeterli."
  - q: "Ekranda IF01, IF12 gibi kodlar görünüyor, bunlar arıza mı?"
    a: "Hayır. Kılavuzda IF ile başlayan göstergeler bilgi sorgulama menüsüne ait: örneğin IF01 güncel ısıtma suyu sıcaklığını, IF12 brülörün durumunu, IF18 sirkülasyon pompasının durumunu gösteriyor. Bunlar kullanıcının kendi açtığı bilgi ekranlarıdır."
  - q: "Vitopend'de basınç kaç bar olmalı?"
    a: "Vitopend 100-W kullanma kılavuzu, ısıtma sistemini açarken manometreden basıncın kontrol edilmesini istiyor ve minimum sistem basıncını 0,8 bar (0,08 MPa) olarak veriyor. Basınç çok düşükse kılavuzun önerisi sisteme su doldurmak ya da yetkili tesisat firmasına haber vermek."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmındaki kontrol paneli; dijital ekranda rakam okunmayan soyut bir gösterge ve iki tuşa uzanan bir el"
---

Viessmann **Vitopend 100-W** kombinin ekranında bir F kodu yanıp sönüyor ve reset atıp atmamak konusunda kararsızsın. Vitopend'in kullanma kılavuzu bu kararı senin yerine veriyor: kodları iki gruba ayırıyor, birinde reset'i sana bırakıyor, diğerinde doğrudan servise yönlendiriyor. Kılavuzun kendi ifadesiyle ikinci grupta **"Burada belirtilen bir kilit, sistem işletmecisi tarafından açılamaz."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F02 · F03 · F04 · F05 · F07 · F08 → MODE + OK'ye aynı anda bas (reset); gösterge geri gelirse servis. 0C · A0 · CC · F10 · F18 · F30 · F38 · F51 · F59 · F70 · F78 · F80 · F88 · F90 · F98 → reset yok, doğrudan servis.

## İki grup, iki sembol

Vitopend 100-W'nin ekran lejantında iki ayrı arıza sembolü var ve kılavuz her birine ayrı bir anlam veriyor:

- **Resetleme sembolü:** *"Arıza göstergesi, resetleme yapın."*
- **Servis sembolü:** *"Arıza göstergesi, yetkili teknik servise haber verin."* Bu grupta ekranda ayrıca **anahtar** sembolü de görünür.

Kılavuzun "Ne yapmalı?" tablosu kodları bu iki sembole göre şöyle dağıtıyor:

| Ekranda | Kodlar | Kılavuzun talimatı |
|---|---|---|
| Resetleme sembolü + yanıp sönen kod | **F02 · F03 · F04 · F05 · F07 · F08** | MODE ve OK tuşlarına aynı anda, simge yanıp sönene kadar bas (Reset). Arıza göstergesi tekrar yanarsa yetkili teknik servise haber ver. |
| Servis sembolü + anahtar sembolü + yanıp sönen kod | **0C · A0 · CC · F10 · F18 · F30 · F38 · F51 · F59 · F70 · F78 · F80 · F88 · F90 · F98** | Yetkili teknik servise haber ver. Bu kilit kullanıcı tarafından açılamaz. |

Kılavuz bu kodların **teknik nedenini vermiyor**; yalnız hangisinde ne yapılacağını söylüyor. Bu yüzden burada da "F05 = şu parça" gibi bir karşılık yazmıyoruz. Nedeni yetkili servis tespit eder.

## Adım adım: evde denenecekler

**1. Kodu ve sembolleri not et.** Ekranda yanıp sönen mesaj kodunu ve yanında hangi sembollerin durduğunu yaz. Servise en çok bu bilgi lazım olacak.

**2. Grubu belirle.** Kod F02, F03, F04, F05, F07 ya da F08 ise birinci gruptasın.

**3. İkinci gruptaysan dur.** Kod tablodaki ikinci gruptaysa ya da ekranda anahtar sembolü de varsa reset denemenin anlamı yok: kılavuza göre bu kilit kullanıcı tarafından açılamaz. Yetkili servisi ara.

**4. Reset yap.** Birinci gruptaysan **MODE** ve **OK** tuşlarına **aynı anda** bas ve resetleme simgesi yanıp sönene kadar basılı tut.

**5. Kombiyi izle.** Arıza göstergesinin ekrandan kalkıp kalkmadığına ve kombinin çalışmaya dönüp dönmediğine bak.

**6. Art arda deneme.** Kılavuzun emniyet uyarısı açık: *"Arıza mesajlarını kısa aralıklarla birkaç kez arka arkaya onaylamayın."* Aynı uyarı, giderilmeyen arızaların hayati tehlike oluşturabileceğini de yazıyor.

**7. Geri gelirse servis.** Kılavuzun talimatı: arıza göstergesi tekrar yanarsa yetkili teknik servise haber ver.

## Ekranda arıza değil, bilgi ya da bakım uyarısı olabilir

Vitopend ekranında görünen her kod arıza değildir:

- **IF ile başlayan göstergeler** (IF01–IF22) kılavuzun bilgi sorgulama menüsüne ait. Örneğin IF01 güncel ısıtma suyu sıcaklığını, IF04 güncel kullanma suyu sıcaklığını, IF12 brülörün durumunu, IF18 sirkülasyon pompasının durumunu gösteriyor.
- **Bakım hatırlatması** ayrı sembollerle gösteriliyor. Kılavuza göre bu durumda kombinin bakımı için yetkili servise başvurulur; OK'ye basarak göstergeyi 24 saatliğine kapatabilirsin.

## Basınca da bir bak

Vitopend 100-W kılavuzu, ısıtma sistemini açarken **manometreden** basıncın kontrol edilmesini istiyor ve minimum sistem basıncını **0,8 bar (0,08 MPa)** olarak veriyor. Basınç çok düşükse kılavuzun önerisi sisteme su doldurmak ya da yetkili tesisat firmasına haber vermek. Kılavuz bu değeri F kodlarıyla ilişkilendirmiyor, ama servisi ararken manometredeki değeri söylemen işe yarar. Basıncın genel mantığı için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına bak.

## Ne zaman servis

- İkinci gruptaki kodlardan biri yanıp sönüyorsa (reset yok).
- Birinci gruptaki kod reset'ten sonra yeniden geliyorsa.
- Bakım hatırlatması görünüyorsa.

⛔ **Kendin-çöz sınırı burada biter.** Kılavuzun sana verdiği tek müdahale ön paneldeki MODE ve OK tuşlarıyla yapılan reset. Kombinin kapağını açmak, gaz ya da elektrik tarafına dokunmak bu rehberin kapsamında değil.

## Servisi aramadan önce kısa özet

1. Ekrandaki kod ne, yanında resetleme sembolü mü, anahtar sembolü mü var?
2. Reset yapıldı mı, kod geri geldi mi?
3. Manometre kaç bar gösteriyor?
4. Isıtma mı, sıcak su mu, ikisi birden mi yok?

Vitodens serisi kombilerin kodları farklıdır: Vitotronic kontrol üniteli Vitodens 200-W ve 300-W için [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/), yeni Vitodens modellerinde kilitlenme için [Viessmann kombi CL hatası](/blog/viessmann-kombi-cl-hatasi/) yazısına bak. Kod ekranda yokken ısınma kesildiyse [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı var.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
