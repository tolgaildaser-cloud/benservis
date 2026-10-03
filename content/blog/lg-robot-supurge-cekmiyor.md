---
title: "LG robot süpürge çekmiyor (CordZero R9)"
description: "LG CordZero R9 robot süpürgenin emiş gücü düştüyse LG'nin sırası: toz haznesi, toz ayırıcı, ön ve egzoz filtresi, sensörler ve dönen fırça."
slug: "lg-robot-supurge-cekmiyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Kaynak LG Türkiye'nin KENDİ alan adındaki resmî destek sayfası (www.lg.com/tr, Yardım Kütüphanesi); bu koşuda
#   curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, yönlendirme 0. Metin HTML'deki "troubleshootDetailHTML" alanından (base64) çözüldü. Web araması yalnız adresi bulmak için.
#   Yerel: blog-taslaklar/kaynak-supurge-3eki/lg-r9-emis-gucu-dusuk.html (+ .txt çözülmüş metin).
#  L2) "[LG CordZero R9] Emiş gücü düşük"  https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000194-20154856336559/
#      HTML md5 a6f1709e52fc23883019fd859c55728f (sayfa dinamik) · çözülmüş metin md5 c3fc7e12dbac53d0489b2967280ba33f
# Nedenler (birebir): "Toz haznesi tozlarla dolu." "Filtrede toz veya yabancı cisimler var." "Sensör yabancı cisimlerle kaplıdır." "Meme yabancı cisimlerle kaplıdır." "Dönen fırçada toz veya
#   yabancı cisimler var." "Robot süpürge gittikten sonra yerde hala toz var."
# Sınır: "zemine yapışan ıslak yabancı cisimleri, statik elektrik üretmesi muhtemel saçları, pirinç tanelerini vb. temizleyemeyebilir." · "Tozu çok iyi ememiyorsa, dönen fırçayı, başlığı ve filtreyi kontrol edin"
# Hazne: "Toz haznesi tamamen doldurulursa emiş gücü düşebilir." · "Güvenliğiniz için toz haznesini temizlemeden önce robot süpürgenin gücünü kapatın." · "Toz Haznesi Kapağı düğmesine ... basarak
#   kapağı açın ve toz haznesini çıkarın. Bundan sonra, Toz Kutusu düğmesine ... basarak toz kutusunu boşaltın." · "toz ayırıcıyı CW çevirerek çıkarın. Su veya elektrikli süpürge kullanarak temizleyin."
#   "Toz ayırıcıyı 24 saatten fazla kurutduğunuzdan emin olun."
# Filtre: "ön filtreyi ve egzoz filtresini ... çıkarın" · "Egzoz filtresi kapağını açtıktan sonra CCW çevirerek egzoz filtresini çıkarın." · "temizlemek için elektrikli süpürge kullanın veya akan suda
#   yıkayın." · "doğrudan güneş ışığı almayan bir gölgede 24 saatten fazla kurutun." · "tamamen kurutmadığınız sürece kokabilir." · "kullanım için bir filtre taktığınızdan emin olun."
# Sensör: "Yumuşak bir bez kullanarak 3D DUAL Eye, uçurum ve toz sensörlerini temizleyin." · "Uçurum sensörü için dar alan olması durumunda, bir pamuk top ile silinmesi uygundur."
# Fırça: "dönen fırça kapağını başlıktan çıkarmak için döner fırça kapağı düğmesine ... basın." "saç veya tozu temizlemek için dönen fırçayı kaldırın." "tıklama seslerini duyana kadar kapağa bastırın."
#   "Haftada en az bir kez elektrikli süpürge kullanarak süpürücüdeki tozları temizlediğinizden emin olun."
# Meme: "Kullanmadan önce yabancı cisimleri bir çubuk kullanarak çıkarın." "ağzı ... tıkanırsa, emiş gücünü azaltacak ve ... daha yüksek sesler duyulacaktır." → çubuk = alet; ALET KURALI gereği
#   numaralı adıma girmedi, gövdede numarasız anıldı.
# BİLEREK YAZILMAYANLAR: başka LG robot modellerine genelleme (sayfa R9 başlıklı; "tüm modeller için" notu aynen) · motor teşhisi · fiyat (#46).
# Alıntı denetim tablosu: lg-robot-supurge-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (yıkanan parçalar için 24 saatten fazla kuruma)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Pamuk", "Elektrikli süpürge"]
steps:
  - "Robot süpürgenin gücünü kapat."
  - "Toz haznesi kapağını açıp hazneyi çıkar ve toz kutusunu boşalt."
  - "Toz ayırıcıyı çevirip çıkar, su ya da süpürgeyle temizle ve 24 saatten fazla kurut."
  - "Ön filtreyi ve egzoz filtresini çıkar, süpürgeyle temizle ya da akan suda yıka, gölgede 24 saatten fazla kurut."
  - "3D Dual Eye, uçurum ve toz sensörlerini yumuşak bir bezle sil."
  - "Robotu ters çevir, dönen fırça kapağını çıkar ve fırçadaki saç ve tozu temizle; kapağı tık sesine kadar bastır."
  - "Dönen fırça girişindeki süpürücüde biriken tozu haftada en az bir kez süpürgeyle temizle."
