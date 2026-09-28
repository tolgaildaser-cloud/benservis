---
title: "ECA kombi E03 hatası"
description: "ECA kombide E03 aşırı sıcaklık uyarısı: gidiş ya da dönüş suyu 90°C'yi aşmış. Tesisat vanaları, radyatör vanası, Reset ve AP modu; ECA kılavuzlarından."
slug: "eca-kombi-e03-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi eca.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no = PDF sayfası (pdftotext -f/-l ile tek tek doğrulandı). Web araması kullanılmadı: URL'ler hub provenansından. md5'ler hub'ın 15 Eyl kaydıyla birebir.
# Alıntı denetim tablosu: eca-kombi-e03-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: E03 üç ailede aynı eşik (90°C) ve aynı dört adımlı çözüm; yalnız adı farklı (Aşırı / Yüksek Sıcaklık Uyarısı).
# A) PROTEUS PREMIX https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf · 48 s. · md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    "E03 Aşırı Sıcaklık Uyarısı | Gidiş veya dönüş sıcaklığının 90°C'yi aşması durumunda meydana gelir. | 1-Kombinin tesisat su vanlarının açık
#     olduğunu kontrol ediniz. 2- Kombi kış modunda bu hatayı verdiyse en az 1 radyatörü vanalarının açık olduğunu kontrol ediniz. 3- Reset butonuna
#     basınız. 4- Reset sonrası hata devam ediyorsa (veya tekrarlanıyorsa) E.C.A. yetkili servisine haber veriniz." s.29
#    AP: "Aşırı ısınma hatası sonrasındaki (E03) Reset işlemi ardından" · "AP Modu çalışırken kesinlikle "RESET" e basmayınız." s.28
#    Kış modu: "Kış modunda LCD ekranda hem musluk hem petek simgesi aynı anda görünmektedir." s.28 · Konum seçme düğmesi (kış/yaz) s.26
#    İlk çalıştırma: "Tüm radyatör vanaları açılır." · "Kombinin kalorifer gidiş - dönüş hatlarının vanaları açık olmalıdır." s.25 · EXX/FXX s.26
#    E07 "Eşanjör Yüksek Sıcaklık Hatası" (Reset, sürerse servis) s.29 · F07 "Baca gazı sıcaklığının 95°C'yi aşmasında" → servis s.30 · F13 s.30
# B) CONFEO PREMIX https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf · 44 s. · md5 4ef56163ac14c46f9cb1dcb9ea189681
#    "E03 Yüksek Sıcaklık Uyarısı | Bu durum, besleme veya dönüş sıcaklığının 90°C'yi aşması halinde meydana gelir. | 1- Kombi tesisatının su vanalarının
#     açık olduğundan emin olun. 2- Kombi kış modunda bu hatayı veriyorsa, en az 1 radyatörün açık olduğundan emin olun. 3- Reset düğmesine basın.
#     4- Resetten sonra hata hala devam ediyorsa (veya sürüyorsa), E.C.A. yetkili servisine bildirin." s.27
#    AP s.26 · kış modu simgeleri s.26 · "6 No'lu Buton: Açma/Kapama ve Yaz/Kış Modu Değiştirme Butonu" s.24 · ilk çalıştırma s.22 · EXX/FXX s.23 · F07 s.28 · F13 s.28
# C) CITIUS PREMIX https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf · 40 s. · md5 023164f7b7cebedc931411900edd72b0
#    E03 satırı A ile aynı metin s.25 · AP s.24 · kış modu s.24 · konum seçme düğmesi s.22 · ilk çalıştırma s.21 · EXX/FXX s.22 · F07, F13 s.25
# BİLEREK yazılmayanlar:
#  - E03'ün neden oluştuğuna dair parça teşhisi (pompa, sensör, eşanjör, tıkanıklık): E03 satırında muhtemel neden yalnız 90°C eşiği.
#  - Tesisat su vanalarının kombi altındaki yeri/rengi: kılavuzlar kullanıcıya göstermiyor → "bilmiyorsan servisten göstermesini iste".
#  - Su basıncı kontrolü E03 adımı olarak YAZILMADI (E03 satırında yok).
#  - Radyatör purjöründen hava alma: E03 çözümünde yok.
#  - Confeo'da kış modu simgesinin görünümü aynı cümleyle geçiyor; Confeo panelinin diğer simgeleri yazılmadı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin tesisat su vanalarının açık olduğunu kontrol et."
  - "Kombinin kış modunda olup olmadığına bak; kış modunda ekranda musluk ve petek simgesi birlikte görünür."
  - "Kış modundaysa en az bir radyatörün vanasının açık olduğunu kontrol et."
  - "Reset tuşuna bir kez bas."
  - "Ekranda AP yazarsa Reset'e basmadan 160 saniyelik hava tahliye modunun bitmesini bekle."
  - "Hata sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisine haber ver."
