---
title: "AEG bulaşık makinesi su almıyor: musluk, hortum, i10"
description: "AEG bulaşık makinesi su almıyor mu? Gecikmeli başlatma, reçine yenileme, musluk, su basıncı, giriş hortumu ve filtresi: AEG kılavuzundaki kontrol sırası."
slug: "aeg-bulasik-makinesi-su-almiyor"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X5 yedekler, çatal B). origin/main (7481159) content/blog/'da bu slug ve "AEG bulaşık ... su almıyor" başlığı yok.
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "aeg bulaşık makinesi su" → 1. "aeg bulaşık makinesi su almıyor"; "aeg bulaşık makinesi s" → 3. aynı. GSC: Sorgular.csv'lerde "aeg" satırı yok.
# Belge (#88). Zincir: https://www.aeg.co.uk/support/user-manuals/?q=911434668 (FSE73727P, PNC 911 434 668; yerleşik tarayıcı 200, api 200)
#   → https://electrolux.bynder.com/asset/a8a328ca-93f2-42fa-8a16-cd1b7590a91e/241217V37I-pdf.pdf (curl 200, application/pdf)
#  (B) AEG 7000 GlassCare FSE73727P bulaşık makinesi kullanım kılavuzu, EN, 52 s., md5 674698ccd07b3cded91fc0feefd0cc34 — s.4, 5, 13, 14, 16, 21, 22, 24
#  Kılavuzun İngilizce baskısı; alıntılar Türkçeye çevrildi, orijinaller KAYNAK'ta.
# Hub ilişkisi: i10/i11 satırı main'deki aeg-bulasik-makinesi-ariza-kodlari'nda tablo satırı; bu sayfa belirti sorgusu ("su almıyor"), kod tablosu kopyalanmadı, i10 tekil sayfası değil.
# BİLEREK YAZILMAYANLAR: su giriş valfi / AquaControl hortumu onarımı · hortum filtresinin söküm tarifi (kılavuzun bu bölümünde yok; yalnız "tıkalı olmasın") · basınç ölçümü · kart teşhisi · fiyat (#46).
# Alıntı denetimi: aeg-bulasik-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez", "Küçük bir kova", "Makinenin kullanım kılavuzu"]
steps:
  - "Kapının tam kapalı olduğunu, gecikmeli başlatmanın kurulu olmadığını kontrol et; ilk dakikalardaki sessizlik reçine yenilemesi olabilir."
  - "Musluğun açık olduğunu kontrol et; kılavuz her yıkamada önce musluğu açıp sonda kapatmanı istiyor."
  - "Musluğun tıkalı olmadığını ve evdeki su basıncının düşük olmadığını diğer musluklarla karşılaştır."
  - "Giriş hortumunun arkada ezilmediğini, bükülmediğini ve hasarlı olmadığını kontrol et."
  - "Fişi çek, musluğu kapat ve giriş hortumundaki filtrenin tıkalı olmadığına bak."
  - "Ekranda i30 varsa musluğu kapat; taşma koruması devrede, sepet yerleşimini ve kurulumu kontrol et."
  - "Programı iptal edip makineyi kapat-aç ve yeniden başlat; sorun sürerse yetkili servisi ara."
faq:
  - q: "AEG bulaşık makinem neden su almaz?"
    a: "AEG'nin kılavuzu su almama için şu nedenleri sayıyor: musluk kapalı ya da tıkalı, şebeke basıncı çok düşük, giriş hortumundaki filtre tıkalı, hortumda büküm var. Bu durumda ekran çoğu zaman i10 ya da i11 gösteriyor."
  - q: "Makine çalıştı ama birkaç dakika su sesi gelmiyor, arıza mı?"
    a: "Olmayabilir. FSE73727P kılavuzuna göre program başladıktan sonra makine su yumuşatıcısındaki reçineyi yaklaşık 5 dakika yeniliyor ve yıkama aşaması ancak bu işlem bitince başlıyor. İşlem ara ara tekrarlanıyor."
  - q: "i10 ile i30 aynı şey mi?"
    a: "Hayır. Kılavuzda i10 ve i11 makinenin su almadığını, i30 ise taşma önleme düzeneğinin devreye girdiğini gösteriyor. i30'da önce musluğu kapatman isteniyor."
  - q: "Su basıncı ne kadar olmalı?"
    a: "FSE73727P kılavuzu çalışma basıncını en az 0,05 MPa (0,5 bar), en çok 1 MPa (10 bar) olarak veriyor. Basıncın düşük olduğundan şüpheleniyorsan kılavuz yerel su idaresine danışmanı öneriyor."
  - q: "Giriş hortumu hasarlıysa kendim değiştirebilir miyim?"
    a: "Kılavuz bunu yetkili servise bırakıyor: hasarlı giriş hortumunda musluğu hemen kapatıp fişi çekmeni ve hortumun değişimi için yetkili servise başvurmanı istiyor. Hortumun içinde bir güvenlik valfi ve elektrik kablosu bulunuyor."
