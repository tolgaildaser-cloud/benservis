---
title: "Baymak kombi F13 hatası"
description: "Baymak kombide F13 reset kilitlenmesi demek. Baymak'ın talimatı: elektrik beslemesini kapatıp aç. Yeniden çalıştırma ve servis sınırı adım adım."
slug: "baymak-kombi-f13-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi baymak.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no \f ayracına göre. Metin katmanı olmayan güncel Duotec PDF'leri tesseract (tur) OCR ile yalnız KARŞILAŞTIRMA için okundu.
# Web araması kullanılmadı. Alıntı denetim tablosu: baymak-kombi-f13-hatasi.KAYNAK.md
# A) Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 s. · md5 df4c42a6604e3ec39b2d152606464cb0
#    "F13 Reset kilitlenmesi (cihaz elektrik beslemesini açıp kapatınız)" s.17
#    "Kombiyi resetlemek için, RESET (K1) tuşuna basınız. Sorun devam ederse mutlaka yetkili servisi arayınız." s.17
#    "5.1 Kombinin çalıştırılması ... 1) Enerji beslemesini sağlayınız 2) Gaz vanasını açınız" s.13
#    "ON/OFF tuşuna (K2) basınız ve ekranda radyatör ve musluk sembolünün göründüğünden emin olun." (kış konumu) s.13
#    "Ekranda musluk sembolü görüntüleninceye kadar ON/OFF tuşuna (K2) basınız." (yaz konumu) s.13
#    "5.3 Cihazın kapatılması: Ana güç kaynağını kesin. Gaz vanasını kapatın." · "Kombi kapatıldıktan sonra donmaya karşı korumalı değildir." s.14
#    Donma koruması şartları: "1. Kombi elektrik beslemesi açık olmalıdır. 2. Gaz vanası açık olmalıdır. 3. Sistem (su) basıncı doğru değerlerde
#      olmalıdır. 4. Kombi bloke durumda olmamalıdır." s.14
#    "Elektrik şebeke bağlantısı hasarlıysa, tehlikeli durumları önlemek için orijinal üretici veya yetkili kişi tarafından değiştirilmelidir." s.5
# B) Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122
#    https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 s. · md5 723546ecd63c99eaecb5c3143c687c2a · F13 + RESET s.17 · çalıştırma s.13 · kapatma/donma s.14
# C) Eco CT 20 Premix Montaj & Kullanma Kılavuzu 300035751
#    https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 s. · md5 e43149e6b888491b718ae20b1251eb37 · F13 s.18 · ON/OFF = K5 (s.13-14) · kapatma/donma s.15
#    ⚠️ Belge içi tutarsızlık: panelde "K4 Reset tuşu" (s.13), hata bölümünde "RESET (K1)" (s.18); ON/OFF Duotec'te K2, Eco'da K5 → yazıda tuş numarası verilmedi.
# D) Duotec DHW Kullanma Kılavuzu · https://www.baymak.com.tr/media/5477/baymak-duotec-dhw-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 s. · md5 aad24ed8ef67c8ab27204a4864bde308 · F13 s.18
# E) Lunatec Montaj ve Kullanma Kılavuzu 300036785 · https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 s. · md5 dec11a69fd55c366d613da7ba31d6d98 · arıza tablolarında (s.28-31) F13 YOK — yazıda yalnız bu olgu verildi.
# F) Karşılaştırma (OCR): güncel Duotec Compact 300038181 Rev.01 29.02.2024 · https://www.baymak.com.tr/media/6460/baymak-duotec-compact-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · md5 21c20e98d4a5c67b92460da43b7b0c4c · "Reset kilitlenmesi (cihaz elektrik beslemesini açıp kapatınız)" (OCR s.18) A ile aynı
#    Duotec 33-42-45 güncel · https://www.baymak.com.tr/media/4994/baymak-duotec-33-42-45.pdf · HTTP 200 · md5 3af0df38e59713aed2872b9e9e982390 · F13 satırı aynı (OCR s.18)
# BİLEREK yazılmayanlar:
#  - F13'ün NEDEN çıktığı (ör. "art arda çok reset"): Baymak belgelerinde yok, uydurulmadı. Yalnız tanım + parantez içi talimat verildi.
#  - Beslemeyi kesip açma arasında bekleme süresi: belgede yok.
#  - "Fişi çek": belge "cihaz elektrik beslemesi" / "ana güç kaynağı" diyor; bağlantının fiş mi sigorta mı olduğu yazmıyor → "fiş" denmedi.
#  - Lunatec'te F13'ün karşılığı: tabloda yok, eşleme yapılmadı.
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ekrandaki kodun F13 olduğunu doğrula ve not et."
  - "Kombinin elektrik beslemesini kes."
  - "Elektrik beslemesini yeniden ver."
  - "Kombinin gaz vanasının açık olduğunu kontrol et."
  - "ON/OFF tuşuyla çalışma konumunu seç; kış konumunda ekranda radyatör ve musluk sembolleri görünür."
  - "F13 geri gelirse ya da sorun devam ederse yetkili servisi ara."
