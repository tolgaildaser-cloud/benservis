---
title: "LG çamaşır makinesi ses ve titreşim yapıyor"
description: "LG çamaşır makinesi titriyor ya da ses yapıyorsa LG'nin kılavuzundaki sebepler: yabancı cisim, dengesiz yük, nakliye cıvatası, ayarsız ayak, zemin."
slug: "lg-camasir-makinesi-ses-titresim"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, 29 Eyl belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; PDF md5'leri 28 Eyl yerel kopyalarıyla birebir.
# #88: web araması YALNIZ belgelerin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. ABD LG kaynağı kullanılmadı; hepsi LG Türkiye.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası.
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (sayfa atıfları esas olarak C)
# LG TR yardım kütüphanesi (www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-<id>/; dinamik HTML, md5 bu koşudaki indirme):
#  H5) 20153390177448DRC "Yıkama sırasında bir ses duyulur."  md5 705b5edf5241f4a7716253b14ca06a2b
#  H6) 20153390193381 "Yıkama esnasında gürültü mü var?"  md5 80baf837667daf269754ec43e3a5e109
# "Duyabileceğiniz Sesler" tablosu (C s.46 · A s.53-54 · B s.44), üç belgede aynı:
#   "Tıkırtı ve şıkırtı sesi | Tamburda bozuk para, emniyet pimi gibi yabancı nesneler olabilir. • Cihazı durdurun, tamburda yabancı nesnelerin olup olmadığını kontrol edin.
#     Cihaz yeniden başlatıldıktan sonra sesler devam ediyorsa servisi arayın."
#   "Vurma sesi | Makineye çok fazla kıyafet konması vurma sesine neden olabilir. Bu genellikle normal bir durumdur. • Ses devam ederse, cihazın muhtemelen balansı bozulmuştur.
#     Durdurun ve kıyafetleri yeniden dağıtın. · Kıyafetler dengesiz olabilir. • Programı durdurun ve kapının kilidi açıldıktan sonra kıyafetleri yeniden dağıtın."
#   "Titreme sesi | Paketleme malzemeleri çıkarılmamış. • Paketleme malzemelerini çıkarın. · Kıyafetler tamburda dengesiz şekilde dağıtılmış olabilir. • ...yeniden dağıtın.
#     · Tüm seviyelendirme ayakları zeminde sabit ve düzgün durmuyor. • ... Cihazın Seviyelendirilmesi talimatına bakın. · Zemin yeterince pürüzsüz değil. • Zeminin sert ve sabit olup olmadığını kontrol edin..."
# Kurulum: C s.13 (sabit zemin; beton en iyisi; ahşap zeminde lastik başlık; dört ayağı nakliye cıvatası anahtarıyla ayarla) · C s.15 nakliye cıvataları "Cihazın şiddetli titreşimini ve kırılmasını önlemek için"
#   çıkarılır, anahtar dahil · C s.15-17 seviyelendirme (üst plakanın kenarlarından çapraz bastır, yukarı-aşağı hareket etmemeli; ayağı çevir; su terazisi; kilitleme somunlarını sabitle;
#   ayağın altına tahta/karton koyma; ayakların ıslanması titreşim/ses; kaymaz tabanlar) · C s.19 "Tahliye hortumu çok uzunsa cihazın içine doğru zorlamayın. Bu normal olmayan sese neden olur."
#   · C s.3 "sıkma hızı ne kadar yüksekse ses o kadar yüksek" · C s.26 çamaşır filesini yarıdan az doldur, dengesizlik/yetersiz sıkma · C s.45 vs satırı "Titreşim sensörü arızalı. • Servisi arayın."
# H5/H6: önden yüklemede çamaşırın düşme sesi, fermuar/düğme tıkırtısı normal; cepleri boşalt, fermuar/düğmeleri kapat, ters çevir; su alırken yüksek basınçta boru sesi → musluğu yarıya kadar kapat;
#   uğultu: pompa (TurboWash/boşaltma) ve motorun tamburu döndürmesi, normal.
# BİLEREK YAZILMAYANLAR: amortisör/rulman/kazan arızası teşhisi (belgede yok) · ayak altına takoz (LG yasaklıyor) · kullanıcıya zemin güçlendirme işi · fiyat.
# Not: nakliye cıvatası çıkarma LG'de kurulum adımı (kullanıcıya verilmiş); yazıda "kontrol et, duruyorsa kurulumu yapan yetkili servise" çizgisi tutuldu (#31 temkini).
# Alıntı denetim tablosu: lg-camasir-makinesi-ses-titresim.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Su terazisi", "Makineyle gelen anahtar"]
steps:
  - "Programı durdur, kapı kilidi açılınca tamburda bozuk para ya da pim gibi yabancı cisim var mı bak."
  - "Çamaşırları tamburda yeniden dağıt; tek bir ağır parçayı birkaç küçük parçayla dengele."
  - "Sonraki yıkamalarda cepleri boşalt, fermuar ve düğmeleri kapat."
  - "Makine yeni kurulduysa paketleme malzemelerinin ve arkadaki nakliye cıvatalarının çıkarıldığından emin ol."
  - "Üst plakanın kenarlarından çapraz bastır; makine sallanıyorsa ayakların ayarı gerekir."
  - "Fişi çek, ayakları anahtarla çevirerek makineyi düzle, su terazisiyle kontrol et ve kilitleme somunlarını sabitle."
  - "Zeminin sert ve sabit, ayakların kuru olduğundan emin ol; kaygan zeminde kaymaz taban kullan."
  - "Tahliye hortumunun makinenin arkasına ya da içine doğru zorlanmadığını kontrol et."
