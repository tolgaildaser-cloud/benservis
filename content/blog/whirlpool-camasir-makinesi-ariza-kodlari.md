---
title: "Whirlpool çamaşır makinesi arıza kodları: F06, F02, F24"
description: "Whirlpool çamaşır makinesi arıza kodları: musluk kapalı, filtreyi temizle, FdL, Fod, F24, F02, F20 ve F06 dahil diğer F kodları. Kılavuzdaki çözüm sırası."
slug: "whirlpool-camasir-makinesi-ariza-kodlari"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W1). origin/main 08904bf'de "whirlpool" slug/başlık yok; camasir-makinesi-hata-kodlari markasız hub, Whirlpool satırı yok.
# Arama kanıtı (bu koşu 07:57): "whirlpool çamaşır makinesi a" → 1. "…arıza kodları"; "whirlpool çamaşır makinesi h" → 1. "…f06 hatası"; "…f" → 2. f06, 3. f05. GSC: satır yok.
# Belge zinciri: docs.whirlpool.eu (301 → docs.emeaappliance-docs.eu 200) → portal API (200) → Thron PDF (200).
#  (C2) FSCR 90426 Instructions for use EN 400010792541, 53 s., md5 6dcf560efbe74b07c6866998eb207e68
#  (C3) AWOE 9759 Instructions for use EN IFUCore08GB, 14 s., md5 41b43215dab5c09ef302cd2157ea0b7f (belgede marka adı yok; marka bağı portal kaydından)
#  (C1) FFB 8458 BV EE Quick guide EN 11552350, 4 s., md5 5fd03ff517f706345e8c940ecc0d9dd5
# ⚠ F06 ve F05 hiçbir belgede ayrı satır değil: C2'de "All other F.. failures", C3'te "F02–F35 (F24 hariç)" aralığı. Yazı bunu açıkça söylüyor.
# BİLEREK YAZILMAYANLAR: F06/F05'in belgede olmayan özel anlamı · kart / motor / pompa teşhisi · fiyat (#46).
# Alıntı denetimi: whirlpool-camasir-makinesi-ariza-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Sığ bir kap", "Emici bez"]
steps:
  - "Ekrandaki kodu ya da yanan uyarı ışığını olduğu gibi not et."
  - "Musluk kapalı uyarısında musluğu, hortum bükülmesini ve su basıncını kontrol et, sonra Başlat/Duraklat düğmesine bas."
  - "Filtreyi temizle uyarısında tahliye hortumunu ve su filtresini kontrol et, filtreyi temizle."
  - "Fod görünüyorsa Durulama ve Sıkma programını çalıştır, sonraki yıkamada deterjanı azalt."
  - "F24 görünüyorsa Durulama ve Sıkma ile programı tamamla ya da musluğu kapatıp Açma/Kapama düğmesini basılı tutarak suyu boşalt."
  - "F06 dahil diğer F kodlarında Açma/Kapama düğmesine en az üç saniye basarak arızayı sıfırla."
  - "Kod sürerse ya da F20, F60 veya F02 görünüyorsa makineyi kapat, fişi çek, musluğu kapat ve yetkili servisi ara."
faq:
  - q: "Whirlpool çamaşır makinesinde F06 hatası ne demek?"
    a: "Whirlpool'un yayımladığı kılavuzlarda F06 için ayrı bir satır yok. FSCR 90426 kılavuzunun İngilizce baskısı listede olmayan tüm F kodlarını 'elektrikli bileşen arızası' olarak topluyor; AWOE 9759 kılavuzu da F02 ile F35 arasındaki kodları (F24 hariç) 'elektrik modülü arızası' sayıyor. İkisinde de önce sıfırlama, sürerse servis isteniyor."
  - q: "F06 çıkınca ne yapmalıyım?"
    a: "FSCR 90426 kılavuzuna göre Açma/Kapama düğmesine en az üç saniye basarak arızayı sıfırla. Sorun sürerse makineyi kapat, fişini çek, musluğu kapat ve satış sonrası servisi ara. F05 için de belgelerdeki yol aynı."
  - q: "F02 hatası neden çıkar?"
    a: "FSCR 90426 kılavuzu F02'yi su stop arızası olarak açıklıyor: makinenin alt tablasında su sızıntısı algılanmış. Açma/Kapama'ya en az üç saniye basman, arıza sürerse servisi araman isteniyor."
  - q: "Ekranda F-01 gibi bir kod var ve makine kilitli, ne yapmalıyım?"
    a: "FFB 8458 BV EE kılavuzunun sorun giderme tablosuna göre makineyi kapat, fişini prizden çek ve yaklaşık bir dakika bekleyip yeniden aç. Sorun sürerse satış sonrası servisi ara."
  - q: "FdL ne demek?"
    a: "FSCR 90426 kılavuzunda FdL, kapağın kilidinin açılamadığını gösteriyor ve F29 ile aynı satırda. Kapağı kilit bölgesinden bastırıp Açma/Kapama'ya en az üç saniye basman, sıcak programda önce soğumasını beklemen isteniyor."
