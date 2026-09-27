---
title: "Samsung bulaşık makinesi HC hatası: ısıtma"
description: "Samsung bulaşık makinesinde HC (HE) yüksek sıcaklıkta ısıtma kontrolü demek. Kılavuzdaki boş makine denemesi, şalter adımı ve servis sınırı."
slug: "samsung-bulasik-makinesi-hc-hatasi"
date: "2026-09-27"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 PAZ (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, pdftotext -layout ile okundu.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden; web araması kullanılmadı.
# (S) Samsung TR "Bulaşık Makinesi Hakkında SSS" https://www.samsung.com/tr/home-appliances/faq-dishwasher/ md5 800f3dae1021411046adba7cc8ad8cc6
#     "HC, HE: Yüksek sıcaklıkta ısıtma kontrolü" (aynı listede "LC/LE", "4C/4E" gibi; HC ile HE virgülle birlikte)
# (A) Kılavuz DW5500MM DD81-02615C-11 TR 2024-11-08, 200 s., md5 2ad54a56734b93dbaeefbcd4fdc3b385
#     s.56 HC "Yüksek sıcaklık ısıtma kontrolü • İşlevsel kontrol. Bulaşık makinesi boşken, deterjan ekleyin ve bir program çalıştırın.
#          Sorun devam ederse evinizin devre kesici paneline gidin ve bulaşık makinesinin devre kesicisini kapatın. Sonra, bir Samsung servis merkezine başvurun."
#     s.56 tC "Termistör kontrolü • Sıcaklık sensörü kırık (kısa veya açık devre)." · s.15 "Sıfırla: … BAŞLAT düğmesini üç (3) saniye boyunca basılı tutun."
#     s.33 "Deterjanı dökün" / "Kapağı kapatın, makineyi açmak için GÜÇ düğmesine basın" · s.15 "Bir program başlatmak için kapağı kapatmadan önce, BAŞLAT düğmesine basın."
# (B) DW5500MM IB DD81-04448A-00 2024-01-30, md5 cb6d487995a7756fdd098efb6f4986e6 — s.54 HC satırı A ile birebir
# (C) DW8500AM DD81-03206J-04 2023-06-28, md5 0bac38bffb63954fc975765ab1c13167 — s.72 HC satırı aynı ("bir program başlatın")
# (D) DW9000H DD68-00158F-09 2018-05-09, md5 370daab2b2de63dacb7920a1e1e60c79 — s.38 HC "Fonksiyonel kontrol. Bulaşık makinesi boşken, deterjan ekleyin ve bir program başlatın."
# (E) DW5000H DD81-01651A-09 2017, md5 7c65d2a4e2da01774637dc253f7f10d6 — s.44 HE "Isıtıcı hatası — Isıtma 60 dakika boyunca sürüyor ancak beklenen sıcaklığa erişilmiyor." · tE "Sıcaklık sensörü arızası"
# BİLEREK YAZILMAYANLAR: "rezistans yandı / ısıtıcı arızalı" kesinliği (Samsung TR belgeleri "ısıtma kontrolü" diyor; parça teşhisi yok) ·
#   AE/CA bölge sayfalarının HE/HC yorumları (TR belgesi değil; hub'daki 22 Ağu notu) · "fişi çekip X dakika bekle" reseti (belgede yok; belge şalter diyor) ·
#   filtre temizliği (HC satırında yok) · süre/parça/fiyat (#46, #31).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-hc-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "Bir program süresi"
  totalTime: "PT3H"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi deterjanı"]
steps:
  - "Programı iptal etmek ve suyu boşaltmak için BAŞLAT düğmesini üç saniye basılı tut."
  - "Makinedeki bütün bulaşıkları çıkar; makine boş kalsın."
  - "Deterjan haznesine bulaşık makinesi deterjanı koy."
  - "Makineyi aç, bir program seç, BAŞLAT'a bas ve kapağı kapat."
  - "Programın kod vermeden bitip bitmediğini izle."
  - "Kod yine gelirse evin sigorta panelinden makinenin şalterini kapat."
  - "Samsung servisine başvur; kodu ve model adını bildir."
faq:
  - q: "Samsung bulaşık makinesinde HC hatası ne demek?"
    a: "Samsung, HC'yi (bazı modellerde HE) 'Yüksek sıcaklıkta ısıtma kontrolü' olarak tanımlıyor. Kılavuzun önerdiği ilk iş bir işlevsel kontrol: makine boşken deterjan ekleyip bir program çalıştırmak. Sorun sürerse şalter kapatılır ve Samsung servisine başvurulur."
  - q: "HC ile HE aynı şey mi?"
    a: "Samsung'un Türkiye destek sayfasındaki kod listesinde HC ve HE birlikte, aynı başlıkla geçiyor. 2017 tarihli bir Samsung kılavuzu HE'yi 'Isıtıcı hatası' olarak veriyor ve 'Isıtma 60 dakika boyunca sürüyor ancak beklenen sıcaklığa erişilmiyor' diye açıklıyor."
  - q: "HC rezistansın bozulduğu anlamına mı geliyor?"
    a: "Samsung'un Türkiye belgeleri kodu bir parça adıyla değil, ısıtma kontrolü olarak veriyor. Hangi parçanın sorumlu olduğunu koda bakarak söylemek mümkün değil; kılavuzdaki boş makine denemesinden sonra kod sürüyorsa bunu servis belirler."
  - q: "HC ile tC arasında fark var mı?"
    a: "Evet, kılavuzda ikisi ayrı satırlarda. HC ısıtma kontrolü; tC ise 'Termistör kontrolü', yani sıcaklık sensörüyle ilgili (kılavuzun ifadesiyle kısa ya da açık devre). tC için kılavuzda evde yapılacak bir adım yok, doğrudan yetkili servis öneriliyor."
images:
  coverAlt: "Kapağı açık, rafları boş bir bulaşık makinesi ve deterjan haznesinin yanında duran bir deterjan kutusu"
---

Ekranda **HC** yazıyor. Bazı Samsung modellerinde aynı durum **HE** olarak görünür. Samsung bu kodu **"Yüksek sıcaklıkta ısıtma kontrolü"** olarak tanımlıyor; yani kod, makinenin ısıtma kontrolüyle ilgili.

Bu kodda Samsung'un kılavuzu evde yapılacak tek ama net bir deneme tarif ediyor: **boş makinede, deterjanla bir program çalıştırmak.** Aşağıdaki adımlar bu denemeyi ve sonrasını anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** HC / HE = yüksek sıcaklıkta ısıtma kontrolü. Sıra: BAŞLAT'ı 3 saniye basılı tutup programı iptal et → bulaşıkları çıkar → deterjan koy → boş makinede bir program çalıştır. Kod yine gelirse şalteri kapat ve Samsung servisine başvur.

## HC'nin anlamı: Samsung ne diyor?

Samsung Türkiye'nin bulaşık makinesi destek sayfasındaki listede kod **HC, HE: Yüksek sıcaklıkta ısıtma kontrolü** olarak geçiyor. İncelediğimiz dört Samsung kullanım kılavuzunun bilgi kodu tablosunda HC satırı aynı talimatı veriyor:

> "İşlevsel kontrol. Bulaşık makinesi boşken, deterjan ekleyin ve bir program çalıştırın. Sorun devam ederse evinizin devre kesici paneline gidin ve bulaşık makinesinin devre kesicisini kapatın. Sonra, bir Samsung servis merkezine başvurun."

2017 tarihli bir Samsung kılavuzu aynı durumu **HE** ve **"Isıtıcı hatası"** adıyla veriyor, açıklaması da şöyle: *ısıtma 60 dakika boyunca sürüyor ancak beklenen sıcaklığa erişilmiyor.*

Kodun bir parça adı değil, bir **kontrol** adı olduğuna dikkat: Samsung'un Türkiye belgeleri hangi parçanın sorumlu olduğunu söylemiyor. Bunu servis belirler.

Diğer kodların karşılıkları için [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) yazımıza bakabilirsin.

## Adım adım: evde denenecekler

**1. Programı iptal et.** Samsung kılavuzuna göre çalışan bir programı iptal etmek ve makinenin suyunu boşaltmak için **BAŞLAT** düğmesini **üç saniye** basılı tutarsın.

**2. Makineyi boşalt.** Raflardaki bütün bulaşıkları çıkar. Kılavuzdaki deneme **boş makinede** yapılıyor.

**3. Deterjan koy.** Deterjan haznesine **bulaşık makinesi deterjanı** koy. Samsung yalnız bulaşık makinesi deterjanı kullanılmasını söylüyor; diğer deterjanlar aşırı köpük yapar.

**4. Bir program başlat.** Makineyi **GÜÇ** düğmesiyle aç, bir program seç ve **BAŞLAT**'a bas; ardından kapağı kapat. Kılavuz belirli bir program adı vermiyor.

**5. Sonucu izle.** Program **kod vermeden** bitiyorsa makine bu denemeyi geçmiş demektir; sonraki yıkamalarda kodun tekrar gelip gelmediğini takip et.

**6. Kod yine gelirse şalteri kapat.** Kılavuzun talimatı açık: sorun devam ederse evin **sigorta panelinden** bulaşık makinesinin **şalterini** kapat.

**7. Servise başvur.** Ardından bir **Samsung servis merkezine** başvur. Ekrandaki kodu (HC ya da HE), model adını ve boş makine denemesinin sonucunu söylemen teşhisi hızlandırır.

⚠️ Isıtma tarafındaki parçalar makinenin gövdesinin içindedir ve kullanıcı bakımına dahil değildir. Evde yapılacak iş kılavuzdaki bu denemeyle sınırlı.

## HC ile tC karıştırılmasın

Samsung kılavuzlarının kod tablosunda ısıtmayla ilgili iki ayrı satır var:

| Kod | Kılavuzdaki başlık | Evde yapılacak |
|---|---|---|
| **HC** (HE) | Yüksek sıcaklık ısıtma kontrolü | Boş makinede deterjanla bir program; sürerse şalter ve servis |
| **tC** (tE) | Termistör kontrolü: sıcaklık sensörü kırık (kısa ya da açık devre) | Kılavuz evde bir adım vermiyor; yetkili servis |

Ekranda **tC** ya da **tE** görüyorsan boş makine denemesi kılavuzda tarif edilmiyor; doğrudan servise başvur.

## Ne zaman servis çağırmalısın?

Boş makinede deterjanla çalıştırılan program yine HC ile duruyorsa evde yapılacak iş bitmiştir. Samsung'un kılavuzu ayrıca herhangi bir bilgi kodu ekranda görünmeye devam ederse **yetkili bir Samsung servis merkezine** başvurulmasını söylüyor.

Bulaşıklar sıcak çıkmıyor ya da kurumuyor ama ekranda kod yoksa konu farklı olabilir; [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) yazımıza bakabilirsin.

## Kısaca

HC, Samsung bulaşık makinesinin ısıtma kontrolünde bir sorun gördüğünü söylüyor. Evde yapabileceğin, kılavuzun tarif ettiği tek deneme: programı iptal et, makineyi boşalt, deterjan koy ve bir program çalıştır. Kod geri gelirse şalteri kapat ve Samsung servisine başvur.
