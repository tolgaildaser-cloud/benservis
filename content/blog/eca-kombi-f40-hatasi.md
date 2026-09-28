---
title: "ECA kombi F40 hatası"
description: "ECA kombide F40 yüksek su basıncı demek. Basıncı okuma, doldurma vanası kapalı mı, kombiyi kapatıp açma, AP modu ve servis sınırı; ECA kılavuzlarından."
slug: "eca-kombi-f40-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi eca.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no = PDF sayfası. Proteus s.30'da F40 çözüm sütununun metin katmanı YOK: 200 dpi render edilip gözle okundu, tesseract -l tur ile karşılaştırıldı.
# Web araması kullanılmadı. md5'ler hub'ın 15 Eyl kaydıyla birebir. Alıntı denetim tablosu: eca-kombi-f40-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: F40 üç ailede aynı anlam ve aynı üç adımlı çözüm; yalnız eşik değeri farklı (tabloda verildi).
# A) PROTEUS PREMIX https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf · 48 s. · md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    "F40 Yüksek Su Basıncı Hatası | Su basınç sensörü cihazınız için sakıncalı yüksek su basıncı (3±0,3 bar) algıladığında meydana gelir. |
#     1-Cihazın kalorifer devresi su basıncını kontol edin. 2-Cihazın elektrik bağlantısını kesip tekrar çalıştırın.
#     3-Hata devam ediyorsa (veya tekrarlanıyorsa)E.C.A yetkili servisine haber veriniz." s.30 (render ile okundu)
#    Doldurma: "1,5 – 2 bar su basınç değeri okunana kadar ... sonra doldurma vanası kapatılır." · "DİKKAT: Su doldurma vanasını mutlaka kapatınız,
#     tesisat suyu akarak ortama zarar verebilir." · "sistem soğuk iken 1,5 – 2 bar arası olmasına dikkat edin." · "topraklı priz hattına bağlanmış olmalıdır." s.25
#    AP: "Cihaza ilk kez elektrik verildiği zaman ya da elektriği kapatılıp açıldıktan sonra" · "Yüksek su basıncı (F40) veya düşük su basıncı (F37) hatası
#     geçtikten sonra" · "AP Modu çalışırken kesinlikle "RESET" e basmayınız." s.28 · FXX s.26 · "Yüksek Su Basınç Emniyeti (3 bar)" s.6
#    Garanti dışı: "16- Isıtma Tesisatına fazla su basılması (Kombi Doldurma Musluğunun açık bırakılması vb) kaynaklı hasar ve arızalar" s.47
# B) CONFEO PREMIX https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf · 44 s. · md5 4ef56163ac14c46f9cb1dcb9ea189681
#    "F40 Yüksek Su Basıncı Hatası | Bu durum, su basınç sensörünün cihazınız için tehlikeli olabilecek yüksek su basıncını (≥2,9 bar) algılaması halinde
#     ortaya çıkar. | 1- Cihazınızın ısıtma tesisatındaki su basıncını kontrol edin. 2- Cihazı kapatın ve yeniden başlatın. 3- Sıfırlama işleminden sonra
#     hata hala devam ediyorsa (veya sürüyorsa), E.C.A. yetkili servisine bildirin." s.29
#    Doldurma metni s.22 · AP s.26 · FXX s.23 · "Açma / Kapama butonuna 5 saniye basılı tutarak kombiyi kapatabilirsiniz (OFF modu)." s.23 · garanti s.43 · 3 bar emniyeti s.7
# C) CITIUS PREMIX https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf · 40 s. · md5 023164f7b7cebedc931411900edd72b0
#    "F40 Yüksek Su Basıncı Hatası | Su basınç sensörü cihazınız için sakıncalı yüksek su basıncı (3,3±0,3 bar) algıladığında meydana gelir. |
#     1-Cihazınızın kalorifer devresi su basıncını kontrol edin. 2-Cihazın elektrik bağlantısını kesip tekrar çalıştırın. 3- Hata devam ediyorsa
#     (veya tekrarlanıyorsa) E.C.A. yetkili servisine haber veriniz." s.26
#    Doldurma metni s.21 · FXX s.22 · AP s.24 · garanti s.39 · 3 bar emniyeti s.5
# BİLEREK yazılmayanlar:
#  - Basıncı düşürmek için su boşaltma / emniyet ventilini açma / purjörden su alma: F40 çözümünde yok, kılavuz kullanıcıya tarif etmiyor.
#  - Basıncın neden yükseldiğine dair teşhis (genleşme tankı, doldurma vanası kaçırması vb.): kılavuzda yok. Yalnız garanti bölümündeki
#    "doldurma musluğunun açık bırakılması" örneği verildi, sebep teşhisi olarak değil.
#  - Elektriği kesmenin yolu (sigorta vb.): kılavuz yalnız "elektrik bağlantısını kesip tekrar çalıştırın" diyor; kombinin topraklı priz hattına bağlı olduğu yazıyor.
#  - Confeo "Sıfırlama işleminden sonra" ifadesi: kılavuzun 2. adımı "kapatın ve yeniden başlatın"; ayrı bir Reset adımı olarak yorumlanmadı (F kodu Reset'le silinmez).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kalorifer devresinin su basıncını kombinin ekranından oku."
  - "Su doldurma vanasının kapalı olduğunu kontrol et."
  - "Kombinin elektrik bağlantısını kesip tekrar çalıştır."
  - "Ekranda AP yazarsa Reset'e basmadan 160 saniyelik hava tahliye modunun bitmesini bekle."
  - "Basıncı yeniden oku ve F40'ın kaybolup kaybolmadığına bak."
  - "Hata sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisine haber ver."
