---
title: "Hotpoint bulaşık makinesi resetleme nasıl yapılır"
description: "Hotpoint bulaşık makinesinde reset: Su Boşaltma ile iptal, tuş kilidi, gecikmeyi kaldırma ve 1 dakika kapatıp açma. Kılavuzdaki sıra ve servis sınırı."
slug: "hotpoint-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, ek küme H). Konu: origin/main'de Hotpoint / Ariston adı geçen sayfa yok. Yakın genel sayfa: bulasik-makinesi-programi-bitirmiyor (marka sorgusu değil).
#   Bekletilen eski taslak hotpoint-bulasik-makinesi-temiz-yikamiyor (sprint-144) başka sorgu; bu yazı ona bağlanmıyor.
# Arama kanıtı (bu koşu 23 Eki 21:02, Google otomatik tamamlama hl=tr gl=tr): "hotpoint bulaşık makinesi r" → 1. "hotpoint bulaşık makinesi resetleme", 3. "hotpoint ariston bulaşık makinesi resetleme". GSC: satır yok.
# Belge (YK #88, 23 Eki: Whirlpool grubu portalı + Thron CDN = üretici belgesi). Zincir: docs.hotpoint.eu/?Campo_Ricerca=HFC%203B19%20X (200) → portal API brand=HOTPOINT/ARISTON (200) → Thron PDF (200).
#  (HD) Hotpoint Ariston bulaşık makinesi Günlük Referans Kılavuzu, TR (400011291893B, 10/2018), portal kaydı HFC 3B19 X, 8 s.  md5 b074d755c49c9680060ceb33345a128e
#   Belge s.1 kendisi "BİR HOTPOINT ARISTON ÜRÜNÜ" ve docs.hotpoint.eu adresini yazıyor.
# Panel s.1 · tuş kilidi, su musluğu kapalı, su boşaltma, gecikme, seçenek LED s.4 · program değiştirme, ilave bulaşık, yanlışlıkla kesinti, END, otomatik kapanma s.6 · sorun giderme ve veri plakası s.8.
# BİLEREK YAZILMAYANLAR: hata kodu tablosu (bu belgede yok; F15 vb. kod sorguları elendi) · servis test programı · kart teşhisi · fiyat (#46).
# Alıntı denetim tablosu: hotpoint-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Tuşlar tepki vermiyorsa tuş kilidine bak; Yarım Yük düğmesine 3 saniye basarak kapat."
  - "Program yeni başladıysa Açık-Kapalı/Sıfırlama düğmesini basılı tutarak makineyi kapat ve yeniden seç."
  - "Çalışan programı tamamen iptal etmek için BAŞLAT/DURAKLAT'a uzun basıp Su Boşaltma'yı çalıştır."
  - "Gecikme geri sayıyorsa BAŞLAT/DURAKLAT'a yeniden basarak gecikmeyi iptal et."
  - "Makine komutlara yanıt vermiyorsa kapat, yaklaşık bir dakika bekle, aç ve programı sıfırla."
  - "Elektrik ya da kapak yüzünden duran çevrimi BAŞLAT/DURAKLAT ile kaldığı yerden sürdür."
  - "Sorun sürüyorsa musluğu kapat, fişi çek ve veri plakasındaki kodlarla servisi ara."
faq:
  - q: "Hotpoint bulaşık makinesinde reset tuşu var mı?"
    a: "Hotpoint Ariston'un Türkçe günlük referans kılavuzunda kontrol panelinin ilk düğmesi gösterge ışıklı Açık-Kapalı/Sıfırlama düğmesi. Ayrıca BAŞLAT/DURAKLAT düğmesinin uzun basışta Su Boşaltma işlevi var; çalışan programı durdurup suyu tahliye ediyor."
  - q: "Çalışan programı nasıl iptal ederim?"
    a: "Kılavuza göre Su Boşaltma işlevi aktif çevrimi durdurmak ve iptal etmek için kullanılıyor. BAŞLAT/DURAKLAT düğmesine uzun basınca işlev etkinleşiyor, program duruyor ve makinedeki su tahliye ediliyor."
  - q: "Tuşlara basıyorum, tepki yok. Neden?"
    a: "Tuş kilidi açık olabilir. Kılavuza göre Yarım Yük düğmesine uzun (3 saniye) basınca tuş kilidi etkinleşiyor ve kontrol panelini Açık/Kapalı düğmesi dışında kilitliyor. Kapatmak için yeniden uzun bas. Panelde ayrı bir tuş kilidi gösterge ışığı var."
  - q: "Gecikmeli başlatmayı nasıl kaldırırım?"
    a: "Kılavuza göre geri sayım sırasında BAŞLAT/DURAKLAT düğmesine tekrar basılırsa gecikme seçeneği iptal ediliyor ve seçilen program hemen başlıyor. Gecikme 0:30 ile 24 saat arasında ayarlanabiliyor; program başladıktan sonra ayarlanamıyor."
  - q: "Elektrik kesildi, program silindi mi?"
    a: "Kılavuza göre yıkama sırasında kapak açılırsa ya da elektrik kesilirse çevrim duruyor. Kapak kapatıldığında ya da elektrik geldiğinde çevrimi kaldığı yerden başlatmak için BAŞLAT/DURAKLAT düğmesine basman gerekiyor."
