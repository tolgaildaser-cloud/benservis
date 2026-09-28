---
title: "ECA kombi E01 hatası"
description: "ECA kombide E01 ateşleme hatası: kılavuza göre kombiye gaz gitmiyor. Gaz vanası, hattaki gaz, tek Reset ve servis sınırı; ECA'nın kendi kılavuzlarından."
slug: "eca-kombi-e01-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi eca.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no = PDF sayfası (pdftotext -f/-l ile tek tek doğrulandı). Web araması kullanılmadı: URL'ler hub provenansından
# (eca.com.tr/urun/proteus-premix · confeo-premix · citius-premix "Kullanım Klavuzu" düğmesi). md5'ler hub'ın 15 Eyl kaydıyla birebir.
# Alıntı denetim tablosu: eca-kombi-e01-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: E01 üç ailede aynı anlam ve aynı dört adımlı çözüm.
# A) E.C.A. PROTEUS PREMIX PPR 14-45 HM/HCH/HST Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf · 48 s. · md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    "E01 Ateşleme Hatası | Kombiye gaz gitmiyor. | 1-Gaz vanasının açık olduğunu kontrol ediniz. 2- Hatta gaz olup olmadığını kontrol ediniz.
#     3- Reset butonuna basınız. 4- Reset sonrası hata devam ediyorsa (veya tekrarlanıyorsa) E.C.A. yetkili servisine haber veriniz." s.29
#    "F13 Fazla resetleme Hatası | 1 saat içinde 5'ten fazla Reset tuşuna basılması | 1- E.C.A. yetkili servisine haber veriniz." s.30
#    Kalıcı (EXX) / geçici (FXX) ayrımı, "Reset tuşuna 1 kez basılarak" s.26 · Gaz kokusu emniyet listesi + LPG tüpü uyarısı s.5
#    "Gaz hattı, yetkili gaz kuruluşu tarafından kontrol edilmiş ve açık olmalıdır." s.25 · Donma koruması: "Gaz vanası ve radyatör vanaları açık olmalıdır." s.28
# B) E.C.A. CONFEO PREMIX P 14-35 HM/HCH/HST Kullanma ve Montaj Kılavuzu (7006991302-5.0)
#    https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf · 44 s. · md5 4ef56163ac14c46f9cb1dcb9ea189681
#    "E01 Ateşleme Arızası | Kombiye doğalgaz bağlantısı yok. | 1- Gaz vanasının açık olduğundan emin olun. 2- Tesisatta gaz olup olmadığını
#     kontrol edin. 3- Reset düğmesine basın. 4- Resetten sonra hata hala devam ediyorsa (veya sürüyorsa), E.C.A. yetkili servisine bildirin." s.27
#    F13 "Aşırı sıfırlama hatası | Sıfırlama düğmesine 1 saat içinde 5 kereden fazla basılması" s.28 · EXX/FXX + sesli uyarı s.23 · emniyet s.5 · donma s.26
# C) E.C.A. CITIUS PREMIX 14-28 HM/HCH/HST Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf · 40 s. · md5 023164f7b7cebedc931411900edd72b0
#    E01 satırı A ile aynı metin s.25 · F13 s.25 · EXX/FXX s.22 · emniyet s.4 · donma s.24
# BİLEREK yazılmayanlar:
#  - Gaz vanasının açık/kapalı konumunun nasıl anlaşılacağı (kol yönü vb.): kılavuzlarda yok → "bilmiyorsan servisten göstermesini iste".
#  - "Hatta gaz var mı" kontrolünün nasıl yapılacağı (ocağı yakmayı dene vb.): kılavuz yöntemi tarif etmiyor; yalnız kılavuzun cümlesi verildi.
#  - Muhtemel neden sütununun ötesinde parça teşhisi (ateşleme elektrodu, gaz valfi, kart): kılavuzda E01 için yok.
#  - Reset tuşuna kaç saniye basılacağı: kılavuz yalnız "1 kez" diyor.
#  - LPG tüpü uyarısı yalnız Proteus kılavuzunda bulundu; yazıda Proteus'a atfedildi.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ortamda gaz kokusu olmadığından emin ol; koku varsa kılavuzun emniyet adımlarını uygula ve 187'yi ara."
  - "Ekrandaki kodun E01 olduğunu ve kombinin model adını not et."
  - "Kombinin gaz vanasının açık olduğunu kontrol et."
  - "Hatta gaz olup olmadığını kontrol et."
  - "Reset tuşuna bir kez bas."
  - "Kod geri gelirse Reset'e art arda basma; 1 saatte 5'ten fazla Reset F13 hatası verir."
  - "Hata sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisine haber ver."
faq:
  - q: "ECA kombide E01 hatası ne demek?"
    a: "ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarında E01 ateşleme hatasıdır. Proteus ve Citius kılavuzları muhtemel nedeni 'Kombiye gaz gitmiyor', Confeo kılavuzu 'Kombiye doğalgaz bağlantısı yok' diye yazıyor."
  - q: "E01'de ne yapmalıyım?"
    a: "Üç kılavuzda da aynı sıra var: gaz vanasının açık olduğunu kontrol et, hatta (tesisatta) gaz olup olmadığını kontrol et, Reset tuşuna bas. Reset sonrası hata devam ediyor ya da tekrarlanıyorsa E.C.A. yetkili servisine haber ver."
  - q: "Reset'e bastım, E01 yine geldi. Tekrar basayım mı?"
    a: "Art arda basma. Kılavuzlara göre 1 saat içinde 5'ten fazla Reset'e basılırsa kombi F13 fazla resetleme hatası verir ve bu kodun çözümü doğrudan yetkili servistir. E01 Reset sonrası sürüyor ya da tekrarlıyorsa kılavuzun talimatı yetkili servise haber vermektir."
  - q: "E01 ile E82 aynı şey mi?"
    a: "Hayır. E82 ayrı bir koddur: kılavuzlarda alev kaybı hatası olarak geçer ve art arda 12'den fazla alev kaybında çıkar. E82'de kılavuzun adımı Reset'e basmak, hata sürerse yetkili servise haber vermektir."
