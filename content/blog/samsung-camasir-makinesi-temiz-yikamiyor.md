---
title: "Samsung çamaşır makinesi temiz yıkamıyor"
description: "Samsung çamaşır makinesi temiz yıkamıyorsa Samsung'un 5 adımı: ayır, programı ve sıcaklığı seç, aşırı yükleme, az köpüklü deterjanı doğru gözlere koy."
slug: "samsung-camasir-makinesi-temiz-yikamiyor"
date: "2026-10-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, Haier/Samsung koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200. PDF md5'leri 2 Eki kopyalarıyla birebir.
# #88: web araması yalnız destek sayfasının yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-3eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  S3) Samsung TR SSS "Samsung Çamaşır makinem temiz yıkamıyor ne yapabilirim?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-can-i-do-when-my-samsung-washing-machine-is-not-washing-clean/  md5 c6123cd6a6b39b41a1236bac1ebc8d66 (dinamik HTML; md5 bu indirmenin)
#  W4) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
# Ana kaynak S3 — Samsung'un 5 adımı: 1 Kıyafetlerinizi ayırın (bakım etiketi / renk / boyut / hassasiyet) · 2 Uygun program seçin (01-13 program listesi) · 3 Uygun sıcaklık seçin
#   · 4 Yük kapasitesini belirleyin ("Aşırı doldurma, çamaşır makinesinin düzgün yıkama yapamamasına neden olabilir."; nevresim 800 devir / 2,0 kg; DİKKAT dengesiz yük, çamaşır kapıda kalmasın, kapıyı çarpmayın)
#   · 5 Uygun bir deterjan türü kullanın ("az köpüklü"; deterjan üreticisinin tavsiyesi: ağırlık, kirlenme, su sertliği; sertleşen deterjan kullanmayın; "Bir program sırasında çok fazla köpük oluşursa Sud mesajı görüntülenir.")
#   · 13) EKO TAMBUR TEMİZLEME (deterjan/çamaşır suyu olmadan her 40 yıkamada bir; tambur boş; temizleme maddesi yok)
# W4 karşılıkları: s.29 ADIM 1 Sıralayın (aynı dört ölçüt) · s.30 ADIM 2 cepler, ADIM 3 çamaşır filesi, ADIM 4 Ön Yıkama (çok kirli; ana yıkama bölmesine toz deterjan), ADIM 5 yük ("Aşırı yükleme, çamaşır makinesinin düzgün yıkamamasına yol açabilir." + s.40 tablo)
#   · s.31 ADIM 6 deterjan (az köpüklü; sertleşen deterjan durulamadan sonra tamamen gitmeyebilir; YÜNLÜ/HASSAS'ta yalnız nötr deterjan, toz deterjan çamaşırda kalabilir)
#   · s.34 deterjan çekmecesi (sol ana yıkama, orta yumuşatıcı, sağ ön yıkama; DİKKAT: konsantre ürünü sulandır; "Kazanın temizliği için herhangi bir temizlik maddesi kullanmayın. Kazandaki kimyasal kalıntılar, yıkama performansını zayıflatır.")
#   · s.35 deterjanı ana yıkama bölmesine, maks çizgisini aşmadan · s.38 Suda Bekletme ("çok çeşitli inatçı lekeleri çıkarmaya yardımcı olur") ve Yoğun / Ön Yıkama seçenekleri
#   · s.55 "Aşırı köpük var." (HE deterjan; yumuşak su / az yük / az kirli çamaşırda miktarı azalt) · s.57 servis cümlesi.
# BİLEREK YAZILMAYANLAR: tablet/kapsül (W4 s.34 deterjan çekmecesinde "Tablet veya kapsül" kullanmayın diyor; Samsung TR SSS "toz, sıvı ve kapsüllerle çalışır" diyor → çelişki, yazılmadı)
#   · gram/ölçek cinsinden deterjan miktarı (belge deterjan üreticisine bırakıyor) · leke türüne göre ev usulü yöntemler · S3'teki program adlarının senin modelinde birebir olduğu (modele göre değişir) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-camasir-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika (program süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Çamaşırı bakım etiketine göre pamuklu, karışık, sentetik, ipek, yünlü diye ayır; beyazları renklilerden ayır."
  - "Yünlü, perde ve ipek gibi hassas çamaşırları ayrı yıka; ceplerini boşalt."
  - "Çamaşıra uygun programı seç; çok kirli çamaşırda Ön Yıkama seçeneğini kullan."
  - "Etiketteki değeri aşmayan, çamaşıra uygun sıcaklığı seç."
  - "Makineyi aşırı yükleme; çamaşırın kapıda kalmadığından emin ol ve kapağı çarpmadan kapat."
  - "Otomatik makineler için az köpüklü deterjan kullan; miktarı deterjan üreticisinin önerisine göre ayarla."
  - "Deterjanı çekmecenin ana yıkama bölmesine, maks çizgisini aşmadan koy."