images:
  coverAlt: "Modern bir mutfakta kapağı kapalı, gri bir bulaşık makinesi"
  steps:
    - "Bulaşık makinesi kumanda panelinde küçük bir kilit simgesi yanan gösterge"
    - "Bulaşık makinesi kumanda panelinde açma ve kapama düğmesinin yakın planı"
    - "Bulaşık makinesinin tabanında tahliye edilen az miktarda su"
    - "Bulaşık makinesi ekranında geri sayım gösteren bir süre göstergesi"
    - "Kumanda paneli sönük duran bir bulaşık makinesi"
    - "Kapağı aralık bırakılmış ve içinden hafif buhar çıkan bir bulaşık makinesi"
    - "Bulaşık makinesi kapağının iç kenarındaki veri plakası bölgesi"
---

Yanlış programı başlattın, makine ekranda geri sayıp duruyor ya da tuşlar hiç tepki vermiyor; akla ilk gelen "resetlemek". Hotpoint Ariston'un bulaşık makinesi için yayımladığı Türkçe günlük referans kılavuzunda iki düğme bu işi görüyor: kontrol panelinin ilk düğmesi **Açık-Kapalı/Sıfırlama,** ve uzun basışta **Su Boşaltma** işlevini çalıştıran **BAŞLAT/DURAKLAT.** Kılavuz bunlarla dört iş anlatıyor: **programı değiştirmek, programı iptal edip suyu boşaltmak, gecikmeyi kaldırmak** ve **komutlara yanıt vermeyen makineyi 1 dakika kapatıp açmak.** Bu yazı HFC 3B19 X kaydındaki bu kılavuzu izliyor; kendi modelinle karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tuşlar kilitliyse Yarım Yük'e 3 saniye bas. Program yeni başladıysa Açık-Kapalı'yı basılı tut, yeniden seç. İptal için BAŞLAT/DURAKLAT'a uzun bas: Su Boşaltma. Gecikme için BAŞLAT/DURAKLAT'a yeniden bas. Tepki yoksa kapat, 1 dakika bekle, aç. Sürerse servis.

## Ne gördüğüne göre ne yaparsın

| Gördüğün | Kılavuza göre | Ne yaparsın |
|---|---|---|
| **Tuş kilidi ışığı yanıyor, tuşlar tepkisiz** | Tuş kilidi etkin | 🛠️ Yarım Yük'e 3 saniye bas |
| **Ekranda geri sayım** | Gecikmeli başlatma ayarlı | 🛠️ BAŞLAT/DURAKLAT'a bas |
| **Bir seçenek LED'i 3 kez hızlı yanıp söndü, bip** | Seçenek programla uyumsuz | Başka seçenek |
| **Su musluğu kapalı ışığı yanıp sönüyor** | Giriş suyu yok ya da musluk kapalı | 🛠️ Musluğu aç |
| **Makine komutlara yanıt vermiyor** | Sıfırlama satırı | 🛠️ Kapat, 1 dakika bekle, aç |

## Adım adım: Hotpoint bulaşık makinesini sıfırlama

**1. Tuş kilidini kontrol et.** Panel tepki vermiyorsa önce buna bak. Kılavuza göre **YARIM YÜK düğmesine uzun (3 saniye) basıldığında TUŞ KİLİDİ işlevi etkinleşiyor** ve kontrol panelini **AÇIK/KAPALI düğmesi dışında bloke ediyor.** Devre dışı bırakmak için **tekrar uzun bas.** Panelde bunun için ayrı bir **tuş kilidi gösterge ışığı** var.