images:
  coverAlt: "Banyoda duran önden yüklemeli beyaz bir çamaşır makinesinin dijital ekranı"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda not defteri ve kalem"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda su giriş musluğu"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Whirlpool çamaşır makinen program ortasında durdu, ekranda bir **F** kodu ya da "musluk kapalı" gibi bir uyarı yanıyor. İnternette en çok sorulan kod F06, ama Whirlpool'un kılavuzlarında F06 için ayrı bir satır yok; kod bir gruba giriyor. Bu yazıda Whirlpool'un FSCR 90426 ve AWOE 9759 çamaşır makinesi kılavuzlarını ve FFB 8458 BV EE hızlı başvuru kılavuzunu (üçü de kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi) okuyup tabloyu topladık. Senin modelinde mesajlar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk kapalı ve filtreyi temizle uyarıları sende. Fod köpük, F24 fazla çamaşır ya da fazla su. F02 tabanda su sızıntısı, F20 ve F60 elektronik parça. F06 dahil diğer F kodları: Açma/Kapama en az üç saniye. Sürüyorsa fiş, musluk, servis.

## Kodlar ne söylüyor

FSCR 90426 kılavuzunun arıza tablosu, sebebi giderdikten sonra sorun sürerse **Açma/Kapama düğmesini en az üç saniye basılı tutmanı**, uyarı hâlâ duruyorsa musluğu kapatıp makineyi kapatmanı, fişini çekmeni ve servisi aramanı istiyor.

| Ekranda | Kılavuza göre anlamı | Kim |
|---|---|---|
| **Musluk kapalı** | Su yok ya da yetersiz | 🛠️ Sen |
| **Filtreyi temizle** | Atık su pompalanmıyor | 🛠️ Sen |
| **Kapak açık göstergesi yanıp sönüyor** | Kapak kilitlenemiyor | 🛠️ Sen |
| **FdL** (ya da **F29**) | Kapak kilidi açılamıyor | 🛠️ Sen, sonra servis |
| **Fod** | Aşırı köpük programı kesti | 🛠️ Sen |
| **F24** | Programa göre fazla çamaşır ya da fazla su girişi | 🛠️ Sen, sonra servis |
| **F02** | Su stop: alt tablada sızıntı | 🔧 Servis |
| **F20** ya da **F60** | Elektronik parça arızası | 🔧 Servis |
| **Diğer tüm F kodları** (F05, F06 dahil) | Elektrikli bileşen arızası | ⏳ Sıfırla, sonra servis |

AWOE 9759 kılavuzu da aynı mantıkta: F02 ile F35 arasındaki kodlar (F24 hariç) ve F40 ile F43 arası **"elektrik modülü arızası"**. Yani F06 iki belgede de tek tek tanımlanmıyor; elektrik tarafında bir arıza grubunun parçası.

## Adım adım: Whirlpool arıza kodunda ne yapılır

**1. Kodu not et.** Ekrandaki harf ve rakamları olduğu gibi yaz. Makineyi kapatmadan önce hangi ışığın yandığına da bak; servis bu bilgiyi isteyecek.

