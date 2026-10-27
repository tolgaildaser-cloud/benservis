---
title: "ECA kombi E01 hatası nedir? Ateşleme hatası çözümü"
description: "ECA kombide E01 (E 01) ateşleme hatasıdır: kılavuza göre kombiye gaz gitmiyor. Proteus, Confeo, Citius Premix'te çözüm: gaz vanası, hattaki gaz, tek Reset."
slug: "eca-kombi-e01-hatasi"
date: "2026-09-28"
updated: "2026-10-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ (YK #189 fırsat sayfası 4/30): içerik iyileştirmesi; slug, şablon, adım sayısı (7) ve images aynı (YK #179 dondurması).
# GSC (www-9 Sorgular.csv, 7 gün): "eca kombi e01 hatası" 215 gösterim poz. 10,51 · "e01 hatası eca" 86 · "eca e01 hatası" 85 ·
#   "eca kombi e01 hatası çözümü" 72 · "eca e 01 hatası" 51 · "eca kombi e 01 hatası" 33 · "eca citius premix e01 hatası" 12 · "... nedir" 9. Hepsi 0 tık.
# Belgeler 2026-10-27'de eca.com.tr/urun/proteus-premix · confeo-premix · citius-premix sayfalarından yeniden bağlantı alınıp
# curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); md5'ler 28 Eyl kaydıyla birebir. pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
# Alıntı denetim tablosu: eca-kombi-e01-hatasi.KAYNAK.md
# A) E.C.A. PROTEUS PREMIX 14-20-24-28-30-35-42-45 HM/HCH/HST Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf · 48 s. · md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    E01 s.29 · E02, E09 s.29 · E82, F13 s.30 · EXX/FXX + "yanıp sönmeye" + Comfort/Eco s.26 · emniyet + LPG tüpü s.5 · "gazın açılmış olması" s.5 · gaz hattı s.25 · donma s.28
# B) E.C.A. CONFEO PREMIX P 14/20/24/28/30/35 HM/HCH/HST Kullanma ve Montaj Kılavuzu (7006991302-5.0)
#    https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf · 44 s. · md5 4ef56163ac14c46f9cb1dcb9ea189681
#    E01, E02 s.27 · E44, E82, F13 s.28 · "kodu ve tanımı ekranda" + "sesli uyarı" + Comfort/Eco s.23 · emniyet s.5 · "gazın açılmış olması" s.6 · donma s.26
# C) E.C.A. CITIUS PREMIX 14/20/24/28 HM/HCH/HST Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf · 40 s. · md5 023164f7b7cebedc931411900edd72b0
#    E01, E02, E09, E82, F13 s.25 · EXX/FXX + Comfort/Eco s.22 · emniyet s.4 · "gazın açılmış olması" s.4 · donma s.24
# BİLEREK yazılmayanlar:
#  - Gaz vanasının açık/kapalı konumunun nasıl anlaşılacağı (kol yönü vb.): kılavuzlarda yok.
#  - "Hatta gaz var mı" kontrolünün yöntemi (ocağı yakmayı dene vb.): kılavuz tarif etmiyor.
#  - E01 için parça teşhisi (ateşleme elektrodu, gaz valfi, kart): kılavuzun E01 satırında yok.
#  - E02'nin sebep cümlesi: Proteus/Citius "gaz valfi kapalı iken", Confeo "gaz valfi açıkken" diyor; çelişkili, yazılmadı.
#  - Reset tuşuna kaç saniye basılacağı: kılavuz yalnız "1 kez" diyor.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ortamda gaz kokusu olmadığından emin ol; koku varsa kılavuzun emniyet adımlarını uygula ve 187'yi ara."
  - "Ekrandaki kodun E01 olduğunu ve kombinin hangi seri olduğunu (Proteus, Confeo, Citius Premix) not et."
  - "Kombinin gaz vanasının açık olduğunu kontrol et."
  - "Hatta (tesisatta) gaz olup olmadığını kontrol et."
  - "Reset tuşuna bir kez bas."
  - "Kod geri gelirse Reset'e art arda basma; 1 saatte 5'ten fazla Reset F13 hatası verir."
  - "Hata sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisine haber ver."
