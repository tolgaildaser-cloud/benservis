---
title: "Kombi sirkülasyon pompası arızası nasıl anlaşılır?"
description: "Kombi sirkülasyon pompası ne işe yarar, arızası hangi kodla görünür, havayı kim alır? ECA, DemirDöküm, Baymak, Alarko ve Bosch kılavuzları ne diyor?"
slug: "kombi-sirkulasyon-pompasi-arizasi"
date: "2026-10-19"
category: "Kombi"
parca:
  cihaz: "kombi-termosifon"
  tur: "sirkulasyon-pompasi"
# --- Provenans (yayında görünmez) ---
# 2026-10-19 PAZ (#164 C-6, #165 C şablonu). Kanıt: seo/2026-10-09-KAPSAM-ANALIZI.md §11.5 s.696 üretim sırası #6 "Kombi / Termosifon | sirkülasyon pompası | 5 | 5 | kombi hava basma pompası; kombi ısı pompası" (analizdeki örnek ifadeler zayıf: "ısı pompası" ayrı ürün; başlık otomatik tamamlamadan kuruldu). Otomatik tamamlama (19 Eki 2026, client=chrome hl=tr gl=tr): "kombi sirkülasyon pompası" → … fiyat · … arızası · … ne işe yarar · … tamiri · … değişimi · … elektrik bağlantı şeması · … arızası nasıl anlaşılır · … kademe ayarı · … temizliği · … sürekli çalışır mı · … yetersiz · … havası nasıl alınır · … ses yapıyor · … su kaçırıyor · … nasıl sökülür; "kombi pompası" → … ne kadar · … ne işe yarar · … bozuk olduğu nasıl anlaşılır · … neden bozulur · … nasıl temizlenir · … arızası · … tamir edilir mi · … hava alma · … su kaçırıyor · … ses yapıyor · … sürekli çalışıyor · … nasıl sökülür · … wilo · kombi pompasının yetersiz olduğu nasıl anlaşılır · kombi pompasından su sesi gelmesi; "kombi pompa" → … sıkışması · … arızası belirtileri · … sıkışması nasıl giderilir · … kapasitörü. Ham çıktı: kaynak-kombi-pompa-19eki/OTOMATIK-TAMAMLAMA-2026-10-19.txt
# #88 kaynaklar (yerel blog-taslaklar/kaynak-kombi-pompa-19eki/, MD5-2026-10-19.txt; sayfa = PDF sayfası):
#   ECA Confeo Premix Kullanma Kılavuzu https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf md5 4ef56163ac14c46f9cb1dcb9ea189681 — s.4, s.5, s.7, s.8, s.22, s.26, s.27, s.28, s.30, s.42
#   DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01 https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf md5 3340a11b923b7332f8eb8685297970b6 — s.4, s.5, s.9, s.12, s.15
#   DemirDöküm Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (yetkili servise yönelik) https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf md5 bdff16276288ebddd6c6cbf82d47c864 — s.3, s.7, s.20, s.22, s.29, s.31, s.34
#   Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122 Rev.2 https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf md5 723546ecd63c99eaecb5c3143c687c2a — s.4, s.14, s.17
#   Alarko Seradens Super SRS 20/24/28/36 Montaj ve Kullanım Kılavuzu Kod A.1.4.8 Rev. 31/10/2024 https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/kombi-alarko-srs-kk.pdf md5 1d7022ad1322561828a456f621227d10 — s.11, s.16, s.31, s.34, s.42
#   Bosch Condens 2500 W WBC 24-1 DCE Kullanma Kılavuzu 6721835246 (2021/03) yerel kopya kaynak-bosch-kombi-sprint/kk-6721835246.pdf (indirme URL'si kayıtta yok; MD5SUMS-2026-09-28.txt aynı md5) md5 81853ab2ff146ad75d9398dc0c9832b0 — s.5, s.11, s.12
# BİLEREK YAZILMAYANLAR: pompanın havasını pompa üzerinden alma, pompa sökme/temizleme, "sıkışma nasıl giderilir", kapasitör, elektrik bağlantı şeması (sorgu var; kılavuzlar kullanıcıya tarif etmiyor, #31) · pompa kademe/güç ayarı (DemirDöküm servis kılavuzunda servis işi; yalnız "servis işi" diye anılır) · "pompa ses yapıyor" teşhisi (kılavuzlarda pompa sesine özel belirti yok; yalnız DemirDöküm'ün uygunsuz su → ses cümlesi) · "pompa su kaçırıyor" (belgede pompaya özel kaçak bilgisi yok; genel su kaçağı yazısı ayrı) · Wilo/Grundfos marka adları, pompa ömrü · Baymak'ta pompaya özel kod (Duotec kullanma kılavuzu hata tablosunda yok) · Vaillant F.75 (bu turda Vaillant belgesi sayfa sayfa açılmadı) · fiyat/TL, "ne kadar", pazaryeri bağlantısı (#46) · `urun:` (bilerek boş; katalogdaki tek kayıt 0d73b1ee… "Kombi pompası — Üniversal (Grundfos 15-60)" uyumlu_modeller boş, üreticiler orijinal parça istiyor; 17 Eki C-5 ölçütü).
# Alıntı denetim tablosu: kombi-sirkulasyon-pompasi-arizasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Not defteri ya da telefon"]
steps:
  - "Ekrandaki hata kodunu ve kombi soğukken su basıncını not et."
  - "Basınç düşükse kendi kılavuzundaki gibi doldur; doldurma musluğunu çok yavaş aç ki sisteme hava girmesin."
  - "Ekranda hava alma modu (ECA'da AP) görünürse reset'e basma, modun kendiliğinden bitmesini bekle."
  - "Radyatör vanalarının ve kombinin kalorifer gidiş-dönüş vanalarının açık olduğunu kontrol et."
  - "Kılavuzun radyatörlerden hava almayı sana bırakıyorsa purjörden al; bırakmıyorsa bu adımı servise bırak."
  - "Kod geri geliyorsa kapağı açma; model, kod ve basınç notlarıyla yetkili servisi ara."
