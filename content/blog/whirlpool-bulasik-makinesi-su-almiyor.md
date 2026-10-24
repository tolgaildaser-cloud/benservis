---
title: "Whirlpool bulaşık makinesi su almıyor: F6 hatası"
description: "Whirlpool bulaşık makinesi su almıyor, ekranda F6 var ya da ışıklar hızla yanıp sönüyorsa: musluk, bükülmüş hortum, giriş süzgeci ve F15. Kılavuzdaki sıra."
slug: "whirlpool-bulasik-makinesi-su-almiyor"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W1). origin/main 08904bf'de "whirlpool" slug/başlık yok; hotpoint-/indesit-bulasik-makinesi-su-almiyor başka marka sorgusu, markasız bulasik-makinesi-su-almiyor genel.
# Arama kanıtı (bu koşu 07:57): "whirlpool bulaşık makinesi s" → 1. "…su almıyor"; "whirlpool bulaşık makinesi h" → 1. "…f6 hatası". GSC: satır yok.
# Belge zinciri: docs.whirlpool.eu (301 → docs.emeaappliance-docs.eu 200) → portal API (200) → Thron PDF (200).
#  (W) WFE 2B19 UK N Günlük Referans Kılavuzu TR 400011521158, 8 s., md5 4d2979c101dac47043c175085f2ca9a8
#  (E) WFC 3C42 P X Daily Reference Guide EN 400011476017, 8 s., md5 28b16988bf012f957f31fa77b67c5b94 (F6 ve F15 satırları; İngilizce baskı)
# BİLEREK YAZILMAYANLAR: giriş süzgecini sökme yöntemi (belgede yok) · su vanası / seviye algılayıcı teşhisi · tesisat işi · fiyat (#46).
# Alıntı denetimi: whirlpool-bulasik-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Emici bez", "Küçük kova"]
steps:
  - "Ekranda F6, musluk kapalı uyarısı ya da hızla yanıp sönen ışıklar olup olmadığını not et."
  - "Evde su olduğunu ve bulaşık makinesinin musluğunun tam açık olduğunu kontrol et."
  - "Giriş hortumunun makinenin arkasında ya da dolabın içinde bükülmediğine bak."
  - "Makineyi kapatıp aç, programı yeniden seç ve başlat."
  - "Su hâlâ gelmiyorsa giriş hortumundaki süzgeç tıkalı olabilir; musluğu kapat, hortumu sökmeyi bilmiyorsan bu işi servise bırak."
  - "Süzgeç temizlendikten sonra makineyi kapatıp aç ve yeni bir program başlat."
  - "Ekranda F15 görürsen su tesisatında sızıntı ya da hava girişi olup olmadığını kontrol ettir; kod sürerse yetkili servisi ara."
faq:
  - q: "Whirlpool bulaşık makinesinde F6 hatası ne demek?"
    a: "Whirlpool WFC 3C42 kılavuzunun İngilizce baskısında F6, 'bulaşık makinesi su almıyor' satırında geçiyor; ekranda F6 görünürken Açık/Kapalı ve BAŞLAT/Duraklat ışıkları hızla yanıp sönüyor. Sebep olarak suyun gelmemesi ya da musluğun kapalı olması, bükülmüş giriş hortumu ve tıkalı giriş süzgeci sayılıyor."
  - q: "Ekranı olmayan modelde su almama nasıl anlaşılır?"
    a: "WFE 2B19 kılavuzunun Türkçe sorun giderme tablosunda su almama satırı 'Tüm LED'ler hızla yanıp sönüyor' diye geçiyor. Kontroller aynı: şebekede su, açık musluk, bükülmemiş hortum ve temiz giriş süzgeci."
  - q: "Yeni taktığım hortumdan sonra su almıyor, neden olabilir?"
    a: "Kılavuz yeni ya da uzun süre kullanılmamış hortumlarda, bağlamadan önce suyun berrak ve katışıksız olduğundan emin olmak için bir süre akıtılmasını istiyor. Aksi hâlde su girişi tıkanabiliyor. Hortumu bağlama işi montaj talimatına göre yapılıyor; emin değilsen servis yapsın."
  - q: "F15 hatası ne anlatıyor?"
    a: "Aynı İngilizce kılavuzda F15, makinenin çevrimi erken bitirdiği satırda geçiyor ve su şebekesinde hava olması sebebiyle açıklanıyor. Öneri, şebekede sızıntı ya da içeri hava girmesine izin veren başka bir sorun olup olmadığını kontrol etmek."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı bir bulaşık makinesi"
  steps:
    - "Gösterge ışıkları yanıp sönen bir bulaşık makinesi paneli"
    - "Lavabo altındaki dolapta duran bir su musluğu ve bağlı hortum"
    - "Dolap içinde gevşek ve düz uzanan gri bir su giriş hortumu"
    - "Bulaşık makinesinin üst kenarındaki düğme sırası"
    - "Kapatılmış musluk ve altına konmuş küçük bir kova"
    - "Kapağı kapalı, yeniden çalıştırılmaya hazır bulaşık makinesi"
    - "Mutfak duvarındaki su tesisatı bağlantıları ve vana"
