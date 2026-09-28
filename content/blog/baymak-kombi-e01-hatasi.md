---
title: "Baymak kombi E01 hatası"
description: "Baymak kombide E01 başarısız ateşleme demek. Gaz vanası, su basıncı ve reset kontrolü, gaz kokusunda yapılacaklar ve servis sınırı; Baymak'tan."
slug: "baymak-kombi-e01-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi baymak.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no \f ayracına göre. Metin katmanı olmayan güncel Duotec Compact PDF'i tesseract (tur) OCR ile yalnız KARŞILAŞTIRMA için okundu.
# Web araması kullanılmadı. Alıntı denetim tablosu: baymak-kombi-e01-hatasi.KAYNAK.md
# A) Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 s. · md5 df4c42a6604e3ec39b2d152606464cb0
#    Gaz kokusu alıyorsanız: "1. Gaz kaynağını kapatın. 2. Kapı ve pencereleri açın. 3. Çıplak alev kullanmayın, sigara içmeyin, elektrik
#      düğmelerini ve elektrikli cihazları kullanmayın (kapı zili, asansör…)." ... "5. Binadaki diğer insanları uyarın. 6. Eğer sızıntı gaz sayacı
#      üzerindeyse gaz dağıtım şirketini bilgilendirin." s.4
#    "Kombinin çalıştırılması ... 1) Enerji beslemesini sağlayınız 2) Gaz vanasını açınız" s.13
#    "Kombi soğuk iken manometreden okunan basınç değerinin 0,7 – 1,5 bar aralığında" s.14 · "Su basıncı 0,5 barın altına düşerse kombi çalışmaz." s.15
#    "Bir hata oluştuğunda ekranda hata kodu görüntülenecektir (örneğin E01). Kombiyi resetlemek için, RESET (K1) tuşuna basınız.
#      Sorun devam ederse mutlaka yetkili servisi arayınız." · "E01 Başarısız ateşleme" s.17
#    "Kombinin bakımı ve temizlenmesi sadece yetkili kişiler tarafından yapılmalıdır." s.15
# B) Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122
#    https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 s. · md5 723546ecd63c99eaecb5c3143c687c2a · gaz kokusu s.4 · çalıştırma s.13 · E01 + RESET s.17
# C) Eco CT 20 Premix Montaj & Kullanma Kılavuzu 300035751
#    https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 s. · md5 e43149e6b888491b718ae20b1251eb37 · gaz kokusu s.4 · çalıştırma s.14 · E01 + RESET s.18
#    ⚠️ Belge içi tutarsızlık: panelde "K4 Reset tuşu" (s.13), hata bölümünde "RESET (K1)" (s.18) → yazıda tuş numarası verilmedi.
# D) Duotec DHW Kullanma Kılavuzu · https://www.baymak.com.tr/media/5477/baymak-duotec-dhw-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 s. · md5 aad24ed8ef67c8ab27204a4864bde308 · E01 "Başarısız ateşleme" + RESET s.18
# E) Lunatec Montaj ve Kullanma Kılavuzu 300036785
#    https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 s. · md5 dec11a69fd55c366d613da7ba31d6d98
#    GAZ KOKUSU: "Kombiyi kapatın. Hiçbir elektrikli cihazı çalıştırmayın (ışığı yakmak gibi). Olası serbest alevleri söndürün ve camları açın.
#      Baymak Yetkili Teknik Servis Merkezini arayın." s.4
#    "F2 Manuel reset (sıfırlama) tuşu" s.22
#    6.3 Ateşleme: "Kombinin elektrik beslemesini sağlayın. Tesisat basıncının belirtilenle aynı olduğunu kontrol edin ... Gaz musluğunu açın
#      (Kombinin altına yerleştirilmiş, sarı renkli)." s.24
#    "Kalıcı arıza ekran üzerinde "E" harfiyle gösterilir ... Arızadan çıkmak için 1 saniye süreyle RESET tuşuna basın. Arızanın tekrar etmesi
#      veya devam etmesi durumunda, yetkili Teknik Servis merkezini arayın." s.28
#    "E.04 .10 Brülör ateşlemesi 4 deneme sonrası başarısız" | Gaz besleme basıncı / gaz vanası ayarları / elektrot / fan / baca gazı çıkışı kontrolleri s.31
#    "E.01 .04 24 saatte 5 defa alev kaybı algılanmış" s.30 · "H.03 .02 Geçici alev kaybı" s.30
# F) Karşılaştırma (OCR): güncel Duotec Compact 300038181 Rev.01 29.02.2024 · https://www.baymak.com.tr/media/6460/baymak-duotec-compact-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · md5 21c20e98d4a5c67b92460da43b7b0c4c · "E01 Başarısız ateşleme" + RESET cümlesi A ile aynı (OCR s.18)
# BİLEREK yazılmayanlar:
#  - E01'in nedeni (elektrot, gaz valfi, iyonizasyon vb.): Duotec/Eco tablosu yalnız "Başarısız ateşleme" diyor. Lunatec'in E.04.10 kontrol listesi
#    yalnız "servisin kontrolleri" olarak verildi, kullanıcı adımı yapılmadı (#31).
#  - "Reset'i en fazla N kez dene" sınırı: Baymak belgelerinde sayı yok, uydurulmadı.
#  - Duotec kılavuzunun gaz kokusu maddesi "4. Olası sızıntıları belirleyin ve acilen kapatın" yazıya ALINMADI (#31: gaz müdahalesi yok).
#  - Gaz vanasının yeri Duotec/Eco için: kılavuzlar göstermiyor. Yalnız Lunatec'teki sarı renkli musluk yazıldı.
#  - E01 ile E.04.10'un "aynı kod" olduğu: iddia edilmedi; ikisi ayrı serilerin ayrı tablolarında ateşleme başarısızlığı olarak geçiyor.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ortamda gaz kokusu olmadığından emin ol; koku varsa gaz kaynağını kapat, camları aç ve elektrik düğmelerine dokunma."
  - "Ekrandaki kodu not et: Duotec ve Eco'da E01, Lunatec'te E.04.10."
  - "Kombinin gaz vanasının açık olduğunu kontrol et; Lunatec'te bu musluk sarı renklidir ve kombinin altındadır."
  - "Su basıncını kombi soğukken kontrol et: Duotec ve Eco'da 0,7–1,5 bar, Lunatec'te 1–1,5 bar."
  - "RESET tuşuna bas; Lunatec'te E ile başlayan kodlarda tuşa 1 saniye basılır."
  - "Kombinin yanıp yanmadığını ekrandan izle."
  - "Kod geri geliyorsa ya da devam ediyorsa yetkili servisi ara."
