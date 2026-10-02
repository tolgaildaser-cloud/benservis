---
title: "Baymak kombi sıcak su vermiyor"
description: "Baymak kombi sıcak su vermiyorsa Baymak'ın sırası: su basıncı, musluk sembolü, kullanım suyu sıcaklığı, hata kodu. Duotec, Eco CT, Lunatec."
slug: "baymak-kombi-sicak-su-vermiyor"
date: "2026-10-02"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 07:1x · Kaynak denetimi: baymak-kombi-sicak-su-vermiyor.KAYNAK.md (bu dosyanın yanında)
# Belgelerin hepsi baymak.com.tr (markanın kendi alan adı). Bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200.
# PDF md5'leri 28 Eyl yerel kopyasıyla (kaynak-baymak-sprint/) birebir. pdftotext -layout, sayfa = PDF sayfası (\f ayracı).
# Web araması KULLANILMADI; adresler yayındaki baymak-kombi-f37-hatasi provenansından ve baymak.com.tr menüsünden.
# W) Baymak "Kombi Neden Suyu Isıtmaz?" (Kullanıcı Konfor Kılavuzu, 2.12.2024)
#    https://www.baymak.com.tr/kullanici-konfor-kilavuzu/kombi-neden-suyu-isitmaz · HTTP 200 · text/html · md5 057efc6ab1b93f15cb3beb333e8096e6
#    (dinamik sayfa; 29 Eyl kopyasıyla md5 farklı, metin aynı) → kaynak-baymak-sprint/konfor-kombi-neden-suyu-isitmaz-2026-10-02.html
#    "başlıca nedeni su basıncının düşük olmasıdır" · "Su basıncının kritik seviyelere düşmesi durumunda kombi hem suyu ısıtmaz hem petekleri çalıştırmaz."
#    · "Termostatın yanlış ayarlanmış olması ... suyun ısınmamasına sebebiyet verir." · "sıcak suyun derecesini kombi ekranından artırabiliriz"
#    · "Eğer sıcak su arızası dışarıdan gözlemleyemediğimiz bir problemden kaynaklıysa hiçbir şekilde müdahale etmemek gerekir."
#    · dolaşım pompası, eşanjör, elektrik bağlantıları, sensör arızaları, bakımsızlık → yetkili servis
# S) Baymak SSS · https://www.baymak.com.tr/sss · HTTP 200 · md5 fcfaa8566892a920b4c4905df09769ab → sss-2026-10-02.html
#    "Basınç düştüğünde manometre yanında bulunan su doldurma vanası ile ideal su basıncı sağlanıncaya kadar su ilave yapınız."
# A) Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122 · https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 2.037.354 B · 28 sf · md5 723546ecd63c99eaecb5c3143c687c2a
#    s.4 gaz kokusu · s.12 K1 Reset, K2 ON/OFF, K5/K6 kullanım suyu · s.13 5.1.1 kış konumu (radyatör+musluk), 5.1.2 yaz konumu (sadece kullanım suyu),
#    kullanım suyu önceliği · s.14 "0,7 – 1,5 bar", "doldurma musluğunu çok yavaş açınız", "Basınç düşmesi sık tekrarlanıyorsa yetkili servise başvurunuz."
#    · s.15 "Su basıncı 0,5 barın altına düşerse kombi çalışmaz." · su kaçağı → servis · s.17 RESET (K1), F13, F37, F52
# B) Duotec Compact 24 · 300032317 · https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 1.261.823 B · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · aynı cümleler s.12-15, s.17
# C) Eco CT 20 Premix · 300035751 · https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 2.000.548 B · 28 sf · md5 e43149e6b888491b718ae20b1251eb37 · s.13 K5 ON/OFF, K6/K7 kullanım suyu, "K4 Reset" · s.14 kış/yaz
#    · s.15 0,7–1,5 bar · s.18 "RESET (K1)" ⚠️ belge içi tuş numarası çelişkisi → reset tuşuna numara verilmedi
# D) Duotec DHW · https://www.baymak.com.tr/media/5477/baymak-duotec-dhw-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 2.140.750 B · 28 sf · md5 aad24ed8ef67c8ab27204a4864bde308 · s.7 "Kullanım suyu ihtiyacını sağlamak için harici boyler bağlantısı
#    yapılmalıdır." · s.14 kış/yaz, K2, K5/K6 · s.15 0,7–1,5 · s.18 F50 "Sıcak su boyler sensör arızası", F52
# E) Lunatec · 300036785 · https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 7.100.519 B · 36 sf · md5 dec11a69fd55c366d613da7ba31d6d98
#    s.4 "minimum basınç 0,8 bar, önerilen basınç 1 - 1,5 bar" · gaz kokusu · s.18 açık mavi doldurma musluğu, "El aletleri değil, sadece eliniz kullanın."
#    · s.22 sağ düğme kullanım suyu (35-60 °C), F2 reset, F3 On/Off (Standby) · s.24 6.2.3 düğme + F4 onay, "Kullanım sıcak suyu modu ...
#    OFF yazısı görünene kadar, saat yönünün tersine çevrilerek devre dışı bırakılabilir." · s.28 H geçici / E kalıcı, "1 saniye süreyle RESET"
#    · s.29 H.02.07 · s.30 E.00.16/.17 boyler sensörü
# ⛔ Bilerek YAZILMAYANLAR: gaz vanası adımı (görev talimatı; W'de neden olarak var → gövdede yalnız anıldı, adım yok) · W'deki "1.5 ila 3" bar
#    değeri (kılavuzlarla çelişiyor: Duotec/Eco 0,7–1,5, Lunatec 1–1,5 → kılavuz değerleri yazıldı) · F13'ün "elektrik beslemesini açıp kapatınız"
#    talimatı adım olarak (elektrik müdahalesi; yalnız F13 sayfasına link) · pompa/eşanjör/sensör/elektrik bağlantısı kontrolü (W servise bırakıyor)
#    · Lunatec radyatör hava alma (montaj bölümü 3.7, purjör) · Lunatec DEAIR menüsü · boşaltma musluğu · maliyet/süre (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Kombinin ekranına bak; E, F ya da H ile başlayan bir kod görünüyorsa kodu not et."
  - "Kombi soğukken su basıncını oku; Duotec ve Eco CT 20'de 0,7–1,5 bar, Lunatec'te 1–1,5 bar aralığında olmalı."
  - "Basınç düşükse doldurma musluğunu elle ve çok yavaş aç, değer aralığa gelince musluğu kapat."
  - "Ekranda musluk sembolünün göründüğünü kontrol et; görünmüyorsa ON/OFF tuşuyla kış ya da yaz konumuna al."
  - "Kullanım suyu sıcaklığına bak; çok düşükse ya da Lunatec'te OFF yazıyorsa kılavuzundaki tuşla ya da sağ düğmeyle yükselt."
  - "Ekranda hata kodu varsa RESET tuşuna bir kez bas; kod geri geliyorsa yetkili servisi ara."
  - "Basınç, mod ve sıcaklık doğru olduğu hâlde sıcak su gelmiyorsa kombiye müdahale etme, Baymak yetkili servisini ara."
