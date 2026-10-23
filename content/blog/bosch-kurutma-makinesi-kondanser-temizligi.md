---
title: "Bosch kurutma makinesi kondanser temizliği"
description: "Bosch ısı pompalı kurutma makinesinde eşanjör kendini temizler; sana kalan tiftik filtresi, yoğuşma suyu kabı süzgeci ve CrE bakım programı. Adım adım."
slug: "bosch-kurutma-makinesi-kondanser-temizligi"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork C). Konu seçimi: origin/main'de bosch-kurutma-makinesi-kondanser-temizligi yok.
#   Yakın slug'lar: bosch-kurutma-makinesi-kurutmuyor (eşanjörü tek cümleyle anıyor, konusu nemli çamaşır), bosch-kurutma-makinesi-calismiyor,
#   kurutma-makinesi-filtre-ve-kondenser-temizligi (marka bağımsız). Bosch'a özel temizlik/bakım prosedürü sayfası yok.
# GSC (https___www-5, 3 ay, 18 Tem–17 Eki): marka bağımsız "kurutma makinesi kondanser temizliği" 15, "kurutma makinesi kondenser temizliği" 15 gösterim.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "bosch kurutma makinesi k" → 1. "bosch kurutma makinesi kondanser temizliği";
#   tohum "bosch kurutma makinesi kondanser" → 1. "…kondanser temizliği", 2. "bosch serie 6 kurutma makinesi kondenser temizliği", 3. "…kondansatör".
# Belgeler: yerel kopyalar blog-taslaklar/kaynak-bosch-2eki/ (2 Eki 2026, curl -sL -A "Mozilla/5.0", HTTP 200, BSH alan adları). md5 bu koşuda yeniden alındı,
#   MD5SUMS-2026-10-02 ile aynı. #88: forum/servis sitesi kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (A) Bosch WTW87460TR kullanım ve kurulum kılavuzu  https://media3.bosch-home.com/Documents/9001004673_A.pdf  md5 6afdb7f1bfef765af4d9fdc143240ee9
#  (E) Bosch WQG244C1TR kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001847050_E.pdf  md5 7ff40c3f2504844ca9cbd584bda38b53
#  (H) Bosch WTWH8760TR kullanım kılavuzu  https://media3.bosch-home.com/Documents/9001851027_A.pdf  md5 434892aeecaf2fa1c40307cdac205798
# Eşanjör otomatik temizlenir A s.11, s.23 · E s.17, s.32 · H s.21 · tiftik filtresi A s.17-18 · yoğuşma suyu kabı A s.18 · kap süzgeci A s.22, H s.35
#   · CrE/CArE E s.17, s.32, H s.21 · cihaz bakımı E s.27-29, H s.42 · eşanjör kirlenmiş → basit bakım, 3 kg E s.32 · ısı pompalı A s.24.
# BİLEREK YAZILMAYANLAR: eşanjörü/kondanseri söküp yıkama, fırça ya da su tutma (kılavuzlarda kullanıcı adımı olarak yok) · kondansatör "arızası" teşhisi
#   · bakım ürününün sipariş numarası ve satış yeri (#46) · yoğuşmalı (ısı pompasız) eski Bosch modellerine genelleme (bu yazının belgelerinde yok) · fiyat.
# Alıntı denetim tablosu: bosch-kurutma-makinesi-kondanser-temizligi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (bakım programı süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Lavabo ve sıcak musluk suyu"]
steps:
  - "Kapağı aç, kapaktaki tiftikleri al, iki parçalı tiftik filtresini çekip çıkar ve filtrenin ağzındaki tiftikleri temizle."
  - "Filtrenin iki parçasını ayır, vurarak tiftikleri dök, akan sıcak su altında yıka, kurut ve yerine tak."
  - "Yoğuşma suyu kabını dışarı çek, suyu dök ve kabı yerine oturana kadar it; bunu her kurutmadan sonra yap."
  - "Yoğuşma suyu kabındaki filtreyi çıkar, sıcak musluk suyu altında temizle ve hissedilir biçimde yerine oturt."
  - "Ekranda otomatik kendi kendine temizleme göstergesi varken yoğuşma suyu kabını çekme ve programı iptal etme."
  - "Ekranda CrE ya da CArE görünürse tamburu boşalt, cihazı kapat, tiftik filtresini temizle, kabı boşalt ve filtresini temizle."
  - "Kaba yaklaşık bir buçuk litre ılık su koy, kılavuzundaki adımlarla basit cihaz bakımı programını başlat ve bitince kabı boşalt."
  - "Bakımdan sonra çamaşırlar hâlâ nemli çıkıyorsa ya da gösterge sönmüyorsa Bosch müşteri hizmetlerinden servis iste."
