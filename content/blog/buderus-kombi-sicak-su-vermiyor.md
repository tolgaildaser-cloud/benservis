---
title: "Buderus kombi sıcak su vermiyor"
description: "Buderus kombi sıcak su vermiyorsa Buderus'un sırası: şebeke suyu, basınç, açık kalan doldurma musluğu, sıcak su ayarı, arıza kodu ve tek reset."
slug: "buderus-kombi-sicak-su-vermiyor"
date: "2026-10-02"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 07:0x · Kaynak denetimi: buderus-kombi-sicak-su-vermiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200). PDF'ler pdftotext -layout, sayfa = PDF sayfası.
# Web araması KULLANILMADI: rehber adresleri buderus.com/tr/tr/bilgiler/kombi-rehberi/ dizininden; PDF md5'leri 27 Eyl yerel kopyasıyla birebir.
# R1) Buderus TR "Kombi Neden Sıcak Su Vermiyor?" (buderus.com, resmî site)
#     https://www.buderus.com/tr/tr/bilgiler/kombi-rehberi/kombi-neden-sicak-su-vermiyor/
#     HTTP 200 · 148.726 B · md5 b0e67d13c420f38d95b6eb6ca6ff08ff (dinamik sayfa; md5 indirme anına ait)
#     Nedenler: su basıncı düşüklüğü (ideal 1–2,5 bar, önerilen 1,5; <1 ise doldurma musluğuyla su bas, "doldurma musluğu sıkıca kapatılır") ·
#     gaz kesintisi/gaz vanası · ateşleme/brülör ("ekranında arıza kodu olup olmadığına bakmaktır. Cihazı resetleyerek...") · NTC sensörü · üç yollu vana ·
#     plaka eşanjör · pompa (hepsi servis) · "Doldurma Musluğunun Açık Kalması" → "sıkıca kapatılması"
# R2) Buderus TR "Sular Kesikken Kombi Çalışır mı?" · https://www.buderus.com/tr/tr/bilgiler/kombi-rehberi/sular-kesikken-kombi-calisir-mi/
#     HTTP 200 · 149.992 B · md5 db689a574dff1d83a5e78263646184bd · "Musluğu açtığınızda su gelmiyorsa kombi zaten sıcak su üretemez." ·
#     sular kesikken su basılamaz, doldurma musluğu kapalı bırakılmalı · reset "sık sık yapmanız önerilmez"
# R3) Buderus TR "Buderus Kombi Resetleme İşlemi Nasıl Yapılır?" · https://www.buderus.com/tr/tr/bilgiler/kombi-rehberi/buderus-kombi-resetleme-islemi-nasil-yapilir/
#     HTTP 200 · 140.916 B · md5 17466773741bea96aa9d929111153912 · reset tuşu 3 sn, art arda basma, "en fazla 2 defa", sonra servis
# B1) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf · HTTP 200 · 1.305.490 B · 16 s. · md5 e90532810ee5ec5e8414b1c01e659a75
#     s.9 4.5.1 sıcak kullanım suyu işletmesi aktif / ekonomik (Eco) / yok; "“Sıcak kullanım suyu işletmesi yok” ayarlı olduğunda, sıcak kullanım suyu
#     işletmesi, bağlanmış olan kumanda sistemi aracılığıyla etkinleştirilemez." · GB072-24K ekonomik işletme: "ancak sıcak kullanım suyu kullanıldığında"
#     · s.5 1–2 bar, soğukken, doldurma vanası aç/kapat, servisten göstermesini iste · s.12 kod yanıp söndüğünde kapat-aç ya da Reset, servis
# B2) Logamax plus GB022i-20 KD H Kullanma Kılavuzu 6721835260 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf · HTTP 200 · 577.309 B · 16 s. · md5 285eeb793f4a256196ab942d187cff31
#     s.8 3.5.1 kullanım suyu 35–60 °C, ok ile kaydet · 3.5.2 konfor / eco ("sıcak kullanım suyu talebi olduğunda cihaz devreye girer") ·
#     s.11 arıza giderme: kapat-çalıştır ya da ok tuşları, giderilemezse servis + kod + cihaz bilgisi · s.12 1–2 bar, servisten göstermesini iste
# B3) Logamax Plus GB122i.2-24 KD H Kullanma Kılavuzu 6721843895 (2023/04)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721843895.pdf · HTTP 200 · 974.060 B · 12 s. · md5 14a8d326f557827c9670b4d367e65098
#     s.6 kullanım suyu 35–60 °C (70 °C P-cihazlar) · s.8 arıza giderme · s.9 1–2 bar
# B4) Logamax plus GB172i.2 Kullanım Kılavuzu 6721852623 (2023/12)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf · HTTP 200 · 1.744.938 B · 16 s. · md5 e2c3f95692c0e3c1e3a2ea3b59997420
#     s.7 "Bir arızayı sıfırlamak için tekrarlanan girişimler, cihazın güvenlik nedeniyle bloke olmasına neden olabilir (arıza kodu 2980)."
# ⛔ Bilerek YAZILMAYANLAR: gaz vanası kontrolü (görev talimatı: gaz adımı yok; yalnız "gaz kesintisini gaz dağıtım şirketinden öğren" anıldı ve 6A
#    yazısına link verildi) · NTC/üç yollu vana/plaka eşanjör/pompa için kullanıcı adımı (sayfa servise bırakıyor) · rehber sayfasının "1–2,5 bar" aralığı
#    adım hedefi olarak (kılavuzlar 1–2 bar diyor; ikisi kaynağıyla verildi, adım kılavuzu izliyor) · tahliye vanasından su boşaltma (alet/yer belirsiz) ·
#    reset tuşu süresi için tek rakam (rehber 3 sn, EP/Fd sayfaları 30 sn sınırı; kılavuzlar süre vermiyor) · maliyet (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Başka bir musluktan soğuk su gelip gelmediğine bak; şebeke suyu kesikse kombi sıcak su üretemez."
  - "Ekranda yanıp sönen bir arıza kodu varsa kodu ve kombinin modelini not et."
  - "Kombi soğukken basıncı manometreden oku; 1 bar'ın altındaysa kılavuzunun tarif ettiği yolla su ekle ya da servisten göstermesini iste."
  - "Su ekledikten sonra doldurma musluğunun sıkıca kapalı olduğunu kontrol et."
  - "Sıcak kullanım suyu işletmesinin kapalı ayarlanmadığını ve sıcak su sıcaklığını kontrol et, gerekiyorsa ayarlayıp kaydet."
  - "Ekranda arıza kodu sürüyorsa kombiyi kılavuzundaki yolla bir kez sıfırla; art arda deneme."
  - "Sıfırlamadan sonra kod geri geliyorsa ya da her şey yerinde olduğu hâlde sıcak su gelmiyorsa Buderus yetkili servisine başvur."
