---
title: "Bosch çamaşır makinesi E32 hatası"
description: "Bosch'ta E32 (yeni modellerde H:32 ya da E:60-2B): çamaşırlar eşit dağılmadığı için sıkma durdu. Bosch'a göre arıza değil; ne yapılır adım adım."
slug: "bosch-camasir-makinesi-e32-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout ile okundu, yeni nesil tablo satırları sayfa görüntüsüyle teyit edildi.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  E) WAT...      https://media3.bosch-home.com/Documents/9001006315_I.pdf  36 s.  md5 ae469964e1edcc11a031b297303113a8  (sayfa atıfları bu belgeye göre)
#  F) WIW...V2    https://media3.bosch-home.com/Documents/9001358632_A.pdf  56 s.  md5 3f82f8e669abe64a21dfa431933dc267
#  J) WGB244A0TR  https://media3.bosch-home.com/Documents/9001708433_H.pdf  56 s.  md5 a02d83edad66dc95cd9392b467b767f1
#  I) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
# E s.25 birebir: "E:32 Program sonunda Sona erdirme ile değişimli olarak yanıp söner. Hata yok – Denge kontrol sistemi sıkma işlemini çamaşırlar eşit dağılmadığı için durdurdu.
#   Küçük ve büyük çamaşırları tambur içinde eşit dağıtınız. Gerekirse çamaşırlar yeniden sıkılmalıdır."  (F s.49 aynı; "Bitiş ile değişimli")
# J s.43: "H:32 Cihaz, çamaşırların eşit olmayan dağılımı nedeniyle sıkma döngüsünü iptal etti. ▶ Tamburun içindeki çamaşırları yeniden dağıtınız."
# I s.41: "E:60 / -2B Denge kontrol sistemi sıkma işlemini çamaşırlar eşit dağılmadığı için durdurdu. ▶ Tamburun içindeki çamaşırları yeniden dağıtınız.
#   Not: Mümkün olduğunca büyük ve küçük çamaşırları birlikte tambura yerleştiriniz. Farklı büyüklükteki çamaşırlar sıkma işlemi esnasında daha iyi dağılır."
# Üç kod aynı durumu anlatıyor → brif gereği TEK sayfa.
# Bilerek YAZILMAYANLAR: amortisör/rulman/motor teşhisi (belgede yok); ayak ayarının nasıl yapılacağı (montaj bölümü, yalnız "kontrol et" denildi); nakliye emniyetinin söküm tarifi.
# Alıntı denetim tablosu: bosch-camasir-makinesi-e32-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Programın bitmesini bekle ve kapağı aç."
  - "Tamburdaki çamaşırları elinle açıp tambur içinde eşit dağıt."
  - "Tek başına büyük bir parça varsa yanına küçük çamaşırlar ekle."
  - "Tamburun, programın maksimum dolum miktarını aşmadığından emin ol."
  - "Kapağı kapat ve çamaşırları yeniden sıkmak için Sıkma programını başlat."
  - "Sıkmada titreşim ve ses de varsa cihazın düz durduğunu, ayaklarının sabit olduğunu ve taşıma emniyetlerinin çıkarıldığını kontrol et."
faq:
  - q: "Bosch çamaşır makinesinde E32 ne demek?"
    a: "Bosch kılavuzunda E:32 için ilk yazılan şey 'Hata yok' ifadesidir. Denge kontrol sistemi, çamaşırlar tambur içinde eşit dağılmadığı için sıkma işlemini durdurmuştur. Kod program sonunda, bitiş göstergesiyle dönüşümlü yanıp söner."
  - q: "H:32 ve E:60-2B de aynı şey mi?"
    a: "Evet, Bosch'un yeni nesil kılavuzlarında aynı durum bu kodlarla yazılıyor. WGB244A0TR kılavuzunda H:32, WGA244A0TR kılavuzunda E:60-2B; ikisinin de karşılığı çamaşırların eşit dağılmaması yüzünden sıkmanın durdurulmasıdır ve ikisinde de talimat çamaşırları yeniden dağıtmaktır."
  - q: "E32'den sonra çamaşırlar ıslak çıktı, ne yapmalıyım?"
    a: "Bosch kılavuzuna göre küçük ve büyük çamaşırlar tambur içinde eşit dağıtılır ve gerekirse çamaşırlar yeniden sıkılır. Kılavuz, ıslak çıkan çamaşırlarda çok düşük devir sayısı ya da modele bağlı olarak kırışıklık önleme seçeneği seçilmiş olup olmadığına da bakılmasını istiyor."
  - q: "Makine sıkmada birkaç kez durup yeniden başlıyor, bu arıza mı?"
    a: "Bosch bunu arıza saymıyor. Kılavuzdaki karşılığı: denge kontrol sistemi dengesizliği düzeltiyor. Program süresinin uzaması da aynı nedenle olabilir; sistem çamaşırları birkaç kez dağıtarak dengesizliği düzeltir."
images:
  coverAlt: "Açık kapaklı bir çamaşır makinesinin tamburunda tek bir tarafa toplanmış ıslak havlu ve nevresim"
---

