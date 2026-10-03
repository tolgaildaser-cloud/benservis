---
title: "Uğur kurutma makinesi kurutmuyor"
description: "Uğur kurutma makinesi çamaşırı kurutmuyor ya da süre çok uzuyorsa Uğur'un tablosu: tüy filtresi, su kabı, tahliye hortumu, kurulum yeri ve program seçimi."
slug: "ugur-kurutma-makinesi-kurutmuyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, Uğur). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adres ugur.com.tr ürün sayfalarındaki "Kullanım Kılavuzu" indirme bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok. Sayfa = PDF sayfası
#   (bu belgede PDF sayfası = basılı sayfa numarası).
#  K1) UKM 3093 B101 / UKM 3103 B101 / UKM 3103 G101  https://ugur.com.tr/Data/EditorFiles/docs/100972_KK.pdf  36 s.  md5 3acf83f64cecab0b1b8a337ff970997e
#      ürün sayfaları: https://ugur.com.tr/ukm-3093-b301 (100972_KK) · https://ugur.com.tr/ukm-3103-b301 (100973_KK.pdf — md5 aynı, birebir aynı dosya)
# Ana satır (K1 s.26): "Kuruluk derecesine ulaşılamadı veya kuruma süresi çok uzun." → "• Tüy filtresini ve ısı eşanjörünü temizleyin. • Su kabını boşaltın.
#   • Tahliye hortumunu kontrol edin. • Kurulum yerinin uygun olup olmadığını kontrol edin. • Hava girişini temiz tutun. • Daha yüksek kurutma yoğunluğu
#   seviyeli program veya zaman programı kullanın." · "Gürültü sesleri var" → "Kompresör çalışıyor. Bu sesler oldukça normaldir ve bir arızaya işaret etmez."
#   · s.26 tüy filtresi simgesi "yanıyor." → "Tüy filtresini temizleyin."
# Bakım: s.22 "Her çalışmadan sonra kapak filtresini temizlediğinizden emin olun." · "1. Su kabını iki elinizle dışarı çekin ve tutun. 2. Su kabını eğin, yoğuşma
#   suyunu havuza dökün. 3. Su kabını takın." · "Her kullanımdan sonra su kabını boşaltın. Su kabı tamamen dolduğunda program durdurulacak..." ·
#   s.23 "1.Kapağı açın. 2. Kapak filtresini çıkarın. 3. Filtreyi açıp filtre üzerindeki tüyleri temizleyin, akan suyun altında temizleyebilirsiniz. 4. Kapak filtresini
#   tekrar takmadan önce iyice kurulayın." · "Kapak filtresini yerleştirmeden önce doğru yöne dikkat edin." · s.23 NOT "Çift katmanlı filtrenin düzgün bir şekilde
#   kapatılabilmesini sağlamak için her iki uçtaki okların hizalanması ve orta yuva ile çıkıntının hizalanması gerekir." · ISI EŞANJÖRÜ s.23: "Isı eşanjörüne elinizle
#   dokunmayın; yaralanmaya neden olabilirsiniz." · "Gerektiğinde yaklaşık her 3 ayda bir, toz fırçası elektrikli süpürge kullanarak ısı eşanjöründeki tüyleri temizleyin."
#   · "Isı eşanjörünü herhangi bir basınç uygulamadan temizleyin. ... Soğutma kanatçıkları hasar görürse veya bükülürse kurutucu kurutmayacaktır."
# Kurulum: s.9 "Harici tahliye hortumunu yer giderine yerleştirin (harici tahliye hortumunu bükmemeye dikkat edin)." · s.10 "Ürün tabanında yer alan havalandırma
#   delikleri halı ile tıkanmamalıdır." · "Ürün ile zemin arasındaki boşluk halı, tahta ve bant gibi malzemelerle azaltılmamalıdır." · "Kurutma makinesini donma tehlikesi
#   olan bir odaya kurmayın. Donma noktası civarındaki sıcaklıklarda kurutma makinesi düzgün çalışmayabilir." · s.27 "Ortam sıcaklığı +5°C ~ +35°C" · "Nominal kapasite,
#   bir defada kurutulabilecek maksimum kapasitedir. Cihaza yüklenen kuru giysilerin nominal kapasiteyi aşmadığından emin olun."
# İpuçları s.12-13: "Kurutmadan önce çamaşırları çamaşır makinesinde iyice sıkınız. Yüksek sıkma hızı kuruma süresini kısaltır ve enerji tasarrufu sağlar." · "Eşit
#   kurutma sonucu elde etmek için çamaşırları kumaş türüne göre ayırın ve uygun kurutma programını seçin." · "Ceketleri açık bırakın ve uzun fermuarları açın, böylece
#   kumaşlar eşit şekilde kurur." · "Kuruma süresinin uzamasını ve enerji tüketiminin artmasını önlemek için, her kullanımdan sonra tüy filtresini temizleyin ve su kabını boşaltın."
# BİLEREK YAZILMAYANLAR: ısı eşanjörü temizliği NUMARALI ADIMDA DEĞİL (kılavuz eşanjöre nasıl ulaşılacağını yazmıyor; gövdede numarasız, "ulaşamıyorsan servis") ·
#   kompresör/ısı pompası/nem sensörü teşhisi (E32 nem sensörü kodu yalnız servis satırı olarak anıldı) · soğutucu gaz (R290) · fiyat.
# Alıntı denetim tablosu: ugur-kurutma-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez"]
steps:
  - "Makineyi kapat, fişini çek; kapağı aç, kapak tüy filtresini çıkar, açıp tüyleri temizle ve akan suyun altında yıka."
  - "Filtreyi iyice kurula ve okları hizalayarak doğru yönde yerine tak."
  - "Su kabını iki elinle dışarı çek, eğerek yoğuşma suyunu dök ve yerine tak."
  - "Harici tahliye hortumu bağlıysa bükülmediğini ve gidere doğru yerleştiğini kontrol et."
  - "Makinenin altındaki havalandırma deliklerini halı ya da başka bir malzeme kapatmasın, hava girişinin önünü temiz tut."
  - "Odanın sıcaklığının +5°C ile +35°C arasında olduğundan emin ol."
  - "Bir sonraki kurutmada daha yüksek kuruluk seviyeli bir program ya da zaman programı seç."
