---
title: "Franke bulaşık makinesi resetleme nasıl yapılır"
description: "Franke bulaşık makinesinde reset: Açık-Kapalı/Sıfırlama düğmesi, Su Boşaltma ile iptal, bir dakika kapatıp açma, fişi çekme, F9 ve F12. Kılavuzdaki sıra."
slug: "franke-bulasik-makinesi-resetleme"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X3). origin/main b4098f8 content/blog'da "franke" slug/başlık yok; marka adı yalnız ocak-atesleme-yapmiyor gövdesinde (o sorgu açılmadı).
# Arama kanıtı (bu koşu 12:44, hl=tr gl=tr): "franke bulaşık makinesi" → 3. "…resetleme"; "franke bulaşık makinesi r" → 1. GSC: satır yok.
# Belge zinciri: franke.com/tr/tr ürün sayfası (200) → "Kullanım Kılavuzu" bağlantısı → fcl-p-100-api…hana.ondemand.com PDF (200).
#  (F1) FDWS 614 D8P DOS E (117.0612.358) Kullanım kılavuzu, TR bölümü PDF s.25–36, md5 a6dbab00014a8325ae104e0f532032d5
#  (F2) FDW 614 D6P DOS E (117.0629.499) Kullanım kılavuzu, TR bölümü PDF s.36–47, md5 def5e5f8688e8a95f6aeac74505432ce
# BİLEREK YAZILMAYANLAR: kart / kapak kilidi teşhisi · ayrı "servis modu" (belgede yok) · fiyat (#46).
# Alıntı denetimi: franke-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Veri plakasından modelini oku; panelde Su Boşaltma yazıp yazmadığına bak."
  - "Makineyi uyandırmadan önce fiş, musluk ve kapak kilidinin klik sesini kontrol et."
  - "Yeni başlamış yanlış programda Açık-Kapalı/Sıfırlama düğmesini basılı tutarak makineyi kapat, açıp programı yeniden seç."
  - "Su Boşaltma olan modelde programı bitirmek için BAŞLAT/DURAKLAT'a uzun bas ve tahliyeyi bekle."
  - "Kapak açılması ya da elektrik kesintisinden sonra BAŞLAT/DURAKLAT ile çevrimi kaldığı yerden sürdür."
  - "Tepki yoksa ya da F9, F12, 9, 12 görünüyorsa cihazı kapat, yaklaşık bir dakika bekleyip aç; olmazsa fişi bir dakika çek."
  - "Kod geri geliyorsa arıza türü, model ve seri numarasıyla Franke Teknik Servis Merkezi'ni ara."
faq:
  - q: "Franke bulaşık makinesinin reset düğmesi hangisi?"
    a: "FDWS 614 D8P ve FDW 614 D6P kılavuzlarında kontrol panelindeki ilk düğme 'Gösterge ışıklı Açık-Kapalı/Sıfırlama düğmesi' olarak geçiyor. Ayrı bir reset tuşu yok; sıfırlama bu düğmeyle, FDWS 614 D8P'de ayrıca BAŞLAT/DURAKLAT düğmesindeki Su Boşaltma işleviyle yapılıyor."
  - q: "Elektrik gidip gelince makine neden devam etmiyor?"
    a: "Kılavuza göre güvenlik nedeniyle makine güç geri geldiğinde otomatik olarak çalışmıyor. BAŞLAT/DURAKLAT düğmesine basman gerekiyor. FDW 614 D6P'de buna ek olarak kapağı 4 saniye içinde kapatman isteniyor."
  - q: "Ekranda F9 ya da F12 yazıyor, ne yapmalıyım?"
    a: "FDWS 614 D8P kılavuzunda F9 veya F12 ile Açık/Kapalı ve BAŞLAT/Duraklat LED'lerinin hızlı yanıp sönmesi 'komutlara yanıt vermiyor' satırında. Çözüm: cihazı kapat, yaklaşık bir dakika sonra aç ve programı yeniden başlat; sürerse fişi bir dakika çek. FDW 614 D6P'de aynı satırda ekranda 9 ya da 12 görünüyor."
  - q: "Ekranda dOF yanıp sönüyor, makine bozuldu mu?"
    a: "FDWS 614 D8P kılavuzu dOF göstergesini demo modunun kapatılması sırasında anlatıyor. Demo modunu kapatmak için makineyi açıp kapatıyor, sesli ikaz duyulana kadar GECİKME düğmesine basıyor ve makineyi yeniden açıyorsun; dOF yanıp sönüp makine kapanıyor."