faq:
  - q: "LG çamaşır makinesi sıkmada neden çok titriyor?"
    a: "LG'nin Türkçe kullanım kılavuzlarındaki 'Titreme sesi' satırı dört sebep sayıyor: paketleme malzemeleri çıkarılmamış, kıyafetler tamburda dengesiz dağılmış, seviyelendirme ayaklarının hepsi zeminde sabit ve düzgün durmuyor ya da zemin yeterince sert ve sabit değil. Kurulum bölümüne göre nakliye cıvataları da cihazın şiddetli titreşimini önlemek için çıkarılmalı."
  - q: "Tamburdan tıkırtı sesi geliyor, ne yapmalıyım?"
    a: "LG'ye göre tamburda bozuk para, emniyet pimi gibi yabancı nesneler olabilir. Cihazı durdur ve tamburu kontrol et; yeniden başlattıktan sonra ses sürüyorsa servisi ara. LG Türkiye'nin destek sayfasına göre fermuar ve düğmelerin tambur kenarına çarpması da tıkırtı yapar; cepleri boşaltıp fermuar ve düğmeleri kapatmak yardımcı olur."
  - q: "Yıkama sırasında uğultu ve çamaşır düşme sesi normal mi?"
    a: "LG Türkiye'nin destek sayfasına göre önden yüklemeli makineler çamaşırı yükseltip bırakarak yıkadığı için düşme sesi normaldir. Uğultu ise pompanın ve tamburu döndüren motorun sesidir; su boşaltılırken pompa sesi daha yüksek olabilir. Kılavuza göre sıkma hızı ne kadar yüksekse ses de o kadar yüksek olur."
  - q: "Makine su alırken borulardan çarpma sesi geliyor, neden?"
    a: "LG Türkiye'nin destek sayfasına göre su basıncı çok yüksekse, su girişi aniden durduğunda su besleme borusu sallanıp ses çıkarabilir. LG'nin önerisi su basıncını düşürmek için musluğu yarıya kadar kapatmak."
  - q: "Ekranda vS ya da UE görüyorum, bu titreşimle ilgili mi?"
    a: "LG'nin hata tablosunda UE dengesizlik hatası, vS titreşim sensörü hatasıdır. UE için LG çamaşırları yeniden düzenlemeyi ya da yükü dengelemek için birkaç küçük parça eklemeyi öneriyor; vS için çözüm olarak servisi aramayı veriyor."
