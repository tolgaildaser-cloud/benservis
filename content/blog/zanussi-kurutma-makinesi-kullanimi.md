---
title: "Zanussi kurutma makinesi kullanımı: program, filtre, hazne"
description: "Zanussi kurutma makinesinde program seçimi, kuruluk ayarı, filtre ve su haznesi bakımı. Kılavuza göre adım adım kullanım, Err ve makine durursa kontrol."
slug: "zanussi-kurutma-makinesi-kullanimi"
date: "2026-10-24"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W3). origin/main 08904bf'de "zanussi" geçen slug/başlık/gövde YOK.
# GSC: "zanussi" satırı yok. OT (bu koşu): "zanussi kurutma makinesi k" → 1. "zanussi kurutma makinesi kullanma kılavuzu"; "zanussi kurutma makinesi" → 2. aynı. Kurutmada belirti/kod önerisi yok.
# Brif: "kullanım" rehberi, adım adım; sorun tarafı "makine duruyor / Err / E kodu / kuruluk".
# Belge zinciri (#88): zanussi.co.uk/support/user-manuals (model araması ZDH8903PZ → PNC 916098607, /api/usermanual/search 200) → electrolux.bynder.com PDF, HTTP 200.
#  (K) Zanussi ZDH8903PZ User Manual EN (ısı pompalı), 20 s., md5 4467ddd2b567ae67530cae8577a3daee (panel s.6-7, programlar s.7-8, ayarlar s.9-10, kullanım s.10-11, bakım s.11-13, sorun giderme s.13-14)
# İngilizce baskı, alıntılar çevrildi, orijinali KAYNAK.md'de. Filtre/hazne/kondenser adımları kılavuzda resimli; resimlerden okundu.
# BİLEREK YAZILMAYANLAR: ısı pompası/kompresör müdahalesi · gaz (#31) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Nemli bez"]
steps:
  - "İlk kullanımda tamburu nemli bezle sil ve nemli çamaşırla bir saatlik program çalıştır."
  - "Çamaşırı hazırla: fermuarları kapat, cepleri boşalt, etiketini kontrol et."
  - "Çamaşırı yükle ve kapağı arada çamaşır kalmadan kapat."
  - "Makineyi aç, programı ve kuruluk seviyesini seç."
  - "Gerekirse kırışık önleme ya da gecikmeli başlatma seç."
  - "Başlat/duraklat tuşuyla programı başlat."
  - "Program bitince çamaşırı al, filtreyi temizle ve su haznesini boşalt."
  - "Belli aralıklarla kondenseri ve hava kanallarını temizle."
faq:
  - q: "Zanussi kurutma makinesi neden program ortasında duruyor?"
    a: "Zanussi ZDH8903PZ kılavuzuna göre en sık sebep su haznesinin dolması. Hazneyi boşalt ve programı başlat/duraklat tuşuyla yeniden başlat. Kılavuz her program bitiminde hazneyi boşaltmanı istiyor."
  - q: "Ekranda Err yazıyor, ne yapmalıyım?"
    a: "Kılavuza göre Err'de yeni bir program kurmak istiyorsan makineyi kapatıp aç ve seçtiğin seçeneklerin o programa uygun olduğundan emin ol. Her seçenek her programda çalışmıyor."
  - q: "Ekranda E51 gibi bir kod çıktı. Arıza mı?"
    a: "Kılavuz E51 gibi kodlarda makineyi kapatıp açmanı ve yeni bir program başlatmanı istiyor. Sorun tekrar ederse yetkili servisi aramalısın."
  - q: "Çamaşır yeterince kurumuyor, ne yapmalıyım?"
    a: "Kılavuza göre yükün programa uygun olduğundan ve filtrenin temiz olduğundan emin ol. Çamaşır çok ıslaksa çamaşır makinesinde yeniden sık. Oda sıcaklığı 5 °C ile 35 °C arasında olmalı, en iyisi 19-24 °C. Time Drying ya da Extra Dry seçebilir, kalan nem ayarını değiştirebilirsin."
  - q: "İlk çalıştırmada makineden daha yüksek bir ses geliyor. Normal mi?"
    a: "Evet. Kılavuza göre ısı pompalı bu modelde kurutmanın ilk 3-5 dakikasında kompresör çalışmaya başladığı için ses biraz daha yüksek olabilir. Bu, buzdolabı gibi kompresörlü cihazlarda olduğu gibi normal."
