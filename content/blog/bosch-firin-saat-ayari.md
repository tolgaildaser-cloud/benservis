---
title: "Bosch fırın saat ayarı nasıl yapılır"
description: "Bosch ankastre fırında saat ayarı: tuşlu, artı-eksi ve döner düğmeli panelde adımlar, kesintiden sonra yanıp sönen saat ve çocuk emniyeti."
slug: "bosch-firin-saat-ayari"
date: "2026-10-23"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork C). Konu seçimi: origin/main'de bosch-firin-saat-ayari yok; Bosch fırında bosch-firin-isinmiyor,
#   bosch-firin-hava-ufluyor, bosch-firin-buhar-yapiyor var (saat ayarına ayrılmış sayfa yok). Marka kalıbı: arcelik-firin-saat-ayarlama, vestel-firin-saat-ayarlama.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "bosch fırın s" → 1. "bosch fırın saat ayarı", 2. "…sembolleri ve anlamları", 3. "…safe ne demek".
#   GSC (https___www-5 / https___www-6): Bosch fırın saat satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200, md5 yerel kopyayla aynı (kaynak-firin-sprint/).
#  (A) Bosch HBB23C… ankastre fırın  9000728669_B.pdf  20 s.  md5 5544858a428c91894c15726616c53729
#  (B) Bosch HBF512B.1T ankastre fırın  9001944574_A.pdf  28 s.  md5 3fac75fc8fb8bbef288fcc478b030ece
#  (C) Bosch HBJN10Y..R ankastre fırın  9001930148_F.pdf  24 s.  md5 73afa0ad2328c7fe9bcbe06cc6d29177
# İlk saat ayarı A s.6 · saatin değiştirilmesi, zaman göstergesi, çocuk emniyeti A s.8 · arıza tablosu A s.11 · saat 12:00, çocuk emniyeti notu B s.11
#   · cihaz çalışmıyor B s.17 · saat ayarı C s.9-10 · alarm/süre varken saat ayarlanamaz C s.10 · "Ekranda saat yanıp söner" C s.16 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: "saat ayarlanmazsa fırın çalışmaz" (Bosch belgelerinde yok) · Home Connect/uygulama üzerinden saat · saat modülü/kart teşhisi (#31) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-firin-saat-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Fırının panelinde saatin hangi tuşlarla ayarlandığına bak: saat sembollü tuş ve iki ayar tuşu, artı-eksi tuşlar ya da iki döner düğme."
  - "Fonksiyon seçme düğmesini sıfır konumuna getir; artı-eksi ve döner düğmeli panellerde saat ancak bu konumda ayarlanır."
  - "Saat sembollü tuşlu panelde saat tuşuna bas ve iki ayar tuşuyla saati ayarla; birkaç saniye sonra saat kaydedilir."
  - "Artı-eksi tuşlu panelde yanıp sönen 12:00'ı artı ya da eksi tuşuyla güncel saate getir ve kılavuzun gösterdiği onay tuşuna bas."
  - "Döner düğmeli panelde sol düğmeyle saati ayarla, sağ butonu kırmızı ışık sönene kadar basılı tut."
  - "Saati sonradan değiştirmek için kılavuzdaki sırayı izle; alarm ya da süre kuruluyken saat ayarlanamaz."
  - "Elektrik kesintisinden sonra saati yeniden ayarla ve çocuk emniyetinin kapandığını unutma."