faq:
  - q: "Samsung çamaşır makinesi neden temiz yıkamıyor?"
    a: "Samsung Türkiye'nin destek sayfası beş öneri veriyor: çamaşırı kumaş türü, renk, boyut ve hassasiyete göre ayırmak, çamaşıra uygun programı ve sıcaklığı seçmek, makineyi aşırı yüklememek ve otomatik makineler için az köpüklü bir deterjan kullanmak. Kılavuza göre aşırı yükleme, makinenin düzgün yıkamamasına yol açabilir."
  - q: "Ekranda 'Sud' yazıyor. Ne demek?"
    a: "Samsung'a göre bir program sırasında çok fazla köpük oluştuğunda Sud mesajı görüntülenir. Kılavuzun 'Aşırı köpük var.' satırı yüksek etkililiğe (HE) sahip deterjan kullanmayı, yumuşak su, az yük ya da az kirli çamaşırda deterjan miktarını azaltmayı söylüyor."
  - q: "Daha çok deterjan koyarsam daha temiz yıkar mı?"
    a: "Samsung miktar için bir artış önermiyor; miktarı çamaşırın ağırlığına, kirlenme derecesine ve bölgendeki su sertliğine göre deterjan üreticisinin önerisine göre ayarlamanı istiyor. Fazla köpük Sud mesajına yol açabilir; kılavuz yumuşak suda ve az yükte miktarın azaltılmasını öneriyor. Sertleşen ya da katılaşan deterjanlar da durulamadan sonra tamamen gitmeyebilir."
  - q: "İnatçı lekeler için hangi seçeneği kullanmalıyım?"
    a: "WW4000T kılavuzuna göre Suda Bekletme işlevi çok çeşitli inatçı lekeleri çıkarmaya yardımcı olur. Çamaşır çok kirliyse Ön Yıkama seçeneğini seçip ana yıkama bölmesine toz deterjan koyman isteniyor. Seçeneklerin adı ve yeri modele göre değişebilir."
  - q: "Tamburu temizlemek yıkama sonucunu etkiler mi?"
    a: "Samsung tamburdaki kir ve bakterileri uzaklaştıran temizleme programını (destek sayfasında EKO TAMBUR TEMİZLEME) her 40 yıkamada bir, tambur boşken ve deterjan ya da çamaşır suyu koymadan çalıştırmanı istiyor. Kılavuz kazanın temizliği için temizlik maddesi kullanılmamasını, çünkü kazandaki kimyasal kalıntıların yıkama performansını zayıflattığını yazıyor."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin önünde renklerine göre ayrılmış iki çamaşır yığını; makinenin deterjan çekmecesi açık"
---

Program bitti ama çamaşırda leke kalmış, beyazlar grileşmiş ya da çamaşır hâlâ kirli kokuyor. Samsung Türkiye'nin destek sayfasında bu durumun karşılığı **"Samsung Çamaşır makinem temiz yıkamıyor ne yapabilirim?"** Sayfadaki beş önerinin dördü makineden önce, çamaşırla ve ayarlarla ilgili: **ayırmak, program seçmek, sıcaklık seçmek ve yükü doğru belirlemek.** Beşincisi deterjan. Aşağıdaki sıra bu sayfayı ve WW4000T kılavuzunun "çamaşır kılavuzu" bölümünü izliyor; program ve düğme adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Etikete ve renge göre ayır → hassasları ayrı yıka, cepleri boşalt → çamaşıra uygun program, çok kirliyse Ön Yıkama → etiketteki sıcaklık → aşırı yükleme, kapıyı çarpma → az köpüklü deterjan, üreticinin önerdiği miktarda → deterjanı ana yıkama bölmesine, maks çizgisinin altında. Ekranda **Sud** görürsen deterjanı azalt.

## Adım adım: evde denenecekler

**1. Çamaşırı ayır.** Samsung'un ilk önerisi sınıflandırma. **Bakım etiketi**ne göre pamuklu, karışık fiberli, sentetik, ipek, yünlü ve naylon diye ayır; **beyazları ve renklileri** ayır. Samsung'a göre farklı boyuttaki giysilerin tambura birlikte konması yıkama performansını artırır.

**2. Hassasları ayrı yıka, cepleri boşalt.** Saf, yeni alınmış yünlüleri, perdeleri ve ipek çamaşırları **ayrı** yıka. Kılavuz cepleri boşaltmanı da istiyor: metal para, iğne ya da toka gibi nesneler kazana ve diğer çamaşırlara zarar verebilir. Çorap, mendil gibi küçük parçalar için **çamaşır filesi** kullan; fileyi tek başına yıkama.

**3. Çamaşıra uygun programı seç.** Programı program düğmesinden çamaşırın türüne göre seç. Samsung'un listesinden birkaç örnek: **PAMUKLU GİYSİLER** pamuklu, havlu ve iç çamaşırı için; **SENTETİK GİYSİLER** polyester ve poliamid bluz, gömlek için; **YÜNLÜLER** 2 kg'dan hafif yünlü yükler için (nötr deterjanla); **KOYU RENKLİ GİYSİLER** ilave durulama ve daha az sıkma sunar. Kılavuza göre çamaşır **çok kirliyse Ön Yıkama** seçeneğini seç ve ana yıkama bölmesine toz deterjan koy.