faq:
  - q: "ECA kombide E01 hatası ne demek?"
    a: "E01, ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarında ateşleme hatasıdır. Proteus ve Citius kılavuzları muhtemel nedeni 'Kombiye gaz gitmiyor', Confeo kılavuzu 'Kombiye doğalgaz bağlantısı yok' diye yazıyor. Ekranda 'E 01' diye aranan kod da budur."
  - q: "ECA kombi E01 hatasının çözümü nedir?"
    a: "Üç kılavuzda da aynı sıra var: gaz vanasının açık olduğunu kontrol et, hatta (tesisatta) gaz olup olmadığını kontrol et, Reset tuşuna bas. Reset sonrası hata devam ediyor ya da tekrarlanıyorsa E.C.A. yetkili servisine haber ver."
  - q: "Reset'e bastım, E01 yine geldi. Tekrar basayım mı?"
    a: "Art arda basma. Kılavuzlara göre 1 saat içinde 5'ten fazla Reset'e basılırsa kombi F13 fazla resetleme hatası verir ve bu kodun çözümü doğrudan yetkili servistir. E01 Reset sonrası sürüyor ya da tekrarlıyorsa kılavuzun talimatı yetkili servise haber vermektir."
  - q: "E01 ile E82 aynı şey mi?"
    a: "Hayır. E82 ayrı bir koddur: kılavuzlarda alev kaybı hatası olarak geçer ve art arda 12'den fazla alev kaybında çıkar. E82'de kılavuzun adımı Reset'e basmak, hata sürerse yetkili servise haber vermektir."
images:
  coverAlt: "Beyaz bir kombinin altındaki borular arasında sarı kollu bir gaz vanası; kombinin ekranında yanıp sönen bir uyarı simgesi ve yanında duran bir kullanma kılavuzu"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda kullanım kılavuzu ve tablosu"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

ECA kombide **E01** (ekranda "E 01" diye de okunur) **ateşleme hatasıdır**: ECA'nın kullanma kılavuzlarına göre muhtemel neden tek cümle, **"Kombiye gaz gitmiyor."** Kombi yanmaz, kod ekranda kalır. Kılavuzun çözümü dört adım; ilk üçü senin yapabileceğin kontroller. Bu yazı o adımları ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarına dayanarak sırayla anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E01 = ateşleme hatası, kılavuza göre kombiye gaz gitmiyor. Sıra şu: gaz kokusu yok mu → gaz vanası açık mı → hatta gaz var mı → Reset'e bir kez bas. Kod sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisi.

## Önce güvenlik: gaz kokusu varsa

E01 "gaz gitmiyor" der; ama kombinin çevresinde gaz kokusu alıyorsan kod okumayı bırak. Üç kılavuzun emniyet bölümü aynı adımları sayıyor:

- Kombinin gaz vanasını ve gazla çalışan diğer tüm cihazların vanalarını kapat.
- Ocak, fırın gibi cihazları kapatıp alevlerini söndür; kibrit, çakmak yakma.
- Kapı ve pencereleri açıp ortamı havalandır.
- Elektrikli cihazların düğmelerine ve fişlerine dokunma; gaz kokusu olan ortamda telefon kullanma.
- Daire ve bina girişindeki gaz vanalarını kapat.
- Zaman kaybetmeden **187**'yi arayıp gaz şirketine haber ver, durumu yetkili servise bildir.

## Adım adım: evde denenecekler

**1. Gaz kokusu olmadığından emin ol.** Koku varsa yukarıdaki emniyet adımlarını uygula ve **187**'yi ara; aşağıdaki adımlara geçme.

**2. Kodu ve seriyi not et.** Proteus Premix ve Citius Premix'te arıza kodu ekranda **yanıp söner**. Confeo Premix'te kodla birlikte **tanımı** da ekranda görünür ve cihaz periyodik olarak **sesli uyarı** verir. Serinin adı kılavuzun kapağında yazar; aşağıdaki tabloda üç serinin E01 satırı yan yana.

**3. Gaz vanasına bak.** Kılavuzun ilk maddesi: **gaz vanasının açık olduğunu kontrol et.** Vananın hangisi olduğunu ya da açık konumunu bilmiyorsan tahmin yürütme; servisten göstermesini iste.

**4. Hatta gaz olup olmadığını kontrol et.** İkinci madde budur; Confeo Premix kılavuzu aynı adımı "tesisatta gaz olup olmadığını kontrol edin" diye yazıyor. Kılavuzların işletmeye alma bölümü, cihazın çalışabilmesi için **yetkili gaz şirketinin gazı açmış olmasını** ve gaz hattının yetkili gaz kuruluşunca kontrol edilmiş, **açık** olmasını şart koşuyor. Proteus Premix kılavuzu, yakıt olarak **LPG (tüpgaz)** kullanılıyorsa bağlantıların zarar görmemesi için gaz tüpünün **kesinlikle sallanmamasını ve yatırılmamasını** istiyor.

**5. Reset tuşuna bir kez bas.** E ile başlayan kodlar ECA'da **kalıcı arızadır**: kılavuza göre önce hatanın düzelmesi gerekir, sonra **Reset tuşuna 1 kez** basılınca cihaz normal çalışmaya döner.

**6. Art arda basma.** Kod geri gelirse Reset'i tekrar tekrar deneme. Kılavuzlara göre **1 saat içinde 5'ten fazla** Reset'e basılırsa kombi **F13 fazla resetleme hatası** verir; F13'ün çözümü doğrudan yetkili servistir.