faq:
  - q: "Kombi sirkülasyon pompası ne işe yarar?"
    a: "Isıtma suyunu kombi ile radyatörler arasında dolaştırır. Bosch, ısıtma tesisatının donmaya karşı korunmasının ancak sirkülasyon pompası çalışıp tüm tesisatta sirkülasyon sağlandığında mümkün olduğunu yazıyor. Pompa kombinin içindedir: ECA'nın parça listesinde, DemirDöküm'ün hidrolik bloğunda 'yüksek verimli pompa' olarak geçer."
  - q: "Kombi pompası arızası nasıl anlaşılır?"
    a: "Kesin teşhisi yetkili servis koyar; sen ekrandaki koda bakarsın. ECA'da F10 'yetersiz su sirkülasyonu hatası', F10 24 saatte dört kez olursa E10 görünür. DemirDöküm'ün servis tablosunda F.23 'sıcaklık farkı çok büyük' kodunun olası nedenleri arasında pompanın bloke olması, düşük güçte çalışması ve üründe hava olması sayılıyor."
  - q: "Kombi pompası sürekli çalışır mı?"
    a: "Modele ve ayara göre değişir. Bosch'ta yaz işletiminde sirkülasyon pompası, dolayısıyla ısıtma kapalıdır. DemirDöküm'ün servis kılavuzunda pompanın brülörle birlikte mi, sürekli mi çalışacağı servisin ayarladığı bir parametre. Kendi kombinin davranışını kılavuzundan ya da servisten öğren."
  - q: "Kombi pompasının havası nasıl alınır?"
    a: "Kılavuzlar pompanın havasını almayı kullanıcıya tarif etmiyor; kombinin kendi hava alma modu var. ECA'da elektrik verilince ya da basınç hatası geçince yaklaşık 160 saniyelik AP modu çalışır, bu sırada reset'e basılmaz. Alarko'da her elektrik kesintisinden sonra pompa 3 dakika hava atma fonksiyonunda çalışır. Radyatörlerden hava almayı ECA kullanıcıya bırakıyor; DemirDöküm 'ısıtma sisteminde hava var' durumunda havanın yetkili servis tarafından alınmasını istiyor."
  - q: "Kombi pompası neden bozulur?"
    a: "Kılavuzlar tesisattaki kire ve suya dikkat çekiyor. Alarko, pompanın yabancı maddelerden zarar görmemesi için dönüş hattına pislik tutucu konmasını ve servisçe temizlenmesini istiyor; oksijen bariyersiz yerden ısıtmada suyun koyulaşıp pompayı tıkayabileceğini yazıyor. ECA, eski demir borulu tesisatlarda tıkanıklık olabileceğini belirtiyor. DemirDöküm'e göre uygun olmayan su, su geçen parçaları tıkar ve ses yapar."
  - q: "Pompayı kendim söküp temizleyebilir miyim?"
    a: "Hayır. DemirDöküm üründe kendi başına bakım ya da onarım yapılmamasını istiyor; ECA tüm tamiratı yetkili servise bırakıyor. Pompanın kontrolü, temizliği, güç ayarı ve değişimi yetkili servis işidir."