**4. Uygun sıcaklığı seç.** Samsung çamaşıra **zarar vermeyecek** sıcaklığın seçilmesini istiyor; uygun değer giysinin iç kısmındaki **etikette** yazar.

**5. Yükü doğru belirle.** Samsung'un uyarısı açık: **aşırı doldurma, makinenin düzgün yıkama yapamamasına** neden olabilir. Giysi türüne göre kapasite kılavuzundaki tabloda. Çamaşırların tambura tam yerleştiğinden ve **kapıda kalmadığından** emin ol; kapıyı **çarpmadan,** hafifçe kapat. Nevresim yıkarken Samsung en fazla **2,0 kg** yük ve **800 devir** sıkma öneriyor.

**6. Az köpüklü deterjan kullan.** Deterjan türü kumaşa, renge, yıkama sıcaklığına ve kirlenme düzeyine göre değişir; Samsung her zaman otomatik çamaşır makineleri için tasarlanmış **"az köpüklü"** deterjan istiyor. Miktar için çamaşırın ağırlığına, kirlenme derecesine ve bölgendeki **su sertliğine** göre deterjan üreticisinin önerisine uy. **Sertleşen ya da katılaşan** deterjan kullanma; kılavuza göre durulamadan sonra tamamen gitmeyebilir. YÜNLÜ/HASSAS programında yalnız **nötr deterjan** kullan; toz deterjan çamaşırda kalabilir.

**7. Deterjanı doğru göze koy.** WW4000T kılavuzuna göre çekmecede üç bölme var: **sol bölme ana yıkama,** orta bölme yumuşatıcı, sağ bölme ön yıkama için. Deterjanı ana yıkama bölmesine koy ve **maks çizgisini** aşma. Konsantre ürünleri bölmenin tıkanmasını önlemek için koymadan önce sulandır.

## Ekranda "Sud" görürsen

Samsung'a göre bir program sırasında **çok fazla köpük** oluşursa ekranda **Sud** mesajı görüntülenir. Kılavuzun "Aşırı köpük var." satırı:

- Önerilen deterjan türünü uygun şekilde kullan.
- Aşırı köpürmeyi önlemek için **yüksek etkililiğe (HE)** sahip deterjan kullan; HE olmayan deterjan önerilmiyor.
- **Yumuşak su, az yük ya da az kirlenmiş** çamaşır için deterjan miktarını azalt.

Köpük sorununun ayrıntısı [Samsung çamaşır makinesi köpük yapıyor](/blog/samsung-camasir-makinesi-kopuk-yapiyor/) yazısında.

## Tamburu temiz tut

Samsung'un destek sayfası tamburdaki kir ve bakterileri uzaklaştıran temizleme programını (**EKO TAMBUR TEMİZLEME**; WW4000T kılavuzunda TEMİZ KAZAN) **her 40 yıkamada bir** çalıştırmanı istiyor: tambur boşken, deterjan ya da çamaşır suyu koymadan. Kılavuzun gerekçesi: kazanın temizliği için temizlik maddesi kullanma, çünkü **kazandaki kimyasal kalıntılar yıkama performansını zayıflatır.** Programın adım adım anlatımı [Samsung çamaşır makinesi kokuyor](/blog/samsung-camasir-makinesi-kokuyor/) yazısında.

Çamaşırda kalan lekelerin markadan bağımsız anlatımı için [çamaşır makinesi çamaşırlarda leke bırakıyor](/blog/camasir-makinesi-camasirlarda-leke-birakiyor/) yazısına bakabilirsin.

## Ne zaman servis

Ayırma, program, sıcaklık, yük ve deterjan kullanıcıya aittir ve Samsung'un temiz yıkamama önerilerinin tamamı bunlardan oluşuyor. Bu adımlardan sonra da sorun sürüyorsa, ya da ekranda bir bilgi kodu çıkıyorsa kılavuzun cümlesi geçerli: **sorun devam ederse bir servis merkezine danış;** servis merkezi numarası ürüne takılı etiketin üzerindedir.

⛔ **Kendin-çöz sınırı burada biter.** Makinenin panellerini açmak ya da parça sökmek kullanıcı işi değildir.

## Servisi aramadan önce iki dakikalık özet

- Hangi programı ve sıcaklığı seçtin, çamaşır etiketi ne diyor?
- Tambur ne kadar doluydu?
- Hangi deterjanı, ne kadar ve hangi göze koydun?
- Ekranda Sud ya da başka bir kod çıktı mı?
- Tambur temizleme programı en son ne zaman çalıştırıldı?

Bu sorulara cevabın varsa servise "temiz yıkamıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