faq:
  - q: "Bosch kurutma makinesinin kondanseri nasıl temizlenir?"
    a: "Bu yazının kaynağı olan üç Bosch ısı pompalı modelin (WTW87460TR, WQG244C1TR, WTWH8760TR) kılavuzlarında kullanıcının söküp yıkadığı bir kondanser adımı yok. Kılavuzlara göre ısı eşanjörü kendini otomatik olarak temizler. Sana düşen iş tiftik filtresi, yoğuşma suyu kabı ve kabın filtresi; WQG244C1TR ve WTWH8760TR'de ayrıca ekranda CrE ya da CArE görününce yapılan basit cihaz bakımı programı."
  - q: "Ekranda CrE ya da CArE yazıyor, ne demek?"
    a: "Bir arıza kodu değil, bakım hatırlatması. WQG244C1TR kılavuzunda CrE, WTWH8760TR kılavuzunda CArE görününce ilgili basit cihaz bakımı programının yürütülmesi isteniyor. Bosch bu programı uzun bir kullanım süresinden sonra cihazdaki hafif kir birikintilerini temizlemek için öneriyor; yaklaşık bir saat sürüyor."
  - q: "Kurutma sırasında çatırtı sesi geliyor, normal mi?"
    a: "WTW87460TR kılavuzuna göre evet. Isı eşanjörünün otomatik temizliği sırasında sesler duyulabilir ve bu bir hata değil. Kılavuz aynı tabloda kompresörün zaman zaman havalandırıldığını ve bu sırada vınlama sesi çıktığını da yazıyor."
  - q: "Yoğun cihaz bakımı ne zaman gerekir?"
    a: "WQG244C1TR kılavuzuna göre inatçı kir birikintilerini ve cihaz bir aydan uzun kullanılmadığında oluşan kokuları gidermek için. Yaklaşık dört saat sürüyor, kesintiye uğramamalı ve Bosch'un orijinal cihaz bakım ürünü gerekiyor."
  - q: "Az çamaşır kurutmak eşanjörü kirletir mi?"
    a: "WQG244C1TR arıza tablosu düşük dolum miktarlarında sürekli otomatik temizleme için çok az yoğuşma suyu oluştuğunu yazıyor. Önerisi, 3 kilodan fazla nemli çamaşırı program sonuna kadar düzenli olarak kurutmak. Aynı tabloda eşanjör kirlendiyse çözüm basit cihaz bakımı."
images:
  coverAlt: "Çamaşır odasında kapağı açık, önden yüklemeli beyaz bir kurutma makinesi"
  steps:
    - "Kurutma makinesinin açık kapağının iç kenarında duran iki parçalı ince bir tiftik filtresi"
    - "Lavabo başında akan suyun altında duran açılmış bir tiftik filtresi"
    - "Kurutma makinesinin üst köşesinden dışarı çekilmiş, içinde biraz su olan yoğuşma suyu kabı"
    - "Lavabonun kenarında duran küçük plastik bir süzgeç ve yanında yoğuşma suyu kabı"
    - "Çalışan bir kurutma makinesinin kumanda panelinde yanan küçük bir gösterge"
    - "Boş tamburu görünen, kapağı açık bir kurutma makinesi"
    - "Yatay tutulan yoğuşma suyu kabının içinde ılık su ve yanında bir sürahi"
    - "Kurutma makinesinin üstünde katlanmış nemli havlular ve yanında bir kullanım kılavuzu"
---