faq:
  - q: "Buderus kombi sıcak su vermiyor, kalorifer çalışıyor. Neden olabilir?"
    a: "Buderus'un 'Kombi neden sıcak su vermiyor?' rehberi tek bir nedeni değil bir listeyi sayıyor: düşük su basıncı, gaz kesintisi ya da kapalı gaz vanası, ateşleme veya brülör sorunu, sıcak su (NTC) sensörü, üç yollu vana, plaka eşanjörün kirlenmesi ya da tıkanması, pompa arızası ve kombinin altındaki doldurma musluğunun açık kalması. Bunlardan basınç, doldurma musluğu ve ekrandaki kod senin bakabileceğin şeyler; sensör, üç yollu vana, eşanjör ve pompa için sayfa teknik servisi gösteriyor."
  - q: "Doldurma musluğunun açık kalması neden sıcak suyu etkiler?"
    a: "Buderus'un rehber sayfası, kombinin altındaki doldurma musluğu açık kalırsa kombiden sıcak su almanın zorlaşabileceğini yazıyor ve su basma işleminden sonra musluğun dikkatlice kontrol edilip sıkıca kapatılmasını istiyor. 'Sular kesikken' sayfası da su kesintisinde musluğun mutlaka kapalı bırakılmasını öneriyor; açık kalırsa sular geldiğinde fazla su basılabilir."
  - q: "GB072'de sıcak su yok ayarı ne demek?"
    a: "GB072 kılavuzunda sıcak kullanım suyu işletmesi + ya da – tuşuyla üç konuma alınıyor: aktif, ekonomik işletme (Eco) ya da yok. Kılavuzun notuna göre yok ayarlıyken sıcak su, kombiye bağlı kumanda sistemi üzerinden de açılamaz; kombinin kendisinde aktif ya da ekonomik konuma alıp ok tuşuyla kaydetmen gerekir."
  - q: "Eco modunda sıcak su geç geliyor, bu arıza mı?"
    a: "Kılavuza göre değil. GB022i kılavuzu konfor modunda kombinin sürekli ayarlanan sıcaklıkta tutulduğunu, eco modunda ise ancak sıcak kullanım suyu talebi olduğunda devreye girdiğini yazıyor. GB072-24K'de de ekonomik işletmede ısıtma ancak sıcak su kullanıldığında yapılır. Yani eco'da musluğu açtıktan sonra kısa bir bekleme beklenen bir durum; hiç sıcak su gelmiyorsa bu yazıdaki adımlara bak."
  - q: "Kaç kez resetleyebilirim?"
    a: "Buderus'un resetleme rehberi resetin en fazla 2 defa tekrarlanmasını, ardından uyarı sürüyorsa teknik servise başvurulmasını öneriyor. GB172i.2 kılavuzu da bir arızayı sıfırlamak için tekrarlanan girişimlerin cihazın güvenlik nedeniyle bloke olmasına (arıza kodu 2980) yol açabileceğini yazıyor. Bu yüzden adımlarda tek bir deneme verdik."
