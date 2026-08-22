---
title: "Vestel çamaşır makinesi hata kodları: E01, E02, E03"
description: "Vestel çamaşır makinen E01, E02 ya da E03 mü gösteriyor? Kapı, su alma ve tahliye kodlarının anlamı, evde yapılacak kontroller ve servis sınırı."
slug: "vestel-camasir-makinesi-hata-kodlari"
date: "2026-08-20"
category: "Çamaşır makinesi"
# 🔴 22 Ağu 2026 — İKİ DÜZELTME (kod tablosu denetimi, TARAMA-1 kalan tur).
# Kaynak: 5 resmî Vestel kılavuzu, "10. OTOMATİK ARIZA UYARILARI" tablosu (birebir aynı).
#   E01 → "ya da kilit devreye girmiyor" ibaresi Vestel metninde YOK. Vestel'in
#         ifadesi tek cümle: "Makinenizin kapısı açık kalmış." Kilit iddiası bizimdi.
#   E04 → EKSİK YAYINDI, eklendi: "Makinenizde aşırı miktarda su var."
# 📌 Vestel çamaşır tablosu yalnız E01-E04'ten ibaret; E05 ve sonrası resmî kılavuzda yok.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Sığ bir kap", "Küçük fırça", "Nemli bez"]
steps:
  - "Makineyi kapat ve fişini çek. Islak zemin ve elektrik aynı karede olmamalı; makine sıcaksa bir süre bekle."
  - "Kapağı kontrol et ve tam kapat. Kenarına sıkışmış çamaşır ucu, çorap ya da lastik parçası var mı bak; conta yüzeyindeki kalıntıyı nemli bezle sil ve kapağı \"klik\" sesini duyana kadar bastırarak kapat."
  - "Musluğu ve basıncı doğrula. Musluk tam açık mı? Su kesintisi ya da düşük basınç var mı — başka bir musluktan test et."
  - "Giriş hortumuna bak. Makinenin arkasında bükülmüş ya da ezilmiş olmasın."
  - "Giriş süzgecini temizle. Musluğu kapat, hortumun musluk tarafını sök ve bağlantı ağzındaki küçük süzgeci akan suyun altında fırçala."
  - "Pompa filtresini çıkar ve temizle. Alt ön köşedeki kapağı aç, önüne geniş bir havlu ser ve sığ bir kap tut; filtreyi saat yönünün tersine çevirip çıkar, tüy ve yabancı cisimleri temizle, yuvasına parmağınla değil gözle bak, sonra sonuna kadar çevirerek sıkıca geri tak."
  - "Tahliye hortumunu ve gider hattını kontrol et. Hortum makinenin arkasında bükülmüş, ezilmiş ya da halının altında kalmış olmasın; lavabo gideri yavaş akıyorsa önce onu çöz."
  - "Fişi tak ve kısa bir programla dene. Kod tekrar geliyorsa kapı kilidi, su giriş valfi, tahliye pompası ve elektronik kart tarafı servise aittir."
faq:
  - q: "Vestel çamaşır makinesi E03 hatası ne demek?"
    a: "E03, makinenin içindeki suyu boşaltamadığını gösteren tahliye hatasıdır. En sık sebep tüy ve yabancı cisimle tıkanmış pompa filtresi ya da bükülmüş/tıkalı tahliye hortumudur. Filtre ve hortum temizliğiyle çoğu zaman evde, ücretsiz çözülür; bunlar temizken tekrar ediyorsa pompa tarafı servis işidir."
  - q: "Vestel E01 hatası neden çıkar?"
    a: "Vestel'in kendi ifadesi tek cümle: makinenizin kapısı açık kalmış. Makine güvenlik gereği başlamaz. Çoğu zaman kapağa sıkışan bir çamaşır ucu ya da tam kapanmamış kapak suçludur; kapağı 'klik' sesiyle tam kapatmak genelde yeterlidir. Kapak tam kapandığı hâlde kod sürüyorsa kilit mekanizması servislik olabilir — ama bunu kod söylemiyor, biz eleme yoluyla varıyoruz."
  - q: "Vestel çamaşır makinesinde hata kodu nasıl sıfırlanır?"
    a: "Makineyi kapat, fişini çekip yaklaşık beş dakika bekle ve tekrar takıp programı yeniden başlat. Reset kodu siler ama sebebi ortadan kaldırmaz; filtre hâlâ tıkalıysa ya da kapı kilitlenemiyorsa kod geri gelir. Reset, tek seferlik elektronik takılmaları elemek için bir test adımıdır."
  - q: "Ekrandaki kod bu yazıdaki listede yok, ne yapmalıyım?"
    a: "Vestel uzun yıllardır çok sayıda seri üretiyor ve kod tablosu nesilden nesile değişiyor; aynı numara farklı serilerde farklı anlama gelebiliyor. Bu yüzden doğrulayamadığımız kodlara uydurma anlam vermiyoruz. Kodu ve model bilgini Benservis'e yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren."
