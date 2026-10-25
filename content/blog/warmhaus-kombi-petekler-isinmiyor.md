---
title: "Warmhaus kombi petekler ısınmıyor: kış ayarı ve vanalar"
description: "Warmhaus kombi petekleri ısıtmıyorsa kılavuzun sırası: kış konumu, radyatör sıcaklığı, oda termostatı, vanalar, 1–1,5 bar basınç, kod ve servis."
slug: "warmhaus-kombi-petekler-isinmiyor"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, alt ajan C). origin/main'de warmhaus-kombi-petek* / -kalorifer* yok; Warmhaus'ta yalnız
#   warmhaus-kombi-hata-kodlari (Glowa Er kod tablosu, hub; bu yazı tabloyu kopyalamaz, bağlanır). Genel sayfa: petekler-isinmiyor.
#   Dalga 2/3/6/7 klasörlerinde Warmhaus petek/kalorifer slug'ı yok. Viessmann sıcak su ayarı yerine yedek konu (Viessmann belge sunucusu 503).
# Arama kanıtı (25 Eki 2026, Google TR otomatik tamamlama): "warmhaus kombi p" → 1. "warmhaus kombi petek kapatma", 2. "…petekler nasıl açılır",
#   3. "…petekler ısınmıyor"; "warmhaus kombi ı" → 3. "warmhaus kombi ısıtmıyor", 9. "…petekler ısınmıyor". GSC (www-5 / www-6): Warmhaus satırı yok.
# Belge zinciri (bu koşuda, curl -sL -A "Mozilla/5.0"):
#  warmhaus.com/tr/urunler/kombiler/yogusmali-kombiler/warmhaus-glowa-yogusmali-kombi (200) →
#   (W1) warmhaus.com/storage/product/March2026/warmhaus-glowa-montaj-ve-kullanim-kilavuzu-tr.pdf  200 application/pdf  md5 9018b4be5bb22670e55cdca77229d794
#  …/warmhaus-ewa-20-yogusmali-kombi (200) → (W2) …/March2026/ewa-montaj-ve-kullanim-kilavuzu-tr-2026.pdf  200  md5 35f4901f377450b0b76f58c7c6fca462
# Gaz kokusu W1 s.24 · kullanım öncesi kontroller ve 1–1,5 bar W1 s.24 · kış/yaz konumu ve semboller W1 s.25–26, W2 s.19–20 · radyatör 25–80 °C
#   ve yerden ısıtma W2 s.20 · oda termostatı rc W1 s.27 · E07/E09/E20 vanalar ve "en az 3 metrelik radyatör" W2 s.23–24 · Er 02/Er 03 W1 s.29
#   · doldurma ve hava alma kurulum bölümünde W1 s.10 · radyatör kısma ve mobilya W2 s.27 · termostatik vana notu W1 s.10.
# BİLEREK YAZILMAYANLAR: radyatör hava alma ve su doldurmayı kullanıcı adımı yapmak (kılavuzda kurulum personeli bölümünde) · Ewa hava tahliye
#   fonksiyonu tuş yolu (parametre bölümünde, kullanıcıya açık talimat değil) · pompa, üç yollu vana teşhisi · fiyat (#46).
# Alıntı denetim tablosu: warmhaus-kombi-petekler-isinmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa gaz vanalarını kapat, elektrik düğmelerine dokunma, kıvılcım çıkaracak bir şey yapma ve gaz şirketini ya da yetkili servisi ara."
  - "Ekranda radyatör sembolünün olup olmadığına bak; yalnız musluk varsa kombi yaz konumundadır, mod düğmesiyle kış konumuna geç."
  - "Radyatör sıcaklık ayarını kontrol et; değer en alta indirilmişse yükselt."
  - "Bağlı bir oda termostatı varsa açık konumda olduğunu ve ortam sıcaklığından yüksek bir değere ayarlı olduğunu kontrol et."
  - "Kombinin altındaki ısıtma vanalarının ve petek vanalarının açık olduğunu kontrol et."
  - "Kombinin altındaki manometrede basıncın 1 ile 1,5 bar arasında olduğuna bak; düşükse doldurmayı yetkili servise bırak."
  - "Ekranda Er ya da E ile başlayan bir kod varsa kodu not al ve sıfırlama düğmesine bir kez bas; kod geri gelirse yetkili servisi ara."