faq:
  - q: "Baymak kombide E01 hatası ne demek?"
    a: "Duotec, Duotec DHW ve Eco CT 20 kullanma kılavuzlarındaki hata kodu tablosunda E01'in karşılığı 'Başarısız ateşleme'. Kılavuzun talimatı: kombiyi resetlemek için RESET tuşuna bas, sorun devam ederse mutlaka yetkili servisi ara."
  - q: "Lunatec'te E01 yok, ateşleme hatası hangi kod?"
    a: "Lunatec noktalı kod düzeni kullanıyor. Kılavuzun kalıcı arızalar tablosunda E.04.10 'Brülör ateşlemesi 4 deneme sonrası başarısız' olarak geçiyor. E ile başlayan kodlar Lunatec'te kalıcı arızadır; arızadan çıkmak için RESET tuşuna 1 saniye basılır, arıza tekrar eder ya da devam ederse yetkili teknik servis aranır."
  - q: "E01 çıktı, gaz kokusu da var. Ne yapmalıyım?"
    a: "Önce reset değil, güvenlik. Duotec kılavuzunun gaz kokusu talimatı: gaz kaynağını kapat, kapı ve pencereleri aç, çıplak alev kullanma, sigara içme, elektrik düğmelerini ve elektrikli cihazları kullanma, binadaki diğer insanları uyar; sızıntı gaz sayacı üzerindeyse gaz dağıtım şirketini bilgilendir. Lunatec kılavuzu ayrıca Baymak Yetkili Teknik Servis Merkezi'nin aranmasını istiyor."
  - q: "Reset'e bastım, kombi yine E01 veriyor. Tekrar tekrar basayım mı?"
    a: "Baymak'ın kılavuzları reset için bir deneme sayısı vermiyor; verdikleri sınır şu: sorun devam ederse ya da arıza tekrar ederse yetkili servis aranır. Ateşlemenin neden olmadığını anlamak için Lunatec tablosunda sayılan kontroller (gaz besleme basıncı, gaz vanası ayarları, elektrot, fan, baca gazı çıkışı) servisin işidir."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin kontrol paneli; ekranda soyut bir uyarı göstergesi, kombinin altında borular arasında sarı kollu bir gaz vanası"
---

Baymak kombinin ekranında **E01** görüyorsan Baymak'ın kullanma kılavuzundaki karşılığı iki kelime: **"Başarısız ateşleme."** Kılavuzun talimatı da kısa: **RESET tuşuna bas; sorun devam ederse mutlaka yetkili servisi ara.** Bu yazıda reset'ten önce güvenle bakabileceğin şeyleri, Lunatec serisindeki karşılığını ve nerede durman gerektiğini Baymak'ın kendi kılavuzlarıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E01 = başarısız ateşleme (Lunatec'te E.04.10). Sıra şu: gaz kokusu yok mu → gaz vanası açık mı → su basıncı kılavuzdaki aralıkta mı → RESET → kombi yanıyor mu. Kod geri geliyorsa yetkili servis.

> 🔥 **Gaz kokusu varsa hiçbir adıma geçme.** Duotec kılavuzuna göre: gaz kaynağını kapat, kapı ve pencereleri aç, çıplak alev kullanma, sigara içme, **elektrik düğmelerine ve elektrikli cihazlara dokunma** (kapı zili, asansör dahil), binadaki diğer insanları uyar. Sızıntı gaz sayacı üzerindeyse gaz dağıtım şirketini bilgilendir. Lunatec kılavuzu ayrıca **Baymak Yetkili Teknik Servis Merkezi'ni aramanı** istiyor.

