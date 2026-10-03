---
title: "Protherm kombi çalışmıyor: kontrol sırası"
description: "Protherm kombi sıcak su da ısıtma da vermiyorsa kılavuzdaki tablo: ekran kodu, basınç, sigorta, soğuk su vanası, ayarlar ve reset tuşu."
slug: "protherm-kombi-calismiyor"
date: "2026-10-03"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, kombi + fırın koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Protherm'in kendi alan adından indirildi, hepsi HTTP 200.
# Web araması yalnız belgelerin yerini bulmak için kullanıldı. Okuma pdftotext -layout, sayfa = PDF sayfası. Yerel kopya: blog-taslaklar/kaynak-protherm-alarko-sprint/
#  (L) Lynx Condens 24/28 kW kullanma kılavuzu 0020277896_02, 20 s., md5 a062e2f5414dde91e8e73afb33559a11 — https://www.protherm.com.tr/_temp/7ba8cc34-c05a-44d9-90c1-607f1a2c579d.pdf
#      s.15-16 Ek B "Ürün çalışmıyor: – Sıcak su yok – Isıtma ısınmıyor" satırları: gaz kesme vanaları · "Soğuk su devresi kapatma vanası kapalı." → "Soğuk su devresi kapatma vanasını açın."
#      · "Binadaki elektrik beslemesi kesildi." → "Binadaki sigortayı kontrol edin. Elektrik beslemesi yeniden oluşturulduğunda ürün otomatik olarak yeniden açılır." · "Ürün kapalı." → "Ürünü çalıştırın"
#      · sıcaklık çok düşük → "Isıtma devresi gidiş hattı sıcaklığını ve kullanma suyu sıcaklığını ayarlayın" · F.22 → "Isıtma sistemini doldurun" · "Isıtma sisteminde hava var." → "Radyatörün havasını alın Sorun tekrar meydana gelirse: Yetkili bayiye haber verin"
#      · "Arka arkaya beş başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer (Arıza mesajı: F.28)." → "[reset] tuşuna basın. Ürün yeni bir ateşleme denemesi yürütür. Ateşleme arızasını üç arıza giderme denemesi ile gideremiyorsanız, yetkili servise başvurun."
#      · "Sıcak su hazırlama çalışıyor; Isıtma çalışmıyor." → "Harici regleri doğru ayarlayın" · s.4 doğal gaz kokusu talimatı · s.11 4.2.1 "Ürünün montajını gerçekleştiren uzman tesisatçıdan kapatma vanalarının konumu ve kullanımı ile ilgili bilgi isteyin."
#      · s.11 4.2.2 "Harici olarak monte edilmiş ana şalter ile ürünü çalıştırın." · s.11 ana ekranda dolum basıncı gösterilir; arıza mesajında ana ekran arıza koduna geçer.
#  (P) Puma Condens 18/24 kullanma kılavuzu 0020289282_02, 16 s., md5 ef689d0d0cd29a076485d66f769ceee4 — https://www.protherm.com.tr/_temp/protherm-puma-condens-kullanma-kilavuzu-18-24.pdf
#      s.12 Ek B aynı satır: "Ürün kapalı." → "Ürün arızasını giderin. (→ sayfa 10)" · hava → "Isıtma sisteminin havasını aldırmak için, bir yetkili servise başvurun." · "Binadaki sigortayı kontrol edin. Ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar."
#      · s.10 6.2 "Ana ekranda açma / kapama tuşuna düğmesine 3 saniyeden daha uzun bir süre basmak suretiyle, ürünün arızalarını giderin (en fazla beş kez). Ekranda rE görüntülenir." · "5 arıza giderme denemesinden sonra rE hızlı bir şekilde yanıp söner."
#      · s.12 Ek A F.28 "Ateşleme başarısız" → gaz kesme vanası kontrolü · "Ürün arızasını giderin." · "Ateşleme arızasını gideremiyorsanız, yetkili servise başvurun."
#  (G) Gepard Condens 20/24 KTV-FC/3 kullanma kılavuzu 0020281180_03, 16 s., md5 e007ac08696eee927eb59ddd827dfb63 — https://www.protherm.com.tr/_temp/c2f54fd4-f5ad-4a4c-a6a3-195cd32bb5f9.pdf
#      s.13-14 Ek B aynı satır; basınç kodu F10; hava → "Yetkili servis tarafından ısıtma sisteminin havasını aldırın." · ateşleme F04 → "Reset tuşuna basın (Reset tuşu). Ürün yeniden çalışmaya başlar. ... üç arıza giderme denemesi ..."
#      · F05 "Atık gaz hattında bir arıza mevcut" → "Yetkili servis tarafından arızanın giderilmesini sağlayın." · s.9 "Ürünü sadece kapak tamamen kapalı olduğunda işletime alın."
# BİLEREK YAZILMAYANLAR: gaz kesme vanası adımı (tablonun ilk satırı; görev talimatı gereği gaz müdahalesi numaralı adıma alınmadı, gövdede vanaların yerini montajı yapana sorma notu var)
#   · radyatör hava alma (alet; Puma ve Gepard servise veriyor) · F05/atık gaz · ana şalter dışında elektrik müdahalesi · arıza nedeni teşhisi · fiyat.
# Alıntı denetim tablosu: protherm-kombi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, açık alevden uzak dur, binadan çık ve gaz şirketinin acil birimini dışarıdan ara."
  - "Ekrana bak ve gösterilen kodu ya da basınç değerini not et."
  - "Basınç düşükse ya da ekranda F.22 (Gepard'da F10) varsa ısıtma sistemine su doldur."
  - "Binadaki sigortayı kontrol et; elektrik geri geldiğinde kombi kendiliğinden açılır."
  - "Soğuk su devresinin kapatma vanasının açık olduğunu kontrol et."
  - "Kombi kapalıysa modeline göre çalıştır; ön kapak tamamen kapalı olmalı."
  - "Kalorifer gidiş suyu ve sıcak su sıcaklığının çok düşük ayarlanmadığını kontrol et."
  - "Ateşleme kodu (F.28 ya da F04) varsa reset tuşuna bas; üç denemede kalkmıyorsa yetkili servise başvur."