images:
  coverAlt: "Duvara asılı beyaz kombinin altından radyatöre giden borular ve boru üzerinde dairesel akış okları, sade çizim"
  steps:
    - "Kombi ekranında harfsiz uyarı üçgeni simgesi, yanında rakamsız basınç göstergesi ve not defteri"
    - "Kombinin altında mavi kollu doldurma musluğu yakın plan, yanında yavaş dönüşü anlatan kısa yay ok"
    - "Kombi ekranında kum saati simgesi, yanında üstü çizili sıfırlama tuşu simgesi"
    - "Radyatör vanası ve kombinin altındaki iki boru vanası, kolları açık konumda"
    - "Radyatörün üst köşesindeki küçük hava alma purjörü yakın plan, yanında küçük kabarcık simgeleri"
    - "Kapağı kapalı kombi, telefon, model etiketi ve not defteri: servisi aramaya hazır bilgiler"
---

Petekler ısınmıyor, kombi çalışıyor gibi ama ev ısınmıyor ya da ekranda bir sirkülasyon kodu var. Akla gelen parçalardan biri **sirkülasyon pompası**: ısıtma suyunu kombiden radyatörlere ve geri dolaştıran parça. Kodu okumak, basıncı izlemek ve kılavuzun sana bıraktığı kontrolleri yapmak senin işin; pompanın kontrolü, temizliği ve değişimi **yetkili servis işi**.

Bu yazıdaki bilgiler üreticilerin kendi belgelerinden: **ECA** (Confeo Premix), **DemirDöküm** (Nitromix kullanma ile montaj ve bakım kılavuzları), **Baymak** (Duotec), **Alarko** (Seradens Super SRS) ve **Bosch** (Condens 2500 W). Kendi kombinin kodları ve ayarları kendi kılavuzunda yazar. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Pompa kombinin içinde, ısıtma suyunu tesisatta dolaştırır. Sorun genelde ekrana kod olarak yansır: ECA'da **F10** "yetersiz su sirkülasyonu", tekrarlarsa **E10**; DemirDöküm'ün servis tablosunda **F.23**'ün nedenleri arasında **pompanın bloke olması** ve **üründe hava** var. Önce basınca ve vanalara bak; kod sürerse kapağı açma, yetkili servisi ara.

## Sirkülasyon pompası ne yapar?

Pompa ısıtma suyunu kombi ile radyatörler arasında döndürür. Bosch'un kılavuzuna göre ısıtma tesisatı ancak sirkülasyon pompası çalıştığında ve tüm tesisatta sirkülasyon sağlandığında donmaya karşı korunabilir. Kombinin kendi donma koruması da pompayı kullanır: DemirDöküm'de gidiş suyu 8°C'nin altına inince donma koruması ısıtma pompasını başlatır.

Pompanın her zaman çalışması gerekmez. Bosch'ta **yaz işletiminde** sirkülasyon pompası, dolayısıyla ısıtma kapalıdır. DemirDöküm'ün servis kılavuzunda pompanın brülörle birlikte mi, sürekli mi çalışacağı servisin ayarladığı bir seçenek. Yazın pompanın durması bu yüzden kendi başına arıza demek değil.