"Kondanser temizliği" diye aradığında çoğu tarif, makinenin altındaki kapağı açıp bir bloğu çıkarmayı ve yıkamayı anlatır. Bosch'un ısı pompalı WTW87460TR, WQG244C1TR ve WTWH8760TR kullanım kılavuzlarında böyle bir kullanıcı adımı yok. Bu modellerde Bosch'un ifadesiyle **ısı eşanjörü otomatik olarak temizlenir**. Senin işin, bu otomatik temizliğin düzgün çalışması için gereken üç parçayı temiz tutmak ve ekran istediğinde bakım programını çalıştırmak. Bu yazıda o sırayı üç kılavuzdan topladık. Tuş adları ve göstergeler modele göre değişiyor; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Bosch ısı pompalı kurutma makinesinde eşanjörü sen yıkamazsın; makine durular. Sen her kurutmadan sonra tiftik filtresini temizler ve yoğuşma suyu kabını boşaltırsın, kabın filtresini düzenli kontrol edersin. Ekranda CrE ya da CArE çıkarsa basit cihaz bakımı programını çalıştırırsın. Sonra hâlâ sorun varsa servis.

## Ne temizlenir, kim temizler


| Parça | Kılavuza göre | Kim |
|---|---|---|
| **Isı eşanjörü** | Otomatik olarak temizlenir; yoğuşma suyuyla durulanır | Makine |
| **Tiftik filtresi** | Her kurutma işleminden sonra temizlenir | 🛠️ Sen |
| **Yoğuşma suyu kabı** | Her kurutmadan sonra boşaltılır | 🛠️ Sen |
| **Kabın filtresi (süzgeç)** | Düzenli kontrol, gerekirse temizlik | 🛠️ Sen |
| **CrE / CArE** | Basit cihaz bakımı programı istenir | 🛠️ Sen, programla |
| **Gösterge sönmüyor, kurutma bozuk** | Kılavuzdaki kontroller yetmedi | 🔧 Servis |

## Adım adım: Bosch'un temizlik sırası

**1. Tiftik filtresini çıkar.** WTW87460TR kılavuzu filtrenin **her kurutma işleminden sonra** temizlenmesini istiyor ve sebebini de yazıyor: tıkalı ya da kirli tiftik filtresi hava akışını azaltır ve kurutma makinesi tam performansla çalışamaz. Sıra şöyle: kapağı aç ve kapaktaki tüm tiftikleri temizle, iki parçalı tiftik keçesini çekerek çıkar, filtrenin ağzındaki tiftikleri al. Açık yuvaya tiftik düşmemesine dikkat et.

**2. Filtreyi yıka ve kurut.** İki parçalı keçeyi parçalarına ayır, **her iki filtreye de vurarak** tiftikleri dök, sonra **akan sıcak su altında** yıka. Filtreleri kurut, birbirine tak ve yerine monte et. Bosch'un uyarısı net: makineyi **tiftik filtresi olmadan ya da arızalı filtreyle çalıştırma**, kurutma makinesi hasar görebilir. Güvenlik bölümü bir sebep daha veriyor: filtredeki kalıntılar kurutma sırasında alev alabilir.

**3. Yoğuşma suyu kabını boşalt.** Kabı dikey olarak yukarı çek, suyu dök, kabı **hissedilir biçimde yerine oturana kadar** it. Bosch bunu **her kurutmadan sonra** istiyor; kap dolu kalırsa bir sonraki program iptal edilebilir. Yoğuşma suyu içme suyu değildir, tiftikle kirlenmiş olabilir; içme ve kullanma. Makine bir tahliye hortumuyla gidere bağlıysa kabı boşaltmana gerek yok.

**4. Kabın filtresini temizle.** Bu adım asıl "kondanser" sorusunun cevabı. WTW87460TR kılavuzuna göre yoğuşma suyu kabındaki süzgeç, **makinenin otomatik temizliği için kullanılacak yoğuşma suyunu** filtreler. Kabı çıkar, suyu dök, filtreyi çıkar, **sıcak musluk suyu altında** temizle ya da bulaşık makinesinde yıka, sonra yerine oturana kadar it. Makineyi yalnız filtre takılıyken çalıştır.

