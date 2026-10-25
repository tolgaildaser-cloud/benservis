---
title: "Zanussi çamaşır makinesi arıza kodları: E10, E20, E40, E91"
description: "Zanussi çamaşır makinesinde E10 su almıyor, E20 boşaltmıyor, E40 kapak, E91 iç arıza, EH0 elektrik demek. Kılavuza göre her kodda yapılacak kontroller."
slug: "zanussi-camasir-makinesi-ariza-kodlari"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W3). origin/main 08904bf'de "zanussi" geçen slug/başlık/gövde YOK.
# GSC: "zanussi" satırı yok. OT (bu koşu): "zanussi çamaşır makinesi a" → 1. "zanussi camasir makinesi ariza kodlari"; "zanussi çamaşır makinesi arıza" → 1. aynı.
# Belge zinciri (#88): zanussi.co.uk/support/user-manuals (model araması, /api/usermanual/search 200) → electrolux.bynder.com PDF, HTTP 200.
#  (A) Zanussi ZWF845B4PW User Manual EN, 32 s., md5 cb7f26377d9c9ea726117d6042958425 (alarm tablosu s.28)
#  (B) Zanussi ZWF143A2DG User Manual EN, 32 s., md5 b7752d096bfaf6ebba8de51c03b96410 (alarm tablosu s.26)
# İngilizce baskı, alıntılar çevrildi, orijinali KAYNAK.md'de. Kod adları PDF'te görsel; sayfa görüntüsünden okundu.
# Hub: bu yazı Zanussi çamaşır kodlarının tek sayfası; kodlar için tekil sayfa açılmaz.
# BİLEREK YAZILMAYANLAR: servis test modu · belgede olmayan kodlar (E21, E50 vb.) · pompa sökümü · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Küçük fırça"]
steps:
  - "Her kontrolden önce makineyi kapat."
  - "E10 varsa musluğu, su basıncını ve giriş hortumunu kontrol et."
  - "E10 sürerse giriş hortumunun ve valfin filtresini temizle."
  - "E20 varsa lavabo bağlantısını ve tahliye hortumunu kontrol et."
  - "Suyla biten bir program ya da seçenek kurduysan boşaltma programını çalıştır."
  - "E40 varsa kapağı arada çamaşır kalmadan sıkıca kapat."
  - "E91, EH0 ya da tabloda olmayan bir kodda makineyi kapatıp aç; kod dönerse servisi ara."
faq:
  - q: "Zanussi çamaşır makinesinde E20 ne demek?"
    a: "Zanussi'nin ZWF845B4PW ve ZWF143A2DG kılavuzlarına göre E20, makinenin suyu boşaltamadığı anlamına geliyor. Lavabo bağlantısının tıkalı, tahliye hortumunun bükük olmadığını ve hortum bağlantısının doğru olduğunu kontrol et. Tahliye devresi tıkalıysa kılavuz yetkili servisi işaret ediyor."
  - q: "E10 hatası neden çıkar?"
    a: "Kılavuza göre E10, makinenin suyu düzgün alamadığını gösteriyor. Musluk kapalı olabilir, su basıncı düşük olabilir, giriş hortumu bükülmüş ya da filtresi tıkanmış olabilir. Önce musluğu ve hortumu, sonra filtreleri kontrol et."
  - q: "E40 kodu çıktı ama kapak kapalı görünüyor, ne yapmalıyım?"
    a: "Kılavuz E40'ı kapağın açık ya da tam kapanmamış olması diye tanımlıyor ve tek öneri kapağın düzgün kapatılması. Contayla kapak arasına çamaşır sıkışmadığından emin olup kapağı sıkıca kapat. Kod sürerse servise danış."
  - q: "E91 kodunu ben giderebilir miyim?"
    a: "E91, makinenin elektronik parçaları arasında iletişim olmadığı bir iç arıza. Kılavuz, programın düzgün bitmediğini ya da makinenin erken durduğunu söylüyor ve makineyi kapatıp açmanı istiyor. Kod tekrar çıkarsa yetkili servis gerekiyor."
  - q: "Kontrolden sonra program baştan mı başlar?"
    a: "Kılavuza göre kontrolden sonra makineyi yeniden etkinleştirdiğinde program kaldığı yerden devam eder. Sorun tekrar ederse yetkili servisi aramanı ve makinenin etiketindeki bilgileri hazır tutmanı öneriyor."
images:
  coverAlt: "Ön yüklemeli beyaz çamaşır makinesinin ekranında yanan harfli hata kodu"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Zanussi çamaşır makinenin ekranında E ile başlayan bir kod duruyor ve başlat/duraklat tuşu sürekli yanıp sönüyorsa makine bir sorunu kendisi yakalamış demektir. Zanussi'nin ZWF845B4PW (8 kg) ve ZWF143A2DG (10 kg) kullanım kılavuzlarındaki "Alarm kodları ve olası arızalar" tablosunda beş kod var: E10, E20, E40, E91 ve EH0. Bu yazı kılavuzun İngilizce baskısına dayanıyor, alıntılar Türkçeye çevrildi. Senin modelinde farklı kodlar olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E10 su girişi, E20 su tahliyesi, E40 kapak, E91 elektronik, EH0 şebeke elektriği. Önce makineyi kapat, musluğu, hortumları ve kapağı kontrol et. Kod dönerse yetkili servisi ara.

## Kodların anlamı

| Kod | Kılavuzdaki anlamı | Senin ilk kontrolün |
|---|---|---|
| **E10** | Makine suyu düzgün almıyor | Musluk, su basıncı, giriş hortumu, filtreler |
| **E20** | Makine suyu boşaltmıyor | Lavabo bağlantısı, tahliye hortumu, boşaltma programı |
| **E40** | Kapak açık ya da tam kapanmamış | Kapağı düzgün kapat |
| **E91** | Elektronik parçalar arasında iletişim yok | Kapat ve aç; dönerse servis |
| **EH0** | Şebeke elektriği dengesiz | Elektriğin düzelmesini bekle |

