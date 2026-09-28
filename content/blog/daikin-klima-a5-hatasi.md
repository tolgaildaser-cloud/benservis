---
title: "Daikin klima A5 hatası"
description: "Daikin klimada A5, Daikin kılavuzlarında donma koruması veya yüksek basınç kontrolü. Filtre temizliği, hava yolu kontrolü ve servis sınırı adım adım."
slug: "daikin-klima-a5-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext -layout ile, kod tabloları
# (Sensira'da kodlar görsel glif) pdftoppm ile sayfa görüntüsüne çevrilip okundu. Web araması yalnız belgelerin YERİNİ bulmak için.
# PDF'ler daikin.com.tr/daikin-kullanim-kilavuzlari sayfasının bağladığı st-daikin.mncdn.com (Daikin Türkiye CDN'i) ve daikin.eu'dan:
#  S) Sensira FTXF20~42E5V1B kullanım kılavuzu  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  16 s.  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  U) Ururu Sarara kullanım kılavuzu  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf  48 s.  md5 55395d5dca925e6c5a3e29a64e180cd5  (sayfa = PDF sayfası; basılı no bir eksik)
#  M) FTXM-M/CTXM-M kullanım kılavuzu  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1
#  F) FTXF50~71 kullanıcı başvuru kılavuzu  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#  W) daikin.com.tr "Daikin Klima Hata Kodları Nelerdir, Nasıl Çözülür?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/daikin-klima-hata-kodlari-nelerdir-nasil-cozulur  md5 c2a49add61690e63ffe56243ecaf46ba (HTML; md5 indirme anına ait)
# A5 satırı: S s.13 "A5 | Donma koruması veya yüksek basınç kontrolü" (İç ünite grubu) · M s.45 "A5 YÜKSEK BASINÇ KONTROLÜ VEYA DONMA KORUMASI"
#   U s.41: "A5 | Hava filtresi kirli ya da tozlu mu? • İşletimi durdurun ve FİLTRE TEMİZLEME işletimini başlatın."
#   W: "Çözüm: Filtrelerin tıkalı olup olmadığını kontrol edin. Hava akışı engellenmiş olabilir. Filtre temizliği yapın ve cihazı yeniden başlatın."
# Filtre adımları S s.11 (7.2, 7.5): temizlikten önce kesiciyi KAPATIN ya da fişten çekin; tırnağı itip aşağı çekin; suyla yıkayın/süpürge;
#   10-15 dk ılık suya batırın; toz çıkmazsa nötral deterjan, gölgede kurutun; 2 haftada bir.
#   M s.34 "Temizlik hakkında notlar": "40°C'den daha sıcak su" ve "Ovalama fırçaları" kullanılmaz; S s.11 (7.2) aynı uyarı.
# Hava yolu + yeniden başlatma: M s.42 "Hava filtreleri temiz mi? ... İç ve dış ünitelerin hava giriş veya çıkışını engelleyen bir şey var mı?
#   Kesiciyi kapalı konuma getirin ve tüm engelleri kaldırın. Kesiciyi tekrar açık konuma getirin ve klimayı uzaktan kumandayla çalıştırmayı deneyin."
# Bilerek YAZILMAYANLAR: W'nin A5 başlığındaki "İç Ünite Aşırı Isınma" anlamı yazılmadı — üç kılavuz tablosu (S, M, U) donma koruması /
#   yüksek basınç kontrolü diyor; yalnız W'nin ÇÖZÜM satırı kullanıldı. Sensör/kart teşhisi, ısı eşanjörü temizliği, gaz yazılmadı.
# Alıntı denetim tablosu: daikin-klima-a5-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Ilık su ve nötr deterjan", "Yumuşak bez"]
steps:
  - "Klimayı kumandadan durdur, ardından kesicisini kapat ya da fişini çek."
  - "Ön paneli kaldır, her filtrenin ortasındaki tırnağı itip aşağı çekerek filtreleri çıkar."
  - "Filtreleri suyla yıka ya da elektrikli süpürgeyle tozunu al."
  - "Filtreleri 10-15 dakika ılık suda beklet; toz çıkmıyorsa nötr deterjan ekle, 40°C'den sıcak su kullanma."
  - "Filtreleri gölgede kurut ve orijinal konumlarına geri tak."
  - "İç ve dış ünitenin hava giriş ve çıkışını kapatan eşyaları kaldır."
  - "Kesiciyi aç, klimayı kumandayla yeniden çalıştır; A5 geri gelirse model adıyla yetkili servise başvur."