images:
  coverAlt: "Çamaşır makinesinin kumanda paneli ve deterjan çekmecesi alt açıdan"
---

Makine tam sıkmaya geçecekken durdu, ekranda **E03** yazıyor ve kazanın içi su dolu. Ya da daha programın başında **E01** verip hiç başlamadı. Vestel çamaşır makineleri arızayı E önekli kodlarla bildirir ve iyi haber şu: en sık çıkan üç kodun — **E01, E02, E03** — üçü de önce evde, hiçbir şey sökmeden yapılabilecek kontrollerle karşılanır. Bu rehberde her kodun anlamını, kendin bakabileceğin yerleri ve işin servise geçtiği çizgiyi anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ Vestel'de kod tablosu **modele ve nesle göre değişir**; aynı numara eski ve yeni serilerde farklı anlama gelebilir. Aşağıdakiler en yaygın karşılıklardır. Ekrandaki kodun anlamından emin olmak için model bilginle birlikte Benservis'e yazabilirsin.

## Adım adım: E01, E02 ve E03 için evde denenecekler

**1. Makineyi kapat ve fişini çek.** Islak zemin ve elektrik aynı karede olmamalı; makine sıcaksa bir süre bekle.

**2. Kapağı kontrol et ve tam kapat.** Kenarına sıkışmış çamaşır ucu, çorap ya da lastik parçası var mı bak; conta yüzeyindeki kalıntıyı nemli bezle sil ve kapağı "klik" sesini duyana kadar bastırarak kapat.

**3. Musluğu ve basıncı doğrula.** Musluk tam açık mı? Su kesintisi ya da düşük basınç var mı — başka bir musluktan test et.

**4. Giriş hortumuna bak.** Makinenin arkasında bükülmüş ya da ezilmiş olmasın.

**5. Giriş süzgecini temizle.** **Musluğu kapat**, hortumun musluk tarafını sök ve bağlantı ağzındaki küçük süzgeci akan suyun altında fırçala.

**6. Pompa filtresini çıkar ve temizle.** Alt ön köşedeki kapağı aç, önüne geniş bir havlu ser ve sığ bir kap tut; filtreyi saat yönünün tersine çevirip çıkar, tüy ve yabancı cisimleri temizle, yuvasına parmağınla değil gözle bak, sonra sonuna kadar çevirerek sıkıca geri tak.

**7. Tahliye hortumunu ve gider hattını kontrol et.** Hortum makinenin arkasında bükülmüş, ezilmiş ya da halının altında kalmış olmasın; lavabo gideri yavaş akıyorsa önce onu çöz.

**8. Fişi tak ve kısa bir programla dene.** Kod tekrar geliyorsa kapı kilidi, su giriş valfi, tahliye pompası ve elektronik kart tarafı servise aittir.

## Özet tablo

🛠️ = çoğu zaman kendin çözebilirsin · 🔧 = servis gerekir

| Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| **E01** | Kapı açık kalmış | 🛠️ Kapağı "klik" sesiyle tam kapat |
| **E02** | Su alamıyor (musluk, basınç, giriş süzgeci) | 🛠️ Musluğu, hortumu ve süzgeci kontrol et |
| **E03** | Su atamıyor (tahliye) | 🛠️ Pompa filtresini ve hortumu temizle |
| **E04** | Makinede aşırı miktarda su var | 🔧 Programı iptal et, servisle konuş |

> 📌 Vestel'in yayımladığı çamaşır makinesi tablosu bu **dört kodla sınırlıdır**; `E05` ve sonrası resmî kılavuzda geçmez. `E04` bu yazıda ilk kez yayımlanıyor — beş resmî kılavuzda da var, bizde eksikti.

## E01 — Kapı kapanmadı ya da kilitlenmedi

Makine, kapı kilidinden "kilitlendim" sinyali almadan asla su almaz; E01 bu sinyalin gelmediğini söyler.

**Kendin kontrol et:** Kapağı aç ve kenarına sıkışmış çamaşır ucu, çorap ya da lastik parçası olup olmadığına bak. Kapağı bu kez bilinçli biçimde, "klik" sesini duyana kadar bastırarak kapat. Conta yüzeyinde kapanmayı engelleyen kalıntı varsa nemli bezle sil. Kapı tam kapandığı hâlde kod sürüyorsa kilit mekanizması ya da elektroniği görevini yapmıyor olabilir — orası servis işidir; kilidi zorlamak ya da kurcalamak kapağı açılamaz hâle getirebilir.