faq:
  - q: "Protherm kombim ne sıcak su veriyor ne ısıtıyor, neden?"
    a: "Protherm'in Lynx Condens, Puma Condens ve Gepard Condens kılavuzlarındaki arıza tablosunda bu durumun ayrı bir satırı var. Sayılan nedenler: gaz kesme vanalarından biri kapalı, soğuk su devresi kapatma vanası kapalı, binadaki elektrik kesilmiş, ürün kapalı, sıcaklıklar çok düşük ayarlanmış, sistem basıncı yetersiz, ısıtma sisteminde hava var ya da ateşleme arızası."
  - q: "Reset tuşuna kaç kez basabilirim?"
    a: "Lynx Condens ve Gepard Condens kılavuzları ateşleme arızasında reset tuşuna basmayı söylüyor ve arıza üç arıza giderme denemesiyle kalkmıyorsa yetkili servise başvurulmasını istiyor. Puma Condens'te açma/kapama tuşuna 3 saniyeden uzun basılarak en fazla beş kez arıza giderme yapılabiliyor; beşinci denemeden sonra ekrandaki rE hızlı yanıp sönüyor."
  - q: "Sıcak su var ama petekler ısınmıyor, bu da aynı arıza mı?"
    a: "Hayır, Protherm'in tablosunda bu ayrı bir satır: sıcak su hazırlama çalışıyor, ısıtma çalışmıyor. Lynx Condens ve Puma Condens kılavuzlarına göre neden harici reglerin doğru ayarlanmamış olması; tedbir harici regleri kendi kullanma kılavuzuna göre doğru ayarlamak."
  - q: "Petek havasını ben alabilir miyim?"
    a: "Modelden modele değişiyor. Lynx Condens tablosu radyatörün havasının alınmasını, sorun tekrar ederse yetkili bayiye haber verilmesini söylüyor. Puma Condens ve Gepard Condens tabloları ise ısıtma sistemindeki havanın yetkili servise aldırılmasını istiyor. Puma kılavuzu hava alma için bir hava tahliye anahtarı kullanılabileceğini yazıyor; aletle yapılan bu işi emin değilsen servise bırak."
images:
  coverAlt: "Mutfak duvarındaki ekranı kapalı bir kombinin önünde, telefon ışığıyla altındaki vanalara bakan bir kişi"
---

Musluktan soğuk su akıyor, petekler buz gibi. Protherm'in kullanma kılavuzlarındaki arıza tablosu bu durumu tek satırda topluyor: **"Ürün çalışmıyor: – Sıcak su yok – Isıtma ısınmıyor"**. Tablonun saydığı nedenlerin çoğu arıza değil; kapalı kalmış bir vana, kesilmiş elektrik ya da düşük kalmış bir ayar. Bu yazı Lynx Condens, Puma Condens ve Gepard Condens kılavuzlarına dayanıyor; tuş adları modele göre değişir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu varsa önce güvenlik. Sonra ekrana bak: basınç düşükse su doldur, kod varsa koda göre ilerle. Sigorta, soğuk su vanası, kombinin açık olması ve sıcaklık ayarı sırayla kontrol edilir. Ateşleme kodunda reset tuşu en fazla üç deneme; kalkmıyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Gaz kokusu var mı?** Lynx Condens kılavuzunun güvenlik bölümü doğal gaz kokusunda net: **gaz kokusu olan mekanlarda bulunmayın**, mümkünse kapıları ve pencereleri açıp cereyan yaptırın, **açık alevden kaçının** ve binadaki elektrik şalterlerine, prizlere dokunmayın. Kılavuz binayı hemen terk etmeyi, diğer sakinleri uyarmayı ve gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber vermeyi istiyor. Koku varsa bu yazının geri kalanı bekler.