images:
  coverAlt: "Düz bir zeminde duran ön yüklemeli çamaşır makinesinin üst plakasında bir su terazisi; makinenin ayakları görünüyor"
---

Sıkma başlayınca makine sallanıyor, yerinden oynuyor ya da tamburdan tıkırtı, vurma sesleri geliyor. LG'nin Türkçe kullanım kılavuzlarında bunun için ayrı bir tablo var: **"Duyabileceğiniz Sesler."** Tablo sesleri üçe ayırıyor: **tıkırtı ve şıkırtı**, **vurma** ve **titreme.** Sebeplerin çoğu makinenin içinde değil: tamburda unutulmuş bir cisim, dengesiz dağılmış çamaşır, ayarsız bir ayak ya da zemin. Bu yazıda LG'nin tablosunu ve kurulum bölümündeki seviyelendirme talimatını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tıkırtı → programı durdur, tamburda para ya da pim ara. Vurma ve titreme → çamaşırı yeniden dağıt; makine yeniyse nakliye cıvatalarına bak; üst plakaya çapraz bastır, sallanıyorsa ayakları ayarla; zemin sert ve sabit mi. Tıkırtı yeniden başlatınca da sürüyorsa ya da ekranda vS varsa → yetkili LG servisi.

## Adım adım: evde denenecekler

**1. Tamburda yabancı cisim ara.** Tıkırtı ve şıkırtı için LG'nin açıklaması: tamburda **bozuk para, emniyet pimi gibi yabancı nesneler** olabilir. **Cihazı durdur** ve tamburda yabancı nesne olup olmadığını kontrol et. LG'ye göre kapı, program başladıktan sonra güvenlik nedeniyle kilitlidir; kapıyı **kilit simgesi sönünce** aç.

**2. Çamaşırı yeniden dağıt.** Vurma ve titreme seslerinin ortak sebebi: **kıyafetler tamburda dengesiz dağılmış.** LG'nin çözümü: **programı durdur ve kapının kilidi açıldıktan sonra kıyafetleri yeniden dağıt.** LG'ye göre makineye **çok fazla kıyafet konması** da vurma sesi yapabilir ve bu genellikle normaldir; ses sürüyorsa balans bozulmuştur. Tek tek ağır parçalar (banyo paspası, bornoz gibi) yıkıyorsan LG, yükü dengelemek için **1-2 kıyafet ya da daha küçük eşyalar** eklemeyi öneriyor.

**3. Cepleri boşalt, fermuarları kapat.** LG Türkiye'nin destek sayfasına göre çamaşırların üzerindeki **fermuar ve düğmeler** tamburun kenarlarına çarparak tıkırtı yapabilir; madeni para, anahtar ya da aksesuarlar da aynı sesi çıkarır. Yıkamadan önce **cepleri boşalt**, fermuar ve düğmeleri kapat, giysileri ters çevir. Küçük parçalar için çamaşır filesi kullanıyorsan LG, filenin **kapasitesinin yarısından azını** doldurmanı istiyor; aşırı dolu file tamburda dengesizlik yapabilir.

**4. Makine yeniyse nakliye cıvatalarına bak.** Titreme sesi satırındaki ilk sebep: **paketleme malzemeleri çıkarılmamış.** LG'nin kurulum bölümüne göre makinenin arkasındaki **nakliye cıvataları**, cihazın **şiddetli titreşimini ve kırılmasını önlemek için** çıkarılır ve deliklerine tıpa takılır. Makine yeni kurulduysa ve arkada nakliye cıvatası görüyorsan kurulum tamamlanmamış demektir; kurulumu yapan yetkili servise haber ver.

**5. Makinenin dengesini sına.** LG'nin kontrol yöntemi: **üst plakanın kenarlarından çapraz şekilde aşağıya doğru bastır** (her iki yönü de dene). Makine hiçbir şekilde yukarı-aşağı hareket etmemelidir. Sallanıyorsa ayaklar yeniden ayarlanmalıdır. LG'nin notu: makine yük altındayken köşelerde **yaylanmamalıdır.**

