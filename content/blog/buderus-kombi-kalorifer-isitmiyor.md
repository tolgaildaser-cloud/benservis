---
title: "Buderus kombi kalorifer ısıtmıyor: sıcak su var, petekler soğuk"
description: "Buderus kombi sıcak su verip petekleri ısıtmıyorsa önce ayar: yaz işletimi, ısıtma işletmesi, gidiş suyu sıcaklığı, oda termostatı, petek vanaları, basınç."
slug: "buderus-kombi-kalorifer-isitmiyor"
date: "2026-10-02"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 07:0x · Kaynak denetimi: buderus-kombi-kalorifer-isitmiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200). PDF'ler pdftotext -layout, sayfa = PDF sayfası
# (Buderus kılavuzlarında basılı sayfa no ile aynı). Web araması KULLANILMADI: rehber sayfası adresi buderus.com/tr/tr/bilgiler/kombi-rehberi/
# dizininden, PDF adresleri 27 Eyl Buderus koşusunun provenansından; PDF md5'leri 27 Eyl yerel kopyasıyla birebir.
# R1) Buderus TR "Kombi Çalışıyor Ama Petekler Isınmıyor: Olası Sebepler ve Çözümler" (buderus.com, resmî site)
#     https://www.buderus.com/tr/tr/bilgiler/kombi-rehberi/kombi-calisiyor-ama-petekler-isinmiyor-olasi-sebepler-ve-cozumler/
#     HTTP 200 · 150.498 B · md5 991c932561d4e86820b8eb0bab0c8a53 (dinamik sayfa; md5 indirme anına ait)
#     11 maddelik liste: yanlış mod (yaz) · kalorifer sıcaklığı düşük · tesisatta hava (purjör) · basınç <1 bar · petek vanaları kapalı ·
#     oda termostatı düşük · devirdaim pompası · üç yollu vana · tesisat filtresi · çamurlaşma · dış hava sensörü (son beşi servis/uzman)
#     "Temel kontrolleri yaptınız, basınç normal, mod doğru, vanalar açık ama sorun devam ediyor." → yetkili servis; "arıza kodu varsa mutlaka not alın"
# R2) Buderus TR "Kombi Nasıl Açılır? İlk Kez Kullananlar İçin Adım Adım Rehber" · .../kombi-nasil-acilir-ilk-kez-kullananlar-icin-rehber/
#     HTTP 200 · 153.973 B · md5 c993c71c435ecd46709dc33522d2202e · "Yaz modunda sadece sıcak su çalışır." · petek/yerden ısıtma kolektör vanaları
# B1) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf · HTTP 200 · 1.305.490 B · 16 s. · md5 e90532810ee5ec5e8414b1c01e659a75
#     s.5 işletme basıncı 1–2 bar, doldurma tesisata göre farklı → servisten göstermesini iste, yalnız soğukken, doldurma vanası 1–2 bar, 3 bar
#     s.8 4.4.1 ısıtma işletmesi aktif/yok + "“Isıtma işletmesi yok” ayarlı olduğunda, ısıtma işletmesi, bağlanmış olan kumanda sistemi aracılığıyla
#     etkinleştirilemez." · 4.4.2 maks. gidiş 30–82 °C, Tab.2 radyatör ~75 °C · s.11 4.7 manuel yaz işletmesi: "Sirkülasyon pompası ve dolayısıyla da
#     ısıtma tesisatı kapanmıştır." · s.12 termostatik vanaları sonuna kadar aç · arıza kodu yanıp söndüğünde kapat-aç / reset, giderilemiyorsa servis
# B2) Logamax plus GB022i-20 KD H Kullanma Kılavuzu 6721835260 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf · HTTP 200 · 577.309 B · 16 s. · md5 285eeb793f4a256196ab942d187cff31
#     s.8 "Yaz işletiminde ısıtma işletmesi kilitlidir" + radyatör ~75 °C · s.9 3.7 manuel yaz işletmesi açma/kapatma · s.5 sık su = kaçak ·
#     s.11 arıza giderme (kapat-çalıştır / ok tuşları), servis · s.12 1–2 bar, servisten göstermesini iste, soğukken, "Radyatör dengesiz ısındığında: Radyatörlerin havasını alın."
# B3) Logamax Plus GB122i.2-24 KD H Kullanma Kılavuzu 6721843895 (2023/04)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721843895.pdf · HTTP 200 · 974.060 B · 12 s. · md5 14a8d326f557827c9670b4d367e65098
#     s.5 yaz işletiminde ısıtma kilitli · s.6 manuel yaz işletmesi · s.9 1–2 bar, radyatör havası
# B4) Logamax plus GB172i.2 Kullanım Kılavuzu 6721852623 (2023/12)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf · HTTP 200 · 1.744.938 B · 16 s. · md5 e2c3f95692c0e3c1e3a2ea3b59997420
#     s.5 "Yaz işletiminde sirkülasyon pompası ve dolayısıyla da ısıtma kapalıdır." · s.7 1–2 bar, LoPr, 2980 tekrarlanan reset uyarısı · s.8 radyatör havası
# ⛔ Bilerek YAZILMAYANLAR: gaz ve elektrik kontrolleri (görev talimatı: gaz/elektrik adımı yok) · purjörden hava almanın NASIL yapılacağı (kılavuz
#    yöntem/alet tarif etmiyor; alet kuralı → numarasız anıldı) · rehber sayfasının "45–55 °C" önerisi adım olarak (kılavuz Tab.2 radyatör için ~75 °C
#    veriyor; ikisi yan yana, kaynağıyla verildi) · pompa/üç yollu vana/filtre/çamur/dış hava sensörü için kullanıcı adımı (sayfa servise bırakıyor) ·
#    "eko mod ısıtmayı sınırlar" (sayfa "bazı modeller" diyor, model adı yok → yazılmadı) · tuş simgeleri (kılavuzda resimle) · maliyet (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ekranda yanıp sönen bir arıza kodu varsa önce kodu not et ve o kodun rehberine geç."
  - "Kombinin yaz işletiminde olup olmadığına bak; yaz işletimindeyse kılavuzundaki tuşla kapatıp kaydet."
  - "GB072'de ısıtma işletmesinin 'yok' ayarında kalmadığını kontrol et; aktif konuma alıp ok ile kaydet."
  - "Maksimum gidiş suyu sıcaklığının çok düşük ayarlanmadığını kontrol et, gerekiyorsa yükseltip kaydet."
  - "Oda termostatı bağlıysa ayarını o anki oda sıcaklığının birkaç derece üzerine çıkar."
  - "Soğuk kalan peteklerin giriş ve çıkış vanalarının açık olduğunu kontrol et; termostatik vanayı sonuna kadar aç."
  - "Kombi soğukken basıncı manometreden oku; düşükse kılavuzunun tarif ettiği yolla su ekle ya da servisten göstermesini iste."
  - "Mod, ayar, vanalar ve basınç doğru olduğu hâlde petekler soğuksa Buderus yetkili servisine başvur."