faq:
  - q: "LG robot süpürgem neden iyi çekmiyor?"
    a: "LG'nin CordZero R9 destek sayfası nedenleri sıralıyor: toz haznesinin dolu olması, filtrede toz ya da yabancı cisim bulunması, sensörlerin ve memenin yabancı cisimle kaplanması ve dönen fırçada toz ya da yabancı cisim olması. LG'nin özeti: robot tozu iyi ememiyorsa dönen fırçayı, başlığı ve filtreyi kontrol et."
  - q: "Robot süpürge geçtiği yerde toz bırakıyor, normal mi?"
    a: "LG'ye göre robot süpürge, temizlemek için havayı emme ağzıyla çeken genel bir süpürgeden farklı çalışır: tozları ve yabancı cisimleri toplar, sonra emer. Bu yüzden zemine yapışmış ıslak yabancı cisimleri, statik elektrik üretmesi muhtemel saçları ve pirinç tanelerini temizleyemeyebilir. Dönen fırça girişindeki süpürücüde ince toz birikirse robot hareket ettikçe tozlar düşebilir; LG bu tozun haftada en az bir kez temizlenmesini istiyor."
  - q: "Filtreyi yıkayabilir miyim?"
    a: "Evet. LG ön filtrenin ve egzoz filtresinin elektrikli süpürgeyle temizlenebileceğini ya da akan suda yıkanabileceğini yazıyor. Yıkanan filtre doğrudan güneş almayan, iyi havalandırılan bir yerde 24 saatten fazla kurutulmalı; tam kurumazsa kokabilir. Toz haznesine filtre takmadan kullanırsan robotun iç motoruna toz girip arızaya yol açabilir."
  - q: "Robot daha gürültülü çalışmaya başladı."
    a: "LG'nin sayfasına göre robotun ağzı mendil, çorap, vinil gibi yabancı cisimlerle tıkanırsa emiş gücü düşer ve robot kullanılırken daha yüksek sesler duyulur. Sayfa robotun gücünü kapattıktan sonra cisimlerin bir çubukla çıkarılmasını söylüyor; aletle uğraşmak istemiyorsan yetkili servise bırak."
images:
  coverAlt: "Ters çevrilmiş bir robot süpürgenin altındaki dönen fırça ve yanında çıkarılmış toz haznesi ile filtreler"
---

Robot her gün turunu atıyor ama halıda saç teli, parkede kırıntı kalıyor. LG Türkiye'nin destek kütüphanesinde bunun için **"[LG CordZero R9] Emiş gücü düşük"** başlıklı bir sayfa var. LG'nin özeti tek cümle: tozu çok iyi ememiyorsa **dönen fırçayı, başlığı ve filtreyi kontrol et.** Sayfanın verdiği adımlar sırayla aşağıda.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gücü kapat → hazneyi boşalt → toz ayırıcıyı temizle, kurut → ön ve egzoz filtresini temizle, kurut → sensörleri yumuşak bezle sil → dönen fırçadaki saçı temizle → süpürücüdeki tozu haftada bir al. Islak kir, statik saç ve pirinç tanesi robotun sınırı.

## Adım adım: evde denenecekler

**1. Gücü kapat.** LG her temizlik adımına aynı cümleyle başlıyor: **güvenliğin için önce robot süpürgenin gücünü kapat.**