faq:
  - q: "Uğur kurutma makinem neden kurutmuyor?"
    a: "Uğur'un UKM serisi kılavuzunda 'Kuruluk derecesine ulaşılamadı veya kuruma süresi çok uzun' satırı altı çözüm veriyor: tüy filtresini ve ısı eşanjörünü temizle, su kabını boşalt, tahliye hortumunu kontrol et, kurulum yerinin uygun olup olmadığına bak, hava girişini temiz tut ve daha yüksek kurutma yoğunluğu seviyeli bir program ya da zaman programı kullan."
  - q: "Isı eşanjörünü ben temizleyebilir miyim?"
    a: "Kılavuz ısı eşanjöründeki tüylerin gerektiğinde yaklaşık her 3 ayda bir elektrikli süpürgenin toz fırçasıyla, basınç uygulamadan temizlenmesini istiyor ve eşanjöre elle dokunmamanı söylüyor; soğutma kanatçıkları bükülürse kurutucunun kurutmayacağını yazıyor. Eşanjöre nasıl ulaşılacağı kılavuzda anlatılmıyor; ulaşamıyorsan Uğur Yetkili Servisi'ne bırak."
  - q: "Çalışırken ses yapıyor, normal mi?"
    a: "Kılavuza göre kurutma sırasında kompresör ve sudan kaynaklı bir miktar ses çıkması normaldir. Sorun giderme tablosu da bu seslerin bir arızaya işaret etmediğini yazıyor."
  - q: "Kurutmayı kısaltmak için ne yapabilirim?"
    a: "Uğur'un ipuçları: çamaşırları kurutmadan önce çamaşır makinesinde yüksek devirde santrifüj et, çünkü yüksek devir kuruma süresini kısaltır; çamaşırları kumaş türüne göre ayırıp uygun programı seç; ceketleri açık bırak ve uzun fermuarları aç. Makineye yüklediğin kuru çamaşırın nominal kapasiteyi aşmadığından emin ol; her kullanımdan sonra tüy filtresini temizle ve su kabını boşalt."
images:
  coverAlt: "Kapağı açık bir kurutma makinesinin tambur girişinde, elde tutulan ve üzerinde tüy birikmiş kapak filtresi"
---

Program bitti ama havlular hâlâ nemli, ya da kurutma her seferinde beklediğinden çok daha uzun sürüyor. Uğur'un UKM serisi kurutma makinesi kılavuzundaki sorun giderme tablosu bu durumu tek satırla tarif ediyor: **"Kuruluk derecesine ulaşılamadı veya kuruma süresi çok uzun."** Satırın altı çözümü var ve beşi evde, birkaç dakikada yapılacak işler.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → kapak tüy filtresini temizle, kurula, doğru yönde tak → su kabını boşalt → tahliye hortumu bükülmüş mü bak → havalandırma deliklerinin ve hava girişinin önünü aç → oda +5–35°C mi → daha yüksek kuruluk seviyeli ya da zaman programı seç.

## Adım adım: evde denenecekler

**1. Tüy filtresini temizle.** Tablodaki ilk çözüm **"Tüy filtresini ve ısı eşanjörünü temizleyin."** Uğur'un makinesinde kapakta bir **tüy filtresi** var ve kılavuz bunu **her çalışmadan sonra** temizlemeni istiyor. Sıra şöyle: kapağı aç, kapak filtresini çıkar, filtreyi açıp **üzerindeki tüyleri temizle**; istersen **akan suyun altında** yıkayabilirsin.