faq:
  - q: "ECA kombide F40 hatası ne demek?"
    a: "ECA kılavuzlarında F40 yüksek su basıncı hatasıdır: su basınç sensörü cihaz için sakıncalı yüksek su basıncı algılamıştır. Eşik modele göre değişiyor: Proteus Premix'te 3±0,3 bar, Citius Premix'te 3,3±0,3 bar, Confeo Premix'te 2,9 bar ve üzeri."
  - q: "F40'ta ne yapmalıyım?"
    a: "Kılavuzun üç adımı var: kalorifer devresindeki su basıncını kontrol et, cihazın elektrik bağlantısını kesip tekrar çalıştır (Confeo Premix kılavuzunda: cihazı kapatıp yeniden başlat). Hata devam ediyor ya da tekrarlanıyorsa E.C.A. yetkili servisine haber ver."
  - q: "F40'ı Reset tuşuyla silebilir miyim?"
    a: "Hayır. F ile başlayan kodlar ECA'da geçici arızadır; Reset tuşuyla ekrandan silinmez, hata durumu düzelince kod kendiliğinden kaybolur. F40 geçtikten sonra kombi AP hava tahliye moduna girer; AP sürerken de Reset'e basılmaz."
  - q: "Basıncı kendim düşürebilir miyim?"
    a: "ECA'nın F40 çözümünde basıncı düşürme ya da su boşaltma adımı yok; kılavuz bunu kullanıcıya tarif etmiyor. Basınç kontrolü ve kombiyi kapatıp açmaktan sonra hata sürüyorsa kılavuzun yönlendirmesi E.C.A. yetkili servisidir."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin dijital ekranında yüksek bir basınç değeri; kombinin altındaki borular ve kapalı konumda küçük bir doldurma vanası"
---

ECA kombinin ekranında **F40** görüyorsan ECA'nın kullanma kılavuzlarındaki karşılığı **"Yüksek Su Basıncı Hatası"**: su basınç sensörü, cihaz için sakıncalı **yüksek su basıncı** algılamış. Kılavuzun çözümü üç adım; ilk ikisi senin yapabileceğin kontroller. Bu yazı o adımları Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarına dayanarak anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F40 = yüksek su basıncı. Sıra şu: basıncı ekrandan oku → doldurma vanası kapalı mı bak → kombinin elektriğini kesip tekrar çalıştır → AP yazarsa Reset'e basmadan 160 saniye bekle. Sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisi.

## F40'ın eşiği modele göre değişiyor

| Seri | F40 eşiği (kılavuzdaki) |
|---|---|
| Proteus Premix | 3±0,3 bar |
| Citius Premix | 3,3±0,3 bar |
| Confeo Premix | 2,9 bar ve üzeri |