**7. Sürüyorsa servise haber ver.** Kılavuzun dördüncü maddesi: Reset sonrası hata **devam ediyorsa ya da tekrarlanıyorsa** E.C.A. yetkili servisine haber ver.

## ECA E01 modeline göre: kılavuz ne diyor?

ECA'nın sitesinde bugün listelenen üç yoğuşmalı kombi serisinin üçünde de E01 aynı yerde, aynı çözümle duruyor:

| Seri (kılavuz kapağı) | Kılavuzdaki ad | Muhtemel neden | Ekranda | Kılavuz sayfası |
|---|---|---|---|---|
| Proteus Premix 14–45 HM/HCH/HST | Ateşleme Hatası | Kombiye gaz gitmiyor. | Kod yanıp söner | s.29 |
| Confeo Premix P 14–35 HM/HCH/HST | Ateşleme Arızası | Kombiye doğalgaz bağlantısı yok. | Kod + tanımı, periyodik sesli uyarı | s.27 |
| Citius Premix 14–28 HM/HCH/HST | Ateşleme Hatası | Kombiye gaz gitmiyor. | Kod yanıp söner | s.25 |

Çözüm sütunu üçünde de aynı: gaz vanası → hatta (tesisatta) gaz → Reset → yetkili servis.

Kombi normal çalışırken Reset tuşu başka bir iş de yapar: kılavuza göre **Comfort** modunda bir kez basınca cihaz **Eco** moduna, tekrar basınca yeniden Comfort moduna geçer. Ayrıntısı [ECA kombi resetleme](/blog/eca-kombi-resetleme/) yazısında.

## Karıştırılan kodlar

Aynı tabloda E01'e benzeyen ama ayrı olan kodlar var. Hepsinde kılavuzun adımı **Reset'e bir kez basmak, sürerse yetkili servis**; E01'deki vana ve hat kontrolü bunlarda yazmıyor.

- **E02 Yanlış Alev Sinyali:** kılavuzların muhtemel neden sütunu brülörde alev algılanmasından söz ediyor; E01'in "gaz gitmiyor" satırından ayrı bir koddur.
- **E09** (Proteus, Citius) ve **E44** (Confeo): kılavuzun muhtemel nedeni "Gaz valfi arızalı olabilir." Valf kombinin içinde; servis işidir. Vana ile valf farkı için [kombi gaz valfi ve gaz vanası](/blog/kombi-gaz-valfi-ve-vanasi/).
- **E82 Alev kaybı hatası:** art arda 12'den fazla alev kaybında çıkar.
- **F13 Fazla resetleme:** 1 saatte 5'ten fazla Reset'in sonucudur; çözümü yalnız yetkili servis.

## Gaz vanası kapalı kalırsa

Kombinin gaz vanasını kapattıysan, E01 için kılavuzun ilk kontrolü tam da bu vanadır. Kılavuzların donma koruması bölümü de bu fonksiyonun çalışabilmesi için **gaz vanasının ve radyatör vanalarının açık** olmasını, cihazın elektrik beslemesinin açık ve sistem su basıncının uygun olmasını şart koşuyor.

## Ne zaman doğrudan servis

- Gaz vanası açık, hatta gaz var ve bir Reset'ten sonra **E01 sürüyor ya da tekrarlıyorsa.**
- Ekranda **F13** çıktıysa.
- Gaz kokusu aldıysan: önce emniyet adımları ve **187**, sonra yetkili servis.

⛔ **Kendin-çöz sınırı burada biter.** Kılavuzun sana bıraktığı iş vanayı kontrol etmek ve bir kez Reset'e basmak. Kombinin içi, gaz valfi ve ateşleme tarafı E.C.A. yetkili servisinin işidir.

## Servisi aramadan önce iki dakikalık özet

1. Kombinin serisi ne (Proteus, Confeo, Citius Premix)?
2. Ekrandaki kod E01 mi, yoksa E02, E82 ya da F13 mü?
3. Gaz vanası açık mı?
4. Evde gazla çalışan başka cihaz var mı, hatta gaz var mı?
5. Kaç kez Reset'e basıldı, kod ne kadar sürede geri geldi?

Bu beşine cevabın varsa servise "kombi yanmıyor" yerine somut bir tablo anlatabilirsin.

ECA'nın diğer kodları için [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) listesine bak. Kombi hiç yanmıyorsa belirti tarafı [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında. Ekranda E01 değil **F37** varsa [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/), **E03** varsa [ECA kombi E03 hatası](/blog/eca-kombi-e03-hatasi/) yazısına geç. Kombin ECA değil Baymak ise aynı kodun anlamı için [Baymak kombi E01 hatası](/blog/baymak-kombi-e01-hatasi/).

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