Kombiler pompayı korumak için kendi önlemlerini de alır:

| Koruma | Kılavuzdaki adı | Kaynak |
|---|---|---|
| Pompa sıkışmasına karşı | "Pompa Sıkışma Emniyeti" | ECA |
| Sıkışmaya karşı | "Pompa sıkışma önleme fonksiyonu"; kombi kapalı (OFF) konumdayken de "pompa kilitlenme koruması" çalışır | Alarko |
| Uzun süre kullanılmamaya karşı | Tesisat uzun süre kullanılmadığında pompa ve 3 yollu vananın bloke olmasını önleyen "blokaj koruması"; bekleme modunda da etkin | Bosch |
| Hava | "Otomatik Hava Purjörü" | ECA |

## Hangi kod pompayı işaret edebilir?

| Kod | Kılavuzdaki anlamı | Kılavuzun önerisi | Kaynak |
|---|---|---|---|
| ECA **F10** | Yetersiz su sirkülasyonu hatası; olası neden tesisat tıkanıklığı | Yetkili servise bildir | ECA |
| ECA **E10** | F10 hatası 24 saat içinde dört kez meydana geldi; kurulum hatalı olabilir | Yetkili servise bildir | ECA |
| DemirDöküm **F.23** | Emniyet kapatması, sıcaklık farkı çok büyük; nedenler arasında pompa bloke, pompa düşük güçte, üründe hava | Servis pompanın işlevini kontrol eder, sistemin havasını alır | DemirDöküm servis kılavuzu |

Bu kodlar pompanın kesin arızalı olduğunu söylemez. DemirDöküm'ün tablosunda aynı kodun nedenleri arasında sensör bağlantılarının karışması da var; ECA F10'da tesisat tıkanıklığını gösteriyor. Baymak'ta ekranda bir kod görürsen RESET tuşuna basmanı, sorun sürerse mutlaka yetkili servisi aramanı istiyor.

## Hava ve pompa

Sistemdeki hava suyun dolaşmasını bozar; kombiler bunun için kendi hava alma modunu çalıştırır.

- **ECA:** Elektrik verildiğinde, E03 sonrası resetten sonra ve F37 ya da F40 basınç hatası geçince kombi yaklaşık **160 saniyelik AP modu**na girer. Bu sırada pompa aralıklı çalışır, ekranda "AP" yazar. ECA bu sırada **reset'e basmamanı** istiyor.
- **Alarko:** Her elektrik kesintisinden sonra kombi yeniden çalışınca pompa **3 dakika** boyunca tesisattaki havayı boşaltmak için hava atma fonksiyonunda çalışır.
- **Doldururken:** Baymak, hava yapmaması için doldurma musluğunu **çok yavaş** açmanı istiyor.
- **Radyatörlerden hava:** ECA bunu kullanıcıya bırakıyor: radyatör purjörleri gevşetilir, su gelene kadar hava çıkarılır, sonra basınç yeniden kontrol edilir. ECA'nın garanti şartlarında da ısıtma sistemi hava alma kullanıcı seviyesinde bir işlem olarak geçiyor. DemirDöküm ise arıza tablosunda "ısıtma sisteminde hava var" durumunda havanın **yetkili servis** tarafından alınmasını istiyor. Kendi kılavuzun ne diyorsa ona uy.

Pompanın kendisinden hava almayı kılavuzlar kullanıcıya tarif etmiyor. DemirDöküm'de bu iş servis kılavuzundaki bir kontrol programıyla yapılıyor.

## Pompayı ne zorlar?

Kılavuzlar pompayı en çok tesisattaki kirden ve sudan koruyor:

- **Kir ve yabancı madde:** Alarko, pompanın tesisattaki yabancı maddelerden zarar görmemesi için ısıtma dönüş hattına pislik tutucu konmasını ve periyodik temizlenmesini istiyor; bu iş için yetkili servise başvurulmasını yazıyor.
- **Eski tesisat:** ECA'ya göre demir borulu eski tesisatlarda ilk çalıştırmadan kısa süre sonra tıkanıklık görülebiliyor; bu durumda tesisat suyuna inhibitör eklenmesini yazıyor. Bunu servisle konuş.
- **Yerden ısıtma:** Alarko, oksijen bariyersiz yerden ısıtma borularında suyun koyulaşıp eşanjör ve pompa tıkanmalarına yol açabileceğini belirtiyor.
- **Uygun olmayan su:** DemirDöküm'e göre çok kireçli ya da kimyasal içeren su, su geçen parçaları tıkar ve seslere neden olur; ısıtma sistemine yalnız uygun kalorifer suyu doldurulmalı.

