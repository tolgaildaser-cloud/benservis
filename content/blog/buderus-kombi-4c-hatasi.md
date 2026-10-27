---
title: "Buderus kombi 4C hatası: ne demek, nasıl çözülür?"
description: "Buderus kombide 4C, tesisat suyunun aşırı ısındığını ve kombinin kendini bloke ettiğini gösterir. Buderus'un sırası: basınç, kalorifer vanası, reset."
slug: "buderus-kombi-4c-hatasi"
date: "2026-09-27"
updated: "2026-10-29"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ (YK #189 fırsat sayfası, yayın 29 Eki): içerik iyileştirmesi; slug, şablon, 6 adım ve images aynı (YK #179).
# GSC (www-9 Sorgular.csv, 7 gün): "buderus 4c hatası" 188 gösterim poz 9,69 · "buderus kombi 4c hatası" 142 · "buderus 4 c hatası" 81 · "buderus 4c" 26 · "kombi 4c hatası" 19 · "buderus kombi 4c arızası nedir" 12.
# Belgeler bu koşuda curl -sL --http1.1 -A "Mozilla/5.0 …" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
# K1) Buderus TR "4C Arıza Kodu"  https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/4c-ariza-kodu/  md5 2b89024df0dd1645ea7f811bd144bec5 (dinamik sayfa; metin 27 Eyl ile birebir)
# K2) Buderus TR "Arıza Kodları ve Çözümleri" dizini  …/ariza-kodlari-ve-cozumleri/  md5 4da916dcd1d62156d730fcf390e65172 — 4C yalnız Logamax U022, U072, U052, U062 listelerinde; Fd yalnız U022/U072'de
# K3) Fd sayfası md5 e69be48a0273b764f642e54bf7803c66 · K4) 2E sayfası md5 04440966109d48a49094fb2845edaafb · K5) 4L sayfası md5 0b8b9c897ff5e5977604464e58b637f1
# B1) Logamax U072 Kullanma Kılavuzu 6720813734  https://buderus-tr-tr-c.boschhc-documents.com/download/file/file/6720813734.pdf  12 s.  md5 0f67df9c94f4db798d5c3ce9c8b462b8 (s.3, 4, 5, 7)
# B2) GB022i Kullanma Kılavuzu 6721835260  md5 285eeb793f4a256196ab942d187cff31 (s.5, 12) · B3) GB072 Kullanma Kılavuzu 6721835150  md5 e90532810ee5ec5e8414b1c01e659a75 (s.3, 5)
# B4) Logamax plus GB062-24/20 KD H V2 Montaj ve Bakım Kılavuzu 6721857197 (2025/06, uzmana yönelik)  https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721857197.pdf  56 s.  md5 0dc68dfafa76a78d16f4f8c8f35c546f — 4C satırı s.39
# Tam liste, alıntılar ve md5'ler: buderus-kombi-4c-hatasi.KAYNAK.md
# Bilerek YAZILMAYANLAR: U serisinde 4C'nin arkasındaki parça (K1 sebep saymıyor; B4'ün listesi yalnız GB062 V2 için ve yalnız uzmana yönelik olarak verildi); U022/U052/U062 kullanma kılavuzu bu koşuda bulunamadı; müşteri hattı numarası.
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
    a: "Buderus'un sırasına göre basınç normalse kalorifer vanaları kontrol edilir, kapalıysa açılır; ardından kombi resetlenir. Tüm bu adımlara rağmen 4C sürüyorsa sayfa Buderus yetkili servisine başvurulmasını istiyor. Buderus'un GB062 V2 montaj ve bakım kılavuzu da 4C için sınırlayıcı, pompa ve ısı bloğu kontrollerini uzmana bırakıyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; borular arasındaki küçük doldurma vanasına uzanan bir el, yanda duvarda bir kalorifer peteğinin yan vanası"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kombi birden durdu ve ekranda **4C** var (aramalarda "4 C" diye ayrı da yazılıyor). Kısa cevap: Buderus'un 4C sayfasına göre bu kod, **kombi tesisatındaki su sıcaklığının maksimum değeri aşarak aşırı ısınmaya yol açtığı** anlamına geliyor. Bu olunca kombi **kendini güvenlik moduna geçirir**, bloke eder ve çalışmayı durdurur. Yani kombi kendini korumak için durdu. Sayfanın verdiği sıra şu: su basıncı, kalorifer vanaları, reset; hepsine rağmen kod sürüyorsa yetkili servis.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 4C = Buderus'a göre aşırı ısınma, kombi kendini bloke eder. Sıra şu: kombiyi soğumaya bırak → basıncı oku → 1 bar'ın altındaysa su bas → basınç normalse kalorifer vanalarını aç → bir kez reset → sürüyorsa yetkili servis.

## Hangi Buderus kombilerde 4C var

Buderus'un arıza kodları sayfası 4C'yi yalnız **Logamax U022, U072, U052 ve U062** listelerinde veriyor. Bir istisna da belgelerde var: Buderus'un **Logamax plus GB062 V2** montaj ve bakım kılavuzunun arıza tablosunda da 4C satırı bulunuyor. Model ayrımı şöyle:

| Model | 4C nerede geçiyor | Belgenin tanımı | Bu yazıdaki adımların kaynağı |
|---|---|---|---|
| Logamax U072 | Arıza kodları sayfası | Su sıcaklığı maksimumu aştı, aşırı ısınma | 4C sayfası + U072 kullanma kılavuzu |
| Logamax U022 | Arıza kodları sayfası | Aynı 4C sayfası | 4C sayfası (kullanma kılavuzu bulunamadı) |
| Logamax U052, U062 | Arıza kodları sayfası | Aynı 4C sayfası | 4C sayfası (kullanma kılavuzu bulunamadı) |
| Logamax plus GB062-24/20 KD H V2 | Montaj ve bakım kılavuzu, s.39 | Yanma gövdesi sıcaklık sınırlayıcısı veya atık gaz sınırlayıcısı devreye girdi | Kılavuz uzmana yönelik; kullanıcıya düşen basınç kontrolü |
| GB022i, GB072, GB122i, GB172i, GB012, GB042 | Arıza kodları sayfasında 4C yok | – | Kendi kodunu hub tablosunda ara |

Kombin bu listede 4C'siz bir GB modeliyse kodunu [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) tablosunda bul. Model adı cihazın tip etiketinde yazar; U072'de bu etiket kumanda paneli kapağındadır.

## Adım adım: evde denenecekler

**1. Önce kombiyi soğumaya bırak.** Aşırı ısınma kodundan söz ediyoruz ve sıradaki adım su eklemek olabilir. U072 kılavuzu uyarıyor: ısıtma suyu ilave edilirken sıcak ısı bloğunda gerilme nedeniyle çatlaklar oluşabilir; **ısıtma suyunu yalnız cihaz soğuk durumdayken ilave et.**

**2. Basıncı oku.** 4C sayfası basıncın kombinin **kontrol paneli** üzerinden kontrol edilebileceğini söylüyor. U072 kılavuzunda basınç **manometreden** okunur; kılavuzun resmine göre manometre, kumanda panelinin kapağı açıldığında görünür. Bu kapak kumanda panelinin önündeki kapaktır; kombinin dış sacı değildir ve Buderus dış sacın **asla sökülmemesini** istiyor.

**3. Basınç düşükse su bas.** 4C sayfasına göre kombi su basıncında ideal aralık **1,2–1,5 bar**; basınç **1 bar'ın altındaysa** kombiye su basarak basıncı artırabilirsin. İki belge suyu şöyle tarif ediyor:

- **4C sayfası:** kombinin altındaki **su takviye musluğunu saat yönünün tersine** çevirerek basıncı 1,2–1,5 bar'a yükselt.
- **U072 kılavuzu:** doldurma ünitesi cihazın alt tarafında, ısıtma tesisatı gidiş suyu ile sıcak kullanım suyu çıkış bağlantısı arasındadır. **Doldurma vanasını aç**, manometrede **1 ile 2 bar** arası görünene kadar doldur, **vanayı tekrar kapat.**

Üst sınır da kılavuzda yazılı: ısıtma suyunun en yüksek sıcaklığında bile **3 bar** aşılmamalı; aşılırsa basınç normale gelene kadar emniyet ventili açılır.

**4. Basınç normalse kalorifer vanalarına bak.** 4C sayfasına göre basınç ideal aralıktaysa sıradaki kontrol **kalorifer vanaları**; kapalıysa aç.

**5. Bir kez resetle.** 4C sayfası resetin kombiyi **açıp kapatarak** ya da **reset düğmesine basarak** yapılabileceğini söylüyor. U072 kılavuzu iki durumu ayırıyor: ekranda iki arıza sembolü birlikte görünüyorsa **ok** tuşuna basıp semboller kaybolana kadar basılı tut; tek sembol görünüyorsa cihazı **Stand-by (bekleme modu)** tuşuyla kapatıp tekrar çalıştır. Cihaz tekrar çalışınca ekranda gidiş suyu sıcaklığı görünür.

Tuşa ne kadar basacağının bir sınırı var: Buderus'un **Fd** sayfasına göre ekranda Fd, reset tuşuna yanlışlıkla **30 saniyeden uzun** basıldığını gösterir; çözüm tuşa 30 saniyeyi aşmayacak şekilde basmaktır. Fd, Buderus'un listesinde U022 ve U072'de geçiyor. Diğer modellerdeki tuş sırası için [Buderus kombi resetleme](/blog/buderus-kombi-resetleme/) yazısına bak.

**6. Kod sürüyorsa dur.** Buderus'un ifadesiyle: tüm bu adımlara rağmen 4C veriyorsa çözüm için **Buderus yetkili servisine** başvur.

## Servis 4C'de neye bakar

Buderus'un 4C sayfası U serisi için aşırı ısınmanın arkasındaki parçayı saymıyor; bu yüzden U modellerinde "şu parça bozuk" demek tahmin olur. GB062 V2'nin montaj ve bakım kılavuzu ise 4C için uzmanın yapacağı kontrolleri listeliyor: ısı bloğu ve atık gaz **sıcaklık sınırlayıcıları** ile kabloları, ısıtma tesisatının **çalışma basıncı**, **pompanın** çalışması, sigorta, cihazın havasının alınması ve ısı bloğunun su tarafı. Bu listeden kullanıcıya düşen tek adım basınç kontrolü; gerisi kombinin içinde ve servisin işi.

## Karıştırılan kodlar

- **2E ve 4L:** Buderus'un sayfalarına göre ikisi de **tesisat su basıncı düşük** demek ve basıncın 1,2 bar'a yükseltilmesini istiyor: [Buderus kombi 4L ve 2E hatası](/blog/buderus-kombi-4l-hatasi/).
- **6A:** ateşleme sorunu, gaz vanasından başlar: [Buderus kombi 6A hatası](/blog/buderus-kombi-6a-hatasi/).
- **Bulaşık makinesindeki 4C** kombiyle ilgisizdir, Samsung'da su tedarikiyle ilgilidir: [Samsung bulaşık makinesi 4C hatası](/blog/samsung-bulasik-makinesi-4c-hatasi/).

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