images:
  coverAlt: "Beyaz bir kombinin altındaki borular arasında sarı kollu bir gaz vanası; kombinin ekranında yanıp sönen bir uyarı simgesi ve yanında duran bir kullanma kılavuzu"
---

ECA kombinin ekranında **E01** yanıp sönüyor ve kombi yanmıyor. ECA'nın kullanma kılavuzlarındaki hata kodu tablosunda bu kodun adı **"Ateşleme Hatası"**, muhtemel nedeni de tek cümle: **"Kombiye gaz gitmiyor."** Kılavuzun çözümü dört adım; ilk üçü senin yapabileceğin kontroller. Bu yazı o adımları ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarına dayanarak sırayla anlatıyor.

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

**2. Kodu ve modeli not et.** Proteus Premix ve Citius Premix'te arıza kodu ekranda **yanıp söner**. Confeo Premix'te kodla birlikte **tanımı** da ekranda görünür ve cihaz periyodik olarak **sesli uyarı** verir. Modelin adı kılavuzunun kapağında yazar.

**3. Gaz vanasına bak.** Kılavuzun ilk maddesi: **gaz vanasının açık olduğunu kontrol et.** Vananın hangisi olduğunu ya da açık konumunu bilmiyorsan tahmin yürütme; servisten göstermesini iste.

**4. Hatta gaz olup olmadığını kontrol et.** İkinci madde budur; Confeo Premix kılavuzu aynı adımı "tesisatta gaz olup olmadığını kontrol edin" diye yazıyor. Kılavuzların ilk çalıştırma bölümü de gaz hattının yetkili gaz kuruluşu tarafından kontrol edilmiş ve **açık** olmasını şart koşuyor. Proteus Premix kılavuzu, yakıt olarak **LPG (tüpgaz)** kullanılıyorsa bağlantıların zarar görmemesi için gaz tüpünün **kesinlikle sallanmamasını ve yatırılmamasını** istiyor.

**5. Reset tuşuna bir kez bas.** E ile başlayan kodlar ECA'da **kalıcı arızadır**: kılavuza göre önce hatanın düzelmesi gerekir, sonra **Reset tuşuna 1 kez** basılınca cihaz normal çalışmaya döner.

**6. Art arda basma.** Kod geri gelirse Reset'i tekrar tekrar deneme. Kılavuzlara göre **1 saat içinde 5'ten fazla** Reset'e basılırsa kombi **F13 fazla resetleme hatası** verir; F13'ün çözümü doğrudan yetkili servistir.

**7. Sürüyorsa servise haber ver.** Kılavuzun dördüncü maddesi: Reset sonrası hata **devam ediyorsa ya da tekrarlanıyorsa** E.C.A. yetkili servisine haber ver.

## Üç ailede aynı kod, aynı çözüm

| Seri | Kılavuzdaki ad | Muhtemel neden | Çözüm |
|---|---|---|---|
| Proteus Premix | Ateşleme Hatası | Kombiye gaz gitmiyor. | Gaz vanası → hatta gaz → Reset → servis |
| Confeo Premix | Ateşleme Arızası | Kombiye doğalgaz bağlantısı yok. | Gaz vanası → tesisatta gaz → Reset → servis |
| Citius Premix | Ateşleme Hatası | Kombiye gaz gitmiyor. | Gaz vanası → hatta gaz → Reset → servis |

Kombi normal çalışırken Reset tuşu başka bir iş de yapar: kılavuza göre **Comfort** modunda bir kez basınca cihaz **Eco** moduna, tekrar basınca yeniden Comfort moduna geçer.

## Gaz vanası kapalı kalırsa

Kombinin gaz vanasını kapattıysan, E01 için kılavuzun ilk kontrolü tam da bu vanadır. Kılavuzların donma koruması bölümü de bu fonksiyonun çalışabilmesi için **gaz vanasının ve radyatör vanalarının açık** olmasını, cihazın elektrik beslemesinin açık ve sistem su basıncının uygun olmasını şart koşuyor.

## Ne zaman doğrudan servis

- Gaz vanası açık, hatta gaz var ve bir Reset'ten sonra **E01 sürüyor ya da tekrarlıyorsa.**
- Ekranda **F13** çıktıysa.
- Gaz kokusu aldıysan: önce emniyet adımları ve **187**, sonra yetkili servis.

⛔ **Kendin-çöz sınırı burada biter.** Kılavuzun sana bıraktığı iş vanayı kontrol etmek ve bir kez Reset'e basmak. Kombinin içi, gaz valfi ve ateşleme tarafı E.C.A. yetkili servisinin işidir.

## Servisi aramadan önce iki dakikalık özet

1. Kombinin modeli ne (Proteus, Confeo, Citius)?
2. Ekrandaki kod E01 mi, yoksa E82 ya da F13 mü?
3. Gaz vanası açık mı?
4. Evde gazla çalışan başka cihaz var mı, hatta gaz var mı?
5. Kaç kez Reset'e basıldı, kod ne kadar sürede geri geldi?

Bu beşine cevabın varsa servise "kombi yanmıyor" yerine somut bir tablo anlatabilirsin.

ECA'nın diğer kodları için [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) listesine bak. Kombi hiç yanmıyorsa belirti tarafı [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında. Ekranda E01 değil **F37** varsa [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/), **E03** varsa [ECA kombi E03 hatası](/blog/eca-kombi-e03-hatasi/) yazısına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