## Adım adım: Zanussi çamaşır makinesinde kodu gidermek

**1. Önce makineyi kapat.** Zanussi kılavuzu her kontrolden önce makinenin devre dışı bırakılmasını istiyor. ZWF845B4PW'de program düğmesini kapalı konumuna, ZWF143A2DG'de ON/OFF tuşuna birkaç saniye basarak kapatırsın. Kodu ve hangi aşamada çıktığını not et.

**2. E10: su girişini kontrol et.** Kılavuzun E10 satırına göre musluğun açık olduğundan, su basıncının çok düşük olmadığından ve musluğun tıkalı olmadığından emin ol. Giriş hortumunda bükülme, hasar ya da kıvrım olmasın, hortumun bağlantısı doğru olsun. Su basıncından emin değilsen kılavuz yerel su idaresine sormanı öneriyor.

**3. E10 sürerse filtreleri temizle.** Kılavuz, giriş hortumunun filtresinin ve valf filtresinin tıkalı olmamasını istiyor. Bakım tablosu bu temizliği **yılda iki kez** öneriyor. Musluğu kapat, hortumu sök, süzgeci küçük bir fırçayla temizle ve kılavuzdaki resimlere göre yerine tak. Kılavuz, aynı sorunun tıkalı tahliye devresinden de kaynaklanabileceğini, o durumda yetkili servisin gerektiğini ekliyor.

**4. E20: tahliye yolunu kontrol et.** Kılavuza göre lavabo bağlantısı (sifondaki çıkış ağzı) tıkalı olmamalı, tahliye hortumu bükülmemeli ve hortumun bağlantısı doğru olmalı. Bu iki modelde kılavuz "kendi kendini temizleyen tahliye sistemi" anlatıyor; düzenli bakım için tahliye bölgesine erişmen gerekmiyor. Tahliye devresi tıkalıysa kılavuz yetkili servise yönlendiriyor.

**5. Suyla biten seçeneği unutma.** E20'nin en sık gözden kaçan sebebi kılavuzda iki ayrı madde: tahliye aşaması olmayan bir program seçtiysen ya da tamburda suyla biten bir seçenek kurduysan (Rinse Hold, Night) **boşaltma programını** çalıştırman gerekiyor. Program düğmesinde Spin/Drain'i seçip başlat.

**6. E40: kapağı düzgün kapat.** Kılavuzdaki tek öneri kapağın düzgün kapatılması. Çamaşırı yüklerken kılavuz, contayla kapak arasına hiçbir parçanın sıkışmamasını istiyor; aksi hâlde su sızabilir ve çamaşır zarar görebilir. Kapağı sıkıca kapatıp programı yeniden başlat.

**7. E91, EH0 ve diğer kodlar.** E91'de kılavuz, programın düzgün bitmediğini ya da makinenin erken durduğunu söylüyor: makineyi kapatıp yeniden aç, kod tekrar çıkarsa yetkili servisi ara. EH0'da yapılacak tek şey şebeke elektriğinin dengelenmesini beklemek. Tabloda olmayan bir kod görürsen kılavuz makineyi kapatıp açmanı, sorun sürerse servisi aramanı istiyor. Kontrolden sonra makineyi açtığında program kaldığı yerden devam eder.

## Kod yokken görülen benzer belirtiler

Kılavuzun ikinci tablosu kod çıkmayan durumları sayıyor. Makine su alıp hemen boşaltıyorsa tahliye hortumu fazla alçakta olabilir. Sıkma yapmıyor ya da yıkama uzuyorsa tamburdaki çamaşırı elle dengeleyip sıkma aşamasını yeniden başlat; sorun tahliye devresindeyse servis gerekiyor. Yerde su varsa hortum bağlantılarının sıkı ve hortumların hasarsız olduğuna, doğru deterjanı doğru miktarda kullandığına bak.

## Kodları seyrekleştiren bakım

Kılavuzun bakım takvimi kodların bir kısmını önceden önlemeye yarıyor. Giriş hortumu ve valf filtresi yılda iki kez, deterjan çekmecesi, tambur ve kapak contası iki ayda bir temizlenmeli; ayda bir boş tamburla bakım yıkaması önerilmiş. Kılavuz ayrıca her yıkamadan önce cepleri boşaltmanı, contada, tamburda ve filtrede kalan düğme, para ya da toka gibi cisimleri çıkarmanı istiyor.

## Ne zaman servis

- Filtreler temiz, musluk açık olduğu hâlde E10 sürüyorsa
- Hortum ve lavabo bağlantısı açık olduğu hâlde E20 dönüyorsa
- Kapak kapalıyken E40 çıkıyorsa
- E91 kapatıp açtıktan sonra yeniden çıkıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum, filtre, kapak ve boşaltma programı sende; tahliye devresi, kapak kilidi ve elektronik kart Zanussi yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ve etiketindeki ürün numarası ne?
2. Ekranda hangi kod var?
3. Kod hangi aşamada çıktı: su alırken mi, boşaltırken mi?
4. Tamburda su kaldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kapak açılmıyorsa [Zanussi çamaşır makinesi kapağı açılmıyor](/blog/zanussi-camasir-makinesi-kapagi-acilmiyor/), program takıldıysa [Zanussi çamaşır makinesi resetleme](/blog/zanussi-camasir-makinesi-resetleme/) yazısına bak. Genel tahliye sorunları için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/). Bil, gör, çağır.