images:
  coverAlt: "Banyo lavabosunda açık bir musluktan buharsız akan su ve arka planda duvara monte beyaz bir kombi"
---

Petekler ısınıyor ya da en azından kombi çalışıyor, ama musluktan sıcak su gelmiyor. Buderus kendi sitesinde bu soruya ayrı bir rehber ayırıyor: **"Kombi Neden Sıcak Su Vermiyor?"** Sayfanın ilk cümlelerinden biri işin özünü veriyor: kombinin sıcak su vermemesi tek bir nedenden kaynaklanmaz. Listenin bir kısmı parça arızası ve servis işi; ama en başta duran iki madde, **su basıncı** ve **açık kalan doldurma musluğu**, senin kontrol edebileceğin şeyler. Bu yazıda Buderus'un rehber sayfalarını ve kullanma kılavuzlarını yan yana koyup sırayla ilerliyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Şebeke suyu geliyor mu → ekranda kod var mı → basınç 1 bar'ın altında mı → doldurma musluğu sıkıca kapalı mı → sıcak su işletmesi kapalı mı, sıcaklık kaç → kod varsa bir kez sıfırla. Kod geri geliyorsa ya da hepsi yerindeyse yetkili servis; sensör, üç yollu vana, eşanjör ve pompa kullanıcı işi değil.

## Adım adım: evde denenecekler

**1. Şebeke suyu geliyor mu?** Buderus'un "Sular kesikken kombi çalışır mı?" sayfası bunu evde yapılacak kontroller arasında sayıyor: bazen sorun kombiden değil doğrudan su kesintisinden kaynaklanır; **musluğu açtığında su gelmiyorsa kombi zaten sıcak su üretemez.** Sayfanın uyarısı: bu durumda kombiyi zorlamanın anlamı yok. Mutfak ya da banyodaki başka bir musluğu aç, soğuk su akıyor mu bak.

**2. Ekranda kod var mı?** Rehber sayfası ateşleme ya da brülör kaynaklı sıcak su sorunlarında ilk işi **ekranda arıza kodu olup olmadığına bakmak** olarak veriyor. Kılavuzlara göre arıza GB072'de yanıp sönen bir kodla, GB022i ve GB122i.2'de bir arıza sembolü ve kodla gösterilir. Kodu ve kombinin modelini not et; kodun anlamı [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) listesinde.

**3. Basınç 1 bar'ın altında mı?** Rehber sayfasının ilk maddesi su basıncı düşüklüğü. Sayfaya göre basınç 1 bar'ın altındaysa su basılması gerekir. Kullanma kılavuzlarının çerçevesi şu: işletme basıncı normal durumlarda **1 ile 2 bar** arası, su **yalnız kombi soğukken** eklenir ve ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalıdır. Su ekleme modele göre farklı:

- **GB072:** kılavuz doldurma vanasını açıp manometrede 1–2 bar görünene kadar doldurmayı, sonra vanayı kapatmayı tarif ediyor; aynı sayfa doldurmanın tesisata göre farklı olduğunu ve nasıl yapıldığını **yetkili servisinden göstermesini istemeni** de söylüyor.
- **GB022i ve GB122i.2:** kılavuz doldurma adımı vermiyor; ısıtma suyunun nasıl ilave edildiğini yetkili servisinden göstermesini iste.

Ayrıntı için ekrandaki koda göre [Buderus kombi 4L ve 2E hatası](/blog/buderus-kombi-4l-hatasi/) ya da [Buderus kombi 1017 ve 2971 hatası](/blog/buderus-kombi-1017-hatasi/) yazısına bak.

**4. Doldurma musluğu sıkıca kapalı mı?** Rehber sayfasının son maddesi bu ve sık atlanıyor: kombinin altındaki doldurma musluğu **açık kalırsa** sıcak su almak zorlaşabilir. Sayfanın tedbiri tek cümle: su basma işleminden sonra musluğu dikkatlice kontrol et ve **sıkıca kapat.** "Sular kesikken" sayfası da su kesintisinde musluğun kapalı bırakılmasını istiyor; aksi hâlde sular geldiğinde fazla su basılabilir.

**5. Sıcak su işletmesi ve sıcaklık ayarı.** Kılavuzlarda sıcak su ayrı bir ayar:

- **GB072:** sıcak kullanım suyu işletmesi **aktif**, **ekonomik (Eco)** ya da **yok** konumuna alınıyor. Kılavuzun notuna göre "yok" ayarlıyken sıcak su bağlı kumanda sistemi üzerinden de açılamaz. Ekrandaki sembol yanıp sönene kadar tuşa bas, + ya da – ile aktif konumu seç ve **ok** ile kaydet.
- **GB022i ve GB122i.2:** sıcak kullanım suyu sıcaklığı **35–60 °C** arasında ayarlanıyor (GB122i.2'de P-cihazlarda 70 °C'ye kadar); ok tuşuyla kaydedilir, kaydedilmezse ayar 3 saniye sonra kendiliğinden kaydedilir.

Eco modu bir arıza değil: GB022i kılavuzuna göre eco'da kombi ancak sıcak su talebi olduğunda devreye girer; GB072-24K'de ekonomik işletmede de ısıtma ancak sıcak su kullanıldığında yapılır. Musluğu açınca kısa bir bekleme bu yüzden olabilir.

**6. Kod varsa bir kez sıfırla.** Rehber sayfası ateşleme ya da brülör sorununda cihazın resetlenerek yeniden kontrol edilebileceğini söylüyor. Kılavuzların yolu modele göre:

- **GB072:** kombiyi kapatıp aç **ya da** ekranda **Reset** yazısı görünene kadar reset tuşunu basılı tut.
- **GB022i ve GB122i.2:** kombiyi kapatıp tekrar çalıştır **ya da** arıza sembolleri kaybolana kadar kılavuzdaki iki ok tuşunu aynı anda basılı tut.

Sınır koy: Buderus'un resetleme rehberi resetin **en fazla 2 defa** tekrarlanmasını öneriyor; GB172i.2 kılavuzu tekrarlanan sıfırlama girişimlerinin cihazı güvenlik nedeniyle **bloke edebileceğini (2980)** yazıyor.

**7. Kod geri geliyorsa servis.** Rehber sayfasının cümlesiyle: sorun devam ederse mutlaka teknik servisten destek alınmalı. Kılavuzlar servisi ararken **arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor; GB022i'de bu bilgiler kumanda paneli kapağındaki tip etiketinde, GB072'de tip etiketinde ya da ön kapaktaki cihaz tipi çıkartmasında yazılı.

## Buderus'un listesi: kimin işi

| Neden (Buderus rehber sayfası) | Rehberin tedbiri | Kim |
|---|---|---|
| Su basıncı düşük | Doldurma musluğuyla su bas, musluğu sıkıca kapat | Modele göre sen ya da servis |
| Doldurma musluğu açık kalmış | Musluğu sıkıca kapat | Sen |
| Gaz kesintisi / gaz vanası kapalı | Gaz vanasına bak, bölgede kesinti var mı gaz şirketinden öğren | Aşağıdaki nota bak |
| Ateşleme veya brülör sorunu | Ekranda kod var mı bak, resetle; sürerse teknik servis | Sen (tek reset) → servis |
| Sıcak su (NTC) sensörü | Onarım/değişim | Teknik servis |
| Üç yollu vana | Kullanıcı onaramaz | Teknik servis |
| Plaka eşanjör kirli/tıkalı | — | Teknik servis |
| Pompa arızası | — | Yetkili servis |

📌 Gaz tarafına bu yazıda girmiyoruz. Bölgede doğalgaz kesintisi olup olmadığını rehber sayfasının dediği gibi gaz dağıtım şirketinden öğrenebilirsin. Ekranda ateşleme kodu **6A** görüyorsan Buderus'un o koda özel sırası [Buderus kombi 6A hatası](/blog/buderus-kombi-6a-hatasi/) yazısında.

## Ne zaman servis

- Bir kez sıfırladıktan sonra arıza kodu geri geliyorsa.
- Basınç normal, doldurma musluğu kapalı, sıcak su ayarı açık ve yine de sıcak su gelmiyorsa.
- Rehber sayfasının saydığı NTC sensörü, üç yollu vana, plaka eşanjör ya da pompa şüphesinde; sayfa bunların hepsinde servisi gösteriyor.
- Sık su eklemen gerekiyorsa: GB072 ve GB022i kılavuzlarına göre bu, sistemde su kaçağı olduğunu gösterir.

⛔ Buderus'un kılavuzları kombinin dış sacının sökülmemesini ve gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

Petekler de ısınmıyorsa [Buderus kombi kalorifer ısıtmıyor](/blog/buderus-kombi-kalorifer-isitmiyor/), kombi hiç çalışmıyorsa [Buderus kombi çalışmıyor](/blog/buderus-kombi-calismiyor/) yazısına bak. Markadan bağımsız anlatım: [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/).

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