faq:
  - q: "Baymak kombide F13 hatası ne demek?"
    a: "Duotec, Duotec DHW ve Eco CT 20 kullanma kılavuzlarındaki hata kodu tablosunda F13'ün karşılığı 'Reset kilitlenmesi'. Tablo aynı satırda talimatı da veriyor: cihaz elektrik beslemesini açıp kapatınız."
  - q: "F13'te RESET tuşuna basmak yeterli mi?"
    a: "Baymak'ın kılavuzları hata kodları için genel olarak RESET tuşuna basılmasını söylüyor; F13 satırında ise parantez içinde ayrı bir talimat var: cihazın elektrik beslemesini kapatıp açmak. Bu yüzden F13'te kılavuzun kendi satırındaki talimatı uygula. Sorun devam ederse kılavuza göre yetkili servis aranır."
  - q: "Kombiyi kapalı bırakıp servisi bekleyebilir miyim?"
    a: "Kılavuz bir uyarı düşüyor: kombi kapatıldıktan sonra donmaya karşı korumalı değildir. Donma koruması fonksiyonunun çalışması için kombinin elektrik beslemesinin açık, gaz vanasının açık, su basıncının doğru değerlerde olması ve kombinin bloke durumda olmaması gerekiyor. Havalar soğuksa bunu servise bildir."
  - q: "Lunatec kombimde F13 diye bir kod göremiyorum."
    a: "Lunatec kılavuzunun arıza tablolarında F13 yok; Lunatec H ve E ile başlayan noktalı kodlar kullanıyor. F13, Duotec ve Eco serisinin kod tablosunda geçiyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin ön paneli; dijital ekranda soyut bir kod göstergesi ve yanında birkaç yuvarlak tuş"
---

Baymak kombinin ekranında **F13** görüyorsan Baymak'ın kullanma kılavuzundaki karşılığı şu: **"Reset kilitlenmesi."** Aynı satırda parantez içinde talimat da var: **"cihaz elektrik beslemesini açıp kapatınız."** Yani bu kodda Baymak'ın tarif ettiği işlem, kombinin elektriğini kapatıp yeniden açmak. Bu yazıda o işlemi ve kombiyi yeniden çalıştırmayı Baymak'ın kılavuzlarıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F13 = Baymak'a göre reset kilitlenmesi. Sıra şu: kodu not et → kombinin elektrik beslemesini kes → yeniden ver → gaz vanası açık mı bak → ON/OFF ile çalışma konumunu seç. F13 geri gelirse yetkili servis.

## F13 hangi Baymak'ta çıkar

F13, **Duotec**, **Duotec DHW** ve **Eco CT 20** kullanma kılavuzlarındaki F kodları tablosunda yer alıyor; Baymak'ın 2024 tarihli güncel Duotec Compact kılavuzunda da satır aynı. **Lunatec** kılavuzunun arıza tablolarında F13 yok; o seri H ve E ile başlayan noktalı kodlar kullanıyor.