faq:
  - q: "ECA kombide E03 hatası ne demek?"
    a: "ECA kılavuzlarında E03 aşırı sıcaklık uyarısıdır (Confeo Premix'te adı 'Yüksek Sıcaklık Uyarısı'). Kombinin gidiş veya dönüş suyunun sıcaklığı 90°C'yi aştığında çıkar."
  - q: "E03'te ne yapmalıyım?"
    a: "Kılavuzun sırası şöyle: kombinin tesisat su vanalarının açık olduğunu kontrol et; kombi bu hatayı kış modunda verdiyse en az bir radyatörün vanasının açık olduğunu kontrol et; Reset tuşuna bas. Reset sonrası hata devam ediyor ya da tekrarlanıyorsa E.C.A. yetkili servisine haber ver."
  - q: "Reset'ten sonra ekranda AP yazıyor, bu yeni bir arıza mı?"
    a: "Hayır. AP hava tahliye modudur: kombi 160 saniye boyunca merkezi ısıtma tesisatındaki havayı boşaltır. Kılavuzlara göre bu mod E03 sonrasındaki Reset işleminin ardından da çalışır. AP sürerken Reset'e kesinlikle basılmamalı."
  - q: "E03 ile F07 arasındaki fark ne?"
    a: "E03 kalorifer suyunun (gidiş veya dönüş) 90°C'yi aşmasıdır ve kılavuz önce vana kontrolü ile Reset'i öneriyor. F07 ise baca gazı sıcaklığının 95°C'yi aşmasıdır; F07'de kılavuzun tek adımı E.C.A. yetkili servisine haber vermektir."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin altındaki bakır borular ve vanalar; yandaki odada beyaz bir panel radyatörün köşesindeki termostatik vana başlığı"
---

ECA kombinin ekranında **E03** var ve kombi durdu. ECA'nın kullanma kılavuzlarındaki hata kodu tablosunda bu kod **"Aşırı Sıcaklık Uyarısı"** (Confeo Premix'te **"Yüksek Sıcaklık Uyarısı"**) olarak geçiyor ve şöyle tanımlanıyor: **"Gidiş veya dönüş sıcaklığının 90°C'yi aşması durumunda meydana gelir."** Kılavuzun çözümü dört adım; ilk üçü senin yapabileceğin kontroller. Bu yazı o adımları Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarına dayanarak anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E03 = kalorifer suyu (gidiş ya da dönüş) 90°C'yi aşmış. Sıra şu: kombinin tesisat su vanaları açık mı → kış modundaysa en az bir radyatör vanası açık mı → Reset'e bir kez bas → AP yazarsa 160 saniye bekle. Sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisi.

## Adım adım: evde denenecekler

**1. Tesisat su vanalarına bak.** Kılavuzun ilk maddesi: **kombinin tesisat su vanalarının açık olduğunu kontrol et.** Kılavuzların ilk çalıştırma bölümü de kombinin **kalorifer gidiş-dönüş hatlarının vanalarının açık** olmasını istiyor. Bu vanaların hangileri olduğunu bilmiyorsan tahmin yürütme; servisten göstermesini iste.

