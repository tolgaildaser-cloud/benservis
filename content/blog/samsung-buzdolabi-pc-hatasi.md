---
title: "Samsung buzdolabı PC hatası"
description: "Samsung buzdolabı PC hatası: Samsung'a göre bileşenler arası iletişim hatası. Fişi çekme, kapak rafı, kapı ve conta kontrolü adım adım."
slug: "samsung-buzdolabi-pc-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden. Web araması yalnız TR destek sayfalarının yerini bulmak için kullanıldı.
# (S7) Samsung TR destek "Samsung Buzdolabında PC hata kodu aldığımda ne yapabilirim?" (güncelleme 2024-11-20)
#      https://www.samsung.com/tr/support/home-appliances/what-can-i-do-when-i-get-pc-error-code-on-samsung-refrigerator/  md5 a22613ab4735b2d149fc8a9fc52e525c
#      "Buzdolabının fişini çekip 15-30 saniye bekleyerek tekrar takın."
#      "Yaşamış olduğunuz durum buzdolabındaki bileşenlerin birbiriyle olan iletişim hatasıdır. Ayrıca yakın zamanda elektrik /güç dalgalanması olmuş ise bu durum oluşmuş olabilir."
#      "Kapak rafları fazla dolu olmamalı, kapının kapanmasını engelleyecek şekilde ürün yerleşimi olmamalıdır."
#      "Kapının kapatılırken tam olarak kapatılmaması, sensörlerin denk gelmemesi durumlarında bu hata verilebilir."
#      "Bu işlemler sonrasında devam etmesi durumunda servis merkeziyle iletişime geçin."
# (S8) Samsung TR destek "Buzdolabımın kapıları düzgün kapanmadığında ne yapabilirim?" (2025-01-23)
#      https://www.samsung.com/tr/support/home-appliances/buzdolabimin-kapilari-duzgun-kapanmadiginda-ne-yapabilirim/  md5 b9061cb81d2b600c8c9cb83b4cfcb87e
#      3 adım: kapanmayı engelleyen cisim / kapı rafı yükü / "Buzdolabı lastiklerinizi ılık veya sıcak su ile dikkatli şekilde silerek tekrar deneyin."
# (S10) Samsung TR destek buzlanma/sızıntı sayfası (2026-08-21) — "Kauçuk kapı contaları düzenli olarak, en az altı ayda bir temizlenmelidir."
#      https://www.samsung.com/tr/support/home-appliances/why-does-my-refrigerator-have-frost-or-a-leak/  md5 9d745377c5e5afb6d0f8b67fe54c6bed
# PC kodu indirilen 9 TR Samsung kılavuzunun hiçbirinde geçmiyor; kaynağı yalnız S7. Sayfa hangi modelleri kapsadığını belirtmiyor.
# BİLEREK YAZILMAYANLAR: hangi kart/sensör/kablo (belgede yok) · "sensörlerin denk gelmemesi"nin ne olduğu (belgede açıklanmıyor) · menteşe/kapı ayarı (#31, belgede yok) ·
#   5 dakika gecikme (yalnız RB52DS/RB58DS kılavuzunda; PC sayfası model belirtmediği için eklenmedi).
# Alıntı denetim tablosu: samsung-buzdolabi-pc-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Ilık su", "Yumuşak bir bez"]
steps:
  - "Buzdolabının fişini çek, 15-30 saniye bekle ve tekrar tak."
  - "Kapak raflarının fazla dolu olmadığını kontrol et; doluysa yükü hafiflet."
  - "İçeride kapının kapanmasını engelleyen bir ürün olup olmadığına bak; gıdalar kapı raflarına değmesin."
  - "Kapıyı tam olarak kapat ve kapandığından emin ol."
  - "Kapı contasında şekil bozukluğu olup olmadığına bak ve contayı ılık suyla dikkatlice sil."
  - "Yakın zamanda bir elektrik ya da güç dalgalanması olup olmadığını not et."
  - "PC sürüyorsa servis merkeziyle iletişime geç."
faq:
  - q: "Samsung buzdolabı PC hatası ne demek?"
    a: "Samsung Türkiye destek sayfasına göre PC, buzdolabındaki bileşenlerin birbiriyle olan iletişim hatasıdır. Samsung, yakın zamanda bir elektrik ya da güç dalgalanması olduysa bu durumun oluşmuş olabileceğini de yazıyor."
  - q: "PC hatasında ilk ne yapmalıyım?"
    a: "Samsung'un ilk adımı buzdolabının fişini çekip 15-30 saniye bekledikten sonra tekrar takmak."
  - q: "Kapının PC hatasıyla ne ilgisi var?"
    a: "Samsung'a göre kapı kapatılırken tam kapatılmazsa ya da sensörler denk gelmezse bu hata verilebilir. Bu yüzden kapak raflarının fazla dolu olmaması ve kapının kapanmasını engelleyecek şekilde ürün yerleştirilmemesi gerekiyor."
  - q: "PC hatası geçmiyorsa ne yapmalıyım?"
    a: "Samsung'un talimatı: fişi çekip taktıktan, kapak raflarını ve kapıyı kontrol ettikten sonra hata devam ediyorsa servis merkeziyle iletişime geç. Belge bu noktadan sonra kullanıcıya başka adım vermiyor."