**2. Ekran ne diyor?** Lynx Condens'te ana ekran ısıtma sisteminin **dolum basıncını** gösterir; bir arıza varsa ana ekran **arıza koduna geçer.** Kodu ve basıncı bir kenara yaz; sonraki adımlar buna göre şekilleniyor.

**3. Basınç düşükse su doldur.** Tablodaki satır: **sistem basıncı yeterli değil, ısıtma sisteminde yetersiz su** (Lynx ve Puma'da F.22, Gepard'da F10). Tedbir: **ısıtma sistemini doldurun.** Doldurmanın bütün sırası ve hedef bar değerleri [Protherm kombi F22 hatası](/blog/protherm-kombi-f22-hatasi/) yazısında.

**4. Binadaki sigorta.** Tablo, binadaki elektrik beslemesi kesildiyse **binadaki sigortanın kontrol edilmesini** istiyor ve ekliyor: elektrik yeniden geldiğinde **ürün otomatik olarak yeniden açılır.**

**5. Soğuk su vanası.** Bir sonraki neden: **soğuk su devresi kapatma vanası kapalı.** Tedbir tek cümle: **vanayı açın.** Lynx Condens kılavuzuna göre uzun süreli kapatmada (örneğin tatilde) bu vana da kapatılıyor; tatilden döndüysen açık olup olmadığına bak.

**6. Kombi kapalı mı?** Tablodaki bir neden de doğrudan **ürünün kapalı** olması. Lynx Condens ve Gepard Condens kılavuzları burada **ürünü çalıştırmayı** gösteriyor; Lynx'te ürün **harici olarak monte edilmiş ana şalterle** çalıştırılıyor. Puma Condens'te ise aynı satırın tedbiri ürün arızasını gidermek, yani 8. adımdaki reset. Gepard Condens kılavuzunun şartı da unutulmasın: **ürünü sadece kapak tamamen kapalı olduğunda işletime alın.**

**7. Sıcaklık ayarları.** Gidiş suyu ya da kullanım suyu sıcaklığı **çok düşük ayarlanmış** ya da ısıtma/sıcak su devre dışı bırakılmış olabilir. Tedbir: kalorifer gidiş suyu sıcaklığını ve kullanım suyu sıcaklığını yeniden ayarla. Lynx Condens kılavuzu yetkili bayinin ayarlanabilir en yüksek sıcaklığı sınırlamış olabileceğini de not ediyor.

**8. Ateşleme kodu ve reset.** Lynx Condens'te arka arkaya beş başarısız ateşleme denemesinden sonra ürün **arıza konumuna geçer (F.28).** Tedbir: reset tuşuna bas, ürün yeni bir ateşleme denemesi yapar. Gepard Condens'te aynı durumun kodu **F04** ve tuşun adı doğrudan **Reset.** Puma Condens'te açma/kapama tuşuna **3 saniyeden uzun** basılır, ekranda **rE** görünür; en fazla beş kez. Üç kılavuzun ortak sınırı: ateşleme arızası bu denemelerle kalkmıyorsa **yetkili servise başvur.**

## Tablonun ilk satırı: gaz kesme vanaları

Protherm'in tablosunda ilk neden, binaya ya da kombiye monte edilmiş **gaz kesme vanalarından birinin kapalı** olması. Gaz hattıyla ilgili bir işi bu rehberin adımlarına almıyoruz. Lynx Condens kılavuzu zaten vanalar için şunu öneriyor: **kapatma vanalarının konumunu ve kullanımını, ürünün montajını yapan uzman tesisatçıdan öğren.** Vanaların açık olup olmadığından emin değilsen montajı yapan firmaya ya da yetkili servise sor.

## Sıcak su var, petekler soğuksa

Bu yazı kombinin **hiç** çalışmadığı durumu anlatıyor. Protherm'in tablosunda ayrı bir satır daha var: **sıcak su hazırlama çalışıyor, ısıtma çalışmıyor.** Lynx Condens ve Puma Condens'e göre neden **harici reglerin** (oda termostatı) doğru ayarlanmamış olması; tedbir regleri kendi kılavuzuna göre ayarlamak.

## Ne zaman servis

- Reset tuşuyla üç denemede kalkmayan ateşleme kodu (F.28 / F04).
- Gepard Condens'te **F05**: kılavuza göre atık gaz hattında arıza; giderilmesi yetkili servisin işi.
- Isıtma sisteminde hava: Puma Condens ve Gepard Condens bunu yetkili servise veriyor.
- Basınç doldurulduğu hâlde tekrar düşüyorsa ya da adımların hepsi yerinde olduğu hâlde kombi çalışmıyorsa.

⛔ Kapağın arkası, gaz hattı ve elektrik bağlantıları servisin işi. Markadan bağımsız olarak kombinin neden yanmadığını [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı, diğer kodları [kombi arıza kodları](/blog/kombi-ariza-kodlari/) listesi anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