faq:
  - q: "Buderus kombi sıcak su veriyor ama petekleri ısıtmıyor, ilk neye bakmalıyım?"
    a: "Buderus'un kendi sitesindeki 'Kombi çalışıyor ama petekler ısınmıyor' rehberinin ilk maddesi yanlış mod seçimi: yaz modunda yalnız sıcak su devrededir, kalorifer devreye girmez. Kullanma kılavuzları da aynı şeyi söylüyor; GB022i ve GB122i.2 kılavuzlarına göre yaz işletiminde ısıtma işletmesi kilitlidir, GB172i.2 kılavuzuna göre sirkülasyon pompası ve dolayısıyla ısıtma kapalıdır. Önce ekrandaki mod sembolüne bak."
  - q: "GB072'de ısıtma işletmesi yok ne demek?"
    a: "GB072 kılavuzunda ısıtma işletmesi + ya da – tuşuyla aktif veya yok olarak ayarlanıyor. Kılavuzun notuna göre ısıtma işletmesi yok ayarlıyken ısıtma, kombiye bağlı kumanda sistemi (oda kumandası) üzerinden de açılamaz. Yani oda termostatından ne kadar yükseltsen de petekler ısınmaz; önce kombinin kendisinde ısıtmayı aktif yapıp ok tuşuyla kaydetmen gerekir."
  - q: "Kalorifer sıcaklığını kaç dereceye ayarlamalıyım?"
    a: "Kaynaklar farklı sayı veriyor. Buderus'un rehber sayfası ılık ama ısıtmıyor şikâyetinde kalorifer sıcaklığını 45–55 °C aralığına getirmeyi öneriyor. GB072 ve GB022i kullanma kılavuzlarının tablosunda ise radyatörlü sistem için tipik maksimum gidiş suyu sıcaklığı yaklaşık 75 °C. GB072 ve GB022i kılavuzlarına göre ayar aralığı 30–82 °C ve maksimum değer servis teknikeri tarafından düşürülmüş olabilir."
  - q: "Peteklerin üstü soğuk, altı sıcak. Ne yapmalıyım?"
    a: "Buderus'un rehber sayfası bunu tesisatta hava belirtisi olarak sayıyor ve havanın peteklerin yanındaki purjör vanasından alınmasını, ardından basıncın kontrol edilmesini öneriyor. GB022i, GB122i.2 ve GB172i.2 kılavuzları da radyatör dengesiz ısındığında radyatörlerin havasının alınmasını istiyor. Kılavuzlar yöntemi tarif etmediği için bu yazıda adım olarak vermedik; emin değilsen yetkili servise bırak."
  - q: "Hangi durumda kendim uğraşmamalıyım?"
    a: "Buderus'un rehber sayfası devirdaim pompası, üç yollu vana, tıkalı tesisat filtresi, peteklerde çamurlaşma ve dış hava sensörü arızasını kullanıcı müdahalesiyle giderilemeyecek ya da servis gerektiren nedenler olarak sayıyor. Basınç normal, mod doğru, vanalar açık ama sorun sürüyorsa sayfanın tavsiyesi yetkili servis çağırmak."