**6. Ayakları ayarla.** Önce fişi çek. LG'nin tarifine göre zemin düz değilse **ayarlama ayağını gerektiği gibi çevir**, makinenin dengeli olup olmadığını bir **su terazisiyle** kontrol et, sonra ayağı **kilitleme somunlarıyla** sabitle ve tüm somunların düzgün takıldığını kontrol et. Ayarı LG, makineyle gelen **anahtarla** yapmayı söylüyor. LG'nin açık yasağı: düz olmayan zemini **ayağın altına tahta, karton ya da benzeri parçalar koyarak dengeleme.**

**7. Zemine bak.** LG'nin son sebebi: **zemin yeterince pürüzsüz değil.** Zeminin **sert ve sabit** olup olmadığını kontrol et. LG'ye göre sıkmada titreşime en az yatkın zemin **beton**dur; ahşap ya da asma zeminler titreşimi ve dengesizliği artırabilir, ahşap zeminde LG **lastik başlıklar** öneriyor. Kaygan zeminde makine aşırı titreşimle hareket edebilir; bu durumda **kaymaz tabanlar** ayakların altına yerleştirilip seviye yeniden ayarlanır. LG'nin bir notu daha: **ayakların ıslanması** titreşime ya da sese neden olabilir.

**8. Tahliye hortumunu kontrol et.** LG'nin kurulum bölümüne göre tahliye hortumu çok uzunsa **makinenin içine doğru zorlanmamalıdır; bu normal olmayan sese neden olur.** Hortumun arkada sıkışmadığına ve içeri itilmediğine bak.

## Hangi ses normal?

LG'nin kılavuzu ve Türkiye destek sayfası bazı sesleri açıkça normal sayıyor:

| Ses | LG'nin açıklaması |
|---|---|
| Çamaşırın düşme sesi | Önden yüklemeli makine çamaşırı yükseltip bırakarak yıkar; normal |
| Uğultu | Pompanın (boşaltma sırasında daha yüksek) ve tamburu döndüren motorun sesi; normal |
| Sıkmada yüksek ses | Sıkma hızı ne kadar yüksekse ses de o kadar yüksek olur |
| Su alırken borudan çarpma | Su basıncı çok yüksek; musluğu yarıya kadar kapat |
| Aşırı yükte vurma | Genellikle normal; sürerse çamaşırı yeniden dağıt |

Ekranda **UE** görüyorsan makine dengesizliği kendisi yakalamıştır; ayrıntı [LG çamaşır makinesi UE hatası](/blog/lg-camasir-makinesi-ue-hatasi/) yazısında. **vS** ise LG'nin tablosunda **titreşim sensörü** hatası; çözüm olarak servisi aramak veriliyor. Diğer kodlar için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Sınır nerede biter

Çamaşırın dağılımı, ayaklar, zemin ve hortum kullanıcıya aittir; makinenin içi değildir. LG'nin tıkırtı satırındaki çizgi açık: tamburu kontrol ettin ve **cihaz yeniden başlatıldıktan sonra sesler devam ediyorsa servisi ara.** LG'nin uyarısı: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışma.** LG ayrıca cihaz taşınıp farklı bir yere kurulacağında LG müşteri hizmetleriyle iletişim kurulmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Tamburda cisim yok, yük dengeli, makine düz ve sallanmıyor, zemin sağlam ve ses ya da titreşim sürüyor: yetkili LG servisine başvur. Markadan bağımsız anlatım için [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısına bakabilirsin; tamburda kalmış bir cisim için [çamaşır makinesine cisim kaçtı](/blog/camasir-makinesine-cisim-kacti/) yazısı var.

## Servisi aramadan önce iki dakikalık özet

1. Ses ne tür: tıkırtı, vurma, titreme ya da uğultu?
2. Programın hangi anında: su alırken, yıkarken, sıkarken?
3. Makine yeni mi kuruldu, taşındı mı?
4. Üst plakaya çapraz bastırınca makine sallanıyor mu?
5. Ekranda UE ya da vS görünüyor mu?

Bu beşine cevabın varsa servise "makine çok ses yapıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