images:
  coverAlt: "Kapağı aralık bir buzdolabının dolu kapak rafları ve kapı kenarındaki lastik conta"
---

Buzdolabının göstergesinde **PC** yazıyor. Samsung Türkiye'nin destek sayfasındaki karşılığı: **"Yaşamış olduğunuz durum buzdolabındaki bileşenlerin birbiriyle olan iletişim hatasıdır."** Samsung iki olası sebep daha sayıyor: yakın zamanda bir **elektrik ya da güç dalgalanması** olmuş olabilir, ya da kapı kapatılırken **tam kapatılmamış** ve sensörler denk gelmemiş olabilir. Bu yazıda Samsung'un kullanıcıya verdiği adımları sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** PC = Samsung'a göre buzdolabındaki bileşenler arası iletişim hatası. Sıra şu: fişi çek, 15-30 saniye bekle, tak → kapak raflarını hafiflet → kapının kapanmasını engelleyen ürün var mı bak → kapıyı tam kapat. PC sürüyorsa → servis merkezi.

## Adım adım: evde denenecekler

**1. Fişi çek ve tak.** Samsung'un ilk adımı: buzdolabının **fişini çek, 15-30 saniye bekle** ve tekrar tak.

**2. Kapak raflarını hafiflet.** Samsung'a göre **kapak rafları fazla dolu olmamalı.** Kapıdaki bölmeleri çok doldurmak kapının tam kapanmamasına yol açabilir; doluysa yükü azalt.

**3. Kapının önünü aç.** Samsung'un ikinci şartı: **kapının kapanmasını engelleyecek şekilde ürün yerleşimi olmamalı.** Samsung'un kapı sayfasına göre ürünler kapıdaki raflara değerek kapanmayı engelliyor olabilir; gıdaların kapı raflarına temas etmediğinden emin ol.

**4. Kapıyı tam kapat.** Samsung'a göre kapı kapatılırken **tam olarak kapatılmazsa** ve sensörler denk gelmezse bu hata verilebilir. Kapıyı kapat ve tam kapandığını kontrol et.

**5. Contaya bak.** Samsung'un kapı sayfasındaki üçüncü adım: kapıda ve contasında **şekil bozukluğu** olup olmadığını kontrol et; lastikler gevşemiş olabilir. Contayı **ılık ya da sıcak suyla dikkatlice silerek** tekrar dene. Samsung'a göre kauçuk kapı contaları düzenli olarak, **en az altı ayda bir** temizlenmelidir.

**6. Elektriği not et.** Samsung, yakın zamanda bir **elektrik ya da güç dalgalanması** olduysa bu durumun oluşmuş olabileceğini yazıyor. Böyle bir olay yaşadıysan not al; servisle konuşurken işine yarar.

**7. Sürüyorsa ara.** Samsung'un son cümlesi: bu işlemlerden sonra hata **devam ediyorsa servis merkeziyle iletişime geç.**

## Kapı neden bu kadar önemli

PC bir iletişim hatası olsa da Samsung'un PC sayfasındaki maddelerin çoğu kapıyla ilgili: kapak rafları, kapının önündeki ürünler ve kapının tam kapanması. Samsung'un kapı sayfası kapının tam kapanmamasının üç yaygın sebebini sayıyor: içeride kapanmayı engelleyen bir cisim, kapıdaki rafların aşırı yüklenmesi ve gevşemiş ya da şekli bozulmuş conta. Samsung'un buzlanma sayfasına göre kapı düzgün kapanmazsa buzdolabı ısınır ve su oluşmaya başlar; yani kapıyı düzeltmek PC'nin ötesinde de işe yarar.

Kapı sorunlarının genel listesi için [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/), contanın bakımı için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısına bakabilirsin.

## Samsung'un diğer buzdolabı kodları

Samsung Türkiye'nin destek sayfalarında PC dışında birkaç kod daha anlatılıyor:

- **E09:** dondurucu yeterince soğuk değil → [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/)
- **E10:** soğutucu bölme yeterince soğuk değil → [Samsung buzdolabı E10 hatası](/blog/samsung-buzdolabi-e10-hatasi/)
- **E11:** soğutucu bölme gereğinden soğuk → [Samsung buzdolabı E11 hatası](/blog/samsung-buzdolabi-e11-hatasi/)
- **DE ON:** demo (bayi) modu → [Samsung buzdolabı DE ON uyarısı](/blog/samsung-buzdolabi-de-on-hatasi/)

Samsung'un başka serilerindeki kodlar için [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis

Fişi çekip 15-30 saniye bekledin, kapak raflarını hafiflettin, kapının önünü açıp tam kapattın, contayı sildin ve PC hâlâ duruyorsa Samsung kullanıcıya başka adım vermiyor: **servis merkeziyle iletişime geç.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş, raf, kapı ve conta temizliği kullanıcıya; kart, sensör ve kablolar servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Fiş çekilip 15-30 saniye beklendi mi?
2. Kapak rafları fazla dolu muydu?
3. Kapının kapanmasını engelleyen bir ürün var mıydı?
4. Conta düzgün mü, silindi mi?
5. Yakın zamanda bir elektrik ya da güç dalgalanması oldu mu?

Bu beşine cevabın varsa servise "ekranda PC yazıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