images:
  coverAlt: "Oturma odasında beyaz bir panel radyatörün yanında duran kişi elini radyatörün üstüne koymuş; arka planda mutfak duvarında beyaz bir kombi"
---

Musluktan sıcak su geliyor ama petekler soğuk. Buderus kendi sitesinde bu durum için ayrı bir rehber yayımlıyor: **"Kombi Çalışıyor Ama Petekler Isınmıyor."** Sayfanın saptaması şu: sorun kimi zaman kombinin ayarından, kimi zaman tesisattan, kimi zaman da bir arızadan kaynaklanır. Listenin ilk altı maddesi senin bakabileceğin şeyler (mod, sıcaklık, hava, basınç, vanalar, oda termostatı); kalan beşi servisin işi. Bu yazıda o listeyi Buderus'un kullanma kılavuzlarındaki ayar bölümleriyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda kod var mı → kombi yaz işletiminde mi → GB072'de ısıtma işletmesi "yok"ta mı → gidiş suyu sıcaklığı çok mu düşük → oda termostatı ısı istiyor mu → petek vanaları açık mı → basınç 1 bar'ın altında mı. Hepsi yerindeyse yetkili servis; pompa, üç yollu vana ve filtre kullanıcı işi değil.

## Adım adım: evde denenecekler

**1. Ekranda kod var mı?** GB072 kılavuzuna göre işletme sırasında bir arıza olduğunda ekranda bir arıza kodu gösterilir; GB022i ve GB122i.2'de bunu bir arıza sembolü ve kod birlikte gösterir. Kod varsa ayarlarla uğraşmadan önce o kodun tedbirine bak: liste için [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/). Buderus'un rehber sayfası da kodu mutlaka not almanı istiyor; servis sürecini hızlandırıyor.