---

Whirlpool bulaşık makinen programı başlattıktan sonra su sesi gelmiyor, makine bekliyor ve ekranda **F6** beliriyor. Ekransız modelde ise bütün ışıklar hızla yanıp sönmeye başlıyor. Whirlpool'un WFE 2B19 bulaşık makinesi için yayımladığı Türkçe Günlük Referans Kılavuzu ve WFC 3C42 modelinin kılavuzu (kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi) bu durumu aynı satırda topluyor. Bu yazıda kontrol sırasını ve sınırını verdik. Senin modelinde panel farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F6 ya da hızla yanıp sönen ışıklar: su gelmiyor. Şebekede su ve açık musluk, bükülmemiş giriş hortumu, temiz giriş süzgeci. Sonra kapatıp aç, programı yeniden başlat. F15: şebekede hava. Kod dönüyorsa yetkili servis.

## Belirtiyi tanı

| Ekranda / panelde | Kılavuza göre anlamı | Kim |
|---|---|---|
| **F6**, Açık/Kapalı ve BAŞLAT/Duraklat hızla yanıp sönüyor | Su almıyor | 🛠️ Sen |
| **Tüm LED'ler hızla yanıp sönüyor** (ekransız) | Su almıyor | 🛠️ Sen |
| **Musluk kapalı göstergesi** yanıp sönüyor | Su gelmiyor ya da musluk kapalı | 🛠️ Sen |
| **F15** | Su şebekesinde hava, çevrim erken bitiyor | 🔧 Tesisat / servis |
| Kontrollerden sonra **kod dönüyor** | — | 🔧 Servis |

WFC 3C42 kılavuzunda panelde ayrı bir **musluk kapalı göstergesi** de var: kılavuza göre bu ışık su gelmediğinde ya da musluk kapalı olduğunda yanıp sönüyor.

## Adım adım: Whirlpool su almıyorsa

**1. Kodu ve ışıkları not et.** Ekranda F6 mı, F15 mi var, yoksa tüm ışıklar mı yanıp sönüyor? Bu ayrım servise de lazım olacak. Makineyi hemen kapatıp açma; önce aşağıdaki iki kontrolü yap.

**2. Su ve musluk.** Kılavuzun ilk satırı: **Su şebekesinde su olduğundan ya da musluğun çalıştığından emin olun.** Mutfak lavabosundan su akıyor mu bak; apartmanda kesinti olabilir. Bulaşık makinesinin ayrı musluğu tezgâh altında kalır ve dolap düzenlerken kısılabilir; sonuna kadar açık olduğundan emin ol. Kılavuzun günlük kullanım bölümü de her programdan önce makinenin şebekeye bağlı ve musluğun açık olduğunu kontrol etmeni istiyor.