Program bitti ama çamaşırlar beklediğinden ıslak; ekranda **E32** yanıp sönüyor, belki bitiş göstergesiyle sırayla. Bosch'un kullanım kılavuzunda bu kodun karşısında yazan ilk ifade şu: **"Hata yok."** Açıklaması da hemen arkasından gelir: **denge kontrol sistemi, çamaşırlar eşit dağılmadığı için sıkma işlemini durdurdu.** Yani makine bozulmadı; dengesiz bir yükle yüksek devirde dönmemeyi seçti. Yeni nesil Bosch'larda aynı durum **H:32** ya da **E:60-2B** olarak görünür.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E32 · H:32 · E:60-2B = çamaşırlar eşit dağılmadığı için sıkma durdu; Bosch'a göre arıza değil. Sıra şu: kapağı aç → çamaşırları eşit dağıt → tek büyük parçaya küçükler ekle → aşırı dolum yok mu bak → Sıkma programıyla yeniden sık.

## Adım adım: evde denenecekler

**1. Programın bitmesini bekle.** E:32, Bosch kılavuzuna göre **program sonunda** bitiş göstergesiyle dönüşümlü yanıp söner. Program bittiğinde kapağı aç.

**2. Çamaşırları yeniden dağıt.** Bosch'un üç kılavuzdaki talimatı aynı: **tamburun içindeki çamaşırları yeniden dağıt.** Birbirine dolanmış ya da tek tarafa toplanmış çamaşırları elinle aç ve tambura eşit yay.

**3. Büyük parçayı yalnız bırakma.** WGA244A0TR kılavuzunun notu: **mümkün olduğunca büyük ve küçük çamaşırları birlikte** tambura yerleştir; farklı büyüklükteki çamaşırlar sıkma işlemi esnasında daha iyi dağılır. Bosch'un WIW kılavuzu bunu tersinden de söylüyor: **teker teker yıkanan çamaşırlar dengesiz dönmeye** neden olabilir. Tek bir paspas, bornoz ya da nevresim yıkıyorsan yanına birkaç küçük parça ekle.

**4. Dolum miktarına bak.** Bosch, **belirtilen maksimum dolum miktarına** dikkat edilmesini istiyor; aşırı doldurma yıkama sonucunu kötü etkiler. Tambur tıka basa doluysa bir kısmını çıkar.

**5. Yeniden sık.** Kılavuzun son cümlesi: **gerekirse çamaşırlar yeniden sıkılmalıdır.** Kapağı kapat ve **Sıkma** programını başlat.

**6. Titreşim varsa makinenin duruşuna bak.** Bosch'un tablosunda sıkma sırasında titreşim, hareket ve yüksek ses için üç kontrol var: cihaz **doğru hizalanmış** mı, **ayakları sabitlenmiş** mi, **taşıma emniyetleri çıkarılmış** mı? Hizalama ve ayak ayarı için kendi modelinin kılavuzundaki kurulum bölümüne bak.

## E32 neden "hata yok" deniyor?

Bosch'un kılavuzlarında sıkmayla ilgili birkaç durum, arıza tablosunda yer aldığı hâlde açıkça **"Hata yok"** diye başlar:

- **Birden fazla kez sıkma:** denge kontrol sistemi dengesizliği düzeltiyor.
- **Program süresi normalden uzun:** sistem çamaşırları birkaç kez dağıtarak dengesizliği düzeltiyor; köpük kontrol sistemi devreye girip ek bir durulama da açmış olabilir.
- **Yüksek sıkma devrine ulaşılamadı:** yeni nesil kılavuza göre cihaz, dengesizliği telafi etmek için sıkma devrini düşürür.

E32 bu ailenin son halkasıdır: sistem dengesizliği düzeltemediğinde sıkmayı durdurur ve seni haberdar eder.

## Çamaşırlar ıslak çıkıyorsa ama kod yoksa

Bosch'un tablosu "sıkma sonucu tatmin edici değil, çamaşırlar ıslak ya da çok nemli" durumu için E32 ile aynı açıklamayı veriyor ve iki soru ekliyor:

- **Çok düşük devir sayısı** mı seçildi?
- Modele bağlı olarak **kırışıklık önleme** seçeneği mi seçildi?

Bu iki ayar sıkmayı bilerek hafifletir. Panel işaretlerinin ne anlama geldiği için: [Bosch çamaşır makinesi sembolleri ve anlamları](/blog/bosch-camasir-makinesi-sembolleri-ve-anlamlari/).

## Sınır nerede biter

Çamaşırlar eşit dağıtılmış, yük uygun, makine düz duruyor ve sıkma hâlâ her programda duruyorsa, sebep artık yükle açıklanamaz. Bosch kılavuzunun arıza bölümündeki uyarı açık: usulüne uygun olmayan onarımlar tehlikelidir, onarımı yalnız bunun eğitimini almış uzman personel yapabilir. Sıkmadaki ses ve titreşimin genel eleme sırası için: [Çamaşır makinesi sıkarken ses ve titreşim](/blog/camasir-makinesi-ses-titresim/).

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **yük ve yerleşim kullanıcıya; makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Kod hangisi: E32, H:32 ya da E:60-2B?
2. Tamburda tek bir büyük parça mı vardı, çamaşırlar dolanmış mıydı?
3. Çamaşırlar yeniden dağıtılıp Sıkma programı çalıştırıldı mı?
4. Makine düz duruyor mu, taşıma emniyetleri çıkarılmış mı?

Bosch'un yayımladığı diğer kodlar için: [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/).

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
