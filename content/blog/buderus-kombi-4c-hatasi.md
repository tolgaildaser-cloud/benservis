---
title: "Buderus kombi 4C hatası"
description: "Buderus kombide 4C aşırı ısınma demek; kombi kendini bloke eder. Basınç, kalorifer vanaları ve reset sırası adım adım, Buderus'un belgelerinden."
slug: "buderus-kombi-4c-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext -layout ile okundu, sayfa no \f ayracına göre.
# Web araması yalnız U072 kılavuzunun YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan / üçüncü taraf siteden alınmadı.
# Alıntı denetim tablosu: buderus-kombi-4c-hatasi.KAYNAK.md
# K1) Buderus TR "4C Arıza Kodu" sayfası
#     https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/4c-ariza-kodu/
#     HTTP 200 · 126.131 B · md5 8a0b1be67aa3ad1ee8a298e6dffab4e4 (dinamik sayfa; md5 indirme anına ait)
#     Birebir: "kombi tesisatındaki su sıcaklığının maksimum değeri aşarak aşırı ısınmaya yol açtığı anlamına gelmektedir" ·
#     "kombiniz kendini güvenlik moduna geçirerek korumaya alır" · "kendini bloke ederek çalışmayı durdurur" ·
#     "ideal aralık 1,2 – 1,5 bar" · "1 bar altında" · "su takviye musluğunu saat yönünün tersine çevirerek" ·
#     "kalorifer vanalarınız kapalı ise açabilirsiniz" · "kombinizi açıp kapatarak ya da reset düğmesine basarak"
# K2) Buderus TR "Arıza Kodları ve Çözümleri" dizini — md5 ff763f86f479cd5ba6b5c8935ee0960a
#     4C'nin geçtiği modeller: U022, U072, U052, U062 (başka modelde yok)
# K3) Fd kod sayfası — HTTP 200 md5 8a03ca4fe9343798913b698d8c9b43b6 (30 saniye sınırı; Fd U022/U072 listesinde)
# B1) Logamax U072 Kullanma Kılavuzu 6720813734 (2015/02)
#     https://buderus-tr-tr-c.boschhc-documents.com/download/file/file/6720813734.pdf
#     HTTP 200 · 746.828 B · 12 s. · md5 0f67df9c94f4db798d5c3ce9c8b462b8
#     Gaz kokusu + "dış sacını asla sökmeyin" s.3 · "Çalışma basıncı normal şartlarda 1 ile 2 bar arasıdır" + manometreden oku +
#     "Basınç çok düşük olduğunda ısıtma suyu ilave edin" + Res.3 kumanda paneli kapağı açık/manometre s.4 ·
#     yalnız soğukken ilave, doldurma ünitesinin yeri, "Doldurma vanasını açın … 1 ile 2 bar … tekrar kapatın", 3 bar s.5 ·
#     reset iki yolu, arıza giderilemezse servis + tip etiketi s.7
# B2) Logamax plus GB022i-20 KD H Kullanma Kılavuzu 6721835260 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf
#     HTTP 200 · 577.309 B · 16 s. · md5 285eeb793f4a256196ab942d187cff31
#     "Sisteme sık su ekleniyorsa … su kaçaklarının çok olduğunu gösterir … Kaçakların giderilmesi gerekmektedir" s.5 ·
#     "doldurulması işlemi, ısıtma tesisatına göre farklılık gösterir … göstermesini isteyin" s.12
# B3) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf
#     HTTP 200 · 1.305.490 B · 16 s. · md5 e90532810ee5ec5e8414b1c01e659a75
#     "Tesisat kaçakları" s.3 · "göstermesini isteyin" s.5 (U072 dışı modelin kılavuzu; yalnız genel uyarı olarak kullanıldı)
# BİLEREK yazılmayanlar:
#  - Aşırı ısınmanın arkasındaki parça (pompa, sensör, eşanjör vb.): sayfa sebebi saymıyor.
#  - Kalorifer vanasının "hangi" vana olduğu / nerede durduğu (sayfa yalnız "kalorifer vanaları" diyor).
#  - Su takviye musluğunun her modelde saat yönünün tersine açıldığı: yalnız 4C sayfasının tarifi olarak verildi;
#    U072 kılavuzu "doldurma vanası" diyor ve yön vermiyor — ikisi yan yana.
#  - Basınç hedefi için tek rakam: sayfa 1,2–1,5 bar, U072 kılavuzu 1–2 bar; ikisi yan yana.
#  - U052/U062 kullanma kılavuzu bu koşuda bulunamadı; o modeller için yalnız kod sayfası esas alındı.
#  - Buderus müşteri hattı numarası (sayfada var; gövdeye alınmadı).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombiye su eklemeden önce soğumasını bekle; kılavuz ısıtma suyunun yalnız cihaz soğukken ilave edilmesini istiyor."
  - "Kontrol panelinden ya da manometreden su basıncını oku."
  - "Basınç 1 bar'ın altındaysa doldurma vanasını açıp basıncı yükselt, hedefe gelince vanayı kapat."
  - "Basınç normalse kalorifer vanalarına bak; kapalı olanları aç."
  - "Kombiyi açıp kapatarak ya da reset tuşuyla bir kez resetle; tuşu 30 saniyeden uzun basılı tutma."
  - "4C sürüyorsa kod ve model bilgisiyle Buderus yetkili servisini ara."