faq:
  - q: "Warmhaus kombi sıcak su veriyor ama petekler ısınmıyor, neden?"
    a: "En sık sebep konum. Warmhaus kılavuzlarına göre yaz konumunda kombi yalnız kullanım sıcak suyunu ısıtır; kış konumunda hem ortamı ısıtır hem sıcak su verir. Ekranda yalnız musluk sembolü varsa kombi yazdadır. Mod düğmesiyle kışa geç; ekranda musluk ve radyatör sembolleri birlikte görünmeli."
  - q: "Warmhaus kombide petekleri nasıl açarım?"
    a: "Kombi tarafında petek ısıtması kış konumuyla açılır. Glowa'da mod düğmesi kış, yaz ve kapalı konumları arasında geçiş yapıyor. Ewa'da MODE butonunu basılı tutuyorsun, ekrandaki döngü tamamlanınca bırakıyorsun ve kombi önce kalorifer konumuna geçiyor. Sonra radyatör sıcaklığını ayar düğmesiyle seçiyorsun."
  - q: "Radyatör sıcaklığı kaç derece olmalı?"
    a: "Ewa kılavuzunda kalorifer sıcaklığı 25 ile 80 °C arasında ayarlanıyor. Yerden ısıtma varsa yetkili servis kombiyi düşük sıcaklık işletimine ayarlamış olur ve üst sınır daha düşük kalır; kılavuzun örneği en fazla 47 °C. Petekler ılıksa önce bu değerin alt sınıra yakın olup olmadığına bak."
  - q: "Bazı petekleri kapattım, sorun olur mu?"
    a: "Olabilir. Ewa'nın arıza tablosunda E07, E09 ve E20 gibi kodlarda çözümün bir adımı tüm radyatör vanalarının açık olup olmadığına bakmak ve kılavuzun ifadesiyle en az 3 metrelik radyatörün açık kalması. Çok sayıda petek kapalıysa kombinin dolaşım ve aşırı sıcaklık kodlarına düşme ihtimali var."
  - q: "Basınç düşük, su ekleyebilir miyim?"
    a: "Warmhaus kılavuzlarında tesisatın doldurulması ve radyatörlerin havasının alınması kurulum personeli bölümünde anlatılıyor. Kullanıcıdan beklenen, manometrede 1 ile 1,5 bar arası basıncı görmek. Basınç düşükse ya da ekranda düşük basınç kodu varsa doldurmayı yetkili servise bırak."
images:
  coverAlt: "Soğuk duran beyaz bir radyatör ve arka planda duvara asılı bir kombi"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Kombi ekranında yan yana duran musluk ve radyatör simgeleri"
    - "Kombi panelinde radyatör simgeli bir sıcaklık ayar düğmesi"
    - "Duvarda asılı küçük, beyaz bir oda termostatı"
    - "Bir radyatörün yanında duran beyaz başlıklı bir vana"
    - "Kombinin altında yuvarlak kadranlı bir basınç göstergesi"
    - "Kombi ekranında yanıp sönen kısa bir uyarı yazısı"
---

Kış geldi, kombi çalışıyor, musluktan sıcak su da geliyor ama petekler soğuk ya da ılık. Warmhaus'un Glowa ve Ewa montaj ve kullanım kılavuzları bu durumda bakılacak yerleri tek tek veriyor: kombinin konumu, radyatör sıcaklığı, oda termostatı, vanalar ve basınç. Bu yazıda servisi çağırmadan önce evde yapabileceklerini bu kılavuzlardan sırayla topladık. Düğmelerin yeri modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ekrandaki radyatör sembolü: yoksa kombi yaz konumunda, kışa geç. Sonra radyatör sıcaklığı, oda termostatı, kombinin altındaki ve peteklerdeki vanalar. Manometre 1–1,5 bar olmalı. **Er** ya da **E** kodu varsa bir kez sıfırla, geri geliyorsa servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **Yalnız musluk** | Yaz konumu: yalnız sıcak su | 🛠️ Kış konumuna geç |
| **Musluk + radyatör** | Kış konumu: ısıtma ve sıcak su | Normal |
| **Yanıp sönen radyatör** | Kombi petekler için çalışıyor | Bekle |
| **rc** (Glowa) | Oda termostatı bağlı, kontrol onda | Termostata bak |
| **Yanıp sönen Er + kod** | Arıza ya da kilitleme | 🛠️ Kodu not al, bir kez sıfırla |

## Adım adım kontrol

**1. Gaz kokusu var mı?** Warmhaus'un kullanıcı bölümündeki ilk kural: ortamda gaz kokusu varsa evin giriş hattındaki ve kombinin gaz vanalarını, dökme gaz kullanıyorsan LPG tankı ya da tüp vanasını kapat. Elektrik düğmelerini açıp kapatma, kıvılcım çıkarabilecek hiçbir şey yapma. Gaz şirketini ya da yetkili servisi ara.

**2. Kombi kışta mı?** Kılavuza göre **kış** konumunda kombi hem ortamı ısıtır hem sıcak su sağlar; **yaz** konumunda yalnız kullanım sıcak suyunu ısıtır. Kışta ekranda musluk ve radyatör sembolleri birlikte, yazda yalnız musluk görünür. Glowa'da kıştan yaza ve geri geçmek için **MOD** düğmesine basıyorsun. Ewa'da MODE butonunu basılı tutuyorsun; ekrandaki döngü tamamlanınca bırakıyorsun ve kombi önce kalorifer konumuna geçiyor. Isıtma çalışırken radyatör sembolü yanıp söner.