faq:
  - q: "Baymak kombi sıcak su vermiyor, ilk neye bakmalıyım?"
    a: "Baymak'ın kendi sitesindeki 'Kombi Neden Suyu Isıtmaz?' yazısı başlıca nedeni su basıncının düşük olması diye veriyor. O yüzden ilk iş kombi soğukken manometreyi okumak. Duotec, Duotec Compact, Duotec DHW ve Eco CT 20 kılavuzları 0,7–1,5 bar, Lunatec kılavuzu 1–1,5 bar istiyor. Basınç yerindeyse ekrandaki musluk sembolüne ve kullanım suyu sıcaklık ayarına bak."
  - q: "Sıcak su da yok, petekler de ısınmıyor; neden?"
    a: "Baymak'ın yazısına göre su basıncı kritik seviyelere düşerse kombi hem suyu ısıtmaz hem petekleri çalıştırmaz. Duotec ve Eco CT 20 kılavuzları da su basıncı 0,5 barın altına düşerse kombinin çalışmadığını yazıyor. Ekranda F37 (Lunatec'te H.02.07) görüyorsan bu düşük su basıncı demek."
  - q: "Kombi yaz konumundaysa sıcak su gelir mi?"
    a: "Gelir. Duotec ve Eco CT 20 kılavuzlarında yaz konumu 'sadece kullanım suyu' diye geçiyor: ekranda yalnız musluk sembolü görünür ve sıcak su ihtiyacı olduğunda kombi kullanım suyu modunda devreye girer. Kış konumunda radyatör ve musluk sembolü birlikte görünür. Ekranda musluk sembolü hiç yoksa kombiyi ON/OFF tuşuyla bu konumlardan birine al."
  - q: "Baymak kombide F52 ya da F50 ne demek?"
    a: "Duotec, Duotec DHW ve Eco CT 20 kılavuzlarındaki hata kodu listesinde F52 'Kullanım suyu sensör arızası', F50 'Sıcak su boyler sensör arızası' olarak geçiyor. Kılavuzun hata kodları için tek talimatı RESET tuşuna basmak ve sorun devam ederse mutlaka yetkili servisi aramak. Sensöre kullanıcı müdahalesi tarif edilmiyor."
images:
  coverAlt: "Banyo lavabosunun üstünde açık bir musluktan buharsız akan su ve arka plandaki duvarda beyaz bir kombi"
---