images:
  coverAlt: "Mutfak dolapları arasına yerleştirilmiş, kapağı kapalı ankastre bir bulaşık makinesi"
  steps:
    - "Bulaşık makinesi kapağının iç kenarındaki veri plakası"
    - "Kapağı tam kapanmış bir bulaşık makinesinin üst kenarı"
    - "Bulaşık makinesi kapağının üst kenarındaki düğme sırası"
    - "Lavabo altındaki gider bağlantısına uzanan tahliye hortumu"
    - "Hafifçe aralık duran kapağından buhar çıkan bir bulaşık makinesi"
    - "Prizden çekilmiş bir fiş ve yanında duran bulaşık makinesi"
    - "Tezgâh üzerinde duran bir telefon ve yanında kullanım kılavuzu"
---

Panelde ışıklar hızlı hızlı yanıp sönüyor, düğmeler tepki vermiyor ya da yanlış programla başlayan Franke bulaşık makinesini durdurmak istiyorsun. Franke'nin Türkçe kullanım kılavuzlarında ayrı bir "reset" bölümü yok; sıfırlama yolları günlük kullanım, seçenekler ve sorun giderme bölümlerine dağılmış. Biz bunları iki modelin kılavuzundan topladık: FDWS 614 D8P DOS E ve FDW 614 D6P DOS E. İki model aynı işi farklı düğmelerle yapıyor; o yüzden önce hangisine benzediğini bul.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Reset düğmesi = Açık-Kapalı/Sıfırlama. Yanlış program: basılı tut, kapat, aç, yeniden seç. Su Boşaltma'lı modelde BAŞLAT/DURAKLAT'a uzun basış programı bitirir. Kesintiden sonra makine kendiliğinden başlamaz. F9, F12 (ya da 9, 12): bir dakika kapalı bekle; sürerse fişi bir dakika çek.

## Önce modelini tanı

Kapağın iç kenarındaki veri plakasında model yazıyor. İki kılavuzdaki fark şu:

| | FDWS 614 D8P DOS E | FDW 614 D6P DOS E |
|---|---|---|
| **Sıfırlama düğmesi** | Açık-Kapalı/Sıfırlama | Açık-Kapalı/Sıfırlama |
| **Son düğme** | Başlat/Duraklat / Su Boşaltma | Başlat/Duraklat / Tablet |
| **Başlatırken kapak** | Başlat, kapağı kapat | Başlat, kapağı 4 saniye içinde kapat |
| **Yanıt vermeme kodu** | F9 ya da F12 | 9 ya da 12 |
| **Yanıp sönen LED** | Açık/Kapalı ve BAŞLAT/Duraklat | Açık/Kapalı |

Senin modelin bu ikisinden farklıysa düğme adlarını kendi kılavuzunla eşleştir.

## Adım adım: Franke bulaşık makinesini sıfırlama

**1. Modeli ve paneli oku.** Veri plakasındaki modeli not et ve paneldeki son düğmenin altında "Su Boşaltma" yazıp yazmadığına bak. Sonraki adımlardan hangisinin sende çalışacağı buna bağlı.

**2. Basit sebepleri ele.** Sorun giderme tablosunda "Bulaşık makinesi çalışmıyor veya komutlara yanıt vermiyor" satırının ilk sebepleri: fiş doğru takılmamış, kapak kapalı değil, CoolDry pimi içeri çekilmemiş. Kapak için kılavuzun önerisi **"Klik" sesi duyana kadar kapağı itin.** Günlük kullanım da musluğun açık olduğunu kontrol ederek başlıyor.

**3. Yanlış programı sıfırla.** Kılavuz bunu yalnız program **yeni başlamışsa** mümkün görüyor: **AÇIK/KAPALI düğmesini basılı tutun, makine kapanacaktır.** Aynı düğmeyle makineyi aç, yeni yıkama çevrimini ve seçenekleri seç. FDW 614 D6P'de önce kapağı açıyorsun, sonra düğmeyi basılı tutuyorsun; yeni programı başlatınca kapağı 4 saniye içinde kapatıyorsun.

