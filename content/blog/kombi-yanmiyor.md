---
title: "Kombi yanmıyor / ateşlemiyor: nedenleri ve kontroller"
description: "Kombin yanmıyor, ateşleme yapmıyor mu? Gaz vanası, elektrik, su basıncı ve reset: üretici kılavuzlarındaki kontroller, ateşleme kodları ve servis sınırı."
slug: "kombi-yanmiyor"
date: "2026-06-19"
updated: "2026-09-17"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 17 Eyl 2026 — ÜRETİCİ BELGESİYLE YENİDEN DOĞRULANDI (YK #88). Belgeler curl -sL ile indirildi, pdftotext ile okundu.
# 1) E.C.A. Proteus Premix Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf
#    HTTP 200 · 48 sf · md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    gaz kokusu emniyet kuralları s.5 · su doldurma 1,5-2 bar (sistem soğukken), vanayı kapat, sık düşerse su kaçağı s.25
#    · Reset 1 kez s.26 · E01 Ateşleme Hatası "Kombiye gaz gitmiyor" s.29 · F13 1 saatte 5'ten fazla reset s.30
# 2) E.C.A. Confeo Premix Kullanma ve Montaj Kılavuzu (7006991302-5.0)
#    https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf
#    HTTP 200 · 44 sf · md5 4ef56163ac14c46f9cb1dcb9ea189681
#    düşük su basınç emniyeti 0,4 bar s.7 · 1,5-2 bar s.22 · E01 Ateşleme Arızası s.27 · F37 (0,4 bar) s.29
# 3) E.C.A. Citius Premix Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf
#    HTTP 200 · 40 sf · md5 023164f7b7cebedc931411900edd72b0
#    1,5-2 bar s.21 · E01 Ateşleme Hatası s.25
# 4) Bosch Condens 2200i W Kullanma Kılavuzu 6721839341 (2023/04)
#    https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721839341.pdf
#    HTTP 200 · 12 sf · md5 e06a7d8792003fe41f2a63b08204887b
#    gaz kokusu s.3 · işletme basıncı 1-2 bar, daha yüksek gerekiyorsa servisten öğren, doldurmayı servis göstersin,
#    yalnız soğukken doldur, reset (kapat-aç ya da iki tuş), servise kod + tip etiketi bilgisi s.9
# 5) DemirDöküm Atron Condense Kullanma Kılavuzu 0020281171_00
#    https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 12 sf · md5 7746b6a9d980072b5109b1b27926bd81
#    kılavuzdaki işler dışında değişiklik yapma, atık gaz kokusu s.3 · vanaların yerini servisten öğren s.7
#    · 1,0-2,0 bar, <0,80 bar doldur, çok katlı tesisat s.7-8 · yoğuşma suyu gider hattı kontrolü s.9
#    · "Ürün çalışmıyor" tablosu (gaz vanaları, elektrik/sigorta, ürün kapalı, sıcaklık ayarı, F10, F04, F05) s.10
# 6) Vaillant ecoTEC pure Kullanma Kılavuzu 0020231736_01
#    https://www.vaillant.com.tr/pdf/ecotec-pure-kullanm-klavuzu-1099614.pdf
#    HTTP 200 · 20 sf · md5 4a40080e85860d29faf39771b38855b4
#    gaz ve atık gaz kokusu s.4 · 0,80-2,0 bar, <0,80 doldur, <0,5 bar arıza konumu s.12 · "Ürün çalışmıyor" tablosu
#    + F.28 (üç başarısız deneme, gaz vanası, reset >3 sn, üç denemede geçmezse bayi) s.17
# 7) Vaillant ecoTEC intro VUW 24/24 AS/2-1 Kullanma Kılavuzu 8000037574_01
#    https://www.vaillant.com.tr/downloads/ecotec-intro-kullanm-klavuzu-3050427.pdf
#    HTTP 200 · 16 sf · md5 ec496873b94ac3277a9f095e39a8a636
#    yoğuşma suyu gider hattı s.10 · F.28 Ateşleme başarısız + "Ürün çalışmıyor" tablosu s.12
# 8) Baymak Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0
#    basınç düşmesi sık tekrarlanıyorsa servis s.14 · "Su basıncı 0,5 barın altına düşerse kombi çalışmaz." s.15 · E01 Başarısız ateşleme s.17
# 9) DemirDöküm Nitromix Montaj ve Bakım Kılavuzu 0020309469_02
#    https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf
#    HTTP 200 · 40 sf · md5 bdff16276288ebddd6c6cbf82d47c864
#    F.28 Ateşleme başarısız ve olası nedenleri (gaz kesme vanası, gaz giriş basıncı, yoğuşma suyu gider hattı,
#    gaz armatürü, ateşleme sistemi, topraklama, elektronik) s.31-32
# 10) DemirDöküm ademiX Montaj ve Bakım Kılavuzu 0020313926_02
#    https://www.demirdokum.com.tr/products-2/a5-1/ademix-mk-0020313926-02-2323451.pdf
#    HTTP 200 · 44 sf · md5 5bc84f7e4bc6a4fe70867bd0682dbb9e · F.28 Ateşleme başarısız s.34
# Belgede olmadığı için ÇIKARILDI: "1-1.5 bar" (hiçbir belgede bu aralık yok) · "çoğu kombi 0,5 barın altında yanmaz"
#   (yalnız Baymak Duotec Compact 24 için belgeli, modele atfedildi) · "en sık" · kontör/ön ödemeli sayaç adımı
#   · "ocak gibi başka bir gaz cihazını dene" · "prosestat" / baca basınç anahtarı · "kıvılcım oluşmaz" · "valf açılmazsa
#   brülöre gaz gitmez" · "reset tuşuna birkaç saniye bas" · "yanık kokusu, anormal ses" · "doğalgaz acil hattı" ifadesi
#   (yerine ECA'nın 187 maddesi birebir).
faq:
  - q: "Kombi neden yanmaz / ateşlemez?"
    a: "Kombi kılavuzlarının saydığı nedenler: gaz vanasının kapalı olması ya da kombiye gaz gitmemesi, elektrik kesintisi ya da kombinin kapalı olması, çok düşük sıcaklık ayarı, düşük su basıncı ve başarısız ateşleme. Gaz giriş basıncı, gaz armatürü, ateşleme sistemi, tıkalı yoğuşma suyu gider hattı ve elektronik kart ise yetkili servisin kontrol ettiği nedenlerdir."
  - q: "Kombi ateşlemiyor, kendim ne kontrol edebilirim?"
    a: "Kılavuzların kullanıcıya bıraktığı kontroller: elektriğin gelip gelmediği ve kombinin açık olduğu, kombideki ve tesisattaki gaz vanalarının açık olduğu, sıcaklık ayarları, su basıncı ve reset. Su basıncının doğru aralığı modele göre değişir; örneğin ECA Premix kombilerde sistem soğukken 1,5–2 bar, Bosch Condens 2200i W'de 1–2 bar. Kendi kombinin kılavuzundaki değere bak ve suyu yalnız kombi soğukken ekle. Resetten sonra kod geri geliyorsa servisi ara; gazla ilgili parçalara müdahale etme."
  - q: "Kombi yanmama hata kodu verir mi?"
    a: "Evet, kılavuzlarda ateşleme arızasının kendi kodu var: Vaillant ecoTEC pure ile DemirDöküm Nitromix ve ademiX'te F.28 (ateşleme başarısız), Baymak Duotec Compact 24'te E01 (başarısız ateşleme), ECA Proteus, Confeo ve Citius Premix'te E01, DemirDöküm Atron Condense'te F04. Kodun kendi modelindeki anlamı için kombinin kılavuzuna ya da marka rehberlerimize bakabilirsin."
  - q: "Tamiri kaç para?"
    a: "Arızaya göre değişir: ateşleme elektrodu, gaz valfi, fan ve elektronik kart çok farklı işlerdir. Kesin tahmini cihazına göre Benservis'ten ücretsiz al."
images:
  coverAlt: "Kombi çizimi ve yanında sönük, kesik çizgiyle gösterilen alev"
---

Kombin çalışmıyor: sıcak su yok, ısıtma soğuk — kombi **yanmıyor ya da ateşleme yapmıyor**. Kombi kılavuzları bu durum için kullanıcıya birkaç basit kontrol veriyor: gaz vanası, elektrik, sıcaklık ayarı, su basıncı ve reset. Bu yazıda bu kontrolleri, ekranda görebileceğin ateşleme kodlarını ve işin servise kaldığı yeri anlatıyoruz. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🔥 **Güvenlik:** Kombi gazla çalışır. Yalnız kombinin kullanma kılavuzunda anlatılan işleri yap: gaz vanasının açık olduğuna bakmak, su basıncını kontrol edip gerekirse su eklemek ve reset. Kombinin kendisinde, gaz, su, elektrik ve atık gaz (baca) hatlarında değişiklik yapma — bunlar yetkili servisin işi.

## Kombi neden yanmaz? Olası nedenler

**1. Gaz vanası kapalı ya da kombiye gaz gitmiyor.** Kombinin üzerindeki ya da tesisattaki gaz kesme vanası kapalıysa kombi çalışmaz. ECA kılavuzu ateşleme hatasının nedenini "Kombiye gaz gitmiyor." diye yazıyor.

**2. Elektrik yok ya da kombi kapalı.** Binadaki elektrik kesildiyse ya da kombi kapatıldıysa cihaz çalışmaz. Elektrik geri geldiğinde kombi kendiliğinden yeniden çalışmaya başlar.

**3. Sıcaklık ayarı çok düşük ya da ısıtma kapalı.** Gidiş suyu ya da sıcak su sıcaklığı çok düşük ayarlanmışsa veya ısıtma konumu kapalıysa kombi ısıtmaz.

**4. Düşük su basıncı.** Basınç kombinin alt sınırının altına inince kombi arıza verir. Bu sınır modele göre değişir: Baymak Duotec Compact 24 kılavuzu "Su basıncı 0,5 barın altına düşerse kombi çalışmaz." diyor; Vaillant ecoTEC pure 0,5 barın altında arıza konumuna geçiyor; ECA Confeo Premix'te düşük su basıncı hatası (F37) 0,4 barda çıkıyor.

**5. Ateşleme başarısız.** Kombi art arda ateşleyemezse arıza konumuna geçer ve ekranda ateşleme kodu görünür. Vaillant ecoTEC pure'da bu, üç başarısız ateşleme denemesinden sonra olur.

**6. Servisin bakacağı nedenler.** Montaj ve bakım kılavuzlarının ateşleme arızası tablosunda gaz vanası dışında şunlar da var: gaz giriş basıncının çok düşük olması, yoğuşma suyu gider hattının tıkalı olması, gaz armatürü, ateşleme sistemi, topraklama ve elektronik kart. Atık gaz (baca) hattındaki bir arıza da ayrı bir kodla görünür (DemirDöküm Atron Condense'te F05). Bunların kontrolü yetkili servisin işidir.

## Servisi aramadan önce kendin kontrol et

Kılavuzların kullanıcıya bıraktığı kontroller:
1. **Elektrik ve açma düğmesi.** Binada elektrik kesintisi varsa sigortayı kontrol et; kombi kapalıysa çalıştır.
2. **Gaz vanaları.** Kombideki gaz kesme vanasının ve tesisattaki gaz vanasının ikisinin de açık olduğuna bak. Vanaların yerini bilmiyorsan kombiyi kuran yetkili servisten öğren. ECA kılavuzu ateşleme hatasında hatta gaz olup olmadığının da kontrol edilmesini istiyor.
3. **Sıcaklık ayarları.** Isıtma konumunun açık olduğuna, gidiş suyu ve sıcak su sıcaklığının çok düşük ayarlanmadığına bak.
4. **Su basıncı.** Göstergedeki değeri kombinin kılavuzundaki aralıkla karşılaştır. Aralık modele göre değişiyor:
   - ECA Proteus, Confeo ve Citius Premix: sistem soğukken 1,5–2 bar
   - Bosch Condens 2200i W: normal durumda 1–2 bar
   - DemirDöküm Atron Condense: 1,0–2,0 bar; 0,80 barın altındaysa doldur
   - Vaillant ecoTEC pure: 0,80–2,0 bar; 0,80 barın altındaysa doldur

   Suyu yalnız kombi soğukken ve kılavuzun tarif ettiği şekilde ekle; iş bitince doldurma vanasını mutlaka kapat. Doldurmanın nasıl yapıldığını bilmiyorsan yetkili servisten göstermesini iste. Tesisat birden fazla kata yayılıyorsa daha yüksek bir basınç gerekebilir; bu değeri de servisten öğren.
5. **Yoğuşma suyu gider hattı (yoğuşmalı kombi).** Gider hattına ve gider hunisine bak. Görünür bir tıkanıklık varsa yetkili servise giderttir.
6. **Reset.** Ekranda arıza kodu varsa kombiyi kılavuzundaki yolla resetle. Yol markaya göre değişir: ECA'da reset tuşuna bir kez basılır; Vaillant ecoTEC pure'da reset tuşu 3 saniyeden uzun basılı tutulur; Bosch Condens 2200i W'de cihaz kapatılıp yeniden çalıştırılır ya da kılavuzdaki iki tuş birlikte basılı tutulur. Kod geri geliyorsa resete devam etme: Vaillant ecoTEC pure ve DemirDöküm Atron Condense kılavuzları üç denemede geçmeyen ateşleme arızası için servise başvurmayı söylüyor; ECA Proteus Premix'te bir saat içinde 5'ten fazla reset ayrıca bir arıza kodu (F13) veriyor.
7. **Kodu ve cihaz bilgilerini not al.** Servisi ararken ekrandaki kodu, cihazın adını ve seri numarasını bildir. Bosch Condens 2200i W'de bu bilgiler kumanda paneli kapağındaki tip etiketinde yazılı.

## Ateşleme arızası hangi kodla görünür?

- **Vaillant** ecoTEC pure ve ecoTEC intro: **F.28** — ateşleme başarısız
- **DemirDöküm** Nitromix ve ademiX: **F.28** — ateşleme başarısız · Atron Condense: **F04**
- **Baymak** Duotec Compact 24: **E01** — başarısız ateşleme
- **ECA** Proteus, Confeo ve Citius Premix: **E01** — ateşleme hatası

Kodun kendi modelindeki anlamı için kombinin kullanma kılavuzuna ya da aşağıdaki marka rehberlerine bak.

## Gaz kokusu alırsan

E.C.A. kullanma kılavuzundaki emniyet kuralları gaz kokusu hissedildiğinde şunları söylüyor:

- Cihazın gaz vanasını ve gaz ile çalışan diğer tüm cihazların vanalarını kapatın.
- Ocak, fırın vb. cihazları kapatarak alevlerini söndürün.
- Kibrit, çakmak vb. yakmayın sigaranızı söndürün.
- Kapı ve pencerelerinizi açarak bulunduğunuz ortamı havalandırın.
- Elektrikli cihazlarınızın düğmelerine ve fişlerine kesinlikle dokunmayın.
- Daire ve bina girişindeki gaz vanalarını kapatın.
- Gaz kokusu olan ortamlardaki telefonları kullanmayın.
- Zaman kaybetmeden 187 nolu telefondan gaz şirketine haber verin ve durumu en yakın yetkili servise bildirin.

## Ne zaman mutlaka servis çağırmalısın?

- Gaz vanaları açık, su basıncı kılavuzdaki aralıkta olduğu ve resetlediğin hâlde kombi **hâlâ yanmıyorsa** ya da ateşleme kodu geri geliyorsa
- Su basıncı **sık sık düşüyorsa** (tesisatta su kaçağı olabilir)
- Yoğuşma suyu gider hattında **tıkanıklık** görürsen
- **Atık gaz (baca gazı) kokusu** alırsan → erişebildiğin tüm kapı ve pencereleri açıp cereyan yap, kombiyi kapat, yetkili servisi bilgilendir

## Tamir maliyeti ne kadar olur?

Bu arızanın maliyeti markaya, modele ve gerçek arızaya göre değişir; bu sayfada aralık vermiyoruz. **[Cihazına göre tahmini maliyeti ücretsiz öğren →](/)** Belirtiyi yaz, olası arızayı ve tahmini maliyeti saniyede gör.

İlgili: [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [Kombi basıncı kaç olmalı?](/blog/kombi-basinci-kac-olmali/) · [Kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) · [Kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/) · [Petekler ısınmıyor](/blog/petekler-isinmiyor/)

## Sık sorulan sorular

**Kombi neden yanmaz?**
Gaz vanası kapalı ya da kombiye gaz gitmiyor, elektrik yok ya da kombi kapalı, sıcaklık ayarı çok düşük, su basıncı düşük ya da ateşleme başarısız.

**Kendim ne kontrol edebilirim?**
Elektrik, gaz vanaları, sıcaklık ayarları, su basıncı (kombinin kılavuzundaki aralık) ve reset. Gaz parçalarına dokunma.

**Hata kodu verir mi?**
Evet (Vaillant F.28, Baymak E01, ECA E01…); marka rehberlerine bak.

**Tamiri kaç para?**
Arızaya göre değişir; kesin tahmini cihazına göre [Benservis'ten ücretsiz al](/).