Musluğu açıyorsun, su akıyor ama ısınmıyor. Baymak'ın kendi sitesinde tam bu soruya ayrılmış bir yazı var: **"Kombi Neden Suyu Isıtmaz?"** Yazının verdiği ilk cevap bir parça değil: **"başlıca nedeni su basıncının düşük olmasıdır."** Aynı yazı termostat ayarını da sayıyor ve dışarıdan görebileceğin şeylerle görmediklerini ayırıyor: basıncı, ayarı, sıcaklığı sen kontrol edersin; pompa, eşanjör, sensör ve elektrik bağlantıları yetkili servisin işi. Bu yazıda o sırayı Duotec, Duotec Compact, Duotec DHW, Eco CT 20 ve Lunatec kullanma kılavuzlarındaki talimatlarla birleştiriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda kod var mı, not et. Kombi soğukken basınç 0,7–1,5 bar mı (Lunatec'te 1–1,5)? Düşükse doldurma musluğunu çok yavaş açarak tamamla. Ekranda musluk sembolü var mı, kullanım suyu sıcaklığı düşük ya da OFF mu? Kod varsa bir kez RESET. Bunlar yerindeyse kombiye dokunma, yetkili servis.

⛔ Gaz kokusu alıyorsan bu yazıyı bırak ve kılavuzunun gaz kokusu bölümüne uy. Duotec ve Eco CT 20 kılavuzları kapı ve pencerelerin açılmasını, çıplak alev ve sigaradan, elektrik düğmeleri ve elektrikli cihazlardan uzak durulmasını ve binadaki diğer insanların uyarılmasını istiyor; Lunatec kılavuzu Baymak Yetkili Teknik Servis Merkezi'nin aranmasını ekliyor.

## Adım adım: evde denenecekler

**1. Ekranda kod var mı?** Duotec kılavuzuna göre bir hata oluştuğunda ekranda hata kodu görüntülenir (örneğin E01). Lunatec'te kodun önündeki harf arızanın türünü söylüyor: **H** geçici bir engelleme (sebep ortadan kalkınca kod kaybolur, kombi çalışır), **E** ise kalıcı bir kilit ve sıfırlama ister. Kodu bir kenara yaz; aşağıdaki adımlarda işine yarayacak.

**2. Su basıncını soğukken oku.** Baymak'ın yazısı manometreyi ilk sıraya koyuyor ve nedenini de veriyor: su basıncı kritik seviyelere düşerse kombi **hem suyu ısıtmaz hem petekleri çalıştırmaz.** Kılavuzlardaki değerler seriye göre farklı:

- **Duotec, Duotec Compact 24, Duotec DHW, Eco CT 20:** kombi soğukken **0,7–1,5 bar.** Su basıncı 0,7 barın altındaysa sisteme su doldurulmalı; 0,5 barın altında kombi çalışmaz.
- **Lunatec:** minimum 0,8 bar, önerilen **1–1,5 bar.**