**2. Yaz işletimi açık mı?** Buderus'un listesinin ilk maddesi bu. Rehber sayfasına göre yaz modunda yalnız sıcak su devrededir, kalorifer devreye girmez; kombi normal çalışır ama petekler ısınmaz. Kılavuzlar da aynı şeyi söylüyor: GB022i ve GB122i.2'de **"Yaz işletiminde ısıtma işletmesi kilitlidir"**, GB072 ve GB172i.2'de yaz işletiminde sirkülasyon pompası ve dolayısıyla ısıtma kapalıdır. Kapatma yolu modele göre değişiyor: GB022i ve GB122i.2'de ısıtma tuşuna basıp ok tuşlarıyla istediğin gidiş suyu sıcaklığını seçer ve kaydedersin; GB072'de ekranda ilgili sembol yanıp sönene kadar tuşa basıp ok ile kaydedersin. Kendi modelinin sırası kılavuzunun "manuel yaz işletmesinin kapatılması" bölümünde.

**3. GB072'de ısıtma işletmesi "yok"ta mı?** GB072 kılavuzunda ısıtma işletmesi + ya da – tuşuyla **aktif** veya **yok** olarak ayarlanıyor. Kılavuzun notu önemli: ısıtma işletmesi yok ayarlıyken ısıtma, bağlı kumanda sistemi üzerinden de etkinleştirilemez. Yani oda kumandasından ne yaparsan yap, kombinin kendisinde ısıtmayı aktif yapıp **ok** tuşuyla kaydetmen gerekir.

**4. Gidiş suyu sıcaklığı çok mu düşük?** Rehber sayfasına göre kalorifer derecesi 30–35 °C gibi düşük bir değerdeyse peteklere giden su yeterince sıcak olmaz ve "ılık ama ısıtmıyor" şikâyeti çıkar; sayfa 45–55 °C aralığını öneriyor. Kılavuzların ayar tablosu ise radyatörlü sistem için tipik maksimum gidiş suyu sıcaklığını **yaklaşık 75 °C** veriyor; GB072 ve GB022i'de ayar aralığı 30–82 °C. Ayarı yükselttikten sonra kaydetmeyi unutma ve rehber sayfasının dediği gibi sistemin tepki vermesi için birkaç dakika bekle.

**5. Oda termostatı ısı istiyor mu?** Kombine bir oda termostatı bağlıysa, rehber sayfasına göre oda istenen sıcaklığa ulaştığında kombi kalorifer devresini durdurur. Sayfanın tedbiri: termostat sıcaklığını **o anki oda sıcaklığının birkaç derece üzerine** çıkar ve sistemin devreye girip girmediğini gözle. Haftalık programlama açıksa belirli saatlerde kaloriferin devre dışı kalabileceğini de yazıyor; program ayarını da kontrol et.

**6. Petek vanaları açık mı?** Rehber sayfası taşınma, temizlik ya da yaz dönemi yüzünden vanaların kapatılmış olabileceğini hatırlatıyor; vana kapalıysa sıcak su peteğe ulaşmaz. Soğuk kalan peteklerin **giriş ve çıkış vanalarını** kontrol et; sayfaya göre saat yönünün tersine çevrilerek açılır. Termostatik radyatör vanası kullanıyorsan GB072 kılavuzunun tavsiyesi: istenen oda sıcaklığına ulaşmak için **sonuna kadar aç.** Yerden ısıtmada aynı kontrol kolektör vanaları için geçerli.

**7. Basınç 1 bar'ın altında mı?** Rehber sayfasına göre basınç 1 bar'ın altına düştüğünde kalorifer devresi sağlıklı çalışmaz; kombi çalışır gibi görünse de ısıtma performansı düşer. Kılavuzlar normal işletme basıncını **1 ile 2 bar** arası veriyor; rehber sayfası 1,2–1,5 bar diyor. Basıncı kombi **soğukken** manometreden oku. Su ekleme modele göre farklı:

- **GB072:** kılavuz doldurma vanasını açıp manometrede 1–2 bar görünene kadar doldurmayı, sonra vanayı tekrar kapatmayı tarif ediyor; ama aynı sayfa doldurmanın tesisata göre farklı olduğunu, nasıl yapıldığını **yetkili servisinden göstermesini istemeni** de söylüyor.
- **GB022i ve GB122i.2:** kılavuz doldurma adımı vermiyor; nasıl ilave edileceğini yetkili servisinden göstermesini iste.