images:
  coverAlt: "Kapağı açık, tamburunda kurumuş havlular duran ön yüklemeli kurutma makinesi"
  steps:
    - "Çizim: solda kurutma makinesi, sağda tambur ve içindeki çamaşır"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda tambur ve içindeki çamaşır"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda su ya da toz haznesi"
    - "Çizim: solda kurutma makinesi, sağda hava giriş ve çıkış ızgarası"
---

Zanussi kurutma makinen var ama kılavuz kayıp, ya da makine ortasında duruyor, çamaşır nemli çıkıyor ve neyi yanlış yaptığını bilmiyorsun. Zanussi'nin ZDH8903PZ (8 kg, ısı pompalı) kullanım kılavuzu (kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi) programları, ayarları ve her kullanımdan sonra yapılması gereken iki küçük bakımı anlatıyor: filtre ve su haznesi. Bu iki iş atlanınca makine durur ya da kurutmaz. Senin modelinde tuşlar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çamaşırı hazırla, yükle, programı ve kuruluğu seç, başlat. Her programdan sonra filtreyi temizle ve su haznesini boşalt. Makine durursa önce hazneye bak. Err'de kapatıp aç, seçenekleri kontrol et.

## Programlar

| Program | Ne için | En fazla yük |
|---|---|---|
| **Cottons Eco** | Pamuklu, dolaba kaldırılacak kuruluk, en az enerji | 8 kg |
| **Cottons** | Her tür pamuklu, dolap kuruluğu | 8 kg |
| **Synthetics** | Sentetik | 3,5 kg |
| **Mix** | Pamuklu ve sentetik karışık, düşük sıcaklık | 3 kg |
| **Easy Iron+** | Az ütü isteyen kumaşlar | 1 kg (ya da 5 gömlek) |
| **Duvet** | Tek ya da çift yorgan, yastık | 3 kg |
| **Refresh** | Dolapta bekleyen tekstili tazelemek | 1 kg |
| **Time Drying** | Süreyi senin belirlediğin kurutma | 8 kg |

## Adım adım: Zanussi kurutma makinesini kullanmak

**1. İlk kullanım.** Kılavuza göre önce tamburu nemli bir bezle sil, sonra nemli çamaşırla **bir saatlik** bir program çalıştır. Kurutmanın ilk 3-5 dakikasında ses biraz yüksek olabilir; kılavuz bunun kompresörün devreye girmesinden kaynaklandığını, buzdolabı gibi kompresörlü cihazlarda normal olduğunu söylüyor.

**2. Çamaşırı hazırla.** Fermuarları ve nevresim düğmelerini kapat, önlük bağcıkları gibi sarkan bantları bağla, cepleri boşalt. İç astarı pamuklu olan parçaları ters çevir. Etiketi kontrol et: kılavuzdaki simge tablosu kurutmaya uygun, yüksek sıcaklığa uygun, yalnız düşük sıcaklığa uygun ve kurutmaya uygun olmayan çamaşırı ayırıyor. Açık ve koyu renkleri, büyük ve küçük parçaları karıştırma; küçükler büyüklerin içinde kalıp ıslak çıkar.

**3. Yükle ve kapat.** Programın en fazla yükünü aşma. Kılavuzun uyarısı: kapağı kapatırken çamaşır kapakla lastik conta arasına sıkışmasın. Kapak kapanmıyorsa filtrenin doğru takılı olduğuna bak.