**2. Musluk kapalı.** Kılavuzun saydığı sebepler: musluk kapalı, giriş hortumunda bükülme, su basıncı düşük, giriş hortumundaki elek filtreler tıkalı ya da hortum donmuş. Musluğu aç, hortumu düzelt; sorun giderilince **Başlat/Duraklat** düğmesine bas. Kılavuz makinenin en az 5 °C ortamda kurulmasını da istiyor. Ayrıntı [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısında.

**3. Filtreyi temizle.** Bu uyarı atık suyun pompalanamadığını gösteriyor: tahliye hortumu bükülmüş, tıkanmış ya da donmuş; filtre ya da pompa tıkalı. Hortumu düzelt, sonra filtreyi kılavuzdaki gibi temizle: alt kapağı aç, altına sığ bir kap koy, filtreyi yavaşça saat yönünün tersine çevirerek suyu akıt, sonra filtreyi çıkarıp akan su altında yıka. Sıcak programdan sonra suyun soğumasını bekle. Yöntem [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısında.

**4. Fod: köpük.** Kılavuza göre aşırı köpük (çoğunlukla fazla deterjan) programı kesiyor ve bu birkaç kez tekrarlanabiliyor. Çözüm: **Durulama ve Sıkma** programını Yoğun Durulama seçeneğiyle başlat, deterjan üreticisinin dozuna uy ve filtrenin temiz olduğundan emin ol.

**5. F24: fazla çamaşır ya da fazla su.** Az yük kapasiteli bir programa fazla çamaşır konduysa Durulama ve Sıkma ile programı tamamla. Fazla su girişi varsa musluğu kapat, suyu boşaltmak için Açma/Kapama'yı en az üç saniye basılı tut ve ekranda "End" görünene kadar bekle. Musluğu yeniden açınca program başlatmadan makineye su akıyorsa kılavuz bunu elektrikli parça arızası sayıyor: musluğu kapat, fişi çek, servisi ara.

**6. F06 ve diğer F kodları.** Tablonun son satırı: **Tüm diğer F.. arızaları, elektrikli bir bileşenin arızası. Arızayı sıfırlamak için Açma/Kapama düğmesine en az 3 saniye basın.** Ayrı Reset tuşu olan eski modellerde (AWOE 9759) bu tuşa en az üç saniye basılıyor. FFB 8458 BV EE kılavuzu ise F-01 gibi bir kodla makine kilitliyse kapatıp fişi çekmeni ve yaklaşık bir dakika beklemeni istiyor. Sıfırlama ayrıntıları [Whirlpool çamaşır makinesi resetleme](/blog/whirlpool-camasir-makinesi-resetleme/) yazısında.

**7. Sürüyorsa servis.** Sıfırlamadan sonra kod dönüyorsa ya da ekranda **F20, F60** veya **F02** varsa makineyi kapat, fişini çek, musluğu kapat ve satış sonrası servisi ara. F02'de kılavuz alt tablada su sızıntısı algılandığını yazıyor.

## Kod çıkmadan da arıza olabilir

Kılavuzun genel sorun giderme tablosu kodsuz belirtileri de sayıyor. Başlat/Duraklat'a basıldığı hâlde makine başlamıyorsa kapak tam kapanmamış ya da tuş kilidi açık olabilir. Sıkma hızı göstergesinde "0" yanıp sönüyorsa yük dengesizliği sıkmayı engellemiş; bu durum [Whirlpool çamaşır makinesi sıkma yapmıyor](/blog/whirlpool-camasir-makinesi-sikma-yapmiyor/) yazısında. Kapak açılmıyorsa [Whirlpool çamaşır makinesi kapağı açılmıyor](/blog/whirlpool-camasir-makinesi-kapagi-acilmiyor/) yazısına bak. Markadan bağımsız liste [çamaşır makinesi hata kodları](/blog/camasir-makinesi-hata-kodlari/) sayfasında.

## Ne zaman servis

- Sıfırlamadan sonra aynı F kodu dönüyorsa
- F02, F20 ya da F60 görünüyorsa
- Program başlatılmadan makineye su akıyorsa
- Makinenin altında su birikiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumlar, filtre ve sıfırlama sende; elektronik kart, motor, pompa, kapak kilidi ve makinenin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin ne (tanıtım levhasında yazar)?
2. Ekranda tam olarak hangi kod var?
3. Musluk açık, filtre temiz mi?
4. Açma/Kapama'yı en az üç saniye basılı tuttun mu?
5. Fişi çekip bir dakika bekledikten sonra kod döndü mü?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