Üç kılavuzun da istediği değer sistem soğukken **1,5–2 bar.** F40, basıncın bu aralığın üstüne, tablodaki eşiğe çıktığını gösteriyor.

F40 bir **geçici arızadır**: ECA'da F ile başlayan kodlar **Reset tuşuyla ekrandan silinmez**, hata durumu düzelince kod kendiliğinden kaybolur.

## Adım adım: evde denenecekler

**1. Basıncı oku.** Kılavuzun ilk maddesi: **cihazın kalorifer devresi su basıncını kontrol et.** Basınç kombinin ekranında görünür.

**2. Doldurma vanasına bak.** Yakın zamanda su eklediysen doldurma vanasının **kapalı** olduğundan emin ol. Kılavuzların ilk çalıştırma bölümü doldurmanın 1,5–2 bar'da bitirilmesini ve vananın **mutlaka kapatılmasını** istiyor; garanti bölümü de doldurma musluğunun açık bırakılması gibi sebeplerle **ısıtma tesisatına fazla su basılmasını** ayrıca anıyor. Vananın yerini bilmiyorsan servisten göstermesini iste.

**3. Kombiyi kapatıp yeniden çalıştır.** Proteus Premix ve Citius Premix kılavuzlarının ikinci maddesi: **cihazın elektrik bağlantısını kesip tekrar çalıştır.** Confeo Premix kılavuzunda aynı adım **"Cihazı kapatın ve yeniden başlatın"** diye geçiyor. Kılavuzlara göre kombi topraklı bir priz hattına bağlıdır.

**4. AP yazarsa bekle.** Kılavuzlara göre kombi hem **elektriği kapatılıp açıldıktan sonra** hem de **F40 hatası geçtikten sonra** hava tahliye moduna (AP) girer: 160 saniye boyunca tesisattaki havayı boşaltır, ekranda **"AP"** yazar. Bu sırada **kesinlikle Reset'e basma.**

**5. Basıncı yeniden oku.** AP bittikten sonra ekrandaki basınca ve kodun kaybolup kaybolmadığına bak.

**6. Sürüyorsa servise haber ver.** Kılavuzun son maddesi: hata **devam ediyorsa ya da tekrarlanıyorsa** E.C.A. yetkili servisine haber ver.

## Basıncı düşürmek için su boşaltma

ECA'nın F40 çözümünde **su boşaltma ya da basınç düşürme adımı yok**; kılavuz bunu kullanıcıya tarif etmiyor. Kombinin teknik özellikleri arasında **yüksek su basınç emniyeti (3 bar)** yer alıyor; bu emniyet donanımına dokunmak kullanıcının işi değil. Basınç kontrolü ve kombiyi kapatıp açmaktan sonra F40 sürüyorsa yol servisten geçer.

## Ne zaman doğrudan servis

- Kombiyi kapatıp açtın, AP modu bitti ve **F40 sürüyor ya da tekrarlıyorsa.**
- Doldurma vanası kapalı olduğu hâlde basınç yükseliyorsa.
- Vanalarda ya da tesisatta **su izi** görüyorsan.

⛔ **Kendin-çöz sınırı burada biter.** Kılavuzun sana bıraktığı iş basıncı okumak ve kombiyi kapatıp açmak. Basıncı düşürmek, emniyet donanımı ve kombinin içi E.C.A. yetkili servisinin işidir.

## Servisi aramadan önce iki dakikalık özet

1. Kombinin modeli ne (Proteus, Confeo, Citius)?
2. Ekranda basınç kaç bar görünüyor?
3. Yakın zamanda su eklendi mi, doldurma vanası kapalı mı?
4. Kombi kapatılıp açıldıktan sonra F40 geri geldi mi?
5. Vanalarda ya da tesisatta su izi var mı?

Bu beşine cevabın varsa servise "kombi hata veriyor" yerine somut bir tablo anlatabilirsin.

ECA'nın diğer kodları için [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) listesine bak. Ters durum, yani düşük basınç için [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/) yazısına geç. Basıncın doğru aralığı için marka bağımsız rehber: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