**5. Otomatik temizliği bölme.** Ekranda otomatik kendi kendine temizleme göstergesi yanarken Bosch'a göre **hata yoktur**: makine eşanjörü durular. Bu sırada **yoğuşma suyu kabını çekme ve programı iptal etme**. WTW87460TR kılavuzuna göre otomatik temizlik sırasında gelen çatırtı benzeri sesler de normal.

**6. CrE ya da CArE için hazırlık.** WQG244C1TR'de **CrE**, WTWH8760TR'de **CArE**, basit cihaz bakımının yapılması gerektiğini söyler. Bosch'un hazırlık listesi: **tambur boş**, cihaz kapalı, tiftik filtresi temiz, yoğuşma suyu kabı boş ve kabın filtresi temiz. Yoğuşma suyunu hortumla gidere veriyorsan kılavuzdaki tapa adımını da uygula.

**7. Basit cihaz bakımını çalıştır.** WQG244C1TR kılavuzundaki sıra: kaba yaklaşık **1,5 litre ılık su** doldur, kabı yatay tutarak yerine it, program seçme düğmesini **pozisyon 1**'e getir, **Ütü Kuruluğu**'na basılı tutup düğmeyi **4** konumuna çevir, ekranda **CP1** görününce **Başlat/Reload**'a bas. Program yaklaşık **bir saat** sürer; bitince ekranda **End** görünür, kabı boşaltıp makineyi kapatırsın. WTWH8760TR'de tuşlar farklı; kendi kılavuzunun Cihaz bakımı bölümüne bak.

**8. Sonuç yoksa servis.** WQG244C1TR arıza tablosu nemli çamaşırın bir sebebi olarak **"Eşanjör kirlenmiş"** satırını veriyor ve çözüm olarak basit cihaz bakımını gösteriyor. Aynı tabloya göre çok küçük yüklerde otomatik temizlik için yeterli yoğuşma suyu oluşmuyor; Bosch **3 kilodan fazla** nemli çamaşırı program sonuna kadar düzenli kurutmanı öneriyor. Bunların hepsi yapıldığı hâlde sorun sürüyorsa Bosch müşteri hizmetlerini ara.

## Yoğun cihaz bakımı

WQG244C1TR kılavuzu bir de **yoğun cihaz bakımı** tarif ediyor: inatçı kir birikintileri ve makine bir aydan uzun kullanılmadığında oluşan kokular için. Yaklaşık **dört saat** sürüyor, kesintiye uğramamalı ve Bosch'un **orijinal cihaz bakım ürünü** gerekiyor. Program arada durup senden kabı boşaltmanı ve yeniden su koymanı istiyor; adımlar kılavuzun Cihaz bakımı bölümünde.

## Ne zaman servis

- Basit cihaz bakımından sonra CrE ya da CArE yeniden hemen çıkıyorsa
- Filtreler temiz, kap boş olduğu hâlde çamaşırlar nemli kalıyorsa
- Yoğuşma suyu kabı göstergesi, kap boşaltılıp filtresi temizlendiği hâlde sönmüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Tiftik filtresi, yoğuşma suyu kabı, kabın filtresi ve bakım programı sende; eşanjör, soğutucu akışkan devresi, kompresör ve gövdenin içi Bosch servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin model kodu ne (WTW87460TR, WQG244C1TR, WTWH8760TR ya da başka)?
2. Ekranda hangi gösterge ya da kod var?
3. Tiftik filtresi ve kabın filtresi en son ne zaman temizlendi?
4. Basit cihaz bakımı programı çalıştırıldı mı?
5. Genelde kaç kilo çamaşır kurutuluyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Nemli çamaşırın diğer sebepleri [Bosch kurutma makinesi kurutmuyor](/blog/bosch-kurutma-makinesi-kurutmuyor/) yazısında, başlamayan program [Bosch kurutma makinesi çalışmıyor](/blog/bosch-kurutma-makinesi-calismiyor/) sayfasında, marka bağımsız temizlik [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) rehberinde. Bil, gör, çağır.