**2. Kombinin modunu kontrol et.** Kılavuzlara göre **kış modunda** ekranda **hem musluk hem petek simgesi** aynı anda görünür; yaz modunda yalnız musluk simgesi sabit durur. Proteus Premix ve Citius Premix'te kış ve yaz modu arasında **konum seçme düğmesine** birer kez basarak geçilir; Confeo Premix'te bu iş **açma/kapama ve yaz/kış modu** düğmesindedir.

**3. Kış modundaysa radyatör vanalarına bak.** Kılavuzun ikinci maddesi: kombi bu hatayı kış modunda verdiyse **en az 1 radyatörün vanasının açık** olduğunu kontrol et. İlk çalıştırma bölümünde de ilk işlerden biri **tüm radyatör vanalarının açılması.**

**4. Reset tuşuna bir kez bas.** E ile başlayan kodlar ECA'da **kalıcı arızadır**: önce hatanın düzelmesi gerekir, sonra **Reset tuşuna 1 kez** basılınca cihaz normal çalışmaya döner.

**5. AP yazarsa bekle.** Kılavuzlara göre E03 sonrasındaki Reset işleminin ardından kombi **hava tahliye moduna (AP)** geçer: 160 saniye boyunca merkezi ısıtma tesisatındaki havayı boşaltır, ekranda **"AP"** yazar. Kılavuzun uyarısı açık: **AP modu çalışırken kesinlikle Reset'e basma.**

**6. Sürüyorsa servise haber ver.** Reset sonrası hata **devam ediyorsa ya da tekrarlanıyorsa** E.C.A. yetkili servisine haber ver.

## Üç ailede E03

| Seri | Kılavuzdaki ad | Tanım |
|---|---|---|
| Proteus Premix | Aşırı Sıcaklık Uyarısı | Gidiş veya dönüş sıcaklığının 90°C'yi aşması |
| Confeo Premix | Yüksek Sıcaklık Uyarısı | Besleme veya dönüş sıcaklığının 90°C'yi aşması |
| Citius Premix | Aşırı Sıcaklık Uyarısı | Gidiş veya dönüş sıcaklığının 90°C'yi aşması |

Çözüm adımları üçünde de aynı sırada: tesisat su vanaları, kış modundaysa radyatör vanası, Reset, sürerse servis.

## Karıştırılan sıcaklık kodları

- **F07:** Baca gazı sıcaklığının **95°C'yi** aşması. Kılavuzun tek adımı E.C.A. yetkili servisine haber vermek.
- **E07 (Proteus Premix):** Eşanjör yüksek sıcaklık hatası. Kılavuz önce Reset'i, hata sürerse servisi söylüyor.
- **F13:** 1 saat içinde 5'ten fazla Reset'e basılması. E03 geri geliyorsa Reset'i art arda deneme; F13'ün çözümü doğrudan yetkili servis.

## Ne zaman doğrudan servis

- Vanalar açık, bir Reset denendi ve **E03 sürüyor ya da tekrarlıyorsa.**
- Ekranda **F07** ya da **F13** çıktıysa.

⛔ **Kendin-çöz sınırı burada biter.** Kılavuzun sana bıraktığı iş vanaları kontrol etmek, modu okumak ve bir kez Reset'e basmak. Kombinin içi, pompa ve sensörler E.C.A. yetkili servisinin işidir.

## Servisi aramadan önce iki dakikalık özet

1. Kombinin modeli ne (Proteus, Confeo, Citius)?
2. Kombi kış modunda mıydı?
3. Kombinin tesisat su vanaları ve en az bir radyatör vanası açık mı?
4. Reset sonrası AP modu tamamlandı mı?
5. E03 ne kadar sürede geri geldi?

Bu beşine cevabın varsa servise "kombi durdu" yerine somut bir tablo anlatabilirsin.

ECA'nın diğer kodları için [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) listesine bak. Ekranda E03 değil **E01** varsa [ECA kombi E01 hatası](/blog/eca-kombi-e01-hatasi/), su basıncıyla ilgili **F37** ya da **F40** varsa [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/) ve [ECA kombi F40 hatası](/blog/eca-kombi-f40-hatasi/) yazılarına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
