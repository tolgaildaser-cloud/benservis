---
title: "Daikin klima E7 hatası"
description: "Daikin klimada E7, dış ünite fanıyla ilgili bir kod. Daikin'in önerdiği kesici kapatma, yabancı cisim ve hava yolu kontrolü ile servis sınırı adım adım."
slug: "daikin-klima-e7-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout; Sensira kod tablosu glif olduğu için pdftoppm ile görüntüden okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için. PDF'ler daikin.com.tr/daikin-kullanim-kilavuzlari sayfasının bağladığı st-daikin.mncdn.com ve daikin.eu'dan:
#  S) Sensira FTXF20~42E5V1B  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  16 s.  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  U) Ururu Sarara  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf  48 s.  md5 55395d5dca925e6c5a3e29a64e180cd5  (sayfa = PDF sayfası)
#  M) FTXM-M/CTXM-M  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1
#  F) FTXF50~71 başvuru  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
# E7 satırı: S s.13 "E7 | DC fan kilidi" (Dış ünite grubu) · M s.45 "E7 DC FAN MOTORU ARIZALI" (DIŞ ÜNİTE)
#   U s.41: "E7 | Yabancı bir cisim dış ünite fanına yapışmış durumda mı? • Devre kesiciyi kapatın ve yabancı cisimleri çıkarın."
#   + "Devre kesiciyi kapatın ve yeniden açın. Ardından işlemi başlatın." · Lamba sabit → kullanmayı sürdürün; tekrar yanıp söner → model adı + yetkili servis.
# Hava yolu: M s.42 "İç ve dış ünitelerin hava giriş veya çıkışını engelleyen bir şey var mı? Kesiciyi kapalı konuma getirin ve tüm engelleri kaldırın..."
# Güvenlik: S s.11 "Isı eşanjörü kanatçıklarına DOKUNMAYIN ... keskindir" · S s.12 dış fan işletim durduktan sonra 30 sn döner; dış sıcaklık yüksekken koruma için dönebilir.
# ⛔ Bizim güvenlik sınırımız (#31, belge iddiası DEĞİL, gövdede öyle sunuldu): kapak açma, ızgaradan el/alet uzatma, dış üniteye tırmanma/pencereden sarkma YOK.
# Bilerek YAZILMAYANLAR: fan motoru/kart/kondansatör teşhisi, fanı elle çevirme, dış üniteyi yıkama.
# Alıntı denetim tablosu: daikin-klima-e7-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "El feneri"]
steps:
  - "Klimayı kumandadan durdur ve devre kesicisini kapat."
  - "Dış üniteye, bulunduğun yerden güvenle görebildiğin kadarıyla bak; ızgaraya takılmış poşet, yaprak ya da dal var mı kontrol et."
  - "Izgaranın dışından elle rahatça alınabilen cisimleri al; kapağı açma, ızgaranın arasından el ya da alet uzatma."
  - "Dış ünitenin hava giriş ve çıkışını kapatan eşya, branda ya da kutuyu kaldır."
  - "Kesiciyi aç ve klimayı kumandayla yeniden çalıştır."
  - "İşletim lambası yeniden yanıp sönerse ya da E7 geri gelirse model adıyla yetkili servise başvur."
faq:
  - q: "Daikin klimada E7 hatası ne demek?"
    a: "E7, Daikin kılavuzlarındaki hata kodu tablosunun dış ünite bölümündedir. Sensira kılavuzunda karşılığı DC fan kilidi, FTXM kılavuzunda DC fan motoru arızalı olarak geçer. Yani kod dış ünitenin fanıyla ilgilidir."
  - q: "E7'de servis çağırmadan önce ne yapabilirim?"
    a: "Daikin'in Ururu Sarara kılavuzu E7 için tek bir soru soruyor: dış ünite fanına yabancı bir cisim yapışmış durumda mı? Talimat, devre kesiciyi kapatıp yabancı cisimleri çıkarmak, sonra kesiciyi açıp işlemi yeniden başlatmak. Sen bunu yalnız ızgaranın dışından, güvenle ulaşabildiğin yerde yap; kapak açmak ve fana uzanmak servisin işidir."
  - q: "Dış ünitem cephede, balkondan ulaşamıyorum. Ne yapmalıyım?"
    a: "Dış üniteye tırmanma ve pencereden sarkma. Kesiciyi kapalı tut ve yetkili servise E7 kodunu, ünitenin model adını ve dış ünitenin yerini bildir. Daikin'in kılavuzu, kendi başına gideremediğin durumlarda montajcıya belirtileri, tam model adını ve mümkünse kurulum tarihini iletmeni istiyor."
  - q: "Klimayı kapattım ama dış ünite fanı dönmeye devam ediyor, bu arıza mı?"
    a: "Tek başına değil. Daikin'in Sensira kılavuzuna göre işletim durduktan sonra dış fan sistem koruması için 30 saniye daha döner; dış sıcaklık çok yüksekken klima çalışmıyorken de koruma için dönmeye başlayabilir. Bu belirtiler kılavuzda sistem arızası olmayan durumlar arasında sayılıyor."
images:
  coverAlt: "Balkon zemininde duran klima dış ünitesi; fan ızgarasına rüzgârla savrulmuş bir naylon poşet ve birkaç kuru yaprak takılmış"
---