faq:
  - q: "Daikin klimada A5 hatası ne demek?"
    a: "Daikin'in kullanım kılavuzlarındaki hata kodu tablosunda A5 iç ünite grubundadır ve karşılığı donma koruması veya yüksek basınç kontrolüdür. Yani cihaz, iç ünitede çalışmayı koruma altına almayı gerektiren bir durum algılamıştır. Daikin'in Ururu Sarara kılavuzu bu kod için ilk kontrol olarak hava filtresinin kirli ya da tozlu olup olmadığını soruyor."
  - q: "A5 hatasında ilk ne yapmalıyım?"
    a: "Daikin Türkiye'nin hata kodları sayfasındaki çözüm önerisi şu: filtrelerin tıkalı olup olmadığını kontrol et, hava akışı engellenmiş olabilir; filtre temizliği yap ve cihazı yeniden başlat. Filtreyi çıkarmadan önce klimayı durdurup kesicisini kapat ya da fişini çek."
  - q: "Klimamda otomatik filtre temizleme var, A5'te ne yapmalıyım?"
    a: "Daikin'in Ururu Sarara kılavuzu A5 için işletimi durdurup FİLTRE TEMİZLEME işletimini başlatmayı söylüyor. Aynı kılavuza göre filtreye yağ ya da nikotin yapışmışsa otomatik temizleme yeterli olmayabilir ve filtreler çıkarılıp elle de temizlenebilir."
  - q: "Hata kodunu kumandadan nasıl görürüm?"
    a: "Daikin'in Sensira kılavuzundaki yol şu: kablosuz kumandayı iç üniteye doğrult ve CANCEL (iptal) düğmesine yaklaşık 5 saniye bas; sıcaklık alanında 00 yanıp söner. Sonra sürekli bir bip sesi duyana kadar CANCEL düğmesine art arda bas; o anda ekrandaki kod cihazın kodudur. Kısa bir bip ve ardından iki bip, kodun eşleşmediğini gösterir."
  - q: "Filtreyi temizledim, A5 yine geliyor. Ne yapmalıyım?"
    a: "Daikin kılavuzlarının talimatı bu noktada servise yönlendiriyor: işletim lambası tekrar yanıp sönüyorsa model adını kontrol et ve yetkili servisle temasa geç. Montajcıya ya da servise kodu, ünitenin tam model adını ve mümkünse kurulum tarihini bildir."
images:
  coverAlt: "Duvar tipi beyaz split klimanın ön paneli kaldırılmış; iki ince hava filtresinden biri çıkarılmış, elde tutuluyor"
---

Klima çalışırken durdu, işletim lambası yanıp sönüyor ve kumandadan okuduğun kod **A5**. Daikin'in kullanım kılavuzlarındaki hata kodu tablosunda bu kod iç ünite grubundadır ve karşılığı şudur: **"Donma koruması veya yüksek basınç kontrolü."** İyi haber, Daikin bu kod için kullanıcıya somut bir kontrol veriyor: Ururu Sarara kılavuzundaki soru **"Hava filtresi kirli ya da tozlu mu?"**, Daikin Türkiye'nin hata kodları sayfasındaki öneri de filtre temizliği ve yeniden başlatma. Bu yazıda o kontrolü adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** A5 = Daikin'e göre donma koruması veya yüksek basınç kontrolü (iç ünite). Sıra şu: klimayı durdur, kesiciyi kapat → filtreleri çıkar, yıka, kurut, tak → iç ve dış ünitenin önündeki engelleri kaldır → kesiciyi aç, yeniden çalıştır. A5 geri geliyorsa → yetkili servis.

## Adım adım: evde denenecekler

**1. Klimayı durdur ve enerjisini kes.** Önce kumandadan kapat, sonra kesicisini kapat ya da fişini çek. Daikin'in Sensira kılavuzu bu konuda net: temizlikten önce çalışmayı durdur, **kesiciyi kapat ya da besleme kordonunu fişten çek**; aksi hâlde elektrik çarpması riski var.

**2. Filtreleri çıkar.** Ön paneli kaldır. Her hava filtresinin **ortasındaki tırnağı it, sonra aşağı çek** ve filtreyi dışarı al.

**3. Filtreleri temizle.** Filtreleri **suyla yıka** ya da **elektrikli süpürgeyle** tozunu al.