**4. Programı ve kuruluğu seç.** On/Off tuşuyla makineyi aç, program seçim tuşuyla programı seç. Ekran tahmini süreyi gösterir; kılavuza göre pamuklu programda bu süre 5 kg yük ve standart koşullar içindir, gerçek süre yüke, oda sıcaklığına ve çamaşırın sıkılmış nemine bağlı. Kuruluk tuşuyla Extra Dry (çok kuru), Strong Dry (yalnız pamuklu), Cupboard Dry (dolap kuruluğu) ya da Iron Dry (ütü kuruluğu) seç.

**5. Seçenekleri ekle.** Kırışık önleme 30, 60 ya da 90 dakika seçilebilir; çamaşırı bu aşamada da çıkarabilirsin. Time Drying'de Time tuşuyla süreyi 10 dakika ile 2 saat arasında ayarlarsın; kılavuz az çamaşır için kısa süre öneriyor. Gecikme tuşuyla başlangıcı 1 saat ile 20 saat arasında erteleyebilirsin. Çocuk kilidi için makineyi açtıktan yaklaşık 8 saniye sonra kuruluk ve kırışık önleme tuşlarını birlikte basılı tut.

**6. Başlat.** Başlat/duraklat tuşuna bas. Programı değiştirmek istersen kılavuza göre makineyi On/Off ile kapatıp açar ve programı yeniden seçersin.

**7. Program sonu: filtre ve hazne.** Program bitince aralıklı bir ses çalar, filtre ve hazne göstergeleri yanar; makine yaklaşık 30 dakika daha kırışık önleme yapar. Makineyi kapat, kapağı aç, çamaşırı al, kapağı kapat. Kılavuzun kutu içindeki uyarısı açık: **her program bittiğinde filtreyi temizle ve su haznesini boşalt.** Filtre kapak ağzında; resimli adımlara göre çıkarıp açar, havı alır, gerekirse yıkar ve yerine takarsın. Hazne üstteki çekmece; çekip boşaltır, geri itersin. Kılavuz bu suyu süzerek ütüde damıtık su yerine kullanabileceğini de yazıyor.

**8. Kondenser ve hava kanalları.** Panelde ayrıca bir kondenser göstergesi var; kılavuz kondenser temizliğini resimli adımlarla anlatıyor, sıklık vermiyor. Alt kapağı yan düğmelerle aç, ısı değiştiricinin kapağını kilit düğmesiyle aç, kondenseri çıkarıp resimlere göre temizle ve aynı sırayla geri tak. Kılavuzun uyarısı: metal yüzeye çıplak elle dokunma, koruyucu eldiven tak ve metal yüzeye zarar vermeden dikkatle temizle. Alt kapaktaki hava kanallarındaki havı süpürgeyle al.

## Makine durursa ya da kurutmazsa

Kılavuzun sorun giderme tablosuna göre makine çalışırken duruyorsa su haznesi doludur; boşalt ve başlat/duraklat ile yeniden başlat. Süre uzun ya da sonuç kötüyse yük programa uygun mu, filtre temiz mi bak. Çamaşır çok ıslaksa çamaşır makinesinde yeniden sık. Oda sıcaklığı 5 °C ile 35 °C arasında olmalı, en iyisi 19-24 °C. Ekranda **Err** varsa makineyi kapatıp aç ve seçeneklerin programa uygun olduğunu kontrol et. **E51** gibi bir kod varsa kapatıp aç, yeni program başlat, kod dönerse servisi ara. Kılavuza göre program en fazla 5 saat sonra kendiliğinden biter.

## Ne zaman servis

- Filtre, hazne ve kondenser temizken çamaşır kurumuyorsa
- Kapatıp açtıktan sonra aynı E kodu yine çıkıyorsa
- Makine hiç açılmıyorsa
- Su haznesi boşken de makine her programda duruyorsa

⛔ **Kendin-çöz sınırı burada biter.** Program, ayarlar, filtre, hazne, kondenser ve hava kanalı temizliği sende; ısı pompası, kompresör ve elektronik Zanussi yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ve etiketindeki ürün numarası ne?
2. Ekranda kod var mı?
3. Filtre ve hazne en son ne zaman temizlendi?
4. Makine hangi programda durdu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bakım için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/), kurutmuyorsa [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) yazısına bak. Bil, gör, çağır.