faq:
  - q: "Bosch fırında saat neden yanıp sönüyor?"
    a: "Bosch kılavuzlarına göre bu, elektrik beslemesinin kesildiğini gösteriyor. HBJN10 kılavuzunun arıza tablosu 'ekranda saat yanıp söner' satırı için tek öneri veriyor: saati yeniden ayarla. HBB23C'de bağlantıdan ya da kesintiden sonra saat sembolü ve dört sıfır, HBF512'de 12:00 yanıp söner."
  - q: "Bosch fırında saat ayarı nasıl değiştirilir?"
    a: "Tuşlu HBB23C serisinde başka bir zaman fonksiyonu kurulu değilken saat tuşuna dört kez basıp iki ayar tuşuyla saati ayarlıyorsun. HBF512'de zaman fonksiyonları tuşu saat, alarm, süre ve bitiş zamanı arasında geçiş yapıyor; değer artı ve eksiyle değişiyor. Döner düğmeli HBJN10'da fonksiyon düğmesi sıfırdayken sol düğmeyle saat ayarlanıp sağ buton basılı tutuluyor."
  - q: "Bosch fırında alarm kuruluyken saati ayarlayabilir miyim?"
    a: "HBJN10 kılavuzuna göre hayır. Bir alarm ayarlandığında süre ve saat ayarlanamaz; bir süre ayarlandığında da alarm ve saat ayarlanamaz. Önce alarmı ya da süreyi iptal et; bunun için sağ düğme bir süre basılı tutulur."
  - q: "Elektrik gidip gelince çocuk kilidi açılır mı?"
    a: "HBF512 kılavuzuna göre evet: bir elektrik kesintisinden sonra çocuk emniyeti artık etkin değildir. Kesintiden sonra saati ayarladıktan sonra çocuk emniyetini yeniden devreye alman gerekir."
  - q: "Saat ayarlı ama fırın hiç çalışmıyor, ne yapmalıyım?"
    a: "Kılavuzların arıza tablosu önce elektrik tarafına bakmanı istiyor: fiş takılı mı, sigorta kutusundaki sigorta atmış mı, mutfak ışığı ve diğer cihazlar çalışıyor mu. Bunlar tamamsa ve fırın yine çalışmıyorsa sorun saatte değildir; yetkili servise haber ver."
images:
  coverAlt: "Mutfak dolabına yerleştirilmiş, paslanmaz çelik panelli ve küçük ekranlı bir ankastre fırın"
  steps:
    - "Çizim: solda ankastre fırın, sağda panel ekranındaki uyarı"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda panel ekranındaki uyarı"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda prizden çekilen fiş"
---

Fırını yeni taktırdın ya da elektrik gidip geldi; ekranda sıfırlar ya da 12:00 yanıp sönüyor. Bosch'un kılavuzlarına göre bu bir arıza değil: elektrik bağlantısından ya da **elektrik kesintisinden sonra** saat yeniden ayarlanmayı bekler. Bosch'ta saatin nasıl ayarlandığı panel tipine göre değişiyor. Bu yazıda Bosch'un üç ankastre fırın kılavuzundan, tuşlu **HBB23C,** artı-eksi tuşlu **HBF512B.1T** ve iki döner düğmeli **HBJN10Y..R** serilerinden, saatin ilk ayarını, sonradan değiştirilmesini ve kesintiden sonra yapılacakları çıkardık. Senin modelin farklıysa tuş ve sembol yerlerini kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fonksiyon düğmesini sıfıra al. Tuşlu panelde saat tuşu ve iki ayar tuşu, artı-eksi panelde artı-eksi ve onay tuşu, döner düğmeli panelde sol düğme ve sağ buton. Alarm ya da süre kuruluyken saat ayarlanmaz. Kesintiden sonra saati yeniden gir, çocuk emniyetini yeniden aç.

## Fırınında hangi panel var

| Panelde gördüğün | Saat nasıl ayarlanır | Örnek seri (kılavuzdan) |
|---|---|---|
| Saat sembollü tuş ve iki ayar tuşu | Saat tuşu, sonra ayar tuşları | HBB23C… |
| Zaman fonksiyonları, artı ve eksi tuşu | Artı ya da eksi, sonra onay tuşu | HBF512B.1T |
| Sol ve sağda döner düğme, ortada ekran | Sol düğme, sonra sağ buton basılı | HBJN10Y..R |

## Adım adım: Bosch fırında saat ayarı

**1. Panelini tanı.** Bosch'un kılavuzları panelleri ayrı çiziyor; yukarıdaki tablodan kendi fırınına en yakın olanı bul. Aynı seride bile modele göre panel elemanlarının değişebileceğini kılavuz ayrıca not ediyor.

**2. Fonksiyon düğmesini sıfıra al.** HBF512 ve HBJN10 kılavuzlarında saat ayarının ön koşulu aynı: **fonksiyon seçme düğmesi sıfır konumunda olmalı.** Fırın bir ısıtma türünde açıkken saatle uğraşma; önce düğmeyi sıfıra çevir.

**3. Tuşlu panel (HBB23C).** Kılavuza göre bağlantıdan ya da elektrik kesintisinden sonra gösterge panelinde **saat sembolü ve dört sıfır yanıp söner.** Saat tuşuna bas; ekranda başlangıç saati görünür. Sonra **iki ayar tuşuyla** saati ayarla. Ayrı bir onay tuşu yok: **birkaç saniye sonra** programlanan saat görünür.