**2. Toz haznesini boşalt.** LG'ye göre **toz haznesi tamamen dolarsa emiş gücü düşebilir.** **Toz Haznesi Kapağı düğmesine** basarak kapağı aç ve hazneyi çıkar; ardından **Toz Kutusu düğmesine** basarak toz kutusunu boşalt.

**3. Toz ayırıcıyı temizle.** Toz ayırıcıyı **saat yönünde çevirerek** çıkar, **su ya da elektrikli süpürge** kullanarak temizle. LG'nin şartı: toz ayırıcıyı **24 saatten fazla** kurut.

**4. Filtreleri temizle.** Sayfadaki ikinci neden **"Filtrede toz veya yabancı cisimler var."** Ön filtreye ulaşmak için hazneyi ayır, toz ayırıcıyı çıkar ve ön filtre kapağını çevir. Egzoz filtresi için kapağı aç, filtreyi **saat yönünün tersine çevirerek** çıkar. İkisini de **elektrikli süpürgeyle temizle ya da akan suda yıka**, sonra **doğrudan güneş almayan bir gölgede 24 saatten fazla** kurut. LG'nin iki uyarısı: tam kurumayan filtre **kokabilir**; filtre takmadan kullanılırsa robotun **iç motoruna toz girip arızaya** yol açabilir.

**5. Sensörleri sil.** Üçüncü neden **"Sensör yabancı cisimlerle kaplıdır."** Robotun önündeki **3D Dual Eye**'ı, altındaki **uçurum sensörünü** ve toz başlığının içindeki **toz sensörünü** yumuşak bir bezle sil. Uçurum sensörünün yeri darsa LG **pamukla** silmeyi öneriyor.

**6. Dönen fırçayı temizle.** Robotu ters çevir, **döner fırça kapağı düğmesine** basarak kapağı başlıktan çıkar. Fırçanın ayırma koluna basarken **fırçayı kaldır** ve saç ile tozu temizle. Yerine takarken **tıklama sesini duyana kadar** kapağa bastır.

**7. Süpürücüdeki tozu haftada bir al.** LG'ye göre küçük boyutlu ince tozlar emilmeyip dönen fırça girişindeki süpürücüde birikebilir ve robot hareket ettikçe **tozlar düşebilir.** Çözüm: **haftada en az bir kez** elektrikli süpürgeyle süpürücüdeki tozu temizle.

## Robot daha gürültülü çalışıyorsa

Sayfaya göre robotun ağzı **mendil, çorap, vinil** gibi yabancı cisimlerle tıkanırsa emiş gücü düşer ve robot **daha yüksek sesle** çalışır. LG gücü kapattıktan sonra cisimlerin bir çubukla çıkarılmasını söylüyor; aletle uğraşmak istemiyorsan yetkili servise bırak.

## Robotun temizleyemeyebileceği şeyler

LG robotun emme ağzıyla hava çeken genel bir süpürgeden farklı çalıştığını hatırlatıyor: önce toplar, sonra emer. Bu yüzden **zemine yapışmış ıslak cisimleri, statik elektrik üretmesi muhtemel saçları ve pirinç tanelerini** temizleyemeyebilir. Sayfanın sonundaki not: rehber **tüm modeller için** hazırlanmıştır, görseller ve içerik ürününden farklı olabilir.

Markadan bağımsız kontrol listeleri için [robot süpürgenin fırçası dönmüyor](/blog/robot-supurge-firca-donmuyor/) ve [süpürge çekmiyor](/blog/supurge-cekmiyor/) yazılarına bakabilirsin. LG'nin şarjlı dikey süpürgesi açılmıyorsa: [LG şarjlı süpürge çalışmıyor](/blog/lg-sarjli-supurge-calismiyor/).

## Ne zaman servis

- Hazne, toz ayırıcı, filtreler, sensörler ve fırça temizlendiği hâlde emiş dönmüyorsa.
- Robot filtresiz çalıştırıldıysa ve sonrasında ses ya da güç kaybı başladıysa: LG'ye göre filtresiz kullanım **iç motora toz girmesine** yol açabilir.

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtre, sensör ve fırça temizliği kullanıcıya; motor ve iç aksam servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (ürün etiketinde)?
2. Toz haznesini ve filtreleri en son ne zaman temizledin, tam kurudular mı?
3. Robot geçtiği yerde ne bırakıyor: ince toz, saç, iri taneler?
4. Ses değişti mi, ne zamandan beri?
5. Filtresiz çalıştırdığın oldu mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