Klima durdu, iç ünitenin işletim lambası yanıp sönüyor ve kumandadan okuduğun kod **E7**. Daikin'in kullanım kılavuzlarındaki tabloda bu kod **dış ünite** bölümündedir: Sensira kılavuzunda **"DC fan kilidi"**, FTXM kılavuzunda **"DC fan motoru arızalı"** olarak geçer. Daikin'in Ururu Sarara kılavuzu bu kod için kullanıcıya bir kontrol veriyor: **"Yabancı bir cisim dış ünite fanına yapışmış durumda mı?"** Bu yazıda o kontrolü, güvenli sınırıyla birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E7 = Daikin'e göre dış ünite fanıyla ilgili kod (DC fan kilidi / fan motoru). Sıra şu: klimayı durdur, **kesiciyi kapat** → dış ünitenin ızgarasına dışarıdan bak → elle rahatça alınan poşet, yaprak gibi cisimleri al → hava yolunu aç → kesiciyi aç, yeniden çalıştır. E7 geri geliyorsa → yetkili servis.

## Adım adım: evde denenecekler

**1. Klimayı durdur, kesiciyi kapat.** Önce kumandadan kapat, ardından klimanın **devre kesicisini** kapat. Daikin'in E7 talimatı da bu adımla başlıyor.

**2. Dış üniteye dışarıdan bak.** Dış ünite balkonda ya da zemin seviyesindeyse ızgarasının önüne geç ve bak: fana ya da ızgaraya takılmış **poşet, yaprak, dal** gibi bir şey var mı? Gerekirse el feneri kullan. Dış ünite cephedeyse ya da ulaşmak için bir yere çıkman gerekiyorsa bu adımı atla, doğrudan son adıma geç.

**3. Yalnız dışarıdan alınabileni al.** Daikin'in talimatı yabancı cisimlerin çıkarılması. Sen bunu **ızgaranın dışından elle rahatça alınabilen** cisimlerle sınırla. Ünitenin kapağını açma, ızgaranın arasından el ya da alet uzatma; Daikin'in kılavuzu ısı eşanjörü kanatçıklarının **keskin** olduğunu ve dokunulmaması gerektiğini de yazıyor.

**4. Hava yolunu aç.** Daikin'in FTXM kılavuzu, çalışma aniden durup lamba yanıp söndüğünde iç ve dış ünitenin **hava giriş ya da çıkışını engelleyen bir şey** olup olmadığına bakılmasını, kesici kapalıyken engellerin kaldırılmasını istiyor. Dış ünitenin önüne dayanmış eşya, branda ya da kutuyu kaldır.

**5. Yeniden çalıştır.** Kesiciyi aç ve klimayı kumandayla yeniden çalıştır. Ururu Sarara kılavuzuna göre işletim lambası bir süre sonra **sabit yanıyorsa** klimayı kullanmayı sürdürebilirsin.

**6. Geri geliyorsa servise.** İşletim lambası **tekrar yanıp sönüyorsa** ya da kumandada yine E7 okuyorsan Daikin'in talimatı açık: model adını kontrol et ve **yetkili servisle** temasa geç.

## E7 neyi söylüyor, neyi söylemiyor?

Daikin'in kod tablosu kodları üç gruba ayırıyor: sistem, iç ünite ve dış ünite. E7 dış ünite grubundadır; aynı grupta dış ünite kartı (E1), kompresör kodları (E5, E6) ve dış ünite sensörleri de yer alır. Kılavuzlar kodu modele göre **"DC fan kilidi"** ya da **"DC fan motoru arızalı"** diye adlandırıyor.

Kullanıcıya düşen kontrol tektir: ızgaraya takılan yabancı cisim. Kod bu kontrolden ve yeniden başlatmadan sonra da geliyorsa Daikin'in talimatı yetkili servistir. Dış ünitenin çevresini düzenli temiz tutmak için [klima dış ünite temizliği](/blog/klima-dis-unite-temizligi/) yazısına, diğer Daikin kodları için [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına bakabilirsin.

## Arıza olmayan fan davranışları

E7 ile karıştırılmaması gereken iki durum Daikin'in kılavuzunda "sistem arızası olmayan belirtiler" arasında sayılıyor:

- **İşletim durduktan sonra** dış fan, sistem koruması için **30 saniye** daha döner.
- **Klima çalışmıyorken**, dış sıcaklık çok yüksek olduğunda dış fan sistem koruması için dönmeye başlayabilir.

## Nerede durmalısın

⛔ **Kendin-çöz sınırı burada biter.** Kapak açmak, fanı elle çevirmeye çalışmak, ızgaranın arasına uzanmak ve dış üniteye ulaşmak için tırmanmak kullanıcının işi değildir. Daikin'in kılavuzu da sistemin **yetkili bir servis elemanı tarafından onarılmasını** istiyor.

## Servisi aramadan önce iki dakikalık özet

1. Kumandadan okunan kod gerçekten E7 mi?
2. Kesici kapatıldıktan sonra dış ünitenin ızgarasına dışarıdan bakıldı mı?
3. Izgarada ya da ünitenin önünde bir engel vardı mı, kaldırıldı mı?
4. Kesici açılıp yeniden çalıştırınca lamba sabit mi yanıyor, yine mi yanıp sönüyor?
5. Ünitenin tam model adı ve dış ünitenin yeri (balkon, cephe, çatı) belli mi?

Ekrandaki kodu ve klimanın modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