**3. Radyatör sıcaklığı.** Glowa'da petek sıcaklığı paneldeki radyatör düğmesiyle ayarlanıyor. Ewa kılavuzunda kalorifer sıcaklığı **25 ile 80 °C** arasında; butonlara basınca ekran ışığı yanıyor ve değerin yanında derece işareti yanıp sönüyor. Yerden ısıtma varsa yetkili servis kombiyi düşük sıcaklık işletimine almış olur ve üst sınır daha düşük kalır; kılavuzun örneği en fazla 47 °C. Ayar alt sınıra yakınsa petekler ılık kalır.

**4. Oda termostatı.** Kılavuzun kullanım öncesi listesinde bir madde var: bir oda termostatı ya da kontrol cihazı bağlıysa **açık konumda** olmalı. Glowa'ya oda termostatı bağlıysa ekranda oda kontrolü anlamında **rc** yazıyor; bu durumda ısıtmayı termostat başlatır. Termostattaki değer oda sıcaklığının altındaysa kombi ısıtmaya geçmez (çıkarım). Termostatın pilleri ve programı için kendi kılavuzuna bak.

**5. Vanalar açık mı?** Kontrol listesine göre kombinin altındaki radyatör ve ısıtma vanaları açık olmalı. Peteklerdeki vanalar da önemli: Ewa'nın arıza tablosunda dolaşım ve aşırı sıcaklık kodlarının (E07, E09, E20) çözümünde kılavuz tüm radyatör vanalarının açık olup olmadığına bakmanı ve **en az 3 metrelik radyatörün açık** kalmasını istiyor. Kapattığın odaların peteklerini aç.

**6. Basınca bak.** Warmhaus, kullanmaya başlamadan önce kombinin altındaki manometrede basıncın **1 ile 1,5 bar** arasında olmasını ve sistem havasının alınmış olmasını bekliyor. Glowa'da basınç sensörlü yapılandırmada basınç 0,4 barın altına inince **Er 02** veriliyor ve 1 barın üstüne çıkınca kendiliğinden siliniyor. Tesisatı doldurma ve petek havasını alma kılavuzda kurulum personeli bölümünde anlatılıyor; bu yüzden basınç düşükse doldurmayı yetkili servise bırak.

**7. Kod varsa bir kez sıfırla.** Glowa'da ekranda yanıp sönen **Er** ve bir kod değeri varsa SIFIRLAMA düğmesine üç saniye basıyorsun; Ewa'da RESET üç dört saniye basılı tutuluyor. Ewa'nın E07, E09 ve E20 çözümlerinde sıra şu: önce sıfırla, sonra kombinin ısıtma vanalarını ve peteklerin vanalarını aç, yeniden sıfırla; sürmüyorsa yetkili servis. Kodların listesi [Warmhaus kombi hata kodları](/blog/warmhaus-kombi-hata-kodlari/) sayfasında.

## Bir oda ısınıyor, öbürü ısınmıyor

Ewa kılavuzunun tasarruf bölümü bu durumu da anlatıyor: radyatör vanalarındaki kısma ayarlarıyla ev içindeki tesisatın **basınç dağılımını dengelemeni** istiyor. Peteklerin önüne mobilya koymanın hava dolaşımını engellediğini, konforu düşürüp tüketimi artırdığını yazıyor. Oda termostatı kullanıyorsan termostatın bulunduğu odadaki peteklere termostatik vana takılmamalı. Peteğin üst kısmı soğuk, alt kısmı sıcaksa içinde hava olabilir (çıkarım); hava alma kılavuzda kurulum bölümünde, servise sor. Marka bağımsız nedenler [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında.

## Ne zaman servis

- Basınç sık sık 1 barın altına düşüyorsa
- Vanalar açık olduğu hâlde dolaşım ya da aşırı sıcaklık kodu dönüyorsa
- Kış konumunda radyatör sembolü yanıp sönüyor ama petekler hep soğuksa
- Peteklerden hava almak gerekiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Mod düğmesi, sıcaklık ayarı, oda termostatı, vanaların açık olması ve sıfırlama sende; kombinin kapağının içi, gaz hattı, baca, pompa, tesisata su doldurma ve hava alma yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Glowa, Ewa)?
2. Ekranda radyatör sembolü var mı, yanıp sönüyor mu?
3. Radyatör sıcaklığı kaça ayarlı?
4. Manometre kaç bar gösteriyor?
5. Ekranda hangi kod var?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Sıcak su da gelmiyorsa [Warmhaus kombi sıcak su gelmiyor](/blog/warmhaus-kombi-sicak-su-gelmiyor/) yazısına bak. Bil, gör, çağır.