faq:
  - q: "Buderus kombide 4C hatası ne demek?"
    a: "Buderus'un 4C sayfasına göre 4C, kombi tesisatındaki su sıcaklığının maksimum değeri aşarak aşırı ısınmaya yol açtığı anlamına gelir. Bu durumda kombi kendini güvenlik moduna geçirir, kendini bloke eder ve çalışmayı durdurur."
  - q: "4C hatasında basınç kaç bar olmalı?"
    a: "Buderus'un 4C sayfası kombi su basıncında ideal aralığı 1,2-1,5 bar olarak veriyor ve basınç 1 bar'ın altındaysa su basılmasını söylüyor. Logamax U072 kullanma kılavuzu ise çalışma basıncını normal şartlarda 1 ile 2 bar arası veriyor ve ısıtma suyunun en yüksek sıcaklığında 3 bar'ın aşılmamasını istiyor."
  - q: "Buderus kombiye nasıl su basılır?"
    a: "4C sayfası, kombinin altındaki su takviye musluğunu saat yönünün tersine çevirerek basıncı 1,2-1,5 bar'a yükseltmeyi tarif ediyor. U072 kılavuzuna göre doldurma ünitesi cihazın alt tarafında, ısıtma gidiş suyu ile sıcak kullanım suyu çıkış bağlantısı arasındadır: doldurma vanası açılır, manometrede 1 ile 2 bar arası görünene kadar doldurulur ve vana tekrar kapatılır. Su yalnız cihaz soğukken eklenmeli."
  - q: "Basınç normal ama 4C gitmiyor, ne yapmalıyım?"
    a: "Buderus'un sırasına göre basınç normalse kalorifer vanaları kontrol edilir, kapalıysa açılır; ardından kombi resetlenir. Tüm bu adımlara rağmen 4C sürüyorsa sayfa Buderus yetkili servisine başvurulmasını istiyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; borular arasındaki küçük doldurma vanasına uzanan bir el, yanda duvarda bir kalorifer peteğinin yan vanası"
---

Kombi birden durdu ve ekranda **4C** var. Buderus'un 4C sayfasına göre bu kod, **kombi tesisatındaki su sıcaklığının maksimum değeri aşarak aşırı ısınmaya yol açtığı** anlamına geliyor. Bu olunca kombi **kendini güvenlik moduna geçirir**, bloke eder ve çalışmayı durdurur. Yani kombi kendini korumak için durdu. Sayfanın verdiği sıra şu: su basıncı, kalorifer vanaları, reset; hepsine rağmen kod sürüyorsa yetkili servis.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 4C = Buderus'a göre aşırı ısınma, kombi kendini bloke eder. Sıra şu: kombiyi soğumaya bırak → basıncı oku → 1 bar'ın altındaysa su bas → basınç normalse kalorifer vanalarını aç → bir kez reset → sürüyorsa yetkili servis.

## Hangi Buderus kombilerde 4C var

Buderus'un arıza kodları sayfası 4C'yi yalnız **Logamax U022, U072, U052 ve U062** listelerinde veriyor. Bu yazıdaki kullanım adımları Buderus'un **Logamax U072** kullanma kılavuzundan; diğer U modellerinde kendi kılavuzun esastır.

Kombin GB serisindense (GB072, GB172i vb.) 4C o modellerin listesinde yok; kendi kodunu [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) tablosunda bul.

## Adım adım: evde denenecekler

**1. Önce kombiyi soğumaya bırak.** Aşırı ısınma kodundan söz ediyoruz ve sıradaki adım su eklemek olabilir. U072 kılavuzu uyarıyor: ısıtma suyu ilave edilirken sıcak ısı bloğunda gerilme nedeniyle çatlaklar oluşabilir; **ısıtma suyunu yalnız cihaz soğuk durumdayken ilave et.**