## E02 — Su alamıyor

Makine programı başlatmış ama gereken sürede içeri su girmemiştir.

**Kendin kontrol et:** Önce en basiti: musluk tam açık mı? Evde su kesintisi ya da düşük basınç var mı — başka bir musluktan test et. Ardından makinenin arkasındaki giriş hortumuna bak: bükülmüş ya da ezilmiş olmasın. Son adım giriş süzgecidir: musluğu kapat, hortumun musluk tarafını sök ve bağlantı ağzındaki küçük süzgeci akan suyun altında fırçala. Bunların hepsi kullanıcı seviyesinde işlerdir.

⚠️ Hortumu sökmeden önce musluğu mutlaka kapat; aksi hâlde basınçlı su etrafa dağılır.

Musluk açık, basınç normal, hortum ve süzgeç temiz — kod hâlâ geliyorsa su giriş valfi tarafında iş vardır; valf servise aittir.

## E03 — Su atamıyor: en sık ve en çok kendin çözülen kod

E03, yıkama suyunun gereken sürede boşaltılamadığını söyler. Vestel kullanıcılarının en sık gördüğü kodlardan biridir ve suçlu neredeyse her zaman şu üçünden biridir: **pompa filtresi, tahliye hortumu, gider hattı**.

**Kendin kontrol et — filtre temizliği:**

1. Makineyi kapat ve **fişini çek**.
2. Alt ön köşedeki küçük kapağı aç — pompa filtresi buradadır ve kullanıcının erişimine ayrılmıştır.
3. Önüne geniş bir havlu ser, sığ bir kap bulundur: filtreyi çevirince kazanda kalan su buradan gelir, miktarı şaşırtabilir.
4. Filtreyi saat yönünün tersine çevirip çıkar; tüy, bozuk para, toka, düğme ne varsa temizle.
5. Filtre yuvasının içine parmağınla değil, gözle bak; görünür bir cisim varsa al.
6. Filtreyi sonuna kadar çevirip sıkıca geri tak — gevşek filtre bir sonraki yıkamada su kaçırır.

Ardından **tahliye hortumunu** kontrol et: makinenin arkasında bükülmüş, ezilmiş ya da halının altında kalmış olmasın. Hortumun bağlandığı **gider hattı** tıkalıysa su geri teper; lavabo gideri yavaş akıyorsa önce onu çözmek gerekir.

⚠️ Filtre bölgesinde çalışırken fişin çekili olması pazarlık konusu değildir; ıslak zemin ve elektrik aynı karede olmamalı.

Filtre ve hortum temizken E03 tekrar ediyorsa sıra **tahliye pompasına** gelir: pervanesi kırılmış ya da motoru zayıflamış olabilir. Pompa kontrolü ve değişimi tablanın altına inmeyi gerektirir — orası servisin alanıdır.

## Kodun listede yok mu? (E04 ve sonrası)

Vestel'in farklı nesillerinde E04 ve üzeri kodlar **aynı numarayla farklı arızaları** gösterebiliyor; bir seride ısıtma sorununu bildiren numara, başka seride başka anlama gelebiliyor. Bu yüzden burada yalnızca anlamı yaygın biçimde sabit olan üç kodu açıkladık; gerisi için tek güvenilir kaynak cihazının kendi kullanım kılavuzu ve model bazlı teşhistir. Ekrandaki kodu ve makinenin model bilgisini Benservis'e yaz; uydurma anlam yerine modeline göre olası arızayı ve tahmini maliyet bandını ücretsiz gör.

## Hangi noktadan sonra servis işi?

Kapak ve conta kontrolü, musluk-hortum-süzgeç hattı, pompa filtresi temizliği ve reset — bunların hepsi senin güvenli alanın ve E01/E02/E03 vakalarının büyük kısmını kapatıyor. Kapı kilidi mekanizması, su giriş valfi, tahliye pompası ve elektronik kart ise net biçimde servise ait. Kural basit: **kapak ve panel seviyesi kullanıcıya, tablanın altı servise.**

Markadan bağımsız bir bakış için sitemizdeki marka marka çamaşır makinesi hata kodları rehberi bu yazının kardeşidir; evde ikinci bir makinen varsa oraya da göz atabilirsin. Belirtini benservis.com'a yaz, tahmini maliyeti ücretsiz gör, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