**2. Kurula ve doğru yönde tak.** Kılavuz filtreyi takmadan önce **iyice kurulamanı** ve yerleştirirken **doğru yöne** dikkat etmeni yazıyor. Çift katmanlı filtrenin düzgün kapanması için **her iki uçtaki okların** ve orta yuva ile çıkıntının hizalanması gerekiyor.

**3. Su kabını boşalt.** Tablodaki ikinci çözüm **"Su kabını boşaltın."** Kılavuzdaki sıra: su kabını **iki elinle dışarı çek** ve tut, **eğerek yoğuşma suyunu dök**, kabı yerine tak. Uğur her kullanımdan sonra su kabını boşaltmanı istiyor; kap tamamen dolduğunda program durur ve ekranda su kabı uyarısı yanar. Yoğuşma suyunu içme.

**4. Tahliye hortumunu kontrol et.** Çözümlerden biri **"Tahliye hortumunu kontrol edin."** Makine yoğuşma suyunu harici hortumla gidere veriyorsa kurulum bölümündeki uyarı geçerli: harici tahliye hortumunu yer giderine yerleştir ve **hortumu bükmemeye** dikkat et.

**5. Havanın yolunu aç.** Tablo iki çözümü yan yana koyuyor: **"Kurulum yerinin uygun olup olmadığını kontrol edin."** ve **"Hava girişini temiz tutun."** Kurulum bölümüne göre ürün tabanındaki **havalandırma delikleri halıyla tıkanmamalı**; ürün ile zemin arasındaki boşluk halı, tahta ya da bant gibi malzemelerle **azaltılmamalı.** Makinenin kirin birikmeyeceği temiz bir yerde durması da kılavuzun kurulum kurallarından.

**6. Oda sıcaklığına bak.** UKM kılavuzunun teknik tablosunda ortam sıcaklığı **+5°C ile +35°C** arası. Kılavuz makineyi **donma tehlikesi olan bir odaya kurmamanı** yazıyor; donma noktası civarındaki sıcaklıklarda kurutma makinesi **düzgün çalışmayabilir.**

**7. Programı yükselt.** Son çözüm: **"Daha yüksek kurutma yoğunluğu seviyeli program veya zaman programı kullanın."** Çamaşırın daha kuru çıkmasını istiyorsan bir sonraki turda daha yüksek kuruluk seviyesi ya da süreye dayalı bir program seç.

## Isı eşanjörü hakkında

Tablonun ilk satırında tüy filtresinin yanında **ısı eşanjörü** de var. Kılavuza göre eşanjördeki tüyler **gerektiğinde, yaklaşık her 3 ayda bir**, elektrikli süpürgenin **toz fırçasıyla** ve **hiç basınç uygulamadan** temizlenir; eşanjöre **elinle dokunma**, yaralanabilirsin. Uğur'un uyarısı önemli: soğutma kanatçıkları hasar görür ya da bükülürse **kurutucu kurutmaz.** Kılavuz eşanjöre nasıl ulaşılacağını anlatmadığı için bu işi adımlara koymadık; eşanjörü göremiyorsan ya da kanatçıklar eğilmiş görünüyorsa Uğur Yetkili Servisi'ne bırak.

## Kuruma süresini kısaltan alışkanlıklar

Uğur'un ipuçları bölümünden: çamaşırı kurutmadan önce çamaşır makinesinde **yüksek devirde santrifüj et**, kılavuza göre yüksek devir kuruma süresini kısaltır ve enerji tasarrufu sağlar. Çamaşırları **kumaş türüne göre ayır** ve uygun programı seç; **ceketleri açık bırak**, uzun fermuarları aç. Yüklediğin kuru çamaşırın **nominal kapasiteyi** (UKM 3093'te 9 kg, UKM 3103'te 10 kg) aşmadığından emin ol.

Filtre ve kondenser temizliğinin genel anlatımı için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/), markadan bağımsız kontrol listesi için [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) yazısına bakabilirsin. Makine hiç çalışmıyorsa: [Uğur kurutma makinesi çalışmıyor](/blog/ugur-kurutma-makinesi-calismiyor/).

## Ne zaman servis

- Filtre temiz, su kabı boş, hortum ve kurulum yeri uygun, program doğru ama çamaşır yine kurumuyorsa.
- Isı eşanjörüne ulaşamıyorsan ya da kanatçıklar eğilmiş görünüyorsa.
- Ekranda **E32** (nem sensörü hatası), **E33** (sıcaklık sensörü hatası), **E64** ya da **E82** görünüyorsa: kılavuzun tablosu bu kodlar için doğrudan **Uğur Yetkili Servisini aramanı** istiyor.

Kılavuzun kuralı: **onarımları yalnızca yetkili teknisyenler yapabilir.** Sorunu kendin çözemiyorsan makineyi kapat, **fişini çek ve Uğur Yetkili Servisi'ni ara** (Çağrı Merkezi 444 84 87).

⛔ **Kendin-çöz sınırı burada biter.** Tüy filtresi, su kabı, hortumun yolu, kurulum yeri ve program kullanıcıya; kompresör, sensörler ve iç aksam servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