## E01 mi, E.04.10 mu: modeline göre

| Seri | Ekrandaki kod | Kılavuzdaki tanım | Reset |
|---|---|---|---|
| **Duotec, Duotec DHW, Eco CT 20** | **E01** | Başarısız ateşleme | RESET tuşuna bas |
| **Lunatec** | **E.04.10** | Brülör ateşlemesi 4 deneme sonrası başarısız | RESET tuşuna **1 saniye** bas |

Lunatec'te ekran önce harf ve grup kodunu (**E.04**), ardından yanıp sönerek arıza tipini (**.10**) gösterir. Kılavuza göre **E** ile başlayan kodlar kalıcı arızadır ve kombiyi kilitler; sıfırlamak (RESET) gerekir.

## Adım adım: evde denenecekler

**1. Önce gaz kokusuna bak.** Ortamda gaz kokusu varsa yukarıdaki güvenlik kutusundaki sırayı uygula; bu yazıdaki diğer adımlara geçme. Koku yoksa devam et.

**2. Kodu not et.** Duotec ve Eco'da ekranda **E01**, Lunatec'te **E.04** ve **.10** dönüşümlü görünür. Servisi araman gerekirse ilk soracakları şey budur.

**3. Gaz vanasına bak.** Baymak'ın çalıştırma talimatında iki adım var: **enerji beslemesini sağla** ve **gaz vanasını aç.** Vananın açık olduğunu kontrol et. Lunatec kılavuzuna göre gaz musluğu **sarı renklidir** ve **kombinin altındadır.**

**4. Su basıncını kontrol et.** Lunatec kılavuzu doğru ateşleme için tesisat basıncının belirtilen değerde olmasını istiyor: tesisat soğukken **1–1,5 bar.** Duotec ve Eco kılavuzlarında aralık kombi soğukken **0,7–1,5 bar**; bu kılavuzlara göre su basıncı **0,5 barın altına** düşerse kombi çalışmaz. Basınç düşükse önce [Baymak kombi F37 hatası](/blog/baymak-kombi-f37-hatasi/) yazısındaki doldurma adımlarına bak.

**5. RESET tuşuna bas.** Duotec ve Eco kılavuzlarının talimatı: kombiyi resetlemek için **RESET** tuşuna bas. Lunatec'te E ile başlayan kalıcı arızadan çıkmak için RESET tuşuna **1 saniye** basılır; Lunatec panelinde bu tuş **manuel reset (sıfırlama)** tuşudur.

**6. Kombiyi izle.** Reset'ten sonra ekrana bak: kod kalktı mı, kombi yanıyor mu? Duotec ve Eco kılavuzlarına göre kombi devreye girdiğinde ekranda **alev sembolü** görünür.

**7. Kod dönüyorsa dur.** Baymak'ın iki kod düzeninde de sınır aynı: sorun **devam ederse** ya da arıza **tekrar ederse** yetkili servisi ara.

## Servis neye bakacak

Duotec ve Eco kılavuzları E01 için bir neden saymıyor; yalnız "başarısız ateşleme" diyor. Lunatec'in arıza tablosu ise E.04.10 için bir kontrol listesi veriyor: **gaz besleme basıncı**, **gaz vanasının elektrik bağlantısı, ayarları ve çalışması**, **ateşleme elektrodunun bağlantısı ve durumu**, **fanın çalışması** ve **baca gazı çıkışında tıkanma.** Bunlar servisin kontrolleridir; hiçbirini kendin deneme.

Aynı tabloda ateşlemeyle yakın iki kod daha var: **H.03.02 — Geçici alev kaybı** ve **E.01.04 — 24 saatte 5 defa alev kaybı algılanmış.** İkisi de servisin konusudur.

⛔ **Kendin-çöz sınırı burada biter.** Duotec ve Eco kılavuzları kombinin bakımının ve temizlenmesinin **yalnız yetkili kişilerce** yapılmasını istiyor. Kural basit: **gaz vanasının açık olduğuna bakmak, basınç ve reset sana; gaz hattı, elektrot ve kombinin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Ekrandaki kod tam olarak ne (E01 mi, E.04.10 mu)?
2. Gaz vanası açık mı?
3. Su basıncı kombi soğukken kaç bar?
4. Reset'ten sonra kombi hiç yandı mı, kod ne kadar sürede geri geldi?
5. Aynı kod daha önce de çıktı mı, kaç kez?

Bu beşine cevabın varsa servise "kombi yanmıyor" yerine somut bir tablo anlatabilirsin.

Baymak'ın diğer kodları için [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) listesine bak. Marka bağımsız sıralama için [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı var. Ekranda **F13** görüyorsan [Baymak kombi F13 hatası](/blog/baymak-kombi-f13-hatasi/) yazısına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