Ekranda **F37** (Lunatec'te **H.02.07**) görüyorsan kombi zaten düşük basıncı bildiriyor.

**3. Basınç düşükse doldur.** Kılavuzlar bunu kullanıcıya veriyor. Duotec ve Eco CT 20'nin tarifi: doldurma musluğunu açarak basıncın yükselmesini sağla; hava yapmaması için **musluğu çok yavaş aç.** Lunatec'te doldurma musluğu **açık mavi** renkte ve kombinin altında; saat yönünün tersine yavaşça çevrilir, kılavuzun ifadesiyle *"El aletleri değil, sadece eliniz kullanın."* Basınç 1–1,5 bara ulaşınca musluğu kapat ve su sızıntısı olmadığını kontrol et. Baymak'ın sitesindeki sıkça sorulan sorular sayfası da aynı işi manometrenin yanındaki su doldurma vanasıyla tarif ediyor ve vananın iyice kapatılmasını istiyor. Ayrıntılı tarif [Baymak kombi F37 hatası](/blog/baymak-kombi-f37-hatasi/) sayfasında.

**4. Musluk sembolü ekranda mı?** Duotec ve Eco CT 20'de kombinin iki çalışma konumu var. **Kış konumunda** ekranda radyatör ve musluk sembolü birlikte görünür; **yaz konumunda** (kılavuzun deyişiyle "sadece kullanım suyu") yalnız musluk sembolü görünür. İkisinde de sıcak su hazırlanır. Ekranda musluk sembolü hiç yoksa ON/OFF tuşuna (Duotec'te K2, Eco CT 20'de K5) basarak kombiyi bu konumlardan birine al. Lunatec'te kombi OFF konumundaysa, ekranda kalorifer ve musluk sembolleri belirene kadar kılavuzundaki açma/kapama tuşuna bas.

**5. Kullanım suyu sıcaklığına bak.** Baymak'ın yazısı termostat ayarının yanlış olmasını da sayıyor ve çözümü tek cümleyle veriyor: sıcak suyun derecesini kombi ekranından artırmak. Tuşlar modele göre:

- **Duotec, Duotec Compact, Duotec DHW:** artırmak için K6, azaltmak için K5.
- **Eco CT 20:** artırmak için K7, azaltmak için K6.
- **Lunatec:** sağdaki kullanım suyu düğmesi; saat yönünde çevirince artar, F4 tuşuyla onaylanır. Ayar aralığı 35–60 °C. Bu modelde sıcak su, düğme ekranda **OFF** görünene kadar saat yönünün tersine çevrilerek kapatılabiliyor; ekranda OFF varsa düğmeyi saat yönünde çevirip yeni değeri onayla.

Tuşa bastığında ekranda ayarlanan kullanım suyu sıcaklığı görünür. Sıcak su çekilirken ekrandaki musluk işaretinin yanıp sönmesi, kombinin kullanım suyu moduna geçtiğini gösteriyor.

**6. Kod varsa bir kez RESET.** Duotec, Duotec DHW ve Eco CT 20 kılavuzlarının hata kodları için talimatı aynı: kombiyi resetlemek için **RESET** tuşuna bas; sorun devam ederse **mutlaka yetkili servisi ara.** Lunatec'te E ile başlayan kalıcı arızadan çıkmak için RESET tuşuna 1 saniye basılır; arıza tekrar ederse ya da devam ederse yetkili teknik servis aranır. H ile başlayan geçici kodlar ise sebep giderilince kendiliğinden kaybolur.

**7. Hepsi yerindeyse servis.** Baymak'ın yazısındaki sınır açık: sıcak su arızası dışarıdan gözlemlenemeyen bir problemden kaynaklanıyorsa **hiçbir şekilde müdahale etme.** Yazı bu grupta dolaşım pompasını, eşanjörü, elektrik bağlantılarını, sensör arızalarını ve bakımsızlığı sayıyor; bunları Baymak yetkili servisi kontrol eder.

## Sıcak suyla ilgili kodlar — Baymak kılavuzlarında ne yazıyor

| Kod | Kılavuzdaki tanım | Hangi kılavuzda |
|---|---|---|
| F37 | Düşük su basıncı | Duotec · Duotec Compact · Duotec DHW · Eco CT 20 |
| H.02.07 | Isıtma devresinde düşük basınç (su doldurma gerekli) | Lunatec |
| F52 | Kullanım suyu sensör arızası | Duotec · Duotec Compact · Duotec DHW · Eco CT 20 |
| F50 | Sıcak su boyler sensör arızası | Duotec · Duotec Compact · Duotec DHW · Eco CT 20 |
| E.00.16 / E.00.17 | Kullanım sıcak suyu boyleri sıcaklık sensörü bağlı değil / kısa devre | Lunatec |

📌 **Duotec DHW** ayrı bir durum: kılavuzu bu kombiyi merkezi ısıtma sağlayan bir cihaz olarak tanımlıyor ve kullanım suyu ihtiyacı için **harici boyler** bağlantısı yapılması gerektiğini yazıyor. Bu modelde ekranda F50 görüyorsan kılavuzdaki karşılığı "Sıcak su boyler sensör arızası"; RESET sonrası devam ediyorsa yetkili servis.

Baymak'ın yazısı gaz vanasının kapalı olmasını da nedenler arasında sayıyor. Bu yazı gaz tarafına girmiyor; gazın geldiğinden emin değilsen yetkili servise danış.

## Ne zaman servis

- RESET'ten sonra hata kodu geri geliyorsa; Duotec ve Eco CT 20 kılavuzları bu durumda yetkili servisin mutlaka aranmasını istiyor.
- Basınç sık sık düşüyorsa. Duotec kılavuzu: *"Basınç düşmesi sık tekrarlanıyorsa yetkili servise başvurunuz."* Kombi sürekli basınçlandırma istiyorsa kılavuza göre su kaçağı olabilir.
- Ekranda F52, F50 ya da Lunatec'te E.00.16 / E.00.17 varsa ve reset işe yaramıyorsa.
- Basınç, çalışma konumu ve sıcaklık ayarı doğru olduğu hâlde musluktan sıcak su gelmiyorsa. Baymak'ın uyarısıyla bu noktada kombiye müdahale edilmez.

Petekler de ısınmıyorsa [Baymak kombi kalorifer ısıtmıyor](/blog/baymak-kombi-kalorifer-isitmiyor/) yazısına, kodların tam listesi için [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) sayfasına bak. F13 görüyorsan talimat farklı: [Baymak kombi F13 hatası](/blog/baymak-kombi-f13-hatasi/). Marka bağımsız olarak kombinin neden sıcak su vermediğini [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