## Senin yapabileceklerin: adım adım

**1. Kodu ve basıncı not et.** Kombi soğukken ekrandaki basıncı ve varsa kodu yaz. Düşük basınç da dolaşımı etkiler; ayrıntı için [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor) yazısına bak.

**2. Basınç düşükse doldur.** Kendi kılavuzundaki aralığa kadar doldur; Baymak'ın uyarısıyla musluğu çok yavaş aç. Basınç düşmesi sık tekrarlanıyorsa Baymak yetkili servise başvurmanı istiyor.

**3. Hava alma modunu bekle.** Ekranda ECA'daki "AP" gibi bir hava alma modu görürsen reset'e basma, kendiliğinden bitmesini bekle.

**4. Vanaları kontrol et.** ECA, radyatör vanalarının ve kombinin kalorifer gidiş-dönüş vanalarının açık olmasını istiyor; aşırı ısınma kodunda (E03) en az bir radyatörün açık olduğundan emin olmanı yazıyor. Peteklerin bir kısmı ısınmıyorsa [petekler ısınmıyor](/blog/petekler-isinmiyor) yazısı da yol gösterir.

**5. Radyatör havası.** Kılavuzun bunu sana bırakıyorsa (ECA) purjörden su gelene kadar havayı al, sonra basıncı yeniden kontrol et. Bırakmıyorsa (DemirDöküm) bu adımı servise bırak.

**6. Kod sürüyorsa servis.** Kapağı açma, pompaya dokunma. Model, kod ve basınç notlarıyla yetkili servisi ara.

## Değişim ve ayar: yalnız yetkili servis

- **Kendi başına onarım yok.** DemirDöküm kullanma kılavuzu üründe kendi başına bakım ya da onarım yapılmamasını, arızaların hemen yetkili teknik servise giderttirilmesini istiyor. ECA'da tüm tamirat ve yıllık bakım yetkili servisin işi.
- **Pompa ayarı servis işi.** "Kademe ayarı" diye aranan pompa gücü ayarı, DemirDöküm'de montaj ve bakım kılavuzunda; yani yetkili servisin yaptığı bir iş.
- **Pislik tutucu temizliği.** Alarko bunun için yetkili servise başvurulmasını yazıyor.

## Gaz kokusu alırsan

Pompa arızası gazla ilgili değil; ama kombinin başındayken gaz kokusu alırsan kılavuzlardaki adımlar şunlar:

- Baymak gaz kaynağını kapatmanı, kapı ve pencereleri açmanı istiyor.
- ECA'ya göre elektrikli cihazların düğmelerine ve fişlerine dokunma; zaman kaybetmeden **187** doğal gaz acil hattına ve en yakın yetkili servise haber ver.
- DemirDöküm binayı terk etmeni, gaz şirketinin acil birimini **evin dışındaki bir telefondan** aramanı ve diğer bina sakinlerini uyarmanı istiyor.

## Ne zaman servis?

| Durum | Ne yapılır |
|---|---|
| ECA F10 ya da E10 | Yetkili servis |
| DemirDöküm F.23 tekrar ediyor | Yetkili servis |
| Doldurduktan sonra basınç sık sık düşüyor | Tesisatçı (kaçak) ya da yetkili servis |
| Yıllık bakım zamanı | Yetkili servis |

## Pompa nereden alınır?

Pompa kombinin içindeki bir parça ve modele göre değişir. Doğru parçayı yetkili servis üreticinin listesinden seçer ve takar; ECA, orijinal yedek parça dışındaki parçalardan doğan hasarları garanti dışı sayıyor.

Cihazını ve gördüğün belirtiyi benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Önce öğren, sonra çağır.