**4. Ilık suda beklet.** Filtreleri yaklaşık **10-15 dakika ılık suya** batır. Toz kolayca çıkmıyorsa ılık suyla seyreltilmiş **nötr deterjanla** yıka. Daikin temizlikte **40°C'den sıcak su** ve ovalama fırçası kullanılmamasını istiyor; sıcak su renk bozulması ve şekil bozukluğu yapabilir.

**5. Kurut ve yerine tak.** Filtreleri **gölgede** kurut, ardından tümünü orijinal konumlarına geri tak.

**6. Hava yollarını aç.** Daikin'in FTXM kılavuzu, çalışma aniden durup lamba yanıp söndüğünde iki şeyin sorulmasını istiyor: hava filtreleri temiz mi ve **iç ve dış ünitenin hava giriş ya da çıkışını engelleyen bir şey** var mı? İç ünitenin önündeki perde, dolap ya da rafı, dış ünitenin önündeki eşyayı kaldır.

**7. Yeniden çalıştır.** Kesiciyi aç ve klimayı kumandayla yeniden çalıştır. Ururu Sarara kılavuzuna göre işletim lambası bir süre sonra da **sabit yanıyorsa** klimayı kullanmayı sürdürebilirsin; **tekrar yanıp sönüyorsa** model adını kontrol et ve yetkili servisle temasa geç.

## A5 tam olarak neyi söylüyor?

Daikin'in Sensira ve FTXM kılavuzlarındaki tablolar A5'i aynı şekilde tanımlıyor: **donma koruması veya yüksek basınç kontrolü**. Kod tablonun "İç ünite" bölümündedir; aynı bölümde iç ünite kartı (A1), fan motoru (A6) ve iki sıcaklık sensörü (C4, C9) kodları da yer alır.

Filtre neden bu kodla ilgili? Daikin'in kılavuzu kirli filtreyle çalışmanın sonuçlarını sayıyor: yetersiz ısıtma ve soğutma, havanın temizlenememesi, koku. Daikin Türkiye'nin sayfası da A5 çözümünde aynı yere bakıyor: **filtrelerin tıkalı olup olmadığı** ve **hava akışının engellenip engellenmediği**. Daikin, hava filtrelerinin **iki haftada bir** temizlenmesini öneriyor.

Otomatik filtre temizlemeli bir Daikin kullanıyorsan (Ururu Sarara gibi), kılavuzdaki talimat biraz farklı: işletimi durdur ve **FİLTRE TEMİZLEME işletimini** başlat. Filtreye yağ ya da nikotin yapışmışsa otomatik temizleme yetmeyebilir; filtreler elle de temizlenebilir.

Filtre temizliğinin genel anlatımı için [klima filtresi nasıl temizlenir](/blog/klima-filtresi-temizleme/) yazısına, diğer Daikin kodları için [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına bakabilirsin.

## Nerede durmalısın

Daikin'in kılavuzu, son kullanıcının **ünitenin iç kısımlarını kendisinin temizleyemeyeceğini**, bu işin kalifiye bir servis elemanı tarafından yapılması gerektiğini yazıyor. Aynı kılavuz **ısı eşanjörü kanatçıklarına dokunulmamasını** istiyor; kanatçıklar keskindir ve kesiğe yol açabilir. Klima yüksekteyse merdivenle çalışırken dikkatli ol.

⛔ **Kendin-çöz sınırı burada biter.** Filtre ve hava yolu kullanıcıya aittir; filtrenin arkası, kart, sensör ve soğutucu devresi servise aittir. Daikin'in kılavuzu, hata kodunu sıfırlamadan önce sorunun anlaşılıp önlem alınmasının **yetkili bir montör ya da satıcı** tarafından yapılması gerektiğini söylüyor.

## Servisi aramadan önce iki dakikalık özet

1. Kumandadan okunan kod gerçekten A5 mi?
2. Filtreler çıkarılıp temizlendi ve kurutulup takıldı mı?
3. İç ve dış ünitenin önünde hava yolunu kapatan bir şey var mı?
4. Kesici kapatılıp açıldıktan sonra lamba sabit mi yanıyor, yine mi yanıp sönüyor?
5. Ünitenin tam model adı ve kurulum tarihi elinde mi?

Bu beşinin cevabı servise "klima durdu" yerine somut bir tablo verir.

Ekrandaki kodu ve klimanın modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