images:
  coverAlt: "Mutfak tezgâhının altına yerleştirilmiş, kapağı kapalı ankastre bir bulaşık makinesi"
  steps:
    - "Kapağı tam kapatılmış bir bulaşık makinesinin üst kenarındaki kontrol paneli"
    - "Lavabo altında açık konumda duran bir su musluğu"
    - "Mutfak lavabosunda akan ince bir su"
    - "Bulaşık makinesinin arkasından lavabo altına uzanan esnek giriş hortumu"
    - "Musluk bağlantısında duran bir giriş hortumu ucu ve altında küçük bir kova"
    - "Lavabo altında kapatılmış bir su musluğu ve yanında kuru bir bez"
    - "Kapağı açık, sepetleri düzenli yerleştirilmiş bir bulaşık makinesi"
---

AEG bulaşık makinesini doldurdun, programı seçtin, kapağı kapattın; ama makinenin içinden su sesi gelmiyor ya da bir süre sonra ekranda **i10** veya **i11** beliriyor. AEG'nin kılavuzu bu belirtinin nedenlerini neredeyse tamamen musluk, şebeke basıncı ve giriş hortumu tarafında arıyor. Bu yazıda AEG'nin İngiltere sitesindeki kılavuz sayfasından indirdiğimiz **7000 GlassCare (FSE73727P)** kılavuzunun İngilizce baskısını kullandık; alıntılar bizim çevirimiz. Tuş adları ve göstergeler modele göre değişebilir.

Olası arızayı benservis.com'daki ücretsiz teşhisten öğrenebilirsin.

> ⚡ **Kısa özet:** Önce programın gerçekten başladığından emin ol: kapak, gecikmeli başlatma ve beş dakikalık reçine yenilemesi. Sonra musluk, basınç, giriş hortumu ve hortumdaki filtre. i30 görüyorsan musluğu kapat. Bunlar temiz olduğu hâlde su gelmiyorsa yetkili servis.

## Önce: gerçekten su almıyor mu?

Su almama bazen programın henüz yıkamaya geçmemesidir. Kılavuzun "program başlamıyor" satırı üç şey sayıyor: kapak tam kapalı olmalı; gecikmeli başlatma kuruluysa ya iptal edilmeli ya da geri sayımın bitmesi beklenmeli; makine su yumuşatıcısının reçinesini yeniliyorsa yaklaşık 5 dakika beklenmeli. AEG'ye göre bu yenileme program başladıktan sonra yapılıyor, yıkama aşaması işlem bitince başlıyor ve işlem ara ara tekrarlanıyor. Yani ilk dakikalardaki sessizlik tek başına arıza işareti değil.

Geri sayım sırasında kapağı açarsan sayım duruyor, kapağı kapatınca kaldığı yerden sürüyor. Programın ortasında kapağı açmak da yıkamayı duraklatıyor. Bir de Auto Off işlevi var: kılavuza göre program seçilip başlatılmazsa makine 5 dakika sonra kendini kapatıyor. Ekran sönmüşse makine su almıyor değil, hiç başlamamış olabilir.

## Adım adım: evde denenecekler

**1. Başlatma koşullarını kontrol et.** Kapağın tam kapandığından emin ol. Ekranda geri sayım görüyorsan gecikmeli başlatma kurulu demektir; iptal etmek için kılavuz açma-kapama düğmesini yaklaşık 3 saniye basılı tutmanı söylüyor, sonra programı yeniden seçmen gerekiyor. Program yeni başladıysa reçine yenilemesi için birkaç dakika bekle.