**2. Basıncı oku.** 4C sayfası basıncın kombinin **kontrol paneli** üzerinden kontrol edilebileceğini söylüyor. U072 kılavuzunda basınç **manometreden** okunur; kılavuzun resmine göre manometre, kumanda panelinin kapağı açıldığında görünür. Bu kapak kumanda panelinin önündeki kapaktır; kombinin dış sacı değildir ve Buderus dış sacın **asla sökülmemesini** istiyor.

**3. Basınç düşükse su bas.** 4C sayfasına göre kombi su basıncında ideal aralık **1,2–1,5 bar**; basınç **1 bar'ın altındaysa** kombiye su basarak basıncı artırabilirsin. İki belge suyu şöyle tarif ediyor:

- **4C sayfası:** kombinin altındaki **su takviye musluğunu saat yönünün tersine** çevirerek basıncı 1,2–1,5 bar'a yükselt.
- **U072 kılavuzu:** doldurma ünitesi cihazın alt tarafında, ısıtma tesisatı gidiş suyu ile sıcak kullanım suyu çıkış bağlantısı arasındadır. **Doldurma vanasını aç**, manometrede **1 ile 2 bar** arası görünene kadar doldur, **vanayı tekrar kapat.**

Üst sınır da kılavuzda yazılı: ısıtma suyunun en yüksek sıcaklığında bile **3 bar** aşılmamalı; aşılırsa basınç normale gelene kadar emniyet ventili açılır.

**4. Basınç normalse kalorifer vanalarına bak.** 4C sayfasına göre basınç ideal aralıktaysa sıradaki kontrol **kalorifer vanaları**; kapalıysa aç.

**5. Bir kez resetle.** 4C sayfası resetin kombiyi **açıp kapatarak** ya da **reset düğmesine basarak** yapılabileceğini söylüyor. U072 kılavuzu iki durumu ayırıyor: ekranda iki arıza sembolü birlikte görünüyorsa **ok** tuşuna basıp semboller kaybolana kadar basılı tut; tek sembol görünüyorsa cihazı **Stand-by (bekleme modu)** tuşuyla kapatıp tekrar çalıştır. Cihaz tekrar çalışınca ekranda gidiş suyu sıcaklığı görünür.

Tuşa ne kadar basacağının bir sınırı var: Buderus'un **Fd** sayfasına göre ekranda Fd, reset tuşuna yanlışlıkla **30 saniyeden uzun** basıldığını gösterir; çözüm tuşa 30 saniyeyi aşmayacak şekilde basmaktır.

**6. Kod sürüyorsa dur.** Buderus'un ifadesiyle: tüm bu adımlara rağmen 4C veriyorsa çözüm için **Buderus yetkili servisine** başvur.

## Basınç sık düşüyorsa

Su bastıktan kısa süre sonra basınç yine düşüyorsa bunu servise mutlaka söyle. Buderus'un GB022i ve GB072 kılavuzlarındaki uyarıya göre sisteme **sık su ekleniyorsa** bu, sistemde su kaçağı olduğunu gösterir; her doldurmada sisteme oksijen girer, korozyon artar ve kaçakların giderilmesi gerekir. Basıncın mantığı için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) ve [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) yazılarına bakabilirsin.

## Ne zaman doğrudan servis

- Basınç, kalorifer vanaları ve reset tamam olduğu hâlde 4C geri geliyorsa.
- Basınç doldurduktan sonra kısa sürede yine düşüyorsa.
- Doldurma vanasını ya da musluğu bulamıyorsan: Buderus'un GB022i ve GB072 kılavuzları doldurma işleminin tesisata göre farklılık gösterdiğini yazıyor ve yetkili servisten nasıl yapıldığını **göstermesini istemeni** öneriyor.

U072 kılavuzu, arıza giderilemediğinde yetkili servisi ya da müşteri hizmetlerini aramanı ve **arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor; bu bilgiler **kumanda paneli kapağındaki tip etiketinde** yazılıdır.

## Servisi aramadan önce kısa kontrol

1. Kombi soğukken basınç kaç bar?
2. Su eklendiyse basınç ne kadar sürede düştü?
3. Kalorifer vanaları açık mı?
4. Reset bir kez denendi mi, kod geri geldi mi?
5. Model adı tip etiketinden okundu mu?

Kombi yanıyor ama petekler ısınmıyorsa [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısı peteğin neresinin soğuk olduğuna göre sebebi ayırıyor.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