**3. Hortumun bükülmediğine bak.** İkinci sebep: **Giriş hortumu bükülmüş.** Ankastre modellerde hortum dolabın içinde ezilebilir, makine yerine itilirken arkada katlanabilir. Görebildiğin kadarını düzelt. Makineyi yerinden çıkarmak ankastre montajı bozabilir; arkaya ulaşamıyorsan bu kontrolü servise bırak.

**4. Yeniden programla.** Hortumu düzelttikten sonra kılavuz **bulaşık makinesini yeniden programlayın ve yeniden başlatın** diyor. Makineyi kapat, aç, programı seç ve BAŞLAT/DURAKLAT düğmesine bas. Su sesi geliyorsa sorun çözüldü.

**5. Giriş süzgeci.** Üçüncü sebep: **Su giriş hortumundaki süzgeç tıkalı; temizlenmesi gerekiyor.** Süzgeç, hortumun musluğa ya da makineye bağlandığı ağızda duran küçük bir elek. Kılavuz süzgecin temizlenmesini istiyor ama nasıl söküleceğini anlatmıyor. Hortumu sökeceksen önce musluğu kapat, altına kova ve bez koy (çıkarım). Bağlantıyı daha önce hiç sökmediysen ya da conta yerinden çıkarsa sızıntı riski var; bu işi servise bırak.

**6. Temizlikten sonra yeniden başlat.** Satırın son cümlesi: **Doğrulama ve temizleme işlemini gerçekleştirdikten sonra, bulaşık makinesini kapatıp açın ve yeni bir programı yeniden başlatın.** Kılavuz ayrıca yeni ya da uzun süre kullanılmamış hortumlarda, bağlamadan önce suyun berrak ve katışıksız olduğunu görmek için bir süre akıtılmasını istiyor; bu yapılmazsa su girişi tıkanabiliyor.

**7. F15 ve tekrar eden kod.** WFC 3C42 kılavuzunda **F15**, makinenin çevrimi vaktinden önce bitirdiği satırda geçiyor ve sebebi **su şebekesinde hava**. Öneri, şebekede sızıntı ya da içeri hava girmesine izin veren başka bir sorun olup olmadığının kontrol edilmesi; bu tesisatçı işi. Aynı satırda tahliye hortumunun çok alçak konması ya da ev atık su sistemine sifonlama yapması da sayılıyor. Musluk, hortum ve süzgeç tamam olduğu hâlde F6 dönüyorsa yetkili servisi ara.

## Su almama başka neye benzer

Su almayan makine bazen "hiç çalışmıyor" gibi görünür. Kapak klik sesiyle kapanmadıysa ya da elektrik kesintisinden sonra BAŞLAT/DURAKLAT düğmesine basılmadıysa makine su almaz; bu durum [Whirlpool bulaşık makinesi resetleme](/blog/whirlpool-bulasik-makinesi-resetleme/) yazısında. Su alıp boşaltmıyorsa bakılacak yer filtre ve tahliye hortumu: [Whirlpool bulaşık makinesi su boşaltmıyor](/blog/whirlpool-bulasik-makinesi-su-bosaltmiyor/). Markadan bağımsız kontrol listesi [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) sayfasında.

## Ne zaman servis

- Musluk açık, hortum düz ve süzgeç temiz olduğu hâlde F6 dönüyorsa
- Makinenin altından ya da hortum bağlantısından su sızıyorsa
- F15 tesisat kontrolünden sonra da sürüyorsa
- Makine su alıp hemen boşaltıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, görünen hortum ve yeniden başlatma sende; su giriş vanası, seviye algılama, kart ve tesisat bağlantısı yetkili servisin ya da tesisatçının.

## Servisi aramadan önce kısa özet

1. Modelin ne (tanıtım levhasında yazar)?
2. Ekranda F6, F15 mi var, yoksa ışıklar mı yanıp sönüyor?
3. Musluk tam açık mı, evde su var mı?
4. Hortum bükülmüş mü?
5. Kapatıp açtıktan sonra kod döndü mü?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