**2. Musluğu kontrol et.** AEG'nin günlük kullanım sırası musluğu açmakla başlıyor ve program bitince musluğu kapatmakla bitiyor. Bu alışkanlıkla musluk bir önceki yıkamadan kapalı kalmış olabilir (çıkarım). i10 satırının ilk maddesi de musluğun açık olması.

**3. Musluk ve basınç.** Kılavuz musluğun tıkalı olmamasını ve şebeke basıncının çok düşük olmamasını istiyor; basınç bilgisi için yerel su idaresine danışmanı öneriyor. Teknik verilerde çalışma basıncı en az 0,5, en çok 10 bar. Evdeki diğer musluklarda da su zayıf akıyorsa sorun büyük olasılıkla makinede değil şebekede (çıkarım).

**4. Giriş hortumunu incele.** Hortumda büküm ya da ezilme olmamalı. Makine dolabın içine itilirken hortum arkada katlanmış olabilir. Hortumda gözle görülür bir hasar varsa kılavuzun güvenlik bölümüne göre musluğu hemen kapat, fişi çek ve hortumun değişimi için yetkili servisi ara; bu hortumun içinde bir güvenlik valfi ve elektrik kablosu bulunuyor, kesme ya da yamama.

**5. Hortumdaki filtreye bak.** Kılavuz giriş hortumundaki filtrenin tıkalı olmamasını istiyor ama sökme tarifini bu bölümde vermiyor. Fişi çek, musluğu kapat; hortum musluktan ayrılabiliyorsa ucundaki süzgeci kontrol et ve tortu varsa akan suyla temizle (çıkarım). Hortum ucunda sökülemeyen bir koruma kutusu varsa zorlama.

**6. i30 görüyorsan musluğu kapat.** Bu kod su almamakla karıştırılabiliyor. Kılavuza göre i30, taşma önleme düzeneğinin devrede olduğunu gösteriyor; ilk iş musluğu kapatmak, sonra makinenin doğru kurulduğunu ve sepetlerin kılavuza göre yerleştirildiğini kontrol etmek. Bu kod kapat-aç sonrası geri geliyorsa servis.

**7. Kapat-aç ve yeniden dene.** Çalışan bir programı iptal etmek için de açma-kapama düğmesini yaklaşık 3 saniye basılı tutuyorsun; makine program seçimine dönüyor. Kılavuz yeni programa başlamadan önce deterjan gözünde deterjan olduğundan emin olmanı hatırlatıyor. AEG'nin genel kuralı şu: kontrolden sonra makineyi kapatıp aç, sorun yeniden çıkarsa yetkili servise başvur.

## Yeni tesisat ya da uzun aradan sonra

Kılavuzun su bağlantısı bölümü yeni borulara, uzun süre kullanılmamış borulara, onarım yapılmış ya da su sayacı gibi yeni bir parça takılmış tesisata bağlamadan önce suyu temiz ve berrak akana kadar akıtmanı istiyor. Borudaki tortu hortum filtresini tıkayabilir (çıkarım). İlk kullanımda ve sonrasında görünür bir sızıntı olmadığını da kontrol et. Makineye gelen suyun sıcaklığı 60 °C'yi aşmamalı; kılavuz soğuk ya da en çok 60 °C sıcak su kabul ediyor.

## Ne zaman servis

- Musluk, basınç, hortum ve filtre temiz olduğu hâlde i10 ya da i11 sürüyorsa
- i30 kapat-aç sonrası geri geliyorsa ya da makinenin altından su geliyorsa
- Giriş hortumunda hasar varsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumun konumu ve hortum filtresi sende; giriş hortumunun değişimi, su giriş valfi, seviye algılayıcısı ve elektronik kart AEG yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Ekranda i10, i11 mi, i30 mu var?
2. Diğer musluklarda su basıncı normal mi?
3. Hortum bükülmüş ya da hasarlı mı?
4. Bilgi etiketindeki model ve ürün numarası ne?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Tüm kodların listesi için [AEG bulaşık makinesi arıza kodları](/blog/aeg-bulasik-makinesi-ariza-kodlari/), kapat-aç ve program iptali için [AEG bulaşık makinesi resetleme](/blog/aeg-bulasik-makinesi-resetleme/), marka fark etmeksizin anlatım için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) sayfasına bak. Bil, gör, çağır.