Aynı tablonun başındaki genel talimat şöyle: bir hata oluştuğunda ekranda hata kodu görüntülenir; kombiyi resetlemek için **RESET** tuşuna basılır; sorun devam ederse **mutlaka yetkili servis** aranır. F13 bu genel talimattan ayrılıyor, çünkü kendi satırında ayrı bir işlem yazılı.

## Adım adım: evde denenecekler

**1. Kodu not et.** Ekrandaki kodun **F13** olduğundan emin ol ve bir kenara yaz. Servisi araman gerekirse ilk soracakları şey budur.

**2. Elektrik beslemesini kes.** Baymak'ın talimatı cihazın elektrik beslemesini kapatıp açmak. Kılavuz kombiyi kapatmayı "ana güç kaynağını kesin" diye tarif ediyor. Beslemenin evinde nereden kesildiğini bilmiyorsan kombinin kapağını açma; montajı yapan servise sor.

**3. Beslemeyi yeniden ver.** Kombinin elektriğini tekrar aç. Baymak'ın çalıştırma talimatının ilk adımı da budur: **enerji beslemesini sağla.**

**4. Gaz vanasına bak.** Çalıştırma talimatının ikinci adımı **gaz vanasını açmak.** Vananın açık olduğunu kontrol et.

**5. Çalışma konumunu seç.** Kış konumu için **ON/OFF** tuşuna bas ve ekranda **radyatör ve musluk** sembollerinin göründüğünden emin ol. Yalnız sıcak su istiyorsan yaz konumu için ekranda yalnız **musluk** sembolü görünene kadar ON/OFF tuşuna bas.

**6. Kod geri gelirse dur.** F13 yeniden çıkıyorsa ya da sorun devam ediyorsa kılavuzun sınırı net: **yetkili servisi ara.**

## Kombiyi kapalı bırakırken bir uyarı

Servisi beklerken kombiyi kapalı tutmayı düşünüyorsan Baymak'ın notu önemli: **kombi kapatıldıktan sonra donmaya karşı korumalı değildir.** Kılavuza göre kombinin donma koruması fonksiyonu, çıkış suyu sıcaklığı 5 °C'nin altına düşünce devreye girer; çalışabilmesi için de dört şart gerekir:

- Kombinin elektrik beslemesi açık olmalı.
- Gaz vanası açık olmalı.
- Sistem (su) basıncı doğru değerlerde olmalı.
- Kombi bloke durumda olmamalı.

Havalar soğuksa ve kombi F13'te kalıyorsa bunu servisi ararken söyle.

## Nerede duracaksın

F13'te kullanıcıya düşen iş, kılavuzun yazdığı gibi beslemeyi kapatıp açmak ve kombiyi yeniden çalıştırmaktır. Bunun ötesi servisin işidir. Kılavuz ayrıca elektrik şebeke bağlantısı hasarlıysa bunun **üretici ya da yetkili kişi** tarafından değiştirilmesini istiyor; bağlantıda hasar görüyorsan kendin müdahale etme.

⛔ **Kendin-çöz sınırı burada biter.** Duotec ve Eco kılavuzları kombinin bakımının ve temizlenmesinin **yalnız yetkili kişilerce** yapılmasını istiyor. Kural basit: **beslemeyi kapatıp açmak ve ON/OFF sana; elektrik tesisatı ve kombinin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Ekrandaki kod F13 mü, yanında başka bir kod da görünüyor mu?
2. Elektrik beslemesi kapatılıp açıldı mı?
3. Gaz vanası açık mı?
4. Yeniden çalıştırmadan sonra F13 ne kadar sürede geri geldi?
5. Kombinin modeli ne (Duotec, Duotec DHW, Eco)?

Bu beşine cevabın varsa servise "kombi çalışmıyor" yerine somut bir tablo anlatabilirsin.

Baymak'ın diğer kodları için [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) listesine bak. Ekranda F13 değil **E01** varsa [Baymak kombi E01 hatası](/blog/baymak-kombi-e01-hatasi/), **F37** varsa [Baymak kombi F37 hatası](/blog/baymak-kombi-f37-hatasi/) yazısına geç. Kombi hiç yanmıyorsa marka bağımsız sıralama [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