**4. Su Boşaltma ile bitir.** Bu yol FDWS 614 D8P'de var. Kılavuzdaki tanım: aktif çevrimi durdurmak ve iptal etmek için **BAŞLAT/DURAKLAT düğmesine uzun basıldığında SU BOŞALTMA işlevi etkinleştirilecektir.** Program duruyor, içerideki su tahliye ediliyor. Tahliye sürerken kapağı açmaya uğraşma.

**5. Kesintiden sonra sürdür.** Kapak yıkama sırasında açılırsa ya da elektrik giderse çevrim duruyor. Güvenlik nedeniyle makine elektrik gelince **otomatik olarak çalışmayacak**; çevrimi sen sürdürüyorsun. FDWS 614 D8P'de kapağı kapatıp BAŞLAT/Duraklat'a basıyorsun. FDW 614 D6P'de BAŞLAT/DURAKLAT'a basıp kapağı 4 saniye içinde kapatıyorsun; kapatmazsan alarm çalıyor.

**6. Bir dakika kapalı bekle.** Makine komutlara yanıt vermiyor ve ekranda F9, F12 (ya da 9, 12) görünüyorsa tablonun çözümü: **AÇIK/KAPALI düğmesine basarak cihazı kapatın, yaklaşık bir dakika sonra tekrar açın ve programı yeniden başlatın.** Sürerse **1 dakika süreyle cihazın fişini çekin, ardından tekrar takın.** Priz ankastre dolabın arkasında kalıyorsa dolabı sökme; prize erişim elektrikçinin ya da servisin işi.

**7. Franke servisine bilgiyle git.** Kılavuz işletim sorunlarında bir **Franke Teknik Servis Merkezi** ile iletişime geçmeni, yetkisiz teknisyene başvurmamanı istiyor. Hazırlaman gerekenler: arızanın türü, ürün modeli (Art./Cod.) ve seri numarası (S.N.). Üretici yedek parçayı üretimden itibaren en az 10 yıl bulunduracağını yazıyor.

## Reset sanılan üç durum

**Aşırı köpük.** Makineden çok ses geliyor ve sebep köpükse FDWS 614 D8P'de Su Boşaltma'ya basıp makineyi sıfırlıyor, **deterjan eklemeden** yeni program çalıştırıyorsun. FDW 614 D6P'de makineyi kapatıp açıyor, yeni program seçiyor ve yine deterjansız başlatıyorsun.

**Tuş kilidi.** FDWS 614 D8P'de MULTIZONE düğmesine 3 saniye basınca panel Açık/Kapalı dışında kilitleniyor. Düğmeler "ölü" gibiyse önce kilidi aynı uzun basışla kaldır.

**Demo modu ve dOF.** FDWS 614 D8P'de demo modunu kapatmak için makineyi açıp kapatıyor, sesli ikaz gelene kadar GECİKME düğmesine basıyor, makineyi yeniden açıyorsun; ekranda **dOF** yanıp sönüp makine kapanıyor. Makine uzun süre boşta kalınca enerji için kendiliğinden de kapanıyor.

Diğer kodlar [Franke bulaşık makinesi arıza işaretleri](/blog/franke-bulasik-makinesi-ariza-isaretleri/) yazısında, markadan bağımsız liste [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasında.

## Ne zaman servis

- Fiş bir dakika çekilip takıldıktan sonra da panel tepkisizse
- F9, F12, 9 ya da 12 her açılışta geri geliyorsa
- Kapak klik sesiyle kapandığı hâlde program başlamıyorsa
- Makine çalışınca sigorta atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğme, kapak, fiş, tuş kilidi ve Su Boşaltma sende; kart, kapak kilidi mekanizması ve makinenin iç parçaları Franke yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Model ve seri numarası (veri plakası)
2. Ekrandaki kod ve yanıp sönen LED'ler
3. Kapak klik sesiyle kapanıyor mu?
4. Bir dakika kapalı bekletme ve fiş denemesi yapıldı mı?
5. Tuş kilidi, gecikme ya da demo modu açık mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