**4. Artı-eksi tuşlu panel (HBF512).** Kılavuza göre bağlantıdan ya da kesintiden sonra ekranda saat yanıp söner ve **"12:00"** olarak başlar. Güncel saati **artı ya da eksi tuşuyla** ayarla, ardından kılavuzun saat adımında gösterdiği **onay tuşuna** bas; ekranda ayarlanan saat görünür. Bu panelde **zaman fonksiyonları** tuşuna birkaç kez basınca saat, alarm, süre ve bitiş zamanı arasında geçiş yapılır.

**5. Döner düğmeli panel (HBJN10).** Kılavuz bu seride saati ilk çalıştırma ayarlarının başına koyuyor: elektrik bağlantısı yapıldıktan ya da elektrik kesilip geldikten sonra saati ayarla. **Sol döner düğme ile saati ayarla,** sonra **sağ butonu bir süre basılı tut.** Saat ayarlandığında **kırmızı LED söner ve sinyal sesi durur;** cihaz birkaç saniye sonra değişikliği devralır.

**6. Saati sonradan değiştir.** HBB23C'de kılavuzun şartı, başka bir zaman fonksiyonunun kurulu olmaması; bu durumda saat tuşuna **dört kez** bas, süre sembolleri yanar, sonra iki ayar tuşuyla saati ayarla. HBJN10'da dikkat edilecek kural şu: **bir alarm ayarlandığında süre ve saat ayarlanamaz; bir süre ayarlandığında da alarm ve saat ayarlanamaz.** Önce alarmı ya da süreyi iptal et; kılavuza göre bunun için sağ düğme bir süre basılı tutulur.

**7. Elektrik kesintisinden sonra.** HBJN10 kılavuzunun arıza tablosunda **"ekranda saat yanıp söner"** satırının nedeni **elektrik beslemesinin kesilmesi,** çözümü **saati yeniden ayarlamak.** HBF512 kılavuzu bir şey daha ekliyor: **elektrik kesintisinden sonra çocuk emniyeti artık etkin değildir.** Evde çocuk varsa saati girdikten sonra çocuk emniyetini yeniden devreye al.

## Çocuk emniyeti ve saat

HBB23C kılavuzuna göre çocuk emniyeti devredeyken fırın hiçbir ayara tepki vermez, ama **çalar saat ve saat yine programlanabilir.** Çocuk emniyetini kapatmak için ilgili tuşa **yaklaşık dört saniye** basılır; gösterge panelindeki sembol söner. HBF512'de de emniyet, fonksiyon seçme düğmesi sıfırdayken ilgili tuş basılı tutularak açılıp kapanır. Fırın saat ayarlı olduğu hâlde hiç tepki vermiyorsa önce bu sembole bak; kapak kilidi ve kilit simgesiyle ilgili ayrıntı [fırın kapağı açılmıyor](/blog/firin-kapagi-acilmiyor/) yazısında.

## Ne zaman servis

- Saat ayarlandığı hâlde fırın hiç çalışmıyorsa ve fiş, sigorta, mutfaktaki elektrik tamamsa
- Ekran hiç yanmıyorsa
- Çocuk emniyeti kapalı olduğu hâlde tuşlar ya da döner düğmeler hiçbir basışa tepki vermiyorsa
- Saat elektrik kesintisi olmadan sürekli kendiliğinden sıfırlanıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Saat, tuşlar, çocuk emniyeti, fonksiyon düğmesi ve sigorta şalteri sende; fırın gövdesinin içi, elektronik kart ve elektrik bağlantısı Bosch yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Fırının modeli, ürün numarası (E-Nr.) ve imalat numarası (FD) ne?
2. Panelde tuş mu, artı-eksi mi, döner düğme mi var?
3. Ekranda ne yanıp sönüyor?
4. Son zamanda elektrik kesintisi oldu mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isınma sorunları [Bosch fırın ısınmıyor](/blog/bosch-firin-isinmiyor/) yazısında, diğer markalar [Arçelik fırın saat ayarlama](/blog/arcelik-firin-saat-ayarlama/) ve [Vestel fırın saat ayarlama](/blog/vestel-firin-saat-ayarlama/) yazılarında. Bil, gör, çağır.