Kılavuzların ortak sınırı: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı. Basınç sorunun kendisiyse ayrıntı [Buderus kombi 4L ve 2E hatası](/blog/buderus-kombi-4l-hatasi/) ve [Buderus kombi 1017 ve 2971 hatası](/blog/buderus-kombi-1017-hatasi/) yazılarında.

**8. Hepsi yerindeyse servis.** Rehber sayfasının kapanış cümlesi açık: temel kontrolleri yaptın, basınç normal, mod doğru, vanalar açık ama sorun sürüyorsa teknik bir parça arızası söz konusu olabilir; bu durumda **yetkili servis** çağırılmalı.

## Peteklerin bir kısmı ılık, bir kısmı soğuksa

Rehber sayfası tesisattaki havayı "petekler neden ısınmaz" sorusunun en yaygın yanıtlarından biri olarak sayıyor: hava, sıcak suyun petek içinde dolaşmasını engeller, peteğin **üstü soğuk, altı sıcak** kalabilir. Sayfa havanın peteklerin yanındaki **purjör vanasından** alınmasını, ardından basıncın kontrol edilmesini öneriyor. GB022i, GB122i.2 ve GB172i.2 kılavuzları da aynı başlığı taşıyor: radyatör dengesiz ısındığında **radyatörlerin havasını alın.** Kılavuzlar bunun nasıl yapılacağını tarif etmiyor; o yüzden bunu numaralı adım olarak vermedik. Kendin yapmaktan emin değilsen yetkili servise bırak; hava alındıktan sonra basınç düşebileceği için 7. adıma geri dön. Markadan bağımsız anlatım: [petekler ısınmıyor](/blog/petekler-isinmiyor/).

## Buderus'un listesi: kimin işi

| Neden (Buderus rehber sayfası) | Kim | Ek kaynak |
|---|---|---|
| Yanlış mod (yaz modu) | Sen: kış / ısıtma işletmesine al | Kılavuzlar: yaz işletiminde ısıtma kilitli |
| Kalorifer sıcaklığı çok düşük | Sen: gidiş suyu sıcaklığını yükselt | Kılavuz Tab. 2: radyatör ~75 °C |
| Tesisatta hava | Kılavuz "havasını alın" diyor; yöntem yok | GB022i · GB122i.2 · GB172i.2 |
| Basınç 1 bar'ın altında | Modele göre sen ya da servis | GB072: doldurma tarifi · GB022i/GB122i.2: servis göstersin |
| Petek vanaları kapalı | Sen: vanaları aç | — |
| Oda termostatı düşük | Sen: ayarı yükselt | — |
| Devirdaim pompası | Yetkili servis | — |
| Üç yollu vana | Yetkili servis | — |
| Tesisat filtresi tıkalı | Servis temizler | — |
| Peteklerde çamurlaşma | Kimyasal petek temizliği | — |
| Dış hava sensörü | Yetkili servis | — |

📌 Listenin ilk yarısı arıza değil, **kapalı kalmış bir ayar ya da vana.** Rehber sayfasının deyişiyle ısınma sorunları çoğu zaman küçük ayar hatalarından kaynaklanır.

## Ne zaman servis

- Basınç normal, mod doğru, vanalar açık ve petekler yine ısınmıyorsa.
- Buderus'un listesindeki pompa, üç yollu vana, filtre, çamurlaşma ya da dış hava sensörü şüphesinde; rehber sayfası bunları kullanıcı müdahalesiyle çözülemeyen sorunlar olarak sayıyor.
- Sık su eklemen gerekiyorsa: GB072 ve GB022i kılavuzlarına göre sisteme sık su ekleniyorsa bu, sistemde su kaçağı olduğunu gösterir ve kaçakların giderilmesi gerekir.
- Ekranda bir arıza kodu varsa ve kılavuzundaki yolla bir kez sıfırladıktan sonra geri geliyorsa.

⛔ Buderus'un kılavuzları gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor. Kombinin dış sacını açma.

Kombi hiç çalışmıyorsa [Buderus kombi çalışmıyor](/blog/buderus-kombi-calismiyor/), petekler ısınıyor ama musluktan sıcak su gelmiyorsa [Buderus kombi sıcak su vermiyor](/blog/buderus-kombi-sicak-su-vermiyor/) yazısına bak.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