**2. Yeni başlamış programı değiştir.** Kılavuzun sırası: yanlış program seçildiyse **yeni başlamış olması kaydıyla** değiştirilebilir. **AÇIK/KAPALI düğmesini basılı tut, makine kapanacak.** Makineyi aynı düğmeyle **tekrar aç, yeni yıkama çevrimini ve istediğin seçenekleri seç,** BAŞLAT/DURAKLAT'a basıp kapağı kapatarak çevrimi başlat.

**3. Programı iptal et: Su Boşaltma.** Program ilerlediyse ve tamamen durdurmak istiyorsan kılavuzdaki işlev bu: **Su Boşaltma, aktif çevrimi durdurmak ve iptal etmek için kullanılabilir.** **BAŞLAT/DURAKLAT düğmesine uzun basıldığında** işlev etkinleşiyor; **aktif program durduruluyor ve bulaşık makinesindeki su tahliye ediliyor.** Bu, tabanda su kalmasın diye resetin en temiz yolu.

**4. Gecikmeyi kaldır.** Ekranda geri sayım görüyorsan bir gecikme ayarlanmış. Kılavuza göre gecikme **0:30 ile 24 saat** arasında ayarlanabiliyor ve **geri sayma sırasında BAŞLAT/DURAKLAT düğmesine tekrar basılırsa GECİKME seçeneği iptal ediliyor, seçilen program otomatik olarak başlıyor.** Gecikme işlevi program başladıktan sonra ayarlanamıyor.

**5. Tepki yoksa 1 dakika bekle.** Sorun giderme tablosundaki "komutlara yanıt vermiyor" satırının çözümü: **AÇIK/KAPALI düğmesine basarak cihazı kapat, yaklaşık bir dakika sonra tekrar aç ve programı sıfırla.** Aynı satırda üç basit neden de var: **fiş doğru takılmamış, elektrik kesintisi** ya da **kapak kapalı değil;** kapağı "klik" sesi duyana kadar it.

**6. Duran çevrimi sürdür.** Her duruş reset gerektirmez. Kılavuza göre yıkama sırasında **kapak açılırsa ya da elektrik kesintisi olursa çevrim durduruluyor;** kapak kapatıldığında ya da elektrik geri geldiğinde **çevrimi kaldığı yerden başlatmak için BAŞLAT/DURAKLAT düğmesine bas.** İlave bulaşık eklemek için de makineyi kapatmadan kapağı açıp (sıcak buhara dikkat) yerleştirir, kapağı kapatıp aynı tuşa basarsın.

**7. Sürerse servis.** Sıfırlamadan sonra sorun geri geliyorsa ev ayar turu bitmiştir. Satış Sonrası Servisi ararken kılavuza göre **bulaşık makinesi kapağının içinde sol ya da sağ tarafa iliştirilmiş veri plakasındaki kodları** belirtmen gerekiyor. Musluğu kapat ve fişi çek.

## Köpük ve su ışığı için ayrı yol

Tabloya göre aşırı köpük, deterjanın doğru ölçülmemesinden ya da bulaşık makinesine uygun olmamasından oluyor; çözüm **BOŞALT düğmesine basarak bulaşık makinesini sıfırlamak ve deterjan eklemeden yeni bir program çalıştırmak.** Panelde **su musluğu kapalı** gösterge ışığı yanıp sönüyorsa sorun reset değil, su girişi: kılavuza göre bu alarm **giriş suyu olmadığında ya da su musluğu kapalıyken** yanıp sönüyor. Ayrıntılar [Hotpoint bulaşık makinesi su almıyor](/blog/hotpoint-bulasik-makinesi-su-almiyor/) yazısında.

Makine uzun süre atıl kalırsa elektrik tüketimini azaltmak için **otomatik olarak kapanıyor;** sönük panel her zaman arıza demek değil.

## Ne zaman servis

- Kapatıp 1 dakika bekledikten sonra makine yine komutlara yanıt vermiyorsa
- Su Boşaltma çalıştığı hâlde tabanda su kalıyorsa: [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/)
- Fiş takılı, elektrik var olduğu hâlde panelde hiç ışık yoksa
- Program yarıda takılıyorsa: [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/)

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, tuş kilidi, program seçimi, musluk ve filtreler sende; elektronik kart, pompa, ısıtıcı ve gövde içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Veri plakasındaki model ve servis kodları ne?
2. Ekranda ne yazıyor, hangi gösterge ışıkları yanıyor ya da yanıp sönüyor?
3. Su Boşaltma çalıştı mı, kapatıp 1 dakika bekledin mi?
4. Hangi program ve hangi aşamada durdu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
